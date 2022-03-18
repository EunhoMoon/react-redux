import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";
import store from "../store";
const mapReduxStateToReactProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(mapReduxStateToReactProps)(DisplayNumber);
/*
import React, { useEffect, useState } from "react";
import store from "../store";

export default function DisplayNumberWrapper(props) {
  const [state, setState] = useState({ number: store.getState().number });

  useEffect(() => {
    store.subscribe(() => {
      setState({ number: store.getState().number });
    });
  });
  return <DisplayNumber number={state.number} unit={props.unit} />;
}
*/
