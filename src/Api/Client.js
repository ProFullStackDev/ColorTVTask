import axios from 'axios';

let apiClient = null;

class Client {
  constructor () {
    this.get = this.get.bind (this);
    this.post = this.post.bind (this);
  }

  _getClient () {
    apiClient = axios.create ({
      baseURL: 'https://api.unsplash.com/',
    });

    apiClient.interceptors.request.use (
      async config => {
        return config;
      },
      err => {
        return Promise.reject (err);
      }
    );

    return apiClient;
  }

  _config () {
    return {};
  }

  get (url) {
    return this._getClient ().get (url, this._config ());
  }

  post (url, data) {
    return this._getClient ().post (url, data, this._config ());
  }
}

const AppClient = new Client ();
const get = AppClient.get;
const post = AppClient.post;

module.exports = {
  get,
  post,
  AppClient,
};
