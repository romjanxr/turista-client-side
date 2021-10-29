import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddTourPackage.css'
const axios = require('axios').default;

const AddTourPackage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    handleShow();
                    reset();
                }
            })
    }

    return (
        <div className="py-5 my-5">
            <>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Package Added</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Tour Package Added Successfully!!</Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-regular" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <div className="text-center section-title">
                <span>Popular Tour Package</span>
                <h2>The Best Of Our All <br />
                    Tour Packages</h2>
            </div>
            <div className="add-package mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" />
                    {errors.name?.type === 'required' && <span className="text-danger">Package Name is required</span>}

                    <textarea {...register("description", { required: true })} placeholder="Package Description" />
                    {errors.description?.type === 'required' && <span className="text-danger">Package Description is required</span>}

                    <input type="number" {...register("price", { required: true })} placeholder="price" />
                    {errors.price?.type === 'required' && <span className="text-danger">Description is required</span>}

                    <input {...register("img", { required: true })} placeholder="image url" />
                    {errors.img?.type === 'required' && <span className="text-danger">Description is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTourPackage;