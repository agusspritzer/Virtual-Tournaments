import styled from 'styled-components'
{/* Aca traigo el styled para escribir el css*/}


{/* Este es el styled el codigo delheader*/}

const ContenedorHeader = styled.div`



*{
    padding: 0;
    margin:0;
}


background-color: #272727;
padding: 1% 0 1% 0%;


#logo{
    width:20%;
}


nav{
    width: 50%;
    
}

nav ul li{
    display: flex;
    justify-content: space-between;
    
}

nav ul li a{
    text-decoration: none;
    color: #EEEEEE;
    font-size: 1em;
    font-weight: 600;
    transition: all 0.2s ease 0s;
}

nav ul li a:hover{
    border-bottom: 2px;
    border-bottom-color: #EA33BC;
}
`

const Grilla = styled.div`

*{
    padding: 0;
    margin:0;
}

width: 65%;
margin: 0 auto;
background-color: grey;
display:flex;
justify-content: space-between;

`


export {ContenedorHeader,Grilla}