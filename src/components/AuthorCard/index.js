import React from 'react';
import GlobalStyles from '../../styles/Global.module.scss';
import Styles from './Styles.module.scss';
import TwitterIcon from '../Images/Icons/TwitterIcon';

const AuthorCard = ({ author }) => {
  return (
    <div className={Styles.authorCard}>
      <a NAME="author" />
      <img className={Styles.authorAvatar} src={author.avatar} />
      <div className={Styles.authorContent}>
        <h3 className={Styles.authorTitle}>{author.id}</h3>
        <p className={Styles.authorBio}>{author.bio}</p>
        <ul className={Styles.links}>
          <li className={Styles.linkItem}>
            <a
              className={Styles.link}
              href={`https://twitter.com/${author.twitter}`}
            >
              <TwitterIcon />
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorCard;
