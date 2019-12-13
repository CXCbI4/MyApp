import React from 'react';
import {connect} from 'react-redux';

import {goBack} from '../../store/router/actions';
import {setFormData} from "../../store/formData/actions";

import {
    Div,
    Button,
    Checkbox,
    Input,
    FormLayout,
    FormLayoutGroup,
    Panel,
    Group,
    PanelHeader,
    PanelHeaderBack
} from "@vkontakte/vkui";

class HomePanelProfile extends React.Component {

    constructor(props) {
        super(props);

        let defaultInputData = {
            workplace: '',
            workposition: '',

            checkboxPhoto: 0,
            checkboxOnline: 0
        };

        this.state = {
            inputData: props.inputData['example_form'] || defaultInputData
        };

        this.handleInput = (e) => {
            let value = e.currentTarget.value;

            if (e.currentTarget.type === 'checkbox') {
                value = e.currentTarget.checked;
            }

            this.setState({
                inputData: {
                    ...this.state.inputData,
                    [e.currentTarget.name]: value
                }
            })
        };

        this.clearForm = () => {
            this.setState({
                inputData: defaultInputData
            });
        };
    }

    componentWillUnmount() {
        this.props.setFormData('example_form', this.state.inputData);
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Модальное окно
                </PanelHeader>
                <Group>
                    <FormLayout>
                        <FormLayoutGroup top="Подарок">
                            <Input value={this.state.inputData.workplace}
                                   onChange={this.handleInput}
                                   name="workplace"
                                   placeholder="Название подарка"
                                   autoComplete="off"/>
                            <Input value={this.state.inputData.workposition}
                                   onChange={this.handleInput}
                                   name="workposition"
                                   placeholder="Подпись"
                                   autoComplete="off"/>
                        </FormLayoutGroup>
                        <FormLayoutGroup top="Дополнительно">
                            <Checkbox checked={this.state.inputData.checkboxPhoto}
                                      onChange={this.handleInput}
                                      name="checkboxPhoto"
                            >Анонимно</Checkbox>

                        </FormLayoutGroup>
                    </FormLayout>
                    <Div className="buttons-group">
                        <Button size="l" stretched={true} onClick={() => goBack()}>Отправить</Button>
                        <Button size="l" stretched={true} onClick={this.clearForm}>Очистить</Button>
                    </Div>
                </Group>
            </Panel>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        inputData: state.formData.forms,
    };
};

const mapDispatchToProps = {
    setFormData,
    goBack
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePanelProfile);