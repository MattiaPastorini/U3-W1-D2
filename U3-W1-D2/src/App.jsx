import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/Components/Navbar";
import MyFooter from "./assets/Components/MyFooter";
import Welcome from "./assets/Components/Welcome";
// import Fantasy from "./assets/Components/Fantasy";
import History from "./assets/Components/History";
import Horror from "./assets/Components/Horror";
import Romance from "./assets/Components/Romance";
import Scifi from "./assets/Components/Sci-fi";

import BookList from "./assets/Components/BookList ";
import fantasyBooks from "./assets/Components/Books/fantasy.json";

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <h2 className="my-3 ms-2" id="#Fantasy">
        Fantasy
      </h2>
      <BookList books={fantasyBooks} />
      <h2 className="my-3 ms-2" id="#History">
        History
      </h2>
      <History />
      <h2 className="my-3 ms-2" id="#Horror">
        Horror
      </h2>
      <Horror />
      <h2 className="my-3 ms-2" id="#Romance">
        Romance
      </h2>
      <Romance />
      <h2 className="my-3 ms-2" id="#Sci-fi">
        Sci-fi
      </h2>
      <Scifi />
      <MyFooter />
    </>
  );
}

export default App;
