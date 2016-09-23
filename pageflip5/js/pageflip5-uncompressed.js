var _gaq = _gaq || [];
! function(e, t, n) {
    var bo = ("ontouchstart" in t) && (navigator.appVersion.indexOf("Windows NT 10") === -1);
    // alert("os = "+ navigator.appVersion +", is win10 = "+navigator.appVersion.indexOf("Windows NT 10"));
    // bo = false;
    var o, i, r, a, s, c, f, u, l, p, g, d, h, v, b, m, w, x, y, F, k, P, $, T, S, z, C, A, I, L, O, R, q, H, B, N, E, X, M, D, Y, Q, _, j, U, K, W, Z, G, V, J, ee, te, ne, oe, ie, re, ae, se, ce, fe, ue, le, pe, ge, de, he, ve, be, me, we, xe, ye, Fe, ke, Pe, $e, Te, Se, ze, Ce, Ae, Ie, Le, Oe, Re, qe, He, Be, Ne, Ee, Xe, Me, De, Ye, Qe, _e, je, Ue, Ke, We, Ze, Ge, Ve, Je, et, tt, nt, ot, it, rt, at, st, ct, ft, ut, lt, pt, gt, dt, ht, vt, bt, mt, wt, xt, yt, Ft, kt, Pt, $t, Tt, St, zt, Ct, At, It, Lt, Ot, Rt, qt, Ht, Bt, Nt, Et, Xt, Mt, Dt, Yt, Qt, _t, jt, Ut, Kt, Wt, Zt, Gt, Vt, Jt, en, tn, nn, on, rn, an, sn, cn, fn, un, ln, pn, gn, dn, hn, vn, bn, mn, wn, xn, yn, Fn, kn, Pn, $n, Tn, Sn, zn, Cn, An, In, Ln, On, Rn, qn, Hn, Bn, Nn, En, Xn, Mn, Dn, Yn, Qn, _n, jn, Un, Kn, Wn, Zn, Gn, Vn, Jn, eo, to, no, oo, io, ro, ao, so, co, fo, uo, lo, po, go, ho, vo,
        mo = bo ? {
            a: "touchstart mousedown",
            b: "touchmove mousemove",
            c: "touchend mouseup"
        } : {
            a: "mousedown",
            b: "mousemove",
            c: "mouseup"
        },
        wo = Math,
        xo = wo.PI,
        yo = ["left", "right"],
        Fo = !1,
        ko = !0,
        Po = wo.sin,
        $o = wo.asin,
        To = wo.cos,
        So = wo.sqrt,
        zo = wo.abs,
        Co = wo.floor,
        Ao = wo.ceil,
        Io = wo.round,
        Lo = wo.random,
        Oo = "toUpperCase",
        Ro = "charCodeAt",
        qo = "length",
        Ho = "get",
        Bo = "UTC",
        No = Ho + Bo,
        Ho = No + "FullYear",
        Bo = No + "Month",
        No = No + "Date",
        Eo = "location",
        Xo = "href",
        Mo = "offline",
        Do = "online",
        Yo = "split",
        Qo = "substr",
        _o = "file:",
        jo = "www",
        Uo = "/",
        Ko = "fromCharCode",
        Wo = "auto",
        Zo = 85,
        Go = 3 * Zo,
        Vo = Go + 1,
        Jo = 1e3,
        ei = 50,
        ti = Vo >> 2,
        ni = function(e) {
            var o, Ee = .3;
            if (i = e.IDs, r = e.DefaultID, a = e.PageWidth || 300, s = e.PageHeight || 400, c = e.CoverWidth || a, f = e.CoverHeight || s, p = e.HardCover == n ? ko : e.HardCover, g = e.HardPages || Fo, u = e.StageWidth, l = e.StageHeight, o = e.Margin, h = o == n ? 32 : o, o = e.MarginTop, v = o == n ? h : o, o = e.MarginBottom, b = o == n ? h : o, o = e.MarginLeft, m = o == n ? h : o, o = e.MarginRight, w = o == n ? h : o, E = e.VerticalMode || Fo, Ne = e.SinglePageMode || Fo, X = e.RightToLeft && !E || Fo, M = Ne ? Fo : e.AlwaysOpened || Fo, x = e.AutoScale || Fo, y = e.FullScale || Fo, F = e.FillScale || Fo, k = e.UpScale || Fo, d = Ne ? Fo : e.CenterSinglePage || Fo, S = Ne ? ko : e.ScaleToSinglePage || Fo, P = e.AutoStageHeight || Fo, (y || F || k) && (P = Fo), $ = e.AutoMaxHeight || Fo, T = e.MaxHeightOffset || 0, z = e.FlexibleContent || Fo, o = e.FlexibleContentMinWidth, C = o == n ? 768 : o, o = e.StartPage, A = o == n ? 1 : o, I = e.MinPageLimit || 0, I > A && (A = I), L = e.MaxPageLimit, O = e.StartAutoFlip || Fo, o = e.AutoFlipEnabled, R = o == n ? ko : o, q = e.FullScreenEnabled || Fo, H = e.AutoFlipInterval || 2e3, B = e.AutoFlipLoop || 0, N = e.NavigationLoop || Fo, D = e.PageDataFile, o = e.Preflip, Y = o == n ? ko : o, Q = e.ControlbarFile, _ = e.ControlbarToFront || Fo, j = e.Thumbnails || Fo, o = e.ThumbnailsLazyLoad, U = o == n ? ko : o, o = e.ThumbnailsToFront, K = o == n ? ko : o, W = e.ThumbnailsAutoHide || 0, Z = e.ThumbnailsHidden || Fo, G = e.ThumbnailWidth || 60, V = e.ThumbnailHeight || 80, J = e.ThumbnailAlwaysCentered || Fo, ee = e.Transparency || Fo, o = e.PageCache, te = o == n ? 1 : o, ne = e.NoFlipShadow || Fo, o = e.DropShadow, oe = o == n ? ko : o, o = e.Emboss, ie = o == n ? ko : o, o = e.DropShadowOpacity, re = o == n ? Ee : o, o = e.FlipTopShadowOpacity, ae = o == n ? Ee : o, o = e.FlipShadowOpacity, se = o == n ? Ee : o, o = e.EmbossOpacity, fe = o == n ? Ee : o, o = e.HardFlipShadowOpacity, ce = o == n ? Ee : o, ue = e.PreflipArea || 128, le = e.SecondaryDragArea || 64, pe = Ne ? ue : e.InsideDragArea || 0, ge = e.FlipDuration || 800, de = e.BookOffsetX || 0, he = e.BookOffsetY || 0, Ne && (E ? he -= f / 2 : X ? de += c / 2 : de -= c / 2), ve = e.TearDistance || 100, be = rt ? e.PerformanceAware || Fo : ko, me = e.PagerText || "Page #~Pages #–#", o = e.PagerSkip, we = o == n ? ko : o, xe = e.HideCopyright || Fo, Le = e.HashControl || Fo, o = e.ZoomEnabled, ye = o == n ? ko : o, Fe = e.ClickZoom || Fo, o = e.ZoomFlip, ke = o == n ? ko : o, o = e.PinchZoom, Pe = o == n ? ko : o, o = e.HotKeys, $e = o == n ? ko : o, o = e.MouseControl, Te = o == n ? ko : o, Se = e.GoogleAnalytics, ze = e.ShareLink || "http://pageflip-books.com", Ce = e.ShareText || "Pageflip5, The Book Template for the Web", Ae = e.ShareVia || "@MaccPageFlip", Ie = e.ShareImageURL, Oe = e.Copyright, Re = e.ShowCopyright || Fo, qe = e.Key, He = ko, Be = e.DisableSelection || Fo, Ie && -1 == Ie.lastIndexOf("://")) {
                var Xe = t[Eo][Xo][Yo]("#")[0][Yo](Uo);
                Xe.splice(Xe.length - 1, 1), Xe = Xe.join(Uo) + Uo, Ie = Xe + Ie
            }
        },
        oi = function() {
            Ve = Je = 0, et = 1, Hn = Fo, He = di(qe), ii()
        },
        ii = function() {
            Ze = c * (E ? 1 : 2), Ge = f * (E ? 2 : 1), tt = c > a || f > s, nt = 2 * Ao(qr(a, s) / 2), ot = 2 * Ao(qr(c, f) / 2), Xt = E ? 1 : 2, Mt = 3 - Xt, Dt = E ? -1 : 1
        },
        ri = function() {
            zt = [], Ct = [], Lt = [], At = [], It = []
        },
        ai = function() {
            st = Fo, ft = [], uo = [], ht = 4, mt = Fo, wt = Fo, xt = Fo, yt = Fo, Ft = Fo, Pt = $t = Tt = St = 0, Yt = Qt = _t = jt = Ut = Kt = Wt = Zt = n
        },
        si = function() {
            Lt = [], Ct = [], At = [], De.empty(), zi()
        },
        ci = function(t) {
            ri();
            for (var o, i, r, a, s, c, f = 0, u = 0, l = 0, p = 1, g = Fo; u < t.length; u++) i = e(t[u]), r = "cover" == (o = i.attr("class")), r && (g = r), a = "outerpage" == o, Ne && (a = Fo), s = a || r, (r || "page" == o || a) && (0 != f || a || M ? Ne && pi(l++, gi(e("<div class='page'></div>"))) : pi(l++, {
                h: 0,
                l: Fo
            }), 0 == f && a && (M = Fo), c = gi(i, a, r, s), c.h == n ? c.h = p++ : c.h > 0 && (p = c.h + 1), pi(l++, c), f++);
            We = l - 1, li(), X && zt.reverse(), g || (tt = !1), Wa(I, L), ja()
        },
        fi = function(t, n, o) {
            n = n || Ke, o = o || Fo, 0 != n || M || n++;
            for (var i, r, a, s, c, f, u = 0, l = 0, p = Fo; l < t.length; l++) r = e(t[l]), a = "cover" == (i = r.attr("class")), a && (p = a), s = "outerpage" == i, c = s || a, (a || "page" == i || s) && (f = gi(r, s, a, c), We++, zt.splice(n, 0, f), u++);
            li(), Wa(), ja(), si()
        },
        ui = function(e, t, n) {
            e = e || Ke, t = t || 1, n = n || Fo, 0 != e || M || e++, zt.splice(e, t), We -= t, li(), Wa(), ja(), Ke > We && (Ke = We - We % 2), 0 > Ke && (Ke = 0), si()
        },
        li = function() {
            We % 2 == 0 && (zt[We].l ? pi(++We, {
                h: 0,
                l: Fo
            }) : (zt.splice(We, 1), We--))
        },
        pi = function(e, t) {
            zt[e] = t
        },
        gi = function(e, t, o, i) {
            t = t || !1, o = o || !1, i = i || !1;
            var r = e.data(),
                u = r.disableEmbossing,
                l = {
                    a: !(r.unload == Fo),
                    w: r.backgroundFile,
                    r: r.htmlFile,
                    s: e.html(),
                    c: r.thumbnailImage,
                    u: u == n ? !ie : u,
                    b: r.transparentPage == ko,
                    g: r.removablePage == ko,
                    d: Fo,
                    h: t ? 0 : r.pageNumber,
                    i: r.pageName,
                    j: r.pageLabel,
                    x: r.autoFlipInterval,
                    v: r.data,
                    e: i ? c : a,
                    f: i ? f : s,
                    m: o ? ot : nt,
                    p: o ? p : g || r.hard == ko,
                    q: i,
                    k: t,
                    l: ko
                };
            return l.p && (l.u = ko), l.o = !l.r, l
        },
        di = function(e) {
            Zo *= 2, e = wi(yi(ki(Pi(e)), 113));
            for (var n, o = e[qo], i = 0, r = 0; o - 3 > r; r++) i += e[r];
            if (e[0] == Zo && e[o - 1] == Zo && o == e[o - 2] && (i & Go) == e[o - 3] && (n = ko), n && 1 == e[4]) {
                var a = Mi(),
                    s = (2 * Jo + e[5]) * Jo + e[6] * ei + e[7],
                    c = a[Ho]() * Jo + (a[Bo]() + 1) * ei + a[No]();
                n = s >= c
            }
            if (n) {
                var f, u, l = t[Eo][Xo][Yo](Uo);
                l[0] == _o ? f = l = u = Mo : (l = l[2], u = Do, l[Yo](".")[0] == jo && (l = l[Qo](4)), f = l[Yo]("."), f[qo] > 2 && (f[0] = "*"), f = f.join("."));
                var p = 1 == e[4] ? 8 : 5;
                if (n = vi(hi(escape(Oe)), {
                        a: e[p++],
                        b: e[p++]
                    }))
                    for (var g = hi(escape(l)[Yo]("%3A").join(":")), d = hi(escape(f)[Yo]("%3A").join(":")), h = hi(escape(u)), v = e[p++]; v-- && !(n = vi(g, {
                            a: e[p],
                            b: e[p + 1]
                        }) || vi(d, {
                            a: e[p],
                            b: e[p + 1]
                        }) || vi(h, {
                            a: e[p++],
                            b: e[p++]
                        })););
                n && (Bt = Zo + 10, Nt = 2, Ht = Bt / Nt, Et = Ht + 10, qt = Bt / xo)
            }
            return n
        },
        hi = function(e) {
            e = e[Oo]();
            for (var t, n = 0, o = 1, i = 0, r = 0; r < e[qo]; r++) t = e[Ro](r) - ti / 2, t = 0 == t ? 1 : t, 0 > t || t >= ti ? t = 0 : n += t, o *= -1, o += t + n % 8, n += o % 16, i++;
            return {
                a: n & Go,
                b: xi(o + i & Go)
            }
        },
        vi = function(e, t) {
            return e.a == t.a && e.b == t.b
        },
        bi = function() {
            return mi(97, 123) + mi(ti + 1, 91) + mi(47, 58) + String[Ko](36)
        },
        mi = function(e, t) {
            for (var n = "", o = e; t > o; o++) n += String[Ko](o);
            return n
        },
        wi = function(e) {
            for (var t = e[qo], n = xi(Zo - e[0]), o = [], i = 0; t > i; i++) o[i] = e[i] + n & Go;
            return o
        },
        xi = function(e) {
            return 0 > e ? e + Vo : e
        },
        yi = function(e, t) {
            for (var n = t, o = e[qo], i = e, r = 0; o > r; r++) n = Fi(i, r, n);
            for (var n = t, r = o - 1; r >= 0; r--) n = Fi(i, r, n);
            return i
        },
        Fi = function(e, t, n) {
            return (e[t] -= n) < 0 && (e[t] += Vo), e[t]
        },
        ki = function(e) {
            var t = 0,
                n = 0,
                o = 0,
                i = [],
                r = e[qo],
                a = Co(6 * r / 8);
            for (e.push(t, n); n++ < a;)
                for (i.push(e[o] + ti * e[o + 1] + ti * ti * e[o + 2] >> t & Go), t += 8; t >= 6;) t -= 6, o++;
            return i
        },
        Pi = function(e) {
            for (var t = e[qo], n = [], o = bi(), i = 0; t > i; i++) n.push(o.lastIndexOf(e[Qo](i, 1)));
            return n
        },
        $i = function(e) {
            Wt = e > Wt ? e : Wt
        },
        Ti = function(e) {
            Ut = e > Ut ? e : Ut
        },
        Si = function() {
            var e = de - (d && !E ? Io((Wt - Ut) / 2) : 0),
                t = he - (d && E ? Io((Wt - Ut) / 2) : 0);
            (Ve != e || Je != t) && (it = ko, Ve = e, Je = t, Ye.css({
                transform: Rr(Ve, Je)
            }))
        },
        zi = function() {
            var e = Ct,
                t = Lt,
                o = [],
                i = [],
                r = [],
                a = [],
                s = [],
                u = Ke,
                l = Ke + 1;
            if (Ut = Wt = Qt = jt = 0, ct = [], st) {
                0 > ut ? u = dt : l = dt + 1;
                for (var g, d, h = 0; h < ft.length; h++) g = ft[h].k, d = ft[h].w, zt[g].t = zt[d].t = zt[d].y = ko, zt[g].y = Fo, 1 != ft[h].s ? (ct.splice(0, 0, g), ct.push(d)) : (ct.splice(h, 0, d), ct.splice(h, 0, g)), ft[h].l || (s.push({
                    e: 0,
                    p: g
                }), s.push({
                    e: 0,
                    p: d
                }), ft[h].l = ko), zt[g].v && (Fs(3, g), zt[g].v = Fo), zt[d].v && (Fs(3, d), zt[d].v = Fo)
            }
            Lt = [];
            for (var v = u, b = zt[v].l, m = b ? te : 0; v >= 0;) b || zt[v].q && !zt[v].k && tt ? (o.push(v), b = ee && zt[v].b) : m > 0 && (zt[v].l && Lt.push(v), zt[v + 1].l && Lt.push(v + 1), m--), !b && 0 == m && v > 4 ? v = 2 : v -= 2;
            var w = l;
            for (b = zt[w].l, m = b ? te : 0; We >= w;) b || zt[w].q && !zt[w].k && tt ? (i.push(w), b = ee && zt[w].b) : m > 0 && (zt[w - 1].l && Lt.push(w - 1), zt[w].l && Lt.push(w), m--), !b && 0 == m && We - 4 > w ? w = We - 2 : w += 2;
            Ct = [];
            for (var x, y, F = o.length, k = i.length, P = F > k ? F : k, h = 0; P > h; h++) k > h && (y = i[h], x = zt[y], $i(E ? x.f : x.e), x.k || (jt = Wt), Ct.splice(0, 0, y), x.t = Fo, 0 != h || st ? x.v && (Fs(3, y), x.v = Fo) : x.v || (s.push({
                e: 2,
                p: y
            }), x.v = ko)), F > h && (y = o[h], x = zt[y], Ti(E ? x.f : x.e), x.k || (Qt = Ut), Ct.splice(0, 0, y), zt[o[h]].t = Fo, 0 != h || st ? x.v && (Fs(3, y), x.v = Fo) : x.v || (s.push({
                e: 2,
                p: y
            }), x.v = ko));
            Yt = Ut, _t = Wt, st ? Ct = Ct.concat(ct) : Si(), (st && (!p || be) || !st) && Ii(Qt, jt);
            for (var h = 0; h < Ct.length; h++) y = Ct[h], e.lastIndexOf(y) < 0 && r.push(y);
            r = r.concat(Lt);
            for (var h = 0; h < e.length; h++) y = e[h], Ct.lastIndexOf(y) < 0 && a.push(y);
            for (var h = 0; h < t.length; h++) y = t[h], Lt.lastIndexOf(y) < 0 && Ct.lastIndexOf(y) < 0 && a.push(y);
            for (var $, h = 0; h < a.length; h++) $ = a[h], R = At.lastIndexOf($), y = zt[$], y.v && (s.push({
                e: 3,
                p: $
            }), x.v = Fo), y.a !== Fo ? (R >= 0 && At.splice(R, 1), Fs(5, $), y.$p.remove(), y.n && (y.n = Fo, y.$m.remove(), y.$fsc && y.$fsc.remove()), y.$hts && (y.$hts.remove(), y.$hts = n)) : 0 > R && (y.n && Ci($), y.$p.css("display", "none"), At.push($), s.push({
                e: 7,
                p: $
            }));
            for (var T, S, z, C, A, I, L, O, R, q, h = 0; h < r.length; h++) T = r[h], R = At.lastIndexOf(T), q = Lt.lastIndexOf(T), R >= 0 ? 0 > q && (At.splice(R, 1), zt[T].$p.css("display", ""), s.splice(0, 0, {
                e: 8,
                p: T
            })) : (0 > q && s.splice(0, 0, {
                e: 8,
                p: T
            }), De.append(kr(T)), S = zt[T].$p = $r(T), s.splice(0, 0, {
                e: 4,
                p: T
            }), C = zt[T].e, A = zt[T].f, E ? (L = (c - C) / 2, I = T % 2 ? f : f - A, O = Wo) : (I = (f - A) / 2, L = T % 2 ? Wo : c - C, O = T % 2 ? c - C : Wo), S.css({
                position: "absolute",
                overflow: "hidden",
                width: C,
                height: A,
                top: I,
                left: L,
                right: O
            }), z = zt[T].$c = Tr(T), zt[T].w && S.css("backgroundImage", "url('" + zt[T].w + "')"), z.html(zt[T].s), zt[T].r && z.load(zt[T].r, "GET"), zt[T].q || zt[T].u || (z.after(Pr("pf-emboss-" + (T % 2 ? "right" : "left"), "page" + T + "emboss")), Sr(T).css({
                position: "absolute",
                overflow: "hidden",
                width: Et,
                height: E ? C : A,
                top: E ? T % 2 ? -C / 2 : A - C / 2 : 0,
                left: E ? T % 2 ? "50%" : Wo : T % 2 ? 0 : Wo,
                right: E ? T % 2 ? Wo : "50%" : T % 2 ? Wo : 0,
                "transform-origin": E ? T % 2 ? "0% 50%" : "100% 50%" : "",
                transform: E ? "rotate(90deg)" : "",
                opacity: fe
            })), q >= 0 && (S.css("display", "none"), At.push(T), s.push({
                e: 7,
                p: T
            })));
            for (var T, H, S, C, A, h = 0, B = 2; h < Ct.length; h++)
                if (T = Ct[h], H = zt[T], S = H.$p, C = H.e, A = H.f, H.t && H.n) !ne && H.y && H.$fsc.css({
                    "z-index": B++
                }), H.$m.css({
                    "z-index": B++
                });
                else if (H.t && !H.n)
                if (2 == lt) S.css({
                    "z-index": B++,
                    "transform-origin": E ? T % 2 ? "50% 0%" : "50% 100%" : T % 2 ? "0% 50%" : "100% 50%",
                    "backface-visibility": "hidden"
                }), ne || H.$hts || (H.$c.after(Pr("pf-hard-topshadow", "page" + T + "hardtopshadow")), H.$hts = Or(T), H.$hts.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0," + ce + ")"
                }));
                else {
                    S.wrap(Pr("pf-mask", "page" + T + "mask")), H.$m = zr(T);
                    var N = H.m,
                        X = -H.y;
                    H.$m.css({
                        position: "absolute",
                        right: E ? Wo : "50%",
                        top: E ? f - N : (f - N) / 2,
                        left: E ? (c - N) / 2 : Wo,
                        width: N,
                        height: N,
                        "transform-origin": E ? "50% 100%" : "100% 50%",
                        overflow: "hidden"
                    }), S.css({
                        top: E ? Wo : (N - A) / 2,
                        bottom: E ? T % 2 ? -A : 0 : Wo,
                        left: Wo,
                        right: E ? (N - C) / 2 : T % 2 ? -C : 0,
                        "z-index": ""
                    }), ne || X && (H.$c.after(Pr("pf-flip-topshadow", "page" + T + "fliptopshadow")), H.$fts = Lr(T), H.$fts.css({
                        position: "absolute",
                        top: (A - N) / 2,
                        left: C / 2 - Et,
                        width: Et,
                        height: N,
                        "transform-origin": "100% 50%",
                        overflow: "hidden",
                        opacity: ae
                    }), H.$m.before(Pr("pf-flip-shadow-container", "page" + T + "flipshadowcontainer", Pr("pf-flip-shadowA", "page" + T + "flipshadowA") + Pr("pf-flip-shadowB", "page" + T + "flipshadowB"))), H.$fsc = Cr(T), H.$fsA = Ar(T), H.$fsB = Ir(T), Ai(T, B++, A, C, N)), H.$m.css({
                        "z-index": B++
                    }), H.n = ko
                } else !H.t && H.n ? (Ci(T), S.css("z-index", B++)) : (H.$hts && (H.$hts.remove(), H.$hts = n), S.css("z-index", H.k ? 0 : B++));
            for (h = 0; h < s.length; h++) Fs(s[h].e, s[h].p);
            Vi(), ga(), j && Ca()
        },
        Ci = function(e) {
            var t = zt[e],
                o = t.$p,
                i = t.e,
                r = t.f;
            o.unwrap(), o.css({
                top: E ? e % 2 ? f : f - r : (f - r) / 2,
                left: E ? Wo : e % 2 ? Wo : c - i,
                right: E ? (c - i) / 2 : e % 2 ? c - i : Wo,
                "transform-origin": "",
                "backface-visibility": ""
            }), t.$fsc && (t.$fsc.remove(), t.$fsc = t.$fsA = t.$fsB = n), t.$fts && (t.$fts.remove(), t.$fts = n), t.n = Fo
        },
        Ai = function(e, t, n, o, i) {
            zt[e].$fsc.css({
                "z-index": t++,
                position: "absolute",
                top: E ? f - n : (f - n) / 2,
                left: E ? (c - o) / 2 : c - o,
                width: E ? o : 2 * o,
                height: E ? 2 * n : n,
                overflow: "hidden",
                opacity: se
            }), zt[e].$fsA.css({
                position: "absolute",
                top: E ? n - i : n / 2 - i,
                right: E ? o / 2 : o,
                width: Et,
                height: 2 * i,
                "transform-origin": "100% 50%",
                overflow: "hidden"
            }), zt[e].$fsB.css({
                position: "absolute",
                top: E ? n - i / 2 : (n - i) / 2,
                left: E ? o / 2 : o,
                width: Et,
                height: i,
                "transform-origin": "0% 50%",
                overflow: "hidden"
            })
        },
        Ii = function(e, t) {
            if (oe && (e != Kt || t != Zt)) {
                Kt = e, Zt = t;
                var n = (e + t) / (E ? Ge : Ze);
                Qe.css(E ? {
                    transform: Rr(0, Ge / 2 - e) + "scaleY(" + n + ")"
                } : {
                    transform: Rr(Ze / 2 - e, 0) + "scaleX(" + n + ")"
                })
            }
        },
        Li = function(e, t, n, o, i, r, a, s) {
            if (Ft) return Fo;
            a = a || e, s = s || t;
            var c = ft.length,
                f = gt,
                r = r || 2,
                i = i || 0;
            if (c >= ht) return Fo;
            if (f = 0 == c ? Ke : dt, r += r % 2, 0 > o && I > f - r) return Fo;
            if (o > 0 && f + r > L) return Fo;
            var u, l = f + (o > 0 ? 1 : 0),
                p = f + (r - (0 > o ? 1 : 0)) * o;
            if (u = zt[l].p || zt[p].p ? 2 : i, 0 == c) st = ko, ut = o, lt = u;
            else if (ut != o || lt != u) return Fo;
            pt = n, gt = f, dt = f + r * o;
            var g = 1 == lt;
            return ft[c] = Hi({
                j: gt,
                v: dt,
                k: g ? p : l,
                w: g ? l : p,
                t: n,
                s: lt,
                y: o,
                l: Fo,
                e: Fo
            }, e, t), zi(), (a || s) && Bi(ft[c], a * Dt, s), ko
        },
        Oi = function(e, t, n, o, i) {
            return n = n || e.y, e.y != n || 0 == e.t || 4 == e.t || 5 == e.t || 0 == t || 1 == t ? Fo : (pt = e.t = t, Bi(e, o, i), ko)
        },
        Ri = function(e) {
            var t = e.k,
                n = e.w,
                o = zt[t].$p,
                i = zt[n].$p;
            zt[t].t = zt[t].y = zt[n].t = zt[n].y = Fo, i.css({
                transform: Rr(0, 0) + "rotate(0deg) "
            }), o.css({
                transform: Rr(0, 0) + "rotate(0deg) "
            })
        },
        qi = function(e) {
            var t = ft[e];
            t.e ? Ke = t.v : Ft = Fo, Fs(1, t.k), Fs(1, t.w), Ri(t), ft.splice(e, 1), st = 0 != ft.length, st && e > 0 && (gt = ft[e - 1].j, dt = ft[e - 1].v)
        },
        Hi = function(e, t, n) {
            var o = e.w,
                i = zt[o].e,
                r = zt[o].f;
            return 2 == e.t && (E ? (t *= r * e.y / n, n = r * e.y, -i / 2 > t && (t = -i / 2), t > i / 2 && (t = i / 2)) : (n *= i * e.y / t, t = i * e.y, -r / 2 > n && (n = -r / 2), n > r / 2 && (n = r / 2))), e.o = o % 2 ? 1 : -1, e.d = E ? -t : -i * e.o, e.c = E ? -r * e.o : n, e.A = E ? 0 : -i / 2 * e.o, e.z = E ? -r / 2 * e.o : 0, e.Q = E ? -t : -i * (0 > t ? 1 : -1), e.H = E ? -r * (0 > n ? 1 : -1) : n, e
        },
        Bi = function(e, t, o, i) {
            t = t || e.Q, o = o || e.H;
            var r = e.k,
                a = e.w,
                s = zt[r].$p,
                c = zt[r].$m,
                f = zt[a].$p,
                u = zt[a].$m,
                l = zt[r].e,
                p = zt[r].f,
                g = l / 2,
                d = p / 2,
                h = ut * (1 == lt ? -1 : 1),
                v = e.d,
                b = e.c,
                m = e.A,
                w = e.z,
                x = E ? o == e.u ? n : o < e.u ? -1 : 1 : t == e.u ? n : t < e.u ? -1 : 1;
            if (e.u = E ? o : t, 2 != lt)
                if (E) {
                    var y = So(o * o + (g + t) * (g + t)),
                        F = So(o * o + (g - t) * (g - t)),
                        k = So(p * p + (g + v) * (g + v)),
                        P = So(p * p + (g - v) * (g - v));
                    if ((y > k || F > P) && 5 != e.t)
                        if ((y - k > ve || F - P > ve) && zt[e.k].d && 2 == e.t) {
                            e.t = 5;
                            var $ = 2 * o,
                                T = 0 > t ? 1.5 * -l : 1.5 * l;
                            Ni(e, T, $, ge, 2, 0)
                        } else if (v > t) {
                        var S = g - t,
                            z = $o(S / F);
                        t = g - Po(z) * P, o = To(z) * P * (0 > o ? -1 : 1), t > v && (b * o > 0 ? (o = b, t = v) : (o = -b, t = v))
                    } else {
                        var S = g + t,
                            z = $o(S / y);
                        t = Po(z) * k - g, o = To(z) * k * (0 > o ? -1 : 1), v > t && (b * o > 0 ? (o = b, t = v) : (o = -b, t = v))
                    }(0 > b && 20 > o - b || b > 0 && 20 > b - o) && !i && (0 > b && (o = -p + 20), b > 0 && (o = p - 20))
                } else {
                    var y = So(t * t + (d + o) * (d + o)),
                        F = So(t * t + (d - o) * (d - o)),
                        k = So(l * l + (d + b) * (d + b)),
                        P = So(l * l + (d - b) * (d - b));
                    if ((y > k || F > P) && 5 != e.t)
                        if ((y - k > ve || F - P > ve) && zt[e.k].d && 2 == e.t) {
                            e.t = 5;
                            var T = 2 * t,
                                $ = 0 > o ? 1.5 * -p : 1.5 * p;
                            Ni(e, T, $, ge, 0, 2)
                        } else if (b > o) {
                        var S = d - o,
                            z = $o(S / F);
                        o = d - Po(z) * P, t = To(z) * P * (0 > t ? -1 : 1), o > b && (v * t > 0 ? (o = b, t = v) : (o = b, t = -v))
                    } else {
                        var S = o + d,
                            z = $o(S / y);
                        o = Po(z) * k - d, t = To(z) * k * (0 > t ? -1 : 1), b > o && (v * t > 0 ? (o = b, t = v) : (o = b, t = -v))
                    }(0 > v && 20 > t - v || v > 0 && 20 > v - t) && !i && (0 > v && (t = -l + 20), v > 0 && (t = l - 20))
                }
            i ? (e.Q = t, e.H = o) : (e.Q += (t - e.Q) / 5, e.H += (o - e.H) / 5, zo(t - e.Q) < .5 && zo(o - e.H) < .5 && (e.Q = t, e.H = o), t = e.Q, o = e.H);
            var C = E ? o / p * Ht : t / l * Ht;
            if (-Ht > C && (C = -Ht), C > Ht && (C = Ht), 0 > C && Ti(-Po(C / qt) * (E ? p : l)), C > 0 && $i(Po(C / qt) * (E ? p : l)), t != e.r || o != e.q) {
                if (2 == lt) {
                    var h = ut * (0 > C ? 1 : -1),
                        A = Ht * ut,
                        I = E ? "rotateX" : "rotateY",
                        L = 3e3;
                    if (0 > h)
                        if (rt) s.css({
                            transform: I + "(" + (Bt + A + C) * Dt + "deg) " + Rr(0, 0),
                            opacity: 1
                        }), f.css({
                            transform: I + "(" + Ht + "deg) " + Rr(L, L),
                            opacity: 0
                        });
                        else {
                            var O = -(Ht - zo(C)) / 5 * ut;
                            s.css({
                                transform: E ? "scaleY(" + Po(ut * C / qt) + ") skewX(" + O + "deg) " + Rr(0, 0) : "scaleX(" + Po(ut * C / qt) + ") skewY(" + O + "deg) " + Rr(0, 0)
                            }), f.css({
                                transform: Rr(L, L)
                            })
                        } else if (rt) f.css({
                        transform: I + "(" + (Bt - A + C) * Dt + "deg) " + Rr(0, 0),
                        opacity: 1
                    }), s.css({
                        transform: I + "(" + Ht + "deg) " + Rr(L, L),
                        opacity: 0
                    });
                    else {
                        var O = (Ht - zo(C)) / 5 * ut;
                        f.css({
                            transform: E ? "scaleY(" + Po(-ut * C / qt) + ") skewX(" + O + "deg) " + Rr(0, 0) : "scaleX(" + Po(-ut * C / qt) + ") skewY(" + O + "deg) " + Rr(0, 0)
                        }), s.css({
                            transform: Rr(L, L)
                        })
                    }
                    ne || (0 > h ? zt[r].$hts.css("opacity", (1 - zo(Po(C / qt)) + 1 - zo(C / 90)) / 2) : zt[a].$hts.css("opacity", (1 - zo(Po(C / qt)) + 1 - zo(C / 90)) / 2)), e.Q = t, e.H = o
                } else if (E) {
                    var R = v - t,
                        q = b - o,
                        H = v - m,
                        B = b - w,
                        N = So(R * R + q * q),
                        z = $o(R / N) || 0,
                        X = So(H * H + B * B),
                        S = $o(H / X);
                    (0 > q || 0 == q && 0 > h) && (z = xo - z), 0 > B && (S = xo - S), S = z - (S - z);
                    var M = To(S) * X + o,
                        D = Po(S) * X + t,
                        Y = (D - m) / 2,
                        Q = (M - w) / 2,
                        _ = m + Y,
                        j = w + Q,
                        U = So(Y * Y + Q * Q);
                    0 > Q && (U *= -1);
                    var K = z * qt,
                        W = 6;
                    f.css({
                        transform: Rr(0, ((d + U) * h).toFixed(W)) + "rotate(" + K + "deg) "
                    }), u.css({
                        transform: Rr(-_.toFixed(W), j.toFixed(W)) + "rotate(" + K + "deg)"
                    }), s.css({
                        transform: Rr(-(Po(-z) * h).toFixed(W), ((-d - U + 1 * To(-z)) * h).toFixed(W)) + "rotate(" + -K + "deg) "
                    }), c.css({
                        transform: Rr((-_).toFixed(W), (j - 1 * h).toFixed(W)) + "rotate(" + K + "deg)"
                    });
                    var Z = zo(To(z) * d) - U * h,
                        G = Po(-z) * g + Z,
                        V = Po(z) * g + Z,
                        J = (G + V) / 2,
                        ee = 1;
                    if (Z = G > V ? G : V, e.n = Z, !ne) {
                        Z /= p, J /= p;
                        var te = .05 > J ? .05 : J;
                        .2 > J && (J = Z), .2 > J && (ee = 5 * J), J > .9 && (ee = 1 - 10 * (J - .9));
                        var oe = Z;
                        oe > .6 && (oe = oe > .8 ? .6 - 1 * (oe - .8) : .6 + .1 * Po((oe - .6) / .2 * xo));
                        var ie = .5 + ee / 2;
                        zt[a].$fsA.css({
                            transform: Rr((-_).toFixed(5), j.toFixed(5)) + "rotate(" + (K + 90) + "deg) scaleX(" + 6 * te + ")",
                            opacity: ie.toFixed(5)
                        }), zt[a].$fsB.css({
                            transform: Rr((-_).toFixed(5), j.toFixed(5)) + "rotate(" + (K + 90) + "deg) scaleX(" + 3 * Z + ")",
                            opacity: ee.toFixed(5)
                        }), zt[a].$fts.css({
                            transform: "rotate(" + (-K + 90) + "deg) " + Rr((-U * h).toFixed(5), 0) + "scaleX(" + 4 * oe + ")",
                            opacity: (ee * ae).toFixed(5)
                        })
                    }
                    e.r = t, e.q = o
                } else {
                    var R = v - t,
                        q = b - o,
                        H = v - m,
                        B = b - w,
                        N = So(R * R + q * q),
                        z = $o(q / N) || 0,
                        X = So(H * H + B * B),
                        S = $o(B / X);
                    (0 > R || 0 == R && 0 > h) && (z = xo - z), 0 > H && (S = xo - S), S = z - (S - z);
                    var D = To(S) * X + t,
                        M = Po(S) * X + o,
                        Y = (D - m) / 2,
                        Q = (M - w) / 2,
                        _ = m + Y,
                        j = w + Q,
                        U = So(Y * Y + Q * Q);
                    0 > Y && (U *= -1);
                    var K = z * qt,
                        W = 6;
                    f.css({
                        transform: Rr(((g + U) * h).toFixed(W), 0) + "rotate(" + K + "deg) "
                    }), u.css({
                        transform: Rr(_.toFixed(W), j.toFixed(W)) + "rotate(" + K + "deg)"
                    }), s.css({
                        transform: Rr(((-g - U + 1 * To(-z)) * h).toFixed(W), (Po(-z) * h).toFixed(W)) + "rotate(" + -K + "deg) "
                    }), c.css({
                        transform: Rr((_ - 1 * h).toFixed(W), j.toFixed(W)) + "rotate(" + K + "deg)"
                    });
                    var Z = zo(To(z) * g) - U * h,
                        G = Po(-z) * d + Z,
                        V = Po(z) * d + Z,
                        J = (G + V) / 2,
                        ee = 1;
                    if (Z = G > V ? G : V, e.n = Z, !ne) {
                        Z /= l, J /= l;
                        var te = .05 > J ? .05 : J;
                        .2 > J && (J = Z), .2 > J && (ee = 5 * J), J > .9 && (ee = 1 - 10 * (J - .9));
                        var oe = Z;
                        oe > .6 && (oe = oe > .8 ? .6 - 1 * (oe - .8) : .6 + .1 * Po((oe - .6) / .2 * xo));
                        var ie = .5 + ee / 2;
                        zt[a].$fsA.css({
                            transform: Rr(_.toFixed(5), j.toFixed(5)) + "rotate(" + K + "deg) scaleX(" + 6 * te + ")",
                            opacity: ie.toFixed(5)
                        }), zt[a].$fsB.css({
                            transform: Rr(_.toFixed(5), j.toFixed(5)) + "rotate(" + K + "deg) scaleX(" + 3 * Z + ")",
                            opacity: ee.toFixed(5)
                        }), zt[a].$fts.css({
                            transform: "rotate(" + -K + "deg) " + Rr((-U * h).toFixed(5), 0) + "scaleX(" + 4 * oe + ")",
                            opacity: (ee * ae).toFixed(5)
                        })
                    }
                    e.r = t, e.q = o
                }
                return x
            }
        },
        Ni = function(e, t, n, o, i, r, a) {
            e.i = e.Q, e.h = e.H, e.b = t, e.a = n, e.x = o, e.g = i, e.f = r, e.m = Mi().getTime(), e.p = a
        },
        Ei = function(e) {
            var t = Mi().getTime() - e.m,
                n = e.x,
                o = Fo;
            t >= n && (o = ko, t = n);
            var i = t / n,
                r = e.b - e.i,
                a = e.a - e.h,
                s = e.i + Xi(e.g, i, r, e.p),
                c = e.h + Xi(e.f, i, a, e.p);
            return {
                x: s,
                y: c,
                end: o
            }
        },
        Xi = function(e, t, n, o) {
            switch (e) {
                case 0:
                    return n * t;
                case 1:
                    return Po(xo * t / 2) * n;
                case 2:
                    return (1 - To(xo * t / 2)) * n;
                case 3:
                    return (1 - To(xo * t)) / 2 * n;
                case 4:
                    return Po(2 * xo * t) * o;
                case 5:
                    return Po(xo * t) * o;
                case 6:
                    return To(2 * xo * t) * o;
                case 7:
                    return To(xo * t) * o
            }
        },
        Mi = function() {
            return new Date
        },
        Di = Fo,
        Yi = function() {
            if (Gt && raf(Yi), uo.length > 0 && ss(), st) {
                var e;
                Ut = Qt, Wt = jt;
                for (var t = 0; t < ft.length; t++) switch (e = ft[t], e.t) {
                    case 1:
                        break;
                    case 2:
                    case 3:
                        kt = Bi(e, vt * Dt, bt);
                        break;
                    case 0:
                    case 4:
                        var n = Ei(e);
                        Bi(e, n.x, n.y, ko), n.end && (qi(t), zi(), bo && yt && (Gi(ft[ft.length - 1]), Ji()), it || Wi(), t--);
                        break;
                    case 5:
                        var n = Ei(e);
                        Bi(e, n.x, n.y, ko), n.end && (qi(t), zi(), t--)
                }
                st && (p && !be && Ii(Ut, Wt), Ti(Yt), $i(_t), Si())
            }
            j && za(), Kr()
        },
        Qi = function(e) {
            if (Di = Fo, !yt && !mt && Te) {
                if (hr(e), bo && Pe && (er(e, tr), Jt && (Jt = Fo, en || (en = ko, fr(), pn = xn)), en)) return void Hr(e);
                var t = mr(vt, bt, xt);
                if (t && Za()) switch (Ji(), Hr(e), t) {
                    case "TL":
                    case "BL":
                        xt || wt ? Oi(ft[ft.length - 1], 2, -1) && (xt = wt = Fo, yt = ko) : Li(vt, bt, 2, -1, 0) && (yt = ko);
                        break;
                    case "TR":
                    case "BR":
                        xt || wt ? Oi(ft[ft.length - 1], 2, 1) && (xt = wt = Fo, yt = ko) : Li(vt, bt, 2, 1, 0) && (yt = ko)
                } else if (t = wr(vt, bt), t && Za()) switch (Ji(), Hr(e), t) {
                    case "OL":
                        Li(vt, bt, 2, -1, 1) && (yt = ko);
                        break;
                    case "IR":
                        Li(E ? 0 > vt ? -Pt : Pt : -Et, E ? -Et : 0 > bt ? -$t : $t, 2, -1, Ne ? 1 : 0) && (yt = ko);
                        break;
                    case "OR":
                        Li(vt, bt, 2, 1, 1) && (yt = ko);
                        break;
                    case "IL":
                        Li(E ? 0 > vt ? -Tt : Tt : Et, E ? Et : 0 > bt ? -St : St, 2, 1, Ne ? 1 : 0) && (yt = ko)
                } else {
                    if (!mn || !Fr(e)) return !0;
                    Hr(e), On = ko, Di = Fo;
                    var n = vr(e);
                    Jr(n.x, n.y)
                }
            }
        },
        _i = function(e) {
            if (Di = ko, !mt && Te) {
                if ((yt || xt || On || en) && Hr(e), bo && en) return lr(), dr(rn, an), void Hr(e);
                if (hr(e), On) {
                    var t = vr(e);
                    return void Gr(t.x, t.y)
                }
                var o = mr(vt, bt, xt);
                if (xt && !bo) o || Gi(ft[ft.length - 1]);
                else if (yt);
                else if (!bo && !mn && Y && o) switch (o) {
                    case "TL":
                    case "BL":
                        Li(E ? 0 > vt ? -Pt : Pt : vt, E ? bt : 0 > bt ? -$t : $t, 3, -1, 0, n, vt, bt) && (xt = ko);
                        break;
                    case "TR":
                    case "BR":
                        Li(E ? 0 > vt ? -Tt : Tt : vt, E ? bt : 0 > bt ? -St : St, 3, 1, 0, n, vt, bt) && (xt = ko)
                }
            }
        },
        ji = function(e) {
            if (Te)
                if (hr(e), gn = null, bo && Pe && (er(e, nr), Jt && en && (Jt = Fo, ur())), yt || xt) Hr(e), Gi(ft[ft.length - 1]), it = Fo, Wi();
                else if (On) {
                if (Hr(e), On = Fo, !Fr(e)) return ko;
                !Di && xr(vt, bt) && Fe && ks.zoomOut()
            } else {
                if (!Fr(e)) return ko;
                if (!Di && xr(vt, bt) && Fe) {
                    var t = vr(e);
                    ea(vt, bt, t.x, t.y), ks.zoomIn()
                }
            }
        },
        Ui = function(e) {
            if (!(!$e || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || Hn)) {
                {
                    e.keyCode
                }
                switch (e.keyCode) {
                    case 37:
                        Hr(e), ks.gotoPrevPage(!0);
                        break;
                    case 39:
                        Hr(e), ks.gotoNextPage(!0);
                        break;
                    case 40:
                        Hr(e), ks.gotoLastPage(!0);
                        break;
                    case 38:
                        Hr(e), ks.gotoFirstPage(!0);
                        break;
                    case 90:
                        Hr(e), ks.toggleZoom();
                        break;
                    case 84:
                        Hr(e), ks.showThumbnails();
                        break;
                    case 65:
                        Hr(e), ks.toggleAutoFlip()
                }
            }
        },
        Ki = function(e) {
            gn = null, Ji(), gr(), dumpTouches("Cancel")
        },
        Wi = function() {
            bo || _e.trigger(mo.b)
        },
        Zi = function(e, t, n) {
            var o = Fo,
                i = E ? -.5 : e,
                r = E ? 2 * e : 1;
            if (Li(i * a, r * s / 2, 0, e, t, n, i * a * .97, r * s / 2 * .97)) {
                var c = ft[ft.length - 1];
                c.e = ko;
                var f = 1 == c.s ? 1 : -1;
                E ? Ni(c, c.d, f * c.c, ge, 5, 2 == c.s ? 0 : 3, -a / 8 - (Lo() - .5) * a / 16) : Ni(c, f * c.d, c.c, ge, 2 == c.s ? 0 : 3, 5, -s / 8 + (Lo() - .5) * s / 16), o = ko
            }
            return o
        },
        Gi = function(e, t) {
            if (!t || t == e.y) {
                var n = e.o * (1 == e.s ? -1 : 1);
                if (Oi(e, 4)) {
                    e.e = kt && yt ? kt == n : n * (E ? bt : vt) > 0;
                    var o = mr(vt, bt, xt || yt);
                    o && (e.e = ko), yt = xt = Fo;
                    var i = e.d * (E ? 1 : (e.e ? -1 : 1) * e.o * n),
                        r = e.c * (E ? (e.e ? -1 : 1) * e.o * n : 1),
                        a = E ? Ge : Ze,
                        s = qr(i - e.Q, r - e.H) / a,
                        c = e.n / a,
                        f = 2;
                    c > s && (s = c, f = 1), Ni(e, i, r, ge * s, E ? f : 0, E ? 0 : f), Ft = !e.e
                }
            }
        },
        Vi = function() {
            Pt = zt[Ke].e / Mt || 0, $t = zt[Ke].f / Xt || 0, Tt = zt[Ke + 1].e / Mt || 0, St = zt[Ke + 1].f / Xt || 0
        },
        Ji = function() {
            Vt = [], tn = []
        },
        er = function(e, t) {
            e = e.originalEvent.changedTouches;
            for (var n, o = 0; o < e.length; o++) n = e[o], t(n, n.identifier);
            Pe && ir()
        },
        tr = function(e, t) {
            Vt.splice(0, 0, {
                b: e,
                a: t
            })
        },
        nr = function(e, t) {
            Vt.splice(or(t), 1)
        },
        or = function(e) {
            for (var t = 0; t < Vt.length; t++)
                if (Vt[t].a == e) return t;
            return -1
        },
        ir = function() {
            Vt.length > 1 ? 0 == tn.length ? (tn[0] = Vt[0].a, tn[1] = Vt[1].a, Jt = ko) : (-1 == or(tn[0]) && (tn[0] = rr(tn[1]), Jt = ko), -1 == or(tn[1]) && (tn[1] = rr(tn[0]), Jt = ko)) : (tn = [], Jt = Fo, gr())
        },
        rr = function(e) {
            for (var t = 0; t < Vt.length; t++) {
                var n = Vt[t].a;
                if (n != e) return n
            }
            return -1
        },
        ar = 0,
        sr = 0,
        cr = function() {
            var e = Vt[or(tn[0])].b,
                t = Vt[or(tn[1])].b;
            return rn = (e.pageX + t.pageX) / 2 - Xe.offset().left, an = (e.pageY + t.pageY) / 2 - Xe.offset().top, qr(e.pageX - t.pageX, e.pageY - t.pageY)
        },
        fr = function() {
            ar = kn * xn, sr = Pn * xn, kn = $n = Pn = Tn = 0, nn = cr(), fn = 1, on = xn, sn = rn - ar, cn = an - sr;
            var e = et + wn * on;
            un = ((rn + Xe.offset().left - Me.offset().left) / e - Ze / 2) / e, ln = ((an + Xe.offset().top - Me.offset().top) / e - Ge / 2) / e
        },
        ur = function() {
            nn = cr() / fn
        },
        lr = function() {
            fn = cr() / nn, pn = pr()
        },
        pr = function() {
            var e = et + wn * on,
                t = (e * fn - et) / wn;
            return t
        },
        gr = function() {
            if (en) {
                var e = mn;
                mn = on > xn ? Fo : ko, en = Fo, tn = [], kn = ar / xn, Pn = sr / xn;
                var t = Vr(kn, Pn);
                $n = t.x, Tn = t.y, ar = sr = 0, Wr(), e != mn && Fs(mn ? 9 : 10, Ke)
            }
        },
        dr = function(e, t) {
            ar = e - sn + un * wn * (on - xn), sr = t - cn + ln * wn * (on - xn)
        },
        hr = function(e) {
            bo && (e = br(e));
            var t = et + wn * xn,
                n = (e.pageX - Me.offset().left) / t - Ze / 2 - Ve,
                o = (e.pageY - Me.offset().top) / t - Ge / 2 - Je;
            isNaN(n) || (vt = n, bt = o)
        },
        vr = function(e) {
            bo && (e = br(e));
            var t = e.pageX - Xe.offset().left,
                n = e.pageY - Xe.offset().top;
            return {
                x: t,
                y: n
            }
        },
        br = function(e) {
            var t = e.originalEvent.changedTouches;
            return gn ? dn : (gn = t[0].identifier, dn = t[0])
        },
        mr = function(e, t, n) {
            var o = "",
                i = ue * (n ? 1.2 : 1);
            return E ? t > -$t && St > t && (-$t + i > t ? e > -Pt && -Pt + i > e ? o = "BL" : Pt > e && e > Pt - i && (o = "TL") : t > St - i && (e > -Tt && -Tt + i > e ? o = "BR" : Tt > e && e > Tt - i && (o = "TR"))) : e > -Pt && Tt > e && (-Pt + i > e ? t > -$t && -$t + i > t ? o = "TL" : $t > t && t > $t - i && (o = "BL") : e > Tt - i && (t > -St && -St + i > t ? o = "TR" : St > t && t > St - i && (o = "BR"))), o
        },
        wr = function(e, t) {
            var n = "";
            return E ? t > -$t && St > t && (-$t + le > t ? zo(e) < Pt && (n = "OL") : t > St - le ? zo(e) < Tt && (n = "OR") : zo(t) < pe && (n = 0 > t ? "IL" : "IR")) : e > -Pt && Tt > e && (-Pt + le > e ? zo(t) < $t && (n = "OL") : e > Tt - le ? zo(t) < St && (n = "OR") : zo(e) < pe && (n = 0 > e ? "IL" : "IR")), n
        },
        xr = function(e, t) {
            if (E) {
                var n = yr(t, Pt, Tt);
                if (t > -$t && St > t && e > -n && n > e) return !0
            } else {
                var o = yr(e, $t, St);
                if (e > -Pt && Tt > e && t > -o && o > t) return !0
            }
            return !1
        },
        yr = function(e, t, n) {
            return 0 > e ? t : n
        },
        Fr = function(t) {
            var n = e(t.target);
            return !(n.is("a") || n.is("input") || n.is("textarea") || n.is("button") || n.hasClass("hotspot"))
        },
        kr = function(e) {
            return Pr("pf-page-container pf-" + yo[e % 2] + "-side" + (zt[e].k ? " pf-outer" : "") + (o ? " " + o : ""), "page" + e, Pr("pf-page-content", "page" + e + "content"))
        },
        Pr = function(e, t, n) {
            return "<div" + (t ? ' id="' + t + '"' : "") + (e ? ' class="' + e + '"' : "") + ">" + (n ? n : "") + "</div>"
        },
        $r = function(t) {
            return e("#page" + t)
        },
        Tr = function(t) {
            return e("#page" + t + "content")
        },
        Sr = function(t) {
            return e("#page" + t + "emboss")
        },
        zr = function(t) {
            return e("#page" + t + "mask")
        },
        Cr = function(t) {
            return e("#page" + t + "flipshadowcontainer")
        },
        Ar = function(t) {
            return e("#page" + t + "flipshadowA")
        },
        Ir = function(t) {
            return e("#page" + t + "flipshadowB")
        },
        Lr = function(t) {
            return e("#page" + t + "fliptopshadow")
        },
        Or = function(t) {
            return e("#page" + t + "hardtopshadow")
        },
        Rr = function(e, t) {
            return rt ? "translate3d(" + e + "px," + t + "px,0) " : "translate(" + e + "px," + t + "px) "
        },
        qr = function(e, t, n) {
            var o = So(e * e + t * t);
            return n && (o *= e > 0 ? -1 : 1), o
        },
        Hr = function(e) {
            return e.preventDefault()
        },
        Br = function(e, i) {
            return Ee != n ? Ee : (o = i, Ee = this, rt = "WebKitCSSMatrix" in t || "MozPerspective" in document.body.style, ni(e), Se && hs(1), oi(), ai(), He ? (Nr(), this) : (Ee = n, []))
        },
        Nr = function() {
            Ot = Ee.html(), D ? Ee.load(D, "GET", Er) : Er()
        },
        Er = function() {
            var i = Ee.children();
            if (0 == i.length) return [];
            ci(i), Rt = ra(i), Ke = A = A > L ? L : I > A ? I : A, Ke -= Ke % 2, X && (Ke = We - Ke - 1);
            var r = o ? " " + o : "";
            return Ee.html(Pr("pageflip-container" + r, "pf-stage", Pr("pf-book-container" + r, "pf-book", Pr("pf-book-offset" + r, "pf-bookoffs", Pr("pf-book-content" + r, "pf-bookc", oe ? Pr(o ? o : n, "pf-dropshadow") : n))) + Pr(o ? o : n, "pf-controls"))).css("visibility", "visible"), Xe = e("#pf-stage"), Me = e("#pf-book"), Ye = e("#pf-bookoffs"), De = e("#pf-bookc"), Qe = oe ? e("#pf-dropshadow") : n, _e = e(document), Xe.css({
                position: "relative",
                margin: Wo,
                "-webkit-perspective-origin-x": "50%",
                "-webkit-perspective-origin-y": "50%"
            }), y ? Xe.css({
                width: "100%",
                height: "100%"
            }) : (Xe.css(u == n ? {
                width: x ? "100%" : Ze + m + w
            } : {
                width: u
            }), Xe.css(l == n ? {
                height: x ? "100%" : Ge + v + b
            } : {
                height: l
            }), Xe.css({
                overflow: "hidden"
            })), Dr(), Me.css({
                position: "relative",
                top: 0,
                left: 0,
                "margin-top": v,
                "margin-left": m,
                "margin-bottom": b,
                "margin-right": w,
                "z-index": 10
            }), De.css({
                "transform-style": "preserve-3d",
                opacity: 1
            }), Ye.css({
                position: "absolute",
                top: 0,
                left: 0
            }), oe && Qe.css({
                position: "absolute",
                top: 0,
                left: 0,
                "z-index": 1,
                "transform-origin": E ? "50% 0%" : "0% 50%",
                opacity: re
            }), j && va(), Be && e(Ee).css({
                "user-select": "none"
            }), na(n, ko), qn = Ke, aa(Rt), Qr(), zi(), Me.bind(mo.a, Qi), _e.bind(mo.b, _i).bind(mo.c, ji), bo ? (Ji(), _e.bind("touchcancel", Ki)) : _e.bind("keydown", Ui), Le && e(t).bind("hashchange", na), e(t).bind("resize", Mr), (y || x) && Mr(), O && ks.startAutoFlip(Fo), t.raf = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
                    t.setTimeout(e, Et / 6)
                }
            }(), Gt = ko, Yi(), Ee
        },
        Xr = function(i) {
            !hn && Ee && (hn = ko, De.css("opacity", 0), je && (je.css("opacity", 0), je.unbind()), j && Ta(), t.setTimeout(function() {
                Gt = Fo
            }, 900), t.setTimeout(function() {
                st = Fo, Ja(), o = n, Ee.empty(), Ee.html(Ot).attr("style", null), Ee = n, Zo = 85, _e.unbind(mo.b, _i).unbind(mo.c, ji).unbind("webkitfullscreenchange mozfullscreenchange msfullscreenchange fullscreenchange", rs), bo ? _e.unbind("touchcancel", Ki) : _e.unbind("keydown", Ui), e(t).unbind("resize", Mr), hn = Fo, i && i()
            }, 1e3), Se && vs())
        },
        Mr = function() {
            if (y && e(Ee).css({
                    width: t.innerWidth,
                    height: t.innerHeight
                }), y || x) {
                var n = P;
                if (n && co && (n = Fo, Xe.css({
                        height: "100%"
                    })), u = Xe.width(), l = Xe.height(), $) {
                    var o = t.innerHeight - T;
                    l > o && (l = o, n = Fo, Xe.css({
                        height: o
                    }))
                }
                var i = u - m - w,
                    r = n ? Ge : l - v - b,
                    p = S ? c : Ze,
                    g = S ? f : Ge,
                    d = i / p,
                    h = r / g;
                if ($) {
                    var A = h > d ? d : h,
                        I = Ge * A + v + b;
                    I > o && (n = Fo, r = l - v - b, h = r / g, Xe.css({
                        height: o
                    }))
                }
                if (z) {
                    (E ? r >= C : i >= C) ? (c = a = Ao(i / Xt), f = s = Ao(r / Mt), et = 1) : E ? (f = s = C / 2, et = r / C, c = a = i / et) : (c = a = C / 2, et = i / C, f = s = r / et), ii(), Dr();
                    for (var L = 0; L < zt.length; L++) zt[L].e = a, zt[L].f = s, zt[L].m = zt[L].q ? ot : nt;
                    si()
                } else et = F ? d > h ? d : h : h > d ? d : h, et > 1 && !k && (et = 1);
                vn = Ao((Ze * et - Ze) / 2 - (Ze * et - i) / 2), n ? (r = Ge * (et + wn * xn), Xe.css({
                    height: r + (v + b)
                }), bn = Co((Ge * (et + wn * xn) - Ge) / 2)) : bn = Co((Ge * et - Ge) / 2 - (Ge * et - r) / 2), _r(i, r), Yr(), j && Ca(ko), ua(u)
            }
        },
        Dr = function() {
            Me.css({
                width: Ze,
                height: Ge
            }), Ye.css({
                width: Ze,
                height: Ge
            }), oe && Qe.css({
                width: Ze,
                height: Ge
            })
        },
        Yr = function() {
            var e = et + wn * xn,
                t = vn + kn * xn + ar,
                n = bn + Pn * xn + sr;
            Me.css({
                transform: Rr(t, n) + "scale(" + e + "," + e + ")"
            })
        },
        Qr = function() {
            wn = xn = yn = Fn = kn = Pn = $n = Tn = Sn = zn = Cn = An = In = Ln = 0, mn = On = Fo
        },
        _r = function(e, t) {
            var n = Ze,
                o = Ge;
            if (Ne && (E ? o /= 2 : n /= 2), yn = Co((n - e) / 2), Fn = Co((o - t) / 2), 0 > yn && (yn = 0), 0 > Fn && (Fn = 0), wn = 1 > et ? 1 - et : 0, 0 == wn) Qr();
            else if (mn) {
                var i = Vr($n, Tn);
                kn = $n = i.x, Pn = Tn = i.y
            }
            Wr()
        },
        jr = function() {
            !mn && 1 > et && (mn = ko, ca(ko), ba(ko), Fs(9, Ke))
        },
        Ur = function() {
            mn && 1 > et && (mn = Fo, Fs(10, Ke))
        },
        Kr = function() {
            return en ? (xn += (pn - xn) / 5, zo(pn - xn) < .01 && (xn = pn), void Yr()) : (mn ? 1 != xn && (xn += (1 - xn) / 5, zo(1 - xn) < .01 && (xn = 1), Yr(), P && e(t).trigger("resize")) : 0 != xn && (xn -= xn / 5, zo(xn) < .01 && (xn = 0, ca(), ba()), Yr(), P && e(t).trigger("resize")), void Zr())
        },
        Wr = function() {
            je && (e("#b-zoomout").css("display", mn ? "" : "none"), e("#b-zoomin").css("display", mn ? "none" : ""), da(e("#b-zoomin"), wn > 0 && ye))
        },
        Zr = function() {
            if ($n != kn || Tn != Pn) {
                if (On || en) Cn = $n - In, An = Tn - Ln, In = $n, Ln = Tn;
                else if (0 != Cn || 0 != An)
                    if (Cn *= .9, An *= .9, zo(Cn) < 1 && zo(An) < 1) Cn = An = 0;
                    else {
                        var e = Vr($n + Cn, Tn + An);
                        $n = e.x, Tn = e.y
                    }
                kn += ($n - kn) / 5, Pn += (Tn - Pn) / 5, zo($n - kn) + zo(Tn - Pn) < 1 && (kn = $n, Pn = Tn), Yr()
            }
        },
        Gr = function(e, t) {
            e += Sn, t += zn;
            var n = Vr(e, t); - yn > e && (Sn -= e + yn), e > yn && (Sn -= e - yn), -Fn > t && (zn -= t + Fn), t > Fn && (zn -= t - Fn), $n = n.x, Tn = n.y
        },
        Vr = function(e, t) {
            return -yn > e ? e = -yn : e > yn && (e = yn), -Fn > t ? t = -Fn : t > Fn && (t = Fn), {
                x: e,
                y: t
            }
        },
        Jr = function(e, t) {
            Sn = $n - e, zn = Tn - t, In = $n, Ln = Tn, Cn = An = 0
        },
        ea = function(e, t, n, o, i) {
            var r = n - vn - Ze / 2 - e - m - Ve,
                a = o - bn - Ge / 2 - t - v - Je,
                s = i ? {
                    x: r,
                    y: a
                } : Vr(r, a);
            kn = $n = s.x, Pn = Tn = s.y
        },
        ta = function() {
            var e, t, n = location.hash;
            if ("" == n && (n = "#page/" + A), n) {
                var i = n.substr(1);
                i = i.split("/");
                var r = 0;
                3 == i.length && (e = i[r++] != o), "page" == i[r] && (t = i[++r].split("-")[0])
            }
            return {
                id: e,
                pn: t
            }
        },
        na = function(e, t) {
            var n = location.hash;
            if (Rn != n) {
                Rn = n;
                var o = ta(),
                    i = decodeURI(o.pn);
                i && (t ? Ke = oa(isNaN(i) ? Qa(i) : Ya(i)) : isNaN(i) ? ks.gotoPageName(i, ko) : ks.gotoPageNumber(i, ko))
            }
        },
        oa = function(e) {
            return I > e ? e = I : e > L && (e = L), e - e % 2
        },
        ia = function(e) {
            if (qn != Ke && (qn = Ke, 0 != Ke || "" != Rn)) {
                var t = "page/" + e;
                o && (t = o + "/" + t), t = "#" + t, t != Rn && (location.hash = Rn = t)
            }
        },
        ra = function(t) {
            for (var n = 0; n < t.length; n++)
                if ("controlbar" == e(t[n]).attr("class")) return e(t[n]).html();
            return null
        },
        aa = function(t) {
            var n = e("#pf-controls");
            Q ? n.load(Q, "GET", sa) : t && (n.html(t), sa())
        },
        sa = function() {
            if (je = e("#pageflip-controls"), je.css("opacity", "1"), o && je.addClass(o), Ue = e("#pf-pagerin"), ca(), fa(), Re) {
                var t = e("#pf-copyright-text");
                t.css("display", "block"), t.html(Oe)
            }
        },
        ca = function(e) {
            je && je.css("z-index", _ || e ? 12 : 2)
        },
        fa = function() {
            var t = bo ? mo.c : "click";
            e("#b-first").bind(t, function(e) {
                Hr(e), ks.gotoFirstPage(ko)
            }), e("#b-prev").bind(t, function(e) {
                Hr(e), ks.gotoPrevPage(ko)
            }), e("#b-next").bind(t, function(e) {
                Hr(e), ks.gotoNextPage(ko)
            }), e("#b-last").bind(t, function(e) {
                Hr(e), ks.gotoLastPage(ko)
            }), e("#b-play").bind(t, function(e) {
                Hr(e), ks.startAutoFlip()
            }), da(e("#b-play"), R), e("#b-pause").bind(t, function(e) {
                Hr(e), ks.stopAutoFlip()
            }), co = Fo, q && (fo = document.getElementById("pf-stage"), q = fo.requestFullscreen || fo.mozRequestFullScreen || fo.webkitRequestFullScreen || fo.msRequestFullscreen ? ko : Fo), q && _e.bind("webkitfullscreenchange mozfullscreenchange fullscreenchange msfullscreenchange", rs), e("#b-fullscreen").bind(t, function(e) {
                Hr(e), ks.enterFullScreen()
            }), da(e("#b-fullscreen"), q), e("#b-fullscreenoff").bind(t, function(e) {
                Hr(e), ks.exitFullScreen()
            }), e("#b-zoomin").bind(t, function(e) {
                Hr(e), ks.zoomIn()
            }), e("#b-zoomout").bind(t, function(e) {
                Hr(e), ks.zoomOut()
            }), e("#b-twitter").bind(t, function(e) {
                Hr(e), cs()
            }), e("#b-google").bind(t, function(e) {
                Hr(e), fs()
            }), e("#b-facebook").bind(t, function(e) {
                Hr(e), us()
            }), e("#b-pinterest").bind(t, function(e) {
                Hr(e), ls()
            }), e("#b-thumbs").bind(t, function(e) {
                Hr(e), ks.showThumbnails()
            }), da(e("#b-thumbs"), j), e("#b-close").bind(t, function(e) {
                Hr(e), ks.closePageflip()
            }), je.bind(mo.b, la), e(".pf-control-bar-button").bind(mo.a, xa).bind(mo.c, xa), Ue.focus(function(t) {
                e(this).val(""), Hn = ko
            }), Ue.blur(function() {
                Hn = Fo, "" == e(this).val() && ga()
            }), e("#pf-pfpager").submit(function() {
                return pa(), Fo
            }), ts(), Wr(), ga()
        },
        ua = function(t) {
            var n = "w1000",
                o = e("#pf-controls");
            480 > t ? n = "w320" : 768 > t ? n = "w480" : 1e3 > t && (n = "w768"), o.attr("class", n)
        },
        la = function(e) {
            xt || yt || xa(e)
        },
        pa = function() {
            var e = Ue.val();
            console.log("Exec " + e), (isNaN(e) ? ks.gotoPageName(e, we) : ks.gotoPageNumber(e, we)) || ga(), Ue.blur()
        },
        ga = function() {
            if (je) {
                var t = zt[Ke],
                    o = t.i,
                    i = t.h,
                    r = zt[Ke + 1],
                    a = r.i,
                    s = r.h,
                    c = o ? o : i > 0 ? i : n,
                    f = a ? a : s > 0 ? s : n,
                    u = c > 0 && f > 0 && !o && !a ? 1 : 0,
                    l = me.split("~")[u].split("#"),
                    p = "",
                    g = "";
                c || (c = f, o = a, f = n), f ? (p = o && a ? c + " - " + f : o ? c + " - " + l[0] + f + l[1] : a ? l[0] + c + l[1] + " - " + f : l[0] + c + l[1] + f + l[2], g = c + "-" + f) : c && (p = o ? c : l[0] + c + l[1], g = c), g = encodeURI(g), Ue.val(p);
                var d = Ke > I + 1 && !mt,
                    h = L - 1 > Ke && !mt;
                da(e("#b-first"), d), da(e("#b-prev"), N || d), da(e("#b-next"), N || h), da(e("#b-last"), h), Le && ia(g)
            }
        },
        da = function(e, t) {
            t == n && (t = ko), t ? e.removeClass("pf-disabled") : ha(e)
        },
        ha = function(e) {
            e.addClass("pf-disabled")
        },
        va = function() {
            var t = "pageflip-thumbnails",
                i = "pf-thumbnail-container";
            Me.after(Pr(Z ? "pf-hidden" : n, t, Pr(n, i))), Mn = e("#" + t), o && Mn.addClass(o), Dn = e("#" + i), Dn.css("width", We * G * 1.5), Bn = [], Nn = [], En = [], Xn = [], Zn = 0, Un = 0, Kn = 0;
            for (var r, a, t, s = "pf-thumbnail", c = "-", f = "page", u = "spread", l = "button", p = s + c + f, g = s + c + u, d = s + c + l, h = "#" + s, v = 0; We >= v; v += 2) r = zt[v].c ? v : -1, a = zt[v + 1].c ? v + 1 : -1, 0 > r && a >= 0 && (r = a, a = -1), r >= 0 && a >= 0 ? (Dn.append(Pr(g, n, Pr(d, s + r + l) + Pr(d, s + a + l))), ma(r), t = e(h + r + l).position().left, Bn.push(t + G), Nn.push(v), En.push(2 * G), ma(a), U && Xn.push([r, a])) : r >= 0 && (Dn.append(Pr(p, n, Pr(d, s + r + l))), ma(r), t = e(h + r + l).position().left, Bn.push(t + G / 2), Nn.push(v), En.push(G), U && Xn.push([r]));
            Bn.length ? (Zn = t + G * (zt[We].k ? 1 : 2) + w, Dn.css("width", Zn + 20), ba(), Gn = Fo, eo = 0, Dn.bind(mo.a, ya).bind(mo.c, ka).bind(mo.b, Fa).css("height", V + 16), bo || Dn.bind("mouseleave", Pa), Qn = Z, $a()) : (j = Fo, Mn.remove())
        },
        ba = function(e) {
            j && Mn.css("z-index", K || e ? 11 : 1)
        },
        ma = function(t) {
            var n = {
                width: G,
                height: V,
                "background-size": +G + "px " + V + "px"
            };
            U || (n.background = "url(" + zt[t].c + ")"), e("#pf-thumbnail" + t + "button").attr("data-page", t).attr("title", "Page " + zt[t].h).css(n).bind(bo ? mo.c : "click", wa)
        },
        wa = function(t) {
            if (!no && !Qn && !st) {
                var n = e("#" + t.currentTarget.id).data().page;
                oo = ko, ks.gotoPage(n, ko), xa(t)
            }
        },
        xa = function(e) {
            yt || xt || (Hr(e), e.stopPropagation())
        },
        ya = function(e) {
            Ia(Oa(e)), xa(e)
        },
        Fa = function(e) {
            !Qn || !W || yt || xt || On ? $a() : Sa(), Vn && (Gn = ko, no = ko, Un = Ra(Jn + Oa(e))), xa(e)
        },
        ka = function(e) {
            La(), xa(e)
        },
        Pa = function(e) {
            La(), !Qn && W && Ta()
        },
        $a = function(e) {
            if (!W) return Fo;
            var t = Mi();
            return e != n ? t - Yn > e : void(Yn = t)
        },
        Ta = function() {
            Kn == Un && (Qn = ko, Mn.addClass("pf-hidden"))
        },
        Sa = function() {
            $a(), Qn = Fo, Mn.removeClass("pf-hidden")
        },
        za = function() {
            Qn || ($a(W) && Ta(), Kn != Un && Aa())
        },
        Ca = function(e) {
            if (oo) return void(oo = Fo);
            var t, o = Co(u / 2),
                i = Bn.length - 1,
                r = Nn.lastIndexOf(Ke);
            if (J ? (jn = o - Bn[0], _n = o - Bn[i]) : (jn = o - Bn[0] - o + En[0] / 2, _n = o - Bn[i] + o - En[i] / 2, _n > jn && (jn = _n = Co(jn + _n / 2))), 0 > r) {
                if (!e) return;
                t = 0
            } else t = Bn[r];
            Un = Ra(o - t), (!Kn == n || Qn || e) && (Kn = Un + .5)
        },
        Aa = function() {
            if (Kn != Un && (Gn ? (eo = Un - to, to = Un) : 0 != eo && (eo *= .9, zo(eo) < 1 ? eo = 0 : Un = Ra(Un + eo)), Kn += (Un - Kn) / 5, zo(Un - Kn) < 1 && (Kn = Un, eo = 0), Dn.css("transform", Rr(Kn, 0)), U && !(zo(Kn - Wn) < 32))) {
                Wn = Kn;
                for (var t = -G - 32, n = u + G + 32, o = Xn.length, i = 0; o > i && Bn[i] + Kn < t;) i++;
                for (; o > i && Bn[i] + Kn < n;) {
                    if (Xn[i]) {
                        for (var r, a = 0; a < Xn[i].length; a++) r = Xn[i][a], e("#pf-thumbnail" + r + "button").css({
                            "background-image": "url(" + zt[r].c + ")"
                        });
                        Xn[i] = null
                    }
                    i++
                }
            }
        },
        Ia = function(e) {
            Vn = ko, Gn = Fo, no = Fo, to = Un, Jn = Un - e
        },
        La = function() {
            no = Gn, Gn = Vn = Fo
        },
        Oa = function(e) {
            return bo && (e = e.originalEvent.changedTouches[0]), e.pageX
        },
        Ra = function(e) {
            return e = Io(e), _n > e ? e = _n : e > jn && (e = jn), e
        },
        qa = function(e, t, n) {
            var o = Fo;
            if (I > e || e > L) return o;
            if (!st && 0 == uo.length && (e -= e % 2, e != Ke))
                if (o = ko, n) Ke = e, zi();
                else {
                    var i = e - Ke;
                    if (t)(e == We - 1 && 0 != Ke || 0 == e && Ke != We - 1) && (p || tt) && zo(i) > 2 ? 0 > i ? (as(0, i + 2), as(200, -2)) : (as(0, i - 2), as(200, 2)) : (Ke == We - 1 && 0 != e || 0 == Ke && e != We - 1) && (p || tt) && zo(i) > 2 ? 0 > i ? (as(0, -2), as(200, i + 2)) : (as(0, 2), as(200, i - 2)) : as(0, i);
                    else {
                        var r, a = 999;
                        0 > i ? (r = -1, i *= -1) : r = 1, i /= 2, a > i && (a = i);
                        for (var s = 0, c = 0, f = i / a, u = 0; a > u; u++) s = Io(f * (u + 1)), as(u ? ge / 4 : 0, 2 * (s - c) * r), c = s
                    }
                }
            return o
        },
        Ha = function(e, t) {
            qa(Ya(e), t)
        },
        Ba = function(e, t) {
            qa(Qa(e), t)
        },
        Na = function(e, t) {
            qa(_a(e), t)
        },
        Ea = function(e) {
            Za() && qa(X && !e ? L : I, ko)
        },
        Xa = function(e) {
            return Za() ? N && (!X || e ? I + 1 > Ke : Ke > L - 2) ? Da(e) : Zi(X && !e ? 1 : -1, Ne && !X ? 1 : 0, 2) : void 0
        },
        Ma = function(e) {
            return Za() ? N && (X && !e ? I + 1 > Ke : Ke > L - 2) ? Ea(e) : Zi(X && !e ? -1 : 1, Ne && X ? 1 : 0, 2) : void 0
        },
        Da = function(e) {
            Za() && qa(X && !e ? I : L, ko)
        },
        Ya = function(e) {
            return e > 0 ? io.lastIndexOf(parseInt(e)) : -1
        },
        Qa = function(e) {
            return ro.lastIndexOf(e.toLowerCase())
        },
        _a = function(e) {
            return ao.lastIndexOf(e)
        },
        ja = function() {
            io = [], ro = [], ao = [];
            for (var e = 0; We >= e; e++) io[e] = zt[e].h, ro[e] = zt[e].i ? zt[e].i.toLowerCase() : n, ao[e] = zt[e].j
        },
        Ua = function(e, t) {
            return t ? void(zt[e].v = t) : zt[e].v
        },
        Ka = function() {
            return !(mt || xt || yt || en)
        },
        Wa = function(e, t) {
            e == n && (e = 0), t == n && (t = We), I = X ? We - t : e, L = X ? We - e : t, 0 > I && (I = 0), L > We && (L = We), I -= I % 2, L += 1 - L % 2
        },
        Za = function() {
            return !(mn && !ke)
        },
        Ga = function() {
            var e = zt[Ke].x || zt[Ke + 1].x;
            e = e == n ? H : e, so = t.setTimeout(es, e)
        },
        Va = function(e) {
            e == n && (e = ko), mt || (mt = ko, e ? es() : Ga())
        },
        Ja = function() {
            mt && (mt = Fo, t.clearTimeout(so), st || ga())
        },
        es = function() {
            return !Ma(Fo) && (0 != B && Ea(), 1 > B) ? void ks.stopAutoFlip() : void Ga()
        },
        ts = function() {
            je && (e("#b-pause").css("display", mt ? "" : "none"), e("#b-play").css("display", mt ? "none" : ""))
        },
        ns = function() {
            fo.requestFullscreen ? fo.requestFullscreen() : fo.mozRequestFullScreen ? fo.mozRequestFullScreen() : fo.webkitRequestFullScreen ? fo.webkitRequestFullScreen() : fo.msRequestFullscreen && fo.msRequestFullscreen()
        },
        os = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
        },
        is = function() {
            q && (e("#b-fullscreen").css("display", co ? "none" : ""), e("#b-fullscreenoff").css("display", co ? "" : "none"))
        },
        rs = function(e) {
            co = !co, is(), Mr()
        },
        as = function(e, t) {
            var o = {
                c: e,
                b: t,
                a: n
            };
            uo.push(o)
        },
        ss = function() {
            var e = Mi(),
                t = uo[0];
            t.a || (t.a = Mi()), t.c < e - t.a && Zi(t.b < 0 ? -1 : 1, 0, zo(t.b)) && uo.splice(0, 1)
        },
        cs = function() {
            ps("https://twitter.com/intent/tweet?original_referer=" + ds() + "&url=" + ds() + (Ce ? "&text=" + gs(Ce) + (Ae ? gs(" via " + Ae) : "") : ""))
        },
        fs = function() {
            ps("https://plus.google.com/share?url=" + ds() + "&gpsrc=frameless&partnerid=frameless")
        },
        us = function() {
            ps("https://www.facebook.com/sharer/sharer.php?u=" + ds())
        },
        ls = function() {
            Ie || (Ie = "http://pageflip-books.com/images/shareimage.jpg"), ps("http://pinterest.com/pin/create/button/?url=" + ds() + "&media=" + gs(Ie) + (Ce ? "&description=" + gs(Ce) : ""))
        },
        ps = function(e) {
            t.open(e, "_blank")
        },
        gs = function(e) {
            return encodeURIComponent(e)
        },
        ds = function() {
            return gs(ze ? ze : t.location.href)
        },
        hs = function(e) {
            go = e, vo = o ? o : "Untitled", ho = "Pageflip5 - " + vo, po = [], lo = Mi(), ws()
        },
        vs = function() {
            var e = Mi() - lo;
            switch (go) {
                case 0:
                    break;
                case 1:
                    _gaq.push(["_trackEvent", ho, "Book time", vo, e, !0]);
                    break;
                case 2:
            }
        },
        bs = function(e) {
            po[e] = Mi()
        },
        ms = function(e) {
            var t = Mi() - po[e];
            switch (go) {
                case 0:
                    break;
                case 1:
                    _gaq.push(["_trackEvent", ho, "Page " + e + " Time", vo, t, !0]);
                    break;
                case 2:
            }
        },
        ws = function() {
            switch (go) {
                case 0:
                    break;
                case 1:
                    _gaq.push(["_trackEvent", ho, "Book Opened", vo, 0, !0]);
                    break;
                case 2:
            }
        },
        xs = function(e) {
            switch (go) {
                case 0:
                    break;
                case 1:
                    _gaq.push(["_trackEvent", ho, "Page " + e + " View", vo, 0, !0]);
                    break;
                case 2:
            }
        },
        ys = ["onFlip", "onFlipEnd", "onTop", "onTopEnd", "onLoad", "onUnload", "onRemove", "onHide", "onShow", "onZoomIn", "onZoomOut"],
        Fs = function(e, t) {
            if (at) {
                var n = at[ys[e]];
                n && n(t)
            }
            go && (2 == e ? (xs(t), bs(t)) : 3 == e && ms(t))
        },
        ks = {
            gotoPage: function(e, t) {
                return Ka() ? qa(e, t) : void 0
            },
            gotoPageNumber: function(e, t) {
                return Ka() ? Ha(e, t) : void 0
            },
            gotoPageName: function(e, t) {
                return Ka() ? Ba(e, t) : void 0
            },
            gotoPageLabel: function(e, t) {
                return Ka() ? Na(e, t) : void 0
            },
            gotoFirstPage: function(e) {
                Ka() && Ea(e)
            },
            gotoPrevPage: function(e) {
                Ka() && Xa(e)
            },
            gotoNextPage: function(e) {
                Ka() && Ma(e)
            },
            gotoLastPage: function(e) {
                Ka() && Da(e)
            },
            startAutoFlip: function(e) {
                Ka() && R && (Va(e), ts())
            },
            stopAutoFlip: function() {
                mt && (Ja(), ts())
            },
            toggleAutoFlip: function() {
                mt ? ks.stopAutoFlip() : ks.startAutoFlip()
            },
            setPFEventCallBack: function(e) {
                at = e
            },
            closePageflip: function(e) {
                Xr(e)
            },
            getID: function() {
                return o
            },
            getPN: function() {
                return Ke
            },
            getPageNumber: function(e) {
                return zt[e ? e : Ke].h
            },
            getPageName: function(e) {
                return zt[e ? e : Ke].i
            },
            getPageLabel: function(e) {
                return zt[e ? e : Ke].j
            },
            showThumbnails: function() {
                j && (Qn ? Sa() : Ta())
            },
            hideThumbnails: function() {
                j && Ta()
            },
            zoomIn: function() {
                ye && (jr(), Wr())
            },
            zoomOut: function() {
                Ur(), Wr()
            },
            toggleZoom: function() {
                mn ? ks.zoomOut() : ks.zoomIn()
            },
            hotKeys: function(e) {
                $e = e
            },
            mouseControl: function(e) {
                Te = e
            },
            pageLimit: function(e, t) {
                Wa(e, t)
            },
            data: function(e, t) {
                return Ua(e, t)
            },
            enterFullScreen: function() {
                return ns()
            },
            exitFullScreen: function() {
                return os()
            },
            addPage: function(t, n, o) {
                fi(e(t), n, o)
            },
            reloadPage: function(e) {},
            removePage: function(e, t, n) {
                ui(e, t, n)
            }
        },
        Ps = function(e, t) {
            return e == n ? ks : Ee ? ks[e](t) : []
        };
    e.extend(e.fn, {
        pageflipInit: Br,
        pageflip: Ps
    })
}(jQuery, this);