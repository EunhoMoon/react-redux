import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

const mapReduxDispatchToReactProps = (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
};

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
/*
import React from "react";
import store from "../store";

export default function AddNumberWrapper() {
  return (
    <AddNumber
      onClick={(size) => {
        store.dispatch({ type: "INCREMENT", size: size });
      }}
    />
  );
}
*/
