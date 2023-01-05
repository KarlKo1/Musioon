import { FaStepBackward, FaPlay, FaStepForward } from "react-icons/fa";
import { getTime } from "../utils/getTime";

const Player = ({
  currentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
}) => {
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
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FaStepBackward className="skip-back" size={28} />
        <FaPlay onClick={playSongHandler} className="play" size={28} />
        <FaStepForward className="skip-forward" size={28} />
      </div>
    </div>
  );
};

export default Player;
