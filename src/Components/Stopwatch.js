import React from 'react'
import Buttons from './Buttons';
import TimeSplit from './TimeSplit'

const timeConvert = (time) => {
    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60

    seconds = ("0" + Math.floor(time % (minutes) / seconds)).slice(-2)
    minutes = ("0" + Math.floor((time % (hours)) / (minutes))).slice(-2)
    hours = ("0" + Math.floor(time / hours)).slice(-2)

    return [hours, minutes, seconds]
}


export default class Stopwatch extends React.Component {
    //setting the state of stopwatch component
    constructor() {
        super();
        this.state = {
            hasTimerStarted: false,
            timerStart: 0,
            currentTime: 0,
            splitTime : []
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.splitTimer = this.splitTimer.bind(this)
    }

    startTimer() {
        if (this.state.hasTimerStarted) return;
        this.setState({
            hasTimerStarted: true,
            currentTime: this.state.currentTime,
            timerStart: Date.now() - this.state.currentTime
        })
        this.timer = setInterval(() =>
            this.setState({
                currentTime: Date.now() - this.state.timerStart
            }),
            //console.log(this.state.currentTime),
        1000)
    }

    // function to stop the timer
    stopTimer() {
        this.setState({
           hasTimerStarted: false // setting the timer start to false and clearing the interval.
        })
        clearInterval(this.timer);
    }

    // function to  reset the timer
    resetTimer() {
        clearInterval(this.timer);
        this.setState({
            hasTimerStarted: false,
            timerStart: 0,
            currentTime: 0,
            splitTime: []
        })
    }

    // function to split time
    splitTimer() {
        if (!this.state.hasTimerStarted) return
        let timer = [this.state.currentTime, ...this.state.splitTime];
        this.setState({
            splitTime: timer // as an array of timestamp
        });
    }

    render() {
        // Formatting timer display.
        const {currentTime} = this.state
        const [hours, minutes, seconds] = timeConvert(currentTime)
        
        return(
            <div className="timer">
                <p className="md-text intro">Beat the time</p>
                <div className="stopwatch-block">
                    
                    <div>
                        {this.state.splitTime.map((timestamp, id) => {
                            const [hours, minutes, seconds] = timeConvert(timestamp);
                            return (
                                <TimeSplit 
                                    hours = {hours}
                                    minutes = {minutes}
                                    seconds = {seconds}
                                    key = {id}
                                />
                            )
                                
                        })}
                    </div>

                    <p className="lg-text mt-4">
                        {hours} : {minutes} : {seconds}
                    </p> 
                </div>
                
                <div className="buttons mt">
                    <Buttons 
                        isActive={!this.state.hasTimerStarted ? "red" : ""}
                        caller = {this.stopTimer}
                        iconClassName = "fas fa-stop"
                    />
                    <Buttons 
                        isActive={this.state.hasTimerStarted ? "green" : ""}
                        caller = {this.startTimer}
                        iconClassName = "fas fa-play"
                    />
                    <Buttons 
                        caller = {this.resetTimer}
                        iconClassName = "fa fa-refresh"
                    />
                    <Buttons 
                        caller = {this.splitTimer}
                        iconClassName = "fa fa-refresh"
                    />
                </div>
            </div>
        )
    }
}