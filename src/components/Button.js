import React from 'react'
import * as Action from './../flux/CalculatorActions'

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="button" onClick={this.click.bind(this)}>
                <p>{this.props.value}</p>
            </div>
        )
    }

    click(e){
        switch(this.props.value){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                Action.updateDisplay(this.props.displayValue,this.props.value
                    ,this.props.cleanInNextOperation,this.props.decimalEntry)
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                Action.executeMathematicaOperation(this.props.value,this.props.previousOperation
                    ,this.props.displayValue,this.props.valueInMemory)
                break;
            case '.':
                Action.setEntryDecimalMode(true)
                break;
            case 'c':
                Action.resetar();
                break;
        }
    }
}