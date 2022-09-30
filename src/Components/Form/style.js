import styled from 'styled-components';

export const Modal = styled.section`
    width: 30%;
    height: 250px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 1rem;
    background-color: var(--violet300);
    box-shadow: 5px 5px 10px var(--violet900);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`
export const Box = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #singleButton{
        width: 70px;
        height: 30px;
        margin-top: 10px;
        font-size: 1.2rem;
    }
    `
export const Input = styled.input`
    width: calc(90% - 30px);
    height: 30px;
    text-align: center;
    font-family: var(--secundaryFont);
    font-size: 1.5rem;
    background-color: var(--violet100);
    border: solid 1px var(--violet900);
    border-radius: 5px;
    `
export const Button = styled.button`
    width: 30px;
    margin: 0 auto;
    border: 1px solid var(--violet700);
    border-radius: 5px;
    box-shadow: 2px 2px 4px var(--violet900);
    background-color: var(--violet600);
    font-family: var(--secundaryFont);
    cursor: pointer;
    
    &:hover{
        background-color: var(--violet500);
        box-shadow: none;
    }
    `
export const Image = styled.img`
    width: 80%;
`
export const Container = styled.div`
    width: 100%;
    height: 90px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-family: var(--secundaryFont);
`
export const Subtitle = styled.h2`
    font-size: 25px;
`
export const P = styled.p`
    font-size: 20px;
`