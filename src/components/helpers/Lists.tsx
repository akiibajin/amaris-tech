import "../../styles/components/helper/list.scss"
interface ListProps{
    settingsList:string[],
    className:string | undefined
}

export default function List({settingsList, className} : ListProps):JSX.Element{
    return(
        <ul className={String(className)}>
        {settingsList.map(setting=>(
            <li className={`element-${className}`}>
                {setting}
            </li>
        ))}
        </ul>
    )
}