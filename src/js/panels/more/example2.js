import React from 'react';
import {connect} from 'react-redux';

//import {setPage} from "../../store/router/actions";
import {setActiveTab, setScrollPositionByID} from "../../store/vk/actions";
import {restoreScrollPosition} from "../../services/_functions";

import {
    Div,
    Panel,
    Group,
    CellButton,
    PanelHeader,
    FixedLayout,
    HorizontalScroll,
    TabsItem,
    List,
    Cell,
    Tabs
} from "@vkontakte/vkui";


import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';


class Gift2PanelProfile extends React.Component {

  

    render() {

        const {id, setPage} = this.props;
        const boxStyle = {marginTop: 56};

        return (
            <Panel id={id}>
                <PanelHeader noShadow={true}>Список подарков</PanelHeader>
                <Group>
                    <List>
                        
                            
                            <Div>
                              Здесь должен будет отображаться список подарков.   
                            </Div>
                       
                       
                    </List>
                </Group>
               
            </Panel>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        activeTab: state.vkui.activeTab,
    };
};

/*const mapDispatchToProps = {
    setPage,
    setActiveTab,
    setScrollPositionByID
};*/

const mapDispatchToProps = {
    setPage,
    setActiveTab,
    setScrollPositionByID,
    goBack,
    openPopout,
    closePopout,
    openModal
};


export default connect(mapStateToProps, mapDispatchToProps)(Gift2PanelProfile);