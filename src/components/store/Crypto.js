import Cryptr from 'cryptr';

export const encrypt = (secret, value) => {
  if (!value) return value;
  const cryptr = new Cryptr(secret);
  return cryptr.encrypt(value);
};

export const decrypt = (secret, value) => {
  if (!value) return value;
  const cryptr = new Cryptr(secret);
  return cryptr.decrypt(value);
};
