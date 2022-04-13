
import { useEffect, useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFileArrowUp } from 'react-icons/bs';
import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Modal } from './containers/Modal/Modal';
function App() {
  const [isOpened, setIsOpened] = useState(false)
  const containerRef = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  const callback = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })

  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)
    if (containerRef.current) { observer.observe(containerRef.current); observer.observe(containerRef1.current); observer.observe(containerRef2.current); observer.observe(containerRef3.current); }
    return () => {
      if (containerRef.current) { observer.unobserve(containerRef.current); observer.unobserve(containerRef1.current); observer.unobserve(containerRef2.current); observer.unobserve(containerRef3.current) }
    }
  }, [containerRef, options, containerRef1, containerRef2])


  const dataList = [
    {
      src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      alt: 'CAT'
    },
    {
      src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'CAT'
    },
    {
      src: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'CAT'
    },
  ]
  const dataList2 = [
    {
      src: 'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'DOG'
    },
    {
      src: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'DOG'
    },
    {
      src: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'DOG'
    },
  ]


  return (
    <>
      <div id='top'></div>
      <Navbar />
      <Home setIsOpened={setIsOpened} />

      <div className='body-container' >
        <div ref={containerRef2} className={'not-visible'}>
          <h1 className='title' id='about-me'>Who am I?</h1>
          <div  className='about-me'>
            <p> I am a Junior software developer, currently studying and going through my third year of career, 
            I am very passionate about learning and web development, 
            I have strong knowledge about <span style={{color:'aqua'}}>React</span> and I really like it. I have done a few projects to practice 
            I have also worked with <span style={{color:'red'}}>Angular</span> and have also worked with it in college related projects </p>
            <div className='logo-container'>
              <div style={{width:'300px', height:'300px'}}>
                <img style={{height:'100%',}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' alt='React logo'></img>
              </div>
              <div style={{width:'300px', height:'300px'}}>
                <img style={{height:'100%'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' alt='Angular logo'></img>
              </div>
            </div>
          </div>
        </div>
        <div id='tech' >
          <h1 className='title' >Technologies I handle</h1>
          <h1 className='title' >WIP</h1>
          
        </div>
        <div id='projects'> </div>
        <h1 className='title'>My projects</h1>
        <section className={'project-container'} ref={containerRef} >
          <div className='project-info'>
            <h2>Personal blog</h2>
            <p>Its my own personal blog where i will be posting things that i find interesting, in the platform i can write the post, add images, etc, this is still a WIP</p>

          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList} />
          </div>
        </section>
        <section className={'project-container'} ref={containerRef3} >
          <div className='project-info'>
            <h2>Pokedex API</h2>
            <p>An App made with react and also i worked on the mobile app when learning react native, it was a fun experience, and im still updating the projects whenever i have time!</p>
          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList2} />
          </div>
        </section>
        <section className={'project-container'} ref={containerRef1} >
          <div className='project-info'>
            <h2>Project YVY</h2>
            <p>College project for IBM Call for Code 2021, one of my biggest projects, as a team we managed to get on the regional finalists list, we used Angular as a Framework!</p>
          </div>
          <div className='project-image'>
            <Carrousel dataList={dataList2} />
          </div>
        </section>
        
      

      </div>
      <div className='goToTop'>
        <a href={"#top"}> <BsFileArrowUp color='white' size={24} /> </a>
      </div>

      <div className='openModal' onClick={() => setIsOpened(true)}>
        <AiOutlineMail color='white' size={24} />
      </div>
      <Modal isOpened={isOpened} onClose={() => setIsOpened(false)} />
      <Footer />
    </>

  );
}

export default App;
