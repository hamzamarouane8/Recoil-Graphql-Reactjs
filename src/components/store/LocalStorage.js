import store from 'store';
import {decrypt,encrypt} from './Crypto';

export const set = (key, value, encryptKey) => {
  if (encryptKey) {
    store.set(key, encrypt(encryptKey, value));
  } else {
    store.set(key, value);
  }
};

export const map =(indicator)=>{
  store.each(function(value,key){
     if(indicator ===key) remove(key);
  })
}

export const get = (key, decryptWith) => {
  if (decryptWith) {
    const value = store.get(key);
    if (!value) return value;
    return decrypt(decryptWith, value);
  } else {
    return store.get(key);
  }
};

export const remove = (key) => store.remove(key);

export const reset = () => store.clearAll();

