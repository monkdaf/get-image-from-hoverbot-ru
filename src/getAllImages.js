#!/usr/bin/env node
// @flow

import debug from 'debug';

import getImageListFromUrl from './getImageListFromUrl';

const getAllImagesLog = debug('getAllImages');
const errorLog = debug('error');


/**
 * Get list of images from products list.
 * @param {Array} list  Array of object with list of products
 * @returns {Array} Return array of object with list of images
 */

function getAllImages(list: [{name: string, url: string}]) {
  getAllImagesLog('Start');
  return new Promise((resolve, reject) => {
    if (!list || list === []) {
      resolve([]);
    }
    const promiseList = list.map(item => getImageListFromUrl(item.name, item.url));
    Promise.all(promiseList)
    .then(res => res.reduce((acc, item) => acc.concat(item)))
    .then((res) => {
      getAllImagesLog('resImagesList is %s', res);
      resolve(res);
    })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
    // return [];
  });
}


export default getAllImages;
