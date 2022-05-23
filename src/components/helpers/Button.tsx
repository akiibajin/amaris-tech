import React from "react"
import "../../styles/components/helper/button.scss"

interface ButtonProps{
    content:string,
    className?:string,
    handleOnClick:(event:React.MouseEvent)=>void
}

export default function Button({content, className, handleOnClick}:ButtonProps){
    return(
        <>
        <button className={className} onClick={handleOnClick}>{content}</button>
        </>
    )
}