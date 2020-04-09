import {login as loginService , register as registerService} from '@/services/login';
import { history } from 'umi';
import { message } from 'antd';

const namespace = 'login';
const selectState = state => state[namespace];
const Model = {
  namespace,
  state: {
    username: '',
    password: ''
  },
  effects: {
    *login(_, { call, select }) {
        const state = yield select(selectState);
        const result = yield call(loginService, state);
        if (result.status === 'ok') {
            history.push('/')
        } else {
            message.error('login error');
        }

    },
    *register(_, { call, select }) {
        const state = yield select(selectState);
        const result = yield call(registerService, state);
        if (result.status === 'ok') {
            message.success('register successful');
        } else {
            message.error('register error');
        }
    }
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
