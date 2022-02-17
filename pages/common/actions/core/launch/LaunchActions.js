export const LaunchActionTypes = {
  SET_LOADING_INDICATOR: "launch/SET_LOADING_INDICATOR",
  SET_CONTAINER: "launch/SET_CONTAINER",
  SET_HISTORY: "launch/SET_HISTORY",
  SET_INITIATE: "launch/SET_INITIATE",
};

export const setLoadingIndicator = (payload) => {
  const isLoading = window.parent !== window ? false : payload;

  return {
    type: LaunchActionTypes.SET_LOADING_INDICATOR,
    payload: isLoading,
  };
};

export const setContainer = (payload) => {
  return {
    type: LaunchActionTypes.SET_CONTAINER,
    payload,
  };
};

export const setHistory = (payload) => {
  return {
    type: LaunchActionTypes.SET_HISTORY,
    payload,
  };
};

export const setInitiate = (payload) => {
  return {
    type: LaunchActionTypes.SET_INITIATE,
    payload,
  };
};
