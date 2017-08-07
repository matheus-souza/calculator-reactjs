import {appDispatcher} from './AppDispatcher'
import Action from './Constants'

export function updateDisplay(oldValue,pressingValue,cleanDisplayNextOperation,entryDecimalMode){
    //By default we put the value pressed to be the new value
    let newValue = pressingValue;
    //Modify present value
    if(!cleanDisplayNextOperation){
        oldValue = parseFloat(oldValue);
        pressingValue = parseFloat(pressingValue);
        //We multiply the value by 10 and add the new
        if(!entryDecimalMode){
            newValue = oldValue*10+pressingValue;
        }
        else{
            //Puts the houses after the comma
            newValue = oldValue + pressingValue/Math.pow(10,quantityDecimalPlaces(oldValue)+1)
        }
    }
    else{
        //Clean display and set new value
        setCleanDisplayNextOperation(false)
    }
    //Dispatching action for stores per appDispatcher
    appDispatcher.dispatch({type:Action.UPDATE_DISPLAY,value:newValue})
}

export function executeMathematicaOperation(currentOperation,operationInMemory,valueInVisor,valueInMemory){
    let result = valueInVisor;
    //Read value and converting for float
    valueInVisor = parseFloat(valueInVisor)
    valueInMemory = parseFloat(valueInMemory)
    appDispatcher.dispatch({type:Action.CLEAN_OPERATION})
    setEntryDecimalMode(false);

    //If not selected = as operation, saves operation
    if(currentOperation!== '='){
        appDispatcher.dispatch({type:Action.SET_OPERATION,value:currentOperation})
    }

    //If operation is saved in memory, execute operation
    if(operationInMemory){
        switch(operationInMemory){
            case '+':
                result = valueInMemory+valueInVisor;
                break;
            case '-':
                result = valueInMemory-valueInVisor;
                break;
            case '*':
                result = valueInMemory*valueInVisor;
                break;
            case '/':
                result = valueInMemory/valueInVisor;
                break;
        }
    }

    //Dispatching new value
    appDispatcher.dispatch({type:Action.SAVE_VALUE,value:result});
    blink(result)
    setCleanDisplayNextOperation(true)

}

export function setCleanDisplayNextOperation(value){
    appDispatcher.dispatch({type:Action.CLEAN_DISPLAY_IN_NEXT_OPERATION,value:value})
}

export function setEntryDecimalMode(value){
    appDispatcher.dispatch({type:Action.ENTRY_WITH_DECIMAL_NUMBERS,value:value})
}

export function setVisor(value){
    appDispatcher.dispatch({type:Action.UPDATE_DISPLAY,value:value})
}

export function resetar(){
    appDispatcher.dispatch({type:Action.SAVE_VALUE,value:0});
    appDispatcher.dispatch({type:Action.CLEAN_OPERATION});
    blink(0)
}

export function blink(value){
    setVisor('')
    setTimeout(() =>{
        setVisor(value)
    },100)
}

function quantityDecimalPlaces(value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}