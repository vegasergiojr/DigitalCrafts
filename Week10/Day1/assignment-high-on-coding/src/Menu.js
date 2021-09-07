import { Component } from "react"
import './Menu.css'


class Menu extends Component {
    render(){
        return(
            <div class='menu'>
                <ul>
                    <li id="logo">HighOnCoding</li>
                    <li id="home">Home</li>
                    <li>Categories</li>
                </ul>
            </div>
        )
    }
}
export default Menu