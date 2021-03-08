import React from 'react';
import { Link } from 'gatsby';
import style from './postCard.module.less';
import getCDNUrl from '../../utils/cdn';

const PostCard = (props) => {
  const {
    data: {
      title, caption, imageUrl, url,
    },
  } = props;
  const cdnUrl = getCDNUrl(imageUrl, 'articleImage');
  return (
    <div className={style.postCard}>
      <Link to={url} target="_blank">
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${cdnUrl})`,
          }}
        />
        <div className={style.mrTp20}>
          <h3>{title || ''}</h3>
          <p>{caption || ''}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
