import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 35px;
    }

    button{
        margin: 0 8px;
        background-color: #0275d8;
        padding: 8px 16px;
        color: white;
        border-radius: 8px;
        font-weight: bold;

        &:hover{
            box-shadow: 3px 2px 10px gray;
            transform: scale(1.1);
        }
    }


`;

