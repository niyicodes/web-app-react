import './App.css';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CreateClient from './Pages/create-client/CreateClient';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<CreateClient />} />
      </>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
