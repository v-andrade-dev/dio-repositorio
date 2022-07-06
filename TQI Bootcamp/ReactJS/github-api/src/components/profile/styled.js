import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;

export const WrapperUser= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    h2{
        font-size: 32px;
        font-weight: bold;
    }

    h3{
        font-size: 18px;
        font-weight: bold;
    }

    
    h4{
        font-size: 16px;
        font-weight: bold;
    }
    
`;

export const WrapperUserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
    h3{
        margin-right: 8px;
    }

    a{
        font-size: 18px;
        color: green;
        font-weight: bold;
    }

    div{
        display: block;
    }
`;


export const WrapperConnection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    div{
        margin: 8px;
        text-align: center;
    }
`;




