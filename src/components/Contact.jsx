import {React,useState} from 'react';
import './Contact.css';
import { Form, Button, Figure } from 'react-bootstrap';
import contact_photo from "./content/contact.png";

const Contact = () => {
    const [value, setvalue] = useState("")
    function handleSubmit(){
        console.log(value);
    }

    return (
        <>
            <div className="main-container">
                <div className="main-display">
                    <Figure>
                        <div className="main-display-photo">
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={contact_photo}
                            />
                            <Figure.Caption>
                                <h4><strong>Contact us and share your views and help other students by sharing topic contents.</strong>Do follow us on instagram and facebook</h4>
                            </Figure.Caption>
                        </div>
                    </Figure>
                </div>
                <div className="main-form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={(e)=>{setvalue(e.target.value)}} onChange={handleSubmit}/>
                        </Form.Group>
                        <Form.Group>

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Contact
