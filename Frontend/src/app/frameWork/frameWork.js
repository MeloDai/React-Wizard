import React, {Component} from "react";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const muiTheme = createMuiTheme({
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