let e,
  t,
  r,
  i,
  s,
  n,
  a,
  o,
  l,
  h,
  u,
  d,
  c,
  p,
  f,
  m,
  g,
  y,
  _,
  x,
  v,
  b,
  E,
  T,
  A,
  w,
  S,
  R,
  I,
  C,
  P,
  k,
  M,
  D,
  B,
  O,
  F,
  L;
var N = globalThis;
function U(e) {
  return e && e.__esModule ? e.default : e;
}
function G(e, t, r, i) {
  Object.defineProperty(e, t, {
    get: r,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
var H = {},
  z = {},
  j = N.parcelRequire0da3;
null == j &&
  (((j = function (e) {
    if (e in H) return H[e].exports;
    if (e in z) {
      var t = z[e];
      delete z[e];
      var r = { id: e, exports: {} };
      return (H[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var i = Error("Cannot find module '" + e + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (e, t) {
    z[e] = t;
  }),
  (N.parcelRequire0da3 = j));
var $ = j.register;
$("biuEp", function (e, t) {
  var r = j("dBHwk");
  function i() {
    (this.protocol = null),
      (this.slashes = null),
      (this.auth = null),
      (this.host = null),
      (this.port = null),
      (this.hostname = null),
      (this.hash = null),
      (this.search = null),
      (this.query = null),
      (this.pathname = null),
      (this.path = null),
      (this.href = null);
  }
  var s = /^([a-z0-9.+-]+:)/i,
    n = /:[0-9]*$/,
    a = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    o = ["'"].concat(
      ["{", "}", "|", "\\", "^", "`"].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "	",
      ])
    ),
    l = ["%", "/", "?", ";", "#"].concat(o),
    h = ["/", "?", "#"],
    u = /^[+a-z0-9A-Z_-]{0,63}$/,
    d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    c = { javascript: !0, "javascript:": !0 },
    p = { javascript: !0, "javascript:": !0 },
    f = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0,
    },
    m = j("2rasJ");
  function g(e, t, r) {
    if (e && "object" == typeof e && e instanceof i) return e;
    var s = new i();
    return s.parse(e, t, r), s;
  }
  (i.prototype.parse = function (e, t, i) {
    if ("string" != typeof e)
      throw TypeError("Parameter 'url' must be a string, not " + typeof e);
    var n = e.indexOf("?"),
      g = -1 !== n && n < e.indexOf("#") ? "?" : "#",
      y = e.split(g);
    y[0] = y[0].replace(/\\/g, "/");
    var _ = (e = y.join(g));
    if (((_ = _.trim()), !i && 1 === e.split("#").length)) {
      var x = a.exec(_);
      if (x)
        return (
          (this.path = _),
          (this.href = _),
          (this.pathname = x[1]),
          x[2]
            ? ((this.search = x[2]),
              t
                ? (this.query = m.parse(this.search.substr(1)))
                : (this.query = this.search.substr(1)))
            : t && ((this.search = ""), (this.query = {})),
          this
        );
    }
    var v = s.exec(_);
    if (v) {
      var b = (v = v[0]).toLowerCase();
      (this.protocol = b), (_ = _.substr(v.length));
    }
    if (i || v || _.match(/^\/\/[^@/]+@[^@/]+/)) {
      var E = "//" === _.substr(0, 2);
      E && !(v && p[v]) && ((_ = _.substr(2)), (this.slashes = !0));
    }
    if (!p[v] && (E || (v && !f[v]))) {
      for (var T, A, w = -1, S = 0; S < h.length; S++) {
        var R = _.indexOf(h[S]);
        -1 !== R && (-1 === w || R < w) && (w = R);
      }
      -1 !== (A = -1 === w ? _.lastIndexOf("@") : _.lastIndexOf("@", w)) &&
        ((T = _.slice(0, A)),
        (_ = _.slice(A + 1)),
        (this.auth = decodeURIComponent(T))),
        (w = -1);
      for (var S = 0; S < l.length; S++) {
        var R = _.indexOf(l[S]);
        -1 !== R && (-1 === w || R < w) && (w = R);
      }
      -1 === w && (w = _.length),
        (this.host = _.slice(0, w)),
        (_ = _.slice(w)),
        this.parseHost(),
        (this.hostname = this.hostname || "");
      var I =
        "[" === this.hostname[0] &&
        "]" === this.hostname[this.hostname.length - 1];
      if (!I)
        for (
          var C = this.hostname.split(/\./), S = 0, P = C.length;
          S < P;
          S++
        ) {
          var k = C[S];
          if (k && !k.match(u)) {
            for (var M = "", D = 0, B = k.length; D < B; D++)
              k.charCodeAt(D) > 127 ? (M += "x") : (M += k[D]);
            if (!M.match(u)) {
              var O = C.slice(0, S),
                F = C.slice(S + 1),
                L = k.match(d);
              L && (O.push(L[1]), F.unshift(L[2])),
                F.length && (_ = "/" + F.join(".") + _),
                (this.hostname = O.join("."));
              break;
            }
          }
        }
      this.hostname.length > 255
        ? (this.hostname = "")
        : (this.hostname = this.hostname.toLowerCase()),
        I || (this.hostname = r.toASCII(this.hostname));
      var N = this.port ? ":" + this.port : "",
        U = this.hostname || "";
      (this.host = U + N),
        (this.href += this.host),
        I &&
          ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)),
          "/" !== _[0] && (_ = "/" + _));
    }
    if (!c[b])
      for (var S = 0, P = o.length; S < P; S++) {
        var G = o[S];
        if (-1 !== _.indexOf(G)) {
          var H = encodeURIComponent(G);
          H === G && (H = escape(G)), (_ = _.split(G).join(H));
        }
      }
    var z = _.indexOf("#");
    -1 !== z && ((this.hash = _.substr(z)), (_ = _.slice(0, z)));
    var j = _.indexOf("?");
    if (
      (-1 !== j
        ? ((this.search = _.substr(j)),
          (this.query = _.substr(j + 1)),
          t && (this.query = m.parse(this.query)),
          (_ = _.slice(0, j)))
        : t && ((this.search = ""), (this.query = {})),
      _ && (this.pathname = _),
      f[b] && this.hostname && !this.pathname && (this.pathname = "/"),
      this.pathname || this.search)
    ) {
      var N = this.pathname || "",
        $ = this.search || "";
      this.path = N + $;
    }
    return (this.href = this.format()), this;
  }),
    (i.prototype.format = function () {
      var e = this.auth || "";
      e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
      var t = this.protocol || "",
        r = this.pathname || "",
        i = this.hash || "",
        s = !1,
        n = "";
      this.host
        ? (s = e + this.host)
        : this.hostname &&
          ((s =
            e +
            (-1 === this.hostname.indexOf(":")
              ? this.hostname
              : "[" + this.hostname + "]")),
          this.port && (s += ":" + this.port)),
        this.query &&
          "object" == typeof this.query &&
          Object.keys(this.query).length &&
          (n = m.stringify(this.query, {
            arrayFormat: "repeat",
            addQueryPrefix: !1,
          }));
      var a = this.search || (n && "?" + n) || "";
      return (
        t && ":" !== t.substr(-1) && (t += ":"),
        this.slashes || ((!t || f[t]) && !1 !== s)
          ? ((s = "//" + (s || "")), r && "/" !== r.charAt(0) && (r = "/" + r))
          : s || (s = ""),
        i && "#" !== i.charAt(0) && (i = "#" + i),
        a && "?" !== a.charAt(0) && (a = "?" + a),
        t +
          s +
          (r = r.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e);
          })) +
          (a = a.replace("#", "%23")) +
          i
      );
    }),
    (i.prototype.resolve = function (e) {
      return this.resolveObject(g(e, !1, !0)).format();
    }),
    (i.prototype.resolveObject = function (e) {
      if ("string" == typeof e) {
        var t = new i();
        t.parse(e, !1, !0), (e = t);
      }
      for (var r = new i(), s = Object.keys(this), n = 0; n < s.length; n++) {
        var a = s[n];
        r[a] = this[a];
      }
      if (((r.hash = e.hash), "" === e.href)) return (r.href = r.format()), r;
      if (e.slashes && !e.protocol) {
        for (var o = Object.keys(e), l = 0; l < o.length; l++) {
          var h = o[l];
          "protocol" !== h && (r[h] = e[h]);
        }
        return (
          f[r.protocol] &&
            r.hostname &&
            !r.pathname &&
            ((r.pathname = "/"), (r.path = r.pathname)),
          (r.href = r.format()),
          r
        );
      }
      if (e.protocol && e.protocol !== r.protocol) {
        if (!f[e.protocol]) {
          for (var u = Object.keys(e), d = 0; d < u.length; d++) {
            var c = u[d];
            r[c] = e[c];
          }
          return (r.href = r.format()), r;
        }
        if (((r.protocol = e.protocol), e.host || p[e.protocol]))
          r.pathname = e.pathname;
        else {
          for (
            var m = (e.pathname || "").split("/");
            m.length && !(e.host = m.shift());

          );
          e.host || (e.host = ""),
            e.hostname || (e.hostname = ""),
            "" !== m[0] && m.unshift(""),
            m.length < 2 && m.unshift(""),
            (r.pathname = m.join("/"));
        }
        if (
          ((r.search = e.search),
          (r.query = e.query),
          (r.host = e.host || ""),
          (r.auth = e.auth),
          (r.hostname = e.hostname || e.host),
          (r.port = e.port),
          r.pathname || r.search)
        ) {
          var g = r.pathname || "",
            y = r.search || "";
          r.path = g + y;
        }
        return (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r;
      }
      var _ = r.pathname && "/" === r.pathname.charAt(0),
        x = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
        v = x || _ || (r.host && e.pathname),
        b = v,
        E = (r.pathname && r.pathname.split("/")) || [],
        m = (e.pathname && e.pathname.split("/")) || [],
        T = r.protocol && !f[r.protocol];
      if (
        (T &&
          ((r.hostname = ""),
          (r.port = null),
          r.host && ("" === E[0] ? (E[0] = r.host) : E.unshift(r.host)),
          (r.host = ""),
          e.protocol &&
            ((e.hostname = null),
            (e.port = null),
            e.host && ("" === m[0] ? (m[0] = e.host) : m.unshift(e.host)),
            (e.host = null)),
          (v = v && ("" === m[0] || "" === E[0]))),
        x)
      )
        (r.host = e.host || "" === e.host ? e.host : r.host),
          (r.hostname =
            e.hostname || "" === e.hostname ? e.hostname : r.hostname),
          (r.search = e.search),
          (r.query = e.query),
          (E = m);
      else if (m.length)
        E || (E = []),
          E.pop(),
          (E = E.concat(m)),
          (r.search = e.search),
          (r.query = e.query);
      else if (null != e.search) {
        if (T) {
          (r.host = E.shift()), (r.hostname = r.host);
          var A = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
          A &&
            ((r.auth = A.shift()),
            (r.hostname = A.shift()),
            (r.host = r.hostname));
        }
        return (
          (r.search = e.search),
          (r.query = e.query),
          (null !== r.pathname || null !== r.search) &&
            (r.path =
              (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
          (r.href = r.format()),
          r
        );
      }
      if (!E.length)
        return (
          (r.pathname = null),
          r.search ? (r.path = "/" + r.search) : (r.path = null),
          (r.href = r.format()),
          r
        );
      for (
        var w = E.slice(-1)[0],
          S =
            ((r.host || e.host || E.length > 1) && ("." === w || ".." === w)) ||
            "" === w,
          R = 0,
          I = E.length;
        I >= 0;
        I--
      )
        "." === (w = E[I])
          ? E.splice(I, 1)
          : ".." === w
          ? (E.splice(I, 1), R++)
          : R && (E.splice(I, 1), R--);
      if (!v && !b) for (; R--; R) E.unshift("..");
      v && "" !== E[0] && (!E[0] || "/" !== E[0].charAt(0)) && E.unshift(""),
        S && "/" !== E.join("/").substr(-1) && E.push("");
      var C = "" === E[0] || (E[0] && "/" === E[0].charAt(0));
      if (T) {
        (r.hostname = C ? "" : E.length ? E.shift() : ""),
          (r.host = r.hostname);
        var A = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
        A &&
          ((r.auth = A.shift()),
          (r.hostname = A.shift()),
          (r.host = r.hostname));
      }
      return (
        (v = v || (r.host && E.length)) && !C && E.unshift(""),
        E.length > 0
          ? (r.pathname = E.join("/"))
          : ((r.pathname = null), (r.path = null)),
        (null !== r.pathname || null !== r.search) &&
          (r.path =
            (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
        (r.auth = e.auth || r.auth),
        (r.slashes = r.slashes || e.slashes),
        (r.href = r.format()),
        r
      );
    }),
    (i.prototype.parseHost = function () {
      var e = this.host,
        t = n.exec(e);
      t &&
        (":" !== (t = t[0]) && (this.port = t.substr(1)),
        (e = e.substr(0, e.length - t.length))),
        e && (this.hostname = e);
    }),
    (t.parse = g),
    (t.resolve = function (e, t) {
      return g(e, !1, !0).resolve(t);
    }),
    (t.resolveObject = function (e, t) {
      return e ? g(e, !1, !0).resolveObject(t) : t;
    }),
    (t.format = function (e) {
      return ("string" == typeof e && (e = g(e)), e instanceof i)
        ? e.format()
        : i.prototype.format.call(e);
    }),
    (t.Url = i);
}),
  $("dBHwk", function (e, t) {
    !(function (r) {
      var i = t && !t.nodeType && t,
        s = e && !e.nodeType && e,
        n = "object" == typeof N && N;
      (n.global === n || n.window === n || n.self === n) && (r = n);
      var a,
        o,
        l = /^xn--/,
        h = /[^\x20-\x7E]/,
        u = /[\x2E\u3002\uFF0E\uFF61]/g,
        d = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input",
        },
        c = Math.floor,
        p = String.fromCharCode;
      function f(e) {
        throw RangeError(d[e]);
      }
      function m(e, t) {
        for (var r = e.length, i = []; r--; ) i[r] = t(e[r]);
        return i;
      }
      function g(e, t) {
        var r = e.split("@"),
          i = "";
        return (
          r.length > 1 && ((i = r[0] + "@"), (e = r[1])),
          i + m((e = e.replace(u, ".")).split("."), t).join(".")
        );
      }
      function y(e) {
        for (var t, r, i = [], s = 0, n = e.length; s < n; )
          (t = e.charCodeAt(s++)) >= 55296 && t <= 56319 && s < n
            ? (64512 & (r = e.charCodeAt(s++))) == 56320
              ? i.push(((1023 & t) << 10) + (1023 & r) + 65536)
              : (i.push(t), s--)
            : i.push(t);
        return i;
      }
      function _(e) {
        return m(e, function (e) {
          var t = "";
          return (
            e > 65535 &&
              ((e -= 65536),
              (t += p(((e >>> 10) & 1023) | 55296)),
              (e = 56320 | (1023 & e))),
            (t += p(e))
          );
        }).join("");
      }
      function x(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
      }
      function v(e, t, r) {
        var i = 0;
        for (e = r ? c(e / 700) : e >> 1, e += c(e / t); e > 455; i += 36)
          e = c(e / 35);
        return c(i + (36 * e) / (e + 38));
      }
      function b(e) {
        var t,
          r,
          i,
          s,
          n,
          a,
          o,
          l,
          h,
          u,
          d,
          p = [],
          m = e.length,
          g = 0,
          y = 128,
          x = 72;
        for ((i = e.lastIndexOf("-")) < 0 && (i = 0), s = 0; s < i; ++s)
          e.charCodeAt(s) >= 128 && f("not-basic"), p.push(e.charCodeAt(s));
        for (n = i > 0 ? i + 1 : 0; n < m; ) {
          for (
            a = g, o = 1, l = 36;
            n >= m && f("invalid-input"),
              ((h =
                (t = e.charCodeAt(n++)) - 48 < 10
                  ? t - 22
                  : t - 65 < 26
                  ? t - 65
                  : t - 97 < 26
                  ? t - 97
                  : 36) >= 36 ||
                h > c((2147483647 - g) / o)) &&
                f("overflow"),
              (g += h * o),
              !(h < (u = l <= x ? 1 : l >= x + 26 ? 26 : l - x));
            l += 36
          )
            o > c(2147483647 / (d = 36 - u)) && f("overflow"), (o *= d);
          (x = v(g - a, (r = p.length + 1), 0 == a)),
            c(g / r) > 2147483647 - y && f("overflow"),
            (y += c(g / r)),
            (g %= r),
            p.splice(g++, 0, y);
        }
        return _(p);
      }
      function E(e) {
        var t,
          r,
          i,
          s,
          n,
          a,
          o,
          l,
          h,
          u,
          d,
          m,
          g,
          _,
          b,
          E = [];
        for (a = 0, m = (e = y(e)).length, t = 128, r = 0, n = 72; a < m; ++a)
          (d = e[a]) < 128 && E.push(p(d));
        for (i = s = E.length, s && E.push("-"); i < m; ) {
          for (o = 2147483647, a = 0; a < m; ++a)
            (d = e[a]) >= t && d < o && (o = d);
          for (
            o - t > c((2147483647 - r) / (g = i + 1)) && f("overflow"),
              r += (o - t) * g,
              t = o,
              a = 0;
            a < m;
            ++a
          )
            if (((d = e[a]) < t && ++r > 2147483647 && f("overflow"), d == t)) {
              for (
                l = r, h = 36;
                !(l < (u = h <= n ? 1 : h >= n + 26 ? 26 : h - n));
                h += 36
              )
                (b = l - u),
                  (_ = 36 - u),
                  E.push(p(x(u + (b % _), 0))),
                  (l = c(b / _));
              E.push(p(x(l, 0))), (n = v(r, g, i == s)), (r = 0), ++i;
            }
          ++r, ++t;
        }
        return E.join("");
      }
      if (
        ((a = {
          version: "1.4.1",
          ucs2: { decode: y, encode: _ },
          decode: b,
          encode: E,
          toASCII: function (e) {
            return g(e, function (e) {
              return h.test(e) ? "xn--" + E(e) : e;
            });
          },
          toUnicode: function (e) {
            return g(e, function (e) {
              return l.test(e) ? b(e.slice(4).toLowerCase()) : e;
            });
          },
        }),
        "function" == typeof define &&
          "object" == typeof define.amd &&
          define.amd)
      )
        define("punycode", function () {
          return a;
        });
      else if (i && s) {
        if (e.exports == i) s.exports = a;
        else for (o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
      } else r.punycode = a;
    })(this);
  }),
  $("2rasJ", function (e, t) {
    var r = j("jJyEy"),
      i = j("cfYIz"),
      s = j("i1Gbt");
    e.exports = { formats: s, parse: i, stringify: r };
  }),
  $("jJyEy", function (e, t) {
    var r = j("LlIML"),
      i = j("iBfJ5"),
      s = j("i1Gbt"),
      n = Object.prototype.hasOwnProperty,
      a = {
        brackets: function (e) {
          return e + "[]";
        },
        comma: "comma",
        indices: function (e, t) {
          return e + "[" + t + "]";
        },
        repeat: function (e) {
          return e;
        },
      },
      o = Array.isArray,
      l = Array.prototype.push,
      h = function (e, t) {
        l.apply(e, o(t) ? t : [t]);
      },
      u = Date.prototype.toISOString,
      d = s.default,
      c = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: d,
        formatter: s.formatters[d],
        indices: !1,
        serializeDate: function (e) {
          return u.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      p = {},
      f = function e(t, s, n, a, l, u, d, f, m, g, y, _, x, v, b, E) {
        for (
          var T, A, w = t, S = E, R = 0, I = !1;
          void 0 !== (S = S.get(p)) && !I;

        ) {
          var C = S.get(t);
          if (((R += 1), void 0 !== C)) {
            if (C === R) throw RangeError("Cyclic object value");
            I = !0;
          }
          void 0 === S.get(p) && (R = 0);
        }
        if (
          ("function" == typeof f
            ? (w = f(s, w))
            : w instanceof Date
            ? (w = y(w))
            : "comma" === n &&
              o(w) &&
              (w = i.maybeMap(w, function (e) {
                return e instanceof Date ? y(e) : e;
              })),
          null === w)
        ) {
          if (l) return d && !v ? d(s, c.encoder, b, "key", _) : s;
          w = "";
        }
        if (
          "string" == typeof (T = w) ||
          "number" == typeof T ||
          "boolean" == typeof T ||
          "symbol" == typeof T ||
          "bigint" == typeof T ||
          i.isBuffer(w)
        )
          return d
            ? [
                x(v ? s : d(s, c.encoder, b, "key", _)) +
                  "=" +
                  x(d(w, c.encoder, b, "value", _)),
              ]
            : [x(s) + "=" + x(String(w))];
        var P = [];
        if (void 0 === w) return P;
        if ("comma" === n && o(w))
          v && d && (w = i.maybeMap(w, d)),
            (A = [{ value: w.length > 0 ? w.join(",") || null : void 0 }]);
        else if (o(f)) A = f;
        else {
          var k = Object.keys(w);
          A = m ? k.sort(m) : k;
        }
        for (
          var M = a && o(w) && 1 === w.length ? s + "[]" : s, D = 0;
          D < A.length;
          ++D
        ) {
          var B = A[D],
            O = "object" == typeof B && void 0 !== B.value ? B.value : w[B];
          if (!u || null !== O) {
            var F = o(w)
              ? "function" == typeof n
                ? n(M, B)
                : M
              : M + (g ? "." + B : "[" + B + "]");
            E.set(t, R);
            var L = r();
            L.set(p, E),
              h(
                P,
                e(
                  O,
                  F,
                  n,
                  a,
                  l,
                  u,
                  "comma" === n && v && o(w) ? null : d,
                  f,
                  m,
                  g,
                  y,
                  _,
                  x,
                  v,
                  b,
                  L
                )
              );
          }
        }
        return P;
      },
      m = function (e) {
        if (!e) return c;
        if (
          null !== e.encoder &&
          void 0 !== e.encoder &&
          "function" != typeof e.encoder
        )
          throw TypeError("Encoder has to be a function.");
        var t = e.charset || c.charset;
        if (
          void 0 !== e.charset &&
          "utf-8" !== e.charset &&
          "iso-8859-1" !== e.charset
        )
          throw TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var r = s.default;
        if (void 0 !== e.format) {
          if (!n.call(s.formatters, e.format))
            throw TypeError("Unknown format option provided.");
          r = e.format;
        }
        var i = s.formatters[r],
          a = c.filter;
        return (
          ("function" == typeof e.filter || o(e.filter)) && (a = e.filter),
          {
            addQueryPrefix:
              "boolean" == typeof e.addQueryPrefix
                ? e.addQueryPrefix
                : c.addQueryPrefix,
            allowDots: void 0 === e.allowDots ? c.allowDots : !!e.allowDots,
            charset: t,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : c.charsetSentinel,
            delimiter: void 0 === e.delimiter ? c.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : c.encode,
            encoder: "function" == typeof e.encoder ? e.encoder : c.encoder,
            encodeValuesOnly:
              "boolean" == typeof e.encodeValuesOnly
                ? e.encodeValuesOnly
                : c.encodeValuesOnly,
            filter: a,
            format: r,
            formatter: i,
            serializeDate:
              "function" == typeof e.serializeDate
                ? e.serializeDate
                : c.serializeDate,
            skipNulls:
              "boolean" == typeof e.skipNulls ? e.skipNulls : c.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : c.strictNullHandling,
          }
        );
      };
    e.exports = function (e, t) {
      var i,
        s,
        n = e,
        l = m(t);
      "function" == typeof l.filter
        ? (n = (0, l.filter)("", n))
        : o(l.filter) && (i = l.filter);
      var u = [];
      if ("object" != typeof n || null === n) return "";
      s =
        t && t.arrayFormat in a
          ? t.arrayFormat
          : t && "indices" in t
          ? t.indices
            ? "indices"
            : "repeat"
          : "indices";
      var d = a[s];
      if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip)
        throw TypeError("`commaRoundTrip` must be a boolean, or absent");
      var c = "comma" === d && t && t.commaRoundTrip;
      i || (i = Object.keys(n)), l.sort && i.sort(l.sort);
      for (var p = r(), g = 0; g < i.length; ++g) {
        var y = i[g];
        (l.skipNulls && null === n[y]) ||
          h(
            u,
            f(
              n[y],
              y,
              d,
              c,
              l.strictNullHandling,
              l.skipNulls,
              l.encode ? l.encoder : null,
              l.filter,
              l.sort,
              l.allowDots,
              l.serializeDate,
              l.format,
              l.formatter,
              l.encodeValuesOnly,
              l.charset,
              p
            )
          );
      }
      var _ = u.join(l.delimiter),
        x = !0 === l.addQueryPrefix ? "?" : "";
      return (
        l.charsetSentinel &&
          ("iso-8859-1" === l.charset
            ? (x += "utf8=%26%2310003%3B&")
            : (x += "utf8=%E2%9C%93&")),
        _.length > 0 ? x + _ : ""
      );
    };
  }),
  $("LlIML", function (e, t) {
    var r = j("1zENl"),
      i = j("hXu6F"),
      s = j("e7DLx"),
      n = r("%TypeError%"),
      a = r("%WeakMap%", !0),
      o = r("%Map%", !0),
      l = i("WeakMap.prototype.get", !0),
      h = i("WeakMap.prototype.set", !0),
      u = i("WeakMap.prototype.has", !0),
      d = i("Map.prototype.get", !0),
      c = i("Map.prototype.set", !0),
      p = i("Map.prototype.has", !0),
      f = function (e, t) {
        for (var r, i = e; null !== (r = i.next); i = r)
          if (r.key === t)
            return (i.next = r.next), (r.next = e.next), (e.next = r), r;
      },
      m = function (e, t) {
        var r = f(e, t);
        return r && r.value;
      },
      g = function (e, t, r) {
        var i = f(e, t);
        i ? (i.value = r) : (e.next = { key: t, next: e.next, value: r });
      };
    e.exports = function () {
      var e,
        t,
        r,
        i = {
          assert: function (e) {
            if (!i.has(e)) throw new n("Side channel does not contain " + s(e));
          },
          get: function (i) {
            if (a && i && ("object" == typeof i || "function" == typeof i)) {
              if (e) return l(e, i);
            } else if (o) {
              if (t) return d(t, i);
            } else if (r) return m(r, i);
          },
          has: function (i) {
            if (a && i && ("object" == typeof i || "function" == typeof i)) {
              if (e) return u(e, i);
            } else if (o) {
              if (t) return p(t, i);
            } else if (r) return !!f(r, i);
            return !1;
          },
          set: function (i, s) {
            a && i && ("object" == typeof i || "function" == typeof i)
              ? (e || (e = new a()), h(e, i, s))
              : o
              ? (t || (t = new o()), c(t, i, s))
              : (r || (r = { key: {}, next: null }), g(r, i, s));
          },
        };
      return i;
    };
  }),
  $("1zENl", function (e, t) {
    var r = SyntaxError,
      i = Function,
      s = TypeError,
      n = function (e) {
        try {
          return i('"use strict"; return (' + e + ").constructor;")();
        } catch (e) {}
      },
      a = Object.getOwnPropertyDescriptor;
    if (a)
      try {
        a({}, "");
      } catch (e) {
        a = null;
      }
    var o = function () {
        throw new s();
      },
      l = a
        ? (function () {
            try {
              return arguments.callee, o;
            } catch (e) {
              try {
                return a(arguments, "callee").get;
              } catch (e) {
                return o;
              }
            }
          })()
        : o,
      h = j("24qIq")(),
      u = j("dSRh6")(),
      d =
        Object.getPrototypeOf ||
        (u
          ? function (e) {
              return e.__proto__;
            }
          : null),
      c = {},
      p = "undefined" != typeof Uint8Array && d ? d(Uint8Array) : void 0,
      f = {
        "%AggregateError%":
          "undefined" == typeof AggregateError ? void 0 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%":
          "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
        "%ArrayIteratorPrototype%": h && d ? d([][Symbol.iterator]()) : void 0,
        "%AsyncFromSyncIteratorPrototype%": void 0,
        "%AsyncFunction%": c,
        "%AsyncGenerator%": c,
        "%AsyncGeneratorFunction%": c,
        "%AsyncIteratorPrototype%": c,
        "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
        "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
        "%BigInt64Array%":
          "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
        "%BigUint64Array%":
          "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%":
          "undefined" == typeof Float32Array ? void 0 : Float32Array,
        "%Float64Array%":
          "undefined" == typeof Float64Array ? void 0 : Float64Array,
        "%FinalizationRegistry%":
          "undefined" == typeof FinalizationRegistry
            ? void 0
            : FinalizationRegistry,
        "%Function%": i,
        "%GeneratorFunction%": c,
        "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": h && d ? d(d([][Symbol.iterator]())) : void 0,
        "%JSON%": "object" == typeof JSON ? JSON : void 0,
        "%Map%": "undefined" == typeof Map ? void 0 : Map,
        "%MapIteratorPrototype%":
          "undefined" != typeof Map && h && d
            ? d(new Map()[Symbol.iterator]())
            : void 0,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
        "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" == typeof Set ? void 0 : Set,
        "%SetIteratorPrototype%":
          "undefined" != typeof Set && h && d
            ? d(new Set()[Symbol.iterator]())
            : void 0,
        "%SharedArrayBuffer%":
          "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": h && d ? d(""[Symbol.iterator]()) : void 0,
        "%Symbol%": h ? Symbol : void 0,
        "%SyntaxError%": r,
        "%ThrowTypeError%": l,
        "%TypedArray%": p,
        "%TypeError%": s,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
        "%Uint8ClampedArray%":
          "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
        "%Uint16Array%":
          "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
        "%Uint32Array%":
          "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
        "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
        "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
      };
    if (d)
      try {
        null.error;
      } catch (e) {
        var m = d(d(e));
        f["%Error.prototype%"] = m;
      }
    var g = function e(t) {
        var r;
        if ("%AsyncFunction%" === t) r = n("async function () {}");
        else if ("%GeneratorFunction%" === t) r = n("function* () {}");
        else if ("%AsyncGeneratorFunction%" === t)
          r = n("async function* () {}");
        else if ("%AsyncGenerator%" === t) {
          var i = e("%AsyncGeneratorFunction%");
          i && (r = i.prototype);
        } else if ("%AsyncIteratorPrototype%" === t) {
          var s = e("%AsyncGenerator%");
          s && d && (r = d(s.prototype));
        }
        return (f[t] = r), r;
      },
      y = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": [
          "AsyncGeneratorFunction",
          "prototype",
          "prototype",
        ],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"],
      },
      _ = j("gvair"),
      x = j("4c4Ky"),
      v = _.call(Function.call, Array.prototype.concat),
      b = _.call(Function.apply, Array.prototype.splice),
      E = _.call(Function.call, String.prototype.replace),
      T = _.call(Function.call, String.prototype.slice),
      A = _.call(Function.call, RegExp.prototype.exec),
      w =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      S = /\\(\\)?/g,
      R = function (e) {
        var t = T(e, 0, 1),
          i = T(e, -1);
        if ("%" === t && "%" !== i)
          throw new r("invalid intrinsic syntax, expected closing `%`");
        if ("%" === i && "%" !== t)
          throw new r("invalid intrinsic syntax, expected opening `%`");
        var s = [];
        return (
          E(e, w, function (e, t, r, i) {
            s[s.length] = r ? E(i, S, "$1") : t || e;
          }),
          s
        );
      },
      I = function (e, t) {
        var i,
          n = e;
        if ((x(y, n) && (n = "%" + (i = y[n])[0] + "%"), x(f, n))) {
          var a = f[n];
          if ((a === c && (a = g(n)), void 0 === a && !t))
            throw new s(
              "intrinsic " +
                e +
                " exists, but is not available. Please file an issue!"
            );
          return { alias: i, name: n, value: a };
        }
        throw new r("intrinsic " + e + " does not exist!");
      };
    e.exports = function (e, t) {
      if ("string" != typeof e || 0 === e.length)
        throw new s("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" != typeof t)
        throw new s('"allowMissing" argument must be a boolean');
      if (null === A(/^%?[^%]*%?$/, e))
        throw new r(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
        );
      var i = R(e),
        n = i.length > 0 ? i[0] : "",
        o = I("%" + n + "%", t),
        l = o.name,
        h = o.value,
        u = !1,
        d = o.alias;
      d && ((n = d[0]), b(i, v([0, 1], d)));
      for (var c = 1, p = !0; c < i.length; c += 1) {
        var m = i[c],
          g = T(m, 0, 1),
          y = T(m, -1);
        if (
          ('"' === g ||
            "'" === g ||
            "`" === g ||
            '"' === y ||
            "'" === y ||
            "`" === y) &&
          g !== y
        )
          throw new r("property names with quotes must have matching quotes");
        if (
          (("constructor" !== m && p) || (u = !0),
          (n += "." + m),
          x(f, (l = "%" + n + "%")))
        )
          h = f[l];
        else if (null != h) {
          if (!(m in h)) {
            if (!t)
              throw new s(
                "base intrinsic for " +
                  e +
                  " exists, but the property is not available."
              );
            return;
          }
          if (a && c + 1 >= i.length) {
            var _ = a(h, m);
            h =
              (p = !!_) && "get" in _ && !("originalValue" in _.get)
                ? _.get
                : h[m];
          } else (p = x(h, m)), (h = h[m]);
          p && !u && (f[l] = h);
        }
      }
      return h;
    };
  }),
  $("24qIq", function (e, t) {
    var r = "undefined" != typeof Symbol && Symbol,
      i = j("7YWkK");
    e.exports = function () {
      return (
        "function" == typeof r &&
        "function" == typeof Symbol &&
        "symbol" == typeof r("foo") &&
        "symbol" == typeof Symbol("bar") &&
        i()
      );
    };
  }),
  $("7YWkK", function (e, t) {
    e.exports = function () {
      if (
        "function" != typeof Symbol ||
        "function" != typeof Object.getOwnPropertySymbols
      )
        return !1;
      if ("symbol" == typeof Symbol.iterator) return !0;
      var e = {},
        t = Symbol("test"),
        r = Object(t);
      if (
        "string" == typeof t ||
        "[object Symbol]" !== Object.prototype.toString.call(t) ||
        "[object Symbol]" !== Object.prototype.toString.call(r)
      )
        return !1;
      for (t in ((e[t] = 42), e)) return !1;
      if (
        ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
        ("function" == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(e).length)
      )
        return !1;
      var i = Object.getOwnPropertySymbols(e);
      if (
        1 !== i.length ||
        i[0] !== t ||
        !Object.prototype.propertyIsEnumerable.call(e, t)
      )
        return !1;
      if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var s = Object.getOwnPropertyDescriptor(e, t);
        if (42 !== s.value || !0 !== s.enumerable) return !1;
      }
      return !0;
    };
  }),
  $("dSRh6", function (e, t) {
    var r = { foo: {} },
      i = Object;
    e.exports = function () {
      return (
        { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof i)
      );
    };
  }),
  $("gvair", function (e, t) {
    var r = j("kAGnA");
    e.exports = Function.prototype.bind || r;
  }),
  $("kAGnA", function (e, t) {
    var r = Object.prototype.toString,
      i = Math.max,
      s = function (e, t) {
        for (var r = [], i = 0; i < e.length; i += 1) r[i] = e[i];
        for (var s = 0; s < t.length; s += 1) r[s + e.length] = t[s];
        return r;
      },
      n = function (e, t) {
        for (var r = [], i = t || 0, s = 0; i < e.length; i += 1, s += 1)
          r[s] = e[i];
        return r;
      },
      a = function (e, t) {
        for (var r = "", i = 0; i < e.length; i += 1)
          (r += e[i]), i + 1 < e.length && (r += t);
        return r;
      };
    e.exports = function (e) {
      var t,
        o = this;
      if ("function" != typeof o || "[object Function]" !== r.apply(o))
        throw TypeError("Function.prototype.bind called on incompatible " + o);
      for (
        var l = n(arguments, 1), h = i(0, o.length - l.length), u = [], d = 0;
        d < h;
        d++
      )
        u[d] = "$" + d;
      if (
        ((t = Function(
          "binder",
          "return function (" +
            a(u, ",") +
            "){ return binder.apply(this,arguments); }"
        )(function () {
          if (this instanceof t) {
            var r = o.apply(this, s(l, arguments));
            return Object(r) === r ? r : this;
          }
          return o.apply(e, s(l, arguments));
        })),
        o.prototype)
      ) {
        var c = function () {};
        (c.prototype = o.prototype),
          (t.prototype = new c()),
          (c.prototype = null);
      }
      return t;
    };
  }),
  $("4c4Ky", function (e, t) {
    var r = Function.prototype.call,
      i = Object.prototype.hasOwnProperty,
      s = j("gvair");
    e.exports = s.call(r, i);
  }),
  $("hXu6F", function (e, t) {
    var r = j("1zENl"),
      i = j("cOB0F"),
      s = i(r("String.prototype.indexOf"));
    e.exports = function (e, t) {
      var n = r(e, !!t);
      return "function" == typeof n && s(e, ".prototype.") > -1 ? i(n) : n;
    };
  }),
  $("cOB0F", function (e, t) {
    var r = j("gvair"),
      i = j("1zENl"),
      s = j("BPe9e"),
      n = i("%TypeError%"),
      a = i("%Function.prototype.apply%"),
      o = i("%Function.prototype.call%"),
      l = i("%Reflect.apply%", !0) || r.call(o, a),
      h = i("%Object.defineProperty%", !0),
      u = i("%Math.max%");
    if (h)
      try {
        h({}, "a", { value: 1 });
      } catch (e) {
        h = null;
      }
    e.exports = function (e) {
      if ("function" != typeof e) throw new n("a function is required");
      var t = l(r, o, arguments);
      return s(t, 1 + u(0, e.length - (arguments.length - 1)), !0);
    };
    var d = function () {
      return l(r, a, arguments);
    };
    h ? h(e.exports, "apply", { value: d }) : (e.exports.apply = d);
  }),
  $("BPe9e", function (e, t) {
    var r = j("1zENl"),
      i = j("5FEEt"),
      s = j("i16wS")(),
      n = j("dYOee"),
      a = r("%TypeError%"),
      o = r("%Math.floor%");
    e.exports = function (e, t) {
      if ("function" != typeof e) throw new a("`fn` is not a function");
      if ("number" != typeof t || t < 0 || t > 4294967295 || o(t) !== t)
        throw new a("`length` must be a positive 32-bit integer");
      var r = arguments.length > 2 && !!arguments[2],
        l = !0,
        h = !0;
      if ("length" in e && n) {
        var u = n(e, "length");
        u && !u.configurable && (l = !1), u && !u.writable && (h = !1);
      }
      return (
        (l || h || !r) && (s ? i(e, "length", t, !0, !0) : i(e, "length", t)), e
      );
    };
  }),
  $("5FEEt", function (e, t) {
    var r = j("i16wS")(),
      i = j("1zENl"),
      s = r && i("%Object.defineProperty%", !0);
    if (s)
      try {
        s({}, "a", { value: 1 });
      } catch (e) {
        s = !1;
      }
    var n = i("%SyntaxError%"),
      a = i("%TypeError%"),
      o = j("dYOee");
    e.exports = function (e, t, r) {
      if (!e || ("object" != typeof e && "function" != typeof e))
        throw new a("`obj` must be an object or a function`");
      if ("string" != typeof t && "symbol" != typeof t)
        throw new a("`property` must be a string or a symbol`");
      if (
        arguments.length > 3 &&
        "boolean" != typeof arguments[3] &&
        null !== arguments[3]
      )
        throw new a("`nonEnumerable`, if provided, must be a boolean or null");
      if (
        arguments.length > 4 &&
        "boolean" != typeof arguments[4] &&
        null !== arguments[4]
      )
        throw new a("`nonWritable`, if provided, must be a boolean or null");
      if (
        arguments.length > 5 &&
        "boolean" != typeof arguments[5] &&
        null !== arguments[5]
      )
        throw new a(
          "`nonConfigurable`, if provided, must be a boolean or null"
        );
      if (arguments.length > 6 && "boolean" != typeof arguments[6])
        throw new a("`loose`, if provided, must be a boolean");
      var i = arguments.length > 3 ? arguments[3] : null,
        l = arguments.length > 4 ? arguments[4] : null,
        h = arguments.length > 5 ? arguments[5] : null,
        u = arguments.length > 6 && arguments[6],
        d = !!o && o(e, t);
      if (s)
        s(e, t, {
          configurable: null === h && d ? d.configurable : !h,
          enumerable: null === i && d ? d.enumerable : !i,
          value: r,
          writable: null === l && d ? d.writable : !l,
        });
      else if (!u && (i || l || h))
        throw new n(
          "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
        );
      else e[t] = r;
    };
  }),
  $("i16wS", function (e, t) {
    var r = j("1zENl")("%Object.defineProperty%", !0),
      i = function () {
        if (r)
          try {
            return r({}, "a", { value: 1 }), !0;
          } catch (e) {}
        return !1;
      };
    (i.hasArrayLengthDefineBug = function () {
      if (!i()) return null;
      try {
        return 1 !== r([], "length", { value: 1 }).length;
      } catch (e) {
        return !0;
      }
    }),
      (e.exports = i);
  }),
  $("dYOee", function (e, t) {
    var r = j("1zENl")("%Object.getOwnPropertyDescriptor%", !0);
    if (r)
      try {
        r([], "length");
      } catch (e) {
        r = null;
      }
    e.exports = r;
  }),
  $("e7DLx", function (e, t) {
    var r = "function" == typeof Map && Map.prototype,
      i =
        Object.getOwnPropertyDescriptor && r
          ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
          : null,
      s = r && i && "function" == typeof i.get ? i.get : null,
      n = r && Map.prototype.forEach,
      a = "function" == typeof Set && Set.prototype,
      o =
        Object.getOwnPropertyDescriptor && a
          ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
          : null,
      l = a && o && "function" == typeof o.get ? o.get : null,
      h = a && Set.prototype.forEach,
      u =
        "function" == typeof WeakMap && WeakMap.prototype
          ? WeakMap.prototype.has
          : null,
      d =
        "function" == typeof WeakSet && WeakSet.prototype
          ? WeakSet.prototype.has
          : null,
      c =
        "function" == typeof WeakRef && WeakRef.prototype
          ? WeakRef.prototype.deref
          : null,
      p = Boolean.prototype.valueOf,
      f = Object.prototype.toString,
      m = Function.prototype.toString,
      g = String.prototype.match,
      y = String.prototype.slice,
      _ = String.prototype.replace,
      x = String.prototype.toUpperCase,
      v = String.prototype.toLowerCase,
      b = RegExp.prototype.test,
      E = Array.prototype.concat,
      T = Array.prototype.join,
      A = Array.prototype.slice,
      w = Math.floor,
      S = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
      R = Object.getOwnPropertySymbols,
      I =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? Symbol.prototype.toString
          : null,
      C = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
      P =
        "function" == typeof Symbol &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === C ? "object" : "symbol")
          ? Symbol.toStringTag
          : null,
      k = Object.prototype.propertyIsEnumerable,
      M =
        ("function" == typeof Reflect
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__;
            }
          : null);
    function D(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e != e ||
        (e && e > -1e3 && e < 1e3) ||
        b.call(/e/, t)
      )
        return t;
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if ("number" == typeof e) {
        var i = e < 0 ? -w(-e) : w(e);
        if (i !== e) {
          var s = String(i),
            n = y.call(t, s.length + 1);
          return (
            _.call(s, r, "$&_") +
            "." +
            _.call(_.call(n, /([0-9]{3})/g, "$&_"), /_$/, "")
          );
        }
      }
      return _.call(t, r, "$&_");
    }
    var B = j("kjyEk"),
      O = B.custom,
      F = H(O) ? O : null;
    function L(e, t, r) {
      var i = "double" === (r.quoteStyle || t) ? '"' : "'";
      return i + e + i;
    }
    function U(e) {
      return (
        "[object Array]" === X(e) && (!P || !("object" == typeof e && P in e))
      );
    }
    function G(e) {
      return (
        "[object RegExp]" === X(e) && (!P || !("object" == typeof e && P in e))
      );
    }
    function H(e) {
      if (C) return e && "object" == typeof e && e instanceof Symbol;
      if ("symbol" == typeof e) return !0;
      if (!e || "object" != typeof e || !I) return !1;
      try {
        return I.call(e), !0;
      } catch (e) {}
      return !1;
    }
    e.exports = function e(t, r, i, a) {
      var o = r || {};
      if (
        $(o, "quoteStyle") &&
        "single" !== o.quoteStyle &&
        "double" !== o.quoteStyle
      )
        throw TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        $(o, "maxStringLength") &&
        ("number" == typeof o.maxStringLength
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : null !== o.maxStringLength)
      )
        throw TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        );
      var f = !$(o, "customInspect") || o.customInspect;
      if ("boolean" != typeof f && "symbol" !== f)
        throw TypeError(
          "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
        );
      if (
        $(o, "indent") &&
        null !== o.indent &&
        "	" !== o.indent &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        );
      if ($(o, "numericSeparator") && "boolean" != typeof o.numericSeparator)
        throw TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        );
      var x = o.numericSeparator;
      if (void 0 === t) return "undefined";
      if (null === t) return "null";
      if ("boolean" == typeof t) return t ? "true" : "false";
      if ("string" == typeof t)
        return (function e(t, r) {
          if (t.length > r.maxStringLength) {
            var i = t.length - r.maxStringLength;
            return (
              e(y.call(t, 0, r.maxStringLength), r) +
              "... " +
              i +
              " more character" +
              (i > 1 ? "s" : "")
            );
          }
          return L(
            _.call(_.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, W),
            "single",
            r
          );
        })(t, o);
      if ("number" == typeof t) {
        if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
        var b = String(t);
        return x ? D(t, b) : b;
      }
      if ("bigint" == typeof t) {
        var w = String(t) + "n";
        return x ? D(t, w) : w;
      }
      var R = void 0 === o.depth ? 5 : o.depth;
      if ((void 0 === i && (i = 0), i >= R && R > 0 && "object" == typeof t))
        return U(t) ? "[Array]" : "[Object]";
      var O = (function (e, t) {
        var r;
        if ("	" === e.indent) r = "	";
        else {
          if ("number" != typeof e.indent || !(e.indent > 0)) return null;
          r = T.call(Array(e.indent + 1), " ");
        }
        return { base: r, prev: T.call(Array(t + 1), r) };
      })(o, i);
      if (void 0 === a) a = [];
      else if (V(a, t) >= 0) return "[Circular]";
      function z(t, r, s) {
        if ((r && (a = A.call(a)).push(r), s)) {
          var n = { depth: o.depth };
          return (
            $(o, "quoteStyle") && (n.quoteStyle = o.quoteStyle),
            e(t, n, i + 1, a)
          );
        }
        return e(t, o, i + 1, a);
      }
      if ("function" == typeof t && !G(t)) {
        var j = (function (e) {
            if (e.name) return e.name;
            var t = g.call(m.call(e), /^function\s*([\w$]+)/);
            return t ? t[1] : null;
          })(t),
          J = Q(t, z);
        return (
          "[Function" +
          (j ? ": " + j : " (anonymous)") +
          "]" +
          (J.length > 0 ? " { " + T.call(J, ", ") + " }" : "")
        );
      }
      if (H(t)) {
        var ee = C
          ? _.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
          : I.call(t);
        return "object" != typeof t || C ? ee : Y(ee);
      }
      if (
        t &&
        "object" == typeof t &&
        (("undefined" != typeof HTMLElement && t instanceof HTMLElement) ||
          ("string" == typeof t.nodeName &&
            "function" == typeof t.getAttribute))
      ) {
        for (
          var et,
            er = "<" + v.call(String(t.nodeName)),
            ei = t.attributes || [],
            es = 0;
          es < ei.length;
          es++
        )
          er +=
            " " +
            ei[es].name +
            "=" +
            L(
              ((et = ei[es].value), _.call(String(et), /"/g, "&quot;")),
              "double",
              o
            );
        return (
          (er += ">"),
          t.childNodes && t.childNodes.length && (er += "..."),
          (er += "</" + v.call(String(t.nodeName)) + ">")
        );
      }
      if (U(t)) {
        if (0 === t.length) return "[]";
        var en = Q(t, z);
        return O &&
          !(function (e) {
            for (var t = 0; t < e.length; t++)
              if (V(e[t], "\n") >= 0) return !1;
            return !0;
          })(en)
          ? "[" + K(en, O) + "]"
          : "[ " + T.call(en, ", ") + " ]";
      }
      if (
        "[object Error]" === X(t) &&
        (!P || !("object" == typeof t && P in t))
      ) {
        var ea = Q(t, z);
        return "cause" in Error.prototype ||
          !("cause" in t) ||
          k.call(t, "cause")
          ? 0 === ea.length
            ? "[" + String(t) + "]"
            : "{ [" + String(t) + "] " + T.call(ea, ", ") + " }"
          : "{ [" +
              String(t) +
              "] " +
              T.call(E.call("[cause]: " + z(t.cause), ea), ", ") +
              " }";
      }
      if ("object" == typeof t && f) {
        if (F && "function" == typeof t[F] && B) return B(t, { depth: R - i });
        if ("symbol" !== f && "function" == typeof t.inspect)
          return t.inspect();
      }
      if (
        (function (e) {
          if (!s || !e || "object" != typeof e) return !1;
          try {
            s.call(e);
            try {
              l.call(e);
            } catch (e) {
              return !0;
            }
            return e instanceof Map;
          } catch (e) {}
          return !1;
        })(t)
      ) {
        var eo = [];
        return (
          n &&
            n.call(t, function (e, r) {
              eo.push(z(r, t, !0) + " => " + z(e, t));
            }),
          Z("Map", s.call(t), eo, O)
        );
      }
      if (
        (function (e) {
          if (!l || !e || "object" != typeof e) return !1;
          try {
            l.call(e);
            try {
              s.call(e);
            } catch (e) {
              return !0;
            }
            return e instanceof Set;
          } catch (e) {}
          return !1;
        })(t)
      ) {
        var el = [];
        return (
          h &&
            h.call(t, function (e) {
              el.push(z(e, t));
            }),
          Z("Set", l.call(t), el, O)
        );
      }
      if (
        (function (e) {
          if (!u || !e || "object" != typeof e) return !1;
          try {
            u.call(e, u);
            try {
              d.call(e, d);
            } catch (e) {
              return !0;
            }
            return e instanceof WeakMap;
          } catch (e) {}
          return !1;
        })(t)
      )
        return q("WeakMap");
      if (
        (function (e) {
          if (!d || !e || "object" != typeof e) return !1;
          try {
            d.call(e, d);
            try {
              u.call(e, u);
            } catch (e) {
              return !0;
            }
            return e instanceof WeakSet;
          } catch (e) {}
          return !1;
        })(t)
      )
        return q("WeakSet");
      if (
        (function (e) {
          if (!c || !e || "object" != typeof e) return !1;
          try {
            return c.call(e), !0;
          } catch (e) {}
          return !1;
        })(t)
      )
        return q("WeakRef");
      if (
        "[object Number]" === X(t) &&
        (!P || !("object" == typeof t && P in t))
      )
        return Y(z(Number(t)));
      if (
        (function (e) {
          if (!e || "object" != typeof e || !S) return !1;
          try {
            return S.call(e), !0;
          } catch (e) {}
          return !1;
        })(t)
      )
        return Y(z(S.call(t)));
      if (
        "[object Boolean]" === X(t) &&
        (!P || !("object" == typeof t && P in t))
      )
        return Y(p.call(t));
      if (
        "[object String]" === X(t) &&
        (!P || !("object" == typeof t && P in t))
      )
        return Y(z(String(t)));
      if ("undefined" != typeof window && t === window)
        return "{ [object Window] }";
      if (t === N) return "{ [object globalThis] }";
      if (
        !(
          "[object Date]" === X(t) &&
          (!P || !("object" == typeof t && P in t))
        ) &&
        !G(t)
      ) {
        var eh = Q(t, z),
          eu = M
            ? M(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          ed = t instanceof Object ? "" : "null prototype",
          ec =
            !eu && P && Object(t) === t && P in t
              ? y.call(X(t), 8, -1)
              : ed
              ? "Object"
              : "",
          ep =
            (eu || "function" != typeof t.constructor
              ? ""
              : t.constructor.name
              ? t.constructor.name + " "
              : "") +
            (ec || ed
              ? "[" + T.call(E.call([], ec || [], ed || []), ": ") + "] "
              : "");
        return 0 === eh.length
          ? ep + "{}"
          : O
          ? ep + "{" + K(eh, O) + "}"
          : ep + "{ " + T.call(eh, ", ") + " }";
      }
      return String(t);
    };
    var z =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function $(e, t) {
      return z.call(e, t);
    }
    function X(e) {
      return f.call(e);
    }
    function V(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (var r = 0, i = e.length; r < i; r++) if (e[r] === t) return r;
      return -1;
    }
    function W(e) {
      var t = e.charCodeAt(0),
        r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
      return r
        ? "\\" + r
        : "\\x" + (t < 16 ? "0" : "") + x.call(t.toString(16));
    }
    function Y(e) {
      return "Object(" + e + ")";
    }
    function q(e) {
      return e + " { ? }";
    }
    function Z(e, t, r, i) {
      return e + " (" + t + ") {" + (i ? K(r, i) : T.call(r, ", ")) + "}";
    }
    function K(e, t) {
      if (0 === e.length) return "";
      var r = "\n" + t.prev + t.base;
      return r + T.call(e, "," + r) + "\n" + t.prev;
    }
    function Q(e, t) {
      var r,
        i = U(e),
        s = [];
      if (i) {
        s.length = e.length;
        for (var n = 0; n < e.length; n++) s[n] = $(e, n) ? t(e[n], e) : "";
      }
      var a = "function" == typeof R ? R(e) : [];
      if (C) {
        r = {};
        for (var o = 0; o < a.length; o++) r["$" + a[o]] = a[o];
      }
      for (var l in e)
        if ($(e, l) && (!i || String(Number(l)) !== l || !(l < e.length))) {
          if (C && r["$" + l] instanceof Symbol) continue;
          b.call(/[^\w$]/, l)
            ? s.push(t(l, e) + ": " + t(e[l], e))
            : s.push(l + ": " + t(e[l], e));
        }
      if ("function" == typeof R)
        for (var h = 0; h < a.length; h++)
          k.call(e, a[h]) && s.push("[" + t(a[h]) + "]: " + t(e[a[h]], e));
      return s;
    }
  }),
  $("kjyEk", function (e, t) {}),
  $("iBfJ5", function (e, t) {
    var r = j("i1Gbt"),
      i = Object.prototype.hasOwnProperty,
      s = Array.isArray,
      n = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      a = function (e) {
        for (; e.length > 1; ) {
          var t = e.pop(),
            r = t.obj[t.prop];
          if (s(r)) {
            for (var i = [], n = 0; n < r.length; ++n)
              void 0 !== r[n] && i.push(r[n]);
            t.obj[t.prop] = i;
          }
        }
      },
      o = function (e, t) {
        for (
          var r = t && t.plainObjects ? Object.create(null) : {}, i = 0;
          i < e.length;
          ++i
        )
          void 0 !== e[i] && (r[i] = e[i]);
        return r;
      };
    e.exports = {
      arrayToObject: o,
      assign: function (e, t) {
        return Object.keys(t).reduce(function (e, r) {
          return (e[r] = t[r]), e;
        }, e);
      },
      combine: function (e, t) {
        return [].concat(e, t);
      },
      compact: function (e) {
        for (
          var t = [{ obj: { o: e }, prop: "o" }], r = [], i = 0;
          i < t.length;
          ++i
        )
          for (
            var s = t[i], n = s.obj[s.prop], o = Object.keys(n), l = 0;
            l < o.length;
            ++l
          ) {
            var h = o[l],
              u = n[h];
            "object" == typeof u &&
              null !== u &&
              -1 === r.indexOf(u) &&
              (t.push({ obj: n, prop: h }), r.push(u));
          }
        return a(t), e;
      },
      decode: function (e, t, r) {
        var i = e.replace(/\+/g, " ");
        if ("iso-8859-1" === r) return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(i);
        } catch (e) {
          return i;
        }
      },
      encode: function (e, t, i, s, a) {
        if (0 === e.length) return e;
        var o = e;
        if (
          ("symbol" == typeof e
            ? (o = Symbol.prototype.toString.call(e))
            : "string" != typeof e && (o = String(e)),
          "iso-8859-1" === i)
        )
          return escape(o).replace(/%u[0-9a-f]{4}/gi, function (e) {
            return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
          });
        for (var l = "", h = 0; h < o.length; ++h) {
          var u = o.charCodeAt(h);
          if (
            45 === u ||
            46 === u ||
            95 === u ||
            126 === u ||
            (u >= 48 && u <= 57) ||
            (u >= 65 && u <= 90) ||
            (u >= 97 && u <= 122) ||
            (a === r.RFC1738 && (40 === u || 41 === u))
          ) {
            l += o.charAt(h);
            continue;
          }
          if (u < 128) {
            l += n[u];
            continue;
          }
          if (u < 2048) {
            l += n[192 | (u >> 6)] + n[128 | (63 & u)];
            continue;
          }
          if (u < 55296 || u >= 57344) {
            l +=
              n[224 | (u >> 12)] + n[128 | ((u >> 6) & 63)] + n[128 | (63 & u)];
            continue;
          }
          (h += 1),
            (l +=
              n[
                240 |
                  ((u =
                    65536 + (((1023 & u) << 10) | (1023 & o.charCodeAt(h)))) >>
                    18)
              ] +
              n[128 | ((u >> 12) & 63)] +
              n[128 | ((u >> 6) & 63)] +
              n[128 | (63 & u)]);
        }
        return l;
      },
      isBuffer: function (e) {
        return (
          !!e &&
          "object" == typeof e &&
          !!(
            e.constructor &&
            e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        );
      },
      isRegExp: function (e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      },
      maybeMap: function (e, t) {
        if (s(e)) {
          for (var r = [], i = 0; i < e.length; i += 1) r.push(t(e[i]));
          return r;
        }
        return t(e);
      },
      merge: function e(t, r, n) {
        if (!r) return t;
        if ("object" != typeof r) {
          if (s(t)) t.push(r);
          else {
            if (!t || "object" != typeof t) return [t, r];
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !i.call(Object.prototype, r)) &&
              (t[r] = !0);
          }
          return t;
        }
        if (!t || "object" != typeof t) return [t].concat(r);
        var a = t;
        return (s(t) && !s(r) && (a = o(t, n)), s(t) && s(r))
          ? (r.forEach(function (r, s) {
              if (i.call(t, s)) {
                var a = t[s];
                a && "object" == typeof a && r && "object" == typeof r
                  ? (t[s] = e(a, r, n))
                  : t.push(r);
              } else t[s] = r;
            }),
            t)
          : Object.keys(r).reduce(function (t, s) {
              var a = r[s];
              return i.call(t, s) ? (t[s] = e(t[s], a, n)) : (t[s] = a), t;
            }, a);
      },
    };
  }),
  $("i1Gbt", function (e, t) {
    var r = String.prototype.replace,
      i = /%20/g,
      s = "RFC3986";
    e.exports = {
      default: s,
      formatters: {
        RFC1738: function (e) {
          return r.call(e, i, "+");
        },
        RFC3986: function (e) {
          return String(e);
        },
      },
      RFC1738: "RFC1738",
      RFC3986: s,
    };
  }),
  $("cfYIz", function (e, t) {
    var r = j("iBfJ5"),
      i = Object.prototype.hasOwnProperty,
      s = Array.isArray,
      n = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      a = function (e, t) {
        return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
          ? e.split(",")
          : e;
      },
      o = function (e, t) {
        var o = { __proto__: null },
          l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
          h = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
          u = l.split(t.delimiter, h),
          d = -1,
          c = t.charset;
        if (t.charsetSentinel)
          for (p = 0; p < u.length; ++p)
            0 === u[p].indexOf("utf8=") &&
              ("utf8=%E2%9C%93" === u[p]
                ? (c = "utf-8")
                : "utf8=%26%2310003%3B" === u[p] && (c = "iso-8859-1"),
              (d = p),
              (p = u.length));
        for (p = 0; p < u.length; ++p)
          if (p !== d) {
            var p,
              f,
              m,
              g = u[p],
              y = g.indexOf("]="),
              _ = -1 === y ? g.indexOf("=") : y + 1;
            -1 === _
              ? ((f = t.decoder(g, n.decoder, c, "key")),
                (m = t.strictNullHandling ? null : ""))
              : ((f = t.decoder(g.slice(0, _), n.decoder, c, "key")),
                (m = r.maybeMap(a(g.slice(_ + 1), t), function (e) {
                  return t.decoder(e, n.decoder, c, "value");
                }))),
              m &&
                t.interpretNumericEntities &&
                "iso-8859-1" === c &&
                (m = m.replace(/&#(\d+);/g, function (e, t) {
                  return String.fromCharCode(parseInt(t, 10));
                })),
              g.indexOf("[]=") > -1 && (m = s(m) ? [m] : m),
              i.call(o, f) ? (o[f] = r.combine(o[f], m)) : (o[f] = m);
          }
        return o;
      },
      l = function (e, t, r, i) {
        for (var s = i ? t : a(t, r), n = e.length - 1; n >= 0; --n) {
          var o,
            l = e[n];
          if ("[]" === l && r.parseArrays) o = [].concat(s);
          else {
            o = r.plainObjects ? Object.create(null) : {};
            var h =
                "[" === l.charAt(0) && "]" === l.charAt(l.length - 1)
                  ? l.slice(1, -1)
                  : l,
              u = parseInt(h, 10);
            r.parseArrays || "" !== h
              ? !isNaN(u) &&
                l !== h &&
                String(u) === h &&
                u >= 0 &&
                r.parseArrays &&
                u <= r.arrayLimit
                ? ((o = [])[u] = s)
                : "__proto__" !== h && (o[h] = s)
              : (o = { 0: s });
          }
          s = o;
        }
        return s;
      },
      h = function (e, t, r, s) {
        if (e) {
          var n = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            a = /(\[[^[\]]*])/g,
            o = r.depth > 0 && /(\[[^[\]]*])/.exec(n),
            h = o ? n.slice(0, o.index) : n,
            u = [];
          if (h) {
            if (
              !r.plainObjects &&
              i.call(Object.prototype, h) &&
              !r.allowPrototypes
            )
              return;
            u.push(h);
          }
          for (
            var d = 0;
            r.depth > 0 && null !== (o = a.exec(n)) && d < r.depth;

          ) {
            if (
              ((d += 1),
              !r.plainObjects &&
                i.call(Object.prototype, o[1].slice(1, -1)) &&
                !r.allowPrototypes)
            )
              return;
            u.push(o[1]);
          }
          return o && u.push("[" + n.slice(o.index) + "]"), l(u, t, r, s);
        }
      },
      u = function (e) {
        if (!e) return n;
        if (
          null !== e.decoder &&
          void 0 !== e.decoder &&
          "function" != typeof e.decoder
        )
          throw TypeError("Decoder has to be a function.");
        if (
          void 0 !== e.charset &&
          "utf-8" !== e.charset &&
          "iso-8859-1" !== e.charset
        )
          throw TypeError(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var t = void 0 === e.charset ? n.charset : e.charset;
        return {
          allowDots: void 0 === e.allowDots ? n.allowDots : !!e.allowDots,
          allowPrototypes:
            "boolean" == typeof e.allowPrototypes
              ? e.allowPrototypes
              : n.allowPrototypes,
          allowSparse:
            "boolean" == typeof e.allowSparse ? e.allowSparse : n.allowSparse,
          arrayLimit:
            "number" == typeof e.arrayLimit ? e.arrayLimit : n.arrayLimit,
          charset: t,
          charsetSentinel:
            "boolean" == typeof e.charsetSentinel
              ? e.charsetSentinel
              : n.charsetSentinel,
          comma: "boolean" == typeof e.comma ? e.comma : n.comma,
          decoder: "function" == typeof e.decoder ? e.decoder : n.decoder,
          delimiter:
            "string" == typeof e.delimiter || r.isRegExp(e.delimiter)
              ? e.delimiter
              : n.delimiter,
          depth:
            "number" == typeof e.depth || !1 === e.depth ? +e.depth : n.depth,
          ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
          interpretNumericEntities:
            "boolean" == typeof e.interpretNumericEntities
              ? e.interpretNumericEntities
              : n.interpretNumericEntities,
          parameterLimit:
            "number" == typeof e.parameterLimit
              ? e.parameterLimit
              : n.parameterLimit,
          parseArrays: !1 !== e.parseArrays,
          plainObjects:
            "boolean" == typeof e.plainObjects
              ? e.plainObjects
              : n.plainObjects,
          strictNullHandling:
            "boolean" == typeof e.strictNullHandling
              ? e.strictNullHandling
              : n.strictNullHandling,
        };
      };
    e.exports = function (e, t) {
      var i = u(t);
      if ("" === e || null == e)
        return i.plainObjects ? Object.create(null) : {};
      for (
        var s = "string" == typeof e ? o(e, i) : e,
          n = i.plainObjects ? Object.create(null) : {},
          a = Object.keys(s),
          l = 0;
        l < a.length;
        ++l
      ) {
        var d = a[l],
          c = h(d, s[d], i, "string" == typeof e);
        n = r.merge(n, c, i);
      }
      return !0 === i.allowSparse ? n : r.compact(n);
    };
  });
var X =
    (((h = X || {})[(h.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
    (h[(h.WEBGL = 1)] = "WEBGL"),
    (h[(h.WEBGL2 = 2)] = "WEBGL2"),
    h),
  V =
    (((u = V || {})[(u.UNKNOWN = 0)] = "UNKNOWN"),
    (u[(u.WEBGL = 1)] = "WEBGL"),
    (u[(u.CANVAS = 2)] = "CANVAS"),
    u),
  W =
    (((d = W || {})[(d.COLOR = 16384)] = "COLOR"),
    (d[(d.DEPTH = 256)] = "DEPTH"),
    (d[(d.STENCIL = 1024)] = "STENCIL"),
    d),
  Y =
    (((c = Y || {})[(c.NORMAL = 0)] = "NORMAL"),
    (c[(c.ADD = 1)] = "ADD"),
    (c[(c.MULTIPLY = 2)] = "MULTIPLY"),
    (c[(c.SCREEN = 3)] = "SCREEN"),
    (c[(c.OVERLAY = 4)] = "OVERLAY"),
    (c[(c.DARKEN = 5)] = "DARKEN"),
    (c[(c.LIGHTEN = 6)] = "LIGHTEN"),
    (c[(c.COLOR_DODGE = 7)] = "COLOR_DODGE"),
    (c[(c.COLOR_BURN = 8)] = "COLOR_BURN"),
    (c[(c.HARD_LIGHT = 9)] = "HARD_LIGHT"),
    (c[(c.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
    (c[(c.DIFFERENCE = 11)] = "DIFFERENCE"),
    (c[(c.EXCLUSION = 12)] = "EXCLUSION"),
    (c[(c.HUE = 13)] = "HUE"),
    (c[(c.SATURATION = 14)] = "SATURATION"),
    (c[(c.COLOR = 15)] = "COLOR"),
    (c[(c.LUMINOSITY = 16)] = "LUMINOSITY"),
    (c[(c.NORMAL_NPM = 17)] = "NORMAL_NPM"),
    (c[(c.ADD_NPM = 18)] = "ADD_NPM"),
    (c[(c.SCREEN_NPM = 19)] = "SCREEN_NPM"),
    (c[(c.NONE = 20)] = "NONE"),
    (c[(c.SRC_OVER = 0)] = "SRC_OVER"),
    (c[(c.SRC_IN = 21)] = "SRC_IN"),
    (c[(c.SRC_OUT = 22)] = "SRC_OUT"),
    (c[(c.SRC_ATOP = 23)] = "SRC_ATOP"),
    (c[(c.DST_OVER = 24)] = "DST_OVER"),
    (c[(c.DST_IN = 25)] = "DST_IN"),
    (c[(c.DST_OUT = 26)] = "DST_OUT"),
    (c[(c.DST_ATOP = 27)] = "DST_ATOP"),
    (c[(c.ERASE = 26)] = "ERASE"),
    (c[(c.SUBTRACT = 28)] = "SUBTRACT"),
    (c[(c.XOR = 29)] = "XOR"),
    c),
  q =
    (((p = q || {})[(p.POINTS = 0)] = "POINTS"),
    (p[(p.LINES = 1)] = "LINES"),
    (p[(p.LINE_LOOP = 2)] = "LINE_LOOP"),
    (p[(p.LINE_STRIP = 3)] = "LINE_STRIP"),
    (p[(p.TRIANGLES = 4)] = "TRIANGLES"),
    (p[(p.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
    (p[(p.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"),
    p),
  Z =
    (((f = Z || {})[(f.RGBA = 6408)] = "RGBA"),
    (f[(f.RGB = 6407)] = "RGB"),
    (f[(f.RG = 33319)] = "RG"),
    (f[(f.RED = 6403)] = "RED"),
    (f[(f.RGBA_INTEGER = 36249)] = "RGBA_INTEGER"),
    (f[(f.RGB_INTEGER = 36248)] = "RGB_INTEGER"),
    (f[(f.RG_INTEGER = 33320)] = "RG_INTEGER"),
    (f[(f.RED_INTEGER = 36244)] = "RED_INTEGER"),
    (f[(f.ALPHA = 6406)] = "ALPHA"),
    (f[(f.LUMINANCE = 6409)] = "LUMINANCE"),
    (f[(f.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
    (f[(f.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
    (f[(f.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"),
    f),
  K =
    (((m = K || {})[(m.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
    (m[(m.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
    (m[(m.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
    (m[(m.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
      "TEXTURE_CUBE_MAP_POSITIVE_X"),
    (m[(m.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_X"),
    (m[(m.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Y"),
    (m[(m.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
    (m[(m.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
      "TEXTURE_CUBE_MAP_POSITIVE_Z"),
    (m[(m.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
      "TEXTURE_CUBE_MAP_NEGATIVE_Z"),
    m),
  Q =
    (((g = Q || {})[(g.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
    (g[(g.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
    (g[(g.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
    (g[(g.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
    (g[(g.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
    (g[(g.UNSIGNED_INT = 5125)] = "UNSIGNED_INT"),
    (g[(g.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
      "UNSIGNED_INT_10F_11F_11F_REV"),
    (g[(g.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
      "UNSIGNED_INT_2_10_10_10_REV"),
    (g[(g.UNSIGNED_INT_24_8 = 34042)] = "UNSIGNED_INT_24_8"),
    (g[(g.UNSIGNED_INT_5_9_9_9_REV = 35902)] = "UNSIGNED_INT_5_9_9_9_REV"),
    (g[(g.BYTE = 5120)] = "BYTE"),
    (g[(g.SHORT = 5122)] = "SHORT"),
    (g[(g.INT = 5124)] = "INT"),
    (g[(g.FLOAT = 5126)] = "FLOAT"),
    (g[(g.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
      "FLOAT_32_UNSIGNED_INT_24_8_REV"),
    (g[(g.HALF_FLOAT = 36193)] = "HALF_FLOAT"),
    g),
  J =
    (((y = J || {})[(y.FLOAT = 0)] = "FLOAT"),
    (y[(y.INT = 1)] = "INT"),
    (y[(y.UINT = 2)] = "UINT"),
    y),
  ee =
    (((_ = ee || {})[(_.NEAREST = 0)] = "NEAREST"),
    (_[(_.LINEAR = 1)] = "LINEAR"),
    _),
  et =
    (((x = et || {})[(x.CLAMP = 33071)] = "CLAMP"),
    (x[(x.REPEAT = 10497)] = "REPEAT"),
    (x[(x.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"),
    x),
  er =
    (((v = er || {})[(v.OFF = 0)] = "OFF"),
    (v[(v.POW2 = 1)] = "POW2"),
    (v[(v.ON = 2)] = "ON"),
    (v[(v.ON_MANUAL = 3)] = "ON_MANUAL"),
    v),
  ei =
    (((b = ei || {})[(b.NPM = 0)] = "NPM"),
    (b[(b.UNPACK = 1)] = "UNPACK"),
    (b[(b.PMA = 2)] = "PMA"),
    (b[(b.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
    (b[(b.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
    (b[(b.PREMULTIPLIED_ALPHA = 2)] = "PREMULTIPLIED_ALPHA"),
    b),
  es =
    (((E = es || {})[(E.NO = 0)] = "NO"),
    (E[(E.YES = 1)] = "YES"),
    (E[(E.AUTO = 2)] = "AUTO"),
    (E[(E.BLEND = 0)] = "BLEND"),
    (E[(E.CLEAR = 1)] = "CLEAR"),
    (E[(E.BLIT = 2)] = "BLIT"),
    E),
  en =
    (((T = en || {})[(T.AUTO = 0)] = "AUTO"),
    (T[(T.MANUAL = 1)] = "MANUAL"),
    T),
  ea =
    (((A = ea || {}).LOW = "lowp"),
    (A.MEDIUM = "mediump"),
    (A.HIGH = "highp"),
    A),
  eo =
    (((w = eo || {})[(w.NONE = 0)] = "NONE"),
    (w[(w.SCISSOR = 1)] = "SCISSOR"),
    (w[(w.STENCIL = 2)] = "STENCIL"),
    (w[(w.SPRITE = 3)] = "SPRITE"),
    (w[(w.COLOR = 4)] = "COLOR"),
    w),
  el =
    (((S = el || {})[(S.RED = 1)] = "RED"),
    (S[(S.GREEN = 2)] = "GREEN"),
    (S[(S.BLUE = 4)] = "BLUE"),
    (S[(S.ALPHA = 8)] = "ALPHA"),
    S),
  eh =
    (((R = eh || {})[(R.NONE = 0)] = "NONE"),
    (R[(R.LOW = 2)] = "LOW"),
    (R[(R.MEDIUM = 4)] = "MEDIUM"),
    (R[(R.HIGH = 8)] = "HIGH"),
    R),
  eu =
    (((I = eu || {})[(I.ELEMENT_ARRAY_BUFFER = 34963)] =
      "ELEMENT_ARRAY_BUFFER"),
    (I[(I.ARRAY_BUFFER = 34962)] = "ARRAY_BUFFER"),
    (I[(I.UNIFORM_BUFFER = 35345)] = "UNIFORM_BUFFER"),
    I);
const ed = {
  ADAPTER: {
    createCanvas: (e, t) => {
      let r = document.createElement("canvas");
      return (r.width = e), (r.height = t), r;
    },
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (e, t) => fetch(e, t),
    parseXML: (e) => new DOMParser().parseFromString(e, "text/xml"),
  },
  RESOLUTION: 1,
  CREATE_IMAGE_BITMAP: !1,
  ROUND_PIXELS: !1,
};
var ec = /iPhone/i,
  ep = /iPod/i,
  ef = /iPad/i,
  em = /\biOS-universal(?:.+)Mac\b/i,
  eg = /\bAndroid(?:.+)Mobile\b/i,
  ey = /Android/i,
  e_ = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
  ex = /Silk/i,
  ev = /Windows Phone/i,
  eb = /\bWindows(?:.+)ARM\b/i,
  eE = /BlackBerry/i,
  eT = /BB10/i,
  eA = /Opera Mini/i,
  ew = /\b(CriOS|Chrome)(?:.+)Mobile/i,
  eS = /Mobile(?:.+)Firefox\b/i,
  eR = function (e) {
    return (
      void 0 !== e &&
      "MacIntel" === e.platform &&
      "number" == typeof e.maxTouchPoints &&
      e.maxTouchPoints > 1 &&
      "undefined" == typeof MSStream
    );
  };
function eI(e) {
  var t,
    r = { userAgent: "", platform: "", maxTouchPoints: 0 };
  e || "undefined" == typeof navigator
    ? "string" == typeof e
      ? (r.userAgent = e)
      : e &&
        e.userAgent &&
        (r = {
          userAgent: e.userAgent,
          platform: e.platform,
          maxTouchPoints: e.maxTouchPoints || 0,
        })
    : (r = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0,
      });
  var i = r.userAgent,
    s = i.split("[FBAN");
  void 0 !== s[1] && (i = s[0]),
    void 0 !== (s = i.split("Twitter"))[1] && (i = s[0]);
  var n =
      ((t = i),
      function (e) {
        return e.test(t);
      }),
    a = {
      apple: {
        phone: n(ec) && !n(ev),
        ipod: n(ep),
        tablet: !n(ec) && (n(ef) || eR(r)) && !n(ev),
        universal: n(em),
        device: (n(ec) || n(ep) || n(ef) || n(em) || eR(r)) && !n(ev),
      },
      amazon: { phone: n(e_), tablet: !n(e_) && n(ex), device: n(e_) || n(ex) },
      android: {
        phone: (!n(ev) && n(e_)) || (!n(ev) && n(eg)),
        tablet: !n(ev) && !n(e_) && !n(eg) && (n(ex) || n(ey)),
        device:
          (!n(ev) && (n(e_) || n(ex) || n(eg) || n(ey))) || n(/\bokhttp\b/i),
      },
      windows: { phone: n(ev), tablet: n(eb), device: n(ev) || n(eb) },
      other: {
        blackberry: n(eE),
        blackberry10: n(eT),
        opera: n(eA),
        firefox: n(eS),
        chrome: n(ew),
        device: n(eE) || n(eT) || n(eA) || n(eS) || n(ew),
      },
      any: !1,
      phone: !1,
      tablet: !1,
    };
  return (
    (a.any =
      a.apple.device || a.android.device || a.windows.device || a.other.device),
    (a.phone = a.apple.phone || a.android.phone || a.windows.phone),
    (a.tablet = a.apple.tablet || a.android.tablet || a.windows.tablet),
    a
  );
}
const eC = (eI.default ?? eI)(globalThis.navigator);
var eP = {};
G(eP, "BaseTextureCache", () => t3),
  G(eP, "BoundingBox", () => t0),
  G(eP, "CanvasRenderTarget", () => t6),
  G(eP, "DATA_URI", () => tH),
  G(eP, "EventEmitter", () => U(ek)),
  G(eP, "ProgramCache", () => t1),
  G(eP, "TextureCache", () => t2),
  G(eP, "clearTextureCache", () => t5),
  G(eP, "correctBlendMode", () => tL),
  G(eP, "createIndicesForQuads", () => tz),
  G(eP, "decomposeDataUri", () => rt),
  G(eP, "deprecation", () => e5),
  G(eP, "destroyTextureCache", () => t4),
  G(eP, "detectVideoAlphaMode", () => te),
  G(eP, "determineCrossOrigin", () => rr),
  G(eP, "earcut", () => U(eU)),
  G(eP, "getBufferType", () => tj),
  G(eP, "getCanvasBoundingBox", () => t9),
  G(eP, "getResolutionOfUrl", () => ri),
  G(eP, "hex2rgb", () => tM),
  G(eP, "hex2string", () => tD),
  G(eP, "interleaveTypedArrays", () => tX),
  G(eP, "isMobile", () => eC),
  G(eP, "isPow2", () => tW),
  G(eP, "isWebGLSupported", () => ti),
  G(eP, "log2", () => tY),
  G(eP, "nextPow2", () => tV),
  G(eP, "path", () => e9),
  G(eP, "premultiplyBlendMode", () => tF),
  G(eP, "premultiplyRgba", () => tN),
  G(eP, "premultiplyTint", () => tU),
  G(eP, "premultiplyTintToRgba", () => tG),
  G(eP, "removeItems", () => tq),
  G(eP, "rgb2hex", () => tO),
  G(eP, "sayHello", () => tr),
  G(eP, "sign", () => tZ),
  G(eP, "skipHello", () => tt),
  G(eP, "string2hex", () => tB),
  G(eP, "trimCanvas", () => re),
  G(eP, "uid", () => tQ),
  G(eP, "url", () => e6),
  (ed.RETINA_PREFIX = /@([0-9\.]+)x/),
  (ed.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1);
var ek = {},
  eM = Object.prototype.hasOwnProperty,
  eD = "~";
function eB() {}
function eO(e, t, r) {
  (this.fn = e), (this.context = t), (this.once = r || !1);
}
function eF(e, t, r, i, s) {
  if ("function" != typeof r)
    throw TypeError("The listener must be a function");
  var n = new eO(r, i || e, s),
    a = eD ? eD + t : t;
  return (
    e._events[a]
      ? e._events[a].fn
        ? (e._events[a] = [e._events[a], n])
        : e._events[a].push(n)
      : ((e._events[a] = n), e._eventsCount++),
    e
  );
}
function eL(e, t) {
  0 == --e._eventsCount ? (e._events = new eB()) : delete e._events[t];
}
function eN() {
  (this._events = new eB()), (this._eventsCount = 0);
}
Object.create &&
  ((eB.prototype = Object.create(null)), new eB().__proto__ || (eD = !1)),
  (eN.prototype.eventNames = function () {
    var e,
      t,
      r = [];
    if (0 === this._eventsCount) return r;
    for (t in (e = this._events)) eM.call(e, t) && r.push(eD ? t.slice(1) : t);
    return Object.getOwnPropertySymbols
      ? r.concat(Object.getOwnPropertySymbols(e))
      : r;
  }),
  (eN.prototype.listeners = function (e) {
    var t = eD ? eD + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var i = 0, s = r.length, n = Array(s); i < s; i++) n[i] = r[i].fn;
    return n;
  }),
  (eN.prototype.listenerCount = function (e) {
    var t = eD ? eD + e : e,
      r = this._events[t];
    return r ? (r.fn ? 1 : r.length) : 0;
  }),
  (eN.prototype.emit = function (e, t, r, i, s, n) {
    var a = eD ? eD + e : e;
    if (!this._events[a]) return !1;
    var o,
      l,
      h = this._events[a],
      u = arguments.length;
    if (h.fn) {
      switch ((h.once && this.removeListener(e, h.fn, void 0, !0), u)) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, t), !0;
        case 3:
          return h.fn.call(h.context, t, r), !0;
        case 4:
          return h.fn.call(h.context, t, r, i), !0;
        case 5:
          return h.fn.call(h.context, t, r, i, s), !0;
        case 6:
          return h.fn.call(h.context, t, r, i, s, n), !0;
      }
      for (l = 1, o = Array(u - 1); l < u; l++) o[l - 1] = arguments[l];
      h.fn.apply(h.context, o);
    } else {
      var d,
        c = h.length;
      for (l = 0; l < c; l++)
        switch ((h[l].once && this.removeListener(e, h[l].fn, void 0, !0), u)) {
          case 1:
            h[l].fn.call(h[l].context);
            break;
          case 2:
            h[l].fn.call(h[l].context, t);
            break;
          case 3:
            h[l].fn.call(h[l].context, t, r);
            break;
          case 4:
            h[l].fn.call(h[l].context, t, r, i);
            break;
          default:
            if (!o)
              for (d = 1, o = Array(u - 1); d < u; d++) o[d - 1] = arguments[d];
            h[l].fn.apply(h[l].context, o);
        }
    }
    return !0;
  }),
  (eN.prototype.on = function (e, t, r) {
    return eF(this, e, t, r, !1);
  }),
  (eN.prototype.once = function (e, t, r) {
    return eF(this, e, t, r, !0);
  }),
  (eN.prototype.removeListener = function (e, t, r, i) {
    var s = eD ? eD + e : e;
    if (!this._events[s]) return this;
    if (!t) return eL(this, s), this;
    var n = this._events[s];
    if (n.fn)
      n.fn !== t || (i && !n.once) || (r && n.context !== r) || eL(this, s);
    else {
      for (var a = 0, o = [], l = n.length; a < l; a++)
        (n[a].fn !== t || (i && !n[a].once) || (r && n[a].context !== r)) &&
          o.push(n[a]);
      o.length ? (this._events[s] = 1 === o.length ? o[0] : o) : eL(this, s);
    }
    return this;
  }),
  (eN.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = eD ? eD + e : e), this._events[t] && eL(this, t))
        : ((this._events = new eB()), (this._eventsCount = 0)),
      this
    );
  }),
  (eN.prototype.off = eN.prototype.removeListener),
  (eN.prototype.addListener = eN.prototype.on),
  (eN.prefixed = eD),
  (eN.EventEmitter = eN),
  (ek = eN);
var eU = {};
function eG(e, t, r) {
  r = r || 2;
  var i,
    s,
    n,
    a,
    o,
    l,
    h,
    u = t && t.length,
    d = u ? t[0] * r : e.length,
    c = eH(e, 0, d, r, !0),
    p = [];
  if (!c || c.next === c.prev) return p;
  if (
    (u &&
      (c = (function (e, t, r, i) {
        var s,
          n,
          a,
          o,
          l,
          h = [];
        for (s = 0, n = t.length; s < n; s++)
          (a = t[s] * i),
            (o = s < n - 1 ? t[s + 1] * i : e.length),
            (l = eH(e, a, o, i, !1)) === l.next && (l.steiner = !0),
            h.push(
              (function (e) {
                var t = e,
                  r = e;
                do
                  (t.x < r.x || (t.x === r.x && t.y < r.y)) && (r = t),
                    (t = t.next);
                while (t !== e);
                return r;
              })(l)
            );
        for (h.sort(ej), s = 0; s < h.length; s++)
          r = (function (e, t) {
            var r = (function (e, t) {
              var r,
                i,
                s,
                n = t,
                a = e.x,
                o = e.y,
                l = -1 / 0;
              do {
                if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
                  var h =
                    n.x + ((o - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                  if (
                    h <= a &&
                    h > l &&
                    ((l = h), (s = n.x < n.next.x ? n : n.next), h === a)
                  )
                    return s;
                }
                n = n.next;
              } while (n !== t);
              if (!s) return null;
              var u,
                d = s,
                c = s.x,
                p = s.y,
                f = 1 / 0;
              n = s;
              do
                a >= n.x &&
                  n.x >= c &&
                  a !== n.x &&
                  eX(o < p ? a : l, o, c, p, o < p ? l : a, o, n.x, n.y) &&
                  ((u = Math.abs(o - n.y) / (a - n.x)),
                  eK(n, e) &&
                    (u < f ||
                      (u === f &&
                        (n.x > s.x ||
                          (n.x === s.x &&
                            ((r = s),
                            (i = n),
                            0 > eV(r.prev, r, i.prev) &&
                              0 > eV(i.next, r, r.next)))))) &&
                    ((s = n), (f = u))),
                  (n = n.next);
              while (n !== d);
              return s;
            })(e, t);
            if (!r) return t;
            var i = eQ(r, e);
            return ez(i, i.next), ez(r, r.next);
          })(h[s], r);
        return r;
      })(e, t, c, r)),
    e.length > 80 * r)
  ) {
    (i = n = e[0]), (s = a = e[1]);
    for (var f = r; f < d; f += r)
      (o = e[f]),
        (l = e[f + 1]),
        o < i && (i = o),
        l < s && (s = l),
        o > n && (n = o),
        l > a && (a = l);
    h = 0 !== (h = Math.max(n - i, a - s)) ? 32767 / h : 0;
  }
  return (
    (function e(t, r, i, s, n, a, o) {
      if (t) {
        !o &&
          a &&
          (function (e, t, r, i) {
            var s = e;
            do
              0 === s.z && (s.z = e$(s.x, s.y, t, r, i)),
                (s.prevZ = s.prev),
                (s.nextZ = s.next),
                (s = s.next);
            while (s !== e);
            (s.prevZ.nextZ = null),
              (s.prevZ = null),
              (function (e) {
                var t,
                  r,
                  i,
                  s,
                  n,
                  a,
                  o,
                  l,
                  h = 1;
                do {
                  for (r = e, e = null, n = null, a = 0; r; ) {
                    for (
                      a++, i = r, o = 0, t = 0;
                      t < h && (o++, (i = i.nextZ));
                      t++
                    );
                    for (l = h; o > 0 || (l > 0 && i); )
                      0 !== o && (0 === l || !i || r.z <= i.z)
                        ? ((s = r), (r = r.nextZ), o--)
                        : ((s = i), (i = i.nextZ), l--),
                        n ? (n.nextZ = s) : (e = s),
                        (s.prevZ = n),
                        (n = s);
                    r = i;
                  }
                  (n.nextZ = null), (h *= 2);
                } while (a > 1);
              })(s);
          })(t, s, n, a);
        for (var l, h, u = t; t.prev !== t.next; ) {
          if (
            ((l = t.prev),
            (h = t.next),
            a
              ? (function (e, t, r, i) {
                  var s = e.prev,
                    n = e.next;
                  if (eV(s, e, n) >= 0) return !1;
                  for (
                    var a = s.x,
                      o = e.x,
                      l = n.x,
                      h = s.y,
                      u = e.y,
                      d = n.y,
                      c = a < o ? (a < l ? a : l) : o < l ? o : l,
                      p = h < u ? (h < d ? h : d) : u < d ? u : d,
                      f = a > o ? (a > l ? a : l) : o > l ? o : l,
                      m = h > u ? (h > d ? h : d) : u > d ? u : d,
                      g = e$(c, p, t, r, i),
                      y = e$(f, m, t, r, i),
                      _ = e.prevZ,
                      x = e.nextZ;
                    _ && _.z >= g && x && x.z <= y;

                  ) {
                    if (
                      (_.x >= c &&
                        _.x <= f &&
                        _.y >= p &&
                        _.y <= m &&
                        _ !== s &&
                        _ !== n &&
                        eX(a, h, o, u, l, d, _.x, _.y) &&
                        eV(_.prev, _, _.next) >= 0) ||
                      ((_ = _.prevZ),
                      x.x >= c &&
                        x.x <= f &&
                        x.y >= p &&
                        x.y <= m &&
                        x !== s &&
                        x !== n &&
                        eX(a, h, o, u, l, d, x.x, x.y) &&
                        eV(x.prev, x, x.next) >= 0)
                    )
                      return !1;
                    x = x.nextZ;
                  }
                  for (; _ && _.z >= g; ) {
                    if (
                      _.x >= c &&
                      _.x <= f &&
                      _.y >= p &&
                      _.y <= m &&
                      _ !== s &&
                      _ !== n &&
                      eX(a, h, o, u, l, d, _.x, _.y) &&
                      eV(_.prev, _, _.next) >= 0
                    )
                      return !1;
                    _ = _.prevZ;
                  }
                  for (; x && x.z <= y; ) {
                    if (
                      x.x >= c &&
                      x.x <= f &&
                      x.y >= p &&
                      x.y <= m &&
                      x !== s &&
                      x !== n &&
                      eX(a, h, o, u, l, d, x.x, x.y) &&
                      eV(x.prev, x, x.next) >= 0
                    )
                      return !1;
                    x = x.nextZ;
                  }
                  return !0;
                })(t, s, n, a)
              : (function (e) {
                  var t = e.prev,
                    r = e.next;
                  if (eV(t, e, r) >= 0) return !1;
                  for (
                    var i = t.x,
                      s = e.x,
                      n = r.x,
                      a = t.y,
                      o = e.y,
                      l = r.y,
                      h = i < s ? (i < n ? i : n) : s < n ? s : n,
                      u = a < o ? (a < l ? a : l) : o < l ? o : l,
                      d = i > s ? (i > n ? i : n) : s > n ? s : n,
                      c = a > o ? (a > l ? a : l) : o > l ? o : l,
                      p = r.next;
                    p !== t;

                  ) {
                    if (
                      p.x >= h &&
                      p.x <= d &&
                      p.y >= u &&
                      p.y <= c &&
                      eX(i, a, s, o, n, l, p.x, p.y) &&
                      eV(p.prev, p, p.next) >= 0
                    )
                      return !1;
                    p = p.next;
                  }
                  return !0;
                })(t))
          ) {
            r.push((l.i / i) | 0),
              r.push((t.i / i) | 0),
              r.push((h.i / i) | 0),
              e0(t),
              (t = h.next),
              (u = h.next);
            continue;
          }
          if ((t = h) === u) {
            o
              ? 1 === o
                ? e(
                    (t = (function (e, t, r) {
                      var i = e;
                      do {
                        var s = i.prev,
                          n = i.next.next;
                        !eW(s, n) &&
                          eY(s, i, i.next, n) &&
                          eK(s, n) &&
                          eK(n, s) &&
                          (t.push((s.i / r) | 0),
                          t.push((i.i / r) | 0),
                          t.push((n.i / r) | 0),
                          e0(i),
                          e0(i.next),
                          (i = e = n)),
                          (i = i.next);
                      } while (i !== e);
                      return ez(i);
                    })(ez(t), r, i)),
                    r,
                    i,
                    s,
                    n,
                    a,
                    2
                  )
                : 2 === o &&
                  (function (t, r, i, s, n, a) {
                    var o = t;
                    do {
                      for (var l, h, u = o.next.next; u !== o.prev; ) {
                        if (
                          o.i !== u.i &&
                          ((l = o),
                          (h = u),
                          l.next.i !== h.i &&
                            l.prev.i !== h.i &&
                            !(function (e, t) {
                              var r = e;
                              do {
                                if (
                                  r.i !== e.i &&
                                  r.next.i !== e.i &&
                                  r.i !== t.i &&
                                  r.next.i !== t.i &&
                                  eY(r, r.next, e, t)
                                )
                                  return !0;
                                r = r.next;
                              } while (r !== e);
                              return !1;
                            })(l, h) &&
                            ((eK(l, h) &&
                              eK(h, l) &&
                              (function (e, t) {
                                var r = e,
                                  i = !1,
                                  s = (e.x + t.x) / 2,
                                  n = (e.y + t.y) / 2;
                                do
                                  r.y > n != r.next.y > n &&
                                    r.next.y !== r.y &&
                                    s <
                                      ((r.next.x - r.x) * (n - r.y)) /
                                        (r.next.y - r.y) +
                                        r.x &&
                                    (i = !i),
                                    (r = r.next);
                                while (r !== e);
                                return i;
                              })(l, h) &&
                              (eV(l.prev, l, h.prev) || eV(l, h.prev, h))) ||
                              (eW(l, h) &&
                                eV(l.prev, l, l.next) > 0 &&
                                eV(h.prev, h, h.next) > 0)))
                        ) {
                          var d = eQ(o, u);
                          (o = ez(o, o.next)),
                            (d = ez(d, d.next)),
                            e(o, r, i, s, n, a, 0),
                            e(d, r, i, s, n, a, 0);
                          return;
                        }
                        u = u.next;
                      }
                      o = o.next;
                    } while (o !== t);
                  })(t, r, i, s, n, a)
              : e(ez(t), r, i, s, n, a, 1);
            break;
          }
        }
      }
    })(c, p, r, i, s, h, 0),
    p
  );
}
function eH(e, t, r, i, s) {
  var n, a;
  if (s === e2(e, t, r, i) > 0)
    for (n = t; n < r; n += i) a = eJ(n, e[n], e[n + 1], a);
  else for (n = r - i; n >= t; n -= i) a = eJ(n, e[n], e[n + 1], a);
  return a && eW(a, a.next) && (e0(a), (a = a.next)), a;
}
function ez(e, t) {
  if (!e) return e;
  t || (t = e);
  var r,
    i = e;
  do
    if (
      ((r = !1), !i.steiner && (eW(i, i.next) || 0 === eV(i.prev, i, i.next)))
    ) {
      if ((e0(i), (i = t = i.prev) === i.next)) break;
      r = !0;
    } else i = i.next;
  while (r || i !== t);
  return t;
}
function ej(e, t) {
  return e.x - t.x;
}
function e$(e, t, r, i, s) {
  return (
    (e =
      ((e =
        ((e =
          ((e = ((e = ((e - r) * s) | 0) | (e << 8)) & 16711935) | (e << 4)) &
          252645135) |
          (e << 2)) &
        858993459) |
        (e << 1)) &
      1431655765) |
    ((t =
      ((t =
        ((t =
          ((t = ((t = ((t - i) * s) | 0) | (t << 8)) & 16711935) | (t << 4)) &
          252645135) |
          (t << 2)) &
        858993459) |
        (t << 1)) &
      1431655765) <<
      1)
  );
}
function eX(e, t, r, i, s, n, a, o) {
  return (
    (s - a) * (t - o) >= (e - a) * (n - o) &&
    (e - a) * (i - o) >= (r - a) * (t - o) &&
    (r - a) * (n - o) >= (s - a) * (i - o)
  );
}
function eV(e, t, r) {
  return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
}
function eW(e, t) {
  return e.x === t.x && e.y === t.y;
}
function eY(e, t, r, i) {
  var s = eZ(eV(e, t, r)),
    n = eZ(eV(e, t, i)),
    a = eZ(eV(r, i, e)),
    o = eZ(eV(r, i, t));
  return !!(
    (s !== n && a !== o) ||
    (0 === s && eq(e, r, t)) ||
    (0 === n && eq(e, i, t)) ||
    (0 === a && eq(r, e, i)) ||
    (0 === o && eq(r, t, i))
  );
}
function eq(e, t, r) {
  return (
    t.x <= Math.max(e.x, r.x) &&
    t.x >= Math.min(e.x, r.x) &&
    t.y <= Math.max(e.y, r.y) &&
    t.y >= Math.min(e.y, r.y)
  );
}
function eZ(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function eK(e, t) {
  return 0 > eV(e.prev, e, e.next)
    ? eV(e, t, e.next) >= 0 && eV(e, e.prev, t) >= 0
    : 0 > eV(e, t, e.prev) || 0 > eV(e, e.next, t);
}
function eQ(e, t) {
  var r = new e1(e.i, e.x, e.y),
    i = new e1(t.i, t.x, t.y),
    s = e.next,
    n = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (r.next = s),
    (s.prev = r),
    (i.next = r),
    (r.prev = i),
    (n.next = i),
    (i.prev = n),
    i
  );
}
function eJ(e, t, r, i) {
  var s = new e1(e, t, r);
  return (
    i
      ? ((s.next = i.next), (s.prev = i), (i.next.prev = s), (i.next = s))
      : ((s.prev = s), (s.next = s)),
    s
  );
}
function e0(e) {
  (e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function e1(e, t, r) {
  (this.i = e),
    (this.x = t),
    (this.y = r),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
function e2(e, t, r, i) {
  for (var s = 0, n = t, a = r - i; n < r; n += i)
    (s += (e[a] - e[n]) * (e[n + 1] + e[a + 1])), (a = n);
  return s;
}
((eU = eG).default = eG),
  (eG.deviation = function (e, t, r, i) {
    var s = t && t.length,
      n = s ? t[0] * r : e.length,
      a = Math.abs(e2(e, 0, n, r));
    if (s)
      for (var o = 0, l = t.length; o < l; o++) {
        var h = t[o] * r,
          u = o < l - 1 ? t[o + 1] * r : e.length;
        a -= Math.abs(e2(e, h, u, r));
      }
    var d = 0;
    for (o = 0; o < i.length; o += 3) {
      var c = i[o] * r,
        p = i[o + 1] * r,
        f = i[o + 2] * r;
      d += Math.abs(
        (e[c] - e[f]) * (e[p + 1] - e[c + 1]) -
          (e[c] - e[p]) * (e[f + 1] - e[c + 1])
      );
    }
    return 0 === a && 0 === d ? 0 : Math.abs((d - a) / a);
  }),
  (eG.flatten = function (e) {
    for (
      var t = e[0][0].length,
        r = { vertices: [], holes: [], dimensions: t },
        i = 0,
        s = 0;
      s < e.length;
      s++
    ) {
      for (var n = 0; n < e[s].length; n++)
        for (var a = 0; a < t; a++) r.vertices.push(e[s][n][a]);
      s > 0 && ((i += e[s - 1].length), r.holes.push(i));
    }
    return r;
  });
var e3 = j("biuEp");
const e4 = {};
function e5(e, t, r = 3) {
  if (e4[t]) return;
  let i = Error().stack;
  typeof i > "u"
    ? console.warn(
        "PixiJS Deprecation Warning: ",
        `${t}
Deprecated since v${e}`
      )
    : ((i = i
        .split(
          `
`
        )
        .splice(r).join(`
`)),
      console.groupCollapsed
        ? (console.groupCollapsed(
            "%cPixiJS Deprecation Warning: %c%s",
            "color:#614108;background:#fffbe6",
            "font-weight:normal;color:#614108;background:#fffbe6",
            `${t}
Deprecated since v${e}`
          ),
          console.warn(i),
          console.groupEnd())
        : (console.warn(
            "PixiJS Deprecation Warning: ",
            `${t}
Deprecated since v${e}`
          ),
          console.warn(i))),
    (e4[t] = !0);
}
const e6 = {
  get parse() {
    return (
      e5("7.3.0", "utils.url.parse is deprecated, use native URL API instead."),
      e3.parse
    );
  },
  get format() {
    return (
      e5(
        "7.3.0",
        "utils.url.format is deprecated, use native URL API instead."
      ),
      e3.format
    );
  },
  get resolve() {
    return (
      e5(
        "7.3.0",
        "utils.url.resolve is deprecated, use native URL API instead."
      ),
      e3.resolve
    );
  },
};
function e8(e) {
  if ("string" != typeof e)
    throw TypeError(`Path must be a string. Received ${JSON.stringify(e)}`);
}
function e7(e) {
  return e.split("?")[0].split("#")[0];
}
const e9 = {
  toPosix: (e) =>
    e.replace(RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "/"),
  isUrl(e) {
    return /^https?:/.test(this.toPosix(e));
  },
  isDataUrl: (e) =>
    /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(
      e
    ),
  isBlobUrl: (e) => e.startsWith("blob:"),
  hasProtocol(e) {
    return /^[^/:]+:/.test(this.toPosix(e));
  },
  getProtocol(e) {
    e8(e), (e = this.toPosix(e));
    let t = /^file:\/\/\//.exec(e);
    if (t) return t[0];
    let r = /^[^/:]+:\/{0,2}/.exec(e);
    return r ? r[0] : "";
  },
  toAbsolute(e, t, r) {
    if ((e8(e), this.isDataUrl(e) || this.isBlobUrl(e))) return e;
    let i = e7(this.toPosix(t ?? ed.ADAPTER.getBaseUrl())),
      s = e7(this.toPosix(r ?? this.rootname(i)));
    return (e = this.toPosix(e)).startsWith("/")
      ? e9.join(s, e.slice(1))
      : this.isAbsolute(e)
      ? e
      : this.join(i, e);
  },
  normalize(e) {
    if ((e8(e), 0 === e.length)) return ".";
    if (this.isDataUrl(e) || this.isBlobUrl(e)) return e;
    e = this.toPosix(e);
    let t = "",
      r = e.startsWith("/");
    this.hasProtocol(e) && ((t = this.rootname(e)), (e = e.slice(t.length)));
    let i = e.endsWith("/");
    return (
      (e = (function (e, t) {
        let r = "",
          i = 0,
          s = -1,
          n = 0,
          a = -1;
        for (let o = 0; o <= e.length; ++o) {
          if (o < e.length) a = e.charCodeAt(o);
          else {
            if (47 === a) break;
            a = 47;
          }
          if (47 === a) {
            if (!(s === o - 1 || 1 === n)) {
              if (s !== o - 1 && 2 === n) {
                if (
                  r.length < 2 ||
                  2 !== i ||
                  46 !== r.charCodeAt(r.length - 1) ||
                  46 !== r.charCodeAt(r.length - 2)
                ) {
                  if (r.length > 2) {
                    let e = r.lastIndexOf("/");
                    if (e !== r.length - 1) {
                      -1 === e
                        ? ((r = ""), (i = 0))
                        : (i =
                            (r = r.slice(0, e)).length -
                            1 -
                            r.lastIndexOf("/")),
                        (s = o),
                        (n = 0);
                      continue;
                    }
                  } else if (2 === r.length || 1 === r.length) {
                    (r = ""), (i = 0), (s = o), (n = 0);
                    continue;
                  }
                }
                t && (r.length > 0 ? (r += "/..") : (r = ".."), (i = 2));
              } else
                r.length > 0
                  ? (r += `/${e.slice(s + 1, o)}`)
                  : (r = e.slice(s + 1, o)),
                  (i = o - s - 1);
            }
            (s = o), (n = 0);
          } else 46 === a && -1 !== n ? ++n : (n = -1);
        }
        return r;
      })(e, !1)).length > 0 &&
        i &&
        (e += "/"),
      r ? `/${e}` : t + e
    );
  },
  isAbsolute(e) {
    return (
      e8(e), (e = this.toPosix(e)), !!this.hasProtocol(e) || e.startsWith("/")
    );
  },
  join(...e) {
    let t;
    if (0 === e.length) return ".";
    for (let r = 0; r < e.length; ++r) {
      let i = e[r];
      if ((e8(i), i.length > 0)) {
        if (void 0 === t) t = i;
        else {
          let s = e[r - 1] ?? "";
          this.joinExtensions.includes(this.extname(s).toLowerCase())
            ? (t += `/../${i}`)
            : (t += `/${i}`);
        }
      }
    }
    return void 0 === t ? "." : this.normalize(t);
  },
  dirname(e) {
    if ((e8(e), 0 === e.length)) return ".";
    let t = (e = this.toPosix(e)).charCodeAt(0),
      r = 47 === t,
      i = -1,
      s = !0,
      n = this.getProtocol(e),
      a = e;
    e = e.slice(n.length);
    for (let r = e.length - 1; r >= 1; --r)
      if (47 === (t = e.charCodeAt(r))) {
        if (!s) {
          i = r;
          break;
        }
      } else s = !1;
    return -1 === i
      ? r
        ? "/"
        : this.isUrl(a)
        ? n + e
        : n
      : r && 1 === i
      ? "//"
      : n + e.slice(0, i);
  },
  rootname(e) {
    e8(e);
    let t = "";
    if (
      ((t = (e = this.toPosix(e)).startsWith("/") ? "/" : this.getProtocol(e)),
      this.isUrl(e))
    ) {
      let r = e.indexOf("/", t.length);
      (t = -1 !== r ? e.slice(0, r) : e).endsWith("/") || (t += "/");
    }
    return t;
  },
  basename(e, t) {
    e8(e), t && e8(t), (e = e7(this.toPosix(e)));
    let r = 0,
      i = -1,
      s = !0,
      n;
    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return "";
      let a = t.length - 1,
        o = -1;
      for (n = e.length - 1; n >= 0; --n) {
        let l = e.charCodeAt(n);
        if (47 === l) {
          if (!s) {
            r = n + 1;
            break;
          }
        } else
          -1 === o && ((s = !1), (o = n + 1)),
            a >= 0 &&
              (l === t.charCodeAt(a)
                ? -1 == --a && (i = n)
                : ((a = -1), (i = o)));
      }
      return r === i ? (i = o) : -1 === i && (i = e.length), e.slice(r, i);
    }
    for (n = e.length - 1; n >= 0; --n)
      if (47 === e.charCodeAt(n)) {
        if (!s) {
          r = n + 1;
          break;
        }
      } else -1 === i && ((s = !1), (i = n + 1));
    return -1 === i ? "" : e.slice(r, i);
  },
  extname(e) {
    e8(e), (e = e7(this.toPosix(e)));
    let t = -1,
      r = 0,
      i = -1,
      s = !0,
      n = 0;
    for (let a = e.length - 1; a >= 0; --a) {
      let o = e.charCodeAt(a);
      if (47 === o) {
        if (!s) {
          r = a + 1;
          break;
        }
        continue;
      }
      -1 === i && ((s = !1), (i = a + 1)),
        46 === o
          ? -1 === t
            ? (t = a)
            : 1 !== n && (n = 1)
          : -1 !== t && (n = -1);
    }
    return -1 === t ||
      -1 === i ||
      0 === n ||
      (1 === n && t === i - 1 && t === r + 1)
      ? ""
      : e.slice(t, i);
  },
  parse(e) {
    let t;
    e8(e);
    let r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (0 === e.length) return r;
    let i = (e = e7(this.toPosix(e))).charCodeAt(0),
      s = this.isAbsolute(e);
    (r.root = this.rootname(e)), (t = s || this.hasProtocol(e) ? 1 : 0);
    let n = -1,
      a = 0,
      o = -1,
      l = !0,
      h = e.length - 1,
      u = 0;
    for (; h >= t; --h) {
      if (47 === (i = e.charCodeAt(h))) {
        if (!l) {
          a = h + 1;
          break;
        }
        continue;
      }
      -1 === o && ((l = !1), (o = h + 1)),
        46 === i
          ? -1 === n
            ? (n = h)
            : 1 !== u && (u = 1)
          : -1 !== n && (u = -1);
    }
    return (
      -1 === n || -1 === o || 0 === u || (1 === u && n === o - 1 && n === a + 1)
        ? -1 !== o &&
          (0 === a && s
            ? (r.base = r.name = e.slice(1, o))
            : (r.base = r.name = e.slice(a, o)))
        : (0 === a && s
            ? ((r.name = e.slice(1, n)), (r.base = e.slice(1, o)))
            : ((r.name = e.slice(a, n)), (r.base = e.slice(a, o))),
          (r.ext = e.slice(n, o))),
      (r.dir = this.dirname(e)),
      r
    );
  },
  sep: "/",
  delimiter: ":",
  joinExtensions: [".html"],
};
async function te() {
  return (
    e ??
      (e = (async () => {
        let e = document.createElement("canvas").getContext("webgl");
        if (!e) return ei.UNPACK;
        let t = await new Promise((e) => {
          let t = document.createElement("video");
          (t.onloadeddata = () => e(t)),
            (t.onerror = () => e(null)),
            (t.autoplay = !1),
            (t.crossOrigin = "anonymous"),
            (t.preload = "auto"),
            (t.src =
              "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM="),
            t.load();
        });
        if (!t) return ei.UNPACK;
        let r = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, r);
        let i = e.createFramebuffer();
        e.bindFramebuffer(e.FRAMEBUFFER, i),
          e.framebufferTexture2D(
            e.FRAMEBUFFER,
            e.COLOR_ATTACHMENT0,
            e.TEXTURE_2D,
            r,
            0
          ),
          e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
          e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.NONE),
          e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
        let s = new Uint8Array(4);
        return (
          e.readPixels(0, 0, 1, 1, e.RGBA, e.UNSIGNED_BYTE, s),
          e.deleteFramebuffer(i),
          e.deleteTexture(r),
          e.getExtension("WEBGL_lose_context")?.loseContext(),
          s[0] <= s[3] ? ei.PMA : ei.UNPACK
        );
      })()),
    e
  );
}
function tt() {
  e5(
    "7.0.0",
    "skipHello is deprecated, please use settings.RENDER_OPTIONS.hello"
  );
}
function tr() {
  e5("7.0.0", 'sayHello is deprecated, please use Renderer\'s "hello" option');
}
function ti() {
  return (
    typeof t > "u" &&
      (t = (function () {
        let e = {
          stencil: !0,
          failIfMajorPerformanceCaveat: ed.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
        };
        try {
          if (!ed.ADAPTER.getWebGLRenderingContext()) return !1;
          let t = ed.ADAPTER.createCanvas(),
            r =
              t.getContext("webgl", e) || t.getContext("experimental-webgl", e),
            i = !!r?.getContextAttributes()?.stencil;
          if (r) {
            let e = r.getExtension("WEBGL_lose_context");
            e && e.loseContext();
          }
          return (r = null), i;
        } catch {
          return !1;
        }
      })()),
    t
  );
}
var ts = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  tn = function (e) {
    return "string" == typeof e ? e.length > 0 : "number" == typeof e;
  },
  ta = function (e, t, r) {
    return (
      void 0 === t && (t = 0),
      void 0 === r && (r = Math.pow(10, t)),
      Math.round(r * e) / r + 0
    );
  },
  to = function (e, t, r) {
    return (
      void 0 === t && (t = 0),
      void 0 === r && (r = 1),
      e > r ? r : e > t ? e : t
    );
  },
  tl = function (e) {
    return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
  },
  th = function (e) {
    return {
      r: to(e.r, 0, 255),
      g: to(e.g, 0, 255),
      b: to(e.b, 0, 255),
      a: to(e.a),
    };
  },
  tu = function (e) {
    return { r: ta(e.r), g: ta(e.g), b: ta(e.b), a: ta(e.a, 3) };
  },
  td = /^#([0-9a-f]{3,8})$/i,
  tc = function (e) {
    var t = e.toString(16);
    return t.length < 2 ? "0" + t : t;
  },
  tp = function (e) {
    var t = e.r,
      r = e.g,
      i = e.b,
      s = e.a,
      n = Math.max(t, r, i),
      a = n - Math.min(t, r, i),
      o = a
        ? n === t
          ? (r - i) / a
          : n === r
          ? 2 + (i - t) / a
          : 4 + (t - r) / a
        : 0;
    return {
      h: 60 * (o < 0 ? o + 6 : o),
      s: n ? (a / n) * 100 : 0,
      v: (n / 255) * 100,
      a: s,
    };
  },
  tf = function (e) {
    var t = e.h,
      r = e.s,
      i = e.v,
      s = e.a;
    (t = (t / 360) * 6), (r /= 100), (i /= 100);
    var n = Math.floor(t),
      a = i * (1 - r),
      o = i * (1 - (t - n) * r),
      l = i * (1 - (1 - t + n) * r),
      h = n % 6;
    return {
      r: 255 * [i, o, a, a, l, i][h],
      g: 255 * [l, i, i, o, a, a][h],
      b: 255 * [a, a, l, i, i, o][h],
      a: s,
    };
  },
  tm = function (e) {
    return { h: tl(e.h), s: to(e.s, 0, 100), l: to(e.l, 0, 100), a: to(e.a) };
  },
  tg = function (e) {
    return { h: ta(e.h), s: ta(e.s), l: ta(e.l), a: ta(e.a, 3) };
  },
  ty = function (e) {
    var t, r;
    return tf(
      ((t = e.s),
      {
        h: e.h,
        s:
          (t *= ((r = e.l) < 50 ? r : 100 - r) / 100) > 0
            ? ((2 * t) / (r + t)) * 100
            : 0,
        v: r + t,
        a: e.a,
      })
    );
  },
  t_ = function (e) {
    var t, r, i, s;
    return {
      h: (t = tp(e)).h,
      s:
        (s = ((200 - (r = t.s)) * (i = t.v)) / 100) > 0 && s < 200
          ? ((r * i) / 100 / (s <= 100 ? s : 200 - s)) * 100
          : 0,
      l: s / 2,
      a: t.a,
    };
  },
  tx =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  tv =
    /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  tb =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  tE =
    /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  tT = {
    string: [
      [
        function (e) {
          var t = td.exec(e);
          return t
            ? (e = t[1]).length <= 4
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    4 === e.length ? ta(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : 6 === e.length || 8 === e.length
              ? {
                  r: parseInt(e.substr(0, 2), 16),
                  g: parseInt(e.substr(2, 2), 16),
                  b: parseInt(e.substr(4, 2), 16),
                  a:
                    8 === e.length
                      ? ta(parseInt(e.substr(6, 2), 16) / 255, 2)
                      : 1,
                }
              : null
            : null;
        },
        "hex",
      ],
      [
        function (e) {
          var t = tb.exec(e) || tE.exec(e);
          return t
            ? t[2] !== t[4] || t[4] !== t[6]
              ? null
              : th({
                  r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                  g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                  b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                  a: void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                })
            : null;
        },
        "rgb",
      ],
      [
        function (e) {
          var t,
            r,
            i = tx.exec(e) || tv.exec(e);
          return i
            ? ty(
                tm({
                  h:
                    ((t = i[1]),
                    void 0 === (r = i[2]) && (r = "deg"),
                    Number(t) * (ts[r] || 1)),
                  s: Number(i[3]),
                  l: Number(i[4]),
                  a: void 0 === i[5] ? 1 : Number(i[5]) / (i[6] ? 100 : 1),
                })
              )
            : null;
        },
        "hsl",
      ],
    ],
    object: [
      [
        function (e) {
          var t = e.r,
            r = e.g,
            i = e.b,
            s = e.a;
          return tn(t) && tn(r) && tn(i)
            ? th({
                r: Number(t),
                g: Number(r),
                b: Number(i),
                a: Number(void 0 === s ? 1 : s),
              })
            : null;
        },
        "rgb",
      ],
      [
        function (e) {
          var t = e.h,
            r = e.s,
            i = e.l,
            s = e.a;
          return tn(t) && tn(r) && tn(i)
            ? ty(
                tm({
                  h: Number(t),
                  s: Number(r),
                  l: Number(i),
                  a: Number(void 0 === s ? 1 : s),
                })
              )
            : null;
        },
        "hsl",
      ],
      [
        function (e) {
          var t,
            r = e.h,
            i = e.s,
            s = e.v,
            n = e.a;
          return tn(r) && tn(i) && tn(s)
            ? tf({
                h: tl(
                  (t = {
                    h: Number(r),
                    s: Number(i),
                    v: Number(s),
                    a: Number(void 0 === n ? 1 : n),
                  }).h
                ),
                s: to(t.s, 0, 100),
                v: to(t.v, 0, 100),
                a: to(t.a),
              })
            : null;
        },
        "hsv",
      ],
    ],
  },
  tA = function (e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r][0](e);
      if (i) return [i, t[r][1]];
    }
    return [null, void 0];
  },
  tw = function (e, t) {
    var r = t_(e);
    return { h: r.h, s: to(r.s + 100 * t, 0, 100), l: r.l, a: r.a };
  },
  tS = function (e) {
    return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
  },
  tR = function (e, t) {
    var r = t_(e);
    return { h: r.h, s: r.s, l: to(r.l + 100 * t, 0, 100), a: r.a };
  },
  tI = (function () {
    function e(e) {
      (this.parsed = (
        "string" == typeof e
          ? tA(e.trim(), tT.string)
          : "object" == typeof e && null !== e
          ? tA(e, tT.object)
          : [null, void 0]
      )[0]),
        (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
    }
    return (
      (e.prototype.isValid = function () {
        return null !== this.parsed;
      }),
      (e.prototype.brightness = function () {
        return ta(tS(this.rgba), 2);
      }),
      (e.prototype.isDark = function () {
        return 0.5 > tS(this.rgba);
      }),
      (e.prototype.isLight = function () {
        return tS(this.rgba) >= 0.5;
      }),
      (e.prototype.toHex = function () {
        var e, t, r, i, s, n;
        return (
          (t = (e = tu(this.rgba)).r),
          (r = e.g),
          (i = e.b),
          (n = (s = e.a) < 1 ? tc(ta(255 * s)) : ""),
          "#" + tc(t) + tc(r) + tc(i) + n
        );
      }),
      (e.prototype.toRgb = function () {
        return tu(this.rgba);
      }),
      (e.prototype.toRgbString = function () {
        var e, t, r, i, s;
        return (
          (t = (e = tu(this.rgba)).r),
          (r = e.g),
          (i = e.b),
          (s = e.a) < 1
            ? "rgba(" + t + ", " + r + ", " + i + ", " + s + ")"
            : "rgb(" + t + ", " + r + ", " + i + ")"
        );
      }),
      (e.prototype.toHsl = function () {
        return tg(t_(this.rgba));
      }),
      (e.prototype.toHslString = function () {
        var e, t, r, i, s;
        return (
          (t = (e = tg(t_(this.rgba))).h),
          (r = e.s),
          (i = e.l),
          (s = e.a) < 1
            ? "hsla(" + t + ", " + r + "%, " + i + "%, " + s + ")"
            : "hsl(" + t + ", " + r + "%, " + i + "%)"
        );
      }),
      (e.prototype.toHsv = function () {
        var e;
        return {
          h: ta((e = tp(this.rgba)).h),
          s: ta(e.s),
          v: ta(e.v),
          a: ta(e.a, 3),
        };
      }),
      (e.prototype.invert = function () {
        var e;
        return tC({
          r: 255 - (e = this.rgba).r,
          g: 255 - e.g,
          b: 255 - e.b,
          a: e.a,
        });
      }),
      (e.prototype.saturate = function (e) {
        return void 0 === e && (e = 0.1), tC(tw(this.rgba, e));
      }),
      (e.prototype.desaturate = function (e) {
        return void 0 === e && (e = 0.1), tC(tw(this.rgba, -e));
      }),
      (e.prototype.grayscale = function () {
        return tC(tw(this.rgba, -1));
      }),
      (e.prototype.lighten = function (e) {
        return void 0 === e && (e = 0.1), tC(tR(this.rgba, e));
      }),
      (e.prototype.darken = function (e) {
        return void 0 === e && (e = 0.1), tC(tR(this.rgba, -e));
      }),
      (e.prototype.rotate = function (e) {
        return void 0 === e && (e = 15), this.hue(this.hue() + e);
      }),
      (e.prototype.alpha = function (e) {
        var t;
        return "number" == typeof e
          ? tC({ r: (t = this.rgba).r, g: t.g, b: t.b, a: e })
          : ta(this.rgba.a, 3);
      }),
      (e.prototype.hue = function (e) {
        var t = t_(this.rgba);
        return "number" == typeof e
          ? tC({ h: e, s: t.s, l: t.l, a: t.a })
          : ta(t.h);
      }),
      (e.prototype.isEqual = function (e) {
        return this.toHex() === tC(e).toHex();
      }),
      e
    );
  })(),
  tC = function (e) {
    return e instanceof tI ? e : new tI(e);
  },
  tP = [];
!(function (e) {
  e.forEach(function (e) {
    0 > tP.indexOf(e) && (e(tI, tT), tP.push(e));
  });
})([
  function (e, t) {
    var r = {
        white: "#ffffff",
        bisque: "#ffe4c4",
        blue: "#0000ff",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        azure: "#f0ffff",
        whitesmoke: "#f5f5f5",
        papayawhip: "#ffefd5",
        plum: "#dda0dd",
        blanchedalmond: "#ffebcd",
        black: "#000000",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        cornsilk: "#fff8dc",
        cornflowerblue: "#6495ed",
        burlywood: "#deb887",
        aquamarine: "#7fffd4",
        beige: "#f5f5dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkkhaki: "#bdb76b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        peachpuff: "#ffdab9",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkslateblue: "#483d8b",
        gray: "#808080",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        wheat: "#f5deb3",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        ghostwhite: "#f8f8ff",
        darkviolet: "#9400d3",
        magenta: "#ff00ff",
        green: "#008000",
        dodgerblue: "#1e90ff",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        blueviolet: "#8a2be2",
        forestgreen: "#228b22",
        lawngreen: "#7cfc00",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        fuchsia: "#ff00ff",
        brown: "#a52a2a",
        maroon: "#800000",
        mediumblue: "#0000cd",
        lightcoral: "#f08080",
        darkturquoise: "#00ced1",
        lightcyan: "#e0ffff",
        ivory: "#fffff0",
        lightyellow: "#ffffe0",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        linen: "#faf0e6",
        mediumaquamarine: "#66cdaa",
        lemonchiffon: "#fffacd",
        lime: "#00ff00",
        khaki: "#f0e68c",
        mediumseagreen: "#3cb371",
        limegreen: "#32cd32",
        mediumspringgreen: "#00fa9a",
        lightskyblue: "#87cefa",
        lightblue: "#add8e6",
        midnightblue: "#191970",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        mintcream: "#f5fffa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        navajowhite: "#ffdead",
        navy: "#000080",
        mediumvioletred: "#c71585",
        powderblue: "#b0e0e6",
        palegoldenrod: "#eee8aa",
        oldlace: "#fdf5e6",
        paleturquoise: "#afeeee",
        mediumturquoise: "#48d1cc",
        mediumorchid: "#ba55d3",
        rebeccapurple: "#663399",
        lightsteelblue: "#b0c4de",
        mediumslateblue: "#7b68ee",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        orchid: "#da70d6",
        mediumpurple: "#9370db",
        purple: "#800080",
        pink: "#ffc0cb",
        skyblue: "#87ceeb",
        springgreen: "#00ff7f",
        palegreen: "#98fb98",
        red: "#ff0000",
        yellow: "#ffff00",
        slateblue: "#6a5acd",
        lavenderblush: "#fff0f5",
        peru: "#cd853f",
        palevioletred: "#db7093",
        violet: "#ee82ee",
        teal: "#008080",
        slategray: "#708090",
        slategrey: "#708090",
        aliceblue: "#f0f8ff",
        darkseagreen: "#8fbc8f",
        darkolivegreen: "#556b2f",
        greenyellow: "#adff2f",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        tomato: "#ff6347",
        silver: "#c0c0c0",
        sienna: "#a0522d",
        lavender: "#e6e6fa",
        lightgreen: "#90ee90",
        orange: "#ffa500",
        orangered: "#ff4500",
        steelblue: "#4682b4",
        royalblue: "#4169e1",
        turquoise: "#40e0d0",
        yellowgreen: "#9acd32",
        salmon: "#fa8072",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        darksalmon: "#e9967a",
        lightgoldenrodyellow: "#fafad2",
        snow: "#fffafa",
        lightgrey: "#d3d3d3",
        lightgray: "#d3d3d3",
        dimgray: "#696969",
        dimgrey: "#696969",
        olivedrab: "#6b8e23",
        olive: "#808000",
      },
      i = {};
    for (var s in r) i[r[s]] = s;
    var n = {};
    (e.prototype.toName = function (t) {
      if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
        return "transparent";
      var s,
        a = i[this.toHex()];
      if (a) return a;
      if (null == t ? void 0 : t.closest) {
        var o = this.toRgb(),
          l = 1 / 0,
          h = "black";
        if (!n.length) for (var u in r) n[u] = new e(r[u]).toRgb();
        for (var d in r) {
          var c =
            ((s = n[d]),
            Math.pow(o.r - s.r, 2) +
              Math.pow(o.g - s.g, 2) +
              Math.pow(o.b - s.b, 2));
          c < l && ((l = c), (h = d));
        }
        return h;
      }
    }),
      t.string.push([
        function (t) {
          var i = t.toLowerCase(),
            s = "transparent" === i ? "#0000" : r[i];
          return s ? new e(s).toRgb() : null;
        },
        "name",
      ]);
  },
]);
const tk = class e {
  constructor(e = 16777215) {
    (this._value = null),
      (this._components = new Float32Array(4)),
      this._components.fill(1),
      (this._int = 16777215),
      (this.value = e);
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(e) {
    return (this.value = e), this;
  }
  set value(t) {
    if (t instanceof e)
      (this._value = this.cloneSource(t._value)),
        (this._int = t._int),
        this._components.set(t._components);
    else {
      if (null === t) throw Error("Cannot set PIXI.Color#value to null");
      (null !== this._value && this.isSourceEqual(this._value, t)) ||
        (this.normalize(t), (this._value = this.cloneSource(t)));
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(e) {
    return "string" == typeof e ||
      "number" == typeof e ||
      e instanceof Number ||
      null === e
      ? e
      : Array.isArray(e) || ArrayBuffer.isView(e)
      ? e.slice(0)
      : "object" == typeof e && null !== e
      ? { ...e }
      : e;
  }
  isSourceEqual(e, t) {
    let r = typeof e;
    if (r !== typeof t) return !1;
    if ("number" === r || "string" === r || e instanceof Number) return e === t;
    if (
      (Array.isArray(e) && Array.isArray(t)) ||
      (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
    )
      return e.length === t.length && e.every((e, r) => e === t[r]);
    if (null !== e && null !== t) {
      let r = Object.keys(e),
        i = Object.keys(t);
      return r.length === i.length && r.every((r) => e[r] === t[r]);
    }
    return e === t;
  }
  toRgba() {
    let [e, t, r, i] = this._components;
    return { r: e, g: t, b: r, a: i };
  }
  toRgb() {
    let [e, t, r] = this._components;
    return { r: e, g: t, b: r };
  }
  toRgbaString() {
    let [e, t, r] = this.toUint8RgbArray();
    return `rgba(${e},${t},${r},${this.alpha})`;
  }
  toUint8RgbArray(e) {
    let [t, r, i] = this._components;
    return (
      ((e = e ?? [])[0] = Math.round(255 * t)),
      (e[1] = Math.round(255 * r)),
      (e[2] = Math.round(255 * i)),
      e
    );
  }
  toRgbArray(e) {
    e = e ?? [];
    let [t, r, i] = this._components;
    return (e[0] = t), (e[1] = r), (e[2] = i), e;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    let e = this._int;
    return (e >> 16) + (65280 & e) + ((255 & e) << 16);
  }
  multiply(t) {
    let [r, i, s, n] = e.temp.setValue(t)._components;
    return (
      (this._components[0] *= r),
      (this._components[1] *= i),
      (this._components[2] *= s),
      (this._components[3] *= n),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  premultiply(e, t = !0) {
    return (
      t &&
        ((this._components[0] *= e),
        (this._components[1] *= e),
        (this._components[2] *= e)),
      (this._components[3] = e),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toPremultiplied(e, t = !0) {
    if (1 === e) return -16777216 + this._int;
    if (0 === e) return t ? 0 : this._int;
    let r = (this._int >> 16) & 255,
      i = (this._int >> 8) & 255,
      s = 255 & this._int;
    return (
      t &&
        ((r = (r * e + 0.5) | 0),
        (i = (i * e + 0.5) | 0),
        (s = (s * e + 0.5) | 0)),
      ((255 * e) << 24) + (r << 16) + (i << 8) + s
    );
  }
  toHex() {
    let e = this._int.toString(16);
    return `#${"000000".substring(0, 6 - e.length) + e}`;
  }
  toHexa() {
    let e = Math.round(255 * this._components[3]).toString(16);
    return this.toHex() + "00".substring(0, 2 - e.length) + e;
  }
  setAlpha(e) {
    return (this._components[3] = this._clamp(e)), this;
  }
  round(e) {
    let [t, r, i] = this._components;
    return (
      (this._components[0] = Math.round(t * e) / e),
      (this._components[1] = Math.round(r * e) / e),
      (this._components[2] = Math.round(i * e) / e),
      this.refreshInt(),
      (this._value = null),
      this
    );
  }
  toArray(e) {
    e = e ?? [];
    let [t, r, i, s] = this._components;
    return (e[0] = t), (e[1] = r), (e[2] = i), (e[3] = s), e;
  }
  normalize(t) {
    let r, i, s, n;
    if (
      ("number" == typeof t || t instanceof Number) &&
      t >= 0 &&
      t <= 16777215
    ) {
      let e = t;
      (r = ((e >> 16) & 255) / 255),
        (i = ((e >> 8) & 255) / 255),
        (s = (255 & e) / 255),
        (n = 1);
    } else if (
      (Array.isArray(t) || t instanceof Float32Array) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t)), ([r, i, s, n = 1] = t);
    else if (
      (t instanceof Uint8Array || t instanceof Uint8ClampedArray) &&
      t.length >= 3 &&
      t.length <= 4
    )
      (t = this._clamp(t, 0, 255)),
        ([r, i, s, n = 255] = t),
        (r /= 255),
        (i /= 255),
        (s /= 255),
        (n /= 255);
    else if ("string" == typeof t || "object" == typeof t) {
      if ("string" == typeof t) {
        let r = e.HEX_PATTERN.exec(t);
        r && (t = `#${r[2]}`);
      }
      let a = tC(t);
      a.isValid() &&
        (({ r: r, g: i, b: s, a: n } = a.rgba),
        (r /= 255),
        (i /= 255),
        (s /= 255));
    }
    if (void 0 !== r)
      (this._components[0] = r),
        (this._components[1] = i),
        (this._components[2] = s),
        (this._components[3] = n),
        this.refreshInt();
    else throw Error(`Unable to convert color ${t}`);
  }
  refreshInt() {
    this._clamp(this._components);
    let [e, t, r] = this._components;
    this._int = ((255 * e) << 16) + ((255 * t) << 8) + ((255 * r) | 0);
  }
  _clamp(e, t = 0, r = 1) {
    return "number" == typeof e
      ? Math.min(Math.max(e, t), r)
      : (e.forEach((i, s) => {
          e[s] = Math.min(Math.max(i, t), r);
        }),
        e);
  }
};
function tM(e, t = []) {
  return (
    e5("7.2.0", "utils.hex2rgb is deprecated, use Color#toRgbArray instead"),
    tk.shared.setValue(e).toRgbArray(t)
  );
}
function tD(e) {
  return (
    e5("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"),
    tk.shared.setValue(e).toHex()
  );
}
function tB(e) {
  return (
    e5("7.2.0", "utils.string2hex is deprecated, use Color#toNumber instead"),
    tk.shared.setValue(e).toNumber()
  );
}
function tO(e) {
  return (
    e5("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"),
    tk.shared.setValue(e).toNumber()
  );
}
(tk.shared = new tk()),
  (tk.temp = new tk()),
  (tk.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i);
const tF = (function () {
  let e = [],
    t = [];
  for (let r = 0; r < 32; r++) (e[r] = r), (t[r] = r);
  (e[Y.NORMAL_NPM] = Y.NORMAL),
    (e[Y.ADD_NPM] = Y.ADD),
    (e[Y.SCREEN_NPM] = Y.SCREEN),
    (t[Y.NORMAL] = Y.NORMAL_NPM),
    (t[Y.ADD] = Y.ADD_NPM),
    (t[Y.SCREEN] = Y.SCREEN_NPM);
  let r = [];
  return r.push(t), r.push(e), r;
})();
function tL(e, t) {
  return tF[t ? 1 : 0][e];
}
function tN(e, t, r, i = !0) {
  return (
    e5("7.2.0", "utils.premultiplyRgba has moved to Color.premultiply"),
    tk.shared
      .setValue(e)
      .premultiply(t, i)
      .toArray(r ?? new Float32Array(4))
  );
}
function tU(e, t) {
  return (
    e5("7.2.0", "utils.premultiplyTint has moved to Color.toPremultiplied"),
    tk.shared.setValue(e).toPremultiplied(t)
  );
}
function tG(e, t, r, i = !0) {
  return (
    e5("7.2.0", "utils.premultiplyTintToRgba has moved to Color.premultiply"),
    tk.shared
      .setValue(e)
      .premultiply(t, i)
      .toArray(r ?? new Float32Array(4))
  );
}
const tH =
  /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function tz(e, t = null) {
  let r = 6 * e;
  if ((t = t || new Uint16Array(r)).length !== r)
    throw Error(
      `Out buffer length is incorrect, got ${t.length} and expected ${r}`
    );
  for (let e = 0, i = 0; e < r; e += 6, i += 4)
    (t[e + 0] = i + 0),
      (t[e + 1] = i + 1),
      (t[e + 2] = i + 2),
      (t[e + 3] = i + 0),
      (t[e + 4] = i + 2),
      (t[e + 5] = i + 3);
  return t;
}
function tj(e) {
  if (4 === e.BYTES_PER_ELEMENT)
    return e instanceof Float32Array
      ? "Float32Array"
      : e instanceof Uint32Array
      ? "Uint32Array"
      : "Int32Array";
  if (2 === e.BYTES_PER_ELEMENT) {
    if (e instanceof Uint16Array) return "Uint16Array";
  } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array)
    return "Uint8Array";
  return null;
}
const t$ = {
  Float32Array: Float32Array,
  Uint32Array: Uint32Array,
  Int32Array: Int32Array,
  Uint8Array: Uint8Array,
};
function tX(e, t) {
  let r = 0,
    i = 0,
    s = {};
  for (let s = 0; s < e.length; s++) (i += t[s]), (r += e[s].length);
  let n = new ArrayBuffer(4 * r),
    a = null,
    o = 0;
  for (let r = 0; r < e.length; r++) {
    let l = t[r],
      h = e[r],
      u = tj(h);
    s[u] || (s[u] = new t$[u](n)), (a = s[u]);
    for (let e = 0; e < h.length; e++)
      a[((e / l) | 0) * i + o + (e % l)] = h[e];
    o += l;
  }
  return new Float32Array(n);
}
function tV(e) {
  return (
    (e += 0 === e ? 1 : 0),
    --e,
    (e |= e >>> 1),
    (e |= e >>> 2),
    (e |= e >>> 4),
    (e |= e >>> 8),
    (e |= e >>> 16) + 1
  );
}
function tW(e) {
  return !(e & (e - 1)) && !!e;
}
function tY(e) {
  let t = (e > 65535 ? 1 : 0) << 4,
    r = ((e >>>= t) > 255 ? 1 : 0) << 3;
  return (
    (e >>>= r),
    (t |= r),
    (r = (e > 15 ? 1 : 0) << 2),
    (e >>>= r),
    (t |= r),
    (r = (e > 3 ? 1 : 0) << 1),
    (e >>>= r),
    (t |= r) | (e >> 1)
  );
}
function tq(e, t, r) {
  let i;
  let s = e.length;
  if (t >= s || 0 === r) return;
  r = t + r > s ? s - t : r;
  let n = s - r;
  for (i = t; i < n; ++i) e[i] = e[i + r];
  e.length = n;
}
function tZ(e) {
  return 0 === e ? 0 : e < 0 ? -1 : 1;
}
let tK = 0;
function tQ() {
  return ++tK;
}
const tJ = class {
  constructor(e, t, r, i) {
    (this.left = e), (this.top = t), (this.right = r), (this.bottom = i);
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
tJ.EMPTY = new tJ(0, 0, 0, 0);
let t0 = tJ;
const t1 = {},
  t2 = Object.create(null),
  t3 = Object.create(null);
function t4() {
  let e;
  for (e in t2) t2[e].destroy();
  for (e in t3) t3[e].destroy();
}
function t5() {
  let e;
  for (e in t2) delete t2[e];
  for (e in t3) delete t3[e];
}
class t6 {
  constructor(e, t, r) {
    (this._canvas = ed.ADAPTER.createCanvas()),
      (this._context = this._canvas.getContext("2d")),
      (this.resolution = r || ed.RESOLUTION),
      this.resize(e, t);
  }
  clear() {
    this._checkDestroyed(),
      this._context.setTransform(1, 0, 0, 1, 0, 0),
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(e, t) {
    this._checkDestroyed(),
      (this._canvas.width = Math.round(e * this.resolution)),
      (this._canvas.height = Math.round(t * this.resolution));
  }
  destroy() {
    (this._context = null), (this._canvas = null);
  }
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(e) {
    this._checkDestroyed(), (this._canvas.width = Math.round(e));
  }
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(e) {
    this._checkDestroyed(), (this._canvas.height = Math.round(e));
  }
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (null === this._canvas)
      throw TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function t8(e, t, r) {
  for (let i = 0, s = 4 * r * t; i < t; ++i, s += 4)
    if (0 !== e[s + 3]) return !1;
  return !0;
}
function t7(e, t, r, i, s) {
  let n = 4 * t;
  for (let t = i, a = i * n + 4 * r; t <= s; ++t, a += n)
    if (0 !== e[a + 3]) return !1;
  return !0;
}
function t9(e) {
  let { width: t, height: r } = e,
    i = e.getContext("2d", { willReadFrequently: !0 });
  if (null === i) throw TypeError("Failed to get canvas 2D context");
  let s = i.getImageData(0, 0, t, r).data,
    n = 0,
    a = 0,
    o = t - 1,
    l = r - 1;
  for (; a < r && t8(s, t, a); ) ++a;
  if (a === r) return t0.EMPTY;
  for (; t8(s, t, l); ) --l;
  for (; t7(s, t, n, a, l); ) ++n;
  for (; t7(s, t, o, a, l); ) --o;
  return new t0(n, a, ++o, ++l);
}
function re(e) {
  let t = t9(e),
    { width: r, height: i } = t,
    s = null;
  if (!t.isEmpty()) {
    let n = e.getContext("2d");
    if (null === n) throw TypeError("Failed to get canvas 2D context");
    s = n.getImageData(t.left, t.top, r, i);
  }
  return { width: r, height: i, data: s };
}
function rt(e) {
  let t = tH.exec(e);
  if (t)
    return {
      mediaType: t[1] ? t[1].toLowerCase() : void 0,
      subType: t[2] ? t[2].toLowerCase() : void 0,
      charset: t[3] ? t[3].toLowerCase() : void 0,
      encoding: t[4] ? t[4].toLowerCase() : void 0,
      data: t[5],
    };
}
function rr(e, t = globalThis.location) {
  if (e.startsWith("data:")) return "";
  t = t || globalThis.location;
  let r = new URL(e, document.baseURI);
  return r.hostname !== t.hostname ||
    r.port !== t.port ||
    r.protocol !== t.protocol
    ? "anonymous"
    : "";
}
function ri(e, t = 1) {
  let r = ed.RETINA_PREFIX?.exec(e);
  return r ? parseFloat(r[1]) : t;
}
var rs =
  (((C = rs || {}).Renderer = "renderer"),
  (C.Application = "application"),
  (C.RendererSystem = "renderer-webgl-system"),
  (C.RendererPlugin = "renderer-webgl-plugin"),
  (C.CanvasRendererSystem = "renderer-canvas-system"),
  (C.CanvasRendererPlugin = "renderer-canvas-plugin"),
  (C.Asset = "asset"),
  (C.LoadParser = "load-parser"),
  (C.ResolveParser = "resolve-parser"),
  (C.CacheParser = "cache-parser"),
  (C.DetectionParser = "detection-parser"),
  C);
const rn = (e) => {
    if ("function" == typeof e || ("object" == typeof e && e.extension)) {
      if (!e.extension)
        throw Error("Extension class must have an extension object");
      e = {
        ...("object" != typeof e.extension
          ? { type: e.extension }
          : e.extension),
        ref: e,
      };
    }
    if ("object" == typeof e) e = { ...e };
    else throw Error("Invalid extension type");
    return "string" == typeof e.type && (e.type = [e.type]), e;
  },
  ra = (e, t) => rn(e).priority ?? t,
  ro = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...e) {
      return (
        e.map(rn).forEach((e) => {
          e.type.forEach((t) => this._removeHandlers[t]?.(e));
        }),
        this
      );
    },
    add(...e) {
      return (
        e.map(rn).forEach((e) => {
          e.type.forEach((t) => {
            let r = this._addHandlers,
              i = this._queue;
            r[t] ? r[t](e) : ((i[t] = i[t] || []), i[t].push(e));
          });
        }),
        this
      );
    },
    handle(e, t, r) {
      let i = this._addHandlers,
        s = this._removeHandlers;
      if (i[e] || s[e])
        throw Error(`Extension type ${e} already has a handler`);
      (i[e] = t), (s[e] = r);
      let n = this._queue;
      return n[e] && (n[e].forEach((e) => t(e)), delete n[e]), this;
    },
    handleByMap(e, t) {
      return this.handle(
        e,
        (e) => {
          t[e.name] = e.ref;
        },
        (e) => {
          delete t[e.name];
        }
      );
    },
    handleByList(e, t, r = -1) {
      return this.handle(
        e,
        (e) => {
          t.includes(e.ref) ||
            (t.push(e.ref), t.sort((e, t) => ra(t, r) - ra(e, r)));
        },
        (e) => {
          let r = t.indexOf(e.ref);
          -1 !== r && t.splice(r, 1);
        }
      );
    },
  };
class rl {
  constructor(e) {
    "number" == typeof e
      ? (this.rawBinaryData = new ArrayBuffer(e))
      : e instanceof Uint8Array
      ? (this.rawBinaryData = e.buffer)
      : (this.rawBinaryData = e),
      (this.uint32View = new Uint32Array(this.rawBinaryData)),
      (this.float32View = new Float32Array(this.rawBinaryData));
  }
  get int8View() {
    return (
      this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
      this._int8View
    );
  }
  get uint8View() {
    return (
      this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
      this._uint8View
    );
  }
  get int16View() {
    return (
      this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
      this._int16View
    );
  }
  get uint16View() {
    return (
      this._uint16View ||
        (this._uint16View = new Uint16Array(this.rawBinaryData)),
      this._uint16View
    );
  }
  get int32View() {
    return (
      this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
      this._int32View
    );
  }
  view(e) {
    return this[`${e}View`];
  }
  destroy() {
    (this.rawBinaryData = null),
      (this._int8View = null),
      (this._uint8View = null),
      (this._int16View = null),
      (this._uint16View = null),
      (this._int32View = null),
      (this.uint32View = null),
      (this.float32View = null);
  }
  static sizeOf(e) {
    switch (e) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw Error(`${e} isn't a valid view type`);
    }
  }
}
const rh = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}",
].join(`
`);
class ru {
  constructor() {
    (this.data = 0),
      (this.blendMode = Y.NORMAL),
      (this.polygonOffset = 0),
      (this.blend = !0),
      (this.depthMask = !0);
  }
  get blend() {
    return !!(1 & this.data);
  }
  set blend(e) {
    !!(1 & this.data) !== e && (this.data ^= 1);
  }
  get offsets() {
    return !!(2 & this.data);
  }
  set offsets(e) {
    !!(2 & this.data) !== e && (this.data ^= 2);
  }
  get culling() {
    return !!(4 & this.data);
  }
  set culling(e) {
    !!(4 & this.data) !== e && (this.data ^= 4);
  }
  get depthTest() {
    return !!(8 & this.data);
  }
  set depthTest(e) {
    !!(8 & this.data) !== e && (this.data ^= 8);
  }
  get depthMask() {
    return !!(32 & this.data);
  }
  set depthMask(e) {
    !!(32 & this.data) !== e && (this.data ^= 32);
  }
  get clockwiseFrontFace() {
    return !!(16 & this.data);
  }
  set clockwiseFrontFace(e) {
    !!(16 & this.data) !== e && (this.data ^= 16);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e) {
    (this.blend = e !== Y.NONE), (this._blendMode = e);
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e) {
    (this.offsets = !!e), (this._polygonOffset = e);
  }
  static for2d() {
    let e = new ru();
    return (e.depthTest = !1), (e.blend = !0), e;
  }
}
ru.prototype.toString = function () {
  return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
};
const rd = [];
function rc(e, t) {
  if (!e) return null;
  let r = "";
  if ("string" == typeof e) {
    let t = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
    t && (r = t[1].toLowerCase());
  }
  for (let i = rd.length - 1; i >= 0; --i) {
    let s = rd[i];
    if (s.test && s.test(e, r)) return new s(e, t);
  }
  throw Error("Unrecognized source type to auto-detect Resource");
}
class rp {
  constructor(e) {
    (this.items = []), (this._name = e), (this._aliasCount = 0);
  }
  emit(e, t, r, i, s, n, a, o) {
    if (arguments.length > 8) throw Error("max arguments reached");
    let { name: l, items: h } = this;
    this._aliasCount++;
    for (let u = 0, d = h.length; u < d; u++) h[u][l](e, t, r, i, s, n, a, o);
    return h === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 &&
      this.items.length > 1 &&
      ((this._aliasCount = 0), (this.items = this.items.slice(0)));
  }
  add(e) {
    return (
      e[this._name] &&
        (this.ensureNonAliasedItems(), this.remove(e), this.items.push(e)),
      this
    );
  }
  remove(e) {
    let t = this.items.indexOf(e);
    return (
      -1 !== t && (this.ensureNonAliasedItems(), this.items.splice(t, 1)), this
    );
  }
  contains(e) {
    return this.items.includes(e);
  }
  removeAll() {
    return this.ensureNonAliasedItems(), (this.items.length = 0), this;
  }
  destroy() {
    this.removeAll(), (this.items = null), (this._name = null);
  }
  get empty() {
    return 0 === this.items.length;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties(rp.prototype, {
  dispatch: { value: rp.prototype.emit },
  run: { value: rp.prototype.emit },
});
class rf {
  constructor(e = 0, t = 0) {
    (this._width = e),
      (this._height = t),
      (this.destroyed = !1),
      (this.internal = !1),
      (this.onResize = new rp("setRealSize")),
      (this.onUpdate = new rp("update")),
      (this.onError = new rp("onError"));
  }
  bind(e) {
    this.onResize.add(e),
      this.onUpdate.add(e),
      this.onError.add(e),
      (this._width || this._height) &&
        this.onResize.emit(this._width, this._height);
  }
  unbind(e) {
    this.onResize.remove(e), this.onUpdate.remove(e), this.onError.remove(e);
  }
  resize(e, t) {
    (e !== this._width || t !== this._height) &&
      ((this._width = e), (this._height = t), this.onResize.emit(e, t));
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(e, t, r) {
    return !1;
  }
  dispose() {}
  destroy() {
    this.destroyed ||
      ((this.destroyed = !0),
      this.dispose(),
      this.onError.removeAll(),
      (this.onError = null),
      this.onResize.removeAll(),
      (this.onResize = null),
      this.onUpdate.removeAll(),
      (this.onUpdate = null));
  }
  static test(e, t) {
    return !1;
  }
}
class rm extends rf {
  constructor(e, t) {
    let { width: r, height: i } = t || {};
    if (!r || !i) throw Error("BufferResource width or height invalid");
    super(r, i),
      (this.data = e),
      (this.unpackAlignment = t.unpackAlignment ?? 4);
  }
  upload(e, t, r) {
    let i = e.gl;
    i.pixelStorei(i.UNPACK_ALIGNMENT, this.unpackAlignment),
      i.pixelStorei(
        i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        t.alphaMode === ei.UNPACK
      );
    let s = t.realWidth,
      n = t.realHeight;
    return (
      r.width === s && r.height === n
        ? i.texSubImage2D(t.target, 0, 0, 0, s, n, t.format, r.type, this.data)
        : ((r.width = s),
          (r.height = n),
          i.texImage2D(
            t.target,
            0,
            r.internalFormat,
            s,
            n,
            0,
            t.format,
            r.type,
            this.data
          )),
      !0
    );
  }
  dispose() {
    this.data = null;
  }
  static test(e) {
    return (
      null === e ||
      e instanceof Int8Array ||
      e instanceof Uint8Array ||
      e instanceof Uint8ClampedArray ||
      e instanceof Int16Array ||
      e instanceof Uint16Array ||
      e instanceof Int32Array ||
      e instanceof Uint32Array ||
      e instanceof Float32Array
    );
  }
}
const rg = { scaleMode: ee.NEAREST, alphaMode: ei.NPM },
  ry = class e extends U(ek) {
    constructor(t = null, r = null) {
      super();
      let {
        alphaMode: i,
        mipmap: s,
        anisotropicLevel: n,
        scaleMode: a,
        width: o,
        height: l,
        wrapMode: h,
        format: u,
        type: d,
        target: c,
        resolution: p,
        resourceOptions: f,
      } = (r = Object.assign({}, e.defaultOptions, r));
      !t || t instanceof rf || ((t = rc(t, f)).internal = !0),
        (this.resolution = p || ed.RESOLUTION),
        (this.width = Math.round((o || 0) * this.resolution) / this.resolution),
        (this.height =
          Math.round((l || 0) * this.resolution) / this.resolution),
        (this._mipmap = s),
        (this.anisotropicLevel = n),
        (this._wrapMode = h),
        (this._scaleMode = a),
        (this.format = u),
        (this.type = d),
        (this.target = c),
        (this.alphaMode = i),
        (this.uid = tQ()),
        (this.touched = 0),
        (this.isPowerOfTwo = !1),
        this._refreshPOT(),
        (this._glTextures = {}),
        (this.dirtyId = 0),
        (this.dirtyStyleId = 0),
        (this.cacheId = null),
        (this.valid = o > 0 && l > 0),
        (this.textureCacheIds = []),
        (this.destroyed = !1),
        (this.resource = null),
        (this._batchEnabled = 0),
        (this._batchLocation = 0),
        (this.parentTextureArray = null),
        this.setResource(t);
    }
    get realWidth() {
      return Math.round(this.width * this.resolution);
    }
    get realHeight() {
      return Math.round(this.height * this.resolution);
    }
    get mipmap() {
      return this._mipmap;
    }
    set mipmap(e) {
      this._mipmap !== e && ((this._mipmap = e), this.dirtyStyleId++);
    }
    get scaleMode() {
      return this._scaleMode;
    }
    set scaleMode(e) {
      this._scaleMode !== e && ((this._scaleMode = e), this.dirtyStyleId++);
    }
    get wrapMode() {
      return this._wrapMode;
    }
    set wrapMode(e) {
      this._wrapMode !== e && ((this._wrapMode = e), this.dirtyStyleId++);
    }
    setStyle(e, t) {
      let r;
      return (
        void 0 !== e &&
          e !== this.scaleMode &&
          ((this.scaleMode = e), (r = !0)),
        void 0 !== t && t !== this.mipmap && ((this.mipmap = t), (r = !0)),
        r && this.dirtyStyleId++,
        this
      );
    }
    setSize(e, t, r) {
      return (r = r || this.resolution), this.setRealSize(e * r, t * r, r);
    }
    setRealSize(e, t, r) {
      return (
        (this.resolution = r || this.resolution),
        (this.width = Math.round(e) / this.resolution),
        (this.height = Math.round(t) / this.resolution),
        this._refreshPOT(),
        this.update(),
        this
      );
    }
    _refreshPOT() {
      this.isPowerOfTwo = tW(this.realWidth) && tW(this.realHeight);
    }
    setResolution(e) {
      let t = this.resolution;
      return (
        t === e ||
          ((this.resolution = e),
          this.valid &&
            ((this.width = Math.round(this.width * t) / e),
            (this.height = Math.round(this.height * t) / e),
            this.emit("update", this)),
          this._refreshPOT()),
        this
      );
    }
    setResource(e) {
      if (this.resource === e) return this;
      if (this.resource) throw Error("Resource can be set only once");
      return e.bind(this), (this.resource = e), this;
    }
    update() {
      this.valid
        ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this))
        : this.width > 0 &&
          this.height > 0 &&
          ((this.valid = !0),
          this.emit("loaded", this),
          this.emit("update", this));
    }
    onError(e) {
      this.emit("error", this, e);
    }
    destroy() {
      this.resource &&
        (this.resource.unbind(this),
        this.resource.internal && this.resource.destroy(),
        (this.resource = null)),
        this.cacheId &&
          (delete t3[this.cacheId],
          delete t2[this.cacheId],
          (this.cacheId = null)),
        (this.valid = !1),
        this.dispose(),
        e.removeFromCache(this),
        (this.textureCacheIds = null),
        (this.destroyed = !0),
        this.emit("destroyed", this),
        this.removeAllListeners();
    }
    dispose() {
      this.emit("dispose", this);
    }
    castToBaseTexture() {
      return this;
    }
    static from(t, r, i = ed.STRICT_TEXTURE_CACHE) {
      let s = "string" == typeof t,
        n = null;
      if (s) n = t;
      else {
        if (!t._pixiId) {
          let e = r?.pixiIdPrefix || "pixiid";
          t._pixiId = `${e}_${tQ()}`;
        }
        n = t._pixiId;
      }
      let a = t3[n];
      if (s && i && !a)
        throw Error(`The cacheId "${n}" does not exist in BaseTextureCache.`);
      return a || (((a = new e(t, r)).cacheId = n), e.addToCache(a, n)), a;
    }
    static fromBuffer(t, r, i, s) {
      let n, a;
      let o = new rm((t = t || new Float32Array(r * i * 4)), {
        width: r,
        height: i,
        ...s?.resourceOptions,
      });
      return (
        t instanceof Float32Array
          ? ((n = Z.RGBA), (a = Q.FLOAT))
          : t instanceof Int32Array
          ? ((n = Z.RGBA_INTEGER), (a = Q.INT))
          : t instanceof Uint32Array
          ? ((n = Z.RGBA_INTEGER), (a = Q.UNSIGNED_INT))
          : t instanceof Int16Array
          ? ((n = Z.RGBA_INTEGER), (a = Q.SHORT))
          : t instanceof Uint16Array
          ? ((n = Z.RGBA_INTEGER), (a = Q.UNSIGNED_SHORT))
          : t instanceof Int8Array
          ? ((n = Z.RGBA), (a = Q.BYTE))
          : ((n = Z.RGBA), (a = Q.UNSIGNED_BYTE)),
        (o.internal = !0),
        new e(o, Object.assign({}, rg, { type: a, format: n }, s))
      );
    }
    static addToCache(e, t) {
      t &&
        (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t),
        t3[t] &&
          t3[t] !== e &&
          console.warn(
            `BaseTexture added to the cache with an id [${t}] that already had an entry`
          ),
        (t3[t] = e));
    }
    static removeFromCache(e) {
      if ("string" == typeof e) {
        let t = t3[e];
        if (t) {
          let r = t.textureCacheIds.indexOf(e);
          return r > -1 && t.textureCacheIds.splice(r, 1), delete t3[e], t;
        }
      } else if (e?.textureCacheIds) {
        for (let t = 0; t < e.textureCacheIds.length; ++t)
          delete t3[e.textureCacheIds[t]];
        return (e.textureCacheIds.length = 0), e;
      }
      return null;
    }
  };
(ry.defaultOptions = {
  mipmap: er.POW2,
  anisotropicLevel: 0,
  scaleMode: ee.LINEAR,
  wrapMode: et.CLAMP,
  alphaMode: ei.UNPACK,
  target: K.TEXTURE_2D,
  format: Z.RGBA,
  type: Q.UNSIGNED_BYTE,
}),
  (ry._globalBatch = 0);
let r_ = ry;
class rx {
  constructor() {
    (this.texArray = null),
      (this.blend = 0),
      (this.type = q.TRIANGLES),
      (this.start = 0),
      (this.size = 0),
      (this.data = null);
  }
}
let rv = 0;
class rb {
  constructor(e, t = !0, r = !1) {
    (this.data = e || new Float32Array(1)),
      (this._glBuffers = {}),
      (this._updateID = 0),
      (this.index = r),
      (this.static = t),
      (this.id = rv++),
      (this.disposeRunner = new rp("disposeBuffer"));
  }
  update(e) {
    e instanceof Array && (e = new Float32Array(e)),
      (this.data = e || this.data),
      this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(), (this.data = null);
  }
  set index(e) {
    this.type = e ? eu.ELEMENT_ARRAY_BUFFER : eu.ARRAY_BUFFER;
  }
  get index() {
    return this.type === eu.ELEMENT_ARRAY_BUFFER;
  }
  static from(e) {
    return e instanceof Array && (e = new Float32Array(e)), new rb(e);
  }
}
class rE {
  constructor(e, t = 0, r = !1, i = Q.FLOAT, s, n, a, o = 1) {
    (this.buffer = e),
      (this.size = t),
      (this.normalized = r),
      (this.type = i),
      (this.stride = s),
      (this.start = n),
      (this.instance = a),
      (this.divisor = o);
  }
  destroy() {
    this.buffer = null;
  }
  static from(e, t, r, i, s) {
    return new rE(e, t, r, i, s);
  }
}
const rT = {
    Float32Array: Float32Array,
    Uint32Array: Uint32Array,
    Int32Array: Int32Array,
    Uint8Array: Uint8Array,
  },
  rA = { 5126: 4, 5123: 2, 5121: 1 };
let rw = 0;
const rS = {
  Float32Array: Float32Array,
  Uint32Array: Uint32Array,
  Int32Array: Int32Array,
  Uint8Array: Uint8Array,
  Uint16Array: Uint16Array,
};
class rR {
  constructor(e = [], t = {}) {
    (this.buffers = e),
      (this.indexBuffer = null),
      (this.attributes = t),
      (this.glVertexArrayObjects = {}),
      (this.id = rw++),
      (this.instanced = !1),
      (this.instanceCount = 1),
      (this.disposeRunner = new rp("disposeGeometry")),
      (this.refCount = 0);
  }
  addAttribute(e, t, r = 0, i = !1, s, n, a, o = !1) {
    if (!t) throw Error("You must pass a buffer when creating an attribute");
    t instanceof rb ||
      (t instanceof Array && (t = new Float32Array(t)), (t = new rb(t)));
    let l = e.split("|");
    if (l.length > 1) {
      for (let e = 0; e < l.length; e++) this.addAttribute(l[e], t, r, i, s);
      return this;
    }
    let h = this.buffers.indexOf(t);
    return (
      -1 === h && (this.buffers.push(t), (h = this.buffers.length - 1)),
      (this.attributes[e] = new rE(h, r, i, s, n, a, o)),
      (this.instanced = this.instanced || o),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  getBuffer(e) {
    return this.buffers[this.getAttribute(e).buffer];
  }
  addIndex(e) {
    return (
      e instanceof rb ||
        (e instanceof Array && (e = new Uint16Array(e)), (e = new rb(e))),
      (e.type = eu.ELEMENT_ARRAY_BUFFER),
      (this.indexBuffer = e),
      this.buffers.includes(e) || this.buffers.push(e),
      this
    );
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    let e;
    if (
      1 === this.buffers.length ||
      (2 === this.buffers.length && this.indexBuffer)
    )
      return this;
    let t = [],
      r = [],
      i = new rb();
    for (e in this.attributes) {
      let i = this.attributes[e],
        s = this.buffers[i.buffer];
      t.push(s.data), r.push((i.size * rA[i.type]) / 4), (i.buffer = 0);
    }
    for (
      i.data = (function (e, t) {
        let r = 0,
          i = 0,
          s = {};
        for (let s = 0; s < e.length; s++) (i += t[s]), (r += e[s].length);
        let n = new ArrayBuffer(4 * r),
          a = null,
          o = 0;
        for (let r = 0; r < e.length; r++) {
          let l = t[r],
            h = e[r],
            u = tj(h);
          s[u] || (s[u] = new rT[u](n)), (a = s[u]);
          for (let e = 0; e < h.length; e++)
            a[((e / l) | 0) * i + o + (e % l)] = h[e];
          o += l;
        }
        return new Float32Array(n);
      })(t, r),
        e = 0;
      e < this.buffers.length;
      e++
    )
      this.buffers[e] !== this.indexBuffer && this.buffers[e].destroy();
    return (
      (this.buffers = [i]),
      this.indexBuffer && this.buffers.push(this.indexBuffer),
      this
    );
  }
  getSize() {
    for (let e in this.attributes) {
      let t = this.attributes[e];
      return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroy() {
    this.dispose(),
      (this.buffers = null),
      (this.indexBuffer = null),
      (this.attributes = null);
  }
  clone() {
    let e = new rR();
    for (let t = 0; t < this.buffers.length; t++)
      e.buffers[t] = new rb(this.buffers[t].data.slice(0));
    for (let t in this.attributes) {
      let r = this.attributes[t];
      e.attributes[t] = new rE(
        r.buffer,
        r.size,
        r.normalized,
        r.type,
        r.stride,
        r.start,
        r.instance
      );
    }
    return (
      this.indexBuffer &&
        ((e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)]),
        (e.indexBuffer.type = eu.ELEMENT_ARRAY_BUFFER)),
      e
    );
  }
  static merge(e) {
    let t;
    let r = new rR(),
      i = [],
      s = [],
      n = [];
    for (let r = 0; r < e.length; r++) {
      t = e[r];
      for (let e = 0; e < t.buffers.length; e++)
        (s[e] = s[e] || 0), (s[e] += t.buffers[e].data.length), (n[e] = 0);
    }
    for (let e = 0; e < t.buffers.length; e++)
      (i[e] = new rS[tj(t.buffers[e].data)](s[e])),
        (r.buffers[e] = new rb(i[e]));
    for (let r = 0; r < e.length; r++) {
      t = e[r];
      for (let e = 0; e < t.buffers.length; e++)
        i[e].set(t.buffers[e].data, n[e]), (n[e] += t.buffers[e].data.length);
    }
    if (((r.attributes = t.attributes), t.indexBuffer)) {
      (r.indexBuffer = r.buffers[t.buffers.indexOf(t.indexBuffer)]),
        (r.indexBuffer.type = eu.ELEMENT_ARRAY_BUFFER);
      let i = 0,
        s = 0,
        n = 0,
        a = 0;
      for (let e = 0; e < t.buffers.length; e++)
        if (t.buffers[e] !== t.indexBuffer) {
          a = e;
          break;
        }
      for (let e in t.attributes) {
        let r = t.attributes[e];
        (0 | r.buffer) === a && (s += (r.size * rA[r.type]) / 4);
      }
      for (let t = 0; t < e.length; t++) {
        let o = e[t].indexBuffer.data;
        for (let e = 0; e < o.length; e++) r.indexBuffer.data[e + n] += i;
        (i += e[t].buffers[a].data.length / s), (n += o.length);
      }
    }
    return r;
  }
}
class rI extends rR {
  constructor(e = !1) {
    super(),
      (this._buffer = new rb(null, e, !1)),
      (this._indexBuffer = new rb(null, e, !0)),
      this.addAttribute("aVertexPosition", this._buffer, 2, !1, Q.FLOAT)
        .addAttribute("aTextureCoord", this._buffer, 2, !1, Q.FLOAT)
        .addAttribute("aColor", this._buffer, 4, !0, Q.UNSIGNED_BYTE)
        .addAttribute("aTextureId", this._buffer, 1, !0, Q.FLOAT)
        .addIndex(this._indexBuffer);
  }
}
const rC = 2 * Math.PI,
  rP = 180 / Math.PI,
  rk = Math.PI / 180;
var rM =
  (((P = rM || {})[(P.POLY = 0)] = "POLY"),
  (P[(P.RECT = 1)] = "RECT"),
  (P[(P.CIRC = 2)] = "CIRC"),
  (P[(P.ELIP = 3)] = "ELIP"),
  (P[(P.RREC = 4)] = "RREC"),
  P);
class rD {
  constructor(e = 0, t = 0) {
    (this.x = 0), (this.y = 0), (this.x = e), (this.y = t);
  }
  clone() {
    return new rD(this.x, this.y);
  }
  copyFrom(e) {
    return this.set(e.x, e.y), this;
  }
  copyTo(e) {
    return e.set(this.x, this.y), e;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  set(e = 0, t = e) {
    return (this.x = e), (this.y = t), this;
  }
}
rD.prototype.toString = function () {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const rB = [new rD(), new rD(), new rD(), new rD()];
class rO {
  constructor(e = 0, t = 0, r = 0, i = 0) {
    (this.x = Number(e)),
      (this.y = Number(t)),
      (this.width = Number(r)),
      (this.height = Number(i)),
      (this.type = rM.RECT);
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new rO(0, 0, 0, 0);
  }
  clone() {
    return new rO(this.x, this.y, this.width, this.height);
  }
  copyFrom(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.width = e.width),
      (this.height = e.height),
      this
    );
  }
  copyTo(e) {
    return (
      (e.x = this.x),
      (e.y = this.y),
      (e.width = this.width),
      (e.height = this.height),
      e
    );
  }
  contains(e, t) {
    return (
      !(this.width <= 0) &&
      !(this.height <= 0) &&
      e >= this.x &&
      e < this.x + this.width &&
      t >= this.y &&
      t < this.y + this.height
    );
  }
  intersects(e, t) {
    if (!t) {
      let t = this.x < e.x ? e.x : this.x;
      if ((this.right > e.right ? e.right : this.right) <= t) return !1;
      let r = this.y < e.y ? e.y : this.y;
      return (this.bottom > e.bottom ? e.bottom : this.bottom) > r;
    }
    let r = this.left,
      i = this.right,
      s = this.top,
      n = this.bottom;
    if (i <= r || n <= s) return !1;
    let a = rB[0].set(e.left, e.top),
      o = rB[1].set(e.left, e.bottom),
      l = rB[2].set(e.right, e.top),
      h = rB[3].set(e.right, e.bottom);
    if (l.x <= a.x || o.y <= a.y) return !1;
    let u = Math.sign(t.a * t.d - t.b * t.c);
    if (
      0 === u ||
      (t.apply(a, a),
      t.apply(o, o),
      t.apply(l, l),
      t.apply(h, h),
      Math.max(a.x, o.x, l.x, h.x) <= r ||
        Math.min(a.x, o.x, l.x, h.x) >= i ||
        Math.max(a.y, o.y, l.y, h.y) <= s ||
        Math.min(a.y, o.y, l.y, h.y) >= n)
    )
      return !1;
    let d = u * (o.y - a.y),
      c = u * (a.x - o.x),
      p = d * r + c * s,
      f = d * i + c * s,
      m = d * r + c * n,
      g = d * i + c * n;
    if (
      Math.max(p, f, m, g) <= d * a.x + c * a.y ||
      Math.min(p, f, m, g) >= d * h.x + c * h.y
    )
      return !1;
    let y = u * (a.y - l.y),
      _ = u * (l.x - a.x),
      x = y * r + _ * s,
      v = y * i + _ * s,
      b = y * r + _ * n,
      E = y * i + _ * n;
    return !(
      Math.max(x, v, b, E) <= y * a.x + _ * a.y ||
      Math.min(x, v, b, E) >= y * h.x + _ * h.y
    );
  }
  pad(e = 0, t = e) {
    return (
      (this.x -= e),
      (this.y -= t),
      (this.width += 2 * e),
      (this.height += 2 * t),
      this
    );
  }
  fit(e) {
    let t = Math.max(this.x, e.x),
      r = Math.min(this.x + this.width, e.x + e.width),
      i = Math.max(this.y, e.y),
      s = Math.min(this.y + this.height, e.y + e.height);
    return (
      (this.x = t),
      (this.width = Math.max(r - t, 0)),
      (this.y = i),
      (this.height = Math.max(s - i, 0)),
      this
    );
  }
  ceil(e = 1, t = 0.001) {
    let r = Math.ceil((this.x + this.width - t) * e) / e,
      i = Math.ceil((this.y + this.height - t) * e) / e;
    return (
      (this.x = Math.floor((this.x + t) * e) / e),
      (this.y = Math.floor((this.y + t) * e) / e),
      (this.width = r - this.x),
      (this.height = i - this.y),
      this
    );
  }
  enlarge(e) {
    let t = Math.min(this.x, e.x),
      r = Math.max(this.x + this.width, e.x + e.width),
      i = Math.min(this.y, e.y),
      s = Math.max(this.y + this.height, e.y + e.height);
    return (
      (this.x = t),
      (this.width = r - t),
      (this.y = i),
      (this.height = s - i),
      this
    );
  }
}
rO.prototype.toString = function () {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class rF {
  constructor(e = 0, t = 0, r = 0) {
    (this.x = e), (this.y = t), (this.radius = r), (this.type = rM.CIRC);
  }
  clone() {
    return new rF(this.x, this.y, this.radius);
  }
  contains(e, t) {
    if (this.radius <= 0) return !1;
    let r = this.radius * this.radius,
      i = this.x - e,
      s = this.y - t;
    return (i *= i), (s *= s), i + s <= r;
  }
  getBounds() {
    return new rO(
      this.x - this.radius,
      this.y - this.radius,
      2 * this.radius,
      2 * this.radius
    );
  }
}
rF.prototype.toString = function () {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class rL {
  constructor(e = 0, t = 0, r = 0, i = 0) {
    (this.x = e),
      (this.y = t),
      (this.width = r),
      (this.height = i),
      (this.type = rM.ELIP);
  }
  clone() {
    return new rL(this.x, this.y, this.width, this.height);
  }
  contains(e, t) {
    if (this.width <= 0 || this.height <= 0) return !1;
    let r = (e - this.x) / this.width,
      i = (t - this.y) / this.height;
    return (r *= r), (i *= i), r + i <= 1;
  }
  getBounds() {
    return new rO(
      this.x - this.width,
      this.y - this.height,
      this.width,
      this.height
    );
  }
}
rL.prototype.toString = function () {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class rN {
  constructor(...e) {
    let t = Array.isArray(e[0]) ? e[0] : e;
    if ("number" != typeof t[0]) {
      let e = [];
      for (let r = 0, i = t.length; r < i; r++) e.push(t[r].x, t[r].y);
      t = e;
    }
    (this.points = t), (this.type = rM.POLY), (this.closeStroke = !0);
  }
  clone() {
    let e = new rN(this.points.slice());
    return (e.closeStroke = this.closeStroke), e;
  }
  contains(e, t) {
    let r = !1,
      i = this.points.length / 2;
    for (let s = 0, n = i - 1; s < i; n = s++) {
      let i = this.points[2 * s],
        a = this.points[2 * s + 1],
        o = this.points[2 * n],
        l = this.points[2 * n + 1];
      a > t != l > t && e < ((t - a) / (l - a)) * (o - i) + i && (r = !r);
    }
    return r;
  }
}
rN.prototype.toString = function () {
  return `[@pixi/math:PolygoncloseStroke=${
    this.closeStroke
  }points=${this.points.reduce((e, t) => `${e}, ${t}`, "")}]`;
};
class rU {
  constructor(e = 0, t = 0, r = 0, i = 0, s = 20) {
    (this.x = e),
      (this.y = t),
      (this.width = r),
      (this.height = i),
      (this.radius = s),
      (this.type = rM.RREC);
  }
  clone() {
    return new rU(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(e, t) {
    if (this.width <= 0 || this.height <= 0) return !1;
    if (
      e >= this.x &&
      e <= this.x + this.width &&
      t >= this.y &&
      t <= this.y + this.height
    ) {
      let r = Math.max(
        0,
        Math.min(this.radius, Math.min(this.width, this.height) / 2)
      );
      if (
        (t >= this.y + r && t <= this.y + this.height - r) ||
        (e >= this.x + r && e <= this.x + this.width - r)
      )
        return !0;
      let i = e - (this.x + r),
        s = t - (this.y + r),
        n = r * r;
      if (
        i * i + s * s <= n ||
        (i = e - (this.x + this.width - r)) * i + s * s <= n ||
        i * i + (s = t - (this.y + this.height - r)) * s <= n ||
        (i = e - (this.x + r)) * i + s * s <= n
      )
        return !0;
    }
    return !1;
  }
}
rU.prototype.toString = function () {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class rG {
  constructor(e = 1, t = 0, r = 0, i = 1, s = 0, n = 0) {
    (this.array = null),
      (this.a = e),
      (this.b = t),
      (this.c = r),
      (this.d = i),
      (this.tx = s),
      (this.ty = n);
  }
  fromArray(e) {
    (this.a = e[0]),
      (this.b = e[1]),
      (this.c = e[3]),
      (this.d = e[4]),
      (this.tx = e[2]),
      (this.ty = e[5]);
  }
  set(e, t, r, i, s, n) {
    return (
      (this.a = e),
      (this.b = t),
      (this.c = r),
      (this.d = i),
      (this.tx = s),
      (this.ty = n),
      this
    );
  }
  toArray(e, t) {
    this.array || (this.array = new Float32Array(9));
    let r = t || this.array;
    return (
      e
        ? ((r[0] = this.a),
          (r[1] = this.b),
          (r[2] = 0),
          (r[3] = this.c),
          (r[4] = this.d),
          (r[5] = 0),
          (r[6] = this.tx),
          (r[7] = this.ty))
        : ((r[0] = this.a),
          (r[1] = this.c),
          (r[2] = this.tx),
          (r[3] = this.b),
          (r[4] = this.d),
          (r[5] = this.ty),
          (r[6] = 0),
          (r[7] = 0)),
      (r[8] = 1),
      r
    );
  }
  apply(e, t) {
    t = t || new rD();
    let r = e.x,
      i = e.y;
    return (
      (t.x = this.a * r + this.c * i + this.tx),
      (t.y = this.b * r + this.d * i + this.ty),
      t
    );
  }
  applyInverse(e, t) {
    t = t || new rD();
    let r = 1 / (this.a * this.d + -(this.c * this.b)),
      i = e.x,
      s = e.y;
    return (
      (t.x =
        this.d * r * i +
        -this.c * r * s +
        (this.ty * this.c - this.tx * this.d) * r),
      (t.y =
        this.a * r * s +
        -this.b * r * i +
        (-this.ty * this.a + this.tx * this.b) * r),
      t
    );
  }
  translate(e, t) {
    return (this.tx += e), (this.ty += t), this;
  }
  scale(e, t) {
    return (
      (this.a *= e),
      (this.d *= t),
      (this.c *= e),
      (this.b *= t),
      (this.tx *= e),
      (this.ty *= t),
      this
    );
  }
  rotate(e) {
    let t = Math.cos(e),
      r = Math.sin(e),
      i = this.a,
      s = this.c,
      n = this.tx;
    return (
      (this.a = i * t - this.b * r),
      (this.b = i * r + this.b * t),
      (this.c = s * t - this.d * r),
      (this.d = s * r + this.d * t),
      (this.tx = n * t - this.ty * r),
      (this.ty = n * r + this.ty * t),
      this
    );
  }
  append(e) {
    let t = this.a,
      r = this.b,
      i = this.c,
      s = this.d;
    return (
      (this.a = e.a * t + e.b * i),
      (this.b = e.a * r + e.b * s),
      (this.c = e.c * t + e.d * i),
      (this.d = e.c * r + e.d * s),
      (this.tx = e.tx * t + e.ty * i + this.tx),
      (this.ty = e.tx * r + e.ty * s + this.ty),
      this
    );
  }
  setTransform(e, t, r, i, s, n, a, o, l) {
    return (
      (this.a = Math.cos(a + l) * s),
      (this.b = Math.sin(a + l) * s),
      (this.c = -Math.sin(a - o) * n),
      (this.d = Math.cos(a - o) * n),
      (this.tx = e - (r * this.a + i * this.c)),
      (this.ty = t - (r * this.b + i * this.d)),
      this
    );
  }
  prepend(e) {
    let t = this.tx;
    if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d) {
      let t = this.a,
        r = this.c;
      (this.a = t * e.a + this.b * e.c),
        (this.b = t * e.b + this.b * e.d),
        (this.c = r * e.a + this.d * e.c),
        (this.d = r * e.b + this.d * e.d);
    }
    return (
      (this.tx = t * e.a + this.ty * e.c + e.tx),
      (this.ty = t * e.b + this.ty * e.d + e.ty),
      this
    );
  }
  decompose(e) {
    let t = this.a,
      r = this.b,
      i = this.c,
      s = this.d,
      n = e.pivot,
      a = -Math.atan2(-i, s),
      o = Math.atan2(r, t),
      l = Math.abs(a + o);
    return (
      l < 1e-5 || 1e-5 > Math.abs(rC - l)
        ? ((e.rotation = o), (e.skew.x = e.skew.y = 0))
        : ((e.rotation = 0), (e.skew.x = a), (e.skew.y = o)),
      (e.scale.x = Math.sqrt(t * t + r * r)),
      (e.scale.y = Math.sqrt(i * i + s * s)),
      (e.position.x = this.tx + (n.x * t + n.y * i)),
      (e.position.y = this.ty + (n.x * r + n.y * s)),
      e
    );
  }
  invert() {
    let e = this.a,
      t = this.b,
      r = this.c,
      i = this.d,
      s = this.tx,
      n = e * i - t * r;
    return (
      (this.a = i / n),
      (this.b = -t / n),
      (this.c = -r / n),
      (this.d = e / n),
      (this.tx = (r * this.ty - i * s) / n),
      (this.ty = -(e * this.ty - t * s) / n),
      this
    );
  }
  identity() {
    return (
      (this.a = 1),
      (this.b = 0),
      (this.c = 0),
      (this.d = 1),
      (this.tx = 0),
      (this.ty = 0),
      this
    );
  }
  clone() {
    let e = new rG();
    return (
      (e.a = this.a),
      (e.b = this.b),
      (e.c = this.c),
      (e.d = this.d),
      (e.tx = this.tx),
      (e.ty = this.ty),
      e
    );
  }
  copyTo(e) {
    return (
      (e.a = this.a),
      (e.b = this.b),
      (e.c = this.c),
      (e.d = this.d),
      (e.tx = this.tx),
      (e.ty = this.ty),
      e
    );
  }
  copyFrom(e) {
    return (
      (this.a = e.a),
      (this.b = e.b),
      (this.c = e.c),
      (this.d = e.d),
      (this.tx = e.tx),
      (this.ty = e.ty),
      this
    );
  }
  static get IDENTITY() {
    return new rG();
  }
  static get TEMP_MATRIX() {
    return new rG();
  }
}
rG.prototype.toString = function () {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const rH = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
  rz = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
  rj = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
  r$ = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
  rX = [],
  rV = [],
  rW = Math.sign;
!(function () {
  for (let e = 0; e < 16; e++) {
    let t = [];
    rX.push(t);
    for (let r = 0; r < 16; r++) {
      let i = rW(rH[e] * rH[r] + rj[e] * rz[r]),
        s = rW(rz[e] * rH[r] + r$[e] * rz[r]),
        n = rW(rH[e] * rj[r] + rj[e] * r$[r]),
        a = rW(rz[e] * rj[r] + r$[e] * r$[r]);
      for (let e = 0; e < 16; e++)
        if (rH[e] === i && rz[e] === s && rj[e] === n && r$[e] === a) {
          t.push(e);
          break;
        }
    }
  }
  for (let e = 0; e < 16; e++) {
    let t = new rG();
    t.set(rH[e], rz[e], rj[e], r$[e], 0, 0), rV.push(t);
  }
})();
const rY = {
  NW: 5,
  uX: (e) => rH[e],
  uY: (e) => rz[e],
  add: (e, t) => rX[e][t],
};
class rq {
  constructor(e, t, r = 0, i = 0) {
    (this._x = r), (this._y = i), (this.cb = e), (this.scope = t);
  }
  clone(e = this.cb, t = this.scope) {
    return new rq(e, t, this._x, this._y);
  }
  set(e = 0, t = e) {
    return (
      (this._x !== e || this._y !== t) &&
        ((this._x = e), (this._y = t), this.cb.call(this.scope)),
      this
    );
  }
  copyFrom(e) {
    return (
      (this._x !== e.x || this._y !== e.y) &&
        ((this._x = e.x), (this._y = e.y), this.cb.call(this.scope)),
      this
    );
  }
  copyTo(e) {
    return e.set(this._x, this._y), e;
  }
  equals(e) {
    return e.x === this._x && e.y === this._y;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x !== e && ((this._x = e), this.cb.call(this.scope));
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y !== e && ((this._y = e), this.cb.call(this.scope));
  }
}
rq.prototype.toString = function () {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const rZ = class {
  constructor() {
    (this.worldTransform = new rG()),
      (this.localTransform = new rG()),
      (this.position = new rq(this.onChange, this, 0, 0)),
      (this.scale = new rq(this.onChange, this, 1, 1)),
      (this.pivot = new rq(this.onChange, this, 0, 0)),
      (this.skew = new rq(this.updateSkew, this, 0, 0)),
      (this._rotation = 0),
      (this._cx = 1),
      (this._sx = 0),
      (this._cy = 0),
      (this._sy = 1),
      (this._localID = 0),
      (this._currentLocalID = 0),
      (this._worldID = 0),
      (this._parentID = 0);
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    (this._cx = Math.cos(this._rotation + this.skew.y)),
      (this._sx = Math.sin(this._rotation + this.skew.y)),
      (this._cy = -Math.sin(this._rotation - this.skew.x)),
      (this._sy = Math.cos(this._rotation - this.skew.x)),
      this._localID++;
  }
  updateLocalTransform() {
    let e = this.localTransform;
    this._localID !== this._currentLocalID &&
      ((e.a = this._cx * this.scale.x),
      (e.b = this._sx * this.scale.x),
      (e.c = this._cy * this.scale.y),
      (e.d = this._sy * this.scale.y),
      (e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
      (e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
      (this._currentLocalID = this._localID),
      (this._parentID = -1));
  }
  updateTransform(e) {
    let t = this.localTransform;
    if (
      (this._localID !== this._currentLocalID &&
        ((t.a = this._cx * this.scale.x),
        (t.b = this._sx * this.scale.x),
        (t.c = this._cy * this.scale.y),
        (t.d = this._sy * this.scale.y),
        (t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
        (t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
        (this._currentLocalID = this._localID),
        (this._parentID = -1)),
      this._parentID !== e._worldID)
    ) {
      let r = e.worldTransform,
        i = this.worldTransform;
      (i.a = t.a * r.a + t.b * r.c),
        (i.b = t.a * r.b + t.b * r.d),
        (i.c = t.c * r.a + t.d * r.c),
        (i.d = t.c * r.b + t.d * r.d),
        (i.tx = t.tx * r.a + t.ty * r.c + r.tx),
        (i.ty = t.tx * r.b + t.ty * r.d + r.ty),
        (this._parentID = e._worldID),
        this._worldID++;
    }
  }
  setFromMatrix(e) {
    e.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    this._rotation !== e && ((this._rotation = e), this.updateSkew());
  }
};
(rZ.IDENTITY = new rZ()),
  (rZ.prototype.toString = function () {
    return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
  });
var rK = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,
  rQ = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function rJ(e, t, r) {
  let i = e.createShader(t);
  return e.shaderSource(i, r), e.compileShader(i), i;
}
function r0(e) {
  let t = Array(e);
  for (let e = 0; e < t.length; e++) t[e] = !1;
  return t;
}
function r1(e, t) {
  switch (e) {
    case "float":
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "vec2":
      return new Float32Array(2 * t);
    case "vec3":
      return new Float32Array(3 * t);
    case "vec4":
      return new Float32Array(4 * t);
    case "ivec2":
      return new Int32Array(2 * t);
    case "ivec3":
      return new Int32Array(3 * t);
    case "ivec4":
      return new Int32Array(4 * t);
    case "uvec2":
      return new Uint32Array(2 * t);
    case "uvec3":
      return new Uint32Array(3 * t);
    case "uvec4":
      return new Uint32Array(4 * t);
    case "bool":
      return !1;
    case "bvec2":
      return r0(2 * t);
    case "bvec3":
      return r0(3 * t);
    case "bvec4":
      return r0(4 * t);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const r2 = [
    {
      test: (e) => "float" === e.type && 1 === e.size && !e.isArray,
      code: (e) => `
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `,
    },
    {
      test: (e, t) =>
        ("sampler2D" === e.type ||
          "samplerCube" === e.type ||
          "sampler2DArray" === e.type) &&
        1 === e.size &&
        !e.isArray &&
        (null == t || void 0 !== t.castToBaseTexture),
      code: (e) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`,
    },
    {
      test: (e, t) =>
        "mat3" === e.type && 1 === e.size && !e.isArray && void 0 !== t.a,
      code: (e) => `
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,
      codeUbo: (e) => `
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];

                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];

                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `,
    },
    {
      test: (e, t) =>
        "vec2" === e.type && 1 === e.size && !e.isArray && void 0 !== t.x,
      code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,
      codeUbo: (e) => `
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `,
    },
    {
      test: (e) => "vec2" === e.type && 1 === e.size && !e.isArray,
      code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `,
    },
    {
      test: (e, t) =>
        "vec4" === e.type && 1 === e.size && !e.isArray && void 0 !== t.width,
      code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,
      codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `,
    },
    {
      test: (e, t) =>
        "vec4" === e.type && 1 === e.size && !e.isArray && void 0 !== t.red,
      code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${e}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
      codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `,
    },
    {
      test: (e, t) =>
        "vec3" === e.type && 1 === e.size && !e.isArray && void 0 !== t.red,
      code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;

                    gl.uniform3f(ud["${e}"].location, v.red, v.green, v.blue)
                }`,
      codeUbo: (e) => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `,
    },
    {
      test: (e) => "vec4" === e.type && 1 === e.size && !e.isArray,
      code: (e) => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`,
    },
  ],
  r3 = {
    float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
    vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
    vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
    vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
    int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
    uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
    uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
    uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
    bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
    bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
  },
  r4 = {
    float: "gl.uniform1fv(location, v)",
    vec2: "gl.uniform2fv(location, v)",
    vec3: "gl.uniform3fv(location, v)",
    vec4: "gl.uniform4fv(location, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    int: "gl.uniform1iv(location, v)",
    ivec2: "gl.uniform2iv(location, v)",
    ivec3: "gl.uniform3iv(location, v)",
    ivec4: "gl.uniform4iv(location, v)",
    uint: "gl.uniform1uiv(location, v)",
    uvec2: "gl.uniform2uiv(location, v)",
    uvec3: "gl.uniform3uiv(location, v)",
    uvec4: "gl.uniform4uiv(location, v)",
    bool: "gl.uniform1iv(location, v)",
    bvec2: "gl.uniform2iv(location, v)",
    bvec3: "gl.uniform3iv(location, v)",
    bvec4: "gl.uniform4iv(location, v)",
    sampler2D: "gl.uniform1iv(location, v)",
    samplerCube: "gl.uniform1iv(location, v)",
    sampler2DArray: "gl.uniform1iv(location, v)",
  },
  r5 = {};
let r6 = r5;
function r8(e, t) {
  let r = e
      .getShaderSource(t)
      .split(
        `
`
      )
      .map((e, t) => `${t}: ${e}`),
    i = e.getShaderInfoLog(t),
    s = i.split(`
`),
    n = {},
    a = s
      .map((e) => parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1")))
      .filter((e) => !!e && !n[e] && ((n[e] = !0), !0)),
    o = [""];
  a.forEach((e) => {
    (r[e - 1] = `%c${r[e - 1]}%c`),
      o.push(
        "background: #FF0000; color:#FFFFFF; font-size: 10px",
        "font-size: 10px"
      );
  });
  let l = r.join(`
`);
  (o[0] = l),
    console.error(i),
    console.groupCollapsed("click to view full shader code"),
    console.warn(...o),
    console.groupEnd();
}
const r7 = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1,
};
let r9 = null;
const ie = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
};
function it(e, t) {
  if (!r9) {
    let t = Object.keys(ie);
    r9 = {};
    for (let r = 0; r < t.length; ++r) {
      let i = t[r];
      r9[e[i]] = ie[i];
    }
  }
  return r9[t];
}
function ir(e, t, r) {
  if ("precision" !== e.substring(0, 9)) {
    let i = t;
    return (
      t === ea.HIGH && r !== ea.HIGH && (i = ea.MEDIUM),
      `precision ${i} float;
${e}`
    );
  }
  return r !== ea.HIGH && "precision highp" === e.substring(0, 15)
    ? e.replace("precision highp", "precision mediump")
    : e;
}
let ii = 0;
const is = {},
  ia = class e {
    constructor(t, i, s = "pixi-shader", n = {}) {
      (this.extra = {}),
        (this.id = ii++),
        (this.vertexSrc = t || e.defaultVertexSrc),
        (this.fragmentSrc = i || e.defaultFragmentSrc),
        (this.vertexSrc = this.vertexSrc.trim()),
        (this.fragmentSrc = this.fragmentSrc.trim()),
        (this.extra = n),
        "#version" !== this.vertexSrc.substring(0, 8) &&
          (is[(s = s.replace(/\s+/g, "-"))]
            ? (is[s]++, (s += `-${is[s]}`))
            : (is[s] = 1),
          (this.vertexSrc = `#define SHADER_NAME ${s}
${this.vertexSrc}`),
          (this.fragmentSrc = `#define SHADER_NAME ${s}
${this.fragmentSrc}`),
          (this.vertexSrc = ir(
            this.vertexSrc,
            e.defaultVertexPrecision,
            ea.HIGH
          )),
          (this.fragmentSrc = ir(
            this.fragmentSrc,
            e.defaultFragmentPrecision,
            (function () {
              if (!r) {
                r = ea.MEDIUM;
                let e = (function () {
                  if (r6 === r5 || r6?.isContextLost()) {
                    let e;
                    let t = ed.ADAPTER.createCanvas();
                    ed.PREFER_ENV >= X.WEBGL2 &&
                      (e = t.getContext("webgl2", {})),
                      e ||
                        ((e =
                          t.getContext("webgl", {}) ||
                          t.getContext("experimental-webgl", {}))
                          ? e.getExtension("WEBGL_draw_buffers")
                          : (e = null)),
                      (r6 = e);
                  }
                  return r6;
                })();
                if (e && e.getShaderPrecisionFormat) {
                  let t = e.getShaderPrecisionFormat(
                    e.FRAGMENT_SHADER,
                    e.HIGH_FLOAT
                  );
                  t && (r = t.precision ? ea.HIGH : ea.MEDIUM);
                }
              }
              return r;
            })()
          ))),
        (this.glPrograms = {}),
        (this.syncUniforms = null);
    }
    static get defaultVertexSrc() {
      return rQ;
    }
    static get defaultFragmentSrc() {
      return rK;
    }
    static from(t, r, i) {
      let s = t + r,
        n = t1[s];
      return n || (t1[s] = n = new e(t, r, i)), n;
    }
  };
(ia.defaultVertexPrecision = ea.HIGH),
  (ia.defaultFragmentPrecision = eC.apple.device ? ea.HIGH : ea.MEDIUM);
let io = 0;
class il {
  constructor(e, t, r) {
    (this.group = !0),
      (this.syncUniforms = {}),
      (this.dirtyId = 0),
      (this.id = io++),
      (this.static = !!t),
      (this.ubo = !!r),
      e instanceof rb
        ? ((this.buffer = e),
          (this.buffer.type = eu.UNIFORM_BUFFER),
          (this.autoManage = !1),
          (this.ubo = !0))
        : ((this.uniforms = e),
          this.ubo &&
            ((this.buffer = new rb(new Float32Array(1))),
            (this.buffer.type = eu.UNIFORM_BUFFER),
            (this.autoManage = !0)));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(e, t, r) {
    if (this.ubo)
      throw Error(
        "[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them"
      );
    this.uniforms[e] = new il(t, r);
  }
  static from(e, t, r) {
    return new il(e, t, r);
  }
  static uboFrom(e, t) {
    return new il(e, t ?? !0, !0);
  }
}
class ih {
  constructor(e, t) {
    (this.uniformBindCount = 0),
      (this.program = e),
      t
        ? t instanceof il
          ? (this.uniformGroup = t)
          : (this.uniformGroup = new il(t))
        : (this.uniformGroup = new il({})),
      (this.disposeRunner = new rp("disposeShader"));
  }
  checkUniformExists(e, t) {
    if (t.uniforms[e]) return !0;
    for (let r in t.uniforms) {
      let i = t.uniforms[r];
      if (!0 === i.group && this.checkUniformExists(e, i)) return !0;
    }
    return !1;
  }
  destroy() {
    (this.uniformGroup = null),
      this.disposeRunner.emit(this),
      this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(e, t, r) {
    return new ih(ia.from(e, t), r);
  }
}
class iu {
  constructor(e, t) {
    if (
      ((this.vertexSrc = e),
      (this.fragTemplate = t),
      (this.programCache = {}),
      (this.defaultGroupCache = {}),
      !t.includes("%count%"))
    )
      throw Error('Fragment template must contain "%count%".');
    if (!t.includes("%forloop%"))
      throw Error('Fragment template must contain "%forloop%".');
  }
  generateShader(e) {
    if (!this.programCache[e]) {
      let t = new Int32Array(e);
      for (let r = 0; r < e; r++) t[r] = r;
      this.defaultGroupCache[e] = il.from({ uSamplers: t }, !0);
      let r = this.fragTemplate;
      (r = (r = r.replace(/%count%/gi, `${e}`)).replace(
        /%forloop%/gi,
        this.generateSampleSrc(e)
      )),
        (this.programCache[e] = new ia(this.vertexSrc, r));
    }
    let t = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new rG(),
      default: this.defaultGroupCache[e],
    };
    return new ih(this.programCache[e], t);
  }
  generateSampleSrc(e) {
    let t = "";
    t += `

`;
    for (let r = 0; r < e; r++)
      r > 0 &&
        (t += `
else `),
        r < e - 1 && (t += `if(vTextureId < ${r}.5)`),
        (t += `
{
	color = texture2D(uSamplers[${r}], vTextureCoord);
}`);
    return (
      t +
      `

`
    );
  }
}
class id {
  constructor() {
    (this.elements = []), (this.ids = []), (this.count = 0);
  }
  clear() {
    for (let e = 0; e < this.count; e++) this.elements[e] = null;
    this.count = 0;
  }
}
class ic {
  constructor(e) {
    this.renderer = e;
  }
  flush() {}
  destroy() {
    this.renderer = null;
  }
  start() {}
  stop() {
    this.flush();
  }
  render(e) {}
}
var ip = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,
  im = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const ig = class e extends ic {
  constructor(t) {
    super(t),
      this.setShaderGenerator(),
      (this.geometryClass = rI),
      (this.vertexSize = 6),
      (this.state = ru.for2d()),
      (this.size = 4 * e.defaultBatchSize),
      (this._vertexCount = 0),
      (this._indexCount = 0),
      (this._bufferedElements = []),
      (this._bufferedTextures = []),
      (this._bufferSize = 0),
      (this._shader = null),
      (this._packedGeometries = []),
      (this._packedGeometryPoolSize = 2),
      (this._flushId = 0),
      (this._aBuffers = {}),
      (this._iBuffers = {}),
      (this.maxTextures = 1),
      this.renderer.on("prerender", this.onPrerender, this),
      t.runners.contextChange.add(this),
      (this._dcIndex = 0),
      (this._aIndex = 0),
      (this._iIndex = 0),
      (this._attributeBuffer = null),
      (this._indexBuffer = null),
      (this._tempBoundTextures = []);
  }
  static get defaultMaxTextures() {
    return (
      (this._defaultMaxTextures =
        this._defaultMaxTextures ??
        (function (e) {
          let t = !0,
            r = ed.ADAPTER.getNavigator();
          if (eC.tablet || eC.phone) {
            if (eC.apple.device) {
              let e = r.userAgent.match(/OS (\d+)_(\d+)?/);
              e && 11 > parseInt(e[1], 10) && (t = !1);
            }
            if (eC.android.device) {
              let e = r.userAgent.match(/Android\s([0-9.]*)/);
              e && 7 > parseInt(e[1], 10) && (t = !1);
            }
          }
          return t ? 32 : 4;
        })(0)),
      this._defaultMaxTextures
    );
  }
  static set defaultMaxTextures(e) {
    this._defaultMaxTextures = e;
  }
  static get canUploadSameBuffer() {
    return (
      (this._canUploadSameBuffer =
        this._canUploadSameBuffer ?? !eC.apple.device),
      this._canUploadSameBuffer
    );
  }
  static set canUploadSameBuffer(e) {
    this._canUploadSameBuffer = e;
  }
  get MAX_TEXTURES() {
    return (
      e5(
        "7.1.0",
        "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"
      ),
      this.maxTextures
    );
  }
  static get defaultVertexSrc() {
    return im;
  }
  static get defaultFragmentTemplate() {
    return ip;
  }
  setShaderGenerator({
    vertex: t = e.defaultVertexSrc,
    fragment: r = e.defaultFragmentTemplate,
  } = {}) {
    this.shaderGenerator = new iu(t, r);
  }
  contextChange() {
    let t = this.renderer.gl;
    ed.PREFER_ENV === X.WEBGL_LEGACY
      ? (this.maxTextures = 1)
      : ((this.maxTextures = Math.min(
          t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
          e.defaultMaxTextures
        )),
        (this.maxTextures = (function (e, t) {
          if (0 === e)
            throw Error(
              "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
            );
          let r = t.createShader(t.FRAGMENT_SHADER);
          for (;;) {
            let i = rh.replace(
              /%forloop%/gi,
              (function (e) {
                let t = "";
                for (let r = 0; r < e; ++r)
                  r > 0 &&
                    (t += `
else `),
                    r < e - 1 && (t += `if(test == ${r}.0){}`);
                return t;
              })(e)
            );
            if (
              (t.shaderSource(r, i),
              t.compileShader(r),
              t.getShaderParameter(r, t.COMPILE_STATUS))
            )
              break;
            e = (e / 2) | 0;
          }
          return e;
        })(this.maxTextures, t))),
      (this._shader = this.shaderGenerator.generateShader(this.maxTextures));
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    let { _drawCallPool: t, _textureArrayPool: r } = e,
      i = this.size / 4,
      s = Math.floor(i / this.maxTextures) + 1;
    for (; t.length < i; ) t.push(new rx());
    for (; r.length < s; ) r.push(new id());
    for (let e = 0; e < this.maxTextures; e++)
      this._tempBoundTextures[e] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(e) {
    e._texture.valid &&
      (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(),
      (this._vertexCount += e.vertexData.length / 2),
      (this._indexCount += e.indices.length),
      (this._bufferedTextures[this._bufferSize] = e._texture.baseTexture),
      (this._bufferedElements[this._bufferSize++] = e));
  }
  buildTexturesAndDrawCalls() {
    let { _bufferedTextures: t, maxTextures: r } = this,
      i = e._textureArrayPool,
      s = this.renderer.batch,
      n = this._tempBoundTextures,
      a = this.renderer.textureGC.count,
      o = ++r_._globalBatch,
      l = 0,
      h = i[0],
      u = 0;
    s.copyBoundTextures(n, r);
    for (let e = 0; e < this._bufferSize; ++e) {
      let d = t[e];
      (t[e] = null),
        d._batchEnabled !== o &&
          (h.count >= r &&
            (s.boundArray(h, n, o, r),
            this.buildDrawCalls(h, u, e),
            (u = e),
            (h = i[++l]),
            ++o),
          (d._batchEnabled = o),
          (d.touched = a),
          (h.elements[h.count++] = d));
    }
    h.count > 0 &&
      (s.boundArray(h, n, o, r),
      this.buildDrawCalls(h, u, this._bufferSize),
      ++l,
      ++o);
    for (let e = 0; e < n.length; e++) n[e] = null;
    r_._globalBatch = o;
  }
  buildDrawCalls(t, r, i) {
    let {
        _bufferedElements: s,
        _attributeBuffer: n,
        _indexBuffer: a,
        vertexSize: o,
      } = this,
      l = e._drawCallPool,
      h = this._dcIndex,
      u = this._aIndex,
      d = this._iIndex,
      c = l[h];
    (c.start = this._iIndex), (c.texArray = t);
    for (let e = r; e < i; ++e) {
      let i = s[e],
        p = tF[i._texture.baseTexture.alphaMode ? 1 : 0][i.blendMode];
      (s[e] = null),
        r < e &&
          c.blend !== p &&
          ((c.size = d - c.start),
          (r = e),
          ((c = l[++h]).texArray = t),
          (c.start = d)),
        this.packInterleavedGeometry(i, n, a, u, d),
        (u += (i.vertexData.length / 2) * o),
        (d += i.indices.length),
        (c.blend = p);
    }
    r < i && ((c.size = d - c.start), ++h),
      (this._dcIndex = h),
      (this._aIndex = u),
      (this._iIndex = d);
  }
  bindAndClearTexArray(e) {
    let t = this.renderer.texture;
    for (let r = 0; r < e.count; r++)
      t.bind(e.elements[r], e.ids[r]), (e.elements[r] = null);
    e.count = 0;
  }
  updateGeometry() {
    let { _packedGeometries: t, _attributeBuffer: r, _indexBuffer: i } = this;
    e.canUploadSameBuffer
      ? (t[this._flushId]._buffer.update(r.rawBinaryData),
        t[this._flushId]._indexBuffer.update(i),
        this.renderer.geometry.updateBuffers())
      : (this._packedGeometryPoolSize <= this._flushId &&
          (this._packedGeometryPoolSize++,
          (t[this._flushId] = new this.geometryClass())),
        t[this._flushId]._buffer.update(r.rawBinaryData),
        t[this._flushId]._indexBuffer.update(i),
        this.renderer.geometry.bind(t[this._flushId]),
        this.renderer.geometry.updateBuffers(),
        this._flushId++);
  }
  drawBatches() {
    let t = this._dcIndex,
      { gl: r, state: i } = this.renderer,
      s = e._drawCallPool,
      n = null;
    for (let e = 0; e < t; e++) {
      let { texArray: t, type: a, size: o, start: l, blend: h } = s[e];
      n !== t && ((n = t), this.bindAndClearTexArray(t)),
        (this.state.blendMode = h),
        i.set(this.state),
        r.drawElements(a, o, r.UNSIGNED_SHORT, 2 * l);
    }
  }
  flush() {
    0 !== this._vertexCount &&
      ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
      (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
      (this._aIndex = 0),
      (this._iIndex = 0),
      (this._dcIndex = 0),
      this.buildTexturesAndDrawCalls(),
      this.updateGeometry(),
      this.drawBatches(),
      (this._bufferSize = 0),
      (this._vertexCount = 0),
      (this._indexCount = 0));
  }
  start() {
    this.renderer.state.set(this.state),
      this.renderer.texture.ensureSamplerType(this.maxTextures),
      this.renderer.shader.bind(this._shader),
      e.canUploadSameBuffer &&
        this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let e = 0; e < this._packedGeometryPoolSize; e++)
      this._packedGeometries[e] && this._packedGeometries[e].destroy();
    this.renderer.off("prerender", this.onPrerender, this),
      (this._aBuffers = null),
      (this._iBuffers = null),
      (this._packedGeometries = null),
      (this._attributeBuffer = null),
      (this._indexBuffer = null),
      this._shader && (this._shader.destroy(), (this._shader = null)),
      super.destroy();
  }
  getAttributeBuffer(e) {
    let t = tV(Math.ceil(e / 8)),
      r = tY(t),
      i = 8 * t;
    this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
    let s = this._aBuffers[i];
    return s || (this._aBuffers[i] = s = new rl(i * this.vertexSize * 4)), s;
  }
  getIndexBuffer(e) {
    let t = tV(Math.ceil(e / 12)),
      r = tY(t);
    this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
    let i = this._iBuffers[r];
    return i || (this._iBuffers[r] = i = new Uint16Array(12 * t)), i;
  }
  packInterleavedGeometry(e, t, r, i, s) {
    let { uint32View: n, float32View: a } = t,
      o = i / this.vertexSize,
      l = e.uvs,
      h = e.indices,
      u = e.vertexData,
      d = e._texture.baseTexture._batchLocation,
      c = Math.min(e.worldAlpha, 1),
      p = tk.shared
        .setValue(e._tintRGB)
        .toPremultiplied(c, e._texture.baseTexture.alphaMode > 0);
    for (let e = 0; e < u.length; e += 2)
      (a[i++] = u[e]),
        (a[i++] = u[e + 1]),
        (a[i++] = l[e]),
        (a[i++] = l[e + 1]),
        (n[i++] = p),
        (a[i++] = d);
    for (let e = 0; e < h.length; e++) r[s++] = o + h[e];
  }
};
(ig.defaultBatchSize = 4096),
  (ig.extension = { name: "batch", type: rs.RendererPlugin }),
  (ig._drawCallPool = []),
  (ig._textureArrayPool = []),
  ro.add(ig);
var iy = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,
  i_ = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const ix = class e extends ih {
  constructor(t, r, i) {
    super(ia.from(t || e.defaultVertexSrc, r || e.defaultFragmentSrc), i),
      (this.padding = 0),
      (this.resolution = e.defaultResolution),
      (this.multisample = e.defaultMultisample),
      (this.enabled = !0),
      (this.autoFit = !0),
      (this.state = new ru());
  }
  apply(e, t, r, i, s) {
    e.applyFilter(this, t, r, i);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._resolution = e;
  }
  static get defaultVertexSrc() {
    return i_;
  }
  static get defaultFragmentSrc() {
    return iy;
  }
};
(ix.defaultResolution = 1), (ix.defaultMultisample = eh.NONE);
let iv = ix;
class ib {
  constructor() {
    (this.clearBeforeRender = !0),
      (this._backgroundColor = new tk(0)),
      (this.alpha = 1);
  }
  init(e) {
    this.clearBeforeRender = e.clearBeforeRender;
    let { backgroundColor: t, background: r, backgroundAlpha: i } = e,
      s = r ?? t;
    void 0 !== s && (this.color = s), (this.alpha = i);
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(e) {
    this._backgroundColor.setValue(e);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(e) {
    this._backgroundColor.setAlpha(e);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {}
}
(ib.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: !0,
}),
  (ib.extension = {
    type: [rs.RendererSystem, rs.CanvasRendererSystem],
    name: "background",
  }),
  ro.add(ib);
class iE {
  constructor(e) {
    (this.renderer = e),
      (this.emptyRenderer = new ic(e)),
      (this.currentRenderer = this.emptyRenderer);
  }
  setObjectRenderer(e) {
    this.currentRenderer !== e &&
      (this.currentRenderer.stop(),
      (this.currentRenderer = e),
      this.currentRenderer.start());
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(e, t) {
    let { boundTextures: r } = this.renderer.texture;
    for (let i = t - 1; i >= 0; --i)
      (e[i] = r[i] || null), e[i] && (e[i]._batchLocation = i);
  }
  boundArray(e, t, r, i) {
    let { elements: s, ids: n, count: a } = e,
      o = 0;
    for (let e = 0; e < a; e++) {
      let a = s[e],
        l = a._batchLocation;
      if (l >= 0 && l < i && t[l] === a) {
        n[e] = l;
        continue;
      }
      for (; o < i; ) {
        let i = t[o];
        if (i && i._batchEnabled === r && i._batchLocation === o) {
          o++;
          continue;
        }
        (n[e] = o), (a._batchLocation = o), (t[o] = a);
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
(iE.extension = { type: rs.RendererSystem, name: "batch" }), ro.add(iE);
let iT = 0;
class iA {
  constructor(e) {
    (this.renderer = e),
      (this.webGLVersion = 1),
      (this.extensions = {}),
      (this.supports = { uint32Indices: !1 }),
      (this.handleContextLost = this.handleContextLost.bind(this)),
      (this.handleContextRestored = this.handleContextRestored.bind(this));
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(e) {
    (this.gl = e), (this.renderer.gl = e), (this.renderer.CONTEXT_UID = iT++);
  }
  init(e) {
    if (e.context) this.initFromContext(e.context);
    else {
      let t = this.renderer.background.alpha < 1,
        r = e.premultipliedAlpha;
      (this.preserveDrawingBuffer = e.preserveDrawingBuffer),
        (this.useContextAlpha = e.useContextAlpha),
        (this.powerPreference = e.powerPreference),
        this.initFromOptions({
          alpha: t,
          premultipliedAlpha: r,
          antialias: e.antialias,
          stencil: !0,
          preserveDrawingBuffer: e.preserveDrawingBuffer,
          powerPreference: e.powerPreference,
        });
    }
  }
  initFromContext(e) {
    (this.gl = e),
      this.validateContext(e),
      (this.renderer.gl = e),
      (this.renderer.CONTEXT_UID = iT++),
      this.renderer.runners.contextChange.emit(e);
    let t = this.renderer.view;
    void 0 !== t.addEventListener &&
      (t.addEventListener("webglcontextlost", this.handleContextLost, !1),
      t.addEventListener(
        "webglcontextrestored",
        this.handleContextRestored,
        !1
      ));
  }
  initFromOptions(e) {
    let t = this.createContext(this.renderer.view, e);
    this.initFromContext(t);
  }
  createContext(e, t) {
    let r;
    if ((ed.PREFER_ENV >= X.WEBGL2 && (r = e.getContext("webgl2", t)), r))
      this.webGLVersion = 2;
    else if (
      ((this.webGLVersion = 1),
      !(r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)))
    )
      throw Error(
        "This browser does not support WebGL. Try using the canvas renderer"
      );
    return (this.gl = r), this.getExtensions(), this.gl;
  }
  getExtensions() {
    let { gl: e } = this,
      t = {
        loseContext: e.getExtension("WEBGL_lose_context"),
        anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
        floatTextureLinear: e.getExtension("OES_texture_float_linear"),
        s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: e.getExtension("WEBGL_compressed_texture_etc"),
        etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc:
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: e.getExtension("WEBGL_compressed_texture_atc"),
        astc: e.getExtension("WEBGL_compressed_texture_astc"),
      };
    1 === this.webGLVersion
      ? Object.assign(this.extensions, t, {
          drawBuffers: e.getExtension("WEBGL_draw_buffers"),
          depthTexture: e.getExtension("WEBGL_depth_texture"),
          vertexArrayObject:
            e.getExtension("OES_vertex_array_object") ||
            e.getExtension("MOZ_OES_vertex_array_object") ||
            e.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: e.getExtension("OES_element_index_uint"),
          floatTexture: e.getExtension("OES_texture_float"),
          floatTextureLinear: e.getExtension("OES_texture_float_linear"),
          textureHalfFloat: e.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: e.getExtension(
            "OES_texture_half_float_linear"
          ),
        })
      : 2 === this.webGLVersion &&
        Object.assign(this.extensions, t, {
          colorBufferFloat: e.getExtension("EXT_color_buffer_float"),
        });
  }
  handleContextLost(e) {
    e.preventDefault(),
      setTimeout(() => {
        this.gl.isContextLost() &&
          this.extensions.loseContext &&
          this.extensions.loseContext.restoreContext();
      }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    let e = this.renderer.view;
    (this.renderer = null),
      void 0 !== e.removeEventListener &&
        (e.removeEventListener("webglcontextlost", this.handleContextLost),
        e.removeEventListener(
          "webglcontextrestored",
          this.handleContextRestored
        )),
      this.gl.useProgram(null),
      this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  validateContext(e) {
    let t = e.getContextAttributes(),
      r =
        "WebGL2RenderingContext" in globalThis &&
        e instanceof globalThis.WebGL2RenderingContext;
    r && (this.webGLVersion = 2),
      t &&
        !t.stencil &&
        console.warn(
          "Provided WebGL context does not have a stencil buffer, masks may not render correctly"
        );
    let i = r || !!e.getExtension("OES_element_index_uint");
    (this.supports.uint32Indices = i),
      i ||
        console.warn(
          "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"
        );
  }
}
(iA.defaultOptions = {
  context: null,
  antialias: !1,
  premultipliedAlpha: !0,
  preserveDrawingBuffer: !1,
  powerPreference: "default",
}),
  (iA.extension = { type: rs.RendererSystem, name: "context" }),
  ro.add(iA);
class iw {
  constructor(e, t) {
    if (
      ((this.width = Math.round(e)),
      (this.height = Math.round(t)),
      !this.width || !this.height)
    )
      throw Error("Framebuffer width or height is zero");
    (this.stencil = !1),
      (this.depth = !1),
      (this.dirtyId = 0),
      (this.dirtyFormat = 0),
      (this.dirtySize = 0),
      (this.depthTexture = null),
      (this.colorTextures = []),
      (this.glFramebuffers = {}),
      (this.disposeRunner = new rp("disposeFramebuffer")),
      (this.multisample = eh.NONE);
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(e = 0, t) {
    return (
      (this.colorTextures[e] =
        t ||
        new r_(null, {
          scaleMode: ee.NEAREST,
          resolution: 1,
          mipmap: er.OFF,
          width: this.width,
          height: this.height,
        })),
      this.dirtyId++,
      this.dirtyFormat++,
      this
    );
  }
  addDepthTexture(e) {
    return (
      (this.depthTexture =
        e ||
        new r_(null, {
          scaleMode: ee.NEAREST,
          resolution: 1,
          width: this.width,
          height: this.height,
          mipmap: er.OFF,
          format: Z.DEPTH_COMPONENT,
          type: Q.UNSIGNED_SHORT,
        })),
      this.dirtyId++,
      this.dirtyFormat++,
      this
    );
  }
  enableDepth() {
    return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(e, t) {
    if (((e = Math.round(e)), (t = Math.round(t)), !e || !t))
      throw Error("Framebuffer width and height must not be zero");
    if (!(e === this.width && t === this.height)) {
      (this.width = e), (this.height = t), this.dirtyId++, this.dirtySize++;
      for (let r = 0; r < this.colorTextures.length; r++) {
        let i = this.colorTextures[r],
          s = i.resolution;
        i.setSize(e / s, t / s);
      }
      if (this.depthTexture) {
        let r = this.depthTexture.resolution;
        this.depthTexture.setSize(e / r, t / r);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, !1);
  }
  destroyDepthTexture() {
    this.depthTexture &&
      (this.depthTexture.destroy(),
      (this.depthTexture = null),
      ++this.dirtyId,
      ++this.dirtyFormat);
  }
}
class iS extends r_ {
  constructor(e = {}) {
    if ("number" == typeof e) {
      let t = arguments[0],
        r = arguments[1],
        i = arguments[2],
        s = arguments[3];
      e = { width: t, height: r, scaleMode: i, resolution: s };
    }
    (e.width = e.width ?? 100),
      (e.height = e.height ?? 100),
      e.multisample ?? (e.multisample = eh.NONE),
      super(null, e),
      (this.mipmap = er.OFF),
      (this.valid = !0),
      (this._clear = new tk([0, 0, 0, 0])),
      (this.framebuffer = new iw(
        this.realWidth,
        this.realHeight
      ).addColorTexture(0, this)),
      (this.framebuffer.multisample = e.multisample),
      (this.maskStack = []),
      (this.filterStack = [{}]);
  }
  set clearColor(e) {
    this._clear.setValue(e);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(e) {
    this.framebuffer.multisample = e;
  }
  resize(e, t) {
    this.framebuffer.resize(e * this.resolution, t * this.resolution),
      this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(),
      this.framebuffer.destroyDepthTexture(),
      (this.framebuffer = null);
  }
}
class iR extends rf {
  constructor(e) {
    super(
      e.naturalWidth || e.videoWidth || e.width,
      e.naturalHeight || e.videoHeight || e.height
    ),
      (this.source = e),
      (this.noSubImage = !1);
  }
  static crossOrigin(e, t, r) {
    void 0 !== r || t.startsWith("data:")
      ? !1 !== r && (e.crossOrigin = "string" == typeof r ? r : "anonymous")
      : (e.crossOrigin = rr(t));
  }
  upload(e, t, r, i) {
    let s = e.gl,
      n = t.realWidth,
      a = t.realHeight;
    if (
      ((i = i || this.source),
      "u" > typeof HTMLImageElement && i instanceof HTMLImageElement)
    ) {
      if (!i.complete || 0 === i.naturalWidth) return !1;
    } else if (
      "u" > typeof HTMLVideoElement &&
      i instanceof HTMLVideoElement &&
      i.readyState <= 1
    )
      return !1;
    return (
      s.pixelStorei(
        s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        t.alphaMode === ei.UNPACK
      ),
      this.noSubImage ||
      t.target !== s.TEXTURE_2D ||
      r.width !== n ||
      r.height !== a
        ? ((r.width = n),
          (r.height = a),
          s.texImage2D(t.target, 0, r.internalFormat, t.format, r.type, i))
        : s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, t.format, r.type, i),
      !0
    );
  }
  update() {
    if (this.destroyed) return;
    let e = this.source,
      t = e.naturalWidth || e.videoWidth || e.width,
      r = e.naturalHeight || e.videoHeight || e.height;
    this.resize(t, r), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class iI extends iR {
  constructor(e, t) {
    if (((t = t || {}), "string" == typeof e)) {
      let r = new Image();
      iR.crossOrigin(r, e, t.crossorigin), (r.src = e), (e = r);
    }
    super(e),
      !e.complete &&
        this._width &&
        this._height &&
        ((this._width = 0), (this._height = 0)),
      (this.url = e.src),
      (this._process = null),
      (this.preserveBitmap = !1),
      (this.createBitmap =
        (t.createBitmap ?? ed.CREATE_IMAGE_BITMAP) &&
        !!globalThis.createImageBitmap),
      (this.alphaMode = "number" == typeof t.alphaMode ? t.alphaMode : null),
      (this.bitmap = null),
      (this._load = null),
      !1 !== t.autoLoad && this.load();
  }
  load(e) {
    return (
      this._load ||
        (void 0 !== e && (this.createBitmap = e),
        (this._load = new Promise((e, t) => {
          let r = this.source;
          this.url = r.src;
          let i = () => {
            this.destroyed ||
              ((r.onload = null),
              (r.onerror = null),
              this.update(),
              (this._load = null),
              this.createBitmap ? e(this.process()) : e(this));
          };
          r.complete && r.src
            ? i()
            : ((r.onload = i),
              (r.onerror = (e) => {
                t(e), this.onError.emit(e);
              }));
        }))),
      this._load
    );
  }
  process() {
    let e = this.source;
    if (null !== this._process) return this._process;
    if (null !== this.bitmap || !globalThis.createImageBitmap)
      return Promise.resolve(this);
    let t = globalThis.createImageBitmap,
      r = !e.crossOrigin || "anonymous" === e.crossOrigin;
    return (
      (this._process = fetch(e.src, { mode: r ? "cors" : "no-cors" })
        .then((e) => e.blob())
        .then((r) =>
          t(r, 0, 0, e.width, e.height, {
            premultiplyAlpha:
              null === this.alphaMode || this.alphaMode === ei.UNPACK
                ? "premultiply"
                : "none",
          })
        )
        .then((e) =>
          this.destroyed
            ? Promise.reject()
            : ((this.bitmap = e),
              this.update(),
              (this._process = null),
              Promise.resolve(this))
        )),
      this._process
    );
  }
  upload(e, t, r) {
    if (
      ("number" == typeof this.alphaMode && (t.alphaMode = this.alphaMode),
      !this.createBitmap)
    )
      return super.upload(e, t, r);
    if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
    if ((super.upload(e, t, r, this.bitmap), !this.preserveBitmap)) {
      let e = !0,
        i = t._glTextures;
      for (let s in i) {
        let n = i[s];
        if (n !== r && n.dirtyId !== t.dirtyId) {
          e = !1;
          break;
        }
      }
      e && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null));
    }
    return !0;
  }
  dispose() {
    (this.source.onload = null),
      (this.source.onerror = null),
      super.dispose(),
      this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
      (this._process = null),
      (this._load = null);
  }
  static test(e) {
    return (
      "u" > typeof HTMLImageElement &&
      ("string" == typeof e || e instanceof HTMLImageElement)
    );
  }
}
class iC {
  constructor() {
    (this.x0 = 0),
      (this.y0 = 0),
      (this.x1 = 1),
      (this.y1 = 0),
      (this.x2 = 1),
      (this.y2 = 1),
      (this.x3 = 0),
      (this.y3 = 1),
      (this.uvsFloat32 = new Float32Array(8));
  }
  set(e, t, r) {
    let i = t.width,
      s = t.height;
    if (r) {
      let t = e.width / 2 / i,
        n = e.height / 2 / s,
        a = e.x / i + t,
        o = e.y / s + n;
      (r = rY.add(r, rY.NW)),
        (this.x0 = a + t * rY.uX(r)),
        (this.y0 = o + n * rY.uY(r)),
        (r = rY.add(r, 2)),
        (this.x1 = a + t * rY.uX(r)),
        (this.y1 = o + n * rY.uY(r)),
        (r = rY.add(r, 2)),
        (this.x2 = a + t * rY.uX(r)),
        (this.y2 = o + n * rY.uY(r)),
        (r = rY.add(r, 2)),
        (this.x3 = a + t * rY.uX(r)),
        (this.y3 = o + n * rY.uY(r));
    } else
      (this.x0 = e.x / i),
        (this.y0 = e.y / s),
        (this.x1 = (e.x + e.width) / i),
        (this.y1 = e.y / s),
        (this.x2 = (e.x + e.width) / i),
        (this.y2 = (e.y + e.height) / s),
        (this.x3 = e.x / i),
        (this.y3 = (e.y + e.height) / s);
    (this.uvsFloat32[0] = this.x0),
      (this.uvsFloat32[1] = this.y0),
      (this.uvsFloat32[2] = this.x1),
      (this.uvsFloat32[3] = this.y1),
      (this.uvsFloat32[4] = this.x2),
      (this.uvsFloat32[5] = this.y2),
      (this.uvsFloat32[6] = this.x3),
      (this.uvsFloat32[7] = this.y3);
  }
}
iC.prototype.toString = function () {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const iP = new iC();
function ik(e) {
  (e.destroy = function () {}),
    (e.on = function () {}),
    (e.once = function () {}),
    (e.emit = function () {});
}
class iM extends U(ek) {
  constructor(e, t, r, i, s, n, a) {
    if (
      (super(),
      (this.noFrame = !1),
      t || ((this.noFrame = !0), (t = new rO(0, 0, 1, 1))),
      e instanceof iM && (e = e.baseTexture),
      (this.baseTexture = e),
      (this._frame = t),
      (this.trim = i),
      (this.valid = !1),
      (this.destroyed = !1),
      (this._uvs = iP),
      (this.uvMatrix = null),
      (this.orig = r || t),
      (this._rotate = Number(s || 0)),
      !0 === s)
    )
      this._rotate = 2;
    else if (this._rotate % 2 != 0)
      throw Error(
        "attempt to use diamond-shaped UVs. If you are sure, set rotation manually"
      );
    (this.defaultAnchor = n ? new rD(n.x, n.y) : new rD(0, 0)),
      (this.defaultBorders = a),
      (this._updateID = 0),
      (this.textureCacheIds = []),
      e.valid
        ? this.noFrame
          ? e.valid && this.onBaseTextureUpdated(e)
          : (this.frame = t)
        : e.once("loaded", this.onBaseTextureUpdated, this),
      this.noFrame && e.on("update", this.onBaseTextureUpdated, this);
  }
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  onBaseTextureUpdated(e) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) return;
      (this._frame.width = e.width),
        (this._frame.height = e.height),
        (this.valid = !0),
        this.updateUvs();
    } else this.frame = this._frame;
    this.emit("update", this);
  }
  destroy(e) {
    if (this.baseTexture) {
      if (e) {
        let { resource: e } = this.baseTexture;
        e?.url && t2[e.url] && iM.removeFromCache(e.url),
          this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
        this.baseTexture.off("update", this.onBaseTextureUpdated, this),
        (this.baseTexture = null);
    }
    (this._frame = null),
      (this._uvs = null),
      (this.trim = null),
      (this.orig = null),
      (this.valid = !1),
      iM.removeFromCache(this),
      (this.textureCacheIds = null),
      (this.destroyed = !0),
      this.emit("destroyed", this),
      this.removeAllListeners();
  }
  clone() {
    let e = this._frame.clone(),
      t = this._frame === this.orig ? e : this.orig.clone(),
      r = new iM(
        this.baseTexture,
        !this.noFrame && e,
        t,
        this.trim?.clone(),
        this.rotate,
        this.defaultAnchor,
        this.defaultBorders
      );
    return this.noFrame && (r._frame = e), r;
  }
  updateUvs() {
    this._uvs === iP && (this._uvs = new iC()),
      this._uvs.set(this._frame, this.baseTexture, this.rotate),
      this._updateID++;
  }
  static from(e, t = {}, r = ed.STRICT_TEXTURE_CACHE) {
    let i = "string" == typeof e,
      s = null;
    if (i) s = e;
    else if (e instanceof r_) {
      if (!e.cacheId) {
        let r = t?.pixiIdPrefix || "pixiid";
        (e.cacheId = `${r}-${tQ()}`), r_.addToCache(e, e.cacheId);
      }
      s = e.cacheId;
    } else {
      if (!e._pixiId) {
        let r = t?.pixiIdPrefix || "pixiid";
        e._pixiId = `${r}_${tQ()}`;
      }
      s = e._pixiId;
    }
    let n = t2[s];
    if (i && r && !n)
      throw Error(`The cacheId "${s}" does not exist in TextureCache.`);
    return (
      n || e instanceof r_
        ? !n && e instanceof r_ && ((n = new iM(e)), iM.addToCache(n, s))
        : (t.resolution || (t.resolution = ri(e)),
          ((n = new iM(new r_(e, t))).baseTexture.cacheId = s),
          r_.addToCache(n.baseTexture, s),
          iM.addToCache(n, s)),
      n
    );
  }
  static fromURL(e, t) {
    let r = Object.assign({ autoLoad: !1 }, t?.resourceOptions),
      i = iM.from(e, Object.assign({ resourceOptions: r }, t), !1),
      s = i.baseTexture.resource;
    return i.baseTexture.valid
      ? Promise.resolve(i)
      : s.load().then(() => Promise.resolve(i));
  }
  static fromBuffer(e, t, r, i) {
    return new iM(r_.fromBuffer(e, t, r, i));
  }
  static fromLoader(e, t, r, i) {
    let s = new r_(
        e,
        Object.assign(
          { scaleMode: r_.defaultOptions.scaleMode, resolution: ri(t) },
          i
        )
      ),
      { resource: n } = s;
    n instanceof iI && (n.url = t);
    let a = new iM(s);
    return (
      r || (r = t),
      r_.addToCache(a.baseTexture, r),
      iM.addToCache(a, r),
      r !== t && (r_.addToCache(a.baseTexture, t), iM.addToCache(a, t)),
      a.baseTexture.valid
        ? Promise.resolve(a)
        : new Promise((e) => {
            a.baseTexture.once("loaded", () => e(a));
          })
    );
  }
  static addToCache(e, t) {
    t &&
      (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t),
      t2[t] &&
        t2[t] !== e &&
        console.warn(
          `Texture added to the cache with an id [${t}] that already had an entry`
        ),
      (t2[t] = e));
  }
  static removeFromCache(e) {
    if ("string" == typeof e) {
      let t = t2[e];
      if (t) {
        let r = t.textureCacheIds.indexOf(e);
        return r > -1 && t.textureCacheIds.splice(r, 1), delete t2[e], t;
      }
    } else if (e?.textureCacheIds) {
      for (let t = 0; t < e.textureCacheIds.length; ++t)
        t2[e.textureCacheIds[t]] === e && delete t2[e.textureCacheIds[t]];
      return (e.textureCacheIds.length = 0), e;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(e) {
    (this._frame = e), (this.noFrame = !1);
    let { x: t, y: r, width: i, height: s } = e,
      n = t + i > this.baseTexture.width,
      a = r + s > this.baseTexture.height;
    if (n || a) {
      let e = `X: ${t} + ${i} = ${t + i} > ${this.baseTexture.width}`,
        o = `Y: ${r} + ${s} = ${r + s} > ${this.baseTexture.height}`;
      throw Error(
        `Texture Error: frame does not fit inside the base Texture dimensions: ${e} ${
          n && a ? "and" : "or"
        } ${o}`
      );
    }
    (this.valid = i && s && this.baseTexture.valid),
      this.trim || this.rotate || (this.orig = e),
      this.valid && this.updateUvs();
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(e) {
    (this._rotate = e), this.valid && this.updateUvs();
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    return (
      iM._EMPTY ||
        ((iM._EMPTY = new iM(new r_())),
        ik(iM._EMPTY),
        ik(iM._EMPTY.baseTexture)),
      iM._EMPTY
    );
  }
  static get WHITE() {
    if (!iM._WHITE) {
      let e = ed.ADAPTER.createCanvas(16, 16),
        t = e.getContext("2d");
      (e.width = 16),
        (e.height = 16),
        (t.fillStyle = "white"),
        t.fillRect(0, 0, 16, 16),
        (iM._WHITE = new iM(r_.from(e))),
        ik(iM._WHITE),
        ik(iM._WHITE.baseTexture);
    }
    return iM._WHITE;
  }
}
class iD extends iM {
  constructor(e, t) {
    super(e, t),
      (this.valid = !0),
      (this.filterFrame = null),
      (this.filterPoolKey = null),
      this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(e) {
    this.framebuffer.multisample = e;
  }
  resize(e, t, r = !0) {
    let i = this.baseTexture.resolution,
      s = Math.round(e * i) / i,
      n = Math.round(t * i) / i;
    (this.valid = s > 0 && n > 0),
      (this._frame.width = this.orig.width = s),
      (this._frame.height = this.orig.height = n),
      r && this.baseTexture.resize(s, n),
      this.updateUvs();
  }
  setResolution(e) {
    let { baseTexture: t } = this;
    t.resolution !== e &&
      (t.setResolution(e), this.resize(t.width, t.height, !1));
  }
  static create(e) {
    return new iD(new iS(e));
  }
}
class iB {
  constructor(e) {
    (this.texturePool = {}),
      (this.textureOptions = e || {}),
      (this.enableFullScreen = !1),
      (this._pixelsWidth = 0),
      (this._pixelsHeight = 0);
  }
  createTexture(e, t, r = eh.NONE) {
    return new iD(
      new iS(
        Object.assign(
          { width: e, height: t, resolution: 1, multisample: r },
          this.textureOptions
        )
      )
    );
  }
  getOptimalTexture(e, t, r = 1, i = eh.NONE) {
    let s;
    (e = Math.max(Math.ceil(e * r - 1e-6), 1)),
      (t = Math.max(Math.ceil(t * r - 1e-6), 1)),
      this.enableFullScreen &&
      e === this._pixelsWidth &&
      t === this._pixelsHeight
        ? (s = i > 1 ? -i : -1)
        : ((e = tV(e)),
          (t = tV(t)),
          (s = (((65535 & e) << 16) | (65535 & t)) >>> 0),
          i > 1 && (s += 4294967296 * i)),
      this.texturePool[s] || (this.texturePool[s] = []);
    let n = this.texturePool[s].pop();
    return (
      n || (n = this.createTexture(e, t, i)),
      (n.filterPoolKey = s),
      n.setResolution(r),
      n
    );
  }
  getFilterTexture(e, t, r) {
    let i = this.getOptimalTexture(
      e.width,
      e.height,
      t || e.resolution,
      r || eh.NONE
    );
    return (i.filterFrame = e.filterFrame), i;
  }
  returnTexture(e) {
    let t = e.filterPoolKey;
    (e.filterFrame = null), this.texturePool[t].push(e);
  }
  returnFilterTexture(e) {
    this.returnTexture(e);
  }
  clear(e) {
    if ((e = !1 !== e))
      for (let e in this.texturePool) {
        let t = this.texturePool[e];
        if (t) for (let e = 0; e < t.length; e++) t[e].destroy(!0);
      }
    this.texturePool = {};
  }
  setScreenSize(e) {
    if (!(e.width === this._pixelsWidth && e.height === this._pixelsHeight)) {
      for (let t in ((this.enableFullScreen = e.width > 0 && e.height > 0),
      this.texturePool)) {
        if (!(0 > Number(t))) continue;
        let e = this.texturePool[t];
        if (e) for (let t = 0; t < e.length; t++) e[t].destroy(!0);
        this.texturePool[t] = [];
      }
      (this._pixelsWidth = e.width), (this._pixelsHeight = e.height);
    }
  }
}
iB.SCREEN_KEY = -1;
class iO extends rR {
  constructor() {
    super(),
      this.addAttribute(
        "aVertexPosition",
        new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      ).addIndex([0, 1, 3, 2]);
  }
}
class iF extends rR {
  constructor() {
    super(),
      (this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
      (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
      (this.vertexBuffer = new rb(this.vertices)),
      (this.uvBuffer = new rb(this.uvs)),
      this.addAttribute("aVertexPosition", this.vertexBuffer)
        .addAttribute("aTextureCoord", this.uvBuffer)
        .addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(e, t) {
    let r = 0,
      i = 0;
    return (
      (this.uvs[0] = r),
      (this.uvs[1] = i),
      (this.uvs[2] = r + t.width / e.width),
      (this.uvs[3] = i),
      (this.uvs[4] = r + t.width / e.width),
      (this.uvs[5] = i + t.height / e.height),
      (this.uvs[6] = r),
      (this.uvs[7] = i + t.height / e.height),
      (r = t.x),
      (i = t.y),
      (this.vertices[0] = r),
      (this.vertices[1] = i),
      (this.vertices[2] = r + t.width),
      (this.vertices[3] = i),
      (this.vertices[4] = r + t.width),
      (this.vertices[5] = i + t.height),
      (this.vertices[6] = r),
      (this.vertices[7] = i + t.height),
      this.invalidate(),
      this
    );
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class iL {
  constructor() {
    (this.renderTexture = null),
      (this.target = null),
      (this.legacy = !1),
      (this.resolution = 1),
      (this.multisample = eh.NONE),
      (this.sourceFrame = new rO()),
      (this.destinationFrame = new rO()),
      (this.bindingSourceFrame = new rO()),
      (this.bindingDestinationFrame = new rO()),
      (this.filters = []),
      (this.transform = null);
  }
  clear() {
    (this.target = null), (this.filters = null), (this.renderTexture = null);
  }
}
const iN = [new rD(), new rD(), new rD(), new rD()],
  iU = new rG();
class iG {
  constructor(e) {
    (this.renderer = e),
      (this.defaultFilterStack = [{}]),
      (this.texturePool = new iB()),
      (this.statePool = []),
      (this.quad = new iO()),
      (this.quadUv = new iF()),
      (this.tempRect = new rO()),
      (this.activeState = {}),
      (this.globalUniforms = new il(
        {
          outputFrame: new rO(),
          inputSize: new Float32Array(4),
          inputPixel: new Float32Array(4),
          inputClamp: new Float32Array(4),
          resolution: 1,
          filterArea: new Float32Array(4),
          filterClamp: new Float32Array(4),
        },
        !0
      )),
      (this.forceClear = !1),
      (this.useMaxPadding = !1);
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(e, t) {
    let r, i;
    let s = this.renderer,
      n = this.defaultFilterStack,
      a = this.statePool.pop() || new iL(),
      o = s.renderTexture;
    if (o.current) {
      let e = o.current;
      (r = e.resolution), (i = e.multisample);
    } else (r = s.resolution), (i = s.multisample);
    let l = t[0].resolution || r,
      h = t[0].multisample ?? i,
      u = t[0].padding,
      d = t[0].autoFit,
      c = t[0].legacy ?? !0;
    for (let e = 1; e < t.length; e++) {
      let s = t[e];
      (l = Math.min(l, s.resolution || r)),
        (h = Math.min(h, s.multisample ?? i)),
        (u = this.useMaxPadding ? Math.max(u, s.padding) : u + s.padding),
        (d = d && s.autoFit),
        (c = c || (s.legacy ?? !0));
    }
    1 === n.length && (this.defaultFilterStack[0].renderTexture = o.current),
      n.push(a),
      (a.resolution = l),
      (a.multisample = h),
      (a.legacy = c),
      (a.target = e),
      a.sourceFrame.copyFrom(e.filterArea || e.getBounds(!0)),
      a.sourceFrame.pad(u);
    let p = this.tempRect.copyFrom(o.sourceFrame);
    s.projection.transform &&
      this.transformAABB(iU.copyFrom(s.projection.transform).invert(), p),
      d
        ? (a.sourceFrame.fit(p),
          (a.sourceFrame.width <= 0 || a.sourceFrame.height <= 0) &&
            ((a.sourceFrame.width = 0), (a.sourceFrame.height = 0)))
        : a.sourceFrame.intersects(p) ||
          ((a.sourceFrame.width = 0), (a.sourceFrame.height = 0)),
      this.roundFrame(
        a.sourceFrame,
        o.current ? o.current.resolution : s.resolution,
        o.sourceFrame,
        o.destinationFrame,
        s.projection.transform
      ),
      (a.renderTexture = this.getOptimalFilterTexture(
        a.sourceFrame.width,
        a.sourceFrame.height,
        l,
        h
      )),
      (a.filters = t),
      (a.destinationFrame.width = a.renderTexture.width),
      (a.destinationFrame.height = a.renderTexture.height);
    let f = this.tempRect;
    (f.x = 0),
      (f.y = 0),
      (f.width = a.sourceFrame.width),
      (f.height = a.sourceFrame.height),
      (a.renderTexture.filterFrame = a.sourceFrame),
      a.bindingSourceFrame.copyFrom(o.sourceFrame),
      a.bindingDestinationFrame.copyFrom(o.destinationFrame),
      (a.transform = s.projection.transform),
      (s.projection.transform = null),
      o.bind(a.renderTexture, a.sourceFrame, f),
      s.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    let e = this.defaultFilterStack,
      t = e.pop(),
      r = t.filters;
    this.activeState = t;
    let i = this.globalUniforms.uniforms;
    (i.outputFrame = t.sourceFrame), (i.resolution = t.resolution);
    let s = i.inputSize,
      n = i.inputPixel,
      a = i.inputClamp;
    if (
      ((s[0] = t.destinationFrame.width),
      (s[1] = t.destinationFrame.height),
      (s[2] = 1 / s[0]),
      (s[3] = 1 / s[1]),
      (n[0] = Math.round(s[0] * t.resolution)),
      (n[1] = Math.round(s[1] * t.resolution)),
      (n[2] = 1 / n[0]),
      (n[3] = 1 / n[1]),
      (a[0] = 0.5 * n[2]),
      (a[1] = 0.5 * n[3]),
      (a[2] = t.sourceFrame.width * s[2] - 0.5 * n[2]),
      (a[3] = t.sourceFrame.height * s[3] - 0.5 * n[3]),
      t.legacy)
    ) {
      let e = i.filterArea;
      (e[0] = t.destinationFrame.width),
        (e[1] = t.destinationFrame.height),
        (e[2] = t.sourceFrame.x),
        (e[3] = t.sourceFrame.y),
        (i.filterClamp = i.inputClamp);
    }
    this.globalUniforms.update();
    let o = e[e.length - 1];
    if ((this.renderer.framebuffer.blit(), 1 === r.length))
      r[0].apply(this, t.renderTexture, o.renderTexture, es.BLEND, t),
        this.returnFilterTexture(t.renderTexture);
    else {
      let e = t.renderTexture,
        i = this.getOptimalFilterTexture(e.width, e.height, t.resolution);
      i.filterFrame = e.filterFrame;
      let s = 0;
      for (s = 0; s < r.length - 1; ++s) {
        1 === s &&
          t.multisample > 1 &&
          ((i = this.getOptimalFilterTexture(
            e.width,
            e.height,
            t.resolution
          )).filterFrame = e.filterFrame),
          r[s].apply(this, e, i, es.CLEAR, t);
        let n = e;
        (e = i), (i = n);
      }
      r[s].apply(this, e, o.renderTexture, es.BLEND, t),
        s > 1 && t.multisample > 1 && this.returnFilterTexture(t.renderTexture),
        this.returnFilterTexture(e),
        this.returnFilterTexture(i);
    }
    t.clear(), this.statePool.push(t);
  }
  bindAndClear(e, t = es.CLEAR) {
    let { renderTexture: r, state: i } = this.renderer;
    if (
      (e ===
      this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
        ? (this.renderer.projection.transform = this.activeState.transform)
        : (this.renderer.projection.transform = null),
      e?.filterFrame)
    ) {
      let t = this.tempRect;
      (t.x = 0),
        (t.y = 0),
        (t.width = e.filterFrame.width),
        (t.height = e.filterFrame.height),
        r.bind(e, e.filterFrame, t);
    } else
      e !==
      this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture
        ? r.bind(e)
        : this.renderer.renderTexture.bind(
            e,
            this.activeState.bindingSourceFrame,
            this.activeState.bindingDestinationFrame
          );
    let s = 1 & i.stateId || this.forceClear;
    (t === es.CLEAR || (t === es.BLIT && s)) &&
      this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(e, t, r, i) {
    let s = this.renderer;
    s.state.set(e.state),
      this.bindAndClear(r, i),
      (e.uniforms.uSampler = t),
      (e.uniforms.filterGlobals = this.globalUniforms),
      s.shader.bind(e),
      (e.legacy = !!e.program.attributeData.aTextureCoord),
      e.legacy
        ? (this.quadUv.map(t._frame, t.filterFrame),
          s.geometry.bind(this.quadUv),
          s.geometry.draw(q.TRIANGLES))
        : (s.geometry.bind(this.quad), s.geometry.draw(q.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(e, t) {
    let { sourceFrame: r, destinationFrame: i } = this.activeState,
      { orig: s } = t._texture,
      n = e.set(i.width, 0, 0, i.height, r.x, r.y),
      a = t.worldTransform.copyTo(rG.TEMP_MATRIX);
    return (
      a.invert(),
      n.prepend(a),
      n.scale(1 / s.width, 1 / s.height),
      n.translate(t.anchor.x, t.anchor.y),
      n
    );
  }
  destroy() {
    (this.renderer = null), this.texturePool.clear(!1);
  }
  getOptimalFilterTexture(e, t, r = 1, i = eh.NONE) {
    return this.texturePool.getOptimalTexture(e, t, r, i);
  }
  getFilterTexture(e, t, r) {
    if ("number" == typeof e) {
      let r = e;
      (e = t), (t = r);
    }
    e = e || this.activeState.renderTexture;
    let i = this.texturePool.getOptimalTexture(
      e.width,
      e.height,
      t || e.resolution,
      r || eh.NONE
    );
    return (i.filterFrame = e.filterFrame), i;
  }
  returnFilterTexture(e) {
    this.texturePool.returnTexture(e);
  }
  emptyPool() {
    this.texturePool.clear(!0);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(e, t) {
    let r = iN[0],
      i = iN[1],
      s = iN[2],
      n = iN[3];
    r.set(t.left, t.top),
      i.set(t.left, t.bottom),
      s.set(t.right, t.top),
      n.set(t.right, t.bottom),
      e.apply(r, r),
      e.apply(i, i),
      e.apply(s, s),
      e.apply(n, n);
    let a = Math.min(r.x, i.x, s.x, n.x),
      o = Math.min(r.y, i.y, s.y, n.y),
      l = Math.max(r.x, i.x, s.x, n.x),
      h = Math.max(r.y, i.y, s.y, n.y);
    (t.x = a), (t.y = o), (t.width = l - a), (t.height = h - o);
  }
  roundFrame(e, t, r, i, s) {
    if (!(e.width <= 0 || e.height <= 0 || r.width <= 0 || r.height <= 0)) {
      if (s) {
        let { a: e, b: t, c: r, d: i } = s;
        if (
          (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4) &&
          (Math.abs(e) > 1e-4 || Math.abs(i) > 1e-4)
        )
          return;
      }
      (s = s ? iU.copyFrom(s) : iU.identity())
        .translate(-r.x, -r.y)
        .scale(i.width / r.width, i.height / r.height)
        .translate(i.x, i.y),
        this.transformAABB(s, e),
        e.ceil(t),
        this.transformAABB(s.invert(), e);
    }
  }
}
(iG.extension = { type: rs.RendererSystem, name: "filter" }), ro.add(iG);
class iH {
  constructor(e) {
    (this.framebuffer = e),
      (this.stencil = null),
      (this.dirtyId = -1),
      (this.dirtyFormat = -1),
      (this.dirtySize = -1),
      (this.multisample = eh.NONE),
      (this.msaaBuffer = null),
      (this.blitFramebuffer = null),
      (this.mipLevel = 0);
  }
}
const iz = new rO();
class ij {
  constructor(e) {
    (this.renderer = e),
      (this.managedFramebuffers = []),
      (this.unknownFramebuffer = new iw(10, 10)),
      (this.msaaSamples = null);
  }
  contextChange() {
    this.disposeAll(!0);
    let e = (this.gl = this.renderer.gl);
    if (
      ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
      (this.current = this.unknownFramebuffer),
      (this.viewport = new rO()),
      (this.hasMRT = !0),
      (this.writeDepthTexture = !0),
      1 === this.renderer.context.webGLVersion)
    ) {
      let t = this.renderer.context.extensions.drawBuffers,
        r = this.renderer.context.extensions.depthTexture;
      ed.PREFER_ENV === X.WEBGL_LEGACY && ((t = null), (r = null)),
        t
          ? (e.drawBuffers = (e) => t.drawBuffersWEBGL(e))
          : ((this.hasMRT = !1), (e.drawBuffers = () => {})),
        r || (this.writeDepthTexture = !1);
    } else
      this.msaaSamples = e.getInternalformatParameter(
        e.RENDERBUFFER,
        e.RGBA8,
        e.SAMPLES
      );
  }
  bind(e, t, r = 0) {
    let { gl: i } = this;
    if (e) {
      let s = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e);
      this.current !== e &&
        ((this.current = e), i.bindFramebuffer(i.FRAMEBUFFER, s.framebuffer)),
        s.mipLevel !== r && (e.dirtyId++, e.dirtyFormat++, (s.mipLevel = r)),
        s.dirtyId !== e.dirtyId &&
          ((s.dirtyId = e.dirtyId),
          s.dirtyFormat !== e.dirtyFormat
            ? ((s.dirtyFormat = e.dirtyFormat),
              (s.dirtySize = e.dirtySize),
              this.updateFramebuffer(e, r))
            : s.dirtySize !== e.dirtySize &&
              ((s.dirtySize = e.dirtySize), this.resizeFramebuffer(e)));
      for (let t = 0; t < e.colorTextures.length; t++) {
        let r = e.colorTextures[t];
        this.renderer.texture.unbind(r.parentTextureArray || r);
      }
      if ((e.depthTexture && this.renderer.texture.unbind(e.depthTexture), t)) {
        let e = t.width >> r,
          i = t.height >> r,
          s = e / t.width;
        this.setViewport(t.x * s, t.y * s, e, i);
      } else {
        let t = e.width >> r,
          i = e.height >> r;
        this.setViewport(0, 0, t, i);
      }
    } else
      this.current &&
        ((this.current = null), i.bindFramebuffer(i.FRAMEBUFFER, null)),
        t
          ? this.setViewport(t.x, t.y, t.width, t.height)
          : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(e, t, r, i) {
    let s = this.viewport;
    (e = Math.round(e)),
      (t = Math.round(t)),
      (r = Math.round(r)),
      (i = Math.round(i)),
      (s.width !== r || s.height !== i || s.x !== e || s.y !== t) &&
        ((s.x = e),
        (s.y = t),
        (s.width = r),
        (s.height = i),
        this.gl.viewport(e, t, r, i));
  }
  get size() {
    return this.current
      ? { x: 0, y: 0, width: this.current.width, height: this.current.height }
      : {
          x: 0,
          y: 0,
          width: this.renderer.width,
          height: this.renderer.height,
        };
  }
  clear(e, t, r, i, s = W.COLOR | W.DEPTH) {
    let { gl: n } = this;
    n.clearColor(e, t, r, i), n.clear(s);
  }
  initFramebuffer(e) {
    let { gl: t } = this,
      r = new iH(t.createFramebuffer());
    return (
      (r.multisample = this.detectSamples(e.multisample)),
      (e.glFramebuffers[this.CONTEXT_UID] = r),
      this.managedFramebuffers.push(e),
      e.disposeRunner.add(this),
      r
    );
  }
  resizeFramebuffer(e) {
    let { gl: t } = this,
      r = e.glFramebuffers[this.CONTEXT_UID];
    if (r.stencil) {
      let i;
      t.bindRenderbuffer(t.RENDERBUFFER, r.stencil),
        (i =
          1 === this.renderer.context.webGLVersion
            ? t.DEPTH_STENCIL
            : e.depth && e.stencil
            ? t.DEPTH24_STENCIL8
            : e.depth
            ? t.DEPTH_COMPONENT24
            : t.STENCIL_INDEX8),
        r.msaaBuffer
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              r.multisample,
              i,
              e.width,
              e.height
            )
          : t.renderbufferStorage(t.RENDERBUFFER, i, e.width, e.height);
    }
    let i = e.colorTextures,
      s = i.length;
    t.drawBuffers || (s = Math.min(s, 1));
    for (let n = 0; n < s; n++) {
      let s = i[n],
        a = s.parentTextureArray || s;
      this.renderer.texture.bind(a, 0),
        0 === n &&
          r.msaaBuffer &&
          (t.bindRenderbuffer(t.RENDERBUFFER, r.msaaBuffer),
          t.renderbufferStorageMultisample(
            t.RENDERBUFFER,
            r.multisample,
            a._glTextures[this.CONTEXT_UID].internalFormat,
            e.width,
            e.height
          ));
    }
    e.depthTexture &&
      this.writeDepthTexture &&
      this.renderer.texture.bind(e.depthTexture, 0);
  }
  updateFramebuffer(e, t) {
    let { gl: r } = this,
      i = e.glFramebuffers[this.CONTEXT_UID],
      s = e.colorTextures,
      n = s.length;
    r.drawBuffers || (n = Math.min(n, 1)),
      i.multisample > 1 && this.canMultisampleFramebuffer(e)
        ? (i.msaaBuffer = i.msaaBuffer || r.createRenderbuffer())
        : i.msaaBuffer &&
          (r.deleteRenderbuffer(i.msaaBuffer),
          (i.msaaBuffer = null),
          i.blitFramebuffer &&
            (i.blitFramebuffer.dispose(), (i.blitFramebuffer = null)));
    let a = [];
    for (let o = 0; o < n; o++) {
      let n = s[o],
        l = n.parentTextureArray || n;
      this.renderer.texture.bind(l, 0),
        0 === o && i.msaaBuffer
          ? (r.bindRenderbuffer(r.RENDERBUFFER, i.msaaBuffer),
            r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              i.multisample,
              l._glTextures[this.CONTEXT_UID].internalFormat,
              e.width,
              e.height
            ),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              i.msaaBuffer
            ))
          : (r.framebufferTexture2D(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + o,
              n.target,
              l._glTextures[this.CONTEXT_UID].texture,
              t
            ),
            a.push(r.COLOR_ATTACHMENT0 + o));
    }
    if (
      (a.length > 1 && r.drawBuffers(a),
      e.depthTexture && this.writeDepthTexture)
    ) {
      let i = e.depthTexture;
      this.renderer.texture.bind(i, 0),
        r.framebufferTexture2D(
          r.FRAMEBUFFER,
          r.DEPTH_ATTACHMENT,
          r.TEXTURE_2D,
          i._glTextures[this.CONTEXT_UID].texture,
          t
        );
    }
    if ((e.stencil || e.depth) && !(e.depthTexture && this.writeDepthTexture)) {
      let t, s;
      (i.stencil = i.stencil || r.createRenderbuffer()),
        1 === this.renderer.context.webGLVersion
          ? ((t = r.DEPTH_STENCIL_ATTACHMENT), (s = r.DEPTH_STENCIL))
          : e.depth && e.stencil
          ? ((t = r.DEPTH_STENCIL_ATTACHMENT), (s = r.DEPTH24_STENCIL8))
          : e.depth
          ? ((t = r.DEPTH_ATTACHMENT), (s = r.DEPTH_COMPONENT24))
          : ((t = r.STENCIL_ATTACHMENT), (s = r.STENCIL_INDEX8)),
        r.bindRenderbuffer(r.RENDERBUFFER, i.stencil),
        i.msaaBuffer
          ? r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              i.multisample,
              s,
              e.width,
              e.height
            )
          : r.renderbufferStorage(r.RENDERBUFFER, s, e.width, e.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, t, r.RENDERBUFFER, i.stencil);
    } else i.stencil && (r.deleteRenderbuffer(i.stencil), (i.stencil = null));
  }
  canMultisampleFramebuffer(e) {
    return (
      1 !== this.renderer.context.webGLVersion &&
      e.colorTextures.length <= 1 &&
      !e.depthTexture
    );
  }
  detectSamples(e) {
    let { msaaSamples: t } = this,
      r = eh.NONE;
    if (e <= 1 || null === t) return r;
    for (let i = 0; i < t.length; i++)
      if (t[i] <= e) {
        r = t[i];
        break;
      }
    return 1 === r && (r = eh.NONE), r;
  }
  blit(e, t, r) {
    let { current: i, renderer: s, gl: n, CONTEXT_UID: a } = this;
    if (2 !== s.context.webGLVersion || !i) return;
    let o = i.glFramebuffers[a];
    if (!o) return;
    if (!e) {
      if (!o.msaaBuffer) return;
      let t = i.colorTextures[0];
      if (!t) return;
      o.blitFramebuffer ||
        ((o.blitFramebuffer = new iw(i.width, i.height)),
        o.blitFramebuffer.addColorTexture(0, t)),
        (e = o.blitFramebuffer).colorTextures[0] !== t &&
          ((e.colorTextures[0] = t), e.dirtyId++, e.dirtyFormat++),
        (e.width !== i.width || e.height !== i.height) &&
          ((e.width = i.width),
          (e.height = i.height),
          e.dirtyId++,
          e.dirtySize++);
    }
    t || (((t = iz).width = i.width), (t.height = i.height)), r || (r = t);
    let l = t.width === r.width && t.height === r.height;
    this.bind(e),
      n.bindFramebuffer(n.READ_FRAMEBUFFER, o.framebuffer),
      n.blitFramebuffer(
        t.left,
        t.top,
        t.right,
        t.bottom,
        r.left,
        r.top,
        r.right,
        r.bottom,
        n.COLOR_BUFFER_BIT,
        l ? n.NEAREST : n.LINEAR
      ),
      n.bindFramebuffer(
        n.READ_FRAMEBUFFER,
        e.glFramebuffers[this.CONTEXT_UID].framebuffer
      );
  }
  disposeFramebuffer(e, t) {
    let r = e.glFramebuffers[this.CONTEXT_UID],
      i = this.gl;
    if (!r) return;
    delete e.glFramebuffers[this.CONTEXT_UID];
    let s = this.managedFramebuffers.indexOf(e);
    s >= 0 && this.managedFramebuffers.splice(s, 1),
      e.disposeRunner.remove(this),
      t ||
        (i.deleteFramebuffer(r.framebuffer),
        r.msaaBuffer && i.deleteRenderbuffer(r.msaaBuffer),
        r.stencil && i.deleteRenderbuffer(r.stencil)),
      r.blitFramebuffer && this.disposeFramebuffer(r.blitFramebuffer, t);
  }
  disposeAll(e) {
    let t = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let r = 0; r < t.length; r++) this.disposeFramebuffer(t[r], e);
  }
  forceStencil() {
    let e, t;
    let r = this.current;
    if (!r) return;
    let i = r.glFramebuffers[this.CONTEXT_UID];
    if (!i || (i.stencil && r.stencil)) return;
    r.stencil = !0;
    let s = r.width,
      n = r.height,
      a = this.gl,
      o = (i.stencil = a.createRenderbuffer());
    a.bindRenderbuffer(a.RENDERBUFFER, o),
      1 === this.renderer.context.webGLVersion
        ? ((e = a.DEPTH_STENCIL_ATTACHMENT), (t = a.DEPTH_STENCIL))
        : r.depth
        ? ((e = a.DEPTH_STENCIL_ATTACHMENT), (t = a.DEPTH24_STENCIL8))
        : ((e = a.STENCIL_ATTACHMENT), (t = a.STENCIL_INDEX8)),
      i.msaaBuffer
        ? a.renderbufferStorageMultisample(
            a.RENDERBUFFER,
            i.multisample,
            t,
            s,
            n
          )
        : a.renderbufferStorage(a.RENDERBUFFER, t, s, n),
      a.framebufferRenderbuffer(a.FRAMEBUFFER, e, a.RENDERBUFFER, o);
  }
  reset() {
    (this.current = this.unknownFramebuffer), (this.viewport = new rO());
  }
  destroy() {
    this.renderer = null;
  }
}
(ij.extension = { type: rs.RendererSystem, name: "framebuffer" }), ro.add(ij);
const i$ = { 5126: 4, 5123: 2, 5121: 1 };
class iX {
  constructor(e) {
    (this.renderer = e),
      (this._activeGeometry = null),
      (this._activeVao = null),
      (this.hasVao = !0),
      (this.hasInstance = !0),
      (this.canUseUInt32ElementIndex = !1),
      (this.managedGeometries = {});
  }
  contextChange() {
    this.disposeAll(!0);
    let e = (this.gl = this.renderer.gl),
      t = this.renderer.context;
    if (
      ((this.CONTEXT_UID = this.renderer.CONTEXT_UID), 2 !== t.webGLVersion)
    ) {
      let t = this.renderer.context.extensions.vertexArrayObject;
      ed.PREFER_ENV === X.WEBGL_LEGACY && (t = null),
        t
          ? ((e.createVertexArray = () => t.createVertexArrayOES()),
            (e.bindVertexArray = (e) => t.bindVertexArrayOES(e)),
            (e.deleteVertexArray = (e) => t.deleteVertexArrayOES(e)))
          : ((this.hasVao = !1),
            (e.createVertexArray = () => null),
            (e.bindVertexArray = () => null),
            (e.deleteVertexArray = () => null));
    }
    if (2 !== t.webGLVersion) {
      let t = e.getExtension("ANGLE_instanced_arrays");
      t
        ? ((e.vertexAttribDivisor = (e, r) => t.vertexAttribDivisorANGLE(e, r)),
          (e.drawElementsInstanced = (e, r, i, s, n) =>
            t.drawElementsInstancedANGLE(e, r, i, s, n)),
          (e.drawArraysInstanced = (e, r, i, s) =>
            t.drawArraysInstancedANGLE(e, r, i, s)))
        : (this.hasInstance = !1);
    }
    this.canUseUInt32ElementIndex =
      2 === t.webGLVersion || !!t.extensions.uint32ElementIndex;
  }
  bind(e, t) {
    t = t || this.renderer.shader.shader;
    let { gl: r } = this,
      i = e.glVertexArrayObjects[this.CONTEXT_UID],
      s = !1;
    i ||
      ((this.managedGeometries[e.id] = e),
      e.disposeRunner.add(this),
      (e.glVertexArrayObjects[this.CONTEXT_UID] = i = {}),
      (s = !0));
    let n = i[t.program.id] || this.initGeometryVao(e, t, s);
    (this._activeGeometry = e),
      this._activeVao !== n &&
        ((this._activeVao = n),
        this.hasVao ? r.bindVertexArray(n) : this.activateVao(e, t.program)),
      this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    let e = this._activeGeometry,
      t = this.renderer.buffer;
    for (let r = 0; r < e.buffers.length; r++) {
      let i = e.buffers[r];
      t.update(i);
    }
  }
  checkCompatibility(e, t) {
    let r = e.attributes,
      i = t.attributeData;
    for (let e in i)
      if (!r[e])
        throw Error(
          `shader and geometry incompatible, geometry missing the "${e}" attribute`
        );
  }
  getSignature(e, t) {
    let r = e.attributes,
      i = t.attributeData,
      s = ["g", e.id];
    for (let e in r) i[e] && s.push(e, i[e].location);
    return s.join("-");
  }
  initGeometryVao(e, t, r = !0) {
    let i = this.gl,
      s = this.CONTEXT_UID,
      n = this.renderer.buffer,
      a = t.program;
    a.glPrograms[s] || this.renderer.shader.generateProgram(t),
      this.checkCompatibility(e, a);
    let o = this.getSignature(e, a),
      l = e.glVertexArrayObjects[this.CONTEXT_UID],
      h = l[o];
    if (h) return (l[a.id] = h), h;
    let u = e.buffers,
      d = e.attributes,
      c = {},
      p = {};
    for (let e in u) (c[e] = 0), (p[e] = 0);
    for (let e in d)
      !d[e].size && a.attributeData[e]
        ? (d[e].size = a.attributeData[e].size)
        : d[e].size ||
          console.warn(
            `PIXI Geometry attribute '${e}' size cannot be determined (likely the bound shader does not have the attribute)`
          ),
        (c[d[e].buffer] += d[e].size * i$[d[e].type]);
    for (let e in d) {
      let t = d[e],
        r = t.size;
      void 0 === t.stride &&
        (c[t.buffer] === r * i$[t.type]
          ? (t.stride = 0)
          : (t.stride = c[t.buffer])),
        void 0 === t.start &&
          ((t.start = p[t.buffer]), (p[t.buffer] += r * i$[t.type]));
    }
    (h = i.createVertexArray()), i.bindVertexArray(h);
    for (let e = 0; e < u.length; e++) {
      let t = u[e];
      n.bind(t), r && t._glBuffers[s].refCount++;
    }
    return (
      this.activateVao(e, a),
      (l[a.id] = h),
      (l[o] = h),
      i.bindVertexArray(null),
      n.unbind(eu.ARRAY_BUFFER),
      h
    );
  }
  disposeGeometry(e, t) {
    if (!this.managedGeometries[e.id]) return;
    delete this.managedGeometries[e.id];
    let r = e.glVertexArrayObjects[this.CONTEXT_UID],
      i = this.gl,
      s = e.buffers,
      n = this.renderer?.buffer;
    if ((e.disposeRunner.remove(this), r)) {
      if (n)
        for (let e = 0; e < s.length; e++) {
          let r = s[e]._glBuffers[this.CONTEXT_UID];
          r && (r.refCount--, 0 !== r.refCount || t || n.dispose(s[e], t));
        }
      if (!t) {
        for (let e in r)
          if ("g" === e[0]) {
            let t = r[e];
            this._activeVao === t && this.unbind(), i.deleteVertexArray(t);
          }
      }
      delete e.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(e) {
    let t = Object.keys(this.managedGeometries);
    for (let r = 0; r < t.length; r++)
      this.disposeGeometry(this.managedGeometries[t[r]], e);
  }
  activateVao(e, t) {
    let r = this.gl,
      i = this.CONTEXT_UID,
      s = this.renderer.buffer,
      n = e.buffers,
      a = e.attributes;
    e.indexBuffer && s.bind(e.indexBuffer);
    let o = null;
    for (let e in a) {
      let l = a[e],
        h = n[l.buffer],
        u = h._glBuffers[i];
      if (t.attributeData[e]) {
        o !== u && (s.bind(h), (o = u));
        let i = t.attributeData[e].location;
        if (
          (r.enableVertexAttribArray(i),
          r.vertexAttribPointer(
            i,
            l.size,
            l.type || r.FLOAT,
            l.normalized,
            l.stride,
            l.start
          ),
          l.instance)
        ) {
          if (this.hasInstance) r.vertexAttribDivisor(i, l.divisor);
          else
            throw Error(
              "geometry error, GPU Instancing is not supported on this device"
            );
        }
      }
    }
  }
  draw(e, t, r, i) {
    let { gl: s } = this,
      n = this._activeGeometry;
    if (n.indexBuffer) {
      let a = n.indexBuffer.data.BYTES_PER_ELEMENT,
        o = 2 === a ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
      2 === a || (4 === a && this.canUseUInt32ElementIndex)
        ? n.instanced
          ? s.drawElementsInstanced(
              e,
              t || n.indexBuffer.data.length,
              o,
              (r || 0) * a,
              i || 1
            )
          : s.drawElements(e, t || n.indexBuffer.data.length, o, (r || 0) * a)
        : console.warn("unsupported index buffer type: uint32");
    } else
      n.instanced
        ? s.drawArraysInstanced(e, r, t || n.getSize(), i || 1)
        : s.drawArrays(e, r, t || n.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null),
      (this._activeVao = null),
      (this._activeGeometry = null);
  }
  destroy() {
    this.renderer = null;
  }
}
(iX.extension = { type: rs.RendererSystem, name: "geometry" }), ro.add(iX);
const iV = new rG();
class iW {
  constructor(e, t) {
    (this._texture = e),
      (this.mapCoord = new rG()),
      (this.uClampFrame = new Float32Array(4)),
      (this.uClampOffset = new Float32Array(2)),
      (this._textureID = -1),
      (this._updateID = 0),
      (this.clampOffset = 0),
      (this.clampMargin = typeof t > "u" ? 0.5 : t),
      (this.isSimple = !1);
  }
  get texture() {
    return this._texture;
  }
  set texture(e) {
    (this._texture = e), (this._textureID = -1);
  }
  multiplyUvs(e, t) {
    void 0 === t && (t = e);
    let r = this.mapCoord;
    for (let i = 0; i < e.length; i += 2) {
      let s = e[i],
        n = e[i + 1];
      (t[i] = s * r.a + n * r.c + r.tx), (t[i + 1] = s * r.b + n * r.d + r.ty);
    }
    return t;
  }
  update(e) {
    let t = this._texture;
    if (!t || !t.valid || (!e && this._textureID === t._updateID)) return !1;
    (this._textureID = t._updateID), this._updateID++;
    let r = t._uvs;
    this.mapCoord.set(
      r.x1 - r.x0,
      r.y1 - r.y0,
      r.x3 - r.x0,
      r.y3 - r.y0,
      r.x0,
      r.y0
    );
    let i = t.orig,
      s = t.trim;
    s &&
      (iV.set(
        i.width / s.width,
        0,
        0,
        i.height / s.height,
        -s.x / s.width,
        -s.y / s.height
      ),
      this.mapCoord.append(iV));
    let n = t.baseTexture,
      a = this.uClampFrame,
      o = this.clampMargin / n.resolution,
      l = this.clampOffset;
    return (
      (a[0] = (t._frame.x + o + l) / n.width),
      (a[1] = (t._frame.y + o + l) / n.height),
      (a[2] = (t._frame.x + t._frame.width - o + l) / n.width),
      (a[3] = (t._frame.y + t._frame.height - o + l) / n.height),
      (this.uClampOffset[0] = l / n.realWidth),
      (this.uClampOffset[1] = l / n.realHeight),
      (this.isSimple =
        t._frame.width === n.width &&
        t._frame.height === n.height &&
        0 === t.rotate),
      !0
    );
  }
}
var iY = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,
  iq = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class iZ extends iv {
  constructor(e, t, r) {
    let i = null;
    "string" != typeof e &&
      void 0 === t &&
      void 0 === r &&
      ((i = e), (e = void 0), (t = void 0), (r = void 0)),
      super(e || iq, t || iY, r),
      (this.maskSprite = i),
      (this.maskMatrix = new rG());
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(e) {
    (this._maskSprite = e),
      this._maskSprite && (this._maskSprite.renderable = !1);
  }
  apply(e, t, r, i) {
    let s = this._maskSprite,
      n = s._texture;
    n.valid &&
      (n.uvMatrix || (n.uvMatrix = new iW(n, 0)),
      n.uvMatrix.update(),
      (this.uniforms.npmAlpha = n.baseTexture.alphaMode ? 0 : 1),
      (this.uniforms.mask = n),
      (this.uniforms.otherMatrix = e
        .calculateSpriteMatrix(this.maskMatrix, s)
        .prepend(n.uvMatrix.mapCoord)),
      (this.uniforms.alpha = s.worldAlpha),
      (this.uniforms.maskClamp = n.uvMatrix.uClampFrame),
      e.applyFilter(this, t, r, i));
  }
}
class iK {
  constructor(e = null) {
    (this.type = eo.NONE),
      (this.autoDetect = !0),
      (this.maskObject = e || null),
      (this.pooled = !1),
      (this.isMaskData = !0),
      (this.resolution = null),
      (this.multisample = iv.defaultMultisample),
      (this.enabled = !0),
      (this.colorMask = 15),
      (this._filters = null),
      (this._stencilCounter = 0),
      (this._scissorCounter = 0),
      (this._scissorRect = null),
      (this._scissorRectLocal = null),
      (this._colorMask = 15),
      (this._target = null);
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(e) {
    e
      ? this._filters
        ? (this._filters[0] = e)
        : (this._filters = [e])
      : (this._filters = null);
  }
  reset() {
    this.pooled &&
      ((this.maskObject = null), (this.type = eo.NONE), (this.autoDetect = !0)),
      (this._target = null),
      (this._scissorRectLocal = null);
  }
  copyCountersOrReset(e) {
    e
      ? ((this._stencilCounter = e._stencilCounter),
        (this._scissorCounter = e._scissorCounter),
        (this._scissorRect = e._scissorRect))
      : ((this._stencilCounter = 0),
        (this._scissorCounter = 0),
        (this._scissorRect = null));
  }
}
class iQ {
  constructor(e) {
    (this.renderer = e),
      (this.enableScissor = !0),
      (this.alphaMaskPool = []),
      (this.maskDataPool = []),
      (this.maskStack = []),
      (this.alphaMaskIndex = 0);
  }
  setMaskStack(e) {
    (this.maskStack = e),
      this.renderer.scissor.setMaskStack(e),
      this.renderer.stencil.setMaskStack(e);
  }
  push(e, t) {
    let r = t;
    if (!r.isMaskData) {
      let e = this.maskDataPool.pop() || new iK();
      (e.pooled = !0), (e.maskObject = t), (r = e);
    }
    let i =
      0 !== this.maskStack.length
        ? this.maskStack[this.maskStack.length - 1]
        : null;
    if (
      (r.copyCountersOrReset(i),
      (r._colorMask = i ? i._colorMask : 15),
      r.autoDetect && this.detect(r),
      (r._target = e),
      r.type !== eo.SPRITE && this.maskStack.push(r),
      r.enabled)
    )
      switch (r.type) {
        case eo.SCISSOR:
          this.renderer.scissor.push(r);
          break;
        case eo.STENCIL:
          this.renderer.stencil.push(r);
          break;
        case eo.SPRITE:
          r.copyCountersOrReset(null), this.pushSpriteMask(r);
          break;
        case eo.COLOR:
          this.pushColorMask(r);
      }
    r.type === eo.SPRITE && this.maskStack.push(r);
  }
  pop(e) {
    let t = this.maskStack.pop();
    if (!(!t || t._target !== e)) {
      if (t.enabled)
        switch (t.type) {
          case eo.SCISSOR:
            this.renderer.scissor.pop(t);
            break;
          case eo.STENCIL:
            this.renderer.stencil.pop(t.maskObject);
            break;
          case eo.SPRITE:
            this.popSpriteMask(t);
            break;
          case eo.COLOR:
            this.popColorMask(t);
        }
      if (
        (t.reset(),
        t.pooled && this.maskDataPool.push(t),
        0 !== this.maskStack.length)
      ) {
        let e = this.maskStack[this.maskStack.length - 1];
        e.type === eo.SPRITE &&
          e._filters &&
          (e._filters[0].maskSprite = e.maskObject);
      }
    }
  }
  detect(e) {
    let t = e.maskObject;
    t
      ? t.isSprite
        ? (e.type = eo.SPRITE)
        : this.enableScissor && this.renderer.scissor.testScissor(e)
        ? (e.type = eo.SCISSOR)
        : (e.type = eo.STENCIL)
      : (e.type = eo.COLOR);
  }
  pushSpriteMask(e) {
    let { maskObject: t } = e,
      r = e._target,
      i = e._filters;
    i ||
      (i = this.alphaMaskPool[this.alphaMaskIndex]) ||
      (i = this.alphaMaskPool[this.alphaMaskIndex] = [new iZ()]),
      (i[0].resolution = e.resolution),
      (i[0].multisample = e.multisample),
      (i[0].maskSprite = t);
    let s = r.filterArea;
    (r.filterArea = t.getBounds(!0)),
      this.renderer.filter.push(r, i),
      (r.filterArea = s),
      e._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(e) {
    this.renderer.filter.pop(),
      e._filters
        ? (e._filters[0].maskSprite = null)
        : (this.alphaMaskIndex--,
          (this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null));
  }
  pushColorMask(e) {
    let t = e._colorMask,
      r = (e._colorMask = t & e.colorMask);
    r !== t &&
      this.renderer.gl.colorMask(
        (1 & r) != 0,
        (2 & r) != 0,
        (4 & r) != 0,
        (8 & r) != 0
      );
  }
  popColorMask(e) {
    let t = e._colorMask,
      r =
        this.maskStack.length > 0
          ? this.maskStack[this.maskStack.length - 1]._colorMask
          : 15;
    r !== t &&
      this.renderer.gl.colorMask(
        (1 & r) != 0,
        (2 & r) != 0,
        (4 & r) != 0,
        (8 & r) != 0
      );
  }
  destroy() {
    this.renderer = null;
  }
}
(iQ.extension = { type: rs.RendererSystem, name: "mask" }), ro.add(iQ);
class iJ {
  constructor(e) {
    (this.renderer = e), (this.maskStack = []), (this.glConst = 0);
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(e) {
    let { gl: t } = this.renderer,
      r = this.getStackLength();
    this.maskStack = e;
    let i = this.getStackLength();
    i !== r &&
      (0 === i
        ? t.disable(this.glConst)
        : (t.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {}
  destroy() {
    (this.renderer = null), (this.maskStack = null);
  }
}
const i0 = new rG(),
  i1 = [],
  i2 = class e extends iJ {
    constructor(e) {
      super(e),
        (this.glConst = ed.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST);
    }
    getStackLength() {
      let e = this.maskStack[this.maskStack.length - 1];
      return e ? e._scissorCounter : 0;
    }
    calcScissorRect(e) {
      if (e._scissorRectLocal) return;
      let t = e._scissorRect,
        { maskObject: r } = e,
        { renderer: i } = this,
        s = i.renderTexture,
        n = r.getBounds(!0, i1.pop() ?? new rO());
      this.roundFrameToPixels(
        n,
        s.current ? s.current.resolution : i.resolution,
        s.sourceFrame,
        s.destinationFrame,
        i.projection.transform
      ),
        t && n.fit(t),
        (e._scissorRectLocal = n);
    }
    static isMatrixRotated(e) {
      if (!e) return !1;
      let { a: t, b: r, c: i, d: s } = e;
      return (
        (Math.abs(r) > 1e-4 || Math.abs(i) > 1e-4) &&
        (Math.abs(t) > 1e-4 || Math.abs(s) > 1e-4)
      );
    }
    testScissor(t) {
      let { maskObject: r } = t;
      if (
        !r.isFastRect ||
        !r.isFastRect() ||
        e.isMatrixRotated(r.worldTransform) ||
        e.isMatrixRotated(this.renderer.projection.transform)
      )
        return !1;
      this.calcScissorRect(t);
      let i = t._scissorRectLocal;
      return i.width > 0 && i.height > 0;
    }
    roundFrameToPixels(t, r, i, s, n) {
      e.isMatrixRotated(n) ||
        ((n = n ? i0.copyFrom(n) : i0.identity())
          .translate(-i.x, -i.y)
          .scale(s.width / i.width, s.height / i.height)
          .translate(s.x, s.y),
        this.renderer.filter.transformAABB(n, t),
        t.fit(s),
        (t.x = Math.round(t.x * r)),
        (t.y = Math.round(t.y * r)),
        (t.width = Math.round(t.width * r)),
        (t.height = Math.round(t.height * r)));
    }
    push(e) {
      e._scissorRectLocal || this.calcScissorRect(e);
      let { gl: t } = this.renderer;
      e._scissorRect || t.enable(t.SCISSOR_TEST),
        e._scissorCounter++,
        (e._scissorRect = e._scissorRectLocal),
        this._useCurrent();
    }
    pop(e) {
      let { gl: t } = this.renderer;
      e && i1.push(e._scissorRectLocal),
        this.getStackLength() > 0
          ? this._useCurrent()
          : t.disable(t.SCISSOR_TEST);
    }
    _useCurrent() {
      let e;
      let t = this.maskStack[this.maskStack.length - 1]._scissorRect;
      (e = this.renderer.renderTexture.current
        ? t.y
        : this.renderer.height - t.height - t.y),
        this.renderer.gl.scissor(t.x, e, t.width, t.height);
    }
  };
(i2.extension = { type: rs.RendererSystem, name: "scissor" }), ro.add(i2);
class i3 extends iJ {
  constructor(e) {
    super(e),
      (this.glConst = ed.ADAPTER.getWebGLRenderingContext().STENCIL_TEST);
  }
  getStackLength() {
    let e = this.maskStack[this.maskStack.length - 1];
    return e ? e._stencilCounter : 0;
  }
  push(e) {
    let t = e.maskObject,
      { gl: r } = this.renderer,
      i = e._stencilCounter;
    0 === i &&
      (this.renderer.framebuffer.forceStencil(),
      r.clearStencil(0),
      r.clear(r.STENCIL_BUFFER_BIT),
      r.enable(r.STENCIL_TEST)),
      e._stencilCounter++;
    let s = e._colorMask;
    0 !== s && ((e._colorMask = 0), r.colorMask(!1, !1, !1, !1)),
      r.stencilFunc(r.EQUAL, i, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.INCR),
      (t.renderable = !0),
      t.render(this.renderer),
      this.renderer.batch.flush(),
      (t.renderable = !1),
      0 !== s &&
        ((e._colorMask = s),
        r.colorMask((1 & s) != 0, (2 & s) != 0, (4 & s) != 0, (8 & s) != 0)),
      this._useCurrent();
  }
  pop(e) {
    let t = this.renderer.gl;
    if (0 === this.getStackLength()) t.disable(t.STENCIL_TEST);
    else {
      let r =
          0 !== this.maskStack.length
            ? this.maskStack[this.maskStack.length - 1]
            : null,
        i = r ? r._colorMask : 15;
      0 !== i && ((r._colorMask = 0), t.colorMask(!1, !1, !1, !1)),
        t.stencilOp(t.KEEP, t.KEEP, t.DECR),
        (e.renderable = !0),
        e.render(this.renderer),
        this.renderer.batch.flush(),
        (e.renderable = !1),
        0 !== i &&
          ((r._colorMask = i),
          t.colorMask((1 & i) != 0, (2 & i) != 0, (4 & i) != 0, (8 & i) != 0)),
        this._useCurrent();
    }
  }
  _useCurrent() {
    let e = this.renderer.gl;
    e.stencilFunc(e.EQUAL, this.getStackLength(), 4294967295),
      e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
  }
}
(i3.extension = { type: rs.RendererSystem, name: "stencil" }), ro.add(i3);
class i4 {
  constructor(e) {
    (this.renderer = e),
      (this.plugins = {}),
      Object.defineProperties(this.plugins, {
        extract: {
          enumerable: !1,
          get: () => (
            e5(
              "7.0.0",
              "renderer.plugins.extract has moved to renderer.extract"
            ),
            e.extract
          ),
        },
        prepare: {
          enumerable: !1,
          get: () => (
            e5(
              "7.0.0",
              "renderer.plugins.prepare has moved to renderer.prepare"
            ),
            e.prepare
          ),
        },
        interaction: {
          enumerable: !1,
          get: () => (
            e5(
              "7.0.0",
              "renderer.plugins.interaction has been deprecated, use renderer.events"
            ),
            e.events
          ),
        },
      });
  }
  init() {
    let e = this.rendererPlugins;
    for (let t in e) this.plugins[t] = new e[t](this.renderer);
  }
  destroy() {
    for (let e in this.plugins)
      this.plugins[e].destroy(), (this.plugins[e] = null);
  }
}
(i4.extension = {
  type: [rs.RendererSystem, rs.CanvasRendererSystem],
  name: "_plugin",
}),
  ro.add(i4);
class i5 {
  constructor(e) {
    (this.renderer = e),
      (this.destinationFrame = null),
      (this.sourceFrame = null),
      (this.defaultFrame = null),
      (this.projectionMatrix = new rG()),
      (this.transform = null);
  }
  update(e, t, r, i) {
    (this.destinationFrame = e || this.destinationFrame || this.defaultFrame),
      (this.sourceFrame = t || this.sourceFrame || e),
      this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i),
      this.transform && this.projectionMatrix.append(this.transform);
    let s = this.renderer;
    (s.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
      s.globalUniforms.update(),
      s.shader.shader &&
        s.shader.syncUniformGroup(s.shader.shader.uniforms.globals);
  }
  calculateProjection(e, t, r, i) {
    let s = this.projectionMatrix,
      n = i ? -1 : 1;
    s.identity(),
      (s.a = (1 / t.width) * 2),
      (s.d = (1 / t.height) * 2 * n),
      (s.tx = -1 - t.x * s.a),
      (s.ty = -n - t.y * s.d);
  }
  setTransform(e) {}
  destroy() {
    this.renderer = null;
  }
}
(i5.extension = { type: rs.RendererSystem, name: "projection" }), ro.add(i5);
const i6 = new rZ(),
  i8 = new rO();
class i7 {
  constructor(e) {
    (this.renderer = e), (this._tempMatrix = new rG());
  }
  generateTexture(e, t) {
    let { region: r, ...i } = t || {},
      s = r?.copyTo(i8) || e.getLocalBounds(i8, !0),
      n = i.resolution || this.renderer.resolution;
    (s.width = Math.max(s.width, 1 / n)),
      (s.height = Math.max(s.height, 1 / n)),
      (i.width = s.width),
      (i.height = s.height),
      (i.resolution = n),
      i.multisample ?? (i.multisample = this.renderer.multisample);
    let a = iD.create(i);
    (this._tempMatrix.tx = -s.x), (this._tempMatrix.ty = -s.y);
    let o = e.transform;
    return (
      (e.transform = i6),
      this.renderer.render(e, {
        renderTexture: a,
        transform: this._tempMatrix,
        skipUpdateTransform: !!e.parent,
        blit: !0,
      }),
      (e.transform = o),
      a
    );
  }
  destroy() {}
}
(i7.extension = {
  type: [rs.RendererSystem, rs.CanvasRendererSystem],
  name: "textureGenerator",
}),
  ro.add(i7);
const i9 = new rO(),
  se = new rO();
class st {
  constructor(e) {
    (this.renderer = e),
      (this.defaultMaskStack = []),
      (this.current = null),
      (this.sourceFrame = new rO()),
      (this.destinationFrame = new rO()),
      (this.viewportFrame = new rO());
  }
  contextChange() {
    let e = this.renderer?.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha);
  }
  bind(e = null, t, r) {
    let i, s, n;
    let a = this.renderer;
    (this.current = e),
      e
        ? ((n = (i = e.baseTexture).resolution),
          t ||
            ((i9.width = e.frame.width),
            (i9.height = e.frame.height),
            (t = i9)),
          r ||
            ((se.x = e.frame.x),
            (se.y = e.frame.y),
            (se.width = t.width),
            (se.height = t.height),
            (r = se)),
          (s = i.framebuffer))
        : ((n = a.resolution),
          t ||
            ((i9.width = a._view.screen.width),
            (i9.height = a._view.screen.height),
            (t = i9)),
          r || (((r = i9).width = t.width), (r.height = t.height)));
    let o = this.viewportFrame;
    (o.x = r.x * n),
      (o.y = r.y * n),
      (o.width = r.width * n),
      (o.height = r.height * n),
      e || (o.y = a.view.height - (o.y + o.height)),
      o.ceil(),
      this.renderer.framebuffer.bind(s, o),
      this.renderer.projection.update(r, t, n, !s),
      e
        ? this.renderer.mask.setMaskStack(i.maskStack)
        : this.renderer.mask.setMaskStack(this.defaultMaskStack),
      this.sourceFrame.copyFrom(t),
      this.destinationFrame.copyFrom(r);
  }
  clear(e, t) {
    let r = this.current
        ? this.current.baseTexture.clear
        : this.renderer.background.backgroundColor,
      i = tk.shared.setValue(e || r);
    ((this.current && this.current.baseTexture.alphaMode > 0) ||
      (!this.current && this._rendererPremultipliedAlpha)) &&
      i.premultiply(i.alpha);
    let s = this.destinationFrame,
      n = this.current ? this.current.baseTexture : this.renderer._view.screen,
      a = s.width !== n.width || s.height !== n.height;
    if (a) {
      let { x: e, y: t, width: r, height: i } = this.viewportFrame;
      (e = Math.round(e)),
        (t = Math.round(t)),
        (r = Math.round(r)),
        (i = Math.round(i)),
        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
        this.renderer.gl.scissor(e, t, r, i);
    }
    this.renderer.framebuffer.clear(i.red, i.green, i.blue, i.alpha, t),
      a && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
(st.extension = { type: rs.RendererSystem, name: "renderTexture" }), ro.add(st);
class sr {
  constructor(e, t) {
    (this.program = e),
      (this.uniformData = t),
      (this.uniformGroups = {}),
      (this.uniformDirtyGroups = {}),
      (this.uniformBufferBindings = {});
  }
  destroy() {
    (this.uniformData = null),
      (this.uniformGroups = null),
      (this.uniformDirtyGroups = null),
      (this.uniformBufferBindings = null),
      (this.program = null);
  }
}
function si(e, t, r, i, s) {
  r.buffer.update(s);
}
const ss = {
    float: `
        data[offset] = v;
    `,
    vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
    vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
    vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
    mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
    mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
    mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `,
  },
  sn = {
    float: 4,
    vec2: 8,
    vec3: 12,
    vec4: 16,
    int: 4,
    ivec2: 8,
    ivec3: 12,
    ivec4: 16,
    uint: 4,
    uvec2: 8,
    uvec3: 12,
    uvec4: 16,
    bool: 4,
    bvec2: 8,
    bvec3: 12,
    bvec4: 16,
    mat2: 32,
    mat3: 48,
    mat4: 64,
  };
let sa = 0;
const so = { textureCount: 0, uboCount: 0 };
class sl {
  constructor(e) {
    (this.destroyed = !1),
      (this.renderer = e),
      this.systemCheck(),
      (this.gl = null),
      (this.shader = null),
      (this.program = null),
      (this.cache = {}),
      (this._uboCache = {}),
      (this.id = sa++);
  }
  systemCheck() {
    if (
      !(function () {
        if ("boolean" == typeof i) return i;
        try {
          i =
            !0 ===
            Function(
              "param1",
              "param2",
              "param3",
              "return param1[param2] === param3;"
            )({ a: "b" }, "a", "b");
        } catch {
          i = !1;
        }
        return i;
      })()
    )
      throw Error(
        "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."
      );
  }
  contextChange(e) {
    (this.gl = e), this.reset();
  }
  bind(e, t) {
    e.disposeRunner.add(this),
      (e.uniforms.globals = this.renderer.globalUniforms);
    let r = e.program,
      i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(e);
    return (
      (this.shader = e),
      this.program !== r && ((this.program = r), this.gl.useProgram(i.program)),
      t ||
        ((so.textureCount = 0),
        (so.uboCount = 0),
        this.syncUniformGroup(e.uniformGroup, so)),
      i
    );
  }
  setUniforms(e) {
    let t = this.shader.program,
      r = t.glPrograms[this.renderer.CONTEXT_UID];
    t.syncUniforms(r.uniformData, e, this.renderer);
  }
  syncUniformGroup(e, t) {
    let r = this.getGlProgram();
    (e.static && e.dirtyId === r.uniformDirtyGroups[e.id]) ||
      ((r.uniformDirtyGroups[e.id] = e.dirtyId), this.syncUniforms(e, r, t));
  }
  syncUniforms(e, t, r) {
    (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(
      t.uniformData,
      e.uniforms,
      this.renderer,
      r
    );
  }
  createSyncGroups(e) {
    let t = this.getSignature(e, this.shader.program.uniformData, "u");
    return (
      this.cache[t] ||
        (this.cache[t] = (function (e, t) {
          let r = [
            `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `,
          ];
          for (let i in e.uniforms) {
            let s = t[i];
            if (!s) {
              e.uniforms[i]?.group === !0 &&
                (e.uniforms[i].ubo
                  ? r.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${i}, '${i}');
                    `)
                  : r.push(`
                        renderer.shader.syncUniformGroup(uv.${i}, syncData);
                    `));
              continue;
            }
            let n = e.uniforms[i],
              a = !1;
            for (let e = 0; e < r2.length; e++)
              if (r2[e].test(s, n)) {
                r.push(r2[e].code(i, n)), (a = !0);
                break;
              }
            if (!a) {
              let e = (1 !== s.size || s.isArray ? r4 : r3)[s.type].replace(
                "location",
                `ud["${i}"].location`
              );
              r.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${e};`);
            }
          }
          return Function(
            "ud",
            "uv",
            "renderer",
            "syncData",
            r.join(`
`)
          );
        })(e, this.shader.program.uniformData)),
      (e.syncUniforms[this.shader.program.id] = this.cache[t]),
      e.syncUniforms[this.shader.program.id]
    );
  }
  syncUniformBufferGroup(e, t) {
    let r = this.getGlProgram();
    if (!e.static || 0 !== e.dirtyId || !r.uniformGroups[e.id]) {
      e.dirtyId = 0;
      let i = r.uniformGroups[e.id] || this.createSyncBufferGroup(e, r, t);
      e.buffer.update(),
        i(r.uniformData, e.uniforms, this.renderer, so, e.buffer);
    }
    this.renderer.buffer.bindBufferBase(e.buffer, r.uniformBufferBindings[t]);
  }
  createSyncBufferGroup(e, t, r) {
    let { gl: i } = this.renderer;
    this.renderer.buffer.bind(e.buffer);
    let s = this.gl.getUniformBlockIndex(t.program, r);
    (t.uniformBufferBindings[r] = this.shader.uniformBindCount),
      i.uniformBlockBinding(t.program, s, this.shader.uniformBindCount),
      this.shader.uniformBindCount++;
    let n = this.getSignature(e, this.shader.program.uniformData, "ubo"),
      a = this._uboCache[n];
    if (
      (a ||
        (a = this._uboCache[n] =
          (function (e, t) {
            if (!e.autoManage) return { size: 0, syncFunc: si };
            let { uboElements: r, size: i } = (function (e) {
                let t = e.map((e) => ({
                    data: e,
                    offset: 0,
                    dataLen: 0,
                    dirty: 0,
                  })),
                  r = 0,
                  i = 0,
                  s = 0;
                for (let e = 0; e < t.length; e++) {
                  let n = t[e];
                  if (
                    ((r = sn[n.data.type]),
                    n.data.size > 1 && (r = Math.max(r, 16) * n.data.size),
                    (n.dataLen = r),
                    i % r != 0 && i < 16)
                  ) {
                    let e = (i % r) % 16;
                    (i += e), (s += e);
                  }
                  i + r > 16
                    ? ((s = 16 * Math.ceil(s / 16)),
                      (n.offset = s),
                      (s += r),
                      (i = r))
                    : ((n.offset = s), (i += r), (s += r));
                }
                return { uboElements: t, size: (s = 16 * Math.ceil(s / 16)) };
              })(
                (function (e, t) {
                  let r = [];
                  for (let i in e) t[i] && r.push(t[i]);
                  return r.sort((e, t) => e.index - t.index), r;
                })(e.uniforms, t)
              ),
              s = [
                `
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `,
              ];
            for (let t = 0; t < r.length; t++) {
              let i = r[t],
                n = e.uniforms[i.data.name],
                a = i.data.name,
                o = !1;
              for (let e = 0; e < r2.length; e++) {
                let t = r2[e];
                if (t.codeUbo && t.test(i.data, n)) {
                  s.push(
                    `offset = ${i.offset / 4};`,
                    r2[e].codeUbo(i.data.name, n)
                  ),
                    (o = !0);
                  break;
                }
              }
              if (!o) {
                if (i.data.size > 1) {
                  let e = r7[i.data.type],
                    t = Math.max(sn[i.data.type] / 16, 1),
                    r = e / t,
                    n = (4 - (r % 4)) % 4;
                  s.push(`
                cv = ud.${a}.value;
                v = uv.${a};
                offset = ${i.offset / 4};

                t = 0;

                for(var i=0; i < ${i.data.size * t}; i++)
                {
                    for(var j = 0; j < ${r}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${n};
                }

                `);
                } else {
                  let e = ss[i.data.type];
                  s.push(`
                cv = ud.${a}.value;
                v = uv.${a};
                offset = ${i.offset / 4};
                ${e};
                `);
                }
              }
            }
            return (
              s.push(`
       renderer.buffer.update(buffer);
    `),
              {
                size: i,
                syncFunc: Function(
                  "ud",
                  "uv",
                  "renderer",
                  "syncData",
                  "buffer",
                  s.join(`
`)
                ),
              }
            );
          })(e, this.shader.program.uniformData)),
      e.autoManage)
    ) {
      let t = new Float32Array(a.size / 4);
      e.buffer.update(t);
    }
    return (t.uniformGroups[e.id] = a.syncFunc), t.uniformGroups[e.id];
  }
  getSignature(e, t, r) {
    let i = e.uniforms,
      s = [`${r}-`];
    for (let e in i) s.push(e), t[e] && s.push(t[e].type);
    return s.join("-");
  }
  getGlProgram() {
    return this.shader
      ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
      : null;
  }
  generateProgram(e) {
    let t = this.gl,
      r = e.program,
      i = (function (e, t) {
        let r = rJ(e, e.VERTEX_SHADER, t.vertexSrc),
          i = rJ(e, e.FRAGMENT_SHADER, t.fragmentSrc),
          s = e.createProgram();
        e.attachShader(s, r), e.attachShader(s, i);
        let n = t.extra?.transformFeedbackVaryings;
        if (
          (n &&
            ("function" != typeof e.transformFeedbackVaryings
              ? console.warn(
                  "TransformFeedback is not supported but TransformFeedbackVaryings are given."
                )
              : e.transformFeedbackVaryings(
                  s,
                  n.names,
                  "separate" === n.bufferMode
                    ? e.SEPARATE_ATTRIBS
                    : e.INTERLEAVED_ATTRIBS
                )),
          e.linkProgram(s),
          e.getProgramParameter(s, e.LINK_STATUS) ||
            e.getProgramParameter(s, e.LINK_STATUS) ||
            (e.getShaderParameter(r, e.COMPILE_STATUS) || r8(e, r),
            e.getShaderParameter(i, e.COMPILE_STATUS) || r8(e, i),
            console.error("PixiJS Error: Could not initialize shader."),
            "" !== e.getProgramInfoLog(s) &&
              console.warn(
                "PixiJS Warning: gl.getProgramInfoLog()",
                e.getProgramInfoLog(s)
              )),
          (t.attributeData = (function (e, t) {
            let r = {},
              i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
            for (let s = 0; s < i; s++) {
              let i = t.getActiveAttrib(e, s);
              if (i.name.startsWith("gl_")) continue;
              let n = it(t, i.type),
                a = {
                  type: n,
                  name: i.name,
                  size: r7[n],
                  location: t.getAttribLocation(e, i.name),
                };
              r[i.name] = a;
            }
            return r;
          })(s, e)),
          (t.uniformData = (function (e, t) {
            let r = {},
              i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
            for (let s = 0; s < i; s++) {
              let i = t.getActiveUniform(e, s),
                n = i.name.replace(/\[.*?\]$/, ""),
                a = !!i.name.match(/\[.*?\]$/),
                o = it(t, i.type);
              r[n] = {
                name: n,
                index: s,
                type: o,
                size: i.size,
                isArray: a,
                value: r1(o, i.size),
              };
            }
            return r;
          })(s, e)),
          !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc))
        ) {
          let r = Object.keys(t.attributeData);
          r.sort((e, t) => (e > t ? 1 : -1));
          for (let i = 0; i < r.length; i++)
            (t.attributeData[r[i]].location = i),
              e.bindAttribLocation(s, i, r[i]);
          e.linkProgram(s);
        }
        e.deleteShader(r), e.deleteShader(i);
        let a = {};
        for (let r in t.uniformData) {
          let i = t.uniformData[r];
          a[r] = {
            location: e.getUniformLocation(s, r),
            value: r1(i.type, i.size),
          };
        }
        return new sr(s, a);
      })(t, r);
    return (r.glPrograms[this.renderer.CONTEXT_UID] = i), i;
  }
  reset() {
    (this.program = null), (this.shader = null);
  }
  disposeShader(e) {
    this.shader === e && (this.shader = null);
  }
  destroy() {
    (this.renderer = null), (this.destroyed = !0);
  }
}
(sl.extension = { type: rs.RendererSystem, name: "shader" }), ro.add(sl);
class sh {
  constructor(e) {
    this.renderer = e;
  }
  run(e) {
    let { renderer: t } = this;
    t.runners.init.emit(t.options),
      e.hello &&
        console.log(`PixiJS 7.3.3 - ${t.rendererLogId} - https://pixijs.com`),
      t.resize(t.screen.width, t.screen.height);
  }
  destroy() {}
}
(sh.defaultOptions = { hello: !1 }),
  (sh.extension = {
    type: [rs.RendererSystem, rs.CanvasRendererSystem],
    name: "startup",
  }),
  ro.add(sh);
const su = class e {
  constructor() {
    (this.gl = null),
      (this.stateId = 0),
      (this.polygonOffset = 0),
      (this.blendMode = Y.NONE),
      (this._blendEq = !1),
      (this.map = []),
      (this.map[0] = this.setBlend),
      (this.map[1] = this.setOffset),
      (this.map[2] = this.setCullFace),
      (this.map[3] = this.setDepthTest),
      (this.map[4] = this.setFrontFace),
      (this.map[5] = this.setDepthMask),
      (this.checks = []),
      (this.defaultState = new ru()),
      (this.defaultState.blend = !0);
  }
  contextChange(e) {
    (this.gl = e),
      (this.blendModes = (function (e, t = []) {
        return (
          (t[Y.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.ADD] = [e.ONE, e.ONE]),
          (t[Y.MULTIPLY] = [
            e.DST_COLOR,
            e.ONE_MINUS_SRC_ALPHA,
            e.ONE,
            e.ONE_MINUS_SRC_ALPHA,
          ]),
          (t[Y.SCREEN] = [
            e.ONE,
            e.ONE_MINUS_SRC_COLOR,
            e.ONE,
            e.ONE_MINUS_SRC_ALPHA,
          ]),
          (t[Y.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.NONE] = [0, 0]),
          (t[Y.NORMAL_NPM] = [
            e.SRC_ALPHA,
            e.ONE_MINUS_SRC_ALPHA,
            e.ONE,
            e.ONE_MINUS_SRC_ALPHA,
          ]),
          (t[Y.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE]),
          (t[Y.SCREEN_NPM] = [
            e.SRC_ALPHA,
            e.ONE_MINUS_SRC_COLOR,
            e.ONE,
            e.ONE_MINUS_SRC_ALPHA,
          ]),
          (t[Y.SRC_IN] = [e.DST_ALPHA, e.ZERO]),
          (t[Y.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO]),
          (t[Y.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE]),
          (t[Y.DST_IN] = [e.ZERO, e.SRC_ALPHA]),
          (t[Y.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA]),
          (t[Y.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
          (t[Y.SUBTRACT] = [
            e.ONE,
            e.ONE,
            e.ONE,
            e.ONE,
            e.FUNC_REVERSE_SUBTRACT,
            e.FUNC_ADD,
          ]),
          t
        );
      })(e)),
      this.set(this.defaultState),
      this.reset();
  }
  set(e) {
    if (((e = e || this.defaultState), this.stateId !== e.data)) {
      let t = this.stateId ^ e.data,
        r = 0;
      for (; t; )
        1 & t && this.map[r].call(this, !!(e.data & (1 << r))), (t >>= 1), r++;
      this.stateId = e.data;
    }
    for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
  }
  forceState(e) {
    e = e || this.defaultState;
    for (let t = 0; t < this.map.length; t++)
      this.map[t].call(this, !!(e.data & (1 << t)));
    for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
    this.stateId = e.data;
  }
  setBlend(t) {
    this.updateCheck(e.checkBlendMode, t),
      this.gl[t ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(t) {
    this.updateCheck(e.checkPolygonOffset, t),
      this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  setDepthTest(e) {
    this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  setDepthMask(e) {
    this.gl.depthMask(e);
  }
  setCullFace(e) {
    this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  setFrontFace(e) {
    this.gl.frontFace(this.gl[e ? "CW" : "CCW"]);
  }
  setBlendMode(e) {
    if (e === this.blendMode) return;
    this.blendMode = e;
    let t = this.blendModes[e],
      r = this.gl;
    2 === t.length
      ? r.blendFunc(t[0], t[1])
      : r.blendFuncSeparate(t[0], t[1], t[2], t[3]),
      6 === t.length
        ? ((this._blendEq = !0), r.blendEquationSeparate(t[4], t[5]))
        : this._blendEq &&
          ((this._blendEq = !1),
          r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
  }
  setPolygonOffset(e, t) {
    this.gl.polygonOffset(e, t);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
      this.forceState(this.defaultState),
      (this._blendEq = !0),
      (this.blendMode = -1),
      this.setBlendMode(0);
  }
  updateCheck(e, t) {
    let r = this.checks.indexOf(e);
    t && -1 === r
      ? this.checks.push(e)
      : t || -1 === r || this.checks.splice(r, 1);
  }
  static checkBlendMode(e, t) {
    e.setBlendMode(t.blendMode);
  }
  static checkPolygonOffset(e, t) {
    e.setPolygonOffset(1, t.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
(su.extension = { type: rs.RendererSystem, name: "state" }), ro.add(su);
class sd extends U(ek) {
  constructor() {
    super(...arguments), (this.runners = {}), (this._systemsHash = {});
  }
  setup(e) {
    this.addRunners(...e.runners);
    let t = (e.priority ?? []).filter((t) => e.systems[t]);
    for (let r of [
      ...t,
      ...Object.keys(e.systems).filter((e) => !t.includes(e)),
    ])
      this.addSystem(e.systems[r], r);
  }
  addRunners(...e) {
    e.forEach((e) => {
      this.runners[e] = new rp(e);
    });
  }
  addSystem(e, t) {
    let r = new e(this);
    if (this[t]) throw Error(`Whoops! The name "${t}" is already in use`);
    for (let e in ((this[t] = r), (this._systemsHash[t] = r), this.runners))
      this.runners[e].add(r);
    return this;
  }
  emitWithCustomOptions(e, t) {
    let r = Object.keys(this._systemsHash);
    e.items.forEach((i) => {
      let s = r.find((e) => this._systemsHash[e] === i);
      i[e.name](t[s]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((e) => {
      e.destroy();
    }),
      (this._systemsHash = {});
  }
}
const sc = class e {
  constructor(t) {
    (this.renderer = t),
      (this.count = 0),
      (this.checkCount = 0),
      (this.maxIdle = e.defaultMaxIdle),
      (this.checkCountMax = e.defaultCheckCountMax),
      (this.mode = e.defaultMode);
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen &&
      (this.count++,
      this.mode !== en.MANUAL &&
        (this.checkCount++,
        this.checkCount > this.checkCountMax &&
          ((this.checkCount = 0), this.run())));
  }
  run() {
    let e = this.renderer.texture,
      t = e.managedTextures,
      r = !1;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      s.resource &&
        this.count - s.touched > this.maxIdle &&
        (e.destroyTexture(s, !0), (t[i] = null), (r = !0));
    }
    if (r) {
      let e = 0;
      for (let r = 0; r < t.length; r++) null !== t[r] && (t[e++] = t[r]);
      t.length = e;
    }
  }
  unload(e) {
    let t = this.renderer.texture,
      r = e._texture;
    r && !r.framebuffer && t.destroyTexture(r);
    for (let t = e.children.length - 1; t >= 0; t--) this.unload(e.children[t]);
  }
  destroy() {
    this.renderer = null;
  }
};
(sc.defaultMode = en.AUTO),
  (sc.defaultMaxIdle = 3600),
  (sc.defaultCheckCountMax = 600),
  (sc.extension = { type: rs.RendererSystem, name: "textureGC" }),
  ro.add(sc);
class sp {
  constructor(e) {
    (this.texture = e),
      (this.width = -1),
      (this.height = -1),
      (this.dirtyId = -1),
      (this.dirtyStyleId = -1),
      (this.mipmap = !1),
      (this.wrapMode = 33071),
      (this.type = Q.UNSIGNED_BYTE),
      (this.internalFormat = Z.RGBA),
      (this.samplerType = 0);
  }
}
class sf {
  constructor(e) {
    (this.renderer = e),
      (this.boundTextures = []),
      (this.currentLocation = -1),
      (this.managedTextures = []),
      (this._unknownBoundTextures = !1),
      (this.unknownTexture = new r_()),
      (this.hasIntegerTextures = !1);
  }
  contextChange() {
    let e = (this.gl = this.renderer.gl);
    (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
      (this.webGLVersion = this.renderer.context.webGLVersion),
      (this.internalFormats =
        "WebGL2RenderingContext" in globalThis &&
        e instanceof globalThis.WebGL2RenderingContext
          ? {
              [Q.UNSIGNED_BYTE]: {
                [Z.RGBA]: e.RGBA8,
                [Z.RGB]: e.RGB8,
                [Z.RG]: e.RG8,
                [Z.RED]: e.R8,
                [Z.RGBA_INTEGER]: e.RGBA8UI,
                [Z.RGB_INTEGER]: e.RGB8UI,
                [Z.RG_INTEGER]: e.RG8UI,
                [Z.RED_INTEGER]: e.R8UI,
                [Z.ALPHA]: e.ALPHA,
                [Z.LUMINANCE]: e.LUMINANCE,
                [Z.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA,
              },
              [Q.BYTE]: {
                [Z.RGBA]: e.RGBA8_SNORM,
                [Z.RGB]: e.RGB8_SNORM,
                [Z.RG]: e.RG8_SNORM,
                [Z.RED]: e.R8_SNORM,
                [Z.RGBA_INTEGER]: e.RGBA8I,
                [Z.RGB_INTEGER]: e.RGB8I,
                [Z.RG_INTEGER]: e.RG8I,
                [Z.RED_INTEGER]: e.R8I,
              },
              [Q.UNSIGNED_SHORT]: {
                [Z.RGBA_INTEGER]: e.RGBA16UI,
                [Z.RGB_INTEGER]: e.RGB16UI,
                [Z.RG_INTEGER]: e.RG16UI,
                [Z.RED_INTEGER]: e.R16UI,
                [Z.DEPTH_COMPONENT]: e.DEPTH_COMPONENT16,
              },
              [Q.SHORT]: {
                [Z.RGBA_INTEGER]: e.RGBA16I,
                [Z.RGB_INTEGER]: e.RGB16I,
                [Z.RG_INTEGER]: e.RG16I,
                [Z.RED_INTEGER]: e.R16I,
              },
              [Q.UNSIGNED_INT]: {
                [Z.RGBA_INTEGER]: e.RGBA32UI,
                [Z.RGB_INTEGER]: e.RGB32UI,
                [Z.RG_INTEGER]: e.RG32UI,
                [Z.RED_INTEGER]: e.R32UI,
                [Z.DEPTH_COMPONENT]: e.DEPTH_COMPONENT24,
              },
              [Q.INT]: {
                [Z.RGBA_INTEGER]: e.RGBA32I,
                [Z.RGB_INTEGER]: e.RGB32I,
                [Z.RG_INTEGER]: e.RG32I,
                [Z.RED_INTEGER]: e.R32I,
              },
              [Q.FLOAT]: {
                [Z.RGBA]: e.RGBA32F,
                [Z.RGB]: e.RGB32F,
                [Z.RG]: e.RG32F,
                [Z.RED]: e.R32F,
                [Z.DEPTH_COMPONENT]: e.DEPTH_COMPONENT32F,
              },
              [Q.HALF_FLOAT]: {
                [Z.RGBA]: e.RGBA16F,
                [Z.RGB]: e.RGB16F,
                [Z.RG]: e.RG16F,
                [Z.RED]: e.R16F,
              },
              [Q.UNSIGNED_SHORT_5_6_5]: { [Z.RGB]: e.RGB565 },
              [Q.UNSIGNED_SHORT_4_4_4_4]: { [Z.RGBA]: e.RGBA4 },
              [Q.UNSIGNED_SHORT_5_5_5_1]: { [Z.RGBA]: e.RGB5_A1 },
              [Q.UNSIGNED_INT_2_10_10_10_REV]: {
                [Z.RGBA]: e.RGB10_A2,
                [Z.RGBA_INTEGER]: e.RGB10_A2UI,
              },
              [Q.UNSIGNED_INT_10F_11F_11F_REV]: { [Z.RGB]: e.R11F_G11F_B10F },
              [Q.UNSIGNED_INT_5_9_9_9_REV]: { [Z.RGB]: e.RGB9_E5 },
              [Q.UNSIGNED_INT_24_8]: { [Z.DEPTH_STENCIL]: e.DEPTH24_STENCIL8 },
              [Q.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
                [Z.DEPTH_STENCIL]: e.DEPTH32F_STENCIL8,
              },
            }
          : {
              [Q.UNSIGNED_BYTE]: {
                [Z.RGBA]: e.RGBA,
                [Z.RGB]: e.RGB,
                [Z.ALPHA]: e.ALPHA,
                [Z.LUMINANCE]: e.LUMINANCE,
                [Z.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA,
              },
              [Q.UNSIGNED_SHORT_5_6_5]: { [Z.RGB]: e.RGB },
              [Q.UNSIGNED_SHORT_4_4_4_4]: { [Z.RGBA]: e.RGBA },
              [Q.UNSIGNED_SHORT_5_5_5_1]: { [Z.RGBA]: e.RGBA },
            }),
      (this.samplerTypes =
        "WebGL2RenderingContext" in globalThis &&
        e instanceof globalThis.WebGL2RenderingContext
          ? {
              [e.RGB]: J.FLOAT,
              [e.RGBA]: J.FLOAT,
              [e.ALPHA]: J.FLOAT,
              [e.LUMINANCE]: J.FLOAT,
              [e.LUMINANCE_ALPHA]: J.FLOAT,
              [e.R8]: J.FLOAT,
              [e.R8_SNORM]: J.FLOAT,
              [e.RG8]: J.FLOAT,
              [e.RG8_SNORM]: J.FLOAT,
              [e.RGB8]: J.FLOAT,
              [e.RGB8_SNORM]: J.FLOAT,
              [e.RGB565]: J.FLOAT,
              [e.RGBA4]: J.FLOAT,
              [e.RGB5_A1]: J.FLOAT,
              [e.RGBA8]: J.FLOAT,
              [e.RGBA8_SNORM]: J.FLOAT,
              [e.RGB10_A2]: J.FLOAT,
              [e.RGB10_A2UI]: J.FLOAT,
              [e.SRGB8]: J.FLOAT,
              [e.SRGB8_ALPHA8]: J.FLOAT,
              [e.R16F]: J.FLOAT,
              [e.RG16F]: J.FLOAT,
              [e.RGB16F]: J.FLOAT,
              [e.RGBA16F]: J.FLOAT,
              [e.R32F]: J.FLOAT,
              [e.RG32F]: J.FLOAT,
              [e.RGB32F]: J.FLOAT,
              [e.RGBA32F]: J.FLOAT,
              [e.R11F_G11F_B10F]: J.FLOAT,
              [e.RGB9_E5]: J.FLOAT,
              [e.R8I]: J.INT,
              [e.R8UI]: J.UINT,
              [e.R16I]: J.INT,
              [e.R16UI]: J.UINT,
              [e.R32I]: J.INT,
              [e.R32UI]: J.UINT,
              [e.RG8I]: J.INT,
              [e.RG8UI]: J.UINT,
              [e.RG16I]: J.INT,
              [e.RG16UI]: J.UINT,
              [e.RG32I]: J.INT,
              [e.RG32UI]: J.UINT,
              [e.RGB8I]: J.INT,
              [e.RGB8UI]: J.UINT,
              [e.RGB16I]: J.INT,
              [e.RGB16UI]: J.UINT,
              [e.RGB32I]: J.INT,
              [e.RGB32UI]: J.UINT,
              [e.RGBA8I]: J.INT,
              [e.RGBA8UI]: J.UINT,
              [e.RGBA16I]: J.INT,
              [e.RGBA16UI]: J.UINT,
              [e.RGBA32I]: J.INT,
              [e.RGBA32UI]: J.UINT,
              [e.DEPTH_COMPONENT16]: J.FLOAT,
              [e.DEPTH_COMPONENT24]: J.FLOAT,
              [e.DEPTH_COMPONENT32F]: J.FLOAT,
              [e.DEPTH_STENCIL]: J.FLOAT,
              [e.DEPTH24_STENCIL8]: J.FLOAT,
              [e.DEPTH32F_STENCIL8]: J.FLOAT,
            }
          : {
              [e.RGB]: J.FLOAT,
              [e.RGBA]: J.FLOAT,
              [e.ALPHA]: J.FLOAT,
              [e.LUMINANCE]: J.FLOAT,
              [e.LUMINANCE_ALPHA]: J.FLOAT,
              [e.DEPTH_STENCIL]: J.FLOAT,
            });
    let t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = t;
    for (let e = 0; e < t; e++) this.boundTextures[e] = null;
    this.emptyTextures = {};
    let r = new sp(e.createTexture());
    e.bindTexture(e.TEXTURE_2D, r.texture),
      e.texImage2D(
        e.TEXTURE_2D,
        0,
        e.RGBA,
        1,
        1,
        0,
        e.RGBA,
        e.UNSIGNED_BYTE,
        new Uint8Array(4)
      ),
      (this.emptyTextures[e.TEXTURE_2D] = r),
      (this.emptyTextures[e.TEXTURE_CUBE_MAP] = new sp(e.createTexture())),
      e.bindTexture(
        e.TEXTURE_CUBE_MAP,
        this.emptyTextures[e.TEXTURE_CUBE_MAP].texture
      );
    for (let t = 0; t < 6; t++)
      e.texImage2D(
        e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
        0,
        e.RGBA,
        1,
        1,
        0,
        e.RGBA,
        e.UNSIGNED_BYTE,
        null
      );
    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR),
      e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
    for (let e = 0; e < this.boundTextures.length; e++) this.bind(null, e);
  }
  bind(e, t = 0) {
    let { gl: r } = this;
    if (((e = e?.castToBaseTexture()), e?.valid && !e.parentTextureArray)) {
      e.touched = this.renderer.textureGC.count;
      let i = e._glTextures[this.CONTEXT_UID] || this.initTexture(e);
      this.boundTextures[t] !== e &&
        (this.currentLocation !== t &&
          ((this.currentLocation = t), r.activeTexture(r.TEXTURE0 + t)),
        r.bindTexture(e.target, i.texture)),
        i.dirtyId !== e.dirtyId
          ? (this.currentLocation !== t &&
              ((this.currentLocation = t), r.activeTexture(r.TEXTURE0 + t)),
            this.updateTexture(e))
          : i.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(e),
        (this.boundTextures[t] = e);
    } else
      this.currentLocation !== t &&
        ((this.currentLocation = t), r.activeTexture(r.TEXTURE0 + t)),
        r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture),
        (this.boundTextures[t] = null);
  }
  reset() {
    (this._unknownBoundTextures = !0),
      (this.hasIntegerTextures = !1),
      (this.currentLocation = -1);
    for (let e = 0; e < this.boundTextures.length; e++)
      this.boundTextures[e] = this.unknownTexture;
  }
  unbind(e) {
    let { gl: t, boundTextures: r } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = !1;
      for (let e = 0; e < r.length; e++)
        r[e] === this.unknownTexture && this.bind(null, e);
    }
    for (let i = 0; i < r.length; i++)
      r[i] === e &&
        (this.currentLocation !== i &&
          (t.activeTexture(t.TEXTURE0 + i), (this.currentLocation = i)),
        t.bindTexture(e.target, this.emptyTextures[e.target].texture),
        (r[i] = null));
  }
  ensureSamplerType(e) {
    let { boundTextures: t, hasIntegerTextures: r, CONTEXT_UID: i } = this;
    if (r)
      for (let r = e - 1; r >= 0; --r) {
        let e = t[r];
        e &&
          e._glTextures[i].samplerType !== J.FLOAT &&
          this.renderer.texture.unbind(e);
      }
  }
  initTexture(e) {
    let t = new sp(this.gl.createTexture());
    return (
      (t.dirtyId = -1),
      (e._glTextures[this.CONTEXT_UID] = t),
      this.managedTextures.push(e),
      e.on("dispose", this.destroyTexture, this),
      t
    );
  }
  initTextureType(e, t) {
    (t.internalFormat = this.internalFormats[e.type]?.[e.format] ?? e.format),
      (t.samplerType = this.samplerTypes[t.internalFormat] ?? J.FLOAT),
      2 === this.webGLVersion && e.type === Q.HALF_FLOAT
        ? (t.type = this.gl.HALF_FLOAT)
        : (t.type = e.type);
  }
  updateTexture(e) {
    let t = e._glTextures[this.CONTEXT_UID];
    if (!t) return;
    let r = this.renderer;
    if ((this.initTextureType(e, t), e.resource?.upload(r, e, t)))
      t.samplerType !== J.FLOAT && (this.hasIntegerTextures = !0);
    else {
      let i = e.realWidth,
        s = e.realHeight,
        n = r.gl;
      (t.width !== i || t.height !== s || t.dirtyId < 0) &&
        ((t.width = i),
        (t.height = s),
        n.texImage2D(
          e.target,
          0,
          t.internalFormat,
          i,
          s,
          0,
          e.format,
          t.type,
          null
        ));
    }
    e.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(e),
      (t.dirtyId = e.dirtyId);
  }
  destroyTexture(e, t) {
    let { gl: r } = this;
    if (
      (e = e.castToBaseTexture())._glTextures[this.CONTEXT_UID] &&
      (this.unbind(e),
      r.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),
      e.off("dispose", this.destroyTexture, this),
      delete e._glTextures[this.CONTEXT_UID],
      !t)
    ) {
      let t = this.managedTextures.indexOf(e);
      -1 !== t && tq(this.managedTextures, t, 1);
    }
  }
  updateTextureStyle(e) {
    let t = e._glTextures[this.CONTEXT_UID];
    t &&
      ((e.mipmap !== er.POW2 && 2 === this.webGLVersion) || e.isPowerOfTwo
        ? (t.mipmap = e.mipmap >= 1)
        : (t.mipmap = !1),
      2 === this.webGLVersion || e.isPowerOfTwo
        ? (t.wrapMode = e.wrapMode)
        : (t.wrapMode = et.CLAMP),
      e.resource?.style(this.renderer, e, t) || this.setStyle(e, t),
      (t.dirtyStyleId = e.dirtyStyleId));
  }
  setStyle(e, t) {
    let r = this.gl;
    if (
      (t.mipmap && e.mipmap !== er.ON_MANUAL && r.generateMipmap(e.target),
      r.texParameteri(e.target, r.TEXTURE_WRAP_S, t.wrapMode),
      r.texParameteri(e.target, r.TEXTURE_WRAP_T, t.wrapMode),
      t.mipmap)
    ) {
      r.texParameteri(
        e.target,
        r.TEXTURE_MIN_FILTER,
        e.scaleMode === ee.LINEAR
          ? r.LINEAR_MIPMAP_LINEAR
          : r.NEAREST_MIPMAP_NEAREST
      );
      let t = this.renderer.context.extensions.anisotropicFiltering;
      if (t && e.anisotropicLevel > 0 && e.scaleMode === ee.LINEAR) {
        let i = Math.min(
          e.anisotropicLevel,
          r.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        );
        r.texParameterf(e.target, t.TEXTURE_MAX_ANISOTROPY_EXT, i);
      }
    } else
      r.texParameteri(
        e.target,
        r.TEXTURE_MIN_FILTER,
        e.scaleMode === ee.LINEAR ? r.LINEAR : r.NEAREST
      );
    r.texParameteri(
      e.target,
      r.TEXTURE_MAG_FILTER,
      e.scaleMode === ee.LINEAR ? r.LINEAR : r.NEAREST
    );
  }
  destroy() {
    this.renderer = null;
  }
}
(sf.extension = { type: rs.RendererSystem, name: "texture" }), ro.add(sf);
class sm {
  constructor(e) {
    this.renderer = e;
  }
  contextChange() {
    (this.gl = this.renderer.gl),
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
  }
  bind(e) {
    let { gl: t, CONTEXT_UID: r } = this,
      i = e._glTransformFeedbacks[r] || this.createGLTransformFeedback(e);
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, i);
  }
  unbind() {
    let { gl: e } = this;
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(e, t) {
    let { gl: r, renderer: i } = this;
    t && i.shader.bind(t), r.beginTransformFeedback(e);
  }
  endTransformFeedback() {
    let { gl: e } = this;
    e.endTransformFeedback();
  }
  createGLTransformFeedback(e) {
    let { gl: t, renderer: r, CONTEXT_UID: i } = this,
      s = t.createTransformFeedback();
    (e._glTransformFeedbacks[i] = s),
      t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, s);
    for (let s = 0; s < e.buffers.length; s++) {
      let n = e.buffers[s];
      n &&
        (r.buffer.update(n),
        n._glBuffers[i].refCount++,
        t.bindBufferBase(
          t.TRANSFORM_FEEDBACK_BUFFER,
          s,
          n._glBuffers[i].buffer || null
        ));
    }
    return (
      t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null),
      e.disposeRunner.add(this),
      s
    );
  }
  disposeTransformFeedback(e, t) {
    let r = e._glTransformFeedbacks[this.CONTEXT_UID],
      i = this.gl;
    e.disposeRunner.remove(this);
    let s = this.renderer.buffer;
    if (s)
      for (let r = 0; r < e.buffers.length; r++) {
        let i = e.buffers[r];
        if (!i) continue;
        let n = i._glBuffers[this.CONTEXT_UID];
        n && (n.refCount--, 0 !== n.refCount || t || s.dispose(i, t));
      }
    r &&
      (t || i.deleteTransformFeedback(r),
      delete e._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
(sm.extension = { type: rs.RendererSystem, name: "transformFeedback" }),
  ro.add(sm);
class sg {
  constructor(e) {
    this.renderer = e;
  }
  init(e) {
    (this.screen = new rO(0, 0, e.width, e.height)),
      (this.element = e.view || ed.ADAPTER.createCanvas()),
      (this.resolution = e.resolution || ed.RESOLUTION),
      (this.autoDensity = !!e.autoDensity);
  }
  resizeView(e, t) {
    (this.element.width = Math.round(e * this.resolution)),
      (this.element.height = Math.round(t * this.resolution));
    let r = this.element.width / this.resolution,
      i = this.element.height / this.resolution;
    (this.screen.width = r),
      (this.screen.height = i),
      this.autoDensity &&
        ((this.element.style.width = `${r}px`),
        (this.element.style.height = `${i}px`)),
      this.renderer.emit("resize", r, i),
      this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(e) {
    e && this.element.parentNode?.removeChild(this.element),
      (this.renderer = null),
      (this.element = null),
      (this.screen = null);
  }
}
(sg.defaultOptions = {
  width: 800,
  height: 600,
  resolution: void 0,
  autoDensity: !1,
}),
  (sg.extension = {
    type: [rs.RendererSystem, rs.CanvasRendererSystem],
    name: "_view",
  }),
  ro.add(sg),
  (ed.PREFER_ENV = X.WEBGL2),
  (ed.STRICT_TEXTURE_CACHE = !1),
  (ed.RENDER_OPTIONS = {
    ...iA.defaultOptions,
    ...ib.defaultOptions,
    ...sg.defaultOptions,
    ...sh.defaultOptions,
  }),
  Object.defineProperties(ed, {
    WRAP_MODE: {
      get: () => r_.defaultOptions.wrapMode,
      set(e) {
        e5(
          "7.1.0",
          "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"
        ),
          (r_.defaultOptions.wrapMode = e);
      },
    },
    SCALE_MODE: {
      get: () => r_.defaultOptions.scaleMode,
      set(e) {
        e5(
          "7.1.0",
          "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"
        ),
          (r_.defaultOptions.scaleMode = e);
      },
    },
    MIPMAP_TEXTURES: {
      get: () => r_.defaultOptions.mipmap,
      set(e) {
        e5(
          "7.1.0",
          "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"
        ),
          (r_.defaultOptions.mipmap = e);
      },
    },
    ANISOTROPIC_LEVEL: {
      get: () => r_.defaultOptions.anisotropicLevel,
      set(e) {
        e5(
          "7.1.0",
          "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"
        ),
          (r_.defaultOptions.anisotropicLevel = e);
      },
    },
    FILTER_RESOLUTION: {
      get: () => (
        e5(
          "7.1.0",
          "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"
        ),
        iv.defaultResolution
      ),
      set(e) {
        iv.defaultResolution = e;
      },
    },
    FILTER_MULTISAMPLE: {
      get: () => (
        e5(
          "7.1.0",
          "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"
        ),
        iv.defaultMultisample
      ),
      set(e) {
        iv.defaultMultisample = e;
      },
    },
    SPRITE_MAX_TEXTURES: {
      get: () => ig.defaultMaxTextures,
      set(e) {
        e5(
          "7.1.0",
          "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"
        ),
          (ig.defaultMaxTextures = e);
      },
    },
    SPRITE_BATCH_SIZE: {
      get: () => ig.defaultBatchSize,
      set(e) {
        e5(
          "7.1.0",
          "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"
        ),
          (ig.defaultBatchSize = e);
      },
    },
    CAN_UPLOAD_SAME_BUFFER: {
      get: () => ig.canUploadSameBuffer,
      set(e) {
        e5(
          "7.1.0",
          "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"
        ),
          (ig.canUploadSameBuffer = e);
      },
    },
    GC_MODE: {
      get: () => sc.defaultMode,
      set(e) {
        e5(
          "7.1.0",
          "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"
        ),
          (sc.defaultMode = e);
      },
    },
    GC_MAX_IDLE: {
      get: () => sc.defaultMaxIdle,
      set(e) {
        e5(
          "7.1.0",
          "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"
        ),
          (sc.defaultMaxIdle = e);
      },
    },
    GC_MAX_CHECK_COUNT: {
      get: () => sc.defaultCheckCountMax,
      set(e) {
        e5(
          "7.1.0",
          "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"
        ),
          (sc.defaultCheckCountMax = e);
      },
    },
    PRECISION_VERTEX: {
      get: () => ia.defaultVertexPrecision,
      set(e) {
        e5(
          "7.1.0",
          "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"
        ),
          (ia.defaultVertexPrecision = e);
      },
    },
    PRECISION_FRAGMENT: {
      get: () => ia.defaultFragmentPrecision,
      set(e) {
        e5(
          "7.1.0",
          "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"
        ),
          (ia.defaultFragmentPrecision = e);
      },
    },
  });
var sy =
  (((k = sy || {})[(k.INTERACTION = 50)] = "INTERACTION"),
  (k[(k.HIGH = 25)] = "HIGH"),
  (k[(k.NORMAL = 0)] = "NORMAL"),
  (k[(k.LOW = -25)] = "LOW"),
  (k[(k.UTILITY = -50)] = "UTILITY"),
  k);
class s_ {
  constructor(e, t = null, r = 0, i = !1) {
    (this.next = null),
      (this.previous = null),
      (this._destroyed = !1),
      (this.fn = e),
      (this.context = t),
      (this.priority = r),
      (this.once = i);
  }
  match(e, t = null) {
    return this.fn === e && this.context === t;
  }
  emit(e) {
    this.fn && (this.context ? this.fn.call(this.context, e) : this.fn(e));
    let t = this.next;
    return (
      this.once && this.destroy(!0), this._destroyed && (this.next = null), t
    );
  }
  connect(e) {
    (this.previous = e),
      e.next && (e.next.previous = this),
      (this.next = e.next),
      (e.next = this);
  }
  destroy(e = !1) {
    (this._destroyed = !0),
      (this.fn = null),
      (this.context = null),
      this.previous && (this.previous.next = this.next),
      this.next && (this.next.previous = this.previous);
    let t = this.next;
    return (this.next = e ? null : t), (this.previous = null), t;
  }
}
const sx = class e {
  constructor() {
    (this.autoStart = !1),
      (this.deltaTime = 1),
      (this.lastTime = -1),
      (this.speed = 1),
      (this.started = !1),
      (this._requestId = null),
      (this._maxElapsedMS = 100),
      (this._minElapsedMS = 0),
      (this._protected = !1),
      (this._lastFrame = -1),
      (this._head = new s_(null, null, 1 / 0)),
      (this.deltaMS = 1 / e.targetFPMS),
      (this.elapsedMS = 1 / e.targetFPMS),
      (this._tick = (e) => {
        (this._requestId = null),
          this.started &&
            (this.update(e),
            this.started &&
              null === this._requestId &&
              this._head.next &&
              (this._requestId = requestAnimationFrame(this._tick)));
      });
  }
  _requestIfNeeded() {
    null === this._requestId &&
      this._head.next &&
      ((this.lastTime = performance.now()),
      (this._lastFrame = this.lastTime),
      (this._requestId = requestAnimationFrame(this._tick)));
  }
  _cancelIfNeeded() {
    null !== this._requestId &&
      (cancelAnimationFrame(this._requestId), (this._requestId = null));
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(e, t, r = sy.NORMAL) {
    return this._addListener(new s_(e, t, r));
  }
  addOnce(e, t, r = sy.NORMAL) {
    return this._addListener(new s_(e, t, r, !0));
  }
  _addListener(e) {
    let t = this._head.next,
      r = this._head;
    if (t) {
      for (; t; ) {
        if (e.priority > t.priority) {
          e.connect(r);
          break;
        }
        (r = t), (t = t.next);
      }
      e.previous || e.connect(r);
    } else e.connect(r);
    return this._startIfPossible(), this;
  }
  remove(e, t) {
    let r = this._head.next;
    for (; r; ) r = r.match(e, t) ? r.destroy() : r.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head) return 0;
    let e = 0,
      t = this._head;
    for (; (t = t.next); ) e++;
    return e;
  }
  start() {
    this.started || ((this.started = !0), this._requestIfNeeded());
  }
  stop() {
    this.started && ((this.started = !1), this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let e = this._head.next;
      for (; e; ) e = e.destroy(!0);
      this._head.destroy(), (this._head = null);
    }
  }
  update(t = performance.now()) {
    let r;
    if (t > this.lastTime) {
      if (
        ((r = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS &&
          (r = this._maxElapsedMS),
        (r *= this.speed),
        this._minElapsedMS)
      ) {
        let e = (t - this._lastFrame) | 0;
        if (e < this._minElapsedMS) return;
        this._lastFrame = t - (e % this._minElapsedMS);
      }
      (this.deltaMS = r), (this.deltaTime = this.deltaMS * e.targetFPMS);
      let i = this._head,
        s = i.next;
      for (; s; ) s = s.emit(this.deltaTime);
      i.next || this._cancelIfNeeded();
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = t;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(t) {
    let r = Math.min(Math.max(0, Math.min(this.maxFPS, t)) / 1e3, e.targetFPMS);
    this._maxElapsedMS = 1 / r;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(e) {
    if (0 === e) this._minElapsedMS = 0;
    else {
      let t = Math.max(this.minFPS, e);
      this._minElapsedMS = 1 / (t / 1e3);
    }
  }
  static get shared() {
    if (!e._shared) {
      let t = (e._shared = new e());
      (t.autoStart = !0), (t._protected = !0);
    }
    return e._shared;
  }
  static get system() {
    if (!e._system) {
      let t = (e._system = new e());
      (t.autoStart = !0), (t._protected = !0);
    }
    return e._system;
  }
};
(sx.targetFPMS = 0.06),
  Object.defineProperties(ed, {
    TARGET_FPMS: {
      get: () => sx.targetFPMS,
      set(e) {
        e5(
          "7.1.0",
          "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"
        ),
          (sx.targetFPMS = e);
      },
    },
  });
class sv {
  static init(e) {
    (e = Object.assign({ autoStart: !0, sharedTicker: !1 }, e)),
      Object.defineProperty(this, "ticker", {
        set(e) {
          this._ticker && this._ticker.remove(this.render, this),
            (this._ticker = e),
            e && e.add(this.render, this, sy.LOW);
        },
        get() {
          return this._ticker;
        },
      }),
      (this.stop = () => {
        this._ticker.stop();
      }),
      (this.start = () => {
        this._ticker.start();
      }),
      (this._ticker = null),
      (this.ticker = e.sharedTicker ? sx.shared : new sx()),
      e.autoStart && this.start();
  }
  static destroy() {
    if (this._ticker) {
      let e = this._ticker;
      (this.ticker = null), e.destroy();
    }
  }
}
(sv.extension = rs.Application), ro.add(sv);
const sb = [];
ro.handleByList(rs.Renderer, sb);
var sE = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
  sT = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
class sA {
  constructor(e) {
    this.renderer = e;
  }
  contextChange(e) {
    let t;
    if (1 === this.renderer.context.webGLVersion) {
      let r = e.getParameter(e.FRAMEBUFFER_BINDING);
      e.bindFramebuffer(e.FRAMEBUFFER, null),
        (t = e.getParameter(e.SAMPLES)),
        e.bindFramebuffer(e.FRAMEBUFFER, r);
    } else {
      let r = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);
      e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
        (t = e.getParameter(e.SAMPLES)),
        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, r);
    }
    t >= eh.HIGH
      ? (this.multisample = eh.HIGH)
      : t >= eh.MEDIUM
      ? (this.multisample = eh.MEDIUM)
      : t >= eh.LOW
      ? (this.multisample = eh.LOW)
      : (this.multisample = eh.NONE);
  }
  destroy() {}
}
(sA.extension = { type: rs.RendererSystem, name: "_multisample" }), ro.add(sA);
class sw {
  constructor(e) {
    (this.buffer = e || null),
      (this.updateID = -1),
      (this.byteLength = -1),
      (this.refCount = 0);
  }
}
class sS {
  constructor(e) {
    (this.renderer = e),
      (this.managedBuffers = {}),
      (this.boundBufferBases = {});
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(!0),
      (this.gl = this.renderer.gl),
      (this.CONTEXT_UID = this.renderer.CONTEXT_UID);
  }
  bind(e) {
    let { gl: t, CONTEXT_UID: r } = this,
      i = e._glBuffers[r] || this.createGLBuffer(e);
    t.bindBuffer(e.type, i.buffer);
  }
  unbind(e) {
    let { gl: t } = this;
    t.bindBuffer(e, null);
  }
  bindBufferBase(e, t) {
    let { gl: r, CONTEXT_UID: i } = this;
    if (this.boundBufferBases[t] !== e) {
      let s = e._glBuffers[i] || this.createGLBuffer(e);
      (this.boundBufferBases[t] = e),
        r.bindBufferBase(r.UNIFORM_BUFFER, t, s.buffer);
    }
  }
  bindBufferRange(e, t, r) {
    let { gl: i, CONTEXT_UID: s } = this;
    r = r || 0;
    let n = e._glBuffers[s] || this.createGLBuffer(e);
    i.bindBufferRange(i.UNIFORM_BUFFER, t || 0, n.buffer, 256 * r, 256);
  }
  update(e) {
    let { gl: t, CONTEXT_UID: r } = this,
      i = e._glBuffers[r] || this.createGLBuffer(e);
    if (e._updateID !== i.updateID) {
      if (
        ((i.updateID = e._updateID),
        t.bindBuffer(e.type, i.buffer),
        i.byteLength >= e.data.byteLength)
      )
        t.bufferSubData(e.type, 0, e.data);
      else {
        let r = e.static ? t.STATIC_DRAW : t.DYNAMIC_DRAW;
        (i.byteLength = e.data.byteLength), t.bufferData(e.type, e.data, r);
      }
    }
  }
  dispose(e, t) {
    if (!this.managedBuffers[e.id]) return;
    delete this.managedBuffers[e.id];
    let r = e._glBuffers[this.CONTEXT_UID],
      i = this.gl;
    e.disposeRunner.remove(this),
      r &&
        (t || i.deleteBuffer(r.buffer), delete e._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(e) {
    let t = Object.keys(this.managedBuffers);
    for (let r = 0; r < t.length; r++)
      this.dispose(this.managedBuffers[t[r]], e);
  }
  createGLBuffer(e) {
    let { CONTEXT_UID: t, gl: r } = this;
    return (
      (e._glBuffers[t] = new sw(r.createBuffer())),
      (this.managedBuffers[e.id] = e),
      e.disposeRunner.add(this),
      e._glBuffers[t]
    );
  }
}
(sS.extension = { type: rs.RendererSystem, name: "buffer" }), ro.add(sS);
class sR {
  constructor(e) {
    this.renderer = e;
  }
  render(e, t) {
    let r, i, s, n;
    let a = this.renderer;
    if (
      (t &&
        ((r = t.renderTexture),
        (i = t.clear),
        (s = t.transform),
        (n = t.skipUpdateTransform)),
      (this.renderingToScreen = !r),
      a.runners.prerender.emit(),
      a.emit("prerender"),
      (a.projection.transform = s),
      !a.context.isLost)
    ) {
      if ((r || (this.lastObjectRendered = e), !n)) {
        let t = e.enableTempParent();
        e.updateTransform(), e.disableTempParent(t);
      }
      a.renderTexture.bind(r),
        a.batch.currentRenderer.start(),
        (i ?? a.background.clearBeforeRender) && a.renderTexture.clear(),
        e.render(a),
        a.batch.currentRenderer.flush(),
        r && (t.blit && a.framebuffer.blit(), r.baseTexture.update()),
        a.runners.postrender.emit(),
        (a.projection.transform = null),
        a.emit("postrender");
    }
  }
  destroy() {
    (this.renderer = null), (this.lastObjectRendered = null);
  }
}
(sR.extension = { type: rs.RendererSystem, name: "objectRenderer" }),
  ro.add(sR);
const sI = class e extends sd {
  constructor(t) {
    super(),
      (this.type = V.WEBGL),
      (t = Object.assign({}, ed.RENDER_OPTIONS, t)),
      (this.gl = null),
      (this.CONTEXT_UID = 0),
      (this.globalUniforms = new il({ projectionMatrix: new rG() }, !0));
    let r = {
      runners: [
        "init",
        "destroy",
        "contextChange",
        "resolutionChange",
        "reset",
        "update",
        "postrender",
        "prerender",
        "resize",
      ],
      systems: e.__systems,
      priority: [
        "_view",
        "textureGenerator",
        "background",
        "_plugin",
        "startup",
        "context",
        "state",
        "texture",
        "buffer",
        "geometry",
        "framebuffer",
        "transformFeedback",
        "mask",
        "scissor",
        "stencil",
        "projection",
        "textureGC",
        "filter",
        "renderTexture",
        "batch",
        "objectRenderer",
        "_multisample",
      ],
    };
    this.setup(r),
      "useContextAlpha" in t &&
        (e5(
          "7.0.0",
          "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"
        ),
        (t.premultipliedAlpha =
          t.useContextAlpha && "notMultiplied" !== t.useContextAlpha),
        (t.backgroundAlpha = !1 === t.useContextAlpha ? 1 : t.backgroundAlpha)),
      (this._plugin.rendererPlugins = e.__plugins),
      (this.options = t),
      this.startup.run(this.options);
  }
  static test(e) {
    return !e?.forceCanvas && ti();
  }
  render(e, t) {
    this.objectRenderer.render(e, t);
  }
  resize(e, t) {
    this._view.resizeView(e, t);
  }
  reset() {
    return this.runners.reset.emit(), this;
  }
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  destroy(e = !1) {
    this.runners.destroy.items.reverse(),
      this.emitWithCustomOptions(this.runners.destroy, { _view: e }),
      super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(e) {
    (this._view.resolution = e), this.runners.resolutionChange.emit(e);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    return (
      e5(
        "7.0.0",
        "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."
      ),
      this.background.clearBeforeRender
    );
  }
  get useContextAlpha() {
    return (
      e5(
        "7.0.0",
        "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."
      ),
      this.context.useContextAlpha
    );
  }
  get preserveDrawingBuffer() {
    return (
      e5(
        "7.0.0",
        "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"
      ),
      this.context.preserveDrawingBuffer
    );
  }
  get backgroundColor() {
    return (
      e5(
        "7.0.0",
        "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
      ),
      this.background.color
    );
  }
  set backgroundColor(e) {
    e5(
      "7.0.0",
      "renderer.backgroundColor has been deprecated, use renderer.background.color instead."
    ),
      (this.background.color = e);
  }
  get backgroundAlpha() {
    return (
      e5(
        "7.0.0",
        "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
      ),
      this.background.alpha
    );
  }
  set backgroundAlpha(e) {
    e5(
      "7.0.0",
      "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."
    ),
      (this.background.alpha = e);
  }
  get powerPreference() {
    return (
      e5(
        "7.0.0",
        "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"
      ),
      this.context.powerPreference
    );
  }
  generateTexture(e, t) {
    return this.textureGenerator.generateTexture(e, t);
  }
};
(sI.extension = { type: rs.Renderer, priority: 1 }),
  (sI.__plugins = {}),
  (sI.__systems = {}),
  ro.handleByMap(rs.RendererPlugin, sI.__plugins),
  ro.handleByMap(rs.RendererSystem, sI.__systems),
  ro.add(sI);
class sC extends rf {
  constructor(e, t) {
    let { width: r, height: i } = t || {};
    super(r, i), (this.items = []), (this.itemDirtyIds = []);
    for (let t = 0; t < e; t++) {
      let e = new r_();
      this.items.push(e), this.itemDirtyIds.push(-2);
    }
    (this.length = e), (this._load = null), (this.baseTexture = null);
  }
  initFromArray(e, t) {
    for (let r = 0; r < this.length; r++)
      e[r] &&
        (e[r].castToBaseTexture
          ? this.addBaseTextureAt(e[r].castToBaseTexture(), r)
          : e[r] instanceof rf
          ? this.addResourceAt(e[r], r)
          : this.addResourceAt(rc(e[r], t), r));
  }
  dispose() {
    for (let e = 0, t = this.length; e < t; e++) this.items[e].destroy();
    (this.items = null), (this.itemDirtyIds = null), (this._load = null);
  }
  addResourceAt(e, t) {
    if (!this.items[t]) throw Error(`Index ${t} is out of bounds`);
    return (
      e.valid && !this.valid && this.resize(e.width, e.height),
      this.items[t].setResource(e),
      this
    );
  }
  bind(e) {
    if (null !== this.baseTexture)
      throw Error("Only one base texture per TextureArray is allowed");
    super.bind(e);
    for (let t = 0; t < this.length; t++)
      (this.items[t].parentTextureArray = e),
        this.items[t].on("update", e.update, e);
  }
  unbind(e) {
    super.unbind(e);
    for (let t = 0; t < this.length; t++)
      (this.items[t].parentTextureArray = null),
        this.items[t].off("update", e.update, e);
  }
  load() {
    if (this._load) return this._load;
    let e = this.items
      .map((e) => e.resource)
      .filter((e) => e)
      .map((e) => e.load());
    return (
      (this._load = Promise.all(e).then(() => {
        let { realWidth: e, realHeight: t } = this.items[0];
        return this.resize(e, t), this.update(), Promise.resolve(this);
      })),
      this._load
    );
  }
}
const sP = class e extends sC {
  constructor(t, r) {
    let { width: i, height: s, autoLoad: n, linkBaseTexture: a } = r || {};
    if (t && t.length !== e.SIDES)
      throw Error(`Invalid length. Got ${t.length}, expected 6`);
    super(6, { width: i, height: s });
    for (let t = 0; t < e.SIDES; t++)
      this.items[t].target = K.TEXTURE_CUBE_MAP_POSITIVE_X + t;
    (this.linkBaseTexture = !1 !== a),
      t && this.initFromArray(t, r),
      !1 !== n && this.load();
  }
  bind(e) {
    super.bind(e), (e.target = K.TEXTURE_CUBE_MAP);
  }
  addBaseTextureAt(e, t, r) {
    if ((void 0 === r && (r = this.linkBaseTexture), !this.items[t]))
      throw Error(`Index ${t} is out of bounds`);
    if (
      !this.linkBaseTexture ||
      e.parentTextureArray ||
      Object.keys(e._glTextures).length > 0
    ) {
      if (e.resource) this.addResourceAt(e.resource, t);
      else
        throw Error("CubeResource does not support copying of renderTexture.");
    } else
      (e.target = K.TEXTURE_CUBE_MAP_POSITIVE_X + t),
        (e.parentTextureArray = this.baseTexture),
        (this.items[t] = e);
    return (
      e.valid && !this.valid && this.resize(e.realWidth, e.realHeight),
      (this.items[t] = e),
      this
    );
  }
  upload(t, r, i) {
    let s = this.itemDirtyIds;
    for (let n = 0; n < e.SIDES; n++) {
      let e = this.items[n];
      (s[n] < e.dirtyId || i.dirtyId < r.dirtyId) &&
        (e.valid && e.resource
          ? (e.resource.upload(t, e, i), (s[n] = e.dirtyId))
          : s[n] < -1 &&
            (t.gl.texImage2D(
              e.target,
              0,
              i.internalFormat,
              r.realWidth,
              r.realHeight,
              0,
              r.format,
              i.type,
              null
            ),
            (s[n] = -1)));
    }
    return !0;
  }
  static test(t) {
    return Array.isArray(t) && t.length === e.SIDES;
  }
};
sP.SIDES = 6;
class sk extends iR {
  constructor(e, t) {
    let r, i, s;
    (t = t || {}),
      "string" == typeof e
        ? ((r = sk.EMPTY), (i = e), (s = !0))
        : ((r = e), (i = null), (s = !1)),
      super(r),
      (this.url = i),
      (this.crossOrigin = t.crossOrigin ?? !0),
      (this.alphaMode = "number" == typeof t.alphaMode ? t.alphaMode : null),
      (this.ownsImageBitmap = t.ownsImageBitmap ?? s),
      (this._load = null),
      !1 !== t.autoLoad && this.load();
  }
  load() {
    return (
      this._load ||
        (this._load = new Promise(async (e, t) => {
          if (null === this.url) {
            e(this);
            return;
          }
          try {
            let t = await ed.ADAPTER.fetch(this.url, {
              mode: this.crossOrigin ? "cors" : "no-cors",
            });
            if (this.destroyed) return;
            let r = await t.blob();
            if (this.destroyed) return;
            let i = await createImageBitmap(r, {
              premultiplyAlpha:
                null === this.alphaMode || this.alphaMode === ei.UNPACK
                  ? "premultiply"
                  : "none",
            });
            if (this.destroyed) {
              i.close();
              return;
            }
            (this.source = i), this.update(), e(this);
          } catch (e) {
            if (this.destroyed) return;
            t(e), this.onError.emit(e);
          }
        })),
      this._load
    );
  }
  upload(e, t, r) {
    return this.source instanceof ImageBitmap
      ? ("number" == typeof this.alphaMode && (t.alphaMode = this.alphaMode),
        super.upload(e, t, r))
      : (this.load(), !1);
  }
  dispose() {
    this.ownsImageBitmap &&
      this.source instanceof ImageBitmap &&
      this.source.close(),
      super.dispose(),
      (this._load = null);
  }
  static test(e) {
    return (
      !!globalThis.createImageBitmap &&
      "u" > typeof ImageBitmap &&
      ("string" == typeof e || e instanceof ImageBitmap)
    );
  }
  static get EMPTY() {
    return (sk._EMPTY = sk._EMPTY ?? ed.ADAPTER.createCanvas(0, 0)), sk._EMPTY;
  }
}
const sM = class e extends iR {
  constructor(e, t) {
    (t = t || {}),
      super(ed.ADAPTER.createCanvas()),
      (this._width = 0),
      (this._height = 0),
      (this.svg = e),
      (this.scale = t.scale || 1),
      (this._overrideWidth = t.width),
      (this._overrideHeight = t.height),
      (this._resolve = null),
      (this._crossorigin = t.crossorigin),
      (this._load = null),
      !1 !== t.autoLoad && this.load();
  }
  load() {
    return (
      this._load ||
        (this._load = new Promise((t) => {
          if (
            ((this._resolve = () => {
              this.update(), t(this);
            }),
            e.SVG_XML.test(this.svg.trim()))
          ) {
            if (!btoa)
              throw Error("Your browser doesn't support base64 conversions.");
            this.svg = `data:image/svg+xml;base64,${btoa(
              unescape(encodeURIComponent(this.svg))
            )}`;
          }
          this._loadSvg();
        })),
      this._load
    );
  }
  _loadSvg() {
    let e = new Image();
    iR.crossOrigin(e, this.svg, this._crossorigin),
      (e.src = this.svg),
      (e.onerror = (t) => {
        this._resolve && ((e.onerror = null), this.onError.emit(t));
      }),
      (e.onload = () => {
        if (!this._resolve) return;
        let t = e.width,
          r = e.height;
        if (!t || !r)
          throw Error(
            "The SVG image must have width and height defined (in pixels), canvas API needs them."
          );
        let i = t * this.scale,
          s = r * this.scale;
        (this._overrideWidth || this._overrideHeight) &&
          ((i = this._overrideWidth || (this._overrideHeight / r) * t),
          (s = this._overrideHeight || (this._overrideWidth / t) * r)),
          (i = Math.round(i)),
          (s = Math.round(s));
        let n = this.source;
        (n.width = i),
          (n.height = s),
          (n._pixiId = `canvas_${tQ()}`),
          n.getContext("2d").drawImage(e, 0, 0, t, r, 0, 0, i, s),
          this._resolve(),
          (this._resolve = null);
      });
  }
  static getSize(t) {
    let r = e.SVG_SIZE.exec(t),
      i = {};
    return (
      r &&
        ((i[r[1]] = Math.round(parseFloat(r[3]))),
        (i[r[5]] = Math.round(parseFloat(r[7])))),
      i
    );
  }
  dispose() {
    super.dispose(), (this._resolve = null), (this._crossorigin = null);
  }
  static test(t, r) {
    return (
      "svg" === r ||
      ("string" == typeof t && t.startsWith("data:image/svg+xml")) ||
      ("string" == typeof t && e.SVG_XML.test(t))
    );
  }
};
(sM.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m),
  (sM.SVG_SIZE =
    /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i);
const sD = class e extends iR {
  constructor(t, r) {
    if (((r = r || {}), !(t instanceof HTMLVideoElement))) {
      let i = document.createElement("video");
      !1 !== r.autoLoad && i.setAttribute("preload", "auto"),
        !1 !== r.playsinline &&
          (i.setAttribute("webkit-playsinline", ""),
          i.setAttribute("playsinline", "")),
        !0 === r.muted && (i.setAttribute("muted", ""), (i.muted = !0)),
        !0 === r.loop && i.setAttribute("loop", ""),
        !1 !== r.autoPlay && i.setAttribute("autoplay", ""),
        "string" == typeof t && (t = [t]);
      let s = t[0].src || t[0];
      iR.crossOrigin(i, s, r.crossorigin);
      for (let r = 0; r < t.length; ++r) {
        let s = document.createElement("source"),
          { src: n, mime: a } = t[r];
        if ((n = n || t[r]).startsWith("data:")) a = n.slice(5, n.indexOf(";"));
        else if (!n.startsWith("blob:")) {
          let t = n.split("?").shift().toLowerCase(),
            r = t.slice(t.lastIndexOf(".") + 1);
          a = a || e.MIME_TYPES[r] || `video/${r}`;
        }
        (s.src = n), a && (s.type = a), i.appendChild(s);
      }
      t = i;
    }
    super(t),
      (this.noSubImage = !0),
      (this._autoUpdate = !0),
      (this._isConnectedToTicker = !1),
      (this._updateFPS = r.updateFPS || 0),
      (this._msToNextUpdate = 0),
      (this.autoPlay = !1 !== r.autoPlay),
      (this._videoFrameRequestCallback =
        this._videoFrameRequestCallback.bind(this)),
      (this._videoFrameRequestCallbackHandle = null),
      (this._load = null),
      (this._resolve = null),
      (this._reject = null),
      (this._onCanPlay = this._onCanPlay.bind(this)),
      (this._onError = this._onError.bind(this)),
      (this._onPlayStart = this._onPlayStart.bind(this)),
      (this._onPlayStop = this._onPlayStop.bind(this)),
      (this._onSeeked = this._onSeeked.bind(this)),
      !1 !== r.autoLoad && this.load();
  }
  update(e = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        let e = sx.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - e);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) &&
        (super.update(),
        (this._msToNextUpdate = this._updateFPS
          ? Math.floor(1e3 / this._updateFPS)
          : 0));
    }
  }
  _videoFrameRequestCallback() {
    this.update(),
      this.destroyed
        ? (this._videoFrameRequestCallbackHandle = null)
        : (this._videoFrameRequestCallbackHandle =
            this.source.requestVideoFrameCallback(
              this._videoFrameRequestCallback
            ));
  }
  load() {
    if (this._load) return this._load;
    let e = this.source;
    return (
      (e.readyState === e.HAVE_ENOUGH_DATA ||
        e.readyState === e.HAVE_FUTURE_DATA) &&
        e.width &&
        e.height &&
        (e.complete = !0),
      e.addEventListener("play", this._onPlayStart),
      e.addEventListener("pause", this._onPlayStop),
      e.addEventListener("seeked", this._onSeeked),
      this._isSourceReady()
        ? this._onCanPlay()
        : (e.addEventListener("canplay", this._onCanPlay),
          e.addEventListener("canplaythrough", this._onCanPlay),
          e.addEventListener("error", this._onError, !0)),
      (this._load = new Promise((t, r) => {
        this.valid
          ? t(this)
          : ((this._resolve = t), (this._reject = r), e.load());
      })),
      this._load
    );
  }
  _onError(e) {
    this.source.removeEventListener("error", this._onError, !0),
      this.onError.emit(e),
      this._reject &&
        (this._reject(e), (this._reject = null), (this._resolve = null));
  }
  _isSourcePlaying() {
    let e = this.source;
    return !e.paused && !e.ended;
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    this.valid || this._onCanPlay(), this._configureAutoUpdate();
  }
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  _onSeeked() {
    this._autoUpdate &&
      !this._isSourcePlaying() &&
      ((this._msToNextUpdate = 0), this.update(), (this._msToNextUpdate = 0));
  }
  _onCanPlay() {
    let e = this.source;
    e.removeEventListener("canplay", this._onCanPlay),
      e.removeEventListener("canplaythrough", this._onCanPlay);
    let t = this.valid;
    (this._msToNextUpdate = 0),
      this.update(),
      (this._msToNextUpdate = 0),
      !t &&
        this._resolve &&
        (this._resolve(this), (this._resolve = null), (this._reject = null)),
      this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play();
  }
  dispose() {
    this._configureAutoUpdate();
    let e = this.source;
    e &&
      (e.removeEventListener("play", this._onPlayStart),
      e.removeEventListener("pause", this._onPlayStop),
      e.removeEventListener("seeked", this._onSeeked),
      e.removeEventListener("canplay", this._onCanPlay),
      e.removeEventListener("canplaythrough", this._onCanPlay),
      e.removeEventListener("error", this._onError, !0),
      e.pause(),
      (e.src = ""),
      e.load()),
      super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(e) {
    e !== this._autoUpdate &&
      ((this._autoUpdate = e), this._configureAutoUpdate());
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(e) {
    e !== this._updateFPS &&
      ((this._updateFPS = e), this._configureAutoUpdate());
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying()
      ? !this._updateFPS && this.source.requestVideoFrameCallback
        ? (this._isConnectedToTicker &&
            (sx.shared.remove(this.update, this),
            (this._isConnectedToTicker = !1),
            (this._msToNextUpdate = 0)),
          null === this._videoFrameRequestCallbackHandle &&
            (this._videoFrameRequestCallbackHandle =
              this.source.requestVideoFrameCallback(
                this._videoFrameRequestCallback
              )))
        : (null !== this._videoFrameRequestCallbackHandle &&
            (this.source.cancelVideoFrameCallback(
              this._videoFrameRequestCallbackHandle
            ),
            (this._videoFrameRequestCallbackHandle = null)),
          this._isConnectedToTicker ||
            (sx.shared.add(this.update, this),
            (this._isConnectedToTicker = !0),
            (this._msToNextUpdate = 0)))
      : (null !== this._videoFrameRequestCallbackHandle &&
          (this.source.cancelVideoFrameCallback(
            this._videoFrameRequestCallbackHandle
          ),
          (this._videoFrameRequestCallbackHandle = null)),
        this._isConnectedToTicker &&
          (sx.shared.remove(this.update, this),
          (this._isConnectedToTicker = !1),
          (this._msToNextUpdate = 0)));
  }
  static test(t, r) {
    return (
      (globalThis.HTMLVideoElement && t instanceof HTMLVideoElement) ||
      e.TYPES.includes(r)
    );
  }
};
(sD.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"]),
  (sD.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4",
  }),
  rd.push(
    sk,
    iI,
    class extends iR {
      constructor(e) {
        super(e);
      }
      static test(e) {
        let { OffscreenCanvas: t } = globalThis;
        return (
          (!!t && e instanceof t) ||
          (globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement)
        );
      }
    },
    sD,
    sM,
    rm,
    sP,
    class extends sC {
      constructor(e, t) {
        let r, i;
        let { width: s, height: n } = t || {};
        Array.isArray(e) ? ((r = e), (i = e.length)) : (i = e),
          super(i, { width: s, height: n }),
          r && this.initFromArray(r, t);
      }
      addBaseTextureAt(e, t) {
        if (e.resource) this.addResourceAt(e.resource, t);
        else throw Error("ArrayResource does not support RenderTexture");
        return this;
      }
      bind(e) {
        super.bind(e), (e.target = K.TEXTURE_2D_ARRAY);
      }
      upload(e, t, r) {
        let { length: i, itemDirtyIds: s, items: n } = this,
          { gl: a } = e;
        r.dirtyId < 0 &&
          a.texImage3D(
            a.TEXTURE_2D_ARRAY,
            0,
            r.internalFormat,
            this._width,
            this._height,
            i,
            0,
            t.format,
            r.type,
            null
          );
        for (let e = 0; e < i; e++) {
          let i = n[e];
          s[e] < i.dirtyId &&
            ((s[e] = i.dirtyId),
            i.valid &&
              a.texSubImage3D(
                a.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                e,
                i.resource.width,
                i.resource.height,
                1,
                t.format,
                r.type,
                i.resource.source
              ));
        }
        return !0;
      }
    }
  );
class sB {
  constructor() {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0),
      (this.rect = null),
      (this.updateID = -1);
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = -1 / 0),
      (this.maxY = -1 / 0);
  }
  getRectangle(e) {
    return this.minX > this.maxX || this.minY > this.maxY
      ? rO.EMPTY
      : (((e = e || new rO(0, 0, 1, 1)).x = this.minX),
        (e.y = this.minY),
        (e.width = this.maxX - this.minX),
        (e.height = this.maxY - this.minY),
        e);
  }
  addPoint(e) {
    (this.minX = Math.min(this.minX, e.x)),
      (this.maxX = Math.max(this.maxX, e.x)),
      (this.minY = Math.min(this.minY, e.y)),
      (this.maxY = Math.max(this.maxY, e.y));
  }
  addPointMatrix(e, t) {
    let { a: r, b: i, c: s, d: n, tx: a, ty: o } = e,
      l = r * t.x + s * t.y + a,
      h = i * t.x + n * t.y + o;
    (this.minX = Math.min(this.minX, l)),
      (this.maxX = Math.max(this.maxX, l)),
      (this.minY = Math.min(this.minY, h)),
      (this.maxY = Math.max(this.maxY, h));
  }
  addQuad(e) {
    let t = this.minX,
      r = this.minY,
      i = this.maxX,
      s = this.maxY,
      n = e[0],
      a = e[1];
    (t = n < t ? n : t),
      (r = a < r ? a : r),
      (i = n > i ? n : i),
      (s = a > s ? a : s),
      (n = e[2]),
      (a = e[3]),
      (t = n < t ? n : t),
      (r = a < r ? a : r),
      (i = n > i ? n : i),
      (s = a > s ? a : s),
      (n = e[4]),
      (a = e[5]),
      (t = n < t ? n : t),
      (r = a < r ? a : r),
      (i = n > i ? n : i),
      (s = a > s ? a : s),
      (n = e[6]),
      (a = e[7]),
      (t = n < t ? n : t),
      (r = a < r ? a : r),
      (i = n > i ? n : i),
      (s = a > s ? a : s),
      (this.minX = t),
      (this.minY = r),
      (this.maxX = i),
      (this.maxY = s);
  }
  addFrame(e, t, r, i, s) {
    this.addFrameMatrix(e.worldTransform, t, r, i, s);
  }
  addFrameMatrix(e, t, r, i, s) {
    let n = e.a,
      a = e.b,
      o = e.c,
      l = e.d,
      h = e.tx,
      u = e.ty,
      d = this.minX,
      c = this.minY,
      p = this.maxX,
      f = this.maxY,
      m = n * t + o * r + h,
      g = a * t + l * r + u;
    (d = m < d ? m : d),
      (c = g < c ? g : c),
      (p = m > p ? m : p),
      (f = g > f ? g : f),
      (m = n * i + o * r + h),
      (g = a * i + l * r + u),
      (d = m < d ? m : d),
      (c = g < c ? g : c),
      (p = m > p ? m : p),
      (f = g > f ? g : f),
      (m = n * t + o * s + h),
      (g = a * t + l * s + u),
      (d = m < d ? m : d),
      (c = g < c ? g : c),
      (p = m > p ? m : p),
      (f = g > f ? g : f),
      (m = n * i + o * s + h),
      (g = a * i + l * s + u),
      (d = m < d ? m : d),
      (c = g < c ? g : c),
      (p = m > p ? m : p),
      (f = g > f ? g : f),
      (this.minX = d),
      (this.minY = c),
      (this.maxX = p),
      (this.maxY = f);
  }
  addVertexData(e, t, r) {
    let i = this.minX,
      s = this.minY,
      n = this.maxX,
      a = this.maxY;
    for (let o = t; o < r; o += 2) {
      let t = e[o],
        r = e[o + 1];
      (i = t < i ? t : i),
        (s = r < s ? r : s),
        (n = t > n ? t : n),
        (a = r > a ? r : a);
    }
    (this.minX = i), (this.minY = s), (this.maxX = n), (this.maxY = a);
  }
  addVertices(e, t, r, i) {
    this.addVerticesMatrix(e.worldTransform, t, r, i);
  }
  addVerticesMatrix(e, t, r, i, s = 0, n = s) {
    let a = e.a,
      o = e.b,
      l = e.c,
      h = e.d,
      u = e.tx,
      d = e.ty,
      c = this.minX,
      p = this.minY,
      f = this.maxX,
      m = this.maxY;
    for (let e = r; e < i; e += 2) {
      let r = t[e],
        i = t[e + 1],
        g = a * r + l * i + u,
        y = h * i + o * r + d;
      (c = Math.min(c, g - s)),
        (f = Math.max(f, g + s)),
        (p = Math.min(p, y - n)),
        (m = Math.max(m, y + n));
    }
    (this.minX = c), (this.minY = p), (this.maxX = f), (this.maxY = m);
  }
  addBounds(e) {
    let t = this.minX,
      r = this.minY,
      i = this.maxX,
      s = this.maxY;
    (this.minX = e.minX < t ? e.minX : t),
      (this.minY = e.minY < r ? e.minY : r),
      (this.maxX = e.maxX > i ? e.maxX : i),
      (this.maxY = e.maxY > s ? e.maxY : s);
  }
  addBoundsMask(e, t) {
    let r = e.minX > t.minX ? e.minX : t.minX,
      i = e.minY > t.minY ? e.minY : t.minY,
      s = e.maxX < t.maxX ? e.maxX : t.maxX,
      n = e.maxY < t.maxY ? e.maxY : t.maxY;
    if (r <= s && i <= n) {
      let e = this.minX,
        t = this.minY,
        a = this.maxX,
        o = this.maxY;
      (this.minX = r < e ? r : e),
        (this.minY = i < t ? i : t),
        (this.maxX = s > a ? s : a),
        (this.maxY = n > o ? n : o);
    }
  }
  addBoundsMatrix(e, t) {
    this.addFrameMatrix(t, e.minX, e.minY, e.maxX, e.maxY);
  }
  addBoundsArea(e, t) {
    let r = e.minX > t.x ? e.minX : t.x,
      i = e.minY > t.y ? e.minY : t.y,
      s = e.maxX < t.x + t.width ? e.maxX : t.x + t.width,
      n = e.maxY < t.y + t.height ? e.maxY : t.y + t.height;
    if (r <= s && i <= n) {
      let e = this.minX,
        t = this.minY,
        a = this.maxX,
        o = this.maxY;
      (this.minX = r < e ? r : e),
        (this.minY = i < t ? i : t),
        (this.maxX = s > a ? s : a),
        (this.maxY = n > o ? n : o);
    }
  }
  pad(e = 0, t = e) {
    this.isEmpty() ||
      ((this.minX -= e), (this.maxX += e), (this.minY -= t), (this.maxY += t));
  }
  addFramePad(e, t, r, i, s, n) {
    (e -= s),
      (t -= n),
      (r += s),
      (i += n),
      (this.minX = this.minX < e ? this.minX : e),
      (this.maxX = this.maxX > r ? this.maxX : r),
      (this.minY = this.minY < t ? this.minY : t),
      (this.maxY = this.maxY > i ? this.maxY : i);
  }
}
class sO extends eP.EventEmitter {
  constructor() {
    super(),
      (this.tempDisplayObjectParent = null),
      (this.transform = new rZ()),
      (this.alpha = 1),
      (this.visible = !0),
      (this.renderable = !0),
      (this.cullable = !1),
      (this.cullArea = null),
      (this.parent = null),
      (this.worldAlpha = 1),
      (this._lastSortedIndex = 0),
      (this._zIndex = 0),
      (this.filterArea = null),
      (this.filters = null),
      (this._enabledFilters = null),
      (this._bounds = new sB()),
      (this._localBounds = null),
      (this._boundsID = 0),
      (this._boundsRect = null),
      (this._localBoundsRect = null),
      (this._mask = null),
      (this._maskRefCount = 0),
      (this._destroyed = !1),
      (this.isSprite = !1),
      (this.isMask = !1);
  }
  static mixin(e) {
    let t = Object.keys(e);
    for (let r = 0; r < t.length; ++r) {
      let i = t[r];
      Object.defineProperty(
        sO.prototype,
        i,
        Object.getOwnPropertyDescriptor(e, i)
      );
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    this.parent
      ? (this.parent._recursivePostUpdateTransform(),
        this.transform.updateTransform(this.parent.transform))
      : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  updateTransform() {
    this._boundsID++,
      this.transform.updateTransform(this.parent.transform),
      (this.worldAlpha = this.alpha * this.parent.worldAlpha);
  }
  getBounds(e, t) {
    return (
      e ||
        (this.parent
          ? (this._recursivePostUpdateTransform(), this.updateTransform())
          : ((this.parent = this._tempDisplayObjectParent),
            this.updateTransform(),
            (this.parent = null))),
      this._bounds.updateID !== this._boundsID &&
        (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
      t ||
        (this._boundsRect || (this._boundsRect = new rO()),
        (t = this._boundsRect)),
      this._bounds.getRectangle(t)
    );
  }
  getLocalBounds(e) {
    e ||
      (this._localBoundsRect || (this._localBoundsRect = new rO()),
      (e = this._localBoundsRect)),
      this._localBounds || (this._localBounds = new sB());
    let t = this.transform,
      r = this.parent;
    (this.parent = null),
      (this._tempDisplayObjectParent.worldAlpha = r?.worldAlpha ?? 1),
      (this.transform = this._tempDisplayObjectParent.transform);
    let i = this._bounds,
      s = this._boundsID;
    this._bounds = this._localBounds;
    let n = this.getBounds(!1, e);
    return (
      (this.parent = r),
      (this.transform = t),
      (this._bounds = i),
      (this._bounds.updateID += this._boundsID - s),
      n
    );
  }
  toGlobal(e, t, r = !1) {
    return (
      r ||
        (this._recursivePostUpdateTransform(),
        this.parent
          ? this.displayObjectUpdateTransform()
          : ((this.parent = this._tempDisplayObjectParent),
            this.displayObjectUpdateTransform(),
            (this.parent = null))),
      this.worldTransform.apply(e, t)
    );
  }
  toLocal(e, t, r, i) {
    return (
      t && (e = t.toGlobal(e, r, i)),
      i ||
        (this._recursivePostUpdateTransform(),
        this.parent
          ? this.displayObjectUpdateTransform()
          : ((this.parent = this._tempDisplayObjectParent),
            this.displayObjectUpdateTransform(),
            (this.parent = null))),
      this.worldTransform.applyInverse(e, r)
    );
  }
  setParent(e) {
    if (!e || !e.addChild)
      throw Error("setParent: Argument must be a Container");
    return e.addChild(this), e;
  }
  removeFromParent() {
    this.parent?.removeChild(this);
  }
  setTransform(e = 0, t = 0, r = 1, i = 1, s = 0, n = 0, a = 0, o = 0, l = 0) {
    return (
      (this.position.x = e),
      (this.position.y = t),
      (this.scale.x = r || 1),
      (this.scale.y = i || 1),
      (this.rotation = s),
      (this.skew.x = n),
      (this.skew.y = a),
      (this.pivot.x = o),
      (this.pivot.y = l),
      this
    );
  }
  destroy(e) {
    this.removeFromParent(),
      (this._destroyed = !0),
      (this.transform = null),
      (this.parent = null),
      (this._bounds = null),
      (this.mask = null),
      (this.cullArea = null),
      (this.filters = null),
      (this.filterArea = null),
      (this.hitArea = null),
      (this.eventMode = "auto"),
      (this.interactiveChildren = !1),
      this.emit("destroyed"),
      this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    return (
      null === this.tempDisplayObjectParent &&
        (this.tempDisplayObjectParent = new sF()),
      this.tempDisplayObjectParent
    );
  }
  enableTempParent() {
    let e = this.parent;
    return (this.parent = this._tempDisplayObjectParent), e;
  }
  disableTempParent(e) {
    this.parent = e;
  }
  get x() {
    return this.position.x;
  }
  set x(e) {
    this.transform.position.x = e;
  }
  get y() {
    return this.position.y;
  }
  set y(e) {
    this.transform.position.y = e;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(e) {
    this.transform.position.copyFrom(e);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(e) {
    this.transform.scale.copyFrom(e);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(e) {
    this.transform.pivot.copyFrom(e);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(e) {
    this.transform.skew.copyFrom(e);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(e) {
    this.transform.rotation = e;
  }
  get angle() {
    return this.transform.rotation * rP;
  }
  set angle(e) {
    this.transform.rotation = e * rk;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(e) {
    this._zIndex !== e &&
      ((this._zIndex = e), this.parent && (this.parent.sortDirty = !0));
  }
  get worldVisible() {
    let e = this;
    do {
      if (!e.visible) return !1;
      e = e.parent;
    } while (e);
    return !0;
  }
  get mask() {
    return this._mask;
  }
  set mask(e) {
    if (this._mask !== e) {
      if (this._mask) {
        let e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e &&
          (e._maskRefCount--,
          0 === e._maskRefCount && ((e.renderable = !0), (e.isMask = !1)));
      }
      if (((this._mask = e), this._mask)) {
        let e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        e &&
          (0 === e._maskRefCount && ((e.renderable = !1), (e.isMask = !0)),
          e._maskRefCount++);
      }
    }
  }
}
class sF extends sO {
  constructor() {
    super(...arguments), (this.sortDirty = null);
  }
}
sO.prototype.displayObjectUpdateTransform = sO.prototype.updateTransform;
const sL = new rG();
function sN(e, t) {
  return e.zIndex === t.zIndex
    ? e._lastSortedIndex - t._lastSortedIndex
    : e.zIndex - t.zIndex;
}
const sU = class e extends sO {
  constructor() {
    super(),
      (this.children = []),
      (this.sortableChildren = e.defaultSortableChildren),
      (this.sortDirty = !1);
  }
  onChildrenChange(e) {}
  addChild(...e) {
    if (e.length > 1) for (let t = 0; t < e.length; t++) this.addChild(e[t]);
    else {
      let t = e[0];
      t.parent && t.parent.removeChild(t),
        (t.parent = this),
        (this.sortDirty = !0),
        (t.transform._parentID = -1),
        this.children.push(t),
        this._boundsID++,
        this.onChildrenChange(this.children.length - 1),
        this.emit("childAdded", t, this, this.children.length - 1),
        t.emit("added", this);
    }
    return e[0];
  }
  addChildAt(e, t) {
    if (t < 0 || t > this.children.length)
      throw Error(
        `${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`
      );
    return (
      e.parent && e.parent.removeChild(e),
      (e.parent = this),
      (this.sortDirty = !0),
      (e.transform._parentID = -1),
      this.children.splice(t, 0, e),
      this._boundsID++,
      this.onChildrenChange(t),
      e.emit("added", this),
      this.emit("childAdded", e, this, t),
      e
    );
  }
  swapChildren(e, t) {
    if (e === t) return;
    let r = this.getChildIndex(e),
      i = this.getChildIndex(t);
    (this.children[r] = t),
      (this.children[i] = e),
      this.onChildrenChange(r < i ? r : i);
  }
  getChildIndex(e) {
    let t = this.children.indexOf(e);
    if (-1 === t)
      throw Error("The supplied DisplayObject must be a child of the caller");
    return t;
  }
  setChildIndex(e, t) {
    if (t < 0 || t >= this.children.length)
      throw Error(
        `The index ${t} supplied is out of bounds ${this.children.length}`
      );
    let r = this.getChildIndex(e);
    eP.removeItems(this.children, r, 1),
      this.children.splice(t, 0, e),
      this.onChildrenChange(t);
  }
  getChildAt(e) {
    if (e < 0 || e >= this.children.length)
      throw Error(`getChildAt: Index (${e}) does not exist.`);
    return this.children[e];
  }
  removeChild(...e) {
    if (e.length > 1) for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
    else {
      let t = e[0],
        r = this.children.indexOf(t);
      if (-1 === r) return null;
      (t.parent = null),
        (t.transform._parentID = -1),
        eP.removeItems(this.children, r, 1),
        this._boundsID++,
        this.onChildrenChange(r),
        t.emit("removed", this),
        this.emit("childRemoved", t, this, r);
    }
    return e[0];
  }
  removeChildAt(e) {
    let t = this.getChildAt(e);
    return (
      (t.parent = null),
      (t.transform._parentID = -1),
      eP.removeItems(this.children, e, 1),
      this._boundsID++,
      this.onChildrenChange(e),
      t.emit("removed", this),
      this.emit("childRemoved", t, this, e),
      t
    );
  }
  removeChildren(e = 0, t = this.children.length) {
    let r;
    let i = t - e;
    if (i > 0 && i <= t) {
      r = this.children.splice(e, i);
      for (let e = 0; e < r.length; ++e)
        (r[e].parent = null), r[e].transform && (r[e].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(e);
      for (let e = 0; e < r.length; ++e)
        r[e].emit("removed", this), this.emit("childRemoved", r[e], this, e);
      return r;
    }
    if (0 === i && 0 === this.children.length) return [];
    throw RangeError(
      "removeChildren: numeric values are outside the acceptable range."
    );
  }
  sortChildren() {
    let e = !1;
    for (let t = 0, r = this.children.length; t < r; ++t) {
      let r = this.children[t];
      (r._lastSortedIndex = t), e || 0 === r.zIndex || (e = !0);
    }
    e && this.children.length > 1 && this.children.sort(sN),
      (this.sortDirty = !1);
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(),
      this._boundsID++,
      this.transform.updateTransform(this.parent.transform),
      (this.worldAlpha = this.alpha * this.parent.worldAlpha);
    for (let e = 0, t = this.children.length; e < t; ++e) {
      let t = this.children[e];
      t.visible && t.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let e = 0; e < this.children.length; e++) {
      let t = this.children[e];
      if (!(!t.visible || !t.renderable)) {
        if ((t.calculateBounds(), t._mask)) {
          let e = t._mask.isMaskData ? t._mask.maskObject : t._mask;
          e
            ? (e.calculateBounds(),
              this._bounds.addBoundsMask(t._bounds, e._bounds))
            : this._bounds.addBounds(t._bounds);
        } else
          t.filterArea
            ? this._bounds.addBoundsArea(t._bounds, t.filterArea)
            : this._bounds.addBounds(t._bounds);
      }
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(e, t = !1) {
    let r = super.getLocalBounds(e);
    if (!t)
      for (let e = 0, t = this.children.length; e < t; ++e) {
        let t = this.children[e];
        t.visible && t.updateTransform();
      }
    return r;
  }
  _calculateBounds() {}
  _renderWithCulling(t) {
    let r, i;
    let s = t.renderTexture.sourceFrame;
    if (!(s.width > 0 && s.height > 0)) return;
    this.cullArea
      ? ((r = this.cullArea), (i = this.worldTransform))
      : this._render !== e.prototype._render && (r = this.getBounds(!0));
    let n = t.projection.transform;
    if (
      (n && (i ? (i = sL.copyFrom(i)).prepend(n) : (i = n)),
      r && s.intersects(r, i))
    )
      this._render(t);
    else if (this.cullArea) return;
    for (let e = 0, r = this.children.length; e < r; ++e) {
      let r = this.children[e],
        i = r.cullable;
      (r.cullable = i || !this.cullArea), r.render(t), (r.cullable = i);
    }
  }
  render(e) {
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
      if (this._mask || this.filters?.length) this.renderAdvanced(e);
      else if (this.cullable) this._renderWithCulling(e);
      else {
        this._render(e);
        for (let t = 0, r = this.children.length; t < r; ++t)
          this.children[t].render(e);
      }
    }
  }
  renderAdvanced(e) {
    let t = this.filters,
      r = this._mask;
    if (t) {
      this._enabledFilters || (this._enabledFilters = []),
        (this._enabledFilters.length = 0);
      for (let e = 0; e < t.length; e++)
        t[e].enabled && this._enabledFilters.push(t[e]);
    }
    let i =
      (t && this._enabledFilters?.length) ||
      (r &&
        (!r.isMaskData || (r.enabled && (r.autoDetect || r.type !== eo.NONE))));
    if (
      (i && e.batch.flush(),
      t &&
        this._enabledFilters?.length &&
        e.filter.push(this, this._enabledFilters),
      r && e.mask.push(this, this._mask),
      this.cullable)
    )
      this._renderWithCulling(e);
    else {
      this._render(e);
      for (let t = 0, r = this.children.length; t < r; ++t)
        this.children[t].render(e);
    }
    i && e.batch.flush(),
      r && e.mask.pop(this),
      t && this._enabledFilters?.length && e.filter.pop();
  }
  _render(e) {}
  destroy(e) {
    super.destroy(), (this.sortDirty = !1);
    let t = "boolean" == typeof e ? e : e?.children,
      r = this.removeChildren(0, this.children.length);
    if (t) for (let t = 0; t < r.length; ++t) r[t].destroy(e);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(e) {
    let t = this.getLocalBounds().width;
    0 !== t ? (this.scale.x = e / t) : (this.scale.x = 1), (this._width = e);
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(e) {
    let t = this.getLocalBounds().height;
    0 !== t ? (this.scale.y = e / t) : (this.scale.y = 1), (this._height = e);
  }
};
sU.defaultSortableChildren = !1;
let sG = sU;
(sG.prototype.containerUpdateTransform = sG.prototype.updateTransform),
  Object.defineProperties(ed, {
    SORTABLE_CHILDREN: {
      get: () => sG.defaultSortableChildren,
      set(e) {
        eP.deprecation(
          "7.1.0",
          "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"
        ),
          (sG.defaultSortableChildren = e);
      },
    },
  });
const sH = new rD(),
  sz = new Uint16Array([0, 1, 2, 0, 2, 3]);
class sj extends sG {
  constructor(e) {
    super(),
      (this._anchor = new rq(
        this._onAnchorUpdate,
        this,
        e ? e.defaultAnchor.x : 0,
        e ? e.defaultAnchor.y : 0
      )),
      (this._texture = null),
      (this._width = 0),
      (this._height = 0),
      (this._tintColor = new tk(16777215)),
      (this._tintRGB = null),
      (this.tint = 16777215),
      (this.blendMode = Y.NORMAL),
      (this._cachedTint = 16777215),
      (this.uvs = null),
      (this.texture = e || iM.EMPTY),
      (this.vertexData = new Float32Array(8)),
      (this.vertexTrimmedData = null),
      (this._transformID = -1),
      (this._textureID = -1),
      (this._transformTrimmedID = -1),
      (this._textureTrimmedID = -1),
      (this.indices = sz),
      (this.pluginName = "batch"),
      (this.isSprite = !0),
      (this._roundPixels = ed.ROUND_PIXELS);
  }
  _onTextureUpdate() {
    (this._textureID = -1),
      (this._textureTrimmedID = -1),
      (this._cachedTint = 16777215),
      this._width &&
        (this.scale.x =
          (eP.sign(this.scale.x) * this._width) / this._texture.orig.width),
      this._height &&
        (this.scale.y =
          (eP.sign(this.scale.y) * this._height) / this._texture.orig.height);
  }
  _onAnchorUpdate() {
    (this._transformID = -1), (this._transformTrimmedID = -1);
  }
  calculateVertices() {
    let e = this._texture;
    if (
      this._transformID === this.transform._worldID &&
      this._textureID === e._updateID
    )
      return;
    this._textureID !== e._updateID &&
      (this.uvs = this._texture._uvs.uvsFloat32),
      (this._transformID = this.transform._worldID),
      (this._textureID = e._updateID);
    let t = this.transform.worldTransform,
      r = t.a,
      i = t.b,
      s = t.c,
      n = t.d,
      a = t.tx,
      o = t.ty,
      l = this.vertexData,
      h = e.trim,
      u = e.orig,
      d = this._anchor,
      c = 0,
      p = 0,
      f = 0,
      m = 0;
    if (
      (h
        ? ((c = (p = h.x - d._x * u.width) + h.width),
          (f = (m = h.y - d._y * u.height) + h.height))
        : ((c = (p = -d._x * u.width) + u.width),
          (f = (m = -d._y * u.height) + u.height)),
      (l[0] = r * p + s * m + a),
      (l[1] = n * m + i * p + o),
      (l[2] = r * c + s * m + a),
      (l[3] = n * m + i * c + o),
      (l[4] = r * c + s * f + a),
      (l[5] = n * f + i * c + o),
      (l[6] = r * p + s * f + a),
      (l[7] = n * f + i * p + o),
      this._roundPixels)
    ) {
      let e = ed.RESOLUTION;
      for (let t = 0; t < l.length; ++t) l[t] = Math.round(l[t] * e) / e;
    }
  }
  calculateTrimmedVertices() {
    if (this.vertexTrimmedData) {
      if (
        this._transformTrimmedID === this.transform._worldID &&
        this._textureTrimmedID === this._texture._updateID
      )
        return;
    } else this.vertexTrimmedData = new Float32Array(8);
    (this._transformTrimmedID = this.transform._worldID),
      (this._textureTrimmedID = this._texture._updateID);
    let e = this._texture,
      t = this.vertexTrimmedData,
      r = e.orig,
      i = this._anchor,
      s = this.transform.worldTransform,
      n = s.a,
      a = s.b,
      o = s.c,
      l = s.d,
      h = s.tx,
      u = s.ty,
      d = -i._x * r.width,
      c = d + r.width,
      p = -i._y * r.height,
      f = p + r.height;
    if (
      ((t[0] = n * d + o * p + h),
      (t[1] = l * p + a * d + u),
      (t[2] = n * c + o * p + h),
      (t[3] = l * p + a * c + u),
      (t[4] = n * c + o * f + h),
      (t[5] = l * f + a * c + u),
      (t[6] = n * d + o * f + h),
      (t[7] = l * f + a * d + u),
      this._roundPixels)
    ) {
      let e = ed.RESOLUTION;
      for (let r = 0; r < t.length; ++r) t[r] = Math.round(t[r] * e) / e;
    }
  }
  _render(e) {
    this.calculateVertices(),
      e.batch.setObjectRenderer(e.plugins[this.pluginName]),
      e.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    let e = this._texture.trim,
      t = this._texture.orig;
    e && (e.width !== t.width || e.height !== t.height)
      ? (this.calculateTrimmedVertices(),
        this._bounds.addQuad(this.vertexTrimmedData))
      : (this.calculateVertices(), this._bounds.addQuad(this.vertexData));
  }
  getLocalBounds(e) {
    return 0 === this.children.length
      ? (this._localBounds || (this._localBounds = new sB()),
        (this._localBounds.minX = -(
          this._texture.orig.width * this._anchor._x
        )),
        (this._localBounds.minY = -(
          this._texture.orig.height * this._anchor._y
        )),
        (this._localBounds.maxX =
          this._texture.orig.width * (1 - this._anchor._x)),
        (this._localBounds.maxY =
          this._texture.orig.height * (1 - this._anchor._y)),
        e ||
          (this._localBoundsRect || (this._localBoundsRect = new rO()),
          (e = this._localBoundsRect)),
        this._localBounds.getRectangle(e))
      : super.getLocalBounds.call(this, e);
  }
  containsPoint(e) {
    this.worldTransform.applyInverse(e, sH);
    let t = this._texture.orig.width,
      r = this._texture.orig.height,
      i = -t * this.anchor.x,
      s = 0;
    return (
      sH.x >= i &&
      sH.x < i + t &&
      ((s = -r * this.anchor.y), sH.y >= s && sH.y < s + r)
    );
  }
  destroy(e) {
    if (
      (super.destroy(e),
      this._texture.off("update", this._onTextureUpdate, this),
      (this._anchor = null),
      "boolean" == typeof e ? e : e?.texture)
    ) {
      let t = "boolean" == typeof e ? e : e?.baseTexture;
      this._texture.destroy(!!t);
    }
    this._texture = null;
  }
  static from(e, t) {
    return new sj(e instanceof iM ? e : iM.from(e, t));
  }
  set roundPixels(e) {
    this._roundPixels !== e &&
      ((this._transformID = -1), (this._transformTrimmedID = -1)),
      (this._roundPixels = e);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    let t = eP.sign(this.scale.x) || 1;
    (this.scale.x = (t * e) / this._texture.orig.width), (this._width = e);
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    let t = eP.sign(this.scale.y) || 1;
    (this.scale.y = (t * e) / this._texture.orig.height), (this._height = e);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    this._anchor.copyFrom(e);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    this._tintColor.setValue(e),
      (this._tintRGB = this._tintColor.toLittleEndianNumber());
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(e) {
    this._texture !== e &&
      (this._texture &&
        this._texture.off("update", this._onTextureUpdate, this),
      (this._texture = e || iM.EMPTY),
      (this._cachedTint = 16777215),
      (this._textureID = -1),
      (this._textureTrimmedID = -1),
      e &&
        (e.baseTexture.valid
          ? this._onTextureUpdate()
          : e.once("update", this._onTextureUpdate, this)));
  }
}
const s$ = new rG();
(sO.prototype._cacheAsBitmap = !1),
  (sO.prototype._cacheData = null),
  (sO.prototype._cacheAsBitmapResolution = null),
  (sO.prototype._cacheAsBitmapMultisample = null);
class sX {
  constructor() {
    (this.textureCacheId = null),
      (this.originalRender = null),
      (this.originalRenderCanvas = null),
      (this.originalCalculateBounds = null),
      (this.originalGetLocalBounds = null),
      (this.originalUpdateTransform = null),
      (this.originalDestroy = null),
      (this.originalMask = null),
      (this.originalFilterArea = null),
      (this.originalContainsPoint = null),
      (this.sprite = null);
  }
}
Object.defineProperties(sO.prototype, {
  cacheAsBitmapResolution: {
    get() {
      return this._cacheAsBitmapResolution;
    },
    set(e) {
      e !== this._cacheAsBitmapResolution &&
        ((this._cacheAsBitmapResolution = e),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmapMultisample: {
    get() {
      return this._cacheAsBitmapMultisample;
    },
    set(e) {
      e !== this._cacheAsBitmapMultisample &&
        ((this._cacheAsBitmapMultisample = e),
        this.cacheAsBitmap &&
          ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
    },
  },
  cacheAsBitmap: {
    get() {
      return this._cacheAsBitmap;
    },
    set(e) {
      let t;
      this._cacheAsBitmap !== e &&
        ((this._cacheAsBitmap = e),
        e
          ? (this._cacheData || (this._cacheData = new sX()),
            ((t = this._cacheData).originalRender = this.render),
            (t.originalRenderCanvas = this.renderCanvas),
            (t.originalUpdateTransform = this.updateTransform),
            (t.originalCalculateBounds = this.calculateBounds),
            (t.originalGetLocalBounds = this.getLocalBounds),
            (t.originalDestroy = this.destroy),
            (t.originalContainsPoint = this.containsPoint),
            (t.originalMask = this._mask),
            (t.originalFilterArea = this.filterArea),
            (this.render = this._renderCached),
            (this.renderCanvas = this._renderCachedCanvas),
            (this.destroy = this._cacheAsBitmapDestroy))
          : ((t = this._cacheData).sprite && this._destroyCachedDisplayObject(),
            (this.render = t.originalRender),
            (this.renderCanvas = t.originalRenderCanvas),
            (this.calculateBounds = t.originalCalculateBounds),
            (this.getLocalBounds = t.originalGetLocalBounds),
            (this.destroy = t.originalDestroy),
            (this.updateTransform = t.originalUpdateTransform),
            (this.containsPoint = t.originalContainsPoint),
            (this._mask = t.originalMask),
            (this.filterArea = t.originalFilterArea)));
    },
  },
}),
  (sO.prototype._renderCached = function (e) {
    this.visible &&
      !(this.worldAlpha <= 0) &&
      this.renderable &&
      (this._initCachedDisplayObject(e),
      (this._cacheData.sprite.transform._worldID = this.transform._worldID),
      (this._cacheData.sprite.worldAlpha = this.worldAlpha),
      this._cacheData.sprite._render(e));
  }),
  (sO.prototype._initCachedDisplayObject = function (e) {
    if (this._cacheData?.sprite) return;
    let t = this.alpha;
    (this.alpha = 1), e.batch.flush();
    let r = this.getLocalBounds(new rO(), !0);
    if (this.filters?.length) {
      let e = this.filters[0].padding;
      r.pad(e);
    }
    let i = this.cacheAsBitmapResolution || e.resolution;
    r.ceil(i),
      (r.width = Math.max(r.width, 1 / i)),
      (r.height = Math.max(r.height, 1 / i));
    let s = e.renderTexture.current,
      n = e.renderTexture.sourceFrame.clone(),
      a = e.renderTexture.destinationFrame.clone(),
      o = e.projection.transform,
      l = iD.create({
        width: r.width,
        height: r.height,
        resolution: i,
        multisample: this.cacheAsBitmapMultisample ?? e.multisample,
      }),
      h = `cacheAsBitmap_${eP.uid()}`;
    (this._cacheData.textureCacheId = h),
      r_.addToCache(l.baseTexture, h),
      iM.addToCache(l, h);
    let u = this.transform.localTransform
      .copyTo(s$)
      .invert()
      .translate(-r.x, -r.y);
    (this.render = this._cacheData.originalRender),
      e.render(this, {
        renderTexture: l,
        clear: !0,
        transform: u,
        skipUpdateTransform: !1,
      }),
      e.framebuffer.blit(),
      (e.projection.transform = o),
      e.renderTexture.bind(s, n, a),
      (this.render = this._renderCached),
      (this.updateTransform = this.displayObjectUpdateTransform),
      (this.calculateBounds = this._calculateCachedBounds),
      (this.getLocalBounds = this._getCachedLocalBounds),
      (this._mask = null),
      (this.filterArea = null),
      (this.alpha = t);
    let d = new sj(l);
    (d.transform.worldTransform = this.transform.worldTransform),
      (d.anchor.x = -(r.x / r.width)),
      (d.anchor.y = -(r.y / r.height)),
      (d.alpha = t),
      (d._bounds = this._bounds),
      (this._cacheData.sprite = d),
      (this.transform._parentID = -1),
      this.parent
        ? this.updateTransform()
        : (this.enableTempParent(),
          this.updateTransform(),
          this.disableTempParent(null)),
      (this.containsPoint = d.containsPoint.bind(d));
  }),
  (sO.prototype._renderCachedCanvas = function (e) {
    this.visible &&
      !(this.worldAlpha <= 0) &&
      this.renderable &&
      (this._initCachedDisplayObjectCanvas(e),
      (this._cacheData.sprite.worldAlpha = this.worldAlpha),
      this._cacheData.sprite._renderCanvas(e));
  }),
  (sO.prototype._initCachedDisplayObjectCanvas = function (e) {
    if (this._cacheData?.sprite) return;
    let t = this.getLocalBounds(new rO(), !0),
      r = this.alpha;
    this.alpha = 1;
    let i = e.canvasContext.activeContext,
      s = e._projTransform,
      n = this.cacheAsBitmapResolution || e.resolution;
    t.ceil(n),
      (t.width = Math.max(t.width, 1 / n)),
      (t.height = Math.max(t.height, 1 / n));
    let a = iD.create({ width: t.width, height: t.height, resolution: n }),
      o = `cacheAsBitmap_${eP.uid()}`;
    (this._cacheData.textureCacheId = o),
      r_.addToCache(a.baseTexture, o),
      iM.addToCache(a, o),
      this.transform.localTransform.copyTo(s$),
      s$.invert(),
      (s$.tx -= t.x),
      (s$.ty -= t.y),
      (this.renderCanvas = this._cacheData.originalRenderCanvas),
      e.render(this, {
        renderTexture: a,
        clear: !0,
        transform: s$,
        skipUpdateTransform: !1,
      }),
      (e.canvasContext.activeContext = i),
      (e._projTransform = s),
      (this.renderCanvas = this._renderCachedCanvas),
      (this.updateTransform = this.displayObjectUpdateTransform),
      (this.calculateBounds = this._calculateCachedBounds),
      (this.getLocalBounds = this._getCachedLocalBounds),
      (this._mask = null),
      (this.filterArea = null),
      (this.alpha = r);
    let l = new sj(a);
    (l.transform.worldTransform = this.transform.worldTransform),
      (l.anchor.x = -(t.x / t.width)),
      (l.anchor.y = -(t.y / t.height)),
      (l.alpha = r),
      (l._bounds = this._bounds),
      (this._cacheData.sprite = l),
      (this.transform._parentID = -1),
      this.parent
        ? this.updateTransform()
        : ((this.parent = e._tempDisplayObjectParent),
          this.updateTransform(),
          (this.parent = null)),
      (this.containsPoint = l.containsPoint.bind(l));
  }),
  (sO.prototype._calculateCachedBounds = function () {
    this._bounds.clear(),
      (this._cacheData.sprite.transform._worldID = this.transform._worldID),
      this._cacheData.sprite._calculateBounds(),
      (this._bounds.updateID = this._boundsID);
  }),
  (sO.prototype._getCachedLocalBounds = function () {
    return this._cacheData.sprite.getLocalBounds(null);
  }),
  (sO.prototype._destroyCachedDisplayObject = function () {
    this._cacheData.sprite._texture.destroy(!0),
      (this._cacheData.sprite = null),
      r_.removeFromCache(this._cacheData.textureCacheId),
      iM.removeFromCache(this._cacheData.textureCacheId),
      (this._cacheData.textureCacheId = null);
  }),
  (sO.prototype._cacheAsBitmapDestroy = function (e) {
    (this.cacheAsBitmap = !1), this.destroy(e);
  }),
  (sO.prototype.name = null),
  (sG.prototype.getChildByName = function (e, t) {
    for (let t = 0, r = this.children.length; t < r; t++)
      if (this.children[t].name === e) return this.children[t];
    if (t)
      for (let t = 0, r = this.children.length; t < r; t++) {
        let r = this.children[t];
        if (!r.getChildByName) continue;
        let i = r.getChildByName(e, !0);
        if (i) return i;
      }
    return null;
  }),
  (sO.prototype.getGlobalPosition = function (e = new rD(), t = !1) {
    return (
      this.parent
        ? this.parent.toGlobal(this.position, e, t)
        : ((e.x = this.position.x), (e.y = this.position.y)),
      e
    );
  });
var sV = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
const sW = {
    5: [0.153388, 0.221461, 0.250301],
    7: [0.071303, 0.131514, 0.189879, 0.214607],
    9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
    11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
    13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
    15: [
      489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
      0.197448,
    ],
  },
  sY = [
    "varying vec2 vBlurTexCoords[%size%];",
    "uniform sampler2D uSampler;",
    "void main(void)",
    "{",
    "    gl_FragColor = vec4(0.0);",
    "    %blur%",
    "}",
  ].join(`
`),
  sq = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
class sZ extends iv {
  constructor(e, t = 8, r = 4, i = iv.defaultResolution, s = 5) {
    super(
      (function (e, t) {
        let r = Math.ceil(e / 2),
          i = sq,
          s = "",
          n;
        n = t
          ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);"
          : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
        for (let t = 0; t < e; t++) {
          let e = n.replace("%index%", t.toString());
          s +=
            (e = e.replace("%sampleIndex%", `${t - (r - 1)}.0`)) +
            `
`;
        }
        return (i = i.replace("%blur%", s)).replace("%size%", e.toString());
      })(s, e),
      (function (e) {
        let t;
        let r = sW[e],
          i = r.length,
          s = sY,
          n = "";
        for (let s = 0; s < e; s++) {
          let a =
            "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace(
              "%index%",
              s.toString()
            );
          (t = s),
            s >= i && (t = e - s - 1),
            (n +=
              (a = a.replace("%value%", r[t].toString())) +
              `
`);
        }
        return (s = s.replace("%blur%", n)).replace("%size%", e.toString());
      })(s)
    ),
      (this.horizontal = e),
      (this.resolution = i),
      (this._quality = 0),
      (this.quality = r),
      (this.blur = t);
  }
  apply(e, t, r, i) {
    if (
      (r
        ? this.horizontal
          ? (this.uniforms.strength = (1 / r.width) * (r.width / t.width))
          : (this.uniforms.strength = (1 / r.height) * (r.height / t.height))
        : this.horizontal
        ? (this.uniforms.strength =
            (1 / e.renderer.width) * (e.renderer.width / t.width))
        : (this.uniforms.strength =
            (1 / e.renderer.height) * (e.renderer.height / t.height)),
      (this.uniforms.strength *= this.strength),
      (this.uniforms.strength /= this.passes),
      1 === this.passes)
    )
      e.applyFilter(this, t, r, i);
    else {
      let s = e.getFilterTexture(),
        n = e.renderer,
        a = t,
        o = s;
      (this.state.blend = !1), e.applyFilter(this, a, o, es.CLEAR);
      for (let t = 1; t < this.passes - 1; t++) {
        e.bindAndClear(a, es.BLIT), (this.uniforms.uSampler = o);
        let t = o;
        (o = a), (a = t), n.shader.bind(this), n.geometry.draw(5);
      }
      (this.state.blend = !0),
        e.applyFilter(this, o, r, i),
        e.returnFilterTexture(s);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(e) {
    (this.padding = 1 + 2 * Math.abs(e)), (this.strength = e);
  }
  get quality() {
    return this._quality;
  }
  set quality(e) {
    (this._quality = e), (this.passes = e);
  }
}
var sK = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class sQ extends iv {
  constructor() {
    super(sT, sK, {
      m: new Float32Array([
        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
      ]),
      uAlpha: 1,
    }),
      (this.alpha = 1);
  }
  _loadMatrix(e, t = !1) {
    let r = e;
    t && (this._multiply(r, this.uniforms.m, e), (r = this._colorMatrix(r))),
      (this.uniforms.m = r);
  }
  _multiply(e, t, r) {
    return (
      (e[0] = t[0] * r[0] + t[1] * r[5] + t[2] * r[10] + t[3] * r[15]),
      (e[1] = t[0] * r[1] + t[1] * r[6] + t[2] * r[11] + t[3] * r[16]),
      (e[2] = t[0] * r[2] + t[1] * r[7] + t[2] * r[12] + t[3] * r[17]),
      (e[3] = t[0] * r[3] + t[1] * r[8] + t[2] * r[13] + t[3] * r[18]),
      (e[4] = t[0] * r[4] + t[1] * r[9] + t[2] * r[14] + t[3] * r[19] + t[4]),
      (e[5] = t[5] * r[0] + t[6] * r[5] + t[7] * r[10] + t[8] * r[15]),
      (e[6] = t[5] * r[1] + t[6] * r[6] + t[7] * r[11] + t[8] * r[16]),
      (e[7] = t[5] * r[2] + t[6] * r[7] + t[7] * r[12] + t[8] * r[17]),
      (e[8] = t[5] * r[3] + t[6] * r[8] + t[7] * r[13] + t[8] * r[18]),
      (e[9] = t[5] * r[4] + t[6] * r[9] + t[7] * r[14] + t[8] * r[19] + t[9]),
      (e[10] = t[10] * r[0] + t[11] * r[5] + t[12] * r[10] + t[13] * r[15]),
      (e[11] = t[10] * r[1] + t[11] * r[6] + t[12] * r[11] + t[13] * r[16]),
      (e[12] = t[10] * r[2] + t[11] * r[7] + t[12] * r[12] + t[13] * r[17]),
      (e[13] = t[10] * r[3] + t[11] * r[8] + t[12] * r[13] + t[13] * r[18]),
      (e[14] =
        t[10] * r[4] + t[11] * r[9] + t[12] * r[14] + t[13] * r[19] + t[14]),
      (e[15] = t[15] * r[0] + t[16] * r[5] + t[17] * r[10] + t[18] * r[15]),
      (e[16] = t[15] * r[1] + t[16] * r[6] + t[17] * r[11] + t[18] * r[16]),
      (e[17] = t[15] * r[2] + t[16] * r[7] + t[17] * r[12] + t[18] * r[17]),
      (e[18] = t[15] * r[3] + t[16] * r[8] + t[17] * r[13] + t[18] * r[18]),
      (e[19] =
        t[15] * r[4] + t[16] * r[9] + t[17] * r[14] + t[18] * r[19] + t[19]),
      e
    );
  }
  _colorMatrix(e) {
    let t = new Float32Array(e);
    return (t[4] /= 255), (t[9] /= 255), (t[14] /= 255), (t[19] /= 255), t;
  }
  brightness(e, t) {
    this._loadMatrix(
      [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0],
      t
    );
  }
  tint(e, t) {
    let [r, i, s] = tk.shared.setValue(e).toArray();
    this._loadMatrix(
      [r, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0],
      t
    );
  }
  greyscale(e, t) {
    this._loadMatrix(
      [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0],
      t
    );
  }
  blackAndWhite(e) {
    this._loadMatrix(
      [
        0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0,
        1, 0,
      ],
      e
    );
  }
  hue(e, t) {
    let r = Math.cos((e = ((e || 0) / 180) * Math.PI)),
      i = Math.sin(e),
      s = 1 / 3,
      n = (0, Math.sqrt)(1 / 3);
    this._loadMatrix(
      [
        r + (1 - r) * s,
        s * (1 - r) - n * i,
        s * (1 - r) + n * i,
        0,
        0,
        s * (1 - r) + n * i,
        r + s * (1 - r),
        s * (1 - r) - n * i,
        0,
        0,
        s * (1 - r) - n * i,
        s * (1 - r) + n * i,
        r + s * (1 - r),
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ],
      t
    );
  }
  contrast(e, t) {
    let r = (e || 0) + 1,
      i = -0.5 * (r - 1);
    this._loadMatrix(
      [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0],
      t
    );
  }
  saturate(e = 0, t) {
    let r = (2 * e) / 3 + 1,
      i = -((r - 1) * 0.5);
    this._loadMatrix(
      [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0],
      t
    );
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(e) {
    this._loadMatrix(
      [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0],
      e
    );
  }
  sepia(e) {
    this._loadMatrix(
      [
        0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0,
        0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
      ],
      e
    );
  }
  technicolor(e) {
    this._loadMatrix(
      [
        1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
        11.793603434377337, -0.3087833385928097, 1.7658908555458428,
        -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
        -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0,
        1, 0,
      ],
      e
    );
  }
  polaroid(e) {
    this._loadMatrix(
      [
        1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
        -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
      ],
      e
    );
  }
  toBGR(e) {
    this._loadMatrix(
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      e
    );
  }
  kodachrome(e) {
    this._loadMatrix(
      [
        1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
        63.72958762196502, -0.16404339962244616, 1.0835251566291304,
        -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
        -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0,
        1, 0,
      ],
      e
    );
  }
  browni(e) {
    this._loadMatrix(
      [
        0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
        47.43192855600873, -0.037703249837783157, 0.8609577587992641,
        0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
        -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0,
        0, 1, 0,
      ],
      e
    );
  }
  vintage(e) {
    this._loadMatrix(
      [
        0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
        9.651285835294123, 0.02578397704808868, 0.6441188644374771,
        0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
        -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0,
        1, 0,
      ],
      e
    );
  }
  colorTone(e, t, r, i, s) {
    (e = e || 0.2), (t = t || 0.15), (r = r || 16770432), (i = i || 3375104);
    let n = tk.shared,
      [a, o, l] = n.setValue(r).toArray(),
      [h, u, d] = n.setValue(i).toArray(),
      c = [
        0.3,
        0.59,
        0.11,
        0,
        0,
        a,
        o,
        l,
        e,
        0,
        h,
        u,
        d,
        t,
        0,
        a - h,
        o - u,
        l - d,
        0,
        0,
      ];
    this._loadMatrix(c, s);
  }
  night(e, t) {
    let r = [
      -2 * (e = e || 0.1),
      -e,
      0,
      0,
      0,
      -e,
      0,
      e,
      0,
      0,
      0,
      e,
      2 * e,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
    ];
    this._loadMatrix(r, t);
  }
  predator(e, t) {
    this._loadMatrix(
      [
        11.224130630493164 * e,
        -4.794486999511719 * e,
        -2.8746118545532227 * e,
        0 * e,
        0.40342438220977783 * e,
        -3.6330697536468506 * e,
        9.193157196044922 * e,
        -2.951810836791992 * e,
        0 * e,
        -1.316135048866272 * e,
        -3.2184197902679443 * e,
        -4.2375030517578125 * e,
        7.476448059082031 * e,
        0 * e,
        0.8044459223747253 * e,
        0,
        0,
        0,
        1,
        0,
      ],
      t
    );
  }
  lsd(e) {
    this._loadMatrix(
      [
        2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0,
        1, 0,
      ],
      e
    );
  }
  reset() {
    this._loadMatrix(
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      !1
    );
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(e) {
    this.uniforms.m = e;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(e) {
    this.uniforms.uAlpha = e;
  }
}
sQ.prototype.grayscale = sQ.prototype.greyscale;
var sJ = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,
  s0 = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`,
  s1 = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,
  s2 = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,
  s3 = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
const s4 = {
  AlphaFilter: class extends iv {
    constructor(e = 1) {
      super(sE, sV, { uAlpha: 1 }), (this.alpha = e);
    }
    get alpha() {
      return this.uniforms.uAlpha;
    }
    set alpha(e) {
      this.uniforms.uAlpha = e;
    }
  },
  BlurFilter: class extends iv {
    constructor(e = 8, t = 4, r = iv.defaultResolution, i = 5) {
      super(),
        (this._repeatEdgePixels = !1),
        (this.blurXFilter = new sZ(!0, e, t, r, i)),
        (this.blurYFilter = new sZ(!1, e, t, r, i)),
        (this.resolution = r),
        (this.quality = t),
        (this.blur = e),
        (this.repeatEdgePixels = !1);
    }
    apply(e, t, r, i) {
      let s = Math.abs(this.blurXFilter.strength),
        n = Math.abs(this.blurYFilter.strength);
      if (s && n) {
        let s = e.getFilterTexture();
        this.blurXFilter.apply(e, t, s, es.CLEAR),
          this.blurYFilter.apply(e, s, r, i),
          e.returnFilterTexture(s);
      } else
        n
          ? this.blurYFilter.apply(e, t, r, i)
          : this.blurXFilter.apply(e, t, r, i);
    }
    updatePadding() {
      this._repeatEdgePixels
        ? (this.padding = 0)
        : (this.padding =
            2 *
            Math.max(
              Math.abs(this.blurXFilter.strength),
              Math.abs(this.blurYFilter.strength)
            ));
    }
    get blur() {
      return this.blurXFilter.blur;
    }
    set blur(e) {
      (this.blurXFilter.blur = this.blurYFilter.blur = e), this.updatePadding();
    }
    get quality() {
      return this.blurXFilter.quality;
    }
    set quality(e) {
      this.blurXFilter.quality = this.blurYFilter.quality = e;
    }
    get blurX() {
      return this.blurXFilter.blur;
    }
    set blurX(e) {
      (this.blurXFilter.blur = e), this.updatePadding();
    }
    get blurY() {
      return this.blurYFilter.blur;
    }
    set blurY(e) {
      (this.blurYFilter.blur = e), this.updatePadding();
    }
    get blendMode() {
      return this.blurYFilter.blendMode;
    }
    set blendMode(e) {
      this.blurYFilter.blendMode = e;
    }
    get repeatEdgePixels() {
      return this._repeatEdgePixels;
    }
    set repeatEdgePixels(e) {
      (this._repeatEdgePixels = e), this.updatePadding();
    }
  },
  BlurFilterPass: sZ,
  ColorMatrixFilter: sQ,
  DisplacementFilter: class extends iv {
    constructor(e, t) {
      let r = new rG();
      (e.renderable = !1),
        super(s0, sJ, {
          mapSampler: e._texture,
          filterMatrix: r,
          scale: { x: 1, y: 1 },
          rotation: new Float32Array([1, 0, 0, 1]),
        }),
        (this.maskSprite = e),
        (this.maskMatrix = r),
        null == t && (t = 20),
        (this.scale = new rD(t, t));
    }
    apply(e, t, r, i) {
      (this.uniforms.filterMatrix = e.calculateSpriteMatrix(
        this.maskMatrix,
        this.maskSprite
      )),
        (this.uniforms.scale.x = this.scale.x),
        (this.uniforms.scale.y = this.scale.y);
      let s = this.maskSprite.worldTransform,
        n = Math.sqrt(s.a * s.a + s.b * s.b),
        a = Math.sqrt(s.c * s.c + s.d * s.d);
      0 !== n &&
        0 !== a &&
        ((this.uniforms.rotation[0] = s.a / n),
        (this.uniforms.rotation[1] = s.b / n),
        (this.uniforms.rotation[2] = s.c / a),
        (this.uniforms.rotation[3] = s.d / a)),
        e.applyFilter(this, t, r, i);
    }
    get map() {
      return this.uniforms.mapSampler;
    }
    set map(e) {
      this.uniforms.mapSampler = e;
    }
  },
  FXAAFilter: class extends iv {
    constructor() {
      super(s2, s1);
    }
  },
  NoiseFilter: class extends iv {
    constructor(e = 0.5, t = Math.random()) {
      super(sT, s3, { uNoise: 0, uSeed: 0 }), (this.noise = e), (this.seed = t);
    }
    get noise() {
      return this.uniforms.uNoise;
    }
    set noise(e) {
      this.uniforms.uNoise = e;
    }
    get seed() {
      return this.uniforms.uSeed;
    }
    set seed(e) {
      this.uniforms.uSeed = e;
    }
  },
};
Object.entries(s4).forEach(([e, t]) => {
  Object.defineProperty(s4, e, {
    get: () => (eP.deprecation("7.1.0", `filters.${e} has moved to ${e}`), t),
  });
});
const s5 = new (class {
  constructor() {
    (this.interactionFrequency = 10),
      (this._deltaTime = 0),
      (this._didMove = !1),
      (this.tickerAdded = !1),
      (this._pauseUpdate = !0);
  }
  init(e) {
    this.removeTickerListener(),
      (this.events = e),
      (this.interactionFrequency = 10),
      (this._deltaTime = 0),
      (this._didMove = !1),
      (this.tickerAdded = !1),
      (this._pauseUpdate = !0);
  }
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(e) {
    this._pauseUpdate = e;
  }
  addTickerListener() {
    this.tickerAdded ||
      !this.domElement ||
      (sx.system.add(this.tickerUpdate, this, sy.INTERACTION),
      (this.tickerAdded = !0));
  }
  removeTickerListener() {
    this.tickerAdded &&
      (sx.system.remove(this.tickerUpdate, this), (this.tickerAdded = !1));
  }
  pointerMoved() {
    this._didMove = !0;
  }
  update() {
    if (!this.domElement || this._pauseUpdate) return;
    if (this._didMove) {
      this._didMove = !1;
      return;
    }
    let e = this.events.rootPointerEvent;
    (this.events.supportsTouchEvents && "touch" === e.pointerType) ||
      globalThis.document.dispatchEvent(
        new PointerEvent("pointermove", {
          clientX: e.clientX,
          clientY: e.clientY,
        })
      );
  }
  tickerUpdate(e) {
    (this._deltaTime += e),
      this._deltaTime < this.interactionFrequency ||
        ((this._deltaTime = 0), this.update());
  }
})();
class s6 {
  constructor(e) {
    (this.bubbles = !0),
      (this.cancelBubble = !0),
      (this.cancelable = !1),
      (this.composed = !1),
      (this.defaultPrevented = !1),
      (this.eventPhase = s6.prototype.NONE),
      (this.propagationStopped = !1),
      (this.propagationImmediatelyStopped = !1),
      (this.layer = new rD()),
      (this.page = new rD()),
      (this.NONE = 0),
      (this.CAPTURING_PHASE = 1),
      (this.AT_TARGET = 2),
      (this.BUBBLING_PHASE = 3),
      (this.manager = e);
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    return (
      this.manager &&
        (!this.path || this.path[this.path.length - 1] !== this.target) &&
        (this.path = this.target
          ? this.manager.propagationPath(this.target)
          : []),
      this.path
    );
  }
  initEvent(e, t, r) {
    throw Error(
      "initEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
    );
  }
  initUIEvent(e, t, r, i, s) {
    throw Error(
      "initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API."
    );
  }
  preventDefault() {
    this.nativeEvent instanceof Event &&
      this.nativeEvent.cancelable &&
      this.nativeEvent.preventDefault(),
      (this.defaultPrevented = !0);
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class s8 extends s6 {
  constructor() {
    super(...arguments),
      (this.client = new rD()),
      (this.movement = new rD()),
      (this.offset = new rD()),
      (this.global = new rD()),
      (this.screen = new rD());
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getLocalPosition(e, t, r) {
    return e.worldTransform.applyInverse(r || this.global, t);
  }
  getModifierState(e) {
    return (
      "getModifierState" in this.nativeEvent &&
      this.nativeEvent.getModifierState(e)
    );
  }
  initMouseEvent(e, t, r, i, s, n, a, o, l, h, u, d, c, p, f) {
    throw Error("Method not implemented.");
  }
}
class s7 extends s8 {
  constructor() {
    super(...arguments),
      (this.width = 0),
      (this.height = 0),
      (this.isPrimary = !1);
  }
  getCoalescedEvents() {
    return "pointermove" === this.type ||
      "mousemove" === this.type ||
      "touchmove" === this.type
      ? [this]
      : [];
  }
  getPredictedEvents() {
    throw Error("getPredictedEvents is not supported!");
  }
}
class s9 extends s8 {
  constructor() {
    super(...arguments),
      (this.DOM_DELTA_PIXEL = 0),
      (this.DOM_DELTA_LINE = 1),
      (this.DOM_DELTA_PAGE = 2);
  }
}
(s9.DOM_DELTA_PIXEL = 0), (s9.DOM_DELTA_LINE = 1), (s9.DOM_DELTA_PAGE = 2);
const ne = new rD(),
  nt = new rD();
class nr {
  constructor(e) {
    (this.dispatch = new eP.EventEmitter()),
      (this.moveOnAll = !1),
      (this.enableGlobalMoveEvents = !0),
      (this.mappingState = { trackingData: {} }),
      (this.eventPool = new Map()),
      (this._allInteractiveElements = []),
      (this._hitElements = []),
      (this._isPointerMoveEvent = !1),
      (this.rootTarget = e),
      (this.hitPruneFn = this.hitPruneFn.bind(this)),
      (this.hitTestFn = this.hitTestFn.bind(this)),
      (this.mapPointerDown = this.mapPointerDown.bind(this)),
      (this.mapPointerMove = this.mapPointerMove.bind(this)),
      (this.mapPointerOut = this.mapPointerOut.bind(this)),
      (this.mapPointerOver = this.mapPointerOver.bind(this)),
      (this.mapPointerUp = this.mapPointerUp.bind(this)),
      (this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this)),
      (this.mapWheel = this.mapWheel.bind(this)),
      (this.mappingTable = {}),
      this.addEventMapping("pointerdown", this.mapPointerDown),
      this.addEventMapping("pointermove", this.mapPointerMove),
      this.addEventMapping("pointerout", this.mapPointerOut),
      this.addEventMapping("pointerleave", this.mapPointerOut),
      this.addEventMapping("pointerover", this.mapPointerOver),
      this.addEventMapping("pointerup", this.mapPointerUp),
      this.addEventMapping("pointerupoutside", this.mapPointerUpOutside),
      this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(e, t) {
    this.mappingTable[e] || (this.mappingTable[e] = []),
      this.mappingTable[e].push({ fn: t, priority: 0 }),
      this.mappingTable[e].sort((e, t) => e.priority - t.priority);
  }
  dispatchEvent(e, t) {
    (e.propagationStopped = !1),
      (e.propagationImmediatelyStopped = !1),
      this.propagate(e, t),
      this.dispatch.emit(t || e.type, e);
  }
  mapEvent(e) {
    if (!this.rootTarget) return;
    let t = this.mappingTable[e.type];
    if (t) for (let r = 0, i = t.length; r < i; r++) t[r].fn(e);
    else
      console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`);
  }
  hitTest(e, t) {
    s5.pauseUpdate = !0;
    let r = this[
      this._isPointerMoveEvent && this.enableGlobalMoveEvents
        ? "hitTestMoveRecursive"
        : "hitTestRecursive"
    ](
      this.rootTarget,
      this.rootTarget.eventMode,
      ne.set(e, t),
      this.hitTestFn,
      this.hitPruneFn
    );
    return r && r[0];
  }
  propagate(e, t) {
    if (!e.target) return;
    let r = e.composedPath();
    e.eventPhase = e.CAPTURING_PHASE;
    for (let i = 0, s = r.length - 1; i < s; i++)
      if (
        ((e.currentTarget = r[i]),
        this.notifyTarget(e, t),
        e.propagationStopped || e.propagationImmediatelyStopped)
      )
        return;
    if (
      ((e.eventPhase = e.AT_TARGET),
      (e.currentTarget = e.target),
      this.notifyTarget(e, t),
      !(e.propagationStopped || e.propagationImmediatelyStopped))
    ) {
      e.eventPhase = e.BUBBLING_PHASE;
      for (let i = r.length - 2; i >= 0; i--)
        if (
          ((e.currentTarget = r[i]),
          this.notifyTarget(e, t),
          e.propagationStopped || e.propagationImmediatelyStopped)
        )
          return;
    }
  }
  all(e, t, r = this._allInteractiveElements) {
    if (0 === r.length) return;
    e.eventPhase = e.BUBBLING_PHASE;
    let i = Array.isArray(t) ? t : [t];
    for (let t = r.length - 1; t >= 0; t--)
      i.forEach((i) => {
        (e.currentTarget = r[t]), this.notifyTarget(e, i);
      });
  }
  propagationPath(e) {
    let t = [e];
    for (let r = 0; r < 2048 && e !== this.rootTarget; r++) {
      if (!e.parent)
        throw Error("Cannot find propagation path to disconnected target");
      t.push(e.parent), (e = e.parent);
    }
    return t.reverse(), t;
  }
  hitTestMoveRecursive(e, t, r, i, s, n = !1) {
    let a = !1;
    if (this._interactivePrune(e)) return null;
    if (
      (("dynamic" === e.eventMode || "dynamic" === t) && (s5.pauseUpdate = !1),
      e.interactiveChildren && e.children)
    ) {
      let o = e.children;
      for (let l = o.length - 1; l >= 0; l--) {
        let h = o[l],
          u = this.hitTestMoveRecursive(
            h,
            this._isInteractive(t) ? t : h.eventMode,
            r,
            i,
            s,
            n || s(e, r)
          );
        if (u) {
          if (u.length > 0 && !u[u.length - 1].parent) continue;
          let t = e.isInteractive();
          (u.length > 0 || t) &&
            (t && this._allInteractiveElements.push(e), u.push(e)),
            0 === this._hitElements.length && (this._hitElements = u),
            (a = !0);
        }
      }
    }
    let o = this._isInteractive(t),
      l = e.isInteractive();
    return (
      o && l && this._allInteractiveElements.push(e),
      n || this._hitElements.length > 0
        ? null
        : a
        ? this._hitElements
        : o && !s(e, r) && i(e, r)
        ? l
          ? [e]
          : []
        : null
    );
  }
  hitTestRecursive(e, t, r, i, s) {
    if (this._interactivePrune(e) || s(e, r)) return null;
    if (
      (("dynamic" === e.eventMode || "dynamic" === t) && (s5.pauseUpdate = !1),
      e.interactiveChildren && e.children)
    ) {
      let n = e.children;
      for (let a = n.length - 1; a >= 0; a--) {
        let o = n[a],
          l = this.hitTestRecursive(
            o,
            this._isInteractive(t) ? t : o.eventMode,
            r,
            i,
            s
          );
        if (l) {
          if (l.length > 0 && !l[l.length - 1].parent) continue;
          let t = e.isInteractive();
          return (l.length > 0 || t) && l.push(e), l;
        }
      }
    }
    let n = this._isInteractive(t),
      a = e.isInteractive();
    return n && i(e, r) ? (a ? [e] : []) : null;
  }
  _isInteractive(e) {
    return "static" === e || "dynamic" === e;
  }
  _interactivePrune(e) {
    return !!(
      !e ||
      e.isMask ||
      !e.visible ||
      !e.renderable ||
      "none" === e.eventMode ||
      ("passive" === e.eventMode && !e.interactiveChildren) ||
      e.isMask
    );
  }
  hitPruneFn(e, t) {
    if (
      e.hitArea &&
      (e.worldTransform.applyInverse(t, nt), !e.hitArea.contains(nt.x, nt.y))
    )
      return !0;
    if (e._mask) {
      let r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
      if (r && !r.containsPoint?.(t)) return !0;
    }
    return !1;
  }
  hitTestFn(e, t) {
    return (
      "passive" !== e.eventMode &&
      (!!e.hitArea || (!!e.containsPoint && e.containsPoint(t)))
    );
  }
  notifyTarget(e, t) {
    t = t ?? e.type;
    let r = `on${t}`;
    e.currentTarget[r]?.(e);
    let i =
      e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET
        ? `${t}capture`
        : t;
    this.notifyListeners(e, i),
      e.eventPhase === e.AT_TARGET && this.notifyListeners(e, t);
  }
  mapPointerDown(e) {
    if (!(e instanceof s7)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    let t = this.createPointerEvent(e);
    if ((this.dispatchEvent(t, "pointerdown"), "touch" === t.pointerType))
      this.dispatchEvent(t, "touchstart");
    else if ("mouse" === t.pointerType || "pen" === t.pointerType) {
      let e = 2 === t.button;
      this.dispatchEvent(t, e ? "rightdown" : "mousedown");
    }
    (this.trackingData(e.pointerId).pressTargetsByButton[e.button] =
      t.composedPath()),
      this.freeEvent(t);
  }
  mapPointerMove(e) {
    if (!(e instanceof s7)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    (this._allInteractiveElements.length = 0),
      (this._hitElements.length = 0),
      (this._isPointerMoveEvent = !0);
    let t = this.createPointerEvent(e);
    this._isPointerMoveEvent = !1;
    let r = "mouse" === t.pointerType || "pen" === t.pointerType,
      i = this.trackingData(e.pointerId),
      s = this.findMountedTarget(i.overTargets);
    if (i.overTargets?.length > 0 && s !== t.target) {
      let i = "mousemove" === e.type ? "mouseout" : "pointerout",
        n = this.createPointerEvent(e, i, s);
      if (
        (this.dispatchEvent(n, "pointerout"),
        r && this.dispatchEvent(n, "mouseout"),
        !t.composedPath().includes(s))
      ) {
        let i = this.createPointerEvent(e, "pointerleave", s);
        for (
          i.eventPhase = i.AT_TARGET;
          i.target && !t.composedPath().includes(i.target);

        )
          (i.currentTarget = i.target),
            this.notifyTarget(i),
            r && this.notifyTarget(i, "mouseleave"),
            (i.target = i.target.parent);
        this.freeEvent(i);
      }
      this.freeEvent(n);
    }
    if (s !== t.target) {
      let i = "mousemove" === e.type ? "mouseover" : "pointerover",
        n = this.clonePointerEvent(t, i);
      this.dispatchEvent(n, "pointerover"),
        r && this.dispatchEvent(n, "mouseover");
      let a = s?.parent;
      for (; a && a !== this.rootTarget.parent && a !== t.target; )
        a = a.parent;
      if (!a || a === this.rootTarget.parent) {
        let e = this.clonePointerEvent(t, "pointerenter");
        for (
          e.eventPhase = e.AT_TARGET;
          e.target && e.target !== s && e.target !== this.rootTarget.parent;

        )
          (e.currentTarget = e.target),
            this.notifyTarget(e),
            r && this.notifyTarget(e, "mouseenter"),
            (e.target = e.target.parent);
        this.freeEvent(e);
      }
      this.freeEvent(n);
    }
    let n = [],
      a = this.enableGlobalMoveEvents ?? !0;
    this.moveOnAll
      ? n.push("pointermove")
      : this.dispatchEvent(t, "pointermove"),
      a && n.push("globalpointermove"),
      "touch" === t.pointerType &&
        (this.moveOnAll
          ? n.splice(1, 0, "touchmove")
          : this.dispatchEvent(t, "touchmove"),
        a && n.push("globaltouchmove")),
      r &&
        (this.moveOnAll
          ? n.splice(1, 0, "mousemove")
          : this.dispatchEvent(t, "mousemove"),
        a && n.push("globalmousemove"),
        (this.cursor = t.target?.cursor)),
      n.length > 0 && this.all(t, n),
      (this._allInteractiveElements.length = 0),
      (this._hitElements.length = 0),
      (i.overTargets = t.composedPath()),
      this.freeEvent(t);
  }
  mapPointerOver(e) {
    if (!(e instanceof s7)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    let t = this.trackingData(e.pointerId),
      r = this.createPointerEvent(e),
      i = "mouse" === r.pointerType || "pen" === r.pointerType;
    this.dispatchEvent(r, "pointerover"),
      i && this.dispatchEvent(r, "mouseover"),
      "mouse" === r.pointerType && (this.cursor = r.target?.cursor);
    let s = this.clonePointerEvent(r, "pointerenter");
    for (
      s.eventPhase = s.AT_TARGET;
      s.target && s.target !== this.rootTarget.parent;

    )
      (s.currentTarget = s.target),
        this.notifyTarget(s),
        i && this.notifyTarget(s, "mouseenter"),
        (s.target = s.target.parent);
    (t.overTargets = r.composedPath()), this.freeEvent(r), this.freeEvent(s);
  }
  mapPointerOut(e) {
    if (!(e instanceof s7)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    let t = this.trackingData(e.pointerId);
    if (t.overTargets) {
      let r = "mouse" === e.pointerType || "pen" === e.pointerType,
        i = this.findMountedTarget(t.overTargets),
        s = this.createPointerEvent(e, "pointerout", i);
      this.dispatchEvent(s), r && this.dispatchEvent(s, "mouseout");
      let n = this.createPointerEvent(e, "pointerleave", i);
      for (
        n.eventPhase = n.AT_TARGET;
        n.target && n.target !== this.rootTarget.parent;

      )
        (n.currentTarget = n.target),
          this.notifyTarget(n),
          r && this.notifyTarget(n, "mouseleave"),
          (n.target = n.target.parent);
      (t.overTargets = null), this.freeEvent(s), this.freeEvent(n);
    }
    this.cursor = null;
  }
  mapPointerUp(e) {
    if (!(e instanceof s7)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    let t = performance.now(),
      r = this.createPointerEvent(e);
    if ((this.dispatchEvent(r, "pointerup"), "touch" === r.pointerType))
      this.dispatchEvent(r, "touchend");
    else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
      let e = 2 === r.button;
      this.dispatchEvent(r, e ? "rightup" : "mouseup");
    }
    let i = this.trackingData(e.pointerId),
      s = this.findMountedTarget(i.pressTargetsByButton[e.button]),
      n = s;
    if (s && !r.composedPath().includes(s)) {
      let t = s;
      for (; t && !r.composedPath().includes(t); ) {
        if (
          ((r.currentTarget = t),
          this.notifyTarget(r, "pointerupoutside"),
          "touch" === r.pointerType)
        )
          this.notifyTarget(r, "touchendoutside");
        else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
          let e = 2 === r.button;
          this.notifyTarget(r, e ? "rightupoutside" : "mouseupoutside");
        }
        t = t.parent;
      }
      delete i.pressTargetsByButton[e.button], (n = t);
    }
    if (n) {
      let s = this.clonePointerEvent(r, "click");
      (s.target = n),
        (s.path = null),
        i.clicksByButton[e.button] ||
          (i.clicksByButton[e.button] = {
            clickCount: 0,
            target: s.target,
            timeStamp: t,
          });
      let a = i.clicksByButton[e.button];
      if (
        (a.target === s.target && t - a.timeStamp < 200
          ? ++a.clickCount
          : (a.clickCount = 1),
        (a.target = s.target),
        (a.timeStamp = t),
        (s.detail = a.clickCount),
        "mouse" === s.pointerType)
      ) {
        let e = 2 === s.button;
        this.dispatchEvent(s, e ? "rightclick" : "click");
      } else "touch" === s.pointerType && this.dispatchEvent(s, "tap");
      this.dispatchEvent(s, "pointertap"), this.freeEvent(s);
    }
    this.freeEvent(r);
  }
  mapPointerUpOutside(e) {
    if (!(e instanceof s7)) {
      console.warn(
        "EventBoundary cannot map a non-pointer event as a pointer event"
      );
      return;
    }
    let t = this.trackingData(e.pointerId),
      r = this.findMountedTarget(t.pressTargetsByButton[e.button]),
      i = this.createPointerEvent(e);
    if (r) {
      let s = r;
      for (; s; )
        (i.currentTarget = s),
          this.notifyTarget(i, "pointerupoutside"),
          "touch" === i.pointerType
            ? this.notifyTarget(i, "touchendoutside")
            : ("mouse" === i.pointerType || "pen" === i.pointerType) &&
              this.notifyTarget(
                i,
                2 === i.button ? "rightupoutside" : "mouseupoutside"
              ),
          (s = s.parent);
      delete t.pressTargetsByButton[e.button];
    }
    this.freeEvent(i);
  }
  mapWheel(e) {
    if (!(e instanceof s9)) {
      console.warn(
        "EventBoundary cannot map a non-wheel event as a wheel event"
      );
      return;
    }
    let t = this.createWheelEvent(e);
    this.dispatchEvent(t), this.freeEvent(t);
  }
  findMountedTarget(e) {
    if (!e) return null;
    let t = e[0];
    for (let r = 1; r < e.length && e[r].parent === t; r++) t = e[r];
    return t;
  }
  createPointerEvent(e, t, r) {
    let i = this.allocateEvent(s7);
    return (
      this.copyPointerData(e, i),
      this.copyMouseData(e, i),
      this.copyData(e, i),
      (i.nativeEvent = e.nativeEvent),
      (i.originalEvent = e),
      (i.target =
        r ?? this.hitTest(i.global.x, i.global.y) ?? this._hitElements[0]),
      "string" == typeof t && (i.type = t),
      i
    );
  }
  createWheelEvent(e) {
    let t = this.allocateEvent(s9);
    return (
      this.copyWheelData(e, t),
      this.copyMouseData(e, t),
      this.copyData(e, t),
      (t.nativeEvent = e.nativeEvent),
      (t.originalEvent = e),
      (t.target = this.hitTest(t.global.x, t.global.y)),
      t
    );
  }
  clonePointerEvent(e, t) {
    let r = this.allocateEvent(s7);
    return (
      (r.nativeEvent = e.nativeEvent),
      (r.originalEvent = e.originalEvent),
      this.copyPointerData(e, r),
      this.copyMouseData(e, r),
      this.copyData(e, r),
      (r.target = e.target),
      (r.path = e.composedPath().slice()),
      (r.type = t ?? r.type),
      r
    );
  }
  copyWheelData(e, t) {
    (t.deltaMode = e.deltaMode),
      (t.deltaX = e.deltaX),
      (t.deltaY = e.deltaY),
      (t.deltaZ = e.deltaZ);
  }
  copyPointerData(e, t) {
    e instanceof s7 &&
      t instanceof s7 &&
      ((t.pointerId = e.pointerId),
      (t.width = e.width),
      (t.height = e.height),
      (t.isPrimary = e.isPrimary),
      (t.pointerType = e.pointerType),
      (t.pressure = e.pressure),
      (t.tangentialPressure = e.tangentialPressure),
      (t.tiltX = e.tiltX),
      (t.tiltY = e.tiltY),
      (t.twist = e.twist));
  }
  copyMouseData(e, t) {
    e instanceof s8 &&
      t instanceof s8 &&
      ((t.altKey = e.altKey),
      (t.button = e.button),
      (t.buttons = e.buttons),
      t.client.copyFrom(e.client),
      (t.ctrlKey = e.ctrlKey),
      (t.metaKey = e.metaKey),
      t.movement.copyFrom(e.movement),
      t.screen.copyFrom(e.screen),
      (t.shiftKey = e.shiftKey),
      t.global.copyFrom(e.global));
  }
  copyData(e, t) {
    (t.isTrusted = e.isTrusted),
      (t.srcElement = e.srcElement),
      (t.timeStamp = performance.now()),
      (t.type = e.type),
      (t.detail = e.detail),
      (t.view = e.view),
      (t.which = e.which),
      t.layer.copyFrom(e.layer),
      t.page.copyFrom(e.page);
  }
  trackingData(e) {
    return (
      this.mappingState.trackingData[e] ||
        (this.mappingState.trackingData[e] = {
          pressTargetsByButton: {},
          clicksByButton: {},
          overTarget: null,
        }),
      this.mappingState.trackingData[e]
    );
  }
  allocateEvent(e) {
    this.eventPool.has(e) || this.eventPool.set(e, []);
    let t = this.eventPool.get(e).pop() || new e(this);
    return (
      (t.eventPhase = t.NONE),
      (t.currentTarget = null),
      (t.path = null),
      (t.target = null),
      t
    );
  }
  freeEvent(e) {
    if (e.manager !== this)
      throw Error(
        "It is illegal to free an event not managed by this EventBoundary!"
      );
    let t = e.constructor;
    this.eventPool.has(t) || this.eventPool.set(t, []),
      this.eventPool.get(t).push(e);
  }
  notifyListeners(e, t) {
    let r = e.currentTarget._events[t];
    if (r && e.currentTarget.isInteractive()) {
      if ("fn" in r)
        r.once && e.currentTarget.removeListener(t, r.fn, void 0, !0),
          r.fn.call(r.context, e);
      else
        for (
          let i = 0, s = r.length;
          i < s && !e.propagationImmediatelyStopped;
          i++
        )
          r[i].once && e.currentTarget.removeListener(t, r[i].fn, void 0, !0),
            r[i].fn.call(r[i].context, e);
    }
  }
}
const ni = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel",
  },
  ns = class e {
    constructor(t) {
      (this.supportsTouchEvents = "ontouchstart" in globalThis),
        (this.supportsPointerEvents = !!globalThis.PointerEvent),
        (this.domElement = null),
        (this.resolution = 1),
        (this.renderer = t),
        (this.rootBoundary = new nr(null)),
        s5.init(this),
        (this.autoPreventDefault = !0),
        (this.eventsAdded = !1),
        (this.rootPointerEvent = new s7(null)),
        (this.rootWheelEvent = new s9(null)),
        (this.cursorStyles = { default: "inherit", pointer: "pointer" }),
        (this.features = new Proxy(
          { ...e.defaultEventFeatures },
          {
            set: (e, t, r) => (
              "globalMove" === t &&
                (this.rootBoundary.enableGlobalMoveEvents = r),
              (e[t] = r),
              !0
            ),
          }
        )),
        (this.onPointerDown = this.onPointerDown.bind(this)),
        (this.onPointerMove = this.onPointerMove.bind(this)),
        (this.onPointerUp = this.onPointerUp.bind(this)),
        (this.onPointerOverOut = this.onPointerOverOut.bind(this)),
        (this.onWheel = this.onWheel.bind(this));
    }
    static get defaultEventMode() {
      return this._defaultEventMode;
    }
    init(t) {
      let { view: r, resolution: i } = this.renderer;
      this.setTargetElement(r),
        (this.resolution = i),
        (e._defaultEventMode = t.eventMode ?? "auto"),
        Object.assign(this.features, t.eventFeatures ?? {}),
        (this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove);
    }
    resolutionChange(e) {
      this.resolution = e;
    }
    destroy() {
      this.setTargetElement(null), (this.renderer = null);
    }
    setCursor(e) {
      e = e || "default";
      let t = !0;
      if (
        (globalThis.OffscreenCanvas &&
          this.domElement instanceof OffscreenCanvas &&
          (t = !1),
        this.currentCursor === e)
      )
        return;
      this.currentCursor = e;
      let r = this.cursorStyles[e];
      if (r)
        switch (typeof r) {
          case "string":
            t && (this.domElement.style.cursor = r);
            break;
          case "function":
            r(e);
            break;
          case "object":
            t && Object.assign(this.domElement.style, r);
        }
      else
        t &&
          "string" == typeof e &&
          !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) &&
          (this.domElement.style.cursor = e);
    }
    get pointer() {
      return this.rootPointerEvent;
    }
    onPointerDown(e) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      let t = this.normalizeToPointerData(e);
      this.autoPreventDefault &&
        t[0].isNormalized &&
        (e.cancelable || !("cancelable" in e)) &&
        e.preventDefault();
      for (let e = 0, r = t.length; e < r; e++) {
        let r = t[e],
          i = this.bootstrapEvent(this.rootPointerEvent, r);
        this.rootBoundary.mapEvent(i);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerMove(e) {
      if (!this.features.move) return;
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        s5.pointerMoved();
      let t = this.normalizeToPointerData(e);
      for (let e = 0, r = t.length; e < r; e++) {
        let r = this.bootstrapEvent(this.rootPointerEvent, t[e]);
        this.rootBoundary.mapEvent(r);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerUp(e) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      let t = e.target;
      e.composedPath &&
        e.composedPath().length > 0 &&
        (t = e.composedPath()[0]);
      let r = t !== this.domElement ? "outside" : "",
        i = this.normalizeToPointerData(e);
      for (let e = 0, t = i.length; e < t; e++) {
        let t = this.bootstrapEvent(this.rootPointerEvent, i[e]);
        (t.type += r), this.rootBoundary.mapEvent(t);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onPointerOverOut(e) {
      if (!this.features.click) return;
      this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
      let t = this.normalizeToPointerData(e);
      for (let e = 0, r = t.length; e < r; e++) {
        let r = this.bootstrapEvent(this.rootPointerEvent, t[e]);
        this.rootBoundary.mapEvent(r);
      }
      this.setCursor(this.rootBoundary.cursor);
    }
    onWheel(e) {
      if (!this.features.wheel) return;
      let t = this.normalizeWheelEvent(e);
      (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered),
        this.rootBoundary.mapEvent(t);
    }
    setTargetElement(e) {
      this.removeEvents(),
        (this.domElement = e),
        (s5.domElement = e),
        this.addEvents();
    }
    addEvents() {
      if (this.eventsAdded || !this.domElement) return;
      s5.addTickerListener();
      let e = this.domElement.style;
      e &&
        (globalThis.navigator.msPointerEnabled
          ? ((e.msContentZooming = "none"), (e.msTouchAction = "none"))
          : this.supportsPointerEvents && (e.touchAction = "none")),
        this.supportsPointerEvents
          ? (globalThis.document.addEventListener(
              "pointermove",
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              "pointerleave",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              "pointerover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener("pointerup", this.onPointerUp, !0))
          : (globalThis.document.addEventListener(
              "mousemove",
              this.onPointerMove,
              !0
            ),
            this.domElement.addEventListener(
              "mousedown",
              this.onPointerDown,
              !0
            ),
            this.domElement.addEventListener(
              "mouseout",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.addEventListener(
              "mouseover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.addEventListener("mouseup", this.onPointerUp, !0),
            this.supportsTouchEvents &&
              (this.domElement.addEventListener(
                "touchstart",
                this.onPointerDown,
                !0
              ),
              this.domElement.addEventListener(
                "touchend",
                this.onPointerUp,
                !0
              ),
              this.domElement.addEventListener(
                "touchmove",
                this.onPointerMove,
                !0
              ))),
        this.domElement.addEventListener("wheel", this.onWheel, {
          passive: !0,
          capture: !0,
        }),
        (this.eventsAdded = !0);
    }
    removeEvents() {
      if (!this.eventsAdded || !this.domElement) return;
      s5.removeTickerListener();
      let e = this.domElement.style;
      globalThis.navigator.msPointerEnabled
        ? ((e.msContentZooming = ""), (e.msTouchAction = ""))
        : this.supportsPointerEvents && (e.touchAction = ""),
        this.supportsPointerEvents
          ? (globalThis.document.removeEventListener(
              "pointermove",
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerleave",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              "pointerover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener("pointerup", this.onPointerUp, !0))
          : (globalThis.document.removeEventListener(
              "mousemove",
              this.onPointerMove,
              !0
            ),
            this.domElement.removeEventListener(
              "mousedown",
              this.onPointerDown,
              !0
            ),
            this.domElement.removeEventListener(
              "mouseout",
              this.onPointerOverOut,
              !0
            ),
            this.domElement.removeEventListener(
              "mouseover",
              this.onPointerOverOut,
              !0
            ),
            globalThis.removeEventListener("mouseup", this.onPointerUp, !0),
            this.supportsTouchEvents &&
              (this.domElement.removeEventListener(
                "touchstart",
                this.onPointerDown,
                !0
              ),
              this.domElement.removeEventListener(
                "touchend",
                this.onPointerUp,
                !0
              ),
              this.domElement.removeEventListener(
                "touchmove",
                this.onPointerMove,
                !0
              ))),
        this.domElement.removeEventListener("wheel", this.onWheel, !0),
        (this.domElement = null),
        (this.eventsAdded = !1);
    }
    mapPositionToPoint(e, t, r) {
      let i = this.domElement.isConnected
          ? this.domElement.getBoundingClientRect()
          : {
              x: 0,
              y: 0,
              width: this.domElement.width,
              height: this.domElement.height,
              left: 0,
              top: 0,
            },
        s = 1 / this.resolution;
      (e.x = (t - i.left) * (this.domElement.width / i.width) * s),
        (e.y = (r - i.top) * (this.domElement.height / i.height) * s);
    }
    normalizeToPointerData(e) {
      let t = [];
      if (this.supportsTouchEvents && e instanceof TouchEvent)
        for (let r = 0, i = e.changedTouches.length; r < i; r++) {
          let i = e.changedTouches[r];
          typeof i.button > "u" && (i.button = 0),
            typeof i.buttons > "u" && (i.buttons = 1),
            typeof i.isPrimary > "u" &&
              (i.isPrimary = 1 === e.touches.length && "touchstart" === e.type),
            typeof i.width > "u" && (i.width = i.radiusX || 1),
            typeof i.height > "u" && (i.height = i.radiusY || 1),
            typeof i.tiltX > "u" && (i.tiltX = 0),
            typeof i.tiltY > "u" && (i.tiltY = 0),
            typeof i.pointerType > "u" && (i.pointerType = "touch"),
            typeof i.pointerId > "u" && (i.pointerId = i.identifier || 0),
            typeof i.pressure > "u" && (i.pressure = i.force || 0.5),
            typeof i.twist > "u" && (i.twist = 0),
            typeof i.tangentialPressure > "u" && (i.tangentialPressure = 0),
            typeof i.layerX > "u" && (i.layerX = i.offsetX = i.clientX),
            typeof i.layerY > "u" && (i.layerY = i.offsetY = i.clientY),
            (i.isNormalized = !0),
            (i.type = e.type),
            t.push(i);
        }
      else
        (!globalThis.MouseEvent ||
          (e instanceof MouseEvent &&
            (!this.supportsPointerEvents ||
              !(e instanceof globalThis.PointerEvent)))) &&
          (typeof e.isPrimary > "u" && (e.isPrimary = !0),
          typeof e.width > "u" && (e.width = 1),
          typeof e.height > "u" && (e.height = 1),
          typeof e.tiltX > "u" && (e.tiltX = 0),
          typeof e.tiltY > "u" && (e.tiltY = 0),
          typeof e.pointerType > "u" && (e.pointerType = "mouse"),
          typeof e.pointerId > "u" && (e.pointerId = 1),
          typeof e.pressure > "u" && (e.pressure = 0.5),
          typeof e.twist > "u" && (e.twist = 0),
          typeof e.tangentialPressure > "u" && (e.tangentialPressure = 0),
          (e.isNormalized = !0)),
          t.push(e);
      return t;
    }
    normalizeWheelEvent(e) {
      let t = this.rootWheelEvent;
      return (
        this.transferMouseData(t, e),
        (t.deltaX = e.deltaX),
        (t.deltaY = e.deltaY),
        (t.deltaZ = e.deltaZ),
        (t.deltaMode = e.deltaMode),
        this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
        t.global.copyFrom(t.screen),
        t.offset.copyFrom(t.screen),
        (t.nativeEvent = e),
        (t.type = e.type),
        t
      );
    }
    bootstrapEvent(e, t) {
      return (
        (e.originalEvent = null),
        (e.nativeEvent = t),
        (e.pointerId = t.pointerId),
        (e.width = t.width),
        (e.height = t.height),
        (e.isPrimary = t.isPrimary),
        (e.pointerType = t.pointerType),
        (e.pressure = t.pressure),
        (e.tangentialPressure = t.tangentialPressure),
        (e.tiltX = t.tiltX),
        (e.tiltY = t.tiltY),
        (e.twist = t.twist),
        this.transferMouseData(e, t),
        this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
        e.global.copyFrom(e.screen),
        e.offset.copyFrom(e.screen),
        (e.isTrusted = t.isTrusted),
        "pointerleave" === e.type && (e.type = "pointerout"),
        e.type.startsWith("mouse") &&
          (e.type = e.type.replace("mouse", "pointer")),
        e.type.startsWith("touch") && (e.type = ni[e.type] || e.type),
        e
      );
    }
    transferMouseData(e, t) {
      (e.isTrusted = t.isTrusted),
        (e.srcElement = t.srcElement),
        (e.timeStamp = performance.now()),
        (e.type = t.type),
        (e.altKey = t.altKey),
        (e.button = t.button),
        (e.buttons = t.buttons),
        (e.client.x = t.clientX),
        (e.client.y = t.clientY),
        (e.ctrlKey = t.ctrlKey),
        (e.metaKey = t.metaKey),
        (e.movement.x = t.movementX),
        (e.movement.y = t.movementY),
        (e.page.x = t.pageX),
        (e.page.y = t.pageY),
        (e.relatedTarget = null),
        (e.shiftKey = t.shiftKey);
    }
  };
function nn(e) {
  return "dynamic" === e || "static" === e;
}
(ns.extension = {
  name: "events",
  type: [rs.RendererSystem, rs.CanvasRendererSystem],
}),
  (ns.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0,
  }),
  ro.add(ns),
  sO.mixin({
    onclick: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onglobalmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onmouseupoutside: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onglobalpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointertap: null,
    onpointerup: null,
    onpointerupoutside: null,
    onrightclick: null,
    onrightdown: null,
    onrightup: null,
    onrightupoutside: null,
    ontap: null,
    ontouchcancel: null,
    ontouchend: null,
    ontouchendoutside: null,
    ontouchmove: null,
    onglobaltouchmove: null,
    ontouchstart: null,
    onwheel: null,
    _internalInteractive: void 0,
    get interactive() {
      return this._internalInteractive ?? nn(ns.defaultEventMode);
    },
    set interactive(value) {
      eP.deprecation(
        "7.2.0",
        "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."
      ),
        (this._internalInteractive = value),
        (this.eventMode = value ? "static" : "auto");
    },
    _internalEventMode: void 0,
    get eventMode() {
      return this._internalEventMode ?? ns.defaultEventMode;
    },
    set eventMode(value) {
      (this._internalInteractive = nn(value)),
        (this._internalEventMode = value);
    },
    isInteractive() {
      return "static" === this.eventMode || "dynamic" === this.eventMode;
    },
    interactiveChildren: !0,
    hitArea: null,
    addEventListener(e, t, r) {
      let i =
          ("boolean" == typeof r && r) || ("object" == typeof r && r.capture),
        s = "function" == typeof t ? void 0 : t;
      (e = i ? `${e}capture` : e),
        (t = "function" == typeof t ? t : t.handleEvent),
        this.on(e, t, s);
    },
    removeEventListener(e, t, r) {
      let i =
          ("boolean" == typeof r && r) || ("object" == typeof r && r.capture),
        s = "function" == typeof t ? void 0 : t;
      (e = i ? `${e}capture` : e),
        (t = "function" == typeof t ? t : t.handleEvent),
        this.off(e, t, s);
    },
    dispatchEvent(e) {
      if (!(e instanceof s6))
        throw Error(
          "DisplayObject cannot propagate events outside of the Federated Events API"
        );
      return (
        (e.defaultPrevented = !1),
        (e.path = null),
        (e.target = this),
        e.manager.dispatchEvent(e),
        !e.defaultPrevented
      );
    },
  }),
  sO.mixin({
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    accessibleType: "button",
    accessiblePointerEvents: "auto",
    accessibleChildren: !0,
    renderId: -1,
  });
class na {
  constructor(e) {
    (this.debug = !1),
      (this._isActive = !1),
      (this._isMobileAccessibility = !1),
      (this.pool = []),
      (this.renderId = 0),
      (this.children = []),
      (this.androidUpdateCount = 0),
      (this.androidUpdateFrequency = 500),
      (this._hookDiv = null),
      (eP.isMobile.tablet || eP.isMobile.phone) && this.createTouchHook();
    let t = document.createElement("div");
    (t.style.width = "100px"),
      (t.style.height = "100px"),
      (t.style.position = "absolute"),
      (t.style.top = "0px"),
      (t.style.left = "0px"),
      (t.style.zIndex = "2"),
      (this.div = t),
      (this.renderer = e),
      (this._onKeyDown = this._onKeyDown.bind(this)),
      (this._onMouseMove = this._onMouseMove.bind(this)),
      globalThis.addEventListener("keydown", this._onKeyDown, !1);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    let e = document.createElement("button");
    (e.style.width = "1px"),
      (e.style.height = "1px"),
      (e.style.position = "absolute"),
      (e.style.top = "-1000px"),
      (e.style.left = "-1000px"),
      (e.style.zIndex = "2"),
      (e.style.backgroundColor = "#FF0000"),
      (e.title = "select to enable accessibility for this content"),
      e.addEventListener("focus", () => {
        (this._isMobileAccessibility = !0),
          this.activate(),
          this.destroyTouchHook();
      }),
      document.body.appendChild(e),
      (this._hookDiv = e);
  }
  destroyTouchHook() {
    this._hookDiv &&
      (document.body.removeChild(this._hookDiv), (this._hookDiv = null));
  }
  activate() {
    this._isActive ||
      ((this._isActive = !0),
      globalThis.document.addEventListener("mousemove", this._onMouseMove, !0),
      globalThis.removeEventListener("keydown", this._onKeyDown, !1),
      this.renderer.on("postrender", this.update, this),
      this.renderer.view.parentNode?.appendChild(this.div));
  }
  deactivate() {
    !this._isActive ||
      this._isMobileAccessibility ||
      ((this._isActive = !1),
      globalThis.document.removeEventListener(
        "mousemove",
        this._onMouseMove,
        !0
      ),
      globalThis.addEventListener("keydown", this._onKeyDown, !1),
      this.renderer.off("postrender", this.update),
      this.div.parentNode?.removeChild(this.div));
  }
  updateAccessibleObjects(e) {
    if (!e.visible || !e.accessibleChildren) return;
    e.accessible &&
      e.isInteractive() &&
      (e._accessibleActive || this.addChild(e), (e.renderId = this.renderId));
    let t = e.children;
    if (t)
      for (let e = 0; e < t.length; e++) this.updateAccessibleObjects(t[e]);
  }
  update() {
    let e = performance.now();
    if (
      (eP.isMobile.android.device && e < this.androidUpdateCount) ||
      ((this.androidUpdateCount = e + this.androidUpdateFrequency),
      !this.renderer.renderingToScreen)
    )
      return;
    this.renderer.lastObjectRendered &&
      this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    let {
        x: t,
        y: r,
        width: i,
        height: s,
      } = this.renderer.view.getBoundingClientRect(),
      { width: n, height: a, resolution: o } = this.renderer,
      l = (i / n) * o,
      h = (s / a) * o,
      u = this.div;
    (u.style.left = `${t}px`),
      (u.style.top = `${r}px`),
      (u.style.width = `${n}px`),
      (u.style.height = `${a}px`);
    for (let e = 0; e < this.children.length; e++) {
      let t = this.children[e];
      if (t.renderId !== this.renderId)
        (t._accessibleActive = !1),
          eP.removeItems(this.children, e, 1),
          this.div.removeChild(t._accessibleDiv),
          this.pool.push(t._accessibleDiv),
          (t._accessibleDiv = null),
          e--;
      else {
        u = t._accessibleDiv;
        let e = t.hitArea,
          r = t.worldTransform;
        t.hitArea
          ? ((u.style.left = `${(r.tx + e.x * r.a) * l}px`),
            (u.style.top = `${(r.ty + e.y * r.d) * h}px`),
            (u.style.width = `${e.width * r.a * l}px`),
            (u.style.height = `${e.height * r.d * h}px`))
          : ((e = t.getBounds()),
            this.capHitArea(e),
            (u.style.left = `${e.x * l}px`),
            (u.style.top = `${e.y * h}px`),
            (u.style.width = `${e.width * l}px`),
            (u.style.height = `${e.height * h}px`),
            u.title !== t.accessibleTitle &&
              null !== t.accessibleTitle &&
              (u.title = t.accessibleTitle),
            u.getAttribute("aria-label") !== t.accessibleHint &&
              null !== t.accessibleHint &&
              u.setAttribute("aria-label", t.accessibleHint)),
          (t.accessibleTitle !== u.title || t.tabIndex !== u.tabIndex) &&
            ((u.title = t.accessibleTitle),
            (u.tabIndex = t.tabIndex),
            this.debug && this.updateDebugHTML(u));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(e) {
    e.innerHTML = `type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`;
  }
  capHitArea(e) {
    e.x < 0 && ((e.width += e.x), (e.x = 0)),
      e.y < 0 && ((e.height += e.y), (e.y = 0));
    let { width: t, height: r } = this.renderer;
    e.x + e.width > t && (e.width = t - e.x),
      e.y + e.height > r && (e.height = r - e.y);
  }
  addChild(e) {
    let t = this.pool.pop();
    t ||
      (((t = document.createElement("button")).style.width = "100px"),
      (t.style.height = "100px"),
      (t.style.backgroundColor = this.debug
        ? "rgba(255,255,255,0.5)"
        : "transparent"),
      (t.style.position = "absolute"),
      (t.style.zIndex = "2"),
      (t.style.borderStyle = "none"),
      navigator.userAgent.toLowerCase().includes("chrome")
        ? t.setAttribute("aria-live", "off")
        : t.setAttribute("aria-live", "polite"),
      navigator.userAgent.match(/rv:.*Gecko\//)
        ? t.setAttribute("aria-relevant", "additions")
        : t.setAttribute("aria-relevant", "text"),
      t.addEventListener("click", this._onClick.bind(this)),
      t.addEventListener("focus", this._onFocus.bind(this)),
      t.addEventListener("focusout", this._onFocusOut.bind(this))),
      (t.style.pointerEvents = e.accessiblePointerEvents),
      (t.type = e.accessibleType),
      e.accessibleTitle && null !== e.accessibleTitle
        ? (t.title = e.accessibleTitle)
        : (e.accessibleHint && null !== e.accessibleHint) ||
          (t.title = `displayObject ${e.tabIndex}`),
      e.accessibleHint &&
        null !== e.accessibleHint &&
        t.setAttribute("aria-label", e.accessibleHint),
      this.debug && this.updateDebugHTML(t),
      (e._accessibleActive = !0),
      (e._accessibleDiv = t),
      (t.displayObject = e),
      this.children.push(e),
      this.div.appendChild(e._accessibleDiv),
      (e._accessibleDiv.tabIndex = e.tabIndex);
  }
  _dispatchEvent(e, t) {
    let { displayObject: r } = e.target,
      i = this.renderer.events.rootBoundary,
      s = Object.assign(new s6(i), { target: r });
    (i.rootTarget = this.renderer.lastObjectRendered),
      t.forEach((e) => i.dispatchEvent(s, e));
  }
  _onClick(e) {
    this._dispatchEvent(e, ["click", "pointertap", "tap"]);
  }
  _onFocus(e) {
    e.target.getAttribute("aria-live") ||
      e.target.setAttribute("aria-live", "assertive"),
      this._dispatchEvent(e, ["mouseover"]);
  }
  _onFocusOut(e) {
    e.target.getAttribute("aria-live") ||
      e.target.setAttribute("aria-live", "polite"),
      this._dispatchEvent(e, ["mouseout"]);
  }
  _onKeyDown(e) {
    9 === e.keyCode && this.activate();
  }
  _onMouseMove(e) {
    (0 === e.movementX && 0 === e.movementY) || this.deactivate();
  }
  destroy() {
    this.destroyTouchHook(),
      (this.div = null),
      globalThis.document.removeEventListener(
        "mousemove",
        this._onMouseMove,
        !0
      ),
      globalThis.removeEventListener("keydown", this._onKeyDown),
      (this.pool = null),
      (this.children = null),
      (this.renderer = null);
  }
}
(na.extension = {
  name: "accessibility",
  type: [rs.RendererPlugin, rs.CanvasRendererPlugin],
}),
  ro.add(na);
const no = class e {
  constructor(t) {
    (this.stage = new sG()),
      (t = Object.assign({ forceCanvas: !1 }, t)),
      (this.renderer = (function (e) {
        for (let t of sb) if (t.test(e)) return new t(e);
        throw Error("Unable to auto-detect a suitable renderer.");
      })(t)),
      e._plugins.forEach((e) => {
        e.init.call(this, t);
      });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    return this.renderer?.view;
  }
  get screen() {
    return this.renderer?.screen;
  }
  destroy(t, r) {
    let i = e._plugins.slice(0);
    i.reverse(),
      i.forEach((e) => {
        e.destroy.call(this);
      }),
      this.stage.destroy(r),
      (this.stage = null),
      this.renderer.destroy(t),
      (this.renderer = null);
  }
};
(no._plugins = []), ro.handleByList(rs.Application, no._plugins);
class nl {
  static init(e) {
    Object.defineProperty(this, "resizeTo", {
      set(e) {
        globalThis.removeEventListener("resize", this.queueResize),
          (this._resizeTo = e),
          e &&
            (globalThis.addEventListener("resize", this.queueResize),
            this.resize());
      },
      get() {
        return this._resizeTo;
      },
    }),
      (this.queueResize = () => {
        this._resizeTo &&
          (this.cancelResize(),
          (this._resizeId = requestAnimationFrame(() => this.resize())));
      }),
      (this.cancelResize = () => {
        this._resizeId &&
          (cancelAnimationFrame(this._resizeId), (this._resizeId = null));
      }),
      (this.resize = () => {
        let e, t;
        if (this._resizeTo) {
          if ((this.cancelResize(), this._resizeTo === globalThis.window))
            (e = globalThis.innerWidth), (t = globalThis.innerHeight);
          else {
            let { clientWidth: r, clientHeight: i } = this._resizeTo;
            (e = r), (t = i);
          }
          this.renderer.resize(e, t), this.render();
        }
      }),
      (this._resizeId = null),
      (this._resizeTo = null),
      (this.resizeTo = e.resizeTo || null);
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize),
      this.cancelResize(),
      (this.cancelResize = null),
      (this.queueResize = null),
      (this.resizeTo = null),
      (this.resize = null);
  }
}
(nl.extension = rs.Application), ro.add(nl);
const nh = {
  loader: rs.LoadParser,
  resolver: rs.ResolveParser,
  cache: rs.CacheParser,
  detection: rs.DetectionParser,
};
ro.handle(
  rs.Asset,
  (e) => {
    let t = e.ref;
    Object.entries(nh)
      .filter(([e]) => !!t[e])
      .forEach(([e, r]) =>
        ro.add(Object.assign(t[e], { extension: t[e].extension ?? r }))
      );
  },
  (e) => {
    let t = e.ref;
    Object.keys(nh)
      .filter((e) => !!t[e])
      .forEach((e) => ro.remove(t[e]));
  }
);
class nu {
  constructor(e, t = !1) {
    (this._loader = e),
      (this._assetList = []),
      (this._isLoading = !1),
      (this._maxConcurrent = 1),
      (this.verbose = t);
  }
  add(e) {
    e.forEach((e) => {
      this._assetList.push(e);
    }),
      this.verbose &&
        console.log("[BackgroundLoader] assets: ", this._assetList),
      this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = !0;
      let e = [],
        t = Math.min(this._assetList.length, this._maxConcurrent);
      for (let r = 0; r < t; r++) e.push(this._assetList.pop());
      await this._loader.load(e), (this._isLoading = !1), this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(e) {
    this._isActive !== e &&
      ((this._isActive = e), e && !this._isLoading && this._next());
  }
}
function nd(e, t) {
  if (Array.isArray(t)) {
    for (let r of t) if (e.startsWith(`data:${r}`)) return !0;
    return !1;
  }
  return e.startsWith(`data:${t}`);
}
function nc(e, t) {
  let r = e.split("?")[0],
    i = eP.path.extname(r).toLowerCase();
  return Array.isArray(t) ? t.includes(i) : i === t;
}
const np = (e, t, r = !1) => (
    Array.isArray(e) || (e = [e]),
    t ? e.map((e) => ("string" == typeof e || r ? t(e) : e)) : e
  ),
  nf = (e, t) => {
    let r = t.split("?")[1];
    return r && (e += `?${r}`), e;
  },
  nm = (e) => !Array.isArray(e),
  ng = new (class {
    constructor() {
      (this._parsers = []),
        (this._cache = new Map()),
        (this._cacheMap = new Map());
    }
    reset() {
      this._cacheMap.clear(), this._cache.clear();
    }
    has(e) {
      return this._cache.has(e);
    }
    get(e) {
      let t = this._cache.get(e);
      return (
        t || console.warn(`[Assets] Asset id ${e} was not found in the Cache`),
        t
      );
    }
    set(e, t) {
      let r;
      let i = np(e);
      for (let e = 0; e < this.parsers.length; e++) {
        let s = this.parsers[e];
        if (s.test(t)) {
          r = s.getCacheableAssets(i, t);
          break;
        }
      }
      r ||
        ((r = {}),
        i.forEach((e) => {
          r[e] = t;
        }));
      let s = Object.keys(r),
        n = { cacheKeys: s, keys: i };
      i.forEach((e) => {
        this._cacheMap.set(e, n);
      }),
        s.forEach((e) => {
          this._cache.has(e) &&
            this._cache.get(e) !== t &&
            console.warn("[Cache] already has key:", e),
            this._cache.set(e, r[e]);
        }),
        t instanceof iM &&
          i.forEach((e) => {
            t.baseTexture !== iM.EMPTY.baseTexture &&
              r_.addToCache(t.baseTexture, e),
              iM.addToCache(t, e);
          });
    }
    remove(e) {
      if (!this._cacheMap.has(e)) {
        console.warn(`[Assets] Asset id ${e} was not found in the Cache`);
        return;
      }
      let t = this._cacheMap.get(e);
      t.cacheKeys.forEach((e) => {
        this._cache.delete(e);
      }),
        t.keys.forEach((e) => {
          this._cacheMap.delete(e);
        });
    }
    get parsers() {
      return this._parsers;
    }
  })();
class ny {
  constructor() {
    (this._parsers = []),
      (this._parsersValidated = !1),
      (this.parsers = new Proxy(this._parsers, {
        set: (e, t, r) => ((this._parsersValidated = !1), (e[t] = r), !0),
      })),
      (this.promiseCache = {});
  }
  reset() {
    (this._parsersValidated = !1), (this.promiseCache = {});
  }
  _getLoadPromiseAndParser(e, t) {
    let r = { promise: null, parser: null };
    return (
      (r.promise = (async () => {
        let i = null,
          s = null;
        if (
          (t.loadParser &&
            ((s = this._parserHash[t.loadParser]) ||
              console.warn(
                `[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`
              )),
          !s)
        ) {
          for (let r = 0; r < this.parsers.length; r++) {
            let i = this.parsers[r];
            if (i.load && i.test?.(e, t, this)) {
              s = i;
              break;
            }
          }
          if (!s)
            return (
              console.warn(
                `[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`
              ),
              null
            );
        }
        (i = await s.load(e, t, this)), (r.parser = s);
        for (let e = 0; e < this.parsers.length; e++) {
          let s = this.parsers[e];
          s.parse &&
            s.parse &&
            (await s.testParse?.(i, t, this)) &&
            ((i = (await s.parse(i, t, this)) || i), (r.parser = s));
        }
        return i;
      })()),
      r
    );
  }
  async load(e, t) {
    this._parsersValidated || this._validateParsers();
    let r = 0,
      i = {},
      s = nm(e),
      n = np(e, (e) => ({ alias: [e], src: e })),
      a = n.length,
      o = n.map(async (e) => {
        let s = eP.path.toAbsolute(e.src);
        if (!i[e.src])
          try {
            this.promiseCache[s] ||
              (this.promiseCache[s] = this._getLoadPromiseAndParser(s, e)),
              (i[e.src] = await this.promiseCache[s].promise),
              t && t(++r / a);
          } catch (t) {
            throw (
              (delete this.promiseCache[s],
              delete i[e.src],
              Error(`[Loader.load] Failed to load ${s}.
${t}`))
            );
          }
      });
    return await Promise.all(o), s ? i[n[0].src] : i;
  }
  async unload(e) {
    let t = np(e, (e) => ({ alias: [e], src: e })).map(async (e) => {
      let t = eP.path.toAbsolute(e.src),
        r = this.promiseCache[t];
      if (r) {
        let i = await r.promise;
        delete this.promiseCache[t], r.parser?.unload?.(i, e, this);
      }
    });
    await Promise.all(t);
  }
  _validateParsers() {
    (this._parsersValidated = !0),
      (this._parserHash = this._parsers
        .filter((e) => e.name)
        .reduce(
          (e, t) => (
            e[t.name] &&
              console.warn(`[Assets] loadParser name conflict "${t.name}"`),
            { ...e, [t.name]: t }
          ),
          {}
        ));
  }
}
var n_ =
  (((M = n_ || {})[(M.Low = 0)] = "Low"),
  (M[(M.Normal = 1)] = "Normal"),
  (M[(M.High = 2)] = "High"),
  M);
const nx = {
  extension: { type: rs.LoadParser, priority: n_.Low },
  name: "loadJson",
  test: (e) => nd(e, "application/json") || nc(e, ".json"),
  load: async (e) => await (await ed.ADAPTER.fetch(e)).json(),
};
ro.add(nx);
const nv = {
  name: "loadTxt",
  extension: { type: rs.LoadParser, priority: n_.Low },
  test: (e) => nd(e, "text/plain") || nc(e, ".txt"),
  load: async (e) => await (await ed.ADAPTER.fetch(e)).text(),
};
ro.add(nv);
const nb = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  nE = [".ttf", ".otf", ".woff", ".woff2"],
  nT = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
  nA = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i,
  nw = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/,
  nS = {
    extension: { type: rs.LoadParser, priority: n_.Low },
    name: "loadWebFont",
    test: (e) => nd(e, nT) || nc(e, nE),
    async load(e, t) {
      let r = ed.ADAPTER.getFontFaceSet();
      if (r) {
        let i = [],
          s =
            t.data?.family ??
            (function (e) {
              let t = eP.path.extname(e),
                r = eP.path
                  .basename(e, t)
                  .replace(/(-|_)/g, " ")
                  .toLowerCase()
                  .split(" ")
                  .map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
                i = r.length > 0;
              for (let e of r)
                if (!e.match(nA)) {
                  i = !1;
                  break;
                }
              let s = r.join(" ");
              return i || (s = `"${s.replace(/[\\"]/g, "\\$&")}"`), s;
            })(e),
          n = t.data?.weights?.filter((e) => nb.includes(e)) ?? ["normal"],
          a = t.data ?? {};
        for (let t = 0; t < n.length; t++) {
          let o = n[t],
            l = new FontFace(s, `url(${nw.test(e) ? e : encodeURI(e)})`, {
              ...a,
              weight: o,
            });
          await l.load(), r.add(l), i.push(l);
        }
        return 1 === i.length ? i[0] : i;
      }
      return (
        console.warn(
          "[loadWebFont] FontFace API is not supported. Skipping loading font"
        ),
        null
      );
    },
    unload(e) {
      (Array.isArray(e) ? e : [e]).forEach((e) =>
        ed.ADAPTER.getFontFaceSet().delete(e)
      );
    },
  };
ro.add(nS);
let nR = 0,
  nI;
const nC = {
    id: "checkImageBitmap",
    code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `,
  },
  nP = {
    id: "loadImageBitmap",
    code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`,
  },
  nk = new (class {
    constructor() {
      (this._initialized = !1),
        (this._createdWorkers = 0),
        (this.workerPool = []),
        (this.queue = []),
        (this.resolveHash = {});
    }
    isImageBitmapSupported() {
      return (
        void 0 !== this._isImageBitmapSupported ||
          (this._isImageBitmapSupported = new Promise((e) => {
            let t = URL.createObjectURL(
                new Blob([nC.code], { type: "application/javascript" })
              ),
              r = new Worker(t);
            r.addEventListener("message", (i) => {
              r.terminate(), URL.revokeObjectURL(t), e(i.data);
            });
          })),
        this._isImageBitmapSupported
      );
    }
    loadImageBitmap(e) {
      return this._run("loadImageBitmap", [e]);
    }
    async _initWorkers() {
      this._initialized || (this._initialized = !0);
    }
    getWorker() {
      void 0 === nI && (nI = navigator.hardwareConcurrency || 4);
      let e = this.workerPool.pop();
      return (
        !e &&
          this._createdWorkers < nI &&
          (s ||
            (s = URL.createObjectURL(
              new Blob([nP.code], { type: "application/javascript" })
            )),
          this._createdWorkers++,
          (e = new Worker(s)).addEventListener("message", (e) => {
            this.complete(e.data), this.returnWorker(e.target), this.next();
          })),
        e
      );
    }
    returnWorker(e) {
      this.workerPool.push(e);
    }
    complete(e) {
      void 0 !== e.error
        ? this.resolveHash[e.uuid].reject(e.error)
        : this.resolveHash[e.uuid].resolve(e.data),
        (this.resolveHash[e.uuid] = null);
    }
    async _run(e, t) {
      await this._initWorkers();
      let r = new Promise((r, i) => {
        this.queue.push({ id: e, arguments: t, resolve: r, reject: i });
      });
      return this.next(), r;
    }
    next() {
      if (!this.queue.length) return;
      let e = this.getWorker();
      if (!e) return;
      let t = this.queue.pop(),
        r = t.id;
      (this.resolveHash[nR] = { resolve: t.resolve, reject: t.reject }),
        e.postMessage({ data: t.arguments, uuid: nR++, id: r });
    }
  })();
function nM(e, t, r) {
  e.resource.internal = !0;
  let i = new iM(e),
    s = () => {
      delete t.promiseCache[r], ng.has(r) && ng.remove(r);
    };
  return (
    i.baseTexture.once("destroyed", () => {
      r in t.promiseCache &&
        (console.warn(
          "[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."
        ),
        s());
    }),
    i.once("destroyed", () => {
      e.destroyed ||
        (console.warn(
          "[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."
        ),
        s());
    }),
    i
  );
}
const nD = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
  nB = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function nO(e) {
  let t = await ed.ADAPTER.fetch(e);
  if (!t.ok)
    throw Error(
      `[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`
    );
  let r = await t.blob();
  return await createImageBitmap(r);
}
const nF = {
  name: "loadTextures",
  extension: { type: rs.LoadParser, priority: n_.High },
  config: {
    preferWorkers: !0,
    preferCreateImageBitmap: !0,
    crossOrigin: "anonymous",
  },
  test: (e) => nd(e, nB) || nc(e, nD),
  async load(e, t, r) {
    let i;
    let s = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
    i = s
      ? this.config.preferWorkers && (await nk.isImageBitmapSupported())
        ? await nk.loadImageBitmap(e)
        : await nO(e)
      : await new Promise((t, r) => {
          let i = new Image();
          (i.crossOrigin = this.config.crossOrigin),
            (i.src = e),
            i.complete
              ? t(i)
              : ((i.onload = () => t(i)), (i.onerror = (e) => r(e)));
        });
    let n = { ...t.data };
    n.resolution ?? (n.resolution = eP.getResolutionOfUrl(e)),
      s &&
        n.resourceOptions?.ownsImageBitmap === void 0 &&
        ((n.resourceOptions = { ...n.resourceOptions }),
        (n.resourceOptions.ownsImageBitmap = !0));
    let a = new r_(i, n);
    return (a.resource.src = e), nM(a, r, e);
  },
  unload(e) {
    e.destroy(!0);
  },
};
ro.add(nF);
const nL = {
  extension: { type: rs.LoadParser, priority: n_.High },
  name: "loadSVG",
  test: (e) => nd(e, "image/svg+xml") || nc(e, ".svg"),
  testParse: async (e) => sM.test(e),
  async parse(e, t, r) {
    let i = new sM(e, t?.data?.resourceOptions);
    await i.load();
    let s = new r_(i, { resolution: eP.getResolutionOfUrl(e), ...t?.data });
    return (s.resource.src = t.src), nM(s, r, t.src);
  },
  load: async (e, t) => (await ed.ADAPTER.fetch(e)).text(),
  unload: nF.unload,
};
ro.add(nL);
const nN = [".mp4", ".m4v", ".webm", ".ogv"],
  nU = ["video/mp4", "video/webm", "video/ogg"],
  nG = {
    name: "loadVideo",
    extension: { type: rs.LoadParser, priority: n_.High },
    config: { defaultAutoPlay: !0 },
    test: (e) => nd(e, nU) || nc(e, nN),
    async load(e, t, r) {
      let i;
      let s = await (await ed.ADAPTER.fetch(e)).blob(),
        n = URL.createObjectURL(s);
      try {
        let s = {
            autoPlay: this.config.defaultAutoPlay,
            ...t?.data?.resourceOptions,
          },
          a = new sD(n, s);
        await a.load();
        let o = new r_(a, {
          alphaMode: await eP.detectVideoAlphaMode(),
          resolution: eP.getResolutionOfUrl(e),
          ...t?.data,
        });
        (o.resource.src = e),
          (i = nM(o, r, e)).baseTexture.once("destroyed", () => {
            URL.revokeObjectURL(n);
          });
      } catch (e) {
        throw (URL.revokeObjectURL(n), e);
      }
      return i;
    },
    unload(e) {
      e.destroy(!0);
    },
  };
ro.add(nG);
class nH {
  constructor() {
    (this._defaultBundleIdentifierOptions = {
      connector: "-",
      createBundleAssetId: (e, t) => `${e}${this._bundleIdConnector}${t}`,
      extractAssetIdFromBundle: (e, t) =>
        t.replace(`${e}${this._bundleIdConnector}`, ""),
    }),
      (this._bundleIdConnector =
        this._defaultBundleIdentifierOptions.connector),
      (this._createBundleAssetId =
        this._defaultBundleIdentifierOptions.createBundleAssetId),
      (this._extractAssetIdFromBundle =
        this._defaultBundleIdentifierOptions.extractAssetIdFromBundle),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._parsers = []),
      (this._resolverHash = {}),
      (this._bundles = {});
  }
  setBundleIdentifier(e) {
    if (
      ((this._bundleIdConnector = e.connector ?? this._bundleIdConnector),
      (this._createBundleAssetId =
        e.createBundleAssetId ?? this._createBundleAssetId),
      (this._extractAssetIdFromBundle =
        e.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle),
      "bar" !==
        this._extractAssetIdFromBundle(
          "foo",
          this._createBundleAssetId("foo", "bar")
        ))
    )
      throw Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  prefer(...e) {
    e.forEach((e) => {
      this._preferredOrder.push(e),
        e.priority || (e.priority = Object.keys(e.params));
    }),
      (this._resolverHash = {});
  }
  set basePath(e) {
    this._basePath = e;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(e) {
    this._rootPath = e;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
      (this._assetMap = {}),
      (this._preferredOrder = []),
      (this._resolverHash = {}),
      (this._rootPath = null),
      (this._basePath = null),
      (this._manifest = null),
      (this._bundles = {}),
      (this._defaultSearchParams = null);
  }
  setDefaultSearchParams(e) {
    "string" == typeof e
      ? (this._defaultSearchParams = e)
      : (this._defaultSearchParams = Object.keys(e)
          .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
          .join("&"));
  }
  getAlias(e) {
    let { alias: t, name: r, src: i, srcs: s } = e;
    return np(
      t || r || i || s,
      (e) =>
        "string" == typeof e
          ? e
          : Array.isArray(e)
          ? e.map((e) => e?.src ?? e?.srcs ?? e)
          : e?.src || e?.srcs
          ? e.src ?? e.srcs
          : e,
      !0
    );
  }
  addManifest(e) {
    this._manifest &&
      console.warn(
        "[Resolver] Manifest already exists, this will be overwritten"
      ),
      (this._manifest = e),
      e.bundles.forEach((e) => {
        this.addBundle(e.name, e.assets);
      });
  }
  addBundle(e, t) {
    let r = [];
    Array.isArray(t)
      ? t.forEach((t) => {
          let i;
          let s = t.src ?? t.srcs,
            n = t.alias ?? t.name;
          if ("string" == typeof n) {
            let t = this._createBundleAssetId(e, n);
            r.push(t), (i = [n, t]);
          } else {
            let t = n.map((t) => this._createBundleAssetId(e, t));
            r.push(...t), (i = [...n, ...t]);
          }
          this.add({ ...t, alias: i, src: s });
        })
      : Object.keys(t).forEach((i) => {
          let s = [i, this._createBundleAssetId(e, i)];
          if ("string" == typeof t[i]) this.add({ alias: s, src: t[i] });
          else if (Array.isArray(t[i])) this.add({ alias: s, src: t[i] });
          else {
            let e = t[i],
              r = e.src ?? e.srcs;
            this.add({ ...e, alias: s, src: Array.isArray(r) ? r : [r] });
          }
          r.push(...s);
        }),
      (this._bundles[e] = r);
  }
  add(e, t, r, i, s) {
    let n;
    let a = [];
    "string" == typeof e || (Array.isArray(e) && "string" == typeof e[0])
      ? (eP.deprecation(
          "7.2.0",
          `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`
        ),
        a.push({ alias: e, src: t, data: r, format: i, loadParser: s }))
      : Array.isArray(e)
      ? a.push(...e)
      : a.push(e),
      (n = (e) => {
        this.hasKey(e) &&
          console.warn(`[Resolver] already has key: ${e} overwriting`);
      }),
      np(a).forEach((e) => {
        let { src: t, srcs: r } = e,
          { data: i, format: s, loadParser: a } = e,
          o = np(t || r).map((e) =>
            "string" == typeof e
              ? (function (e) {
                  let t = e.match(/\{(.*?)\}/g),
                    r = [];
                  if (t) {
                    let i = [];
                    t.forEach((e) => {
                      let t = e.substring(1, e.length - 1).split(",");
                      i.push(t);
                    }),
                      (function e(t, r, i, s, n) {
                        let a = r[i];
                        for (let o = 0; o < a.length; o++) {
                          let l = a[o];
                          i < r.length - 1
                            ? e(t.replace(s[i], l), r, i + 1, s, n)
                            : n.push(t.replace(s[i], l));
                        }
                      })(e, i, 0, t, r);
                  } else r.push(e);
                  return r;
                })(e)
              : Array.isArray(e)
              ? e
              : [e]
          ),
          l = this.getAlias(e);
        Array.isArray(l) ? l.forEach(n) : n(l);
        let h = [];
        o.forEach((e) => {
          e.forEach((e) => {
            let t = {};
            if ("object" != typeof e) {
              t.src = e;
              for (let r = 0; r < this._parsers.length; r++) {
                let i = this._parsers[r];
                if (i.test(e)) {
                  t = i.parse(e);
                  break;
                }
              }
            } else
              (i = e.data ?? i),
                (s = e.format ?? s),
                (a = e.loadParser ?? a),
                (t = { ...t, ...e });
            if (!l)
              throw Error(
                `[Resolver] alias is undefined for this asset: ${t.src}`
              );
            (t = this.buildResolvedAsset(t, {
              aliases: l,
              data: i,
              format: s,
              loadParser: a,
            })),
              h.push(t);
          });
        }),
          l.forEach((e) => {
            this._assetMap[e] = h;
          });
      });
  }
  resolveBundle(e) {
    let t = nm(e);
    e = np(e);
    let r = {};
    return (
      e.forEach((e) => {
        let t = this._bundles[e];
        if (t) {
          let i = this.resolve(t),
            s = {};
          for (let t in i) {
            let r = i[t];
            s[this._extractAssetIdFromBundle(e, t)] = r;
          }
          r[e] = s;
        }
      }),
      t ? r[e[0]] : r
    );
  }
  resolveUrl(e) {
    let t = this.resolve(e);
    if ("string" != typeof e) {
      let e = {};
      for (let r in t) e[r] = t[r].src;
      return e;
    }
    return t.src;
  }
  resolve(e) {
    let t = nm(e);
    e = np(e);
    let r = {};
    return (
      e.forEach((e) => {
        if (!this._resolverHash[e]) {
          if (this._assetMap[e]) {
            let t = this._assetMap[e],
              r = t[0],
              i = this._getPreferredOrder(t);
            i?.priority.forEach((e) => {
              i.params[e].forEach((r) => {
                let i = t.filter((t) => !!t[e] && t[e] === r);
                i.length && (t = i);
              });
            }),
              (this._resolverHash[e] = t[0] ?? r);
          } else
            this._resolverHash[e] = this.buildResolvedAsset(
              { alias: [e], src: e },
              {}
            );
        }
        r[e] = this._resolverHash[e];
      }),
      t ? r[e[0]] : r
    );
  }
  hasKey(e) {
    return !!this._assetMap[e];
  }
  hasBundle(e) {
    return !!this._bundles[e];
  }
  _getPreferredOrder(e) {
    for (let t = 0; t < e.length; t++) {
      let t = e[0],
        r = this._preferredOrder.find((e) =>
          e.params.format.includes(t.format)
        );
      if (r) return r;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(e) {
    if (!this._defaultSearchParams) return e;
    let t = /\?/.test(e) ? "&" : "?";
    return `${e}${t}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(e, t) {
    let { aliases: r, data: i, loadParser: s, format: n } = t;
    return (
      (this._basePath || this._rootPath) &&
        (e.src = eP.path.toAbsolute(e.src, this._basePath, this._rootPath)),
      (e.alias = r ?? e.alias ?? [e.src]),
      (e.src = this._appendDefaultSearchParams(e.src)),
      (e.data = { ...(i || {}), ...e.data }),
      (e.loadParser = s ?? e.loadParser),
      (e.format = n ?? eP.path.extname(e.src).slice(1)),
      (e.srcs = e.src),
      (e.name = e.alias),
      e
    );
  }
}
const nz = new (class {
  constructor() {
    (this._detections = []),
      (this._initialized = !1),
      (this.resolver = new nH()),
      (this.loader = new ny()),
      (this.cache = ng),
      (this._backgroundLoader = new nu(this.loader)),
      (this._backgroundLoader.active = !0),
      this.reset();
  }
  async init(e = {}) {
    if (this._initialized) {
      console.warn(
        "[Assets]AssetManager already initialized, did you load before calling this Assets.init()?"
      );
      return;
    }
    if (
      ((this._initialized = !0),
      e.defaultSearchParams &&
        this.resolver.setDefaultSearchParams(e.defaultSearchParams),
      e.basePath && (this.resolver.basePath = e.basePath),
      e.bundleIdentifier &&
        this.resolver.setBundleIdentifier(e.bundleIdentifier),
      e.manifest)
    ) {
      let t = e.manifest;
      "string" == typeof t && (t = await this.load(t)),
        this.resolver.addManifest(t);
    }
    let t = e.texturePreference?.resolution ?? 1,
      r = await this._detectFormats({
        preferredFormats: e.texturePreference?.format,
        skipDetections: e.skipDetections,
        detections: this._detections,
      });
    this.resolver.prefer({
      params: { format: r, resolution: "number" == typeof t ? [t] : t },
    }),
      e.preferences && this.setPreferences(e.preferences);
  }
  add(e, t, r, i, s) {
    this.resolver.add(e, t, r, i, s);
  }
  async load(e, t) {
    this._initialized || (await this.init());
    let r = nm(e),
      i = np(e).map((e) => {
        if ("string" != typeof e) {
          let t = this.resolver.getAlias(e);
          return (
            t.some((e) => !this.resolver.hasKey(e)) && this.add(e),
            Array.isArray(t) ? t[0] : t
          );
        }
        return this.resolver.hasKey(e) || this.add({ alias: e, src: e }), e;
      }),
      s = this.resolver.resolve(i),
      n = await this._mapLoadToResolve(s, t);
    return r ? n[i[0]] : n;
  }
  addBundle(e, t) {
    this.resolver.addBundle(e, t);
  }
  async loadBundle(e, t) {
    this._initialized || (await this.init());
    let r = !1;
    "string" == typeof e && ((r = !0), (e = [e]));
    let i = this.resolver.resolveBundle(e),
      s = {},
      n = Object.keys(i),
      a = 0,
      o = 0,
      l = () => {
        t?.(++a / o);
      },
      h = n.map((e) => {
        let t = i[e];
        return (
          (o += Object.keys(t).length),
          this._mapLoadToResolve(t, l).then((t) => {
            s[e] = t;
          })
        );
      });
    return await Promise.all(h), r ? s[e[0]] : s;
  }
  async backgroundLoad(e) {
    this._initialized || (await this.init()), "string" == typeof e && (e = [e]);
    let t = this.resolver.resolve(e);
    this._backgroundLoader.add(Object.values(t));
  }
  async backgroundLoadBundle(e) {
    this._initialized || (await this.init()),
      "string" == typeof e && (e = [e]),
      Object.values(this.resolver.resolveBundle(e)).forEach((e) => {
        this._backgroundLoader.add(Object.values(e));
      });
  }
  reset() {
    this.resolver.reset(),
      this.loader.reset(),
      this.cache.reset(),
      (this._initialized = !1);
  }
  get(e) {
    if ("string" == typeof e) return ng.get(e);
    let t = {};
    for (let r = 0; r < e.length; r++) t[r] = ng.get(e[r]);
    return t;
  }
  async _mapLoadToResolve(e, t) {
    let r = Object.values(e),
      i = Object.keys(e);
    this._backgroundLoader.active = !1;
    let s = await this.loader.load(r, t);
    this._backgroundLoader.active = !0;
    let n = {};
    return (
      r.forEach((e, t) => {
        let r = s[e.src],
          a = [e.src];
        e.alias && a.push(...e.alias), (n[i[t]] = r), ng.set(a, r);
      }),
      n
    );
  }
  async unload(e) {
    this._initialized || (await this.init());
    let t = np(e).map((e) => ("string" != typeof e ? e.src : e)),
      r = this.resolver.resolve(t);
    await this._unloadFromResolved(r);
  }
  async unloadBundle(e) {
    this._initialized || (await this.init()), (e = np(e));
    let t = this.resolver.resolveBundle(e),
      r = Object.keys(t).map((e) => this._unloadFromResolved(t[e]));
    await Promise.all(r);
  }
  async _unloadFromResolved(e) {
    let t = Object.values(e);
    t.forEach((e) => {
      ng.remove(e.src);
    }),
      await this.loader.unload(t);
  }
  async _detectFormats(e) {
    let t = [];
    for (let r of (e.preferredFormats &&
      (t = Array.isArray(e.preferredFormats)
        ? e.preferredFormats
        : [e.preferredFormats]),
    e.detections))
      e.skipDetections || (await r.test())
        ? (t = await r.add(t))
        : e.skipDetections || (t = await r.remove(t));
    return (t = t.filter((e, r) => t.indexOf(e) === r));
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return nF.config.preferWorkers;
  }
  set preferWorkers(e) {
    eP.deprecation(
      "7.2.0",
      "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."
    ),
      this.setPreferences({ preferWorkers: e });
  }
  setPreferences(e) {
    this.loader.parsers.forEach((t) => {
      t.config &&
        Object.keys(t.config)
          .filter((t) => t in e)
          .forEach((r) => {
            t.config[r] = e[r];
          });
    });
  }
})();
ro.handleByList(rs.LoadParser, nz.loader.parsers)
  .handleByList(rs.ResolveParser, nz.resolver.parsers)
  .handleByList(rs.CacheParser, nz.cache.parsers)
  .handleByList(rs.DetectionParser, nz.detections);
const nj = {
  extension: rs.CacheParser,
  test: (e) => Array.isArray(e) && e.every((e) => e instanceof iM),
  getCacheableAssets: (e, t) => {
    let r = {};
    return (
      e.forEach((e) => {
        t.forEach((t, i) => {
          r[e + (0 === i ? "" : i + 1)] = t;
        });
      }),
      r
    );
  },
};
async function n$(e) {
  if ("Image" in globalThis)
    return new Promise((t) => {
      let r = new Image();
      (r.onload = () => {
        t(!0);
      }),
        (r.onerror = () => {
          t(!1);
        }),
        (r.src = e);
    });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      let t = await (await fetch(e)).blob();
      await createImageBitmap(t);
    } catch {
      return !1;
    }
    return !0;
  }
  return !1;
}
ro.add(nj);
const nX = {
  extension: { type: rs.DetectionParser, priority: 1 },
  test: async () =>
    n$(
      "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
    ),
  add: async (e) => [...e, "avif"],
  remove: async (e) => e.filter((e) => "avif" !== e),
};
ro.add(nX);
const nV = {
  extension: { type: rs.DetectionParser, priority: 0 },
  test: async () =>
    n$(
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    ),
  add: async (e) => [...e, "webp"],
  remove: async (e) => e.filter((e) => "webp" !== e),
};
ro.add(nV);
const nW = ["png", "jpg", "jpeg"],
  nY = {
    extension: { type: rs.DetectionParser, priority: -1 },
    test: () => Promise.resolve(!0),
    add: async (e) => [...e, ...nW],
    remove: async (e) => e.filter((e) => !nW.includes(e)),
  };
ro.add(nY);
const nq =
  "WorkerGlobalScope" in globalThis &&
  globalThis instanceof globalThis.WorkerGlobalScope;
function nZ(e) {
  return !nq && "" !== document.createElement("video").canPlayType(e);
}
const nK = {
  extension: { type: rs.DetectionParser, priority: 0 },
  test: async () => nZ("video/webm"),
  add: async (e) => [...e, "webm"],
  remove: async (e) => e.filter((e) => "webm" !== e),
};
ro.add(nK);
const nQ = {
  extension: { type: rs.DetectionParser, priority: 0 },
  test: async () => nZ("video/mp4"),
  add: async (e) => [...e, "mp4", "m4v"],
  remove: async (e) => e.filter((e) => "mp4" !== e && "m4v" !== e),
};
ro.add(nQ);
const nJ = {
  extension: { type: rs.DetectionParser, priority: 0 },
  test: async () => nZ("video/ogg"),
  add: async (e) => [...e, "ogv"],
  remove: async (e) => e.filter((e) => "ogv" !== e),
};
ro.add(nJ);
const n0 = {
  extension: rs.ResolveParser,
  test: nF.test,
  parse: (e) => ({
    resolution: parseFloat(ed.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
    format: eP.path.extname(e).slice(1),
    src: e,
  }),
};
ro.add(n0);
var n1 =
  (((D = n1 || {})[(D.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
    "COMPRESSED_RGB_S3TC_DXT1_EXT"),
  (D[(D.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
    "COMPRESSED_RGBA_S3TC_DXT1_EXT"),
  (D[(D.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
    "COMPRESSED_RGBA_S3TC_DXT3_EXT"),
  (D[(D.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
    "COMPRESSED_RGBA_S3TC_DXT5_EXT"),
  (D[(D.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"),
  (D[(D.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"),
  (D[(D.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
    "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"),
  (D[(D.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
    "COMPRESSED_SRGB_S3TC_DXT1_EXT"),
  (D[(D.COMPRESSED_R11_EAC = 37488)] = "COMPRESSED_R11_EAC"),
  (D[(D.COMPRESSED_SIGNED_R11_EAC = 37489)] = "COMPRESSED_SIGNED_R11_EAC"),
  (D[(D.COMPRESSED_RG11_EAC = 37490)] = "COMPRESSED_RG11_EAC"),
  (D[(D.COMPRESSED_SIGNED_RG11_EAC = 37491)] = "COMPRESSED_SIGNED_RG11_EAC"),
  (D[(D.COMPRESSED_RGB8_ETC2 = 37492)] = "COMPRESSED_RGB8_ETC2"),
  (D[(D.COMPRESSED_RGBA8_ETC2_EAC = 37496)] = "COMPRESSED_RGBA8_ETC2_EAC"),
  (D[(D.COMPRESSED_SRGB8_ETC2 = 37493)] = "COMPRESSED_SRGB8_ETC2"),
  (D[(D.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
    "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"),
  (D[(D.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
    "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
  (D[(D.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
    "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
  (D[(D.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
    "COMPRESSED_RGB_PVRTC_4BPPV1_IMG"),
  (D[(D.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
    "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"),
  (D[(D.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
    "COMPRESSED_RGB_PVRTC_2BPPV1_IMG"),
  (D[(D.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
    "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"),
  (D[(D.COMPRESSED_RGB_ETC1_WEBGL = 36196)] = "COMPRESSED_RGB_ETC1_WEBGL"),
  (D[(D.COMPRESSED_RGB_ATC_WEBGL = 35986)] = "COMPRESSED_RGB_ATC_WEBGL"),
  (D[(D.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987)] =
    "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"),
  (D[(D.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
    "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"),
  (D[(D.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808)] =
    "COMPRESSED_RGBA_ASTC_4x4_KHR"),
  D);
const n2 = {
  33776: 0.5,
  33777: 0.5,
  33778: 1,
  33779: 1,
  35916: 0.5,
  35917: 0.5,
  35918: 1,
  35919: 1,
  37488: 0.5,
  37489: 0.5,
  37490: 1,
  37491: 1,
  37492: 0.5,
  37496: 1,
  37493: 0.5,
  37497: 1,
  37494: 0.5,
  37495: 0.5,
  35840: 0.5,
  35842: 0.5,
  35841: 0.25,
  35843: 0.25,
  36196: 0.5,
  35986: 0.5,
  35987: 1,
  34798: 1,
  37808: 1,
};
function n3() {
  a = {
    s3tc: n.getExtension("WEBGL_compressed_texture_s3tc"),
    s3tc_sRGB: n.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
    etc: n.getExtension("WEBGL_compressed_texture_etc"),
    etc1: n.getExtension("WEBGL_compressed_texture_etc1"),
    pvrtc:
      n.getExtension("WEBGL_compressed_texture_pvrtc") ||
      n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
    atc: n.getExtension("WEBGL_compressed_texture_atc"),
    astc: n.getExtension("WEBGL_compressed_texture_astc"),
  };
}
const n4 = {
  extension: { type: rs.DetectionParser, priority: 2 },
  test: async () => {
    let e = ed.ADAPTER.createCanvas().getContext("webgl");
    return e
      ? ((n = e), !0)
      : (console.warn("WebGL not available for compressed textures."), !1);
  },
  add: async (e) => {
    a || n3();
    let t = [];
    for (let e in a) a[e] && t.push(e);
    return [...t, ...e];
  },
  remove: async (e) => (a || n3(), e.filter((e) => !(e in a))),
};
ro.add(n4);
class n5 extends rm {
  constructor(e, t = { width: 1, height: 1, autoLoad: !0 }) {
    let r, i;
    "string" == typeof e
      ? ((r = e), (i = new Uint8Array()))
      : ((r = null), (i = e)),
      super(i, t),
      (this.origin = r),
      (this.buffer = i ? new rl(i) : null),
      (this._load = null),
      (this.loaded = !1),
      null !== this.origin && !1 !== t.autoLoad && this.load(),
      null === this.origin &&
        this.buffer &&
        ((this._load = Promise.resolve(this)),
        (this.loaded = !0),
        this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(e) {}
  load() {
    return (
      this._load ||
        (this._load = fetch(this.origin)
          .then((e) => e.blob())
          .then((e) => e.arrayBuffer())
          .then(
            (e) => (
              (this.data = new Uint32Array(e)),
              (this.buffer = new rl(e)),
              (this.loaded = !0),
              this.onBlobLoaded(e),
              this.update(),
              this
            )
          )),
      this._load
    );
  }
}
class n6 extends n5 {
  constructor(e, t) {
    super(e, t),
      (this.format = t.format),
      (this.levels = t.levels || 1),
      (this._width = t.width),
      (this._height = t.height),
      (this._extension = n6._formatToExtension(this.format)),
      (t.levelBuffers || this.buffer) &&
        (this._levelBuffers =
          t.levelBuffers ||
          n6._createLevelBuffers(
            e instanceof Uint8Array ? e : this.buffer.uint8View,
            this.format,
            this.levels,
            4,
            4,
            this.width,
            this.height
          ));
  }
  upload(e, t, r) {
    let i = e.gl;
    if (!e.context.extensions[this._extension])
      throw Error(
        `${this._extension} textures are not supported on the current machine`
      );
    if (!this._levelBuffers) return !1;
    i.pixelStorei(i.UNPACK_ALIGNMENT, 4);
    for (let e = 0, t = this.levels; e < t; e++) {
      let {
        levelID: t,
        levelWidth: r,
        levelHeight: s,
        levelBuffer: n,
      } = this._levelBuffers[e];
      i.compressedTexImage2D(i.TEXTURE_2D, t, this.format, r, s, 0, n);
    }
    return !0;
  }
  onBlobLoaded() {
    this._levelBuffers = n6._createLevelBuffers(
      this.buffer.uint8View,
      this.format,
      this.levels,
      4,
      4,
      this.width,
      this.height
    );
  }
  static _formatToExtension(e) {
    if (e >= 33776 && e <= 33779) return "s3tc";
    if (e >= 37488 && e <= 37497) return "etc";
    if (e >= 35840 && e <= 35843) return "pvrtc";
    if (e >= 36196) return "etc1";
    if (e >= 35986 && e <= 34798) return "atc";
    throw Error("Invalid (compressed) texture format given!");
  }
  static _createLevelBuffers(e, t, r, i, s, n, a) {
    let o = Array(r),
      l = e.byteOffset,
      h = n,
      u = a,
      d = (h + i - 1) & ~(i - 1),
      c = (u + s - 1) & ~(s - 1),
      p = d * c * n2[t];
    for (let n = 0; n < r; n++)
      (o[n] = {
        levelID: n,
        levelWidth: r > 1 ? h : d,
        levelHeight: r > 1 ? u : c,
        levelBuffer: new Uint8Array(e.buffer, l, p),
      }),
        (l += p),
        (u = u >> 1 || 1),
        (p =
          (d = ((h = h >> 1 || 1) + i - 1) & ~(i - 1)) *
          (c = (u + s - 1) & ~(s - 1)) *
          n2[t]);
    return o;
  }
}
const n8 = { FOURCC: 2 },
  n7 = { DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3 },
  n9 = {
    827611204: n1.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    861165636: n1.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    894720068: n1.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  },
  ae = {
    70: n1.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    71: n1.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    73: n1.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    74: n1.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    76: n1.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    77: n1.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    72: n1.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
    75: n1.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
    78: n1.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
  },
  at = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
  ar = {
    ENDIANNESS: 12,
    GL_TYPE: 16,
    GL_FORMAT: 24,
    GL_INTERNAL_FORMAT: 28,
    PIXEL_WIDTH: 36,
    PIXEL_HEIGHT: 40,
    PIXEL_DEPTH: 44,
    NUMBER_OF_ARRAY_ELEMENTS: 48,
    NUMBER_OF_FACES: 52,
    NUMBER_OF_MIPMAP_LEVELS: 56,
    BYTES_OF_KEY_VALUE_DATA: 60,
  },
  ai = {
    [Q.UNSIGNED_BYTE]: 1,
    [Q.UNSIGNED_SHORT]: 2,
    [Q.INT]: 4,
    [Q.UNSIGNED_INT]: 4,
    [Q.FLOAT]: 4,
    [Q.HALF_FLOAT]: 8,
  },
  as = {
    [Z.RGBA]: 4,
    [Z.RGB]: 3,
    [Z.RG]: 2,
    [Z.RED]: 1,
    [Z.LUMINANCE]: 1,
    [Z.LUMINANCE_ALPHA]: 2,
    [Z.ALPHA]: 1,
  },
  an = {
    [Q.UNSIGNED_SHORT_4_4_4_4]: 2,
    [Q.UNSIGNED_SHORT_5_5_5_1]: 2,
    [Q.UNSIGNED_SHORT_5_6_5]: 2,
  },
  aa = {
    extension: { type: rs.LoadParser, priority: n_.High },
    name: "loadDDS",
    test: (e) => nc(e, ".dds"),
    async load(e, t, r) {
      let i = (function (e) {
        let t = new Uint32Array(e);
        if (542327876 !== t[0]) throw Error("Invalid DDS file magic word");
        let r = new Uint32Array(e, 0, 124 / Uint32Array.BYTES_PER_ELEMENT),
          i = r[3],
          s = r[4],
          n = r[7],
          a = new Uint32Array(
            e,
            19 * Uint32Array.BYTES_PER_ELEMENT,
            32 / Uint32Array.BYTES_PER_ELEMENT
          ),
          o = a[1];
        if (4 & o) {
          let r = a[n8.FOURCC];
          if (808540228 !== r) {
            let t = n9[r];
            return [
              new n6(new Uint8Array(e, 128), {
                format: t,
                width: s,
                height: i,
                levels: n,
              }),
            ];
          }
          let o = new Uint32Array(
              t.buffer,
              128,
              20 / Uint32Array.BYTES_PER_ELEMENT
            ),
            l = o[n7.DXGI_FORMAT],
            h = o[n7.RESOURCE_DIMENSION],
            u = o[n7.MISC_FLAG],
            d = o[n7.ARRAY_SIZE],
            c = ae[l];
          if (void 0 === c)
            throw Error(
              `DDSParser cannot parse texture data with DXGI format ${l}`
            );
          if (4 === u)
            throw Error("DDSParser does not support cubemap textures");
          if (6 === h)
            throw Error("DDSParser does not supported 3D texture data");
          let p = [];
          if (1 === d) p.push(new Uint8Array(e, 148));
          else {
            let t = n2[c],
              r = 0,
              a = s,
              o = i;
            for (let e = 0; e < n; e++)
              (r += Math.max(1, (a + 3) & -4) * Math.max(1, (o + 3) & -4) * t),
                (a >>>= 1),
                (o >>>= 1);
            let l = 148;
            for (let t = 0; t < d; t++)
              p.push(new Uint8Array(e, l, r)), (l += r);
          }
          return p.map(
            (e) => new n6(e, { format: c, width: s, height: i, levels: n })
          );
        }
        throw 64 & o
          ? Error("DDSParser does not support uncompressed texture data.")
          : 512 & o
          ? Error("DDSParser does not supported YUV uncompressed texture data.")
          : 131072 & o
          ? Error(
              "DDSParser does not support single-channel (lumninance) texture data!"
            )
          : 2 & o
          ? Error(
              "DDSParser does not support single-channel (alpha) texture data!"
            )
          : Error(
              "DDSParser failed to load a texture file due to an unknown reason!"
            );
      })(await (await ed.ADAPTER.fetch(e)).arrayBuffer()).map((i) =>
        nM(
          new r_(i, {
            mipmap: er.OFF,
            alphaMode: ei.NO_PREMULTIPLIED_ALPHA,
            resolution: eP.getResolutionOfUrl(e),
            ...t.data,
          }),
          r,
          e
        )
      );
      return 1 === i.length ? i[0] : i;
    },
    unload(e) {
      Array.isArray(e) ? e.forEach((e) => e.destroy(!0)) : e.destroy(!0);
    },
  };
ro.add(aa);
const ao = {
  extension: { type: rs.LoadParser, priority: n_.High },
  name: "loadKTX",
  test: (e) => nc(e, ".ktx"),
  async load(e, t, r) {
    let i = await (await ed.ADAPTER.fetch(e)).arrayBuffer(),
      {
        compressed: s,
        uncompressed: n,
        kvData: a,
      } = (function (e, t, r = !1) {
        let i;
        let s = new DataView(t);
        if (
          !(function (e, t) {
            for (let r = 0; r < at.length; r++)
              if (t.getUint8(r) !== at[r])
                return console.error(`${e} is not a valid *.ktx file!`), !1;
            return !0;
          })(e, s)
        )
          return null;
        let n = 67305985 === s.getUint32(ar.ENDIANNESS, !0),
          a = s.getUint32(ar.GL_TYPE, n),
          o = s.getUint32(ar.GL_FORMAT, n),
          l = s.getUint32(ar.GL_INTERNAL_FORMAT, n),
          h = s.getUint32(ar.PIXEL_WIDTH, n),
          u = s.getUint32(ar.PIXEL_HEIGHT, n) || 1,
          d = s.getUint32(ar.PIXEL_DEPTH, n) || 1,
          c = s.getUint32(ar.NUMBER_OF_ARRAY_ELEMENTS, n) || 1,
          p = s.getUint32(ar.NUMBER_OF_FACES, n),
          f = s.getUint32(ar.NUMBER_OF_MIPMAP_LEVELS, n),
          m = s.getUint32(ar.BYTES_OF_KEY_VALUE_DATA, n);
        if (0 === u || 1 !== d) throw Error("Only 2D textures are supported");
        if (1 !== p)
          throw Error("CubeTextures are not supported by KTXLoader yet!");
        if (1 !== c) throw Error("WebGL does not support array textures");
        let g = (h + 3) & -4,
          y = (u + 3) & -4,
          _ = Array(c),
          x = h * u;
        if (
          (0 === a && (x = g * y),
          void 0 === (i = 0 !== a ? (ai[a] ? ai[a] * as[o] : an[a]) : n2[l]))
        )
          throw Error(
            "Unable to resolve the pixel format stored in the *.ktx file!"
          );
        let v = r
            ? (function (e, t, r) {
                let i = new Map(),
                  s = 0;
                for (; s < t; ) {
                  let n = e.getUint32(64 + s, r),
                    a = 64 + s + 4,
                    o = 3 - ((n + 3) % 4);
                  if (0 === n || n > t - s) {
                    console.error(
                      "KTXLoader: keyAndValueByteSize out of bounds"
                    );
                    break;
                  }
                  let l = 0;
                  for (; l < n && 0 !== e.getUint8(a + l); l++);
                  if (-1 === l) {
                    console.error(
                      "KTXLoader: Failed to find null byte terminating kvData key"
                    );
                    break;
                  }
                  let h = new TextDecoder().decode(
                      new Uint8Array(e.buffer, a, l)
                    ),
                    u = new DataView(e.buffer, a + l + 1, n - l - 1);
                  i.set(h, u), (s += 4 + n + o);
                }
                return i;
              })(s, m, n)
            : null,
          b = x * i,
          E = h,
          T = u,
          A = g,
          w = y,
          S = 64 + m;
        for (let e = 0; e < f; e++) {
          let r = s.getUint32(S, n),
            o = S + 4;
          for (let r = 0; r < c; r++) {
            let i = _[r];
            i || (i = _[r] = Array(f)),
              (i[e] = {
                levelID: e,
                levelWidth: f > 1 || 0 !== a ? E : A,
                levelHeight: f > 1 || 0 !== a ? T : w,
                levelBuffer: new Uint8Array(t, o, b),
              }),
              (o += b);
          }
          (S += r + 4),
            (S = S % 4 != 0 ? S + 4 - (S % 4) : S),
            (T = T >> 1 || 1),
            (b =
              (A = ((E = E >> 1 || 1) + 4 - 1) & -4) *
              (w = (T + 4 - 1) & -4) *
              i);
        }
        return 0 !== a
          ? {
              uncompressed: _.map((e) => {
                let t = e[0].levelBuffer,
                  r = !1;
                return (
                  a === Q.FLOAT
                    ? (t = new Float32Array(
                        e[0].levelBuffer.buffer,
                        e[0].levelBuffer.byteOffset,
                        e[0].levelBuffer.byteLength / 4
                      ))
                    : a === Q.UNSIGNED_INT
                    ? ((r = !0),
                      (t = new Uint32Array(
                        e[0].levelBuffer.buffer,
                        e[0].levelBuffer.byteOffset,
                        e[0].levelBuffer.byteLength / 4
                      )))
                    : a === Q.INT &&
                      ((r = !0),
                      (t = new Int32Array(
                        e[0].levelBuffer.buffer,
                        e[0].levelBuffer.byteOffset,
                        e[0].levelBuffer.byteLength / 4
                      ))),
                  {
                    resource: new rm(t, {
                      width: e[0].levelWidth,
                      height: e[0].levelHeight,
                    }),
                    type: a,
                    format: r
                      ? (function (e) {
                          switch (e) {
                            case Z.RGBA:
                              return Z.RGBA_INTEGER;
                            case Z.RGB:
                              return Z.RGB_INTEGER;
                            case Z.RG:
                              return Z.RG_INTEGER;
                            case Z.RED:
                              return Z.RED_INTEGER;
                            default:
                              return e;
                          }
                        })(o)
                      : o,
                  }
                );
              }),
              kvData: v,
            }
          : {
              compressed: _.map(
                (e) =>
                  new n6(null, {
                    format: l,
                    width: h,
                    height: u,
                    levels: f,
                    levelBuffers: e,
                  })
              ),
              kvData: v,
            };
      })(e, i),
      o = s ?? n,
      l = {
        mipmap: er.OFF,
        alphaMode: ei.NO_PREMULTIPLIED_ALPHA,
        resolution: eP.getResolutionOfUrl(e),
        ...t.data,
      },
      h = o.map((t) => {
        o === n && Object.assign(l, { type: t.type, format: t.format });
        let i = new r_(t.resource ?? t, l);
        return (i.ktxKeyValueData = a), nM(i, r, e);
      });
    return 1 === h.length ? h[0] : h;
  },
  unload(e) {
    Array.isArray(e) ? e.forEach((e) => e.destroy(!0)) : e.destroy(!0);
  },
};
ro.add(ao);
const al = {
  extension: rs.ResolveParser,
  test: (e) => ["basis", "ktx", "dds"].includes(eP.path.extname(e).slice(1)),
  parse: (e) => {
    let t = eP.path.extname(e).slice(1);
    if ("ktx" === t) {
      let t = [
        ".s3tc.ktx",
        ".s3tc_sRGB.ktx",
        ".etc.ktx",
        ".etc1.ktx",
        ".pvrt.ktx",
        ".atc.ktx",
        ".astc.ktx",
      ];
      if (t.some((t) => e.endsWith(t)))
        return {
          resolution: parseFloat(ed.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
          format: t.find((t) => e.endsWith(t)),
          src: e,
        };
    }
    return {
      resolution: parseFloat(ed.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
      format: t,
      src: e,
    };
  },
};
ro.add(al);
const ah = new rO(),
  au = class e {
    constructor(e) {
      (this.renderer = e), (this._rendererPremultipliedAlpha = !1);
    }
    contextChange() {
      let e = this.renderer?.gl.getContextAttributes();
      this._rendererPremultipliedAlpha = !!(
        e &&
        e.alpha &&
        e.premultipliedAlpha
      );
    }
    async image(e, t, r, i) {
      let s = new Image();
      return (s.src = await this.base64(e, t, r, i)), s;
    }
    async base64(e, t, r, i) {
      let s = this.canvas(e, i);
      if (void 0 !== s.toBlob)
        return new Promise((e, i) => {
          s.toBlob(
            (t) => {
              if (!t) {
                i(Error("ICanvas.toBlob failed!"));
                return;
              }
              let r = new FileReader();
              (r.onload = () => e(r.result)),
                (r.onerror = i),
                r.readAsDataURL(t);
            },
            t,
            r
          );
        });
      if (void 0 !== s.toDataURL) return s.toDataURL(t, r);
      if (void 0 !== s.convertToBlob) {
        let e = await s.convertToBlob({ type: t, quality: r });
        return new Promise((t, r) => {
          let i = new FileReader();
          (i.onload = () => t(i.result)), (i.onerror = r), i.readAsDataURL(e);
        });
      }
      throw Error(
        "Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented"
      );
    }
    canvas(t, r) {
      let {
        pixels: i,
        width: s,
        height: n,
        flipY: a,
        premultipliedAlpha: o,
      } = this._rawPixels(t, r);
      a && e._flipY(i, s, n), o && e._unpremultiplyAlpha(i);
      let l = new eP.CanvasRenderTarget(s, n, 1),
        h = new ImageData(new Uint8ClampedArray(i.buffer), s, n);
      return l.context.putImageData(h, 0, 0), l.canvas;
    }
    pixels(t, r) {
      let {
        pixels: i,
        width: s,
        height: n,
        flipY: a,
        premultipliedAlpha: o,
      } = this._rawPixels(t, r);
      return a && e._flipY(i, s, n), o && e._unpremultiplyAlpha(i), i;
    }
    _rawPixels(e, t) {
      let r = this.renderer;
      if (!r) throw Error("The Extract has already been destroyed");
      let i,
        s = !1,
        n = !1,
        a,
        o = !1;
      e &&
        (e instanceof iD
          ? (a = e)
          : ((a = r.generateTexture(e, {
              region: t,
              resolution: r.resolution,
              multisample: r.multisample,
            })),
            (o = !0),
            t && ((ah.width = t.width), (ah.height = t.height), (t = ah))));
      let l = r.gl;
      if (a) {
        if (
          ((i = a.baseTexture.resolution),
          (t = t ?? a.frame),
          (s = !1),
          (n = a.baseTexture.alphaMode > 0 && a.baseTexture.format === Z.RGBA),
          !o)
        ) {
          r.renderTexture.bind(a);
          let e = a.framebuffer.glFramebuffers[r.CONTEXT_UID];
          e.blitFramebuffer && r.framebuffer.bind(e.blitFramebuffer);
        }
      } else
        (i = r.resolution),
          t || (((t = ah).width = r.width / i), (t.height = r.height / i)),
          (s = !0),
          (n = this._rendererPremultipliedAlpha),
          r.renderTexture.bind();
      let h = Math.max(Math.round(t.width * i), 1),
        u = Math.max(Math.round(t.height * i), 1),
        d = new Uint8Array(4 * h * u);
      return (
        l.readPixels(
          Math.round(t.x * i),
          Math.round(t.y * i),
          h,
          u,
          l.RGBA,
          l.UNSIGNED_BYTE,
          d
        ),
        o && a?.destroy(!0),
        { pixels: d, width: h, height: u, flipY: s, premultipliedAlpha: n }
      );
    }
    destroy() {
      this.renderer = null;
    }
    static _flipY(e, t, r) {
      let i = t << 2,
        s = r >> 1,
        n = new Uint8Array(i);
      for (let t = 0; t < s; t++) {
        let s = t * i,
          a = (r - t - 1) * i;
        n.set(e.subarray(s, s + i)), e.copyWithin(s, a, a + i), e.set(n, a);
      }
    }
    static _unpremultiplyAlpha(e) {
      e instanceof Uint8ClampedArray && (e = new Uint8Array(e.buffer));
      let t = e.length;
      for (let r = 0; r < t; r += 4) {
        let t = e[r + 3];
        if (0 !== t) {
          let i = 255.001 / t;
          (e[r] = e[r] * i + 0.5),
            (e[r + 1] = e[r + 1] * i + 0.5),
            (e[r + 2] = e[r + 2] * i + 0.5);
        }
      }
    }
  };
(au.extension = { name: "extract", type: rs.RendererSystem }), ro.add(au);
const ad = {
  build(e) {
    let t, r, i, s, n, a;
    let o = e.points;
    if (e.type === rM.CIRC) {
      let o = e.shape;
      (t = o.x), (r = o.y), (n = a = o.radius), (i = s = 0);
    } else if (e.type === rM.ELIP) {
      let o = e.shape;
      (t = o.x), (r = o.y), (n = o.width), (a = o.height), (i = s = 0);
    } else {
      let o = e.shape,
        l = o.width / 2,
        h = o.height / 2;
      (t = o.x + l),
        (r = o.y + h),
        (n = a = Math.max(0, Math.min(o.radius, Math.min(l, h)))),
        (i = l - n),
        (s = h - a);
    }
    if (!(n >= 0 && a >= 0 && i >= 0 && s >= 0)) {
      o.length = 0;
      return;
    }
    let l = Math.ceil(2.3 * Math.sqrt(n + a)),
      h = 8 * l + (i ? 4 : 0) + (s ? 4 : 0);
    if (((o.length = h), 0 === h)) return;
    if (0 === l) {
      (o.length = 8),
        (o[0] = o[6] = t + i),
        (o[1] = o[3] = r + s),
        (o[2] = o[4] = t - i),
        (o[5] = o[7] = r - s);
      return;
    }
    let u = 0,
      d = 4 * l + (i ? 2 : 0) + 2,
      c = d,
      p = h;
    {
      let e = i + n,
        a = s,
        l = t + e,
        h = t - e,
        f = r + a;
      if (((o[u++] = l), (o[u++] = f), (o[--d] = f), (o[--d] = h), s)) {
        let e = r - a;
        (o[c++] = h), (o[c++] = e), (o[--p] = e), (o[--p] = l);
      }
    }
    for (let e = 1; e < l; e++) {
      let h = (Math.PI / 2) * (e / l),
        f = i + Math.cos(h) * n,
        m = s + Math.sin(h) * a,
        g = t + f,
        y = t - f,
        _ = r + m,
        x = r - m;
      (o[u++] = g),
        (o[u++] = _),
        (o[--d] = _),
        (o[--d] = y),
        (o[c++] = y),
        (o[c++] = x),
        (o[--p] = x),
        (o[--p] = g);
    }
    {
      let e = i,
        n = s + a,
        l = t + e,
        h = t - e,
        d = r + n,
        c = r - n;
      (o[u++] = l),
        (o[u++] = d),
        (o[--p] = c),
        (o[--p] = l),
        i && ((o[u++] = h), (o[u++] = d), (o[--p] = c), (o[--p] = h));
    }
  },
  triangulate(e, t) {
    let r, i;
    let s = e.points,
      n = t.points,
      a = t.indices;
    if (0 === s.length) return;
    let o = n.length / 2,
      l = o;
    if (e.type !== rM.RREC) {
      let t = e.shape;
      (r = t.x), (i = t.y);
    } else {
      let t = e.shape;
      (r = t.x + t.width / 2), (i = t.y + t.height / 2);
    }
    let h = e.matrix;
    n.push(
      e.matrix ? h.a * r + h.c * i + h.tx : r,
      e.matrix ? h.b * r + h.d * i + h.ty : i
    ),
      o++,
      n.push(s[0], s[1]);
    for (let e = 2; e < s.length; e += 2)
      n.push(s[e], s[e + 1]), a.push(o++, l, o);
    a.push(l + 1, l, o);
  },
};
function ac(e, t = !1) {
  let r = e.length;
  if (r < 6) return;
  let i = 0;
  for (let t = 0, s = e[r - 2], n = e[r - 1]; t < r; t += 2) {
    let r = e[t],
      a = e[t + 1];
    (i += (r - s) * (a + n)), (s = r), (n = a);
  }
  if ((!t && i > 0) || (t && i <= 0)) {
    let t = r / 2;
    for (let i = t + (t % 2); i < r; i += 2) {
      let t = r - i - 2,
        s = r - i - 1,
        n = i,
        a = i + 1;
      ([e[t], e[n]] = [e[n], e[t]]), ([e[s], e[a]] = [e[a], e[s]]);
    }
  }
}
const ap = {
  build(e) {
    e.points = e.shape.points.slice();
  },
  triangulate(e, t) {
    let r = e.points,
      i = e.holes,
      s = t.points,
      n = t.indices;
    if (r.length >= 6) {
      ac(r, !1);
      let e = [];
      for (let t = 0; t < i.length; t++) {
        let s = i[t];
        ac(s.points, !0), e.push(r.length / 2), (r = r.concat(s.points));
      }
      let t = eP.earcut(r, e, 2);
      if (!t) return;
      let a = s.length / 2;
      for (let e = 0; e < t.length; e += 3)
        n.push(t[e] + a), n.push(t[e + 1] + a), n.push(t[e + 2] + a);
      for (let e = 0; e < r.length; e++) s.push(r[e]);
    }
  },
};
var af =
    (((B = af || {}).MITER = "miter"),
    (B.BEVEL = "bevel"),
    (B.ROUND = "round"),
    B),
  am =
    (((O = am || {}).BUTT = "butt"),
    (O.ROUND = "round"),
    (O.SQUARE = "square"),
    O);
const ag = {
  adaptive: !0,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount(e, t = 20) {
    if (!this.adaptive || !e || isNaN(e)) return t;
    let r = Math.ceil(e / this.maxLength);
    return (
      r < this.minSegments
        ? (r = this.minSegments)
        : r > this.maxSegments && (r = this.maxSegments),
      r
    );
  },
};
class ay {
  static curveTo(e, t, r, i, s, n) {
    let a = n[n.length - 2],
      o = n[n.length - 1] - t,
      l = a - e,
      h = i - t,
      u = r - e,
      d = Math.abs(o * u - l * h);
    if (d < 1e-8 || 0 === s)
      return (
        (n[n.length - 2] !== e || n[n.length - 1] !== t) && n.push(e, t), null
      );
    let c = o * o + l * l,
      p = h * h + u * u,
      f = o * h + l * u,
      m = (s * Math.sqrt(c)) / d,
      g = (s * Math.sqrt(p)) / d,
      y = (m * f) / c,
      _ = (g * f) / p,
      x = m * u + g * l,
      v = m * h + g * o;
    return {
      cx: x + e,
      cy: v + t,
      radius: s,
      startAngle: Math.atan2(o * (g + y) - v, l * (g + y) - x),
      endAngle: Math.atan2(h * (m + _) - v, u * (m + _) - x),
      anticlockwise: l * h > u * o,
    };
  }
  static arc(e, t, r, i, s, n, a, o, l) {
    let h = a - n,
      u = ag._segmentsCount(Math.abs(h) * s, 40 * Math.ceil(Math.abs(h) / rC)),
      d = h / (2 * u),
      c = 2 * d,
      p = Math.cos(d),
      f = Math.sin(d),
      m = u - 1,
      g = (m % 1) / m;
    for (let e = 0; e <= m; ++e) {
      let t = d + n + c * (e + g * e),
        a = Math.cos(t),
        o = -Math.sin(t);
      l.push((p * a + f * o) * s + r, (-(p * o) + f * a) * s + i);
    }
  }
}
class a_ {
  constructor() {
    this.reset();
  }
  begin(e, t, r) {
    this.reset(), (this.style = e), (this.start = t), (this.attribStart = r);
  }
  end(e, t) {
    (this.attribSize = t - this.attribStart), (this.size = e - this.start);
  }
  reset() {
    (this.style = null),
      (this.size = 0),
      (this.start = 0),
      (this.attribStart = 0),
      (this.attribSize = 0);
  }
}
class ax {
  static curveLength(e, t, r, i, s, n, a, o) {
    let l = 0,
      h = 0,
      u = 0,
      d = 0,
      c = 0,
      p = 0,
      f = 0,
      m = 0,
      g = 0,
      y = 0,
      _ = 0,
      x = e,
      v = t;
    for (let b = 1; b <= 10; ++b)
      (d = (u = (h = b / 10) * h) * h),
        (m =
          (f = (p = (c = 1 - h) * c) * c) * e +
          3 * p * h * r +
          3 * c * u * s +
          d * a),
        (g = f * t + 3 * p * h * i + 3 * c * u * n + d * o),
        (y = x - m),
        (_ = v - g),
        (x = m),
        (v = g),
        (l += Math.sqrt(y * y + _ * _));
    return l;
  }
  static curveTo(e, t, r, i, s, n, a) {
    let o = a[a.length - 2],
      l = a[a.length - 1];
    a.length -= 2;
    let h = ag._segmentsCount(ax.curveLength(o, l, e, t, r, i, s, n)),
      u = 0,
      d = 0,
      c = 0,
      p = 0,
      f = 0;
    a.push(o, l);
    for (let m = 1, g = 0; m <= h; ++m)
      (c = (d = (u = 1 - (g = m / h)) * u) * u),
        (f = (p = g * g) * g),
        a.push(
          c * o + 3 * d * g * e + 3 * u * p * r + f * s,
          c * l + 3 * d * g * t + 3 * u * p * i + f * n
        );
  }
}
function av(e, t, r, i, s, n, a, o) {
  let l, h;
  a ? ((l = i), (h = -r)) : ((l = -i), (h = r));
  let u = e - r * s + l,
    d = t - i * s + h,
    c = e + r * n + l,
    p = t + i * n + h;
  return o.push(u, d, c, p), 2;
}
function ab(e, t, r, i, s, n, a, o) {
  let l = r - e,
    h = i - t,
    u = Math.atan2(l, h),
    d = Math.atan2(s - e, n - t);
  o && u < d ? (u += 2 * Math.PI) : !o && u > d && (d += 2 * Math.PI);
  let c = u,
    p = d - u,
    f = Math.sqrt(l * l + h * h),
    m = (((15 * Math.abs(p) * Math.sqrt(f)) / Math.PI) >> 0) + 1,
    g = p / m;
  if (((c += g), o)) {
    a.push(e, t, r, i);
    for (let r = 1, i = c; r < m; r++, i += g)
      a.push(e, t, e + Math.sin(i) * f, t + Math.cos(i) * f);
    a.push(e, t, s, n);
  } else {
    a.push(r, i, e, t);
    for (let r = 1, i = c; r < m; r++, i += g)
      a.push(e + Math.sin(i) * f, t + Math.cos(i) * f, e, t);
    a.push(s, n, e, t);
  }
  return 2 * m;
}
function aE(e, t) {
  e.lineStyle.native
    ? (function (e, t) {
        let r = 0,
          i = e.shape,
          s = e.points || i.points,
          n = i.type !== rM.POLY || i.closeStroke;
        if (0 === s.length) return;
        let a = t.points,
          o = t.indices,
          l = s.length / 2,
          h = a.length / 2,
          u = h;
        for (a.push(s[0], s[1]), r = 1; r < l; r++)
          a.push(s[2 * r], s[2 * r + 1]), o.push(u, u + 1), u++;
        n && o.push(u, h);
      })(e, t)
    : (function (e, t) {
        let r = e.shape,
          i = e.points || r.points.slice(),
          s = t.closePointEps;
        if (0 === i.length) return;
        let n = e.lineStyle,
          a = new rD(i[0], i[1]),
          o = new rD(i[i.length - 2], i[i.length - 1]),
          l = r.type !== rM.POLY || r.closeStroke,
          h = Math.abs(a.x - o.x) < s && Math.abs(a.y - o.y) < s;
        if (l) {
          (i = i.slice()),
            h && (i.pop(), i.pop(), o.set(i[i.length - 2], i[i.length - 1]));
          let e = (a.x + o.x) * 0.5,
            t = (o.y + a.y) * 0.5;
          i.unshift(e, t), i.push(e, t);
        }
        let u = t.points,
          d = i.length / 2,
          c = i.length,
          p = u.length / 2,
          f = n.width / 2,
          m = f * f,
          g = n.miterLimit * n.miterLimit,
          y = i[0],
          _ = i[1],
          x = i[2],
          v = i[3],
          b = 0,
          E = 0,
          T = -(_ - v),
          A = y - x,
          w = 0,
          S = 0,
          R = Math.sqrt(T * T + A * A);
        (T /= R), (A /= R), (T *= f), (A *= f);
        let I = n.alignment,
          C = (1 - I) * 2,
          P = 2 * I;
        l ||
          (n.cap === am.ROUND
            ? (c +=
                ab(
                  y - T * (C - P) * 0.5,
                  _ - A * (C - P) * 0.5,
                  y - T * C,
                  _ - A * C,
                  y + T * P,
                  _ + A * P,
                  u,
                  !0
                ) + 2)
            : n.cap === am.SQUARE && (c += av(y, _, T, A, C, P, !0, u))),
          u.push(y - T * C, _ - A * C, y + T * P, _ + A * P);
        for (let e = 1; e < d - 1; ++e) {
          (y = i[(e - 1) * 2]),
            (_ = i[(e - 1) * 2 + 1]),
            (x = i[2 * e]),
            (v = i[2 * e + 1]),
            (b = i[(e + 1) * 2]),
            (E = i[(e + 1) * 2 + 1]),
            (R = Math.sqrt((T = -(_ - v)) * T + (A = y - x) * A)),
            (T /= R),
            (A /= R),
            (T *= f),
            (A *= f),
            (R = Math.sqrt((w = -(v - E)) * w + (S = x - b) * S)),
            (w /= R),
            (S /= R),
            (w *= f),
            (S *= f);
          let t = x - y,
            r = _ - v,
            s = x - b,
            a = E - v,
            o = t * s + r * a,
            l = r * s - a * t,
            h = l < 0;
          if (Math.abs(l) < 0.001 * Math.abs(o)) {
            u.push(x - T * C, v - A * C, x + T * P, v + A * P),
              o >= 0 &&
                (n.join === af.ROUND
                  ? (c +=
                      ab(
                        x,
                        v,
                        x - T * C,
                        v - A * C,
                        x - w * C,
                        v - S * C,
                        u,
                        !1
                      ) + 4)
                  : (c += 2),
                u.push(x - w * P, v - S * P, x + w * C, v + S * C));
            continue;
          }
          let d = (-T + y) * (-A + v) - (-T + x) * (-A + _),
            p = (-w + b) * (-S + v) - (-w + x) * (-S + E),
            I = (t * p - s * d) / l,
            k = (a * d - r * p) / l,
            M = (I - x) * (I - x) + (k - v) * (k - v),
            D = x + (I - x) * C,
            B = v + (k - v) * C,
            O = x - (I - x) * P,
            F = v - (k - v) * P,
            L = h ? C : P,
            N = M <= Math.min(t * t + r * r, s * s + a * a) + L * L * m,
            U = n.join;
          if ((U === af.MITER && M / m > g && (U = af.BEVEL), N))
            switch (U) {
              case af.MITER:
                u.push(D, B, O, F);
                break;
              case af.BEVEL:
                h
                  ? u.push(
                      D,
                      B,
                      x + T * P,
                      v + A * P,
                      D,
                      B,
                      x + w * P,
                      v + S * P
                    )
                  : u.push(
                      x - T * C,
                      v - A * C,
                      O,
                      F,
                      x - w * C,
                      v - S * C,
                      O,
                      F
                    ),
                  (c += 2);
                break;
              case af.ROUND:
                h
                  ? (u.push(D, B, x + T * P, v + A * P),
                    (c +=
                      ab(
                        x,
                        v,
                        x + T * P,
                        v + A * P,
                        x + w * P,
                        v + S * P,
                        u,
                        !0
                      ) + 4),
                    u.push(D, B, x + w * P, v + S * P))
                  : (u.push(x - T * C, v - A * C, O, F),
                    (c +=
                      ab(
                        x,
                        v,
                        x - T * C,
                        v - A * C,
                        x - w * C,
                        v - S * C,
                        u,
                        !1
                      ) + 4),
                    u.push(x - w * C, v - S * C, O, F));
            }
          else {
            switch ((u.push(x - T * C, v - A * C, x + T * P, v + A * P), U)) {
              case af.MITER:
                h ? u.push(O, F, O, F) : u.push(D, B, D, B), (c += 2);
                break;
              case af.ROUND:
                h
                  ? (c +=
                      ab(
                        x,
                        v,
                        x + T * P,
                        v + A * P,
                        x + w * P,
                        v + S * P,
                        u,
                        !0
                      ) + 2)
                  : (c +=
                      ab(
                        x,
                        v,
                        x - T * C,
                        v - A * C,
                        x - w * C,
                        v - S * C,
                        u,
                        !1
                      ) + 2);
            }
            u.push(x - w * C, v - S * C, x + w * P, v + S * P), (c += 2);
          }
        }
        (y = i[(d - 2) * 2]),
          (_ = i[(d - 2) * 2 + 1]),
          (x = i[(d - 1) * 2]),
          (R = Math.sqrt(
            (T = -(_ - (v = i[(d - 1) * 2 + 1]))) * T + (A = y - x) * A
          )),
          (T /= R),
          (A /= R),
          (T *= f),
          (A *= f),
          u.push(x - T * C, v - A * C, x + T * P, v + A * P),
          l ||
            (n.cap === am.ROUND
              ? (c +=
                  ab(
                    x - T * (C - P) * 0.5,
                    v - A * (C - P) * 0.5,
                    x - T * C,
                    v - A * C,
                    x + T * P,
                    v + A * P,
                    u,
                    !1
                  ) + 2)
              : n.cap === am.SQUARE && (c += av(x, v, T, A, C, P, !1, u)));
        let k = t.indices,
          M = ag.epsilon * ag.epsilon;
        for (let e = p; e < c + p - 2; ++e)
          (y = u[2 * e]),
            (_ = u[2 * e + 1]),
            (x = u[(e + 1) * 2]),
            (v = u[(e + 1) * 2 + 1]),
            (b = u[(e + 2) * 2]),
            Math.abs(
              y * (v - (E = u[(e + 2) * 2 + 1])) + x * (E - _) + b * (_ - v)
            ) < M || k.push(e, e + 1, e + 2);
      })(e, t);
}
class aT {
  static curveLength(e, t, r, i, s, n) {
    let a = e - 2 * r + s,
      o = t - 2 * i + n,
      l = 2 * r - 2 * e,
      h = 2 * i - 2 * t,
      u = 4 * (a * a + o * o),
      d = 4 * (a * l + o * h),
      c = l * l + h * h,
      p = 2 * Math.sqrt(u + d + c),
      f = Math.sqrt(u),
      m = 2 * u * f,
      g = 2 * Math.sqrt(c),
      y = d / f;
    return (
      (m * p +
        f * d * (p - g) +
        (4 * c * u - d * d) * Math.log((2 * f + y + p) / (y + g))) /
      (4 * m)
    );
  }
  static curveTo(e, t, r, i, s) {
    let n = s[s.length - 2],
      a = s[s.length - 1],
      o = ag._segmentsCount(aT.curveLength(n, a, e, t, r, i)),
      l = 0,
      h = 0;
    for (let u = 1; u <= o; ++u) {
      let d = u / o;
      (l = n + (e - n) * d),
        (h = a + (t - a) * d),
        s.push(l + (e + (r - e) * d - l) * d, h + (t + (i - t) * d - h) * d);
    }
  }
}
const aA = {
    [rM.POLY]: ap,
    [rM.CIRC]: ad,
    [rM.ELIP]: ad,
    [rM.RECT]: {
      build(e) {
        let t = e.shape,
          r = t.x,
          i = t.y,
          s = t.width,
          n = t.height,
          a = e.points;
        (a.length = 0),
          s >= 0 && n >= 0 && a.push(r, i, r + s, i, r + s, i + n, r, i + n);
      },
      triangulate(e, t) {
        let r = e.points,
          i = t.points;
        if (0 === r.length) return;
        let s = i.length / 2;
        i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]),
          t.indices.push(s, s + 1, s + 2, s + 1, s + 2, s + 3);
      },
    },
    [rM.RREC]: {
      build(e) {
        ad.build(e);
      },
      triangulate(e, t) {
        ad.triangulate(e, t);
      },
    },
  },
  aw = [],
  aS = [];
class aR {
  constructor(e, t = null, r = null, i = null) {
    (this.points = []),
      (this.holes = []),
      (this.shape = e),
      (this.lineStyle = r),
      (this.fillStyle = t),
      (this.matrix = i),
      (this.type = e.type);
  }
  clone() {
    return new aR(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    (this.shape = null),
      (this.holes.length = 0),
      (this.holes = null),
      (this.points.length = 0),
      (this.points = null),
      (this.lineStyle = null),
      (this.fillStyle = null);
  }
}
const aI = new rD(),
  aC = class e extends rI {
    constructor() {
      super(),
        (this.closePointEps = 1e-4),
        (this.boundsPadding = 0),
        (this.uvsFloat32 = null),
        (this.indicesUint16 = null),
        (this.batchable = !1),
        (this.points = []),
        (this.colors = []),
        (this.uvs = []),
        (this.indices = []),
        (this.textureIds = []),
        (this.graphicsData = []),
        (this.drawCalls = []),
        (this.batchDirty = -1),
        (this.batches = []),
        (this.dirty = 0),
        (this.cacheDirty = -1),
        (this.clearDirty = 0),
        (this.shapeIndex = 0),
        (this._bounds = new sB()),
        (this.boundsDirty = -1);
    }
    get bounds() {
      return (
        this.updateBatches(),
        this.boundsDirty !== this.dirty &&
          ((this.boundsDirty = this.dirty), this.calculateBounds()),
        this._bounds
      );
    }
    invalidate() {
      (this.boundsDirty = -1),
        this.dirty++,
        this.batchDirty++,
        (this.shapeIndex = 0),
        (this.points.length = 0),
        (this.colors.length = 0),
        (this.uvs.length = 0),
        (this.indices.length = 0),
        (this.textureIds.length = 0);
      for (let e = 0; e < this.drawCalls.length; e++)
        this.drawCalls[e].texArray.clear(), aS.push(this.drawCalls[e]);
      this.drawCalls.length = 0;
      for (let e = 0; e < this.batches.length; e++) {
        let t = this.batches[e];
        t.reset(), aw.push(t);
      }
      this.batches.length = 0;
    }
    clear() {
      return (
        this.graphicsData.length > 0 &&
          (this.invalidate(),
          this.clearDirty++,
          (this.graphicsData.length = 0)),
        this
      );
    }
    drawShape(e, t = null, r = null, i = null) {
      let s = new aR(e, t, r, i);
      return this.graphicsData.push(s), this.dirty++, this;
    }
    drawHole(e, t = null) {
      if (!this.graphicsData.length) return null;
      let r = new aR(e, null, null, t),
        i = this.graphicsData[this.graphicsData.length - 1];
      return (r.lineStyle = i.lineStyle), i.holes.push(r), this.dirty++, this;
    }
    destroy() {
      super.destroy();
      for (let e = 0; e < this.graphicsData.length; ++e)
        this.graphicsData[e].destroy();
      (this.points.length = 0),
        (this.points = null),
        (this.colors.length = 0),
        (this.colors = null),
        (this.uvs.length = 0),
        (this.uvs = null),
        (this.indices.length = 0),
        (this.indices = null),
        this.indexBuffer.destroy(),
        (this.indexBuffer = null),
        (this.graphicsData.length = 0),
        (this.graphicsData = null),
        (this.drawCalls.length = 0),
        (this.drawCalls = null),
        (this.batches.length = 0),
        (this.batches = null),
        (this._bounds = null);
    }
    containsPoint(e) {
      let t = this.graphicsData;
      for (let r = 0; r < t.length; ++r) {
        let i = t[r];
        if (
          i.fillStyle.visible &&
          i.shape &&
          (i.matrix ? i.matrix.applyInverse(e, aI) : aI.copyFrom(e),
          i.shape.contains(aI.x, aI.y))
        ) {
          let e = !1;
          if (i.holes) {
            for (let t = 0; t < i.holes.length; t++)
              if (i.holes[t].shape.contains(aI.x, aI.y)) {
                e = !0;
                break;
              }
          }
          if (!e) return !0;
        }
      }
      return !1;
    }
    updateBatches() {
      if (!this.graphicsData.length) {
        this.batchable = !0;
        return;
      }
      if (!this.validateBatching()) return;
      this.cacheDirty = this.dirty;
      let e = this.uvs,
        t = this.graphicsData,
        r = null,
        i = null;
      this.batches.length > 0 &&
        (i = (r = this.batches[this.batches.length - 1]).style);
      for (let s = this.shapeIndex; s < t.length; s++) {
        this.shapeIndex++;
        let n = t[s],
          a = n.fillStyle,
          o = n.lineStyle;
        aA[n.type].build(n),
          n.matrix && this.transformPoints(n.points, n.matrix),
          (a.visible || o.visible) && this.processHoles(n.holes);
        for (let t = 0; t < 2; t++) {
          let s = 0 === t ? a : o;
          if (!s.visible) continue;
          let l = s.texture.baseTexture,
            h = this.indices.length,
            u = this.points.length / 2;
          (l.wrapMode = et.REPEAT),
            0 === t ? this.processFill(n) : this.processLine(n);
          let d = this.points.length / 2 - u;
          0 !== d &&
            (r && !this._compareStyles(i, s) && (r.end(h, u), (r = null)),
            r ||
              ((r = aw.pop() || new a_()).begin(s, h, u),
              this.batches.push(r),
              (i = s)),
            this.addUvs(this.points, e, s.texture, u, d, s.matrix));
        }
      }
      let s = this.indices.length,
        n = this.points.length / 2;
      if ((r && r.end(s, n), 0 === this.batches.length)) {
        this.batchable = !0;
        return;
      }
      let a = n > 65535;
      this.indicesUint16 &&
      this.indices.length === this.indicesUint16.length &&
      a === this.indicesUint16.BYTES_PER_ELEMENT > 2
        ? this.indicesUint16.set(this.indices)
        : (this.indicesUint16 = a
            ? new Uint32Array(this.indices)
            : new Uint16Array(this.indices)),
        (this.batchable = this.isBatchable()),
        this.batchable ? this.packBatches() : this.buildDrawCalls();
    }
    _compareStyles(e, t) {
      return !(
        !e ||
        !t ||
        e.texture.baseTexture !== t.texture.baseTexture ||
        e.color + e.alpha !== t.color + t.alpha ||
        !!e.native != !!t.native
      );
    }
    validateBatching() {
      if (this.dirty === this.cacheDirty || !this.graphicsData.length)
        return !1;
      for (let e = 0, t = this.graphicsData.length; e < t; e++) {
        let t = this.graphicsData[e],
          r = t.fillStyle,
          i = t.lineStyle;
        if (
          (r && !r.texture.baseTexture.valid) ||
          (i && !i.texture.baseTexture.valid)
        )
          return !1;
      }
      return !0;
    }
    packBatches() {
      this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
      let e = this.batches;
      for (let t = 0, r = e.length; t < r; t++) {
        let r = e[t];
        for (let e = 0; e < r.size; e++) {
          let t = r.start + e;
          this.indicesUint16[t] = this.indicesUint16[t] - r.attribStart;
        }
      }
    }
    isBatchable() {
      if (this.points.length > 131070) return !1;
      let t = this.batches;
      for (let e = 0; e < t.length; e++) if (t[e].style.native) return !1;
      return this.points.length < 2 * e.BATCHABLE_SIZE;
    }
    buildDrawCalls() {
      let e = ++r_._globalBatch;
      for (let e = 0; e < this.drawCalls.length; e++)
        this.drawCalls[e].texArray.clear(), aS.push(this.drawCalls[e]);
      this.drawCalls.length = 0;
      let t = this.colors,
        r = this.textureIds,
        i = aS.pop();
      i || ((i = new rx()).texArray = new id()),
        (i.texArray.count = 0),
        (i.start = 0),
        (i.size = 0),
        (i.type = q.TRIANGLES);
      let s = 0,
        n = null,
        a = 0,
        o = !1,
        l = q.TRIANGLES,
        h = 0;
      this.drawCalls.push(i);
      for (let u = 0; u < this.batches.length; u++) {
        let d = this.batches[u],
          c = d.style,
          p = c.texture.baseTexture;
        !!c.native !== o &&
          ((l = (o = !!c.native) ? q.LINES : q.TRIANGLES),
          (n = null),
          (s = 8),
          e++),
          n !== p &&
            ((n = p),
            p._batchEnabled !== e &&
              (8 === s &&
                (e++,
                (s = 0),
                i.size > 0 &&
                  ((i = aS.pop()) || ((i = new rx()).texArray = new id()),
                  this.drawCalls.push(i)),
                (i.start = h),
                (i.size = 0),
                (i.texArray.count = 0),
                (i.type = l)),
              (p.touched = 1),
              (p._batchEnabled = e),
              (p._batchLocation = s),
              (p.wrapMode = et.REPEAT),
              (i.texArray.elements[i.texArray.count++] = p),
              s++)),
          (i.size += d.size),
          (h += d.size),
          (a = p._batchLocation),
          this.addColors(t, c.color, c.alpha, d.attribSize, d.attribStart),
          this.addTextureIds(r, a, d.attribSize, d.attribStart);
      }
      (r_._globalBatch = e), this.packAttributes();
    }
    packAttributes() {
      let e = this.points,
        t = this.uvs,
        r = this.colors,
        i = this.textureIds,
        s = new ArrayBuffer(12 * e.length),
        n = new Float32Array(s),
        a = new Uint32Array(s),
        o = 0;
      for (let s = 0; s < e.length / 2; s++)
        (n[o++] = e[2 * s]),
          (n[o++] = e[2 * s + 1]),
          (n[o++] = t[2 * s]),
          (n[o++] = t[2 * s + 1]),
          (a[o++] = r[s]),
          (n[o++] = i[s]);
      this._buffer.update(s), this._indexBuffer.update(this.indicesUint16);
    }
    processFill(e) {
      e.holes.length
        ? ap.triangulate(e, this)
        : aA[e.type].triangulate(e, this);
    }
    processLine(e) {
      aE(e, this);
      for (let t = 0; t < e.holes.length; t++) aE(e.holes[t], this);
    }
    processHoles(e) {
      for (let t = 0; t < e.length; t++) {
        let r = e[t];
        aA[r.type].build(r),
          r.matrix && this.transformPoints(r.points, r.matrix);
      }
    }
    calculateBounds() {
      let e = this._bounds;
      e.clear(),
        e.addVertexData(this.points, 0, this.points.length),
        e.pad(this.boundsPadding, this.boundsPadding);
    }
    transformPoints(e, t) {
      for (let r = 0; r < e.length / 2; r++) {
        let i = e[2 * r],
          s = e[2 * r + 1];
        (e[2 * r] = t.a * i + t.c * s + t.tx),
          (e[2 * r + 1] = t.b * i + t.d * s + t.ty);
      }
    }
    addColors(e, t, r, i, s = 0) {
      let n = tk.shared.setValue(t).toLittleEndianNumber(),
        a = tk.shared.setValue(n).toPremultiplied(r);
      e.length = Math.max(e.length, s + i);
      for (let t = 0; t < i; t++) e[s + t] = a;
    }
    addTextureIds(e, t, r, i = 0) {
      e.length = Math.max(e.length, i + r);
      for (let s = 0; s < r; s++) e[i + s] = t;
    }
    addUvs(e, t, r, i, s, n = null) {
      let a = 0,
        o = t.length,
        l = r.frame;
      for (; a < s; ) {
        let r = e[(i + a) * 2],
          s = e[(i + a) * 2 + 1];
        if (n) {
          let e = n.a * r + n.c * s + n.tx;
          (s = n.b * r + n.d * s + n.ty), (r = e);
        }
        a++, t.push(r / l.width, s / l.height);
      }
      let h = r.baseTexture;
      (l.width < h.width || l.height < h.height) && this.adjustUvs(t, r, o, s);
    }
    adjustUvs(e, t, r, i) {
      let s = t.baseTexture,
        n = r + 2 * i,
        a = t.frame,
        o = a.width / s.width,
        l = a.height / s.height,
        h = a.x / a.width,
        u = a.y / a.height,
        d = Math.floor(e[r] + 1e-6),
        c = Math.floor(e[r + 1] + 1e-6);
      for (let t = r + 2; t < n; t += 2)
        (d = Math.min(d, Math.floor(e[t] + 1e-6))),
          (c = Math.min(c, Math.floor(e[t + 1] + 1e-6)));
      (h -= d), (u -= c);
      for (let t = r; t < n; t += 2)
        (e[t] = (e[t] + h) * o), (e[t + 1] = (e[t + 1] + u) * l);
    }
  };
aC.BATCHABLE_SIZE = 100;
class aP {
  constructor() {
    (this.color = 16777215),
      (this.alpha = 1),
      (this.texture = iM.WHITE),
      (this.matrix = null),
      (this.visible = !1),
      this.reset();
  }
  clone() {
    let e = new aP();
    return (
      (e.color = this.color),
      (e.alpha = this.alpha),
      (e.texture = this.texture),
      (e.matrix = this.matrix),
      (e.visible = this.visible),
      e
    );
  }
  reset() {
    (this.color = 16777215),
      (this.alpha = 1),
      (this.texture = iM.WHITE),
      (this.matrix = null),
      (this.visible = !1);
  }
  destroy() {
    (this.texture = null), (this.matrix = null);
  }
}
class ak extends aP {
  constructor() {
    super(...arguments),
      (this.width = 0),
      (this.alignment = 0.5),
      (this.native = !1),
      (this.cap = am.BUTT),
      (this.join = af.MITER),
      (this.miterLimit = 10);
  }
  clone() {
    let e = new ak();
    return (
      (e.color = this.color),
      (e.alpha = this.alpha),
      (e.texture = this.texture),
      (e.matrix = this.matrix),
      (e.visible = this.visible),
      (e.width = this.width),
      (e.alignment = this.alignment),
      (e.native = this.native),
      (e.cap = this.cap),
      (e.join = this.join),
      (e.miterLimit = this.miterLimit),
      e
    );
  }
  reset() {
    super.reset(),
      (this.color = 0),
      (this.alignment = 0.5),
      (this.width = 0),
      (this.native = !1),
      (this.cap = am.BUTT),
      (this.join = af.MITER),
      (this.miterLimit = 10);
  }
}
const aM = {},
  aD = class e extends sG {
    constructor(e = null) {
      super(),
        (this.shader = null),
        (this.pluginName = "batch"),
        (this.currentPath = null),
        (this.batches = []),
        (this.batchTint = -1),
        (this.batchDirty = -1),
        (this.vertexData = null),
        (this._fillStyle = new aP()),
        (this._lineStyle = new ak()),
        (this._matrix = null),
        (this._holeMode = !1),
        (this.state = ru.for2d()),
        (this._geometry = e || new aC()),
        this._geometry.refCount++,
        (this._transformID = -1),
        (this._tintColor = new tk(16777215)),
        (this.blendMode = Y.NORMAL);
    }
    get geometry() {
      return this._geometry;
    }
    clone() {
      return this.finishPoly(), new e(this._geometry);
    }
    set blendMode(e) {
      this.state.blendMode = e;
    }
    get blendMode() {
      return this.state.blendMode;
    }
    get tint() {
      return this._tintColor.value;
    }
    set tint(e) {
      this._tintColor.setValue(e);
    }
    get fill() {
      return this._fillStyle;
    }
    get line() {
      return this._lineStyle;
    }
    lineStyle(e = null, t = 0, r, i = 0.5, s = !1) {
      return (
        "number" == typeof e &&
          (e = { width: e, color: t, alpha: r, alignment: i, native: s }),
        this.lineTextureStyle(e)
      );
    }
    lineTextureStyle(e) {
      (e = Object.assign(
        {
          width: 0,
          texture: iM.WHITE,
          color: e?.texture ? 16777215 : 0,
          matrix: null,
          alignment: 0.5,
          native: !1,
          cap: am.BUTT,
          join: af.MITER,
          miterLimit: 10,
        },
        e
      )),
        this.normalizeColor(e),
        this.currentPath && this.startPoly();
      let t = e.width > 0 && e.alpha > 0;
      return (
        t
          ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
            Object.assign(this._lineStyle, { visible: t }, e))
          : this._lineStyle.reset(),
        this
      );
    }
    startPoly() {
      if (this.currentPath) {
        let e = this.currentPath.points,
          t = this.currentPath.points.length;
        t > 2 &&
          (this.drawShape(this.currentPath),
          (this.currentPath = new rN()),
          (this.currentPath.closeStroke = !1),
          this.currentPath.points.push(e[t - 2], e[t - 1]));
      } else (this.currentPath = new rN()), (this.currentPath.closeStroke = !1);
    }
    finishPoly() {
      this.currentPath &&
        (this.currentPath.points.length > 2
          ? (this.drawShape(this.currentPath), (this.currentPath = null))
          : (this.currentPath.points.length = 0));
    }
    moveTo(e, t) {
      return (
        this.startPoly(),
        (this.currentPath.points[0] = e),
        (this.currentPath.points[1] = t),
        this
      );
    }
    lineTo(e, t) {
      this.currentPath || this.moveTo(0, 0);
      let r = this.currentPath.points,
        i = r[r.length - 2],
        s = r[r.length - 1];
      return (i !== e || s !== t) && r.push(e, t), this;
    }
    _initCurve(e = 0, t = 0) {
      this.currentPath
        ? 0 === this.currentPath.points.length &&
          (this.currentPath.points = [e, t])
        : this.moveTo(e, t);
    }
    quadraticCurveTo(e, t, r, i) {
      this._initCurve();
      let s = this.currentPath.points;
      return (
        0 === s.length && this.moveTo(0, 0), aT.curveTo(e, t, r, i, s), this
      );
    }
    bezierCurveTo(e, t, r, i, s, n) {
      return (
        this._initCurve(),
        ax.curveTo(e, t, r, i, s, n, this.currentPath.points),
        this
      );
    }
    arcTo(e, t, r, i, s) {
      this._initCurve(e, t);
      let n = this.currentPath.points,
        a = ay.curveTo(e, t, r, i, s, n);
      if (a) {
        let {
          cx: e,
          cy: t,
          radius: r,
          startAngle: i,
          endAngle: s,
          anticlockwise: n,
        } = a;
        this.arc(e, t, r, i, s, n);
      }
      return this;
    }
    arc(e, t, r, i, s, n = !1) {
      if (
        i === s ||
        (!n && s <= i ? (s += rC) : n && i <= s && (i += rC), s - i == 0)
      )
        return this;
      let a = e + Math.cos(i) * r,
        o = t + Math.sin(i) * r,
        l = this._geometry.closePointEps,
        h = this.currentPath ? this.currentPath.points : null;
      if (h) {
        let e = Math.abs(h[h.length - 2] - a),
          t = Math.abs(h[h.length - 1] - o);
        (e < l && t < l) || h.push(a, o);
      } else this.moveTo(a, o), (h = this.currentPath.points);
      return ay.arc(a, o, e, t, r, i, s, n, h), this;
    }
    beginFill(e = 0, t) {
      return this.beginTextureFill({ texture: iM.WHITE, color: e, alpha: t });
    }
    normalizeColor(e) {
      let t = tk.shared.setValue(e.color ?? 0);
      (e.color = t.toNumber()), e.alpha ?? (e.alpha = t.alpha);
    }
    beginTextureFill(e) {
      (e = Object.assign(
        { texture: iM.WHITE, color: 16777215, matrix: null },
        e
      )),
        this.normalizeColor(e),
        this.currentPath && this.startPoly();
      let t = e.alpha > 0;
      return (
        t
          ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
            Object.assign(this._fillStyle, { visible: t }, e))
          : this._fillStyle.reset(),
        this
      );
    }
    endFill() {
      return this.finishPoly(), this._fillStyle.reset(), this;
    }
    drawRect(e, t, r, i) {
      return this.drawShape(new rO(e, t, r, i));
    }
    drawRoundedRect(e, t, r, i, s) {
      return this.drawShape(new rU(e, t, r, i, s));
    }
    drawCircle(e, t, r) {
      return this.drawShape(new rF(e, t, r));
    }
    drawEllipse(e, t, r, i) {
      return this.drawShape(new rL(e, t, r, i));
    }
    drawPolygon(...e) {
      let t,
        r = !0,
        i = e[0];
      i.points
        ? ((r = i.closeStroke), (t = i.points))
        : (t = Array.isArray(e[0]) ? e[0] : e);
      let s = new rN(t);
      return (s.closeStroke = r), this.drawShape(s), this;
    }
    drawShape(e) {
      return (
        this._holeMode
          ? this._geometry.drawHole(e, this._matrix)
          : this._geometry.drawShape(
              e,
              this._fillStyle.clone(),
              this._lineStyle.clone(),
              this._matrix
            ),
        this
      );
    }
    clear() {
      return (
        this._geometry.clear(),
        this._lineStyle.reset(),
        this._fillStyle.reset(),
        this._boundsID++,
        (this._matrix = null),
        (this._holeMode = !1),
        (this.currentPath = null),
        this
      );
    }
    isFastRect() {
      let e = this._geometry.graphicsData;
      return (
        1 === e.length &&
        e[0].shape.type === rM.RECT &&
        !e[0].matrix &&
        !e[0].holes.length &&
        !(e[0].lineStyle.visible && e[0].lineStyle.width)
      );
    }
    _render(e) {
      this.finishPoly();
      let t = this._geometry;
      t.updateBatches(),
        t.batchable
          ? (this.batchDirty !== t.batchDirty && this._populateBatches(),
            this._renderBatched(e))
          : (e.batch.flush(), this._renderDirect(e));
    }
    _populateBatches() {
      let e = this._geometry,
        t = this.blendMode,
        r = e.batches.length;
      (this.batchTint = -1),
        (this._transformID = -1),
        (this.batchDirty = e.batchDirty),
        (this.batches.length = r),
        (this.vertexData = new Float32Array(e.points));
      for (let i = 0; i < r; i++) {
        let r = e.batches[i],
          s = r.style.color,
          n = new Float32Array(
            this.vertexData.buffer,
            8 * r.attribStart,
            2 * r.attribSize
          ),
          a = new Float32Array(
            e.uvsFloat32.buffer,
            8 * r.attribStart,
            2 * r.attribSize
          ),
          o = {
            vertexData: n,
            blendMode: t,
            indices: new Uint16Array(
              e.indicesUint16.buffer,
              2 * r.start,
              r.size
            ),
            uvs: a,
            _batchRGB: tk.shared.setValue(s).toRgbArray(),
            _tintRGB: s,
            _texture: r.style.texture,
            alpha: r.style.alpha,
            worldAlpha: 1,
          };
        this.batches[i] = o;
      }
    }
    _renderBatched(e) {
      if (this.batches.length) {
        e.batch.setObjectRenderer(e.plugins[this.pluginName]),
          this.calculateVertices(),
          this.calculateTints();
        for (let t = 0, r = this.batches.length; t < r; t++) {
          let r = this.batches[t];
          (r.worldAlpha = this.worldAlpha * r.alpha),
            e.plugins[this.pluginName].render(r);
        }
      }
    }
    _renderDirect(e) {
      let t = this._resolveDirectShader(e),
        r = this._geometry,
        i = this.worldAlpha,
        s = t.uniforms,
        n = r.drawCalls;
      (s.translationMatrix = this.transform.worldTransform),
        tk.shared.setValue(this._tintColor).premultiply(i).toArray(s.tint),
        e.shader.bind(t),
        e.geometry.bind(r, t),
        e.state.set(this.state);
      for (let t = 0, i = n.length; t < i; t++)
        this._renderDrawCallDirect(e, r.drawCalls[t]);
    }
    _renderDrawCallDirect(e, t) {
      let { texArray: r, type: i, size: s, start: n } = t,
        a = r.count;
      for (let t = 0; t < a; t++) e.texture.bind(r.elements[t], t);
      e.geometry.draw(i, s, n);
    }
    _resolveDirectShader(e) {
      let t = this.shader,
        r = this.pluginName;
      if (!t) {
        if (!aM[r]) {
          let { maxTextures: t } = e.plugins[r],
            i = new Int32Array(t);
          for (let e = 0; e < t; e++) i[e] = e;
          let s = {
              tint: new Float32Array([1, 1, 1, 1]),
              translationMatrix: new rG(),
              default: il.from({ uSamplers: i }, !0),
            },
            n = e.plugins[r]._shader.program;
          aM[r] = new ih(n, s);
        }
        t = aM[r];
      }
      return t;
    }
    _calculateBounds() {
      this.finishPoly();
      let e = this._geometry;
      if (!e.graphicsData.length) return;
      let { minX: t, minY: r, maxX: i, maxY: s } = e.bounds;
      this._bounds.addFrame(this.transform, t, r, i, s);
    }
    containsPoint(t) {
      return (
        this.worldTransform.applyInverse(t, e._TEMP_POINT),
        this._geometry.containsPoint(e._TEMP_POINT)
      );
    }
    calculateTints() {
      if (this.batchTint !== this.tint) {
        this.batchTint = this._tintColor.toNumber();
        for (let e = 0; e < this.batches.length; e++) {
          let t = this.batches[e];
          t._tintRGB = tk.shared
            .setValue(this._tintColor)
            .multiply(t._batchRGB)
            .toLittleEndianNumber();
        }
      }
    }
    calculateVertices() {
      let e = this.transform._worldID;
      if (this._transformID === e) return;
      this._transformID = e;
      let t = this.transform.worldTransform,
        r = t.a,
        i = t.b,
        s = t.c,
        n = t.d,
        a = t.tx,
        o = t.ty,
        l = this._geometry.points,
        h = this.vertexData,
        u = 0;
      for (let e = 0; e < l.length; e += 2) {
        let t = l[e],
          d = l[e + 1];
        (h[u++] = r * t + s * d + a), (h[u++] = n * d + i * t + o);
      }
    }
    closePath() {
      let e = this.currentPath;
      return e && ((e.closeStroke = !0), this.finishPoly()), this;
    }
    setMatrix(e) {
      return (this._matrix = e), this;
    }
    beginHole() {
      return this.finishPoly(), (this._holeMode = !0), this;
    }
    endHole() {
      return this.finishPoly(), (this._holeMode = !1), this;
    }
    destroy(e) {
      this._geometry.refCount--,
        0 === this._geometry.refCount && this._geometry.dispose(),
        (this._matrix = null),
        (this.currentPath = null),
        this._lineStyle.destroy(),
        (this._lineStyle = null),
        this._fillStyle.destroy(),
        (this._fillStyle = null),
        (this._geometry = null),
        (this.shader = null),
        (this.vertexData = null),
        (this.batches.length = 0),
        (this.batches = null),
        super.destroy(e);
    }
  };
(aD.curves = ag), (aD._TEMP_POINT = new rD());
class aB {
  constructor(e, t) {
    (this.uvBuffer = e),
      (this.uvMatrix = t),
      (this.data = null),
      (this._bufferUpdateId = -1),
      (this._textureUpdateId = -1),
      (this._updateID = 0);
  }
  update(e) {
    if (
      !e &&
      this._bufferUpdateId === this.uvBuffer._updateID &&
      this._textureUpdateId === this.uvMatrix._updateID
    )
      return;
    (this._bufferUpdateId = this.uvBuffer._updateID),
      (this._textureUpdateId = this.uvMatrix._updateID);
    let t = this.uvBuffer.data;
    (this.data && this.data.length === t.length) ||
      (this.data = new Float32Array(t.length)),
      this.uvMatrix.multiplyUvs(t, this.data),
      this._updateID++;
  }
}
const aO = new rD(),
  aF = new rN();
(class e extends sG {
  constructor(e, t, r, i = q.TRIANGLES) {
    super(),
      (this.geometry = e),
      (this.shader = t),
      (this.state = r || ru.for2d()),
      (this.drawMode = i),
      (this.start = 0),
      (this.size = 0),
      (this.uvs = null),
      (this.indices = null),
      (this.vertexData = new Float32Array(1)),
      (this.vertexDirty = -1),
      (this._transformID = -1),
      (this._roundPixels = ed.ROUND_PIXELS),
      (this.batchUvs = null);
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e) {
    this._geometry !== e &&
      (this._geometry &&
        (this._geometry.refCount--,
        0 === this._geometry.refCount && this._geometry.dispose()),
      (this._geometry = e),
      this._geometry && this._geometry.refCount++,
      (this.vertexDirty = -1));
  }
  get uvBuffer() {
    return this.geometry.buffers[1];
  }
  get verticesBuffer() {
    return this.geometry.buffers[0];
  }
  set material(e) {
    this.shader = e;
  }
  get material() {
    return this.shader;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set roundPixels(e) {
    this._roundPixels !== e && (this._transformID = -1),
      (this._roundPixels = e);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get tint() {
    return "tint" in this.shader ? this.shader.tint : null;
  }
  set tint(e) {
    this.shader.tint = e;
  }
  get tintValue() {
    return this.shader.tintValue;
  }
  get texture() {
    return "texture" in this.shader ? this.shader.texture : null;
  }
  set texture(e) {
    this.shader.texture = e;
  }
  _render(t) {
    let r = this.geometry.buffers[0].data;
    this.shader.batchable &&
    this.drawMode === q.TRIANGLES &&
    r.length < 2 * e.BATCHABLE_SIZE
      ? this._renderToBatch(t)
      : this._renderDefault(t);
  }
  _renderDefault(e) {
    let t = this.shader;
    (t.alpha = this.worldAlpha),
      t.update && t.update(),
      e.batch.flush(),
      (t.uniforms.translationMatrix = this.transform.worldTransform.toArray(
        !0
      )),
      e.shader.bind(t),
      e.state.set(this.state),
      e.geometry.bind(this.geometry, t),
      e.geometry.draw(
        this.drawMode,
        this.size,
        this.start,
        this.geometry.instanceCount
      );
  }
  _renderToBatch(e) {
    let t = this.geometry,
      r = this.shader;
    r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()),
      this.calculateVertices(),
      (this.indices = t.indexBuffer.data),
      (this._tintRGB = r._tintRGB),
      (this._texture = r.texture);
    let i = this.material.pluginName;
    e.batch.setObjectRenderer(e.plugins[i]), e.plugins[i].render(this);
  }
  calculateVertices() {
    let e = this.geometry.buffers[0],
      t = e.data,
      r = e._updateID;
    if (r === this.vertexDirty && this._transformID === this.transform._worldID)
      return;
    (this._transformID = this.transform._worldID),
      this.vertexData.length !== t.length &&
        (this.vertexData = new Float32Array(t.length));
    let i = this.transform.worldTransform,
      s = i.a,
      n = i.b,
      a = i.c,
      o = i.d,
      l = i.tx,
      h = i.ty,
      u = this.vertexData;
    for (let e = 0; e < u.length / 2; e++) {
      let r = t[2 * e],
        i = t[2 * e + 1];
      (u[2 * e] = s * r + a * i + l), (u[2 * e + 1] = n * r + o * i + h);
    }
    if (this._roundPixels) {
      let e = ed.RESOLUTION;
      for (let t = 0; t < u.length; ++t) u[t] = Math.round(u[t] * e) / e;
    }
    this.vertexDirty = r;
  }
  calculateUvs() {
    let e = this.geometry.buffers[1],
      t = this.shader;
    t.uvMatrix.isSimple
      ? (this.uvs = e.data)
      : (this.batchUvs || (this.batchUvs = new aB(e, t.uvMatrix)),
        this.batchUvs.update(),
        (this.uvs = this.batchUvs.data));
  }
  _calculateBounds() {
    this.calculateVertices(),
      this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  containsPoint(e) {
    if (!this.getBounds().contains(e.x, e.y)) return !1;
    this.worldTransform.applyInverse(e, aO);
    let t = this.geometry.getBuffer("aVertexPosition").data,
      r = aF.points,
      i = this.geometry.getIndex().data,
      s = i.length,
      n = 4 === this.drawMode ? 3 : 1;
    for (let e = 0; e + 2 < s; e += n) {
      let s = 2 * i[e],
        n = 2 * i[e + 1],
        a = 2 * i[e + 2];
      if (
        ((r[0] = t[s]),
        (r[1] = t[s + 1]),
        (r[2] = t[n]),
        (r[3] = t[n + 1]),
        (r[4] = t[a]),
        (r[5] = t[a + 1]),
        aF.contains(aO.x, aO.y))
      )
        return !0;
    }
    return !1;
  }
  destroy(e) {
    super.destroy(e),
      this._cachedTexture &&
        (this._cachedTexture.destroy(), (this._cachedTexture = null)),
      (this.geometry = null),
      (this.shader = null),
      (this.state = null),
      (this.uvs = null),
      (this.indices = null),
      (this.vertexData = null);
  }
}).BATCHABLE_SIZE = 100;
var aL = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,
  aN = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class aU {
  constructor(e, t, r) {
    (this.geometry = new rR()),
      (this.indexBuffer = null),
      (this.size = r),
      (this.dynamicProperties = []),
      (this.staticProperties = []);
    for (let r = 0; r < e.length; ++r) {
      let i = e[r];
      (i = {
        attributeName: i.attributeName,
        size: i.size,
        uploadFunction: i.uploadFunction,
        type: i.type || Q.FLOAT,
        offset: i.offset,
      }),
        t[r] ? this.dynamicProperties.push(i) : this.staticProperties.push(i);
    }
    (this.staticStride = 0),
      (this.staticBuffer = null),
      (this.staticData = null),
      (this.staticDataUint32 = null),
      (this.dynamicStride = 0),
      (this.dynamicBuffer = null),
      (this.dynamicData = null),
      (this.dynamicDataUint32 = null),
      (this._updateID = 0),
      this.initBuffers();
  }
  initBuffers() {
    let e = this.geometry,
      t = 0;
    (this.indexBuffer = new rb(eP.createIndicesForQuads(this.size), !0, !0)),
      e.addIndex(this.indexBuffer),
      (this.dynamicStride = 0);
    for (let e = 0; e < this.dynamicProperties.length; ++e) {
      let r = this.dynamicProperties[e];
      (r.offset = t), (t += r.size), (this.dynamicStride += r.size);
    }
    let r = new ArrayBuffer(this.size * this.dynamicStride * 16);
    (this.dynamicData = new Float32Array(r)),
      (this.dynamicDataUint32 = new Uint32Array(r)),
      (this.dynamicBuffer = new rb(this.dynamicData, !1, !1));
    let i = 0;
    this.staticStride = 0;
    for (let e = 0; e < this.staticProperties.length; ++e) {
      let t = this.staticProperties[e];
      (t.offset = i), (i += t.size), (this.staticStride += t.size);
    }
    let s = new ArrayBuffer(this.size * this.staticStride * 16);
    (this.staticData = new Float32Array(s)),
      (this.staticDataUint32 = new Uint32Array(s)),
      (this.staticBuffer = new rb(this.staticData, !0, !1));
    for (let t = 0; t < this.dynamicProperties.length; ++t) {
      let r = this.dynamicProperties[t];
      e.addAttribute(
        r.attributeName,
        this.dynamicBuffer,
        0,
        r.type === Q.UNSIGNED_BYTE,
        r.type,
        4 * this.dynamicStride,
        4 * r.offset
      );
    }
    for (let t = 0; t < this.staticProperties.length; ++t) {
      let r = this.staticProperties[t];
      e.addAttribute(
        r.attributeName,
        this.staticBuffer,
        0,
        r.type === Q.UNSIGNED_BYTE,
        r.type,
        4 * this.staticStride,
        4 * r.offset
      );
    }
  }
  uploadDynamic(e, t, r) {
    for (let i = 0; i < this.dynamicProperties.length; i++) {
      let s = this.dynamicProperties[i];
      s.uploadFunction(
        e,
        t,
        r,
        s.type === Q.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
        this.dynamicStride,
        s.offset
      );
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(e, t, r) {
    for (let i = 0; i < this.staticProperties.length; i++) {
      let s = this.staticProperties[i];
      s.uploadFunction(
        e,
        t,
        r,
        s.type === Q.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
        this.staticStride,
        s.offset
      );
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    (this.indexBuffer = null),
      (this.dynamicProperties = null),
      (this.dynamicBuffer = null),
      (this.dynamicData = null),
      (this.dynamicDataUint32 = null),
      (this.staticProperties = null),
      (this.staticBuffer = null),
      (this.staticData = null),
      (this.staticDataUint32 = null),
      this.geometry.destroy();
  }
}
var aG = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,
  aH = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class az extends ic {
  constructor(e) {
    super(e),
      (this.shader = null),
      (this.properties = null),
      (this.tempMatrix = new rG()),
      (this.properties = [
        {
          attributeName: "aVertexPosition",
          size: 2,
          uploadFunction: this.uploadVertices,
          offset: 0,
        },
        {
          attributeName: "aPositionCoord",
          size: 2,
          uploadFunction: this.uploadPosition,
          offset: 0,
        },
        {
          attributeName: "aRotation",
          size: 1,
          uploadFunction: this.uploadRotation,
          offset: 0,
        },
        {
          attributeName: "aTextureCoord",
          size: 2,
          uploadFunction: this.uploadUvs,
          offset: 0,
        },
        {
          attributeName: "aColor",
          size: 1,
          type: Q.UNSIGNED_BYTE,
          uploadFunction: this.uploadTint,
          offset: 0,
        },
      ]),
      (this.shader = ih.from(aH, aG, {})),
      (this.state = ru.for2d());
  }
  render(e) {
    let t = e.children,
      r = e._maxSize,
      i = e._batchSize,
      s = this.renderer,
      n = t.length;
    if (0 === n) return;
    n > r && !e.autoResize && (n = r);
    let a = e._buffers;
    a || (a = e._buffers = this.generateBuffers(e));
    let o = t[0]._texture.baseTexture,
      l = o.alphaMode > 0;
    (this.state.blendMode = eP.correctBlendMode(e.blendMode, l)),
      s.state.set(this.state);
    let h = s.gl,
      u = e.worldTransform.copyTo(this.tempMatrix);
    u.prepend(s.globalUniforms.uniforms.projectionMatrix),
      (this.shader.uniforms.translationMatrix = u.toArray(!0)),
      (this.shader.uniforms.uColor = tk.shared
        .setValue(e.tintRgb)
        .premultiply(e.worldAlpha, l)
        .toArray(this.shader.uniforms.uColor)),
      (this.shader.uniforms.uSampler = o),
      this.renderer.shader.bind(this.shader);
    let d = !1;
    for (let r = 0, o = 0; r < n; r += i, o += 1) {
      let l = n - r;
      l > i && (l = i), o >= a.length && a.push(this._generateOneMoreBuffer(e));
      let u = a[o];
      u.uploadDynamic(t, r, l);
      let c = e._bufferUpdateIDs[o] || 0;
      (d = d || u._updateID < c) &&
        ((u._updateID = e._updateID), u.uploadStatic(t, r, l)),
        s.geometry.bind(u.geometry),
        h.drawElements(h.TRIANGLES, 6 * l, h.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(e) {
    let t = [],
      r = e._maxSize,
      i = e._batchSize,
      s = e._properties;
    for (let e = 0; e < r; e += i) t.push(new aU(this.properties, s, i));
    return t;
  }
  _generateOneMoreBuffer(e) {
    let t = e._batchSize,
      r = e._properties;
    return new aU(this.properties, r, t);
  }
  uploadVertices(e, t, r, i, s, n) {
    let a = 0,
      o = 0,
      l = 0,
      h = 0;
    for (let u = 0; u < r; ++u) {
      let r = e[t + u],
        d = r._texture,
        c = r.scale.x,
        p = r.scale.y,
        f = d.trim,
        m = d.orig;
      f
        ? ((a = (o = f.x - r.anchor.x * m.width) + f.width),
          (l = (h = f.y - r.anchor.y * m.height) + f.height))
        : ((a = m.width * (1 - r.anchor.x)),
          (o = -(m.width * r.anchor.x)),
          (l = m.height * (1 - r.anchor.y)),
          (h = -(m.height * r.anchor.y))),
        (i[n] = o * c),
        (i[n + 1] = h * p),
        (i[n + s] = a * c),
        (i[n + s + 1] = h * p),
        (i[n + 2 * s] = a * c),
        (i[n + 2 * s + 1] = l * p),
        (i[n + 3 * s] = o * c),
        (i[n + 3 * s + 1] = l * p),
        (n += 4 * s);
    }
  }
  uploadPosition(e, t, r, i, s, n) {
    for (let a = 0; a < r; a++) {
      let r = e[t + a].position;
      (i[n] = r.x),
        (i[n + 1] = r.y),
        (i[n + s] = r.x),
        (i[n + s + 1] = r.y),
        (i[n + 2 * s] = r.x),
        (i[n + 2 * s + 1] = r.y),
        (i[n + 3 * s] = r.x),
        (i[n + 3 * s + 1] = r.y),
        (n += 4 * s);
    }
  }
  uploadRotation(e, t, r, i, s, n) {
    for (let a = 0; a < r; a++) {
      let r = e[t + a].rotation;
      (i[n] = r),
        (i[n + s] = r),
        (i[n + 2 * s] = r),
        (i[n + 3 * s] = r),
        (n += 4 * s);
    }
  }
  uploadUvs(e, t, r, i, s, n) {
    for (let a = 0; a < r; ++a) {
      let r = e[t + a]._texture._uvs;
      r
        ? ((i[n] = r.x0),
          (i[n + 1] = r.y0),
          (i[n + s] = r.x1),
          (i[n + s + 1] = r.y1),
          (i[n + 2 * s] = r.x2),
          (i[n + 2 * s + 1] = r.y2),
          (i[n + 3 * s] = r.x3),
          (i[n + 3 * s + 1] = r.y3))
        : ((i[n] = 0),
          (i[n + 1] = 0),
          (i[n + s] = 0),
          (i[n + s + 1] = 0),
          (i[n + 2 * s] = 0),
          (i[n + 2 * s + 1] = 0),
          (i[n + 3 * s] = 0),
          (i[n + 3 * s + 1] = 0)),
        (n += 4 * s);
    }
  }
  uploadTint(e, t, r, i, s, n) {
    for (let a = 0; a < r; ++a) {
      let r = e[t + a],
        o = tk.shared
          .setValue(r._tintRGB)
          .toPremultiplied(r.alpha, r.texture.baseTexture.alphaMode > 0);
      (i[n] = o),
        (i[n + s] = o),
        (i[n + 2 * s] = o),
        (i[n + 3 * s] = o),
        (n += 4 * s);
    }
  }
  destroy() {
    super.destroy(),
      this.shader && (this.shader.destroy(), (this.shader = null)),
      (this.tempMatrix = null);
  }
}
(az.extension = { name: "particle", type: rs.RendererPlugin }), ro.add(az);
var aj =
  (((F = aj || {})[(F.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
  (F[(F.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL"),
  F);
const a$ = { willReadFrequently: !0 },
  aX = class e {
    static get experimentalLetterSpacingSupported() {
      let t = e._experimentalLetterSpacingSupported;
      if (void 0 !== t) {
        let r = ed.ADAPTER.getCanvasRenderingContext2D().prototype;
        t = e._experimentalLetterSpacingSupported =
          "letterSpacing" in r || "textLetterSpacing" in r;
      }
      return t;
    }
    constructor(e, t, r, i, s, n, a, o, l) {
      (this.text = e),
        (this.style = t),
        (this.width = r),
        (this.height = i),
        (this.lines = s),
        (this.lineWidths = n),
        (this.lineHeight = a),
        (this.maxLineWidth = o),
        (this.fontProperties = l);
    }
    static measureText(t, r, i, s = e._canvas) {
      i = i ?? r.wordWrap;
      let n = r.toFontString(),
        a = e.measureFont(n);
      0 === a.fontSize && ((a.fontSize = r.fontSize), (a.ascent = r.fontSize));
      let o = s.getContext("2d", a$);
      o.font = n;
      let l = (i ? e.wordWrap(t, r, s) : t).split(/(?:\r\n|\r|\n)/),
        h = Array(l.length),
        u = 0;
      for (let t = 0; t < l.length; t++) {
        let i = e._measureText(l[t], r.letterSpacing, o);
        (h[t] = i), (u = Math.max(u, i));
      }
      let d = u + r.strokeThickness;
      r.dropShadow && (d += r.dropShadowDistance);
      let c = r.lineHeight || a.fontSize + r.strokeThickness,
        p =
          Math.max(c, a.fontSize + 2 * r.strokeThickness) +
          r.leading +
          (l.length - 1) * (c + r.leading);
      return (
        r.dropShadow && (p += r.dropShadowDistance),
        new e(t, r, d, p, l, h, c + r.leading, u, a)
      );
    }
    static _measureText(t, r, i) {
      let s = !1;
      e.experimentalLetterSpacingSupported &&
        (e.experimentalLetterSpacing
          ? ((i.letterSpacing = `${r}px`),
            (i.textLetterSpacing = `${r}px`),
            (s = !0))
          : ((i.letterSpacing = "0px"), (i.textLetterSpacing = "0px")));
      let n = i.measureText(t).width;
      return (
        n > 0 &&
          (s ? (n -= r) : (n += (e.graphemeSegmenter(t).length - 1) * r)),
        n
      );
    }
    static wordWrap(t, r, i = e._canvas) {
      let s = i.getContext("2d", a$),
        n = 0,
        a = "",
        o = "",
        l = Object.create(null),
        { letterSpacing: h, whiteSpace: u } = r,
        d = e.collapseSpaces(u),
        c = e.collapseNewlines(u),
        p = !d,
        f = r.wordWrapWidth + h,
        m = e.tokenize(t);
      for (let t = 0; t < m.length; t++) {
        let i = m[t];
        if (e.isNewline(i)) {
          if (!c) {
            (o += e.addLine(a)), (p = !d), (a = ""), (n = 0);
            continue;
          }
          i = " ";
        }
        if (d) {
          let t = e.isBreakingSpace(i),
            r = e.isBreakingSpace(a[a.length - 1]);
          if (t && r) continue;
        }
        let u = e.getFromCache(i, h, l, s);
        if (u > f) {
          if (
            ("" !== a && ((o += e.addLine(a)), (a = ""), (n = 0)),
            e.canBreakWords(i, r.breakWords))
          ) {
            let t = e.wordWrapSplit(i);
            for (let u = 0; u < t.length; u++) {
              let d = t[u],
                c = d,
                m = 1;
              for (; t[u + m]; ) {
                let s = t[u + m];
                if (e.canBreakChars(c, s, i, u, r.breakWords)) break;
                (d += s), (c = s), m++;
              }
              u += m - 1;
              let g = e.getFromCache(d, h, l, s);
              g + n > f && ((o += e.addLine(a)), (p = !1), (a = ""), (n = 0)),
                (a += d),
                (n += g);
            }
          } else {
            a.length > 0 && ((o += e.addLine(a)), (a = ""), (n = 0));
            let r = t === m.length - 1;
            (o += e.addLine(i, !r)), (p = !1), (a = ""), (n = 0);
          }
        } else
          u + n > f && ((p = !1), (o += e.addLine(a)), (a = ""), (n = 0)),
            (a.length > 0 || !e.isBreakingSpace(i) || p) &&
              ((a += i), (n += u));
      }
      return o + e.addLine(a, !1);
    }
    static addLine(t, r = !0) {
      return (
        (t = e.trimRight(t)),
        (t = r
          ? `${t}
`
          : t)
      );
    }
    static getFromCache(t, r, i, s) {
      let n = i[t];
      return (
        "number" != typeof n && ((n = e._measureText(t, r, s) + r), (i[t] = n)),
        n
      );
    }
    static collapseSpaces(e) {
      return "normal" === e || "pre-line" === e;
    }
    static collapseNewlines(e) {
      return "normal" === e;
    }
    static trimRight(t) {
      if ("string" != typeof t) return "";
      for (let r = t.length - 1; r >= 0; r--) {
        let i = t[r];
        if (!e.isBreakingSpace(i)) break;
        t = t.slice(0, -1);
      }
      return t;
    }
    static isNewline(t) {
      return "string" == typeof t && e._newlines.includes(t.charCodeAt(0));
    }
    static isBreakingSpace(t, r) {
      return (
        "string" == typeof t && e._breakingSpaces.includes(t.charCodeAt(0))
      );
    }
    static tokenize(t) {
      let r = [],
        i = "";
      if ("string" != typeof t) return r;
      for (let s = 0; s < t.length; s++) {
        let n = t[s],
          a = t[s + 1];
        if (e.isBreakingSpace(n, a) || e.isNewline(n)) {
          "" !== i && (r.push(i), (i = "")), r.push(n);
          continue;
        }
        i += n;
      }
      return "" !== i && r.push(i), r;
    }
    static canBreakWords(e, t) {
      return t;
    }
    static canBreakChars(e, t, r, i, s) {
      return !0;
    }
    static wordWrapSplit(t) {
      return e.graphemeSegmenter(t);
    }
    static measureFont(t) {
      if (e._fonts[t]) return e._fonts[t];
      let r = { ascent: 0, descent: 0, fontSize: 0 },
        i = e._canvas,
        s = e._context;
      s.font = t;
      let n = e.METRICS_STRING + e.BASELINE_SYMBOL,
        a = Math.ceil(s.measureText(n).width),
        o = Math.ceil(s.measureText(e.BASELINE_SYMBOL).width),
        l = Math.ceil(e.HEIGHT_MULTIPLIER * o);
      if (((o = (o * e.BASELINE_MULTIPLIER) | 0), 0 === a || 0 === l))
        return (e._fonts[t] = r), r;
      (i.width = a),
        (i.height = l),
        (s.fillStyle = "#f00"),
        s.fillRect(0, 0, a, l),
        (s.font = t),
        (s.textBaseline = "alphabetic"),
        (s.fillStyle = "#000"),
        s.fillText(n, 0, o);
      let h = s.getImageData(0, 0, a, l).data,
        u = h.length,
        d = 4 * a,
        c = 0,
        p = 0,
        f = !1;
      for (c = 0; c < o; ++c) {
        for (let e = 0; e < d; e += 4)
          if (255 !== h[p + e]) {
            f = !0;
            break;
          }
        if (f) break;
        p += d;
      }
      for (r.ascent = o - c, p = u - d, f = !1, c = l; c > o; --c) {
        for (let e = 0; e < d; e += 4)
          if (255 !== h[p + e]) {
            f = !0;
            break;
          }
        if (f) break;
        p -= d;
      }
      return (
        (r.descent = c - o),
        (r.fontSize = r.ascent + r.descent),
        (e._fonts[t] = r),
        r
      );
    }
    static clearMetrics(t = "") {
      t ? delete e._fonts[t] : (e._fonts = {});
    }
    static get _canvas() {
      if (!e.__canvas) {
        let t;
        try {
          let r = new OffscreenCanvas(0, 0);
          if (r.getContext("2d", a$)?.measureText) return (e.__canvas = r), r;
          t = ed.ADAPTER.createCanvas();
        } catch {
          t = ed.ADAPTER.createCanvas();
        }
        (t.width = t.height = 10), (e.__canvas = t);
      }
      return e.__canvas;
    }
    static get _context() {
      return (
        e.__context || (e.__context = e._canvas.getContext("2d", a$)),
        e.__context
      );
    }
  };
(aX.METRICS_STRING = "|ÉqÅ"),
  (aX.BASELINE_SYMBOL = "M"),
  (aX.BASELINE_MULTIPLIER = 1.4),
  (aX.HEIGHT_MULTIPLIER = 2),
  (aX.graphemeSegmenter = (() => {
    if ("function" == typeof Intl?.Segmenter) {
      let e = new Intl.Segmenter();
      return (t) => [...e.segment(t)].map((e) => e.segment);
    }
    return (e) => [...e];
  })()),
  (aX.experimentalLetterSpacing = !1),
  (aX._fonts = {}),
  (aX._newlines = [10, 13]),
  (aX._breakingSpaces = [
    9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
    12288,
  ]);
const aV = [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
  ],
  aW = class e {
    constructor(e) {
      (this.styleID = 0), this.reset(), aZ(this, e, e);
    }
    clone() {
      let t = {};
      return aZ(t, this, e.defaultStyle), new e(t);
    }
    reset() {
      aZ(this, e.defaultStyle, e.defaultStyle);
    }
    get align() {
      return this._align;
    }
    set align(e) {
      this._align !== e && ((this._align = e), this.styleID++);
    }
    get breakWords() {
      return this._breakWords;
    }
    set breakWords(e) {
      this._breakWords !== e && ((this._breakWords = e), this.styleID++);
    }
    get dropShadow() {
      return this._dropShadow;
    }
    set dropShadow(e) {
      this._dropShadow !== e && ((this._dropShadow = e), this.styleID++);
    }
    get dropShadowAlpha() {
      return this._dropShadowAlpha;
    }
    set dropShadowAlpha(e) {
      this._dropShadowAlpha !== e &&
        ((this._dropShadowAlpha = e), this.styleID++);
    }
    get dropShadowAngle() {
      return this._dropShadowAngle;
    }
    set dropShadowAngle(e) {
      this._dropShadowAngle !== e &&
        ((this._dropShadowAngle = e), this.styleID++);
    }
    get dropShadowBlur() {
      return this._dropShadowBlur;
    }
    set dropShadowBlur(e) {
      this._dropShadowBlur !== e &&
        ((this._dropShadowBlur = e), this.styleID++);
    }
    get dropShadowColor() {
      return this._dropShadowColor;
    }
    set dropShadowColor(e) {
      let t = aq(e);
      this._dropShadowColor !== t &&
        ((this._dropShadowColor = t), this.styleID++);
    }
    get dropShadowDistance() {
      return this._dropShadowDistance;
    }
    set dropShadowDistance(e) {
      this._dropShadowDistance !== e &&
        ((this._dropShadowDistance = e), this.styleID++);
    }
    get fill() {
      return this._fill;
    }
    set fill(e) {
      let t = aq(e);
      this._fill !== t && ((this._fill = t), this.styleID++);
    }
    get fillGradientType() {
      return this._fillGradientType;
    }
    set fillGradientType(e) {
      this._fillGradientType !== e &&
        ((this._fillGradientType = e), this.styleID++);
    }
    get fillGradientStops() {
      return this._fillGradientStops;
    }
    set fillGradientStops(e) {
      (function (e, t) {
        if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)
          return !1;
        for (let r = 0; r < e.length; ++r) if (e[r] !== t[r]) return !1;
        return !0;
      })(this._fillGradientStops, e) ||
        ((this._fillGradientStops = e), this.styleID++);
    }
    get fontFamily() {
      return this._fontFamily;
    }
    set fontFamily(e) {
      this.fontFamily !== e && ((this._fontFamily = e), this.styleID++);
    }
    get fontSize() {
      return this._fontSize;
    }
    set fontSize(e) {
      this._fontSize !== e && ((this._fontSize = e), this.styleID++);
    }
    get fontStyle() {
      return this._fontStyle;
    }
    set fontStyle(e) {
      this._fontStyle !== e && ((this._fontStyle = e), this.styleID++);
    }
    get fontVariant() {
      return this._fontVariant;
    }
    set fontVariant(e) {
      this._fontVariant !== e && ((this._fontVariant = e), this.styleID++);
    }
    get fontWeight() {
      return this._fontWeight;
    }
    set fontWeight(e) {
      this._fontWeight !== e && ((this._fontWeight = e), this.styleID++);
    }
    get letterSpacing() {
      return this._letterSpacing;
    }
    set letterSpacing(e) {
      this._letterSpacing !== e && ((this._letterSpacing = e), this.styleID++);
    }
    get lineHeight() {
      return this._lineHeight;
    }
    set lineHeight(e) {
      this._lineHeight !== e && ((this._lineHeight = e), this.styleID++);
    }
    get leading() {
      return this._leading;
    }
    set leading(e) {
      this._leading !== e && ((this._leading = e), this.styleID++);
    }
    get lineJoin() {
      return this._lineJoin;
    }
    set lineJoin(e) {
      this._lineJoin !== e && ((this._lineJoin = e), this.styleID++);
    }
    get miterLimit() {
      return this._miterLimit;
    }
    set miterLimit(e) {
      this._miterLimit !== e && ((this._miterLimit = e), this.styleID++);
    }
    get padding() {
      return this._padding;
    }
    set padding(e) {
      this._padding !== e && ((this._padding = e), this.styleID++);
    }
    get stroke() {
      return this._stroke;
    }
    set stroke(e) {
      let t = aq(e);
      this._stroke !== t && ((this._stroke = t), this.styleID++);
    }
    get strokeThickness() {
      return this._strokeThickness;
    }
    set strokeThickness(e) {
      this._strokeThickness !== e &&
        ((this._strokeThickness = e), this.styleID++);
    }
    get textBaseline() {
      return this._textBaseline;
    }
    set textBaseline(e) {
      this._textBaseline !== e && ((this._textBaseline = e), this.styleID++);
    }
    get trim() {
      return this._trim;
    }
    set trim(e) {
      this._trim !== e && ((this._trim = e), this.styleID++);
    }
    get whiteSpace() {
      return this._whiteSpace;
    }
    set whiteSpace(e) {
      this._whiteSpace !== e && ((this._whiteSpace = e), this.styleID++);
    }
    get wordWrap() {
      return this._wordWrap;
    }
    set wordWrap(e) {
      this._wordWrap !== e && ((this._wordWrap = e), this.styleID++);
    }
    get wordWrapWidth() {
      return this._wordWrapWidth;
    }
    set wordWrapWidth(e) {
      this._wordWrapWidth !== e && ((this._wordWrapWidth = e), this.styleID++);
    }
    toFontString() {
      let e =
          "number" == typeof this.fontSize
            ? `${this.fontSize}px`
            : this.fontSize,
        t = this.fontFamily;
      Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
      for (let e = t.length - 1; e >= 0; e--) {
        let r = t[e].trim();
        /([\"\'])[^\'\"]+\1/.test(r) || aV.includes(r) || (r = `"${r}"`),
          (t[e] = r);
      }
      return `${this.fontStyle} ${this.fontVariant} ${
        this.fontWeight
      } ${e} ${t.join(",")}`;
    }
  };
aW.defaultStyle = {
  align: "left",
  breakWords: !1,
  dropShadow: !1,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: aj.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  leading: 0,
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: !1,
  whiteSpace: "pre",
  wordWrap: !1,
  wordWrapWidth: 100,
};
let aY = aW;
function aq(e) {
  let t = tk.shared,
    r = (e) => {
      let r = t.setValue(e);
      return 1 === r.alpha ? r.toHex() : r.toRgbaString();
    };
  return Array.isArray(e) ? e.map(r) : r(e);
}
function aZ(e, t, r) {
  for (let i in r) Array.isArray(t[i]) ? (e[i] = t[i].slice()) : (e[i] = t[i]);
}
const aK = { texture: !0, children: !1, baseTexture: !0 },
  aQ = class e extends sj {
    constructor(t, r, i) {
      let s = !1;
      i || ((i = ed.ADAPTER.createCanvas()), (s = !0)),
        (i.width = 3),
        (i.height = 3);
      let n = iM.from(i);
      (n.orig = new rO()),
        (n.trim = new rO()),
        super(n),
        (this._ownCanvas = s),
        (this.canvas = i),
        (this.context = i.getContext("2d", { willReadFrequently: !0 })),
        (this._resolution = e.defaultResolution ?? ed.RESOLUTION),
        (this._autoResolution = e.defaultAutoResolution),
        (this._text = null),
        (this._style = null),
        (this._styleListener = null),
        (this._font = ""),
        (this.text = t),
        (this.style = r),
        (this.localStyleID = -1);
    }
    static get experimentalLetterSpacing() {
      return aX.experimentalLetterSpacing;
    }
    static set experimentalLetterSpacing(e) {
      eP.deprecation(
        "7.1.0",
        "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"
      ),
        (aX.experimentalLetterSpacing = e);
    }
    updateText(e) {
      let t, r;
      let i = this._style;
      if (
        (this.localStyleID !== i.styleID &&
          ((this.dirty = !0), (this.localStyleID = i.styleID)),
        !this.dirty && e)
      )
        return;
      this._font = this._style.toFontString();
      let s = this.context,
        n = aX.measureText(
          this._text || " ",
          this._style,
          this._style.wordWrap,
          this.canvas
        ),
        a = n.width,
        o = n.height,
        l = n.lines,
        h = n.lineHeight,
        u = n.lineWidths,
        d = n.maxLineWidth,
        c = n.fontProperties;
      (this.canvas.width = Math.ceil(
        Math.ceil(Math.max(1, a) + 2 * i.padding) * this._resolution
      )),
        (this.canvas.height = Math.ceil(
          Math.ceil(Math.max(1, o) + 2 * i.padding) * this._resolution
        )),
        s.scale(this._resolution, this._resolution),
        s.clearRect(0, 0, this.canvas.width, this.canvas.height),
        (s.font = this._font),
        (s.lineWidth = i.strokeThickness),
        (s.textBaseline = i.textBaseline),
        (s.lineJoin = i.lineJoin),
        (s.miterLimit = i.miterLimit);
      let p = i.dropShadow ? 2 : 1;
      for (let e = 0; e < p; ++e) {
        let a = i.dropShadow && 0 === e,
          p = a ? Math.ceil(Math.max(1, o) + 2 * i.padding) : 0,
          f = p * this._resolution;
        if (a) {
          (s.fillStyle = "black"), (s.strokeStyle = "black");
          let e = i.dropShadowColor,
            t = i.dropShadowBlur * this._resolution,
            r = i.dropShadowDistance * this._resolution;
          (s.shadowColor = tk.shared
            .setValue(e)
            .setAlpha(i.dropShadowAlpha)
            .toRgbaString()),
            (s.shadowBlur = t),
            (s.shadowOffsetX = Math.cos(i.dropShadowAngle) * r),
            (s.shadowOffsetY = Math.sin(i.dropShadowAngle) * r + f);
        } else
          (s.fillStyle = this._generateFillStyle(i, l, n)),
            (s.strokeStyle = i.stroke),
            (s.shadowColor = "black"),
            (s.shadowBlur = 0),
            (s.shadowOffsetX = 0),
            (s.shadowOffsetY = 0);
        let m = (h - c.fontSize) / 2;
        h - c.fontSize < 0 && (m = 0);
        for (let e = 0; e < l.length; e++)
          (t = i.strokeThickness / 2),
            (r = i.strokeThickness / 2 + e * h + c.ascent + m),
            "right" === i.align
              ? (t += d - u[e])
              : "center" === i.align && (t += (d - u[e]) / 2),
            i.stroke &&
              i.strokeThickness &&
              this.drawLetterSpacing(
                l[e],
                t + i.padding,
                r + i.padding - p,
                !0
              ),
            i.fill &&
              this.drawLetterSpacing(l[e], t + i.padding, r + i.padding - p);
      }
      this.updateTexture();
    }
    drawLetterSpacing(e, t, r, i = !1) {
      let s = this._style.letterSpacing,
        n = !1;
      if (
        (aX.experimentalLetterSpacingSupported &&
          (aX.experimentalLetterSpacing
            ? ((this.context.letterSpacing = `${s}px`),
              (this.context.textLetterSpacing = `${s}px`),
              (n = !0))
            : ((this.context.letterSpacing = "0px"),
              (this.context.textLetterSpacing = "0px"))),
        0 === s || n)
      ) {
        i ? this.context.strokeText(e, t, r) : this.context.fillText(e, t, r);
        return;
      }
      let a = t,
        o = aX.graphemeSegmenter(e),
        l = this.context.measureText(e).width,
        h = 0;
      for (let e = 0; e < o.length; ++e) {
        let t = o[e];
        i ? this.context.strokeText(t, a, r) : this.context.fillText(t, a, r);
        let n = "";
        for (let t = e + 1; t < o.length; ++t) n += o[t];
        (a += l - (h = this.context.measureText(n).width) + s), (l = h);
      }
    }
    updateTexture() {
      let e = this.canvas;
      if (this._style.trim) {
        let t = eP.trimCanvas(e);
        t.data &&
          ((e.width = t.width),
          (e.height = t.height),
          this.context.putImageData(t.data, 0, 0));
      }
      let t = this._texture,
        r = this._style,
        i = r.trim ? 0 : r.padding,
        s = t.baseTexture;
      (t.trim.width = t._frame.width = e.width / this._resolution),
        (t.trim.height = t._frame.height = e.height / this._resolution),
        (t.trim.x = -i),
        (t.trim.y = -i),
        (t.orig.width = t._frame.width - 2 * i),
        (t.orig.height = t._frame.height - 2 * i),
        this._onTextureUpdate(),
        s.setRealSize(e.width, e.height, this._resolution),
        t.updateUvs(),
        (this.dirty = !1);
    }
    _render(e) {
      this._autoResolution &&
        this._resolution !== e.resolution &&
        ((this._resolution = e.resolution), (this.dirty = !0)),
        this.updateText(!0),
        super._render(e);
    }
    updateTransform() {
      this.updateText(!0), super.updateTransform();
    }
    getBounds(e, t) {
      return (
        this.updateText(!0),
        -1 === this._textureID && (e = !1),
        super.getBounds(e, t)
      );
    }
    getLocalBounds(e) {
      return this.updateText(!0), super.getLocalBounds.call(this, e);
    }
    _calculateBounds() {
      this.calculateVertices(), this._bounds.addQuad(this.vertexData);
    }
    _generateFillStyle(e, t, r) {
      let i;
      let s = e.fill;
      if (!Array.isArray(s)) return s;
      if (1 === s.length) return s[0];
      let n = e.dropShadow ? e.dropShadowDistance : 0,
        a = e.padding || 0,
        o = this.canvas.width / this._resolution - n - 2 * a,
        l = this.canvas.height / this._resolution - n - 2 * a,
        h = s.slice(),
        u = e.fillGradientStops.slice();
      if (!u.length) {
        let e = h.length + 1;
        for (let t = 1; t < e; ++t) u.push(t / e);
      }
      if (
        (h.unshift(s[0]),
        u.unshift(0),
        h.push(s[s.length - 1]),
        u.push(1),
        e.fillGradientType === aj.LINEAR_VERTICAL)
      ) {
        i = this.context.createLinearGradient(o / 2, a, o / 2, l + a);
        let s = r.fontProperties.fontSize + e.strokeThickness;
        for (let e = 0; e < t.length; e++) {
          let n = r.lineHeight * (e - 1) + s,
            a = r.lineHeight * e,
            o = a;
          e > 0 && n > a && (o = (a + n) / 2);
          let d = a + s,
            c = r.lineHeight * (e + 1),
            p = d;
          e + 1 < t.length && c < d && (p = (d + c) / 2);
          let f = (p - o) / l;
          for (let e = 0; e < h.length; e++) {
            let t = Math.min(
              1,
              Math.max(
                0,
                o / l + ("number" == typeof u[e] ? u[e] : e / h.length) * f
              )
            );
            (t = Number(t.toFixed(5))), i.addColorStop(t, h[e]);
          }
        }
      } else {
        i = this.context.createLinearGradient(a, l / 2, o + a, l / 2);
        let e = h.length + 1,
          t = 1;
        for (let r = 0; r < h.length; r++) {
          let s;
          (s = "number" == typeof u[r] ? u[r] : t / e),
            i.addColorStop(s, h[r]),
            t++;
        }
      }
      return i;
    }
    destroy(e) {
      "boolean" == typeof e && (e = { children: e }),
        (e = Object.assign({}, aK, e)),
        super.destroy(e),
        this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
        (this.context = null),
        (this.canvas = null),
        (this._style = null);
    }
    get width() {
      return (
        this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
      );
    }
    set width(e) {
      this.updateText(!0);
      let t = eP.sign(this.scale.x) || 1;
      (this.scale.x = (t * e) / this._texture.orig.width), (this._width = e);
    }
    get height() {
      return (
        this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
      );
    }
    set height(e) {
      this.updateText(!0);
      let t = eP.sign(this.scale.y) || 1;
      (this.scale.y = (t * e) / this._texture.orig.height), (this._height = e);
    }
    get style() {
      return this._style;
    }
    set style(e) {
      (e = e || {}) instanceof aY
        ? (this._style = e)
        : (this._style = new aY(e)),
        (this.localStyleID = -1),
        (this.dirty = !0);
    }
    get text() {
      return this._text;
    }
    set text(e) {
      (e = String(e ?? "")),
        this._text !== e && ((this._text = e), (this.dirty = !0));
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(e) {
      (this._autoResolution = !1),
        this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
    }
  };
aQ.defaultAutoResolution = !0;
class aJ {
  constructor(e) {
    (this.maxItemsPerFrame = e), (this.itemsLeft = 0);
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function a0(e, t) {
  let r = !1;
  if (e?._textures?.length) {
    for (let i = 0; i < e._textures.length; i++)
      if (e._textures[i] instanceof iM) {
        let s = e._textures[i].baseTexture;
        t.includes(s) || (t.push(s), (r = !0));
      }
  }
  return r;
}
function a1(e, t) {
  if (e.baseTexture instanceof r_) {
    let r = e.baseTexture;
    return t.includes(r) || t.push(r), !0;
  }
  return !1;
}
function a2(e, t) {
  if (e._texture && e._texture instanceof iM) {
    let r = e._texture.baseTexture;
    return t.includes(r) || t.push(r), !0;
  }
  return !1;
}
function a3(e, t) {
  return t instanceof aQ && (t.updateText(!0), !0);
}
function a4(e, t) {
  if (t instanceof aY) {
    let e = t.toFontString();
    return aX.measureFont(e), !0;
  }
  return !1;
}
function a5(e, t) {
  if (e instanceof aQ) {
    t.includes(e.style) || t.push(e.style), t.includes(e) || t.push(e);
    let r = e._texture.baseTexture;
    return t.includes(r) || t.push(r), !0;
  }
  return !1;
}
function a6(e, t) {
  return e instanceof aY && (t.includes(e) || t.push(e), !0);
}
const a8 = class e {
  constructor(t) {
    (this.limiter = new aJ(e.uploadsPerFrame)),
      (this.renderer = t),
      (this.uploadHookHelper = null),
      (this.queue = []),
      (this.addHooks = []),
      (this.uploadHooks = []),
      (this.completes = []),
      (this.ticking = !1),
      (this.delayedTick = () => {
        this.queue && this.prepareItems();
      }),
      this.registerFindHook(a5),
      this.registerFindHook(a6),
      this.registerFindHook(a0),
      this.registerFindHook(a1),
      this.registerFindHook(a2),
      this.registerUploadHook(a3),
      this.registerUploadHook(a4);
  }
  upload(e) {
    return new Promise((t) => {
      e && this.add(e),
        this.queue.length
          ? (this.completes.push(t),
            this.ticking ||
              ((this.ticking = !0),
              sx.system.addOnce(this.tick, this, sy.UTILITY)))
          : t();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (
      this.limiter.beginFrame();
      this.queue.length && this.limiter.allowedToUpload();

    ) {
      let e = this.queue[0],
        t = !1;
      if (e && !e._destroyed) {
        for (let r = 0, i = this.uploadHooks.length; r < i; r++)
          if (this.uploadHooks[r](this.uploadHookHelper, e)) {
            this.queue.shift(), (t = !0);
            break;
          }
      }
      t || this.queue.shift();
    }
    if (this.queue.length) sx.system.addOnce(this.tick, this, sy.UTILITY);
    else {
      this.ticking = !1;
      let e = this.completes.slice(0);
      this.completes.length = 0;
      for (let t = 0, r = e.length; t < r; t++) e[t]();
    }
  }
  registerFindHook(e) {
    return e && this.addHooks.push(e), this;
  }
  registerUploadHook(e) {
    return e && this.uploadHooks.push(e), this;
  }
  add(e) {
    for (
      let t = 0, r = this.addHooks.length;
      t < r && !this.addHooks[t](e, this.queue);
      t++
    );
    if (e instanceof sG)
      for (let t = e.children.length - 1; t >= 0; t--) this.add(e.children[t]);
    return this;
  }
  destroy() {
    this.ticking && sx.system.remove(this.tick, this),
      (this.ticking = !1),
      (this.addHooks = null),
      (this.uploadHooks = null),
      (this.renderer = null),
      (this.completes = null),
      (this.queue = null),
      (this.limiter = null),
      (this.uploadHookHelper = null);
  }
};
a8.uploadsPerFrame = 4;
let a7 = a8;
function a9(e, t) {
  return (
    t instanceof r_ && (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), !0)
  );
}
function oe(e, t) {
  if (!(t instanceof aD)) return !1;
  let { geometry: r } = t;
  t.finishPoly(), r.updateBatches();
  let { batches: i } = r;
  for (let t = 0; t < i.length; t++) {
    let { texture: r } = i[t].style;
    r && a9(e, r.baseTexture);
  }
  return r.batchable || e.geometry.bind(r, t._resolveDirectShader(e)), !0;
}
function ot(e, t) {
  return e instanceof aD && (t.push(e), !0);
}
Object.defineProperties(ed, {
  UPLOADS_PER_FRAME: {
    get: () => a7.uploadsPerFrame,
    set(e) {
      eP.deprecation(
        "7.1.0",
        "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"
      ),
        (a7.uploadsPerFrame = e);
    },
  },
});
class or extends a7 {
  constructor(e) {
    super(e),
      (this.uploadHookHelper = this.renderer),
      this.registerFindHook(ot),
      this.registerUploadHook(a9),
      this.registerUploadHook(oe);
  }
}
(or.extension = { name: "prepare", type: rs.RendererSystem }), ro.add(or);
class oi extends sj {
  constructor(e, t = !0) {
    super(e[0] instanceof iM ? e[0] : e[0].texture),
      (this._textures = null),
      (this._durations = null),
      (this._autoUpdate = t),
      (this._isConnectedToTicker = !1),
      (this.animationSpeed = 1),
      (this.loop = !0),
      (this.updateAnchor = !1),
      (this.onComplete = null),
      (this.onFrameChange = null),
      (this.onLoop = null),
      (this._currentTime = 0),
      (this._playing = !1),
      (this._previousFrame = null),
      (this.textures = e);
  }
  stop() {
    this._playing &&
      ((this._playing = !1),
      this._autoUpdate &&
        this._isConnectedToTicker &&
        (sx.shared.remove(this.update, this),
        (this._isConnectedToTicker = !1)));
  }
  play() {
    this._playing ||
      ((this._playing = !0),
      this._autoUpdate &&
        !this._isConnectedToTicker &&
        (sx.shared.add(this.update, this, sy.HIGH),
        (this._isConnectedToTicker = !0)));
  }
  gotoAndStop(e) {
    this.stop(), (this.currentFrame = e);
  }
  gotoAndPlay(e) {
    (this.currentFrame = e), this.play();
  }
  update(e) {
    if (!this._playing) return;
    let t = this.animationSpeed * e,
      r = this.currentFrame;
    if (null !== this._durations) {
      let r = (this._currentTime % 1) * this._durations[this.currentFrame];
      for (r += (t / 60) * 1e3; r < 0; )
        this._currentTime--, (r += this._durations[this.currentFrame]);
      let i = Math.sign(this.animationSpeed * e);
      for (
        this._currentTime = Math.floor(this._currentTime);
        r >= this._durations[this.currentFrame];

      )
        (r -= this._durations[this.currentFrame] * i), (this._currentTime += i);
      this._currentTime += r / this._durations[this.currentFrame];
    } else this._currentTime += t;
    this._currentTime < 0 && !this.loop
      ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
      : this._currentTime >= this._textures.length && !this.loop
      ? (this.gotoAndStop(this._textures.length - 1),
        this.onComplete && this.onComplete())
      : r !== this.currentFrame &&
        (this.loop &&
          this.onLoop &&
          ((this.animationSpeed > 0 && this.currentFrame < r) ||
            (this.animationSpeed < 0 && this.currentFrame > r)) &&
          this.onLoop(),
        this.updateTexture());
  }
  updateTexture() {
    let e = this.currentFrame;
    this._previousFrame !== e &&
      ((this._previousFrame = e),
      (this._texture = this._textures[e]),
      (this._textureID = -1),
      (this._textureTrimmedID = -1),
      (this._cachedTint = 16777215),
      (this.uvs = this._texture._uvs.uvsFloat32),
      this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
      this.onFrameChange && this.onFrameChange(this.currentFrame));
  }
  destroy(e) {
    this.stop(),
      super.destroy(e),
      (this.onComplete = null),
      (this.onFrameChange = null),
      (this.onLoop = null);
  }
  static fromFrames(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(iM.from(e[r]));
    return new oi(t);
  }
  static fromImages(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(iM.from(e[r]));
    return new oi(t);
  }
  get totalFrames() {
    return this._textures.length;
  }
  get textures() {
    return this._textures;
  }
  set textures(e) {
    if (e[0] instanceof iM) (this._textures = e), (this._durations = null);
    else {
      (this._textures = []), (this._durations = []);
      for (let t = 0; t < e.length; t++)
        this._textures.push(e[t].texture), this._durations.push(e[t].time);
    }
    (this._previousFrame = null), this.gotoAndStop(0), this.updateTexture();
  }
  get currentFrame() {
    let e = Math.floor(this._currentTime) % this._textures.length;
    return e < 0 && (e += this._textures.length), e;
  }
  set currentFrame(e) {
    if (e < 0 || e > this.totalFrames - 1)
      throw Error(
        `[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`
      );
    let t = this.currentFrame;
    (this._currentTime = e), t !== this.currentFrame && this.updateTexture();
  }
  get playing() {
    return this._playing;
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(e) {
    e !== this._autoUpdate &&
      ((this._autoUpdate = e),
      !this._autoUpdate && this._isConnectedToTicker
        ? (sx.shared.remove(this.update, this),
          (this._isConnectedToTicker = !1))
        : this._autoUpdate &&
          !this._isConnectedToTicker &&
          this._playing &&
          (sx.shared.add(this.update, this), (this._isConnectedToTicker = !0)));
  }
}
new rD();
var os = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,
  on = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
  oa = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord)
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,
  oo = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
  ol = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const oh = new rG();
class ou extends ic {
  constructor(e) {
    super(e),
      e.runners.contextChange.add(this),
      (this.quad = new iF()),
      (this.state = ru.for2d());
  }
  contextChange() {
    let e = this.renderer,
      t = { globals: e.globalUniforms };
    (this.simpleShader = ih.from(oo, ol, t)),
      (this.shader =
        e.context.webGLVersion > 1 ? ih.from(on, os, t) : ih.from(oo, oa, t));
  }
  render(e) {
    let t = this.renderer,
      r = this.quad,
      i = r.vertices;
    (i[0] = i[6] = -(e._width * e.anchor.x)),
      (i[1] = i[3] = -(e._height * e.anchor.y)),
      (i[2] = i[4] = e._width * (1 - e.anchor.x)),
      (i[5] = i[7] = e._height * (1 - e.anchor.y));
    let s = e.uvRespectAnchor ? e.anchor.x : 0,
      n = e.uvRespectAnchor ? e.anchor.y : 0;
    ((i = r.uvs)[0] = i[6] = -s),
      (i[1] = i[3] = -n),
      (i[2] = i[4] = 1 - s),
      (i[5] = i[7] = 1 - n),
      r.invalidate();
    let a = e._texture,
      o = a.baseTexture,
      l = o.alphaMode > 0,
      h = e.tileTransform.localTransform,
      u = e.uvMatrix,
      d =
        o.isPowerOfTwo &&
        a.frame.width === o.width &&
        a.frame.height === o.height;
    d &&
      (o._glTextures[t.CONTEXT_UID]
        ? (d = o.wrapMode !== et.CLAMP)
        : o.wrapMode === et.CLAMP && (o.wrapMode = et.REPEAT));
    let c = d ? this.simpleShader : this.shader,
      p = a.width,
      f = a.height,
      m = e._width,
      g = e._height;
    oh.set(
      (h.a * p) / m,
      (h.b * p) / g,
      (h.c * f) / m,
      (h.d * f) / g,
      h.tx / m,
      h.ty / g
    ),
      oh.invert(),
      d
        ? oh.prepend(u.mapCoord)
        : ((c.uniforms.uMapCoord = u.mapCoord.toArray(!0)),
          (c.uniforms.uClampFrame = u.uClampFrame),
          (c.uniforms.uClampOffset = u.uClampOffset)),
      (c.uniforms.uTransform = oh.toArray(!0)),
      (c.uniforms.uColor = tk.shared
        .setValue(e.tint)
        .premultiply(e.worldAlpha, l)
        .toArray(c.uniforms.uColor)),
      (c.uniforms.translationMatrix = e.transform.worldTransform.toArray(!0)),
      (c.uniforms.uSampler = a),
      t.shader.bind(c),
      t.geometry.bind(r),
      (this.state.blendMode = eP.correctBlendMode(e.blendMode, l)),
      t.state.set(this.state),
      t.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
(ou.extension = { name: "tilingSprite", type: rs.RendererPlugin }), ro.add(ou);
const od = class e {
  constructor(e, t, r = null) {
    (this.linkedSheets = []),
      (this._texture = e instanceof iM ? e : null),
      (this.baseTexture = e instanceof r_ ? e : this._texture.baseTexture),
      (this.textures = {}),
      (this.animations = {}),
      (this.data = t);
    let i = this.baseTexture.resource;
    (this.resolution = this._updateResolution(r || (i ? i.url : null))),
      (this._frames = this.data.frames),
      (this._frameKeys = Object.keys(this._frames)),
      (this._batchIndex = 0),
      (this._callback = null);
  }
  _updateResolution(e = null) {
    let { scale: t } = this.data.meta,
      r = eP.getResolutionOfUrl(e, null);
    return (
      null === r && (r = "number" == typeof t ? t : parseFloat(t ?? "1")),
      1 !== r && this.baseTexture.setResolution(r),
      r
    );
  }
  parse() {
    return new Promise((t) => {
      (this._callback = t),
        (this._batchIndex = 0),
        this._frameKeys.length <= e.BATCH_SIZE
          ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete())
          : this._nextBatch();
    });
  }
  _processFrames(t) {
    let r = t,
      i = e.BATCH_SIZE;
    for (; r - t < i && r < this._frameKeys.length; ) {
      let e = this._frameKeys[r],
        t = this._frames[e],
        i = t.frame;
      if (i) {
        let r = null,
          s = null,
          n = !1 !== t.trimmed && t.sourceSize ? t.sourceSize : t.frame,
          a = new rO(
            0,
            0,
            Math.floor(n.w) / this.resolution,
            Math.floor(n.h) / this.resolution
          );
        (r = t.rotated
          ? new rO(
              Math.floor(i.x) / this.resolution,
              Math.floor(i.y) / this.resolution,
              Math.floor(i.h) / this.resolution,
              Math.floor(i.w) / this.resolution
            )
          : new rO(
              Math.floor(i.x) / this.resolution,
              Math.floor(i.y) / this.resolution,
              Math.floor(i.w) / this.resolution,
              Math.floor(i.h) / this.resolution
            )),
          !1 !== t.trimmed &&
            t.spriteSourceSize &&
            (s = new rO(
              Math.floor(t.spriteSourceSize.x) / this.resolution,
              Math.floor(t.spriteSourceSize.y) / this.resolution,
              Math.floor(i.w) / this.resolution,
              Math.floor(i.h) / this.resolution
            )),
          (this.textures[e] = new iM(
            this.baseTexture,
            r,
            a,
            s,
            t.rotated ? 2 : 0,
            t.anchor,
            t.borders
          )),
          iM.addToCache(this.textures[e], e.toString());
      }
      r++;
    }
  }
  _processAnimations() {
    let e = this.data.animations || {};
    for (let t in e) {
      this.animations[t] = [];
      for (let r = 0; r < e[t].length; r++) {
        let i = e[t][r];
        this.animations[t].push(this.textures[i]);
      }
    }
  }
  _parseComplete() {
    let e = this._callback;
    (this._callback = null),
      (this._batchIndex = 0),
      e.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * e.BATCH_SIZE),
      this._batchIndex++,
      setTimeout(() => {
        this._batchIndex * e.BATCH_SIZE < this._frameKeys.length
          ? this._nextBatch()
          : (this._processAnimations(), this._parseComplete());
      }, 0);
  }
  destroy(e = !1) {
    for (let e in this.textures) this.textures[e].destroy();
    (this._frames = null),
      (this._frameKeys = null),
      (this.data = null),
      (this.textures = null),
      e && (this._texture?.destroy(), this.baseTexture.destroy()),
      (this._texture = null),
      (this.baseTexture = null),
      (this.linkedSheets = []);
  }
};
od.BATCH_SIZE = 1e3;
const oc = ["jpg", "png", "jpeg", "avif", "webp"],
  op = {
    extension: rs.Asset,
    cache: {
      test: (e) => e instanceof od,
      getCacheableAssets: (e, t) =>
        (function e(t, r, i) {
          let s = {};
          if (
            (t.forEach((e) => {
              s[e] = r;
            }),
            Object.keys(r.textures).forEach((e) => {
              s[e] = r.textures[e];
            }),
            !i)
          ) {
            let i = eP.path.dirname(t[0]);
            r.linkedSheets.forEach((t, n) => {
              Object.assign(
                s,
                e([`${i}/${r.data.meta.related_multi_packs[n]}`], t, !0)
              );
            });
          }
          return s;
        })(e, t, !1),
    },
    resolver: {
      test: (e) => {
        let t = e.split("?")[0].split("."),
          r = t.pop(),
          i = t.pop();
        return "json" === r && oc.includes(i);
      },
      parse: (e) => {
        let t = e.split(".");
        return {
          resolution: parseFloat(ed.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
          format: t[t.length - 2],
          src: e,
        };
      },
    },
    loader: {
      name: "spritesheetLoader",
      extension: { type: rs.LoadParser, priority: n_.Normal },
      testParse: async (e, t) =>
        ".json" === eP.path.extname(t.src).toLowerCase() && !!e.frames,
      async parse(e, t, r) {
        let i = eP.path.dirname(t.src);
        i && i.lastIndexOf("/") !== i.length - 1 && (i += "/");
        let s = i + e.meta.image;
        s = nf(s, t.src);
        let n = new od((await r.load([s]))[s].baseTexture, e, t.src);
        await n.parse();
        let a = e?.meta?.related_multi_packs;
        if (Array.isArray(a)) {
          let e = [];
          for (let s of a) {
            if ("string" != typeof s) continue;
            let n = i + s;
            t.data?.ignoreMultiPack ||
              ((n = nf(n, t.src)),
              e.push(r.load({ src: n, data: { ignoreMultiPack: !0 } })));
          }
          let s = await Promise.all(e);
          (n.linkedSheets = s),
            s.forEach((e) => {
              e.linkedSheets = [n].concat(
                n.linkedSheets.filter((t) => t !== e)
              );
            });
        }
        return n;
      },
      unload(e) {
        e.destroy(!0);
      },
    },
  };
ro.add(op);
class of {
  constructor() {
    (this.info = []),
      (this.common = []),
      (this.page = []),
      (this.char = []),
      (this.kerning = []),
      (this.distanceField = []);
  }
}
class om {
  static test(e) {
    return "string" == typeof e && e.startsWith("info face=");
  }
  static parse(e) {
    let t = e.match(/^[a-z]+\s+.+$/gm),
      r = {
        info: [],
        common: [],
        page: [],
        char: [],
        chars: [],
        kerning: [],
        kernings: [],
        distanceField: [],
      };
    for (let e in t) {
      let i = t[e].match(/^[a-z]+/gm)[0],
        s = t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
        n = {};
      for (let e in s) {
        let t = s[e].split("="),
          r = t[0],
          i = t[1].replace(/"/gm, ""),
          a = parseFloat(i),
          o = isNaN(a) ? i : a;
        n[r] = o;
      }
      r[i].push(n);
    }
    let i = new of();
    return (
      r.info.forEach((e) =>
        i.info.push({ face: e.face, size: parseInt(e.size, 10) })
      ),
      r.common.forEach((e) =>
        i.common.push({ lineHeight: parseInt(e.lineHeight, 10) })
      ),
      r.page.forEach((e) =>
        i.page.push({ id: parseInt(e.id, 10), file: e.file })
      ),
      r.char.forEach((e) =>
        i.char.push({
          id: parseInt(e.id, 10),
          page: parseInt(e.page, 10),
          x: parseInt(e.x, 10),
          y: parseInt(e.y, 10),
          width: parseInt(e.width, 10),
          height: parseInt(e.height, 10),
          xoffset: parseInt(e.xoffset, 10),
          yoffset: parseInt(e.yoffset, 10),
          xadvance: parseInt(e.xadvance, 10),
        })
      ),
      r.kerning.forEach((e) =>
        i.kerning.push({
          first: parseInt(e.first, 10),
          second: parseInt(e.second, 10),
          amount: parseInt(e.amount, 10),
        })
      ),
      r.distanceField.forEach((e) =>
        i.distanceField.push({
          distanceRange: parseInt(e.distanceRange, 10),
          fieldType: e.fieldType,
        })
      ),
      i
    );
  }
}
class og {
  static test(e) {
    return (
      "string" != typeof e &&
      "getElementsByTagName" in e &&
      e.getElementsByTagName("page").length &&
      null !== e.getElementsByTagName("info")[0].getAttribute("face")
    );
  }
  static parse(e) {
    let t = new of(),
      r = e.getElementsByTagName("info"),
      i = e.getElementsByTagName("common"),
      s = e.getElementsByTagName("page"),
      n = e.getElementsByTagName("char"),
      a = e.getElementsByTagName("kerning"),
      o = e.getElementsByTagName("distanceField");
    for (let e = 0; e < r.length; e++)
      t.info.push({
        face: r[e].getAttribute("face"),
        size: parseInt(r[e].getAttribute("size"), 10),
      });
    for (let e = 0; e < i.length; e++)
      t.common.push({
        lineHeight: parseInt(i[e].getAttribute("lineHeight"), 10),
      });
    for (let e = 0; e < s.length; e++)
      t.page.push({
        id: parseInt(s[e].getAttribute("id"), 10) || 0,
        file: s[e].getAttribute("file"),
      });
    for (let e = 0; e < n.length; e++) {
      let r = n[e];
      t.char.push({
        id: parseInt(r.getAttribute("id"), 10),
        page: parseInt(r.getAttribute("page"), 10) || 0,
        x: parseInt(r.getAttribute("x"), 10),
        y: parseInt(r.getAttribute("y"), 10),
        width: parseInt(r.getAttribute("width"), 10),
        height: parseInt(r.getAttribute("height"), 10),
        xoffset: parseInt(r.getAttribute("xoffset"), 10),
        yoffset: parseInt(r.getAttribute("yoffset"), 10),
        xadvance: parseInt(r.getAttribute("xadvance"), 10),
      });
    }
    for (let e = 0; e < a.length; e++)
      t.kerning.push({
        first: parseInt(a[e].getAttribute("first"), 10),
        second: parseInt(a[e].getAttribute("second"), 10),
        amount: parseInt(a[e].getAttribute("amount"), 10),
      });
    for (let e = 0; e < o.length; e++)
      t.distanceField.push({
        fieldType: o[e].getAttribute("fieldType"),
        distanceRange: parseInt(o[e].getAttribute("distanceRange"), 10),
      });
    return t;
  }
}
class oy {
  static test(e) {
    return (
      !!("string" == typeof e && e.includes("<font>")) &&
      og.test(ed.ADAPTER.parseXML(e))
    );
  }
  static parse(e) {
    return og.parse(ed.ADAPTER.parseXML(e));
  }
}
const o_ = [om, og, oy];
function ox(e) {
  return e.codePointAt ? e.codePointAt(0) : e.charCodeAt(0);
}
const ov = class e {
  constructor(e, t, r) {
    let [i] = e.info,
      [s] = e.common,
      [n] = e.page,
      [a] = e.distanceField,
      o = eP.getResolutionOfUrl(n.file),
      l = {};
    (this._ownsTextures = r),
      (this.font = i.face),
      (this.size = i.size),
      (this.lineHeight = s.lineHeight / o),
      (this.chars = {}),
      (this.pageTextures = l);
    for (let r = 0; r < e.page.length; r++) {
      let { id: i, file: s } = e.page[r];
      (l[i] = t instanceof Array ? t[r] : t[s]),
        a?.fieldType &&
          "none" !== a.fieldType &&
          ((l[i].baseTexture.alphaMode = ei.NO_PREMULTIPLIED_ALPHA),
          (l[i].baseTexture.mipmap = er.OFF));
    }
    for (let t = 0; t < e.char.length; t++) {
      let { id: r, page: i } = e.char[t],
        {
          x: s,
          y: n,
          width: a,
          height: h,
          xoffset: u,
          yoffset: d,
          xadvance: c,
        } = e.char[t];
      (s /= o), (n /= o), (a /= o), (h /= o), (u /= o), (d /= o), (c /= o);
      let p = new rO(s + l[i].frame.x / o, n + l[i].frame.y / o, a, h);
      this.chars[r] = {
        xOffset: u,
        yOffset: d,
        xAdvance: c,
        kerning: {},
        texture: new iM(l[i].baseTexture, p),
        page: i,
      };
    }
    for (let t = 0; t < e.kerning.length; t++) {
      let { first: r, second: i, amount: s } = e.kerning[t];
      (r /= o),
        (i /= o),
        (s /= o),
        this.chars[i] && (this.chars[i].kerning[r] = s);
    }
    (this.distanceFieldRange = a?.distanceRange),
      (this.distanceFieldType = a?.fieldType?.toLowerCase() ?? "none");
  }
  destroy() {
    for (let e in this.chars)
      this.chars[e].texture.destroy(), (this.chars[e].texture = null);
    for (let e in this.pageTextures)
      this._ownsTextures && this.pageTextures[e].destroy(!0),
        (this.pageTextures[e] = null);
    (this.chars = null), (this.pageTextures = null);
  }
  static install(t, r, i) {
    let s;
    if (t instanceof of) s = t;
    else {
      let e = (function (e) {
        for (let t = 0; t < o_.length; t++) if (o_[t].test(e)) return o_[t];
        return null;
      })(t);
      if (!e) throw Error("Unrecognized data format for font.");
      s = e.parse(t);
    }
    r instanceof iM && (r = [r]);
    let n = new e(s, r, i);
    return (e.available[n.font] = n), n;
  }
  static uninstall(t) {
    let r = e.available[t];
    if (!r) throw Error(`No font found named '${t}'`);
    r.destroy(), delete e.available[t];
  }
  static from(t, r, i) {
    if (!t) throw Error("[BitmapFont] Property `name` is required.");
    let {
        chars: s,
        padding: n,
        resolution: a,
        textureWidth: o,
        textureHeight: l,
        ...h
      } = Object.assign({}, e.defaultOptions, i),
      u = (function (e) {
        "string" == typeof e && (e = [e]);
        let t = [];
        for (let i = 0, s = e.length; i < s; i++) {
          let s = e[i];
          if (Array.isArray(s)) {
            if (2 !== s.length)
              throw Error(
                `[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`
              );
            let e = s[0].charCodeAt(0),
              r = s[1].charCodeAt(0);
            if (r < e) throw Error("[BitmapFont]: Invalid character range.");
            for (let i = e; i <= r; i++) t.push(String.fromCharCode(i));
          } else {
            var r;
            t.push(...((r = s), Array.from ? Array.from(r) : r.split("")));
          }
        }
        if (0 === t.length)
          throw Error("[BitmapFont]: Empty set when resolving characters.");
        return t;
      })(s),
      d = r instanceof aY ? r : new aY(r),
      c = new of();
    (c.info[0] = { face: d.fontFamily, size: d.fontSize }),
      (c.common[0] = { lineHeight: d.fontSize });
    let p = 0,
      f = 0,
      m,
      g,
      y,
      _ = 0,
      x = [],
      v = [];
    for (let e = 0; e < u.length; e++) {
      m ||
        (((m = ed.ADAPTER.createCanvas()).width = o),
        (m.height = l),
        (g = m.getContext("2d")),
        (y = new r_(m, { resolution: a, ...h })),
        x.push(y),
        v.push(new iM(y)),
        c.page.push({ id: v.length - 1, file: "" }));
      let t = u[e],
        r = aX.measureText(t, d, !1, m),
        i = r.width,
        s = Math.ceil(r.height),
        b = Math.ceil(("italic" === d.fontStyle ? 2 : 1) * i);
      if (f >= l - s * a) {
        if (0 === f)
          throw Error(
            `[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${d.fontFamily}', fontSize: ${d.fontSize}px, char: '${t}')`
          );
        --e, (m = null), (g = null), (y = null), (f = 0), (p = 0), (_ = 0);
        continue;
      }
      if (((_ = Math.max(s + r.fontProperties.descent, _)), b * a + p >= o)) {
        if (0 === p)
          throw Error(
            `[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${d.fontFamily}', fontSize: ${d.fontSize}px, char: '${t}')`
          );
        --e, (f += _ * a), (f = Math.ceil(f)), (p = 0), (_ = 0);
        continue;
      }
      !(function (e, t, r, i, s, n, a) {
        let o = r.text,
          l = r.fontProperties;
        t.translate(i, s), t.scale(n, n);
        let h = a.strokeThickness / 2,
          u = -(a.strokeThickness / 2);
        if (
          ((t.font = a.toFontString()),
          (t.lineWidth = a.strokeThickness),
          (t.textBaseline = a.textBaseline),
          (t.lineJoin = a.lineJoin),
          (t.miterLimit = a.miterLimit),
          (t.fillStyle = (function (e, t, r, i, s, n) {
            let a;
            let o = r.fill;
            if (!Array.isArray(o)) return o;
            if (1 === o.length) return o[0];
            let l = r.dropShadow ? r.dropShadowDistance : 0,
              h = r.padding || 0,
              u = e.width / i - l - 2 * h,
              d = e.height / i - l - 2 * h,
              c = o.slice(),
              p = r.fillGradientStops.slice();
            if (!p.length) {
              let e = c.length + 1;
              for (let t = 1; t < e; ++t) p.push(t / e);
            }
            if (
              (c.unshift(o[0]),
              p.unshift(0),
              c.push(o[o.length - 1]),
              p.push(1),
              r.fillGradientType === aj.LINEAR_VERTICAL)
            ) {
              a = t.createLinearGradient(u / 2, h, u / 2, d + h);
              let e = 0,
                i = (n.fontProperties.fontSize + r.strokeThickness) / d;
              for (let t = 0; t < s.length; t++) {
                let r = n.lineHeight * t;
                for (let t = 0; t < c.length; t++) {
                  let s = Math.max(
                    e,
                    r / d + ("number" == typeof p[t] ? p[t] : t / c.length) * i
                  );
                  (s = Math.min(s, 1)), a.addColorStop(s, c[t]), (e = s);
                }
              }
            } else {
              a = t.createLinearGradient(h, d / 2, u + h, d / 2);
              let e = c.length + 1,
                r = 1;
              for (let t = 0; t < c.length; t++) {
                let i;
                (i = "number" == typeof p[t] ? p[t] : r / e),
                  a.addColorStop(i, c[t]),
                  r++;
              }
            }
            return a;
          })(e, t, a, n, [o], r)),
          (t.strokeStyle = a.stroke),
          a.dropShadow)
        ) {
          let e = a.dropShadowColor,
            r = a.dropShadowBlur * n,
            i = a.dropShadowDistance * n;
          (t.shadowColor = tk.shared
            .setValue(e)
            .setAlpha(a.dropShadowAlpha)
            .toRgbaString()),
            (t.shadowBlur = r),
            (t.shadowOffsetX = Math.cos(a.dropShadowAngle) * i),
            (t.shadowOffsetY = Math.sin(a.dropShadowAngle) * i);
        } else
          (t.shadowColor = "black"),
            (t.shadowBlur = 0),
            (t.shadowOffsetX = 0),
            (t.shadowOffsetY = 0);
        a.stroke &&
          a.strokeThickness &&
          t.strokeText(o, h, u + r.lineHeight - l.descent),
          a.fill && t.fillText(o, h, u + r.lineHeight - l.descent),
          t.setTransform(1, 0, 0, 1, 0, 0),
          (t.fillStyle = "rgba(0, 0, 0, 0)");
      })(m, g, r, p, f, a, d);
      let E = ox(r.text);
      c.char.push({
        id: E,
        page: v.length - 1,
        x: p / a,
        y: f / a,
        width: b,
        height: s,
        xoffset: 0,
        yoffset: 0,
        xadvance:
          i -
          (d.dropShadow ? d.dropShadowDistance : 0) -
          (d.stroke ? d.strokeThickness : 0),
      }),
        (p += (b + 2 * n) * a),
        (p = Math.ceil(p));
    }
    if (!i?.skipKerning)
      for (let e = 0, t = u.length; e < t; e++) {
        let r = u[e];
        for (let e = 0; e < t; e++) {
          let t = u[e],
            i = g.measureText(r).width,
            s = g.measureText(t).width,
            n = g.measureText(r + t).width - (i + s);
          n && c.kerning.push({ first: ox(r), second: ox(t), amount: n });
        }
      }
    let b = new e(c, v, !0);
    return void 0 !== e.available[t] && e.uninstall(t), (e.available[t] = b), b;
  }
};
(ov.ALPHA = [["a", "z"], ["A", "Z"], " "]),
  (ov.NUMERIC = [["0", "9"]]),
  (ov.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
  (ov.ASCII = [[" ", "~"]]),
  (ov.defaultOptions = {
    resolution: 1,
    textureWidth: 512,
    textureHeight: 512,
    padding: 4,
    chars: ov.ALPHANUMERIC,
  }),
  (ov.available = {});
const ob = [".xml", ".fnt"],
  oE = {
    extension: { type: rs.LoadParser, priority: n_.Normal },
    name: "loadBitmapFont",
    test: (e) => ob.includes(eP.path.extname(e).toLowerCase()),
    testParse: async (e) => om.test(e) || oy.test(e),
    async parse(e, t, r) {
      let i = om.test(e) ? om.parse(e) : oy.parse(e),
        { src: s } = t,
        { page: n } = i,
        a = [];
      for (let e = 0; e < n.length; ++e) {
        let t = n[e].file,
          r = eP.path.join(eP.path.dirname(s), t);
        (r = nf(r, s)), a.push(r);
      }
      let o = await r.load(a),
        l = a.map((e) => o[e]);
      return ov.install(i, l, !0);
    },
    load: async (e, t) => (await ed.ADAPTER.fetch(e)).text(),
    unload(e) {
      e.destroy();
    },
  };
ro.add(oE);
const oT = class e extends aY {
  constructor() {
    super(...arguments),
      (this._fonts = []),
      (this._overrides = []),
      (this._stylesheet = ""),
      (this.fontsDirty = !1);
  }
  static from(t) {
    return new e(
      Object.keys(e.defaultOptions).reduce((e, r) => ({ ...e, [r]: t[r] }), {})
    );
  }
  cleanFonts() {
    this._fonts.length > 0 &&
      (this._fonts.forEach((t) => {
        URL.revokeObjectURL(t.src),
          t.refs--,
          0 === t.refs &&
            (t.fontFace && document.fonts.delete(t.fontFace),
            delete e.availableFonts[t.originalUrl]);
      }),
      (this.fontFamily = "Arial"),
      (this._fonts.length = 0),
      this.styleID++,
      (this.fontsDirty = !0));
  }
  loadFont(t, r = {}) {
    let { availableFonts: i } = e;
    if (i[t]) {
      let e = i[t];
      return (
        this._fonts.push(e),
        e.refs++,
        this.styleID++,
        (this.fontsDirty = !0),
        Promise.resolve()
      );
    }
    return ed.ADAPTER.fetch(t)
      .then((e) => e.blob())
      .then(
        async (e) =>
          new Promise((t, r) => {
            let i = URL.createObjectURL(e),
              s = new FileReader();
            (s.onload = () => t([i, s.result])),
              (s.onerror = r),
              s.readAsDataURL(e);
          })
      )
      .then(async ([e, s]) => {
        let n = Object.assign(
          {
            family: eP.path.basename(t, eP.path.extname(t)),
            weight: "normal",
            style: "normal",
            display: "auto",
            src: e,
            dataSrc: s,
            refs: 1,
            originalUrl: t,
            fontFace: null,
          },
          r
        );
        (i[t] = n), this._fonts.push(n), this.styleID++;
        let a = new FontFace(n.family, `url(${n.src})`, {
          weight: n.weight,
          style: n.style,
          display: n.display,
        });
        (n.fontFace = a),
          await a.load(),
          document.fonts.add(a),
          await document.fonts.ready,
          this.styleID++,
          (this.fontsDirty = !0);
      });
  }
  addOverride(...e) {
    let t = e.filter((e) => !this._overrides.includes(e));
    t.length > 0 && (this._overrides.push(...t), this.styleID++);
  }
  removeOverride(...e) {
    let t = e.filter((e) => this._overrides.includes(e));
    t.length > 0 &&
      ((this._overrides = this._overrides.filter((e) => !t.includes(e))),
      this.styleID++);
  }
  toCSS(e) {
    return [
      `transform: scale(${e})`,
      "transform-origin: top left",
      "display: inline-block",
      `color: ${this.normalizeColor(this.fill)}`,
      `font-size: ${this.fontSize}px`,
      `font-family: ${this.fontFamily}`,
      `font-weight: ${this.fontWeight}`,
      `font-style: ${this.fontStyle}`,
      `font-variant: ${this.fontVariant}`,
      `letter-spacing: ${this.letterSpacing}px`,
      `text-align: ${this.align}`,
      `padding: ${this.padding}px`,
      `white-space: ${this.whiteSpace}`,
      ...(this.lineHeight ? [`line-height: ${this.lineHeight}px`] : []),
      ...(this.wordWrap
        ? [
            `word-wrap: ${this.breakWords ? "break-all" : "break-word"}`,
            `max-width: ${this.wordWrapWidth}px`,
          ]
        : []),
      ...(this.strokeThickness
        ? [
            `-webkit-text-stroke-width: ${this.strokeThickness}px`,
            `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,
            `text-stroke-width: ${this.strokeThickness}px`,
            `text-stroke-color: ${this.normalizeColor(this.stroke)}`,
            "paint-order: stroke",
          ]
        : []),
      ...(this.dropShadow ? [this.dropShadowToCSS()] : []),
      ...this._overrides,
    ].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce(
      (e, t) => `${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style};
                font-display: ${t.display};
            }`,
      this._stylesheet
    );
  }
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(e) {
    this._stylesheet !== e && ((this._stylesheet = e), this.styleID++);
  }
  normalizeColor(e) {
    return (
      Array.isArray(e) && (e = eP.rgb2hex(e)),
      "number" == typeof e ? eP.hex2string(e) : e
    );
  }
  dropShadowToCSS() {
    let e = this.normalizeColor(this.dropShadowColor),
      t = this.dropShadowAlpha,
      r = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance),
      i = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    e.startsWith("#") &&
      t < 1 &&
      (e += ((255 * t) | 0).toString(16).padStart(2, "0"));
    let s = `${r}px ${i}px`;
    return this.dropShadowBlur > 0
      ? `text-shadow: ${s} ${this.dropShadowBlur}px ${e}`
      : `text-shadow: ${s} ${e}`;
  }
  reset() {
    Object.assign(this, e.defaultOptions);
  }
  onBeforeDraw() {
    let { fontsDirty: e } = this;
    return (
      (this.fontsDirty = !1),
      this.isSafari && this._fonts.length > 0 && e
        ? new Promise((e) => setTimeout(e, 100))
        : Promise.resolve()
    );
  }
  get isSafari() {
    let { userAgent: e } = ed.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(e);
  }
  set fillGradientStops(e) {
    console.warn(
      "[HTMLTextStyle] fillGradientStops is not supported by HTMLText"
    );
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(e) {
    console.warn(
      "[HTMLTextStyle] fillGradientType is not supported by HTMLText"
    );
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(e) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(e) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(e) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(e) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(e) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
(oT.availableFonts = {}),
  (oT.defaultOptions = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    whiteSpace: "normal",
    wordWrap: !1,
    wordWrapWidth: 100,
  });
const oA = class e extends sj {
  constructor(t = "", r = {}) {
    super(iM.EMPTY),
      (this._text = null),
      (this._style = null),
      (this._autoResolution = !0),
      (this.localStyleID = -1),
      (this.dirty = !1),
      (this._updateID = 0),
      (this.ownsStyle = !1);
    let i = new Image(),
      s = iM.from(i, {
        scaleMode: ed.SCALE_MODE,
        resourceOptions: { autoLoad: !1 },
      });
    (s.orig = new rO()), (s.trim = new rO()), (this.texture = s);
    let n = "http://www.w3.org/2000/svg",
      a = "http://www.w3.org/1999/xhtml",
      o = document.createElementNS(n, "svg"),
      l = document.createElementNS(n, "foreignObject"),
      h = document.createElementNS(a, "div"),
      u = document.createElementNS(a, "style");
    l.setAttribute("width", "10000"),
      l.setAttribute("height", "10000"),
      (l.style.overflow = "hidden"),
      o.appendChild(l),
      (this.maxWidth = e.defaultMaxWidth),
      (this.maxHeight = e.defaultMaxHeight),
      (this._domElement = h),
      (this._styleElement = u),
      (this._svgRoot = o),
      (this._foreignObject = l),
      this._foreignObject.appendChild(u),
      this._foreignObject.appendChild(h),
      (this._image = i),
      (this._loadImage = new Image()),
      (this._autoResolution = e.defaultAutoResolution),
      (this._resolution = e.defaultResolution ?? ed.RESOLUTION),
      (this.text = t),
      (this.style = r);
  }
  measureText(e) {
    let {
      text: t,
      style: r,
      resolution: i,
    } = Object.assign(
      { text: this._text, style: this._style, resolution: this._resolution },
      e
    );
    Object.assign(this._domElement, { innerHTML: t, style: r.toCSS(i) }),
      (this._styleElement.textContent = r.toGlobalCSS()),
      document.body.appendChild(this._svgRoot);
    let s = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    let { width: n, height: a } = s;
    (n > this.maxWidth || a > this.maxHeight) &&
      console.warn(
        "[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property."
      );
    let o = Math.min(this.maxWidth, Math.ceil(n)),
      l = Math.min(this.maxHeight, Math.ceil(a));
    return (
      this._svgRoot.setAttribute("width", o.toString()),
      this._svgRoot.setAttribute("height", l.toString()),
      t !== this._text && (this._domElement.innerHTML = this._text),
      r !== this._style &&
        (Object.assign(this._domElement, { style: this._style?.toCSS(i) }),
        (this._styleElement.textContent = this._style?.toGlobalCSS())),
      { width: o + 2 * r.padding, height: l + 2 * r.padding }
    );
  }
  async updateText(e = !0) {
    let { style: t, _image: r, _loadImage: i } = this;
    if (
      (this.localStyleID !== t.styleID &&
        ((this.dirty = !0), (this.localStyleID = t.styleID)),
      !this.dirty && e)
    )
      return;
    let { width: s, height: n } = this.measureText();
    (r.width = i.width = Math.ceil(Math.max(1, s))),
      (r.height = i.height = Math.ceil(Math.max(1, n))),
      this._updateID++;
    let a = this._updateID;
    await new Promise((e) => {
      i.onload = async () => {
        if (a < this._updateID) {
          e();
          return;
        }
        await t.onBeforeDraw(),
          (r.src = i.src),
          (i.onload = null),
          (i.src = ""),
          this.updateTexture(),
          e();
      };
      let s = new XMLSerializer().serializeToString(this._svgRoot);
      i.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(s)}`;
    });
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    let { style: e, texture: t, _image: r, resolution: i } = this,
      { padding: s } = e,
      { baseTexture: n } = t;
    (t.trim.width = t._frame.width = r.width / i),
      (t.trim.height = t._frame.height = r.height / i),
      (t.trim.x = -s),
      (t.trim.y = -s),
      (t.orig.width = t._frame.width - 2 * s),
      (t.orig.height = t._frame.height - 2 * s),
      this._onTextureUpdate(),
      n.setRealSize(r.width, r.height, i),
      (this.dirty = !1);
  }
  _render(e) {
    this._autoResolution &&
      this._resolution !== e.resolution &&
      ((this._resolution = e.resolution), (this.dirty = !0)),
      this.updateText(!0),
      super._render(e);
  }
  _renderCanvas(e) {
    this._autoResolution &&
      this._resolution !== e.resolution &&
      ((this._resolution = e.resolution), (this.dirty = !0)),
      this.updateText(!0),
      super._renderCanvas(e);
  }
  getLocalBounds(e) {
    return this.updateText(!0), super.getLocalBounds(e);
  }
  _calculateBounds() {
    this.updateText(!0),
      this.calculateVertices(),
      this._bounds.addQuad(this.vertexData);
  }
  _onStyleChange() {
    this.dirty = !0;
  }
  destroy(t) {
    "boolean" == typeof t && (t = { children: t }),
      (t = Object.assign({}, e.defaultDestroyOptions, t)),
      super.destroy(t),
      this.ownsStyle && this._style?.cleanFonts(),
      (this._style = null),
      this._svgRoot?.remove(),
      (this._svgRoot = null),
      this._domElement?.remove(),
      (this._domElement = null),
      this._foreignObject?.remove(),
      (this._foreignObject = null),
      this._styleElement?.remove(),
      (this._styleElement = null),
      (this._loadImage.src = ""),
      (this._loadImage.onload = null),
      (this._loadImage = null),
      (this._image.src = ""),
      (this._image = null);
  }
  get width() {
    return (
      this.updateText(!0),
      (Math.abs(this.scale.x) * this._image.width) / this.resolution
    );
  }
  set width(e) {
    this.updateText(!0);
    let t = eP.sign(this.scale.x) || 1;
    (this.scale.x = (t * e) / this._image.width / this.resolution),
      (this._width = e);
  }
  get height() {
    return (
      this.updateText(!0),
      (Math.abs(this.scale.y) * this._image.height) / this.resolution
    );
  }
  set height(e) {
    this.updateText(!0);
    let t = eP.sign(this.scale.y) || 1;
    (this.scale.y = (t * e) / this._image.height / this.resolution),
      (this._height = e);
  }
  get style() {
    return this._style;
  }
  set style(e) {
    this._style !== e &&
      ((e = e || {}) instanceof oT
        ? ((this.ownsStyle = !1), (this._style = e))
        : e instanceof aY
        ? (console.warn(
            "[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"
          ),
          (this.ownsStyle = !0),
          (this._style = oT.from(e)))
        : ((this.ownsStyle = !0), (this._style = new oT(e))),
      (this.localStyleID = -1),
      (this.dirty = !0));
  }
  get text() {
    return this._text;
  }
  set text(e) {
    (e = String("" === e || null == e ? " " : e)),
      (e = this.sanitiseText(e)),
      this._text !== e && ((this._text = e), (this.dirty = !0));
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    (this._autoResolution = !1),
      this._resolution !== e && ((this._resolution = e), (this.dirty = !0));
  }
  sanitiseText(e) {
    return e
      .replace(/<br>/gi, "<br/>")
      .replace(/<hr>/gi, "<hr/>")
      .replace(/&nbsp;/gi, "&#160;");
  }
};
function ow(e, t) {
  let r = { collided: !1, direction: null },
    i = {
      x: e.getBounds().x,
      y: e.getBounds().y + e.getBounds().height - 5,
      width: e.getBounds().width - 10,
      height: 5,
    };
  for (let e of t) {
    let t = {
        x: e.getBounds().x,
        y: e.getBounds().y + e.getBounds().height - 5,
        width: e.getBounds().width,
        height: 5,
      },
      s = t.y,
      n = t.y + t.height,
      a = i.x < t.x + t.width && i.x + i.width > t.x,
      o =
        (i.y < s && i.y + i.height >= s - 20) ||
        (i.y > s && i.y + i.height <= n + 20);
    if (a && o) {
      Math.min(i.x + i.width - t.x, t.x + t.width - i.x) <
      Math.min(i.y + i.height - s, n - i.y)
        ? (r.direction = i.x < t.x ? "left" : "right")
        : (r.direction = i.y < s ? "up" : "down"),
        (r.collided = !0);
      break;
    }
  }
  return r;
}
(oA.defaultDestroyOptions = { texture: !0, children: !1, baseTexture: !0 }),
  (oA.defaultMaxWidth = 2024),
  (oA.defaultMaxHeight = 2024),
  (oA.defaultAutoResolution = !0);
const oS = {
  left: (e, t) => (e.x -= t),
  right: (e, t) => (e.x += t),
  up: (e, t) => (e.y -= t),
  down: (e, t) => (e.y += t),
};
var oR = {};
oR = new URL("player_idle.41e3260c.png", import.meta.url).toString();
var oI = {};
oI = new URL("player_idleA1.d8973b36.png", import.meta.url).toString();
var oC = {};
oC = new URL("player_walk1.1eb3cb19.png", import.meta.url).toString();
var oP = {};
oP = new URL("player_walk2.53608441.png", import.meta.url).toString();
var ok = {};
ok = new URL("player_walk3.a6fa31d1.png", import.meta.url).toString();
var oM = {};
oM = new URL("player_walk4.86b32501.png", import.meta.url).toString();
var oD = {};
oD = new URL("player_walk5.d7066bed.png", import.meta.url).toString();
var oB = {};
oB = new URL("player_walk6.d74242a8.png", import.meta.url).toString();
var oO = {};
oO = new URL("player_walk7.cef8442c.png", import.meta.url).toString();
var oF = {};
oF = new URL("player_walkA1.ab499a9d.png", import.meta.url).toString();
var oL = {};
oL = new URL("player_walkA2.c9f8f160.png", import.meta.url).toString();
var oN = {};
oN = new URL("player_walkA3.99946f4c.png", import.meta.url).toString();
var oU = {};
oU = new URL("player_walkA4.262dbd30.png", import.meta.url).toString();
var oG = class {
    constructor(e) {
      (this.playerIdleFrames = [iM.from(U(oR))]),
        (this.playerWalkFrames = [
          iM.from(U(oC)),
          iM.from(U(oP)),
          iM.from(U(ok)),
          iM.from(U(oM)),
          iM.from(U(oD)),
          iM.from(U(oB)),
          iM.from(U(oO)),
        ]),
        (this.isMiniSize = !1),
        (this.walkableArea = new aD()),
        this.walkableArea.beginFill(65280),
        this.walkableArea.drawPolygon([
          335, 560, 950, 560, 1400, 800, 100, 801,
        ]),
        this.walkableArea.endFill(),
        (this.walkableArea.visible = !1),
        e.mainScene.addChild(this.walkableArea),
        (this.player = new oi(this.playerIdleFrames)),
        this.player.position.set(450, 620),
        this.player.anchor.set(0.5, 1),
        (this.player.zIndex = 2),
        (this.player.animationSpeed = 0.05),
        (this.player.loop = !0),
        this.player.play(),
        e.mainScene.addChild(this.player),
        (this.targetPosition = new rD(this.player.x, this.player.y));
    }
    move(e, t) {
      let r = (e = this.adjustTargetPosition(e)).x - this.player.x,
        i = e.y - this.player.y,
        s = Math.sqrt(r * r + i * i),
        n = null,
        a = 1 / 0;
      for (let e of t) {
        let t = Math.sqrt(
          (this.player.x - e.x) ** 2 + (this.player.y - e.y) ** 2
        );
        t < a && ((n = e), (a = t));
      }
      if (
        (this.player.y > n.y
          ? (this.player.zIndex = 2)
          : (this.player.zIndex = 0),
        s > 3 &&
          !ow(this.player, t).collided &&
          this.walkableArea.containsPoint(e))
      ) {
        this.player.textures !== this.playerWalkFrames &&
          ((this.player.textures = this.playerWalkFrames),
          (this.player.animationSpeed = 0.11),
          this.player.play());
        let e = r / s;
        (this.player.x += 1.6 * e),
          (this.player.y += (i / s) * 1.6),
          e < 0
            ? ((this.player.rotation = Math.PI), (this.player.scale.y = -1))
            : ((this.player.rotation = 0), (this.player.scale.y = 1));
      } else
        this.player.textures !== this.playerIdleFrames &&
          ((this.player.textures = this.playerIdleFrames),
          (this.player.animationSpeed = 0.05),
          this.player.play());
    }
    minimizePlayer() {
      (this.isMiniSize = !0),
        (this.playerIdleFrames = [iM.from(U(oI))]),
        (this.playerWalkFrames = [
          iM.from(U(oF)),
          iM.from(U(oL)),
          iM.from(U(oN)),
          iM.from(U(oU)),
        ]);
    }
    adjustTargetPosition(e) {
      let t = e.clone();
      if (this.walkableArea.containsPoint(t)) return t;
      let r = new rD(e.x - this.player.x, e.y - this.player.y),
        i = Math.sqrt(r.x * r.x + r.y * r.y);
      return (
        i > 0 &&
          ((r.x /= i),
          (r.y /= i),
          (t.x = this.player.x + 100 * r.x),
          (t.y = this.player.y + 100 * r.y)),
        t
      );
    }
  },
  oH = class {
    constructor(e) {
      (this.inventory = []),
        (this.inventoryUI = new sG()),
        this.inventoryUI.position.set(0, e.screen.height - 60),
        e.mainScene.addChild(this.inventoryUI);
    }
    addToInventory(e, t) {
      (this.distance = Math.abs(e.x - t.player.x)),
        this.distance < 100 &&
          !this.inventory.includes(e) &&
          (console.log("Item collected!"),
          this.inventory.push(e),
          (e.visible = !1),
          (e.eventMode = "none"),
          this.updateInventoryUI());
    }
    updateInventoryUI() {
      this.inventoryUI.removeChildren(), (this.itemSize = 50);
      for (let e = 0; e < this.inventory.length; e++)
        (this.inventoryItem = sj.from(this.inventory[e].texture)),
          (this.inventoryItem.width = this.itemSize),
          (this.inventoryItem.height = this.itemSize),
          (this.inventoryItem.x = e * (this.itemSize + 10)),
          this.inventoryUI.addChild(this.inventoryItem);
    }
  },
  oz = {};
oz = new URL("background.6f1479b4.png", import.meta.url).toString();
var oj = {};
oj = new URL("bookshelf.2cf4c7c3.jpg", import.meta.url).toString();
var o$ = {};
o$ = new URL("mousehole_background.14a93cf5.png", import.meta.url).toString();
var oX = {};
oX = new URL("num_pad.c73636da.png", import.meta.url).toString();
var oV = {};
oV = new URL("back_arrow.150f5e79.png", import.meta.url).toString();
var oW = class {
    constructor(e) {
      let t = new sj(iM.from(U(oz)));
      (t.width = 1400), (t.height = 800), e.mainScene.addChild(t);
      let r = new sj(iM.from(U(oj)));
      (r.width = e.screen.width),
        (r.height = e.screen.height),
        e.bookshelfContainer.addChild(r);
      let i = iM.from(U(oV)),
        s = new sj(i);
      (s.x = 0.03 * e.screen.width),
        (s.y = 0.03 * e.screen.height),
        (s.interactive = !0),
        (s.cursor = "pointer"),
        (s.buttonMode = !0),
        s.addEventListener("click", this.toggleBookshelf(e)),
        e.bookshelfContainer.addChild(s);
      let n = new sj(iM.from(U(oX)));
      (n.width = e.screen.width),
        (n.height = e.screen.height),
        e.numpadContainer.addChild(n);
      let a = new sj(i);
      (a.x = 0.03 * e.screen.width),
        (a.y = 0.03 * e.screen.height),
        (a.interactive = !0),
        (a.cursor = "pointer"),
        (a.buttonMode = !0),
        a.addEventListener("click", this.toggleNumpad(e)),
        e.numpadContainer.addChild(a);
      let o = new aD(),
        l = 0.125 * e.screen.width,
        h = 0.3 * e.screen.height;
      o.beginFill(65280),
        o.drawRect(0, 0, l, h),
        o.endFill(),
        (o.alpha = 0),
        (o.visible = !0),
        (o.x = e.screen.width / 3.72),
        (o.y = e.screen.height / 2.5),
        (o.interactive = !0),
        (o.buttonMode = !0),
        (o.cursor = "pointer"),
        o.addEventListener("click", this.toggleBookshelf(e)),
        e.mainScene.addChild(o);
      let u = new aD(),
        d = 0.02 * e.screen.width,
        c = 0.06 * e.screen.height;
      u.beginFill(65280),
        u.drawRect(0, 0, d, c),
        u.endFill(),
        (u.alpha = 0),
        (u.visible = !0),
        (u.x = e.screen.width / 1.94),
        (u.y = e.screen.height / 1.87),
        (u.interactive = !0),
        (u.buttonMode = !0),
        (u.cursor = "pointer"),
        u.addEventListener("click", this.toggleNumpad(e)),
        e.mainScene.addChild(u);
      let p = new sj(iM.from(U(o$)));
      (p.width = e.screen.width),
        (p.height = e.screen.height),
        e.mouseholeContainer.addChild(p);
      let f = sj.from(i);
      (f.x = 0.03 * e.screen.width),
        (f.y = 0.03 * e.screen.height),
        (f.interactive = !0),
        (f.cursor = "pointer"),
        (f.buttonMode = !0),
        f.on("pointerdown", this.toggleMousehole(e)),
        e.mouseholeContainer.addChild(f);
    }
    toggleBookshelf(e) {
      return () => {
        (e.mainScene.visible = !e.mainScene.visible),
          (e.bookshelfContainer.visible = !e.bookshelfContainer.visible);
      };
    }
    toggleNumpad(e) {
      return () => {
        (e.mainScene.visible = !e.mainScene.visible),
          (e.numpadContainer.visible = !e.numpadContainer.visible);
      };
    }
    toggleMousehole(e) {
      return () => {
        (e.mainScene.visible = !e.mainScene.visible),
          (e.mouseholeContainer.visible = !e.mouseholeContainer.visible);
      };
    }
  },
  oY = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
  oq = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;
uniform float alpha;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction *
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }

    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);

    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    if (knockout) {
      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;
const oZ = class extends iv {
  constructor(e) {
    let t = Object.assign({}, oZ.defaults, e),
      {
        outerStrength: r,
        innerStrength: i,
        color: s,
        knockout: n,
        quality: a,
        alpha: o,
      } = t,
      l = Math.round(t.distance);
    super(
      oY,
      oq
        .replace(/__ANGLE_STEP_SIZE__/gi, `${(1 / a / l).toFixed(7)}`)
        .replace(/__DIST__/gi, `${l.toFixed(0)}.0`)
    ),
      (this.uniforms.glowColor = new Float32Array([0, 0, 0, 1])),
      (this.uniforms.alpha = 1),
      Object.assign(this, {
        color: s,
        outerStrength: r,
        innerStrength: i,
        padding: l,
        knockout: n,
        alpha: o,
      });
  }
  get color() {
    return eP.rgb2hex(this.uniforms.glowColor);
  }
  set color(e) {
    eP.hex2rgb(e, this.uniforms.glowColor);
  }
  get outerStrength() {
    return this.uniforms.outerStrength;
  }
  set outerStrength(e) {
    this.uniforms.outerStrength = e;
  }
  get innerStrength() {
    return this.uniforms.innerStrength;
  }
  set innerStrength(e) {
    this.uniforms.innerStrength = e;
  }
  get knockout() {
    return this.uniforms.knockout;
  }
  set knockout(e) {
    this.uniforms.knockout = e;
  }
  get alpha() {
    return this.uniforms.alpha;
  }
  set alpha(e) {
    this.uniforms.alpha = e;
  }
};
oZ.defaults = {
  distance: 10,
  outerStrength: 4,
  innerStrength: 0,
  color: 16777215,
  quality: 0.1,
  knockout: !1,
  alpha: 1,
};
var oK = class {
    constructor(e, t, r, i, s = !1) {
      return (
        (this.item = sj.from(t)),
        (this.glowEffect = new oZ({
          innerStrength: 0.5,
          outerStrength: 0.5,
          quality: 0.1,
        })),
        (this.item.x = 1400 * r),
        (this.item.y = 800 * i),
        (this.item.zIndex = 1),
        this.item.anchor.set(0.5, 1),
        s
          ? (this.item.eventMode = "dynamic")
          : (this.item.eventMode = "static"),
        (this.item.cursor = "pointer"),
        (this.item.filters = [this.glowEffect]),
        (this.item.visible = !0),
        e.mainScene.addChild(this.item),
        this.item
      );
    }
  },
  oQ = {};
oQ = new URL("key.9da150df.png", import.meta.url).toString();
var oJ = {};
oJ = new URL("box_prop.d8839dbc.png", import.meta.url).toString();
const o0 = [
  {
    title: "Home",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Home.md",
  },
  {
    title: "Checklist: Pelijamitapahtuman järjestäminen",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Checklist:-Pelijamitapahtuman-j%C3%A4rjest%C3%A4minen.md",
  },
  {
    title: "Hanke: Point‐and‐click kotisivu 2024",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Hanke:-Point%E2%80%90and%E2%80%90click-kotisivu-2024.md",
  },
  {
    title: "Luentomuistiinpanot",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Luentomuistiinpanot.md",
  },
  {
    title: "Luentomuistiinpanot: Pelitekoäly",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Luentomuistiinpanot:-Peliteko%C3%A4ly.md",
  },
  {
    title: "Luentomuistiipanot: Peligrafiikka",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Luentomuistiipanot:-Peligrafiikka.md",
  },
  {
    title: "Oppaat",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Oppaat.md",
  },
  {
    title: "Peli‐ideakilpailu syksyllä 2014",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%90ideakilpailu-syksyll%C3%A4-2014.md",
  },
  {
    title: "Peli–idea : ActionMovieTactics",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea%20:%20ActionMovieTactics.md",
  },
  {
    title: "Peli–idea : Demon's Hack",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea-:-Demon's-Hack.md",
  },
  {
    title: "Peli–idea : Evol",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea%20:%20Evol.md",
  },
  {
    title: "Peli-idea : Honesty",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea-:-Honesty.md",
  },
  {
    title: "Peli–idea : Kyōiku kanji Quest – Quest of the 47 Ronin",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea-:-Ky%C5%8Diku-kanji-Quest--%E2%80%93-Quest-of-the-47-Ronin.md",
  },
  {
    title: "Peli–idea : S Adventure",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea%20:%20S%20Adventure.md",
  },
  {
    title: "Peli–idea : SuperFighter",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Peli%E2%80%93idea%20:%20SuperFighter.md",
  },
  {
    title: "Tapahtumat 2014-2016",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Tapahtumat-2014-2016.md",
  },
  {
    title: "Tapahtumat 2017",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Tapahtumat-2017.md",
  },
  {
    title: "Tapatumat 2018",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Tapahtumat-2018.md",
  },
  {
    title: "Tapahtumat 2019",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Tapahtumat-2019.md",
  },
  {
    title: "Tapahtumat 2020",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Tapahtumat-2020.md",
  },
  {
    title: "Työkalu : Jypeli",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Ty%C3%B6kalu-:-Jypeli.md",
  },
  {
    title: "Vuosikertomukset",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomukset.md",
  },
  {
    title: "Vuosikertomus2015",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2015.md",
  },
  {
    title: "Vuosikertomus2016",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2016.md",
  },
  {
    title: "Vuosikertomus2016",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2017.md",
  },
  {
    title: "Vuosikertomus2018",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2018.md",
  },
  {
    title: "Vuosikertomus2019",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2019.md",
  },
  {
    title: "Vuosikertomus2020",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2020.md",
  },
  {
    title: "Vuosikertomus2021",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2021.md",
  },
  {
    title: "Vuosikertomus2022",
    url: "https://raw.githubusercontent.com/wiki/sepeliry/YhdistyksenToiminta/Vuosikertomus2022.md",
  },
];
var o1 = {};
!(function (e) {
  function t() {
    return {
      async: !1,
      breaks: !1,
      extensions: null,
      gfm: !0,
      hooks: null,
      pedantic: !1,
      renderer: null,
      silent: !1,
      tokenizer: null,
      walkTokens: null,
    };
  }
  function r(t) {
    e.defaults = t;
  }
  e.defaults = t();
  let i = /[&<>"']/,
    s = RegExp(i.source, "g"),
    n = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    a = RegExp(n.source, "g"),
    o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
    l = (e) => o[e];
  function h(e, t) {
    if (t) {
      if (i.test(e)) return e.replace(s, l);
    } else if (n.test(e)) return e.replace(a, l);
    return e;
  }
  let u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
    d = /(^|[^\[])\^/g;
  function c(e, t) {
    let r = "string" == typeof e ? e : e.source;
    t = t || "";
    let i = {
      replace: (e, t) => {
        let s = "string" == typeof t ? t : t.source;
        return (s = s.replace(d, "$1")), (r = r.replace(e, s)), i;
      },
      getRegex: () => new RegExp(r, t),
    };
    return i;
  }
  function p(e) {
    try {
      e = encodeURI(e).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return e;
  }
  let f = { exec: () => null };
  function m(e, t) {
    let r = e
        .replace(/\|/g, (e, t, r) => {
          let i = !1,
            s = t;
          for (; --s >= 0 && "\\" === r[s]; ) i = !i;
          return i ? "|" : " |";
        })
        .split(/ \|/),
      i = 0;
    if (
      (r[0].trim() || r.shift(),
      r.length > 0 && !r[r.length - 1].trim() && r.pop(),
      t)
    ) {
      if (r.length > t) r.splice(t);
      else for (; r.length < t; ) r.push("");
    }
    for (; i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, "|");
    return r;
  }
  function g(e, t, r) {
    let i = e.length;
    if (0 === i) return "";
    let s = 0;
    for (; s < i; ) {
      let n = e.charAt(i - s - 1);
      if (n !== t || r) {
        if (n !== t && r) s++;
        else break;
      } else s++;
    }
    return e.slice(0, i - s);
  }
  function y(e, t, r, i) {
    let s = t.href,
      n = t.title ? h(t.title) : null,
      a = e[1].replace(/\\([\[\]])/g, "$1");
    if ("!" !== e[0].charAt(0)) {
      i.state.inLink = !0;
      let e = {
        type: "link",
        raw: r,
        href: s,
        title: n,
        text: a,
        tokens: i.inlineTokens(a),
      };
      return (i.state.inLink = !1), e;
    }
    return { type: "image", raw: r, href: s, title: n, text: h(a) };
  }
  class _ {
    options;
    rules;
    lexer;
    constructor(t) {
      this.options = t || e.defaults;
    }
    space(e) {
      let t = this.rules.block.newline.exec(e);
      if (t && t[0].length > 0) return { type: "space", raw: t[0] };
    }
    code(e) {
      let t = this.rules.block.code.exec(e);
      if (t) {
        let e = t[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: t[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? e : g(e, "\n"),
        };
      }
    }
    fences(e) {
      let t = this.rules.block.fences.exec(e);
      if (t) {
        let e = t[0],
          r = (function (e, t) {
            let r = e.match(/^(\s+)(?:```)/);
            if (null === r) return t;
            let i = r[1];
            return t
              .split("\n")
              .map((e) => {
                let t = e.match(/^\s+/);
                if (null === t) return e;
                let [r] = t;
                return r.length >= i.length ? e.slice(i.length) : e;
              })
              .join("\n");
          })(e, t[3] || "");
        return {
          type: "code",
          raw: e,
          lang: t[2]
            ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
            : t[2],
          text: r,
        };
      }
    }
    heading(e) {
      let t = this.rules.block.heading.exec(e);
      if (t) {
        let e = t[2].trim();
        if (/#$/.test(e)) {
          let t = g(e, "#");
          this.options.pedantic
            ? (e = t.trim())
            : (!t || / $/.test(t)) && (e = t.trim());
        }
        return {
          type: "heading",
          raw: t[0],
          depth: t[1].length,
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    hr(e) {
      let t = this.rules.block.hr.exec(e);
      if (t) return { type: "hr", raw: t[0] };
    }
    blockquote(e) {
      let t = this.rules.block.blockquote.exec(e);
      if (t) {
        let e = g(t[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
          r = this.lexer.state.top;
        this.lexer.state.top = !0;
        let i = this.lexer.blockTokens(e);
        return (
          (this.lexer.state.top = r),
          { type: "blockquote", raw: t[0], tokens: i, text: e }
        );
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let r = t[1].trim(),
          i = r.length > 1,
          s = {
            type: "list",
            raw: "",
            ordered: i,
            start: i ? +r.slice(0, -1) : "",
            loose: !1,
            items: [],
          };
        (r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
          this.options.pedantic && (r = i ? r : "[*+-]");
        let n = RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),
          a = "",
          o = "",
          l = !1;
        for (; e; ) {
          let r,
            i = !1;
          if (!(t = n.exec(e)) || this.rules.block.hr.test(e)) break;
          (a = t[0]), (e = e.substring(a.length));
          let h = t[2]
              .split("\n", 1)[0]
              .replace(/^\t+/, (e) => " ".repeat(3 * e.length)),
            u = e.split("\n", 1)[0],
            d = 0;
          this.options.pedantic
            ? ((d = 2), (o = h.trimStart()))
            : ((d = (d = t[2].search(/[^ ]/)) > 4 ? 1 : d),
              (o = h.slice(d)),
              (d += t[1].length));
          let c = !1;
          if (
            (!h &&
              /^ *$/.test(u) &&
              ((a += u + "\n"), (e = e.substring(u.length + 1)), (i = !0)),
            !i)
          ) {
            let t = RegExp(
                `^ {0,${Math.min(
                  3,
                  d - 1
                )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
              ),
              r = RegExp(
                `^ {0,${Math.min(
                  3,
                  d - 1
                )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
              ),
              i = RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`),
              s = RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
            for (; e; ) {
              let n = e.split("\n", 1)[0];
              if (
                ((u = n),
                this.options.pedantic &&
                  (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                i.test(u) || s.test(u) || t.test(u) || r.test(e))
              )
                break;
              if (u.search(/[^ ]/) >= d || !u.trim()) o += "\n" + u.slice(d);
              else {
                if (
                  c ||
                  h.search(/[^ ]/) >= 4 ||
                  i.test(h) ||
                  s.test(h) ||
                  r.test(h)
                )
                  break;
                o += "\n" + u;
              }
              c || u.trim() || (c = !0),
                (a += n + "\n"),
                (e = e.substring(n.length + 1)),
                (h = u.slice(d));
            }
          }
          !s.loose && (l ? (s.loose = !0) : /\n *\n *$/.test(a) && (l = !0));
          let p = null;
          this.options.gfm &&
            (p = /^\[[ xX]\] /.exec(o)) &&
            ((r = "[ ] " !== p[0]), (o = o.replace(/^\[[ xX]\] +/, ""))),
            s.items.push({
              type: "list_item",
              raw: a,
              task: !!p,
              checked: r,
              loose: !1,
              text: o,
              tokens: [],
            }),
            (s.raw += a);
        }
        (s.items[s.items.length - 1].raw = a.trimEnd()),
          (s.items[s.items.length - 1].text = o.trimEnd()),
          (s.raw = s.raw.trimEnd());
        for (let e = 0; e < s.items.length; e++)
          if (
            ((this.lexer.state.top = !1),
            (s.items[e].tokens = this.lexer.blockTokens(s.items[e].text, [])),
            !s.loose)
          ) {
            let t = s.items[e].tokens.filter((e) => "space" === e.type),
              r = t.length > 0 && t.some((e) => /\n.*\n/.test(e.raw));
            s.loose = r;
          }
        if (s.loose)
          for (let e = 0; e < s.items.length; e++) s.items[e].loose = !0;
        return s;
      }
    }
    html(e) {
      let t = this.rules.block.html.exec(e);
      if (t)
        return {
          type: "html",
          block: !0,
          raw: t[0],
          pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
          text: t[0],
        };
    }
    def(e) {
      let t = this.rules.block.def.exec(e);
      if (t) {
        let e = t[1].toLowerCase().replace(/\s+/g, " "),
          r = t[2]
            ? t[2]
                .replace(/^<(.*)>$/, "$1")
                .replace(this.rules.inline.anyPunctuation, "$1")
            : "",
          i = t[3]
            ? t[3]
                .substring(1, t[3].length - 1)
                .replace(this.rules.inline.anyPunctuation, "$1")
            : t[3];
        return { type: "def", tag: e, raw: t[0], href: r, title: i };
      }
    }
    table(e) {
      let t = this.rules.block.table.exec(e);
      if (!t || !/[:|]/.test(t[2])) return;
      let r = m(t[1]),
        i = t[2].replace(/^\||\| *$/g, "").split("|"),
        s =
          t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : [],
        n = { type: "table", raw: t[0], header: [], align: [], rows: [] };
      if (r.length === i.length) {
        for (let e of i)
          /^ *-+: *$/.test(e)
            ? n.align.push("right")
            : /^ *:-+: *$/.test(e)
            ? n.align.push("center")
            : /^ *:-+ *$/.test(e)
            ? n.align.push("left")
            : n.align.push(null);
        for (let e of r)
          n.header.push({ text: e, tokens: this.lexer.inline(e) });
        for (let e of s)
          n.rows.push(
            m(e, n.header.length).map((e) => ({
              text: e,
              tokens: this.lexer.inline(e),
            }))
          );
        return n;
      }
    }
    lheading(e) {
      let t = this.rules.block.lheading.exec(e);
      if (t)
        return {
          type: "heading",
          raw: t[0],
          depth: "=" === t[2].charAt(0) ? 1 : 2,
          text: t[1],
          tokens: this.lexer.inline(t[1]),
        };
    }
    paragraph(e) {
      let t = this.rules.block.paragraph.exec(e);
      if (t) {
        let e =
          "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
        return {
          type: "paragraph",
          raw: t[0],
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    text(e) {
      let t = this.rules.block.text.exec(e);
      if (t)
        return {
          type: "text",
          raw: t[0],
          text: t[0],
          tokens: this.lexer.inline(t[0]),
        };
    }
    escape(e) {
      let t = this.rules.inline.escape.exec(e);
      if (t) return { type: "escape", raw: t[0], text: h(t[1]) };
    }
    tag(e) {
      let t = this.rules.inline.tag.exec(e);
      if (t)
        return (
          !this.lexer.state.inLink && /^<a /i.test(t[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              /^<\/a>/i.test(t[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock &&
          /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: t[0],
          }
        );
    }
    link(e) {
      let t = this.rules.inline.link.exec(e);
      if (t) {
        let e = t[2].trim();
        if (!this.options.pedantic && /^</.test(e)) {
          if (!/>$/.test(e)) return;
          let t = g(e.slice(0, -1), "\\");
          if ((e.length - t.length) % 2 == 0) return;
        } else {
          let e = (function (e, t) {
            if (-1 === e.indexOf(")")) return -1;
            let r = 0;
            for (let t = 0; t < e.length; t++)
              if ("\\" === e[t]) t++;
              else if ("(" === e[t]) r++;
              else if (")" === e[t] && --r < 0) return t;
            return -1;
          })(t[2], "()");
          if (e > -1) {
            let r = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
            (t[2] = t[2].substring(0, e)),
              (t[0] = t[0].substring(0, r).trim()),
              (t[3] = "");
          }
        }
        let r = t[2],
          i = "";
        if (this.options.pedantic) {
          let e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
          e && ((r = e[1]), (i = e[3]));
        } else i = t[3] ? t[3].slice(1, -1) : "";
        return (
          (r = r.trim()),
          /^</.test(r) &&
            (r =
              this.options.pedantic && !/>$/.test(e)
                ? r.slice(1)
                : r.slice(1, -1)),
          y(
            t,
            {
              href: r ? r.replace(this.rules.inline.anyPunctuation, "$1") : r,
              title: i ? i.replace(this.rules.inline.anyPunctuation, "$1") : i,
            },
            t[0],
            this.lexer
          )
        );
      }
    }
    reflink(e, t) {
      let r;
      if (
        (r = this.rules.inline.reflink.exec(e)) ||
        (r = this.rules.inline.nolink.exec(e))
      ) {
        let e = t[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
        if (!e) {
          let e = r[0].charAt(0);
          return { type: "text", raw: e, text: e };
        }
        return y(r, e, r[0], this.lexer);
      }
    }
    emStrong(e, t, r = "") {
      let i = this.rules.inline.emStrongLDelim.exec(e);
      if (
        !(!i || (i[3] && r.match(/[\p{L}\p{N}]/u))) &&
        (!(i[1] || i[2]) || !r || this.rules.inline.punctuation.exec(r))
      ) {
        let r = [...i[0]].length - 1,
          s,
          n,
          a = r,
          o = 0,
          l =
            "*" === i[0][0]
              ? this.rules.inline.emStrongRDelimAst
              : this.rules.inline.emStrongRDelimUnd;
        for (
          l.lastIndex = 0, t = t.slice(-1 * e.length + r);
          null != (i = l.exec(t));

        ) {
          if (!(s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6])) continue;
          if (((n = [...s].length), i[3] || i[4])) {
            a += n;
            continue;
          }
          if ((i[5] || i[6]) && r % 3 && !((r + n) % 3)) {
            o += n;
            continue;
          }
          if ((a -= n) > 0) continue;
          n = Math.min(n, n + a + o);
          let t = [...i[0]][0].length,
            l = e.slice(0, r + i.index + t + n);
          if (Math.min(r, n) % 2) {
            let e = l.slice(1, -1);
            return {
              type: "em",
              raw: l,
              text: e,
              tokens: this.lexer.inlineTokens(e),
            };
          }
          let h = l.slice(2, -2);
          return {
            type: "strong",
            raw: l,
            text: h,
            tokens: this.lexer.inlineTokens(h),
          };
        }
      }
    }
    codespan(e) {
      let t = this.rules.inline.code.exec(e);
      if (t) {
        let e = t[2].replace(/\n/g, " "),
          r = /[^ ]/.test(e),
          i = /^ /.test(e) && / $/.test(e);
        return (
          r && i && (e = e.substring(1, e.length - 1)),
          (e = h(e, !0)),
          { type: "codespan", raw: t[0], text: e }
        );
      }
    }
    br(e) {
      let t = this.rules.inline.br.exec(e);
      if (t) return { type: "br", raw: t[0] };
    }
    del(e) {
      let t = this.rules.inline.del.exec(e);
      if (t)
        return {
          type: "del",
          raw: t[0],
          text: t[2],
          tokens: this.lexer.inlineTokens(t[2]),
        };
    }
    autolink(e) {
      let t = this.rules.inline.autolink.exec(e);
      if (t) {
        let e, r;
        return (
          (r = "@" === t[2] ? "mailto:" + (e = h(t[1])) : (e = h(t[1]))),
          {
            type: "link",
            raw: t[0],
            text: e,
            href: r,
            tokens: [{ type: "text", raw: e, text: e }],
          }
        );
      }
    }
    url(e) {
      let t;
      if ((t = this.rules.inline.url.exec(e))) {
        let e, r;
        if ("@" === t[2]) r = "mailto:" + (e = h(t[0]));
        else {
          let i;
          do
            (i = t[0]),
              (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
          while (i !== t[0]);
          (e = h(t[0])), (r = "www." === t[1] ? "http://" + t[0] : t[0]);
        }
        return {
          type: "link",
          raw: t[0],
          text: e,
          href: r,
          tokens: [{ type: "text", raw: e, text: e }],
        };
      }
    }
    inlineText(e) {
      let t = this.rules.inline.text.exec(e);
      if (t) {
        let e;
        return (
          (e = this.lexer.state.inRawBlock ? t[0] : h(t[0])),
          { type: "text", raw: t[0], text: e }
        );
      }
    }
  }
  let x = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    v = /(?:[*+-]|\d{1,9}[.)])/,
    b = c(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/)
      .replace(/bull/g, v)
      .getRegex(),
    E =
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    T = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    A = c(
      /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
    )
      .replace("label", T)
      .replace(
        "title",
        /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
      )
      .getRegex(),
    w = c(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
      .replace(/bull/g, v)
      .getRegex(),
    S =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    R = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    I = c(
      "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      "i"
    )
      .replace("comment", R)
      .replace("tag", S)
      .replace(
        "attribute",
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex(),
    C = c(E)
      .replace("hr", x)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", S)
      .getRegex(),
    P = {
      blockquote: c(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
        .replace("paragraph", C)
        .getRegex(),
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      def: A,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      hr: x,
      html: I,
      lheading: b,
      list: w,
      newline: /^(?: *(?:\n|$))+/,
      paragraph: C,
      table: f,
      text: /^[^\n]+/,
    },
    k = c(
      "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    )
      .replace("hr", x)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("blockquote", " {0,3}>")
      .replace("code", " {4}[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", S)
      .getRegex(),
    M = {
      ...P,
      table: k,
      paragraph: c(E)
        .replace("hr", x)
        .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
        .replace("|lheading", "")
        .replace("table", k)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace(
          "html",
          "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
        )
        .replace("tag", S)
        .getRegex(),
    },
    D = {
      ...P,
      html: c(
        "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
      )
        .replace("comment", R)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: f,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: c(E)
        .replace("hr", x)
        .replace("heading", " *#{1,6} *[^\n]")
        .replace("lheading", b)
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .replace("|tag", "")
        .getRegex(),
    },
    B = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    O = /^( {2,}|\\)\n(?!\s*$)/,
    F = "\\p{P}\\p{S}",
    L = c(/^((?![*_])[\spunctuation])/, "u")
      .replace(/punctuation/g, F)
      .getRegex(),
    N = c(
      /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
      "u"
    )
      .replace(/punct/g, F)
      .getRegex(),
    U = c(
      "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
      "gu"
    )
      .replace(/punct/g, F)
      .getRegex(),
    G = c(
      "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
      "gu"
    )
      .replace(/punct/g, F)
      .getRegex(),
    H = c(/\\([punct])/, "gu")
      .replace(/punct/g, F)
      .getRegex(),
    z = c(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
      .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
      .replace(
        "email",
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
      )
      .getRegex(),
    j = c(R).replace("(?:-->|$)", "-->").getRegex(),
    $ = c(
      "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
    )
      .replace("comment", j)
      .replace(
        "attribute",
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
      )
      .getRegex(),
    X = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    V = c(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
      .replace("label", X)
      .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
      .replace(
        "title",
        /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
      )
      .getRegex(),
    W = c(/^!?\[(label)\]\[(ref)\]/)
      .replace("label", X)
      .replace("ref", T)
      .getRegex(),
    Y = c(/^!?\[(ref)\](?:\[\])?/)
      .replace("ref", T)
      .getRegex(),
    q = c("reflink|nolink(?!\\()", "g")
      .replace("reflink", W)
      .replace("nolink", Y)
      .getRegex(),
    Z = {
      _backpedal: f,
      anyPunctuation: H,
      autolink: z,
      blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
      br: O,
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      del: f,
      emStrongLDelim: N,
      emStrongRDelimAst: U,
      emStrongRDelimUnd: G,
      escape: B,
      link: V,
      nolink: Y,
      punctuation: L,
      reflink: W,
      reflinkSearch: q,
      tag: $,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      url: f,
    },
    K = {
      ...Z,
      link: c(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", X)
        .getRegex(),
      reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", X)
        .getRegex(),
    },
    Q = {
      ...Z,
      escape: c(B).replace("])", "~|])").getRegex(),
      url: c(
        /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        "i"
      )
        .replace(
          "email",
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
        )
        .getRegex(),
      _backpedal:
        /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    },
    J = {
      ...Q,
      br: c(O).replace("{2,}", "*").getRegex(),
      text: c(Q.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    },
    ee = { normal: P, gfm: M, pedantic: D },
    et = { normal: Z, gfm: Q, breaks: J, pedantic: K };
  class er {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(t) {
      (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = t || e.defaults),
        (this.options.tokenizer = this.options.tokenizer || new _()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      let r = { block: ee.normal, inline: et.normal };
      this.options.pedantic
        ? ((r.block = ee.pedantic), (r.inline = et.pedantic))
        : this.options.gfm &&
          ((r.block = ee.gfm),
          this.options.breaks ? (r.inline = et.breaks) : (r.inline = et.gfm)),
        (this.tokenizer.rules = r);
    }
    static get rules() {
      return { block: ee, inline: et };
    }
    static lex(e, t) {
      return new er(t).lex(e);
    }
    static lexInline(e, t) {
      return new er(t).inlineTokens(e);
    }
    lex(e) {
      (e = e.replace(/\r\n|\r/g, "\n")), this.blockTokens(e, this.tokens);
      for (let e = 0; e < this.inlineQueue.length; e++) {
        let t = this.inlineQueue[e];
        this.inlineTokens(t.src, t.tokens);
      }
      return (this.inlineQueue = []), this.tokens;
    }
    blockTokens(e, t = []) {
      let r, i, s, n;
      for (
        e = this.options.pedantic
          ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
          : e.replace(/^( *)(\t+)/gm, (e, t, r) => t + "    ".repeat(r.length));
        e;

      )
        if (
          !(
            this.options.extensions &&
            this.options.extensions.block &&
            this.options.extensions.block.some(
              (i) =>
                !!(r = i.call({ lexer: this }, e, t)) &&
                ((e = e.substring(r.raw.length)), t.push(r), !0)
            )
          )
        ) {
          if ((r = this.tokenizer.space(e))) {
            (e = e.substring(r.raw.length)),
              1 === r.raw.length && t.length > 0
                ? (t[t.length - 1].raw += "\n")
                : t.push(r);
            continue;
          }
          if ((r = this.tokenizer.code(e))) {
            (e = e.substring(r.raw.length)),
              (i = t[t.length - 1]) &&
              ("paragraph" === i.type || "text" === i.type)
                ? ((i.raw += "\n" + r.raw),
                  (i.text += "\n" + r.text),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
                : t.push(r);
            continue;
          }
          if (
            (r = this.tokenizer.fences(e)) ||
            (r = this.tokenizer.heading(e)) ||
            (r = this.tokenizer.hr(e)) ||
            (r = this.tokenizer.blockquote(e)) ||
            (r = this.tokenizer.list(e)) ||
            (r = this.tokenizer.html(e))
          ) {
            (e = e.substring(r.raw.length)), t.push(r);
            continue;
          }
          if ((r = this.tokenizer.def(e))) {
            (e = e.substring(r.raw.length)),
              (i = t[t.length - 1]) &&
              ("paragraph" === i.type || "text" === i.type)
                ? ((i.raw += "\n" + r.raw),
                  (i.text += "\n" + r.raw),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
                : this.tokens.links[r.tag] ||
                  (this.tokens.links[r.tag] = { href: r.href, title: r.title });
            continue;
          }
          if (
            (r = this.tokenizer.table(e)) ||
            (r = this.tokenizer.lheading(e))
          ) {
            (e = e.substring(r.raw.length)), t.push(r);
            continue;
          }
          if (
            ((s = e),
            this.options.extensions && this.options.extensions.startBlock)
          ) {
            let t,
              r = 1 / 0,
              i = e.slice(1);
            this.options.extensions.startBlock.forEach((e) => {
              "number" == typeof (t = e.call({ lexer: this }, i)) &&
                t >= 0 &&
                (r = Math.min(r, t));
            }),
              r < 1 / 0 && r >= 0 && (s = e.substring(0, r + 1));
          }
          if (this.state.top && (r = this.tokenizer.paragraph(s))) {
            (i = t[t.length - 1]),
              n && "paragraph" === i.type
                ? ((i.raw += "\n" + r.raw),
                  (i.text += "\n" + r.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
                : t.push(r),
              (n = s.length !== e.length),
              (e = e.substring(r.raw.length));
            continue;
          }
          if ((r = this.tokenizer.text(e))) {
            (e = e.substring(r.raw.length)),
              (i = t[t.length - 1]) && "text" === i.type
                ? ((i.raw += "\n" + r.raw),
                  (i.text += "\n" + r.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
                : t.push(r);
            continue;
          }
          if (e) {
            let t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break;
            }
            throw Error(t);
          }
        }
      return (this.state.top = !0), t;
    }
    inline(e, t = []) {
      return this.inlineQueue.push({ src: e, tokens: t }), t;
    }
    inlineTokens(e, t = []) {
      let r, i, s, n, a, o;
      let l = e;
      if (this.tokens.links) {
        let e = Object.keys(this.tokens.links);
        if (e.length > 0)
          for (
            ;
            null != (n = this.tokenizer.rules.inline.reflinkSearch.exec(l));

          )
            e.includes(n[0].slice(n[0].lastIndexOf("[") + 1, -1)) &&
              (l =
                l.slice(0, n.index) +
                "[" +
                "a".repeat(n[0].length - 2) +
                "]" +
                l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; null != (n = this.tokenizer.rules.inline.blockSkip.exec(l)); )
        l =
          l.slice(0, n.index) +
          "[" +
          "a".repeat(n[0].length - 2) +
          "]" +
          l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; null != (n = this.tokenizer.rules.inline.anyPunctuation.exec(l)); )
        l =
          l.slice(0, n.index) +
          "++" +
          l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; e; )
        if (
          (a || (o = ""),
          (a = !1),
          !(
            this.options.extensions &&
            this.options.extensions.inline &&
            this.options.extensions.inline.some(
              (i) =>
                !!(r = i.call({ lexer: this }, e, t)) &&
                ((e = e.substring(r.raw.length)), t.push(r), !0)
            )
          ))
        ) {
          if ((r = this.tokenizer.escape(e))) {
            (e = e.substring(r.raw.length)), t.push(r);
            continue;
          }
          if ((r = this.tokenizer.tag(e))) {
            (e = e.substring(r.raw.length)),
              (i = t[t.length - 1]) && "text" === r.type && "text" === i.type
                ? ((i.raw += r.raw), (i.text += r.text))
                : t.push(r);
            continue;
          }
          if ((r = this.tokenizer.link(e))) {
            (e = e.substring(r.raw.length)), t.push(r);
            continue;
          }
          if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
            (e = e.substring(r.raw.length)),
              (i = t[t.length - 1]) && "text" === r.type && "text" === i.type
                ? ((i.raw += r.raw), (i.text += r.text))
                : t.push(r);
            continue;
          }
          if (
            (r = this.tokenizer.emStrong(e, l, o)) ||
            (r = this.tokenizer.codespan(e)) ||
            (r = this.tokenizer.br(e)) ||
            (r = this.tokenizer.del(e)) ||
            (r = this.tokenizer.autolink(e)) ||
            (!this.state.inLink && (r = this.tokenizer.url(e)))
          ) {
            (e = e.substring(r.raw.length)), t.push(r);
            continue;
          }
          if (
            ((s = e),
            this.options.extensions && this.options.extensions.startInline)
          ) {
            let t,
              r = 1 / 0,
              i = e.slice(1);
            this.options.extensions.startInline.forEach((e) => {
              "number" == typeof (t = e.call({ lexer: this }, i)) &&
                t >= 0 &&
                (r = Math.min(r, t));
            }),
              r < 1 / 0 && r >= 0 && (s = e.substring(0, r + 1));
          }
          if ((r = this.tokenizer.inlineText(s))) {
            (e = e.substring(r.raw.length)),
              "_" !== r.raw.slice(-1) && (o = r.raw.slice(-1)),
              (a = !0),
              (i = t[t.length - 1]) && "text" === i.type
                ? ((i.raw += r.raw), (i.text += r.text))
                : t.push(r);
            continue;
          }
          if (e) {
            let t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break;
            }
            throw Error(t);
          }
        }
      return t;
    }
  }
  class ei {
    options;
    constructor(t) {
      this.options = t || e.defaults;
    }
    code(e, t, r) {
      let i = (t || "").match(/^\S*/)?.[0];
      return ((e = e.replace(/\n$/, "") + "\n"), i)
        ? '<pre><code class="language-' +
            h(i) +
            '">' +
            (r ? e : h(e, !0)) +
            "</code></pre>\n"
        : "<pre><code>" + (r ? e : h(e, !0)) + "</code></pre>\n";
    }
    blockquote(e) {
      return `<blockquote>
${e}</blockquote>
`;
    }
    html(e, t) {
      return e;
    }
    heading(e, t, r) {
      return `<h${t}>${e}</h${t}>
`;
    }
    hr() {
      return "<hr>\n";
    }
    list(e, t, r) {
      let i = t ? "ol" : "ul";
      return (
        "<" +
        i +
        (t && 1 !== r ? ' start="' + r + '"' : "") +
        ">\n" +
        e +
        "</" +
        i +
        ">\n"
      );
    }
    listitem(e, t, r) {
      return `<li>${e}</li>
`;
    }
    checkbox(e) {
      return (
        "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
      );
    }
    paragraph(e) {
      return `<p>${e}</p>
`;
    }
    table(e, t) {
      return (
        t && (t = `<tbody>${t}</tbody>`),
        "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
      );
    }
    tablerow(e) {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e, t) {
      let r = t.header ? "th" : "td";
      return (
        (t.align ? `<${r} align="${t.align}">` : `<${r}>`) +
        e +
        `</${r}>
`
      );
    }
    strong(e) {
      return `<strong>${e}</strong>`;
    }
    em(e) {
      return `<em>${e}</em>`;
    }
    codespan(e) {
      return `<code>${e}</code>`;
    }
    br() {
      return "<br>";
    }
    del(e) {
      return `<del>${e}</del>`;
    }
    link(e, t, r) {
      let i = p(e);
      if (null === i) return r;
      let s = '<a href="' + (e = i) + '"';
      return t && (s += ' title="' + t + '"'), (s += ">" + r + "</a>");
    }
    image(e, t, r) {
      let i = p(e);
      if (null === i) return r;
      e = i;
      let s = `<img src="${e}" alt="${r}"`;
      return t && (s += ` title="${t}"`), (s += ">");
    }
    text(e) {
      return e;
    }
  }
  class es {
    strong(e) {
      return e;
    }
    em(e) {
      return e;
    }
    codespan(e) {
      return e;
    }
    del(e) {
      return e;
    }
    html(e) {
      return e;
    }
    text(e) {
      return e;
    }
    link(e, t, r) {
      return "" + r;
    }
    image(e, t, r) {
      return "" + r;
    }
    br() {
      return "";
    }
  }
  class en {
    options;
    renderer;
    textRenderer;
    constructor(t) {
      (this.options = t || e.defaults),
        (this.options.renderer = this.options.renderer || new ei()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new es());
    }
    static parse(e, t) {
      return new en(t).parse(e);
    }
    static parseInline(e, t) {
      return new en(t).parseInline(e);
    }
    parse(e, t = !0) {
      let r = "";
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        if (
          this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[s.type]
        ) {
          let e = this.options.extensions.renderers[s.type].call(
            { parser: this },
            s
          );
          if (
            !1 !== e ||
            ![
              "space",
              "hr",
              "heading",
              "code",
              "table",
              "blockquote",
              "list",
              "html",
              "paragraph",
              "text",
            ].includes(s.type)
          ) {
            r += e || "";
            continue;
          }
        }
        switch (s.type) {
          case "space":
            continue;
          case "hr":
            r += this.renderer.hr();
            continue;
          case "heading":
            r += this.renderer.heading(
              this.parseInline(s.tokens),
              s.depth,
              this.parseInline(s.tokens, this.textRenderer).replace(u, (e, t) =>
                "colon" === (t = t.toLowerCase())
                  ? ":"
                  : "#" === t.charAt(0)
                  ? "x" === t.charAt(1)
                    ? String.fromCharCode(parseInt(t.substring(2), 16))
                    : String.fromCharCode(+t.substring(1))
                  : ""
              )
            );
            continue;
          case "code":
            r += this.renderer.code(s.text, s.lang, !!s.escaped);
            continue;
          case "table": {
            let e = "",
              t = "";
            for (let e = 0; e < s.header.length; e++)
              t += this.renderer.tablecell(
                this.parseInline(s.header[e].tokens),
                { header: !0, align: s.align[e] }
              );
            e += this.renderer.tablerow(t);
            let i = "";
            for (let e = 0; e < s.rows.length; e++) {
              let r = s.rows[e];
              t = "";
              for (let e = 0; e < r.length; e++)
                t += this.renderer.tablecell(this.parseInline(r[e].tokens), {
                  header: !1,
                  align: s.align[e],
                });
              i += this.renderer.tablerow(t);
            }
            r += this.renderer.table(e, i);
            continue;
          }
          case "blockquote": {
            let e = this.parse(s.tokens);
            r += this.renderer.blockquote(e);
            continue;
          }
          case "list": {
            let e = s.ordered,
              t = s.start,
              i = s.loose,
              n = "";
            for (let e = 0; e < s.items.length; e++) {
              let t = s.items[e],
                r = t.checked,
                a = t.task,
                o = "";
              if (t.task) {
                let e = this.renderer.checkbox(!!r);
                i
                  ? t.tokens.length > 0 && "paragraph" === t.tokens[0].type
                    ? ((t.tokens[0].text = e + " " + t.tokens[0].text),
                      t.tokens[0].tokens &&
                        t.tokens[0].tokens.length > 0 &&
                        "text" === t.tokens[0].tokens[0].type &&
                        (t.tokens[0].tokens[0].text =
                          e + " " + t.tokens[0].tokens[0].text))
                    : t.tokens.unshift({ type: "text", text: e + " " })
                  : (o += e + " ");
              }
              (o += this.parse(t.tokens, i)),
                (n += this.renderer.listitem(o, a, !!r));
            }
            r += this.renderer.list(n, e, t);
            continue;
          }
          case "html":
            r += this.renderer.html(s.text, s.block);
            continue;
          case "paragraph":
            r += this.renderer.paragraph(this.parseInline(s.tokens));
            continue;
          case "text": {
            let n = s,
              a = n.tokens ? this.parseInline(n.tokens) : n.text;
            for (; i + 1 < e.length && "text" === e[i + 1].type; )
              a +=
                "\n" +
                ((n = e[++i]).tokens ? this.parseInline(n.tokens) : n.text);
            r += t ? this.renderer.paragraph(a) : a;
            continue;
          }
          default: {
            let e = 'Token with "' + s.type + '" type was not found.';
            if (this.options.silent) return console.error(e), "";
            throw Error(e);
          }
        }
      }
      return r;
    }
    parseInline(e, t) {
      t = t || this.renderer;
      let r = "";
      for (let i = 0; i < e.length; i++) {
        let s = e[i];
        if (
          this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[s.type]
        ) {
          let e = this.options.extensions.renderers[s.type].call(
            { parser: this },
            s
          );
          if (
            !1 !== e ||
            ![
              "escape",
              "html",
              "link",
              "image",
              "strong",
              "em",
              "codespan",
              "br",
              "del",
              "text",
            ].includes(s.type)
          ) {
            r += e || "";
            continue;
          }
        }
        switch (s.type) {
          case "escape":
          case "text":
            r += t.text(s.text);
            break;
          case "html":
            r += t.html(s.text);
            break;
          case "link":
            r += t.link(s.href, s.title, this.parseInline(s.tokens, t));
            break;
          case "image":
            r += t.image(s.href, s.title, s.text);
            break;
          case "strong":
            r += t.strong(this.parseInline(s.tokens, t));
            break;
          case "em":
            r += t.em(this.parseInline(s.tokens, t));
            break;
          case "codespan":
            r += t.codespan(s.text);
            break;
          case "br":
            r += t.br();
            break;
          case "del":
            r += t.del(this.parseInline(s.tokens, t));
            break;
          default: {
            let e = 'Token with "' + s.type + '" type was not found.';
            if (this.options.silent) return console.error(e), "";
            throw Error(e);
          }
        }
      }
      return r;
    }
  }
  class ea {
    options;
    constructor(t) {
      this.options = t || e.defaults;
    }
    static passThroughHooks = new Set([
      "preprocess",
      "postprocess",
      "processAllTokens",
    ]);
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
  }
  class eo {
    defaults = t();
    options = this.setOptions;
    parse = this.#e(er.lex, en.parse);
    parseInline = this.#e(er.lexInline, en.parseInline);
    Parser = en;
    Renderer = ei;
    TextRenderer = es;
    Lexer = er;
    Tokenizer = _;
    Hooks = ea;
    constructor(...e) {
      this.use(...e);
    }
    walkTokens(e, t) {
      let r = [];
      for (let i of e)
        switch (((r = r.concat(t.call(this, i))), i.type)) {
          case "table":
            for (let e of i.header) r = r.concat(this.walkTokens(e.tokens, t));
            for (let e of i.rows)
              for (let i of e) r = r.concat(this.walkTokens(i.tokens, t));
            break;
          case "list":
            r = r.concat(this.walkTokens(i.items, t));
            break;
          default: {
            let e = i;
            this.defaults.extensions?.childTokens?.[e.type]
              ? this.defaults.extensions.childTokens[e.type].forEach((i) => {
                  let s = e[i].flat(1 / 0);
                  r = r.concat(this.walkTokens(s, t));
                })
              : e.tokens && (r = r.concat(this.walkTokens(e.tokens, t)));
          }
        }
      return r;
    }
    use(...e) {
      let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
      return (
        e.forEach((e) => {
          let r = { ...e };
          if (
            ((r.async = this.defaults.async || r.async || !1),
            e.extensions &&
              (e.extensions.forEach((e) => {
                if (!e.name) throw Error("extension name required");
                if ("renderer" in e) {
                  let r = t.renderers[e.name];
                  r
                    ? (t.renderers[e.name] = function (...t) {
                        let i = e.renderer.apply(this, t);
                        return !1 === i && (i = r.apply(this, t)), i;
                      })
                    : (t.renderers[e.name] = e.renderer);
                }
                if ("tokenizer" in e) {
                  if (!e.level || ("block" !== e.level && "inline" !== e.level))
                    throw Error("extension level must be 'block' or 'inline'");
                  let r = t[e.level];
                  r ? r.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                    e.start &&
                      ("block" === e.level
                        ? t.startBlock
                          ? t.startBlock.push(e.start)
                          : (t.startBlock = [e.start])
                        : "inline" === e.level &&
                          (t.startInline
                            ? t.startInline.push(e.start)
                            : (t.startInline = [e.start])));
                }
                "childTokens" in e &&
                  e.childTokens &&
                  (t.childTokens[e.name] = e.childTokens);
              }),
              (r.extensions = t)),
            e.renderer)
          ) {
            let t = this.defaults.renderer || new ei(this.defaults);
            for (let r in e.renderer) {
              if (!(r in t)) throw Error(`renderer '${r}' does not exist`);
              if ("options" === r) continue;
              let i = e.renderer[r],
                s = t[r];
              t[r] = (...e) => {
                let r = i.apply(t, e);
                return !1 === r && (r = s.apply(t, e)), r || "";
              };
            }
            r.renderer = t;
          }
          if (e.tokenizer) {
            let t = this.defaults.tokenizer || new _(this.defaults);
            for (let r in e.tokenizer) {
              if (!(r in t)) throw Error(`tokenizer '${r}' does not exist`);
              if (["options", "rules", "lexer"].includes(r)) continue;
              let i = e.tokenizer[r],
                s = t[r];
              t[r] = (...e) => {
                let r = i.apply(t, e);
                return !1 === r && (r = s.apply(t, e)), r;
              };
            }
            r.tokenizer = t;
          }
          if (e.hooks) {
            let t = this.defaults.hooks || new ea();
            for (let r in e.hooks) {
              if (!(r in t)) throw Error(`hook '${r}' does not exist`);
              if ("options" === r) continue;
              let i = e.hooks[r],
                s = t[r];
              ea.passThroughHooks.has(r)
                ? (t[r] = (e) => {
                    if (this.defaults.async)
                      return Promise.resolve(i.call(t, e)).then((e) =>
                        s.call(t, e)
                      );
                    let r = i.call(t, e);
                    return s.call(t, r);
                  })
                : (t[r] = (...e) => {
                    let r = i.apply(t, e);
                    return !1 === r && (r = s.apply(t, e)), r;
                  });
            }
            r.hooks = t;
          }
          if (e.walkTokens) {
            let t = this.defaults.walkTokens,
              i = e.walkTokens;
            r.walkTokens = function (e) {
              let r = [];
              return (
                r.push(i.call(this, e)), t && (r = r.concat(t.call(this, e))), r
              );
            };
          }
          this.defaults = { ...this.defaults, ...r };
        }),
        this
      );
    }
    setOptions(e) {
      return (this.defaults = { ...this.defaults, ...e }), this;
    }
    lexer(e, t) {
      return er.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
      return en.parse(e, t ?? this.defaults);
    }
    #e(e, t) {
      return (r, i) => {
        let s = { ...i },
          n = { ...this.defaults, ...s };
        !0 === this.defaults.async &&
          !1 === s.async &&
          (n.silent ||
            console.warn(
              "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."
            ),
          (n.async = !0));
        let a = this.#t(!!n.silent, !!n.async);
        if (null == r)
          return a(Error("marked(): input parameter is undefined or null"));
        if ("string" != typeof r)
          return a(
            Error(
              "marked(): input parameter is of type " +
                Object.prototype.toString.call(r) +
                ", string expected"
            )
          );
        if ((n.hooks && (n.hooks.options = n), n.async))
          return Promise.resolve(n.hooks ? n.hooks.preprocess(r) : r)
            .then((t) => e(t, n))
            .then((e) => (n.hooks ? n.hooks.processAllTokens(e) : e))
            .then((e) =>
              n.walkTokens
                ? Promise.all(this.walkTokens(e, n.walkTokens)).then(() => e)
                : e
            )
            .then((e) => t(e, n))
            .then((e) => (n.hooks ? n.hooks.postprocess(e) : e))
            .catch(a);
        try {
          n.hooks && (r = n.hooks.preprocess(r));
          let i = e(r, n);
          n.hooks && (i = n.hooks.processAllTokens(i)),
            n.walkTokens && this.walkTokens(i, n.walkTokens);
          let s = t(i, n);
          return n.hooks && (s = n.hooks.postprocess(s)), s;
        } catch (e) {
          return a(e);
        }
      };
    }
    #t(e, t) {
      return (r) => {
        if (
          ((r.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          e)
        ) {
          let e =
            "<p>An error occurred:</p><pre>" + h(r.message + "", !0) + "</pre>";
          return t ? Promise.resolve(e) : e;
        }
        if (t) return Promise.reject(r);
        throw r;
      };
    }
  }
  let el = new eo();
  function eh(e, t) {
    return el.parse(e, t);
  }
  (eh.options = eh.setOptions =
    function (e) {
      return el.setOptions(e), (eh.defaults = el.defaults), r(eh.defaults), eh;
    }),
    (eh.getDefaults = t),
    (eh.defaults = e.defaults),
    (eh.use = function (...e) {
      return el.use(...e), (eh.defaults = el.defaults), r(eh.defaults), eh;
    }),
    (eh.walkTokens = function (e, t) {
      return el.walkTokens(e, t);
    }),
    (eh.parseInline = el.parseInline),
    (eh.Parser = en),
    (eh.parser = en.parse),
    (eh.Renderer = ei),
    (eh.TextRenderer = es),
    (eh.Lexer = er),
    (eh.lexer = er.lex),
    (eh.Tokenizer = _),
    (eh.Hooks = ea),
    (eh.parse = eh);
  let eu = eh.options,
    ed = eh.setOptions,
    ec = eh.use,
    ep = eh.walkTokens,
    ef = eh.parseInline,
    em = en.parse,
    eg = er.lex;
  (e.Hooks = ea),
    (e.Lexer = er),
    (e.Marked = eo),
    (e.Parser = en),
    (e.Renderer = ei),
    (e.TextRenderer = es),
    (e.Tokenizer = _),
    (e.getDefaults = t),
    (e.lexer = eg),
    (e.marked = eh),
    (e.options = eu),
    (e.parse = eh),
    (e.parseInline = ef),
    (e.parser = em),
    (e.setOptions = ed),
    (e.use = ec),
    (e.walkTokens = ep);
})(o1);
const o2 = (e, t) => {
    if (t.visible) {
      let r = e.view.parentNode,
        i = r.clientWidth,
        s = r.clientHeight;
      e.renderer.resize(i, s), (t.width = i), (t.height = s);
    }
  },
  o3 = document.getElementById("markdown-container"),
  o4 = document.getElementById("show-pdf"),
  o5 = document.getElementById("wiki-list"),
  o6 = document.getElementById("wiki-page-container"),
  o8 = document.getElementById("game-container"),
  o7 = document.getElementById("back-btn"),
  o9 = document.getElementById("test-controls"),
  le = (e, t) => {
    (o4.style.display = "none"),
      (o3.style.display = "flex"),
      (e.stage.visible = !1),
      (t.eventMode = "none"),
      (o8.style.display = "none"),
      (o7.style.display = "block"),
      o7.addEventListener("click", () => {
        (o4.style.display = ""),
          (o3.style.display = "none"),
          (o8.style.display = ""),
          (e.stage.visible = !0),
          (t.eventMode = "static"),
          (o7.style.display = "none"),
          o2(e, t);
      });
  },
  lt = async (e) => {
    let t = await lr(e);
    (o5.style.display = "none"),
      (o7.style.display = "none"),
      (o6.style.display = "flex"),
      (o6.innerHTML = t);
    let r = document.getElementById("page-back-btn");
    r && r.remove();
    let i = document.createElement("button");
    (i.textContent = "Takaisin listaan"),
      (i.id = "page-back-btn"),
      i.classList.add("button"),
      i.addEventListener("click", () => {
        (o6.innerHTML = ""),
          (o6.style.display = "none"),
          (o5.style.display = "block"),
          i.remove(),
          (o7.style.display = "block");
      }),
      o9.appendChild(i);
  },
  lr = async (e) => {
    let t = await fetch(`${e}`),
      r = await t.text();
    r = r.replace(/\[\[([^\]]+)\]\]/g, (e, t) => `[${t}](${t})`);
    let i = new o1.marked.Renderer(),
      s = i.link;
    return (
      (i.link = function (e, t, r) {
        if (e.startsWith("http") || /\.\w+$/.test(e))
          return s.call(this, e, t, r);
        {
          let t = li(e);
          return t
            ? `<a href="${e}" onclick="event.preventDefault(); displayWikiPage('${t}');">${r}</a>`
            : `<a href="#">${r}</a>`;
        }
      }),
      (0, o1.marked).use({ gfm: !0, renderer: i }),
      (0, o1.marked).parse(r)
    );
  },
  li = (e) => {
    let t = o0.find((t) => t.url.endsWith(`${e}.md`));
    return t
      ? t.url
      : (console.error(
          `Matching wikipage url using href: ${e} not found, using # instead`
        ),
        null);
  };
window.displayWikiPage = lt;
const ls = document.getElementById("show-pdf"),
  ln = document.getElementById("close-pdf"),
  la = document.getElementById("pdf-viewer-container"),
  lo = document.getElementById("pdf-object"),
  ll = document.getElementById("game-container");
let lh = new sG();
function lu(e, t) {
  (la.style.display = "none"),
    (ll.style.display = ""),
    (e.stage.visible = "true"),
    (t.eventMode = "static");
}
var ld = class {
    constructor(e, t, r, i, s) {
      (this.book = sj.from(t)),
        (this.glowEffect = new oZ({
          innerStrength: 0.7,
          outerStrength: 0.7,
          quality: 0.1,
        })),
        (this.book.x = r),
        (this.book.y = i),
        (this.book.eventMode = "static"),
        (this.book.cursor = "pointer"),
        (this.book.filters = [this.glowEffect]),
        (this.book.visible = !0),
        (this.text = s),
        (this.textContainer = new sG());
      let n = {
        fontFamily: "Consolas",
        fontSize: 18,
        fill: 16777215,
        stroke: 0,
        strokeThickness: 2,
      };
      for (let e = 0; e < s.length; e++) {
        let t = new aQ(s[e], n);
        t.rotation = Math.PI / 2;
        let r = this.book.x + this.book.width + 15,
          i = this.book.y + (e + 1) * 13;
        t.position.set(r, i),
          t.anchor.set(0.5, 0.5),
          this.textContainer.addChild(t);
      }
      return (
        e.bookshelfContainer.addChild(this.book),
        e.bookshelfContainer.addChild(this.textContainer),
        this.book
      );
    }
  },
  lc = {};
lc = new URL("book_placeholder.2c3e10c1.png", import.meta.url).toString();
var lp = {};
lp = new URL("book2_placeholder.5d0d01d7.png", import.meta.url).toString();
var lf = {};
lf = new URL("mousehole_placeholder.165f3017.png", import.meta.url).toString();
var lm = {};
lm = new URL("potion.44540b2e.png", import.meta.url).toString();
var lg = class {
    constructor(e) {
      let t = new aY({
        breakWords: !0,
        dropShadow: !0,
        dropShadowAlpha: 0.1,
        dropShadowAngle: 0.6,
        dropShadowDistance: 3,
        fill: "#fff0ff",
        fontFamily: "Lucida Console",
        fontSize: 60,
        align: "left",
        fontWeight: "bold",
        letterSpacing: 20,
        stroke: "#edceeb",
        strokeThickness: 1,
        wordWrap: !1,
        wordWrapWidth: 600,
        lineHeight: 117,
      });
      (this.screenContainer = new sG()),
        (this.screen = new aQ("", t)),
        (this.screen.x = e.numpadContainer.width / 4),
        (this.screen.y = e.numpadContainer.height / 6.8),
        (this.screen.visible = !0),
        e.numpadContainer.addChild(this.screen),
        e.numpadContainer.addChild(this.screenContainer),
        (this.glowEffect = new oZ({
          innerStrength: 0.7,
          outerStrength: 0.7,
          quality: 0.1,
        })),
        (this.one = this.createNumpadButton(e, 0.31, 0.41, 0.2, 0.1, 1)),
        (this.two = this.createNumpadButton(e, 0.5, 0.41, 0.2, 0.1, 2)),
        (this.three = this.createNumpadButton(e, 0.7, 0.41, 0.2, 0.1, 3)),
        (this.four = this.createNumpadButton(e, 0.31, 0.56, 0.2, 0.1, 4)),
        (this.five = this.createNumpadButton(e, 0.5, 0.56, 0.2, 0.1, 5)),
        (this.six = this.createNumpadButton(e, 0.7, 0.56, 0.2, 0.1, 6)),
        (this.seven = this.createNumpadButton(e, 0.31, 0.71, 0.2, 0.1, 7)),
        (this.eight = this.createNumpadButton(e, 0.5, 0.71, 0.2, 0.1, 8)),
        (this.nine = this.createNumpadButton(e, 0.7, 0.71, 0.2, 0.1, 9)),
        (this.reset = this.createNumpadButton(
          e,
          0.31,
          0.86,
          0.2,
          0.1,
          "reset"
        )),
        (this.zero = this.createNumpadButton(e, 0.5, 0.86, 0.2, 0.1, 0)),
        (this.ok = this.createNumpadButton(e, 0.7, 0.86, 0.2, 0.1, "OK"));
    }
    enterCode() {
      "1111" === this.screen.text
        ? (this.screen.text = "**Correct**")
        : ((this.screen.text = "Incorrect"),
          setTimeout(() => {
            this.resetScreen();
          }, 2e3));
    }
    resetScreen() {
      this.screen.text = "";
    }
    updateScreen(e) {
      "OK" !== e &&
        this.screen.text.length < 4 &&
        ("" == this.screen.text
          ? (this.screen.text = e)
          : (this.screen.text += e));
    }
    createNumpadButton(e, t, r, i, s, n) {
      let a = new aD();
      a.drawRect(t, r, i, s),
        (a.x = t * e.renderer.width),
        (a.y = r * e.renderer.height),
        (a.interactive = !0),
        (a.buttonMode = !0),
        (a.cursor = "pointer"),
        (a.numberValue = n);
      let o = new aQ(
        n,
        new aY({
          breakWords: !0,
          dropShadow: !0,
          dropShadowAlpha: 0.1,
          dropShadowAngle: 0.6,
          dropShadowDistance: 3,
          fill: "#fff0ff",
          fontFamily: "Lucida Console",
          fontSize: 55,
          fontWeight: "bold",
          stroke: "#edceeb",
          strokeThickness: 1,
          wordWrap: !0,
          wordWrapWidth: 600,
          lineHeight: 117,
        })
      );
      return (
        (o.visible = !0),
        o.anchor.set(0.5),
        o.position.set(t + i / 2, r + s / 2),
        a.addChild(o),
        "OK" === n &&
          a.on("pointerdown", () => {
            this.enterCode();
          }),
        "reset" !== n
          ? a.on("pointerdown", () => {
              this.updateScreen(a.numberValue);
            })
          : a.on("pointerdown", () => {
              this.resetScreen();
            }),
        e.numpadContainer.addChild(a),
        a
      );
    }
  },
  ly = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
  l_ = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));

    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;
const lx = class extends iv {
  constructor(e) {
    super(ly, l_),
      (this.time = 0),
      (this.seed = 0),
      (this.uniforms.dimensions = new Float32Array(2)),
      Object.assign(this, lx.defaults, e);
  }
  apply(e, t, r, i) {
    let { width: s, height: n } = t.filterFrame;
    (this.uniforms.dimensions[0] = s),
      (this.uniforms.dimensions[1] = n),
      (this.uniforms.seed = this.seed),
      (this.uniforms.time = this.time),
      e.applyFilter(this, t, r, i);
  }
  set curvature(e) {
    this.uniforms.curvature = e;
  }
  get curvature() {
    return this.uniforms.curvature;
  }
  set lineWidth(e) {
    this.uniforms.lineWidth = e;
  }
  get lineWidth() {
    return this.uniforms.lineWidth;
  }
  set lineContrast(e) {
    this.uniforms.lineContrast = e;
  }
  get lineContrast() {
    return this.uniforms.lineContrast;
  }
  set verticalLine(e) {
    this.uniforms.verticalLine = e;
  }
  get verticalLine() {
    return this.uniforms.verticalLine;
  }
  set noise(e) {
    this.uniforms.noise = e;
  }
  get noise() {
    return this.uniforms.noise;
  }
  set noiseSize(e) {
    this.uniforms.noiseSize = e;
  }
  get noiseSize() {
    return this.uniforms.noiseSize;
  }
  set vignetting(e) {
    this.uniforms.vignetting = e;
  }
  get vignetting() {
    return this.uniforms.vignetting;
  }
  set vignettingAlpha(e) {
    this.uniforms.vignettingAlpha = e;
  }
  get vignettingAlpha() {
    return this.uniforms.vignettingAlpha;
  }
  set vignettingBlur(e) {
    this.uniforms.vignettingBlur = e;
  }
  get vignettingBlur() {
    return this.uniforms.vignettingBlur;
  }
};
lx.defaults = {
  curvature: 1,
  lineWidth: 1,
  lineContrast: 0.25,
  verticalLine: !1,
  noise: 0,
  noiseSize: 1,
  seed: 0,
  vignetting: 0.3,
  vignettingAlpha: 1,
  vignettingBlur: 0.3,
  time: 0,
};
var lv = {};
lv = new URL("arrow_left.95723e69.png", import.meta.url).toString();
var lb = {};
lb = new URL("arrow_right.8bd4d901.png", import.meta.url).toString();
const lE = (e, t, r) => {
  let i = e.screen.width;
  "left" == r && t.x < 0
    ? ((t.x += 400), console.log("Direction left, new x: " + t.x))
    : "right" == r &&
      t.x > -(1400 - i) &&
      ((t.x -= 400), console.log("Direction right, new x: " + t.x));
};
(window.isMobile = !1),
  (o = new no(
    window.isMobile
      ? { width: 600, height: 800, backgroundColor: 11184810 }
      : { width: 1400, height: 800, backgroundColor: 11184810 }
  )),
  (globalThis.__PIXI_APP__ = o),
  document.getElementById("game-container").appendChild(o.view);
const lT = new sG();
if (
  ((lT.sortableChildren = !0),
  window.isMobile || o.stage.addChild(lT),
  (o.mainScene = lT),
  (lT.filters = [new lx()]),
  (lT.visible = !0),
  window.isMobile)
) {
  let e = new sG();
  e.addChild(lT), o.stage.addChild(e);
  let t = new sj(iM.from(U(lv)));
  (t.eventMode = "static"),
    (t.buttonMode = !0),
    t.on("pointerdown", () => {
      lE(o, e, "left");
    }),
    o.stage.addChild(t);
  let r = new sj(iM.from(U(lb)));
  (r.eventMode = "static"),
    (r.buttonMode = !0),
    r.on("pointerdown", () => {
      lE(o, e, "right");
    }),
    o.stage.addChild(r),
    (t.x = 50),
    (t.y = 50),
    (r.x = 550),
    (r.y = 50);
}
const lA = new sG();
o.stage.addChild(lA),
  (o.bookshelfContainer = lA),
  (lA.filters = [new lx()]),
  (lA.visible = !1);
const lw = new sG();
o.stage.addChild(lw),
  (o.numpadContainer = lw),
  (lw.filters = [new lx()]),
  (lw.visible = !1);
const lS = new sG();
o.stage.addChild(lS), (o.mouseholeContainer = lS), (lS.visible = !1);
const lR = new oW(o),
  lI = new oG(o),
  lC = new oH(o);
new lg(o);
let lP = [];
(lP.sortableChildren = !0), new oK(o, U(oQ), 0.66, 0.735);
const lk = new oK(o, U(oJ), 0.71, 0.93);
(lk.height = 100),
  (lk.width = 100),
  (L = o0
    .map((e, t) => `<li id="page-${t}"><a href="${e.url}">${e.title}</a></li>`)
    .join("")),
  (o5.innerHTML = L),
  o0.forEach((e, t) => {
    document
      .getElementById(`page-${t}`)
      .addEventListener("click", async (t) => {
        t.preventDefault(), await lt(e.url);
      });
  }),
  lk.on("pointerdown", () => le(o, lT)),
  lP.push(lk);
const lM = new oK(o, U(oJ), 0.3, 0.95);
(lM.height = 100), (lM.width = 100), (lM.eventMode = "none"), lP.push(lM);
const lD = new oK(o, U(lf), 0.78, 0.8);
(lD.height = 50), (lD.width = 50);
const lB = new oK(o, U(lm), 0.1, 0.95);
(lB.height = 100),
  (lB.width = 100),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.createElement("button");
    (e.textContent = "Avaa kirjahylly"),
      e.classList.add("button"),
      e.addEventListener("click", lR.toggleBookshelf(o)),
      document.getElementById("test-controls").appendChild(e);
  }),
  document.addEventListener("DOMContentLoaded", () => {
    let e = document.createElement("button");
    (e.textContent = "Avaa numpad"),
      e.classList.add("button"),
      e.addEventListener("click", lR.toggleNumpad(o)),
      document.getElementById("test-controls").appendChild(e);
  });
let lO = [];
const lF = new ld(o, U(lc), 440, 400, "Blender"),
  lL = new ld(o, U(lp), 630, 650, "Unity");
lO.push(lF),
  lO.push(lL),
  (lT.eventMode = "static"),
  lT.on("pointertap", (e) => {
    var t, r;
    console.log(lT.toLocal(e.global));
    let i = ow(lI.player, lP);
    if (i.collided) {
      let e = oS[i.direction];
      e && e(lI.player, 20);
    }
    let s =
      ((t = e.global),
      (r = e.target) instanceof sj &&
      r.getBounds().contains(t.x, t.y) &&
      r.visible
        ? r
        : null);
    if (s) {
      let e = Math.abs(s.x - lI.player.x);
      switch (s) {
        case lB:
          e < 100 && (lI.minimizePlayer(), (lB.visible = !1));
          break;
        case lD:
          e < 100 && lI.isMiniSize && lR.toggleMousehole(o)();
          break;
        case lk:
          break;
        default:
          lC.addToInventory(s, lI);
      }
    } else {
      let t = lT.toLocal(e.global),
        r = t.y > 603 ? t.y : 602;
      l = new rD(e.global.x, r);
    }
  }),
  o.ticker.add((e) => {
    l && (lI.move(l, lP), lT.updateTransform()), lC.updateInventoryUI();
  }),
  window.isMobile ||
    (window.addEventListener("resize", () => o2(o, lT)),
    window.addEventListener("resize", () => o2(o, lA)),
    window.addEventListener("resize", () => o2(o, lw)),
    window.addEventListener("resize", () => o2(o, lS))),
  [
    {
      title: "Pelimekaniikan suunnittelua",
      path: "./docs/input/pelienSuunnittelu.pdf",
    },
    {
      title: "Sepeli Homepage web and mobile layout drafts",
      path: "./docs/input/Sepeli homepage web and mobile layout drafts.pdf",
    },
    {
      title: "Sepeli point and click homepage idea paper",
      path: "./docs/input/Sepeli point and click homepage idea paper.pdf",
    },
    {
      title: "Sepeli point and click homepage presentation",
      path: "./docs/input/Sepeli point and click homepage presentation.pdf",
    },
  ].forEach((e, t) => {
    let r = new aQ(e.title, { fill: "#ffffff" });
    (r.eventMode = "static"),
      (r.cursor = "pointer"),
      (r.y = 30 * t),
      r.on("pointerdown", () => {
        var t;
        (t = e.path),
          (la.style.display = "flex"),
          (lT.eventMode = "none"),
          (o.stage.visible = "false"),
          (ll.style.display = "none"),
          (lo.data = t);
      }),
      lh.addChild(r);
  }),
  o.stage.addChild(lh),
  (lh.visible = !1),
  ln.addEventListener("click", () => {
    lu(o, lT);
  }),
  ls.addEventListener("click", () => {
    lu(o, lT), (lh.visible = !lh.visible), (lT.visible = !lT.visible);
  });
//# sourceMappingURL=index.53c6de13.js.map
