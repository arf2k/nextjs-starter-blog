import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FA from 'react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
// import Config from '../../../../config';
import getCDNUrl from '../../../utils/cdn';

const { Content } = Layout;

const DomContent = (props) => {
  const {
    profile: {
      first_name: firstName, last_name: lastName, assets, intro, socials,
    },
  } = props;
  const primaryObj = assets.filter((asset) => asset.type === 'primary')[0];
  const primaryUrl = getCDNUrl(primaryObj.url, 'primary');
  return (
    <aside>
      <div className={style.profileAvatar} style={{ backgroundImage: `url(${primaryUrl})` }} />
      <div className={`${style.name} centerAlign`}>
        <div className={`${style.boxName} centerAlign`}>
          <h2>
            { firstName }
            {' '}
            <span>
              { lastName }
            </span>
          </h2>
        </div>
        <div className={`${style.badge} ${style.badgeGray}`}>{intro[0].content}</div>
        <div className="centerAlign box">
          {socials.length ? socials.map((social) => (
            social.type !== 'Issuu' ? (
              <a href={social.url} target="_blank" label="button" rel="noopener noreferrer">
                <FA name={social.type.toLowerCase()} />
              </a>
            ) : (
              <a href={social.url} target="_blank" label="button" rel="noopener noreferrer">
                issuu
              </a>
            )
          )) : <></> }
          {/* eslint-disable-next-line max-len */}
          {/* <a href="mailto:kderfus@gmail.com" label="button" rel="noopener noreferrer"><FA name="envelope" /></a> */}
        </div>
      </div>
    </aside>
  );
};

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children, profile } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent profile={profile} />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent profile={profile} />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent profile={profile} />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
