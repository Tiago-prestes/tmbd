import { Avatar, Button } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { goToFavoriteMovies, goToPopularMovies } from '../../routes/coordinator'
import { AvatarContainer, FavButtonContainer, ImageLogo, LogoContainer, MainHeader, SignContainer, TextLogo } from './style'
import { LOGO_PINEAPPLE } from '../../constants/urls'
import GlobalStateContext from '../../global/GlobalStateContext'
import { Logout, signInWithGoogle } from '../../firebase/signInWithGoogle'

const Header = () => {
    const navigate = useNavigate()
    const { isUserSignedIn, setIsUserSignedIn } = useContext(GlobalStateContext)

    const handleLogout = () => {
        Logout()
        setIsUserSignedIn(false)
    }

    const handleSignIn = async () => {
        await signInWithGoogle()
        setIsUserSignedIn(true)
    }

    return (
        <MainHeader>
            <LogoContainer>
                <ImageLogo>
                    <img
                        src={`${LOGO_PINEAPPLE}`}
                        alt='Logomarca'
                        onClick={() => goToPopularMovies(navigate)}
                    ></img>
                </ImageLogo>
                <TextLogo>
                    <p>Roast Pineapple</p>
                </TextLogo>
            </LogoContainer>
            <FavButtonContainer>
                <Button
                    color='success'
                    variant='outlined'
                    size='small'
                    onClick={() => goToFavoriteMovies(navigate)}
                >Favoritos</Button>
            </FavButtonContainer>
            <SignContainer>
                {isUserSignedIn ?
                    <AvatarContainer>
                        <Avatar src={localStorage.getItem("profilePic")} />
                        <p>{localStorage.getItem("name")}</p>
                        <Button
                            color='success'
                            variant='contained'
                            size="small"
                            onClick={handleLogout}
                        >Logout</Button>
                    </AvatarContainer>
                    :
                    <GoogleButton
                        onClick={handleSignIn}
                    />}
            </SignContainer>
        </MainHeader>
    )
}

export default Header

