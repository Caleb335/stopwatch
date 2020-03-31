import React from 'react' 

const timeConvert = (time) => {
    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60

    seconds = ("0" + Math.floor(time % (minutes) / seconds)).slice(-2)
    minutes = ("0" + Math.floor((time % (hours)) / (minutes))).slice(-2)
    hours = Math.floor((time / (1000 * 60 * 60)) % 24) + 1;

    return [hours, minutes, seconds]
}

class AnalogClock extends React.Component {
    /* constructor() {
        super()

        this.setAttribute = this.setAttribute.bind(this)
        this.tick = this.tick.bind(this)
    } */

  /*   tick() {
        const [hours, minutes, seconds] = timeConvert(this.props.time);
        let hr = 30* (hours % 12 + minutes / 60);
        let mins = 6 * minutes;
        let secs = 6 * seconds;

        this.setAttribute("hr_hand", hr);
        this.setAttribute("mins_hand", mins);
        this.setAttribute("secs_hand", secs)
    } */

    /* setAttribute(id,val) {
        let value = `rotate(${val}, 70, 70)`;
        document.getElementById(id).setAttribute('transform', value);
    } */

    render() {
        const [hours, minutes, seconds] = timeConvert(this.props.time);
        let hr = 30* (hours % 12 + minutes / 60);
        let mins = 6 * minutes;
        let secs = 6 * seconds;
        console.log(secs)
    
        return (
            <div className="analog-clock">
                <svg width="200" height="200">
                    <circle id="clock_face" cx="70" cy="70" r="65" />
                    <line 
                        id="hr_hand"
                        x1="70" y1="70" x2="70" y2="38"
                        style= {{transform : `rotate(${hr}deg)`}}
                    />
                    <line 
                        id="mins_hand" 
                        x1="70" y1="70" x2="70" y2="20"
                        style= {{transform : `rotate(${mins}deg)`}}
                    />
                    <line 
                        id="secs_tail" 
                        x1="70" y1="70" x2="70" y2="130"
                        style= {{transform : `rotate(${secs + 0}deg)`}}
                        />
                    <text x="62" y="18">12</text>
                    <text x="126" y="76">3</text>
                    <text x="66" y="130">6</text>
                    <text x="7" y="76">9</text>
                </svg>
            </div>
        )
    }
}

export default AnalogClock