import styled from "styled-components"


export const Div = styled.div
    `background-color:${(props)=>(props.theme==="light"?"white":"black")};
    width:100vw;
    height:100vh
    `
