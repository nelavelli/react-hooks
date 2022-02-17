import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";

const RouterRule = (props) => {
  const [state, dispatch] = useContext(Context);
  const [config, launch] = state;
  const location = useLocation();

  const initiateItems = { container: null, history: null };

  let needUpdate = false;

  if (launch.container === undefined || launch.container === null) {
    needUpdate = true;
    if (props.container) {
      initiateItems.container = props.container;
    } else {
      initiateItems.container = document;
    }
  }

  if (launch.history === undefined || launch.history === null) {
    needUpdate = true;
    initiateItems.history = props.history;
  }

  useEffect(() => {
    if (needUpdate) {
      dispatch(setInitiate(initiateItems));
    }
  }, []);
};
