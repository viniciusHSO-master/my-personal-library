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
        color:#fff;
    }
`;

export default class Button extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <button onClick={(event)=>{this.props.onClick(event)||false}} css={defaultStyle}>{this.props.nome}</button>
            </>
        )
    }
}