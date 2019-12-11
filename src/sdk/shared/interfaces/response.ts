import {User} from './user.interface';
import {Setting} from './setting.interface';

export declare interface LoginResponse {
    code: string;
    message: string;
    jwt: string;
    info: User;
    userid?: string;
}

export declare interface RequestTokenResponse {
    code: string;
    message: string;
    result: string;
}

export declare interface VerifyTokenResponse {
    code: string;
    message: string;
    userid: string;
    settings: Setting[];
}

export declare interface SettingsUpdateResponse {
    code: string;
    message: string;
    result: string;
}

export declare interface RegisterResponse {
    code: string;
    message: string;
}

export declare interface HomeResponse {
    code: string;
    message: string;
    header: {};
    result: any[];
    'to-do': number;
}

