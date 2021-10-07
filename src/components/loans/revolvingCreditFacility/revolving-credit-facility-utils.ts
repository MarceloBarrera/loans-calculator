export const calculateRepayments = (
  amountRequested: number,
  duration: number
) => {
  console.log(amountRequested);
  console.log(duration);

  return {
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
        interest: 300,
        totalRepayment: 2800,
      },
      {
        repaymentDate: "30/08/2019",
        principalAmount: 2500,
        interest: 300,
        totalRepayment: 2800,
      },
      {
        repaymentDate: "30/09/2019",
        principalAmount: 2500,
        interest: 300,
        totalRepayment: 2800,
      },
    ],
  };
};
