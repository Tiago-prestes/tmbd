import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext';
import Stack from '@mui/material/Stack';
import { PATH_LINK_IMAGE, POPULAR_MOVIES } from '../../constants/urls';
import { useNavigate } from "react-router-dom";
import { goToMovieDetails } from "../../routes/coordinator";
import { ImageContainer, MainContainer, PosterContainer, TitleContainer, VoteContainer } from "./style";
import { Pagination } from '@mui/material';
import useRequestData from '../../hooks/useRequestData';

const PopularMovies = () => {
    const navigate = useNavigate()
    const { setPage, page } = useContext(GlobalStateContext)
    const popularMovies = useRequestData([], `${POPULAR_MOVIES}${page}`, page)

    const handleChange = (event, value) => {
        setPage(value)
    }

    const { results } = popularMovies //Não renderiza direto no stado original. Precisa mudar para objeto.

    return (
        <MainContainer>
            {results && results.map((item) => {
                return (
                    <PosterContainer key={item.id}>
                        <ImageContainer>
                            <img
                                onClick={() => goToMovieDetails(navigate, item.id)}
                                src={`${PATH_LINK_IMAGE}${item.poster_path}`}
                                alt={item.title}
                            />
                        </ImageContainer>
                        <VoteContainer>
                            <p>{item.vote_average}</p>
                        </VoteContainer>
                        <TitleContainer>
                            <p>{item.title}</p>
                        </TitleContainer>
                    </PosterContainer>
                )
            })}
            <Stack spacing={2}>
                <Pagination count={500} page={page} onChange={handleChange} />
            </Stack>
        </MainContainer>
    )
}

export default PopularMovies