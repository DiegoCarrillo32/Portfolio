
import './App.css';
import img from './assets/diegoc.png';
import Carrousel from './components/Carrousel/Carrousel';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
function App() {
  const dataList = [
    {
      src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      alt:'CAT'
    },
    {
      src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt:'CAT'
    },
    {
      src: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt:'CAT'
    },
  ]
  const dataList2 = [
    {
      src: 'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt:'DOG'
    },
    {
      src: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt:'DOG'
    },
    {
      src: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt:'DOG'
    },
  ]
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
          <p> I am a Junior software developer, currently studying and going through my third year of career, I am very passionate about learning and web development, I have strong knowledge about React and I really like it. I have also worked with Angular </p>
        </div>
        <section  id='projects' className='project-container'>
          <div className='project-info'>
            <h2>React blog</h2>
            <p>'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? ' </p>
            
          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList}/>
          </div>
        </section>
        <section className='project-container'>
          <div className='project-info'>
            <h2>React blog</h2>
            <p>'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? '</p>
          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList2}/>
          </div>
        </section>
        
      </main>
      <Footer/>
    </>

  );
}

export default App;
