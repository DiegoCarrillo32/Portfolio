
import { BsFileArrowUp } from 'react-icons/bs';
import './App.css';
import img from './assets/diegoc.png';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
function App() {

  return (
    <>
      <div id='top'></div>
      <Navbar />
      <div className='main-container'>
        <div className='left-container'>
          <p className='no-margin' >My name is</p>
          <h1 className='no-margin'>DIEGO CARRILLO</h1>
          <p className='no-margin' >SOFTWARE DEVELOPER</p>
        </div>
        <div className='side-container'>
          <div className='img-wrapper'>
            <img className='image' src={img} alt='me'></img>
          </div>
        </div>
      </div>
      
      <main className='body-container'>
        <div id='about-me' className='about-me'>
          <p> 'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? ' 'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? '</p>
        </div>
        <section  id='projects' className='project-container'>
          <div className='project-info'>
            <p>In this project i was trying to learn the basics of react!</p>
          </div>
          <div className='project-image'>

          </div>
        </section>
        <section className='project-container'>
          <div className='project-info'>
            <p>In this project i was trying to learn the basics of react!</p>
          </div>
          <div className='project-image'>

          </div>
        </section>
        
      </main>
      {/* <div className='goUp'> <BsFileArrowUp/> a </div> */}
      <Footer/>
      
    </>

  );
}

export default App;
