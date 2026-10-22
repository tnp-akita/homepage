#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * posts/[slug]/images を public/posts/[slug]/images にコピーするスクリプト
 * 使い方: node scripts/copy-post-images.js (build / dev の前に自動で実行される)
 * 入力: posts/ 出力: public/posts/ (生成物なので Git 管理外)
 */

const POSTS_DIR = path.join(__dirname, '../posts');
const OUTPUT_DIR = path.join(__dirname, '../public/posts');

fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });

let copiedCount = 0;
for (const slug of fs.readdirSync(POSTS_DIR)) {
  const imagesDir = path.join(POSTS_DIR, slug, 'images');
  if (!fs.existsSync(imagesDir)) {
    continue;
  }

  fs.cpSync(imagesDir, path.join(OUTPUT_DIR, slug, 'images'), { recursive: true });
  copiedCount++;
}

console.log(`Copied images of ${copiedCount} posts to public/posts`);
