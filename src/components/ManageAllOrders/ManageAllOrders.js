import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState('');

    // Load all orders data
    useEffect(() => {
        axios.get('https://turista-server.herokuapp.com/myorders')
            .then(res => setBookings(res.data))
    }, [status]);

    // handle Approve button
    const handleUpdate = id => {
        axios.put(`https://turista-server.herokuapp.com/myorders/${id}`, { status: 'Approved' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setStatus('Approved')
                }
            })
    }

    // Handle Delete Button
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            axios.delete(`https://turista-server.herokuapp.com/myorders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingUsers = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="w-75 mx-auto my-5">
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Ordered By</th>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(order => <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>Special {order.booking.name} Tour</td>
                            <td>${order.booking.price}</td>
                            <td>{order.status}</td>
                            <td>
                                <Button onClick={() => handleUpdate(order._id)} className="me-2" size="sm" variant="success"><FontAwesomeIcon icon={faCheckSquare} /></Button>
                                <Button onClick={() => handleDelete(order._id)} size="sm" variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrders;