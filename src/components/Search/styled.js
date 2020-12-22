import styled from 'styled-components';

export const Wrapper=styled.div`
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    .ui.input {
        width: 98%;
        padding:10px;
        font-size:1rem;
        &>input{
            border:1px solid transparent;
            border-bottom:1px solid var(--color-black);
            border-radius:0;
        }
    }
    
`