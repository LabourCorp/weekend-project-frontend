import React from 'react';
import { Row, Col, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
    return (
        <Row justify="center" style={{ backgroundColor: "#f0f2f5", padding: "24px 0" }}>
            <Col span={20}>
                <Row justify="center" align="middle" style={{ textAlign: "center" }}>
                    <Col span={24}>
                        <Title level={2}>We Make Stuff Happen</Title>
                        <Paragraph>Build with us</Paragraph>
                    </Col>
                    <Col>
                        <Button type="primary" shape="round" size="large">Contact Us</Button>
                    </Col>
                    <Col>
                        <Button shape="round" size="large">Our Services</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default HeroSection;
