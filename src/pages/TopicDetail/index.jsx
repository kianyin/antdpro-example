import React , {createElement} from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Comment } from 'antd'
import { List } from 'antd/lib/form/Form';

@connect(({ topicDetail }) => ({
    topicDetail
}))
export default class TopicDetail extends React.Component {
    componentDidMount() {
        const { dispatch, match} = this.props;
        const { id } = match.params;
        dispatch({
            type: 'topicDetail/overrideStateProps',
            payload:{ id }
        })
        dispatch({ type: 'topicDetail/fetchTopic' })
    }
    render() {
        const { topicDetail } =this.props;
        return (
            <PageHeaderWrapper>
                <Card>
                    <h1>{topicDetail.title}</h1>
                    <h5>---{topicDetail.author_name}</h5>
                    <p>{topicDetail.content}</p>
                </Card>
                <Card>
                    <List>
                        {
                            topicDetail.commentList.map(item => <Comment
                                actions={[createElement(item === 'liked' ? LikeFilled : LikeOutlined, {
                                    onClick: like,
                                  })]}
                                author={<a>Han Solo</a>}
                                avatar={null}
                                content={123}
                                datetime={null}
                            />)
                        }
                    
                    </List>
                </Card>
            </PageHeaderWrapper>
        );
    }
}