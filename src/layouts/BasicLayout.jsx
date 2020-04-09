import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import { connect } from 'umi';

const BasicLayout = props => {
  const { dispatch, children, settings } = props;
  const handleMenuCollapse = payload => {
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload,
    });
  }; 
  return (
    <ProLayout
      onCollapse={handleMenuCollapse}
      breadcrumbRender={(routers = []) => routers}
      {...props}
      {...settings}
    >
        {children}
    </ProLayout>
  );
};

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed, settings
}))(BasicLayout);