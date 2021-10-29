import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SinglePackage.css'
import { faClock } from '@fortawesome/free-regular-svg-icons';

const SinglePackage = ({ pkg }) => {
    const { name, description, img, price } = pkg;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex justify-content-between mt-2">
                        <Card.Title className="package-title">{name}</Card.Title>
                        <Card.Title className="package-price">${price}</Card.Title>
                    </div>
                    <div>
                        <FontAwesomeIcon className="icon my-2" icon={faStar} />
                        <FontAwesomeIcon className="icon my-2" icon={faStar} />
                        <FontAwesomeIcon className="icon my-2" icon={faStar} />
                        <FontAwesomeIcon className="icon my-2" icon={faStar} />
                        <FontAwesomeIcon className="icon my-2" icon={faStar} />
                    </div>
                    <div>
                        <p className="time-period"><FontAwesomeIcon className="icon-clock" icon={faClock} /> 5 Days - 4 Night</p>
                    </div>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <button className="btn-booking">Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SinglePackage;