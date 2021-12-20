import React, { useState } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { DescriptionContainer, FavButton, ImagePoster, InfoContainer, MainContainer, TitleContainer } from './style'
import { API_KEY, MOVIE_DETAILS, PATH_LINK_IMAGE } from '../../constants/urls';
import { useNavigate, useParams } from 'react-router-dom';
import { goToPopularMovies } from '../../routes/coordinator';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase-config";
import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast'


const MovieDetails = () => {
    const navigate = useNavigate()
    const { path } = useParams()
    const [newFavorite, setNewFavorite] = useState([])
    const currentMovie = useRequestData([], `${MOVIE_DETAILS}${path}${API_KEY}`)
    const favCollectionRef = collection(db, "favmovies")

    const handleFavorite = async () => {
        toast.success('Adicionado aos favoritos!')
        setNewFavorite(currentMovie)
        await addDoc(favCollectionRef, { link: newFavorite })
    } //Add novo item a lista de favoritos.

    return (
        <MainContainer>
            <ImagePoster background={`${PATH_LINK_IMAGE}${currentMovie.backdrop_path}`}>
                <img src={`${PATH_LINK_IMAGE}${currentMovie.poster_path}`} alt={currentMovie.title} />
            </ImagePoster>
            <FavButton>
                <Button
                    color='success'
                    variant='contained'
                    size='small'
                    onClick={() => handleFavorite()}>Favoritar</Button>
            </FavButton>
            <InfoContainer>
                <TitleContainer>
                    <h4>{currentMovie.title}</h4>
                </TitleContainer>
                <DescriptionContainer>
                    <p>{currentMovie.overview}</p>
                </DescriptionContainer>
                <Button
                    color='success'
                    variant='outlined'
                    size='small'
                    onClick={() => goToPopularMovies(navigate)}
                >Voltar</Button>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </InfoContainer>
        </MainContainer>
    )
}

export default MovieDetails
