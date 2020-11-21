import React, {FC} from 'react';
import ChristmasTreeImage from '../assets/christmas-tree.png';


export const ChristmasTreeSprite: FC = () => {
  return (
    <>
      <img src={ChristmasTreeImage} style={{width: '15vw'}}/>
    </>
  );
}
