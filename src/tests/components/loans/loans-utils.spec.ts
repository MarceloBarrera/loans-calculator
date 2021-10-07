import {
  calculateRepayments,
  checkLimits,
} from "../../../components/loans/loans-utils";

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

const expectedResultBL = {
  totals: { principal: 10000, interest: 1750, totalRepayment: 11750 },
  repayments: [
    {
      repaymentDate: "30/06/2019",
      principalAmount: 2500,
      interest: 1300,
      totalRepayment: 3800,
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

let startingDate = new Date(2019, 5, 30);
it("should calculate repayments RCF", () => {
  const amountRequested = 10000;
  const duration = 4;
  const interestRequested = 3;
  const result = calculateRepayments(
    amountRequested,
    duration,
    interestRequested,
    startingDate
  );
  expect(result).toEqual(expectedResult);
});

it("should calculate repayments BL", () => {
  const amountRequested = 10000;
  const duration = 4;
  const interestRequested = 3;
  const result = calculateRepayments(
    amountRequested,
    duration,
    interestRequested,
    startingDate,
    true
  );

  expect(result).toEqual(expectedResultBL);
});

describe("check limits", () => {
  const limitation = {
    amount_min: 1000,
    amount_max: 150000,
    duration_min: 1,
    duration_max: 12,
  };
  it("should see error message when amount is less than min", () => {
    const amount = 100;
    const result = checkLimits(amount, 4, limitation);

    expect(result).toEqual(
      `Amount requested: ${amount} cannot be less than: ${limitation.amount_min}`
    );
  });

  it("should see error message when amount is greater than max", () => {
    const amount = 160000;
    const result = checkLimits(amount, 4, limitation);

    expect(result).toEqual(
      `Amount requested: ${amount} cannot be greater than: ${limitation.amount_max}`
    );
  });

  it("should see error message when duration is greater than max", () => {
    const amount = 10000;
    const duration = 13;
    const result = checkLimits(amount, duration, limitation);

    expect(result).toEqual(
      `Duration: ${duration} cannot be greater than: ${limitation.duration_max}`
    );
  });

  it("should see error message when duration is less than min", () => {
    const amount = 10000;
    const duration = 0;
    const result = checkLimits(amount, duration, limitation);

    expect(result).toEqual(
      `Duration: ${duration} cannot be less than: ${limitation.duration_min}`
    );
  });

  it("should see NO error message", () => {
    const amount = 10000;
    const duration = 1;
    const result = checkLimits(amount, duration, limitation);

    expect(result).toEqual(``);
  });
});
