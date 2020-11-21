import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ParticipantType} from "./types/ParticipantType";
import {Stage} from "./Stage/Stage";
import {useKeyPress} from "./hooks/useKeyPress";

function App() {

  const [participants, setParticipants]  = useState<ParticipantType[]>([]);
  const enterPressed = useKeyPress('Enter');

  useEffect(() => {
    const participant: ParticipantType = {
      id: '1',
      progress: 0
    }

    setParticipants([participant])
  }, [])

  useEffect(() => {
    if (enterPressed) {
      setParticipants(participants.map(participant => ({...participant, progress: participant.progress + 1})));
    }
  }, [enterPressed])

    console.log(participants)

  return (
    <div className="App">
      <Stage participants={participants}/>
    </div>
  );
}

export default App;
