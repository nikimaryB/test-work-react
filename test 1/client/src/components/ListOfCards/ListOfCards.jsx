import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

export default function ListOfCards() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // тут был бы запрос на api
    // Использование redux излишне
    setList([
      {
        header: 'Заголовок 1',
        options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3'],
        text: 'какой-то текст 1 текст какой-то 1 какой-то',
      },
      {
        header: 'Заголовок 2',
        options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3', 'элемент списка 4', 'элемент списка 5'],
        text: 'какой-то текст 2 текст какой-то 2 какой-то',
      },
      {
        header: 'Заголовок 3',
        options: ['элемент списка 1', 'элемент списка 2', 'элемент списка 3'],
        text: 'какой-то текст 3 текст какой-то 3 какой-то какой-то текст 3 текст какой-то 3 какой-то',
      },
    ]);
  }, []);
  return (
    <>
      <h4>ListOfCards</h4>
      <div className="d-flex flex-row mb-3">
        {list?.map((el) => (
          <Card key={el.header} card={el} />
        ))}
      </div>
    </>
  );
}
