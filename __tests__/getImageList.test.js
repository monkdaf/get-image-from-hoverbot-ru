#!/usr/bin/env node
// @flow

import getImageList from '../src/getImageList';

describe('Tests for getImageList', () => {
  test('body is empty', () => {
    expect(getImageList().toString()).toBe([].toString());
  });

  test('body is not have right tag', () => {
    expect(JSON.stringify(getImageList('qweerty'))).toBe(JSON.stringify([]));
  });

  const oneTag = `<div class="item">
               <a
                    data-zoom-id="zoom"
                    href="https://static-eu.insales.ru/images/products/1/6591/93977023/giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"
                    data-image="https://static-eu.insales.ru/images/products/1/6591/93977023/large_giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"
                >
                    <img src="https://static-eu.insales.ru/images/products/1/6591/93977023/thumb_giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"/>
                </a>
            </div>`;
  const oneTagReturn =
    [
      { name: 'giroskuter-hoverbot-a8-ugolno-chernyy-1_0.jpg', url: 'https://static-eu.insales.ru/images/products/1/6591/93977023/giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg' },
    ];
  test('body have only one right tag', () => {
    expect(JSON.stringify(getImageList(oneTag))).toBe(JSON.stringify(oneTagReturn));
  });

  const twoTag = `<div class="item">
               <a
                    data-zoom-id="zoom"
                    href="https://static-eu.insales.ru/images/products/1/6591/93977023/giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"
                    data-image="https://static-eu.insales.ru/images/products/1/6591/93977023/large_giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"
                >
                    <img src="https://static-eu.insales.ru/images/products/1/6591/93977023/thumb_giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"/>
                </a>
            </div>

            <div class="item">
               <a
                    data-zoom-id="zoom"
                    href="https://static-eu.insales.ru/images/products/1/4564/77173204/giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"
                    data-image="https://static-eu.insales.ru/images/products/1/4564/77173204/large_giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"
                >
                    <img src="https://static-eu.insales.ru/images/products/1/4564/77173204/thumb_giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg"/>
                </a>
            </div>`;
  const twoTagReturn =
    [
      { name: 'giroskuter-hoverbot-a8-ugolno-chernyy-1_0.jpg', url: 'https://static-eu.insales.ru/images/products/1/6591/93977023/giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg' },
      { name: 'giroskuter-hoverbot-a8-ugolno-chernyy-1_1.jpg', url: 'https://static-eu.insales.ru/images/products/1/4564/77173204/giroskuter-hoverbot-a8-ugolno-chernyy-1.jpg' },
    ];
  test('body have only two right tag', () => {
    expect(JSON.stringify(getImageList(twoTag))).toBe(JSON.stringify(twoTagReturn));
  });
});
