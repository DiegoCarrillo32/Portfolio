
import { useEffect, useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFileArrowUp } from 'react-icons/bs';
import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Tech } from './components/Tech';
import { Work } from './components/Work';
import { Modal } from './containers/Modal/Modal';

import img2 from './assets/diegoh.jpg'
import img3 from './assets/diegoh2.jpg'
function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [IsVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === 'below' && entry.isIntersecting) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      if (entry.isIntersecting && entry.target.id !== 'below') {
        entry.target.classList.add('visible')
      }
    })

  }
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver(callback, options)
    if (containerRef.current) {
      observer.observe(containerRef.current); observer.observe(containerRef1.current);
      observer.observe(containerRef2.current); observer.observe(containerRef3.current);
      observer.observe(containerRef4.current);
      observer.observe(containerRef5.current);
    }
    return () => {
      if (containerRef) {
        observer.unobserve(containerRef.current); observer.unobserve(containerRef1.current);
        observer.unobserve(containerRef2.current); observer.unobserve(containerRef3.current);
        observer.unobserve(containerRef4.current);
        observer.unobserve(containerRef5.current);
      }
    }
  }, [containerRef, containerRef1, containerRef2, containerRef3, containerRef4, containerRef5])




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

  const dataList3 = [
    {
      src:  img2,
      alt: 'DOG'
    },
    {
      src: img3,
      alt: 'DOG'
    },
  ]


  return (
    <div className='page'>
      <div className='general-container' >
        <div id='top'></div>
        <Navbar />
        <div ref={containerRef4} id="below">
          <Home setIsOpened={setIsOpened} />
        </div>

        <div className='body-container' >
          <div ref={containerRef2} className={'not-visible'} >
            <div className='about-me'>
              <h1 className='title' id='about-me' >Who am I?</h1>
              <div className='about-me-body'>
                <p> I am a Junior software engineer from Costa Rica, currently studying and going through my third year of career.
                  I am very passionate about learning and web development, I been learning different frameworks and libraries as Next, Angular or React.
                  I like to learn new technologies in my free time and do sports!
                </p>
                <div className='about-me-img'>

                  <img src={img3} alt="" width={'auto'} height={'400px'}/>
                  <img src={img2} alt="" width={'300px'} height={'auto'}/>
                </div>
              </div>
              </div>
 
            
          </div>
          <div id='tech' className='experience-container' ref={containerRef5} >
            <div className='tech'>
              <h1 className='title' >Tech experience</h1>
              <Tech/>
              
            </div>
            <div className='work'>
              <h1 className='title'>Work experience</h1>
              <Work/>
            </div>
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

          <Modal isOpened={isOpened} onClose={() => setIsOpened(false)} />
          <Footer />

        </div>
        {
          (IsVisible) && (
            <>
              <div className='goToTop'>
                <a href={"#top"}> <BsFileArrowUp color='white' size={24} /> </a>
              </div>
              <div className='openModal' onClick={() => setIsOpened(true)}>
                <AiOutlineMail color='white' size={24} />
              </div>
            </>
          )
        }

      </div>
      <section class="loader">
        <div></div>
      </section>
    </div>

  );
}

export default App;
