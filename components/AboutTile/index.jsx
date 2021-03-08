import React from 'react';
import { Divider } from 'antd';
import style from './about.module.less';
import getDate from '../../utils/date';
import getEducation from '../../utils/getEducation';

const AboutTile = (props) => {
  const {
    type,
    experience,
    education,
    leadership,
  } = props;
  const getContent = () => {
    if (type === 'Experience') {
      return experience.map((expObj, k) => {
        const {
          position,
          company,
          link,
          start_date: startDate,
          end_date: endDate,
        } = expObj;
        return (
          <div className={style.aboutBlock} key={Math.random()}>
            <h4 style={{ marginBottom: 0 }}>
              {position}
              ,
              {' '}
              <a href={link} target="_blank" rel="noopener noreferrer">{company}</a>
            </h4>
            <p>
              { getDate(startDate) }
              {' '}
              -
              {' '}
              { getDate(endDate) }
            </p>
            {(k !== (experience.length - 1)) && (experience.length !== 0) ? <Divider /> : null}
          </div>
        );
      });
    }
    if (type === 'Education') {
      return education.map((edObj, k) => (
        <div className={style.aboutBlock} key={Math.random()}>
          <h4 style={{ marginBottom: 0 }}>
            {getEducation(edObj)}
          </h4>
          {(k !== (education.length - 1)) && (education.length !== 0) ? <Divider /> : null}
        </div>
      ));
    }
    if (type === 'Leadership') {
      return leadership.map((leadObj, k) => {
        const {
          position,
          organization,
          link,
          start_date: startDate,
          end_date: endDate,
        } = leadObj;
        return (
          <div className={style.aboutBlock} key={Math.random()}>
            <h4 style={{ marginBottom: 0 }}>
              {position}
              ,
              {' '}
              <a href={link} target="_blank" rel="noopener noreferrer">{organization}</a>
            </h4>
            <p>
              { getDate(startDate) }
              {' '}
              -
              {' '}
              { getDate(endDate) }
            </p>
            { (k !== (leadership.length - 1) && (leadership.length !== 0)) ? <Divider /> : null }
          </div>
        );
      });
    }
    return [];
  };
  const contentArr = getContent();
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock} key={Math.random()}>
        <h3>{type}</h3>
      </div>
      {contentArr}
    </div>
  );
};

export default AboutTile;
