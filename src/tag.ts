export class Tag<TValue, TKey> {
    public name: string;
    public value: TValue;
    public key: TKey;
    constructor(
        name: string,
        value: TValue,
        key: TKey,
    ) {
        this.name = name;
        this.value = value;
        this.key = key;
    }
    toString(): string {
        return this.name;
    }
    toKey(): TKey {
        return this.key;
    }
    toValue(): TValue {
        return this.value;
    }
    get [Symbol.toStringTag](): string {
        return `Tag(${this.toString()})`;
    }
    [Symbol.toPrimitive](hint: string): string|number|TValue {
        if (hint === 'string') {
            return this.toString();
        }
        return this.toValue();
    }
}

function with_namespace_prefix(_namespace: string, tag_name: string) {
   return `\$${_namespace}->${tag_name}`;
}

export function tag(
    name: string,
    value = <any>name,
    key = Symbol(name),
): Tag<any, symbol> {
    return new Tag<any, symbol>(name, value, key);
}

export function tags(names: string[], _namespace: string = '') {
    return names.map(
        (name: string) => tag(with_namespace_prefix(_namespace, name))
    );
}

export function vtags(tags: [string, any, any], _namespace: string = '') {
    return tags.map(
        ([name, value, key]) => tag(with_namespace_prefix(_namespace, name), value, key)
    )
}
