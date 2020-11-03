import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Contact } from './components/Pages/Contact';
import { Experience } from './components/Pages/Experience';
import { Projects } from './components/Pages/Projects';
import { QuoteApi } from './components/Pages/ProjectLinks/QuoteApi/QuoteApi';
import { Twitch } from './components/Pages/ProjectLinks/Twitch/Twitch';
import { NumberGuesser } from './components/Pages/ProjectLinks/NumberGuesser/NumberGuesser';
import { ChatBot } from './components/Pages/ProjectLinks/ChatBot/ChatBot';
import { Weather } from './components/Pages/ProjectLinks/Weather/Weather';
import { Metronome } from './components/Pages/ProjectLinks/Metronome/Metronome';
import { Pokemon } from './components/Pages/ProjectLinks/Pokemon/Pokemon';
import { Logbook } from './components/Pages/ProjectLinks/Logbook/Logbook';
import { FullBackgroundImage } from './components/FullBackgroundImage';

function App() {
    const [color, setColor] = useState("");

    useEffect(() => getRandomColor(), []);

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        setColor(color);
      }

    return (
        <div className="App">
            <header className="App-header">
                <FullBackgroundImage />
                <div className="content-wrapper">
                    <NavBar />
                    <Router>
                        <Switch>
                            <Route exact path="/" render={props => (
                                <Home {...props} randomColor={color}/>
                            )} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/experience" render={props => (
                                <Experience {...props} randomColor={color}/>
                            )} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/quoteapi" component={QuoteApi} />
                            <Route path="/twitch" component={Twitch} />
                            <Route path="/numberguesser" component={NumberGuesser} />
                            <Route path="/chatbot" component={ChatBot} />
                            <Route path="/weather" component={Weather} />
                            <Route path="/metronome" component={Metronome} />
                            <Route path="/pokemon" component={Pokemon} />
                            <Route path="/logbook" component={Logbook} />
                        </Switch>
                    </Router>
                </div>
                <FullBackgroundImage />
            </header>
        </div>
    );
}

export default App;
