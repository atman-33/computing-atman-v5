export const transformScore = (rate: number): string => {
  let starts = '';

  if (rate < 1) {
    starts = '☆☆☆☆☆';
  } else if (rate < 2) {
    starts = '★☆☆☆☆';
  } else if (rate < 3) {
    starts = '★★☆☆☆';
  } else if (rate < 4) {
    starts = '★★★☆☆';
  } else if (rate < 5) {
    starts = '★★★★☆';
  } else if (rate === 5) {
    starts = '★★★★★';
  }

  return `${starts} (${rate.toFixed(1)})`;
};
