// @flow
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';
import { get, post, put, del } from '../src/request';

describe('request api', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('get', () => {
    it('should request /sites with get', done => {
      get('token')('/sites');

      moxios.wait(() => {
        moxios.requests.mostRecent()
          .respondWith({
            status: 200,
            resposnse: 'hello',
          })
          .then(() => {
            console.log()
            done();
          });
      });
    });
  });
});
