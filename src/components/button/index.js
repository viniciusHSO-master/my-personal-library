import React, { Component } from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const defaultStyle = css`
    padding: 10px;
    background-color: #c2c2c2;
    border-radius: 6px;
    border-color: #c2c2c2;
    border-style: solid;
    color: #004d58;
    font-size:22px;
    margin: 10px;
    &:hover{
        background-color: #004d58;
        color:#c2c2c2;
    }
    &:focus{
        background-color: #004d58;
        color:#c2c2c2;
    }
`;

export default class Button extends Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <> 
                <button onClick={(event)=>{this.props.icon==undefined?null:this.props.onClick(event)}} css={this.props.css==undefined?defaultStyle:this.props.css}>{this.props.icon==undefined?null: <img></img> }{this.props.nome}</button>
            </>
        )
    }
}