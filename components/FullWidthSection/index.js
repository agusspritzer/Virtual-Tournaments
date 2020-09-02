import React from 'react';
import { SectionFullWidth } from './styled';



export default function FullWidthSection({ color, children }) {
  return (
    <SectionFullWidth color={color}>{children}</SectionFullWidth>
  )
}



