import React from 'react';
import AnalogClock from './AnalogClock'
import DigitalClock from './DigitalClock'

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time : Date.now()
        }
        this.tick = this.tick.bind(this);
    }

    tick () {
        this.setState({
            time: Date.now()
        })
    }


    render () {
        setInterval(() => {
            this.tick()
        }, 1000);

        return (
            <div className="d">
                <AnalogClock time = {this.state.time}/>
                <DigitalClock time = {this.state.time}/>
            </div>
        )
    }
}

export default Clock