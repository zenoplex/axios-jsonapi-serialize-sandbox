// @flow
import axios from 'axios';

type Method = 'get' | 'post' | 'put' | 'delete';
type Headers = Object;

const _request
: (method: Method) => (headers: ?Headers) => (url: string) => (data: ?Object) => Promise<*>
= method => headers => url => data => axios.request({
  method,
  ...(headers || {}),
  url,
  ...(data || {}),
});

const request
: (method: Method) => (token: string) => (url: string) => *
= method => token => url => _request(method)({
  authorization: `Token ${token}`,
})(url);

export const get
: (token: string) => (url: string) => Promise<*>
= token => url => request('get')(token)(url)();

export const post
: (token: string) => (url: string) => (data: ?Object) => Promise<*>
= token => url => data => request('post')(token)(url)(data);

export const put
: (token: string) => (url: string) => (data: ?Object) => Promise<*>
  = token => url => data => request('put')(token)(url)(data);

export const del
: (token: string) => (url: string) => (data: ?Object) => Promise<*>
= token => url => data => request('delete')(token)(url)(data);

const getSites
: (token: string) => Promise<*>
= token => get(token)('/sites');

type PostSiteData = {
  name: string,
}

type SiteObject = {
  id: string,
  name: string,
}

const postSite
: (token: string) => (data: PostSiteData) => Promise<SiteObject>
= token => data => post(token)('/sites')(data);
