function assert(actual, expected, message) {}

var a;
a = String("abc");
assert(a.length, 3, "string");
assert(a[1], "b", "string");
assert(a.charCodeAt(1), 0x62, "string");
assert(String.fromCharCode(65), "A", "string");
assert(String.fromCharCode.apply(null, [65, 66, 67]), "ABC", "string");
assert(a.charAt(1), "b");
assert(a.charAt(-1), "");
assert(a.charAt(3), "");

a = "abcd";
assert(a.substring(1, 3), "bc", "substring");
a = String.fromCharCode(0x20ac);
assert(a.charCodeAt(0), 0x20ac, "unicode");
assert(a, "€", "unicode");
assert(a, "\u20ac", "unicode");
assert(a, "\u{20ac}", "unicode");
assert("a", "\x61", "unicode");

a = "\u{10ffff}";
assert(a.length, 2, "unicode");
assert(a, "\u{dbff}\u{dfff}", "unicode");
assert(a.codePointAt(0), 0x10ffff);
assert(String.fromCodePoint(0x10ffff), a);

assert("a".concat("b", "c"), "abc");

assert("abcabc".indexOf("cab"), 2);
assert("abcabc".indexOf("cab2"), -1);
assert("abc".indexOf("c"), 2);

assert("aaa".indexOf("a"), 0);
assert("aaa".indexOf("a", NaN), 0);
assert("aaa".indexOf("a", -Infinity), 0);
assert("aaa".indexOf("a", -1), 0);
assert("aaa".indexOf("a", -0), 0);
assert("aaa".indexOf("a", 0), 0);
assert("aaa".indexOf("a", 1), 1);
assert("aaa".indexOf("a", 2), 2);
assert("aaa".indexOf("a", 3), -1);
assert("aaa".indexOf("a", 4), -1);
assert("aaa".indexOf("a", Infinity), -1);

assert("aaa".indexOf(""), 0);
assert("aaa".indexOf("", NaN), 0);
assert("aaa".indexOf("", -Infinity), 0);
assert("aaa".indexOf("", -1), 0);
assert("aaa".indexOf("", -0), 0);
assert("aaa".indexOf("", 0), 0);
assert("aaa".indexOf("", 1), 1);
assert("aaa".indexOf("", 2), 2);
assert("aaa".indexOf("", 3), 3);
assert("aaa".indexOf("", 4), 3);
assert("aaa".indexOf("", Infinity), 3);

assert("aaa".lastIndexOf("a"), 2);
assert("aaa".lastIndexOf("a", NaN), 2);
assert("aaa".lastIndexOf("a", -Infinity), 0);
assert("aaa".lastIndexOf("a", -1), 0);
assert("aaa".lastIndexOf("a", -0), 0);
assert("aaa".lastIndexOf("a", 0), 0);
assert("aaa".lastIndexOf("a", 1), 1);
assert("aaa".lastIndexOf("a", 2), 2);
assert("aaa".lastIndexOf("a", 3), 2);
assert("aaa".lastIndexOf("a", 4), 2);
assert("aaa".lastIndexOf("a", Infinity), 2);

assert("aaa".lastIndexOf(""), 3);
assert("aaa".lastIndexOf("", NaN), 3);
assert("aaa".lastIndexOf("", -Infinity), 0);
assert("aaa".lastIndexOf("", -1), 0);
assert("aaa".lastIndexOf("", -0), 0);
assert("aaa".lastIndexOf("", 0), 0);
assert("aaa".lastIndexOf("", 1), 1);
assert("aaa".lastIndexOf("", 2), 2);
assert("aaa".lastIndexOf("", 3), 3);
assert("aaa".lastIndexOf("", 4), 3);
assert("aaa".lastIndexOf("", Infinity), 3);

assert("a,b,c".split(","), ["a", "b", "c"]);
assert(",b,c".split(","), ["", "b", "c"]);
assert("a,b,".split(","), ["a", "b", ""]);

assert("aaaa".split(), ["aaaa"]);
assert("aaaa".split(undefined, 0), []);
assert("aaaa".split(""), ["a", "a", "a", "a"]);
assert("aaaa".split("", 0), []);
assert("aaaa".split("", 1), ["a"]);
assert("aaaa".split("", 2), ["a", "a"]);
assert("aaaa".split("a"), ["", "", "", "", ""]);
assert("aaaa".split("a", 2), ["", ""]);
assert("aaaa".split("aa"), ["", "", ""]);
assert("aaaa".split("aa", 0), []);
assert("aaaa".split("aa", 1), [""]);
assert("aaaa".split("aa", 2), ["", ""]);
assert("aaaa".split("aaa"), ["", "a"]);
assert("aaaa".split("aaaa"), ["", ""]);
assert("aaaa".split("aaaaa"), ["aaaa"]);
assert("aaaa".split("aaaaa", 0), []);
assert("aaaa".split("aaaaa", 1), ["aaaa"]);

assert(eval('"\0"'), "\0");

assert("abc".padStart(Infinity, ""), "abc");
