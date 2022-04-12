import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./Carrousel.module.css";
const Carrousel = ({ dataList = [] }) => {
  const [CurrentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (dataList.length - 1 > CurrentImage) setCurrentImage(CurrentImage + 1);
      else setCurrentImage(0);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [CurrentImage, dataList]);

  const otherImage = (next) => {
    next
      ? setCurrentImage((prev) => {
          if (prev + 1 > dataList.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        })
      : setCurrentImage((prev) => {
          if (prev - 1 < 0) {
            return dataList.length - 1;
          } else {
            return prev - 1;
          }
        });
  };

  return (
    <div className={styles["carrousel-container"]}>
      <AiOutlineArrowLeft
        className={styles.iconsLeft}
        color={"white"}
        size={32}
        onClick={() => {
          otherImage(false);
        }}
      />
      <AiOutlineArrowRight
        className={styles.iconsRight}
        color={"white"}
        size={32}
        onClick={() => {
          otherImage(true);
        }}
      />
      <img
        src={dataList[CurrentImage].src}
        alt={dataList[CurrentImage].alt}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};
export default React.memo(Carrousel);
