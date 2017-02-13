#!/usr/bin/env node
// @flow

// import fetch from 'node-fetch';
import debug from 'debug';
import downloadImage from './downloadImage';

const downloadAllImagesLog = debug('downloadAllImages');
const errorLog = debug('error');

/**
 * Get list of images from products list.
 * @param {Array} list  Array of object with list of products
 * @returns {Array} Return array of object with list of images
 */

const downloadAllImages = (list: [{name: string, url: string}]) => {
// const downloadAllImages = (url: string) => {
  downloadAllImagesLog('Start');
  return new Promise((resolve, reject) => {
    if (!list || list === []) {
      resolve([]);
    }
    const promiseList = list.map(item => downloadImage(item.name, item.url));
    Promise.all(promiseList)
    // .then(res => res.reduce((acc, item) => acc.concat(item)))
    .then((res) => {
      downloadAllImagesLog('All images is downloaded');
      resolve(res);
    })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
    // return [];
  });
};

export default downloadAllImages;
