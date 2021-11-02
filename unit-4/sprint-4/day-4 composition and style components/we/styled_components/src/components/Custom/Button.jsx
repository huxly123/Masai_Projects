import styled from "styled-components";

export const Button=styled.button
`border:transparent;
padding:10px;
background: ${(props)=>(props.theme==="light"? "orange":"violet")};
color: white;
border-radius: 10px;
width:100px;
border: transparent;
&:hover{
    box-shadow:12px 12px 15px black
}
`