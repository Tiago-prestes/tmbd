export const goToMovieDetails = (navigate, path) => {
    navigate(`/filme/${path}`)
}

export const goToPopularMovies = (navigate) => {
    navigate("/")
}

export const goToFavoriteMovies = (navigate) => {
    navigate("/favoritos")
}