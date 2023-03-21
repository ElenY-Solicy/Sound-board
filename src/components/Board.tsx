import { SoundType } from "./types"
import { sound } from "./data"

import styles from "./board.module.css";
import { SyntheticEvent, useEffect, useRef, useState } from "react";




function Board() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);


  const handlePlay = (e: SyntheticEvent, el: SoundType): void => {

    const result = sound.filter(item => {
      if (item.label === el.label)

        return item.play = true
    })
    console.log(result);
    console.log(e.target);
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
if(isPlaying){
}


  }, [audioRef, isPlaying])


  console.log(audioRef);



  return (
    <div className={styles.wrapper} >
      {sound.map((el: SoundType) => (
        <div key={el.label} className={styles.audio} onClick={(e) => handlePlay(e, el)}>
          <span>
            <audio src={el.audio} ref={audioRef} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Board;
