import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken<any>('localStorage',{
    providedIn: 'root',
    factory() {
        return localStorage;
    },
});