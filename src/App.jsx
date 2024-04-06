import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavigationBar from "./components/NavigationBar.jsx";
import Intro from "./components/Intro.jsx";
import SkillsGroup from "./components/SkillsGroup.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";


function App() {
  return (
    <div className="container-fluid page-container p-5">
        <NavigationBar />
        <Intro />
        <About />
        <SkillsGroup />
        <Projects />
    </div>
  )
}

export default App
