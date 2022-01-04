import React, { useEffect, useState } from 'react'
import { db } from "../../firebase/firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { PATH_LINK_IMAGE } from '../../constants/urls';
import { DeleteButton, DescriptionContainer, FavContainer, ImageContainer, InfoContainer, MainContainer, TitleContainer } from './style';
import toast from 'react-hot-toast'
import DeleteIcon from '@mui/icons-material/Delete';


const FavoritesPage = () => {
    const favCollectionRef = collection(db, "favmovies")
    const [favoriteList, setFavoriteList] = useState([])

    useEffect(() => {
        const getFav = async () => {
            const data = await getDocs(favCollectionRef)
            setFavoriteList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getFav()
    }, [favoriteList])//Puxa a lista de favoritos.

    const deleteFav = async (id) => {
        const favDoc = doc(db, "favmovies", id)
        await deleteDoc(favDoc)
        // toast.error("Removido dos favoritos.")
    }//Deleta favorito pela id.

    return (
        <MainContainer>
            {favoriteList.map((fav) => {
                return (
                    <FavContainer>
                        <ImageContainer>
                            <img src={`${PATH_LINK_IMAGE}${fav.link.poster_path}`}></img>
                        </ImageContainer>
                        <InfoContainer>
                            <TitleContainer>
                                <h4>{fav.link.title}</h4>
                            </TitleContainer>
                            <DescriptionContainer>
                                <p>{fav.link.overview}</p>
                            </DescriptionContainer>
                            <DeleteButton>
                                <button
                                    onClick={() => deleteFav(fav.id)}
                                ><DeleteIcon /></button>
                            </DeleteButton>
                        </InfoContainer>
                    </FavContainer>
                )
            })}

        </MainContainer>
    )
}

export default FavoritesPage
