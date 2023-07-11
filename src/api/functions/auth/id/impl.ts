export const alphabit = 'abcdefgchijklmopqrstuvwxyz';
export const lowercaseAlphabit = alphabit;
export const uppercaseAlphabit = alphabit.toUpperCase();
export const combinedAlphabit  = alphabit + alphabit.toUpperCase();
export const numbers = '0123456789';
export const alphanumeric  = alphabit + alphabit.toUpperCase() + numbers;
export const symbols = '!@#$%^&*()_+-=<>,.;\'"[]{}:/?\\';

export const generate_unique_id = async ( index: number, length: number = 1, epoch: string = '1682024572943' ) => {
    return new Promise<string>((resolve, reject) => {
        let unique_id_cache: string = '';
        for (let s = 0; s <= length; s++)
        {
            unique_id_cache += numbers[Math.floor(Math.random() * ((numbers.length - 1) - 0 + 1) + 0)];
        }
    
        resolve((Number(unique_id_cache) + Number(epoch) + index).toString());
    });
};

export const generate_user_tag = async ( index: number ) => {
    return new Promise<string>((resolve, reject) => {
        let tag_cache: string = '';
        for (let s = 0; s <= 4; s++)
        {
            tag_cache += numbers[Math.floor(Math.random() * ((numbers.length - 1) - 0 + 1) + 0)];
        }
    
        resolve((Number(tag_cache) + Number(index)).toString());
    });
}