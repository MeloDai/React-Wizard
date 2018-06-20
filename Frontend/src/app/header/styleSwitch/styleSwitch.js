import React, {Component} from "react";
import DWJson from "../../staticJs/setting";
import CustomSvgIcon from "../../customSvgIcon/customSvgIcon";

const {theme} = DWJson.utilities;
const {css} = theme;
const {switchCss} = DWJson.staticFun.style;

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
                        <CustomSvgIcon
                            svgProps={{
                                path:theme.svg.light
                            }}
                        />
                        :
                        icon === css.dark.label ?
                            <CustomSvgIcon
                                svgProps={{
                                    path:theme.svg.dark
                                }}
                            />
                            :
                            null
                }
            </div>
        );
    }
}