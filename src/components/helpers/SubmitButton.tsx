import { Button } from "@mui/material";

export interface SubmitButtonProps{
    color:'success' | 'primary' | 'secondary' | 'error',
    type?: 'submit',
    content:string,
    className:string
}

export default function SubmitButton({ type, content, color, className }:SubmitButtonProps){
    return(
        <Button type="submit" color={color??"success"} variant="contained" className={className}>
      {content}
    </Button>
    )
}