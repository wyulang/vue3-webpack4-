import api from './webapi';
export default {
  state: {

  },
  actions: {
    updateUser (action,params) {
      return api.post(`/api/user/update`, params)
    },
    getUserList (action,params) {
      return api.post(`/api/user/list`, params)
    },
  },
  mutations: {

  }
}