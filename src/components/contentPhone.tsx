import React from 'react';

import iphoneImage from '../images/iphone16.jpg';
import samsungImage from '../images/samsungs24.jpg';
import xiaomiImage from '../images/xiaomi14ul.jpg';
import oppoImage from '../images/oppofindx8.jpg';
import pocox7pro from '../images/pocox7pro.jpg';
import realmex7pro from '../images/realmex7pro.jpg';

const imgPhone = [
  { id: 1, src: iphoneImage, alt: 'Iphone 16 Pro Max' },
  { id: 2, src: samsungImage, alt: 'Samsung Galaxy S24 Ultra' },
  { id: 3, src: xiaomiImage, alt: 'Xiaomi 14 Ultra' },
  { id: 4, src: oppoImage, alt: 'Oppo Find x8' },
  { id: 5, src: pocox7pro, alt: 'Poco X7 Pro' },
  { id: 6, src: realmex7pro, alt: 'Realme X7 Pro' },
];

const PhoneContent = () => {
  return (
    <div className="container p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {imgPhone.map((img) => {
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

export default PhoneContent;
