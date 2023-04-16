import React from "react";

const ContentComponent = ({ userId, favorites, additional, language }) => {
  const textContent = {
    en: {
      userName: 'UserName',
      favorites: 'Favorites',
    },
    vn: {
      userName: 'Tên tài khoản',
      favorites: 'Yêu thích',
    },
  };
    const favoritesList = favorites?.split(',').map((favorite) => favorite.trim());
    return (
      <div className="p-8">
        {userId && (
        <p>
          {textContent[language].userName}: <b>{userId}</b>
        </p>
        )}
        {favoritesList && (
          <>
            <p className="mt-2">{textContent[language].favorites}:</p>
            <ul className="text-left mt-2">
              {favoritesList.map((favorite) => (
                <li key={favorite}>{favorite}</li>
              ))}
            </ul>
          </>
        )}
        {additional && <i>{additional}</i>}
      </div>
    );
  };

export default ContentComponent;