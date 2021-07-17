import React from 'react';
import clsx from 'clsx';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import {useMediaQuery} from "@material-ui/core";
import {useStyles} from "./HamburgerDrawerStyles";
import {Anchor, categories, CategoryEnum} from "../../utils/utils";

interface HamburgerDrawerProps {
    setCategory: (val: CategoryEnum) => void;
}

export function HamburgerDrawer({setCategory}: HamburgerDrawerProps) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? "dark" : "light",
                },
            }),
        [prefersDarkMode]
    );

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemText primary={"Categories"}/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                {categories.map((text: CategoryEnum, index: number) => (
                    <ListItem
                        style={{height: 40, borderRadius: 3}}
                        button
                        key={index}
                        onClick={() => setCategory(text)}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon/>
            </Button>
            <MuiThemeProvider theme={theme}>
                <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </MuiThemeProvider>
        </>
    );
}

export default HamburgerDrawer;
