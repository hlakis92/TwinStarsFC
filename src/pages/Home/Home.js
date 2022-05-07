import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Home.css";
import SimpleImageSlider from "../../components/SimpleSlider/SimpleSlider";




class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <h2>Latest Updates</h2>
                        <SimpleImageSlider />
                    </Col>
                    <Col size="lg-4">
                    <h3 style = {{ 
                        marginTop : "80px"}}>
                        Next Match
                    </h3>
                    <div>
                        <img src={require("../../images/NextMatch.jpg")} 
                        alt="NextMatch" 
                        style = {{
                        width : "100%", 
                        height : "100%", 
                        marginTop : "20px"}} />
                        </div>
                    <div>
                       <p>SEASON OPENER ALERT! Get your season tickets now! This
                          will be a match you do not want to miss. The season OPENER
                          vs MPLS City FC will be one for the books! 
                       </p>  
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-8">
                        Some more text
                    </Col>
                    <Col size="lg-4">
                    <h3>
                        Team Schedule
                    </h3>
                    <div>
                        <img src={require("../../images/Schedule.jpeg")} 
                        alt="TwinstarsSchedule" 
                        style = {{
                        width : "100%", 
                        height : "100%", 
                        marginTop : "20px"}} />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home; 