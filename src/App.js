import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import CharacterList from "./pages/CharacterList";
import './App.css';
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <div>
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Main/>}/>
                      <Route path="list" element={<CharacterList/>}>

                      </Route>
                      <Route path=":name" element={<CharacterDetail/>}>

                      </Route>
                  </Route>
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
