import { getDetail } from '@/services/topic';
import { history } from 'umi';

const namespace = 'topicDetail';
const selectState = state => state[namespace];
const Model = {
  namespace,
  state: {
    topic: {},
    id: '',
    commentList: []
  },
  effects: {
    *fetchTopic(_, { call, put, select }) {
        const { id } = yield select(selectState);
        const result = yield call( getDetail, id);
        if (result.status === 'ok') {
            yield put({
                type: 'overrideStateProps',
                payload: result.topic
            })
        }
    },
    *fetchComments(_, { call, put, select }) {
        const { id } = yield select(selectState);
        const result = yield call( getDetail, id);
        if (result.status === 'ok') {
            yield put({
                type: 'overrideStateProps',
                payload: result.topic
            })
        }
    },
  },
  reducers: {
    overrideStateProps(state, { payload }) {
        return {
            ...state,
            ...payload,
        };
    },
  },
};
export default Model;
