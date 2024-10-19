import configureStore from "redux-mock-store";

export const mockStore = (mockState) => {
  const store = configureStore();
  return store(mockState);
};
