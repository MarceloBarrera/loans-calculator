import { useState, useEffect, useReducer, useCallback } from "react";

import { loansReducer, initialState, ActionTypes } from "./LoansReducer";
import fetchLimitations from "./Api";

import BusinessLoans from "./businessLoan/BusinessLoan";
import RevolvingCreditFacility from "./revolvingCreditFacility/RevolvingCreditFacility";
import "./Loans.css";

const Loans = () => {
  const [amount, setAmount] = useState<number>(10000);
  const [duration, setDuration] = useState<number>(4);

  const [state, dispatch] = useReducer(loansReducer, {
    ...initialState,
  });

  const loadData = useCallback(async () => {
    try {
      dispatch({ type: ActionTypes.SET_START_FETCHING });
      const limitations = await fetchLimitations();
      dispatch({ type: ActionTypes.SET_LIMITATIONS, payload: limitations });
      dispatch({ type: ActionTypes.SET_END_FETCHING });
    } catch {
      dispatch({ type: ActionTypes.FETCHING_FAILED });
    }
  }, []);

  useEffect(() => {
    (async function () {
      loadData();
    })();
  }, [loadData]);

  const handleAmount = (event: any) => {
    setAmount(parseInt(event.target.value));
  };

  const handleDuration = (event: any) => {
    setDuration(parseInt(event.target.value));
  };

  return (
    <>
      <div className="container-loan">
        <h3>Your loan</h3>

        <div className="loan-request">
          <label htmlFor="amountRequested">Amount requested:</label>
          <input
            type="number"
            id="amountRequested"
            value={amount}
            onChange={handleAmount}
          ></input>
          <span>(in £)</span>

          <label htmlFor="durationRequested">Duration:</label>
          <input
            type="number"
            id="durationRequested"
            value={duration}
            onChange={handleDuration}
          ></input>
          <span>(in months)</span>
        </div>

        <div className="loan-calculations">
          {state.isFetching ? (
            <p>Fetching limitations...</p>
          ) : (
            <>
              <RevolvingCreditFacility
                amountRequested={amount}
                duration={duration}
                limitation={state.limitations.revolving_credit_facility}
              />
              <BusinessLoans amountRequested={10000} duration={4} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Loans;
