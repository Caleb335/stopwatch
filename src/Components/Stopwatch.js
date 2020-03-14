import React from 'react'
// import Buttons from './Buttons'

export default class Stopwatch extends React.Component {
    //setting the state of stopwatch component
    constructor() {
        super();
        this.state = {
            hasTimerStarted: false,
            timerStart: 0,
            currentTime: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    startTimer() {
        console.log("Are you working?")
        this.setState({
            hasTimerStarted: true,
            currentTime: this.state.currentTime,
            timerStart: Date.now() - this.state.currentTime
        })
        this.timer = setInterval(() =>
            this.setState({
                currentTime: Date.now() - this.state.timerStart
            }),
        1000)
    }
    stopTimer() {
        console.log("Yeah you have to stop now")
        this.setState({
           hasTimerStarted: false // setting the timer start to false and clearing the interval.
        })
        clearInterval(this.timer);
    }
    resetTimer() {
        this.setState({
            timerStart: 0,
            currentTime: 0
        })
    }

    render() {
        // Formatting timer display.
        const {currentTime} = this.state

        let seconds = ("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2)
        let minutes = ("0" + (Math.floor(currentTime / 6000) % 60)).slice(-2)
        let hours = ("0" + Math.floor(currentTime / 3600000)).slice(-2)

        return(
            <div className="timer">
                <div className="stopwatch-block">
                    <p className="md-text intro">Beat the time</p>
                    <p className="lg-text mt-4">
                        {hours} : {minutes} : {seconds}
                    </p> 
                </div>
                <div className="buttons mt">
                    <button onClick={this.stopTimer}>
                        <i className="fas fa-stop"></i>
                    </button>
                    <button onClick={this.startTimer}>
                        <i className="fas fa-play"></i>
                    </button>
                    <button onClick={this.resetTimer}>
                        <i className="fa fa-refresh"></i>
                    </button>
                </div>
            </div>
        )
    }
}