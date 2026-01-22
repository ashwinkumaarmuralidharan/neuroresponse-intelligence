# NeuroResponse Intelligence - Setup and Deploy Script
# This script helps you set up and deploy the website

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "NeuroResponse Intelligence Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
    
    $majorVersion = [int]($nodeVersion -replace 'v', '' -split '\.')[0]
    if ($majorVersion -lt 18) {
        Write-Host "⚠️  Node.js version 18+ required. Current: $nodeVersion" -ForegroundColor Yellow
        Write-Host "   Please upgrade from https://nodejs.org/" -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host "❌ Node.js not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js 18+ from:" -ForegroundColor Yellow
    Write-Host "   https://nodejs.org/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "After installation, restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Check npm
Write-Host "Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Step 1: Installing Dependencies" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Install dependencies
Write-Host "Running npm install..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Step 2: Building Website" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Build
Write-Host "Building website..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green

# Verify build
Write-Host ""
Write-Host "Verifying build..." -ForegroundColor Yellow
npm run verify
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Build verification found issues" -ForegroundColor Yellow
} else {
    Write-Host "✅ Build verification passed" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Build Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your website has been built successfully!" -ForegroundColor Green
Write-Host "Build output is in the 'out' directory" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps for deployment:" -ForegroundColor Cyan
Write-Host "1. Review DEPLOYMENT.md for detailed instructions" -ForegroundColor White
Write-Host "2. Choose a platform (Cloudflare Pages recommended)" -ForegroundColor White
Write-Host "3. Push code to GitHub and connect to your platform" -ForegroundColor White
Write-Host ""
Write-Host "Quick test: Run 'npm run dev' to test locally" -ForegroundColor Yellow
Write-Host ""
