import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 980px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 50px;
`

export const PosterContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    width: 160px;
    height: 280px;
    margin: 16px 16px 40px 16px;
`
export const TitleContainer = styled.div`
    margin-top: 4px;
    text-align: center;
    padding-bottom: 4px ;
    P {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    max-width: 100%;
    cursor: pointer;
        img {
            border-radius: 8px;
            width: 160px;
            height: 225px;
            box-shadow: 0px 10px 13px -7px #000000, 5px 5px 6px -30px rgba(0,0,0,0);
        }
`

export const VoteContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 100%;
    border: 1px solid #005005;
    background-color: #FAB60B;
    padding: 4px;
    width: 30px;
        p {
            color: black;
        }
`
