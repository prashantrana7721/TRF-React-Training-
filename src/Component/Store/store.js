import { configureStore } from 'redux';

const initialState = {
  trainingRequests: [],
};

const store = configureStore(
  (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TRAINING_REQUEST':
        return {
          ...state,
          trainingRequests: [...state.trainingRequests, action.trainingRequest],
        };
      default:
        return state;
    }
  },
  initialState,
);

export default store;
