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
                    <Col size="md-4">
                        <div>Some kind of text</div>
                    </Col>
                </Row>
                <Row>
                    <Col size="lg-8">
                        Some more text
                    </Col>
                    <Col size="lg-4">
                        <div>Some kind of text</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home; 