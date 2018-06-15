import React, {Component} from "react";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const muiTheme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#09aeef',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        }
         // secondary: {
         //     light: '#0066ff',
         //     main: '#0044ff',
         //     dark: will be calculated from palette.secondary.main,
         //     contrastText: '#ffcc00',
         // },
        // error: will use the default color
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});


export default class FrameWork extends Component{
    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                {this.props.content}
            </MuiThemeProvider>
        );
    }
};