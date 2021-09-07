import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Reviews from './Reviews'

class App extends Component {
  render(){
    return(
      <div>
        <Menu/>
        <Header/>
        <Reviews/>
      </div>
    )
  }
}
export default App