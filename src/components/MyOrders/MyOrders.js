import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        const email = user.email;
        axios.get(`http://localhost:5000/myorders?email=${email}`)
            .then(res => {
                setBookings(res.data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleUpdate = id => {
        axios.put(`http://localhost:5000/myorders/${id}`, { status: 'Approved' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert('data updated')
                    window.location.reload();
                }
            })
    }

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/myorders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    const remainingUsers = bookings.filter(booking => booking._id !== id);
                    setBookings(remainingUsers);
                }
            })
    }

    return (
        <div className="container">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Package Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(order => <>
                            <tr>
                                <td>Special {order.booking.name} Tour</td>
                                <td>${order.booking.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    <Button onClick={() => handleUpdate(order._id)} className="me-2" size="sm" variant="success"><FontAwesomeIcon icon={faCheckSquare} /></Button>
                                    <Button onClick={() => handleDelete(order._id)} size="sm" variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                </td>
                            </tr>
                        </>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;