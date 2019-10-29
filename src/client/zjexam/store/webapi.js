'use strict';

import baseApi from "lib/webapi.js";
import { Message } from 'element-ui';

class webapi extends baseApi {
  constructor() {
    super();
  }
  getEnvName() {
    let env = 'prod';
    let url = window.location.href;
    if (url.indexOf('localhost') > 0) {
      env = "inte"
    } else if (url.indexOf('192') > 0) {
      env = "me"
    }

    if (url.includes('zy.pc.86edu')) {
      env = 'inte';
    }

    if (url.includes('pioneeringedu')) {
      env = 'inte';
    }

    return env;
  }

  envUrl = {
    me: 'http://api.zytest.86edu.net',
    inte: 'http://api.zytest.86edu.net',
    prod: 'https://api.zy.86edu.net',
  };

  joyred = {
    me: 'https://gaokaoquerytest.joyread.com.cn',
    inte: 'https://gaokaoquerytest.joyread.com.cn',
    prod: 'https://gaokaoquerytest.joyread.com.cn',
  }

  payUrl = {
    me: 'http://m.zy.86edu.net',
    inte: 'http://m.zy.86edu.net',
    prod: 'https://mzy.86edu.net',
  }

  loginServer = {
    me: 'http://api.zytest.86edu.net/api/app/person/info',
    inte: 'http://api.zytest.86edu.net/api/app/person/info',
    prod: 'https://api.zy.86edu.net/api/app/person/info',
  }

  getDomainApi(type) {
    return this.env('envUrl')
  }

  contentType(type) {
    if (type == 'json') {
      return "application/json"
    } else {
      return "application/x-www-form-urlencoded; charset=UTF-8"
    }
  }

  //请求体BUG提示
  getMessage(err, type) {
    let isArr = typeof err == 'object' && err.constructor == Array;
    // console.log(isArr, err);
    // if (type == 'then') {
    //   if (!isArr && err.code != 20000) {
    //     Message.error(err.msg || this.errorMess);
    //   }
    // } else if (type == 'catch') {
    //   Message.error(err.msg || this.errorMess);
    // }
  }

  setToken() {
    return { accesstoken: (this.storage('accesstoken') || 'SUPER_ADMIN_TOKEN_FOR_GAOKAO') }
  }

}

export default new webapi();