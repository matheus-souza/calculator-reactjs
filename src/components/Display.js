import React from 'react'

export default class Display extends React.Component{

    render(){
        return (
            <div id="display">
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}