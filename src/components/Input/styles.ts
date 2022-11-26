import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 2.625rem;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    padding: 0 0.625rem;
    
    & input {
        width: 100%;
        height: 2.625rem;
        border-radius: 1.313rem;
        background-color: transparent;
        border: 0;
        outline: none;
    }

`

export const ErrorMessage = styled.p`
    color: #0b090a;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-left: 0.625rem;
`