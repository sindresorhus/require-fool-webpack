import test from 'ava';
import requireFoolWebpack from './index.js';

test(t => {
	t.is(require('./fixture'), '🦄');
});
