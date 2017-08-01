import React from 'react'
import Button from './Button'

export default class Keyboard extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="keyboard">
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="c"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="+/-"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="%"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="/"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="7"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="8"/>

                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="9"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="*"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="4"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="5"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="6"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="+"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="4"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="5"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="6"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="-"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="0"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="."/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="pi"/>
                <Button valueInMemory={this.props.vulueInMemory}
                        displayValue={this.props.resultLastOperation}
                        cleanDisplayNextOperation={this.props.cleanDisplayNextOperation}
                        decimalMode={this.props.decimalMode} valor="="/>
            </div>
        )
    }
}