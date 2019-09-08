import React from 'react';
import GoToHome from './GoToHome';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/action';

const Document = (props) => {
    return (
        <div>
            <h1>Document : {props.match.params.id}</h1>
            <h1>countNum : {props.countNum}</h1>
            <button onClick={() => props.handleIncrement()}>Increment</button>
            <button onClick={() => props.handleDecrement()}>Decrement</button>
            <GoToHome />
        </div>
    )
}

const mapStateToProps = (state) => ({
    countNum: state.count
})

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: () => dispatch(increment()),
    handleDecrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Document);
