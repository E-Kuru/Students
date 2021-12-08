import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Students from './views/Students/Students';
import AddStudents from './views/AddStudents/AddStudents';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Students/> } />
        <Route path='/studentsAdd' element={ <AddStudents/> } />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
