
import './App.css';
import React, { useRef } from 'react';
import video from './asset/Maluma - Cosas Pendientes (Official Video) (1).mp4';

function App() {
  const videoRef=useRef(null);
  const videoPlay=()=>{
    videoRef.current.play();
  };
  const videoPause=()=>{
    videoRef.current.pause();
  };
  return (
    <div>
      <video ref={videoRef} width="400" height="300" controls>
      <source src={video} type="video/mp4"></source>
      </video>
      <div>
      <button onClick={videoPlay}>Play</button>
      <button onClick={videoPause}>Pause</button>
      </div>
      



    </div>
  );
}

export default App;
