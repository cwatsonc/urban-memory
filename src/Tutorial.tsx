import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.



interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TutorialExample() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };


    let classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="start" {...a11yProps(0)} />
                    <Tab label="voter app" {...a11yProps(1)} />
                    <Tab label="bgio state" {...a11yProps(2)} />
                    <Tab label="bgio transitions" {...a11yProps(3)} />
                    <Tab label="walk through" {...a11yProps(4)} />
                    <Tab label="small but important" {...a11yProps(5)} />
                    <Tab label="acknowledgements" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <About />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BgioState />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
      </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
      </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
      </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
      </TabPanel>
        </div>);


}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h3>bgio state modeling</h3>
            <p>
                this simple application is designed to illustrate state changes as
                modeled in the boardgame.io. The application models a
                simple voting application. bgio is a multiplayer game library which
                fashions game worlds from state engines.  bgio also manages network
                connectivity so clients may connect and maintain central state through
                a variety of means.  This simple app takes advantage of "Local"
                state multiplayer mode which places players side by side on the same
                monitor.  In the next section we'll talk more about the voter app and
                explore the bgio api.
      </p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h3>about voter app</h3>
            <p>
                Our application simulates an election in a multiplayer game. The game
                state is managed in three phases (we'll talk about bgio phases next).  
                The upper half of the display shows two game controllers (north, south)
                which act as mutators to the game state.  Each button has specific 
                actions it performs on the game, then the bgio state management resolves
                those mutations into the resulting state.  One of bgio's main functions
                is maintaining that state and managing changes published to connected 
                clients.  In our simple game, the players start in preGame, make an election
                between players for deal then moves to the appropriate phase (northDealer,
                southDealer).  The application allows the current player (current turn) to 
                perform three actions endStage (vote4me), endTurn (flip deal), and a third
                funtion that has no side effects on the state (benign). Try pressing the 
                buttons at the top of each client.  Reload the app to initial state by 
                refreshing your browser.  In Local multiplayer mode the state is stored in
                the browser, a refresh resets all state.  Note that some of the buttons
                will behave differently based upon how you manipulate the game state.
                This isn't client magic, but the bgio, managing permissions for each function,
                based upon the state model values.  Remember, mutations alter state, bgio
                manages the flow and permissions.  Open the debug console at right by typing 
                a "." and navigate to the "Log" tab. -- the state in the log is reflected on 
                the left and right margins. Phases are listed on the right margin in black, 
                turns in the left in the color of the player whose turn is being logged. 
                </p>
                <p>
                Exercise: reset the game, then perform the election starting with the south player.
                Steps: reset, vote4me (south), vote4me (north).

                Examine the logs and bring this understanding to the next lesson where we discuss
                the building blocks of bgio state, Phases, Turns, and Stages.
                
      </p>
        </div>
    );
}

function BgioState() {
    return (
        <div>
            <h5>bgio state</h5>
            <p>
                Finally, some framework level details! bgio is a libary that is built to support 
                multiplayer games.  A game is the outermost context which composes, in the form of abstractions,
                , phases (optional), turns, and stages (optional). These contexts are exposed to game logic 
                through the context API and events. As bgio traverses your game graph, it will apply state 
                changes triggered by mutators (moves) which are allowed to change game state, and trigger events.
            </p>
            <h5>game</h5>
            <p>
                In terms of state, game is the outermost context, phases, turns, and stages all cannot exist outside
                of the game context.  This outermost context optionally will contain phases, when a player's context 
                leaves a phase that doesn't have a next (phase) it returns to the game context and current phase may
                be thought of as null. A game ends when the endGame property returns a truthy value.  All phases, turns,
                stages enclosed by the game are destroyed when a game ends. Games also compose mutators in the moves
                property (we'll talk about these soon).  The moves defined at game level are default for enclosing objects
                so if the child state object doesn't define a moves property, it inherits the one from its ancestor
                that might apply.
            </p>
        </div>
    );
}
