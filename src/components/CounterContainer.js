import React from "react";
import { connect } from "react-redux";
import './CounterContainer.css';

const Counter = ({counter, increment, decrement }) => {
  return (
    <div>
      <h1>How many times<br />did you wash<br />your hands<br />today<br />?</h1>
      <p>{counter} <span role="img" aria-labelledby="soap">🧼</span></p>
      <button onClick={increment}><span role="img" aria-labelledby="plus">➕</span></button>
      <button onClick={decrement}><span role="img" aria-labelledby="minus">➖</span></button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return ({counter: state})
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: "INCREMENT"}),
        decrement: () => dispatch({type: "DECREMENT"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
