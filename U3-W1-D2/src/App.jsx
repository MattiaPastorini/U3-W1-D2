import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/Components/Navbar";
import MyFooter from "./assets/Components/MyFooter";
import Welcome from "./assets/Components/Welcome";
import Fantasy from "./assets/Components/Fantasy";
import History from "./assets/Components/History";
import Horror from "./assets/Components/Horror";
import Romance from "./assets/Components/Romance";
import Scifi from "./assets/Components/Sci-fi";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <h2 className="my-3 ms-2" id="#Fantasy">
        Fantasy
      </h2>
      <Fantasy></Fantasy>
      <h2 className="my-3 ms-2" id="#History">
        History
      </h2>
      <History></History>
      <h2 className="my-3 ms-2" id="#Horror">
        Horror
      </h2>
      <Horror></Horror>
      <h2 className="my-3 ms-2" id="#Romance">
        Romance
      </h2>
      <Romance></Romance>
      <h2 className="my-3 ms-2" id="#Sci-fi">
        Sci-fi
      </h2>
      <Scifi></Scifi>

      <MyFooter></MyFooter>
    </>
  );
}

export default App;
