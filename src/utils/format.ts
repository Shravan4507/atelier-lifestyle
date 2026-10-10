import { CURRENCIES } from '../data/content';

export function formatPrice(usdPrice: number, currencyCode: string): string {
  const currency = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];
  const converted = Math.round(usdPrice * currency.rate);

  if (currency.code === 'JPY') {
    return `${currency.symbol}${converted.toLocaleString()}`;
  }
  if (currency.code === 'INR') {
    return `${currency.symbol}${converted.toLocaleString('en-IN')}`;
  }
  return `${currency.symbol}${converted.toLocaleString('en-US')}`;
}
