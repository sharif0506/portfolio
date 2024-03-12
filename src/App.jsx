import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./components/NavigationBar.jsx";
import Intro from "./components/Intro.jsx";
import SkillsGroup from "./components/SkillsGroup.jsx";

function App() {
  return (
    <div className="container-fluid page-container center">
        <NavigationBar />
        <Intro />
        <SkillsGroup />
    </div>
  )
}

export default App
