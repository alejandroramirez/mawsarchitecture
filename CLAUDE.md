# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js project created with the T3 Stack (`create-t3-app`), which provides a full-stack TypeScript foundation. The project uses modern React 19 with Next.js 15 and includes environment validation with Zod.

## Development Commands

- `pnpm dev` - Start development server with Turbo (recommended)
- `pnpm build` - Build production version (dynamic Next.js app)
- `pnpm build:static` - Build static export for hosting (outputs to `out/` directory)
- `pnpm start` - Start production server (for dynamic build)
- `pnpm preview` - Build and start production server locally
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm check` - Run Biome linting and formatting checks
- `pnpm check:write` - Run Biome with automatic fixes
- `pnpm check:unsafe` - Run Biome with unsafe automatic fixes

## Build Options

This project supports two build modes:

1. **Dynamic Build** (`pnpm build`): Standard Next.js app with server-side features
2. **Static Export** (`pnpm build:static`): Static files for hosting on S3, Netlify, etc.

For static hosting, use `pnpm build:static` and upload the contents of the `out/` directory.

## Package Manager
 
This project uses `pnpm` as the package manager. Always use `pnpm` commands instead of `npm` or `yarn`.

## Code Quality

- **Biome** is used for linting, formatting, and import organization
- TypeScript is configured with strict mode and `noUncheckedIndexedAccess`
- Always run `pnpm typecheck` and `pnpm check` before committing changes

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/styles/` - Global CSS styles (Tailwind CSS)
- `src/env.js` - Environment variable validation with @t3-oss/env-nextjs
- Path alias `~/*` maps to `./src/*`

## Environment Variables

Environment variables are validated using `@t3-oss/env-nextjs` and Zod schemas in `src/env.js`. Add new environment variables to both the schema and runtime environment object. Use `SKIP_ENV_VALIDATION=1` to skip validation during Docker builds.

## Styling

The project uses Tailwind CSS v4 with PostCSS. Global styles are in `src/styles/globals.css`. The Geist font is loaded and configured in the root layout.