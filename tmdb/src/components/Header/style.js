import styled from "styled-components";

export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 8px solid #FAB60B;
`

export const LogoContainer = styled.div`
    display: flex;
    padding-left: 1rem;
`

export const TextLogo = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.6rem;
            p { 
            font-size: 2vw;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            align-items: baseline;
            color: #005005;
        }
`

export const ImageLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
            width: 4vw;
        }
`

export const FavButtonContainer = styled.div`
    padding-top: 10px;
    padding-right: 1rem;
`

export const SignContainer = styled.div`
    padding-top: 2px;
    padding-right: 1rem;
`

export const AvatarContainer = styled.div`
    display: flex;
    border: 1px solid #ffb300;
    padding: 4px 4px 4px 4px;
    align-items: center;
    background-color: #FFE54C;
    border-radius: 4px;
    justify-content: space-between;
    width: 200px;
        P { 
            padding-left: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

`