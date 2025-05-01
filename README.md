# Google Apps Script Standalone Web App Starter

This is setup for a full-stack Google Apps Script project with a React frontend and Google Apps Script backend.

> **Credits:** This project is inspired by [enuchi/React-Google-Apps-Script](https://github.com/enuchi/React-Google-Apps-Script) and [lastlink/google-app-script-ts-jest](https://github.com/lastlink/google-app-script-ts-jest). It incorporates modern tools such as Vite, Biome.js, and a React frontend. Special thanks to [enuchi/gas-client](https://github.com/enuchi/gas-client) for simplifying access to `google.script.run` and for providing the dev-server-wrapper, which streamlines local development.

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Login to clasp**
   ```sh
   npx clasp login
   ```

3. **Initialize a new linked Google Sheet project**
   ```sh
   npm run createApp
   ```
   This will create a new Apps Script project and set up the necessary files.

4. **Copy example configuration**
   ```sh
   cp appsscript.example.json dist/appsscript.json
   cp .clasp.json.example .clasp.json
   ```
   Edit `dist/appsscript.json` and `.clasp.json` as needed for your project.

## Project Structure

```
project/
├── src/
│   ├── client/                 # React client-side code
│   │   ├── components/         # React components
│   │   ├── App.tsx             # Main application component
│   │   └── ...                 # Other client files
│   ├── server/                 # Google Apps Script server-side code
│   │   ├── main.ts             # Entry point with doGet, doPost, and callable server functions
│   │   └── ...                 # Other server files
│   └── list/                   # Shared utilities
├── dev/                        # Development tools and local dev bridge
│   └── dev-server-wrapper.html # Dev server bridge for GAS
└── ...                         # Other files (e.g., README, configs, etc.)
```

## Local Development

This part is currently pending. Multiple deployments are used to test the project.Please consider contributing to the project.

## Lint and Format

- Format the codebase:
  ```sh
  npm run format
  ```

- Lint the project:
  ```sh
  npm run lint
  npm run lint:fix
  ```

## Build & Deploy

- Build the project:
  ```sh
  npm run build
  ```

- Upload the built code to Apps Script:
  ```sh
  npm run upload
  ```

- Deploy a new version:
  ```sh
  npm run deploy
  ```

## Optional: Redeployment

By default, `npm run redeploy` is configured to keep only one deployment (using the `-V 1` flag) for easier management. Feel free to modify the `redeploy` script in your `package.json` to change the behavior as needed.

For more details about the clasp commands, see the official [clasp README](https://github.com/google/clasp?tab=readme-ov-file#redeploy).
