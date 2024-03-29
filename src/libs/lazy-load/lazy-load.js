window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.customMedia = {"--medium": "(max-width: 768px)"}, function (e, t) {
    var a = function () {
        t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0)
    };
    t = t.bind(null, e, e.document), "object" == typeof module && module.exports ? t(require("lazysizes")) : "function" == typeof define && define.amd ? define(["lazysizes"], t) : e.lazySizes ? a() : e.addEventListener("lazyunveilread", a, !0)
}(window, (function (e, t, a) {
    "use strict";
    var i, n, r, s, o, l, d, u, c;
    e.addEventListener && (i = a.cfg, n = /\s+/g, r = /\s*\|\s+|\s+\|\s*/g, s = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/, o = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/, l = /\(|\)|'/, d = {
        contain: 1,
        cover: 1
    }, u = function (e, t) {
        var a;
        t && ((a = t.match(o)) && a[1] ? e.setAttribute("type", a[1]) : e.setAttribute("media", i.customMedia[t] || t))
    }, c = function (e) {
        var t, i, n, r;
        e.target._lazybgset && (i = (t = e.target)._lazybgset, (n = t.currentSrc || t.src) && ((r = a.fire(i, "bgsetproxy", {
            src: n,
            useSrc: l.test(n) ? JSON.stringify(n) : n
        })).defaultPrevented || (i.style.backgroundImage = "url(" + r.detail.useSrc + ")")), t._lazybgsetLoading && (a.fire(i, "_lazyloaded", {}, !1, !0), delete t._lazybgsetLoading))
    }, addEventListener("lazybeforeunveil", (function (e) {
        var o, l, d, f, z, y, g, m, v, p;
        !e.defaultPrevented && (o = e.target.getAttribute("data-bgset")) && (v = e.target, (p = t.createElement("img")).alt = "", p._lazybgsetLoading = !0, e.detail.firesLoad = !0, l = o, d = v, f = p, z = t.createElement("picture"), y = d.getAttribute(i.sizesAttr), g = d.getAttribute("data-ratio"), m = d.getAttribute("data-optimumx"), d._lazybgset && d._lazybgset.parentNode == d && d.removeChild(d._lazybgset), Object.defineProperty(f, "_lazybgset", {
            value: d,
            writable: !0
        }), Object.defineProperty(d, "_lazybgset", {
            value: z,
            writable: !0
        }), l = l.replace(n, " ").split(r), z.style.display = "none", f.className = i.lazyClass, 1 != l.length || y || (y = "auto"), l.forEach((function (e) {
            var a, n = t.createElement("source");
            y && "auto" != y && n.setAttribute("sizes", y), (a = e.match(s)) ? (n.setAttribute(i.srcsetAttr, a[1]), u(n, a[2]), u(n, a[3])) : n.setAttribute(i.srcsetAttr, e), z.appendChild(n)
        })), y && (f.setAttribute(i.sizesAttr, y), d.removeAttribute(i.sizesAttr), d.removeAttribute("sizes")), m && f.setAttribute("data-optimumx", m), g && f.setAttribute("data-ratio", g), z.appendChild(f), d.appendChild(z), setTimeout((function () {
            a.loader.unveil(p), a.rAF((function () {
                a.fire(p, "_lazyloaded", {}, !0, !0), p.complete && c({target: p})
            }))
        })))
    })), t.addEventListener("load", c, !0), e.addEventListener("lazybeforesizes", (function (e) {
        var t, i, n;
        e.detail.instance == a && e.target._lazybgset && e.detail.dataAttr && (i = e.target._lazybgset, n = (getComputedStyle(i) || {
            getPropertyValue: function () {
            }
        }).getPropertyValue("background-size"), !d[n] && d[i.style.backgroundSize] && (n = i.style.backgroundSize), d[t = n] && (e.target._lazysizesParentFit = t, a.rAF((function () {
            e.target.setAttribute("data-parent-fit", t), e.target._lazysizesParentFit && delete e.target._lazysizesParentFit
        }))))
    }), !0), t.documentElement.addEventListener("lazybeforesizes", (function (e) {
        var t, i;
        !e.defaultPrevented && e.target._lazybgset && e.detail.instance == a && (e.detail.width = (t = e.target._lazybgset, i = a.gW(t, t.parentNode), (!t._lazysizesWidth || i > t._lazysizesWidth) && (t._lazysizesWidth = i), t._lazysizesWidth))
    })))
})), function (e) {
    var t = function (e, t, a) {
        "use strict";
        var i, n;
        if (function () {
            var t, a = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (t in n = e.lazySizesConfig || e.lazysizesConfig || {}, a) t in n || (n[t] = a[t])
        }(), !t || !t.getElementsByClassName) return {
            init: function () {
            }, cfg: n, noSupport: !0
        };
        var r = t.documentElement, s = e.HTMLPictureElement, o = "addEventListener", l = "getAttribute",
            d = e[o].bind(e), u = e.setTimeout, c = e.requestAnimationFrame || u, f = e.requestIdleCallback,
            z = /^picture$/i, y = ["load", "error", "lazyincluded", "_lazyloaded"], g = {}, m = Array.prototype.forEach,
            v = function (e, t) {
                return g[t] || (g[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), g[t].test(e[l]("class") || "") && g[t]
            }, p = function (e, t) {
                v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
            }, b = function (e, t) {
                var a;
                (a = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(a, " "))
            }, h = function (e, t, a) {
                var i = a ? o : "removeEventListener";
                a && h(e, t), y.forEach((function (a) {
                    e[i](a, t)
                }))
            }, A = function (e, a, n, r, s) {
                var o = t.createEvent("Event");
                return n || (n = {}), n.instance = i, o.initEvent(a, !r, !s), o.detail = n, e.dispatchEvent(o), o
            }, C = function (t, a) {
                var i;
                !s && (i = e.picturefill || n.pf) ? (a && a.src && !t[l]("srcset") && t.setAttribute("srcset", a.src), i({
                    reevaluate: !0,
                    elements: [t]
                })) : a && a.src && (t.src = a.src)
            }, _ = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }, E = function (e, t, a) {
                for (a = a || e.offsetWidth; a < n.minSize && t && !e._lazysizesWidth;) a = t.offsetWidth, t = t.parentNode;
                return a
            }, w = function () {
                var e, a, i = [], n = [], r = i, s = function () {
                    var t = r;
                    for (r = i.length ? n : i, e = !0, a = !1; t.length;) t.shift()();
                    e = !1
                }, o = function (i, n) {
                    e && !n ? i.apply(this, arguments) : (r.push(i), a || (a = !0, (t.hidden ? u : c)(s)))
                };
                return o._lsFlush = s, o
            }(), S = function (e, t) {
                return t ? function () {
                    w(e)
                } : function () {
                    var t = this, a = arguments;
                    w((function () {
                        e.apply(t, a)
                    }))
                }
            }, L = function (e) {
                var t, i = 0, r = n.throttleDelay, s = n.ricTimeout, o = function () {
                    t = !1, i = a.now(), e()
                }, l = f && s > 49 ? function () {
                    f(o, {timeout: s}), s !== n.ricTimeout && (s = n.ricTimeout)
                } : S((function () {
                    u(o)
                }), !0);
                return function (e) {
                    var n;
                    (e = !0 === e) && (s = 33), t || (t = !0, (n = r - (a.now() - i)) < 0 && (n = 0), e || n < 9 ? l() : u(l, n))
                }
            }, N = function (e) {
                var t, i, n = function () {
                    t = null, e()
                }, r = function () {
                    var e = a.now() - i;
                    e < 99 ? u(r, 99 - e) : (f || n)(n)
                };
                return function () {
                    i = a.now(), t || (t = u(r, 99))
                }
            }, x = function () {
                var s, f, y, g, E, x, W, P, F, T, k, B, O = /^img$/i, R = /^iframe$/i,
                    $ = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent), D = 0, H = 0, j = -1,
                    q = function (e) {
                        H--, (!e || H < 0 || !e.target) && (H = 0)
                    }, I = function (e) {
                        return null == B && (B = "hidden" == _(t.body, "visibility")), B || !("hidden" == _(e.parentNode, "visibility") && "hidden" == _(e, "visibility"))
                    }, U = function (e, a) {
                        var i, n = e, s = I(e);
                        for (P -= a, k += a, F -= a, T += a; s && (n = n.offsetParent) && n != t.body && n != r;) (s = (_(n, "opacity") || 1) > 0) && "visible" != _(n, "overflow") && (i = n.getBoundingClientRect(), s = T > i.left && F < i.right && k > i.top - 1 && P < i.bottom + 1);
                        return s
                    }, V = function () {
                        var e, a, o, d, u, c, z, y, m, v, p, b, h = i.elements;
                        if ((g = n.loadMode) && H < 8 && (e = h.length)) {
                            for (a = 0, j++; a < e; a++) if (h[a] && !h[a]._lazyRace) if (!$ || i.prematureUnveil && i.prematureUnveil(h[a])) Z(h[a]); else if ((y = h[a][l]("data-expand")) && (c = 1 * y) || (c = D), v || (v = !n.expand || n.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : n.expand, i._defEx = v, p = v * n.expFactor, b = n.hFac, B = null, D < p && H < 1 && j > 2 && g > 2 && !t.hidden ? (D = p, j = 0) : D = g > 1 && j > 1 && H < 6 ? v : 0), m !== c && (x = innerWidth + c * b, W = innerHeight + c, z = -1 * c, m = c), o = h[a].getBoundingClientRect(), (k = o.bottom) >= z && (P = o.top) <= W && (T = o.right) >= z * b && (F = o.left) <= x && (k || T || F || P) && (n.loadHidden || I(h[a])) && (f && H < 3 && !y && (g < 3 || j < 4) || U(h[a], c))) {
                                if (Z(h[a]), u = !0, H > 9) break
                            } else !u && f && !d && H < 4 && j < 4 && g > 2 && (s[0] || n.preloadAfterLoad) && (s[0] || !y && (k || T || F || P || "auto" != h[a][l](n.sizesAttr))) && (d = s[0] || h[a]);
                            d && !u && Z(d)
                        }
                    }, J = L(V), G = function (e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (q(e), p(t, n.loadedClass), b(t, n.loadingClass), h(t, Q), A(t, "lazyloaded"))
                    }, K = S(G), Q = function (e) {
                        K({target: e.target})
                    }, X = function (e) {
                        var t, a = e[l](n.srcsetAttr);
                        (t = n.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), a && e.setAttribute("srcset", a)
                    }, Y = S((function (e, t, a, i, r) {
                        var s, o, d, c, f, g;
                        (f = A(e, "lazybeforeunveil", t)).defaultPrevented || (i && (a ? p(e, n.autosizesClass) : e.setAttribute("sizes", i)), o = e[l](n.srcsetAttr), s = e[l](n.srcAttr), r && (c = (d = e.parentNode) && z.test(d.nodeName || "")), g = t.firesLoad || "src" in e && (o || s || c), f = {target: e}, p(e, n.loadingClass), g && (clearTimeout(y), y = u(q, 2500), h(e, Q, !0)), c && m.call(d.getElementsByTagName("source"), X), o ? e.setAttribute("srcset", o) : s && !c && (R.test(e.nodeName) ? function (e, t) {
                            try {
                                e.contentWindow.location.replace(t)
                            } catch (a) {
                                e.src = t
                            }
                        }(e, s) : e.src = s), r && (o || c) && C(e, {src: s})), e._lazyRace && delete e._lazyRace, b(e, n.lazyClass), w((function () {
                            var t = e.complete && e.naturalWidth > 1;
                            g && !t || (t && p(e, "ls-is-cached"), G(f), e._lazyCache = !0, u((function () {
                                "_lazyCache" in e && delete e._lazyCache
                            }), 9)), "lazy" == e.loading && H--
                        }), !0)
                    })), Z = function (e) {
                        if (!e._lazyRace) {
                            var t, a = O.test(e.nodeName), i = a && (e[l](n.sizesAttr) || e[l]("sizes")), r = "auto" == i;
                            (!r && f || !a || !e[l]("src") && !e.srcset || e.complete || v(e, n.errorClass) || !v(e, n.lazyClass)) && (t = A(e, "lazyunveilread").detail, r && M.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, H++, Y(e, t, r, i, a))
                        }
                    }, ee = N((function () {
                        n.loadMode = 3, J()
                    })), te = function () {
                        3 == n.loadMode && (n.loadMode = 2), ee()
                    }, ae = function () {
                        f || (a.now() - E < 999 ? u(ae, 999) : (f = !0, n.loadMode = 3, J(), d("scroll", te, !0)))
                    };
                return {
                    _: function () {
                        E = a.now(), i.elements = t.getElementsByClassName(n.lazyClass), s = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), d("scroll", J, !0), d("resize", J, !0), d("pageshow", (function (e) {
                            if (e.persisted) {
                                var a = t.querySelectorAll("." + n.loadingClass);
                                a.length && a.forEach && c((function () {
                                    a.forEach((function (e) {
                                        e.complete && Z(e)
                                    }))
                                }))
                            }
                        })), e.MutationObserver ? new MutationObserver(J).observe(r, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (r[o]("DOMNodeInserted", J, !0), r[o]("DOMAttrModified", J, !0), setInterval(J, 999)), d("hashchange", J, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function (e) {
                            t[o](e, J, !0)
                        })), /d$|^c/.test(t.readyState) ? ae() : (d("load", ae), t[o]("DOMContentLoaded", J), u(ae, 2e4)), i.elements.length ? (V(), w._lsFlush()) : J()
                    }, checkElems: J, unveil: Z, _aLSL: te
                }
            }(), M = function () {
                var e, a = S((function (e, t, a, i) {
                    var n, r, s;
                    if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), z.test(t.nodeName || "")) for (r = 0, s = (n = t.getElementsByTagName("source")).length; r < s; r++) n[r].setAttribute("sizes", i);
                    a.detail.dataAttr || C(e, a.detail)
                })), i = function (e, t, i) {
                    var n, r = e.parentNode;
                    r && (i = E(e, r, i), (n = A(e, "lazybeforesizes", {
                        width: i,
                        dataAttr: !!t
                    })).defaultPrevented || (i = n.detail.width) && i !== e._lazysizesWidth && a(e, r, n, i))
                }, r = N((function () {
                    var t, a = e.length;
                    if (a) for (t = 0; t < a; t++) i(e[t])
                }));
                return {
                    _: function () {
                        e = t.getElementsByClassName(n.autosizesClass), d("resize", r)
                    }, checkElems: r, updateElem: i
                }
            }(), W = function () {
                !W.i && t.getElementsByClassName && (W.i = !0, M._(), x._())
            };
        return u((function () {
            n.init && W()
        })), i = {cfg: n, autoSizer: M, loader: x, init: W, uP: C, aC: p, rC: b, hC: v, fire: A, gW: E, rAF: w}
    }(e, e.document, Date);
    e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});