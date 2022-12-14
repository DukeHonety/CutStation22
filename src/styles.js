import { makeStyles } from "@material-ui/core";
import { Directions } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    red: {
        backgroundColor: '#ff2040',
        color: '#ffffff',
    },
    navy: {
        backgroundColor: '#003080',
    },
    black: {
        backgroundColor: '#000000',
        color: '#ffffff',
    },
    white: {
        backgroundColor: '#ffffff',
        color: '#000000',
    },
    main: {
        flex: 1,
        overflow: 'auto',
        flexDirection: 'column',
        display: 'flex',
        // color: '#ffffff',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    green: {
        backgroundColor: '#00b020',
    },
    largeLogo: {
        height: 100,
    },
    logo: {
        height: 50,
    },
    cards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: { margin: 10 },
    space: {
        padding: 10,
    },
    media: { width: 200 },
    pt: { paddingTop: 20 },
}))