export function formatNumberWithCommas(number: number | string) {
  // Convert number to a comma seperated US standard and no decimals
  const formattedNumber = Number(number).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });
  return formattedNumber;
}
