import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
