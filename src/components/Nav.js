import { FiMusic } from "react-icons/fi";

const Nav = ({ libraryStatus, setLibraryStatus, btnRef }) => {
  return (
    <nav>
      <h1>Musioon</h1>
      <button ref={btnRef} onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FiMusic />
      </button>
    </nav>
  );
};
export default Nav;
