/* */ 
CSL.Node["condition"] = {
    build: function (state, target) {
        if (this.tokentype === CSL.SINGLETON) {
            var test = state.fun.match[this.match](this, state, this.tests);
            state.tmp.conditions.addTest(test);
        }
    }
};
