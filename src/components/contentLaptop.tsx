import React from 'react';

import macbook from '../images/macbook-pro.jpg';
import legion from '../images/legion7-pro.jpg';
import dell from '../images/dell-XPS.jpg';
import surface from '../images/surface-pro9.jpg';
import thinkpad from '../images/thinkpad.jpg';
import vivobook from '../images/vivobook.jpg';

const imgLaptop = [
  { id: 1, src: macbook, alt: 'Macbook Pro' },
  { id: 2, src: legion, alt: 'Legion 7 Pro' },
  { id: 3, src: dell, alt: 'Dell XPS' },
  { id: 4, src: surface, alt: 'Windows Surface Pro 9' },
  { id: 5, src: thinkpad, alt: 'ThinkPad' },
  { id: 6, src: vivobook, alt: 'Vivobook' },
];

const LapTopContent = () => {
  return (
    <div className="container p-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {imgLaptop.map((img) => {
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

export default LapTopContent;
