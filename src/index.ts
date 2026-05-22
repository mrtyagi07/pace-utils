/**
 * Format a pace value (seconds per kilometer) as a runner-friendly string.
 *
 * @param secondsPerKm - Pace in seconds per kilometer. Must be a non-negative finite number.
 * @returns Formatted string like `"5:30 /km"`.
 *
 * @example
 * formatPace(330) // "5:30 /km"
 * formatPace(285) // "4:45 /km"
 */
export function formatPace(secondsPerKm: number): string {
  if (!Number.isFinite(secondsPerKm) || secondsPerKm < 0) {
    throw new RangeError(
      `secondsPerKm must be a non-negative finite number, received: ${secondsPerKm}`
    )
  }

  const total = Math.round(secondsPerKm)
  const minutes = Math.floor(total / 60)
  const seconds = total % 60

  return `${minutes}:${seconds.toString().padStart(2, '0')} /km`
}

/**
 * Format a duration (in seconds) as a human-readable string.
 *
 * Always emits the largest non-zero unit and everything below it down to seconds.
 *
 * @param seconds - Duration in seconds. Must be a non-negative finite number.
 * @returns Formatted string like `"1h 23m 45s"`, `"2m 5s"`, or `"30s"`.
 *
 * @example
 * formatDuration(5025) // "1h 23m 45s"
 * formatDuration(125)  // "2m 5s"
 * formatDuration(30)   // "30s"
 */
export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    throw new RangeError(
      `seconds must be a non-negative finite number, received: ${seconds}`
    )
  }

  const total = Math.round(seconds)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60

  if (h > 0) return `${h}h ${m}m ${s}s`
  if (m > 0) return `${m}m ${s}s`
  return `${s}s`
}