import React, {Component} from "react";
import SvgIcon from '@material-ui/core/SvgIcon';
import DWJson from "../../staticJs/setting";

const {theme} = DWJson.utilities;
const {css} = theme;
const {switchCss} = DWJson.staticFun.style;

function LightStyleIcon(props) {
    return(
        <SvgIcon {...props}>
            <path
                d={theme.svg.light}
            />
        </SvgIcon>
    );
}

function DarkStyleIcon(props) {
    return(
        <SvgIcon {...props}>
            <path
                d={theme.svg.dark}
            />
        </SvgIcon>
    );
}

export default class StyleSwitch extends Component{
    constructor(props){
        super(props);
        this.state = {
            icon:css.light.label
        };
    }

    setStyleIcon(icon){
        this.setState({
            icon:icon
        });
    }

    switchStyle(){
        const {icon} = this.state;
        switch (icon){
            case css.light.label:
                this.setStyleIcon(css.dark.label);
                switchCss(css.dark.fileName);
                break;
            case css.dark.label:
                this.setStyleIcon(css.light.label);
                switchCss(css.light.fileName);
                break;
            default:
                break;
        }
    }

    render(){
        const {icon} = this.state;

        return(
            <div
                className='header-right-style-switch header-button'
                onClick={this.switchStyle.bind(this)}
            >
                {
                    icon === css.light.label ?
                        <LightStyleIcon/>
                        :
                        icon === css.dark.label ?
                            <DarkStyleIcon/>
                            :
                            null
                }
            </div>
        );
    }
}