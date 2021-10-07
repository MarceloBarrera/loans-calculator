import { useState } from "react";
import "../../loans/Loans.css";
import { calculateRepayments } from "./revolving-credit-facility-utils";

const RevolvingCreditFacility = ({
  amountRequested,
  duration,
  interestRate = 3,
}: {
  amountRequested: number;
  duration: number;
  interestRate?: number;
}) => {
  const [interest, setInterest] = useState<number>(interestRate);
  const handleChange = (event: any) => {
    setInterest(parseInt(event.target.value));
  };

  const calculations = calculateRepayments(amountRequested, duration, interest);

  return (
    <div style={{ backgroundColor: "lightsalmon" }}>
      <div>
        <label>interest rate</label>
        <input
          type="number"
          name="interestRateRcf"
          value={interest}
          onChange={handleChange}
        ></input>
        <span>(in %)</span>
      </div>

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

      <div>Revolving Credit Facility</div>
    </div>
  );
};

export default RevolvingCreditFacility;
