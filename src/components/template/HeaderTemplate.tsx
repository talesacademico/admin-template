import { Title } from "./Title";

interface HeaderTempalteProps{
    title: string,
    subtitle: string,
}

export function HeaderTemplate({title, subtitle}:HeaderTempalteProps){
    return(
        <>
        <Title title={title} subtitle={subtitle}/>
        </>
    )
}