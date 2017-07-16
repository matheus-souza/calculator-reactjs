import React from 'react'
import Button from './Button'
export default class Keyboard extends React.Component {
    render(){
        return(
            <div id="keyboard">
                <Button valor="c"/>
                <Button valor="+/-"/>
                <Button valor="%"/>
                <Button valor="/"/>
                <Button valor="7"/>
                <Button valor="8"/>

                <Button valor="9"/>
                <Button valor="*"/>
                <Button valor="4"/>
                <Button valor="5"/>
                <Button valor="6"/>
                <Button valor="+"/>
                <Button valor="4"/>
                <Button valor="5"/>
                <Button valor="6"/>
                <Button valor="-"/>
                <Button valor="0"/>
                <Button valor="."/>
                <Button valor="pi"/>
                <Button valor="="/>
            </div>
        )
    }
}