import {Subset} from "@/app/shared/types";

export function applyDefaults<T>(defaults: Partial<T>, obj: T): T {
    return {...defaults, ...obj};
}

export function applyDefaultsSubset<T extends U, U>(defaults: Required<Subset<T, U>>, obj: T): T & Required<Subset<T, U>> {
    return {...defaults, ...obj};
}