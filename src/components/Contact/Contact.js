import { faAt, faHeadset, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="w-75 mx-auto my-5 pt-5" id="contact">
            <div className="text-center section-title mb-5">
                <span>Contact Us</span>
                <h2>If You Have Any Question<br />
                    Drop A Message</h2>
            </div>
            <div className="row g-5 mt-5">
                <div className="col-md-7 col-12 contact">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder="Subject" />
                        </Form.Group>

                        <Button onClick={e => e.preventDefault()} className="btn btn-lg btn-contact-bg" variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </div>
                <div className="col-md-5 col-12">
                    <div class="d-flex align-items-center mt-3 mb-2">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <p className="contact-info">2369 Robinson Lane Jackson<br /> OH 45640</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <p className="contact-info">(+1) 740-395-3829<br />(+1) 740-982-9821</p>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div className="contact-icon">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                        <p className="contact-info">help@turista.com<br />info@turista.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;