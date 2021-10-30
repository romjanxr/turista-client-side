import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'
import useAuth from '../../hooks/useAuth';
import { Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

const Booking = () => {
    const { id } = useParams();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [tourPackage, setTourPackage] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.booking = tourPackage;
        data.status = 'Pending';

        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    handleShow();
                    reset();
                }
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/packages/${id}`)
            .then(res => setTourPackage(res.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Booking Placed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>We receive your request will notify you soon!!</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-regular" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <div className="tour-details-section">
                <h2 className="tour-details-title">Tour Details</h2>
            </div>
            <div className="row my-5 w-75 mx-auto g-5">
                <div className="col-md-8 col-12">
                    <div className="mb-3">
                        <span className="time-period icon-clock"><FontAwesomeIcon
                            icon={faClock} /> 5 Days - 4 Night</span>
                        <h3 className="tour-name">Special {tourPackage.name} Tour</h3>
                    </div>
                    <div className="mb-4">
                        <img className="img-fluid" src={tourPackage.img} alt="" />
                    </div>
                    <p>{tourPackage.description}</p>
                </div>
                <div className="col-md-4 col-12">
                    <div className="book-now">
                        <h4>Tour Booking</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} type="text" placeholder="name" {...register("name", { required: true, maxLength: 80 })} />
                            {errors.name?.type === 'required' && <span className="text-white">Name is required</span>}

                            <input defaultValue={user?.email} type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.name?.type === 'required' && <span className="text-white">Email is required</span>}

                            <input type="tel" placeholder="Phone" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />
                            {errors.name?.type === 'required' && <span className="text-white">Phone is required</span>}

                            <input type="date" placeholder="Date" {...register("date", { required: true })} />
                            {errors.name?.type === 'required' && <span className="text-white">Date is required</span>}

                            <input type="number" placeholder="Number Of Person" {...register("person", { required: true })} />
                            {errors.name?.type === 'required' && <span className="text-white">Person is required</span>}

                            <input className="book-now-btn" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;