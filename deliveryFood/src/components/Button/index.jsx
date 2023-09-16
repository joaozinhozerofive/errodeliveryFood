import { Container } from "./style";

export function Button({icon: Icon, onClick, title, ...rest}){
    return(
        <Container 
        onClick={onClick}
        {...rest}>
        {Icon && <Icon size={20}/>}
        {title}
        
        </Container>

    )
}