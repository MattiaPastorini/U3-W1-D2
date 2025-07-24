import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/Components/Navbar";
import MyFooter from "./assets/Components/MyFooter";
import Welcome from "./assets/Components/Welcome";

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

      <MyFooter />
    </>
  );
}

export default App;
