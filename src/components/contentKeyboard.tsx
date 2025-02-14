import React from 'react';

import akko108 from '../images/akko108.jpg';
import akko68 from '../images/akko68.jpg';
import akko87 from '../images/akko87.jpg';
import akkoanime from '../images/akko-anime.jpg';
import havit from '../images/havit.jpg';
import logitech from '../images/logitech.jpg';

const imgKeyboard = [
  { id: 1, src: akko108, alt: 'Bàn phím Akko 108 phím' },
  { id: 2, src: akko68, alt: 'Bàn phím Akko 68 phím' },
  { id: 3, src: akko87, alt: 'Bàn phím Akko 87 phím' },
  { id: 4, src: akkoanime, alt: 'Bàn phím Akko OnePiece' },
  { id: 5, src: havit, alt: 'Bàn phím Havit' },
  { id: 6, src: logitech, alt: 'Bàn phím Logitech' },
];

const KeyboardContent = () => {
  return (
    <div className="container p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {imgKeyboard.map((img) => {
        return (
          <div
            className="border-2 border-gray-200 hover:border-gray-400 active:border-gray-600 rounded-lg p-2"
            key={img.id}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="mx-auto object-contain w-80 h-80"
            />
            <p className="justify-self-center pt-5">{img.alt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default KeyboardContent;
