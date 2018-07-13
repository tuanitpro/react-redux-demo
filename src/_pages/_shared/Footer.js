import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class Footer extends Component{
    
    render() {
        return (
            <footer>           
            <Container fluid>
                <Row>
                <Col xs="3">
                <h5 className="title mb-3">
                            <strong>About material design</strong>
                        </h5>
                        <p>Material Design for Bootstrap (MDB) is a powerful Material Design UI KIT for most popular HTML, CSS,
                            and JS framework - Bootstrap.</p>
                </Col>
                <Col xs="3">
                        <h5 className="title mb-3">
                            <strong>First column</strong>
                        </h5>
                        <ul>
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                </Col>
                <Col xs="3">
                <h5 className="title mb-3">
                            <strong>Second column</strong>
                        </h5>
                        <ul>
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                </Col>
                <Col xs="3">
                <h5 className="title mb-3">
                            <strong>Third column</strong>
                        </h5>
                        <ul>
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>
                </Col>
                </Row>
                <Row>
                    <div className="footer-copyright">
                     <Container fluid>
                    © 2018 Copyright:
                    <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>    
                    </Container>
                    </div>  
                </Row>
                </Container>                        
        </footer>
        )
    }
}

export default Footer