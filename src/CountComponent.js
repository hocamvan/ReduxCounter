import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

// const mapDispatchToProps = dispatch => ({
//   add1: () => dispatch({ type: "ADD1" }),
//   remove1: () => dispatch({ type: "REMOVE1" }),
//   add10: () => dispatch({ type: "ADD10" }),
//   remove10: () => dispatch({ type: "REMOVE10" }),
//   reset: () => dispatch({ type: "RESET" })
// });
const mapDispatchToProps = dispatch => ({
  add1: () => dispatch({
    type: "ADD",
    payload: { value: 1 }
  }),
  add10: () => dispatch({
    type: "ADD",
    payload: { value: 10 }
  }),
  remove1: () => dispatch({
    type: "REMOVE",
    payload: { value: 1 }
  }),
  remove10: () => dispatch({
    type: "REMOVE",
    payload: { value: 10 }
  }),
  reset: () => dispatch({ type: "RESET" })
});

const CountComponent = ({ count, add1, remove1, add10, remove10, reset }) => (
  <div>
    <p>{count}</p>
    <button onClick={add1}>ADD 1</button><br />
    <button onClick={remove1}>REMOVE 1</button><br />
    <button onClick={add10}>ADD 10</button><br />
    <button onClick={remove10}>REMOVE 10</button><br />
    <button onClick={reset}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent);