import { HmacRIPEMD160, HmacSHA512 } from "crypto-js";
import { alphanumeric } from "../id/impl";

export type coupon                  = '0%' | '2%' | '5%' | '10%' | '30%';
export type beta                    = 'first' | 'sunny' | 'nightly' | 'broken' | 'experimental';
export type level                   = 'default-user' | 'more-than-user' | 'known' | 'special' | 'vip' | 'most-valuable' | 'needed-in-every-chance';
export type rank                    = 'Newbie' | 'Sophisticated' | 'Sophisticated+' | 'Worty' | 'Worthy+' | 'Valued' | 'Massive' | 'Hunter' | 'Otaku' | 'Geek' | 'Geek+' | 'Nerd' | 'Nerd+' | 'Anime Geek' | 'Anime Geek+' | 'Anime Nerd' | 'Anime Nerd+' | 'Matter';
export type status                  = 'Online' | 'Idle' | 'Do Not Disturb' | 'Offline' | 'Void';
export type achievements            = 'Welcome!' | 'First Anime' | '100 Friends!' | 'The Batman Appears' | '24/7';
export type permissions             = 'RESET_USERS_DATA' | 'CHANGE_ROLES' | 'ADMINISTRATOR' | 'REMOVE_ANIMES' | 'ADD_ANIMES' | 'EDIT_ANIMES' | 'COPY_ANIMES' | 'READ_DMS' | 'REMOVE_DMS' | 'ADD_PATCHES' | 'REMOVE_PATCHES' | 'REMOVE_COMMENTS' | 'EDIT_COMMENTS' | 'FORCE_UPDATE' | 'RELOAD_APP_FOR_ALL_USERS' | 'LOGOUT_USER' | 'LOGOUT_ALL_USERS' | 'RESET_SESSIONS' | 'BAN_USERS' | 'KICK_USER' | 'EDIT_USER' | 'DISABLE_COMMENTS_FOR_USERS' | 'FORCE_UPDATE_MODAL' | 'GET_USERS_DATA';

export interface registerationData {
    emailAddress           : string;
    passKey                : string;
    birthday               : {    };
    
    userName               : string;
    userCurrentStatus      : status;
    userId                 : string;

    userBio                : string;
    userAvatarLink         : string;
    userBannerLink         : string;
    
    userExperiencePoints   : number;
    userCurrentLevel       : number;
    
    userRole               : level;
    userRank               : rank;
    
    userAchievements       : achievements[];
    userItems              : {}[];
    userBadges             : {}[];
    
    userFriendsList        : {}[];
    userBlockedList        : {}[];
    userPendingList        : {}[];

    permissionsList        : permissions[];
          
    createdAt              : {           };
          
    favouritedList         : string[];
    watchedList            : string[];
    watchingList           : string[];
    watchLaterList         : string[];
  
    suggestCategory        : string;
     
    options                : {}[];
    data                   : {}[];

    subscriptionsHistory   : {}[];
    appInteractionsHistory : {}[];
    usedSubscriptionPlan   : {}[];

    reportesOnTheUser      : {}[];
    reportesFromTheUser    : {}[];

    specialCoupon          : coupon;
    disableUserAds         : boolean;

    betaAccess             : boolean;
    betaLevel              : beta;
    
    sessionTempToken       : string;
    sessionExpiresIn       : number;

    isBannedStatus         : boolean;
    banExpiresIn           : number ;
    devices                : {}[];
    networkIpList          : {}[];
};

export const create_new_token = ( user_id: string, epoch: string = '1682024572943' ) => {
    const passkey: string            = epoch + epoch.split('').reverse().join('-');
    let usridEncryptedToken: string  = '';
    for ( let s = 0; s <= user_id.padStart(20, '0').length; s++ ) {
        usridEncryptedToken += alphanumeric[Math.floor(Math.random() * ((alphanumeric.length - 1) - 0 + 1) + 0)];
    }
    let bs64EncryptedToken : string  = btoa(usridEncryptedToken.toString()).toString();

    const tDate: Date                = new Date();

    // First section length is 28 characters
    const firstSection: string       = bs64EncryptedToken.substring(0, 28) + '.';
    // Second section length is 8 characters
    const secondSection: string      = `${btoa(HmacSHA512((tDate.getTime() + Number(epoch)).toString(), passkey).toString()).toString().substring(0, 8)}.`;
    // Third section length is 28 characters
    const lastSection: string        = `${HmacRIPEMD160(tDate.getTime() + tDate.getFullYear() + tDate.getDate() + (tDate.getMonth() + 1).toString(), passkey).toString().substring(0, 28)}` 

    const fullToken: string          = firstSection + secondSection + lastSection;

    return fullToken;
};