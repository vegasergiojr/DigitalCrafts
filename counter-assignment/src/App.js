import './App.css';
import { connect } from 'react-redux'
import Counter from './components/Counter';
import DisplayCounter from './components/DisplayCounter';
import AddSubComp from './components/AddSubComp';

function App(props) {
    return (
        <div id="mainContainer">
            <DisplayCounter />
            <Counter />
            <AddSubComp />
        </div>
    );
}

export default App
