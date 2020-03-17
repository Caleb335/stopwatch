import React from 'react';

export default class Buttons extends React.Component {
    render() {
        return(
            <button onClick={this.props.caller}>
                <i className={this.props.iconName}></i>
            </button>
        )
    }
}