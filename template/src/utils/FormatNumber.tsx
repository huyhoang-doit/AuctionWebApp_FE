export function formatNumber(x: number | undefined) {
  if (x === undefined) {
    return 0;
  }
  if (isNaN(x)) {
    return 0;
  }

  // use toLocalString for formatting
  // return x.toLocaleString("en-US");
  return x.toLocaleString("vi-VN");
}
