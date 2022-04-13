
import { useEffect, useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFileArrowUp } from 'react-icons/bs';
import './App.css';
import img from './assets/diegoc.png';
import Carrousel from './components/Carrousel/Carrousel';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Modal } from './containers/Modal/Modal';
function App() {
  const [isOpened, setIsOpened] = useState(false)
  const containerRef = useRef(null);
  const containerRef1 = useRef(null);
  const [isVisible, setIsVisible] = useState(false)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    root:null,
    rootMargin:'0px',
    threshold:1.0
  }

  const callback = (entries) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting){  
        entry.target.classList.add('visible')
      }else{
        entry.target.classList.remove('visible')
      }
    } )
    
  }

  useEffect( () => {
    const observer = new IntersectionObserver(callback, options)
    if(containerRef.current){ observer.observe(containerRef.current);observer.observe(containerRef1.current) }
    return () => {
      if(containerRef.current){ observer.unobserve(containerRef.current); observer.unobserve(containerRef1.current) }
    }
  }, [containerRef,options, containerRef1] )


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
      
      <div className='body-container' >
        
        <div id='about-me' className='about-me'>
          <p> I am a Junior software developer, currently studying and going through my third year of career, I am very passionate about learning and web development, I have strong knowledge about React and I really like it. I have also worked with Angular </p>
        </div>
        <div id='projects'></div>
        <section className={'project-container'} ref={containerRef} >
          <div className='project-info'>
            <h2>React blog</h2>
            <p>'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? ' </p>
            
          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList}/>
          </div>
        </section>
        <section className={ 'project-container' } ref={containerRef1} >
          <div className='project-info'>
            <h2>React blog</h2>
            <p>'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? '</p>
          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList2}/>
          </div>
        </section>
        
      </div>
      <div className='goToTop'>
        <a href={"#top"}> <BsFileArrowUp color='white' size={24}/> </a>
      </div>
      
      <div className='openModal' onClick={()=>setIsOpened(true)}>
        <AiOutlineMail color='white' size={24}/>
      </div>
      <Modal isOpened={isOpened} onClose={ () => setIsOpened(false) } />
      <Footer/>
    </>

  );
}

export default App;
