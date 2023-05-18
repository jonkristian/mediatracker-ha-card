/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4 = window,
  e$a = t$4.ShadowRoot && (void 0 === t$4.ShadyCSS || t$4.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$3 = Symbol(),
  n$4 = new WeakMap();
let o$6 = class o {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== s$3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (e$a && void 0 === t) {
      const e = void 0 !== s && 1 === s.length;
      e && (t = n$4.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && n$4.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const r$3 = t => new o$6("string" == typeof t ? t : t + "", void 0, s$3),
  i$6 = (t, ...e) => {
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n) => e + (t => {
      if (!0 === t._$cssResult$) return t.cssText;
      if ("number" == typeof t) return t;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s) + t[n + 1], t[0]);
    return new o$6(n, t, s$3);
  },
  S$1 = (s, n) => {
    e$a ? s.adoptedStyleSheets = n.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach(e => {
      const n = document.createElement("style"),
        o = t$4.litNonce;
      void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
  },
  c$1 = e$a ? t => t : t => t instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (const s of t.cssRules) e += s.cssText;
    return r$3(e);
  })(t) : t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$9 = window,
  r$2 = e$9.trustedTypes,
  h$1 = r$2 ? r$2.emptyScript : "",
  o$5 = e$9.reactiveElementPolyfillSupport,
  n$3 = {
    toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? h$1 : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute(t, i) {
      let s = t;
      switch (i) {
        case Boolean:
          s = null !== t;
          break;
        case Number:
          s = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch (t) {
            s = null;
          }
      }
      return s;
    }
  },
  a$1 = (t, i) => i !== t && (i == i || t == t),
  l$4 = {
    attribute: !0,
    type: String,
    converter: n$3,
    reflect: !1,
    hasChanged: a$1
  };
let d$1 = class d extends HTMLElement {
  constructor() {
    super(), this._$Ei = new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var i;
    this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((i, s) => {
      const e = this._$Ep(s, i);
      void 0 !== e && (this._$Ev.set(e, s), t.push(e));
    }), t;
  }
  static createProperty(t, i = l$4) {
    if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = "symbol" == typeof t ? Symbol() : "__" + t,
        e = this.getPropertyDescriptor(t, s, i);
      void 0 !== e && Object.defineProperty(this.prototype, t, e);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    return {
      get() {
        return this[i];
      },
      set(e) {
        const r = this[t];
        this[i] = e, this.requestUpdate(t, r, s);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || l$4;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), void 0 !== t.h && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties,
        i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(i) {
    const s = [];
    if (Array.isArray(i)) {
      const e = new Set(i.flat(1 / 0).reverse());
      for (const i of e) s.unshift(c$1(i));
    } else void 0 !== i && s.push(c$1(i));
    return s;
  }
  static _$Ep(t, i) {
    const s = i.attribute;
    return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise(t => this.enableUpdating = t), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(t => t(this));
  }
  addController(t) {
    var i, s;
    (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
  }
  removeController(t) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t;
    const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var t;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
    });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    null === (t = this._$ES) || void 0 === t || t.forEach(t => {
      var i;
      return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$EO(t, i, s = l$4) {
    var e;
    const r = this.constructor._$Ep(t, s);
    if (void 0 !== r && !0 === s.reflect) {
      const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n$3).toAttribute(i, s.type);
      this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
    }
  }
  _$AK(t, i) {
    var s;
    const e = this.constructor,
      r = e._$Ev.get(t);
    if (void 0 !== r && this._$El !== r) {
      const t = e.getPropertyOptions(r),
        h = "function" == typeof t.converter ? {
          fromAttribute: t.converter
        } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n$3;
      this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
    }
  }
  requestUpdate(t, i, s) {
    let e = !0;
    void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a$1)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const t = this.scheduleUpdate();
    return null != t && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i) => this[i] = t), this._$Ei = void 0);
    let i = !1;
    const s = this._$AL;
    try {
      i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach(t => {
        var i;
        return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
      }), this.update(s)) : this._$Ek();
    } catch (t) {
      throw i = !1, this._$Ek(), t;
    }
    i && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.forEach(t => {
      var i;
      return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    void 0 !== this._$EC && (this._$EC.forEach((t, i) => this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
};
d$1.finalized = !0, d$1.elementProperties = new Map(), d$1.elementStyles = [], d$1.shadowRootOptions = {
  mode: "open"
}, null == o$5 || o$5({
  ReactiveElement: d$1
}), (null !== (s$2 = e$9.reactiveElementVersions) && void 0 !== s$2 ? s$2 : e$9.reactiveElementVersions = []).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$3;
const i$5 = window,
  s$1 = i$5.trustedTypes,
  e$8 = s$1 ? s$1.createPolicy("lit-html", {
    createHTML: t => t
  }) : void 0,
  o$4 = "$lit$",
  n$2 = `lit$${(Math.random() + "").slice(9)}$`,
  l$3 = "?" + n$2,
  h = `<${l$3}>`,
  r$1 = document,
  d = () => r$1.createComment(""),
  u = t => null === t || "object" != typeof t && "function" != typeof t,
  c = Array.isArray,
  v = t => c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
  a = "[ \t\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
  g = /'/g,
  $ = /"/g,
  y = /^(?:script|style|textarea|title)$/i,
  w = t => (i, ...s) => ({
    _$litType$: t,
    strings: i,
    values: s
  }),
  x = w(1),
  T = Symbol.for("lit-noChange"),
  A = Symbol.for("lit-nothing"),
  E = new WeakMap(),
  C = r$1.createTreeWalker(r$1, 129, null, !1),
  P = (t, i) => {
    const s = t.length - 1,
      l = [];
    let r,
      d = 2 === i ? "<svg>" : "",
      u = f;
    for (let i = 0; i < s; i++) {
      const s = t[i];
      let e,
        c,
        v = -1,
        a = 0;
      for (; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);) a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (r = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != r ? r : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, e = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, r = void 0);
      const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
      d += u === f ? s + h : v >= 0 ? (l.push(e), s.slice(0, v) + o$4 + s.slice(v) + n$2 + w) : s + n$2 + (-2 === v ? (l.push(void 0), i) : w);
    }
    const c = d + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [void 0 !== e$8 ? e$8.createHTML(c) : c, l];
  };
class V {
  constructor({
    strings: t,
    _$litType$: i
  }, e) {
    let h;
    this.parts = [];
    let r = 0,
      u = 0;
    const c = t.length - 1,
      v = this.parts,
      [a, f] = P(t, i);
    if (this.el = V.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
      const t = this.el.content,
        i = t.firstChild;
      i.remove(), t.append(...i.childNodes);
    }
    for (; null !== (h = C.nextNode()) && v.length < c;) {
      if (1 === h.nodeType) {
        if (h.hasAttributes()) {
          const t = [];
          for (const i of h.getAttributeNames()) if (i.endsWith(o$4) || i.startsWith(n$2)) {
            const s = f[u++];
            if (t.push(i), void 0 !== s) {
              const t = h.getAttribute(s.toLowerCase() + o$4).split(n$2),
                i = /([.?@])?(.*)/.exec(s);
              v.push({
                type: 1,
                index: r,
                name: i[2],
                strings: t,
                ctor: "." === i[1] ? k : "?" === i[1] ? I : "@" === i[1] ? L : R
              });
            } else v.push({
              type: 6,
              index: r
            });
          }
          for (const i of t) h.removeAttribute(i);
        }
        if (y.test(h.tagName)) {
          const t = h.textContent.split(n$2),
            i = t.length - 1;
          if (i > 0) {
            h.textContent = s$1 ? s$1.emptyScript : "";
            for (let s = 0; s < i; s++) h.append(t[s], d()), C.nextNode(), v.push({
              type: 2,
              index: ++r
            });
            h.append(t[i], d());
          }
        }
      } else if (8 === h.nodeType) if (h.data === l$3) v.push({
        type: 2,
        index: r
      });else {
        let t = -1;
        for (; -1 !== (t = h.data.indexOf(n$2, t + 1));) v.push({
          type: 7,
          index: r
        }), t += n$2.length - 1;
      }
      r++;
    }
  }
  static createElement(t, i) {
    const s = r$1.createElement("template");
    return s.innerHTML = t, s;
  }
}
function N(t, i, s = t, e) {
  var o, n, l, h;
  if (i === T) return i;
  let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
  const d = u(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== d && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === d ? r = void 0 : (r = new d(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = N(t, r._$AS(t, i.values), r, e)), i;
}
class S {
  constructor(t, i) {
    this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var i;
    const {
        el: {
          content: s
        },
        parts: e
      } = this._$AD,
      o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r$1).importNode(s, !0);
    C.currentNode = o;
    let n = C.nextNode(),
      l = 0,
      h = 0,
      d = e[0];
    for (; void 0 !== d;) {
      if (l === d.index) {
        let i;
        2 === d.type ? i = new M(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new z(n, this, t)), this.u.push(i), d = e[++h];
      }
      l !== (null == d ? void 0 : d.index) && (n = C.nextNode(), l++);
    }
    return o;
  }
  p(t) {
    let i = 0;
    for (const s of this.u) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class M {
  constructor(t, i, s, e) {
    var o;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }
  get _$AU() {
    var t, i;
    return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = N(this, t, i), u(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : v(t) ? this.k(t) : this.g(t);
  }
  S(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
  }
  g(t) {
    this._$AH !== A && u(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$1.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var i;
    const {
        values: s,
        _$litType$: e
      } = t,
      o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = V.createElement(e.h, this.options)), e);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);else {
      const t = new S(o, this),
        i = t.v(this.options);
      t.p(s), this.T(i), this._$AH = t;
    }
  }
  _$AC(t) {
    let i = E.get(t.strings);
    return void 0 === i && E.set(t.strings, i = new V(t)), i;
  }
  k(t) {
    c(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s,
      e = 0;
    for (const o of t) e === i.length ? i.push(s = new M(this.S(d()), this.S(d()), this, this.options)) : s = i[e], s._$AI(o), e++;
    e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var i;
    void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
  }
}
class R {
  constructor(t, i, s, e, o) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, i = this, s, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o) t = N(this, t, i, 0), n = !u(t) || t !== this._$AH && t !== T, n && (this._$AH = t);else {
      const e = t;
      let l, h;
      for (t = o[0], l = 0; l < o.length - 1; l++) h = N(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !u(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
    }
    n && !e && this.j(t);
  }
  j(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }
}
const H = s$1 ? s$1.emptyScript : "";
class I extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
  }
}
class L extends R {
  constructor(t, i, s, e, o) {
    super(t, i, s, e, o), this.type = 5;
  }
  _$AI(t, i = this) {
    var s;
    if ((t = null !== (s = N(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
    const e = this._$AH,
      o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
      n = t !== A && (e === A || o);
    o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i, s;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class z {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    N(this, t);
  }
}
const j = i$5.litHtmlPolyfillSupport;
null == j || j(V, M), (null !== (t$3 = i$5.litHtmlVersions) && void 0 !== t$3 ? t$3 : i$5.litHtmlVersions = []).push("2.7.0");
const B = (t, i, s) => {
  var e, o;
  const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  let l = n._$litPart$;
  if (void 0 === l) {
    const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new M(i.insertBefore(d(), t), t, void 0, null != s ? s : {});
  }
  return l._$AI(t), l;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$2, o$3;
class s extends d$1 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = B(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
  }
  render() {
    return T;
  }
}
s.finalized = !0, s._$litElement$ = !0, null === (l$2 = globalThis.litElementHydrateSupport) || void 0 === l$2 || l$2.call(globalThis, {
  LitElement: s
});
const n$1 = globalThis.litElementPolyfillSupport;
null == n$1 || n$1({
  LitElement: s
});
(null !== (o$3 = globalThis.litElementVersions) && void 0 !== o$3 ? o$3 : globalThis.litElementVersions = []).push("3.3.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$7 = e => n => "function" == typeof n ? ((e, n) => (customElements.define(e, n), n))(e, n) : ((e, n) => {
  const {
    kind: t,
    elements: s
  } = n;
  return {
    kind: t,
    elements: s,
    finisher(n) {
      customElements.define(e, n);
    }
  };
})(e, n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$4 = (i, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
  ...e,
  finisher(n) {
    n.createProperty(e.key, i);
  }
} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e.key,
  initializer() {
    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
  },
  finisher(n) {
    n.createProperty(e.key, i);
  }
};
function e$6(e) {
  return (n, t) => void 0 !== t ? ((i, e, n) => {
    e.constructor.createProperty(n, i);
  })(e, n, t) : i$4(e, n);
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$2(t) {
  return e$6({
    ...t,
    state: !0
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2 = ({
    finisher: e,
    descriptor: t
  }) => (o, n) => {
    var r;
    if (void 0 === n) {
      const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key,
        i = null != t ? {
          kind: "method",
          placement: "prototype",
          key: n,
          descriptor: t(o.key)
        } : {
          ...o,
          key: n
        };
      return null != e && (i.finisher = function (t) {
        e(t, n);
      }), i;
    }
    {
      const r = o.constructor;
      void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
    }
  };

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$5(e) {
  return o$2({
    finisher: (r, t) => {
      Object.assign(r.prototype[t], e);
    }
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$3(i, n) {
  return o$2({
    descriptor: o => {
      const t = {
        get() {
          var o, n;
          return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
        },
        enumerable: !0,
        configurable: !0
      };
      if (n) {
        const n = "symbol" == typeof o ? Symbol() : "__" + o;
        t.get = function () {
          var o, t;
          return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
        };
      }
      return t;
    }
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$4(e) {
  return o$2({
    descriptor: r => ({
      async get() {
        var r;
        return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
      },
      enumerable: !0,
      configurable: !0
    })
  });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
const e$3 = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n) => o.assignedElements(n) : (o, n) => o.assignedNodes(n).filter(o => o.nodeType === Node.ELEMENT_NODE);
function l$1(n) {
  const {
    slot: l,
    selector: t
  } = null != n ? n : {};
  return o$2({
    descriptor: o => ({
      get() {
        var o;
        const r = "slot" + (l ? `[name=${l}]` : ":not([name])"),
          i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r),
          s = null != i ? e$3(i, n) : [];
        return t ? s.filter(o => o.matches(t)) : s;
      },
      enumerable: !0,
      configurable: !0
    })
  });
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o$1(o, n, r) {
  let l,
    s = o;
  return "object" == typeof o ? (s = o.slot, l = o) : l = {
    flatten: n
  }, r ? l$1({
    slot: s,
    flatten: n,
    selector: r
  }) : o$2({
    descriptor: e => ({
      get() {
        var e, t;
        const o = "slot" + (s ? `[name=${s}]` : ":not([name])"),
          n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
        return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
      },
      enumerable: !0,
      configurable: !0
    })
  });
}

var name = "mediatracker-card";
var version$1 = "0.1.0";
var description = "This card is made to work with the Media Tracker custom component.";
var keywords = [
	"home-assistant",
	"homeassistant",
	"hass",
	"automation",
	"lovelace",
	"custom-cards",
	"mediatracker",
	"mediatracker-card",
	"upcoming-media"
];
var repository = "git@github.com:jonkristian/mediatracker-ha-card.git";
var author = "Jon Kristian Nilsen <hello@jonkristian.no>";
var license = "MIT";
var dependencies = {
	"@lit-labs/scoped-registry-mixin": "^1.0.0",
	"@material/mwc-icon": "^0.25.3",
	"@material/mwc-list": "^0.25.3",
	"@material/mwc-menu": "^0.25.3",
	"@material/mwc-notched-outline": "^0.25.3",
	"@material/mwc-ripple": "^0.25.3",
	"@material/mwc-select": "^0.25.3",
	"custom-card-helpers": "^1.9.0",
	dayjs: "^1.11.7",
	lit: "^2.1.2",
	sortablejs: "^1.15.0"
};
var devDependencies = {
	"@babel/core": "^7.20.12",
	"@rollup/plugin-babel": "^6.0.3",
	"@rollup/plugin-commonjs": "^24.0.1",
	"@rollup/plugin-json": "^6.0.0",
	"@rollup/plugin-node-resolve": "^15.0.1",
	"@rollup/plugin-terser": "^0.3.0",
	"@rollup/plugin-typescript": "^11.0.0",
	rollup: "^3.18.0",
	typescript: "^4.9.4"
};
var scripts = {
	build: "rollup -c --bundleConfigAsCjs",
	dev: "rollup -c --watch --bundleConfigAsCjs"
};
var pjson = {
	name: name,
	version: version$1,
	description: description,
	keywords: keywords,
	repository: repository,
	author: author,
	license: license,
	dependencies: dependencies,
	devDependencies: devDependencies,
	scripts: scripts
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dayjs_minExports = {};
var dayjs_min = {
  get exports(){ return dayjs_minExports; },
  set exports(v){ dayjs_minExports = v; },
};

(function (module, exports) {
  !function (t, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {

    var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      l = "Invalid Date",
      $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function (t) {
          var e = ["th", "st", "nd", "rd"],
            n = t % 100;
          return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
      },
      m = function (t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
      },
      v = {
        s: m,
        z: function (t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
          return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e);
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, f),
            s = n - i < 0,
            u = e.clone().add(r + (s ? -1 : 1), f);
          return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function (t) {
          return {
            M: f,
            y: c,
            w: o,
            d: a,
            D: d,
            h: u,
            m: s,
            s: i,
            ms: r,
            Q: h
          }[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function (t) {
          return void 0 === t;
        }
      },
      g = "en",
      D = {};
    D[g] = M;
    var p = function (t) {
        return t instanceof _;
      },
      S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
          var s = e.toLowerCase();
          D[s] && (i = s), n && (D[s] = n, i = s);
          var u = e.split("-");
          if (!i && u.length > 1) return t(u[0]);
        } else {
          var a = e.name;
          D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
      },
      w = function (t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
      },
      O = v;
    O.l = S, O.i = p, O.w = function (t, e) {
      return w(t, {
        locale: e.$L,
        utc: e.$u,
        x: e.$x,
        $offset: e.$offset
      });
    };
    var _ = function () {
        function M(t) {
          this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function (t) {
          this.$d = function (t) {
            var e = t.date,
              n = t.utc;
            if (null === e) return new Date(NaN);
            if (O.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);
            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match($);
              if (r) {
                var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
              }
            }
            return new Date(e);
          }(t), this.$x = t.x || {}, this.init();
        }, m.init = function () {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function () {
          return O;
        }, m.isValid = function () {
          return !(this.$d.toString() === l);
        }, m.isSame = function (t, e) {
          var n = w(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function (t, e) {
          return w(t) < this.startOf(e);
        }, m.isBefore = function (t, e) {
          return this.endOf(e) < w(t);
        }, m.$g = function (t, e, n) {
          return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function () {
          return this.$d.getTime();
        }, m.startOf = function (t, e) {
          var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            l = function (t, e) {
              var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
              return r ? i : i.endOf(a);
            },
            $ = function (t, e) {
              return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
            },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            v = "set" + (this.$u ? "UTC" : "");
          switch (h) {
            case c:
              return r ? l(1, 0) : l(31, 11);
            case f:
              return r ? l(1, M) : l(0, M + 1);
            case o:
              var g = this.$locale().weekStart || 0,
                D = (y < g ? y + 7 : y) - g;
              return l(r ? m - D : m + (6 - D), M);
            case a:
            case d:
              return $(v + "Hours", 0);
            case u:
              return $(v + "Minutes", 1);
            case s:
              return $(v + "Seconds", 2);
            case i:
              return $(v + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m.endOf = function (t) {
          return this.startOf(t, !1);
        }, m.$set = function (t, e) {
          var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
            $ = o === a ? this.$D + (e - this.$W) : e;
          if (o === f || o === c) {
            var y = this.clone().set(d, 1);
            y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
          } else l && this.$d[l]($);
          return this.init(), this;
        }, m.set = function (t, e) {
          return this.clone().$set(t, e);
        }, m.get = function (t) {
          return this[O.p(t)]();
        }, m.add = function (r, h) {
          var d,
            l = this;
          r = Number(r);
          var $ = O.p(h),
            y = function (t) {
              var e = w(l);
              return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
          if ($ === f) return this.set(f, this.$M + r);
          if ($ === c) return this.set(c, this.$y + r);
          if ($ === a) return y(1);
          if ($ === o) return y(7);
          var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
            m = this.$d.getTime() + r * M;
          return O.w(m, this);
        }, m.subtract = function (t, e) {
          return this.add(-1 * t, e);
        }, m.format = function (t) {
          var e = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || l;
          var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function (t, n, i, s) {
              return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            },
            c = function (t) {
              return O.s(s % 12 || 12, t, "0");
            },
            d = n.meridiem || function (t, e, n) {
              var r = t < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            },
            $ = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: a + 1,
              MM: O.s(a + 1, 2, "0"),
              MMM: h(n.monthsShort, a, f, 3),
              MMMM: h(f, a),
              D: this.$D,
              DD: O.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: h(n.weekdaysMin, this.$W, o, 2),
              ddd: h(n.weekdaysShort, this.$W, o, 3),
              dddd: o[this.$W],
              H: String(s),
              HH: O.s(s, 2, "0"),
              h: c(1),
              hh: c(2),
              a: d(s, u, !0),
              A: d(s, u, !1),
              m: String(u),
              mm: O.s(u, 2, "0"),
              s: String(this.$s),
              ss: O.s(this.$s, 2, "0"),
              SSS: O.s(this.$ms, 3, "0"),
              Z: i
            };
          return r.replace(y, function (t, e) {
            return e || $[t] || i.replace(":", "");
          });
        }, m.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function (r, d, l) {
          var $,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            v = this - M,
            g = O.m(this, M);
          return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
        }, m.daysInMonth = function () {
          return this.endOf(f).$D;
        }, m.$locale = function () {
          return D[this.$L];
        }, m.locale = function (t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
            r = S(t, e, !0);
          return r && (n.$L = r), n;
        }, m.clone = function () {
          return O.w(this.$d, this);
        }, m.toDate = function () {
          return new Date(this.valueOf());
        }, m.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function () {
          return this.$d.toISOString();
        }, m.toString = function () {
          return this.$d.toUTCString();
        }, M;
      }(),
      T = _.prototype;
    return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
      T[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }), w.extend = function (t, e) {
      return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
      return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
  });
})(dayjs_min);
var dayjs = dayjs_minExports;

var nbExports = {};
var nb$2 = {
  get exports(){ return nbExports; },
  set exports(v){ nbExports = v; },
};

(function (module, exports) {
  !function (e, t) {
    module.exports = t(dayjs_minExports) ;
  }(commonjsGlobal, function (e) {

    function t(e) {
      return e && "object" == typeof e && "default" in e ? e : {
        default: e
      };
    }
    var n = t(e),
      a = {
        name: "nb",
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        ordinal: function (e) {
          return e + ".";
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år"
        }
      };
    return n.default.locale(a, null, !0), a;
  });
})(nb$2);

var customParseFormatExports = {};
var customParseFormat$1 = {
  get exports(){ return customParseFormatExports; },
  set exports(v){ customParseFormatExports = v; },
};

(function (module, exports) {
  !function (e, t) {
    module.exports = t() ;
  }(commonjsGlobal, function () {

    var e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      n = /\d\d/,
      r = /\d\d?/,
      i = /\d*[^-_:/,()\s\d]+/,
      o = {},
      s = function (e) {
        return (e = +e) + (e > 68 ? 1900 : 2e3);
      };
    var a = function (e) {
        return function (t) {
          this[e] = +t;
        };
      },
      f = [/[+-]\d\d:?(\d\d)?|Z/, function (e) {
        (this.zone || (this.zone = {})).offset = function (e) {
          if (!e) return 0;
          if ("Z" === e) return 0;
          var t = e.match(/([+-]|\d\d)/g),
            n = 60 * t[1] + (+t[2] || 0);
          return 0 === n ? 0 : "+" === t[0] ? -n : n;
        }(e);
      }],
      h = function (e) {
        var t = o[e];
        return t && (t.indexOf ? t : t.s.concat(t.f));
      },
      u = function (e, t) {
        var n,
          r = o.meridiem;
        if (r) {
          for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
            n = i > 12;
            break;
          }
        } else n = e === (t ? "pm" : "PM");
        return n;
      },
      d = {
        A: [i, function (e) {
          this.afternoon = u(e, !1);
        }],
        a: [i, function (e) {
          this.afternoon = u(e, !0);
        }],
        S: [/\d/, function (e) {
          this.milliseconds = 100 * +e;
        }],
        SS: [n, function (e) {
          this.milliseconds = 10 * +e;
        }],
        SSS: [/\d{3}/, function (e) {
          this.milliseconds = +e;
        }],
        s: [r, a("seconds")],
        ss: [r, a("seconds")],
        m: [r, a("minutes")],
        mm: [r, a("minutes")],
        H: [r, a("hours")],
        h: [r, a("hours")],
        HH: [r, a("hours")],
        hh: [r, a("hours")],
        D: [r, a("day")],
        DD: [n, a("day")],
        Do: [i, function (e) {
          var t = o.ordinal,
            n = e.match(/\d+/);
          if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
        }],
        M: [r, a("month")],
        MM: [n, a("month")],
        MMM: [i, function (e) {
          var t = h("months"),
            n = (h("monthsShort") || t.map(function (e) {
              return e.slice(0, 3);
            })).indexOf(e) + 1;
          if (n < 1) throw new Error();
          this.month = n % 12 || n;
        }],
        MMMM: [i, function (e) {
          var t = h("months").indexOf(e) + 1;
          if (t < 1) throw new Error();
          this.month = t % 12 || t;
        }],
        Y: [/[+-]?\d+/, a("year")],
        YY: [n, function (e) {
          this.year = s(e);
        }],
        YYYY: [/\d{4}/, a("year")],
        Z: f,
        ZZ: f
      };
    function c(n) {
      var r, i;
      r = n, i = o && o.formats;
      for (var s = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
          var o = r && r.toUpperCase();
          return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, n) {
            return t || n.slice(1);
          });
        })).match(t), a = s.length, f = 0; f < a; f += 1) {
        var h = s[f],
          u = d[h],
          c = u && u[0],
          l = u && u[1];
        s[f] = l ? {
          regex: c,
          parser: l
        } : h.replace(/^\[|\]$/g, "");
      }
      return function (e) {
        for (var t = {}, n = 0, r = 0; n < a; n += 1) {
          var i = s[n];
          if ("string" == typeof i) r += i.length;else {
            var o = i.regex,
              f = i.parser,
              h = e.slice(r),
              u = o.exec(h)[0];
            f.call(t, u), e = e.replace(u, "");
          }
        }
        return function (e) {
          var t = e.afternoon;
          if (void 0 !== t) {
            var n = e.hours;
            t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
          }
        }(t), t;
      };
    }
    return function (e, t, n) {
      n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
      var r = t.prototype,
        i = r.parse;
      r.parse = function (e) {
        var t = e.date,
          r = e.utc,
          s = e.args;
        this.$u = r;
        var a = s[1];
        if ("string" == typeof a) {
          var f = !0 === s[2],
            h = !0 === s[3],
            u = f || h,
            d = s[2];
          h && (d = s[2]), o = this.$locale(), !f && d && (o = n.Ls[d]), this.$d = function (e, t, n) {
            try {
              if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
              var r = c(t)(e),
                i = r.year,
                o = r.month,
                s = r.day,
                a = r.hours,
                f = r.minutes,
                h = r.seconds,
                u = r.milliseconds,
                d = r.zone,
                l = new Date(),
                m = s || (i || o ? 1 : l.getDate()),
                M = i || l.getFullYear(),
                Y = 0;
              i && !o || (Y = o > 0 ? o - 1 : l.getMonth());
              var p = a || 0,
                v = f || 0,
                D = h || 0,
                g = u || 0;
              return d ? new Date(Date.UTC(M, Y, m, p, v, D, g + 60 * d.offset * 1e3)) : n ? new Date(Date.UTC(M, Y, m, p, v, D, g)) : new Date(M, Y, m, p, v, D, g);
            } catch (e) {
              return new Date("");
            }
          }(t, a, r), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = new Date("")), o = {};
        } else if (a instanceof Array) for (var l = a.length, m = 1; m <= l; m += 1) {
          s[1] = a[m - 1];
          var M = n.apply(this, s);
          if (M.isValid()) {
            this.$d = M.$d, this.$L = M.$L, this.init();
            break;
          }
          m === l && (this.$d = new Date(""));
        } else i.call(this, e);
      };
    };
  });
})(customParseFormat$1);
var customParseFormat = customParseFormatExports;

var relativeTimeExports = {};
var relativeTime$1 = {
  get exports(){ return relativeTimeExports; },
  set exports(v){ relativeTimeExports = v; },
};

(function (module, exports) {
  !function (r, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {

    return function (r, e, t) {
      r = r || {};
      var n = e.prototype,
        o = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
      function i(r, e, t, o) {
        return n.fromToBase(r, e, t, o);
      }
      t.en.relativeTime = o, n.fromToBase = function (e, n, i, d, u) {
        for (var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }], m = h.length, c = 0; c < m; c += 1) {
          var y = h[c];
          y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0));
          var p = (r.rounding || Math.round)(Math.abs(f));
          if (s = f > 0, p <= y.r || !y.r) {
            p <= 1 && c > 0 && (y = h[c - 1]);
            var v = l[y.l];
            u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s);
            break;
          }
        }
        if (n) return a;
        var M = s ? l.future : l.past;
        return "function" == typeof M ? M(a) : M.replace("%s", a);
      }, n.to = function (r, e) {
        return i(r, e, this, !0);
      }, n.from = function (r, e) {
        return i(r, e, this);
      };
      var d = function (r) {
        return r.$u ? t.utc() : t();
      };
      n.toNow = function (r) {
        return this.to(d(this), r);
      }, n.fromNow = function (r) {
        return this.from(d(this), r);
      };
    };
  });
})(relativeTime$1);
var relativeTime = relativeTimeExports;

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
const fetchCalendarEvents = async (hass, start, end, calendars) => {
    const params = encodeURI(`?start=${start}Z&end=${end}Z`);
    const calEvents = [];
    const errors = [];
    const promises = [];
    calendars.forEach((cal) => {
        promises.push(hass.callApi("GET", `calendars/${cal.entity_id}${params}`));
    });
    for (const [idx, promise] of promises.entries()) {
        let result;
        try {
            // eslint-disable-next-line no-await-in-loop
            result = await promise;
        }
        catch (err) {
            errors.push(calendars[idx].entity_id);
            continue;
        }
        const cal = calendars[idx];
        result.forEach((ev) => {
            const eventStart = getCalendarDate(ev.start);
            const eventEnd = getCalendarDate(ev.end);
            if (!eventStart || !eventEnd) {
                return;
            }
            const event = {
                start: eventStart,
                end: eventEnd,
                title: ev.summary,
                backgroundColor: cal.backgroundColor,
                calendar: cal.entity_id,
                description: ev.description,
                location: ev.location,
            };
            calEvents.push(event);
        });
    }
    return { events: calEvents, errors };
};
const getCalendarDate = (dateObj) => {
    if (typeof dateObj === "string") {
        return dateObj;
    }
    if (dateObj.dateTime) {
        return dateObj.dateTime;
    }
    if (dateObj.date) {
        return dateObj.date;
    }
    return undefined;
};
function groupEventsByDay(events) {
    // grouping events by days, returns object with days and events
    const ev = [].concat(...events);
    const groupsOfEvents = ev.reduce(function (r, a) {
        r[a.start] = r[a.start] || [];
        r[a.start].push(a);
        return r;
    }, {});
    let groupedEvents = Object.keys(groupsOfEvents).map(function (k) {
        return groupsOfEvents[k];
    });
    groupedEvents = groupedEvents;
    return groupedEvents;
}
const COLORS = [
    "#44739e",
    "#984ea3",
    "#00d2d5",
    "#ff7f00",
    "#af8d00",
    "#7f80cd",
    "#b3e900",
    "#c42e60",
    "#a65628",
    "#f781bf",
    "#8dd3c7",
    "#bebada",
    "#fb8072",
    "#80b1d3",
    "#fdb462",
    "#fccde5",
    "#bc80bd",
    "#ffed6f",
    "#c4eaff",
    "#cf8c00",
    "#1b9e77",
    "#d95f02",
    "#e7298a",
    "#e6ab02",
    "#a6761d",
    "#0097ff",
    "#00d067",
    "#f43600",
    "#4ba93b",
    "#5779bb",
    "#927acc",
    "#97ee3f",
    "#bf3947",
    "#9f5b00",
    "#f48758",
    "#8caed6",
    "#f2b94f",
    "#eff26e",
    "#e43872",
    "#d9b100",
    "#9d7a00",
    "#698cff",
    "#d9d9d9",
    "#00d27e",
    "#d06800",
    "#009f82",
    "#c49200",
    "#cbe8ff",
    "#fecddf",
    "#c27eb6",
    "#8cd2ce",
    "#c4b8d9",
    "#f883b0",
    "#a49100",
    "#f48800",
    "#27d0df",
    "#a04a9b",
];
function getColorByIndex(index) {
    return COLORS[index % COLORS.length];
}

var updateLocaleExports = {};
var updateLocale$1 = {
  get exports(){ return updateLocaleExports; },
  set exports(v){ updateLocaleExports = v; },
};

(function (module, exports) {
  !function (e, n) {
    module.exports = n() ;
  }(commonjsGlobal, function () {

    return function (e, n, t) {
      t.updateLocale = function (e, n) {
        var o = t.Ls[e];
        if (o) return (n ? Object.keys(n) : []).forEach(function (e) {
          o[e] = n[e];
        }), o;
      };
    };
  });
})(updateLocale$1);
var updateLocale = updateLocaleExports;

var common$1 = {
	version: "Version",
	invalid_configuration: "Invalid configuration",
	show_warning: "Show warning"
};
var editor$1 = {
	name: "Name",
	title: "Title",
	refresh_interval: "Refresh Interval",
	number_of_days: "Number of Days",
	constrict_height: "Constrict Card Height",
	human_readable_countdown: "Human Readable Countdown",
	show_rating: "Show Rating",
	style: {
		title: "Select style ...",
		backdrop: "Backdrop",
		poster: "Poster",
		plain: "Plain"
	},
	source_links: {
		title: "Source Links",
		primary: "Primary",
		all: "Show all"
	},
	description: {
		title: "Include Description",
		today: "Today",
		week: "1 Week",
		all: "Show for All"
	}
};
var card$1 = {
	today: "Today",
	rating: "Rating",
	studio_link: "Visit Studio"
};
var en = {
	common: common$1,
	editor: editor$1,
	card: card$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    card: card$1,
    common: common$1,
    default: en,
    editor: editor$1
});

var common = {
	version: "Versjon",
	invalid_configuration: "Ugyldig oppsett",
	show_warning: "Vis advarsel"
};
var editor = {
	name: "Navn",
	title: "Tittel",
	refresh_interval: "Oppdateringsintervall",
	number_of_days: "Antall dager",
	constrict_height: "Tving korthøyde",
	human_readable_countdown: "Nedtelling som setning",
	show_rating: "Vis vurdering",
	style: {
		title: "Velg stil ...",
		backdrop: "Bakgrunnsgrafikk",
		poster: "Poster",
		plain: "Vanlig"
	},
	source_links: {
		title: "Kildelenker",
		primary: "Primær",
		all: "Vis alle"
	},
	description: {
		title: "Inkluder beskrivelse",
		today: "I dag",
		week: "1 uke",
		all: "Vis for alle"
	}
};
var card = {
	today: "I dag",
	rating: "Vurdering",
	studio_link: "Besøk studio"
};
var nb = {
	common: common,
	editor: editor,
	card: card
};

var nb$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    card: card,
    common: common,
    default: nb,
    editor: editor
});

const languages = {
    en: en$1,
    nb: nb$1,
};
const DEFAULT_LANG = "en";
function getTranslatedString(key, lang) {
    try {
        return key
            .split(".")
            .reduce((o, i) => o[i], languages[lang]);
    }
    catch (_) {
        return undefined;
    }
}
function setupCustomlocalize(hass) {
    return function (key) {
        var _a;
        const lang = (_a = hass === null || hass === void 0 ? void 0 : hass.locale.language) !== null && _a !== void 0 ? _a : DEFAULT_LANG;
        let translated = getTranslatedString(key, lang);
        if (!translated)
            translated = getTranslatedString(key, DEFAULT_LANG);
        return translated !== null && translated !== void 0 ? translated : key;
    };
}

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
let MediaTrackerCardEvent$2 = class MediaTrackerCardEvent extends s {
    render() {
        if (!this.event) {
            return x ``;
        }
        const data = JSON.parse(this.event.location);
        const customLocalize = setupCustomlocalize(this.hass);
        let showDescription = false;
        if (this.description == 'week' && dayjs(this.event.start) <= dayjs().add(7, 'day')) {
            showDescription = true;
        }
        if (this.description == 'today' && dayjs(this.event.start).isToday()) {
            showDescription = true;
        }
        return x `
      <div class="mt-event">
        <span class="mt-event-dot" style="--event-dot: ${this.event.backgroundColor};"></span>
        <div class="mt-event-content">
          <header class="mt-event-header">
            <h3 class="mt-event-header__title">${this.event.title}</h3>
            ${data.url ? x `<a class="mt-event-studio" href="${data.url}" title="${customLocalize("card.studio_link")}" target="_new"><ha-icon class="mt-event-icon" icon="mdi:link"></ha-icon></a>` : ''}
          </header>

          <div class="mt-event-details">
            ${this.rating && data.tmdb_rating ? x `Rating: ${data.tmdb_rating.toFixed(1)}` : ''}
            ${this.get_source_links(data.sources)}
          </div>

          ${showDescription == true || this.description == 'all'
            ? x `
              <div class="mt-event-description">${this.event.description}</div>
            `
            : x ``}
      </div>
    `;
    }
    get_source_links(sources) {
        if (this.source_links == 'all') {
            return x `
        ${sources.igdb ? x `<a class="mt-event-source" href="${sources.igdb}">IGDB</a>` : ''}
        ${sources.tmdb ? x `<a class="mt-event-source" href="${sources.tmdb}">TMDB</a>` : ''}
        ${sources.imdb ? x `<a class="mt-event-source" href="${sources.imdb}">IMDB</a>` : ''}
      `;
        }
        if (this.source_links == 'primary') {
            return x `
        ${sources.igdb ? x `<a class="mt-event-source" href="${sources.igdb}">IGDB</a>` : ''}
        ${sources.tmdb ? x `<a class="mt-event-source" href="${sources.tmdb}">TMDB</a>` : ''}
      `;
        }
        return x ``;
    }
    static get styles() {
        return i$6 `
      .mt-event {
        display: grid;
        grid-template-columns: 10px 1fr;
        gap: .5rem;
        height: 100%;
        overflow: hidden;
      }

      .mt-event-icon {
        --mdc-icon-size: 20px;
      }

      .mt-event-dot {
        display: block;
        background-color: var(--event-dot);
        width: 10px;
        height: 10px;
        border-radius: 100%;
        margin-top: 6px;
      }

      .mt-event-content {
        color: var(--primary-text-color);
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: .3rem;
      }

      .mt-event-header {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }

      .mt-event-header__title {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .mt-event-details {
        margin: 0;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .mt-event-description {
        margin: 0;
        font-size: 13px;
        padding-block: .5rem;
        color: var(--primary-text-color);
        max-width: 600px;
      }
    `;
    }
};
__decorate([
    e$6()
], MediaTrackerCardEvent$2.prototype, "hass", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$2.prototype, "event", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$2.prototype, "rating", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$2.prototype, "description", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$2.prototype, "source_links", void 0);
MediaTrackerCardEvent$2 = __decorate([
    e$7("mediatracker-event")
], MediaTrackerCardEvent$2);

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
let MediaTrackerCardEvent$1 = class MediaTrackerCardEvent extends s {
    render() {
        if (!this.event) {
            return x ``;
        }
        const data = JSON.parse(this.event.location);
        const customLocalize = setupCustomlocalize(this.hass);
        let showDescription = false;
        if (this.description == 'week' && dayjs(this.event.start) <= dayjs().add(7, 'day')) {
            showDescription = true;
        }
        if (this.description == 'today' && dayjs(this.event.start).isToday()) {
            showDescription = true;
        }
        return x `
      <div class="mt-event" style="--event-color: ${this.event.backgroundColor}; --event-backdrop: url(http://${data.host}${data.backdrop}?token=${data.token})">
        <span class="mt-event-color" style="--event-color: ${this.event.backgroundColor};"></span>
        <div class="mt-event-content">
          <header class="mt-event-header">
            <h3 class="mt-event-header__title">${this.event.title}</h3>
            ${data.url ? x `<a class="mt-event-studio" href="${data.url}" title="${customLocalize("card.studio_link")}" target="_new"><ha-icon class="mt-event-icon" icon="mdi:link"></ha-icon></a>` : ''}
          </header>
          <div class="mt-event-details">
            ${this.rating && data.tmdb_rating ? x `<span>${customLocalize("card.rating")}: ${data.tmdb_rating.toFixed(1)}</span>` : ''}
            ${this.get_source_links(data.sources)}
          </div>
          ${showDescription == true || this.description == 'all'
            ? x `
              <div class="mt-event-description">${this.event.description}</div>
            `
            : x ``}
      </div>
    `;
    }
    get_source_links(sources) {
        if (this.source_links == 'all') {
            return x `
        ${sources.igdb ? x `<a class="mt-event-source" href="${sources.igdb}">IGDB</a>` : ''}
        ${sources.tmdb ? x `<a class="mt-event-source" href="${sources.tmdb}">TMDB</a>` : ''}
        ${sources.imdb ? x `<a class="mt-event-source" href="${sources.imdb}">IMDB</a>` : ''}
      `;
        }
        if (this.source_links == 'primary') {
            return x `
        ${sources.igdb ? x `<a class="mt-event-source" href="${sources.igdb}">IGDB</a>` : ''}
        ${sources.tmdb ? x `<a class="mt-event-source" href="${sources.tmdb}">TMDB</a>` : ''}
      `;
        }
        return x ``;
    }
    static get styles() {
        return i$6 `
      .mt-event {
        background-color: var(--event-color);
        background-image: var(--event-backdrop);
        background-position: center;
        display: grid;
        grid-template-columns: 10px 1fr;
        border-radius: 10px;
        height: 100%;
        overflow: hidden;
      }

      .mt-event-icon {
        --mdc-icon-size: 20px;
      }

      .mt-event-color {
        display: block;
        background-color: var(--event-color);
        width: 100%;
        height: 100%;
      }

      .mt-event-content {
        color: var(--primary-text-color);
        padding-left: 1rem;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: .3rem;
        background-color: rgba(0,0,0,.75);
        padding: 1rem;
        height: 100%;
      }

      .mt-event-header {
        margin: 0;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }

      .mt-event-header__title {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .mt-event-details {
        margin: 0;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .mt-event-description {
        margin: 0;
        font-size: 13px;
        padding-block: .5rem;
        color: var(--primary-text-color);
        max-width: 600px;
      }
    `;
    }
};
__decorate([
    e$6()
], MediaTrackerCardEvent$1.prototype, "hass", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$1.prototype, "event", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$1.prototype, "rating", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$1.prototype, "description", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent$1.prototype, "source_links", void 0);
MediaTrackerCardEvent$1 = __decorate([
    e$7("mediatracker-event-backdrop")
], MediaTrackerCardEvent$1);

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
let MediaTrackerCardEvent = class MediaTrackerCardEvent extends s {
    render() {
        if (!this.event) {
            return x ``;
        }
        const data = JSON.parse(this.event.location);
        const customLocalize = setupCustomlocalize(this.hass);
        let showDescription = false;
        if (this.description == 'week' && dayjs(this.event.start) <= dayjs().add(7, 'day')) {
            showDescription = true;
        }
        if (this.description == 'today' && dayjs(this.event.start).isToday()) {
            showDescription = true;
        }
        return x `
      <div class="mt-event" style="--event-color: ${this.event.backgroundColor};">
        <figure class="mt-event-poster">
          <img src="http://${data.host}${data.poster}?size=small&token=${data.token}">
        </figure>

        <div class="mt-event-content">
          <header class="mt-event-header">
            <h3 class="mt-event-header__title">${this.event.title}</h3>
            ${data.url ? x `<a class="mt-event-studio" href="${data.url}" title="${customLocalize("card.studio_link")}" target="_new"><ha-icon class="mt-event-icon" icon="mdi:link"></ha-icon></a>` : ''}
          </header>
          <div class="mt-event-details">
            ${this.rating && data.tmdb_rating ? x `<span>${customLocalize("card.rating")}: ${data.tmdb_rating.toFixed(1)}</span>` : ''}
            ${this.get_source_links(data.sources)}
          </div>
          ${showDescription == true || this.description == 'all'
            ? x `
              <div class="mt-event-description">${this.event.description}</div>
            `
            : x ``}
      </div>
    `;
    }
    get_source_links(sources) {
        if (this.source_links == 'all') {
            return x `
        ${sources.igdb ? x `<a class="mt-event-source" href="${sources.igdb}">IGDB</a>` : ''}
        ${sources.tmdb ? x `<a class="mt-event-source" href="${sources.tmdb}">TMDB</a>` : ''}
        ${sources.imdb ? x `<a class="mt-event-source" href="${sources.imdb}">IMDB</a>` : ''}
      `;
        }
        if (this.source_links == 'primary') {
            return x `
        ${sources.igdb ? x `<a class="mt-event-source" href="${sources.igdb}">IGDB</a>` : ''}
        ${sources.tmdb ? x `<a class="mt-event-source" href="${sources.tmdb}">TMDB</a>` : ''}
      `;
        }
        return x ``;
    }
    static get styles() {
        return i$6 `
      .mt-event {
        background-color: var(--event-color);
        display: grid;
        grid-template-columns: 100px 1fr;
        border-radius: 10px;
        height: 100%;
        overflow: hidden;
      }

      .mt-event-icon {
        --mdc-icon-size: 20px;
      }

      .mt-event-poster {
        position: relative;
        line-height: 0;
        margin: 0;
      }

      .mt-event-poster img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .mt-event-content {
        color: var(--primary-text-color);
        padding-left: 1rem;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: .3rem;
        background-color: rgba(0,0,0,.6);
        padding: 1rem;
        height: 100%;
      }

      .mt-event-header {
        margin: 0;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }

      .mt-event-header__title {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .mt-event-details {
        margin: 0;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .mt-event-description {
        margin: 0;
        font-size: 13px;
        padding-block: .5rem;
        color: var(--primary-text-color);
        max-width: 600px;
      }
    `;
    }
};
__decorate([
    e$6()
], MediaTrackerCardEvent.prototype, "hass", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent.prototype, "event", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent.prototype, "rating", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent.prototype, "description", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvent.prototype, "source_links", void 0);
MediaTrackerCardEvent = __decorate([
    e$7("mediatracker-event-poster")
], MediaTrackerCardEvent);

var isTodayExports = {};
var isToday$1 = {
  get exports(){ return isTodayExports; },
  set exports(v){ isTodayExports = v; },
};

(function (module, exports) {
  !function (e, o) {
    module.exports = o() ;
  }(commonjsGlobal, function () {

    return function (e, o, t) {
      o.prototype.isToday = function () {
        var e = "YYYY-MM-DD",
          o = t();
        return this.format(e) === o.format(e);
      };
    };
  });
})(isToday$1);
var isToday = isTodayExports;

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.extend(isToday);
let MediaTrackerCardEvents = class MediaTrackerCardEvents extends s {
    render() {
        if (!this.events) {
            return x ``;
        }
        const customLocalize = setupCustomlocalize(this.hass);
        return x `
      <header class="mt-events-header">
        ${dayjs(this.date).isToday()
            ? x `
          <h3 class="mt-events-header__day">${customLocalize("card.today")}</h3>
        `
            : x `
          <h3 class="mt-events-header__day">
            ${dayjs(this.date).format('dddd')}
            ${this.config.human_readable_countdown ? x `<small class="mt-events-header__hrc"> • ${dayjs(this.date).fromNow()}</small>` : ''}
          </h3>
        `}
        <p class="mt-events-header__date">${dayjs(this.date).format('DD/MM')}</p>
      </header>

      ${this.config.style == 'backdrop' ? x `
          <div class="mt-events style-backdrop">
            ${this.events.map((event) => x `
              <mediatracker-event-backdrop
                .hass=${this.hass}
                .event="${event}"
                .rating="${this.config.show_rating}"
                .description="${this.config.description}"
                .source_links="${this.config.source_links}"
              ></mediatracker-event-backdrop>
            `)}
          </div>
        `
            : this.config.style == 'poster' ? x `
          <div class="mt-events style-poster">
            ${this.events.map((event) => x `
              <mediatracker-event-poster
                .hass=${this.hass}
                .event="${event}"
                .rating="${this.config.show_rating}"
                .description="${this.config.description}"
                .source_links="${this.config.source_links}"
              ></mediatracker-event-poster>
            `)}
          </div>
      `
                : x `
        <div class="mt-events">
          ${this.events.map((event) => x `
            <mediatracker-event
              .hass=${this.hass}
              .event="${event}"
              .rating="${this.config.show_rating}"
              .description="${this.config.description}"
              .source_links="${this.config.source_links}"
            ></mediatracker-event>
          `)}
        </div>
      `}

    `;
    }
    static get styles() {
        return i$6 `
      .mt-events-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--divider-color);
        margin-bottom: 1rem;
        padding-bottom: .5rem;
      }

      .mt-events-header__day,
      .mt-events-header__date {
        font-size: 18px;
        font-weight: 400;
        padding: 0;
        margin: 0;
      }

      .mt-events {
        display: grid;
        gap: 1.6rem;
      }

      .mt-events.style-backdrop,
      .mt-events.style-poster {
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 1fr;
      }
    `;
    }
};
__decorate([
    e$6()
], MediaTrackerCardEvents.prototype, "hass", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvents.prototype, "date", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvents.prototype, "events", void 0);
__decorate([
    e$6()
], MediaTrackerCardEvents.prototype, "config", void 0);
MediaTrackerCardEvents = __decorate([
    e$7("mediatracker-card-events")
], MediaTrackerCardEvents);

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
/* eslint-disable @typescript-eslint/no-explicit-any */
window.customCards = window.customCards || [];
window.customCards.push({
    type: "mediatracker-card",
    name: "Media Tracker Card",
    description: "This card is made to work with the Media Tracker custom component.",
});
/* eslint-enable @typescript-eslint/no-explicit-any */
let MediaTrackerCard = class MediaTrackerCard extends s {
    constructor() {
        super(...arguments);
        this._events = [];
        this._calendars = [];
        this._error = undefined;
    }
    static getStubConfig() {
        return {
            entities: [],
        };
    }
    static async getConfigElement() {
        await Promise.resolve().then(function () { return mediatrackerCardEditor; });
        return document.createElement("mediatracker-card-editor");
    }
    getCardSize() {
        return 1;
    }
    setConfig(config) {
        var _a, _b;
        ((_a = this._config) === null || _a === void 0 ? void 0 : _a.refresh_interval) || 60;
        ((_b = this._config) === null || _b === void 0 ? void 0 : _b.number_of_days) || 10;
        this._config = config;
        this._calendars = config.entities.map((entity, idx) => ({
            entity_id: entity.entity,
            backgroundColor: getColorByIndex(idx),
        }));
        const dateFormat = "YYYY-MM-DDTHH:mm:ss";
        this._startDate = dayjs()
            .startOf("day")
            .format(dateFormat);
        this._endDate = dayjs()
            .add(this._config.number_of_days, "day")
            .endOf("day")
            .format(dateFormat);
    }
    render() {
        var _a, _b;
        if (!this._config || !this.hass) {
            return x ``;
        }
        const lang = (_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.locale.language) !== null && _b !== void 0 ? _b : "en";
        dayjs.locale(lang);
        this._fetchCalendarEvents();
        const days = groupEventsByDay(this._events);
        return x `
    <ha-card>
      <div class="mt-card">
        <div class="mt-header">
          ${this._config.name}
        </div>

        <div class="mt-calendar${this._config.constrict_height ? ' constrict' : ''}">
          ${days ? x `
            ${days.map((events) => x `
                <div class="mt-day">
                  <mediatracker-card-events
                    .hass=${this.hass}
                    .date=${events[0].start}
                    .events="${events}"
                    .config="${this._config}"
                  ></mediatracker-card-events>
                </div>
              `)}
          ` : x ``}
        </div>
      </div>
    </ha-card>
    `;
    }
    async _fetchCalendarEvents() {
        if (!this._startDate || !this._endDate) {
            return;
        }
        if (!this._isUpdating) {
            if (!this._lastEventsUpdateTime ||
                dayjs().diff(this._lastEventsUpdateTime, "seconds") >
                    this._config.refresh_interval) {
                this._isUpdating = true;
                this._error = undefined;
                const result = await fetchCalendarEvents(this.hass, this._startDate, this._endDate, this._calendars);
                this._events = result.events;
                if (result.errors.length > 0) {
                    const nameList = result.errors.join(", ");
                    this._error = `${this.hass.localize("ui.components.calendar.event_retrieval_error")} ${nameList}`;
                }
                this._isUpdating = false;
                this._lastEventsUpdateTime = dayjs();
            }
        }
    }
    static get styles() {
        return i$6 `
      .mt-card {
        display: flex;
        flex-direction: column;
        padding: 1rem;
      }

      .mt-header {
        color: var(--ha-card-header-color,--primary-text-color);
        font-size: var(--ha-card-header-font-size,24px);
        padding-block: .5rem;
        margin-bottom: 1rem;
      }

      .mt-calendar.constrict {
        overflow-y: scroll;
        max-height: 450px;
        padding-right: 1rem;
      }

      .mt-day {
        margin-bottom: 1.6rem;
      }
    `;
    }
};
__decorate([
    e$6({ attribute: false })
], MediaTrackerCard.prototype, "hass", void 0);
__decorate([
    e$6({ attribute: false })
], MediaTrackerCard.prototype, "_events", void 0);
__decorate([
    e$6({ attribute: false })
], MediaTrackerCard.prototype, "_config", void 0);
MediaTrackerCard = __decorate([
    e$7("mediatracker-card")
], MediaTrackerCard);
if (!customElements.get("mediatracker-card")) {
    customElements.define("mediatracker-card", MediaTrackerCard);
    console.info(`%c  MEDIATRACKER-CARD \n%c ${pjson.version}    `, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
  },
  e$2 = t => (...e) => ({
    _$litDirective$: t,
    values: e
  });
let i$2 = class i {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = {},
  i$1 = e$2(class extends i$2 {
    constructor() {
      super(...arguments), this.ot = e$1;
    }
    render(r, t) {
      return t();
    }
    update(t, [s, e]) {
      if (Array.isArray(s)) {
        if (Array.isArray(this.ot) && this.ot.length === s.length && s.every((r, t) => r === this.ot[t])) return T;
      } else if (this.ot === s) return T;
      return this.ot = Array.isArray(s) ? Array.from(s) : s, this.render(s, e);
    }
  });

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return class extends e {
    createRenderRoot() {
      const e = this.constructor,
        {
          registry: s,
          elementDefinitions: n,
          shadowRootOptions: o
        } = e;
      n && !s && (e.registry = new CustomElementRegistry(), Object.entries(n).forEach(([t, s]) => e.registry.define(t, s)));
      const i = this.renderOptions.creationScope = this.attachShadow({
        ...o,
        customElements: e.registry
      });
      return S$1(i, this.constructor.elementStyles), i;
    }
  };
}

var t,
  r;
!function (e) {
  e.language = "language", e.system = "system", e.comma_decimal = "comma_decimal", e.decimal_comma = "decimal_comma", e.space_comma = "space_comma", e.none = "none";
}(t || (t = {})), function (e) {
  e.language = "language", e.system = "system", e.am_pm = "12", e.twenty_four = "24";
}(r || (r = {}));
var ne = function (e, t, r, n) {
    n = n || {}, r = null == r ? {} : r;
    var i = new Event(t, {
      bubbles: void 0 === n.bubbles || n.bubbles,
      cancelable: Boolean(n.cancelable),
      composed: void 0 === n.composed || n.composed
    });
    return i.detail = r, e.dispatchEvent(i), i;
  };

const buildElementDefinitions = (elements, constructor) => elements.reduce((aggregate, element) => {
    if (element.defineId) {
        // eslint-disable-next-line no-param-reassign
        aggregate[element.defineId] = element;
    }
    else {
        element.promise.then((clazz) => {
            if (constructor.registry.get(element.name) === undefined) {
                constructor.registry.define(element.name, clazz);
            }
        });
    }
    return aggregate;
}, {});

const globalElementLoader = name => ({
    name,
    promise: customElements.whenDefined(name).then(() => customElements.get(name)),
});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Specifies an observer callback that is run when the decorated property
 * changes. The observer receives the current and old value as arguments.
 */
const observer = observer =>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
  // if we haven't wrapped `updated` in this class, do so
  if (!proto.constructor._observers) {
    proto.constructor._observers = new Map();
    const userUpdated = proto.updated;
    proto.updated = function (changedProperties) {
      userUpdated.call(this, changedProperties);
      changedProperties.forEach((v, k) => {
        const observers = this.constructor._observers;
        const observer = observers.get(k);
        if (observer !== undefined) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          observer.call(this, this[k], v);
        }
      });
    };
    // clone any existing observers (superclasses)
    // eslint-disable-next-line no-prototype-builtins
  } else if (!proto.constructor.hasOwnProperty('_observers')) {
    const observers = proto.constructor._observers;
    proto.constructor._observers = new Map();
    observers.forEach(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (v, k) => proto.constructor._observers.set(k, v));
  }
  // set this method
  proto.constructor._observers.set(propName, observer);
};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
class RippleHandlers {
  constructor( /** Function that returns a `mwc-ripple` */
  rippleFn) {
    this.startPress = ev => {
      rippleFn().then(r => {
        r && r.startPress(ev);
      });
    };
    this.endPress = () => {
      rippleFn().then(r => {
        r && r.endPress();
      });
    };
    this.startFocus = () => {
      rippleFn().then(r => {
        r && r.startFocus();
      });
    };
    this.endFocus = () => {
      rippleFn().then(r => {
        r && r.endFocus();
      });
    };
    this.startHover = () => {
      rippleFn().then(r => {
        r && r.startHover();
      });
    };
    this.endHover = () => {
      rippleFn().then(r => {
        r && r.endHover();
      });
    };
  }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = e$2(class extends i$2 {
  constructor(t) {
    var i;
    if (super(t), t.type !== t$1.ATTRIBUTE || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter(i => t[i]).join(" ") + " ";
  }
  update(i, [s]) {
    var r, o;
    if (void 0 === this.nt) {
      this.nt = new Set(), void 0 !== i.strings && (this.st = new Set(i.strings.join(" ").split(/\s/).filter(t => "" !== t)));
      for (const t in s) s[t] && !(null === (r = this.st) || void 0 === r ? void 0 : r.has(t)) && this.nt.add(t);
      return this.render(s);
    }
    const e = i.element.classList;
    this.nt.forEach(t => {
      t in s || (e.remove(t), this.nt.delete(t));
    });
    for (const t in s) {
      const i = !!s[t];
      i === this.nt.has(t) || (null === (o = this.st) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.nt.add(t)) : (e.remove(t), this.nt.delete(t)));
    }
    return T;
  }
});

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires request-selected {RequestSelectedDetail}
 * @fires list-item-rendered
 */
class ListItemBase extends s {
  constructor() {
    super(...arguments);
    this.value = '';
    this.group = null;
    this.tabindex = -1;
    this.disabled = false;
    this.twoline = false;
    this.activated = false;
    this.graphic = null;
    this.multipleGraphics = false;
    this.hasMeta = false;
    this.noninteractive = false;
    this.selected = false;
    this.shouldRenderRipple = false;
    this._managingList = null;
    this.boundOnClick = this.onClick.bind(this);
    this._firstChanged = true;
    this._skipPropRequest = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
    this.listeners = [{
      target: this,
      eventNames: ['click'],
      cb: () => {
        this.onClick();
      }
    }, {
      target: this,
      eventNames: ['mouseenter'],
      cb: this.rippleHandlers.startHover
    }, {
      target: this,
      eventNames: ['mouseleave'],
      cb: this.rippleHandlers.endHover
    }, {
      target: this,
      eventNames: ['focus'],
      cb: this.rippleHandlers.startFocus
    }, {
      target: this,
      eventNames: ['blur'],
      cb: this.rippleHandlers.endFocus
    }, {
      target: this,
      eventNames: ['mousedown', 'touchstart'],
      cb: e => {
        const name = e.type;
        this.onDown(name === 'mousedown' ? 'mouseup' : 'touchend', e);
      }
    }];
  }
  get text() {
    const textContent = this.textContent;
    return textContent ? textContent.trim() : '';
  }
  render() {
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : x``;
    const meta = this.hasMeta ? this.renderMeta() : x``;
    return x`
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
  }
  renderRipple() {
    if (this.shouldRenderRipple) {
      return x`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
    } else if (this.activated) {
      return x`<div class="fake-activated-ripple"></div>`;
    } else {
      return '';
    }
  }
  renderGraphic() {
    const graphicClasses = {
      multi: this.multipleGraphics
    };
    return x`
      <span class="mdc-deprecated-list-item__graphic material-icons ${o(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return x`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return x`
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
  }
  renderSingleLine() {
    return x`<slot></slot>`;
  }
  renderTwoline() {
    return x`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, 'interaction');
  }
  onDown(upName, evt) {
    const onUp = () => {
      window.removeEventListener(upName, onUp);
      this.rippleHandlers.endPress();
    };
    window.addEventListener(upName, onUp);
    this.rippleHandlers.startPress(evt);
  }
  fireRequestSelected(selected, source) {
    if (this.noninteractive) {
      return;
    }
    const customEv = new CustomEvent('request-selected', {
      bubbles: true,
      composed: true,
      detail: {
        source,
        selected
      }
    });
    this.dispatchEvent(customEv);
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.noninteractive) {
      this.setAttribute('mwc-list-item', '');
    }
    for (const listener of this.listeners) {
      for (const eventName of listener.eventNames) {
        listener.target.addEventListener(eventName, listener.cb, {
          passive: true
        });
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const listener of this.listeners) {
      for (const eventName of listener.eventNames) {
        listener.target.removeEventListener(eventName, listener.cb);
      }
    }
    if (this._managingList) {
      this._managingList.debouncedLayout ? this._managingList.debouncedLayout(true) : this._managingList.layout(true);
    }
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const ev = new Event('list-item-rendered', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(ev);
  }
}
__decorate([i$3('slot')], ListItemBase.prototype, "slotElement", void 0);
__decorate([e$4('mwc-ripple')], ListItemBase.prototype, "ripple", void 0);
__decorate([e$6({
  type: String
})], ListItemBase.prototype, "value", void 0);
__decorate([e$6({
  type: String,
  reflect: true
})], ListItemBase.prototype, "group", void 0);
__decorate([e$6({
  type: Number,
  reflect: true
})], ListItemBase.prototype, "tabindex", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
}), observer(function (value) {
  if (value) {
    this.setAttribute('aria-disabled', 'true');
  } else {
    this.setAttribute('aria-disabled', 'false');
  }
})], ListItemBase.prototype, "disabled", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
})], ListItemBase.prototype, "twoline", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
})], ListItemBase.prototype, "activated", void 0);
__decorate([e$6({
  type: String,
  reflect: true
})], ListItemBase.prototype, "graphic", void 0);
__decorate([e$6({
  type: Boolean
})], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([e$6({
  type: Boolean
})], ListItemBase.prototype, "hasMeta", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
}), observer(function (value) {
  if (value) {
    this.removeAttribute('aria-checked');
    this.removeAttribute('mwc-list-item');
    this.selected = false;
    this.activated = false;
    this.tabIndex = -1;
  } else {
    this.setAttribute('mwc-list-item', '');
  }
})], ListItemBase.prototype, "noninteractive", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
}), observer(function (value) {
  const role = this.getAttribute('role');
  const isAriaSelectable = role === 'gridcell' || role === 'option' || role === 'row' || role === 'tab';
  if (isAriaSelectable && value) {
    this.setAttribute('aria-selected', 'true');
  } else if (isAriaSelectable) {
    this.setAttribute('aria-selected', 'false');
  }
  if (this._firstChanged) {
    this._firstChanged = false;
    return;
  }
  if (this._skipPropRequest) {
    return;
  }
  this.fireRequestSelected(value, 'property');
})], ListItemBase.prototype, "selected", void 0);
__decorate([t$2()], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([t$2()], ListItemBase.prototype, "_managingList", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$7 = i$6`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function matches$1(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
/**
 * Determines whether a node is an element.
 *
 * @param node Node to check
 */
const isNodeElement = node => {
  return node.nodeType === Node.ELEMENT_NODE;
};
function addHasRemoveClass(element) {
  return {
    addClass: className => {
      element.classList.add(className);
    },
    removeClass: className => {
      element.classList.remove(className);
    },
    hasClass: className => element.classList.contains(className)
  };
}
const fn = () => {};
const optionsBlock = {
  get passive() {
    return false;
  }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);
const deepActiveElementPath = (doc = window.document) => {
  let activeElement = doc.activeElement;
  const path = [];
  if (!activeElement) {
    return path;
  }
  while (activeElement) {
    path.push(activeElement);
    if (activeElement.shadowRoot) {
      activeElement = activeElement.shadowRoot.activeElement;
    } else {
      break;
    }
  }
  return path;
};
const doesElementContainFocus = element => {
  const activePath = deepActiveElementPath();
  if (!activePath.length) {
    return false;
  }
  const deepActiveElement = activePath[activePath.length - 1];
  const focusEv = new Event('check-if-focused', {
    bubbles: true,
    composed: true
  });
  let composedPath = [];
  const listener = ev => {
    composedPath = ev.composedPath();
  };
  document.body.addEventListener('check-if-focused', listener);
  deepActiveElement.dispatchEvent(focusEv);
  document.body.removeEventListener('check-if-focused', listener);
  return composedPath.indexOf(element) !== -1;
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus();
      this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    if (this.mdcFoundation !== undefined) {
      this.mdcFoundation.destroy();
    }
    if (this.mdcFoundationClass) {
      this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
      this.mdcFoundation.init();
    }
  }
  firstUpdated() {
    this.createFoundation();
  }
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation.prototype.init = function () {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  };
  MDCFoundation.prototype.destroy = function () {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };
  return MDCFoundation;
}();

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$7 = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings$5 = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers$5 = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }
  var x = pageOffset.x,
    y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  // Determine touch point relative to the ripple container.
  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return {
    x: normalizedX,
    y: normalizedY
  };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */function (_super) {
  __extends(MDCRippleFoundation, _super);
  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = '0';
    _this.frame = {
      width: 0,
      height: 0
    };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = {
      left: 0,
      top: 0
    };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function () {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function (e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function () {
      _this.deactivateImpl();
    };
    _this.focusHandler = function () {
      _this.handleFocus();
    };
    _this.blurHandler = function () {
      _this.handleBlur();
    };
    _this.resizeHandler = function () {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return cssClasses$7;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return strings$5;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return numbers$5;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation.prototype.init = function () {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
        ROOT_1 = _a.ROOT,
        UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation.cssClasses,
        ROOT_2 = _a.ROOT,
        UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  /**
   * @param evt Optional event containing position information.
   */
  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivateImpl();
  };
  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function () {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;
    requestAnimationFrame(function () {
      return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;
    requestAnimationFrame(function () {
      return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */
  MDCRippleFoundation.prototype.supportsPressRipple = function () {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation.prototype.defaultActivationState = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */
  MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler('focus', this.focusHandler);
    this.adapter.registerInteractionHandler('blur', this.blurHandler);
  };
  MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
    var e_2, _a;
    if (evt.type === 'keydown') {
      this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
    this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
  };
  MDCRippleFoundation.prototype.removeCssVars = function () {
    var _this = this;
    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation.prototype.activateImpl = function (evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState();
      return;
    }
    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation.prototype.animateActivation = function () {
    var _this = this;
    var _a = MDCRippleFoundation.strings,
      VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
      VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
      FG_DEACTIVATION = _b.FG_DEACTIVATION,
      FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = '';
    var translateEnd = '';
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(),
        startPoint = _c.startPoint,
        endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    // Force layout in order to re-trigger the animation.
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function () {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
    var _a = this.activationState,
      activationEvent = _a.activationEvent,
      wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };
  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
    var _this = this;
    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState,
      hasDeactivationUXRun = _a.hasDeactivationUXRun,
      isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function () {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers$5.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation.prototype.resetActivationState = function () {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(function () {
      return _this.previousActivationEvent = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation.prototype.deactivateImpl = function () {
    var _this = this;
    var activationState = this.activationState;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function () {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
      wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation.prototype.layoutInternal = function () {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
    // Unbounded ripple size should always be even number to equally center align.
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
    var _a = MDCRippleFoundation.strings,
      VAR_FG_SIZE = _a.VAR_FG_SIZE,
      VAR_LEFT = _a.VAR_LEFT,
      VAR_TOP = _a.VAR_TOP,
      VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation;
}(MDCFoundation);
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRippleFoundation$1 = MDCRippleFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = e$2(class extends i$2 {
  constructor(t) {
    var e;
    if (super(t), t.type !== t$1.ATTRIBUTE || "style" !== t.name || (null === (e = t.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return Object.keys(t).reduce((e, r) => {
      const s = t[r];
      return null == s ? e : e + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }, "");
  }
  update(e, [r]) {
    const {
      style: s
    } = e.element;
    if (void 0 === this.vt) {
      this.vt = new Set();
      for (const t in r) this.vt.add(t);
      return this.render(r);
    }
    this.vt.forEach(t => {
      null == r[t] && (this.vt.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = "");
    });
    for (const t in r) {
      const e = r[t];
      null != e && (this.vt.add(t), t.includes("-") ? s.setProperty(t, e) : s[t] = e);
    }
    return T;
  }
});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class RippleBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.activated = false;
    this.selected = false;
    this.internalUseStateLayerCustomProperties = false;
    this.hovering = false;
    this.bgFocused = false;
    this.fgActivation = false;
    this.fgDeactivation = false;
    this.fgScale = '';
    this.fgSize = '';
    this.translateStart = '';
    this.translateEnd = '';
    this.leftPos = '';
    this.topPos = '';
    this.mdcFoundationClass = MDCRippleFoundation$1;
  }
  get isActive() {
    return matches$1(this.parentElement || this, ':active');
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => true,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: className => {
        switch (className) {
          case 'mdc-ripple-upgraded--background-focused':
            this.bgFocused = true;
            break;
          case 'mdc-ripple-upgraded--foreground-activation':
            this.fgActivation = true;
            break;
          case 'mdc-ripple-upgraded--foreground-deactivation':
            this.fgDeactivation = true;
            break;
        }
      },
      removeClass: className => {
        switch (className) {
          case 'mdc-ripple-upgraded--background-focused':
            this.bgFocused = false;
            break;
          case 'mdc-ripple-upgraded--foreground-activation':
            this.fgActivation = false;
            break;
          case 'mdc-ripple-upgraded--foreground-deactivation':
            this.fgDeactivation = false;
            break;
        }
      },
      containsEventTarget: () => true,
      registerInteractionHandler: () => undefined,
      deregisterInteractionHandler: () => undefined,
      registerDocumentInteractionHandler: () => undefined,
      deregisterDocumentInteractionHandler: () => undefined,
      registerResizeHandler: () => undefined,
      deregisterResizeHandler: () => undefined,
      updateCssVariable: (varName, value) => {
        switch (varName) {
          case '--mdc-ripple-fg-scale':
            this.fgScale = value;
            break;
          case '--mdc-ripple-fg-size':
            this.fgSize = value;
            break;
          case '--mdc-ripple-fg-translate-end':
            this.translateEnd = value;
            break;
          case '--mdc-ripple-fg-translate-start':
            this.translateStart = value;
            break;
          case '--mdc-ripple-left':
            this.leftPos = value;
            break;
          case '--mdc-ripple-top':
            this.topPos = value;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      })
    };
  }
  startPress(ev) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(ev);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = true;
  }
  endHover() {
    this.hovering = false;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(fn) {
    if (this.mdcFoundation) {
      fn();
    } else {
      this.updateComplete.then(fn);
    }
  }
  update(changedProperties) {
    if (changedProperties.has('disabled')) {
      // stop hovering when ripple is disabled to prevent a stuck "hover" state
      // When re-enabled, the outer component will get a `mouseenter` event on
      // the first movement, which will call `startHover()`
      if (this.disabled) {
        this.endHover();
      }
    }
    super.update(changedProperties);
  }
  /** @soyTemplate */
  render() {
    const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
    const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
    /** @classMap */
    const classes = {
      'mdc-ripple-surface--accent': this.accent,
      'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
      'mdc-ripple-surface--accent--activated': this.accent && this.activated,
      'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
      'mdc-ripple-surface--accent--selected': this.accent && this.selected,
      'mdc-ripple-surface--disabled': this.disabled,
      'mdc-ripple-surface--hover': this.hovering,
      'mdc-ripple-surface--primary': this.primary,
      'mdc-ripple-surface--selected': this.selected,
      'mdc-ripple-upgraded--background-focused': this.bgFocused,
      'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
      'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
      'mdc-ripple-upgraded--unbounded': this.unbounded,
      'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties
    };
    return x`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o(classes)}"
          style="${i({
      '--mdc-ripple-fg-scale': this.fgScale,
      '--mdc-ripple-fg-size': this.fgSize,
      '--mdc-ripple-fg-translate-end': this.translateEnd,
      '--mdc-ripple-fg-translate-start': this.translateStart,
      '--mdc-ripple-left': this.leftPos,
      '--mdc-ripple-top': this.topPos
    })}"></div>`;
  }
}
__decorate([i$3('.mdc-ripple-surface')], RippleBase.prototype, "mdcRoot", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "activated", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "selected", void 0);
__decorate([e$6({
  type: Boolean
})], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([t$2()], RippleBase.prototype, "hovering", void 0);
__decorate([t$2()], RippleBase.prototype, "bgFocused", void 0);
__decorate([t$2()], RippleBase.prototype, "fgActivation", void 0);
__decorate([t$2()], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([t$2()], RippleBase.prototype, "fgScale", void 0);
__decorate([t$2()], RippleBase.prototype, "fgSize", void 0);
__decorate([t$2()], RippleBase.prototype, "translateStart", void 0);
__decorate([t$2()], RippleBase.prototype, "translateEnd", void 0);
__decorate([t$2()], RippleBase.prototype, "leftPos", void 0);
__decorate([t$2()], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$6 = i$6`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

class MwcRipple extends e(RippleBase) {
  static get defineId() {
    return 'mwc-ripple';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([], MwcRipple);
  }
  static get styles() {
    return styles$6;
  }
}

class MwcListItem extends e(ListItemBase) {
  static get defineId() {
    return 'mwc-list-item';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([MwcRipple], MwcListItem);
  }
  static get styles() {
    return styles$7;
  }
}

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * KEY provides normalized string values for keys.
 */
var KEY = {
  UNKNOWN: 'Unknown',
  BACKSPACE: 'Backspace',
  ENTER: 'Enter',
  SPACEBAR: 'Spacebar',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
  END: 'End',
  HOME: 'Home',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  DELETE: 'Delete',
  ESCAPE: 'Escape',
  TAB: 'Tab'
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
  var key = evt.key;
  // If the event already has a normalized key, return it
  if (normalizedKeys.has(key)) {
    return key;
  }
  // tslint:disable-next-line:deprecation
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a$1, _b$1;
var cssClasses$6 = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
  LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
  ROOT: 'mdc-list'
};
(_a$1 = {}, _a$1["" + cssClasses$6.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated', _a$1["" + cssClasses$6.LIST_ITEM_CLASS] = 'mdc-list-item', _a$1["" + cssClasses$6.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled', _a$1["" + cssClasses$6.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected', _a$1["" + cssClasses$6.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text', _a$1["" + cssClasses$6.ROOT] = 'mdc-list', _a$1);
var deprecatedClassNameMap = (_b$1 = {}, _b$1["" + cssClasses$6.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated', _b$1["" + cssClasses$6.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item', _b$1["" + cssClasses$6.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled', _b$1["" + cssClasses$6.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected', _b$1["" + cssClasses$6.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text', _b$1["" + cssClasses$6.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text', _b$1["" + cssClasses$6.ROOT] = 'mdc-deprecated-list', _b$1);
var strings$4 = {
  ACTION_EVENT: 'MDCList:action',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$6.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$6.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: '.mdc-deprecated-list',
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$6.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$6.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$6.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$6.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$6.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers$4 = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ELEMENTS_KEY_ALLOWED_IN$1 = ['input', 'button', 'textarea', 'select'];
/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */
var preventDefaultEvent = function (evt) {
  var target = evt.target;
  if (!target) {
    return;
  }
  var tagName = ("" + target.tagName).toLowerCase();
  if (ELEMENTS_KEY_ALLOWED_IN$1.indexOf(tagName) === -1) {
    evt.preventDefault();
  }
};

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */
function initState() {
  var state = {
    bufferClearTimeout: 0,
    currentFirstChar: '',
    sortedIndexCursor: 0,
    typeaheadBuffer: ''
  };
  return state;
}
/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */
function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
  var sortedIndexByFirstChar = new Map();
  // Aggregate item text to index mapping
  for (var i = 0; i < listItemCount; i++) {
    var primaryText = getPrimaryTextByItemIndex(i).trim();
    if (!primaryText) {
      continue;
    }
    var firstChar = primaryText[0].toLowerCase();
    if (!sortedIndexByFirstChar.has(firstChar)) {
      sortedIndexByFirstChar.set(firstChar, []);
    }
    sortedIndexByFirstChar.get(firstChar).push({
      text: primaryText.toLowerCase(),
      index: i
    });
  }
  // Sort the mapping
  // TODO(b/157162694): Investigate replacing forEach with Map.values()
  sortedIndexByFirstChar.forEach(function (values) {
    values.sort(function (first, second) {
      return first.index - second.index;
    });
  });
  return sortedIndexByFirstChar;
}
/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */
function matchItem(opts, state) {
  var nextChar = opts.nextChar,
    focusItemAtIndex = opts.focusItemAtIndex,
    sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
    focusedItemIndex = opts.focusedItemIndex,
    skipFocus = opts.skipFocus,
    isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  clearTimeout(state.bufferClearTimeout);
  state.bufferClearTimeout = setTimeout(function () {
    clearBuffer(state);
  }, numbers$4.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
  state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
  var index;
  if (state.typeaheadBuffer.length === 1) {
    index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
  } else {
    index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
  }
  if (index !== -1 && !skipFocus) {
    focusItemAtIndex(index);
  }
  return index;
}
/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */
function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  // Has the same firstChar been recently matched?
  // Also, did starting index remain the same between key presses?
  // If both hold true, simply increment index.
  if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
    state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
    if (!isItemAtIndexDisabled(newIndex)) {
      return newIndex;
    }
  }
  // If we're here, it means one of the following happened:
  // - either firstChar or startingIndex has changed, invalidating the
  // cursor.
  // - The next item of typeahead is disabled, so we have to look further.
  state.currentFirstChar = firstChar;
  var newCursorPosition = -1;
  var cursorPosition;
  // Find the first non-disabled item as a fallback.
  for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  // Advance cursor to first item matching the firstChar that is positioned
  // after starting item. Cursor is unchanged from fallback if there's no
  // such item.
  for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
    if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
      newCursorPosition = cursorPosition;
      break;
    }
  }
  if (newCursorPosition !== -1) {
    state.sortedIndexCursor = newCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */
function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
  var firstChar = state.typeaheadBuffer[0];
  var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
  if (!itemsMatchingFirstChar) {
    return -1;
  }
  // Do nothing if text already matches
  var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
  if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
    return startingItem.index;
  }
  // Find next item that matches completely; if no match, we'll eventually
  // loop around to same position
  var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
  var nextCursorPosition = -1;
  while (cursorPosition !== state.sortedIndexCursor) {
    var currentItem = itemsMatchingFirstChar[cursorPosition];
    var matches = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
    var isEnabled = !isItemAtIndexDisabled(currentItem.index);
    if (matches && isEnabled) {
      nextCursorPosition = cursorPosition;
      break;
    }
    cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
  }
  if (nextCursorPosition !== -1) {
    state.sortedIndexCursor = nextCursorPosition;
    return itemsMatchingFirstChar[state.sortedIndexCursor].index;
  }
  return -1;
}
/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function isTypingInProgress(state) {
  return state.typeaheadBuffer.length > 0;
}
/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */
function clearBuffer(state) {
  state.typeaheadBuffer = '';
}
/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */
function handleKeydown(opts, state) {
  var event = opts.event,
    isTargetListItem = opts.isTargetListItem,
    focusedItemIndex = opts.focusedItemIndex,
    focusItemAtIndex = opts.focusItemAtIndex,
    sortedIndexByFirstChar = opts.sortedIndexByFirstChar,
    isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
  var isArrowLeft = normalizeKey(event) === 'ArrowLeft';
  var isArrowUp = normalizeKey(event) === 'ArrowUp';
  var isArrowRight = normalizeKey(event) === 'ArrowRight';
  var isArrowDown = normalizeKey(event) === 'ArrowDown';
  var isHome = normalizeKey(event) === 'Home';
  var isEnd = normalizeKey(event) === 'End';
  var isEnter = normalizeKey(event) === 'Enter';
  var isSpace = normalizeKey(event) === 'Spacebar';
  if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
    return -1;
  }
  var isCharacterKey = !isSpace && event.key.length === 1;
  if (isCharacterKey) {
    preventDefaultEvent(event);
    var matchItemOpts = {
      focusItemAtIndex: focusItemAtIndex,
      focusedItemIndex: focusedItemIndex,
      nextChar: event.key.toLowerCase(),
      sortedIndexByFirstChar: sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled: isItemAtIndexDisabled
    };
    return matchItem(matchItemOpts, state);
  }
  if (!isSpace) {
    return -1;
  }
  if (isTargetListItem) {
    preventDefaultEvent(event);
  }
  var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
  if (typeaheadOnListItem) {
    var matchItemOpts = {
      focusItemAtIndex: focusItemAtIndex,
      focusedItemIndex: focusedItemIndex,
      nextChar: ' ',
      sortedIndexByFirstChar: sortedIndexByFirstChar,
      skipFocus: false,
      isItemAtIndexDisabled: isItemAtIndexDisabled
    };
    // space participates in typeahead matching if in rapid typing mode
    return matchItem(matchItemOpts, state);
  }
  return -1;
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a, _b;
// ShadyDOM should submit <input> elements in component internals
const USING_SHADY_DOM = (_b = (_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) !== null && _b !== void 0 ? _b : false;
/** @soyCompatible */
class FormElement extends BaseElement {
  constructor() {
    super(...arguments);
    /**
     * Disabled state for the component. When `disabled` is set to `true`, the
     * component will not be added to form submission.
     */
    this.disabled = false;
    /**
     * Form element that contains this element
     */
    this.containingForm = null;
    this.formDataListener = ev => {
      if (!this.disabled) {
        this.setFormData(ev.formData);
      }
    };
  }
  findFormElement() {
    // If the component internals are not in Shadow DOM, subscribing to form
    // data events could lead to duplicated data, which may not work correctly
    // on the server side.
    if (!this.shadowRoot || USING_SHADY_DOM) {
      return null;
    }
    const root = this.getRootNode();
    const forms = root.querySelectorAll('form');
    for (const form of Array.from(forms)) {
      if (form.contains(this)) {
        return form;
      }
    }
    return null;
  }
  connectedCallback() {
    var _a;
    super.connectedCallback();
    this.containingForm = this.findFormElement();
    (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.addEventListener('formdata', this.formDataListener);
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.containingForm) === null || _a === void 0 ? void 0 : _a.removeEventListener('formdata', this.formDataListener);
    this.containingForm = null;
  }
  click() {
    if (this.formElement && !this.disabled) {
      this.formElement.focus();
      this.formElement.click();
    }
  }
  firstUpdated() {
    super.firstUpdated();
    if (this.shadowRoot) {
      this.mdcRoot.addEventListener('change', e => {
        this.dispatchEvent(new Event('change', e));
      });
    }
  }
}
FormElement.shadowRootOptions = {
  mode: 'open',
  delegatesFocus: true
};
__decorate([e$6({
  type: Boolean
})], FormElement.prototype, "disabled", void 0);

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$5 = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_REQUIRED: 'mdc-floating-label--required',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFloatingLabelFoundation = /** @class */function (_super) {
  __extends(MDCFloatingLabelFoundation, _super);
  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
    _this.shakeAnimationEndHandler = function () {
      _this.handleShakeAnimationEnd();
    };
    return _this;
  }
  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function () {
      return cssClasses$5;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        getWidth: function () {
          return 0;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        }
      };
      // tslint:enable:object-literal-sort-keys
    },

    enumerable: false,
    configurable: true
  });
  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler);
  };
  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler);
  };
  /**
   * Returns the width of the label element.
   */
  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */
  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    if (shouldShake) {
      this.adapter.addClass(LABEL_SHAKE);
    } else {
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */
  MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
      LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
      LABEL_SHAKE = _a.LABEL_SHAKE;
    if (shouldFloat) {
      this.adapter.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label as required.
   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
   */
  MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
    var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
    if (isRequired) {
      this.adapter.addClass(LABEL_REQUIRED);
    } else {
      this.adapter.removeClass(LABEL_REQUIRED);
    }
  };
  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter.removeClass(LABEL_SHAKE);
  };
  return MDCFloatingLabelFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter$1 = labelElement => {
  return {
    addClass: className => labelElement.classList.add(className),
    removeClass: className => labelElement.classList.remove(className),
    getWidth: () => labelElement.scrollWidth,
    registerInteractionHandler: (evtType, handler) => {
      labelElement.addEventListener(evtType, handler);
    },
    deregisterInteractionHandler: (evtType, handler) => {
      labelElement.removeEventListener(evtType, handler);
    }
  };
};
class FloatingLabelDirective extends i$2 {
  constructor(partInfo) {
    super(partInfo);
    this.foundation = null;
    this.previousPart = null;
    switch (partInfo.type) {
      // Only allow Attribute and Part bindings
      case t$1.ATTRIBUTE:
      case t$1.PROPERTY:
        break;
      default:
        throw new Error('FloatingLabel directive only support attribute and property parts');
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(part, [label]) {
    if (part !== this.previousPart) {
      if (this.foundation) {
        this.foundation.destroy();
      }
      this.previousPart = part;
      const labelElement = part.element;
      labelElement.classList.add('mdc-floating-label');
      const adapter = createAdapter$1(labelElement);
      this.foundation = new MDCFloatingLabelFoundation(adapter);
      this.foundation.init();
    }
    return this.render(label);
  }
  render(_label) {
    return this.foundation;
  }
}
const floatingLabel = e$2(FloatingLabelDirective);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$4 = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLineRippleFoundation = /** @class */function (_super) {
  __extends(MDCLineRippleFoundation, _super);
  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
    _this.transitionEndHandler = function (evt) {
      _this.handleTransitionEnd(evt);
    };
    return _this;
  }
  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function () {
      return cssClasses$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setStyle: function () {
          return undefined;
        },
        registerEventHandler: function () {
          return undefined;
        },
        deregisterEventHandler: function () {
          return undefined;
        }
      };
      // tslint:enable:object-literal-sort-keys
    },

    enumerable: false,
    configurable: true
  });
  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter.registerEventHandler('transitionend', this.transitionEndHandler);
  };
  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler);
  };
  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter.removeClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
    this.adapter.addClass(cssClasses$4.LINE_RIPPLE_ACTIVE);
  };
  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter.setStyle('transform-origin', xCoordinate + "px center");
  };
  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter.addClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
  };
  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter.hasClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter.removeClass(cssClasses$4.LINE_RIPPLE_ACTIVE);
        this.adapter.removeClass(cssClasses$4.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };
  return MDCLineRippleFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createAdapter = lineElement => {
  return {
    addClass: className => lineElement.classList.add(className),
    removeClass: className => lineElement.classList.remove(className),
    hasClass: className => lineElement.classList.contains(className),
    setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
    registerEventHandler: (evtType, handler) => {
      lineElement.addEventListener(evtType, handler);
    },
    deregisterEventHandler: (evtType, handler) => {
      lineElement.removeEventListener(evtType, handler);
    }
  };
};
class LineRippleDirective extends i$2 {
  constructor(partInfo) {
    super(partInfo);
    this.previousPart = null;
    this.foundation = null;
    switch (partInfo.type) {
      case t$1.ATTRIBUTE:
      case t$1.PROPERTY:
        return;
      default:
        throw new Error('LineRipple only support attribute and property parts.');
    }
  }
  /**
   * There is no PropertyPart in Lit 2 so far. For more info see:
   * https://github.com/lit/lit/issues/1863
   */
  update(part, _params) {
    if (this.previousPart !== part) {
      if (this.foundation) {
        this.foundation.destroy();
      }
      this.previousPart = part;
      const lineElement = part.element;
      lineElement.classList.add('mdc-line-ripple');
      const adapter = createAdapter(lineElement);
      this.foundation = new MDCLineRippleFoundation(adapter);
      this.foundation.init();
    }
    return this.render();
  }
  render() {
    return this.foundation;
  }
}
const lineRipple = e$2(LineRippleDirective);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$3 = {
  ANCHOR: 'mdc-menu-surface--anchor',
  ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
  ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
  FIXED: 'mdc-menu-surface--fixed',
  IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
  OPEN: 'mdc-menu-surface--open',
  ROOT: 'mdc-menu-surface'
};
// tslint:disable:object-literal-sort-keys
var strings$3 = {
  CLOSED_EVENT: 'MDCMenuSurface:closed',
  CLOSING_EVENT: 'MDCMenuSurface:closing',
  OPENED_EVENT: 'MDCMenuSurface:opened',
  FOCUSABLE_ELEMENTS: ['button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)', 'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(', ')
};
// tslint:enable:object-literal-sort-keys
var numbers$3 = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
  CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
  CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
  CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
  CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
  Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner[Corner["TOP_START"] = 8] = "TOP_START";
  Corner[Corner["TOP_END"] = 12] = "TOP_END";
  Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$2 = {
  ACTIVATED: 'mdc-select--activated',
  DISABLED: 'mdc-select--disabled',
  FOCUSED: 'mdc-select--focused',
  INVALID: 'mdc-select--invalid',
  MENU_INVALID: 'mdc-select__menu--invalid',
  OUTLINED: 'mdc-select--outlined',
  REQUIRED: 'mdc-select--required',
  ROOT: 'mdc-select',
  WITH_LEADING_ICON: 'mdc-select--with-leading-icon'
};
var strings$2 = {
  ARIA_CONTROLS: 'aria-controls',
  ARIA_DESCRIBEDBY: 'aria-describedby',
  ARIA_SELECTED_ATTR: 'aria-selected',
  CHANGE_EVENT: 'MDCSelect:change',
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-select__icon',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  MENU_SELECTOR: '.mdc-select__menu',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
  SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
  VALUE_ATTR: 'data-value'
};
var numbers$2 = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCSelectFoundation = /** @class */function (_super) {
  __extends(MDCSelectFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */
  function MDCSelectFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }
    var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation.defaultAdapter), adapter)) || this;
    // Disabled state
    _this.disabled = false;
    // isMenuOpen is used to track the state of the menu by listening to the
    // MDCMenuSurface:closed event For reference, menu.open will return false if
    // the menu is still closing, but isMenuOpen returns false only after the menu
    // has closed
    _this.isMenuOpen = false;
    // By default, select is invalid if it is required but no value is selected.
    _this.useDefaultValidation = true;
    _this.customValidity = true;
    _this.lastSelectedIndex = numbers$2.UNSET_INDEX;
    _this.clickDebounceTimeout = 0;
    _this.recentlyClicked = false;
    _this.leadingIcon = foundationMap.leadingIcon;
    _this.helperText = foundationMap.helperText;
    return _this;
  }
  Object.defineProperty(MDCSelectFoundation, "cssClasses", {
    get: function () {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "numbers", {
    get: function () {
      return numbers$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "strings", {
    get: function () {
      return strings$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        activateBottomLine: function () {
          return undefined;
        },
        deactivateBottomLine: function () {
          return undefined;
        },
        getSelectedIndex: function () {
          return -1;
        },
        setSelectedIndex: function () {
          return undefined;
        },
        hasLabel: function () {
          return false;
        },
        floatLabel: function () {
          return undefined;
        },
        getLabelWidth: function () {
          return 0;
        },
        setLabelRequired: function () {
          return undefined;
        },
        hasOutline: function () {
          return false;
        },
        notchOutline: function () {
          return undefined;
        },
        closeOutline: function () {
          return undefined;
        },
        setRippleCenter: function () {
          return undefined;
        },
        notifyChange: function () {
          return undefined;
        },
        setSelectedText: function () {
          return undefined;
        },
        isSelectAnchorFocused: function () {
          return false;
        },
        getSelectAnchorAttr: function () {
          return '';
        },
        setSelectAnchorAttr: function () {
          return undefined;
        },
        removeSelectAnchorAttr: function () {
          return undefined;
        },
        addMenuClass: function () {
          return undefined;
        },
        removeMenuClass: function () {
          return undefined;
        },
        openMenu: function () {
          return undefined;
        },
        closeMenu: function () {
          return undefined;
        },
        getAnchorElement: function () {
          return null;
        },
        setMenuAnchorElement: function () {
          return undefined;
        },
        setMenuAnchorCorner: function () {
          return undefined;
        },
        setMenuWrapFocus: function () {
          return undefined;
        },
        focusMenuItemAtIndex: function () {
          return undefined;
        },
        getMenuItemCount: function () {
          return 0;
        },
        getMenuItemValues: function () {
          return [];
        },
        getMenuItemTextAtIndex: function () {
          return '';
        },
        isTypeaheadInProgress: function () {
          return false;
        },
        typeaheadMatchItem: function () {
          return -1;
        }
      };
      // tslint:enable:object-literal-sort-keys
    },

    enumerable: false,
    configurable: true
  });
  /** Returns the index of the currently selected menu item, or -1 if none. */
  MDCSelectFoundation.prototype.getSelectedIndex = function () {
    return this.adapter.getSelectedIndex();
  };
  MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu, skipNotify) {
    if (closeMenu === void 0) {
      closeMenu = false;
    }
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    if (index >= this.adapter.getMenuItemCount()) {
      return;
    }
    if (index === numbers$2.UNSET_INDEX) {
      this.adapter.setSelectedText('');
    } else {
      this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
    }
    this.adapter.setSelectedIndex(index);
    if (closeMenu) {
      this.adapter.closeMenu();
    }
    if (!skipNotify && this.lastSelectedIndex !== index) {
      this.handleChange();
    }
    this.lastSelectedIndex = index;
  };
  MDCSelectFoundation.prototype.setValue = function (value, skipNotify) {
    if (skipNotify === void 0) {
      skipNotify = false;
    }
    var index = this.adapter.getMenuItemValues().indexOf(value);
    this.setSelectedIndex(index, /** closeMenu */false, skipNotify);
  };
  MDCSelectFoundation.prototype.getValue = function () {
    var index = this.adapter.getSelectedIndex();
    var menuItemValues = this.adapter.getMenuItemValues();
    return index !== numbers$2.UNSET_INDEX ? menuItemValues[index] : '';
  };
  MDCSelectFoundation.prototype.getDisabled = function () {
    return this.disabled;
  };
  MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
    this.disabled = isDisabled;
    if (this.disabled) {
      this.adapter.addClass(cssClasses$2.DISABLED);
      this.adapter.closeMenu();
    } else {
      this.adapter.removeClass(cssClasses$2.DISABLED);
    }
    if (this.leadingIcon) {
      this.leadingIcon.setDisabled(this.disabled);
    }
    if (this.disabled) {
      // Prevent click events from focusing select. Simply pointer-events: none
      // is not enough since screenreader clicks may bypass this.
      this.adapter.removeSelectAnchorAttr('tabindex');
    } else {
      this.adapter.setSelectAnchorAttr('tabindex', '0');
    }
    this.adapter.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
  };
  /** Opens the menu. */
  MDCSelectFoundation.prototype.openMenu = function () {
    this.adapter.addClass(cssClasses$2.ACTIVATED);
    this.adapter.openMenu();
    this.isMenuOpen = true;
    this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
  };
  /**
   * @param content Sets the content of the helper text.
   */
  MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText) {
      this.helperText.setContent(content);
    }
  };
  /**
   * Re-calculates if the notched outline should be notched and if the label
   * should float.
   */
  MDCSelectFoundation.prototype.layout = function () {
    if (this.adapter.hasLabel()) {
      var optionHasValue = this.getValue().length > 0;
      var isFocused = this.adapter.hasClass(cssClasses$2.FOCUSED);
      var shouldFloatAndNotch = optionHasValue || isFocused;
      var isRequired = this.adapter.hasClass(cssClasses$2.REQUIRED);
      this.notchOutline(shouldFloatAndNotch);
      this.adapter.floatLabel(shouldFloatAndNotch);
      this.adapter.setLabelRequired(isRequired);
    }
  };
  /**
   * Synchronizes the list of options with the state of the foundation. Call
   * this whenever menu options are dynamically updated.
   */
  MDCSelectFoundation.prototype.layoutOptions = function () {
    var menuItemValues = this.adapter.getMenuItemValues();
    var selectedIndex = menuItemValues.indexOf(this.getValue());
    this.setSelectedIndex(selectedIndex, /** closeMenu */false, /** skipNotify */true);
  };
  MDCSelectFoundation.prototype.handleMenuOpened = function () {
    if (this.adapter.getMenuItemValues().length === 0) {
      return;
    }
    // Menu should open to the last selected element, should open to first menu item otherwise.
    var selectedIndex = this.getSelectedIndex();
    var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
    this.adapter.focusMenuItemAtIndex(focusItemIndex);
  };
  MDCSelectFoundation.prototype.handleMenuClosing = function () {
    this.adapter.setSelectAnchorAttr('aria-expanded', 'false');
  };
  MDCSelectFoundation.prototype.handleMenuClosed = function () {
    this.adapter.removeClass(cssClasses$2.ACTIVATED);
    this.isMenuOpen = false;
    // Unfocus the select if menu is closed without a selection
    if (!this.adapter.isSelectAnchorFocused()) {
      this.blur();
    }
  };
  /**
   * Handles value changes, via change event or programmatic updates.
   */
  MDCSelectFoundation.prototype.handleChange = function () {
    this.layout();
    this.adapter.notifyChange(this.getValue());
    var isRequired = this.adapter.hasClass(cssClasses$2.REQUIRED);
    if (isRequired && this.useDefaultValidation) {
      this.setValid(this.isValid());
    }
  };
  MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
    this.setSelectedIndex(index, /** closeMenu */true);
  };
  /**
   * Handles focus events from select element.
   */
  MDCSelectFoundation.prototype.handleFocus = function () {
    this.adapter.addClass(cssClasses$2.FOCUSED);
    this.layout();
    this.adapter.activateBottomLine();
  };
  /**
   * Handles blur events from select element.
   */
  MDCSelectFoundation.prototype.handleBlur = function () {
    if (this.isMenuOpen) {
      return;
    }
    this.blur();
  };
  MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
    if (this.disabled || this.recentlyClicked) {
      return;
    }
    this.setClickDebounceTimeout();
    if (this.isMenuOpen) {
      this.adapter.closeMenu();
      return;
    }
    this.adapter.setRippleCenter(normalizedX);
    this.openMenu();
  };
  /**
   * Handles keydown events on select element. Depending on the type of
   * character typed, does typeahead matching or opens menu.
   */
  MDCSelectFoundation.prototype.handleKeydown = function (event) {
    if (this.isMenuOpen || !this.adapter.hasClass(cssClasses$2.FOCUSED)) {
      return;
    }
    var isEnter = normalizeKey(event) === KEY.ENTER;
    var isSpace = normalizeKey(event) === KEY.SPACEBAR;
    var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
    var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
    var isModifier = event.ctrlKey || event.metaKey;
    // Typeahead
    if (!isModifier && (!isSpace && event.key && event.key.length === 1 || isSpace && this.adapter.isTypeaheadInProgress())) {
      var key = isSpace ? ' ' : event.key;
      var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
      if (typeaheadNextIndex >= 0) {
        this.setSelectedIndex(typeaheadNextIndex);
      }
      event.preventDefault();
      return;
    }
    if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
      return;
    }
    // Increment/decrement index as necessary and open menu.
    if (arrowUp && this.getSelectedIndex() > 0) {
      this.setSelectedIndex(this.getSelectedIndex() - 1);
    } else if (arrowDown && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
      this.setSelectedIndex(this.getSelectedIndex() + 1);
    }
    this.openMenu();
    event.preventDefault();
  };
  /**
   * Opens/closes the notched outline.
   */
  MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter.hasOutline()) {
      return;
    }
    var isFocused = this.adapter.hasClass(cssClasses$2.FOCUSED);
    if (openNotch) {
      var labelScale = numbers$2.LABEL_SCALE;
      var labelWidth = this.adapter.getLabelWidth() * labelScale;
      this.adapter.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter.closeOutline();
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */
  MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon) {
      this.leadingIcon.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */
  MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon) {
      this.leadingIcon.setContent(content);
    }
  };
  MDCSelectFoundation.prototype.getUseDefaultValidation = function () {
    return this.useDefaultValidation;
  };
  MDCSelectFoundation.prototype.setUseDefaultValidation = function (useDefaultValidation) {
    this.useDefaultValidation = useDefaultValidation;
  };
  MDCSelectFoundation.prototype.setValid = function (isValid) {
    if (!this.useDefaultValidation) {
      this.customValidity = isValid;
    }
    this.adapter.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
    if (isValid) {
      this.adapter.removeClass(cssClasses$2.INVALID);
      this.adapter.removeMenuClass(cssClasses$2.MENU_INVALID);
    } else {
      this.adapter.addClass(cssClasses$2.INVALID);
      this.adapter.addMenuClass(cssClasses$2.MENU_INVALID);
    }
    this.syncHelperTextValidity(isValid);
  };
  MDCSelectFoundation.prototype.isValid = function () {
    if (this.useDefaultValidation && this.adapter.hasClass(cssClasses$2.REQUIRED) && !this.adapter.hasClass(cssClasses$2.DISABLED)) {
      // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
      // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
      return this.getSelectedIndex() !== numbers$2.UNSET_INDEX && (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
    }
    return this.customValidity;
  };
  MDCSelectFoundation.prototype.setRequired = function (isRequired) {
    if (isRequired) {
      this.adapter.addClass(cssClasses$2.REQUIRED);
    } else {
      this.adapter.removeClass(cssClasses$2.REQUIRED);
    }
    this.adapter.setSelectAnchorAttr('aria-required', isRequired.toString());
    this.adapter.setLabelRequired(isRequired);
  };
  MDCSelectFoundation.prototype.getRequired = function () {
    return this.adapter.getSelectAnchorAttr('aria-required') === 'true';
  };
  MDCSelectFoundation.prototype.init = function () {
    var anchorEl = this.adapter.getAnchorElement();
    if (anchorEl) {
      this.adapter.setMenuAnchorElement(anchorEl);
      this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
    }
    this.adapter.setMenuWrapFocus(false);
    this.setDisabled(this.adapter.hasClass(cssClasses$2.DISABLED));
    this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses$2.INVALID));
    this.layout();
    this.layoutOptions();
  };
  /**
   * Unfocuses the select component.
   */
  MDCSelectFoundation.prototype.blur = function () {
    this.adapter.removeClass(cssClasses$2.FOCUSED);
    this.layout();
    this.adapter.deactivateBottomLine();
    var isRequired = this.adapter.hasClass(cssClasses$2.REQUIRED);
    if (isRequired && this.useDefaultValidation) {
      this.setValid(this.isValid());
    }
  };
  MDCSelectFoundation.prototype.syncHelperTextValidity = function (isValid) {
    if (!this.helperText) {
      return;
    }
    this.helperText.setValidity(isValid);
    var helperTextVisible = this.helperText.isVisible();
    var helperTextId = this.helperText.getId();
    if (helperTextVisible && helperTextId) {
      this.adapter.setSelectAnchorAttr(strings$2.ARIA_DESCRIBEDBY, helperTextId);
    } else {
      // Needed because screenreaders will read labels pointed to by
      // `aria-describedby` even if they are `aria-hidden`.
      this.adapter.removeSelectAnchorAttr(strings$2.ARIA_DESCRIBEDBY);
    }
  };
  MDCSelectFoundation.prototype.setClickDebounceTimeout = function () {
    var _this = this;
    clearTimeout(this.clickDebounceTimeout);
    this.clickDebounceTimeout = setTimeout(function () {
      _this.recentlyClicked = false;
    }, numbers$2.CLICK_DEBOUNCE_TIMEOUT_MS);
    this.recentlyClicked = true;
  };
  return MDCSelectFoundation;
}(MDCFoundation);
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCSelectFoundation$1 = MDCSelectFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = l => null != l ? l : A;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const createValidityObj = (customValidity = {}) => {
  /*
   * We need to make ValidityState an object because it is readonly and
   * we cannot use the spread operator. Also, we don't export
   * `CustomValidityState` because it is a leaky implementation and the user
   * already has access to `ValidityState` in lib.dom.ts. Also an interface
   * {a: Type} can be casted to {readonly a: Type} so passing any object
   * should be fine.
   */
  const objectifiedCustomValidity = {};
  // eslint-disable-next-line guard-for-in
  for (const propName in customValidity) {
    /*
     * Casting is needed because ValidityState's props are all readonly and
     * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
     * interface is the same as ValidityState (but not readonly), but the
     * function signature casts the output to ValidityState (thus readonly).
     */
    objectifiedCustomValidity[propName] = customValidity[propName];
  }
  return Object.assign({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  }, objectifiedCustomValidity);
};
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */
class SelectBase extends FormElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCSelectFoundation$1;
    this.disabled = false;
    this.outlined = false;
    this.label = '';
    this.outlineOpen = false;
    this.outlineWidth = 0;
    this.value = '';
    this.name = '';
    this.selectedText = '';
    this.icon = '';
    this.menuOpen = false;
    this.helper = '';
    this.validateOnInitialRender = false;
    this.validationMessage = '';
    this.required = false;
    this.naturalMenuWidth = false;
    this.isUiValid = true;
    this.fixedMenuPosition = false;
    // Transiently holds current typeahead prefix from user.
    this.typeaheadState = initState();
    this.sortedIndexByFirstChar = new Map();
    this.menuElement_ = null;
    this.listeners = [];
    this.onBodyClickBound = () => undefined;
    this._menuUpdateComplete = null;
    this.valueSetDirectly = false;
    this.validityTransform = null;
    this._validity = createValidityObj();
  }
  get items() {
    // memoize menuElement to prevent unnecessary querySelector calls.
    if (!this.menuElement_) {
      this.menuElement_ = this.menuElement;
    }
    if (this.menuElement_) {
      return this.menuElement_.items;
    }
    return [];
  }
  get selected() {
    const menuElement = this.menuElement;
    if (menuElement) {
      return menuElement.selected;
    }
    return null;
  }
  get index() {
    const menuElement = this.menuElement;
    if (menuElement) {
      return menuElement.index;
    }
    return -1;
  }
  get shouldRenderHelperText() {
    return !!this.helper || !!this.validationMessage;
  }
  get validity() {
    this._checkValidity(this.value);
    return this._validity;
  }
  render() {
    const classes = {
      'mdc-select--disabled': this.disabled,
      'mdc-select--no-label': !this.label,
      'mdc-select--filled': !this.outlined,
      'mdc-select--outlined': this.outlined,
      'mdc-select--with-leading-icon': !!this.icon,
      'mdc-select--required': this.required,
      'mdc-select--invalid': !this.isUiValid
    };
    const menuClasses = {
      'mdc-select__menu--invalid': !this.isUiValid
    };
    const labelledby = !!this.label ? 'label' : undefined;
    const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;
    return x`
      <div
          class="mdc-select ${o(classes)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${l(labelledby)}
            aria-required=${this.required}
            aria-describedby=${l(describedby)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${o(menuClasses)}"
            activatable
            .fullwidth=${this.fixedMenuPosition ? false : !this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`;
  }
  renderRipple() {
    if (this.outlined) {
      return A;
    }
    return x`
      <span class="mdc-select__ripple"></span>
    `;
  }
  renderOutline() {
    if (!this.outlined) {
      return A;
    }
    return x`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
  }
  renderLabel() {
    if (!this.label) {
      return A;
    }
    return x`
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
  }
  renderLeadingIcon() {
    if (!this.icon) {
      return A;
    }
    return x`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`;
  }
  renderLineRipple() {
    if (this.outlined) {
      return A;
    }
    return x`
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
  }
  renderHelperText() {
    if (!this.shouldRenderHelperText) {
      return A;
    }
    const showValidationMessage = this.validationMessage && !this.isUiValid;
    const classes = {
      'mdc-select-helper-text--validation-msg': showValidationMessage
    };
    return x`
        <p
          class="mdc-select-helper-text ${o(classes)}"
          id="helper-text">${showValidationMessage ? this.validationMessage : this.helper}</p>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
      activateBottomLine: () => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.activate();
        }
      },
      deactivateBottomLine: () => {
        if (this.lineRippleElement) {
          this.lineRippleElement.lineRippleFoundation.deactivate();
        }
      },
      hasLabel: () => {
        return !!this.label;
      },
      floatLabel: shouldFloat => {
        if (this.labelElement) {
          this.labelElement.floatingLabelFoundation.float(shouldFloat);
        }
      },
      getLabelWidth: () => {
        if (this.labelElement) {
          return this.labelElement.floatingLabelFoundation.getWidth();
        }
        return 0;
      },
      setLabelRequired: isRequired => {
        if (this.labelElement) {
          this.labelElement.floatingLabelFoundation.setRequired(isRequired);
        }
      },
      hasOutline: () => this.outlined,
      notchOutline: labelWidth => {
        const outlineElement = this.outlineElement;
        if (outlineElement && !this.outlineOpen) {
          this.outlineWidth = labelWidth;
          this.outlineOpen = true;
        }
      },
      closeOutline: () => {
        if (this.outlineElement) {
          this.outlineOpen = false;
        }
      },
      setRippleCenter: normalizedX => {
        if (this.lineRippleElement) {
          const foundation = this.lineRippleElement.lineRippleFoundation;
          foundation.setRippleCenter(normalizedX);
        }
      },
      notifyChange: async value => {
        if (!this.valueSetDirectly && value === this.value) {
          return;
        }
        this.valueSetDirectly = false;
        this.value = value;
        await this.updateComplete;
        const ev = new Event('change', {
          bubbles: true
        });
        this.dispatchEvent(ev);
      },
      setSelectedText: value => this.selectedText = value,
      isSelectAnchorFocused: () => {
        const selectAnchorElement = this.anchorElement;
        if (!selectAnchorElement) {
          return false;
        }
        const rootNode = selectAnchorElement.getRootNode();
        return rootNode.activeElement === selectAnchorElement;
      },
      getSelectAnchorAttr: attr => {
        const selectAnchorElement = this.anchorElement;
        if (!selectAnchorElement) {
          return null;
        }
        return selectAnchorElement.getAttribute(attr);
      },
      setSelectAnchorAttr: (attr, value) => {
        const selectAnchorElement = this.anchorElement;
        if (!selectAnchorElement) {
          return;
        }
        selectAnchorElement.setAttribute(attr, value);
      },
      removeSelectAnchorAttr: attr => {
        const selectAnchorElement = this.anchorElement;
        if (!selectAnchorElement) {
          return;
        }
        selectAnchorElement.removeAttribute(attr);
      },
      openMenu: () => {
        this.menuOpen = true;
      },
      closeMenu: () => {
        this.menuOpen = false;
      },
      addMenuClass: () => undefined,
      removeMenuClass: () => undefined,
      getAnchorElement: () => this.anchorElement,
      setMenuAnchorElement: () => {
        /* Handled by anchor directive */
      },
      setMenuAnchorCorner: () => {
        const menuElement = this.menuElement;
        if (menuElement) {
          menuElement.corner = 'BOTTOM_START';
        }
      },
      setMenuWrapFocus: wrapFocus => {
        const menuElement = this.menuElement;
        if (menuElement) {
          menuElement.wrapFocus = wrapFocus;
        }
      },
      focusMenuItemAtIndex: index => {
        const menuElement = this.menuElement;
        if (!menuElement) {
          return;
        }
        const element = menuElement.items[index];
        if (!element) {
          return;
        }
        element.focus();
      },
      getMenuItemCount: () => {
        const menuElement = this.menuElement;
        if (menuElement) {
          return menuElement.items.length;
        }
        return 0;
      },
      getMenuItemValues: () => {
        const menuElement = this.menuElement;
        if (!menuElement) {
          return [];
        }
        const items = menuElement.items;
        return items.map(item => item.value);
      },
      getMenuItemTextAtIndex: index => {
        const menuElement = this.menuElement;
        if (!menuElement) {
          return '';
        }
        const element = menuElement.items[index];
        if (!element) {
          return '';
        }
        return element.text;
      },
      getSelectedIndex: () => this.index,
      setSelectedIndex: () => undefined,
      isTypeaheadInProgress: () => isTypingInProgress(this.typeaheadState),
      typeaheadMatchItem: (nextChar, startingIndex) => {
        if (!this.menuElement) {
          return -1;
        }
        const opts = {
          focusItemAtIndex: index => {
            this.menuElement.focusItemAtIndex(index);
          },
          focusedItemIndex: startingIndex ? startingIndex : this.menuElement.getFocusedItemIndex(),
          nextChar,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          skipFocus: false,
          isItemAtIndexDisabled: index => this.items[index].disabled
        };
        const index = matchItem(opts, this.typeaheadState);
        if (index !== -1) {
          this.select(index);
        }
        return index;
      }
    });
  }
  checkValidity() {
    const isValid = this._checkValidity(this.value);
    if (!isValid) {
      const invalidEvent = new Event('invalid', {
        bubbles: false,
        cancelable: true
      });
      this.dispatchEvent(invalidEvent);
    }
    return isValid;
  }
  reportValidity() {
    const isValid = this.checkValidity();
    this.isUiValid = isValid;
    return isValid;
  }
  _checkValidity(value) {
    const nativeValidity = this.formElement.validity;
    let validity = createValidityObj(nativeValidity);
    if (this.validityTransform) {
      const customValidity = this.validityTransform(value, validity);
      validity = Object.assign(Object.assign({}, validity), customValidity);
    }
    this._validity = validity;
    return this._validity.valid;
  }
  setCustomValidity(message) {
    this.validationMessage = message;
    this.formElement.setCustomValidity(message);
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    await this._menuUpdateComplete;
    // @ts-ignore
    const result = await super.getUpdateComplete();
    return result;
  }
  // tslint:enable:ban-ts-ignore
  async firstUpdated() {
    const menuElement = this.menuElement;
    if (menuElement) {
      this._menuUpdateComplete = menuElement.updateComplete;
      await this._menuUpdateComplete;
    }
    super.firstUpdated();
    this.mdcFoundation.isValid = () => true;
    this.mdcFoundation.setValid = () => undefined;
    this.mdcFoundation.setDisabled(this.disabled);
    if (this.validateOnInitialRender) {
      this.reportValidity();
    }
    // Select an option based on init value
    if (!this.selected) {
      if (!this.items.length && this.slotElement && this.slotElement.assignedNodes({
        flatten: true
      }).length) {
        // Shady DOM initial render fix
        await new Promise(res => requestAnimationFrame(res));
        await this.layout();
      }
      const hasEmptyFirstOption = this.items.length && this.items[0].value === '';
      if (!this.value && hasEmptyFirstOption) {
        this.select(0);
        return;
      }
      this.selectByValue(this.value);
    }
    this.sortedIndexByFirstChar = initSortedIndex(this.items.length, index => this.items[index].text);
  }
  onItemsUpdated() {
    this.sortedIndexByFirstChar = initSortedIndex(this.items.length, index => this.items[index].text);
  }
  select(index) {
    const menuElement = this.menuElement;
    if (menuElement) {
      menuElement.select(index);
    }
  }
  selectByValue(value) {
    let indexToSelect = -1;
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.value === value) {
        indexToSelect = i;
        break;
      }
    }
    this.valueSetDirectly = true;
    this.select(indexToSelect);
    this.mdcFoundation.handleChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const listener of this.listeners) {
      listener.target.removeEventListener(listener.name, listener.cb);
    }
  }
  focus() {
    const focusEvt = new CustomEvent('focus');
    const selectAnchorElement = this.anchorElement;
    if (selectAnchorElement) {
      selectAnchorElement.dispatchEvent(focusEvt);
      selectAnchorElement.focus();
    }
  }
  blur() {
    const focusEvt = new CustomEvent('blur');
    const selectAnchorElement = this.anchorElement;
    if (selectAnchorElement) {
      selectAnchorElement.dispatchEvent(focusEvt);
      selectAnchorElement.blur();
    }
  }
  onFocus() {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleFocus();
    }
  }
  onBlur() {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleBlur();
    }
    const menuElement = this.menuElement;
    if (menuElement && !menuElement.open) {
      this.reportValidity();
    }
  }
  onClick(evt) {
    if (this.mdcFoundation) {
      this.focus();
      const targetClientRect = evt.target.getBoundingClientRect();
      let xCoord = 0;
      if ('touches' in evt) {
        xCoord = evt.touches[0].clientX;
      } else {
        xCoord = evt.clientX;
      }
      const normalizedX = xCoord - targetClientRect.left;
      this.mdcFoundation.handleClick(normalizedX);
    }
  }
  onKeydown(evt) {
    const arrowUp = normalizeKey(evt) === KEY.ARROW_UP;
    const arrowDown = normalizeKey(evt) === KEY.ARROW_DOWN;
    if (arrowDown || arrowUp) {
      const shouldSelectNextItem = arrowUp && this.index > 0;
      const shouldSelectPrevItem = arrowDown && this.index < this.items.length - 1;
      if (shouldSelectNextItem) {
        this.select(this.index - 1);
      } else if (shouldSelectPrevItem) {
        this.select(this.index + 1);
      }
      evt.preventDefault();
      this.mdcFoundation.openMenu();
      return;
    }
    this.mdcFoundation.handleKeydown(evt);
  }
  // must capture to run before list foundation captures event
  handleTypeahead(event) {
    if (!this.menuElement) {
      return;
    }
    const focusedItemIndex = this.menuElement.getFocusedItemIndex();
    const target = isNodeElement(event.target) ? event.target : null;
    const isTargetListItem = target ? target.hasAttribute('mwc-list-item') : false;
    const opts = {
      event,
      focusItemAtIndex: index => {
        this.menuElement.focusItemAtIndex(index);
      },
      focusedItemIndex,
      isTargetListItem,
      sortedIndexByFirstChar: this.sortedIndexByFirstChar,
      isItemAtIndexDisabled: index => this.items[index].disabled
    };
    handleKeydown(opts, this.typeaheadState);
  }
  async onSelected(event) {
    if (!this.mdcFoundation) {
      await this.updateComplete;
    }
    this.mdcFoundation.handleMenuItemAction(event.detail.index);
    const item = this.items[event.detail.index];
    if (item) {
      this.value = item.value;
    }
  }
  onOpened() {
    if (this.mdcFoundation) {
      this.menuOpen = true;
      this.mdcFoundation.handleMenuOpened();
    }
  }
  onClosed() {
    if (this.mdcFoundation) {
      this.menuOpen = false;
      this.mdcFoundation.handleMenuClosed();
    }
  }
  setFormData(formData) {
    if (this.name && this.selected !== null) {
      formData.append(this.name, this.value);
    }
  }
  async layout(updateItems = true) {
    if (this.mdcFoundation) {
      this.mdcFoundation.layout();
    }
    await this.updateComplete;
    const menuElement = this.menuElement;
    if (menuElement) {
      menuElement.layout(updateItems);
    }
    const labelElement = this.labelElement;
    if (!labelElement) {
      this.outlineOpen = false;
      return;
    }
    const shouldFloat = !!this.label && !!this.value;
    labelElement.floatingLabelFoundation.float(shouldFloat);
    if (!this.outlined) {
      return;
    }
    this.outlineOpen = shouldFloat;
    await this.updateComplete;
    /* When the textfield automatically notches due to a value and label
     * being defined, the textfield may be set to `display: none` by the user.
     * this means that the notch is of size 0px. We provide this function so
     * that the user may manually resize the notch to the floated label's
     * width.
     */
    const labelWidth = labelElement.floatingLabelFoundation.getWidth();
    if (this.outlineOpen) {
      this.outlineWidth = labelWidth;
    }
  }
  async layoutOptions() {
    if (!this.mdcFoundation) {
      return;
    }
    this.mdcFoundation.layoutOptions();
  }
}
__decorate([i$3('.mdc-select')], SelectBase.prototype, "mdcRoot", void 0);
__decorate([i$3('.formElement')], SelectBase.prototype, "formElement", void 0);
__decorate([i$3('slot')], SelectBase.prototype, "slotElement", void 0);
__decorate([i$3('select')], SelectBase.prototype, "nativeSelectElement", void 0);
__decorate([i$3('input')], SelectBase.prototype, "nativeInputElement", void 0);
__decorate([i$3('.mdc-line-ripple')], SelectBase.prototype, "lineRippleElement", void 0);
__decorate([i$3('.mdc-floating-label')], SelectBase.prototype, "labelElement", void 0);
__decorate([i$3('mwc-notched-outline')], SelectBase.prototype, "outlineElement", void 0);
__decorate([i$3('.mdc-menu')], SelectBase.prototype, "menuElement", void 0);
__decorate([i$3('.mdc-select__anchor')], SelectBase.prototype, "anchorElement", void 0);
__decorate([e$6({
  type: Boolean,
  attribute: 'disabled',
  reflect: true
}), observer(function (value) {
  if (this.mdcFoundation) {
    this.mdcFoundation.setDisabled(value);
  }
})], SelectBase.prototype, "disabled", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (_newVal, oldVal) {
  if (oldVal !== undefined && this.outlined !== oldVal) {
    this.layout(false);
  }
})], SelectBase.prototype, "outlined", void 0);
__decorate([e$6({
  type: String
}), observer(function (_newVal, oldVal) {
  if (oldVal !== undefined && this.label !== oldVal) {
    this.layout(false);
  }
})], SelectBase.prototype, "label", void 0);
__decorate([t$2()], SelectBase.prototype, "outlineOpen", void 0);
__decorate([t$2()], SelectBase.prototype, "outlineWidth", void 0);
__decorate([e$6({
  type: String
}), observer(function (value) {
  if (this.mdcFoundation) {
    const initialization = this.selected === null && !!value;
    const valueSetByUser = this.selected && this.selected.value !== value;
    if (initialization || valueSetByUser) {
      this.selectByValue(value);
    }
    this.reportValidity();
  }
})], SelectBase.prototype, "value", void 0);
__decorate([e$6()], SelectBase.prototype, "name", void 0);
__decorate([t$2()], SelectBase.prototype, "selectedText", void 0);
__decorate([e$6({
  type: String
})], SelectBase.prototype, "icon", void 0);
__decorate([t$2()], SelectBase.prototype, "menuOpen", void 0);
__decorate([e$6({
  type: String
})], SelectBase.prototype, "helper", void 0);
__decorate([e$6({
  type: Boolean
})], SelectBase.prototype, "validateOnInitialRender", void 0);
__decorate([e$6({
  type: String
})], SelectBase.prototype, "validationMessage", void 0);
__decorate([e$6({
  type: Boolean
})], SelectBase.prototype, "required", void 0);
__decorate([e$6({
  type: Boolean
})], SelectBase.prototype, "naturalMenuWidth", void 0);
__decorate([t$2()], SelectBase.prototype, "isUiValid", void 0);
__decorate([e$6({
  type: Boolean
})], SelectBase.prototype, "fixedMenuPosition", void 0);
__decorate([e$5({
  capture: true
})], SelectBase.prototype, "handleTypeahead", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$5 = i$6`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
  MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
  ROOT: 'mdc-menu'
};
var strings$1 = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_DISABLED_ATTR: 'aria-disabled',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
  SELECTED_EVENT: 'MDCMenu:selected',
  SKIP_RESTORE_FOCUS: 'data-menu-item-skip-restore-focus'
};
var numbers$1 = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;
(function (DefaultFocusState) {
  DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
  DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuSurfaceFoundation = /** @class */function (_super) {
  __extends(MDCMenuSurfaceFoundation, _super);
  function MDCMenuSurfaceFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation.defaultAdapter), adapter)) || this;
    _this.isSurfaceOpen = false;
    _this.isQuickOpen = false;
    _this.isHoistedElement = false;
    _this.isFixedPosition = false;
    _this.isHorizontallyCenteredOnViewport = false;
    _this.maxHeight = 0;
    _this.openBottomBias = 0;
    _this.openAnimationEndTimerId = 0;
    _this.closeAnimationEndTimerId = 0;
    _this.animationRequestId = 0;
    _this.anchorCorner = Corner.TOP_START;
    /**
     * Corner of the menu surface to which menu surface is attached to anchor.
     *
     *  Anchor corner --->+----------+
     *                    |  ANCHOR  |
     *                    +----------+
     *  Origin corner --->+--------------+
     *                    |              |
     *                    |              |
     *                    | MENU SURFACE |
     *                    |              |
     *                    |              |
     *                    +--------------+
     */
    _this.originCorner = Corner.TOP_START;
    _this.anchorMargin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    _this.position = {
      x: 0,
      y: 0
    };
    return _this;
  }
  Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
    get: function () {
      return cssClasses$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
    get: function () {
      return strings$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
    get: function () {
      return numbers$3;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
    get: function () {
      return Corner;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        hasAnchor: function () {
          return false;
        },
        isElementInContainer: function () {
          return false;
        },
        isFocused: function () {
          return false;
        },
        isRtl: function () {
          return false;
        },
        getInnerDimensions: function () {
          return {
            height: 0,
            width: 0
          };
        },
        getAnchorDimensions: function () {
          return null;
        },
        getWindowDimensions: function () {
          return {
            height: 0,
            width: 0
          };
        },
        getBodyDimensions: function () {
          return {
            height: 0,
            width: 0
          };
        },
        getWindowScroll: function () {
          return {
            x: 0,
            y: 0
          };
        },
        setPosition: function () {
          return undefined;
        },
        setMaxHeight: function () {
          return undefined;
        },
        setTransformOrigin: function () {
          return undefined;
        },
        saveFocus: function () {
          return undefined;
        },
        restoreFocus: function () {
          return undefined;
        },
        notifyClose: function () {
          return undefined;
        },
        notifyOpen: function () {
          return undefined;
        },
        notifyClosing: function () {
          return undefined;
        }
      };
      // tslint:enable:object-literal-sort-keys
    },

    enumerable: false,
    configurable: true
  });
  MDCMenuSurfaceFoundation.prototype.init = function () {
    var _a = MDCMenuSurfaceFoundation.cssClasses,
      ROOT = _a.ROOT,
      OPEN = _a.OPEN;
    if (!this.adapter.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }
    if (this.adapter.hasClass(OPEN)) {
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation.prototype.destroy = function () {
    clearTimeout(this.openAnimationEndTimerId);
    clearTimeout(this.closeAnimationEndTimerId);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu surface
   *     corner.
   */
  MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
    this.anchorCorner = corner;
  };
  /**
   * Flip menu corner horizontally.
   */
  MDCMenuSurfaceFoundation.prototype.flipCornerHorizontally = function () {
    this.originCorner = this.originCorner ^ CornerBit.RIGHT;
  };
  /**
   * @param margin Set of margin values from anchor.
   */
  MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
    this.anchorMargin.top = margin.top || 0;
    this.anchorMargin.right = margin.right || 0;
    this.anchorMargin.bottom = margin.bottom || 0;
    this.anchorMargin.left = margin.left || 0;
  };
  /** Used to indicate if the menu-surface is hoisted to the body. */
  MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
    this.isHoistedElement = isHoisted;
  };
  /**
   * Used to set the menu-surface calculations based on a fixed position menu.
   */
  MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
    this.isFixedPosition = isFixedPosition;
  };
  /**
   * @return Returns true if menu is in fixed (`position: fixed`) position.
   */
  MDCMenuSurfaceFoundation.prototype.isFixed = function () {
    return this.isFixedPosition;
  };
  /** Sets the menu-surface position on the page. */
  MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
    this.position.x = this.isFinite(x) ? x : 0;
    this.position.y = this.isFinite(y) ? y : 0;
  };
  /** Sets whether menu-surface should be horizontally centered to viewport. */
  MDCMenuSurfaceFoundation.prototype.setIsHorizontallyCenteredOnViewport = function (isCentered) {
    this.isHorizontallyCenteredOnViewport = isCentered;
  };
  MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
    this.isQuickOpen = quickOpen;
  };
  /**
   * Sets maximum menu-surface height on open.
   * @param maxHeight The desired max-height. Set to 0 (default) to
   *     automatically calculate max height based on available viewport space.
   */
  MDCMenuSurfaceFoundation.prototype.setMaxHeight = function (maxHeight) {
    this.maxHeight = maxHeight;
  };
  /**
   * Set to a positive integer to influence the menu to preferentially open
   * below the anchor instead of above.
   * @param bias A value of `x` simulates an extra `x` pixels of available space
   *     below the menu during positioning calculations.
   */
  MDCMenuSurfaceFoundation.prototype.setOpenBottomBias = function (bias) {
    this.openBottomBias = bias;
  };
  MDCMenuSurfaceFoundation.prototype.isOpen = function () {
    return this.isSurfaceOpen;
  };
  /**
   * Open the menu surface.
   */
  MDCMenuSurfaceFoundation.prototype.open = function () {
    var _this = this;
    if (this.isSurfaceOpen) {
      return;
    }
    this.adapter.saveFocus();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = true;
      this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
      this.dimensions = this.adapter.getInnerDimensions();
      this.autoposition();
      this.adapter.notifyOpen();
    } else {
      this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
      this.animationRequestId = requestAnimationFrame(function () {
        _this.dimensions = _this.adapter.getInnerDimensions();
        _this.autoposition();
        _this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
        _this.openAnimationEndTimerId = setTimeout(function () {
          _this.openAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
          _this.adapter.notifyOpen();
        }, numbers$3.TRANSITION_OPEN_DURATION);
      });
      this.isSurfaceOpen = true;
    }
  };
  /**
   * Closes the menu surface.
   */
  MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
    var _this = this;
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }
    if (!this.isSurfaceOpen) {
      return;
    }
    this.adapter.notifyClosing();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
      this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
      this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
      this.adapter.notifyClose();
      return;
    }
    this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
    requestAnimationFrame(function () {
      _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
      _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
      _this.closeAnimationEndTimerId = setTimeout(function () {
        _this.closeAnimationEndTimerId = 0;
        _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        _this.adapter.notifyClose();
      }, numbers$3.TRANSITION_CLOSE_DURATION);
    });
    this.isSurfaceOpen = false;
    if (!skipRestoreFocus) {
      this.maybeRestoreFocus();
    }
  };
  /** Handle clicks and close if not within menu-surface element. */
  MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
    var el = evt.target;
    if (this.adapter.isElementInContainer(el)) {
      return;
    }
    this.close();
  };
  /** Handle keys that close the surface. */
  MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
      key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };
  MDCMenuSurfaceFoundation.prototype.autoposition = function () {
    var _a;
    // Compute measurements for autoposition methods reuse.
    this.measurements = this.getAutoLayoutmeasurements();
    var corner = this.getoriginCorner();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
    var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
    var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? 'right' : 'left';
    var horizontalOffset = this.getHorizontalOriginOffset(corner);
    var verticalOffset = this.getVerticalOriginOffset(corner);
    var _b = this.measurements,
      anchorSize = _b.anchorSize,
      surfaceSize = _b.surfaceSize;
    var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a);
    // Center align when anchor width is comparable or greater than menu
    // surface, otherwise keep corner.
    if (anchorSize.width / surfaceSize.width > numbers$3.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = 'center';
    }
    // If the menu-surface has been hoisted to the body, it's no longer relative
    // to the anchor element
    if (this.isHoistedElement || this.isFixedPosition) {
      this.adjustPositionForHoistedElement(position);
    }
    this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter.setPosition(position);
    this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
    // If it is opened from the top then add is-open-below class
    if (!this.hasBit(corner, CornerBit.BOTTOM)) {
      this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
    }
  };
  /**
   * @return Measurements used to position menu surface popup.
   */
  MDCMenuSurfaceFoundation.prototype.getAutoLayoutmeasurements = function () {
    var anchorRect = this.adapter.getAnchorDimensions();
    var bodySize = this.adapter.getBodyDimensions();
    var viewportSize = this.adapter.getWindowDimensions();
    var windowScroll = this.adapter.getWindowScroll();
    if (!anchorRect) {
      // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
      anchorRect = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      };
      // tslint:enable:object-literal-sort-keys
    }

    return {
      anchorSize: anchorRect,
      bodySize: bodySize,
      surfaceSize: this.dimensions,
      viewportDistance: {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
        // tslint:enable:object-literal-sort-keys
      },

      viewportSize: viewportSize,
      windowScroll: windowScroll
    };
  };
  /**
   * Computes the corner of the anchor from which to animate and position the
   * menu surface.
   *
   * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
   * context. E.g., menu surface will be positioned from right side on TOP_END.
   */
  MDCMenuSurfaceFoundation.prototype.getoriginCorner = function () {
    var corner = this.originCorner;
    var _a = this.measurements,
      viewportDistance = _a.viewportDistance,
      anchorSize = _a.anchorSize,
      surfaceSize = _a.surfaceSize;
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
    var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var availableTop;
    var availableBottom;
    if (isAnchoredToBottom) {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
    } else {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
    }
    var isAvailableBottom = availableBottom - surfaceSize.height > 0;
    if (!isAvailableBottom && availableTop > availableBottom + this.openBottomBias) {
      // Attach bottom side of surface to the anchor.
      corner = this.setBit(corner, CornerBit.BOTTOM);
    }
    var isRtl = this.adapter.isRtl();
    var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
    var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
    // Whether surface attached to right side of anchor element.
    var isAnchoredToRight = false;
    // Anchored to start
    if (isRtl && isFlipRtl) {
      isAnchoredToRight = !hasRightBit;
    } else {
      // Anchored to right
      isAnchoredToRight = hasRightBit;
    }
    var availableLeft;
    var availableRight;
    if (isAnchoredToRight) {
      availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
      availableRight = viewportDistance.right - this.anchorMargin.right;
    } else {
      availableLeft = viewportDistance.left + this.anchorMargin.left;
      availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
    }
    var isAvailableLeft = availableLeft - surfaceSize.width > 0;
    var isAvailableRight = availableRight - surfaceSize.width > 0;
    var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
    if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
      // Attach left side of surface to the anchor.
      corner = this.unsetBit(corner, CornerBit.RIGHT);
    } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
      // Attach right side of surface to the anchor.
      corner = this.setBit(corner, CornerBit.RIGHT);
    }
    return corner;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Maximum height of the menu surface, based on available space. 0
   *     indicates should not be set.
   */
  MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight = function (corner) {
    if (this.maxHeight > 0) {
      return this.maxHeight;
    }
    var viewportDistance = this.measurements.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
    // When maximum height is not specified, it is handled from CSS.
    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
      if (!isBottomAnchored) {
        maxHeight += this.measurements.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
      if (isBottomAnchored) {
        maxHeight -= this.measurements.anchorSize.height;
      }
    }
    return maxHeight;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding
   *     anchor corner.
   */
  MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset = function (corner) {
    var anchorSize = this.measurements.anchorSize;
    // isRightAligned corresponds to using the 'right' property on the surface.
    var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
    var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
      // For hoisted or fixed elements, adjust the offset by the difference
      // between viewport width and body width so when we calculate the right
      // value (`adjustPositionForHoistedElement`) based on the element
      // position, the right property is correct.
      if (this.isHoistedElement || this.isFixedPosition) {
        return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
      }
      return rightOffset;
    }
    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Vertical offset of menu surface origin corner from corresponding
   *     anchor corner.
   */
  MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset = function (corner) {
    var anchorSize = this.measurements.anchorSize;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var y = 0;
    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
    }
    return y;
  };
  /**
   * Calculates the offsets for positioning the menu-surface when the
   * menu-surface has been hoisted to the body.
   */
  MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement = function (position) {
    var e_1, _a;
    var _b = this.measurements,
      windowScroll = _b.windowScroll,
      viewportDistance = _b.viewportDistance,
      surfaceSize = _b.surfaceSize,
      viewportSize = _b.viewportSize;
    var props = Object.keys(position);
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0;
        if (this.isHorizontallyCenteredOnViewport && (prop === 'left' || prop === 'right')) {
          position[prop] = (viewportSize.width - surfaceSize.width) / 2;
          continue;
        }
        // Hoisted surfaces need to have the anchor elements location on the page
        // added to the position properties for proper alignment on the body.
        value += viewportDistance[prop];
        // Surfaces that are absolutely positioned need to have additional
        // calculations for scroll and bottom positioning.
        if (!this.isFixedPosition) {
          if (prop === 'top') {
            value += windowScroll.y;
          } else if (prop === 'bottom') {
            value -= windowScroll.y;
          } else if (prop === 'left') {
            value += windowScroll.x;
          } else {
            // prop === 'right'
            value -= windowScroll.x;
          }
        }
        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  /**
   * The last focused element when the menu surface was opened should regain
   * focus, if the user is focused on or within the menu surface when it is
   * closed.
   */
  MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus = function () {
    var _this = this;
    var isRootFocused = this.adapter.isFocused();
    var childHasFocus = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
    if (isRootFocused || childHasFocus) {
      // Wait before restoring focus when closing the menu surface. This is
      // important because if a touch event triggered the menu close, and the
      // subsequent mouse event occurs after focus is restored, then the
      // restored focus would be lost.
      setTimeout(function () {
        _this.adapter.restoreFocus();
      }, numbers$3.TOUCH_EVENT_WAIT_MS);
    }
  };
  MDCMenuSurfaceFoundation.prototype.hasBit = function (corner, bit) {
    return Boolean(corner & bit); // tslint:disable-line:no-bitwise
  };

  MDCMenuSurfaceFoundation.prototype.setBit = function (corner, bit) {
    return corner | bit; // tslint:disable-line:no-bitwise
  };

  MDCMenuSurfaceFoundation.prototype.unsetBit = function (corner, bit) {
    return corner ^ bit;
  };
  /**
   * isFinite that doesn't force conversion to number type.
   * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
   */
  MDCMenuSurfaceFoundation.prototype.isFinite = function (num) {
    return typeof num === 'number' && isFinite(num);
  };
  return MDCMenuSurfaceFoundation;
}(MDCFoundation);
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCMenuSurfaceFoundation$1 = MDCMenuSurfaceFoundation;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuFoundation = /** @class */function (_super) {
  __extends(MDCMenuFoundation, _super);
  function MDCMenuFoundation(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation.defaultAdapter), adapter)) || this;
    _this.closeAnimationEndTimerId = 0;
    _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
    _this.selectedIndex = -1;
    return _this;
  }
  Object.defineProperty(MDCMenuFoundation, "cssClasses", {
    get: function () {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "strings", {
    get: function () {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "numbers", {
    get: function () {
      return numbers$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClassToElementAtIndex: function () {
          return undefined;
        },
        removeClassFromElementAtIndex: function () {
          return undefined;
        },
        addAttributeToElementAtIndex: function () {
          return undefined;
        },
        removeAttributeFromElementAtIndex: function () {
          return undefined;
        },
        getAttributeFromElementAtIndex: function () {
          return null;
        },
        elementContainsClass: function () {
          return false;
        },
        closeSurface: function () {
          return undefined;
        },
        getElementIndex: function () {
          return -1;
        },
        notifySelected: function () {
          return undefined;
        },
        getMenuItemCount: function () {
          return 0;
        },
        focusItemAtIndex: function () {
          return undefined;
        },
        focusListRoot: function () {
          return undefined;
        },
        getSelectedSiblingOfItemAtIndex: function () {
          return -1;
        },
        isSelectableItemAtIndex: function () {
          return false;
        }
      };
      // tslint:enable:object-literal-sort-keys
    },

    enumerable: false,
    configurable: true
  });
  MDCMenuFoundation.prototype.destroy = function () {
    if (this.closeAnimationEndTimerId) {
      clearTimeout(this.closeAnimationEndTimerId);
    }
    this.adapter.closeSurface();
  };
  MDCMenuFoundation.prototype.handleKeydown = function (evt) {
    var key = evt.key,
      keyCode = evt.keyCode;
    var isTab = key === 'Tab' || keyCode === 9;
    if (isTab) {
      this.adapter.closeSurface( /** skipRestoreFocus */true);
    }
  };
  MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
    var _this = this;
    var index = this.adapter.getElementIndex(listItem);
    if (index < 0) {
      return;
    }
    this.adapter.notifySelected({
      index: index
    });
    var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings$1.SKIP_RESTORE_FOCUS) === 'true';
    this.adapter.closeSurface(skipRestoreFocus);
    // Wait for the menu to close before adding/removing classes that affect styles.
    this.closeAnimationEndTimerId = setTimeout(function () {
      // Recompute the index in case the menu contents have changed.
      var recomputedIndex = _this.adapter.getElementIndex(listItem);
      if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };
  MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
    switch (this.defaultFocusState) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;
      case DefaultFocusState.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;
      case DefaultFocusState.NONE:
        // Do nothing.
        break;
      default:
        this.adapter.focusListRoot();
        break;
    }
  };
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   */
  MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
    this.defaultFocusState = focusState;
  };
  /** @return Index of the currently selected list item within the menu. */
  MDCMenuFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex;
  };
  /**
   * Selects the list item at `index` within the menu.
   * @param index Index of list item within the menu.
   */
  MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
    this.validatedIndex(index);
    if (!this.adapter.isSelectableItemAtIndex(index)) {
      throw new Error('MDCMenuFoundation: No selection group at specified index.');
    }
    var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
    if (prevSelectedIndex >= 0) {
      this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$1.ARIA_CHECKED_ATTR);
      this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$1.MENU_SELECTED_LIST_ITEM);
    }
    this.adapter.addClassToElementAtIndex(index, cssClasses$1.MENU_SELECTED_LIST_ITEM);
    this.adapter.addAttributeToElementAtIndex(index, strings$1.ARIA_CHECKED_ATTR, 'true');
    this.selectedIndex = index;
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */
  MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
    this.validatedIndex(index);
    if (isEnabled) {
      this.adapter.removeClassFromElementAtIndex(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$1.ARIA_DISABLED_ATTR, 'false');
    } else {
      this.adapter.addClassToElementAtIndex(index, cssClasses$6.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$1.ARIA_DISABLED_ATTR, 'true');
    }
  };
  MDCMenuFoundation.prototype.validatedIndex = function (index) {
    var menuSize = this.adapter.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;
    if (!isIndexInRange) {
      throw new Error('MDCMenuFoundation: No list item at specified index.');
    }
  };
  return MDCMenuFoundation;
}(MDCFoundation);
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCMenuFoundation$1 = MDCMenuFoundation;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const integerSort = (a, b) => {
  return a - b;
};
const findIndexDiff = (oldSet, newSet) => {
  const oldArr = Array.from(oldSet);
  const newArr = Array.from(newSet);
  const diff = {
    added: [],
    removed: []
  };
  const oldSorted = oldArr.sort(integerSort);
  const newSorted = newArr.sort(integerSort);
  let i = 0;
  let j = 0;
  while (i < oldSorted.length || j < newSorted.length) {
    const oldVal = oldSorted[i];
    const newVal = newSorted[j];
    if (oldVal === newVal) {
      i++;
      j++;
      continue;
    }
    if (oldVal !== undefined && (newVal === undefined || oldVal < newVal)) {
      diff.removed.push(oldVal);
      i++;
      continue;
    }
    if (newVal !== undefined && (oldVal === undefined || newVal < oldVal)) {
      diff.added.push(newVal);
      j++;
      continue;
    }
  }
  return diff;
};
const ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isIndexSet(selectedIndex) {
  return selectedIndex instanceof Set;
}
const createSetFromIndex = index => {
  const entry = index === numbers$4.UNSET_INDEX ? new Set() : index;
  return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
class MDCListFoundation extends MDCFoundation {
  constructor(adapter) {
    super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
    this.isMulti_ = false;
    this.wrapFocus_ = false;
    this.isVertical_ = true;
    this.selectedIndex_ = numbers$4.UNSET_INDEX;
    this.focusedItemIndex_ = numbers$4.UNSET_INDEX;
    this.useActivatedClass_ = false;
    this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return strings$4;
  }
  static get numbers() {
    return numbers$4;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => undefined,
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => false,
      isRootFocused: () => false,
      notifyAction: () => undefined,
      notifySelected: () => undefined,
      getSelectedStateForElementIndex: () => false,
      setDisabledStateForElementIndex: () => undefined,
      getDisabledStateForElementIndex: () => false,
      setSelectedStateForElementIndex: () => undefined,
      setActivatedStateForElementIndex: () => undefined,
      setTabIndexForElementIndex: () => undefined,
      setAttributeForElementIndex: () => undefined,
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(value) {
    this.wrapFocus_ = value;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(value) {
    this.isMulti_ = value;
    const currentIndex = this.selectedIndex_;
    if (value) {
      // number to set
      if (!isIndexSet(currentIndex)) {
        const isUnset = currentIndex === numbers$4.UNSET_INDEX;
        this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
      }
    } else {
      // set to first sorted number in set
      if (isIndexSet(currentIndex)) {
        if (currentIndex.size) {
          const vals = Array.from(currentIndex).sort(integerSort);
          this.selectedIndex_ = vals[0];
        } else {
          this.selectedIndex_ = numbers$4.UNSET_INDEX;
        }
      }
    }
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(value) {
    this.isVertical_ = value;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(useActivated) {
    this.useActivatedClass_ = useActivated;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(index) {
    if (!this.isIndexValid_(index)) {
      return;
    }
    if (this.isMulti_) {
      this.setMultiSelectionAtIndex_(createSetFromIndex(index));
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
    }
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any
     * element. Setting a delay to wait till the focus is moved to next element.
     */
    setTimeout(() => {
      if (!this.adapter.isFocusInsideList()) {
        this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(event, isRootListItem, listItemIndex) {
    const isArrowLeft = normalizeKey(event) === 'ArrowLeft';
    const isArrowUp = normalizeKey(event) === 'ArrowUp';
    const isArrowRight = normalizeKey(event) === 'ArrowRight';
    const isArrowDown = normalizeKey(event) === 'ArrowDown';
    const isHome = normalizeKey(event) === 'Home';
    const isEnd = normalizeKey(event) === 'End';
    const isEnter = normalizeKey(event) === 'Enter';
    const isSpace = normalizeKey(event) === 'Spacebar';
    if (this.adapter.isRootFocused()) {
      if (isArrowUp || isEnd) {
        event.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        event.preventDefault();
        this.focusFirstElement();
      }
      return;
    }
    let currentIndex = this.adapter.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        // If this event doesn't have a mdc-deprecated-list-item ancestor from
        // the current list (not from a sublist), return early.
        return;
      }
    }
    let nextIndex;
    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers
        // synthetic MouseEvent event.
        const target = event.target;
        if (target && target.tagName === 'A' && isEnter) {
          return;
        }
        this.preventDefaultEvent(event);
        this.setSelectedIndexOnAction_(currentIndex, true);
      }
    }
    this.focusedItemIndex_ = currentIndex;
    if (nextIndex !== undefined) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(index, isInteraction, force) {
    if (index === numbers$4.UNSET_INDEX) {
      return;
    }
    this.setSelectedIndexOnAction_(index, isInteraction, force);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(index) {
    const count = this.adapter.getListItemCount();
    let nextIndex = index + 1;
    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return index;
      }
    }
    this.adapter.focusItemAtIndex(nextIndex);
    return nextIndex;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(index) {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return index;
      }
    }
    this.adapter.focusItemAtIndex(prevIndex);
    return prevIndex;
  }
  focusFirstElement() {
    this.adapter.focusItemAtIndex(0);
    return 0;
  }
  focusLastElement() {
    const lastIndex = this.adapter.getListItemCount() - 1;
    this.adapter.focusItemAtIndex(lastIndex);
    return lastIndex;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }
    this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(evt) {
    const target = evt.target;
    const tagName = `${target.tagName}`.toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  }
  setSingleSelectionAtIndex_(index, isInteraction = true) {
    if (this.selectedIndex_ === index) {
      return;
    }
    // unset previous
    if (this.selectedIndex_ !== numbers$4.UNSET_INDEX) {
      this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
      }
    }
    // set new
    if (isInteraction) {
      this.adapter.setSelectedStateForElementIndex(index, true);
    }
    if (this.useActivatedClass_) {
      this.adapter.setActivatedStateForElementIndex(index, true);
    }
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
    this.adapter.notifySelected(index);
  }
  setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
    const oldIndex = createSetFromIndex(this.selectedIndex_);
    const diff = findIndexDiff(oldIndex, newIndex);
    if (!diff.removed.length && !diff.added.length) {
      return;
    }
    for (const removed of diff.removed) {
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(removed, false);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(removed, false);
      }
    }
    for (const added of diff.added) {
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(added, true);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(added, true);
      }
    }
    this.selectedIndex_ = newIndex;
    this.adapter.notifySelected(newIndex, diff);
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(index) {
    // Detect the presence of aria-current and get the value only during list
    // initialization when it is in unset state.
    if (this.selectedIndex_ === numbers$4.UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(index, strings$4.ARIA_CURRENT);
    }
    const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    const ariaAttribute = isAriaCurrent ? strings$4.ARIA_CURRENT : strings$4.ARIA_SELECTED;
    if (this.selectedIndex_ !== numbers$4.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
    }
    const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
    this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  }
  setTabindexAtIndex_(index) {
    if (this.focusedItemIndex_ === numbers$4.UNSET_INDEX && index !== 0) {
      // If no list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no
      // preselected items.
      this.adapter.setTabIndexForElementIndex(0, -1);
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
    }
    this.adapter.setTabIndexForElementIndex(index, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let targetIndex = 0;
    if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== numbers$4.UNSET_INDEX) {
      targetIndex = this.selectedIndex_;
    } else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
      targetIndex = Math.min(...this.selectedIndex_);
    }
    this.setTabindexAtIndex_(targetIndex);
  }
  isIndexValid_(index) {
    if (index instanceof Set) {
      if (!this.isMulti_) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }
      if (index.size === 0) {
        return true;
      } else {
        let isOneInRange = false;
        for (const entry of index) {
          isOneInRange = this.isIndexInRange_(entry);
          if (isOneInRange) {
            break;
          }
        }
        return isOneInRange;
      }
    } else if (typeof index === 'number') {
      if (this.isMulti_) {
        throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
      }
      return index === numbers$4.UNSET_INDEX || this.isIndexInRange_(index);
    } else {
      return false;
    }
  }
  isIndexInRange_(index) {
    const listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(index, isInteraction, force) {
    if (this.adapter.getDisabledStateForElementIndex(index)) {
      return;
    }
    let checkedIndex = index;
    if (this.isMulti_) {
      checkedIndex = new Set([index]);
    }
    if (!this.isIndexValid_(checkedIndex)) {
      return;
    }
    if (this.isMulti_) {
      this.toggleMultiAtIndex(index, force, isInteraction);
    } else {
      if (isInteraction || force) {
        this.setSingleSelectionAtIndex_(index, isInteraction);
      } else {
        const isDeselection = this.selectedIndex_ === index;
        if (isDeselection) {
          this.setSingleSelectionAtIndex_(numbers$4.UNSET_INDEX);
        }
      }
    }
    if (isInteraction) {
      this.adapter.notifyAction(index);
    }
  }
  toggleMultiAtIndex(index, force, isInteraction = true) {
    let newSelectionValue = false;
    if (force === undefined) {
      newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
    } else {
      newSelectionValue = force;
    }
    const newSet = createSetFromIndex(this.selectedIndex_);
    if (newSelectionValue) {
      newSet.add(index);
    } else {
      newSet.delete(index);
    }
    this.setMultiSelectionAtIndex_(newSet, isInteraction);
  }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 * @fires opened
 * @fires closed
 */
class MenuBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCMenuFoundation$1;
    this.listElement_ = null;
    this.anchor = null;
    this.open = false;
    this.quick = false;
    this.wrapFocus = false;
    this.innerRole = 'menu';
    this.innerAriaLabel = null;
    this.corner = 'TOP_START';
    this.x = null;
    this.y = null;
    this.absolute = false;
    this.multi = false;
    this.activatable = false;
    this.fixed = false;
    this.forceGroupSelection = false;
    this.fullwidth = false;
    this.menuCorner = 'START';
    this.stayOpenOnBodyClick = false;
    this.defaultFocus = 'LIST_ROOT';
    this._listUpdateComplete = null;
  }
  get listElement() {
    if (!this.listElement_) {
      this.listElement_ = this.renderRoot.querySelector('mwc-list');
      return this.listElement_;
    }
    return this.listElement_;
  }
  get items() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.items;
    }
    return [];
  }
  get index() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.index;
    }
    return -1;
  }
  get selected() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.selected;
    }
    return null;
  }
  render() {
    const itemRoles = this.innerRole === 'menu' ? 'menuitem' : 'option';
    return x`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${itemRoles}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
  }
  createAdapter() {
    return {
      addClassToElementAtIndex: (index, className) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        if (className === 'mdc-menu-item--selected') {
          if (this.forceGroupSelection && !element.selected) {
            listElement.toggle(index, true);
          }
        } else {
          element.classList.add(className);
        }
      },
      removeClassFromElementAtIndex: (index, className) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        if (className === 'mdc-menu-item--selected') {
          if (element.selected) {
            listElement.toggle(index, false);
          }
        } else {
          element.classList.remove(className);
        }
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        element.setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        element.removeAttribute(attr);
      },
      getAttributeFromElementAtIndex: (index, attr) => {
        const listElement = this.listElement;
        if (!listElement) {
          return null;
        }
        const element = listElement.items[index];
        if (!element) {
          return null;
        }
        return element.getAttribute(attr);
      },
      elementContainsClass: (element, className) => element.classList.contains(className),
      closeSurface: () => {
        this.open = false;
      },
      getElementIndex: element => {
        const listElement = this.listElement;
        if (listElement) {
          return listElement.items.indexOf(element);
        }
        return -1;
      },
      notifySelected: () => {},
      getMenuItemCount: () => {
        const listElement = this.listElement;
        if (!listElement) {
          return 0;
        }
        return listElement.items.length;
      },
      focusItemAtIndex: index => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (element) {
          element.focus();
        }
      },
      focusListRoot: () => {
        if (this.listElement) {
          this.listElement.focus();
        }
      },
      getSelectedSiblingOfItemAtIndex: index => {
        const listElement = this.listElement;
        if (!listElement) {
          return -1;
        }
        const elementAtIndex = listElement.items[index];
        if (!elementAtIndex || !elementAtIndex.group) {
          return -1;
        }
        for (let i = 0; i < listElement.items.length; i++) {
          if (i === index) {
            continue;
          }
          const current = listElement.items[i];
          if (current.selected && current.group === elementAtIndex.group) {
            return i;
          }
        }
        return -1;
      },
      isSelectableItemAtIndex: index => {
        const listElement = this.listElement;
        if (!listElement) {
          return false;
        }
        const elementAtIndex = listElement.items[index];
        if (!elementAtIndex) {
          return false;
        }
        return elementAtIndex.hasAttribute('group');
      }
    };
  }
  onKeydown(evt) {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleKeydown(evt);
    }
  }
  onAction(evt) {
    const listElement = this.listElement;
    if (this.mdcFoundation && listElement) {
      const index = evt.detail.index;
      const el = listElement.items[index];
      if (el) {
        this.mdcFoundation.handleItemAction(el);
      }
    }
  }
  onOpened() {
    this.open = true;
    if (this.mdcFoundation) {
      this.mdcFoundation.handleMenuSurfaceOpened();
    }
  }
  onClosed() {
    this.open = false;
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    await this._listUpdateComplete;
    // @ts-ignore
    const result = await super.getUpdateComplete();
    return result;
  }
  // tslint:enable:ban-ts-ignore
  async firstUpdated() {
    super.firstUpdated();
    const listElement = this.listElement;
    if (listElement) {
      this._listUpdateComplete = listElement.updateComplete;
      await this._listUpdateComplete;
    }
  }
  select(index) {
    const listElement = this.listElement;
    if (listElement) {
      listElement.select(index);
    }
  }
  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
  getFocusedItemIndex() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.getFocusedItemIndex();
    }
    return -1;
  }
  focusItemAtIndex(index) {
    const listElement = this.listElement;
    if (listElement) {
      listElement.focusItemAtIndex(index);
    }
  }
  layout(updateItems = true) {
    const listElement = this.listElement;
    if (listElement) {
      listElement.layout(updateItems);
    }
  }
}
__decorate([i$3('.mdc-menu')], MenuBase.prototype, "mdcRoot", void 0);
__decorate([i$3('slot')], MenuBase.prototype, "slotElement", void 0);
__decorate([e$6({
  type: Object
})], MenuBase.prototype, "anchor", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
})], MenuBase.prototype, "open", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "quick", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "wrapFocus", void 0);
__decorate([e$6({
  type: String
})], MenuBase.prototype, "innerRole", void 0);
__decorate([e$6({
  type: String
})], MenuBase.prototype, "innerAriaLabel", void 0);
__decorate([e$6({
  type: String
})], MenuBase.prototype, "corner", void 0);
__decorate([e$6({
  type: Number
})], MenuBase.prototype, "x", void 0);
__decorate([e$6({
  type: Number
})], MenuBase.prototype, "y", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "absolute", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "multi", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "activatable", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "fixed", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "forceGroupSelection", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "fullwidth", void 0);
__decorate([e$6({
  type: String
})], MenuBase.prototype, "menuCorner", void 0);
__decorate([e$6({
  type: Boolean
})], MenuBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([e$6({
  type: String
}), observer(function (value) {
  if (this.mdcFoundation) {
    this.mdcFoundation.setDefaultFocusState(DefaultFocusState[value]);
  }
})], MenuBase.prototype, "defaultFocus", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$4 = i$6`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable:no-bitwise
// required for closure compiler
const stringToCorner = {
  'TOP_LEFT': Corner.TOP_LEFT,
  'TOP_RIGHT': Corner.TOP_RIGHT,
  'BOTTOM_LEFT': Corner.BOTTOM_LEFT,
  'BOTTOM_RIGHT': Corner.BOTTOM_RIGHT,
  'TOP_START': Corner.TOP_START,
  'TOP_END': Corner.TOP_END,
  'BOTTOM_START': Corner.BOTTOM_START,
  'BOTTOM_END': Corner.BOTTOM_END
};
/**
 * @fires opened
 * @fires closed
 */
class MenuSurfaceBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCMenuSurfaceFoundation$1;
    this.absolute = false;
    this.fullwidth = false;
    this.fixed = false;
    this.x = null;
    this.y = null;
    // must be defined before open or else race condition in foundation occurs.
    this.quick = false;
    this.open = false;
    this.stayOpenOnBodyClick = false;
    this.bitwiseCorner = Corner.TOP_START;
    this.previousMenuCorner = null;
    // must be defined before observer of anchor corner for initialization
    this.menuCorner = 'START';
    this.corner = 'TOP_START';
    this.styleTop = '';
    this.styleLeft = '';
    this.styleRight = '';
    this.styleBottom = '';
    this.styleMaxHeight = '';
    this.styleTransformOrigin = '';
    this.anchor = null;
    this.previouslyFocused = null;
    this.previousAnchor = null;
    this.onBodyClickBound = () => undefined;
  }
  render() {
    const classes = {
      'mdc-menu-surface--fixed': this.fixed,
      'mdc-menu-surface--fullwidth': this.fullwidth
    };
    const styles = {
      'top': this.styleTop,
      'left': this.styleLeft,
      'right': this.styleRight,
      'bottom': this.styleBottom,
      'max-height': this.styleMaxHeight,
      'transform-origin': this.styleTransformOrigin
    };
    return x`
      <div
          class="mdc-menu-surface ${o(classes)}"
          style="${i(styles)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
      hasAnchor: () => {
        return !!this.anchor;
      },
      notifyClose: () => {
        const init = {
          bubbles: true,
          composed: true
        };
        const ev = new CustomEvent('closed', init);
        this.open = false;
        this.mdcRoot.dispatchEvent(ev);
      },
      notifyClosing: () => {
        const init = {
          bubbles: true,
          composed: true
        };
        const ev = new CustomEvent('closing', init);
        this.mdcRoot.dispatchEvent(ev);
      },
      notifyOpen: () => {
        const init = {
          bubbles: true,
          composed: true
        };
        const ev = new CustomEvent('opened', init);
        this.open = true;
        this.mdcRoot.dispatchEvent(ev);
      },
      isElementInContainer: () => false,
      isRtl: () => {
        if (this.mdcRoot) {
          return getComputedStyle(this.mdcRoot).direction === 'rtl';
        }
        return false;
      },
      setTransformOrigin: origin => {
        const root = this.mdcRoot;
        if (!root) {
          return;
        }
        this.styleTransformOrigin = origin;
      },
      isFocused: () => {
        return doesElementContainFocus(this);
      },
      saveFocus: () => {
        const activeElementPath = deepActiveElementPath();
        const pathLength = activeElementPath.length;
        if (!pathLength) {
          this.previouslyFocused = null;
        }
        this.previouslyFocused = activeElementPath[pathLength - 1];
      },
      restoreFocus: () => {
        if (!this.previouslyFocused) {
          return;
        }
        if ('focus' in this.previouslyFocused) {
          this.previouslyFocused.focus();
        }
      },
      getInnerDimensions: () => {
        const mdcRoot = this.mdcRoot;
        if (!mdcRoot) {
          return {
            width: 0,
            height: 0
          };
        }
        return {
          width: mdcRoot.offsetWidth,
          height: mdcRoot.offsetHeight
        };
      },
      getAnchorDimensions: () => {
        const anchorElement = this.anchor;
        return anchorElement ? anchorElement.getBoundingClientRect() : null;
      },
      getBodyDimensions: () => {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      },
      getWindowDimensions: () => {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      getWindowScroll: () => {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      setPosition: position => {
        const mdcRoot = this.mdcRoot;
        if (!mdcRoot) {
          return;
        }
        this.styleLeft = 'left' in position ? `${position.left}px` : '';
        this.styleRight = 'right' in position ? `${position.right}px` : '';
        this.styleTop = 'top' in position ? `${position.top}px` : '';
        this.styleBottom = 'bottom' in position ? `${position.bottom}px` : '';
      },
      setMaxHeight: async height => {
        const mdcRoot = this.mdcRoot;
        if (!mdcRoot) {
          return;
        }
        // must set both for IE support as IE will not set a var
        this.styleMaxHeight = height;
        await this.updateComplete;
        this.styleMaxHeight = `var(--mdc-menu-max-height, ${height})`;
      }
    });
  }
  onKeydown(evt) {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleKeydown(evt);
    }
  }
  onBodyClick(evt) {
    if (this.stayOpenOnBodyClick) {
      return;
    }
    const path = evt.composedPath();
    if (path.indexOf(this) === -1) {
      this.close();
    }
  }
  registerBodyClick() {
    this.onBodyClickBound = this.onBodyClick.bind(this);
    // capture otherwise listener closes menu after quick menu opens
    document.body.addEventListener('click', this.onBodyClickBound, {
      passive: true,
      capture: true
    });
  }
  deregisterBodyClick() {
    document.body.removeEventListener('click', this.onBodyClickBound, {
      capture: true
    });
  }
  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
}
__decorate([i$3('.mdc-menu-surface')], MenuSurfaceBase.prototype, "mdcRoot", void 0);
__decorate([i$3('slot')], MenuSurfaceBase.prototype, "slotElement", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (isAbsolute) {
  if (this.mdcFoundation && !this.fixed) {
    this.mdcFoundation.setIsHoisted(isAbsolute);
  }
})], MenuSurfaceBase.prototype, "absolute", void 0);
__decorate([e$6({
  type: Boolean
})], MenuSurfaceBase.prototype, "fullwidth", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (isFixed) {
  if (this.mdcFoundation && !this.absolute) {
    this.mdcFoundation.setFixedPosition(isFixed);
  }
})], MenuSurfaceBase.prototype, "fixed", void 0);
__decorate([e$6({
  type: Number
}), observer(function (value) {
  if (this.mdcFoundation && this.y !== null && value !== null) {
    this.mdcFoundation.setAbsolutePosition(value, this.y);
    this.mdcFoundation.setAnchorMargin({
      left: value,
      top: this.y,
      right: -value,
      bottom: this.y
    });
  }
})], MenuSurfaceBase.prototype, "x", void 0);
__decorate([e$6({
  type: Number
}), observer(function (value) {
  if (this.mdcFoundation && this.x !== null && value !== null) {
    this.mdcFoundation.setAbsolutePosition(this.x, value);
    this.mdcFoundation.setAnchorMargin({
      left: this.x,
      top: value,
      right: -this.x,
      bottom: value
    });
  }
})], MenuSurfaceBase.prototype, "y", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (value) {
  if (this.mdcFoundation) {
    this.mdcFoundation.setQuickOpen(value);
  }
})], MenuSurfaceBase.prototype, "quick", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
}), observer(function (isOpen, wasOpen) {
  if (this.mdcFoundation) {
    if (isOpen) {
      this.mdcFoundation.open();
      // wasOpen helps with first render (when it is `undefined`) perf
    } else if (wasOpen !== undefined) {
      this.mdcFoundation.close();
    }
  }
})], MenuSurfaceBase.prototype, "open", void 0);
__decorate([e$6({
  type: Boolean
})], MenuSurfaceBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([t$2(), observer(function (value) {
  if (this.mdcFoundation) {
    if (value) {
      this.mdcFoundation.setAnchorCorner(value);
    } else {
      this.mdcFoundation.setAnchorCorner(value);
    }
  }
})], MenuSurfaceBase.prototype, "bitwiseCorner", void 0);
__decorate([e$6({
  type: String
}), observer(function (value) {
  if (this.mdcFoundation) {
    const isValidValue = value === 'START' || value === 'END';
    const isFirstTimeSet = this.previousMenuCorner === null;
    const cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner;
    const initiallySetToEnd = isFirstTimeSet && value === 'END';
    if (isValidValue && (cornerChanged || initiallySetToEnd)) {
      this.bitwiseCorner = this.bitwiseCorner ^ CornerBit.RIGHT;
      this.mdcFoundation.flipCornerHorizontally();
      this.previousMenuCorner = value;
    }
  }
})], MenuSurfaceBase.prototype, "menuCorner", void 0);
__decorate([e$6({
  type: String
}), observer(function (value) {
  if (this.mdcFoundation) {
    if (value) {
      let newCorner = stringToCorner[value];
      if (this.menuCorner === 'END') {
        newCorner = newCorner ^ CornerBit.RIGHT;
      }
      this.bitwiseCorner = newCorner;
    }
  }
})], MenuSurfaceBase.prototype, "corner", void 0);
__decorate([t$2()], MenuSurfaceBase.prototype, "styleTop", void 0);
__decorate([t$2()], MenuSurfaceBase.prototype, "styleLeft", void 0);
__decorate([t$2()], MenuSurfaceBase.prototype, "styleRight", void 0);
__decorate([t$2()], MenuSurfaceBase.prototype, "styleBottom", void 0);
__decorate([t$2()], MenuSurfaceBase.prototype, "styleMaxHeight", void 0);
__decorate([t$2()], MenuSurfaceBase.prototype, "styleTransformOrigin", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = i$6`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;

class MwcMenuSurface extends e(MenuSurfaceBase) {
  static get defineId() {
    return 'mwc-menu-surface';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([], MwcMenuSurface);
  }
  static get styles() {
    return styles$3;
  }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function debounceLayout(callback, waitInMS = 50) {
  let timeoutId;
  // tslint:disable-next-line
  return function (updateItems = true) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(updateItems);
    }, waitInMS);
  };
}
const isListItem = element => {
  return element.hasAttribute('mwc-list-item');
};
function clearAndCreateItemsReadyPromise() {
  const oldResolver = this.itemsReadyResolver;
  this.itemsReady = new Promise(res => {
    // TODO(b/175626389): Type '(value: never[] | PromiseLike<never[]>) => void'
    // is not assignable to type '(value?: never[] | PromiseLike<never[]> |
    // undefined) => void'.
    return this.itemsReadyResolver = res;
  });
  oldResolver();
}
/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires items-updated
 */
class ListBase extends BaseElement {
  constructor() {
    super();
    this.mdcAdapter = null;
    this.mdcFoundationClass = MDCListFoundation;
    this.activatable = false;
    this.multi = false;
    this.wrapFocus = false;
    this.itemRoles = null;
    this.innerRole = null;
    this.innerAriaLabel = null;
    this.rootTabbable = false;
    this.previousTabindex = null;
    this.noninteractive = false;
    this.itemsReadyResolver = () => {
      //
    };
    this.itemsReady = Promise.resolve([]);
    // tslint:enable:ban-ts-ignore
    this.items_ = [];
    const debouncedFunction = debounceLayout(this.layout.bind(this));
    this.debouncedLayout = (updateItems = true) => {
      clearAndCreateItemsReadyPromise.call(this);
      debouncedFunction(updateItems);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    // @ts-ignore
    const result = await super.getUpdateComplete();
    await this.itemsReady;
    return result;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var _a;
    const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
    const listItems = [];
    for (const node of nodes) {
      if (isListItem(node)) {
        listItems.push(node);
        node._managingList = this;
      }
      if (node.hasAttribute('divider') && !node.hasAttribute('role')) {
        node.setAttribute('role', 'separator');
      }
    }
    this.items_ = listItems;
    const selectedIndices = new Set();
    this.items_.forEach((item, index) => {
      if (this.itemRoles) {
        item.setAttribute('role', this.itemRoles);
      } else {
        item.removeAttribute('role');
      }
      if (item.selected) {
        selectedIndices.add(index);
      }
    });
    if (this.multi) {
      this.select(selectedIndices);
    } else {
      const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
      this.select(index);
    }
    const itemsUpdatedEv = new Event('items-updated', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(itemsUpdatedEv);
  }
  get selected() {
    const index = this.index;
    if (!isIndexSet(index)) {
      if (index === -1) {
        return null;
      }
      return this.items[index];
    }
    const selected = [];
    for (const entry of index) {
      selected.push(this.items[entry]);
    }
    return selected;
  }
  get index() {
    if (this.mdcFoundation) {
      return this.mdcFoundation.getSelectedIndex();
    }
    return -1;
  }
  render() {
    const role = this.innerRole === null ? undefined : this.innerRole;
    const ariaLabel = this.innerAriaLabel === null ? undefined : this.innerAriaLabel;
    const tabindex = this.rootTabbable ? '0' : '-1';
    return x`
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l(role)}"
          aria-label="${l(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var _a;
    const nodes = (_a = this.assignedElements) !== null && _a !== void 0 ? _a : [];
    if (this.emptyMessage !== undefined && nodes.length === 0) {
      return x`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
    }
    return null;
  }
  firstUpdated() {
    super.firstUpdated();
    if (!this.items.length) {
      // required because this is called before observers
      this.mdcFoundation.setMulti(this.multi);
      // for when children upgrade before list
      this.layout();
    }
  }
  onFocusIn(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      this.mdcFoundation.handleFocusIn(evt, index);
    }
  }
  onFocusOut(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      this.mdcFoundation.handleFocusOut(evt, index);
    }
  }
  onKeydown(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      const target = evt.target;
      const isRootListItem = isListItem(target);
      this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
    }
  }
  onRequestSelected(evt) {
    if (this.mdcFoundation) {
      let index = this.getIndexOfTarget(evt);
      // might happen in shady dom slowness. Recalc children
      if (index === -1) {
        this.layout();
        index = this.getIndexOfTarget(evt);
        // still not found; may not be mwc-list-item. Unsupported case.
        if (index === -1) {
          return;
        }
      }
      const element = this.items[index];
      if (element.disabled) {
        return;
      }
      const selected = evt.detail.selected;
      const source = evt.detail.source;
      this.mdcFoundation.handleSingleSelection(index, source === 'interaction', selected);
      evt.stopPropagation();
    }
  }
  getIndexOfTarget(evt) {
    const elements = this.items;
    const path = evt.composedPath();
    for (const pathItem of path) {
      let index = -1;
      if (isNodeElement(pathItem) && isListItem(pathItem)) {
        index = elements.indexOf(pathItem);
      }
      if (index !== -1) {
        return index;
      }
    }
    return -1;
  }
  createAdapter() {
    this.mdcAdapter = {
      getListItemCount: () => {
        if (this.mdcRoot) {
          return this.items.length;
        }
        return 0;
      },
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (index, attr) => {
        const listElement = this.mdcRoot;
        if (!listElement) {
          return '';
        }
        const element = this.items[index];
        return element ? element.getAttribute(attr) : '';
      },
      setAttributeForElementIndex: (index, attr, val) => {
        if (!this.mdcRoot) {
          return;
        }
        const element = this.items[index];
        if (element) {
          element.setAttribute(attr, val);
        }
      },
      focusItemAtIndex: index => {
        const element = this.items[index];
        if (element) {
          element.focus();
        }
      },
      setTabIndexForElementIndex: (index, value) => {
        const item = this.items[index];
        if (item) {
          item.tabindex = value;
        }
      },
      notifyAction: index => {
        const init = {
          bubbles: true,
          composed: true
        };
        init.detail = {
          index
        };
        const ev = new CustomEvent('action', init);
        this.dispatchEvent(ev);
      },
      notifySelected: (index, diff) => {
        const init = {
          bubbles: true,
          composed: true
        };
        init.detail = {
          index,
          diff
        };
        const ev = new CustomEvent('selected', init);
        this.dispatchEvent(ev);
      },
      isFocusInsideList: () => {
        return doesElementContainFocus(this);
      },
      isRootFocused: () => {
        const mdcRoot = this.mdcRoot;
        const root = mdcRoot.getRootNode();
        return root.activeElement === mdcRoot;
      },
      setDisabledStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.disabled = value;
      },
      getDisabledStateForElementIndex: index => {
        const item = this.items[index];
        if (!item) {
          return false;
        }
        return item.disabled;
      },
      setSelectedStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.selected = value;
      },
      getSelectedStateForElementIndex: index => {
        const item = this.items[index];
        if (!item) {
          return false;
        }
        return item.selected;
      },
      setActivatedStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.activated = value;
      }
    };
    return this.mdcAdapter;
  }
  selectUi(index, activate = false) {
    const item = this.items[index];
    if (item) {
      item.selected = true;
      item.activated = activate;
    }
  }
  deselectUi(index) {
    const item = this.items[index];
    if (item) {
      item.selected = false;
      item.activated = false;
    }
  }
  select(index) {
    if (!this.mdcFoundation) {
      return;
    }
    this.mdcFoundation.setSelectedIndex(index);
  }
  toggle(index, force) {
    if (this.multi) {
      this.mdcFoundation.toggleMultiAtIndex(index, force);
    }
  }
  onListItemConnected(e) {
    const target = e.target;
    this.layout(this.items.indexOf(target) === -1);
  }
  layout(updateItems = true) {
    if (updateItems) {
      this.updateItems();
    }
    const first = this.items[0];
    for (const item of this.items) {
      item.tabindex = -1;
    }
    if (first) {
      if (this.noninteractive) {
        if (!this.previousTabindex) {
          this.previousTabindex = first;
        }
      } else {
        first.tabindex = 0;
      }
    }
    this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot) {
      return -1;
    }
    if (!this.items.length) {
      return -1;
    }
    const activeElementPath = deepActiveElementPath();
    if (!activeElementPath.length) {
      return -1;
    }
    for (let i = activeElementPath.length - 1; i >= 0; i--) {
      const activeItem = activeElementPath[i];
      if (isListItem(activeItem)) {
        return this.items.indexOf(activeItem);
      }
    }
    return -1;
  }
  focusItemAtIndex(index) {
    for (const item of this.items) {
      if (item.tabindex === 0) {
        item.tabindex = -1;
        break;
      }
    }
    this.items[index].tabindex = 0;
    this.items[index].focus();
  }
  focus() {
    const root = this.mdcRoot;
    if (root) {
      root.focus();
    }
  }
  blur() {
    const root = this.mdcRoot;
    if (root) {
      root.blur();
    }
  }
}
__decorate([e$6({
  type: String
})], ListBase.prototype, "emptyMessage", void 0);
__decorate([i$3('.mdc-deprecated-list')], ListBase.prototype, "mdcRoot", void 0);
__decorate([o$1('', true, '*')], ListBase.prototype, "assignedElements", void 0);
__decorate([o$1('', true, '[tabindex="0"]')], ListBase.prototype, "tabbableElements", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (value) {
  if (this.mdcFoundation) {
    this.mdcFoundation.setUseActivatedClass(value);
  }
})], ListBase.prototype, "activatable", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (newValue, oldValue) {
  if (this.mdcFoundation) {
    this.mdcFoundation.setMulti(newValue);
  }
  if (oldValue !== undefined) {
    this.layout();
  }
})], ListBase.prototype, "multi", void 0);
__decorate([e$6({
  type: Boolean
}), observer(function (value) {
  if (this.mdcFoundation) {
    this.mdcFoundation.setWrapFocus(value);
  }
})], ListBase.prototype, "wrapFocus", void 0);
__decorate([e$6({
  type: String
}), observer(function (_newValue, oldValue) {
  if (oldValue !== undefined) {
    this.updateItems();
  }
})], ListBase.prototype, "itemRoles", void 0);
__decorate([e$6({
  type: String
})], ListBase.prototype, "innerRole", void 0);
__decorate([e$6({
  type: String
})], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([e$6({
  type: Boolean
})], ListBase.prototype, "rootTabbable", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
}), observer(function (value) {
  var _a, _b;
  if (value) {
    const tabbable = (_b = (_a = this.tabbableElements) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    this.previousTabindex = tabbable;
    if (tabbable) {
      tabbable.setAttribute('tabindex', '-1');
    }
  } else if (!value && this.previousTabindex) {
    this.previousTabindex.setAttribute('tabindex', '0');
    this.previousTabindex = null;
  }
})], ListBase.prototype, "noninteractive", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$2 = i$6`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

class MwcList extends e(ListBase) {
  static get defineId() {
    return 'mwc-list';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([MwcListItem], MwcList);
  }
  static get styles() {
    return styles$2;
  }
}

class MwcMenu extends e(MenuBase) {
  static get defineId() {
    return 'mwc-menu';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([MwcMenuSurface, MwcList], MwcMenu);
  }
  static get styles() {
    return styles$4;
  }
}

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCNotchedOutlineFoundation = /** @class */function (_super) {
  __extends(MDCNotchedOutlineFoundation, _super);
  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function () {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function () {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function () {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setNotchWidthProperty: function () {
          return undefined;
        },
        removeNotchWidthProperty: function () {
          return undefined;
        }
      };
      // tslint:enable:object-literal-sort-keys
    },

    enumerable: false,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */
  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    if (notchWidth > 0) {
      notchWidth += numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter.setNotchWidthProperty(notchWidth);
    this.adapter.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */
  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter.removeClass(OUTLINE_NOTCHED);
    this.adapter.removeNotchWidthProperty();
  };
  return MDCNotchedOutlineFoundation;
}(MDCFoundation);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class NotchedOutlineBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCNotchedOutlineFoundation;
    this.width = 0;
    this.open = false;
    this.lastOpen = this.open;
  }
  createAdapter() {
    return {
      addClass: className => this.mdcRoot.classList.add(className),
      removeClass: className => this.mdcRoot.classList.remove(className),
      setNotchWidthProperty: width => this.notchElement.style.setProperty('width', `${width}px`),
      removeNotchWidthProperty: () => this.notchElement.style.removeProperty('width')
    };
  }
  openOrClose(shouldOpen, width) {
    if (!this.mdcFoundation) {
      return;
    }
    if (shouldOpen && width !== undefined) {
      this.mdcFoundation.notch(width);
    } else {
      this.mdcFoundation.closeNotch();
    }
  }
  render() {
    this.openOrClose(this.open, this.width);
    const classes = o({
      'mdc-notched-outline--notched': this.open
    });
    return x`
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
  }
}
__decorate([i$3('.mdc-notched-outline')], NotchedOutlineBase.prototype, "mdcRoot", void 0);
__decorate([e$6({
  type: Number
})], NotchedOutlineBase.prototype, "width", void 0);
__decorate([e$6({
  type: Boolean,
  reflect: true
})], NotchedOutlineBase.prototype, "open", void 0);
__decorate([i$3('.mdc-notched-outline__notch')], NotchedOutlineBase.prototype, "notchElement", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = i$6`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

class MwcNotchedOutline extends e(NotchedOutlineBase) {
  static get defineId() {
    return 'mwc-notched-outline';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([], MwcNotchedOutline);
  }
  static get styles() {
    return styles$1;
  }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = i$6`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

class MwcIcon extends e(s) {
  static get defineId() {
    return 'mwc-icon';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([], MwcIcon);
  }
  render() {
    return x`<span><slot></slot></span>`;
  }
  static get styles() {
    return styles;
  }
}

class MwcSelect extends e(SelectBase) {
  static get defineId() {
    return 'mwc-select';
  }
  static get elementDefinitions() {
    return buildElementDefinitions([MwcMenu, MwcIcon, MwcNotchedOutline], MwcSelect);
  }
  static get styles() {
    return styles$5;
  }
}

const styleEditor = i$6 `
  .entity {
    display: flex;
    align-items: center;
  }

  ha-icon {
    display: flex;
  }

  .card-title,
  mwc-select {
    width: 100%;
  }

  .entity .handle {
    padding-right: 8px;
    cursor: move;
  }

  .entity .handle > * {
    pointer-events: none;
  }

  .special-row {
    height: 60px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    overflow-x: hidden;
  }

  .special-row div {
    display: flex;
    flex-direction: column;
  }

  .remove-icon,
  .edit-icon {
    --mdc-icon-button-size: 36px;
    color: var(--secondary-text-color);
  }

  .secondary {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`;

var MediaTrackerCardEntityEditor_1;
let MediaTrackerCardEntityEditor = MediaTrackerCardEntityEditor_1 = class MediaTrackerCardEntityEditor extends e(s) {
    static get elementDefinitions() {
        return buildElementDefinitions([
            globalElementLoader("ha-checkbox"),
            globalElementLoader("ha-textfield"),
            globalElementLoader("ha-formfield"),
            globalElementLoader("ha-icon-button"),
            globalElementLoader("ha-icon"),
            MwcListItem,
            MwcSelect,
        ], MediaTrackerCardEntityEditor_1);
    }
    setConfig(config) {
        this.config = Object.assign({ elementConfig: {
                name: "",
            } }, config);
    }
    render() {
        var _a, _b;
        const customLocalize = setupCustomlocalize(this.hass);
        return x `
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${this.hass.localize("ui.common.back")}
            @click=${this._goBack}
          >
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </ha-icon-button>
          <span slot="title">${customLocalize(`editor.title`)}</span>
        </div>
      </div>

      <div class="entity-editor">
        <ha-textfield
          class="entity-title"
          .label=${customLocalize("editor.name")}
          .value="${(_b = (_a = this.config.elementConfig) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ""}"
          .configValue="${"name"}"
          @change="${this._valueChanged}"
        ></ha-textfield>
      </div>
    `;
    }
    _goBack() {
        ne(this, "go-back");
    }
    _valueChanged(ev) {
        if (!this.config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (target.configValue) {
            if (target.value === "") {
                const tmpConfig = Object.assign({}, this.config.elementConfig);
                delete tmpConfig[target.configValue];
                this.config.elementConfig = tmpConfig;
            }
            else {
                const elementConfig = Object.assign(Object.assign({}, this.config.elementConfig), { [target.configValue]: target.checked !== undefined ? target.checked : target.value });
                this.config.elementConfig = Object.assign({}, elementConfig);
            }
        }
        ne(this, "config-changed", { config: this.config.elementConfig });
    }
    static get styles() {
        return i$6 `
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }

      .entity-editor {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      mwc-select {
        width: 100%;
      }

      ha-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
    }
};
__decorate([
    e$6({ attribute: false })
], MediaTrackerCardEntityEditor.prototype, "hass", void 0);
__decorate([
    e$6({ attribute: false })
], MediaTrackerCardEntityEditor.prototype, "config", void 0);
MediaTrackerCardEntityEditor = MediaTrackerCardEntityEditor_1 = __decorate([
    e$7("mediatracker-card-entity-editor")
], MediaTrackerCardEntityEditor);

var MediaTrackerCardEditor_1;
let Sortable$1;
let MediaTrackerCardEditor = MediaTrackerCardEditor_1 = class MediaTrackerCardEditor extends e(s) {
    constructor() {
        super(...arguments);
        this._attached = false;
        this._renderEmptySortable = false;
    }
    static get elementDefinitions() {
        return buildElementDefinitions([
            globalElementLoader("ha-checkbox"),
            globalElementLoader("ha-textfield"),
            globalElementLoader("ha-formfield"),
            globalElementLoader("ha-icon-button"),
            globalElementLoader("ha-icon"),
            globalElementLoader("mediatracker-card-entity-editor"),
            MwcListItem,
            MwcSelect,
        ], MediaTrackerCardEditor_1);
    }
    static get styles() {
        return [styleEditor];
    }
    setConfig(config) {
        this._config = Object.assign({ name: "" }, config);
        this._entities = config.entities;
    }
    render() {
        if (!this.hass || !this._entities) {
            return x ``;
        }
        const customLocalize = setupCustomlocalize(this.hass);
        const eventStyleChoices = ["backdrop", "poster", "plain"];
        const sourceLinkChoices = ["primary", "all"];
        const descriptionChoices = ["today", "week", "all"];
        if (this._subElementEditorConfig) {
            return x `
        <mediatracker-card-entity-editor
          .hass=${this.hass}
          .config=${this._subElementEditorConfig}
          @go-back=${this._goBack}
          @config-changed=${this._handleSubElementChanged}
          @edit-detail-element=${this._editDetailElement}
        >
        </mediatracker-card-entity-editor>
      `;
        }
        // Filter states to only include calendar entitie.
        const calendarEntities = Object.values(this.hass.states)
            .filter((entity) => entity.entity_id.startsWith("calendar."))
            .map((sensor) => sensor.entity_id);
        return x `
      <div class="card-config">
        <div style="margin-top: 1rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
          <ha-textfield
            class="card-title"
            .label=${customLocalize("editor.name")}
            .value="${this._config.name}"
            .configValue="${"name"}"
            @change="${this._valueChanged}"
          ></ha-textfield>

          <mwc-select
            .label=${customLocalize("editor.style.title")}
            .configValue=${"style"}
            .value=${this._config.style}
            @selected="${this._valueChanged}"
            @closed="${(e) => e.stopPropagation()}"
            fixedMenuPosition
          >
            <mwc-list-item></mwc-list-item>
            ${eventStyleChoices.map((value) => x `
                <mwc-list-item .value=${value}
                  >${customLocalize(`editor.style.${value}`)}</mwc-list-item
                >
              `)}
          </mwc-select>

          <ha-textfield
            class="refresh-interval"
            .label=${customLocalize("editor.refresh_interval")}
            .value="${this._config.refresh_interval}"
            .configValue="${"refresh_interval"}"
            @change="${this._valueChanged}"
          ></ha-textfield>

          <ha-textfield
            class="refresh-interval"
            .label=${customLocalize("editor.number_of_days")}
            .value="${this._config.number_of_days}"
            .configValue="${"number_of_days"}"
            @change="${this._valueChanged}"
          ></ha-textfield>

          <mwc-select
            .label=${customLocalize("editor.description.title")}
            .configValue=${"description"}
            .value=${this._config.description}
            @selected="${this._valueChanged}"
            @closed="${(e) => e.stopPropagation()}"
            fixedMenuPosition
          >
            <mwc-list-item></mwc-list-item>
            ${descriptionChoices.map((value) => x `
                <mwc-list-item .value=${value}
                  >${customLocalize(`editor.description.${value}`)}</mwc-list-item
                >
              `)}
          </mwc-select>

          <mwc-select
            .label=${customLocalize("editor.source_links.title")}
            .configValue=${"source_links"}
            .value=${this._config.source_links}
            @selected="${this._valueChanged}"
            @closed="${(e) => e.stopPropagation()}"
            fixedMenuPosition
          >
            <mwc-list-item></mwc-list-item>
            ${sourceLinkChoices.map((value) => x `
                <mwc-list-item .value=${value}
                  >${customLocalize(`editor.source_links.${value}`)}</mwc-list-item
                >
              `)}
          </mwc-select>

          <ha-formfield .label=${customLocalize("editor.show_rating")}>
            <ha-checkbox
              @change="${this._valueChanged}"
              .checked=${this._config.show_rating}
              .configValue="${"show_rating"}"
            ></ha-checkbox>
          </ha-formfield>

          <ha-formfield .label=${customLocalize("editor.human_readable_countdown")}>
            <ha-checkbox
              @change="${this._valueChanged}"
              .checked=${this._config.human_readable_countdown}
              .configValue="${"human_readable_countdown"}"
            ></ha-checkbox>
          </ha-formfield>

          <ha-formfield .label=${customLocalize("editor.constrict_height")}>
            <ha-checkbox
              @change="${this._valueChanged}"
              .checked=${this._config.constrict_height}
              .configValue="${"constrict_height"}"
            ></ha-checkbox>
          </ha-formfield>
        </div>

        <div class="entities">
          ${i$1([this._entities, this._renderEmptySortable], () => {
            var _a;
            return this._renderEmptySortable
                ? ""
                : (_a = this._entities) === null || _a === void 0 ? void 0 : _a.map((calendar, index) => x `
                    <div class="entity">
                      <div class="handle">
                        <ha-icon icon="mdi:drag"></ha-icon>
                      </div>
                      ${x `
                        <div class="special-row">
                          <div>
                            <span
                              >${calendar.name ? calendar.name : calendar.entity}</span
                            >
                            <span class="secondary">${calendar.entity}</span>
                          </div>
                        </div>
                      `}
                      <ha-icon-button
                        label="Remove"
                        class="remove-icon"
                        .index=${index}
                        @click=${this._removeRow}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </ha-icon-button>

                      <ha-icon-button
                        label="Edit"
                        class="edit-icon"
                        .index=${index}
                        @click=${this._editRow}
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </ha-icon-button>
                    </div>
                  `);
        })}
        </div>

        <mwc-select
          label="Entity"
          @selected="${this._addEntity}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          ${calendarEntities.map((entity) => x `
              <mwc-list-item .value=${entity}> ${entity} </mwc-list-item>
            `)}
        </mwc-select>
      </div>
    `;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (this[`_${target.configValue}`] === target.value) {
            return;
        }
        if (target.configValue) {
            if (target.value === "") {
                delete this._config[target.configValue];
            }
            else {
                this._config = Object.assign(Object.assign({}, this._config), { [target.configValue]: target.checked !== undefined ? target.checked : target.value });
            }
        }
        ne(this, "config-changed", { config: this._config });
    }
    _handleSubElementChanged(ev) {
        ev.stopPropagation();
        if (!this._config || !this.hass) {
            return;
        }
        const value = ev.detail.config;
        const newConfigEntities = this._config.entities.concat();
        if (!value) {
            newConfigEntities.splice(this._subElementEditorConfig.index, 1);
            this._goBack();
        }
        else {
            newConfigEntities[this._subElementEditorConfig.index] = value;
        }
        this._config = Object.assign(Object.assign({}, this._config), { entities: newConfigEntities });
        this._subElementEditorConfig = Object.assign(Object.assign({}, this._subElementEditorConfig), { elementConfig: value });
        ne(this, "config-changed", { config: this._config });
    }
    connectedCallback() {
        super.connectedCallback();
        this._attached = true;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._attached = false;
    }
    updated(changedProps) {
        var _a;
        super.updated(changedProps);
        const attachedChanged = changedProps.has("_attached");
        const entitiesChanged = changedProps.has("entities");
        if (!entitiesChanged && !attachedChanged) {
            return;
        }
        if (attachedChanged && !this._attached) {
            // Tear down sortable, if available
            (_a = this._sortable) === null || _a === void 0 ? void 0 : _a.destroy();
            this._sortable = undefined;
            return;
        }
        if (!this._sortable && this._entities) {
            this._createSortable();
            return;
        }
        if (entitiesChanged) {
            this._handleEntitiesChanged();
        }
    }
    async _handleEntitiesChanged() {
        var _a;
        this._renderEmptySortable = true;
        await this.updateComplete;
        const container = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".entities");
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
        this._renderEmptySortable = false;
    }
    async _createSortable() {
        var _a;
        if (!Sortable$1) {
            const sortableImport = await Promise.resolve().then(function () { return sortable_core_esm; });
            Sortable$1 = sortableImport.Sortable;
            Sortable$1.mount(sortableImport.OnSpill);
            Sortable$1.mount(sortableImport.AutoScroll());
        }
        const element = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".entities");
        if (!element)
            return;
        this._sortable = new Sortable$1(element, {
            animation: 150,
            fallbackClass: "sortable-fallback",
            handle: ".handle",
            onEnd: async (evt) => this._rowMoved(evt),
        });
    }
    _rowMoved(ev) {
        if (ev.oldIndex === ev.newIndex)
            return;
        const newEntities = this._entities.concat();
        newEntities.splice(ev.newIndex, 0, newEntities.splice(ev.oldIndex, 1)[0]);
        this._valueChanged({
            target: { configValue: "entities", value: newEntities },
        });
    }
    _removeRow(ev) {
        var _a, _b;
        const index = ((_a = ev.currentTarget) === null || _a === void 0 ? void 0 : _a.index) || 0;
        const newEntities = (_b = this._entities) === null || _b === void 0 ? void 0 : _b.concat();
        newEntities === null || newEntities === void 0 ? void 0 : newEntities.splice(index, 1);
        this._valueChanged({
            target: { configValue: "entities", value: newEntities },
        });
    }
    async _addEntity(ev) {
        const target = ev.target;
        const value = target.value;
        if (value === "") {
            return;
        }
        const newEntities = this._entities.concat({
            entity: value,
        });
        ev.target.value = "";
        this._valueChanged({
            target: { configValue: "entities", value: newEntities },
        });
    }
    _editRow(ev) {
        const index = ev.currentTarget.index;
        this._subElementEditorConfig = {
            index,
            elementConfig: this._entities[index],
        };
    }
    _goBack() {
        this._subElementEditorConfig = undefined;
    }
    _editDetailElement(ev) {
        this._subElementEditorConfig = ev.detail.subElementConfig;
    }
};
__decorate([
    e$6({ attribute: false })
], MediaTrackerCardEditor.prototype, "hass", void 0);
__decorate([
    t$2()
], MediaTrackerCardEditor.prototype, "_config", void 0);
__decorate([
    t$2()
], MediaTrackerCardEditor.prototype, "_attached", void 0);
__decorate([
    t$2()
], MediaTrackerCardEditor.prototype, "_renderEmptySortable", void 0);
__decorate([
    t$2()
], MediaTrackerCardEditor.prototype, "_subElementEditorConfig", void 0);
MediaTrackerCardEditor = MediaTrackerCardEditor_1 = __decorate([
    e$7("mediatracker-card-editor")
], MediaTrackerCardEditor);

var mediatrackerCardEditor = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get MediaTrackerCardEditor () { return MediaTrackerCardEditor; }
});

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.0";
function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/
el, /**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/
el, /**String*/
selector, /**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */

function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */

function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */

function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */

function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */

function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */

  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */

function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */

function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
var expando = 'Sortable' + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation

        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate

        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined

      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)
  _silent = false,
  savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return; // false when <= IE11

    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position

if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */

function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options); // Bind all private methods

  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode

  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events

  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.

    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable

    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown

    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent

    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`

    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */
  evt, /** Touch */
  touch, /** HTMLElement */
  target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove

        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend

        _this._triggerDragStart(evt, touch); // Drag start event

        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item

        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"

      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag

        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */
  evt, /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/
  evt, /**boolean*/
  fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround

    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/
  evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state

    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)

    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation

        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element

      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback

      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted

        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted

    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization

        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target

        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert

        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)

          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/
  evt) {
    var el = this.el,
      options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId); // Unbind events

    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event

            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another

            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting

          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes

    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */

function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */

function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:

if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils

Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */

Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */

Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export

Sortable.version = version;
var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});
var OnSpill = [Remove, Revert];
var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      _ref5.sortable;
        var cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled

        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out

        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden

            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;
              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }
              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      } // Multi-drag drop

      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed

            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)

          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      } // Remove clones if necessary

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */

function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

var sortable_core_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AutoScroll: AutoScrollPlugin,
    MultiDrag: MultiDragPlugin,
    OnSpill: OnSpill,
    Sortable: Sortable,
    Swap: SwapPlugin,
    default: Sortable
});

export { MediaTrackerCard };
