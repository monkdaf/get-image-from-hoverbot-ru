#!/usr/bin/env node
// @flow

import cheerio from 'cheerio';
import debug from 'debug';
import urlapi from 'url';

const getProductListLog = debug('getProductList');

/**
 * Get list of products from html data.
 * @param {string} html Input html data
 * @returns {Array} Return array of object with list of products
 */

const getProductList = (html: string) => {
  if (!html) {
    getProductListLog('param "html" is empty');
    return [];
  }
  getProductListLog('param "html" is not empty');
  const list = [];

  const $ = cheerio.load(html);
  const links = $('div[class=product-title]');
  links.each((i, link) => {
    const goal = $(link).find('h3').find('a');
    let url = $(goal).attr('href');
    if (/http/.exec(url) === null) {
      url = `http://www.hoverbot.ru${url}`;
    }
    const path = urlapi.parse(url).pathname;
    const name = !path ? '' : path.split('/').pop();

    getProductListLog('parse name "%s"', name);
    const item = {
      name,
      url,
    };
    list.push(item);
  });
  return list;
};

export default getProductList;
