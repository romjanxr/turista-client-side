import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AddTourPackage from '../AddTourPackage/AddTourPackage';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    return (
        <div className="w-75 mx-auto my-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="myOrders">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="myOrders">My Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Manage All Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addPackage">Add Tour Package</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="myOrders">
                                <MyOrders />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ManageAllOrders />
                            </Tab.Pane>
                            <Tab.Pane eventKey="addPackage">
                                <AddTourPackage />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Dashboard;