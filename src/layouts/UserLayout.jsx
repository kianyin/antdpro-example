import { connect } from 'umi';
import React from 'react';
import styles from './UserLayout.less';

const UserLayout = props => {
  const {
    children,
  } = props;
  return (
    <div className={styles.content}>
        {children}
    </div>
  );
};

export default connect(({}) => ({  }))(UserLayout);
