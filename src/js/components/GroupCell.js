import React, {PureComponent} from 'react';

import {Cell, Avatar} from "@vkontakte/vkui";

class GroupCell extends PureComponent {

    render() {
        const {description, photo, name,name1} = this.props;

        //let desc = description.length > 0 ? description : "Описание отсутствует";

        return (
            <Cell
                
                before={<Avatar size={50} src={photo}/>}
               
            >
                
               
            </Cell>
        )
    }

}

export default GroupCell;