export function formatNumber(x: number | undefined): string {
  if (x === undefined || isNaN(x)) {
    return '0';
  }

  // use toLocalString for formatting
  // return x.toLocaleString("en-US");
  return x.toLocaleString("vi-VN");
}
