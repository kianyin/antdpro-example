import { getList } from '@/services/topic';
import { history } from 'umi';
import { message } from 'antd';

const namespace = 'topics';
const selectState = state => state[namespace];
const Model = {
  namespace,
  state: {
    topics: {
        data_list: [],
        total: 0
    },
    search: ''
  },
  effects: {
    *fetchTopics(_, { call, put, select }) {
        const { search } = yield select(selectState);
        const result = yield call( getList, { search });
        if (result.status === 'ok') {
            yield put({
                type: 'overrideStateProps',
                payload:{
                    topics:{
                        data_list: result.data_list,
                        total: result.total
                    }
                }
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
