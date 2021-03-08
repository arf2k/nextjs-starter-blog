import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import SkillTile from '../../SkillTile';
import { domHtml } from '../../../utils/stripTags';
import CourseworkTile from '../../CourseworkTile';

const AboutMe = (props) => {
  const {
    // eslint-disable-next-line camelcase,react/prop-types
    profile: {
      about,
      experience,
      education,
      leadership,
      skills,
      coursework,
    },
  } = props;
  return (
    <>
      <div>
        {/* <SEO */}
        {/*  title="About" */}
        {/*  description={description} */}
        {/*  path="" */}
        {/* eslint-disable-next-line max-len */}
        {/*  keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']} */}
        {/* /> */}
        <h1 className="titleSeparate">About</h1>
        { about ? <p dangerouslySetInnerHTML={domHtml(about)} /> : null}
      </div>
      {
        experience.length ? (
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AboutTile type="Experience" experience={experience} />
            </Col>
          </Row>
        ) : <></>
      }
      {
        leadership.length ? (
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AboutTile type="Leadership" leadership={leadership} />
            </Col>
          </Row>
        ) : <></>
      }
      {
        education.length ? (
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AboutTile type="Education" education={education} />
            </Col>
          </Row>
        ) : <></>
      }
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SkillTile skills={skills} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <CourseworkTile coursework={coursework} />
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;
