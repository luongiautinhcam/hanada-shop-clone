import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/elegant-icons.css'
import './assets/css/font-awesome.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {
            publicRoutes.map((router, index) => {
              const Page = router.component;
              return (
                <Route key={index} path={router.path} element={<Page />} />
                )
              })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
