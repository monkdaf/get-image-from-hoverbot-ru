#!/usr/bin/env node
// @flow

import cheerio from 'cheerio';
import debug from 'debug';
import urlapi from 'url';

const getImageListLog = debug('getImageList');

/**
 * Get list of images from html data.
 * @param {string} html Input html data
 * @returns {Array} Return array of object with list of images
 */

const getImageList = (nameProduct:string, html: string) => {
  if (!html) {
    getImageListLog('param "html" is empty');
    return [];
  }
  getImageListLog('param "html" is not empty');
  const list = [];

  const $ = cheerio.load(html);
  const links = $('a[data-zoom-id=zoom]');

  links.each((i, link) => {
    const url = $(link).attr('href');
    const path = urlapi.parse(url).pathname;
    const namefile = !path ? '' : path.split('/').pop().split('.');
    // const name = `${namefile[0]}_${i}.${namefile[1]}`;
    const name = `${nameProduct}_${i}.${namefile[1]}`;
    getImageListLog('parse name "%s"', name);
    // console.log(`name=${name}`);
    const item = {
      name,
      url,
    };
    list.push(item);
  });
  return list;
};

export default getImageList;
