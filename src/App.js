/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { BsFileArrowUp } from 'react-icons/bs';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Tech } from './components/Tech';
import { Work } from './components/Work';
import { Modal } from './containers/Modal/Modal';
import img1 from './assets/Pokedex.png'
import img2 from './assets/PokedexNative.png'
import img3 from './assets/ReactBlog.png'
import img4 from './assets/ReactBlogWrite.png'
import img5 from './assets/dashboard.png'
import img6 from './assets/mainview.png'
import './App.css';
import {useInView} from "framer-motion";


function App() {

  const [isOpened, setIsOpened] = useState(false)
  const [IsVisible, setIsVisible] = useState(false)
  const containerRef2 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  const isIn = useInView(containerRef4);
  const isInRef5 = useInView(containerRef5, {once:true});
  const isInRef2 = useInView(containerRef2, {once:true});
    useEffect(()=> {
        
        if(isIn){
            setIsVisible(false)
        }else {

            setIsVisible(true)
        }
    }, [isIn]);


  const dataList = [
    {
      src: img3,
      alt: 'React blog'
    },
    {
      src: img4,
      alt: 'React blog'
    },
    
  ]
  const dataList2 = [
    {
      src: img1,
      alt: 'Pokedex react'
    },
    {
      src: img2,
      alt: 'Pokedex Native'
    },
    
  ]
  const dataList3 = [
    {
      src: img5,
      alt: 'Dashboard from YVY'
    },
    {
      src: img6,
      alt: 'Mainview from YVY'
    },
    
  ]

  const projects = [
    {
      title: "Personal blog",
      description: "Its my own personal blog where I will be posting things that I find interesting, in the platform I can write the post, add images, etc, this is still a work in progress. I use React router dom, context API to build it.",

      dataList: dataList
    },
    {
      title: "Pokedex API",
      description: "An App made with react where I used webpack, redux, my main goal was to understand this technologies. Also i worked on the mobile app when learning react native, it was a fun experience, and im still updating both projects whenever i have time!",

      dataList: dataList2
    },
    {
      title: "Project YVY",
      description: "College project for IBM Call for Code 2021, one of my biggest projects, as a team we managed to get on the regional finalists list, we used Angular as a Framework!",

      dataList: dataList3
    },

  ]



  return (
    <div className='page'>
      <div className='general-container' >
        <div id='top'></div>
        <Navbar />
        <div ref={containerRef4} id="below"></div>
        <Home setIsOpened={setIsOpened} />

        <div className='body-container' >
            {
//                SOBRE MI
            }
            <section>
                <About />
            </section>
            {
                //                EXPERIENCIA
            }

            <section id='tech' className='experience-container' ref={containerRef5} style={{
                transform: isInRef5 ? "none" : "translateX(-300px)",
                opacity: isInRef5 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}  >
            <article className='tech'>
              <h1 className='title' >TECH EXPERIENCE</h1>
              <Tech />
            </article>
            <article className='work'>
              <h1 className='title'>WORK EXPERIENCE</h1>
              <Work />
            </article>
          </section>
          <div id='projects'> </div>
            {
                //                PROYECTOS
            }
            <section ref={containerRef2} style={{
                transform: isInRef2 ? "none" : "translateX(-300px)",
                opacity: isInRef2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }} >
            <h1 className='title'>PROJECTS</h1>
            {
              projects.map((project, index) => (
                <Project dataList={project.dataList} description={project.description} title={project.title} key={index} />
              ))
            }
          </section>

          <Modal isOpened={isOpened} onClose={() => setIsOpened(false)} />
            {
<Footer />
            }


        </div>
        {
          IsVisible && (
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
      <section className="loader">
        <div></div>
      </section>
    </div>

  );
}

export default App;
