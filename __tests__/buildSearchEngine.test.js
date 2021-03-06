import { test, expect } from '@jest/globals';
import buildEngine from '../index.js';

const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

let searchEngine;
beforeAll(() => {
  searchEngine = buildEngine(docs);
});

test('empty seach', () => {
  expect(searchEngine.search('')).toEqual([]);
});

test('short word', () => {
  expect(searchEngine.search('the a it')).toEqual(['doc1']);
});

test('search with punctuation marks', () => {
  expect(searchEngine.search('pint')).toEqual(['doc1']);
  expect(searchEngine.search('pint!')).toEqual(['doc1']);
});

test('relevant search', () => {
  expect(searchEngine.search('shoot')).toEqual(['doc2', 'doc1']);
});

test('fuzzy search', () => {
  expect(searchEngine.search('shoot at me')).toEqual(['doc2', 'doc1']);
});
