import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SinglePackage from '../SinglePackage/SinglePackage';
import './TourPackage.css'

const TourPackage = () => {
    const [packages, setPackages] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('https://turista-server.herokuapp.com/packages')
            .then(res => {
                setPackages(res.data)
                setLoading(false);
            })
    }, []);



    return (
        <div className="container py-3 my-5 w-80" id="tour-package">
            <div className="text-center section-title mb-5">
                <span>Popular Tour Package</span>
                <h2>The Best Of Our All <br />
                    Tour Packages</h2>
            </div>
            {
                Loading && <div className="text-center mt-5"><Spinner animation="border" variant="danger" /></div>
            }
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(pkg => <SinglePackage
                            key={pkg._id}
                            pkg={pkg}
                        ></SinglePackage>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default TourPackage;