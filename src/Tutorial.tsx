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
                    <Tab label="about" {...a11yProps(0)} />
                    <Tab label="the app" {...a11yProps(1)} />
                    <Tab label="the conduct" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <About />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Dashboard />
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
