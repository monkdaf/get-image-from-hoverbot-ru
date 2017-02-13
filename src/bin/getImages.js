#!/usr/bin/env node
// @flow

// import fetch from 'node-fetch';
import debug from 'debug';
// import fs from 'fs';
import getAllImages from '../getAllImages';
import getAllProducts from '../getAllProducts';
// import downloadAllImages from '../downloadAllImages';
import downloadImages from '../downloadImages';
// import getCountPages from '../getCountPages';

// console.log(half(Number(process.argv[process.argv.length - 1])));
// console.log(`Arguments is (${process.argv.length}) ${process.argv}`);
const command = process.argv[2];
const path = process.argv[3];

const getImagesLog = debug('getImages');
const errorLog = debug('error');


if (command === 'list') {
  getImagesLog('Start');
  getAllProducts(path, 6, [])
  .then((list) => {
    getImagesLog('Count of products: %s', list.length);
    return getAllImages(list);
  })
  .then((list) => {
    getImagesLog('Count of images: %s', list.length);
    // getImagesLog('list of images: %s', list[0].name);
    // console.log(list);
    return list;
  })
  // .then(list => downloadAllImages(list))
  .then((list) => {
    getImagesLog('Total count of images : %s', list.length);
    if (list.count === 0) {
      throw new Error('No iages');
    }
  // getImagesLog('first image is %s', list[0].name);
  // downloadAllImages(list);
    downloadImages(list, 50);
  // return JSON.stringify(res, null, ' ');
  // return getMaxImage(res.items[0]);
  })
  // .then(list => getImagesLog('Count of products: ', list.length))
  // .then(list => getAllImages(list))
  // console.log(`Answer: ${getAllProducts(patch, 2, [])}`);

  // // fetch(patch)
  // .then(res => res.text())
  // .then(body => getImageList(body))
  // .then((arr) => {
  //   getImagesLog('get array with lists');
  //   getImagesLog('array => JSON is:\r\n%s', JSON.stringify(arr, null, ' '));
  //   // console.log(arr);
  //   // console.log(JSON.stringify(arr, null, ' '));
  //   // console.log(JSON.stringify(arr));
  //   return JSON.stringify(arr, null, ' ');
  // })
  // .then((json) => {
  //   fs.writeFile('temp/list.json', json, (err) => {
  //     if (err) throw err;
  //     getImagesLog('list.json is saved!');
  //   });
  // })
  .catch((err) => {
    errorLog('Error is %s', err);
    // console.error(err);
  });
}

if (command === 'img') {
  // some task for processing images
}
