```md
# File Converter Side-Hustle MVP

## Features
- Drag-and-drop & file input
- Format selector (PDF, DOCX, XLSX)
- Progress bar & toast notifications
- Recent conversions list
- Light/dark mode toggle
- Non-intrusive Google AdSense banner

## Prerequisites
- Node.js >=14
- npm or yarn

## Environment Variables
Create a `.env` in the **server/** folder:
```dotenv
PORT=5000
NODE_ENV=development
# Google AdSense (client and slot IDs)
ADSENSE_CLIENT=ca-pub-XXXXXX
ADSENSE_SLOT=YYYYYY
```

## Local Development
```bash
# Backend
cd server
npm install
npm run build    # tsc compilation
npm run dev      # nodemon or ts-node

# Frontend
cd ../client
npm install
npm run dev      # Vite dev server
```
Open http://localhost:5173

## Docker (optional)
```bash
# Build images
docker-compose build
# Run all services
docker-compose up
```

## Deployment to Vercel (Monorepo)
1. Push to GitHub
2. Connect repo in Vercel dashboard
3. In Vercel settings, set Environment Variables:
    - `SERVER_PORT` = 5000
    - `ADSENSE_CLIENT`, `ADSENSE_SLOT`
4. Vercel will auto-detect `/client` as frontend (Framework: Vite) and `/server` as Node.js API.

## Deployment to Heroku + Vercel (split)
- **Backend**
    - Create Heroku app, set config vars from `.env`
    - Git push `server` folder
- **Frontend**
    - Deploy `/client` on Vercel or Netlify

---
```
