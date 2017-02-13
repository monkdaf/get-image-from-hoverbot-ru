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
  <div class="product-title">
      <h3>
        <a href="/product/cegvey-hoverbot-g-6">
          Cегвей Hoverbot G-6
        </a>
      </h3>
    </div>
  `;
  const oneTagReturn =
    [
      { name: 'cegvey-hoverbot-g-6', url: 'http://www.hoverbot.ru/product/cegvey-hoverbot-g-6' },
    ];
  test('body have only one right tag', () => {
    expect(JSON.stringify(getProductList(oneTag))).toBe(JSON.stringify(oneTagReturn));
  });

  const twoTag = `
  <div class="product-title">
      <h3>
        <a href="/product/cegvey-hoverbot-g-6">
          Cегвей Hoverbot G-6
        </a>
      </h3>
    </div>
  <div class="product-title">
    <h3>
      <a href="/product/hoverbot-itank-pro">
        Hoverbot iTank PRO
      </a>
    </h3>
  </div>
  `;
  const twoTagReturn =
    [
      { name: 'cegvey-hoverbot-g-6', url: 'http://www.hoverbot.ru/product/cegvey-hoverbot-g-6' },
      { name: 'hoverbot-itank-pro', url: 'http://www.hoverbot.ru/product/hoverbot-itank-pro' },
    ];
  test('body have only two right tag', () => {
    expect(JSON.stringify(getProductList(twoTag))).toBe(JSON.stringify(twoTagReturn));
  });
});
