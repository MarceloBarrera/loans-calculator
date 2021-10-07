import { useState } from "react";
import "../../loans/Loans.css";

const BusinessLoans = ({
  amountRequested,
  duration,
  interestRate = 3,
}: {
  amountRequested: number;
  duration: number;
  interestRate?: number;
}) => {
  const [interest, setInterest] = useState(interestRate);
  const handleChange = (event: any) => {
    setInterest(event.target.value);
  };
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
      <div className="loan-table">
        <div>Row 1</div>
        <div>1.00</div>
        <div>Description</div>
        <div>Description B</div>

        <div>Row 2</div>
        <div>2.00</div>
        <div>A description</div>
        <div>A descriptionB</div>
      </div>
      <div>Business loan</div>
    </div>
  );
};

export default BusinessLoans;
