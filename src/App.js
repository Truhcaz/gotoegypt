import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';

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
    </div>
  );
}

export default App;
