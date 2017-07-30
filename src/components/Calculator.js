import React from 'react'
import Display from './Display'
import Keyboard from './Keyboard'

import {calculatorStore} from './../flux/CalculatorStore'

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = calculatorStore.getState()
    }

    componentWillMount(){
        calculatorStore.on('change', () => {
            this.setState(calculatorStore.getState())
        })
    }

    render(){
        return (
            <div id="calculator">
                <Display valor = {this.state.displayValue}/>
                <Keyboard/>
            </div>
        )
    }
}