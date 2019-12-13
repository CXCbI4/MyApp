import React from 'react';
import {connect} from 'react-redux';

import {setPage} from "../../store/router/actions";
import {setActiveTab, setScrollPositionByID} from "../../store/vk/actions";
import {restoreScrollPosition} from "../../services/_functions";
import {Button} from "@vkontakte/vkui"
import {
    Div,
    Panel,
    Group,
    CellButton,
    PanelHeader,
    FixedLayout,
    HorizontalScroll,
    TabsItem,
    Tabs
} from "@vkontakte/vkui";

class MorePanelProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: props.activeTab["EXAMPLE"] || "modal"
        };
    }

    setTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    componentWillUnmount() {
        const {setScrollPositionByID, setActiveTab} = this.props;

        setActiveTab("EXAMPLE", this.state.activeTab);
        setScrollPositionByID("EXAMPLE_TABS_LIST");
    }

    componentDidMount() {
        restoreScrollPosition();
    }

    render() {
        const {id, setPage} = this.props;
        const boxStyle = {marginTop: 56};

        return (
            <Panel id={id}>
                <PanelHeader  noShadow={true}>Функции</PanelHeader>
                <FixedLayout vertical="top">
                    <Tabs theme="header" type="buttons">
                        <HorizontalScroll id="EXAMPLE_TABS_LIST">
                            <TabsItem
                                onClick={() => this.setTab('modal')}
                                selected={this.state.activeTab === 'modal'}
                            >
                                Модальное окно
                            </TabsItem>
                            <TabsItem
                                onClick={() => this.setTab('Список подарков')}
                                selected={this.state.activeTab === 'Список подарков'}
                            >
                                Список подарков
                            </TabsItem>
                            <TabsItem
                                onClick={() => this.setTab('Отправленные подарки')}
                                selected={this.state.activeTab === 'Отправленные подарки'}
                            >
                                Отправленные подарки
                            </TabsItem>
                            <Button size="l" stretched={true} onClick={() => setPage('home', 'groups')}>Список друзей</Button>
                            <Button size="l" stretched={true} onClick={() => setPage('extra', 'calling')}>Куда-нибудь</Button>
                        </HorizontalScroll>
                    </Tabs>
                </FixedLayout>
                <Group style={boxStyle}>
                    {this.state.activeTab === 'modal' && <CellButton onClick={() => setPage('modal', 'filters')}>
                        Выберите получателя
                    </CellButton>}

                    {this.state.activeTab !== 'modal' && <Div>{this.state.activeTab}</Div>}
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

const mapDispatchToProps = {
    setPage,
    setActiveTab,
    setScrollPositionByID
};

export default connect(mapStateToProps, mapDispatchToProps)(MorePanelProfile);
