import "./Loans.css";
const Loans = () => (
  <>
    <div className="container-loan">
      <h3>Your loan</h3>
      <div className="loan-request">
        <label htmlFor="amountRequested">Amount requested:</label>
        <input type="number" id="amountRequested" defaultValue="10"></input>
        <span>(in £)</span>

        <label htmlFor="durationRequested">Duration:</label>
        <input type="number" id="durationRequested" defaultValue="4"></input>
        <span>(in months)</span>
      </div>

      <div className="loan-calculations">
        <div style={{ backgroundColor: "lightsalmon" }}>
          <div>
            <label>interest rate</label>
            <input
              type="number"
              name="interestRateRcf"
              defaultValue="3"
            ></input>
            <span>(in %)</span>
          </div>
          <div className="loan-table">
            <div>Row 1</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 2</div>
            <div>2.00</div>
            <div>A description</div>

            <div>Row 3</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 4</div>
            <div>2.00</div>
            <div>A description</div>

            <div>Row 5</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 6</div>
            <div>2.00</div>
            <div>A description</div>

            <div>Row 7</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 8</div>
            <div>2.00</div>
            <div>A description</div>
          </div>
          <div>Revolving Credit Facility</div>
        </div>
        <div style={{ backgroundColor: "lightseagreen" }}>
          <div>
            <label>interest rate</label>
            <input type="number" name="interestRateBl" defaultValue="3"></input>
            <span>(in %)</span>
          </div>
          <div className="loan-table">
            <div>Row 1</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 2</div>
            <div>2.00</div>
            <div>A description</div>

            <div>Row 3</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 4</div>
            <div>2.00</div>
            <div>A description</div>

            <div>Row 5</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 6</div>
            <div>2.00</div>
            <div>A description</div>

            <div>Row 7</div>
            <div>1.00</div>
            <div>Description</div>

            <div>Row 8</div>
            <div>2.00</div>
            <div>A description</div>
          </div>
          <div>Business loan</div>
        </div>
      </div>
    </div>
  </>
);

export default Loans;
