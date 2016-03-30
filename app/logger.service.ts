import {Injectable} from 'angular2/core';

@Injectable()
export class Logger {

    log(msg: any)   { console.log(msg); }
    error(msg: any) { console.log(msg); }
    warn(msg: any)  { console.log(msg); }
}