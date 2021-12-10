export const goToMovieDetails = (history, path) => {
    history.push(`/filme/${path}`)
}

export const goToPopularMovies = (history) => {
    history.push("/")
}

export const goToFavoriteMovies = (history) => {
    history.push("/favorito")
}