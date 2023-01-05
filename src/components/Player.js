import { FaStepBackward, FaPlay, FaStepForward, FaPause } from "react-icons/fa";
import { getTime } from "../utils/getTime";
import { playAudio } from "../utils/playAudio";

const Player = ({
  currentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
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

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(
        songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1]
      );
    }
    if (direction === "skip-back") {
      setCurrentSong(
        songs[currentIndex === 0 ? songs.length - 1 : currentIndex - 1]
      );
    }
    playAudio(isPlaying, audioRef);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FaStepBackward
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size={28}
        />
        {isPlaying ? (
          <FaPause onClick={playSongHandler} className="play" size={28} />
        ) : (
          <FaPlay onClick={playSongHandler} className="pause" size={28} />
        )}
        <FaStepForward
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size={28}
        />
      </div>
    </div>
  );
};

export default Player;
