import React from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Input, Card, Table } from 'antd'

@connect(({ topics }) => ({
    topics
}))
export default class Topics extends React.Component {
    componentDidMount() {
        const { dispatch } =this.props;
        dispatch({ type: 'topics/fetchTopics' })
    }
    onSearch(value) {
        const { dispatch } =this.props;
        dispatch({
            type: 'topics/overrideStateProps',
            payload:{ title: value, page: 1 }
        })
        dispatch({ type: 'topics/fetchTopics' })
    }
    render() {
        const { topics, dispatch } =this.props;
        const columns = [
            {
              title: '标题',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: '作者',
              dataIndex: 'author_name',
              key: 'age',
            },
            {
              title: '回复数',
              dataIndex: 'reply_count',
              key: 'reply_count',
            },
          ];
        const tableProps = {
            dataSource: topics.topics.data_list,
            columns,
            pagination:{
                current: topics.page,
                size: 10,
                total: topics.topics.total
            },
            onChange:(pagination)=>{
                dispatch({
                    type: 'topics/overrideStateProps',
                    payload:{ page: pagination.current }
                })
                dispatch({type: 'topics/fetchTopics'})
            }
        }
        return (
            <PageHeaderWrapper>
                <Card>
                    <Input.Search
                        enterButton="Search"
                        size="large"
                        placeholder="input search text"
                        onSearch={this.onSearch.bind(this)}
                        style={{ width: 400 }}
                    />
                </Card>
                <Card>
                    <Table {...tableProps}/>
                </Card>
            </PageHeaderWrapper>
        );
    }
}