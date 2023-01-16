// react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// layouts
import BaseLayout from './components/layouts/BaseLayout';

// pages
import Home from '~/pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Room from './pages/Room/Room';
import Chat from './pages/Room/Chat/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />} />
          <Route path="room/:roomId" element={<Chat />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
