import './css/App.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import One from './components/test'
import Two from './components/test2'

const num = 1 + 2

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{num}</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={  <One />}/>
          <Route path="/login" element={  <Two />}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

