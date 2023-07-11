import { MD5, SHA224, SHA256, SHA3, enc } from 'crypto-js';

export default class Hasher { 
    public hashString = async (string: string) => {
        return new Promise<string>((resolve, reject) => {
            const stringToArray: string[]              = string.replace(/g /, '-').split('');

            stringToArray.pop();
            stringToArray.reverse();
            stringToArray.shift();
            stringToArray.reverse();
            stringToArray.pop();

            stringToArray.map(( v: string ) => btoa(unescape(encodeURIComponent(v))).replace(/x/g, '{X--ss}').replace(/R/g, '{s--YY}').replace(/3/g, '{3-44}').split('').reverse().join(''))

            const parsedCustomHash: string = stringToArray.join('-');

            const toBASE64: string = enc.Base64.stringify(enc.Utf8.parse(parsedCustomHash || stringToArray.toString()));
            const toMD5: string    = MD5(toBASE64).toString();
            const toSHA3: string   = SHA3(toMD5).toString();
            const toSHA224: string = SHA224(toSHA3).toString();
            const toSHA256: string = SHA256(toSHA224).toString();
            const toLMD5: string   = MD5(toSHA256).toString();

            const toLBS64: string  = enc.Base64.stringify(enc.Utf8.parse(toLMD5));

            resolve(toLBS64.replace(/x/g, '{X--ss}').replace(/R/g, '{s--YY}').replace(/3/g, '{3-44}').split('').reverse().join(''));
        });
    }
}