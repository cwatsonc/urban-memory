import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function TutorialExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">introduction</Link>
                    </li>
                    <li>
                        <Link to="/about">about voter app</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">dashboard</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h3>bgio state modeling</h3>
            <p>
                this simple application is designed to illustrate state changes as
                modeled in the boardgame.io js game libary the application models a
                simple voting application. Two players (north and south) are voting a
                proposition. The game is a Finite State Automata which demonstrates the
                various aspects of the bgio Client API. This tutorial will take you
                through a number of exercises and point out how the game state is
                leveraged to provide stateful experience common to connected clients.
      </p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h3>about voter app</h3>
            <p>
                An app that simulates a proposal (vote) in a multiplayer game flow once
                the election completes the game transitions to a follow-on phase. As we
                work through the exercise, we'll point out state changes and
                implementation details. This is a simple game controller with ide by
                side dashboards for two imagined card players, they will each vote in
                self interest, but the game will always award the deal to the first
                selected client. This modest game illustrates the main bgio APIs. The
                voter app models a state diagram representing a directed graph.
      </p>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h5>Dashboard</h5>
        </div>
    );
}
