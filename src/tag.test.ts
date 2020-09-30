import 'jest-extended';

// @ts-ignore
import cuid from 'cuid';

import {
    Tag,
    tag,
    tags,
    vtags,
} from './tag';

describe('tag', () => {
    test('is Function', () => {
        expect(tag).toBeFunction();
    });
    describe('when called', () => {
        describe('with name', () => {

            const $name = `tag->name(${cuid()})`;
            const $tag = tag($name);

            test('it returns instance of Tag', () => {
                expect($tag).toBeInstanceOf(Tag);
            });

            test('it has the expected values', () => {
                const { key, value, name } = $tag;
                expect($tag.toKey()).toBe(key);
                expect($tag.toValue()).toBe(value);
                expect($tag.toString()).toBe(name);
                expect(name).toBe($name);
            });
        });

        describe('with name, value', () => {

            const $name = `tag->name(${cuid()})`;
            const $value = 12.34;
            const $tag = tag($name, $value);

            test('it returns instance of Tag', () => {
                expect($tag).toBeInstanceOf(Tag);
            });

            test('it has the expected values', () => {
                const { key, value, name } = $tag;
                expect($tag.toKey()).toBe(key);
                expect($tag.toValue()).toBe(value);
                expect($tag.toString()).toBe(name);
                expect(name).toBe($name);
                expect(value).toBe($value);
            });
        });

        describe('with no key', () => {

            const $name = `tag->name(${cuid()})`;
            const $value = 12.34;
            const $tag = tag($name, $value);

            test('it returns instance of Tag', () => {
                expect($tag).toBeInstanceOf(Tag);
            });

            test('it has the expected values', () => {
                const { key, value, name } = $tag;
                expect($tag.toKey()).toBe(key);
                expect($tag.toValue()).toBe(value);
                expect($tag.toString()).toBe(name);
                expect(name).toBe($name);
                expect(value).toBe($value);
            });
        });

        test('can be used as string and number', () => {
            const $str = 'hello';
            const $num = 42;
            const $tag = tag($str, $num);
            // @ts-ignore
            const $numbers = $tag + $tag;
            const $strings = `${$tag}${$tag}`;
            expect($numbers).toBe(84);
            expect($strings).toBe('hellohello');
            expect(Boolean($tag)).toBe(true);
        });
    });
});

describe('tags', () => {
    test('is Function', () => {
        expect(tags).toBeFunction();
    });
    describe('when called', () => {
        describe('with no namespace', () => {

            const $names = [void 0, void 1, void 2].map(() => `tag->name(${cuid()})`);
            const $tags = tags($names);

            describe.each($tags)('for tag: %p', $tag => {
                test('it returns instance of Tag', () => {
                    expect($tag).toBeInstanceOf(Tag);
                });

                test('it has the expected values', () => {
                    const { key, value, name } = $tag;
                    expect($tag.toKey()).toBe(key);
                    expect($tag.toValue()).toBe(value);
                    expect($tag.toString()).toBe(name);
                });
            });
        });
        describe('with namespace foo', () => {

            const $names = [void 0, void 1, void 2].map(() => `tag->name(${cuid()})`);
            const $namespace = `namespace(${cuid()})`;
            const $tags = tags($names, $namespace);

            describe.each($tags)('for tag: %p', $tag => {
                test('it returns instance of Tag', () => {
                    expect($tag).toBeInstanceOf(Tag);
                });

                test('it has the expected values', () => {
                    const { key, value, name } = $tag;
                    expect($tag.toKey()).toBe(key);
                    expect($tag.toValue()).toBe(value);
                    expect($tag.toString()).toBe(name);
                });
            });
        });
    });
});

describe('vtags', () => {
    test('is Function', () => {
        expect(vtags).toBeFunction();
    });
    describe('when called', () => {
        describe('with no namespace', () => {

            const $tag_data = [
                ['name:alpha', Symbol.for('data:alpha'), Symbol.for('key:alpha')],
                ['name:bravo', Symbol.for('data:bravo'), Symbol.for('key:bravo')],
                ['name:charlie', Symbol.for('data:charlie'), Symbol.for('key:charlie')],
            ];

            // @ts-ignore
            const $tags = vtags($tag_data);

            test('returns expected tags', () => {
                expect($tags).toBeArrayOfSize(3);
                const [$alpha, $bravo, $charlie] = $tags;
                expect($alpha).toBeInstanceOf(Tag);
                expect($alpha).toMatchObject(
                    {
                        name: $alpha.toString(),
                        value: Symbol.for('data:alpha'),
                        key: Symbol.for('key:alpha'),
                    },
                );
                expect($bravo).toBeInstanceOf(Tag);
                expect($bravo).toMatchObject(
                    {
                        name: $bravo.toString(),
                        value: Symbol.for('data:bravo'),
                        key: Symbol.for('key:bravo'),
                    },
                );
                expect($charlie).toBeInstanceOf(Tag);
                expect($charlie).toMatchObject(
                    {
                        name: $charlie.toString(),
                        value: Symbol.for('data:charlie'),
                        key: Symbol.for('key:charlie'),
                    },
                );
            });
        });
    });
});
