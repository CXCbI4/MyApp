import React, {PureComponent} from 'react';

import {Cell, Avatar} from "@vkontakte/vkui";

class GroupCell extends PureComponent {

    render() {
        const {photo, nameF , nameL} = this.props;

        //let desc = description.length > 0 ? description : "Описание отсутствует";
        //console.log(photo);
        return (
            <Cell
                
                before={<Avatar size={50} src={photo}/>}
               
            >
               {nameF} 
               {nameL}
               
            </Cell>
        )
    }

}

export default GroupCell;