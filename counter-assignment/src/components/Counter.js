import React from 'react';
import { connect } from 'react-redux';
import '../style/counter.css'

function Counter(props) {
    const handleIncrement = () => {
        props.onIncrement()
    }
    const handleDecrement = () => {
        props.onDecrement()
    }
    return (
        <div id="box-one">
            <h3>Incrementing and Decrementing Buttons</h3>
            <button id="add" onClick={handleIncrement}>+</button>
            <button id="subtract" onClick={handleDecrement}>-</button>
        </div>

    )
}
// This function is maping the global state to local props
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)