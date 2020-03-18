import React from 'react';

export default class Buttons extends React.Component {
    render() {
        return(
            <button 
                onClick={this.props.caller}
                className = {this.props.isActive}
            >
                <i className={this.props.iconClassName}></i>
            </button>
        )
    }
}