import React, { createContext, useReducer } from "react";

const initialState = {
  trfData: [
    {
      id: 1,

      trainingTitle: "shopping",

      TrainingType: "Online",

      ResourceType: "batch",

      Duration: 23,

      PurposeOfTraining: "Improvement",

      StartDate: "2023-03-15",

      EndDate: "2023-03-15",

      InitiatedFrom: "asd",

      ProjectName: "hjk",

      Skills: "java",

      Count: 30,

      // intiatedFrom: "asd",

      // trainingType: "Online",

      // resourceType: "batch",

      // skillsToBeImparted: "java",

      // startDate: new Date(2021, 1, 6),

      // endDate: new Date(2022, 1, 13),

      // projectName: "hjk",

      // duration: 23,

      // noOfParticipent: 30,

      // purposeOfTraining: "Improvement",
    },
  ],
};

export const TrfContext = createContext(initialState);

const trfReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRF":
      return {
        ...state,

        trfData: [...state.trfData, action.payload],
      };

    default:
      return state;
  }
};

const TrfProvider = ({ children }) => {
  const [trfState, trfDispatchAction] = useReducer(trfReducer, initialState);

  const addTrf = (trf) => {
    trfDispatchAction({
      type: "ADD_TRF",

      payload: trf,
    });
  };

  return (
    <TrfContext.Provider
      value={{
        trfData: trfState.trfData,
        addTrf,
      }}
    >
      {children}
    </TrfContext.Provider>
  );
};

export default TrfProvider;
