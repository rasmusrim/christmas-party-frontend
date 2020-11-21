import React, {FC} from 'react';
import {ParticipantType} from "../types/ParticipantType";
import {ManSprite} from "../sprites/ManSprite";

interface Props {
  participant: ParticipantType;
}

export const Participant: FC<Props> = ({participant}: Props) => {
  return (
    <ManSprite style={{transform: 'rotateY(' + participant.progress / 100 * 360 + 'deg)'}}/>
  );
}
