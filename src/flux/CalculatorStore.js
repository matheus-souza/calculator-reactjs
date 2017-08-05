import EventEmmiter from 'events'
import Action from './Constants'
import {appDispatcher} from './AppDispatcher'
const CHANGE = 'change'

let _store = {
    valueAtDisplay:'0',
    resultLastOperation:0,
    cleanDisplay:false,
    arithmeticOperation: undefined,
    entryDecimalMode: false,
}
window.dbg = _store;
class CalculatorStore extends  EventEmmiter{

    getValueAtDisplay(){
        return _store.valueAtDisplay;
    }

    setValueAtDisplay(valor){
        _store.valueAtDisplay = valor;
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
        return _store.cleanDisplay;
    }

    setArithmeticOperation(valor){
        _store.arithmeticOperation = valor;
        this.emit(CHANGE);
    }

    getEntryDecimalMode(){
        return _store.entryDecimalMode;
    }

    setEntryDecimalMode(valor){
        return _store.entryDecimalMode = valor;
        this.emit(CHANGE);
    }

    getState(){
        return _store
    }

    handleActions(action){
        switch(action.type){
            case Action.UPDATE_DISPLAY:
                this.setValueAtDisplay(action.value);
                break;
            case Action.ENTRY_WITH_DECIMAL_NUMBERS:
                this.setEntryDecimalMode(action.value);
                break;
            case Action.SAVE_VALUE:
                this.setResultLastOperation(action.value);
                break;
            case Action.CLEAN_OPERATION:
                this.setArithmeticOperation(undefined);
                break;
            case Action.CLEAN_DISPLAY:
                this.setValueAtDisplay('')
                break;
            case Action.CLEAN_DISPLAY_IN_NEXT_OPERATION:
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
