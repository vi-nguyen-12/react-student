import styled from 'styled-components';

export const Wrapper=styled.div`
    padding-left:15px;
    .ui.form{
        width:200px;
        input{
            border:1px solid transparent;
            border-radius:0;
            border-bottom: 2px solid var(--color-grey);
            padding:5px;
    }
    
    }
    .ui.list{
        display:flex;
        width:100%;
        & .item{
        width:fit-content;
        padding: 10px;
        font-size:0.75rem;
        margin-left:5px;
        background-color: var(--color-grey);
        border-radius: 5px;
    }
    }
    
`