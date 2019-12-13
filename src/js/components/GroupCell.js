import React, {PureComponent} from 'react';
import {setPage} from '.././store/router/actions';
import {Cell, Avatar} from "@vkontakte/vkui";
import {Button} from "@vkontakte/vkui"

class GroupCell extends PureComponent {

    render() {
        const {photo, nameF, nameL} = this.props;

        //let desc = description.length > 0 ? description : "Описание отсутствует";
        //console.log(photo);
        return (
            <Cell
                
                before={<Avatar size={50} src={photo}/>}
               
            >

                <Button href="#" onClick={() =>  () => setPage('more','base')}>
               {nameF}
               {" "}
               {nameL}
               </Button>
            </Cell>
        )
    }

}

export default GroupCell;