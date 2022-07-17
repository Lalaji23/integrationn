import { utils } from "ethers";

export const formatEther = (value: any, decimals: string | number) => {
  return Number(utils.formatUnits(value.toString(), String(decimals)));
};

export const parseEther = (value: any, decimals: string | number) => {
  return utils.parseUnits(value.toString(), String(decimals)).toString();
};

export const formatLinks = (link: string) => {
  const lowercaseString = link.toLocaleLowerCase();
  return lowercaseString.split(" ").join("-");
};

export const n6 = new Intl.NumberFormat("en-us", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 6,
});
export const n4 = new Intl.NumberFormat("en-us", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
});

export const c2 = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @returns {string}
 */
export const getEllipsisTxt = (str: string, n = 6) => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return "";
};

export const tokenValue = (value, decimals) =>
  decimals ? value / Math.pow(10, decimals) : value;
