import React, { useMemo, useRef, useState } from 'react';
import { Menu } from 'antd';
import { GlobalOutlined, CrownOutlined, FireOutlined, LikeOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import Link from 'next/link';

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
      <Menu style={{ marginBottom: '50px' }} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mainPage" icon={<GlobalOutlined />}>
        <a href="/">메인페이지로</a>
      </Menu.Item>
      <SubMenu key="SubMenu1" icon={<ThunderboltOutlined />} title="반응속도체크 게임">
        <Menu.ItemGroup title="반응속도체크">
        <Menu.Item key="setting:1"><Link href="/responseCheck"><a>게임하기</a></Link></Menu.Item>
        <Menu.Item key="setting:2">점수 확인</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="SubMenu2" icon={<LikeOutlined />} title="가위바위보 게임">
        <Menu.ItemGroup title="가위바위보">
        <Menu.Item key="setting:3">게임하기</Menu.Item>
        <Menu.Item key="setting:4">점수 확인</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="SubMenu3" icon={<TrophyOutlined />} title="숫자야구 게임">
        <Menu.ItemGroup title="숫자야구">
        <Menu.Item key="setting:5"><Link href="/numberBaseball"><a>게임하기</a></Link></Menu.Item>
        <Menu.Item key="setting:6"><Link href="/numberBaseballScore"><a>점수 확인</a></Link></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="SubMenu4" icon={<FireOutlined />} title="지뢰찾기 게임">
        <Menu.ItemGroup title="지뢰찾기">
        <Menu.Item key="setting:7">게임하기</Menu.Item>
        <Menu.Item key="setting:8">점수 확인</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay" icon={<CrownOutlined />}>
        <a href="none">최종 순위</a>
      </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
