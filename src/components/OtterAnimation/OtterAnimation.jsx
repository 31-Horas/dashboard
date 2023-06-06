import React from 'react';
import './OtterAnimation.css'

function OtterAnimation() {
  return (
    <div className='video-container'>
      <video className='video-player' src='otter.mp4' autoPlay loop muted>

      </video>
    </div>
  );
}

export default OtterAnimation;