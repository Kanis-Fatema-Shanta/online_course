import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faLevelUpAlt, faStar,  faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    //console.log("course", typeof (props.data))
    return (
        <div>
            <Container>
                <div className="course-list">
                    <Row>
                        {/* course card items */}
                        {
                            props.data.map(every =>
                                <div className="items">
                                    <Col md={2}>
                                        <div>
                                            <Image src={every.image} height={70} width={70}></Image>
                                        </div>
                                    </Col>
                                    <Col md={10} >
                                        <div>
                                            <h5>{every.name}</h5>
                                            
                                            <FontAwesomeIcon icon={faStar} style={{color:'orange'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color:'orange'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color:'orange'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color:'orange'}}/>
                                            <FontAwesomeIcon icon={faStarHalfAlt} style={{color:'orange'}}/>
                                            <span> {every.rating} </span> 
                                            <br/>
                                            <FontAwesomeIcon icon={faLevelUpAlt} /> 
                                            <span> {every.level} </span>
                                            <br/>

                                            <b>By : {every.by}</b>
                                            <h5>${every.price}</h5>
                                             <span>{every.students}k students</span>
                                            <br></br>
                                            <Button className="button" onClick={() => props.clickHandle({ every })} > Enrol Now </Button>
                                        </div>
                                    </Col>
                                </div>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Course;