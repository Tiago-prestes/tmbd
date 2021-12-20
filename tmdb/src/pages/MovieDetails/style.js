import styled from "styled-components";

export const MainContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`
export const ImagePoster = styled.div`
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 42vh;
        background-image: url(${props => props.background});
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
                img {
                        margin-top: 30px;
                        border-radius: 4px;
                        width: 35vw;
                        height: 30vh;
                        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 0px rgba(0,0,0,0);
                }
                
@media (min-width: 900px) {
        background-position: center;
        height: 300px;
                img {
                        width: 160px;
                        height: 225px;
                }
}
`
export const InfoContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80vw;
        margin-top: 10px;
        border: 2px solid black;
        background-color: #ffe54c;

                @media (min-width: 900px) {
                width: 40vw;    
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

export const FavButton = styled.div`
        padding: 4px;
`