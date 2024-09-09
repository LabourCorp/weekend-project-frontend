import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const HamburgerMenu = () => {
    const [visible, setVisible] = useState(false);

    // Show the drawer
    const showDrawer = () => {
        setVisible(true);
    };

    // Close the drawer
    const closeDrawer = () => {
        setVisible(false);
    };

    return (
        <div>
            {/* Hamburger Button */}
            <Button
                icon={<MenuOutlined />}
                onClick={showDrawer}
            // style={{ marginBottom: '16px' }}
            >

            </Button>

            {/* Drawer */}
            <Drawer
                title="Menu"
                placement="left"
                onClose={closeDrawer}
                visible={visible}
            >
                {/* Menu List */}
                <Menu
                    mode="vertical"
                    style={{ width: 256 }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <SubMenu key="sub1" title="Services">
                        <Menu.Item key="3">1</Menu.Item>
                        <Menu.Item key="4">2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5">Contact</Menu.Item>
                </Menu>
            </Drawer>
        </div>
    );
};

export default HamburgerMenu;
