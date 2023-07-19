export function trimProgress(progress, trimInterval) {
  const transformProgress = progress - trimInterval[0];
  const _progress = 1 / (trimInterval[1] / transformProgress) + trimInterval[0];
  return _progress;
}
