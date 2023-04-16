import React from "react";

const ContentComponent = ({ userId, favorites, additional }) => {
    const favoritesList = favorites?.split(',').map((favorite) => favorite.trim());
    return (
      <div className="p-8">
        {userId && (
          <p>
            UserName: <b>{userId}</b>
          </p>
        )}
        {favoritesList && (
          <>
            <p className="mt-2">Favorites:</p>
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