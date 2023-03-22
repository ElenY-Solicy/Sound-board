import { sound } from "./data";

import styles from "./button.module.css";

function Button({ selected }) {
  const changeVolume = (e) => {
    sound.forEach((item) => {
      if (item.label === selected) {
        item.audio.volume = e.target.value;
      }
    });
  };

  const handlePlay = () => {
    sound.forEach((item) => {
      if (item.label === selected) {
        item.audio.play();
      }
    });
  };

  const handlePause = () => {
    sound.forEach((item) => {
      if (item.label === selected) {
        item.audio.pause();
      }
    });
  };

  const handleSpeed = (speed) => {
    sound.forEach((item) => {
      if (item.label === selected) {
        if (speed === 0.5) {
          item.audio.playbackRate = 0.5;
        } else if (speed === 1) {
          item.audio.playbackRate = 1;
        } else if (speed === 2) {
          item.audio.playbackRate = 2;
        }
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.minWrapper}>
        <div className={styles.inner}>
          <h5 className={styles.label}>Volume</h5>
          <input
            className={styles.range}
            type="range"
            id="volume"
            max="1"
            min="0"
            step="0.01"
            onChange={changeVolume}
          />
        </div>
      </div>
      <div className={styles.minWrapper}>
        <div className={styles.inner}>
          <h5 className={styles.label}>Control Buttons</h5>
          <button className={styles.button} onClick={handlePlay}>
            Play
          </button>
          <button className={styles.button} onClick={handlePause}>
            Pause
          </button>
        </div>
      </div>
      <div className={styles.minWrapper}>
        <div className={styles.inner}>
          <h5 className={styles.label}>Speed Buttons</h5>
          <button className={styles.button} onClick={() => handleSpeed(0.5)}>
            Speed 0.5 &#10005;
          </button>
          <button className={styles.button} onClick={() => handleSpeed(1)}>
            Speed 1 &#10005; (normal)
          </button>
          <button className={styles.button} onClick={() => handleSpeed(2)}>
            Speed 2 &#10005;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;
