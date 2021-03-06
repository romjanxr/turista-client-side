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
        document.title = "Turista | My Orders"
    }, [])

    // Load user Orders
    useEffect(() => {
        const email = user.email;
        axios.get(`https://turista-server.herokuapp.com/myorders?email=${email}`)
            .then(res => {
                setBookings(res.data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    // handle Approve button
    const handleUpdate = id => {
        axios.put(`https://turista-server.herokuapp.com/myorders/${id}`, { status: 'Approved' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setStatus(res.request.responseURL)
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
        <div>
            <div className="tour-details-section">
                <h2 className="tour-details-title">My Orders</h2>
            </div>
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
        </div>
    );
};

export default MyOrders;