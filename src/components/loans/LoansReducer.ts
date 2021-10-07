export interface LimitationItem {
  amount_min: number;
  amount_max: string;
  duration_min: number;
  duration_max: string;
}

export interface Limitations {
  revolving_credit_facility?: LimitationItem;
  business_loan?: LimitationItem;
}

export interface IState {
  limitations: Limitations;
  isFetching: boolean;
  errorOccurredWhenFetching: boolean;
}

export const initialState: IState = {
  limitations: {},
  isFetching: true,
  errorOccurredWhenFetching: false,
};

export enum ActionTypes {
  SET_LIMITATIONS,
  SET_START_FETCHING,
  SET_END_FETCHING,
  FETCHING_FAILED,
}

export type Action =
  | {
      type: ActionTypes.SET_LIMITATIONS;
      payload: any;
    }
  | {
      type: ActionTypes.SET_START_FETCHING;
    }
  | {
      type: ActionTypes.SET_END_FETCHING;
    }
  | {
      type: ActionTypes.FETCHING_FAILED;
    };

export const loansReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_LIMITATIONS:
      return {
        ...state,
        limitations: action.payload,
      };
    case ActionTypes.SET_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        errorOccurredWhenFetching: false,
      };
    case ActionTypes.SET_END_FETCHING:
      return { ...state, isFetching: false };

    case ActionTypes.FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        errorOccurredWhenFetching: true,
      };

    default:
      return state;
  }
};
