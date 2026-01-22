# How to Install Node.js

Node.js is required to build and deploy this website. Follow these steps:

## Windows Installation

### Method 1: Official Installer (Recommended)

1. **Download Node.js:**
   - Go to https://nodejs.org/
   - Click the **LTS** (Long Term Support) version button
   - This will download the Windows installer (.msi file)

2. **Run the Installer:**
   - Double-click the downloaded file
   - Click "Next" through the installation wizard
   - **Important:** Check "Add to PATH" option (should be checked by default)
   - Click "Install"
   - Wait for installation to complete

3. **Verify Installation:**
   - **Close and reopen** your PowerShell/Command Prompt
   - Run: `node --version`
   - You should see something like: `v18.17.0` or higher
   - Run: `npm --version`
   - You should see something like: `9.6.7` or higher

4. **If it doesn't work:**
   - Restart your computer
   - Make sure you closed and reopened your terminal
   - Check that Node.js is in your PATH:
     - Search for "Environment Variables" in Windows
     - Check that Node.js path is listed

### Method 2: Using Chocolatey (If you have it)

```powershell
choco install nodejs-lts
```

### Method 3: Using Winget (Windows 10/11)

```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

1. **Restart your terminal/PowerShell** (important!)

2. **Verify it works:**
   ```powershell
   node --version
   npm --version
   ```

3. **Navigate to your project:**
   ```powershell
   cd "C:\Users\ashwi\Desktop\NS-Predict.ai\Logos"
   ```

4. **Run the setup script:**
   ```powershell
   .\setup-and-deploy.ps1
   ```

## Troubleshooting

### "node is not recognized"
- Node.js is not installed or not in PATH
- Try restarting your computer
- Reinstall Node.js and make sure "Add to PATH" is checked

### Wrong version
- You need Node.js 18 or higher
- Download the latest LTS from nodejs.org
- Uninstall old version first if needed

### npm not found
- npm comes with Node.js
- If npm doesn't work, reinstall Node.js
- Make sure you selected "npm package manager" during installation

## Next Steps

Once Node.js is installed:
1. Run `.\setup-and-deploy.ps1` in this directory
2. Or follow the steps in `DEPLOY-NOW.md`

---

**Need help?** Visit https://nodejs.org/en/download/ for official installation guides.
