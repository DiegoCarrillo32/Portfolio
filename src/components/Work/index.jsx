import React, { useState } from "react";
import styles from './Work.module.css'
export const Work = () => {
    const workList = [
        {
            name: "Nativo",
            start:"December 2021",
            end:"February 2022",
            desc: "I work in Nativo as an intern for 3 months, They teached me a lot about agile methodologies, angularJS, Ruby on Rails and Mongo",
        },
        
    ];
    const [CurrentWorkplace, setCurrentWorkplace] = useState(workList[0]);


  return (
    <section className={styles['tech-display']}>
      <div className={styles.timeline}>
        {workList.map((workplace) => (
          <span onClick={() => setCurrentWorkplace(workplace)}>
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
