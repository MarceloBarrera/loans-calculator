import { format } from "date-fns";
import add from "date-fns/add";
import { LimitationItem } from "./LoansReducer";

export const calculateRepayments = (
  amountRequested: number,
  duration: number,
  interestRequested: number,
  applyUpFrontFee: boolean = false
) => {
  let repayments = [];

  // todo: use today's date
  let startingDate = new Date(2019, 5, 30);

  let upFrontFee = 0;
  if (applyUpFrontFee) {
    upFrontFee = (amountRequested * 10) / 100;
  }

  const principalAmount = amountRequested / duration;
  let totalInterest = 0;
  for (let index = 0; index < duration; index++) {
    const repayment = principalAmount * index;
    const amountMinusRepayment = amountRequested - repayment;
    let currentInterest = (amountMinusRepayment * interestRequested) / 100;

    if (index === 0 && applyUpFrontFee) {
      currentInterest = currentInterest + upFrontFee;
    }

    totalInterest = totalInterest + currentInterest;
    repayments.push({
      repaymentDate: format(
        add(startingDate, {
          months: index,
        }),
        "dd/MM/yyyy"
      ),
      principalAmount: parseFloat(principalAmount.toFixed(2)),
      interest: parseFloat(currentInterest.toFixed(2)),
      totalRepayment: parseFloat(
        (principalAmount + currentInterest).toFixed(2)
      ),
    });
  }

  return {
    totals: {
      principal: amountRequested,
      interest: parseFloat(totalInterest.toFixed(2)),
      totalRepayment: parseFloat((amountRequested + totalInterest).toFixed(2)),
    },
    repayments,
  };
};

export const checkLimits = (
  amountRequested: number,
  duration: number,
  limitation: LimitationItem | undefined
) => {
  if (!limitation) {
    return "";
  }

  if (duration < limitation.duration_min) {
    return `Duration: ${duration} cannot be less than: ${limitation.duration_min}`;
  }
  if (duration > limitation.duration_max) {
    return `Duration: ${duration} cannot be greater than: ${limitation.duration_max}`;
  }
  if (amountRequested < limitation.amount_min) {
    return `Amount requested: ${amountRequested} cannot be less than: ${limitation.amount_min}`;
  }

  if (amountRequested > limitation.amount_max) {
    return `Amount requested: ${amountRequested} cannot be greater than: ${limitation.amount_max}`;
  }

  return "";
};
