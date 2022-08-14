import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginOrRegistrationPage from "../pages/LoginOrRegistrationPage";


function App() {
  return (
    <div className="App">
          <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<HomePage/>}/>
                <Route path={'/book'} element={<BookPage/>}/>
                <Route path={'/logorreg'} element={<LoginOrRegistrationPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
