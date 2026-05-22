# @vaibhavt07/pace-utils

Tiny utilities for formatting running pace and duration. Zero dependencies. ESM + CJS + TypeScript types.

## Install

```bash
npm install @vaibhavt07/pace-utils
```

## Usage

```ts
import { formatPace, formatDuration } from '@vaibhavt07/pace-utils'

formatPace(330)        // "5:30 /km"
formatDuration(5025)   // "1h 23m 45s"
formatDuration(125)    // "2m 5s"
formatDuration(30)     // "30s"
```

## API

### `formatPace(secondsPerKm: number): string`

Formats a pace value (seconds per kilometer) as a runner-friendly string. Throws `RangeError` on negative or non-finite input.

### `formatDuration(seconds: number): string`

Formats a duration (in seconds) as a human-readable string. Omits leading zero units. Throws `RangeError` on negative or non-finite input.

## License

MIT © [Vaibhav Tyagi](https://vaibhavt07.com)