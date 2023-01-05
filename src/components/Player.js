import { FaStepBackward, FaPlay, FaStepForward } from "react-icons/fa";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FaStepBackward className="skip-back" size={28} />
        <FaPlay className="play" size={28} />
        <FaStepForward className="skip-forward" size={28} />
      </div>
    </div>
  );
};

export default Player;
