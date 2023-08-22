import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import './App.css'

const App = () => (
  <RouterProvider router={router} />
);

export default App;