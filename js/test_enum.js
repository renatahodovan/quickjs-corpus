function assert(actual, expected, message) {}

var a, tab;
a = {
    x: 1,
    "18014398509481984": 1,
    "9007199254740992": 1,
    "9007199254740991": 1,
    "4294967296": 1,
    "4294967295": 1,
    y: 1,
    "4294967294": 1,
    "1": 2
};
tab = Object.keys(a);
//    console.log("tab=" + tab.toString());
assert(tab, ["1", "4294967294", "x", "18014398509481984", "9007199254740992", "9007199254740991", "4294967296", "4294967295", "y"], "keys");
