import {
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaPause,
  FaVolumeDown,
} from "react-icons/fa";
import { getTime } from "../utils/getTime";
import { useState } from "react";

const Player = ({
  currentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
  skipTrackHandler,
}) => {
  const [activeVolume, setActiveVolume] = useState(false);
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;
  //Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const changeVolumeHandler = (e) => {
    let value = e.target.value;
    audioRef.current.volume = value;
    setSongInfo({ ...songInfo, volume: value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${animationPercentage}%)`,
            }}
          ></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div
        className="volume-control"
        onMouseEnter={() => setActiveVolume(!activeVolume)}
        onMouseLeave={() => setActiveVolume(!activeVolume)}
      >
        <FaVolumeDown
          size={18}
          className="volume-down"
          style={activeVolume ? { opacity: 1 } : { opacity: 0.3 }}
        />
        {activeVolume && (
          <input
            className="volumeControl"
            onChange={changeVolumeHandler}
            value={songInfo.volume}
            max="1"
            min="0"
            step="0.01"
            type="range"
          />
        )}
      </div>
      <div className="play-control">
        <FaStepBackward
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size={36}
        />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} className="play" size={36} />
        ) : (
          <FaPlay onClick={playSongHandler} className="pause" size={36} />
        )}
        <FaStepForward
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size={36}
        />
      </div>
    </div>
  );
};

export default Player;
