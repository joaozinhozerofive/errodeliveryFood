import { Container } from './style'

export function InputHeader({icon : Icon, onClick, ...rest}){
    return(
        <Container
        {...rest}
        onClick={onClick}
        >
            <div>
            {Icon && <Icon/>}
            <input {...rest} />
            </div>
        </Container>
    )

}