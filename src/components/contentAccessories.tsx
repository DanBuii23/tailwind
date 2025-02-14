import React from 'react';

import airpods from '../images/airpods.jpg';
import jbltune from '../images/JBLtune.jpg';
import sonyWF from '../images/sony-WF.jpg';
import marshall from '../images/marshall.jpg';
import soundcore from '../images/soundcore.jpg';
import qcypro from '../images/qcy-pro.jpg';

const imgAccessories = [
  { id: 1, src: airpods, alt: 'AirPods Pro' },
  { id: 2, src: jbltune, alt: 'JBL Tunes' },
  { id: 3, src: sonyWF, alt: 'Sony WF-1000xm4' },
  { id: 4, src: marshall, alt: 'Marshall' },
  { id: 5, src: soundcore, alt: 'Soundcore r50i NC' },
  { id: 6, src: qcypro, alt: 'QCY Melobuds Pro' },
];

const AccessoriesContent = () => {
  return (
    <div className="container p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {imgAccessories.map((img) => {
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

export default AccessoriesContent;
