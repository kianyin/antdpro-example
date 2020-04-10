import request from '@/utils/request';
import API_HOST from '@/utils/apiHosts'

export async function getList(params) {
  return request(`${API_HOST}/topics`, {
    params,
  });
}

export async function getDetail(id) {
    return request(`${API_HOST}/topics/${id}`);
  }
