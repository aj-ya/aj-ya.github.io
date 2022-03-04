import React from 'react';
import '../styles/globals.scss';
import '../styles/App.scss';
function App() {
  return (
    <div className="mainBody">
      <div className="big-text">What I Recently Played</div>
      <div className="img-div">
        <img
          alt="spotify-github-profile"
          src="https://spotify-github-profile.vercel.app/api/view?uid=ajeybhat82-5&cover_image=true&theme=default&bar_color=09ff00&bar_color_cover=true"
        />
      </div>
    </div>
  );
}

export default App;
