import React from 'react';
import { Progress } from 'antd';
import style from './about.module.less';

const SkillTile = (props) => {
  const {
    skills,
  } = props;
  const formatContent = () => skills.map((skill) => {
    const {
      content,
    } = skill;
    return (
      <div style={{ marginTop: '8px' }} key={Math.random()}>
        <div>
          <Progress
            percent="100"
            showInfo={false}
            strokeWidth={22}
            status="active"
          />
        </div>
        <div style={{
          position: 'absolute',
          marginTop: '-22px',
          marginLeft: '15px',
          color: 'white',
          fontSize: '13px',
        }}
        >
          <span>{content}</span>
        </div>
      </div>
    );
  });
  const contentArr = formatContent();
  if (skills.length) {
    return (
      <div className={style.aboutTile} key={Math.random()}>
        <div className={style.aboutBlock}>
          <h3>Skills</h3>
          {contentArr}
        </div>
      </div>
    );
  }
  return <></>;
};

export default SkillTile;
