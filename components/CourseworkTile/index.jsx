import React, { useState } from 'react';
import { Tag } from 'antd';
import style from './about.module.less';

const CourseworkTile = (props) => {
  const {
    coursework,
  } = props;
  const [tags, setTags] = useState(coursework);
  const handleClose = (removedCourse) => {
    const newTags = tags.filter((tag) => tag.course_name !== removedCourse);
    setTags(newTags);
  };
  const formatContent = () => tags.map((course) => {
    const {
      course_name: courseName,
    } = course;
    return (
      <Tag
        key={Math.random()}
        style={{ marginBottom: '.3rem' }}
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(courseName);
        }}
      >
        {courseName}
      </Tag>
    );
  });
  const contentArr = formatContent();
  if (coursework.length) {
    return (
      <div className={style.aboutTile} key={Math.random()}>
        <div className={style.aboutBlock}>
          <h3>Coursework</h3>
          {contentArr}
        </div>
      </div>
    );
  }
  return <></>;
};

export default CourseworkTile;
