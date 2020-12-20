import React from 'react';
import { render } from '@testing-library/react';
import { ArrowLeft, ArrowRight, Loading, BookmarkInsert, BookmarkRemove } from './Icons';

describe('Icons', () => {
  it('ArrowLeft', () => {
    const { baseElement } = render(<ArrowLeft />);
    const element = baseElement.querySelector('.icon-arrow-left');
    expect(element.tagName.toLocaleLowerCase()).toBe('svg');
  });

  it('ArrowRight', () => {
    const { baseElement } = render(<ArrowRight />);
    const element = baseElement.querySelector('.icon-arrow-right');
    expect(element.tagName.toLocaleLowerCase()).toBe('svg');
  });

  it('Loading', () => {
    const { baseElement } = render(<Loading />);
    const element = baseElement.querySelector('.icon-loading');
    expect(element.tagName.toLocaleLowerCase()).toBe('div');
  });

  it('BookmarkInsert', () => {
    const { baseElement } = render(<BookmarkInsert />);
    const element = baseElement.querySelector('.icon-bookmark-insert');
    expect(element.tagName.toLocaleLowerCase()).toBe('svg');
  });

  it('BookmarkRemove', () => {
    const { baseElement } = render(<BookmarkRemove />);
    const element = baseElement.querySelector('.icon-bookmark-remove');
    expect(element.tagName.toLocaleLowerCase()).toBe('svg');
  });
});