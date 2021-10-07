import { calculateRepayments } from "../../../components/loans/revolvingCreditFacility/revolving-credit-facility-utils";

const expectedResult = {
  totals: { principal: 10000, interest: 750, totalRepayment: 10750 },
  repayments: [
    {
      repaymentDate: "30/06/2019",
      principalAmount: 2500,
      interest: 300,
      totalRepayment: 2800,
    },
    {
      repaymentDate: "30/07/2019",
      principalAmount: 2500,
      interest: 225,
      totalRepayment: 2725,
    },
    {
      repaymentDate: "30/08/2019",
      principalAmount: 2500,
      interest: 150,
      totalRepayment: 2650,
    },
    {
      repaymentDate: "30/09/2019",
      principalAmount: 2500,
      interest: 75,
      totalRepayment: 2575,
    },
  ],
};
it("should calculate repayments", () => {
  const amountRequested = 10000;
  const duration = 4;
  const interestRequested = 3;
  const result = calculateRepayments(
    amountRequested,
    duration,
    interestRequested
  );
  expect(result).toEqual(expectedResult);
});
