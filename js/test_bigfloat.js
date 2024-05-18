"use strict";

function assert(actual, expected, message) {}

/* a must be < b */
function test_less(a, b)
{
    assert(a < b);
    assert(!(b < a));
    assert(a <= b);
    assert(!(b <= a));
    assert(b > a);
    assert(!(a > b));
    assert(b >= a);
    assert(!(a >= b));
    assert(a != b);
    assert(!(a == b));
}

/* a must be numerically equal to b */
function test_eq(a, b) {
    assert(a == b);
    assert(b == a);
    assert(!(a != b));
    assert(!(b != a));
    assert(a <= b);
    assert(b <= a);
    assert(!(a < b));
    assert(a >= b);
    assert(b >= a);
    assert(!(a > b));
}

var e, a, b;

assert(typeof 1n === "bigint");
assert(typeof 1l === "bigfloat")
assert(1 == 1.0l)
assert(1 !== 1.0l)

test_less(2l, 3l)
test_eq(3l, 3l)

test_less(2, 3l)
test_eq(3, 3l)

test_less(2.1, 3l)
test_eq(Math.sqrt(9), 3l)

test_less(2n, 3l)
test_eq(3n, 3l)

e = new BigFloatEnv(128);
assert(e.prec == 128);
a = BigFloat.sqrt(2l, e)
assert(a === BigFloat.parseFloat("0x1.6a09e667f3bcc908b2fb1366ea957d3e", 0, e));
assert(e.inexact === true);
assert(BigFloat.fpRound(a) == 0x1.6a09e667f3bcc908b2fb1366ea95l)

b = BigFloatEnv.setPrec(BigFloat.sqrt.bind(null, 2), 128);
assert(a === b);

assert(BigFloat.isNaN(BigFloat(NaN)));
assert(BigFloat.isFinite(1l))
assert(!BigFloat.isFinite(1l/0l))

assert(BigFloat.abs(-3l) === 3l)
assert(BigFloat.sign(-3l) === -1l)

assert(BigFloat.exp(0.2l) === 1.2214027581601698339210719946396742l)
assert(BigFloat.log(3l) === 1.0986122886681096913952452369225256l)
assert(BigFloat.pow(2.1l, 1.6l) === 3.277561666451861947162828744873745l)

assert(BigFloat.sin(-1l) === -0.841470984807896506652502321630299l)
assert(BigFloat.cos(1l) === 0.5403023058681397174009366074429766l)
assert(BigFloat.tan(0.1l) === 0.10033467208545054505808004578111154l)

assert(BigFloat.asin(0.3l) === 0.30469265401539750797200296122752915l)
assert(BigFloat.acos(0.4l) === 1.1592794807274085998465837940224159l)
assert(BigFloat.atan(0.7l) === 0.610725964389208616543758876490236l)
assert(BigFloat.atan2(7.1l, -5.1l) === 2.1937053809751415549388104628759813l)

assert(BigFloat.floor(2.5l) === 2l)
assert(BigFloat.ceil(2.5l) === 3l)
assert(BigFloat.trunc(-2.5l) === -2l)
assert(BigFloat.round(2.5l) === 3l)

assert(BigFloat.fmod(3l,2l) === 1l)
assert(BigFloat.remainder(3l,2l) === -1l)

/* string conversion */
assert((1234.125l).toString(), "1234.125")
assert((1234.125l).toFixed(2), "1234.13")
assert((1234.125l).toFixed(2, "down"), "1234.12")
assert((1234.125l).toExponential(), "1.234125e+3")
assert((1234.125l).toExponential(5), "1.23413e+3")
assert((1234.125l).toExponential(5, BigFloatEnv.RNDZ), "1.23412e+3")
assert((1234.125l).toPrecision(6), "1234.13")
assert((1234.125l).toPrecision(6, BigFloatEnv.RNDZ), "1234.12")

/* string conversion with binary base */
assert((0x123.438l).toString(16), "123.438")
assert((0x323.438l).toString(16), "323.438")
assert((0x723.438l).toString(16), "723.438")
assert((0xf23.438l).toString(16), "f23.438")
assert((0x123.438l).toFixed(2, BigFloatEnv.RNDNA, 16), "123.44")
assert((0x323.438l).toFixed(2, BigFloatEnv.RNDNA, 16), "323.44")
assert((0x723.438l).toFixed(2, BigFloatEnv.RNDNA, 16), "723.44")
assert((0xf23.438l).toFixed(2, BigFloatEnv.RNDNA, 16), "f23.44")
assert((0x0.0000438l).toFixed(6, BigFloatEnv.RNDNA, 16), "0.000044")
assert((0x1230000000l).toFixed(1, BigFloatEnv.RNDNA, 16), "1230000000.0")
assert((0x123.438l).toPrecision(5, BigFloatEnv.RNDNA, 16), "123.44")
assert((0x123.438l).toPrecision(5, BigFloatEnv.RNDZ, 16), "123.43")
assert((0x323.438l).toPrecision(5, BigFloatEnv.RNDNA, 16), "323.44")
assert((0x723.438l).toPrecision(5, BigFloatEnv.RNDNA, 16), "723.44")
assert((-0xf23.438l).toPrecision(5, BigFloatEnv.RNDD, 16), "-f23.44")
assert((0x123.438l).toExponential(4, BigFloatEnv.RNDNA, 16), "1.2344p+8")