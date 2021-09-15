
import React from 'react';
import {connect} from 'react-redux';
import '../style/displayCounter.css'

function DisplayCounter(props) {
    return(
        <div>
            <h1 id="displayCounter">{props.counter}</h1>
        </div>
        
    )
}

const mapStateToProps = (state) =>{
    return{
        counter: state.counter,
    }
}

export default connect(mapStateToProps)(DisplayCounter)