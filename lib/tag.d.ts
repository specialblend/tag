export declare class Tag<TValue, TKey> {
    name: string;
    value: TValue;
    key: TKey;
    constructor(name: string, value: TValue, key: TKey);
    toString(): string;
    toKey(): TKey;
    toValue(): TValue;
    get [Symbol.toStringTag](): string;
    [Symbol.toPrimitive](hint: string): string | number | TValue;
}
export declare function tag(name: string, value?: any, key?: symbol): Tag<any, symbol>;
export declare function tags(names: string[], _namespace?: string): Tag<any, symbol>[];
export declare function vtags(tags: [string, any, any], _namespace?: string): Tag<any, symbol>[];
