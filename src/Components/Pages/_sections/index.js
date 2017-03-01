import React from 'react';
import { Base64 } from 'js-base64';
import ReactMarkdown from 'react-markdown';

/* PAGES */
import about from './about.md';
import education from './education.md';
import personal from './personal.md';
import professional from './professional.md';
import thoughts from './thoughts.md';
import hobbies from './hobbies.md';

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
  education: () => returnJSXMarkdown(education),
  personal: () => returnJSXMarkdown(personal),
  professional: () => returnJSXMarkdown(professional),
  thoughts: () => returnJSXMarkdown(thoughts),
  hobbies: () => returnJSXMarkdown(hobbies),
  articles: {
    js_slideshow: () => returnJSXMarkdown(js_slideshow)
  }
}
