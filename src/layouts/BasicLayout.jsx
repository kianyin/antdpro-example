import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import { Link, useIntl, connect } from 'umi';

const BasicLayout = props => {
  const { dispatch, children } = props;
  const handleMenuCollapse = payload => {
    dispatch({
      type: 'global/changeLayoutCollapsed',
      payload,
    });
  }; 
  const { formatMessage } = useIntl();
  return (
    <ProLayout
      formatMessage={formatMessage}
      onCollapse={handleMenuCollapse}
      menuItemRender={(menuItemProps, defaultDom) => <Link to={menuItemProps.path}>{defaultDom}</Link>}
      breadcrumbRender={(routers = []) => routers}
      {...props}
    >
        {children}
    </ProLayout>
  );
};

export default connect(({ global }) => ({
  collapsed: global.collapsed,
}))(BasicLayout);