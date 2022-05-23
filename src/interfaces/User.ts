

export interface IUser{
    email:string,
    password:string
}

export interface UserData extends IUser{
    name:string,
    surName:string,
    age:number
}