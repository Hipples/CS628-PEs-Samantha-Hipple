import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css'
import router from './routes/router';

const App = () => (
  <RouterProvider router={router} />
);

export default App;