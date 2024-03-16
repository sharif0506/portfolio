import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavigationBar from "./components/NavigationBar.jsx";
import Intro from "./components/Intro.jsx";
import SkillsGroup from "./components/SkillsGroup.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <div className="container-fluid page-container">
        <NavigationBar />
        <Intro />
        <SkillsGroup />
        <About />
    </div>
  )
}

export default App
