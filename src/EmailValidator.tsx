import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import ShowValidation from './ShowValidation';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'


const EmailValidator = () => {

    const [email, setEmail] = React.useState<string>("");
    const [emailstatus, setEmailstatus] = React.useState<string>("");
    const [validationReason, setValidationReason] = useState<string>('');
    const [showreason, setShowreason] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true)

        axios({
            "method": "GET",
            "url": "https://email-checker.p.rapidapi.com/verify/v1",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "email-checker.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
            },
            "params": {
                "email": encodeURI(email)

            }
        })
            .then(({ data }) => {
                console.log(data)
                setEmailstatus(data.status);
                setValidationReason(data.reason)
                setLoading(false)

            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <Container className="content-wrapper">
            <label>Input your email below</label><br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" className="col-md-10 offset-md-1" placeholder="enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <fieldset>
                    <Form.Group>
                        <h4>Show reason?</h4>
                        <Row>
                            <Col>
                                <Form.Check
                                    label="Yes"
                                    type="radio"
                                    name="reason"
                                    id="yes-show"
                                    value="yes"
                                    onChange={(e) => setShowreason(true)}
                                />
                                <Form.Check
                                    label="No"
                                    type="radio"
                                    name="reason"
                                    id="no-show"
                                    value="no"
                                    onChange={(e) => setShowreason(false)}
                                />
                            </Col>
                        </Row>

                    </Form.Group>
                </fieldset>
                {loading ? <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                   Loading...
                </Button> : <Button variant="primary" type="submit" >Check</Button>}
            </Form>
            <ShowValidation status={emailstatus} reason={validationReason} show={showreason} />
        </Container>
    )
}

export default EmailValidator
