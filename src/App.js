import React from 'react';
import Video from './Video.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_videos">
      <Video 
      url="https://player.vimeo.com/external/468821581.sd.mp4?s=126b63ceb0c2977cac6e6b98da38f1a68ae17e94&profile_id=165&oauth2_token_id=57447761"
      channel='ssssangha'
      description="WOW, this works"
      song="React"
      likes={123}
      messages={456}
      shares={200}
      />

      <Video 
      url="https://player.vimeo.com/external/468821581.sd.mp4?s=126b63ceb0c2977cac6e6b98da38f1a68ae17e94&profile_id=165&oauth2_token_id=57447761"
      channel='ssssangha'
      description="WOW, this works"
      song="React"
      likes={400}
      messages={654}
      shares={140}
      />

      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}

    </div>
  );
}

export default App;
