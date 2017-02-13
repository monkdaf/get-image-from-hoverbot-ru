#!/usr/bin/env node
// @flow

import fetch from 'node-fetch';
import debug from 'debug';

import getProductList from './getProductList';

const getAllProductsLog = debug('getAllProducts');
const errorLog = debug('error');


/**
 * Get list of all products from url.
 * @param {string} url Input url pages with products
 * @param {Number} page current page
 * @param {Array} prevList list of product on previos pages
 * @returns {Array} Return array of object with list of products
 */

const getAllProducts = (url: string, page: number, prevList: [{name: string, url: string}]) => {
  getAllProductsLog('get page %s', page);
  return new Promise((resolve, reject) => {
    if (!page || page === 0) {
      resolve(prevList);
      return prevList;
    }
  // let commonList = [];
    const fullUrl = page === 1 ? url : `${url}?page=${page}`;
    getAllProductsLog('fullUrl is %s', fullUrl);
    fetch(fullUrl)
    .then(res => res.text())
    .then(html => getProductList(html))
    .then((list) => {
      getAllProductsLog('list is %s', JSON.stringify(list, null, ' '));
      return getAllProducts(url, page - 1, prevList.concat(list));
    })
    .then((list) => {
      getAllProductsLog('commonlist is %s', JSON.stringify(list, null, ' '));
      resolve(list);
      // return list;
    })
    .catch((err) => {
      errorLog('Error is %s', err);
      // console.error(err);
      reject(err);
    });
    return [];
  });
};

export default getAllProducts;
