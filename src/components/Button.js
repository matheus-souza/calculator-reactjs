import React from 'react'
import * as Action from './../flux/CalculatorActions'

export default class Button extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="button" onClick={this.click.bind(this)}>
                <p>{this.props.valor}</p>
            </div>
        )
    }

    click(e){
        switch (this.props.valor){
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
                Action.updateDisplay(this.props.displayValue, this.props.valor, this.props.CleanDisplayNextOperation, this.props.decimalMode)
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                Action.executeMathematicsOperation(this.props.valor, this.props.resultLastOperation, this.propr.valueInMemory)
                break;
            case '.':
                Action.setDecimalMode(true)
                break;
            case 'c':
                Action.reset();
                break;
        }
    }
}