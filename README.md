# repost-adapter-starter

A starter template for building custom adapters for [`@snowball-bot/repost-adapter`](https://www.npmjs.com/package/@snowball-bot/repost-adapter).

Clone this repo, follow the checklist below, and you'll have a working adapter ready to publish.

## Quick Start

```bash
# 1. Use this template (click "Use this template" on GitHub)
#    Or clone manually:
git clone https://github.com/snowball-bot/repost-adapter-starter.git my-adapter
cd my-adapter
rm -rf .git
git init

# 2. Install dependencies
pnpm install

# 3. Verify everything works
pnpm test
pnpm build
```

## Checklist: customize your adapter

Use your editor's global search to find every `TODO` and `REPLACE_ME`:

- [ ] `package.json` — set `name`, `description`, `author`, `keywords`
- [ ] `src/index.ts` — set `manifest.name`, `manifest.platform`, `manifest.whitelistHosts`
- [ ] `src/index.ts` — implement the `handle` function (the actual logic)
- [ ] `test/adapter.test.ts` — update expectations to match your manifest
- [ ] `LICENSE` — change copyright holder
- [ ] `README.md` — replace this file with your own

## Project structure

```
src/index.ts        — your adapter logic
test/               — unit tests with a mock context
.github/workflows/  — CI and release automation
```

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Build in watch mode |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests once |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm lint` | Lint source files |
| `pnpm typecheck` | Type-check without emitting |

## Publishing

1. Set `NPM_TOKEN` in your repo secrets (Settings → Secrets → Actions)
2. Update `version` in `package.json`
3. Create and push a tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

The release workflow will publish to npm automatically.

## Contract reference

See [`@snowball-bot/repost-adapter`](https://www.npmjs.com/package/@snowball-bot/repost-adapter) for the full API reference.

## License

MIT
