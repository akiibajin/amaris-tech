import { Control, FieldValues, UseControllerProps } from "react-hook-form";

export interface TextEditorForControlled{
    name:string,
    control:Control<FormData, any>,
    defaultValue:string,
    rules:UseControllerProps,
    label:string,
    type?:string,
    errors:any,
    color: 'primary' | 'secondary'
}