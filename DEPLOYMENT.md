# Vercel Deployment Guide

This project is now configured for Vercel deployment.

## Prerequisites

- Node.js 20.15.0 or higher
- pnpm 9.0.0 or higher

## Automatic Deployment (Recommended)

1. **Connect GitHub Repository**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

2. **Environment Variables**
   - No additional environment variables required (using defaults)
   - Add any custom env vars in Vercel dashboard if needed

3. **Deployment Settings**
   - Framework: Vite
   - Build Command: `pnpm run build`
   - Output Directory: `./artifacts/nabhias-salon/dist`
   - Install Command: `pnpm install --frozen-lockfile`

## Manual Local Testing

### Build
```bash
pnpm install
pnpm run build
```

### Preview Production Build
```bash
cd artifacts/nabhias-salon
pnpm run serve
```

The app will be available at `http://localhost:4173`

## What Was Changed for Vercel Compatibility

### Files Added:
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to ignore during deployment
- `.node-version` - Node.js version specification
- `DEPLOYMENT.md` - This file

### Files Modified:
- `package.json` - Added Node.js/pnpm version requirements, added `dev` script
- `vite.config.ts` - Made PORT and BASE_PATH optional with defaults
- `tsconfig.json` - Added `skipLibCheck` for faster builds
- `pnpm-workspace.yaml` - Updated esbuild overrides for multi-platform support
- `.npmrc` - Ensured proper peer dependency handling

## Troubleshooting

### Build Fails with "PORT environment variable is required"
✓ Fixed - Now uses default port 3000 if not set

### Build Fails with "BASE_PATH environment variable is required"
✓ Fixed - Now uses default '/' if not set

### Memory Issues During Build
If you encounter out-of-memory errors, increase Node.js memory:
- Vercel automatically allocates sufficient memory
- For local testing: `NODE_OPTIONS=--max-old-space-size=4096 pnpm run build`

### pnpm Lockfile Issues
Ensure pnpm is installed: `npm install -g pnpm@9`

## Performance Optimization

The following optimizations are already configured:
- Code splitting for vendor and UI libraries
- Minification with Terser
- Fast refresh for development
- TypeScript checking skips node_modules

## Support

For Vercel-specific issues, refer to:
- https://vercel.com/docs
- https://vercel.com/docs/frameworks/vite
