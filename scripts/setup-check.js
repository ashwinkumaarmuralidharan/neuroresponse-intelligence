#!/usr/bin/env node

/**
 * Setup verification script
 * Checks that the environment is ready for development
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Checking setup...\n');

let allGood = true;

// Check Node.js version
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf-8' }).trim();
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0]);
  
  if (majorVersion >= 18) {
    console.log(`✅ Node.js ${nodeVersion} (required: 18+)`);
  } else {
    console.error(`❌ Node.js ${nodeVersion} (required: 18+)`);
    console.error('   Please upgrade Node.js from nodejs.org');
    allGood = false;
  }
} catch (error) {
  console.error('❌ Node.js not found');
  console.error('   Please install Node.js from nodejs.org');
  allGood = false;
}

// Check npm
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf-8' }).trim();
  console.log(`✅ npm ${npmVersion}`);
} catch (error) {
  console.error('❌ npm not found');
  allGood = false;
}

// Check required files
console.log('\n📁 Checking required files...');

const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.ts',
  'app/layout.tsx',
  'app/page.tsx',
];

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.error(`❌ ${file} is missing`);
    allGood = false;
  }
});

// Check if node_modules exists
console.log('\n📦 Checking dependencies...');
if (fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.log('✅ Dependencies installed (node_modules exists)');
  console.log('   Run "npm install" if you encounter issues');
} else {
  console.log('⚠️  Dependencies not installed');
  console.log('   Run "npm install" to install dependencies');
}

// Check content directory
console.log('\n📝 Checking content...');
const postsDir = path.join(process.cwd(), 'content', 'posts');
if (fs.existsSync(postsDir)) {
  const posts = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  console.log(`✅ Found ${posts.length} blog post(s)`);
} else {
  console.log('⚠️  Blog posts directory not found');
}

console.log('\n' + '='.repeat(50));

if (allGood) {
  console.log('\n✅ Setup check passed!');
  console.log('\nNext steps:');
  console.log('  1. Run "npm install" (if not done)');
  console.log('  2. Run "npm run dev" to start development server');
  console.log('  3. Visit http://localhost:3000');
  process.exit(0);
} else {
  console.log('\n❌ Setup check found issues. Please fix them above.');
  process.exit(1);
}
