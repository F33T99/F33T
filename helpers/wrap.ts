export function wrap(m: number, n: number): number {
  return n >= 0 ? n % m : ((n % m) + m) % m;
}
