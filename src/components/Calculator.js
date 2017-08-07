import React from 'react'
import Visor from './Display'
import Teclado from './Keyboard'

import {calculatorStore} from './../flux/CalculatorStore'

export default class Calculator extends React.Component{

    constructor(props){
        super(props)
        this.state = calculatorStore.getState()
    }

    componentWillMount(){
        calculatorStore.on('change', ()=>{
            this.setState(calculatorStore.getState())
        })
    }

    render(){
        return (
            <div id="calculator">
                <Visor value={this.state.valueAtDisplay}/>
                <Teclado valueInMemory={this.state.resultLastOperation} previousOperation={this.state.arithmeticOperation} displayValue={this.state.valueAtDisplay} cleanInNextOperation={this.state.cleanDisplay}
                         decimalEntry={this.state.entryDecimalMode} />
            </div>
        )
    }
}