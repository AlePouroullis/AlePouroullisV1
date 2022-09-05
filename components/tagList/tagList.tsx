import React, { Fragment } from 'react';
import styles from './tagList.module.css';
import { Tag }  from '../../interfaces/tag';

type Props = {
   tags: Tag[];
}

const TagList: React.FC<Props> = ({tags}) => {
   return (
      <Fragment>
         {!!tags && (
            <ul className={styles["list"]}>
              {tags.map((tag, index) => (
                <li className={styles['list-item']} key={tag.fields.name}>
                  {index !== 0 && <span className={styles.middot}>&middot;</span>}
                  <span className={styles.tag}>{tag.fields.name}</span>
                </li>
              ))}
            </ul>
          )}
      </Fragment>
   )
}

export default TagList;