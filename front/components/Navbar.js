import React, { useMemo, useRef, useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const NavBar = () => {
  const style = useMemo(() => ({ margin: 'auto' }));
  const [state, setState] = useState('');
  const handleClick = (e) => {
      setState({ current: e.key });
  };

  const { current } = useRef(state);
  return (
    <div style={style}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <SubMenu key="SubMenu1" icon={<SettingOutlined />} title="반응속도체크 게임">
            <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">게임하기</Menu.Item>
            <Menu.Item key="setting:2">점수 확인</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="SubMenu2" icon={<SettingOutlined />} title="가위바위보 게임">
            <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">게임하기</Menu.Item>
            <Menu.Item key="setting:4">점수 확인</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="SubMenu3" icon={<SettingOutlined />} title="숫자야구 게임">
            <Menu.ItemGroup title="Item 3">
            <Menu.Item key="setting:5">게임하기</Menu.Item>
            <Menu.Item key="setting:6">점수 확인</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="SubMenu4" icon={<SettingOutlined />} title="지뢰찾기 게임">
            <Menu.ItemGroup title="Item 3">
            <Menu.Item key="setting:5">게임하기</Menu.Item>
            <Menu.Item key="setting:6">점수 확인</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            네 번째 메뉴 - 링크
            </a>
        </Menu.Item>
        </Menu>
    </div>
  );
};

export default NavBar;
