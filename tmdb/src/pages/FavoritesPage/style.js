import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 50px;
    align-items: center;
    flex-wrap: wrap;
`

export const FavContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 4px;
`

export const ImageContainer = styled.div`
    display: flex;
    max-width: 100%;
    margin-right: 4px;
    cursor: pointer;
        img {
            border-radius: 8px;
            width: 110px;
            height: 175px;
        }
`

export const DeleteButton = styled.div`
        button {
            color: red;
            border: none;
            background-color: transparent;
            transition-duration: 0.4s;
            :hover {
                    background-color: red;
                    color: white;
            }
            :active {
                    background-color: white;
                    color: red;
            }
        }
`

export const TitleContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1em ;
                p {
                    padding-left: 4px ;
                }
`

export const DescriptionContainer = styled.div`
        margin: 0px 8px 12px 8px;
`

export const InfoContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80vw;
        border: 2px solid black;
        background-color: #ffe54c;

                @media (min-width: 900px) {
                width: 40vw;    
                }
`