const LibrarySong = ({
  song,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
  setLibraryStatus,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
    setLibraryStatus(!libraryStatus);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${
        song.id === currentSong.id ? "selected" : ""
      } `}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
