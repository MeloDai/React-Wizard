import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

let CustomSvgIcon = (props) => {
    const {svgProps, ...rest} = props;
    return(
        <SvgIcon {...rest}>
            <path
                d={svgProps.path}
            />
        </SvgIcon>
    );
};

export default CustomSvgIcon;