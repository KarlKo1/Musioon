import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
  setLibraryStatus,
}) => {
  const toggleHover = () => {
    if (!libraryStatus) {
      setLibraryStatus(!libraryStatus);
    }
  };

  return (
    <div
      onMouseEnter={toggleHover}
      className={`library ${libraryStatus ? "active-library" : ""}`}
    >
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            audioRef={audioRef}
            song={song}
            songs={songs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            key={song.id}
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
