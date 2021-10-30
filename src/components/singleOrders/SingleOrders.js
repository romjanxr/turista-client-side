import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const SingleOrders = ({ orders, setOrders, order }) => {
    const { name, price } = orders.booking;
    const { status, _id } = orders;
    const { setBookings } = setOrders;
    const { bookings } = order;
    console.log(orders)

    const handleUpdate = id => {
        axios.put(`https://turista-server.herokuapp.com/myorders/${id}`, { status: 'Approved' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert('data updated')
                    window.location.reload();
                }
            })
    }

    const handleDelete = id => {
        axios.delete(`https://turista-server.herokuapp.com/myorders/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    const remainingUsers = bookings.filter(booking => booking._id !== id);
                    setBookings(remainingUsers);
                }
            })
    }
    return (
        <tr>
            <td>Special {name} Tour</td>
            <td>${price}</td>
            <td>{status}</td>
            <td>
                <Button onClick={() => handleUpdate(_id)} className="me-2" size="sm" variant="success"><FontAwesomeIcon icon={faCheckSquare} /></Button>
                <Button onClick={() => handleDelete(_id)} size="sm" variant="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>
            </td>
        </tr>
    );
};

export default SingleOrders;