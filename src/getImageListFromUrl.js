#!/usr/bin/env node
// @flow

import fetch from 'node-fetch';
import debug from 'debug';
import getImageList from './getImageList';

const getImageListFromUrlLog = debug('getImageListFromUrl');
const errorLog = debug('error');

/**
 * Get list of images from product's url.
 * @param {string} url product's url
 * @returns {Array} Return array of object with list of images
 */
const getImageListFromUrl = (name: string, url: string) => {
  getImageListFromUrlLog('Start with url: %s', url);
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.text())
    .then(html => getImageList(name, html))
    .then((list) => {
      getImageListFromUrlLog('Images list is %s', JSON.stringify(list, null, ' '));
      resolve(list);
    })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
  });
};

export default getImageListFromUrl;
