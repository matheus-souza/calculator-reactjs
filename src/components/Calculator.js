import React from 'react'
import Display from './Display'
import Keyboard from './Keyboard'
export default class Calculator extends React.Component {
    render(){
        return (
            <div id="calculator">
                <Display/>
                <Keyboard/>
            </div>
        )
    }
}