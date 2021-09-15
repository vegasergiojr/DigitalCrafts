import { connect } from 'react-redux';
import { useState } from 'react';
import '../style/addsubcomp.css'
function AddSubComp(props) {
    const [counter, setCounter] = useState('')

    const handleNumber = (e) => {
        const count = e.target.value
        setCounter(count)
    }
    const handleAdd = () => {
        props.onAdd(parseInt(counter))
        setCounter('')
    }
    const handleSub = () => {
        props.onSub(parseInt(counter))
        setCounter('')
    }

    return (
        <div id="main-container">
            <h3>Add or Subtract Box</h3>
            <input type='text' value={counter} onChange={handleNumber} placeholder="Input Number"></input>
            <button id="add" onClick={handleAdd}>Add</button>
            <button id="subtract" onClick={handleSub}>Subtract</button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({ type: 'ADD', payload: value }),
        onSub: (value) => dispatch({ type: 'SUBTRACT', payload: value }),
    }
}
export default connect(null, mapDispatchToProps)(AddSubComp)