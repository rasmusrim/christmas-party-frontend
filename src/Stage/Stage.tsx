import React, {FC} from 'react';
import {ParticipantType} from "../types/ParticipantType";
import {Participant} from './Participant';
import {ChristmasTreeSprite} from "../sprites/ChristmasTreeSprite";
import styled from 'styled-components';

interface Props {
  participants: ParticipantType[];
}

export const Stage: FC<Props> = ({participants}: Props) => {

  return (
    <StageWrapper>
      <ChristmasTreeWrapper>
        <ChristmasTreeSprite/>
        {participants.map(participant => (
          <Participant key={participant.id} participant={participant}/>
        ))}
      </ChristmasTreeWrapper>
    </StageWrapper>
  );
}

const StageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const ChristmasTreeWrapper = styled.div`
  position: absolute;
  top: 50vh;
  left: 50vw;
`;

