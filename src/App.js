import './App.css';
import Commitments from './components/Commitments/Commitments';
import Companies from './components/Companies/Companies';
import LandingPage from './components/LandingPage/LandingPage';
import OurWork from './components/OurWork/OurWork';
import Working from './components/Working/Working';
import Banner from './components/Banner/Banner';
import OurTeam from './components/OurTeam/OurTeam';

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
    </>
  );
}

export default App;
