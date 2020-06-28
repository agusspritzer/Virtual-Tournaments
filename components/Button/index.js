import React from 'react';
import { ButtonSubmit } from './styled';



const Button = React.forwardRef(({ mensaje, ancho, onClick, href }, ref) => {
    return (
        <ButtonSubmit onClick={onClick} href={href} ref={ref} width={ancho}>{mensaje} </ButtonSubmit>
    )

}
)


export default Button;