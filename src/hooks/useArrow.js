import { useEffect, useRef } from "react"

export const useArrow = (arrow, initialValue, innerWidth) => {
    const arrowPosition = useRef(0);
    
    useEffect(() => {
        arrow.current.style.top = `${initialValue}px`;
        const interval2 = setInterval(() => {
          
          if (arrow.current && arrowPosition.current < innerWidth) {
            arrow.current.style.left = `${arrowPosition.current}px`;
            
            arrowPosition.current = arrowPosition.current + 1;
          } else {
            arrow.current.style.top = `${Math.floor(Math.random() * (650 - 0))}px`;
            arrowPosition.current = 0;
          }
        }, Math.random() * (20 - 10) + 10);
        return () => {
          clearInterval(interval2);
        };
      }, [arrow, initialValue, innerWidth]);


}