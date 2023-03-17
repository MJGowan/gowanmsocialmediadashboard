//Madeline Gowan
//3-17-2023
//Social Media Dashboard
//With the assets given to you remake the following Project - Social Media Dashboard
//Goal is to recreate this challenge as close to the design as possible and having it function properly.
//Tried adding props into the project and struggled to add multiple separate props, so I went with the route of putting everything in one prop
//Peer reviewed by Marcel - The application looks really nice. The dark mode works and everything is responsive. My only critique is that the toggle switch doesn’t change color, but other than that It is really good! Great Job!

import './App.css';
import Dashboard from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Dashboard
      props={{
        fb:"@nathanf",
        tw:"@nathanf",
        insta:"@realnathanf",
        yt:"Nathan F.",
        fbNum:"1987",
        twNum:"1044",
        instaNum:"11k",
        ytNum:"8239",
        fb1:"87",
        fb2:"52",
        insta1:"5462",
        insta2:"52k",
        tw1:"117",
        tw2:"507",
        yt1:"107",
        yt2:"1407"
              }}
        />
    </div>
  );
}

export default App;
