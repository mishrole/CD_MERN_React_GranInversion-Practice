import React, { useState } from 'react';

const PersonCard = ({ lastName, firstName, age, hairColor }) => {

  const [newAge, setNewAge] = useState(age);

  const happyBirthday = () => {
    setNewAge(newAge + 1);
  }

  return (
    <div className="card">
      <h1 className="mt-0">{ lastName } { firstName }</h1>
      <p>Age: { newAge }</p>
      <p>Hair Color: { hairColor }</p>
      <button onClick={happyBirthday} className="btn">Happy Birthday { firstName }</button>
    </div>
  );
}

export default PersonCard;