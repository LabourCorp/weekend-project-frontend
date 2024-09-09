import React from 'react';
import { Row, Col, Typography, Divider, Button, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const Footer = () => {
    return (
        <Row justify="center" style={{ backgroundColor: "#f0f2f5", padding: "24px 0" }}>
            <Col span={20}>
                <Row justify="center" align="middle" style={{ textAlign: "center" }}>
                    <Col span={16}>
                        <Title level={2}>Join Newsletter</Title>
                        <Paragraph>Subscribe to our newsletter</Paragraph>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <Input placeholder="you@email.com" prefix={<MailOutlined />} />
                            <Button>Mail me</Button>
                        </div>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center">
                    <Text>Copyright &copy; 2024</Text>
                </Row>
            </Col>
        </Row>
    );
};

export default Footer;
