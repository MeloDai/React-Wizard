import React, {Component} from "react";
import {Menu} from '@material-ui/icons';
import DWJson from "../../staticJs/setting";

const {fun} = DWJson.model;

export default class HeaderLeftIcon extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    toggleLeftMenu(){
        if(fun.leftMenu.hide){
            fun.leftMenu.bodyContainer.default();
            fun.leftMenu.leftMenuContainer.show();
        }else{
            fun.leftMenu.leftMenuContainer.hide();
            fun.leftMenu.bodyContainer.full();
        }
    }

    render(){
        return(
            <div
                className='header-left-icon header-button'
                onClick={this.toggleLeftMenu.bind(this)}
            >
                <Menu/>
            </div>
        );
    }
}