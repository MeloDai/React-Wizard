import React, {Component} from "react";
import HeaderLeftIcon from "../leftIcon/leftIcon";
import StyleSwitch from "../styleSwitch/styleSwitch";

export default class HeaderContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div
                className='header-container box-shadow-1'
            >
                <HeaderLeftIcon/>
                <StyleSwitch/>
            </div>
        );
    }
}