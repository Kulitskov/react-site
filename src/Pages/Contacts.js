import React, {Component} from 'react';
import {Button, Container, Form, FormGroup} from "react-bootstrap";
import '../css/Contacts.css'

class Contacts extends Component {
    render() {
        return (
            <Container className="head" style={{width: '500px'}}>
                <h1> Связаться со мной </h1>
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <Form.Label> Email адрес </Form.Label>
                        <Form.Control type="email" placeholder="example@email.com"/>
                        <Form.Text>
                            Утечка адресса электронной почты исключена
                        </Form.Text>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                        <Form.Label> Текст сообщения </Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </FormGroup>

                    {/*<FormGroup controlId="formBasicCheckbox">*/}
                    {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                    {/*</FormGroup>*/}
                    <Button variant="primary" type="submit"> Отправить </Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;