import React from 'react'

export default class Button extends React.Component {
    render(){
        return (
            <div className="button">
                <p>{this.props.valor}</p>
            </div>
        )
    }
}