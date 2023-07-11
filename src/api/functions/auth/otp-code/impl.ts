export const generate_otp_code: () => string = ( ) => {
    return (Math.floor(Math.random() * 4000 - 1) + 1).toString().padStart(4, '0').toString();
};