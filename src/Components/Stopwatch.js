import React from 'react'
import Buttons from './Buttons';

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

    // function to stop the timer
    stopTimer() {
        console.log("Yeah you have to stop now")
        this.setState({
           hasTimerStarted: false // setting the timer start to false and clearing the interval.
        })
        clearInterval(this.timer);
    }

    // function to  reset the timer
    resetTimer() {
        this.setState({
            timerStart: 0,
            currentTime: 0
        })
    }

    render() {
        // Formatting timer display.
        const {currentTime} = this.state

        let seconds = 1000
        let minutes = seconds * 60
        let hours = minutes * 60

        seconds = ("0" + Math.floor(currentTime % (minutes) / seconds)).slice(-2)
        minutes = ("0" + Math.floor((currentTime % (hours)) / (minutes))).slice(-2)
        hours = ("0" + Math.floor(currentTime / hours)).slice(-2)

        return(
            <div className="timer">
                <div className="stopwatch-block">
                    <p className="md-text intro">Beat the time</p>
                    <p className="lg-text mt-4">
                        {hours} : {minutes} : {seconds}
                    </p> 
                </div>
                <div className="buttons mt">
                    <Buttons 
                        caller = {this.stopTimer}
                        iconName = "fas fa-stop"
                    />
                    <Buttons 
                        caller = {this.startTimer}
                        iconName = "fas fa-play"
                    />
                    <Buttons 
                        caller = {this.resetTimer}
                        iconName = "fa fa-refresh"
                    />
                </div>
            </div>
        )
    }
}