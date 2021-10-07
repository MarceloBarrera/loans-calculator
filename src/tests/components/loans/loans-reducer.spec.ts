import {
  Action,
  ActionTypes,
  loansReducer,
  initialState,
} from "../../../components/loans/LoansReducer";

it("should fetching started", () => {
  const action: Action = { type: ActionTypes.SET_START_FETCHING };

  const newState = loansReducer(initialState, action);

  expect(newState.isFetching).toEqual(true);
  expect(newState.limitations).toEqual({});
});

it("should fetched limitations when fetching ended", () => {
  const action: Action = {
    type: ActionTypes.SET_END_FETCHING,
  };

  const newState = loansReducer(initialState, action);

  expect(newState.isFetching).toEqual(false);
});

it("should set limitations when set", () => {
  const limitation = {
    amount_min: 1000,
    amount_max: 150000,
    duration_min: 1,
    duration_max: 12,
  };
  const action = {
    type: ActionTypes.SET_LIMITATIONS,
    payload: { limitation },
  };

  const newState = loansReducer(initialState, action);

  expect(newState.limitations).toEqual({ limitation });
});
