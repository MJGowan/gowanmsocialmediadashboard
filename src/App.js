import './App.css';
import Dashboard from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Dashboard
      socialMedia={{
        fb:"@nathanf",
        tw:"@nathanf",
        insta:"@realnathanf",
        yt:"Nathan F."}}/>
    </div>
  );
}

export default App;
