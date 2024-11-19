// @vitest-environment jsdom

import { test, expect } from 'vitest';
import { mount, flushSync, unmount } from 'svelte';

import Counter from './Counter.svelte';

const getTitle = () => document.querySelector('h1')?.textContent;
const clickButton = () => {
	document.querySelector('button')?.click();
	flushSync();
};

test('Counter', () => {
	const component = mount(Counter, {
		props: {
			count: 1
		},
		target: document.body
	});

	expect(getTitle()).toBe('Count: 1');
	clickButton();
	expect(getTitle()).toBe('Count: 2');

	unmount(component);
});
