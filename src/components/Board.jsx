import { useState } from "react";
import Button from "./Button";
import { sound } from "./data";

import styles from "./board.module.css";

function Board() {
  const [selected, setSelected] = useState("");
  const handlePlay = (el) => {
    const data = [...sound];
    data.forEach((item) => {
      if (item.label === el.label) {
        item.playing = true;
      } else {
        item.playing = false;
      }
      item.playing ? item?.audio.play() : item?.audio.pause();
      console.log(item.audio.playbackRate, "***");
    });
    setSelected(el.label);
  };

  console.log(selected);

  const getSelected = (el) =>
    selected === el.label ? styles.playAudio : styles.stopAudio;

  return (
    <>
      <div className={styles.wrapper}>
        {sound.map((el) => (
          <div
            key={el.label}
            className={styles.audio}
            onClick={() => handlePlay(el)}
          >
            <span className={getSelected(el)}></span>
          </div>
        ))}
      </div>
      <Button selected={selected} />
    </>
  );
}

export default Board;
