function assert(actual, expected, message) {}

function F(x)
{
    this.x = x;
}

var a, b;
a = new Object;
a.x = 1;
assert(a.x, 1, "new");
b = new F(2);
assert(b.x, 2, "new");

a = {x: 2};
assert(("x" in a), true, "in");
assert(("y" in a), false, "in");

a = {};
assert((a instanceof Object), true, "instanceof");
assert((a instanceof String), false, "instanceof");

assert((typeof 1), "number", "typeof");
assert((typeof Object), "function", "typeof");
assert((typeof null), "object", "typeof");
assert((typeof unknown_var), "undefined", "typeof");

a = {x: 1, if: 2, async: 3};
assert(a.if === 2);
assert(a.async === 3);
