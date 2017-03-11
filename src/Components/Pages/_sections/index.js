import React from 'react';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';

/* PAGES */
import about from './about.md';
import photography from './photography.md';
import professional from './professional.md';

/* ARTICLES */
import js_slideshow from '../_articles/js_slideshow.md';

function base64ToString (base64) {
  return Base64.decode(base64.split(',')[1]);
}

function returnJSXMarkdown (markdownString) {
  return <ReactMarkdown source={base64ToString(markdownString)} />
}

// TODO: optimize this to be more dynamic
export default {
  about: () => returnJSXMarkdown(about),
  professional: () => returnJSXMarkdown(professional),
  photography: () => returnJSXMarkdown(photography),
  articles: {
    js_slideshow: () => returnJSXMarkdown(js_slideshow)
  }
}
