import React from 'react';
import { ButtonType } from './styled';



const Ext_Link = React.forwardRef(({ Mensaje, ButtonMode, onClick, href }, ref) => {
  return (
    <ButtonType onClick={onClick} href={href} ref={ref} modo={ButtonMode}>{Mensaje}</ButtonType>
  )

}
)


export default Ext_Link;