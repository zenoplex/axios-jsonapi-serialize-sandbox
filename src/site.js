// @flow
import { get, post } from 'request';

type PostSiteData = {
  name: string,
}

type SiteObject = {
  id: string,
  name: string,
}

export const getSites
: (token: string) => Promise<*>
= token => get(token)('/sites');

export const postSite
        : (token: string) => (data: PostSiteData) => Promise<SiteObject>
        = token => data => post(token)('/sites')(data);
