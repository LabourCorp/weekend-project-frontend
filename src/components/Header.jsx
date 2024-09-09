import React from 'react';
import { Row, Col, Typography } from 'antd';
import HamburgerMenu from './HamburgerMenu';

const { Title } = Typography;

const Header = () => {
    return (
        <Row justify="center" align="middle" style={{ backgroundColor: "#f0f2f5", padding: "12px 0" }}>
            <Col span={20}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <HamburgerMenu />
                    </Col>
                    <Col>
                        <Row align="middle" gutter={8}>
                            <Col>
                                <div style={{ width: 30, height: 30, background: "url(/subtract.svg) no-repeat center/contain" }} />
                            </Col>
                            <Col>
                                <Title level={2} style={{ margin: 0 }}>labour</Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Header;
