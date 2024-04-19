var bin2string = {};
-----------------
if (typeof module !== "undefined" && module.exports) {
    module.exports.parsing = parsing;
} else if (!global.parsing) {
    global.parsing = parsing;
}
