import { FiMusic } from "react-icons/fi";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Musioon</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FiMusic />
      </button>
    </nav>
  );
};
export default Nav;
