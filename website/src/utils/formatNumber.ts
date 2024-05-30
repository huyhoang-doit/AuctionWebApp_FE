export function formatNumber(x: number | undefined): string {
  if (x === undefined || isNaN(x) || x === null) {
    return '0';
  }

  // use toLocalString for formatting
  // return x.toLocaleString("en-US");
  return x.toLocaleString("vi-VN");
}
export const formatNumberAcceptNull = (num: number | null | undefined) => {
  if (num === null || num === undefined) return '';
  return num.toLocaleString('vi-VN'); // Format number for Vietnamese locale
};
