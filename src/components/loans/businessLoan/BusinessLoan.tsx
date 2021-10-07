import { useState } from "react";
import { calculateRepayments, checkLimits } from "../loans-utils";
import { LimitationItem } from "../LoansReducer";
import "../../loans/Loans.css";

const BusinessLoans = ({
  amountRequested,
  duration,
  limitation,
  interestRate = 3,
}: {
  amountRequested: number;
  duration: number;
  limitation: LimitationItem | undefined;
  interestRate?: number;
}) => {
  const [interest, setInterest] = useState(interestRate);
  const handleChange = (event: any) => {
    setInterest(parseInt(event.target.value));
  };

  const calculations = calculateRepayments(
    amountRequested,
    duration,
    interest,
    true
  );
  const showErrorMessage = checkLimits(amountRequested, duration, limitation);
  return (
    <div style={{ backgroundColor: "lightseagreen" }}>
      <div>
        <label>interest rate</label>
        <input
          type="number"
          name="interestRateBl"
          value={interest}
          onChange={handleChange}
        ></input>
        <span>(in %)</span>
      </div>

      {!showErrorMessage ? (
        <div>
          <div className="loan-table">
            <div>Repayment date</div>
            <div>Principal</div>
            <div>Interest</div>
            <div>Total repayment</div>
          </div>
          {calculations.repayments.map((r, index) => {
            return (
              <div key={index} className="loan-table">
                <div>{r.repaymentDate}</div>
                <div>{r.principalAmount}</div>
                <div>{r.interest}</div>
                <div>{r.totalRepayment}</div>
              </div>
            );
          })}
          <div className="loan-table">
            <div>Total</div>
            <div>{calculations.totals.principal}</div>
            <div>{calculations.totals.interest}</div>
            <div>{calculations.totals.totalRepayment}</div>
          </div>
        </div>
      ) : (
        <p>{showErrorMessage}</p>
      )}

      <div>Business loan</div>
    </div>
  );
};

export default BusinessLoans;
