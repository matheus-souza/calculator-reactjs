import React from 'react'
import Botao from './Button'

export default class Keyboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="keyboard">
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="c"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="+/-"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="%"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="/"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="7"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="8"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="9"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="*"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="4"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="5"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="6"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="+"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="1"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="2"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="3"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="-"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="0"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="."/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="pi"/>
                <Botao valueInMemory={this.props.valueInMemory} previousOperation={this.props.previousOperation} displayValue={this.props.displayValue} cleanInNextOperation={this.props.cleanInNextOperation}
                       decimalEntry={this.props.decimalEntry} value="="/>
            </div>
        )
    }
}
