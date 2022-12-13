import React from 'react';

export default function Card({ card }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{card?.header}</h5>
        <ul className="list-group">
          {card?.options.map((el) => (
            <li key={JSON.stringify(el)} className="list-group-item">{el}</li>
          ))}
        </ul>
        <p>{card?.text}</p>
      </div>
    </div>
  );
}
