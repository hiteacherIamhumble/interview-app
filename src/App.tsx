import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Introduction from './pages/Introduction';
import SelfIntro from './pages/SelfIntro';
import IndividualQuestions from './pages/IndividualQuestions';
import GroupQuestions from './pages/GroupQuestions';
import ContactUs from './pages/ContactUs';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Timer />
        <nav className="navigation">
          <div className="nav-container">
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Introduction
                </NavLink>
              </li>
              <li>
                <NavLink to="/self-intro" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Self-intro
                </NavLink>
              </li>
              <li>
                <NavLink to="/individual" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Individual Questions
                </NavLink>
              </li>
              <li>
                <NavLink to="/group" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Group Interview
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/self-intro" element={<SelfIntro />} />
            <Route path="/individual" element={<IndividualQuestions />} />
            <Route path="/group" element={<GroupQuestions />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;