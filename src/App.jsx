import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contract from './pages/Contract';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/project"
          element={
            <PageWrapper>
              <Project />
            </PageWrapper>
          }
        />
        <Route
          path="/contract"
          element={
            <PageWrapper>
              <Contract />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      style={{ position: 'absolute', width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
