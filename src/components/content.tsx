import { useParams } from 'react-router-dom';
import PhoneContent from './contentPhone';
import LapTopContent from './contentLaptop';
import AccessoriesContent from './contentAccessories';
import React from 'react';
import KeyboardContent from './contentKeyboard';

export function Content() {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="p-4 flex-1">
      {category === 'phones' && <PhoneContent />}
      {category === 'laptops' && <LapTopContent />}
      {category === 'accessories' && <AccessoriesContent />}
      {category === 'keyboards' && <KeyboardContent />}
    </div>
  );
}
