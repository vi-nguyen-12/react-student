import styled from 'styled-components';

export const Wrapper=styled.div`
    border-bottom:1px solid var(--color-grey);
    display:flex;
    padding:15px;
    width:100%;

    .avatar{
        width:100px;
        height:100px;
        img {
            width:100%;
            height:100%;
            border-radius:50%;
            border:1px solid #E3D9CF;
        }
    }
    .info {
        padding-left:20px;
        flex-grow:1
    }
    .grades{
        width:100%;
        padding-left:20px;
    }
    .ui.header {
        font-size:1.8rem;
    }
    .ui.list {
        padding:10px 0 0 20px;
        font-size: 0.8rem;
        .item {
            padding-bottom:3px;
        }
    }
    .ui.button {
        width: 30px;
        height:30px;
        padding:0;
        background-color: transparent;
        svg {
            width:100%;
            height:100%;
            color:#c7c5c4;
        }
    }
`