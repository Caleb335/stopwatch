import React from 'react'
import Stopwatch from './Components/Stopwatch'
import './index.css'
import Footer from './Components/Footer'

export default class App extends React.Component {
    render() {
      return(
        <div className="app">
          <div className="stopwatch">
            <Stopwatch />
            <Footer />
          </div>
        </div>
      )
    }
}