import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

const FavoritesContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealids] = useState([]);
    const addFavorite = (id) => {
        setFavoriteMealids((currentFavorites) => [id, ...currentFavorites]);
    };
    const removeFavorite = (id) => {
        setFavoriteMealids((currentFavorites) => currentFavorites.filter(eachFavoriteId => eachFavoriteId !== id));
    };
    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    };

    return <FavoriteContext.Provider value={value}>{ children }</FavoriteContext.Provider>;
}

export default FavoritesContextProvider;