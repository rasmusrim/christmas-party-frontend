import React, {FC} from 'react';
import Man from '../assets/man.png';

interface Props {
  style?: React.CSSProperties;
}

export const ManSprite: FC<Props> = ({style}: Props) => {
  return (
    <>
      <img src={Man} style={{width: '5vw', ...style}}/>
    </>
  );
}
