import CryptoJs from "crypto-js";

export const encrypt = (password) => {
  return CryptoJs.MD5(password).toString();
};
