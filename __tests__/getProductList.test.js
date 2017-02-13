#!/usr/bin/env node
// @flow

import getProductList from '../src/getProductList';

describe('Tests for getProductList', () => {
  test('body is empty', () => {
    expect(getProductList().toString()).toBe([].toString());
  });

  test('body is not have right tag', () => {
    expect(JSON.stringify(getProductList('qweerty'))).toBe(JSON.stringify([]));
  });

  const oneTag = `
  <a class="image-cover" href="/product/giroskuter-hoverbot-a8-ugolno-chernyy" onclick="datalayerclk(780082, Гироскутер Hoverbot С1 (A8) карбон (угольно-черный), 20750.0, Hoverbot, Гироскутер, 13,6 кг, 1)">
  `;
  const oneTagReturn =
    [
      { name: 'giroskuter-hoverbot-a8-ugolno-chernyy', url: '/product/giroskuter-hoverbot-a8-ugolno-chernyy' },
    ];
  test('body have only one right tag', () => {
    expect(JSON.stringify(getProductList(oneTag))).toBe(JSON.stringify(oneTagReturn));
  });

  const twoTag = `
  <a class="image-cover" href="/product/giroskuter-hoverbot-a8-ugolno-chernyy" onclick="datalayerclk(780082, Гироскутер Hoverbot С1 (A8) карбон (угольно-черный), 20750.0, Hoverbot, Гироскутер, 13,6 кг, 1)">
  <a class="image-cover" href="/product/giroskuter-hoverbot-b-9-kamuflyazh" onclick="datalayerclk(780438, Гироскутер Hoverbot B 9 камуфляж, 23380.0, Hoverbot, Гироскутер, 16,5 кг, 2)">
  `;
  const twoTagReturn =
    [
      { name: 'giroskuter-hoverbot-a8-ugolno-chernyy', url: '/product/giroskuter-hoverbot-a8-ugolno-chernyy' },
      { name: 'giroskuter-hoverbot-b-9-kamuflyazh', url: '/product/giroskuter-hoverbot-b-9-kamuflyazh' },
    ];
  test('body have only two right tag', () => {
    expect(JSON.stringify(getProductList(twoTag))).toBe(JSON.stringify(twoTagReturn));
  });
});
