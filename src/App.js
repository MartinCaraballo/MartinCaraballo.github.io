import React, {Component} from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Skills from "./components/sections/skills";
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Projects from "./components/sections/projects";
import Information from "./components/sections/information";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <About/>
                <Education/>
                <Skills/>
                <Projects/>
                <Information/>
            </div>
        );
    }
}

export default App;
