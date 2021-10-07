import { useState } from "react";
import { calculateRepayments } from "../loans-utils";
import "../../loans/Loans.css";
export interface LoanCalculatorProps  {
  amountRequested: number;
  duration: number;
  applyUpFrontFee: boolean;
  calculatorName: string;
  showErrorMessage: string;
  interestRate?: number;
}
const LoanCalculator = ({
  amountRequested,
  duration,
  calculatorName,
  applyUpFrontFee = false,
  showErrorMessage,
  interestRate = 3,
}: LoanCalculatorProps) => {
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
