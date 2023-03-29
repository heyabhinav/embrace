import './App.css';
import Commitments from './components/Commitments/Commitments';
import Companies from './components/Companies/Companies';
import LandingPage from './components/LandingPage/LandingPage';
import OurWork from './components/OurWork/OurWork';
import Working from './components/Working/Working';
import Banner from './components/Banner/Banner';
import OurTeam from './components/OurTeam/OurTeam';
import Clients from './components/Clients/Clients';
import StartJourney from './components/StartJourney/StartJourney';
import Help from './components/Help/Help';

function App() {
  return (
    <>
      <LandingPage/>
      <Companies/>
      <Commitments/>
      <Working/>
      <OurWork/>
      <Banner/>
      <OurTeam/>
      <Clients/>
      <StartJourney/>
      <Help/>
    </>
  );
}

export default App;
