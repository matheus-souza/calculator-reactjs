import EventEmmiter from 'events'
import Action from './Constants'
import {appDispatcher} from './AppDispatcher'
const CHANGE = 'change'
let _store = {
    displayValue:'0',
    resultLastOperation:0,
    cleanDisplay:false,
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

    handleActions(action){
        switch(action.type){
            case Action.DISPLAY_UPDATE:
                this.setDisplayValue(action.value);
                break;
            case Action.DECIMAL_MODE:
                this.setDecimalMode(action.value);
                break;
            case Action.SAVE_VALUE:
                this.setResultLastOperation(action.value);
                break;
            case Action.CLEAN_OPERATION:
                this.setArithmeticOperation(undefined);
                break;
            case Action.CLEAN_DISPLAY:
                this.setDisplayValue('')
                break;
            case Action.CLEAN_DISPLAY_NEXT_OPERATION:
                this.setCleanDisplay(action.value);
                break;
            case Action.SET_OPERATION:
                this.setArithmeticOperation(action.value);
                break;
        }
    }
}
export let calculatorStore = new CalculatorStore()
appDispatcher.register(calculatorStore.handleActions.bind(calculatorStore))