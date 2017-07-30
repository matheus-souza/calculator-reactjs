import EventEmmiter from 'events'
const CHANGE = 'change'
let _store = {
    displayValue:'0',
    resultLastOperation:0,
    cle:false,
    arithmeticOperation: undefined,
    decimalMode: false,
}
class CalculatorStore extends  EventEmmiter{
    getDisplayValue(){
        return _store.displayValue;
    }
    setDisplayValue(valor){
        _store.displayValue = valor;
        this.emit(CHANGE);
    }
    getResultLastOperation(){
        return _store.resultLastOperation;
    }
    setResultLastOperation(valor){
        _store.resultLastOperation = valor;
        this.emit(CHANGE);
    }
    getCleanDisplay(){
        return _store.cleanDisplay;
    }
    setCleanDisplay(valor){
        _store.cleanDisplay = valor;
        this.emit(CHANGE);
    }
    getArithmeticOperation() {
        return _store.arithmeticOperation;
    }
    setArithmeticOperation(valor){
        _store.arithmeticOperation = valor;
        this.emit(CHANGE);
    }
    getDecimalMode(){
        return _store.decimalMode;
    }
    setDecimalMode(valor){
        return _store.decimalMode = valor;
        this.emit(CHANGE);
    }
    getState(){
        return _store
    }
}
export let calculatorStore = new CalculatorStore()
window.calculatorStore = calculatorStore