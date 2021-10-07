import { format } from "date-fns";
import add from "date-fns/add";

export const calculateRepayments = (
  amountRequested: number,
  duration: number,
  interestRequested: number
) => {
  let repayments = [];

  let startingDate = new Date(2019, 5, 30);

  const principalAmount = amountRequested / duration;
  let totalInterest = 0;
  for (let index = 0; index < duration; index++) {
    const repayment = principalAmount * index;
    const amountMinusRepayment = amountRequested - repayment;
    const currentInterest = (amountMinusRepayment * interestRequested) / 100;
    totalInterest = totalInterest + currentInterest;
    repayments.push({
      repaymentDate: format(
        add(startingDate, {
          months: index,
        }),
        "dd/MM/yyyy"
      ),
      principalAmount,
      interest: currentInterest,
      totalRepayment: principalAmount + currentInterest,
    });
  }

  return {
    totals: {
      principal: amountRequested,
      interest: totalInterest,
      totalRepayment: amountRequested + totalInterest,
    },
    repayments,
  };
};
