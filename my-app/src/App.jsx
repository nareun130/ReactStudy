import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormPage } from './pages/form';
import { TodosPage } from './pages/todos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/todos' element={<TodosPage />} />
          {/*//* ?가 있어야 id 자리에 아무것도 없을 시 undefined가 날라간다. */}
          <Route path='/form/:id?' element={<FormPage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
