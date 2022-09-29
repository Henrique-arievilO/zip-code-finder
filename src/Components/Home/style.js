import styled from 'styled-components';
export const Section = styled.section`
    width: 100%;
    height: calc(100vh - 5rem);
`

export const Title = styled.h1`
    text-align: center;
    font-family: var(--primaryFont);
    font-size: 50px;
`
export const Button = styled.button`
    width: 5rem;
    height: 30px;
    margin: 2rem auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    border: 1px solid var(--violet700);
    background-color: var(--violet600);
    font-family: var(--secundaryFont);
    font-size: 1.2rem;
    cursor: pointer;
    
    &:hover{
        background-color: var(--violet500);
    }
    `