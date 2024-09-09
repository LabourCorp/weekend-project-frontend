import React from 'react';
import { Row, Col, Typography } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CoreValues = () => {
    return (
        <Row justify="center" style={{ backgroundColor: "#f0f2f5", padding: "24px 0" }}>
            <Col span={20}>
                <Row justify="center" align="middle" style={{ textAlign: "center" }}>
                    <Col span={24}>
                        <Title level={2}>Hire labours</Title>
                        <Paragraph>labour is a full-service agency, building  , experiences.</Paragraph>
                    </Col>
                    <Col>
                        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
                            <Col span={24}>
                                <div style={{ backgroundColor: "#f0f2f5", padding: 24, borderRadius: 20 }}>
                                    <UserOutlined style={{ fontSize: 48, color: "#3772FF" }} />
                                    <Title level={4}>Discovery & Strategy</Title>
                                    <Paragraph>Hire Archietects contractors and more.</Paragraph>
                                </div>
                            </Col>
                            {/* Add more core values */}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default CoreValues;
