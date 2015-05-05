ko.bindingHandlers.sortBy = {
    init: function(c, d) {
        var e = !0;
        c.style.cursor = "pointer", c.onclick = function() {
            var c = d(), f = c.array, g = c.sortBy;
            if (ko.isObservable(f) && !Array.isArray(f())) throw "Incorrect argument for array. Array must be an observableArray";
            switch (e = !e, !0) {
              case "function" == typeof g:
                f.sort(g);
                break;

              case Array.isArray(g):
                var h = g.length;
                f.sort(function(a, b) {
                    for (var c = -1; ++c < h; ) {
                        var d = g[c];
                        if (a[d] != b[d]) return a[d] > b[d] ? 1 : -1;
                    }
                });
                break;

              case "string" == typeof g:
                return "function" == typeof a[g] ? a[g]() > b[g]() ? 1 : a[g]() < b[g]() ? -1 : 0 : a[g] > b[g] ? 1 : a[g] < b[g] ? -1 : 0;

              default:
                throw "Incorrect argument for sortBy";
            }
            e || f.reverse();
        };
    }
};