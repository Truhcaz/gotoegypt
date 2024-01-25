import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import Experiences from './components/Experiences';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';

import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <div className="App">
        <Hero></Hero>
        <Intro></Intro>
        <About></About>
        <Experiences></Experiences>
        <Sponsor></Sponsor>
        <Footer></Footer>
    </div>
  );
}

export default App;
