import { render } from "@testing-library/react";

import LoanCalculator, { LoanCalculatorProps } from "../../../../components/loans/loanCalculator/LoanCalculator";

const defaultProps = {
  amountRequested: 10000,
  duration: 4,
  calculatorName: 'foo',
  applyUpFrontFee: false,
  showErrorMessage:  '',
  interestRate: 3,
};
const renderComponent = (args?: LoanCalculatorProps) => {
  const props = { ...defaultProps, ...args };
  return render( <LoanCalculator {...props} /> );
};

it("should render component", () => {
  const { getByText } = renderComponent();
  getByText("Interest rate");
  getByText("Repayment date");
  getByText("Principal");
  getByText("Interest");
  getByText("Total repayment");
});

it("should render component with error text", () => {
  const { getByText } = renderComponent( { ...defaultProps, showErrorMessage: 'Something wrong...' });
  getByText("Something wrong...");
});
