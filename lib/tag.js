"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vtags = exports.tags = exports.tag = exports.Tag = void 0;
var Tag = /** @class */ (function () {
    function Tag(name, value, key) {
        this.name = name;
        this.value = value;
        this.key = key;
    }
    Tag.prototype.toString = function () {
        return this.name;
    };
    Tag.prototype.toKey = function () {
        return this.key;
    };
    Tag.prototype.toValue = function () {
        return this.value;
    };
    Object.defineProperty(Tag.prototype, Symbol.toStringTag, {
        get: function () {
            return "Tag(" + this.toString() + ")";
        },
        enumerable: false,
        configurable: true
    });
    Tag.prototype[Symbol.toPrimitive] = function (hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return this.toValue();
    };
    return Tag;
}());
exports.Tag = Tag;
function with_namespace_prefix(_namespace, tag_name) {
    return "$" + _namespace + "->" + tag_name;
}
function tag(name, value, key) {
    if (value === void 0) { value = name; }
    if (key === void 0) { key = Symbol(name); }
    return new Tag(name, value, key);
}
exports.tag = tag;
function tags(names, _namespace) {
    if (_namespace === void 0) { _namespace = ''; }
    return names.map(function (name) { return tag(with_namespace_prefix(_namespace, name)); });
}
exports.tags = tags;
function vtags(tags, _namespace) {
    if (_namespace === void 0) { _namespace = ''; }
    return tags.map(function (_a) {
        var name = _a[0], value = _a[1], key = _a[2];
        return tag(with_namespace_prefix(_namespace, name), value, key);
    });
}
exports.vtags = vtags;
