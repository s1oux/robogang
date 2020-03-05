import React from 'react';

import Card from './Card';

const CardList = ({ robots }) => {
  const robotCards = robots.map(robot => (
    <Card
      key={robot.id}
      id={robot.id}
      name={robot.name}
      email={robot.email}
      username={robot.username}
    />
  ));

  return <div>{robotCards}</div>;
};

export default CardList;
