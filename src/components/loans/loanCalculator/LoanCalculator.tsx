import { useState } from "react";
import { calculateRepayments, checkLimits } from "../loans-utils";
import { LimitationItem } from "../LoansReducer";
import "../../loans/Loans.css";

const LoanCalculator = ({
  amountRequested,
  duration,
  limitation,
  calculatorName,
  applyUpFrontFee = false,
  interestRate = 3,
}: {
  amountRequested: number;
  duration: number;
  limitation: LimitationItem | undefined;
  applyUpFrontFee: boolean;
  calculatorName: string;
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
    undefined,
    applyUpFrontFee
  );
  const showErrorMessage = checkLimits(amountRequested, duration, limitation);
  return (
    <div style={{ backgroundColor: "gainsboro", padding: "5px" }}>
      <div>
        <label>Interest rate</label>
        <input
          type="number"
          name="interestRate"
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
        <p style={{ color: "orangered" }}>{showErrorMessage}</p>
      )}

      <div>{calculatorName}</div>
    </div>
  );
};

export default LoanCalculator;
