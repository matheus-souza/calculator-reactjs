import {appDispatcher} from './AppDispatcher'
import Action from './Constants'

export function updateDisplay(oldValue,pressingValue,CleanDisplayNextOperation,decimalMode){
    //por padrao colocamos o valor pressionado para ser o novo valor
    let newValue = pressingValue;
    //se nao vamos limpar o visor entao precisamos modificar valor present
    if(!CleanDisplayNextOperation){
        oldValue = parseFloat(oldValue);
        pressingValue = parseFloat(pressingValue);
        //se o modo de entrada nao eh decimal multiplicamos o valor por 10 e somamos o novo
        //valor para criar o novo valor
        if(!decimalMode){
            newValue = oldValue*10+pressingValue;
        }
        else{
            //em caso de modo decimil esse codigo coloca as casas depois da virgula
            newValue = oldValue + pressingValue/Math.pow(10,numberDecimalPlaces(oldValue)+1)
        }
    }
    else{
        //se entramos aqui eh porque vamos limpar o visor e colocar um novo valor
        //nesse caso setamos setCleanDisplayNextOperation para falso
        //pois o visor jah foi limpo
        setCleanDisplayNextOperation(false)
    }
    //finalmente despachamamos a acao para os stores via appDispatcher
    appDispatcher.dispatch({type:Action.DISPLAY_UPDATE,value:newValue})
}
export function executeMathematicsOperation(currentOperation,operationInMemory,valueInDisplay,valueInMemory){
    debugger
    let resultado = valueInDisplay;
    //lemos os valores e convertemos eles para float
    valueInDisplay = parseFloat(valueInDisplay)
    valueInMemory = parseFloat(valueInMemory)
    appDispatcher.dispatch({type:Action.CLEAN_OPERATION})
    setDecimalMode(false);
    //se nao escolhemos = como operacao, precisamos guardar a operacao
    if(currentOperation!== '='){
        appDispatcher.dispatch({type:Action.SET_OPERATION,value:currentOperation})
    }
    //se jah temos uma operacao na memoria isso significa q eh hora
    //de executar ela
    if(operationInMemory){
        switch(operationInMemory){
            case '+':
                resultado = valueInDisplay+valueInMemory;
                break;
            case '-':
                resultado = valueInDisplay-valueInMemory;
                break;
            case '*':
                resultado = valueInDisplay*valueInMemory;
                break;
            case '/':
                resultado = valueInDisplay/valueInMemory;
                break;
        }
    }
    //finalmente despachamos o novo valor
    appDispatcher.dispatch({type:Action.SAVE_VALUE,value:resultado});
    blink(resultado)
    setCleanDisplayNextOperation(true)
}
export function setCleanDisplayNextOperation(value){
    appDispatcher.dispatch({type:Action.CLEAN_DISPLAY_NEXT_OPERATION,value:value})
}
export function setDecimalMode(value){
    appDispatcher.dispatch({type:Action.DECIMAL_MODE,value:value})
}
export function setDisplay(value){
    appDispatcher.dispatch({type:Action.DISPLAY_UPDATE,value:value})
}
export function reset(){
    appDispatcher.dispatch({type:Action.SAVE_VALUE,value:0});
    appDispatcher.dispatch({type:Action.CLEAN_OPERATION});
    blink(0)
}
export function blink(value){
    setDisplay('')
    setTimeout(() =>{
        setDisplay(value)
    },100)
}
function numberDecimalPlaces(value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}