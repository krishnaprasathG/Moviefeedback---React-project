import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Feedback from './components/feedback';
import Review from './components/Review';

function App() {
  return (
    <Router>
     <div className="App">
      <h1>📽 Movie Feedback App</h1>
       <div className='tab'>
       <Link to='/feedback' className='tab-link' > Give Feedback</Link>
       <Link to='/review' className='tab-link'> View Review </Link>
       </div>

      <Routes>
        <Route path='/' element={<Navigate to='/feedback' />} ></Route>
        <Route path='/feedback' element={<Feedback />}  ></Route>
        <Route path='/review' element={<Review />}  ></Route>
      </Routes>
     </div>
    </Router>  
      
  );
}

export default App;