import styled from 'styled-components';
import Background from '../../assets/search.png'

export const Modal = styled.section`
    width: 30%;
    height: 200px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 1rem;
    background-color: var(--violet300);
    box-shadow: 5px 5px 10px var(--violet900);
`
export const Box = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
export const Input = styled.input`
    width: calc(95% - 30px);
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
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: var(--violet600);
    background-image: url(${Background});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    
    &:hover{
        background-color: var(--violet500);
    }
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