/* eslint-disable import/extensions */
import React, { useState } from 'react';
import GlobalStyle from './globalStyle.js';
import CardsTable from './cardsTable.jsx';

function RelatedItems() {
  const [count, setCount] = useState(0);
  const [productInfo, setProductInfo] = useState(
    [{
      id: 1,
      img: 'https://upload.wikimedia.org/wikipedia/en/archive/3/3c/20140214062925%21Kenny_Loggins.jpg',
      name: 'placeholder1',
      description: 'a thing',
      category: 'misc.',
      default_price: '50',
    },
    {
      id: 2,
      img: 'https://upload.wikimedia.org/wikipedia/en/7/77/Love_songs_of_Kenny_Loggins.jpg',
      name: 'placeholder2',
      description: 'another thing',
      category: 'misc.',
      default_price: '50',
    }, {
      id: 3,
      img: 'https://e.snmc.io/i/600/w/e8d630ceb66510207e8a48eb112358f9/7473234',
      name: 'placeholder2',
      description: 'another thing',
      category: 'misc.',
      default_price: '50',
    },
    {
      id: 4,
      img: 'https://www.historyforsale.com/productimages/jpeg/323109.jpg',
      name: 'placeholder2',
      description: 'another thing',
      category: 'misc.',
      default_price: '50',
    },
    {
      id: 5,
      img: 'https://www.historyforsale.com/productimages/jpeg/205295.jpg',
      name: 'placeholder2',
      description: 'another thing',
      category: 'misc.',
      default_price: '50',
    },
    {
      id: 6,
      img: 'https://c8.alamy.com/comp/2AK24X9/kenny-loggins-1994-photo-by-michael-fergusonphotolink-2AK24X9.jpg',
      name: 'placeholder2',
      description: 'another thing',
      category: 'misc.',
      default_price: '50',
    }],
  );

  return (
    <>
      <GlobalStyle />
      <body>
        <h1>Welcome to the Dangerzone.</h1>
        <p> Long Live the Scrumdog Millionaires </p>
        <p>
          {`You clicked ${count} times.`}
        </p>
        <button onClick={() => setCount(count + 1)} type="submit">Dangerous Button</button>
        <CardsTable products={productInfo} />
      </body>
    </>
  );
}

export default RelatedItems;
