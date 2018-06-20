import React, {Component} from "react";
import CustomSvgIcon from "../../customSvgIcon/customSvgIcon";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DWJson from "../../staticJs/setting";

const {nested} = DWJson.utilities.leftMenu;

export default class LeftMenuItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false
        };
    }

    toggleNestedMenu(){
        const {itemProps} = this.props;
        const {index} = itemProps;
        if(!itemProps.nested){
            return null;
        }
        this.toggleOpenIcon();
        const {nestedFun} = DWJson.model.fun.leftMenu;
        return nestedFun[nested.label + index]();
    }

    toggleOpenIcon(){
        const {open} = this.state;
        this.setState({
            open: !open
        });
    }

    render(){
        const {itemProps} = this.props;
        const {open} = this.state;
        return(
            <ListItem
                button
                onClick={this.toggleNestedMenu.bind(this)}
            >
                <ListItemIcon
                    className='left-menu-item-left-svg'
                >
                    <CustomSvgIcon
                        svgProps={{
                            path:itemProps.item.svg.path
                        }}
                    />
                </ListItemIcon>
                <ListItemText
                    className='left-menu-item-label'
                    inset
                    primary={
                        itemProps.item.label.text
                    }
                />
                {
                    itemProps.nested ?
                        open ?
                            <ExpandLess/>
                            :
                            <ExpandMore/>
                        :
                        null
                }
            </ListItem>
        );
    }
}