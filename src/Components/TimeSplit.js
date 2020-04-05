import React from "react"

class timeSplit extends React.Component {

    render() {

        return (
            
                <span 
                    className = "split-time"
                    hours = {this.props.hours}
                    minutes = {this.props.minutes}
                    seconds = {this.props.seconds}
                >
                    {this.props.hours} : {this.props.minutes} : {this.props.seconds}
                </span>
                
        )
       
    }
}

export default timeSplit