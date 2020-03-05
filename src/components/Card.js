import React from 'react';

const Card = ({ id, name, email, username }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${username}?size=200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
