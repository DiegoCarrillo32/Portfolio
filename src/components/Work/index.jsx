import React, { useState } from "react";
import styles from './Work.module.css'
export const Work = () => {
    const workList = [
        {
            name: "Nativo",
            start:"December 2021",
            end:"February 2022",
            desc: "I worked in Nativo as an intern for 3 months, They teached me a lot about agile methodologies, angularJS, Ruby on Rails and Mongo",
        }, {
            name: "Canam Tech",
            start:"June 2022",
            end:"August 2022",
            desc: "I was an Intern for 2 months in CTI, we developed an App with ReactJS and had daily meetings to check on the state of the app" ,
        }, {
            name: "Plan21 YVY",
            start:"September 2021",
            end:"Still",
            desc: "I am a volunteer for Plan21 YVY platform, developed in Angular, I have weekly meetings with IBM associates and Plan21 members to review the state of the app.",
        },
        
    ];
    const [CurrentWorkplace, setCurrentWorkplace] = useState(workList[0]);


  return (
    <section className={styles['tech-display']}>
      <div className={styles.timeline}>
        {workList.map((workplace, index) => (
          <span key={index} onClick={() => setCurrentWorkplace(workplace)}>
            {workplace.name}
          </span>
        ))}
      </div>
      <div className={styles['work-desc']} >
            <span>From {CurrentWorkplace.start} to {CurrentWorkplace.end} </span>
            
            <p>
                
                {
                    CurrentWorkplace.desc
                }
            </p>
      </div>
    </section>
  );
};
