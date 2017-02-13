#!/usr/bin/env node
// @flow

import getCountPages from '../src/getCountPages';

describe('Tests for getCountPages', () => {
  test('body is empty', () => {
    expect(getCountPages()).toBe(0);
  });

  test('body is not have right tag', () => {
    expect(getCountPages()).toBe(0);
  });

  const sevenPages = `<div class="pagination-container">
  <ul class="list-inline list-unstyled">
    <li class="prev"><a href=""><i class="fa fa-angle-left"></i></a></li>
    <li class="active"><a href="">1</a></li>
    <li><a href="/collection/giroskuter/hoverbot?page=2">2</a></li>
    <li><a href="/collection/giroskuter/hoverbot?page=3">3</a></li>
    <li class="active"><a href="">&hellip;</a></li>
    <li><a href="/collection/giroskuter/hoverbot?page=7">7</a></li>
    <li class="next"><a href="/collection/giroskuter/hoverbot?page=2"><i class="fa fa-angle-right"></i></a></li>
  </ul><!-- /.list-inline -->
</div><!-- /.pagination-container -->`;
  test('body have only one right tag', () => {
    expect(getCountPages(sevenPages)).toBe(7);
  });
});
