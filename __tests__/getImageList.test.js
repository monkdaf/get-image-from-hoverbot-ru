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

  const oneTag = `
  <a href="#" class="compare-link compare-delete" data-compare-delete="65198835">
      <span class="link-text">Удалить из сравнения</span>
      <i class="icon icon-compare"></i>
    </a>
  <a href="https://static-eu.insales.ru/images/products/1/4857/89363193/large_2.jpg" class="swiper-slide gallery-control  active ">
    <img src="https://static-eu.insales.ru/images/products/1/4857/89363193/thumb_2.jpg" class="slide-image">
  </a>
`;
  const oneTagReturn =
    [
      { name: 'cegvey-hoverbot-g-6_0.jpg', url: 'https://static-eu.insales.ru/images/products/1/4857/89363193/large_2.jpg' },
    ];
  test('body have only one right tag', () => {
    expect(JSON.stringify(getImageList('cegvey-hoverbot-g-6', oneTag))).toBe(JSON.stringify(oneTagReturn));
  });

  const twoTag = `
  <a href="#" class="compare-link compare-delete" data-compare-delete="65198835">
      <span class="link-text">Удалить из сравнения</span>
      <i class="icon icon-compare"></i>
    </a>
  <a href="https://static-eu.insales.ru/images/products/1/4857/89363193/large_2.jpg" class="swiper-slide gallery-control  active ">
    <img src="https://static-eu.insales.ru/images/products/1/4857/89363193/thumb_2.jpg" class="slide-image">
  </a>
  <a href="https://static-eu.insales.ru/images/products/1/4860/89363196/large_3.jpg" class="swiper-slide gallery-control ">
    <img src="https://static-eu.insales.ru/images/products/1/4860/89363196/thumb_3.jpg" class="slide-image">
  </a>
`;
  const twoTagReturn =
    [
      { name: 'cegvey-hoverbot-g-6_0.jpg', url: 'https://static-eu.insales.ru/images/products/1/4857/89363193/large_2.jpg' },
      { name: 'cegvey-hoverbot-g-6_1.jpg', url: 'https://static-eu.insales.ru/images/products/1/4860/89363196/large_3.jpg' },
    ];
  test('body have only two right tag', () => {
    expect(JSON.stringify(getImageList('cegvey-hoverbot-g-6', twoTag))).toBe(JSON.stringify(twoTagReturn));
  });
});
