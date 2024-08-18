# raw-ts

raw-ts is a lightweight tool that convert a file to a raw typscript string.

# Usage

Download the latest release from the [release page](https://github.com/nicolasventer/raw-ts/releases).

Put the executable in your path.

Run the following command:

```bash
raw-ts <file>
```

## Example

Content of `example/wait.ts`:

```typescript
export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
```

```bash
raw-ts example/wait.ts
```

Output (content of `example/waitRaw.ts`):

```typescript
export default "export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));\r\n";
```

You can then import the file in your project (content of `example/print.ts`):

```typescript
import waitRaw from "./waitRaw";

console.log(waitRaw);
```

# Development

## Install

```bash
bun install
```

## Run

```bash
bun run dev <file>
```

## Build

```bash
bun run build
```

# Licence

MIT Licence. See [LICENSE file](LICENSE).
Please refer me with:

	Copyright (c) Nicolas VENTER All rights reserved.