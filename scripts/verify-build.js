#!/usr/bin/env node

/**
 * Build verification script
 * Checks that the build output exists and contains expected files
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const requiredFiles = [
  'index.html',
  'sitemap.xml',
  'robots.txt',
];

console.log('🔍 Verifying build output...\n');

if (!fs.existsSync(outDir)) {
  console.error('❌ Build output directory "out" does not exist.');
  console.error('   Run "npm run build" first.');
  process.exit(1);
}

let allGood = true;

requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.error(`❌ ${file} is missing`);
    allGood = false;
  }
});

// Check for main pages
const mainPages = [
  'product',
  'vns-epilepsy',
  'approach',
  'team',
  'resources',
  'contact',
  'privacy',
  'terms',
  'disclaimer',
];

console.log('\n📄 Checking main pages...');
mainPages.forEach(page => {
  const pagePath = path.join(outDir, page, 'index.html');
  if (fs.existsSync(pagePath)) {
    console.log(`✅ /${page}/ exists`);
  } else {
    console.error(`❌ /${page}/ is missing`);
    allGood = false;
  }
});

if (allGood) {
  console.log('\n✅ Build verification passed!');
  process.exit(0);
} else {
  console.log('\n❌ Build verification failed. Please check the errors above.');
  process.exit(1);
}
