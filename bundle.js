(() => {
  // <stdin>
  var container = document.querySelector(".container");
  var allMenus = document.querySelectorAll(".menu");
  document.body.addEventListener("click", () => {
    allMenus.forEach((menu) => {
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      }
    });
  });
  window.addEventListener("resize", () => {
    allMenus.forEach((menu) => {
      menu.classList.remove("open");
    });
  });
  allMenus.forEach((menu) => {
    const trigger = menu.querySelector(".menu__trigger");
    const dropdown = menu.querySelector(".menu__dropdown");
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
      } else {
        allMenus.forEach((m) => m.classList.remove("open"));
        menu.classList.add("open");
      }
      if (dropdown.getBoundingClientRect().right > container.getBoundingClientRect().right) {
        dropdown.style.left = "auto";
        dropdown.style.right = 0;
      }
    });
    dropdown.addEventListener("click", (e) => e.stopPropagation());
  });
})();

;
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
      var Prism = function(u) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, e = {}, M = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e2(n2) {
          return n2 instanceof W ? new W(n2.type, e2(n2.content), n2.alias) : Array.isArray(n2) ? n2.map(e2) : n2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }, type: function(e2) {
          return Object.prototype.toString.call(e2).slice(8, -1);
        }, objId: function(e2) {
          return e2.__id || Object.defineProperty(e2, "__id", { value: ++n }), e2.__id;
        }, clone: function t2(e2, r2) {
          var a2, n2;
          switch (r2 = r2 || {}, M.util.type(e2)) {
            case "Object":
              if (n2 = M.util.objId(e2), r2[n2])
                return r2[n2];
              for (var i2 in a2 = {}, r2[n2] = a2, e2)
                e2.hasOwnProperty(i2) && (a2[i2] = t2(e2[i2], r2));
              return a2;
            case "Array":
              return n2 = M.util.objId(e2), r2[n2] ? r2[n2] : (a2 = [], r2[n2] = a2, e2.forEach(function(e3, n3) {
                a2[n3] = t2(e3, r2);
              }), a2);
            default:
              return e2;
          }
        }, getLanguage: function(e2) {
          for (; e2 && !c.test(e2.className); )
            e2 = e2.parentElement;
          return e2 ? (e2.className.match(c) || [, "none"])[1].toLowerCase() : "none";
        }, currentScript: function() {
          if ("undefined" == typeof document)
            return null;
          if ("currentScript" in document)
            return document.currentScript;
          try {
            throw new Error();
          } catch (e2) {
            var n2 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e2.stack) || [])[1];
            if (n2) {
              var t2 = document.getElementsByTagName("script");
              for (var r2 in t2)
                if (t2[r2].src == n2)
                  return t2[r2];
            }
            return null;
          }
        }, isActive: function(e2, n2, t2) {
          for (var r2 = "no-" + n2; e2; ) {
            var a2 = e2.classList;
            if (a2.contains(n2))
              return true;
            if (a2.contains(r2))
              return false;
            e2 = e2.parentElement;
          }
          return !!t2;
        } }, languages: { plain: e, plaintext: e, text: e, txt: e, extend: function(e2, n2) {
          var t2 = M.util.clone(M.languages[e2]);
          for (var r2 in n2)
            t2[r2] = n2[r2];
          return t2;
        }, insertBefore: function(t2, e2, n2, r2) {
          var a2 = (r2 = r2 || M.languages)[t2], i2 = {};
          for (var l in a2)
            if (a2.hasOwnProperty(l)) {
              if (l == e2)
                for (var o in n2)
                  n2.hasOwnProperty(o) && (i2[o] = n2[o]);
              n2.hasOwnProperty(l) || (i2[l] = a2[l]);
            }
          var s = r2[t2];
          return r2[t2] = i2, M.languages.DFS(M.languages, function(e3, n3) {
            n3 === s && e3 != t2 && (this[e3] = i2);
          }), i2;
        }, DFS: function e2(n2, t2, r2, a2) {
          a2 = a2 || {};
          var i2 = M.util.objId;
          for (var l in n2)
            if (n2.hasOwnProperty(l)) {
              t2.call(n2, l, n2[l], r2 || l);
              var o = n2[l], s = M.util.type(o);
              "Object" !== s || a2[i2(o)] ? "Array" !== s || a2[i2(o)] || (a2[i2(o)] = true, e2(o, t2, l, a2)) : (a2[i2(o)] = true, e2(o, t2, null, a2));
            }
        } }, plugins: {}, highlightAll: function(e2, n2) {
          M.highlightAllUnder(document, e2, n2);
        }, highlightAllUnder: function(e2, n2, t2) {
          var r2 = { callback: t2, container: e2, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
          M.hooks.run("before-highlightall", r2), r2.elements = Array.prototype.slice.apply(r2.container.querySelectorAll(r2.selector)), M.hooks.run("before-all-elements-highlight", r2);
          for (var a2, i2 = 0; a2 = r2.elements[i2++]; )
            M.highlightElement(a2, true === n2, r2.callback);
        }, highlightElement: function(e2, n2, t2) {
          var r2 = M.util.getLanguage(e2), a2 = M.languages[r2];
          e2.className = e2.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r2;
          var i2 = e2.parentElement;
          i2 && "pre" === i2.nodeName.toLowerCase() && (i2.className = i2.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r2);
          var l = { element: e2, language: r2, grammar: a2, code: e2.textContent };
          function o(e3) {
            l.highlightedCode = e3, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t2 && t2.call(l.element);
          }
          if (M.hooks.run("before-sanity-check", l), (i2 = l.element.parentElement) && "pre" === i2.nodeName.toLowerCase() && !i2.hasAttribute("tabindex") && i2.setAttribute("tabindex", "0"), !l.code)
            return M.hooks.run("complete", l), void (t2 && t2.call(l.element));
          if (M.hooks.run("before-highlight", l), l.grammar)
            if (n2 && u.Worker) {
              var s = new Worker(M.filename);
              s.onmessage = function(e3) {
                o(e3.data);
              }, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: true }));
            } else
              o(M.highlight(l.code, l.grammar, l.language));
          else
            o(M.util.encode(l.code));
        }, highlight: function(e2, n2, t2) {
          var r2 = { code: e2, grammar: n2, language: t2 };
          return M.hooks.run("before-tokenize", r2), r2.tokens = M.tokenize(r2.code, r2.grammar), M.hooks.run("after-tokenize", r2), W.stringify(M.util.encode(r2.tokens), r2.language);
        }, tokenize: function(e2, n2) {
          var t2 = n2.rest;
          if (t2) {
            for (var r2 in t2)
              n2[r2] = t2[r2];
            delete n2.rest;
          }
          var a2 = new i();
          return I(a2, a2.head, e2), function e3(n3, t3, r3, a3, i2, l) {
            for (var o in r3)
              if (r3.hasOwnProperty(o) && r3[o]) {
                var s = r3[o];
                s = Array.isArray(s) ? s : [s];
                for (var u2 = 0; u2 < s.length; ++u2) {
                  if (l && l.cause == o + "," + u2)
                    return;
                  var c2 = s[u2], g = c2.inside, f = !!c2.lookbehind, h = !!c2.greedy, d = c2.alias;
                  if (h && !c2.pattern.global) {
                    var p = c2.pattern.toString().match(/[imsuy]*$/)[0];
                    c2.pattern = RegExp(c2.pattern.source, p + "g");
                  }
                  for (var v = c2.pattern || c2, m = a3.next, y = i2; m !== t3.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                    var b = m.value;
                    if (t3.length > n3.length)
                      return;
                    if (!(b instanceof W)) {
                      var k, x = 1;
                      if (h) {
                        if (!(k = z(v, y, n3, f)))
                          break;
                        var w = k.index, A = k.index + k[0].length, P = y;
                        for (P += m.value.length; P <= w; )
                          m = m.next, P += m.value.length;
                        if (P -= m.value.length, y = P, m.value instanceof W)
                          continue;
                        for (var E = m; E !== t3.tail && (P < A || "string" == typeof E.value); E = E.next)
                          x++, P += E.value.length;
                        x--, b = n3.slice(y, P), k.index -= y;
                      } else if (!(k = z(v, 0, b, f)))
                        continue;
                      var w = k.index, S = k[0], O = b.slice(0, w), L = b.slice(w + S.length), N = y + b.length;
                      l && N > l.reach && (l.reach = N);
                      var j = m.prev;
                      O && (j = I(t3, j, O), y += O.length), q(t3, j, x);
                      var C = new W(o, g ? M.tokenize(S, g) : S, d, S);
                      if (m = I(t3, j, C), L && I(t3, m, L), 1 < x) {
                        var _ = { cause: o + "," + u2, reach: N };
                        e3(n3, t3, r3, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach);
                      }
                    }
                  }
                }
              }
          }(e2, a2, n2, a2.head, 0), function(e3) {
            var n3 = [], t3 = e3.head.next;
            for (; t3 !== e3.tail; )
              n3.push(t3.value), t3 = t3.next;
            return n3;
          }(a2);
        }, hooks: { all: {}, add: function(e2, n2) {
          var t2 = M.hooks.all;
          t2[e2] = t2[e2] || [], t2[e2].push(n2);
        }, run: function(e2, n2) {
          var t2 = M.hooks.all[e2];
          if (t2 && t2.length)
            for (var r2, a2 = 0; r2 = t2[a2++]; )
              r2(n2);
        } }, Token: W };
        function W(e2, n2, t2, r2) {
          this.type = e2, this.content = n2, this.alias = t2, this.length = 0 | (r2 || "").length;
        }
        function z(e2, n2, t2, r2) {
          e2.lastIndex = n2;
          var a2 = e2.exec(t2);
          if (a2 && r2 && a2[1]) {
            var i2 = a2[1].length;
            a2.index += i2, a2[0] = a2[0].slice(i2);
          }
          return a2;
        }
        function i() {
          var e2 = { value: null, prev: null, next: null }, n2 = { value: null, prev: e2, next: null };
          e2.next = n2, this.head = e2, this.tail = n2, this.length = 0;
        }
        function I(e2, n2, t2) {
          var r2 = n2.next, a2 = { value: t2, prev: n2, next: r2 };
          return n2.next = a2, r2.prev = a2, e2.length++, a2;
        }
        function q(e2, n2, t2) {
          for (var r2 = n2.next, a2 = 0; a2 < t2 && r2 !== e2.tail; a2++)
            r2 = r2.next;
          (n2.next = r2).prev = n2, e2.length -= a2;
        }
        if (u.Prism = M, W.stringify = function n2(e2, t2) {
          if ("string" == typeof e2)
            return e2;
          if (Array.isArray(e2)) {
            var r2 = "";
            return e2.forEach(function(e3) {
              r2 += n2(e3, t2);
            }), r2;
          }
          var a2 = { type: e2.type, content: n2(e2.content, t2), tag: "span", classes: ["token", e2.type], attributes: {}, language: t2 }, i2 = e2.alias;
          i2 && (Array.isArray(i2) ? Array.prototype.push.apply(a2.classes, i2) : a2.classes.push(i2)), M.hooks.run("wrap", a2);
          var l = "";
          for (var o in a2.attributes)
            l += " " + o + '="' + (a2.attributes[o] || "").replace(/"/g, "&quot;") + '"';
          return "<" + a2.tag + ' class="' + a2.classes.join(" ") + '"' + l + ">" + a2.content + "</" + a2.tag + ">";
        }, !u.document)
          return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function(e2) {
            var n2 = JSON.parse(e2.data), t2 = n2.language, r2 = n2.code, a2 = n2.immediateClose;
            u.postMessage(M.highlight(r2, M.languages[t2], t2)), a2 && u.close();
          }, false)), M;
        var t = M.util.currentScript();
        function r() {
          M.manual || M.highlightAll();
        }
        if (t && (M.filename = t.src, t.hasAttribute("data-manual") && (M.manual = true)), !M.manual) {
          var a = document.readyState;
          "loading" === a || "interactive" === a && t && t.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16);
        }
        return M;
      }(_self);
      "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
      Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
        "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
      }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(a, e) {
        var s = {};
        s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
        t["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
        var n = {};
        n[a] = { pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
          return a;
        }), "i"), lookbehind: true, greedy: true, inside: t }, Prism.languages.insertBefore("markup", "cdata", n);
      } }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(`(^|["'\\s])(?:` + a + `)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`, "i"), lookbehind: true, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: true, alias: [e, "language-" + e], inside: Prism.languages[e] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
      } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
      !function(s) {
        var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + e.source + `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`, "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + e.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"), lookbehind: true }, string: { pattern: e, greedy: true }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: true }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: true }, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css;
        var t = s.languages.markup;
        t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
      }(Prism);
      Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
      Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: true, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
      Prism.languages.actionscript = Prism.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|override|set|static)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), Prism.languages.actionscript["class-name"].alias = "function", Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: true, inside: Prism.languages.markup } });
      Prism.languages.apacheconf = { comment: /#.*/, "directive-inline": { pattern: /(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im, lookbehind: true, alias: "property" }, "directive-block": { pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i, inside: { "directive-block": { pattern: /^<\/?\w+/, inside: { punctuation: /^<\/?/ }, alias: "tag" }, "directive-block-parameter": { pattern: /.*[^>]/, inside: { punctuation: /:/, string: { pattern: /("|').*\1/, inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ } } }, alias: "attr-value" }, punctuation: />/ }, alias: "tag" }, "directive-flags": { pattern: /\[(?:[\w=],?)+\]/, alias: "keyword" }, string: { pattern: /("|').*\1/, inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ } }, variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/, regex: /\^?.*\$|\^.*\$?/ };
      Prism.languages.applescript = { comment: [/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/, /--.+/, /#.+/], string: /"(?:\\.|[^"\\\r\n])*"/, number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i, operator: [/[&=≠≤≥*+\-\/÷^]|[<>]=?/, /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/], keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/, class: { pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/, alias: "builtin" }, punctuation: /[{}():,¬«»《》]/ };
      !function(e) {
        var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: true, alias: "punctuation", inside: null }, a = { bash: n, environment: { pattern: RegExp("\\$" + t), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: true, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: true }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: true, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: true, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t), lookbehind: true, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/ };
        e.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: true }, "function-name": [{ pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: true, alias: "function" }, { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: true }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: true, alias: "constant" } }, alias: "variable", lookbehind: true }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: true, greedy: true, inside: a }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: true, greedy: true, inside: { bash: n } }, { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: true, greedy: true, inside: a }, { pattern: /(^|[^$\\])'[^']*'/, lookbehind: true, greedy: true }, { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: true, inside: { entity: a.entity } }], environment: { pattern: RegExp("\\$?" + t), alias: "constant" }, variable: a.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: true }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/, lookbehind: true }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/, lookbehind: true, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: true }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: true } }, n.inside = e.languages.bash;
        for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], i = a.variable[1].inside, o = 0; o < s.length; o++)
          i[s[o]] = e.languages.bash[s[o]];
        e.languages.shell = e.languages.bash;
      }(Prism);
      Prism.languages.c = Prism.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: true }, keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), Prism.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: true, greedy: true, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: true }, Prism.languages.c.string], comment: Prism.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: true }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: true, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: true, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: Prism.languages.c } } }, constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/ }), delete Prism.languages.c.boolean;
      !function(s) {
        function a(e2, s2) {
          return e2.replace(/<<(\d+)>>/g, function(e3, n2) {
            return "(?:" + s2[+n2] + ")";
          });
        }
        function t(e2, n2, s2) {
          return RegExp(a(e2, n2), s2 || "");
        }
        function e(e2, n2) {
          for (var s2 = 0; s2 < n2; s2++)
            e2 = e2.replace(/<<self>>/g, function() {
              return "(?:" + e2 + ")";
            });
          return e2.replace(/<<self>>/g, "[^\\s\\S]");
        }
        var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void", r = "class enum interface record struct", i = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)", o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
        function l(e2) {
          return "\\b(?:" + e2.trim().replace(/ /g, "|") + ")\\b";
        }
        var d = l(r), p = RegExp(l(n + " " + r + " " + i + " " + o)), c = l(r + " " + i + " " + o), u = l(n + " " + r + " " + o), g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2), b = e("\\((?:[^()]|<<self>>)*\\)", 2), h = "@?\\b[A-Za-z_]\\w*\\b", f = a("<<0>>(?:\\s*<<1>>)?", [h, g]), m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]), k = "\\[\\s*(?:,\\s*)*\\]", y = a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]), w = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [a("\\(<<0>>+(?:,<<0>>+)+\\)", [a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k])]), m, k]), v = { keyword: p, punctuation: /[<>()?,.:[\]]/ }, x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'", $ = '"(?:\\\\.|[^\\\\"\r\n])*"';
        s.languages.csharp = s.languages.extend("clike", { string: [{ pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']), lookbehind: true, greedy: true }, { pattern: t("(^|[^@$\\\\])<<0>>", [$]), lookbehind: true, greedy: true }, { pattern: RegExp(x), greedy: true, alias: "character" }], "class-name": [{ pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]), lookbehind: true, inside: v }, { pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, w]), lookbehind: true, inside: v }, { pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: true }, { pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]), lookbehind: true, inside: v }, { pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]), lookbehind: true, inside: v }, { pattern: t("(\\bwhere\\s+)<<0>>", [h]), lookbehind: true }, { pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]), lookbehind: true, inside: v }, { pattern: t("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [w, u, h]), inside: v }], keyword: p, number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i, operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), s.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }), s.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]), lookbehind: true, alias: "punctuation" } }), s.languages.insertBefore("csharp", "class-name", { namespace: { pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]), lookbehind: true, inside: { punctuation: /\./ } }, "type-expression": { pattern: t("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [b]), lookbehind: true, alias: "class-name", inside: v }, "return-type": { pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [w, m]), inside: v, alias: "class-name" }, "constructor-invocation": { pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [w]), lookbehind: true, inside: v, alias: "class-name" }, "generic-method": { pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]), inside: { function: t("^<<0>>", [h]), generic: { pattern: RegExp(g), alias: "class-name", inside: v } } }, "type-list": { pattern: t("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, w, p.source, b, "\\bnew\\s*\\(\\s*\\)"]), lookbehind: true, inside: { "record-arguments": { pattern: t("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]), lookbehind: true, greedy: true, inside: s.languages.csharp }, keyword: p, "class-name": { pattern: RegExp(w), greedy: true, inside: v }, punctuation: /[,()]/ } }, preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: true, alias: "property", inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: true, alias: "keyword" } } } });
        var _ = $ + "|" + x, B = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [_]), E = e(a(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [B]), 2), R = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b", P = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, E]);
        s.languages.insertBefore("csharp", "class-name", { attribute: { pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [R, P]), lookbehind: true, greedy: true, inside: { target: { pattern: t("^<<0>>(?=\\s*:)", [R]), alias: "keyword" }, "attribute-arguments": { pattern: t("\\(<<0>>*\\)", [E]), inside: s.languages.csharp }, "class-name": { pattern: RegExp(m), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } });
        var z = ":[^}\r\n]+", S = e(a(`[^"'/()]|<<0>>|\\(<<self>>*\\)`, [B]), 2), j = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [S, z]), A = e(a(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`, [_]), 2), F = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [A, z]);
        function U(e2, n2) {
          return { interpolation: { pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [e2]), lookbehind: true, inside: { "format-string": { pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n2, z]), lookbehind: true, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: s.languages.csharp } } }, string: /[\s\S]+/ };
        }
        s.languages.insertBefore("csharp", "string", { "interpolation-string": [{ pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [j]), lookbehind: true, greedy: true, inside: U(j, S) }, { pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [F]), lookbehind: true, greedy: true, inside: U(F, A) }] });
      }(Prism), Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;
      !function(e) {
        var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, function() {
          return t.source;
        });
        e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function() {
          return t.source;
        })), lookbehind: true }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: t, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: true }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:true|false)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp('(\\b(?:module|import)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, function() {
          return n;
        }) + ")"), lookbehind: true, greedy: true, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: true } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b[a-z_]\w*\s*<(?:[^<>]|<(?:[^<>])*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: true, greedy: true, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
      }(Prism);
      Prism.languages.cmake = { comment: /#.*/, string: { pattern: /"(?:[^\\"]|\\.)*"/, greedy: true, inside: { interpolation: { pattern: /\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/, inside: { punctuation: /\$\{|\}/, variable: /\w+/ } } } }, variable: /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/, property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/, keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/, boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/, namespace: /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/, operator: /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/, inserted: { pattern: /\b\w+::\w+\b/, alias: "class-name" }, number: /\b\d+(?:\.\d+)*\b/, function: /\b[a-z_]\w*(?=\s*\()\b/i, punctuation: /[()>}]|\$[<{]/ };
      !function(e) {
        var t = /#(?!\{).+/, n = { pattern: /#\{[^}]+\}/, alias: "variable" };
        e.languages.coffeescript = e.languages.extend("javascript", { comment: t, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: true, inside: { interpolation: n } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: t, interpolation: n } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: true, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: true, alias: "string", inside: { interpolation: n } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
      }(Prism);
      Prism.languages.csp = { directive: { pattern: /(^|[^-\da-z])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[^-\da-z]|$)/i, lookbehind: true, alias: "keyword" }, safe: { pattern: /'(?:deny|none|report-sample|self|strict-dynamic|top-only|(?:nonce|sha(?:256|384|512))-[-+/\w=]+)'/i, alias: "selector" }, unsafe: { pattern: /(?:'unsafe-(?:allow-redirects|dynamic|eval|hash-attributes|hashed-attributes|hashes|inline)'|\*)/i, alias: "function" } };
      !function(e) {
        var a, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: true, inside: a = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: true, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: true, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: true, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: true }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: true }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: true, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: true }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: true } });
        var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: true }, i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: true };
        e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: true }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: true }, { pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: r, number: i, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: r, number: i });
      }(Prism);
      !function(i) {
        i.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
        var r = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
        Object.keys(r).forEach(function(e) {
          var n = r[e], a = [];
          /^\w+$/.test(e) || a.push(/\w+/.exec(e)[0]), "diff" === e && a.push("bold"), i.languages.diff[e] = { pattern: RegExp("^(?:[" + n + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"), alias: a, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: true }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(e)[0] } } };
        }), Object.defineProperty(i.languages.diff, "PREFIXES", { value: r });
      }(Prism);
      !function(h) {
        function v(e, n) {
          return "___" + e.toUpperCase() + n + "___";
        }
        Object.defineProperties(h.languages["markup-templating"] = {}, { buildPlaceholders: { value: function(a, r, e, o) {
          if (a.language === r) {
            var c = a.tokenStack = [];
            a.code = a.code.replace(e, function(e2) {
              if ("function" == typeof o && !o(e2))
                return e2;
              for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t)); )
                ++t;
              return c[t] = e2, n;
            }), a.grammar = h.languages.markup;
          }
        } }, tokenizePlaceholders: { value: function(p, k) {
          if (p.language === k && p.tokenStack) {
            p.grammar = h.languages[k];
            var m = 0, d = Object.keys(p.tokenStack);
            !function e(n) {
              for (var t = 0; t < n.length && !(m >= d.length); t++) {
                var a = n[t];
                if ("string" == typeof a || a.content && "string" == typeof a.content) {
                  var r = d[m], o = p.tokenStack[r], c = "string" == typeof a ? a : a.content, i = v(k, r), u = c.indexOf(i);
                  if (-1 < u) {
                    ++m;
                    var g = c.substring(0, u), l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o), s = c.substring(u + i.length), f = [];
                    g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;
                  }
                } else
                  a.content && e(a.content);
              }
              return n;
            }(p.tokens);
          }
        } } });
      }(Prism);
      !function(e) {
        e.languages.django = { comment: /^\{#[\s\S]*?#\}$/, tag: { pattern: /(^\{%[+-]?\s*)\w+/, lookbehind: true, alias: "keyword" }, delimiter: { pattern: /^\{[{%][+-]?|[+-]?[}%]\}$/, alias: "punctuation" }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: true }, filter: { pattern: /(\|)\w+/, lookbehind: true, alias: "function" }, test: { pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/, lookbehind: true, alias: "function" }, function: /\b[a-z_]\w+(?=\s*\()/i, keyword: /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, number: /\b\d+(?:\.\d+)?\b/, boolean: /[Tt]rue|[Ff]alse|[Nn]one/, variable: /\b\w+?\b/, punctuation: /[{}[\](),.:;]/ };
        var n = /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g, o = e.languages["markup-templating"];
        e.hooks.add("before-tokenize", function(e2) {
          o.buildPlaceholders(e2, "django", n);
        }), e.hooks.add("after-tokenize", function(e2) {
          o.tokenizePlaceholders(e2, "django");
        }), e.languages.jinja2 = e.languages.django, e.hooks.add("before-tokenize", function(e2) {
          o.buildPlaceholders(e2, "jinja2", n);
        }), e.hooks.add("after-tokenize", function(e2) {
          o.tokenizePlaceholders(e2, "jinja2");
        });
      }(Prism);
      !function(e) {
        var r = "(?:[ 	]+(?![ 	])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, function() {
          return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])";
        }), n = `"(?:[^"\\\\\r
]|\\\\(?:\r
|[^]))*"|'(?:[^'\\\\\r
]|\\\\(?:\r
|[^]))*'`, t = `--[\\w-]+=(?:<STR>|(?!["'])(?:[^\\s\\\\]|\\\\.)+)`.replace(/<STR>/g, function() {
          return n;
        }), o = { pattern: RegExp(n), greedy: true }, i = { pattern: /(^[ \t]*)#.*/m, lookbehind: true, greedy: true };
        function a(e2, n2) {
          return e2 = e2.replace(/<OPT>/g, function() {
            return t;
          }).replace(/<SP>/g, function() {
            return r;
          }), RegExp(e2, n2);
        }
        e.languages.docker = { instruction: { pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im, lookbehind: true, greedy: true, inside: { options: { pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"), lookbehind: true, greedy: true, inside: { property: { pattern: /(^|\s)--[\w-]+/, lookbehind: true }, string: [o, { pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: true }], operator: /\\$/m, punctuation: /=/ } }, keyword: [{ pattern: a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"), lookbehind: true, greedy: true }, { pattern: a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ 	\\\\]+<SP>)AS", "i"), lookbehind: true, greedy: true }, { pattern: a("(^ONBUILD<SP>)\\w+", "i"), lookbehind: true, greedy: true }, { pattern: /^\w+/, greedy: true }], comment: i, string: o, variable: /\$(?:\w+|\{[^{}"'\\]*\})/, operator: /\\$/m } }, comment: i }, e.languages.dockerfile = e.languages.docker;
      }(Prism);
      Prism.languages.elixir = { doc: { pattern: /@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/, inside: { attribute: /^@\w+/, string: /['"][\s\S]+/ } }, comment: { pattern: /#.*/m, greedy: true }, regex: { pattern: /~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/, greedy: true }, string: [{ pattern: /~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/, greedy: true, inside: {} }, { pattern: /("""|''')[\s\S]*?\1/, greedy: true, inside: {} }, { pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true, inside: {} }], atom: { pattern: /(^|[^:]):\w+/, lookbehind: true, alias: "symbol" }, module: { pattern: /\b[A-Z]\w*\b/, alias: "class-name" }, "attr-name": /\b\w+\??:(?!:)/, argument: { pattern: /(^|[^&])&\d+/, lookbehind: true, alias: "variable" }, attribute: { pattern: /@\w+/, alias: "variable" }, function: /\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/, number: /\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i, keyword: /\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/, boolean: /\b(?:true|false|nil)\b/, operator: [/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/, { pattern: /([^<])<(?!<)/, lookbehind: true }, { pattern: /([^>])>(?!>)/, lookbehind: true }], punctuation: /<<|>>|[.,%\[\]{}()]/ }, Prism.languages.elixir.string.forEach(function(e) {
        e.inside = { interpolation: { pattern: /#\{[^}]+\}/, inside: { delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" }, rest: Prism.languages.elixir } } };
      });
      Prism.languages.elm = { comment: /--.*|\{-[\s\S]*?-\}/, char: { pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/, greedy: true }, string: [{ pattern: /"""[\s\S]*?"""/, greedy: true }, { pattern: /"(?:[^\\"\r\n]|\\.)*"/, greedy: true }], "import-statement": { pattern: /(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m, lookbehind: true, inside: { keyword: /\b(?:import|as|exposing)\b/ } }, keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/, builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/, number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i, operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/, hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/, constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/, punctuation: /[{}[\]|(),.:]/ };
      Prism.languages.erlang = { comment: /%.+/, string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: true }, "quoted-function": { pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/, alias: "function" }, "quoted-atom": { pattern: /'(?:\\.|[^\\'\r\n])+'/, alias: "atom" }, boolean: /\b(?:true|false)\b/, keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/, number: [/\$\\?./, /\b\d+#[a-z0-9]+/i, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i], function: /\b[a-z][\w@]*(?=\()/, variable: { pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/, lookbehind: true }, operator: [/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/, { pattern: /(^|[^<])<(?!<)/, lookbehind: true }, { pattern: /(^|[^>])>(?!>)/, lookbehind: true }], atom: /\b[a-z][\w@]*/, punctuation: /[()[\]{}:;,.#|]|<<|>>/ };
      Prism.languages.fsharp = Prism.languages.extend("clike", { comment: [{ pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true }], string: { pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/, greedy: true }, "class-name": { pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/, lookbehind: true, inside: { operator: /->|\*/, punctuation: /\./ } }, keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/, number: [/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/, /\b0b[01]+(?:y|uy)?\b/, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/], operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/ }), Prism.languages.insertBefore("fsharp", "keyword", { preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: true, alias: "property", inside: { directive: { pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/, lookbehind: true, alias: "keyword" } } } }), Prism.languages.insertBefore("fsharp", "punctuation", { "computation-expression": { pattern: /\b[_a-z]\w*(?=\s*\{)/i, alias: "keyword" } }), Prism.languages.insertBefore("fsharp", "string", { annotation: { pattern: /\[<.+?>\]/, inside: { punctuation: /^\[<|>\]$/, "class-name": { pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/, lookbehind: true }, "annotation-content": { pattern: /[\s\S]+/, inside: Prism.languages.fsharp } } } });
      !function(a) {
        a.languages.flow = a.languages.extend("javascript", {}), a.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/, alias: "tag" }] }), a.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete a.languages.flow.parameter, a.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(a.languages.flow.keyword) || (a.languages.flow.keyword = [a.languages.flow.keyword]), a.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/, lookbehind: true }, { pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/, lookbehind: true });
      }(Prism);
      Prism.languages.git = { comment: /^#.*/m, deleted: /^[-–].*/m, inserted: /^\+.*/m, string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m, command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } }, coord: /^@@.*@@$/m, "commit-sha1": /^commit \w{40}$/m };
      Prism.languages.go = Prism.languages.extend("clike", { string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: true }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|iota|nil|true|false)\b/, number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i, operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/ }), delete Prism.languages.go["class-name"];
      Prism.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: true, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: true, inside: Prism.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:true|false)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: true }, "atom-input": { pattern: /[A-Z]\w*Input(?=!?.*$)/m, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: true }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: true, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, Prism.hooks.add("after-tokenize", function(n) {
        if ("graphql" === n.language)
          for (var o = n.tokens.filter(function(n2) {
            return "string" != typeof n2 && "comment" !== n2.type && "scalar" !== n2.type;
          }), s = 0; s < o.length; ) {
            var t = o[s++];
            if ("keyword" === t.type && "mutation" === t.content) {
              var e = [];
              if (c(["definition-mutation", "punctuation"]) && "(" === l(1).content) {
                s += 2;
                var a = f(/^\($/, /^\)$/);
                if (-1 === a)
                  continue;
                for (; s < a; s++) {
                  var r = l(0);
                  "variable" === r.type && (m(r, "variable-input"), e.push(r.content));
                }
                s = a + 1;
              }
              if (c(["punctuation", "property-query"]) && "{" === l(0).content && (s++, m(l(0), "property-mutation"), 0 < e.length)) {
                var i = f(/^\{$/, /^\}$/);
                if (-1 === i)
                  continue;
                for (var u = s; u < i; u++) {
                  var p = o[u];
                  "variable" === p.type && 0 <= e.indexOf(p.content) && m(p, "variable-input");
                }
              }
            }
          }
        function l(n2) {
          return o[s + n2];
        }
        function c(n2, t2) {
          t2 = t2 || 0;
          for (var e2 = 0; e2 < n2.length; e2++) {
            var a2 = l(e2 + t2);
            if (!a2 || a2.type !== n2[e2])
              return false;
          }
          return true;
        }
        function f(n2, t2) {
          for (var e2 = 1, a2 = s; a2 < o.length; a2++) {
            var r2 = o[a2], i2 = r2.content;
            if ("punctuation" === r2.type && "string" == typeof i2) {
              if (n2.test(i2))
                e2++;
              else if (t2.test(i2) && 0 === --e2)
                return a2;
            }
          }
          return -1;
        }
        function m(n2, t2) {
          var e2 = n2.alias;
          e2 ? Array.isArray(e2) || (n2.alias = e2 = [e2]) : n2.alias = e2 = [], e2.push(t2);
        }
      });
      !function(e) {
        e.languages.ruby = e.languages.extend("clike", { comment: [/#.*/, { pattern: /^=begin\s[\s\S]*?^=end/m, greedy: true }], "class-name": { pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/ });
        var n = { pattern: /#\{[^}]+\}/, inside: { delimiter: { pattern: /^#\{|\}$/, alias: "tag" }, rest: e.languages.ruby } };
        delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", { regex: [{ pattern: RegExp("%r(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")[egimnosux]{0,6}"), greedy: true, inside: { interpolation: n } }, { pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/, lookbehind: true, greedy: true, inside: { interpolation: n } }], variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/, symbol: { pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: true }, "method-definition": { pattern: /(\bdef\s+)[\w.]+/, lookbehind: true, inside: { function: /\w+$/, rest: e.languages.ruby } } }), e.languages.insertBefore("ruby", "number", { builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/, constant: /\b[A-Z]\w*(?:[?!]|\b)/ }), e.languages.ruby.string = [{ pattern: RegExp("%[qQiIwWxs]?(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")"), greedy: true, inside: { interpolation: n } }, { pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/, greedy: true, inside: { interpolation: n } }, { pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i, alias: "symbol", inside: { punctuation: /^<<[-~]?/ } }, interpolation: n } }, { pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i, alias: "symbol", inside: { punctuation: /^<<[-~]?'|'$/ } } } }], e.languages.rb = e.languages.ruby;
      }(Prism);
      !function(e) {
        e.languages.haml = { "multiline-comment": { pattern: /((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/, lookbehind: true, alias: "comment" }, "multiline-code": [{ pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/, lookbehind: true, inside: e.languages.ruby }, { pattern: /((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/, lookbehind: true, inside: e.languages.ruby }], filter: { pattern: /((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/, lookbehind: true, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" } } }, markup: { pattern: /((?:^|\r?\n|\r)[\t ]*)<.+/, lookbehind: true, inside: e.languages.markup }, doctype: { pattern: /((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/, lookbehind: true }, tag: { pattern: /((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/, lookbehind: true, inside: { attributes: [{ pattern: /(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/, lookbehind: true, inside: e.languages.ruby }, { pattern: /\([^)]+\)/, inside: { "attr-value": { pattern: /(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/, lookbehind: true }, "attr-name": /[\w:-]+(?=\s*!?=|\s*[,)])/, punctuation: /[=(),]/ } }, { pattern: /\[[^\]]+\]/, inside: e.languages.ruby }], punctuation: /[<>]/ } }, code: { pattern: /((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/, lookbehind: true, inside: e.languages.ruby }, interpolation: { pattern: /#\{[^}]+\}/, inside: { delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" }, rest: e.languages.ruby } }, punctuation: { pattern: /((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/, lookbehind: true } };
        for (var t = ["css", { filter: "coffee", language: "coffeescript" }, "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"], n = {}, r = 0, a = t.length; r < a; r++) {
          var i = t[r];
          i = "string" == typeof i ? { filter: i, language: i } : i, e.languages[i.language] && (n["filter-" + i.filter] = { pattern: RegExp("((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+".replace("{{filter_name}}", function() {
            return i.filter;
          })), lookbehind: true, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, rest: e.languages[i.language] } });
        }
        e.languages.insertBefore("haml", "filter", n);
      }(Prism);
      !function(e) {
        e.languages.handlebars = { comment: /\{\{![\s\S]*?\}\}/, delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" }, string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/, number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/, boolean: /\b(?:true|false)\b/, block: { pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i, lookbehind: true, alias: "keyword" }, brackets: { pattern: /\[[^\]]+\]/, inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ } }, punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/, variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/ }, e.hooks.add("before-tokenize", function(a) {
          e.languages["markup-templating"].buildPlaceholders(a, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g);
        }), e.hooks.add("after-tokenize", function(a) {
          e.languages["markup-templating"].tokenizePlaceholders(a, "handlebars");
        }), e.languages.hbs = e.languages.handlebars;
      }(Prism);
      Prism.languages.haskell = { comment: { pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m, lookbehind: true }, char: { pattern: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/, alias: "string" }, string: { pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/, greedy: true }, keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/, "import-statement": { pattern: /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m, lookbehind: true, inside: { keyword: /\b(?:import|qualified|as|hiding)\b/, punctuation: /\./ } }, builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/, number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i, operator: [{ pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/, greedy: true }, { pattern: /(\s)\.(?=\s)/, lookbehind: true }, /[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/], hvariable: { pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/, inside: { punctuation: /\./ } }, constant: { pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/, inside: { punctuation: /\./ } }, punctuation: /[{}[\];(),.:]/ }, Prism.languages.hs = Prism.languages.haskell;
      !function(t) {
        t.languages.http = { "request-line": { pattern: /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m, inside: { method: { pattern: /^[A-Z]+\b/, alias: "property" }, "request-target": { pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/, lookbehind: true, alias: "url", inside: t.languages.uri }, "http-version": { pattern: /^(\s)HTTP\/[0-9.]+/, lookbehind: true, alias: "property" } } }, "response-status": { pattern: /^HTTP\/[0-9.]+ \d+ .+/m, inside: { "http-version": { pattern: /^HTTP\/[0-9.]+/, alias: "property" }, "status-code": { pattern: /^(\s)\d+(?=\s)/, lookbehind: true, alias: "number" }, "reason-phrase": { pattern: /^(\s).+/, lookbehind: true, alias: "string" } } }, "header-name": { pattern: /^[\w-]+:(?=.)/m, alias: "keyword" } };
        var a, e, s, n = t.languages, r = { "application/javascript": n.javascript, "application/json": n.json || n.javascript, "application/xml": n.xml, "text/xml": n.xml, "text/html": n.html, "text/css": n.css }, i = { "application/json": true, "application/xml": true };
        for (var p in r)
          if (r[p]) {
            a = a || {};
            var o = i[p] ? (void 0, s = (e = p).replace(/^[a-z]+\//, ""), "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + s + "(?![+\\w.-]))") : p;
            a[p.replace(/\//g, "-")] = { pattern: RegExp("(content-type:\\s*" + o + "(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"), lookbehind: true, inside: r[p] };
          }
        a && t.languages.insertBefore("http", "header-name", a);
      }(Prism);
      !function(e) {
        var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", a = { pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"), lookbehind: true, inside: { namespace: { pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: { punctuation: /\./ } }, punctuation: /\./ } };
        e.languages.java = e.languages.extend("clike", { "class-name": [a, { pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"), lookbehind: true, inside: a.inside }], keyword: t, function: [e.languages.clike.function, { pattern: /(::\s*)[a-z_]\w*/, lookbehind: true }], number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i, operator: { pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: true } }), e.languages.insertBefore("java", "string", { "triple-quoted-string": { pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/, greedy: true, alias: "string" } }), e.languages.insertBefore("java", "class-name", { annotation: { pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/, lookbehind: true, alias: "punctuation" }, generics: { pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/, inside: { "class-name": a, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/ } }, namespace: { pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function() {
          return t.source;
        })), lookbehind: true, inside: { punctuation: /\./ } } });
      }(Prism);
      Prism.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: true, greedy: true }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: true, greedy: true }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, Prism.languages.webmanifest = Prism.languages.json;
      !function(e) {
        e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: true }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: true }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: true, greedy: true }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", { "raw-string": { pattern: /("""|''')[\s\S]*?\1/, alias: "string" } }), e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } });
        var n = [{ pattern: /\$\{[^}]+\}/, inside: { delimiter: { pattern: /^\$\{|\}$/, alias: "variable" }, rest: e.languages.kotlin } }, { pattern: /\$\w+/, alias: "variable" }];
        e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = { interpolation: n }, e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
      }(Prism);
      !function(a) {
        var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = { "equation-command": { pattern: e, alias: "regex" } };
        a.languages.latex = { comment: /%.*/m, cdata: { pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: true }, equation: [{ pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/, inside: n, alias: "string" }, { pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: true, inside: n, alias: "string" }], keyword: { pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/, lookbehind: true }, url: { pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: true }, headline: { pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/, lookbehind: true, alias: "class-name" }, function: { pattern: e, alias: "selector" }, punctuation: /[[\]{}&]/ }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex;
      }(Prism);
      Prism.languages.less = Prism.languages.extend("css", { comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: true }], atrule: { pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/, inside: { punctuation: /[:()]/ } }, selector: { pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/, inside: { variable: /@+[\w-]+/ } }, property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i, operator: /[+\-*\/]/ }), Prism.languages.insertBefore("less", "property", { variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/], "mixin-usage": { pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/, lookbehind: true, alias: "function" } });
      Prism.languages.llvm = { comment: /;.*/, string: { pattern: /"[^"]*"/, greedy: true }, boolean: /\b(?:true|false)\b/, variable: /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i, label: /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i, type: { pattern: /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/, alias: "class-name" }, keyword: /\b[a-z_][a-z_0-9]*\b/, number: /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/, punctuation: /[{}[\];(),.!*=<>]/ };
      Prism.languages.makefile = { comment: { pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: true }, string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/, symbol: { pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m, inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ } }, variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/, keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, { pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/, lookbehind: true }], operator: /(?:::|[?:+!])?=|[|@]/, punctuation: /[:;(){}]/ };
      !function(s) {
        function n(n2) {
          return n2 = n2.replace(/<inner>/g, function() {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
          }), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n2 + ")");
        }
        var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+", t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, function() {
          return e;
        }), a = "\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:\n|\r\n?)";
        s.languages.markdown = s.languages.extend("markup", {}), s.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: true, greedy: true, inside: { punctuation: /^---|---$/, "font-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: s.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"), lookbehind: true, inside: { "table-data": { pattern: RegExp(e), inside: s.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + t + ")" + a + "$"), lookbehind: true, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + t + "$"), inside: { "table-header": { pattern: RegExp(e), alias: "important", inside: s.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: true, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: true, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: true }, "code-language": { pattern: /^(```).+/, lookbehind: true }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: true, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: true, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: true, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: true }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: n("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"), lookbehind: true, greedy: true, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: true, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: n("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"), lookbehind: true, greedy: true, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: true, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: n("(~~?)(?:(?!~)<inner>)+\\2"), lookbehind: true, greedy: true, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: true, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: true, greedy: true, alias: ["code", "keyword"] }, url: { pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'), lookbehind: true, greedy: true, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: true }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: true }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: true } } } }), ["url", "bold", "italic", "strike"].forEach(function(e2) {
          ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(n2) {
            e2 !== n2 && (s.languages.markdown[e2].inside.content.inside[n2] = s.languages.markdown[n2]);
          });
        }), s.hooks.add("after-tokenize", function(n2) {
          "markdown" !== n2.language && "md" !== n2.language || !function n3(e2) {
            if (e2 && "string" != typeof e2)
              for (var t2 = 0, a2 = e2.length; t2 < a2; t2++) {
                var r = e2[t2];
                if ("code" === r.type) {
                  var i = r.content[1], o = r.content[3];
                  if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
                    var l = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), s2 = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                    o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s2] : o.alias.push(s2) : o.alias = [s2];
                  }
                } else
                  n3(r.content);
              }
          }(n2.tokens);
        }), s.hooks.add("wrap", function(n2) {
          if ("code-block" === n2.type) {
            for (var e2 = "", t2 = 0, a2 = n2.classes.length; t2 < a2; t2++) {
              var r = n2.classes[t2], i = /language-(.+)/.exec(r);
              if (i) {
                e2 = i[1];
                break;
              }
            }
            var o = s.languages[e2];
            if (o)
              n2.content = s.highlight(function(n3) {
                var e3 = n3.replace(d, "");
                return e3 = e3.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(n4, e4) {
                  var t3;
                  if ("#" === (e4 = e4.toLowerCase())[0])
                    return t3 = "x" === e4[1] ? parseInt(e4.slice(2), 16) : Number(e4.slice(1)), u(t3);
                  var a3 = p[e4];
                  return a3 || n4;
                });
              }(n2.content), o, e2);
            else if (e2 && "none" !== e2 && s.plugins.autoloader) {
              var l = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
              n2.attributes.id = l, s.plugins.autoloader.loadLanguages(e2, function() {
                var n3 = document.getElementById(l);
                n3 && (n3.innerHTML = s.highlight(n3.textContent, s.languages[e2], e2));
              });
            }
          }
        });
        var d = RegExp(s.languages.markup.tag.pattern.source, "gi"), p = { amp: "&", lt: "<", gt: ">", quot: '"' }, u = String.fromCodePoint || String.fromCharCode;
        s.languages.md = s.languages.markdown;
      }(Prism);
      Prism.languages.nasm = { comment: /;.*$/m, string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/, label: { pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m, lookbehind: true, alias: "function" }, keyword: [/\[?BITS (?:16|32|64)\]?/, { pattern: /(^\s*)section\s*[a-z.]+:?/im, lookbehind: true }, /(?:extern|global)[^;\r\n]*/i, /(?:CPU|FLOAT|DEFAULT).*$/m], register: { pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i, alias: "variable" }, number: /(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i, operator: /[\[\]*+\-\/%<>=&|$!]/ };
      Prism.languages.objectivec = Prism.languages.extend("c", { string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec;
      Prism.languages.ocaml = { comment: /\(\*[\s\S]*?\*\)/, string: [{ pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: true }, { pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i, greedy: true }], number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i, directive: { pattern: /\B#\w+/, alias: "important" }, label: { pattern: /\B~\w+/, alias: "function" }, "type-variable": { pattern: /\B'\w+/, alias: "function" }, variant: { pattern: /`\w+/, alias: "variable" }, module: { pattern: /\b[A-Z]\w+/, alias: "variable" }, keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/, boolean: /\b(?:false|true)\b/, operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/, punctuation: /[(){}\[\]|.,:;]|\b_\b/ };
      Prism.languages.perl = { comment: [{ pattern: /(^\s*)=\w[\s\S]*?=cut.*/m, lookbehind: true }, { pattern: /(^|[^\\$])#.*/, lookbehind: true }], string: [{ pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: true }, { pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: true }, { pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/, greedy: true }, { pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/, greedy: true }, { pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/, greedy: true }, { pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/, greedy: true }, { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: true }, { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: true }], regex: [{ pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/, greedy: true }, { pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/, greedy: true }, { pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/, greedy: true }, { pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/, greedy: true }, { pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/, greedy: true }, { pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/, greedy: true }, { pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/, lookbehind: true, greedy: true }, { pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/, lookbehind: true, greedy: true }, { pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/, lookbehind: true, greedy: true }, { pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/, lookbehind: true, greedy: true }, { pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/, lookbehind: true, greedy: true }, { pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/, lookbehind: true, greedy: true }, { pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/, greedy: true }], variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/], filehandle: { pattern: /<(?![<=])\S*>|\b_\b/, alias: "symbol" }, vstring: { pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/, alias: "string" }, function: { pattern: /sub \w+/i, inside: { keyword: /sub/ } }, keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/, operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/, punctuation: /[{}[\];(),:]/ };
      !function(a) {
        var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, t = [{ pattern: /\b(?:false|true)\b/i, alias: "boolean" }, { pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i, greedy: true, lookbehind: true }, { pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i, greedy: true, lookbehind: true }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/], i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i, n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/, s = /[{}\[\](),:;]/;
        a.languages.php = { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" }, comment: e, variable: /\$+(?:\w+\b|(?=\{))/i, package: { pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, lookbehind: true, inside: { punctuation: /\\/ } }, "class-name-definition": { pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i, lookbehind: true, alias: "class-name" }, "function-definition": { pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: true, alias: "function" }, keyword: [{ pattern: /(\(\s*)\b(?:bool|boolean|int|integer|float|string|object|array)\b(?=\s*\))/i, alias: "type-casting", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)\b(?:bool|int|float|string|object|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*[\w|]\|\s*)(?:null|false)\b(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|self|static|callable|iterable|(?:null|false)(?=\s*\|))\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?[\w|]\|\s*)(?:null|false)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /\b(?:bool|int|float|string|object|void|array(?!\s*\()|mixed|iterable|(?:null|false)(?=\s*\|))\b/i, alias: "type-declaration", greedy: true }, { pattern: /(\|\s*)(?:null|false)\b/i, alias: "type-declaration", greedy: true, lookbehind: true }, { pattern: /\b(?:parent|self|static)(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(\byield\s+)from\b/i, lookbehind: true }, /\bclass\b/i, { pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|match|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i, lookbehind: true }], "argument-name": { pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: true }, "class-name": [{ pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i, greedy: true, lookbehind: true }, { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: true }, { pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i, alias: "class-name-fully-qualified", greedy: true, inside: { punctuation: /\\/ } }, { pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: "class-name-fully-qualified", greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*\$)/i, alias: "type-declaration", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-declaration"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /\b[a-z_]\w*(?=\s*::)/i, alias: "static-context", greedy: true }, { pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i, alias: ["class-name-fully-qualified", "static-context"], greedy: true, inside: { punctuation: /\\/ } }, { pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i, alias: "type-hint", greedy: true, lookbehind: true }, { pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i, alias: ["class-name-fully-qualified", "type-hint"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }, { pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i, alias: "return-type", greedy: true, lookbehind: true }, { pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i, alias: ["class-name-fully-qualified", "return-type"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: t, function: { pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i, lookbehind: true, inside: { punctuation: /\\/ } }, property: { pattern: /(->\s*)\w+/, lookbehind: true }, number: i, operator: n, punctuation: s };
        var l = { pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/, lookbehind: true, inside: a.languages.php }, r = [{ pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, alias: "nowdoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, alias: "heredoc-string", greedy: true, inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: l } }, { pattern: /`(?:\\[\s\S]|[^\\`])*`/, alias: "backtick-quoted-string", greedy: true }, { pattern: /'(?:\\[\s\S]|[^\\'])*'/, alias: "single-quoted-string", greedy: true }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: true, inside: { interpolation: l } }];
        a.languages.insertBefore("php", "variable", { string: r, attribute: { pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im, greedy: true, inside: { "attribute-content": { pattern: /^(#\[)[\s\S]+(?=\]$)/, lookbehind: true, inside: { comment: e, string: r, "attribute-class-name": [{ pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i, alias: "class-name", greedy: true, lookbehind: true }, { pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i, alias: ["class-name", "class-name-fully-qualified"], greedy: true, lookbehind: true, inside: { punctuation: /\\/ } }], constant: t, number: i, operator: n, punctuation: s } }, delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" } } } }), a.hooks.add("before-tokenize", function(e2) {
          if (/<\?/.test(e2.code)) {
            a.languages["markup-templating"].buildPlaceholders(e2, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/gi);
          }
        }), a.hooks.add("after-tokenize", function(e2) {
          a.languages["markup-templating"].tokenizePlaceholders(e2, "php");
        });
      }(Prism);
      Prism.languages.insertBefore("php", "variable", { this: /\$this\b/, global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/, scope: { pattern: /\b[\w\\]+::/, inside: { keyword: /static|self|parent/, punctuation: /::|\\/ } } });
      !function(e) {
        var i = Prism.languages.powershell = { comment: [{ pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: true }, { pattern: /(^|[^`])#.*/, lookbehind: true }], string: [{ pattern: /"(?:`[\s\S]|[^`"])*"/, greedy: true, inside: { function: { pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/, lookbehind: true, inside: {} } } }, { pattern: /'(?:[^']|'')*'/, greedy: true }], namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i, boolean: /\$(?:true|false)\b/i, variable: /\$\w+\b/, function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i], keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i, operator: { pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i, lookbehind: true }, punctuation: /[|{}[\];(),.]/ }, r = i.string[0].inside;
        r.boolean = i.boolean, r.variable = i.variable, r.function.inside = i;
      }();
      Prism.languages.processing = Prism.languages.extend("clike", { keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/, operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/ }), Prism.languages.insertBefore("processing", "number", { constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/, type: { pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/, alias: "variable" } }), Prism.languages.processing.function = /\b\w+(?=\s*\()/, Prism.languages.processing["class-name"].alias = "variable";
      !function(e) {
        e.languages.pug = { comment: { pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m, lookbehind: true }, "multiline-script": { pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: true, inside: e.languages.javascript }, filter: { pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: true, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" } } }, "multiline-plain-text": { pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: true }, markup: { pattern: /(^[\t ]*)<.+/m, lookbehind: true, inside: e.languages.markup }, doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: true }, "flow-control": { pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m, lookbehind: true, inside: { each: { pattern: /^each .+? in\b/, inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ } }, branch: { pattern: /^(?:if|unless|else|case|when|default|while)\b/, alias: "keyword" }, rest: e.languages.javascript } }, keyword: { pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m, lookbehind: true }, mixin: [{ pattern: /(^[\t ]*)mixin .+/m, lookbehind: true, inside: { keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/ } }, { pattern: /(^[\t ]*)\+.+/m, lookbehind: true, inside: { name: { pattern: /^\+\w+/, alias: "function" }, rest: e.languages.javascript } }], script: { pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m, lookbehind: true, inside: e.languages.javascript }, "plain-text": { pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m, lookbehind: true }, tag: { pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m, lookbehind: true, inside: { attributes: [{ pattern: /&[^(]+\([^)]+\)/, inside: e.languages.javascript }, { pattern: /\([^)]+\)/, inside: { "attr-value": { pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/, lookbehind: true, inside: e.languages.javascript }, "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/, punctuation: /[!=(),]+/ } }], punctuation: /:/, "attr-id": /#[\w\-]+/, "attr-class": /\.[\w\-]+/ } }, code: [{ pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: true, inside: e.languages.javascript }], punctuation: /[.\-!=|]+/ };
        for (var t = [{ filter: "atpl", language: "twig" }, { filter: "coffee", language: "coffeescript" }, "ejs", "handlebars", "less", "livescript", "markdown", { filter: "sass", language: "scss" }, "stylus"], n = {}, a = 0, i = t.length; a < i; a++) {
          var r = t[a];
          r = "string" == typeof r ? { filter: r, language: r } : r, e.languages[r.language] && (n["filter-" + r.filter] = { pattern: RegExp("(^([	 ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\\2[	 ].+|\\s*?(?=\r?\n|\r)))+".replace("<filter_name>", function() {
            return r.filter;
          }), "m"), lookbehind: true, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, rest: e.languages[r.language] } });
        }
        e.languages.insertBefore("pug", "filter", n);
      }(Prism);
      Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: true }, "string-interpolation": { pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: true, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: true, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: true }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i, greedy: true, alias: "string" }, string: { pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: true }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: true }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: true }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im, lookbehind: true, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:True|False|None)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
      Prism.languages.r = { comment: /#.*/, string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: true }, "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" }, boolean: /\b(?:TRUE|FALSE)\b/, ellipsis: /\.\.(?:\.|\d+)/, number: [/\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/], keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/, operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/, punctuation: /[(){}\[\],;]/ };
      !function(i) {
        var t = i.util.clone(i.languages.javascript), e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
        function n(t2, n2) {
          return t2 = t2.replace(/<S>/g, function() {
            return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
          }).replace(/<BRACES>/g, function() {
            return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
          }).replace(/<SPREAD>/g, function() {
            return e;
          }), RegExp(t2, n2);
        }
        e = n(e).source, i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = n(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`), i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.jsx.tag.inside.comment = t.comment, i.languages.insertBefore("inside", "attr-name", { spread: { pattern: n("<SPREAD>"), inside: i.languages.jsx } }, i.languages.jsx.tag), i.languages.insertBefore("inside", "special-attr", { script: { pattern: n("=<BRACES>"), inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: i.languages.jsx }, alias: "language-javascript" } }, i.languages.jsx.tag);
        var o = function(t2) {
          return t2 ? "string" == typeof t2 ? t2 : "string" == typeof t2.content ? t2.content : t2.content.map(o).join("") : "";
        }, r = function(t2) {
          for (var n2 = [], e2 = 0; e2 < t2.length; e2++) {
            var a = t2[e2], s = false;
            if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n2.length && n2[n2.length - 1].tagName === o(a.content[0].content[1]) && n2.pop() : "/>" === a.content[a.content.length - 1].content || n2.push({ tagName: o(a.content[0].content[1]), openedBraces: 0 }) : 0 < n2.length && "punctuation" === a.type && "{" === a.content ? n2[n2.length - 1].openedBraces++ : 0 < n2.length && 0 < n2[n2.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n2[n2.length - 1].openedBraces-- : s = true), (s || "string" == typeof a) && 0 < n2.length && 0 === n2[n2.length - 1].openedBraces) {
              var g = o(a);
              e2 < t2.length - 1 && ("string" == typeof t2[e2 + 1] || "plain-text" === t2[e2 + 1].type) && (g += o(t2[e2 + 1]), t2.splice(e2 + 1, 1)), 0 < e2 && ("string" == typeof t2[e2 - 1] || "plain-text" === t2[e2 - 1].type) && (g = o(t2[e2 - 1]) + g, t2.splice(e2 - 1, 1), e2--), t2[e2] = new i.Token("plain-text", g, null, g);
            }
            a.content && "string" != typeof a.content && r(a.content);
          }
        };
        i.hooks.add("after-tokenize", function(t2) {
          "jsx" !== t2.language && "tsx" !== t2.language || r(t2.tokens);
        });
      }(Prism);
      !function(e) {
        e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: true, greedy: true, inside: null }, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter;
        var s = e.languages.extend("typescript", {});
        delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: true, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: s } } } }), e.languages.ts = e.languages.typescript;
      }(Prism);
      !function(a) {
        var e = a.util.clone(a.languages.typescript);
        a.languages.tsx = a.languages.extend("jsx", e);
        var t = a.languages.tsx.tag;
        t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = true;
      }(Prism);
      Prism.languages.reason = Prism.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: true }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/ }), Prism.languages.insertBefore("reason", "class-name", { character: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, alias: "string" }, constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: "variable" }, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete Prism.languages.reason.function;
      !function(e) {
        for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++)
          a = a.replace(/<self>/g, function() {
            return a;
          });
        a = a.replace(/<self>/g, function() {
          return "[^\\s\\S]";
        }), e.languages.rust = { comment: [{ pattern: RegExp("(^|[^\\\\])" + a), lookbehind: true, greedy: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: true }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: true, alias: "string" }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: true, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: true, greedy: true, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: true, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: true, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|union)\s+)\w+/, lookbehind: true, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: true, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: true, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|Self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:[ui](?:8|16|32|64|128|size)|f(?:32|64)|bool|char|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64|size)?|f32|f64))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
      }(Prism);
      !function(e) {
        e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m, lookbehind: true, greedy: true } }), e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, greedy: true, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule;
        var r = /\$[-\w]+|#\{\$[-\w]+\}/, t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s)-(?=\s)/, lookbehind: true }];
        e.languages.insertBefore("sass", "property", { "variable-line": { pattern: /^[ \t]*\$.+/m, greedy: true, inside: { punctuation: /:/, variable: r, operator: t } }, "property-line": { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m, greedy: true, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: true }], punctuation: /:/, variable: r, operator: t, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m, lookbehind: true, greedy: true } });
      }(Prism);
      Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: true }, atrule: { pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)?url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, property: { pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, { pattern: /( )(?:from|through)(?= )/, lookbehind: true }] }), Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { "module-modifier": { pattern: /\b(?:as|with|show|hide)\b/i, alias: "keyword" }, placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" }, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: true } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
      Prism.languages.scala = Prism.languages.extend("java", { "triple-quoted-string": { pattern: /"""[\s\S]*?"""/, greedy: true, alias: "string" }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: true }, keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/, number: /\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i, builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/, symbol: /'[^\d\s\\]\w*/ }), delete Prism.languages.scala["class-name"], delete Prism.languages.scala.function;
      Prism.languages.scheme = { comment: /;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/, string: { pattern: /"(?:[^"\\]|\\.)*"/, greedy: true }, symbol: { pattern: /'[^()\[\]#'\s]+/, greedy: true }, character: { pattern: /#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/, greedy: true, alias: "string" }, "lambda-parameter": [{ pattern: /((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/, lookbehind: true }, { pattern: /((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/, lookbehind: true }], keyword: { pattern: /((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|export|except|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/, lookbehind: true }, builtin: { pattern: /((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/, lookbehind: true }, operator: { pattern: /((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/, lookbehind: true }, number: { pattern: RegExp(function(r) {
        for (var e in r)
          r[e] = r[e].replace(/<[\w\s]+>/g, function(e2) {
            return "(?:" + r[e2].trim() + ")";
          });
        return r[e];
      }({ "<ureal dec>": "\\d+(?:/\\d+)|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?", "<real dec>": "[+-]?<ureal dec>|[+-](?:inf|nan)\\.0", "<imaginary dec>": "[+-](?:<ureal dec>|(?:inf|nan)\\.0)?i", "<complex dec>": "<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>", "<num dec>": "(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>", "<ureal box>": "[0-9a-f]+(?:/[0-9a-f]+)?", "<real box>": "[+-]?<ureal box>|[+-](?:inf|nan)\\.0", "<imaginary box>": "[+-](?:<ureal box>|(?:inf|nan)\\.0)?i", "<complex box>": "<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>", "<num box>": "#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>", "<number>": "(^|[()\\[\\]\\s])(?:<num dec>|<num box>)(?=[()\\[\\]\\s]|$)" }), "i"), lookbehind: true }, boolean: { pattern: /(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/, lookbehind: true }, function: { pattern: /((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/, lookbehind: true }, identifier: { pattern: /(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/, lookbehind: true, greedy: true }, punctuation: /[()\[\]']/ };
      Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: true }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: true }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: true, lookbehind: true }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:TRUE|FALSE|NULL)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|IN|ILIKE|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ };
      !function(e) {
        var n = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: true }, r = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: true }, t = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: true }, url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: true }, string: { pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: true }, interpolation: null, func: null, important: /\B!(?:important|optional)\b/i, keyword: { pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s|$)|@[\w-]+)/, lookbehind: true }, hexcode: /#[\da-f]{3,6}/i, color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, { pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: r, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, boolean: /\b(?:true|false)\b/, operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/], number: r, punctuation: /[{}()\[\];:,]/ };
        t.interpolation = { pattern: /\{[^\r\n}:]+\}/, alias: "variable", inside: { delimiter: { pattern: /^\{|\}$/, alias: "punctuation" }, rest: t } }, t.func = { pattern: /[\w-]+\([^)]*\).*/, inside: { function: /^[^(]+/, rest: t } }, e.languages.stylus = { "atrule-declaration": { pattern: /(^[ \t]*)@.+/m, lookbehind: true, inside: { atrule: /^@[\w-]+/, rest: t } }, "variable-declaration": { pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m, lookbehind: true, inside: { variable: /^\S+/, rest: t } }, statement: { pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m, lookbehind: true, inside: { keyword: /^\S+/, rest: t } }, "property-declaration": { pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m, lookbehind: true, inside: { property: { pattern: /^[^\s:]+/, inside: { interpolation: t.interpolation } }, rest: t } }, selector: { pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m, lookbehind: true, inside: { interpolation: t.interpolation, comment: t.comment, punctuation: /[{},]/ } }, func: t.func, string: t.string, comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: true, greedy: true }, interpolation: t.interpolation, punctuation: /[{}()\[\];:.]/ };
      }(Prism);
      Prism.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: true, greedy: true }, "string-literal": [{ pattern: RegExp('(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp('(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'), lookbehind: true, greedy: true, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: true, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp("#(?:(?:elseif|if)\\b(?:[ 	]*(?:![ 	]*)?(?:\\b\\w+\\b(?:[ 	]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ 	]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:true|false)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: true, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: true, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:true|false)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, Prism.languages.swift["string-literal"].forEach(function(e) {
        e.inside.interpolation.inside = Prism.languages.swift;
      });
      !function(n) {
        function e(n2, e2) {
          return RegExp(n2.replace(/<MOD>/g, function() {
            return "(?:\\([^|()\n]+\\)|\\[[^\\]\n]+\\]|\\{[^}\n]+\\})";
          }).replace(/<PAR>/g, function() {
            return "(?:\\)|\\((?![^|()\n]+\\)))";
          }), e2 || "");
        }
        var i = { css: { pattern: /\{[^{}]+\}/, inside: { rest: n.languages.css } }, "class-id": { pattern: /(\()[^()]+(?=\))/, lookbehind: true, alias: "attr-value" }, lang: { pattern: /(\[)[^\[\]]+(?=\])/, lookbehind: true, alias: "attr-value" }, punctuation: /[\\\/]\d+|\S/ }, t = n.languages.textile = n.languages.extend("markup", { phrase: { pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/, lookbehind: true, inside: { "block-tag": { pattern: e("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."), inside: { modifier: { pattern: e("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"), lookbehind: true, inside: i }, tag: /^[a-z]\w*/, punctuation: /\.$/ } }, list: { pattern: e("^[*#]+<MOD>*\\s+\\S.*", "m"), inside: { modifier: { pattern: e("(^[*#]+)<MOD>+"), lookbehind: true, inside: i }, punctuation: /^[*#]+/ } }, table: { pattern: e("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.))[^|]*)+\\|", "m"), inside: { modifier: { pattern: e("(^|\\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)"), lookbehind: true, inside: i }, punctuation: /\||^\./ } }, inline: { pattern: e("(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"), lookbehind: true, inside: { bold: { pattern: e("(^(\\*\\*?)<MOD>*).+?(?=\\2)"), lookbehind: true }, italic: { pattern: e("(^(__?)<MOD>*).+?(?=\\2)"), lookbehind: true }, cite: { pattern: e("(^\\?\\?<MOD>*).+?(?=\\?\\?)"), lookbehind: true, alias: "string" }, code: { pattern: e("(^@<MOD>*).+?(?=@)"), lookbehind: true, alias: "keyword" }, inserted: { pattern: e("(^\\+<MOD>*).+?(?=\\+)"), lookbehind: true }, deleted: { pattern: e("(^-<MOD>*).+?(?=-)"), lookbehind: true }, span: { pattern: e("(^%<MOD>*).+?(?=%)"), lookbehind: true }, modifier: { pattern: e("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"), lookbehind: true, inside: i }, punctuation: /[*_%?@+\-^~]+/ } }, "link-ref": { pattern: /^\[[^\]]+\]\S+$/m, inside: { string: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: true }, url: { pattern: /(^\])\S+$/, lookbehind: true }, punctuation: /[\[\]]/ } }, link: { pattern: e('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'), inside: { text: { pattern: e('(^"<MOD>*)[^"]+(?=")'), lookbehind: true }, modifier: { pattern: e('(^")<MOD>+'), lookbehind: true, inside: i }, url: { pattern: /(:).+/, lookbehind: true }, punctuation: /[":]/ } }, image: { pattern: e("!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"), inside: { source: { pattern: e("(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?(?=!)"), lookbehind: true, alias: "url" }, modifier: { pattern: e("(^!)(?:<MOD>|<PAR>|[<>=])+"), lookbehind: true, inside: i }, url: { pattern: /(:).+/, lookbehind: true }, punctuation: /[!:]/ } }, footnote: { pattern: /\b\[\d+\]/, alias: "comment", inside: { punctuation: /\[|\]/ } }, acronym: { pattern: /\b[A-Z\d]+\([^)]+\)/, inside: { comment: { pattern: /(\()[^()]+(?=\))/, lookbehind: true }, punctuation: /[()]/ } }, mark: { pattern: /\b\((?:TM|R|C)\)/, alias: "comment", inside: { punctuation: /[()]/ } } } } }), a = t.phrase.inside, o = { inline: a.inline, link: a.link, image: a.image, footnote: a.footnote, acronym: a.acronym, mark: a.mark };
        t.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
        var r = a.inline.inside;
        r.bold.inside = o, r.italic.inside = o, r.inserted.inside = o, r.deleted.inside = o, r.span.inside = o;
        var d = a.table.inside;
        d.inline = o.inline, d.link = o.link, d.image = o.image, d.footnote = o.footnote, d.acronym = o.acronym, d.mark = o.mark;
      }(Prism);
      !function(e) {
        function n(e2) {
          return e2.replace(/__/g, function() {
            return `(?:[\\w-]+|'[^'
\r]*'|"(?:\\\\.|[^\\\\"\r
])*")`;
          });
        }
        e.languages.toml = { comment: { pattern: /#.*/, greedy: true }, table: { pattern: RegExp(n("(^[	 ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"), "m"), lookbehind: true, greedy: true, alias: "class-name" }, key: { pattern: RegExp(n("(^[	 ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"), "m"), lookbehind: true, greedy: true, alias: "property" }, string: { pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/, greedy: true }, date: [{ pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i, alias: "number" }, { pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/, alias: "number" }], number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/, boolean: /\b(?:true|false)\b/, punctuation: /[.,=[\]{}]/ };
      }(Prism);
      Prism.languages.twig = { comment: /\{#[\s\S]*?#\}/, tag: { pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/, inside: { ld: { pattern: /^(?:\{\{-?|\{%-?\s*\w+)/, inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ } }, rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.+/ } }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, inside: { punctuation: /^['"]|['"]$/ } }, keyword: /\b(?:even|if|odd)\b/, boolean: /\b(?:true|false|null)\b/, number: /\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/, operator: [{ pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, lookbehind: true }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], property: /\b[a-zA-Z_]\w*\b/, punctuation: /[()\[\]{}:.,]/ } }, other: { pattern: /\S(?:[\s\S]*\S)?/, inside: Prism.languages.markup } };
      Prism.languages.vim = { string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/, comment: /".*/, function: /\b\w+(?=\()/, keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/, builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/, number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i, operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/, punctuation: /[{}[\](),;:]/ };
      Prism.languages["visual-basic"] = { comment: { pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i, inside: { keyword: /^REM/i } }, directive: { pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i, alias: "comment", greedy: true }, string: { pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i, greedy: true }, date: { pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?)[^\S\r\n]*#/i, alias: "builtin" }, number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i, boolean: /\b(?:True|False|Nothing)\b/i, keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Until|Xor)\b/i, operator: [/[+\-*/\\^<=>&#@$%!]/, { pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/, lookbehind: true }], punctuation: /[{}().,:?]/ }, Prism.languages.vb = Prism.languages["visual-basic"], Prism.languages.vba = Prism.languages["visual-basic"];
      Prism.languages.wasm = { comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: true }], string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: true }, keyword: [{ pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } }, { pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/, inside: { punctuation: /\./ } }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/], variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/i, number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/, punctuation: /[()]/ };
      !function(e) {
        var n = /[*&][^\s[\]{},]+/, r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, t = "(?:" + r.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + r.source + ")?)", a = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, function() {
          return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]";
        }), d = `"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;
        function o(e2, n2) {
          n2 = (n2 || "").replace(/m/g, "") + "m";
          var r2 = "([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, function() {
            return t;
          }).replace(/<<value>>/g, function() {
            return e2;
          });
          return RegExp(r2, n2);
        }
        e.languages.yaml = { scalar: { pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?\n|\r)[ 	]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, function() {
          return t;
        })), lookbehind: true, alias: "string" }, comment: /#.*/, key: { pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, function() {
          return t;
        }).replace(/<<key>>/g, function() {
          return "(?:" + a + "|" + d + ")";
        })), lookbehind: true, greedy: true, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" }, datetime: { pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"), lookbehind: true, alias: "number" }, boolean: { pattern: o("true|false", "i"), lookbehind: true, alias: "important" }, null: { pattern: o("null|~", "i"), lookbehind: true, alias: "important" }, string: { pattern: o(d), lookbehind: true, greedy: true }, number: { pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"), lookbehind: true }, tag: r, important: n, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
      }(Prism);
      !function() {
        if ("undefined" != typeof Prism && "undefined" != typeof document && document.querySelector) {
          var t, o = "line-numbers", s = "linkable-line-numbers", a = function() {
            if (void 0 === t) {
              var e = document.createElement("div");
              e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = "0", e.style.border = "0", e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e);
            }
            return t;
          }, l = true, u = 0;
          Prism.hooks.add("before-sanity-check", function(e) {
            var t2 = e.element.parentElement;
            if (c(t2)) {
              var n = 0;
              v(".line-highlight", t2).forEach(function(e2) {
                n += e2.textContent.length, e2.parentNode.removeChild(e2);
              }), n && /^(?: \n)+$/.test(e.code.slice(-n)) && (e.code = e.code.slice(0, -n));
            }
          }), Prism.hooks.add("complete", function e(t2) {
            var n = t2.element.parentElement;
            if (c(n)) {
              clearTimeout(u);
              var i = Prism.plugins.lineNumbers, r = t2.plugins && t2.plugins.lineNumbers;
              if (y(n, o) && i && !r)
                Prism.hooks.add("line-numbers", e);
              else
                d(n)(), u = setTimeout(f, 1);
            }
          }), window.addEventListener("hashchange", f), window.addEventListener("resize", function() {
            v("pre").filter(c).map(function(e) {
              return d(e);
            }).forEach(b);
          });
        }
        function v(e, t2) {
          return Array.prototype.slice.call((t2 || document).querySelectorAll(e));
        }
        function y(e, t2) {
          return e.classList.contains(t2);
        }
        function b(e) {
          e();
        }
        function c(e) {
          return !(!e || !/pre/i.test(e.nodeName)) && (!!e.hasAttribute("data-line") || !(!e.id || !Prism.util.isActive(e, s)));
        }
        function d(u2, e, c2) {
          var t2 = (e = "string" == typeof e ? e : u2.getAttribute("data-line") || "").replace(/\s+/g, "").split(",").filter(Boolean), d2 = +u2.getAttribute("data-line-offset") || 0, f2 = (a() ? parseInt : parseFloat)(getComputedStyle(u2).lineHeight), p = Prism.util.isActive(u2, o), n = u2.querySelector("code"), h = p ? u2 : n || u2, m = [], g = n && h != n ? function(e2, t3) {
            var n2 = getComputedStyle(e2), i2 = getComputedStyle(t3);
            function r2(e3) {
              return +e3.substr(0, e3.length - 2);
            }
            return t3.offsetTop + r2(i2.borderTopWidth) + r2(i2.paddingTop) - r2(n2.paddingTop);
          }(u2, n) : 0;
          t2.forEach(function(e2) {
            var t3 = e2.split("-"), n2 = +t3[0], i2 = +t3[1] || n2, r2 = u2.querySelector('.line-highlight[data-range="' + e2 + '"]') || document.createElement("div");
            if (m.push(function() {
              r2.setAttribute("aria-hidden", "true"), r2.setAttribute("data-range", e2), r2.className = (c2 || "") + " line-highlight";
            }), p && Prism.plugins.lineNumbers) {
              var o2 = Prism.plugins.lineNumbers.getLine(u2, n2), s2 = Prism.plugins.lineNumbers.getLine(u2, i2);
              if (o2) {
                var a2 = o2.offsetTop + g + "px";
                m.push(function() {
                  r2.style.top = a2;
                });
              }
              if (s2) {
                var l2 = s2.offsetTop - o2.offsetTop + s2.offsetHeight + "px";
                m.push(function() {
                  r2.style.height = l2;
                });
              }
            } else
              m.push(function() {
                r2.setAttribute("data-start", String(n2)), n2 < i2 && r2.setAttribute("data-end", String(i2)), r2.style.top = (n2 - d2 - 1) * f2 + g + "px", r2.textContent = new Array(i2 - n2 + 2).join(" \n");
              });
            m.push(function() {
              r2.style.width = u2.scrollWidth + "px";
            }), m.push(function() {
              h.appendChild(r2);
            });
          });
          var i = u2.id;
          if (p && Prism.util.isActive(u2, s) && i) {
            y(u2, s) || m.push(function() {
              u2.classList.add(s);
            });
            var r = parseInt(u2.getAttribute("data-start") || "1");
            v(".line-numbers-rows > span", u2).forEach(function(e2, t3) {
              var n2 = t3 + r;
              e2.onclick = function() {
                var e3 = i + "." + n2;
                l = false, location.hash = e3, setTimeout(function() {
                  l = true;
                }, 1);
              };
            });
          }
          return function() {
            m.forEach(b);
          };
        }
        function f() {
          var e = location.hash.slice(1);
          v(".temporary.line-highlight").forEach(function(e2) {
            e2.parentNode.removeChild(e2);
          });
          var t2 = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
          if (t2 && !document.getElementById(e)) {
            var n = e.slice(0, e.lastIndexOf(".")), i = document.getElementById(n);
            if (i)
              i.hasAttribute("data-line") || i.setAttribute("data-line", ""), d(i, t2, "temporary ")(), l && document.querySelector(".temporary.line-highlight").scrollIntoView();
          }
        }
      }();
      !function() {
        if ("undefined" != typeof Prism && "undefined" != typeof document) {
          var o = "line-numbers", a = /\n(?!$)/g, e = Prism.plugins.lineNumbers = { getLine: function(e2, n2) {
            if ("PRE" === e2.tagName && e2.classList.contains(o)) {
              var t = e2.querySelector(".line-numbers-rows");
              if (t) {
                var i = parseInt(e2.getAttribute("data-start"), 10) || 1, r = i + (t.children.length - 1);
                n2 < i && (n2 = i), r < n2 && (n2 = r);
                var s = n2 - i;
                return t.children[s];
              }
            }
          }, resize: function(e2) {
            u([e2]);
          }, assumeViewportIndependence: true }, n = void 0;
          window.addEventListener("resize", function() {
            e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))));
          }), Prism.hooks.add("complete", function(e2) {
            if (e2.code) {
              var n2 = e2.element, t = n2.parentNode;
              if (t && /pre/i.test(t.nodeName) && !n2.querySelector(".line-numbers-rows") && Prism.util.isActive(n2, o)) {
                n2.classList.remove(o), t.classList.add(o);
                var i, r = e2.code.match(a), s = r ? r.length + 1 : 1, l = new Array(s + 1).join("<span></span>");
                (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e2.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e2);
              }
            }
          }), Prism.hooks.add("line-numbers", function(e2) {
            e2.plugins = e2.plugins || {}, e2.plugins.lineNumbers = true;
          });
        }
        function u(e2) {
          if (0 != (e2 = e2.filter(function(e3) {
            var n3 = function(e4) {
              return e4 ? window.getComputedStyle ? getComputedStyle(e4) : e4.currentStyle || null : null;
            }(e3)["white-space"];
            return "pre-wrap" === n3 || "pre-line" === n3;
          })).length) {
            var n2 = e2.map(function(e3) {
              var n3 = e3.querySelector("code"), t = e3.querySelector(".line-numbers-rows");
              if (n3 && t) {
                var i = e3.querySelector(".line-numbers-sizer"), r = n3.textContent.split(a);
                i || ((i = document.createElement("span")).className = "line-numbers-sizer", n3.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
                var s = i.getBoundingClientRect().height;
                return i.innerHTML = "", { element: e3, lines: r, lineHeights: [], oneLinerHeight: s, sizer: i };
              }
            }).filter(Boolean);
            n2.forEach(function(e3) {
              var i = e3.sizer, n3 = e3.lines, r = e3.lineHeights, s = e3.oneLinerHeight;
              r[n3.length - 1] = void 0, n3.forEach(function(e4, n4) {
                if (e4 && 1 < e4.length) {
                  var t = i.appendChild(document.createElement("span"));
                  t.style.display = "block", t.textContent = e4;
                } else
                  r[n4] = s;
              });
            }), n2.forEach(function(e3) {
              for (var n3 = e3.sizer, t = e3.lineHeights, i = 0, r = 0; r < t.length; r++)
                void 0 === t[r] && (t[r] = n3.children[i++].getBoundingClientRect().height);
            }), n2.forEach(function(e3) {
              var n3 = e3.sizer, t = e3.element.querySelector(".line-numbers-rows");
              n3.style.display = "none", n3.innerHTML = "", e3.lineHeights.forEach(function(e4, n4) {
                t.children[n4].style.height = e4 + "px";
              });
            });
          }
        }
      }();
      !function() {
        if ("undefined" != typeof Prism && "undefined" != typeof document) {
          var s = [];
          t(function(t2) {
            if (t2 && t2.meta && t2.data) {
              if (t2.meta.status && 400 <= t2.meta.status)
                return "Error: " + (t2.data.message || t2.meta.status);
              if ("string" == typeof t2.data.content)
                return "function" == typeof atob ? atob(t2.data.content.replace(/\s/g, "")) : "Your browser cannot decode base64";
            }
            return null;
          }, "github"), t(function(t2, e) {
            if (t2 && t2.meta && t2.data && t2.data.files) {
              if (t2.meta.status && 400 <= t2.meta.status)
                return "Error: " + (t2.data.message || t2.meta.status);
              var n2 = t2.data.files, a = e.getAttribute("data-filename");
              if (null == a) {
                for (var r in n2)
                  if (n2.hasOwnProperty(r)) {
                    a = r;
                    break;
                  }
              }
              return void 0 !== n2[a] ? n2[a].content : "Error: unknown or missing gist file " + a;
            }
            return null;
          }, "gist"), t(function(t2) {
            return t2 && t2.node && "string" == typeof t2.data ? t2.data : null;
          }, "bitbucket");
          var f = 0, d = "data-jsonp-status", l = "loading", c = "loaded", m = "failed", p = "pre[data-jsonp]:not([" + d + '="' + c + '"]):not([' + d + '="' + l + '"])';
          Prism.hooks.add("before-highlightall", function(t2) {
            t2.selector += ", " + p;
          }), Prism.hooks.add("before-sanity-check", function(t2) {
            var r = t2.element;
            if (r.matches(p)) {
              t2.code = "", r.setAttribute(d, l);
              var i = r.appendChild(document.createElement("CODE"));
              i.textContent = "Loading\u2026";
              var e = t2.language;
              i.className = "language-" + e;
              var n2 = Prism.plugins.autoloader;
              n2 && n2.loadLanguages(e);
              var a = r.getAttribute("data-adapter"), o = null;
              if (a) {
                if ("function" != typeof window[a])
                  return r.setAttribute(d, m), void (i.textContent = function(t3) {
                    return '\u2716 Error: JSONP adapter function "' + t3 + `" doesn't exist`;
                  }(a));
                o = window[a];
              }
              var u = r.getAttribute("data-jsonp");
              !function(t3, e2, n3, a2) {
                var r2 = "prismjsonp" + f++, i2 = document.createElement("a");
                i2.href = t3, i2.href += (i2.search ? "&" : "?") + (e2 || "callback") + "=" + r2;
                var o2 = document.createElement("script");
                o2.src = i2.href, o2.onerror = function() {
                  s2(), a2("network");
                };
                var u2 = setTimeout(function() {
                  s2(), a2("timeout");
                }, Prism.plugins.jsonphighlight.timeout);
                function s2() {
                  clearTimeout(u2), document.head.removeChild(o2), delete window[r2];
                }
                window[r2] = function(t4) {
                  s2(), n3(t4);
                }, document.head.appendChild(o2);
              }(u, r.getAttribute("data-callback"), function(t3) {
                var e2 = null;
                if (o)
                  e2 = o(t3, r);
                else
                  for (var n3 = 0, a2 = s.length; n3 < a2 && null === (e2 = s[n3].adapter(t3, r)); n3++)
                    ;
                null === e2 ? (r.setAttribute(d, m), i.textContent = "\u2716 Error: Cannot parse response (perhaps you need an adapter function?)") : (r.setAttribute(d, c), i.textContent = e2, Prism.highlightElement(i));
              }, function() {
                r.setAttribute(d, m), i.textContent = function(t3) {
                  return "\u2716 Error: Timeout loading " + t3;
                }(u);
              });
            }
          }), Prism.plugins.jsonphighlight = { timeout: 5e3, registerAdapter: t, removeAdapter: function(e) {
            if ("string" == typeof e && (e = n(e)), "function" == typeof e) {
              var t2 = s.findIndex(function(t3) {
                return t3.adapter === e;
              });
              0 <= t2 && s.splice(t2, 1);
            }
          }, highlight: function(t2) {
            for (var e, n2 = (t2 || document).querySelectorAll(p), a = 0; e = n2[a++]; )
              Prism.highlightElement(e);
          } };
        }
        function t(t2, e) {
          e = e || t2.name, "function" != typeof t2 || n(t2) || n(e) || s.push({ adapter: t2, name: e });
        }
        function n(t2) {
          if ("function" == typeof t2) {
            for (var e = 0; n2 = s[e++]; )
              if (n2.adapter.valueOf() === t2.valueOf())
                return n2.adapter;
          } else if ("string" == typeof t2) {
            var n2;
            for (e = 0; n2 = s[e++]; )
              if (n2.name === t2)
                return n2.adapter;
          }
          return null;
        }
      }();
      "undefined" != typeof Prism && Prism.hooks.add("wrap", function(e) {
        "keyword" === e.type && e.classes.push("keyword-" + e.content);
      });
      !function() {
        if ("undefined" != typeof Prism && "undefined" != typeof document) {
          var d = /(?:^|\s)command-line(?:\s|$)/, f = "command-line-prompt", m = "".startsWith ? function(e, t) {
            return e.startsWith(t);
          } : function(e, t) {
            return 0 === e.indexOf(t);
          };
          Prism.hooks.add("before-highlight", function(e) {
            var t = h(e);
            if (!t.complete && e.code) {
              var n = e.element.parentElement;
              if (n && /pre/i.test(n.nodeName) && (d.test(n.className) || d.test(e.element.className))) {
                var a = e.element.querySelector("." + f);
                a && a.remove();
                var s = e.code.split("\n");
                t.numberOfLines = s.length;
                var o = t.outputLines = [], r = n.getAttribute("data-output"), i = n.getAttribute("data-filter-output");
                if (null !== r)
                  r.split(",").forEach(function(e2) {
                    var t2 = e2.split("-"), n2 = parseInt(t2[0], 10), a2 = 2 === t2.length ? parseInt(t2[1], 10) : n2;
                    if (!isNaN(n2) && !isNaN(a2)) {
                      n2 < 1 && (n2 = 1), a2 > s.length && (a2 = s.length), a2--;
                      for (var r2 = --n2; r2 <= a2; r2++)
                        o[r2] = s[r2], s[r2] = "";
                    }
                  });
                else if (i)
                  for (var l = 0; l < s.length; l++)
                    m(s[l], i) && (o[l] = s[l].slice(i.length), s[l] = "");
                e.code = s.join("\n");
              } else
                t.complete = true;
            } else
              t.complete = true;
          }), Prism.hooks.add("before-insert", function(e) {
            var t = h(e);
            if (!t.complete) {
              for (var n = e.highlightedCode.split("\n"), a = t.outputLines || [], r = 0, s = a.length; r < s; r++)
                a.hasOwnProperty(r) && (n[r] = a[r]);
              e.highlightedCode = n.join("\n");
            }
          }), Prism.hooks.add("complete", function(e) {
            if (function(e2) {
              return "command-line" in (e2.vars = e2.vars || {});
            }(e)) {
              var t = h(e);
              if (!t.complete) {
                var n, a = e.element.parentElement;
                d.test(e.element.className) && (e.element.className = e.element.className.replace(d, " ")), d.test(a.className) || (a.className += " command-line");
                var r = t.numberOfLines || 0, s = c("data-prompt", "");
                if ("" !== s)
                  n = p('<span data-prompt="' + s + '"></span>', r);
                else
                  n = p('<span data-user="' + c("data-user", "user") + '" data-host="' + c("data-host", "localhost") + '"></span>', r);
                var o = document.createElement("span");
                o.className = f, o.innerHTML = n;
                for (var i = t.outputLines || [], l = 0, m2 = i.length; l < m2; l++)
                  if (i.hasOwnProperty(l)) {
                    var u = o.children[l];
                    u.removeAttribute("data-user"), u.removeAttribute("data-host"), u.removeAttribute("data-prompt");
                  }
                e.element.insertBefore(o, e.element.firstChild), t.complete = true;
              }
            }
            function c(e2, t2) {
              return (a.getAttribute(e2) || t2).replace(/"/g, "&quot");
            }
          });
        }
        function p(e, t) {
          for (var n = "", a = 0; a < t; a++)
            n += e;
          return n;
        }
        function h(e) {
          var t = e.vars = e.vars || {};
          return t["command-line"] = t["command-line"] || {};
        }
      }();
      !function() {
        if ("undefined" != typeof Prism && "undefined" != typeof document) {
          var i = [], l = {}, d = function() {
          };
          Prism.plugins.toolbar = {};
          var e = Prism.plugins.toolbar.registerButton = function(e2, n) {
            var t2;
            t2 = "function" == typeof n ? n : function(e3) {
              var t3;
              return "function" == typeof n.onClick ? ((t3 = document.createElement("button")).type = "button", t3.addEventListener("click", function() {
                n.onClick.call(this, e3);
              })) : "string" == typeof n.url ? (t3 = document.createElement("a")).href = n.url : t3 = document.createElement("span"), n.className && t3.classList.add(n.className), t3.textContent = n.text, t3;
            }, e2 in l ? console.warn('There is a button with the key "' + e2 + '" registered already.') : i.push(l[e2] = t2);
          }, t = Prism.plugins.toolbar.hook = function(a) {
            var e2 = a.element.parentNode;
            if (e2 && /pre/i.test(e2.nodeName) && !e2.parentNode.classList.contains("code-toolbar")) {
              var t2 = document.createElement("div");
              t2.classList.add("code-toolbar"), e2.parentNode.insertBefore(t2, e2), t2.appendChild(e2);
              var r = document.createElement("div");
              r.classList.add("toolbar");
              var n = i, o = function(e3) {
                for (; e3; ) {
                  var t3 = e3.getAttribute("data-toolbar-order");
                  if (null != t3)
                    return (t3 = t3.trim()).length ? t3.split(/\s*,\s*/g) : [];
                  e3 = e3.parentElement;
                }
              }(a.element);
              o && (n = o.map(function(e3) {
                return l[e3] || d;
              })), n.forEach(function(e3) {
                var t3 = e3(a);
                if (t3) {
                  var n2 = document.createElement("div");
                  n2.classList.add("toolbar-item"), n2.appendChild(t3), r.appendChild(n2);
                }
              }), t2.appendChild(r);
            }
          };
          e("label", function(e2) {
            var t2 = e2.element.parentNode;
            if (t2 && /pre/i.test(t2.nodeName) && t2.hasAttribute("data-label")) {
              var n, a, r = t2.getAttribute("data-label");
              try {
                a = document.querySelector("template#" + r);
              } catch (e3) {
              }
              return a ? n = a.content : (t2.hasAttribute("data-url") ? (n = document.createElement("a")).href = t2.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n;
            }
          }), Prism.hooks.add("complete", t);
        }
      }();
      !function() {
        function u(t, e) {
          t.addEventListener("click", function() {
            !function(t2) {
              navigator.clipboard ? navigator.clipboard.writeText(t2.getText()).then(t2.success, function() {
                o(t2);
              }) : o(t2);
            }(e);
          });
        }
        function o(e) {
          var t = document.createElement("textarea");
          t.value = e.getText(), t.style.top = "0", t.style.left = "0", t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
          try {
            var o2 = document.execCommand("copy");
            setTimeout(function() {
              o2 ? e.success() : e.error();
            }, 1);
          } catch (t2) {
            setTimeout(function() {
              e.error(t2);
            }, 1);
          }
          document.body.removeChild(t);
        }
        "undefined" != typeof Prism && "undefined" != typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(t) {
          var e = t.element, o2 = function(t2) {
            var e2 = { copy: "Copy", "copy-error": "Press Ctrl+C to copy", "copy-success": "Copied!", "copy-timeout": 5e3 };
            for (var o3 in e2) {
              for (var n2 = "data-prismjs-" + o3, c2 = t2; c2 && !c2.hasAttribute(n2); )
                c2 = c2.parentElement;
              c2 && (e2[o3] = c2.getAttribute(n2));
            }
            return e2;
          }(e), n = document.createElement("button");
          n.className = "copy-to-clipboard-button", n.setAttribute("type", "button");
          var c = document.createElement("span");
          return n.appendChild(c), i("copy"), u(n, { getText: function() {
            return e.textContent;
          }, success: function() {
            i("copy-success"), r();
          }, error: function() {
            i("copy-error"), setTimeout(function() {
              !function(t2) {
                window.getSelection().selectAllChildren(t2);
              }(e);
            }, 1), r();
          } }), n;
          function r() {
            setTimeout(function() {
              i("copy");
            }, o2["copy-timeout"]);
          }
          function i(t2) {
            c.textContent = o2[t2], n.setAttribute("data-copy-state", t2);
          }
        }) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."));
      }();
    }
  });
  require_stdin();
})();

;
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // <stdin>
  var require_stdin = __commonJS({
    "<stdin>"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["katex"] = factory();
        else
          root["katex"] = factory();
      })(typeof self !== "undefined" ? self : exports, function() {
        return (
          /******/
          function() {
            "use strict";
            var __webpack_require__ = {};
            !function() {
              __webpack_require__.d = function(exports2, definition) {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            }();
            !function() {
              __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              };
            }();
            var __webpack_exports__ = {};
            __webpack_require__.d(__webpack_exports__, {
              "default": function() {
                return (
                  /* binding */
                  katex_webpack
                );
              }
            });
            ;
            var ParseError = (
              // Error start position based on passed-in Token or ParseNode.
              // Length of affected text based on passed-in Token or ParseNode.
              // The underlying error message without any context added.
              function ParseError2(message, token) {
                this.name = void 0;
                this.position = void 0;
                this.length = void 0;
                this.rawMessage = void 0;
                var error = "KaTeX parse error: " + message;
                var start;
                var end;
                var loc = token && token.loc;
                if (loc && loc.start <= loc.end) {
                  var input = loc.lexer.input;
                  start = loc.start;
                  end = loc.end;
                  if (start === input.length) {
                    error += " at end of input: ";
                  } else {
                    error += " at position " + (start + 1) + ": ";
                  }
                  var underlined = input.slice(start, end).replace(/[^]/g, "$&\u0332");
                  var left;
                  if (start > 15) {
                    left = "\u2026" + input.slice(start - 15, start);
                  } else {
                    left = input.slice(0, start);
                  }
                  var right;
                  if (end + 15 < input.length) {
                    right = input.slice(end, end + 15) + "\u2026";
                  } else {
                    right = input.slice(end);
                  }
                  error += left + underlined + right;
                }
                var self2 = new Error(error);
                self2.name = "ParseError";
                self2.__proto__ = ParseError2.prototype;
                self2.position = start;
                if (start != null && end != null) {
                  self2.length = end - start;
                }
                self2.rawMessage = message;
                return self2;
              }
            );
            ParseError.prototype.__proto__ = Error.prototype;
            var src_ParseError = ParseError;
            ;
            var contains = function contains2(list, elem) {
              return list.indexOf(elem) !== -1;
            };
            var deflt = function deflt2(setting, defaultIfUndefined) {
              return setting === void 0 ? defaultIfUndefined : setting;
            };
            var uppercase = /([A-Z])/g;
            var hyphenate = function hyphenate2(str) {
              return str.replace(uppercase, "-$1").toLowerCase();
            };
            var ESCAPE_LOOKUP = {
              "&": "&amp;",
              ">": "&gt;",
              "<": "&lt;",
              '"': "&quot;",
              "'": "&#x27;"
            };
            var ESCAPE_REGEX = /[&><"']/g;
            function utils_escape(text) {
              return String(text).replace(ESCAPE_REGEX, function(match) {
                return ESCAPE_LOOKUP[match];
              });
            }
            var getBaseElem = function getBaseElem2(group) {
              if (group.type === "ordgroup") {
                if (group.body.length === 1) {
                  return getBaseElem2(group.body[0]);
                } else {
                  return group;
                }
              } else if (group.type === "color") {
                if (group.body.length === 1) {
                  return getBaseElem2(group.body[0]);
                } else {
                  return group;
                }
              } else if (group.type === "font") {
                return getBaseElem2(group.body);
              } else {
                return group;
              }
            };
            var isCharacterBox = function isCharacterBox2(group) {
              var baseElem = getBaseElem(group);
              return baseElem.type === "mathord" || baseElem.type === "textord" || baseElem.type === "atom";
            };
            var assert = function assert2(value) {
              if (!value) {
                throw new Error("Expected non-null, but got " + String(value));
              }
              return value;
            };
            var protocolFromUrl = function protocolFromUrl2(url) {
              var protocol = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(url);
              return protocol != null ? protocol[1] : "_relative";
            };
            var utils = {
              contains,
              deflt,
              escape: utils_escape,
              hyphenate,
              getBaseElem,
              isCharacterBox,
              protocolFromUrl
            };
            ;
            var SETTINGS_SCHEMA = {
              displayMode: {
                type: "boolean",
                description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
                cli: "-d, --display-mode"
              },
              output: {
                type: {
                  enum: ["htmlAndMathml", "html", "mathml"]
                },
                description: "Determines the markup language of the output.",
                cli: "-F, --format <type>"
              },
              leqno: {
                type: "boolean",
                description: "Render display math in leqno style (left-justified tags)."
              },
              fleqn: {
                type: "boolean",
                description: "Render display math flush left."
              },
              throwOnError: {
                type: "boolean",
                default: true,
                cli: "-t, --no-throw-on-error",
                cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
              },
              errorColor: {
                type: "string",
                default: "#cc0000",
                cli: "-c, --error-color <color>",
                cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
                cliProcessor: function cliProcessor(color) {
                  return "#" + color;
                }
              },
              macros: {
                type: "object",
                cli: "-m, --macro <def>",
                cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
                cliDefault: [],
                cliProcessor: function cliProcessor(def, defs) {
                  defs.push(def);
                  return defs;
                }
              },
              minRuleThickness: {
                type: "number",
                description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
                processor: function processor(t) {
                  return Math.max(0, t);
                },
                cli: "--min-rule-thickness <size>",
                cliProcessor: parseFloat
              },
              colorIsTextColor: {
                type: "boolean",
                description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
                cli: "-b, --color-is-text-color"
              },
              strict: {
                type: [{
                  enum: ["warn", "ignore", "error"]
                }, "boolean", "function"],
                description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
                cli: "-S, --strict",
                cliDefault: false
              },
              trust: {
                type: ["boolean", "function"],
                description: "Trust the input, enabling all HTML features such as \\url.",
                cli: "-T, --trust"
              },
              maxSize: {
                type: "number",
                default: Infinity,
                description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
                processor: function processor(s) {
                  return Math.max(0, s);
                },
                cli: "-s, --max-size <n>",
                cliProcessor: parseInt
              },
              maxExpand: {
                type: "number",
                default: 1e3,
                description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
                processor: function processor(n) {
                  return Math.max(0, n);
                },
                cli: "-e, --max-expand <n>",
                cliProcessor: function cliProcessor(n) {
                  return n === "Infinity" ? Infinity : parseInt(n);
                }
              },
              globalGroup: {
                type: "boolean",
                cli: false
              }
            };
            function getDefaultValue(schema) {
              if (schema.default) {
                return schema.default;
              }
              var type = schema.type;
              var defaultType = Array.isArray(type) ? type[0] : type;
              if (typeof defaultType !== "string") {
                return defaultType.enum[0];
              }
              switch (defaultType) {
                case "boolean":
                  return false;
                case "string":
                  return "";
                case "number":
                  return 0;
                case "object":
                  return {};
              }
            }
            var Settings = /* @__PURE__ */ function() {
              function Settings2(options) {
                this.displayMode = void 0;
                this.output = void 0;
                this.leqno = void 0;
                this.fleqn = void 0;
                this.throwOnError = void 0;
                this.errorColor = void 0;
                this.macros = void 0;
                this.minRuleThickness = void 0;
                this.colorIsTextColor = void 0;
                this.strict = void 0;
                this.trust = void 0;
                this.maxSize = void 0;
                this.maxExpand = void 0;
                this.globalGroup = void 0;
                options = options || {};
                for (var prop in SETTINGS_SCHEMA) {
                  if (SETTINGS_SCHEMA.hasOwnProperty(prop)) {
                    var schema = SETTINGS_SCHEMA[prop];
                    this[prop] = options[prop] !== void 0 ? schema.processor ? schema.processor(options[prop]) : options[prop] : getDefaultValue(schema);
                  }
                }
              }
              var _proto = Settings2.prototype;
              _proto.reportNonstrict = function reportNonstrict(errorCode, errorMsg, token) {
                var strict = this.strict;
                if (typeof strict === "function") {
                  strict = strict(errorCode, errorMsg, token);
                }
                if (!strict || strict === "ignore") {
                  return;
                } else if (strict === true || strict === "error") {
                  throw new src_ParseError("LaTeX-incompatible input and strict mode is set to 'error': " + (errorMsg + " [" + errorCode + "]"), token);
                } else if (strict === "warn") {
                  typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
                } else {
                  typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
                }
              };
              _proto.useStrictBehavior = function useStrictBehavior(errorCode, errorMsg, token) {
                var strict = this.strict;
                if (typeof strict === "function") {
                  try {
                    strict = strict(errorCode, errorMsg, token);
                  } catch (error) {
                    strict = "error";
                  }
                }
                if (!strict || strict === "ignore") {
                  return false;
                } else if (strict === true || strict === "error") {
                  return true;
                } else if (strict === "warn") {
                  typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (errorMsg + " [" + errorCode + "]"));
                  return false;
                } else {
                  typeof console !== "undefined" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + strict + "': " + errorMsg + " [" + errorCode + "]"));
                  return false;
                }
              };
              _proto.isTrusted = function isTrusted(context) {
                if (context.url && !context.protocol) {
                  context.protocol = utils.protocolFromUrl(context.url);
                }
                var trust = typeof this.trust === "function" ? this.trust(context) : this.trust;
                return Boolean(trust);
              };
              return Settings2;
            }();
            ;
            var Style = /* @__PURE__ */ function() {
              function Style2(id, size, cramped) {
                this.id = void 0;
                this.size = void 0;
                this.cramped = void 0;
                this.id = id;
                this.size = size;
                this.cramped = cramped;
              }
              var _proto = Style2.prototype;
              _proto.sup = function sup() {
                return styles[_sup[this.id]];
              };
              _proto.sub = function sub() {
                return styles[_sub[this.id]];
              };
              _proto.fracNum = function fracNum() {
                return styles[_fracNum[this.id]];
              };
              _proto.fracDen = function fracDen() {
                return styles[_fracDen[this.id]];
              };
              _proto.cramp = function cramp() {
                return styles[_cramp[this.id]];
              };
              _proto.text = function text() {
                return styles[_text[this.id]];
              };
              _proto.isTight = function isTight() {
                return this.size >= 2;
              };
              return Style2;
            }();
            var D = 0;
            var Dc = 1;
            var T = 2;
            var Tc = 3;
            var S = 4;
            var Sc = 5;
            var SS = 6;
            var SSc = 7;
            var styles = [new Style(D, 0, false), new Style(Dc, 0, true), new Style(T, 1, false), new Style(Tc, 1, true), new Style(S, 2, false), new Style(Sc, 2, true), new Style(SS, 3, false), new Style(SSc, 3, true)];
            var _sup = [S, Sc, S, Sc, SS, SSc, SS, SSc];
            var _sub = [Sc, Sc, Sc, Sc, SSc, SSc, SSc, SSc];
            var _fracNum = [T, Tc, S, Sc, SS, SSc, SS, SSc];
            var _fracDen = [Tc, Tc, Sc, Sc, SSc, SSc, SSc, SSc];
            var _cramp = [Dc, Dc, Tc, Tc, Sc, Sc, SSc, SSc];
            var _text = [D, Dc, T, Tc, T, Tc, T, Tc];
            var src_Style = {
              DISPLAY: styles[D],
              TEXT: styles[T],
              SCRIPT: styles[S],
              SCRIPTSCRIPT: styles[SS]
            };
            ;
            var scriptData = [{
              // Latin characters beyond the Latin-1 characters we have metrics for.
              // Needed for Czech, Hungarian and Turkish text, for example.
              name: "latin",
              blocks: [
                [256, 591],
                // Latin Extended-A and Latin Extended-B
                [768, 879]
                // Combining Diacritical marks
              ]
            }, {
              // The Cyrillic script used by Russian and related languages.
              // A Cyrillic subset used to be supported as explicitly defined
              // symbols in symbols.js
              name: "cyrillic",
              blocks: [[1024, 1279]]
            }, {
              // Armenian
              name: "armenian",
              blocks: [[1328, 1423]]
            }, {
              // The Brahmic scripts of South and Southeast Asia
              // Devanagari (0900–097F)
              // Bengali (0980–09FF)
              // Gurmukhi (0A00–0A7F)
              // Gujarati (0A80–0AFF)
              // Oriya (0B00–0B7F)
              // Tamil (0B80–0BFF)
              // Telugu (0C00–0C7F)
              // Kannada (0C80–0CFF)
              // Malayalam (0D00–0D7F)
              // Sinhala (0D80–0DFF)
              // Thai (0E00–0E7F)
              // Lao (0E80–0EFF)
              // Tibetan (0F00–0FFF)
              // Myanmar (1000–109F)
              name: "brahmic",
              blocks: [[2304, 4255]]
            }, {
              name: "georgian",
              blocks: [[4256, 4351]]
            }, {
              // Chinese and Japanese.
              // The "k" in cjk is for Korean, but we've separated Korean out
              name: "cjk",
              blocks: [
                [12288, 12543],
                // CJK symbols and punctuation, Hiragana, Katakana
                [19968, 40879],
                // CJK ideograms
                [65280, 65376]
                // Fullwidth punctuation
                // TODO: add halfwidth Katakana and Romanji glyphs
              ]
            }, {
              // Korean
              name: "hangul",
              blocks: [[44032, 55215]]
            }];
            function scriptFromCodepoint(codepoint) {
              for (var i2 = 0; i2 < scriptData.length; i2++) {
                var script = scriptData[i2];
                for (var _i6 = 0; _i6 < script.blocks.length; _i6++) {
                  var block = script.blocks[_i6];
                  if (codepoint >= block[0] && codepoint <= block[1]) {
                    return script.name;
                  }
                }
              }
              return null;
            }
            var allBlocks = [];
            scriptData.forEach(function(s) {
              return s.blocks.forEach(function(b) {
                return allBlocks.push.apply(allBlocks, b);
              });
            });
            function supportedCodepoint(codepoint) {
              for (var i2 = 0; i2 < allBlocks.length; i2 += 2) {
                if (codepoint >= allBlocks[i2] && codepoint <= allBlocks[i2 + 1]) {
                  return true;
                }
              }
              return false;
            }
            ;
            var hLinePad = 80;
            var sqrtMain = function sqrtMain2(extraVinculum, hLinePad2) {
              return "M95," + (622 + extraVinculum + hLinePad2) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + extraVinculum / 2.075 + " -" + extraVinculum + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + extraVinculum) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + extraVinculum) + " " + hLinePad2 + "h400000v" + (40 + extraVinculum) + "h-400000z";
            };
            var sqrtSize1 = function sqrtSize12(extraVinculum, hLinePad2) {
              return "M263," + (601 + extraVinculum + hLinePad2) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + extraVinculum / 2.084 + " -" + extraVinculum + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + extraVinculum) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + extraVinculum) + " " + hLinePad2 + "h400000v" + (40 + extraVinculum) + "h-400000z";
            };
            var sqrtSize2 = function sqrtSize22(extraVinculum, hLinePad2) {
              return "M983 " + (10 + extraVinculum + hLinePad2) + "\nl" + extraVinculum / 3.13 + " -" + extraVinculum + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + extraVinculum) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + extraVinculum) + " " + hLinePad2 + "h400000v" + (40 + extraVinculum) + "h-400000z";
            };
            var sqrtSize3 = function sqrtSize32(extraVinculum, hLinePad2) {
              return "M424," + (2398 + extraVinculum + hLinePad2) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + extraVinculum / 4.223 + " -" + extraVinculum + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + extraVinculum) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + extraVinculum) + " " + hLinePad2 + "\nh400000v" + (40 + extraVinculum) + "h-400000z";
            };
            var sqrtSize4 = function sqrtSize42(extraVinculum, hLinePad2) {
              return "M473," + (2713 + extraVinculum + hLinePad2) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + extraVinculum / 5.298 + " -" + extraVinculum + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + extraVinculum) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + extraVinculum) + " " + hLinePad2 + "h400000v" + (40 + extraVinculum) + "H1017.7z";
            };
            var phasePath = function phasePath2(y) {
              var x = y / 2;
              return "M400000 " + y + " H0 L" + x + " 0 l65 45 L145 " + (y - 80) + " H400000z";
            };
            var sqrtTall = function sqrtTall2(extraVinculum, hLinePad2, viewBoxHeight) {
              var vertSegment = viewBoxHeight - 54 - hLinePad2 - extraVinculum;
              return "M702 " + (extraVinculum + hLinePad2) + "H400000" + (40 + extraVinculum) + "\nH742v" + vertSegment + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + hLinePad2 + "H400000v" + (40 + extraVinculum) + "H742z";
            };
            var sqrtPath = function sqrtPath2(size, extraVinculum, viewBoxHeight) {
              extraVinculum = 1e3 * extraVinculum;
              var path2 = "";
              switch (size) {
                case "sqrtMain":
                  path2 = sqrtMain(extraVinculum, hLinePad);
                  break;
                case "sqrtSize1":
                  path2 = sqrtSize1(extraVinculum, hLinePad);
                  break;
                case "sqrtSize2":
                  path2 = sqrtSize2(extraVinculum, hLinePad);
                  break;
                case "sqrtSize3":
                  path2 = sqrtSize3(extraVinculum, hLinePad);
                  break;
                case "sqrtSize4":
                  path2 = sqrtSize4(extraVinculum, hLinePad);
                  break;
                case "sqrtTall":
                  path2 = sqrtTall(extraVinculum, hLinePad, viewBoxHeight);
              }
              return path2;
            };
            var innerPath = function innerPath2(name, height) {
              switch (name) {
                case "\u239C":
                  return "M291 0 H417 V" + height + " H291z M291 0 H417 V" + height + " H291z";
                case "\u2223":
                  return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z";
                case "\u2225":
                  return "M145 0 H188 V" + height + " H145z M145 0 H188 V" + height + " H145z" + ("M367 0 H410 V" + height + " H367z M367 0 H410 V" + height + " H367z");
                case "\u239F":
                  return "M457 0 H583 V" + height + " H457z M457 0 H583 V" + height + " H457z";
                case "\u23A2":
                  return "M319 0 H403 V" + height + " H319z M319 0 H403 V" + height + " H319z";
                case "\u23A5":
                  return "M263 0 H347 V" + height + " H263z M263 0 H347 V" + height + " H263z";
                case "\u23AA":
                  return "M384 0 H504 V" + height + " H384z M384 0 H504 V" + height + " H384z";
                case "\u23D0":
                  return "M312 0 H355 V" + height + " H312z M312 0 H355 V" + height + " H312z";
                case "\u2016":
                  return "M257 0 H300 V" + height + " H257z M257 0 H300 V" + height + " H257z" + ("M478 0 H521 V" + height + " H478z M478 0 H521 V" + height + " H478z");
                default:
                  return "";
              }
            };
            var path = {
              // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
              doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
              // doublerightarrow is from glyph U+21D2 in font KaTeX Main
              doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
              // leftarrow is from glyph U+2190 in font KaTeX Main
              leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
              // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
              leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
              leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
              // overgroup is from the MnSymbol package (public domain)
              leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
              leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
              // Harpoons are from glyph U+21BD in font KaTeX Main
              leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
              leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
              leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
              leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
              // hook is from glyph U+21A9 in font KaTeX Main
              lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
              leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
              leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
              // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
              leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
              longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
              midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
              midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
              oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
              oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
              oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
              oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
              rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
              rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
              rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
              rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
              rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
              rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
              rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
              rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
              rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
              righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
              rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
              rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
              // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
              twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
              twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
              // tilde1 is a modified version of a glyph from the MnSymbol package
              tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
              // ditto tilde2, tilde3, & tilde4
              tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
              tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
              tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
              // vec is from glyph U+20D7 in font KaTeX Main
              vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
              // widehat1 is a modified version of a glyph from the MnSymbol package
              widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
              // ditto widehat2, widehat3, & widehat4
              widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
              widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
              widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
              // widecheck paths are all inverted versions of widehat
              widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
              widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
              widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
              widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
              // The next ten paths support reaction arrows from the mhchem package.
              // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
              // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
              baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
              // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
              rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
              // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
              // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
              baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
              rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
              shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
              shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
            };
            var tallDelim = function tallDelim2(label, midHeight) {
              switch (label) {
                case "lbrack":
                  return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + midHeight + " v1759 h84z";
                case "rbrack":
                  return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + midHeight + " v1759 h84z";
                case "vert":
                  return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z";
                case "doublevert":
                  return "M145 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + midHeight + " v585 h43z\nM367 15 v585 v" + midHeight + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -midHeight + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + midHeight + " v585 h43z";
                case "lfloor":
                  return "M319 602 V0 H403 V602 v" + midHeight + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
                case "rfloor":
                  return "M319 602 V0 H403 V602 v" + midHeight + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + midHeight + " v1715 H319z";
                case "lceil":
                  return "M403 1759 V84 H666 V0 H319 V1759 v" + midHeight + " v602 h84z\nM403 1759 V0 H319 V1759 v" + midHeight + " v602 h84z";
                case "rceil":
                  return "M347 1759 V0 H0 V84 H263 V1759 v" + midHeight + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + midHeight + " v602 h84z";
                case "lparen":
                  return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (midHeight + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (midHeight + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
                case "rparen":
                  return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (midHeight + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (midHeight + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
                default:
                  throw new Error("Unknown stretchy delimiter.");
              }
            };
            ;
            var DocumentFragment = /* @__PURE__ */ function() {
              function DocumentFragment2(children) {
                this.children = void 0;
                this.classes = void 0;
                this.height = void 0;
                this.depth = void 0;
                this.maxFontSize = void 0;
                this.style = void 0;
                this.children = children;
                this.classes = [];
                this.height = 0;
                this.depth = 0;
                this.maxFontSize = 0;
                this.style = {};
              }
              var _proto = DocumentFragment2.prototype;
              _proto.hasClass = function hasClass(className) {
                return utils.contains(this.classes, className);
              };
              _proto.toNode = function toNode() {
                var frag = document.createDocumentFragment();
                for (var i2 = 0; i2 < this.children.length; i2++) {
                  frag.appendChild(this.children[i2].toNode());
                }
                return frag;
              };
              _proto.toMarkup = function toMarkup() {
                var markup = "";
                for (var i2 = 0; i2 < this.children.length; i2++) {
                  markup += this.children[i2].toMarkup();
                }
                return markup;
              };
              _proto.toText = function toText() {
                var toText2 = function toText3(child) {
                  return child.toText();
                };
                return this.children.map(toText2).join("");
              };
              return DocumentFragment2;
            }();
            ;
            var fontMetricsData = {
              "AMS-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "65": [0, 0.68889, 0, 0, 0.72222],
                "66": [0, 0.68889, 0, 0, 0.66667],
                "67": [0, 0.68889, 0, 0, 0.72222],
                "68": [0, 0.68889, 0, 0, 0.72222],
                "69": [0, 0.68889, 0, 0, 0.66667],
                "70": [0, 0.68889, 0, 0, 0.61111],
                "71": [0, 0.68889, 0, 0, 0.77778],
                "72": [0, 0.68889, 0, 0, 0.77778],
                "73": [0, 0.68889, 0, 0, 0.38889],
                "74": [0.16667, 0.68889, 0, 0, 0.5],
                "75": [0, 0.68889, 0, 0, 0.77778],
                "76": [0, 0.68889, 0, 0, 0.66667],
                "77": [0, 0.68889, 0, 0, 0.94445],
                "78": [0, 0.68889, 0, 0, 0.72222],
                "79": [0.16667, 0.68889, 0, 0, 0.77778],
                "80": [0, 0.68889, 0, 0, 0.61111],
                "81": [0.16667, 0.68889, 0, 0, 0.77778],
                "82": [0, 0.68889, 0, 0, 0.72222],
                "83": [0, 0.68889, 0, 0, 0.55556],
                "84": [0, 0.68889, 0, 0, 0.66667],
                "85": [0, 0.68889, 0, 0, 0.72222],
                "86": [0, 0.68889, 0, 0, 0.72222],
                "87": [0, 0.68889, 0, 0, 1],
                "88": [0, 0.68889, 0, 0, 0.72222],
                "89": [0, 0.68889, 0, 0, 0.72222],
                "90": [0, 0.68889, 0, 0, 0.66667],
                "107": [0, 0.68889, 0, 0, 0.55556],
                "160": [0, 0, 0, 0, 0.25],
                "165": [0, 0.675, 0.025, 0, 0.75],
                "174": [0.15559, 0.69224, 0, 0, 0.94666],
                "240": [0, 0.68889, 0, 0, 0.55556],
                "295": [0, 0.68889, 0, 0, 0.54028],
                "710": [0, 0.825, 0, 0, 2.33334],
                "732": [0, 0.9, 0, 0, 2.33334],
                "770": [0, 0.825, 0, 0, 2.33334],
                "771": [0, 0.9, 0, 0, 2.33334],
                "989": [0.08167, 0.58167, 0, 0, 0.77778],
                "1008": [0, 0.43056, 0.04028, 0, 0.66667],
                "8245": [0, 0.54986, 0, 0, 0.275],
                "8463": [0, 0.68889, 0, 0, 0.54028],
                "8487": [0, 0.68889, 0, 0, 0.72222],
                "8498": [0, 0.68889, 0, 0, 0.55556],
                "8502": [0, 0.68889, 0, 0, 0.66667],
                "8503": [0, 0.68889, 0, 0, 0.44445],
                "8504": [0, 0.68889, 0, 0, 0.66667],
                "8513": [0, 0.68889, 0, 0, 0.63889],
                "8592": [-0.03598, 0.46402, 0, 0, 0.5],
                "8594": [-0.03598, 0.46402, 0, 0, 0.5],
                "8602": [-0.13313, 0.36687, 0, 0, 1],
                "8603": [-0.13313, 0.36687, 0, 0, 1],
                "8606": [0.01354, 0.52239, 0, 0, 1],
                "8608": [0.01354, 0.52239, 0, 0, 1],
                "8610": [0.01354, 0.52239, 0, 0, 1.11111],
                "8611": [0.01354, 0.52239, 0, 0, 1.11111],
                "8619": [0, 0.54986, 0, 0, 1],
                "8620": [0, 0.54986, 0, 0, 1],
                "8621": [-0.13313, 0.37788, 0, 0, 1.38889],
                "8622": [-0.13313, 0.36687, 0, 0, 1],
                "8624": [0, 0.69224, 0, 0, 0.5],
                "8625": [0, 0.69224, 0, 0, 0.5],
                "8630": [0, 0.43056, 0, 0, 1],
                "8631": [0, 0.43056, 0, 0, 1],
                "8634": [0.08198, 0.58198, 0, 0, 0.77778],
                "8635": [0.08198, 0.58198, 0, 0, 0.77778],
                "8638": [0.19444, 0.69224, 0, 0, 0.41667],
                "8639": [0.19444, 0.69224, 0, 0, 0.41667],
                "8642": [0.19444, 0.69224, 0, 0, 0.41667],
                "8643": [0.19444, 0.69224, 0, 0, 0.41667],
                "8644": [0.1808, 0.675, 0, 0, 1],
                "8646": [0.1808, 0.675, 0, 0, 1],
                "8647": [0.1808, 0.675, 0, 0, 1],
                "8648": [0.19444, 0.69224, 0, 0, 0.83334],
                "8649": [0.1808, 0.675, 0, 0, 1],
                "8650": [0.19444, 0.69224, 0, 0, 0.83334],
                "8651": [0.01354, 0.52239, 0, 0, 1],
                "8652": [0.01354, 0.52239, 0, 0, 1],
                "8653": [-0.13313, 0.36687, 0, 0, 1],
                "8654": [-0.13313, 0.36687, 0, 0, 1],
                "8655": [-0.13313, 0.36687, 0, 0, 1],
                "8666": [0.13667, 0.63667, 0, 0, 1],
                "8667": [0.13667, 0.63667, 0, 0, 1],
                "8669": [-0.13313, 0.37788, 0, 0, 1],
                "8672": [-0.064, 0.437, 0, 0, 1.334],
                "8674": [-0.064, 0.437, 0, 0, 1.334],
                "8705": [0, 0.825, 0, 0, 0.5],
                "8708": [0, 0.68889, 0, 0, 0.55556],
                "8709": [0.08167, 0.58167, 0, 0, 0.77778],
                "8717": [0, 0.43056, 0, 0, 0.42917],
                "8722": [-0.03598, 0.46402, 0, 0, 0.5],
                "8724": [0.08198, 0.69224, 0, 0, 0.77778],
                "8726": [0.08167, 0.58167, 0, 0, 0.77778],
                "8733": [0, 0.69224, 0, 0, 0.77778],
                "8736": [0, 0.69224, 0, 0, 0.72222],
                "8737": [0, 0.69224, 0, 0, 0.72222],
                "8738": [0.03517, 0.52239, 0, 0, 0.72222],
                "8739": [0.08167, 0.58167, 0, 0, 0.22222],
                "8740": [0.25142, 0.74111, 0, 0, 0.27778],
                "8741": [0.08167, 0.58167, 0, 0, 0.38889],
                "8742": [0.25142, 0.74111, 0, 0, 0.5],
                "8756": [0, 0.69224, 0, 0, 0.66667],
                "8757": [0, 0.69224, 0, 0, 0.66667],
                "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
                "8765": [-0.13313, 0.37788, 0, 0, 0.77778],
                "8769": [-0.13313, 0.36687, 0, 0, 0.77778],
                "8770": [-0.03625, 0.46375, 0, 0, 0.77778],
                "8774": [0.30274, 0.79383, 0, 0, 0.77778],
                "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
                "8778": [0.08167, 0.58167, 0, 0, 0.77778],
                "8782": [0.06062, 0.54986, 0, 0, 0.77778],
                "8783": [0.06062, 0.54986, 0, 0, 0.77778],
                "8785": [0.08198, 0.58198, 0, 0, 0.77778],
                "8786": [0.08198, 0.58198, 0, 0, 0.77778],
                "8787": [0.08198, 0.58198, 0, 0, 0.77778],
                "8790": [0, 0.69224, 0, 0, 0.77778],
                "8791": [0.22958, 0.72958, 0, 0, 0.77778],
                "8796": [0.08198, 0.91667, 0, 0, 0.77778],
                "8806": [0.25583, 0.75583, 0, 0, 0.77778],
                "8807": [0.25583, 0.75583, 0, 0, 0.77778],
                "8808": [0.25142, 0.75726, 0, 0, 0.77778],
                "8809": [0.25142, 0.75726, 0, 0, 0.77778],
                "8812": [0.25583, 0.75583, 0, 0, 0.5],
                "8814": [0.20576, 0.70576, 0, 0, 0.77778],
                "8815": [0.20576, 0.70576, 0, 0, 0.77778],
                "8816": [0.30274, 0.79383, 0, 0, 0.77778],
                "8817": [0.30274, 0.79383, 0, 0, 0.77778],
                "8818": [0.22958, 0.72958, 0, 0, 0.77778],
                "8819": [0.22958, 0.72958, 0, 0, 0.77778],
                "8822": [0.1808, 0.675, 0, 0, 0.77778],
                "8823": [0.1808, 0.675, 0, 0, 0.77778],
                "8828": [0.13667, 0.63667, 0, 0, 0.77778],
                "8829": [0.13667, 0.63667, 0, 0, 0.77778],
                "8830": [0.22958, 0.72958, 0, 0, 0.77778],
                "8831": [0.22958, 0.72958, 0, 0, 0.77778],
                "8832": [0.20576, 0.70576, 0, 0, 0.77778],
                "8833": [0.20576, 0.70576, 0, 0, 0.77778],
                "8840": [0.30274, 0.79383, 0, 0, 0.77778],
                "8841": [0.30274, 0.79383, 0, 0, 0.77778],
                "8842": [0.13597, 0.63597, 0, 0, 0.77778],
                "8843": [0.13597, 0.63597, 0, 0, 0.77778],
                "8847": [0.03517, 0.54986, 0, 0, 0.77778],
                "8848": [0.03517, 0.54986, 0, 0, 0.77778],
                "8858": [0.08198, 0.58198, 0, 0, 0.77778],
                "8859": [0.08198, 0.58198, 0, 0, 0.77778],
                "8861": [0.08198, 0.58198, 0, 0, 0.77778],
                "8862": [0, 0.675, 0, 0, 0.77778],
                "8863": [0, 0.675, 0, 0, 0.77778],
                "8864": [0, 0.675, 0, 0, 0.77778],
                "8865": [0, 0.675, 0, 0, 0.77778],
                "8872": [0, 0.69224, 0, 0, 0.61111],
                "8873": [0, 0.69224, 0, 0, 0.72222],
                "8874": [0, 0.69224, 0, 0, 0.88889],
                "8876": [0, 0.68889, 0, 0, 0.61111],
                "8877": [0, 0.68889, 0, 0, 0.61111],
                "8878": [0, 0.68889, 0, 0, 0.72222],
                "8879": [0, 0.68889, 0, 0, 0.72222],
                "8882": [0.03517, 0.54986, 0, 0, 0.77778],
                "8883": [0.03517, 0.54986, 0, 0, 0.77778],
                "8884": [0.13667, 0.63667, 0, 0, 0.77778],
                "8885": [0.13667, 0.63667, 0, 0, 0.77778],
                "8888": [0, 0.54986, 0, 0, 1.11111],
                "8890": [0.19444, 0.43056, 0, 0, 0.55556],
                "8891": [0.19444, 0.69224, 0, 0, 0.61111],
                "8892": [0.19444, 0.69224, 0, 0, 0.61111],
                "8901": [0, 0.54986, 0, 0, 0.27778],
                "8903": [0.08167, 0.58167, 0, 0, 0.77778],
                "8905": [0.08167, 0.58167, 0, 0, 0.77778],
                "8906": [0.08167, 0.58167, 0, 0, 0.77778],
                "8907": [0, 0.69224, 0, 0, 0.77778],
                "8908": [0, 0.69224, 0, 0, 0.77778],
                "8909": [-0.03598, 0.46402, 0, 0, 0.77778],
                "8910": [0, 0.54986, 0, 0, 0.76042],
                "8911": [0, 0.54986, 0, 0, 0.76042],
                "8912": [0.03517, 0.54986, 0, 0, 0.77778],
                "8913": [0.03517, 0.54986, 0, 0, 0.77778],
                "8914": [0, 0.54986, 0, 0, 0.66667],
                "8915": [0, 0.54986, 0, 0, 0.66667],
                "8916": [0, 0.69224, 0, 0, 0.66667],
                "8918": [0.0391, 0.5391, 0, 0, 0.77778],
                "8919": [0.0391, 0.5391, 0, 0, 0.77778],
                "8920": [0.03517, 0.54986, 0, 0, 1.33334],
                "8921": [0.03517, 0.54986, 0, 0, 1.33334],
                "8922": [0.38569, 0.88569, 0, 0, 0.77778],
                "8923": [0.38569, 0.88569, 0, 0, 0.77778],
                "8926": [0.13667, 0.63667, 0, 0, 0.77778],
                "8927": [0.13667, 0.63667, 0, 0, 0.77778],
                "8928": [0.30274, 0.79383, 0, 0, 0.77778],
                "8929": [0.30274, 0.79383, 0, 0, 0.77778],
                "8934": [0.23222, 0.74111, 0, 0, 0.77778],
                "8935": [0.23222, 0.74111, 0, 0, 0.77778],
                "8936": [0.23222, 0.74111, 0, 0, 0.77778],
                "8937": [0.23222, 0.74111, 0, 0, 0.77778],
                "8938": [0.20576, 0.70576, 0, 0, 0.77778],
                "8939": [0.20576, 0.70576, 0, 0, 0.77778],
                "8940": [0.30274, 0.79383, 0, 0, 0.77778],
                "8941": [0.30274, 0.79383, 0, 0, 0.77778],
                "8994": [0.19444, 0.69224, 0, 0, 0.77778],
                "8995": [0.19444, 0.69224, 0, 0, 0.77778],
                "9416": [0.15559, 0.69224, 0, 0, 0.90222],
                "9484": [0, 0.69224, 0, 0, 0.5],
                "9488": [0, 0.69224, 0, 0, 0.5],
                "9492": [0, 0.37788, 0, 0, 0.5],
                "9496": [0, 0.37788, 0, 0, 0.5],
                "9585": [0.19444, 0.68889, 0, 0, 0.88889],
                "9586": [0.19444, 0.74111, 0, 0, 0.88889],
                "9632": [0, 0.675, 0, 0, 0.77778],
                "9633": [0, 0.675, 0, 0, 0.77778],
                "9650": [0, 0.54986, 0, 0, 0.72222],
                "9651": [0, 0.54986, 0, 0, 0.72222],
                "9654": [0.03517, 0.54986, 0, 0, 0.77778],
                "9660": [0, 0.54986, 0, 0, 0.72222],
                "9661": [0, 0.54986, 0, 0, 0.72222],
                "9664": [0.03517, 0.54986, 0, 0, 0.77778],
                "9674": [0.11111, 0.69224, 0, 0, 0.66667],
                "9733": [0.19444, 0.69224, 0, 0, 0.94445],
                "10003": [0, 0.69224, 0, 0, 0.83334],
                "10016": [0, 0.69224, 0, 0, 0.83334],
                "10731": [0.11111, 0.69224, 0, 0, 0.66667],
                "10846": [0.19444, 0.75583, 0, 0, 0.61111],
                "10877": [0.13667, 0.63667, 0, 0, 0.77778],
                "10878": [0.13667, 0.63667, 0, 0, 0.77778],
                "10885": [0.25583, 0.75583, 0, 0, 0.77778],
                "10886": [0.25583, 0.75583, 0, 0, 0.77778],
                "10887": [0.13597, 0.63597, 0, 0, 0.77778],
                "10888": [0.13597, 0.63597, 0, 0, 0.77778],
                "10889": [0.26167, 0.75726, 0, 0, 0.77778],
                "10890": [0.26167, 0.75726, 0, 0, 0.77778],
                "10891": [0.48256, 0.98256, 0, 0, 0.77778],
                "10892": [0.48256, 0.98256, 0, 0, 0.77778],
                "10901": [0.13667, 0.63667, 0, 0, 0.77778],
                "10902": [0.13667, 0.63667, 0, 0, 0.77778],
                "10933": [0.25142, 0.75726, 0, 0, 0.77778],
                "10934": [0.25142, 0.75726, 0, 0, 0.77778],
                "10935": [0.26167, 0.75726, 0, 0, 0.77778],
                "10936": [0.26167, 0.75726, 0, 0, 0.77778],
                "10937": [0.26167, 0.75726, 0, 0, 0.77778],
                "10938": [0.26167, 0.75726, 0, 0, 0.77778],
                "10949": [0.25583, 0.75583, 0, 0, 0.77778],
                "10950": [0.25583, 0.75583, 0, 0, 0.77778],
                "10955": [0.28481, 0.79383, 0, 0, 0.77778],
                "10956": [0.28481, 0.79383, 0, 0, 0.77778],
                "57350": [0.08167, 0.58167, 0, 0, 0.22222],
                "57351": [0.08167, 0.58167, 0, 0, 0.38889],
                "57352": [0.08167, 0.58167, 0, 0, 0.77778],
                "57353": [0, 0.43056, 0.04028, 0, 0.66667],
                "57356": [0.25142, 0.75726, 0, 0, 0.77778],
                "57357": [0.25142, 0.75726, 0, 0, 0.77778],
                "57358": [0.41951, 0.91951, 0, 0, 0.77778],
                "57359": [0.30274, 0.79383, 0, 0, 0.77778],
                "57360": [0.30274, 0.79383, 0, 0, 0.77778],
                "57361": [0.41951, 0.91951, 0, 0, 0.77778],
                "57366": [0.25142, 0.75726, 0, 0, 0.77778],
                "57367": [0.25142, 0.75726, 0, 0, 0.77778],
                "57368": [0.25142, 0.75726, 0, 0, 0.77778],
                "57369": [0.25142, 0.75726, 0, 0, 0.77778],
                "57370": [0.13597, 0.63597, 0, 0, 0.77778],
                "57371": [0.13597, 0.63597, 0, 0, 0.77778]
              },
              "Caligraphic-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "65": [0, 0.68333, 0, 0.19445, 0.79847],
                "66": [0, 0.68333, 0.03041, 0.13889, 0.65681],
                "67": [0, 0.68333, 0.05834, 0.13889, 0.52653],
                "68": [0, 0.68333, 0.02778, 0.08334, 0.77139],
                "69": [0, 0.68333, 0.08944, 0.11111, 0.52778],
                "70": [0, 0.68333, 0.09931, 0.11111, 0.71875],
                "71": [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
                "72": [0, 0.68333, 965e-5, 0.11111, 0.84452],
                "73": [0, 0.68333, 0.07382, 0, 0.54452],
                "74": [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
                "75": [0, 0.68333, 0.01445, 0.05556, 0.76195],
                "76": [0, 0.68333, 0, 0.13889, 0.68972],
                "77": [0, 0.68333, 0, 0.13889, 1.2009],
                "78": [0, 0.68333, 0.14736, 0.08334, 0.82049],
                "79": [0, 0.68333, 0.02778, 0.11111, 0.79611],
                "80": [0, 0.68333, 0.08222, 0.08334, 0.69556],
                "81": [0.09722, 0.68333, 0, 0.11111, 0.81667],
                "82": [0, 0.68333, 0, 0.08334, 0.8475],
                "83": [0, 0.68333, 0.075, 0.13889, 0.60556],
                "84": [0, 0.68333, 0.25417, 0, 0.54464],
                "85": [0, 0.68333, 0.09931, 0.08334, 0.62583],
                "86": [0, 0.68333, 0.08222, 0, 0.61278],
                "87": [0, 0.68333, 0.08222, 0.08334, 0.98778],
                "88": [0, 0.68333, 0.14643, 0.13889, 0.7133],
                "89": [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
                "90": [0, 0.68333, 0.07944, 0.13889, 0.72473],
                "160": [0, 0, 0, 0, 0.25]
              },
              "Fraktur-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69141, 0, 0, 0.29574],
                "34": [0, 0.69141, 0, 0, 0.21471],
                "38": [0, 0.69141, 0, 0, 0.73786],
                "39": [0, 0.69141, 0, 0, 0.21201],
                "40": [0.24982, 0.74947, 0, 0, 0.38865],
                "41": [0.24982, 0.74947, 0, 0, 0.38865],
                "42": [0, 0.62119, 0, 0, 0.27764],
                "43": [0.08319, 0.58283, 0, 0, 0.75623],
                "44": [0, 0.10803, 0, 0, 0.27764],
                "45": [0.08319, 0.58283, 0, 0, 0.75623],
                "46": [0, 0.10803, 0, 0, 0.27764],
                "47": [0.24982, 0.74947, 0, 0, 0.50181],
                "48": [0, 0.47534, 0, 0, 0.50181],
                "49": [0, 0.47534, 0, 0, 0.50181],
                "50": [0, 0.47534, 0, 0, 0.50181],
                "51": [0.18906, 0.47534, 0, 0, 0.50181],
                "52": [0.18906, 0.47534, 0, 0, 0.50181],
                "53": [0.18906, 0.47534, 0, 0, 0.50181],
                "54": [0, 0.69141, 0, 0, 0.50181],
                "55": [0.18906, 0.47534, 0, 0, 0.50181],
                "56": [0, 0.69141, 0, 0, 0.50181],
                "57": [0.18906, 0.47534, 0, 0, 0.50181],
                "58": [0, 0.47534, 0, 0, 0.21606],
                "59": [0.12604, 0.47534, 0, 0, 0.21606],
                "61": [-0.13099, 0.36866, 0, 0, 0.75623],
                "63": [0, 0.69141, 0, 0, 0.36245],
                "65": [0, 0.69141, 0, 0, 0.7176],
                "66": [0, 0.69141, 0, 0, 0.88397],
                "67": [0, 0.69141, 0, 0, 0.61254],
                "68": [0, 0.69141, 0, 0, 0.83158],
                "69": [0, 0.69141, 0, 0, 0.66278],
                "70": [0.12604, 0.69141, 0, 0, 0.61119],
                "71": [0, 0.69141, 0, 0, 0.78539],
                "72": [0.06302, 0.69141, 0, 0, 0.7203],
                "73": [0, 0.69141, 0, 0, 0.55448],
                "74": [0.12604, 0.69141, 0, 0, 0.55231],
                "75": [0, 0.69141, 0, 0, 0.66845],
                "76": [0, 0.69141, 0, 0, 0.66602],
                "77": [0, 0.69141, 0, 0, 1.04953],
                "78": [0, 0.69141, 0, 0, 0.83212],
                "79": [0, 0.69141, 0, 0, 0.82699],
                "80": [0.18906, 0.69141, 0, 0, 0.82753],
                "81": [0.03781, 0.69141, 0, 0, 0.82699],
                "82": [0, 0.69141, 0, 0, 0.82807],
                "83": [0, 0.69141, 0, 0, 0.82861],
                "84": [0, 0.69141, 0, 0, 0.66899],
                "85": [0, 0.69141, 0, 0, 0.64576],
                "86": [0, 0.69141, 0, 0, 0.83131],
                "87": [0, 0.69141, 0, 0, 1.04602],
                "88": [0, 0.69141, 0, 0, 0.71922],
                "89": [0.18906, 0.69141, 0, 0, 0.83293],
                "90": [0.12604, 0.69141, 0, 0, 0.60201],
                "91": [0.24982, 0.74947, 0, 0, 0.27764],
                "93": [0.24982, 0.74947, 0, 0, 0.27764],
                "94": [0, 0.69141, 0, 0, 0.49965],
                "97": [0, 0.47534, 0, 0, 0.50046],
                "98": [0, 0.69141, 0, 0, 0.51315],
                "99": [0, 0.47534, 0, 0, 0.38946],
                "100": [0, 0.62119, 0, 0, 0.49857],
                "101": [0, 0.47534, 0, 0, 0.40053],
                "102": [0.18906, 0.69141, 0, 0, 0.32626],
                "103": [0.18906, 0.47534, 0, 0, 0.5037],
                "104": [0.18906, 0.69141, 0, 0, 0.52126],
                "105": [0, 0.69141, 0, 0, 0.27899],
                "106": [0, 0.69141, 0, 0, 0.28088],
                "107": [0, 0.69141, 0, 0, 0.38946],
                "108": [0, 0.69141, 0, 0, 0.27953],
                "109": [0, 0.47534, 0, 0, 0.76676],
                "110": [0, 0.47534, 0, 0, 0.52666],
                "111": [0, 0.47534, 0, 0, 0.48885],
                "112": [0.18906, 0.52396, 0, 0, 0.50046],
                "113": [0.18906, 0.47534, 0, 0, 0.48912],
                "114": [0, 0.47534, 0, 0, 0.38919],
                "115": [0, 0.47534, 0, 0, 0.44266],
                "116": [0, 0.62119, 0, 0, 0.33301],
                "117": [0, 0.47534, 0, 0, 0.5172],
                "118": [0, 0.52396, 0, 0, 0.5118],
                "119": [0, 0.52396, 0, 0, 0.77351],
                "120": [0.18906, 0.47534, 0, 0, 0.38865],
                "121": [0.18906, 0.47534, 0, 0, 0.49884],
                "122": [0.18906, 0.47534, 0, 0, 0.39054],
                "160": [0, 0, 0, 0, 0.25],
                "8216": [0, 0.69141, 0, 0, 0.21471],
                "8217": [0, 0.69141, 0, 0, 0.21471],
                "58112": [0, 0.62119, 0, 0, 0.49749],
                "58113": [0, 0.62119, 0, 0, 0.4983],
                "58114": [0.18906, 0.69141, 0, 0, 0.33328],
                "58115": [0.18906, 0.69141, 0, 0, 0.32923],
                "58116": [0.18906, 0.47534, 0, 0, 0.50343],
                "58117": [0, 0.69141, 0, 0, 0.33301],
                "58118": [0, 0.62119, 0, 0, 0.33409],
                "58119": [0, 0.47534, 0, 0, 0.50073]
              },
              "Main-Bold": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0, 0, 0.35],
                "34": [0, 0.69444, 0, 0, 0.60278],
                "35": [0.19444, 0.69444, 0, 0, 0.95833],
                "36": [0.05556, 0.75, 0, 0, 0.575],
                "37": [0.05556, 0.75, 0, 0, 0.95833],
                "38": [0, 0.69444, 0, 0, 0.89444],
                "39": [0, 0.69444, 0, 0, 0.31944],
                "40": [0.25, 0.75, 0, 0, 0.44722],
                "41": [0.25, 0.75, 0, 0, 0.44722],
                "42": [0, 0.75, 0, 0, 0.575],
                "43": [0.13333, 0.63333, 0, 0, 0.89444],
                "44": [0.19444, 0.15556, 0, 0, 0.31944],
                "45": [0, 0.44444, 0, 0, 0.38333],
                "46": [0, 0.15556, 0, 0, 0.31944],
                "47": [0.25, 0.75, 0, 0, 0.575],
                "48": [0, 0.64444, 0, 0, 0.575],
                "49": [0, 0.64444, 0, 0, 0.575],
                "50": [0, 0.64444, 0, 0, 0.575],
                "51": [0, 0.64444, 0, 0, 0.575],
                "52": [0, 0.64444, 0, 0, 0.575],
                "53": [0, 0.64444, 0, 0, 0.575],
                "54": [0, 0.64444, 0, 0, 0.575],
                "55": [0, 0.64444, 0, 0, 0.575],
                "56": [0, 0.64444, 0, 0, 0.575],
                "57": [0, 0.64444, 0, 0, 0.575],
                "58": [0, 0.44444, 0, 0, 0.31944],
                "59": [0.19444, 0.44444, 0, 0, 0.31944],
                "60": [0.08556, 0.58556, 0, 0, 0.89444],
                "61": [-0.10889, 0.39111, 0, 0, 0.89444],
                "62": [0.08556, 0.58556, 0, 0, 0.89444],
                "63": [0, 0.69444, 0, 0, 0.54305],
                "64": [0, 0.69444, 0, 0, 0.89444],
                "65": [0, 0.68611, 0, 0, 0.86944],
                "66": [0, 0.68611, 0, 0, 0.81805],
                "67": [0, 0.68611, 0, 0, 0.83055],
                "68": [0, 0.68611, 0, 0, 0.88194],
                "69": [0, 0.68611, 0, 0, 0.75555],
                "70": [0, 0.68611, 0, 0, 0.72361],
                "71": [0, 0.68611, 0, 0, 0.90416],
                "72": [0, 0.68611, 0, 0, 0.9],
                "73": [0, 0.68611, 0, 0, 0.43611],
                "74": [0, 0.68611, 0, 0, 0.59444],
                "75": [0, 0.68611, 0, 0, 0.90138],
                "76": [0, 0.68611, 0, 0, 0.69166],
                "77": [0, 0.68611, 0, 0, 1.09166],
                "78": [0, 0.68611, 0, 0, 0.9],
                "79": [0, 0.68611, 0, 0, 0.86388],
                "80": [0, 0.68611, 0, 0, 0.78611],
                "81": [0.19444, 0.68611, 0, 0, 0.86388],
                "82": [0, 0.68611, 0, 0, 0.8625],
                "83": [0, 0.68611, 0, 0, 0.63889],
                "84": [0, 0.68611, 0, 0, 0.8],
                "85": [0, 0.68611, 0, 0, 0.88472],
                "86": [0, 0.68611, 0.01597, 0, 0.86944],
                "87": [0, 0.68611, 0.01597, 0, 1.18888],
                "88": [0, 0.68611, 0, 0, 0.86944],
                "89": [0, 0.68611, 0.02875, 0, 0.86944],
                "90": [0, 0.68611, 0, 0, 0.70277],
                "91": [0.25, 0.75, 0, 0, 0.31944],
                "92": [0.25, 0.75, 0, 0, 0.575],
                "93": [0.25, 0.75, 0, 0, 0.31944],
                "94": [0, 0.69444, 0, 0, 0.575],
                "95": [0.31, 0.13444, 0.03194, 0, 0.575],
                "97": [0, 0.44444, 0, 0, 0.55902],
                "98": [0, 0.69444, 0, 0, 0.63889],
                "99": [0, 0.44444, 0, 0, 0.51111],
                "100": [0, 0.69444, 0, 0, 0.63889],
                "101": [0, 0.44444, 0, 0, 0.52708],
                "102": [0, 0.69444, 0.10903, 0, 0.35139],
                "103": [0.19444, 0.44444, 0.01597, 0, 0.575],
                "104": [0, 0.69444, 0, 0, 0.63889],
                "105": [0, 0.69444, 0, 0, 0.31944],
                "106": [0.19444, 0.69444, 0, 0, 0.35139],
                "107": [0, 0.69444, 0, 0, 0.60694],
                "108": [0, 0.69444, 0, 0, 0.31944],
                "109": [0, 0.44444, 0, 0, 0.95833],
                "110": [0, 0.44444, 0, 0, 0.63889],
                "111": [0, 0.44444, 0, 0, 0.575],
                "112": [0.19444, 0.44444, 0, 0, 0.63889],
                "113": [0.19444, 0.44444, 0, 0, 0.60694],
                "114": [0, 0.44444, 0, 0, 0.47361],
                "115": [0, 0.44444, 0, 0, 0.45361],
                "116": [0, 0.63492, 0, 0, 0.44722],
                "117": [0, 0.44444, 0, 0, 0.63889],
                "118": [0, 0.44444, 0.01597, 0, 0.60694],
                "119": [0, 0.44444, 0.01597, 0, 0.83055],
                "120": [0, 0.44444, 0, 0, 0.60694],
                "121": [0.19444, 0.44444, 0.01597, 0, 0.60694],
                "122": [0, 0.44444, 0, 0, 0.51111],
                "123": [0.25, 0.75, 0, 0, 0.575],
                "124": [0.25, 0.75, 0, 0, 0.31944],
                "125": [0.25, 0.75, 0, 0, 0.575],
                "126": [0.35, 0.34444, 0, 0, 0.575],
                "160": [0, 0, 0, 0, 0.25],
                "163": [0, 0.69444, 0, 0, 0.86853],
                "168": [0, 0.69444, 0, 0, 0.575],
                "172": [0, 0.44444, 0, 0, 0.76666],
                "176": [0, 0.69444, 0, 0, 0.86944],
                "177": [0.13333, 0.63333, 0, 0, 0.89444],
                "184": [0.17014, 0, 0, 0, 0.51111],
                "198": [0, 0.68611, 0, 0, 1.04166],
                "215": [0.13333, 0.63333, 0, 0, 0.89444],
                "216": [0.04861, 0.73472, 0, 0, 0.89444],
                "223": [0, 0.69444, 0, 0, 0.59722],
                "230": [0, 0.44444, 0, 0, 0.83055],
                "247": [0.13333, 0.63333, 0, 0, 0.89444],
                "248": [0.09722, 0.54167, 0, 0, 0.575],
                "305": [0, 0.44444, 0, 0, 0.31944],
                "338": [0, 0.68611, 0, 0, 1.16944],
                "339": [0, 0.44444, 0, 0, 0.89444],
                "567": [0.19444, 0.44444, 0, 0, 0.35139],
                "710": [0, 0.69444, 0, 0, 0.575],
                "711": [0, 0.63194, 0, 0, 0.575],
                "713": [0, 0.59611, 0, 0, 0.575],
                "714": [0, 0.69444, 0, 0, 0.575],
                "715": [0, 0.69444, 0, 0, 0.575],
                "728": [0, 0.69444, 0, 0, 0.575],
                "729": [0, 0.69444, 0, 0, 0.31944],
                "730": [0, 0.69444, 0, 0, 0.86944],
                "732": [0, 0.69444, 0, 0, 0.575],
                "733": [0, 0.69444, 0, 0, 0.575],
                "915": [0, 0.68611, 0, 0, 0.69166],
                "916": [0, 0.68611, 0, 0, 0.95833],
                "920": [0, 0.68611, 0, 0, 0.89444],
                "923": [0, 0.68611, 0, 0, 0.80555],
                "926": [0, 0.68611, 0, 0, 0.76666],
                "928": [0, 0.68611, 0, 0, 0.9],
                "931": [0, 0.68611, 0, 0, 0.83055],
                "933": [0, 0.68611, 0, 0, 0.89444],
                "934": [0, 0.68611, 0, 0, 0.83055],
                "936": [0, 0.68611, 0, 0, 0.89444],
                "937": [0, 0.68611, 0, 0, 0.83055],
                "8211": [0, 0.44444, 0.03194, 0, 0.575],
                "8212": [0, 0.44444, 0.03194, 0, 1.14999],
                "8216": [0, 0.69444, 0, 0, 0.31944],
                "8217": [0, 0.69444, 0, 0, 0.31944],
                "8220": [0, 0.69444, 0, 0, 0.60278],
                "8221": [0, 0.69444, 0, 0, 0.60278],
                "8224": [0.19444, 0.69444, 0, 0, 0.51111],
                "8225": [0.19444, 0.69444, 0, 0, 0.51111],
                "8242": [0, 0.55556, 0, 0, 0.34444],
                "8407": [0, 0.72444, 0.15486, 0, 0.575],
                "8463": [0, 0.69444, 0, 0, 0.66759],
                "8465": [0, 0.69444, 0, 0, 0.83055],
                "8467": [0, 0.69444, 0, 0, 0.47361],
                "8472": [0.19444, 0.44444, 0, 0, 0.74027],
                "8476": [0, 0.69444, 0, 0, 0.83055],
                "8501": [0, 0.69444, 0, 0, 0.70277],
                "8592": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8593": [0.19444, 0.69444, 0, 0, 0.575],
                "8594": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8595": [0.19444, 0.69444, 0, 0, 0.575],
                "8596": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8597": [0.25, 0.75, 0, 0, 0.575],
                "8598": [0.19444, 0.69444, 0, 0, 1.14999],
                "8599": [0.19444, 0.69444, 0, 0, 1.14999],
                "8600": [0.19444, 0.69444, 0, 0, 1.14999],
                "8601": [0.19444, 0.69444, 0, 0, 1.14999],
                "8636": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8637": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8640": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8641": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8656": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8657": [0.19444, 0.69444, 0, 0, 0.70277],
                "8658": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8659": [0.19444, 0.69444, 0, 0, 0.70277],
                "8660": [-0.10889, 0.39111, 0, 0, 1.14999],
                "8661": [0.25, 0.75, 0, 0, 0.70277],
                "8704": [0, 0.69444, 0, 0, 0.63889],
                "8706": [0, 0.69444, 0.06389, 0, 0.62847],
                "8707": [0, 0.69444, 0, 0, 0.63889],
                "8709": [0.05556, 0.75, 0, 0, 0.575],
                "8711": [0, 0.68611, 0, 0, 0.95833],
                "8712": [0.08556, 0.58556, 0, 0, 0.76666],
                "8715": [0.08556, 0.58556, 0, 0, 0.76666],
                "8722": [0.13333, 0.63333, 0, 0, 0.89444],
                "8723": [0.13333, 0.63333, 0, 0, 0.89444],
                "8725": [0.25, 0.75, 0, 0, 0.575],
                "8726": [0.25, 0.75, 0, 0, 0.575],
                "8727": [-0.02778, 0.47222, 0, 0, 0.575],
                "8728": [-0.02639, 0.47361, 0, 0, 0.575],
                "8729": [-0.02639, 0.47361, 0, 0, 0.575],
                "8730": [0.18, 0.82, 0, 0, 0.95833],
                "8733": [0, 0.44444, 0, 0, 0.89444],
                "8734": [0, 0.44444, 0, 0, 1.14999],
                "8736": [0, 0.69224, 0, 0, 0.72222],
                "8739": [0.25, 0.75, 0, 0, 0.31944],
                "8741": [0.25, 0.75, 0, 0, 0.575],
                "8743": [0, 0.55556, 0, 0, 0.76666],
                "8744": [0, 0.55556, 0, 0, 0.76666],
                "8745": [0, 0.55556, 0, 0, 0.76666],
                "8746": [0, 0.55556, 0, 0, 0.76666],
                "8747": [0.19444, 0.69444, 0.12778, 0, 0.56875],
                "8764": [-0.10889, 0.39111, 0, 0, 0.89444],
                "8768": [0.19444, 0.69444, 0, 0, 0.31944],
                "8771": [222e-5, 0.50222, 0, 0, 0.89444],
                "8773": [0.027, 0.638, 0, 0, 0.894],
                "8776": [0.02444, 0.52444, 0, 0, 0.89444],
                "8781": [222e-5, 0.50222, 0, 0, 0.89444],
                "8801": [222e-5, 0.50222, 0, 0, 0.89444],
                "8804": [0.19667, 0.69667, 0, 0, 0.89444],
                "8805": [0.19667, 0.69667, 0, 0, 0.89444],
                "8810": [0.08556, 0.58556, 0, 0, 1.14999],
                "8811": [0.08556, 0.58556, 0, 0, 1.14999],
                "8826": [0.08556, 0.58556, 0, 0, 0.89444],
                "8827": [0.08556, 0.58556, 0, 0, 0.89444],
                "8834": [0.08556, 0.58556, 0, 0, 0.89444],
                "8835": [0.08556, 0.58556, 0, 0, 0.89444],
                "8838": [0.19667, 0.69667, 0, 0, 0.89444],
                "8839": [0.19667, 0.69667, 0, 0, 0.89444],
                "8846": [0, 0.55556, 0, 0, 0.76666],
                "8849": [0.19667, 0.69667, 0, 0, 0.89444],
                "8850": [0.19667, 0.69667, 0, 0, 0.89444],
                "8851": [0, 0.55556, 0, 0, 0.76666],
                "8852": [0, 0.55556, 0, 0, 0.76666],
                "8853": [0.13333, 0.63333, 0, 0, 0.89444],
                "8854": [0.13333, 0.63333, 0, 0, 0.89444],
                "8855": [0.13333, 0.63333, 0, 0, 0.89444],
                "8856": [0.13333, 0.63333, 0, 0, 0.89444],
                "8857": [0.13333, 0.63333, 0, 0, 0.89444],
                "8866": [0, 0.69444, 0, 0, 0.70277],
                "8867": [0, 0.69444, 0, 0, 0.70277],
                "8868": [0, 0.69444, 0, 0, 0.89444],
                "8869": [0, 0.69444, 0, 0, 0.89444],
                "8900": [-0.02639, 0.47361, 0, 0, 0.575],
                "8901": [-0.02639, 0.47361, 0, 0, 0.31944],
                "8902": [-0.02778, 0.47222, 0, 0, 0.575],
                "8968": [0.25, 0.75, 0, 0, 0.51111],
                "8969": [0.25, 0.75, 0, 0, 0.51111],
                "8970": [0.25, 0.75, 0, 0, 0.51111],
                "8971": [0.25, 0.75, 0, 0, 0.51111],
                "8994": [-0.13889, 0.36111, 0, 0, 1.14999],
                "8995": [-0.13889, 0.36111, 0, 0, 1.14999],
                "9651": [0.19444, 0.69444, 0, 0, 1.02222],
                "9657": [-0.02778, 0.47222, 0, 0, 0.575],
                "9661": [0.19444, 0.69444, 0, 0, 1.02222],
                "9667": [-0.02778, 0.47222, 0, 0, 0.575],
                "9711": [0.19444, 0.69444, 0, 0, 1.14999],
                "9824": [0.12963, 0.69444, 0, 0, 0.89444],
                "9825": [0.12963, 0.69444, 0, 0, 0.89444],
                "9826": [0.12963, 0.69444, 0, 0, 0.89444],
                "9827": [0.12963, 0.69444, 0, 0, 0.89444],
                "9837": [0, 0.75, 0, 0, 0.44722],
                "9838": [0.19444, 0.69444, 0, 0, 0.44722],
                "9839": [0.19444, 0.69444, 0, 0, 0.44722],
                "10216": [0.25, 0.75, 0, 0, 0.44722],
                "10217": [0.25, 0.75, 0, 0, 0.44722],
                "10815": [0, 0.68611, 0, 0, 0.9],
                "10927": [0.19667, 0.69667, 0, 0, 0.89444],
                "10928": [0.19667, 0.69667, 0, 0, 0.89444],
                "57376": [0.19444, 0.69444, 0, 0, 0]
              },
              "Main-BoldItalic": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0.11417, 0, 0.38611],
                "34": [0, 0.69444, 0.07939, 0, 0.62055],
                "35": [0.19444, 0.69444, 0.06833, 0, 0.94444],
                "37": [0.05556, 0.75, 0.12861, 0, 0.94444],
                "38": [0, 0.69444, 0.08528, 0, 0.88555],
                "39": [0, 0.69444, 0.12945, 0, 0.35555],
                "40": [0.25, 0.75, 0.15806, 0, 0.47333],
                "41": [0.25, 0.75, 0.03306, 0, 0.47333],
                "42": [0, 0.75, 0.14333, 0, 0.59111],
                "43": [0.10333, 0.60333, 0.03306, 0, 0.88555],
                "44": [0.19444, 0.14722, 0, 0, 0.35555],
                "45": [0, 0.44444, 0.02611, 0, 0.41444],
                "46": [0, 0.14722, 0, 0, 0.35555],
                "47": [0.25, 0.75, 0.15806, 0, 0.59111],
                "48": [0, 0.64444, 0.13167, 0, 0.59111],
                "49": [0, 0.64444, 0.13167, 0, 0.59111],
                "50": [0, 0.64444, 0.13167, 0, 0.59111],
                "51": [0, 0.64444, 0.13167, 0, 0.59111],
                "52": [0.19444, 0.64444, 0.13167, 0, 0.59111],
                "53": [0, 0.64444, 0.13167, 0, 0.59111],
                "54": [0, 0.64444, 0.13167, 0, 0.59111],
                "55": [0.19444, 0.64444, 0.13167, 0, 0.59111],
                "56": [0, 0.64444, 0.13167, 0, 0.59111],
                "57": [0, 0.64444, 0.13167, 0, 0.59111],
                "58": [0, 0.44444, 0.06695, 0, 0.35555],
                "59": [0.19444, 0.44444, 0.06695, 0, 0.35555],
                "61": [-0.10889, 0.39111, 0.06833, 0, 0.88555],
                "63": [0, 0.69444, 0.11472, 0, 0.59111],
                "64": [0, 0.69444, 0.09208, 0, 0.88555],
                "65": [0, 0.68611, 0, 0, 0.86555],
                "66": [0, 0.68611, 0.0992, 0, 0.81666],
                "67": [0, 0.68611, 0.14208, 0, 0.82666],
                "68": [0, 0.68611, 0.09062, 0, 0.87555],
                "69": [0, 0.68611, 0.11431, 0, 0.75666],
                "70": [0, 0.68611, 0.12903, 0, 0.72722],
                "71": [0, 0.68611, 0.07347, 0, 0.89527],
                "72": [0, 0.68611, 0.17208, 0, 0.8961],
                "73": [0, 0.68611, 0.15681, 0, 0.47166],
                "74": [0, 0.68611, 0.145, 0, 0.61055],
                "75": [0, 0.68611, 0.14208, 0, 0.89499],
                "76": [0, 0.68611, 0, 0, 0.69777],
                "77": [0, 0.68611, 0.17208, 0, 1.07277],
                "78": [0, 0.68611, 0.17208, 0, 0.8961],
                "79": [0, 0.68611, 0.09062, 0, 0.85499],
                "80": [0, 0.68611, 0.0992, 0, 0.78721],
                "81": [0.19444, 0.68611, 0.09062, 0, 0.85499],
                "82": [0, 0.68611, 0.02559, 0, 0.85944],
                "83": [0, 0.68611, 0.11264, 0, 0.64999],
                "84": [0, 0.68611, 0.12903, 0, 0.7961],
                "85": [0, 0.68611, 0.17208, 0, 0.88083],
                "86": [0, 0.68611, 0.18625, 0, 0.86555],
                "87": [0, 0.68611, 0.18625, 0, 1.15999],
                "88": [0, 0.68611, 0.15681, 0, 0.86555],
                "89": [0, 0.68611, 0.19803, 0, 0.86555],
                "90": [0, 0.68611, 0.14208, 0, 0.70888],
                "91": [0.25, 0.75, 0.1875, 0, 0.35611],
                "93": [0.25, 0.75, 0.09972, 0, 0.35611],
                "94": [0, 0.69444, 0.06709, 0, 0.59111],
                "95": [0.31, 0.13444, 0.09811, 0, 0.59111],
                "97": [0, 0.44444, 0.09426, 0, 0.59111],
                "98": [0, 0.69444, 0.07861, 0, 0.53222],
                "99": [0, 0.44444, 0.05222, 0, 0.53222],
                "100": [0, 0.69444, 0.10861, 0, 0.59111],
                "101": [0, 0.44444, 0.085, 0, 0.53222],
                "102": [0.19444, 0.69444, 0.21778, 0, 0.4],
                "103": [0.19444, 0.44444, 0.105, 0, 0.53222],
                "104": [0, 0.69444, 0.09426, 0, 0.59111],
                "105": [0, 0.69326, 0.11387, 0, 0.35555],
                "106": [0.19444, 0.69326, 0.1672, 0, 0.35555],
                "107": [0, 0.69444, 0.11111, 0, 0.53222],
                "108": [0, 0.69444, 0.10861, 0, 0.29666],
                "109": [0, 0.44444, 0.09426, 0, 0.94444],
                "110": [0, 0.44444, 0.09426, 0, 0.64999],
                "111": [0, 0.44444, 0.07861, 0, 0.59111],
                "112": [0.19444, 0.44444, 0.07861, 0, 0.59111],
                "113": [0.19444, 0.44444, 0.105, 0, 0.53222],
                "114": [0, 0.44444, 0.11111, 0, 0.50167],
                "115": [0, 0.44444, 0.08167, 0, 0.48694],
                "116": [0, 0.63492, 0.09639, 0, 0.385],
                "117": [0, 0.44444, 0.09426, 0, 0.62055],
                "118": [0, 0.44444, 0.11111, 0, 0.53222],
                "119": [0, 0.44444, 0.11111, 0, 0.76777],
                "120": [0, 0.44444, 0.12583, 0, 0.56055],
                "121": [0.19444, 0.44444, 0.105, 0, 0.56166],
                "122": [0, 0.44444, 0.13889, 0, 0.49055],
                "126": [0.35, 0.34444, 0.11472, 0, 0.59111],
                "160": [0, 0, 0, 0, 0.25],
                "168": [0, 0.69444, 0.11473, 0, 0.59111],
                "176": [0, 0.69444, 0, 0, 0.94888],
                "184": [0.17014, 0, 0, 0, 0.53222],
                "198": [0, 0.68611, 0.11431, 0, 1.02277],
                "216": [0.04861, 0.73472, 0.09062, 0, 0.88555],
                "223": [0.19444, 0.69444, 0.09736, 0, 0.665],
                "230": [0, 0.44444, 0.085, 0, 0.82666],
                "248": [0.09722, 0.54167, 0.09458, 0, 0.59111],
                "305": [0, 0.44444, 0.09426, 0, 0.35555],
                "338": [0, 0.68611, 0.11431, 0, 1.14054],
                "339": [0, 0.44444, 0.085, 0, 0.82666],
                "567": [0.19444, 0.44444, 0.04611, 0, 0.385],
                "710": [0, 0.69444, 0.06709, 0, 0.59111],
                "711": [0, 0.63194, 0.08271, 0, 0.59111],
                "713": [0, 0.59444, 0.10444, 0, 0.59111],
                "714": [0, 0.69444, 0.08528, 0, 0.59111],
                "715": [0, 0.69444, 0, 0, 0.59111],
                "728": [0, 0.69444, 0.10333, 0, 0.59111],
                "729": [0, 0.69444, 0.12945, 0, 0.35555],
                "730": [0, 0.69444, 0, 0, 0.94888],
                "732": [0, 0.69444, 0.11472, 0, 0.59111],
                "733": [0, 0.69444, 0.11472, 0, 0.59111],
                "915": [0, 0.68611, 0.12903, 0, 0.69777],
                "916": [0, 0.68611, 0, 0, 0.94444],
                "920": [0, 0.68611, 0.09062, 0, 0.88555],
                "923": [0, 0.68611, 0, 0, 0.80666],
                "926": [0, 0.68611, 0.15092, 0, 0.76777],
                "928": [0, 0.68611, 0.17208, 0, 0.8961],
                "931": [0, 0.68611, 0.11431, 0, 0.82666],
                "933": [0, 0.68611, 0.10778, 0, 0.88555],
                "934": [0, 0.68611, 0.05632, 0, 0.82666],
                "936": [0, 0.68611, 0.10778, 0, 0.88555],
                "937": [0, 0.68611, 0.0992, 0, 0.82666],
                "8211": [0, 0.44444, 0.09811, 0, 0.59111],
                "8212": [0, 0.44444, 0.09811, 0, 1.18221],
                "8216": [0, 0.69444, 0.12945, 0, 0.35555],
                "8217": [0, 0.69444, 0.12945, 0, 0.35555],
                "8220": [0, 0.69444, 0.16772, 0, 0.62055],
                "8221": [0, 0.69444, 0.07939, 0, 0.62055]
              },
              "Main-Italic": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0.12417, 0, 0.30667],
                "34": [0, 0.69444, 0.06961, 0, 0.51444],
                "35": [0.19444, 0.69444, 0.06616, 0, 0.81777],
                "37": [0.05556, 0.75, 0.13639, 0, 0.81777],
                "38": [0, 0.69444, 0.09694, 0, 0.76666],
                "39": [0, 0.69444, 0.12417, 0, 0.30667],
                "40": [0.25, 0.75, 0.16194, 0, 0.40889],
                "41": [0.25, 0.75, 0.03694, 0, 0.40889],
                "42": [0, 0.75, 0.14917, 0, 0.51111],
                "43": [0.05667, 0.56167, 0.03694, 0, 0.76666],
                "44": [0.19444, 0.10556, 0, 0, 0.30667],
                "45": [0, 0.43056, 0.02826, 0, 0.35778],
                "46": [0, 0.10556, 0, 0, 0.30667],
                "47": [0.25, 0.75, 0.16194, 0, 0.51111],
                "48": [0, 0.64444, 0.13556, 0, 0.51111],
                "49": [0, 0.64444, 0.13556, 0, 0.51111],
                "50": [0, 0.64444, 0.13556, 0, 0.51111],
                "51": [0, 0.64444, 0.13556, 0, 0.51111],
                "52": [0.19444, 0.64444, 0.13556, 0, 0.51111],
                "53": [0, 0.64444, 0.13556, 0, 0.51111],
                "54": [0, 0.64444, 0.13556, 0, 0.51111],
                "55": [0.19444, 0.64444, 0.13556, 0, 0.51111],
                "56": [0, 0.64444, 0.13556, 0, 0.51111],
                "57": [0, 0.64444, 0.13556, 0, 0.51111],
                "58": [0, 0.43056, 0.0582, 0, 0.30667],
                "59": [0.19444, 0.43056, 0.0582, 0, 0.30667],
                "61": [-0.13313, 0.36687, 0.06616, 0, 0.76666],
                "63": [0, 0.69444, 0.1225, 0, 0.51111],
                "64": [0, 0.69444, 0.09597, 0, 0.76666],
                "65": [0, 0.68333, 0, 0, 0.74333],
                "66": [0, 0.68333, 0.10257, 0, 0.70389],
                "67": [0, 0.68333, 0.14528, 0, 0.71555],
                "68": [0, 0.68333, 0.09403, 0, 0.755],
                "69": [0, 0.68333, 0.12028, 0, 0.67833],
                "70": [0, 0.68333, 0.13305, 0, 0.65277],
                "71": [0, 0.68333, 0.08722, 0, 0.77361],
                "72": [0, 0.68333, 0.16389, 0, 0.74333],
                "73": [0, 0.68333, 0.15806, 0, 0.38555],
                "74": [0, 0.68333, 0.14028, 0, 0.525],
                "75": [0, 0.68333, 0.14528, 0, 0.76888],
                "76": [0, 0.68333, 0, 0, 0.62722],
                "77": [0, 0.68333, 0.16389, 0, 0.89666],
                "78": [0, 0.68333, 0.16389, 0, 0.74333],
                "79": [0, 0.68333, 0.09403, 0, 0.76666],
                "80": [0, 0.68333, 0.10257, 0, 0.67833],
                "81": [0.19444, 0.68333, 0.09403, 0, 0.76666],
                "82": [0, 0.68333, 0.03868, 0, 0.72944],
                "83": [0, 0.68333, 0.11972, 0, 0.56222],
                "84": [0, 0.68333, 0.13305, 0, 0.71555],
                "85": [0, 0.68333, 0.16389, 0, 0.74333],
                "86": [0, 0.68333, 0.18361, 0, 0.74333],
                "87": [0, 0.68333, 0.18361, 0, 0.99888],
                "88": [0, 0.68333, 0.15806, 0, 0.74333],
                "89": [0, 0.68333, 0.19383, 0, 0.74333],
                "90": [0, 0.68333, 0.14528, 0, 0.61333],
                "91": [0.25, 0.75, 0.1875, 0, 0.30667],
                "93": [0.25, 0.75, 0.10528, 0, 0.30667],
                "94": [0, 0.69444, 0.06646, 0, 0.51111],
                "95": [0.31, 0.12056, 0.09208, 0, 0.51111],
                "97": [0, 0.43056, 0.07671, 0, 0.51111],
                "98": [0, 0.69444, 0.06312, 0, 0.46],
                "99": [0, 0.43056, 0.05653, 0, 0.46],
                "100": [0, 0.69444, 0.10333, 0, 0.51111],
                "101": [0, 0.43056, 0.07514, 0, 0.46],
                "102": [0.19444, 0.69444, 0.21194, 0, 0.30667],
                "103": [0.19444, 0.43056, 0.08847, 0, 0.46],
                "104": [0, 0.69444, 0.07671, 0, 0.51111],
                "105": [0, 0.65536, 0.1019, 0, 0.30667],
                "106": [0.19444, 0.65536, 0.14467, 0, 0.30667],
                "107": [0, 0.69444, 0.10764, 0, 0.46],
                "108": [0, 0.69444, 0.10333, 0, 0.25555],
                "109": [0, 0.43056, 0.07671, 0, 0.81777],
                "110": [0, 0.43056, 0.07671, 0, 0.56222],
                "111": [0, 0.43056, 0.06312, 0, 0.51111],
                "112": [0.19444, 0.43056, 0.06312, 0, 0.51111],
                "113": [0.19444, 0.43056, 0.08847, 0, 0.46],
                "114": [0, 0.43056, 0.10764, 0, 0.42166],
                "115": [0, 0.43056, 0.08208, 0, 0.40889],
                "116": [0, 0.61508, 0.09486, 0, 0.33222],
                "117": [0, 0.43056, 0.07671, 0, 0.53666],
                "118": [0, 0.43056, 0.10764, 0, 0.46],
                "119": [0, 0.43056, 0.10764, 0, 0.66444],
                "120": [0, 0.43056, 0.12042, 0, 0.46389],
                "121": [0.19444, 0.43056, 0.08847, 0, 0.48555],
                "122": [0, 0.43056, 0.12292, 0, 0.40889],
                "126": [0.35, 0.31786, 0.11585, 0, 0.51111],
                "160": [0, 0, 0, 0, 0.25],
                "168": [0, 0.66786, 0.10474, 0, 0.51111],
                "176": [0, 0.69444, 0, 0, 0.83129],
                "184": [0.17014, 0, 0, 0, 0.46],
                "198": [0, 0.68333, 0.12028, 0, 0.88277],
                "216": [0.04861, 0.73194, 0.09403, 0, 0.76666],
                "223": [0.19444, 0.69444, 0.10514, 0, 0.53666],
                "230": [0, 0.43056, 0.07514, 0, 0.71555],
                "248": [0.09722, 0.52778, 0.09194, 0, 0.51111],
                "338": [0, 0.68333, 0.12028, 0, 0.98499],
                "339": [0, 0.43056, 0.07514, 0, 0.71555],
                "710": [0, 0.69444, 0.06646, 0, 0.51111],
                "711": [0, 0.62847, 0.08295, 0, 0.51111],
                "713": [0, 0.56167, 0.10333, 0, 0.51111],
                "714": [0, 0.69444, 0.09694, 0, 0.51111],
                "715": [0, 0.69444, 0, 0, 0.51111],
                "728": [0, 0.69444, 0.10806, 0, 0.51111],
                "729": [0, 0.66786, 0.11752, 0, 0.30667],
                "730": [0, 0.69444, 0, 0, 0.83129],
                "732": [0, 0.66786, 0.11585, 0, 0.51111],
                "733": [0, 0.69444, 0.1225, 0, 0.51111],
                "915": [0, 0.68333, 0.13305, 0, 0.62722],
                "916": [0, 0.68333, 0, 0, 0.81777],
                "920": [0, 0.68333, 0.09403, 0, 0.76666],
                "923": [0, 0.68333, 0, 0, 0.69222],
                "926": [0, 0.68333, 0.15294, 0, 0.66444],
                "928": [0, 0.68333, 0.16389, 0, 0.74333],
                "931": [0, 0.68333, 0.12028, 0, 0.71555],
                "933": [0, 0.68333, 0.11111, 0, 0.76666],
                "934": [0, 0.68333, 0.05986, 0, 0.71555],
                "936": [0, 0.68333, 0.11111, 0, 0.76666],
                "937": [0, 0.68333, 0.10257, 0, 0.71555],
                "8211": [0, 0.43056, 0.09208, 0, 0.51111],
                "8212": [0, 0.43056, 0.09208, 0, 1.02222],
                "8216": [0, 0.69444, 0.12417, 0, 0.30667],
                "8217": [0, 0.69444, 0.12417, 0, 0.30667],
                "8220": [0, 0.69444, 0.1685, 0, 0.51444],
                "8221": [0, 0.69444, 0.06961, 0, 0.51444],
                "8463": [0, 0.68889, 0, 0, 0.54028]
              },
              "Main-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0, 0, 0.27778],
                "34": [0, 0.69444, 0, 0, 0.5],
                "35": [0.19444, 0.69444, 0, 0, 0.83334],
                "36": [0.05556, 0.75, 0, 0, 0.5],
                "37": [0.05556, 0.75, 0, 0, 0.83334],
                "38": [0, 0.69444, 0, 0, 0.77778],
                "39": [0, 0.69444, 0, 0, 0.27778],
                "40": [0.25, 0.75, 0, 0, 0.38889],
                "41": [0.25, 0.75, 0, 0, 0.38889],
                "42": [0, 0.75, 0, 0, 0.5],
                "43": [0.08333, 0.58333, 0, 0, 0.77778],
                "44": [0.19444, 0.10556, 0, 0, 0.27778],
                "45": [0, 0.43056, 0, 0, 0.33333],
                "46": [0, 0.10556, 0, 0, 0.27778],
                "47": [0.25, 0.75, 0, 0, 0.5],
                "48": [0, 0.64444, 0, 0, 0.5],
                "49": [0, 0.64444, 0, 0, 0.5],
                "50": [0, 0.64444, 0, 0, 0.5],
                "51": [0, 0.64444, 0, 0, 0.5],
                "52": [0, 0.64444, 0, 0, 0.5],
                "53": [0, 0.64444, 0, 0, 0.5],
                "54": [0, 0.64444, 0, 0, 0.5],
                "55": [0, 0.64444, 0, 0, 0.5],
                "56": [0, 0.64444, 0, 0, 0.5],
                "57": [0, 0.64444, 0, 0, 0.5],
                "58": [0, 0.43056, 0, 0, 0.27778],
                "59": [0.19444, 0.43056, 0, 0, 0.27778],
                "60": [0.0391, 0.5391, 0, 0, 0.77778],
                "61": [-0.13313, 0.36687, 0, 0, 0.77778],
                "62": [0.0391, 0.5391, 0, 0, 0.77778],
                "63": [0, 0.69444, 0, 0, 0.47222],
                "64": [0, 0.69444, 0, 0, 0.77778],
                "65": [0, 0.68333, 0, 0, 0.75],
                "66": [0, 0.68333, 0, 0, 0.70834],
                "67": [0, 0.68333, 0, 0, 0.72222],
                "68": [0, 0.68333, 0, 0, 0.76389],
                "69": [0, 0.68333, 0, 0, 0.68056],
                "70": [0, 0.68333, 0, 0, 0.65278],
                "71": [0, 0.68333, 0, 0, 0.78472],
                "72": [0, 0.68333, 0, 0, 0.75],
                "73": [0, 0.68333, 0, 0, 0.36111],
                "74": [0, 0.68333, 0, 0, 0.51389],
                "75": [0, 0.68333, 0, 0, 0.77778],
                "76": [0, 0.68333, 0, 0, 0.625],
                "77": [0, 0.68333, 0, 0, 0.91667],
                "78": [0, 0.68333, 0, 0, 0.75],
                "79": [0, 0.68333, 0, 0, 0.77778],
                "80": [0, 0.68333, 0, 0, 0.68056],
                "81": [0.19444, 0.68333, 0, 0, 0.77778],
                "82": [0, 0.68333, 0, 0, 0.73611],
                "83": [0, 0.68333, 0, 0, 0.55556],
                "84": [0, 0.68333, 0, 0, 0.72222],
                "85": [0, 0.68333, 0, 0, 0.75],
                "86": [0, 0.68333, 0.01389, 0, 0.75],
                "87": [0, 0.68333, 0.01389, 0, 1.02778],
                "88": [0, 0.68333, 0, 0, 0.75],
                "89": [0, 0.68333, 0.025, 0, 0.75],
                "90": [0, 0.68333, 0, 0, 0.61111],
                "91": [0.25, 0.75, 0, 0, 0.27778],
                "92": [0.25, 0.75, 0, 0, 0.5],
                "93": [0.25, 0.75, 0, 0, 0.27778],
                "94": [0, 0.69444, 0, 0, 0.5],
                "95": [0.31, 0.12056, 0.02778, 0, 0.5],
                "97": [0, 0.43056, 0, 0, 0.5],
                "98": [0, 0.69444, 0, 0, 0.55556],
                "99": [0, 0.43056, 0, 0, 0.44445],
                "100": [0, 0.69444, 0, 0, 0.55556],
                "101": [0, 0.43056, 0, 0, 0.44445],
                "102": [0, 0.69444, 0.07778, 0, 0.30556],
                "103": [0.19444, 0.43056, 0.01389, 0, 0.5],
                "104": [0, 0.69444, 0, 0, 0.55556],
                "105": [0, 0.66786, 0, 0, 0.27778],
                "106": [0.19444, 0.66786, 0, 0, 0.30556],
                "107": [0, 0.69444, 0, 0, 0.52778],
                "108": [0, 0.69444, 0, 0, 0.27778],
                "109": [0, 0.43056, 0, 0, 0.83334],
                "110": [0, 0.43056, 0, 0, 0.55556],
                "111": [0, 0.43056, 0, 0, 0.5],
                "112": [0.19444, 0.43056, 0, 0, 0.55556],
                "113": [0.19444, 0.43056, 0, 0, 0.52778],
                "114": [0, 0.43056, 0, 0, 0.39167],
                "115": [0, 0.43056, 0, 0, 0.39445],
                "116": [0, 0.61508, 0, 0, 0.38889],
                "117": [0, 0.43056, 0, 0, 0.55556],
                "118": [0, 0.43056, 0.01389, 0, 0.52778],
                "119": [0, 0.43056, 0.01389, 0, 0.72222],
                "120": [0, 0.43056, 0, 0, 0.52778],
                "121": [0.19444, 0.43056, 0.01389, 0, 0.52778],
                "122": [0, 0.43056, 0, 0, 0.44445],
                "123": [0.25, 0.75, 0, 0, 0.5],
                "124": [0.25, 0.75, 0, 0, 0.27778],
                "125": [0.25, 0.75, 0, 0, 0.5],
                "126": [0.35, 0.31786, 0, 0, 0.5],
                "160": [0, 0, 0, 0, 0.25],
                "163": [0, 0.69444, 0, 0, 0.76909],
                "167": [0.19444, 0.69444, 0, 0, 0.44445],
                "168": [0, 0.66786, 0, 0, 0.5],
                "172": [0, 0.43056, 0, 0, 0.66667],
                "176": [0, 0.69444, 0, 0, 0.75],
                "177": [0.08333, 0.58333, 0, 0, 0.77778],
                "182": [0.19444, 0.69444, 0, 0, 0.61111],
                "184": [0.17014, 0, 0, 0, 0.44445],
                "198": [0, 0.68333, 0, 0, 0.90278],
                "215": [0.08333, 0.58333, 0, 0, 0.77778],
                "216": [0.04861, 0.73194, 0, 0, 0.77778],
                "223": [0, 0.69444, 0, 0, 0.5],
                "230": [0, 0.43056, 0, 0, 0.72222],
                "247": [0.08333, 0.58333, 0, 0, 0.77778],
                "248": [0.09722, 0.52778, 0, 0, 0.5],
                "305": [0, 0.43056, 0, 0, 0.27778],
                "338": [0, 0.68333, 0, 0, 1.01389],
                "339": [0, 0.43056, 0, 0, 0.77778],
                "567": [0.19444, 0.43056, 0, 0, 0.30556],
                "710": [0, 0.69444, 0, 0, 0.5],
                "711": [0, 0.62847, 0, 0, 0.5],
                "713": [0, 0.56778, 0, 0, 0.5],
                "714": [0, 0.69444, 0, 0, 0.5],
                "715": [0, 0.69444, 0, 0, 0.5],
                "728": [0, 0.69444, 0, 0, 0.5],
                "729": [0, 0.66786, 0, 0, 0.27778],
                "730": [0, 0.69444, 0, 0, 0.75],
                "732": [0, 0.66786, 0, 0, 0.5],
                "733": [0, 0.69444, 0, 0, 0.5],
                "915": [0, 0.68333, 0, 0, 0.625],
                "916": [0, 0.68333, 0, 0, 0.83334],
                "920": [0, 0.68333, 0, 0, 0.77778],
                "923": [0, 0.68333, 0, 0, 0.69445],
                "926": [0, 0.68333, 0, 0, 0.66667],
                "928": [0, 0.68333, 0, 0, 0.75],
                "931": [0, 0.68333, 0, 0, 0.72222],
                "933": [0, 0.68333, 0, 0, 0.77778],
                "934": [0, 0.68333, 0, 0, 0.72222],
                "936": [0, 0.68333, 0, 0, 0.77778],
                "937": [0, 0.68333, 0, 0, 0.72222],
                "8211": [0, 0.43056, 0.02778, 0, 0.5],
                "8212": [0, 0.43056, 0.02778, 0, 1],
                "8216": [0, 0.69444, 0, 0, 0.27778],
                "8217": [0, 0.69444, 0, 0, 0.27778],
                "8220": [0, 0.69444, 0, 0, 0.5],
                "8221": [0, 0.69444, 0, 0, 0.5],
                "8224": [0.19444, 0.69444, 0, 0, 0.44445],
                "8225": [0.19444, 0.69444, 0, 0, 0.44445],
                "8230": [0, 0.123, 0, 0, 1.172],
                "8242": [0, 0.55556, 0, 0, 0.275],
                "8407": [0, 0.71444, 0.15382, 0, 0.5],
                "8463": [0, 0.68889, 0, 0, 0.54028],
                "8465": [0, 0.69444, 0, 0, 0.72222],
                "8467": [0, 0.69444, 0, 0.11111, 0.41667],
                "8472": [0.19444, 0.43056, 0, 0.11111, 0.63646],
                "8476": [0, 0.69444, 0, 0, 0.72222],
                "8501": [0, 0.69444, 0, 0, 0.61111],
                "8592": [-0.13313, 0.36687, 0, 0, 1],
                "8593": [0.19444, 0.69444, 0, 0, 0.5],
                "8594": [-0.13313, 0.36687, 0, 0, 1],
                "8595": [0.19444, 0.69444, 0, 0, 0.5],
                "8596": [-0.13313, 0.36687, 0, 0, 1],
                "8597": [0.25, 0.75, 0, 0, 0.5],
                "8598": [0.19444, 0.69444, 0, 0, 1],
                "8599": [0.19444, 0.69444, 0, 0, 1],
                "8600": [0.19444, 0.69444, 0, 0, 1],
                "8601": [0.19444, 0.69444, 0, 0, 1],
                "8614": [0.011, 0.511, 0, 0, 1],
                "8617": [0.011, 0.511, 0, 0, 1.126],
                "8618": [0.011, 0.511, 0, 0, 1.126],
                "8636": [-0.13313, 0.36687, 0, 0, 1],
                "8637": [-0.13313, 0.36687, 0, 0, 1],
                "8640": [-0.13313, 0.36687, 0, 0, 1],
                "8641": [-0.13313, 0.36687, 0, 0, 1],
                "8652": [0.011, 0.671, 0, 0, 1],
                "8656": [-0.13313, 0.36687, 0, 0, 1],
                "8657": [0.19444, 0.69444, 0, 0, 0.61111],
                "8658": [-0.13313, 0.36687, 0, 0, 1],
                "8659": [0.19444, 0.69444, 0, 0, 0.61111],
                "8660": [-0.13313, 0.36687, 0, 0, 1],
                "8661": [0.25, 0.75, 0, 0, 0.61111],
                "8704": [0, 0.69444, 0, 0, 0.55556],
                "8706": [0, 0.69444, 0.05556, 0.08334, 0.5309],
                "8707": [0, 0.69444, 0, 0, 0.55556],
                "8709": [0.05556, 0.75, 0, 0, 0.5],
                "8711": [0, 0.68333, 0, 0, 0.83334],
                "8712": [0.0391, 0.5391, 0, 0, 0.66667],
                "8715": [0.0391, 0.5391, 0, 0, 0.66667],
                "8722": [0.08333, 0.58333, 0, 0, 0.77778],
                "8723": [0.08333, 0.58333, 0, 0, 0.77778],
                "8725": [0.25, 0.75, 0, 0, 0.5],
                "8726": [0.25, 0.75, 0, 0, 0.5],
                "8727": [-0.03472, 0.46528, 0, 0, 0.5],
                "8728": [-0.05555, 0.44445, 0, 0, 0.5],
                "8729": [-0.05555, 0.44445, 0, 0, 0.5],
                "8730": [0.2, 0.8, 0, 0, 0.83334],
                "8733": [0, 0.43056, 0, 0, 0.77778],
                "8734": [0, 0.43056, 0, 0, 1],
                "8736": [0, 0.69224, 0, 0, 0.72222],
                "8739": [0.25, 0.75, 0, 0, 0.27778],
                "8741": [0.25, 0.75, 0, 0, 0.5],
                "8743": [0, 0.55556, 0, 0, 0.66667],
                "8744": [0, 0.55556, 0, 0, 0.66667],
                "8745": [0, 0.55556, 0, 0, 0.66667],
                "8746": [0, 0.55556, 0, 0, 0.66667],
                "8747": [0.19444, 0.69444, 0.11111, 0, 0.41667],
                "8764": [-0.13313, 0.36687, 0, 0, 0.77778],
                "8768": [0.19444, 0.69444, 0, 0, 0.27778],
                "8771": [-0.03625, 0.46375, 0, 0, 0.77778],
                "8773": [-0.022, 0.589, 0, 0, 0.778],
                "8776": [-0.01688, 0.48312, 0, 0, 0.77778],
                "8781": [-0.03625, 0.46375, 0, 0, 0.77778],
                "8784": [-0.133, 0.673, 0, 0, 0.778],
                "8801": [-0.03625, 0.46375, 0, 0, 0.77778],
                "8804": [0.13597, 0.63597, 0, 0, 0.77778],
                "8805": [0.13597, 0.63597, 0, 0, 0.77778],
                "8810": [0.0391, 0.5391, 0, 0, 1],
                "8811": [0.0391, 0.5391, 0, 0, 1],
                "8826": [0.0391, 0.5391, 0, 0, 0.77778],
                "8827": [0.0391, 0.5391, 0, 0, 0.77778],
                "8834": [0.0391, 0.5391, 0, 0, 0.77778],
                "8835": [0.0391, 0.5391, 0, 0, 0.77778],
                "8838": [0.13597, 0.63597, 0, 0, 0.77778],
                "8839": [0.13597, 0.63597, 0, 0, 0.77778],
                "8846": [0, 0.55556, 0, 0, 0.66667],
                "8849": [0.13597, 0.63597, 0, 0, 0.77778],
                "8850": [0.13597, 0.63597, 0, 0, 0.77778],
                "8851": [0, 0.55556, 0, 0, 0.66667],
                "8852": [0, 0.55556, 0, 0, 0.66667],
                "8853": [0.08333, 0.58333, 0, 0, 0.77778],
                "8854": [0.08333, 0.58333, 0, 0, 0.77778],
                "8855": [0.08333, 0.58333, 0, 0, 0.77778],
                "8856": [0.08333, 0.58333, 0, 0, 0.77778],
                "8857": [0.08333, 0.58333, 0, 0, 0.77778],
                "8866": [0, 0.69444, 0, 0, 0.61111],
                "8867": [0, 0.69444, 0, 0, 0.61111],
                "8868": [0, 0.69444, 0, 0, 0.77778],
                "8869": [0, 0.69444, 0, 0, 0.77778],
                "8872": [0.249, 0.75, 0, 0, 0.867],
                "8900": [-0.05555, 0.44445, 0, 0, 0.5],
                "8901": [-0.05555, 0.44445, 0, 0, 0.27778],
                "8902": [-0.03472, 0.46528, 0, 0, 0.5],
                "8904": [5e-3, 0.505, 0, 0, 0.9],
                "8942": [0.03, 0.903, 0, 0, 0.278],
                "8943": [-0.19, 0.313, 0, 0, 1.172],
                "8945": [-0.1, 0.823, 0, 0, 1.282],
                "8968": [0.25, 0.75, 0, 0, 0.44445],
                "8969": [0.25, 0.75, 0, 0, 0.44445],
                "8970": [0.25, 0.75, 0, 0, 0.44445],
                "8971": [0.25, 0.75, 0, 0, 0.44445],
                "8994": [-0.14236, 0.35764, 0, 0, 1],
                "8995": [-0.14236, 0.35764, 0, 0, 1],
                "9136": [0.244, 0.744, 0, 0, 0.412],
                "9137": [0.244, 0.745, 0, 0, 0.412],
                "9651": [0.19444, 0.69444, 0, 0, 0.88889],
                "9657": [-0.03472, 0.46528, 0, 0, 0.5],
                "9661": [0.19444, 0.69444, 0, 0, 0.88889],
                "9667": [-0.03472, 0.46528, 0, 0, 0.5],
                "9711": [0.19444, 0.69444, 0, 0, 1],
                "9824": [0.12963, 0.69444, 0, 0, 0.77778],
                "9825": [0.12963, 0.69444, 0, 0, 0.77778],
                "9826": [0.12963, 0.69444, 0, 0, 0.77778],
                "9827": [0.12963, 0.69444, 0, 0, 0.77778],
                "9837": [0, 0.75, 0, 0, 0.38889],
                "9838": [0.19444, 0.69444, 0, 0, 0.38889],
                "9839": [0.19444, 0.69444, 0, 0, 0.38889],
                "10216": [0.25, 0.75, 0, 0, 0.38889],
                "10217": [0.25, 0.75, 0, 0, 0.38889],
                "10222": [0.244, 0.744, 0, 0, 0.412],
                "10223": [0.244, 0.745, 0, 0, 0.412],
                "10229": [0.011, 0.511, 0, 0, 1.609],
                "10230": [0.011, 0.511, 0, 0, 1.638],
                "10231": [0.011, 0.511, 0, 0, 1.859],
                "10232": [0.024, 0.525, 0, 0, 1.609],
                "10233": [0.024, 0.525, 0, 0, 1.638],
                "10234": [0.024, 0.525, 0, 0, 1.858],
                "10236": [0.011, 0.511, 0, 0, 1.638],
                "10815": [0, 0.68333, 0, 0, 0.75],
                "10927": [0.13597, 0.63597, 0, 0, 0.77778],
                "10928": [0.13597, 0.63597, 0, 0, 0.77778],
                "57376": [0.19444, 0.69444, 0, 0, 0]
              },
              "Math-BoldItalic": {
                "32": [0, 0, 0, 0, 0.25],
                "48": [0, 0.44444, 0, 0, 0.575],
                "49": [0, 0.44444, 0, 0, 0.575],
                "50": [0, 0.44444, 0, 0, 0.575],
                "51": [0.19444, 0.44444, 0, 0, 0.575],
                "52": [0.19444, 0.44444, 0, 0, 0.575],
                "53": [0.19444, 0.44444, 0, 0, 0.575],
                "54": [0, 0.64444, 0, 0, 0.575],
                "55": [0.19444, 0.44444, 0, 0, 0.575],
                "56": [0, 0.64444, 0, 0, 0.575],
                "57": [0.19444, 0.44444, 0, 0, 0.575],
                "65": [0, 0.68611, 0, 0, 0.86944],
                "66": [0, 0.68611, 0.04835, 0, 0.8664],
                "67": [0, 0.68611, 0.06979, 0, 0.81694],
                "68": [0, 0.68611, 0.03194, 0, 0.93812],
                "69": [0, 0.68611, 0.05451, 0, 0.81007],
                "70": [0, 0.68611, 0.15972, 0, 0.68889],
                "71": [0, 0.68611, 0, 0, 0.88673],
                "72": [0, 0.68611, 0.08229, 0, 0.98229],
                "73": [0, 0.68611, 0.07778, 0, 0.51111],
                "74": [0, 0.68611, 0.10069, 0, 0.63125],
                "75": [0, 0.68611, 0.06979, 0, 0.97118],
                "76": [0, 0.68611, 0, 0, 0.75555],
                "77": [0, 0.68611, 0.11424, 0, 1.14201],
                "78": [0, 0.68611, 0.11424, 0, 0.95034],
                "79": [0, 0.68611, 0.03194, 0, 0.83666],
                "80": [0, 0.68611, 0.15972, 0, 0.72309],
                "81": [0.19444, 0.68611, 0, 0, 0.86861],
                "82": [0, 0.68611, 421e-5, 0, 0.87235],
                "83": [0, 0.68611, 0.05382, 0, 0.69271],
                "84": [0, 0.68611, 0.15972, 0, 0.63663],
                "85": [0, 0.68611, 0.11424, 0, 0.80027],
                "86": [0, 0.68611, 0.25555, 0, 0.67778],
                "87": [0, 0.68611, 0.15972, 0, 1.09305],
                "88": [0, 0.68611, 0.07778, 0, 0.94722],
                "89": [0, 0.68611, 0.25555, 0, 0.67458],
                "90": [0, 0.68611, 0.06979, 0, 0.77257],
                "97": [0, 0.44444, 0, 0, 0.63287],
                "98": [0, 0.69444, 0, 0, 0.52083],
                "99": [0, 0.44444, 0, 0, 0.51342],
                "100": [0, 0.69444, 0, 0, 0.60972],
                "101": [0, 0.44444, 0, 0, 0.55361],
                "102": [0.19444, 0.69444, 0.11042, 0, 0.56806],
                "103": [0.19444, 0.44444, 0.03704, 0, 0.5449],
                "104": [0, 0.69444, 0, 0, 0.66759],
                "105": [0, 0.69326, 0, 0, 0.4048],
                "106": [0.19444, 0.69326, 0.0622, 0, 0.47083],
                "107": [0, 0.69444, 0.01852, 0, 0.6037],
                "108": [0, 0.69444, 88e-4, 0, 0.34815],
                "109": [0, 0.44444, 0, 0, 1.0324],
                "110": [0, 0.44444, 0, 0, 0.71296],
                "111": [0, 0.44444, 0, 0, 0.58472],
                "112": [0.19444, 0.44444, 0, 0, 0.60092],
                "113": [0.19444, 0.44444, 0.03704, 0, 0.54213],
                "114": [0, 0.44444, 0.03194, 0, 0.5287],
                "115": [0, 0.44444, 0, 0, 0.53125],
                "116": [0, 0.63492, 0, 0, 0.41528],
                "117": [0, 0.44444, 0, 0, 0.68102],
                "118": [0, 0.44444, 0.03704, 0, 0.56666],
                "119": [0, 0.44444, 0.02778, 0, 0.83148],
                "120": [0, 0.44444, 0, 0, 0.65903],
                "121": [0.19444, 0.44444, 0.03704, 0, 0.59028],
                "122": [0, 0.44444, 0.04213, 0, 0.55509],
                "160": [0, 0, 0, 0, 0.25],
                "915": [0, 0.68611, 0.15972, 0, 0.65694],
                "916": [0, 0.68611, 0, 0, 0.95833],
                "920": [0, 0.68611, 0.03194, 0, 0.86722],
                "923": [0, 0.68611, 0, 0, 0.80555],
                "926": [0, 0.68611, 0.07458, 0, 0.84125],
                "928": [0, 0.68611, 0.08229, 0, 0.98229],
                "931": [0, 0.68611, 0.05451, 0, 0.88507],
                "933": [0, 0.68611, 0.15972, 0, 0.67083],
                "934": [0, 0.68611, 0, 0, 0.76666],
                "936": [0, 0.68611, 0.11653, 0, 0.71402],
                "937": [0, 0.68611, 0.04835, 0, 0.8789],
                "945": [0, 0.44444, 0, 0, 0.76064],
                "946": [0.19444, 0.69444, 0.03403, 0, 0.65972],
                "947": [0.19444, 0.44444, 0.06389, 0, 0.59003],
                "948": [0, 0.69444, 0.03819, 0, 0.52222],
                "949": [0, 0.44444, 0, 0, 0.52882],
                "950": [0.19444, 0.69444, 0.06215, 0, 0.50833],
                "951": [0.19444, 0.44444, 0.03704, 0, 0.6],
                "952": [0, 0.69444, 0.03194, 0, 0.5618],
                "953": [0, 0.44444, 0, 0, 0.41204],
                "954": [0, 0.44444, 0, 0, 0.66759],
                "955": [0, 0.69444, 0, 0, 0.67083],
                "956": [0.19444, 0.44444, 0, 0, 0.70787],
                "957": [0, 0.44444, 0.06898, 0, 0.57685],
                "958": [0.19444, 0.69444, 0.03021, 0, 0.50833],
                "959": [0, 0.44444, 0, 0, 0.58472],
                "960": [0, 0.44444, 0.03704, 0, 0.68241],
                "961": [0.19444, 0.44444, 0, 0, 0.6118],
                "962": [0.09722, 0.44444, 0.07917, 0, 0.42361],
                "963": [0, 0.44444, 0.03704, 0, 0.68588],
                "964": [0, 0.44444, 0.13472, 0, 0.52083],
                "965": [0, 0.44444, 0.03704, 0, 0.63055],
                "966": [0.19444, 0.44444, 0, 0, 0.74722],
                "967": [0.19444, 0.44444, 0, 0, 0.71805],
                "968": [0.19444, 0.69444, 0.03704, 0, 0.75833],
                "969": [0, 0.44444, 0.03704, 0, 0.71782],
                "977": [0, 0.69444, 0, 0, 0.69155],
                "981": [0.19444, 0.69444, 0, 0, 0.7125],
                "982": [0, 0.44444, 0.03194, 0, 0.975],
                "1009": [0.19444, 0.44444, 0, 0, 0.6118],
                "1013": [0, 0.44444, 0, 0, 0.48333],
                "57649": [0, 0.44444, 0, 0, 0.39352],
                "57911": [0.19444, 0.44444, 0, 0, 0.43889]
              },
              "Math-Italic": {
                "32": [0, 0, 0, 0, 0.25],
                "48": [0, 0.43056, 0, 0, 0.5],
                "49": [0, 0.43056, 0, 0, 0.5],
                "50": [0, 0.43056, 0, 0, 0.5],
                "51": [0.19444, 0.43056, 0, 0, 0.5],
                "52": [0.19444, 0.43056, 0, 0, 0.5],
                "53": [0.19444, 0.43056, 0, 0, 0.5],
                "54": [0, 0.64444, 0, 0, 0.5],
                "55": [0.19444, 0.43056, 0, 0, 0.5],
                "56": [0, 0.64444, 0, 0, 0.5],
                "57": [0.19444, 0.43056, 0, 0, 0.5],
                "65": [0, 0.68333, 0, 0.13889, 0.75],
                "66": [0, 0.68333, 0.05017, 0.08334, 0.75851],
                "67": [0, 0.68333, 0.07153, 0.08334, 0.71472],
                "68": [0, 0.68333, 0.02778, 0.05556, 0.82792],
                "69": [0, 0.68333, 0.05764, 0.08334, 0.7382],
                "70": [0, 0.68333, 0.13889, 0.08334, 0.64306],
                "71": [0, 0.68333, 0, 0.08334, 0.78625],
                "72": [0, 0.68333, 0.08125, 0.05556, 0.83125],
                "73": [0, 0.68333, 0.07847, 0.11111, 0.43958],
                "74": [0, 0.68333, 0.09618, 0.16667, 0.55451],
                "75": [0, 0.68333, 0.07153, 0.05556, 0.84931],
                "76": [0, 0.68333, 0, 0.02778, 0.68056],
                "77": [0, 0.68333, 0.10903, 0.08334, 0.97014],
                "78": [0, 0.68333, 0.10903, 0.08334, 0.80347],
                "79": [0, 0.68333, 0.02778, 0.08334, 0.76278],
                "80": [0, 0.68333, 0.13889, 0.08334, 0.64201],
                "81": [0.19444, 0.68333, 0, 0.08334, 0.79056],
                "82": [0, 0.68333, 773e-5, 0.08334, 0.75929],
                "83": [0, 0.68333, 0.05764, 0.08334, 0.6132],
                "84": [0, 0.68333, 0.13889, 0.08334, 0.58438],
                "85": [0, 0.68333, 0.10903, 0.02778, 0.68278],
                "86": [0, 0.68333, 0.22222, 0, 0.58333],
                "87": [0, 0.68333, 0.13889, 0, 0.94445],
                "88": [0, 0.68333, 0.07847, 0.08334, 0.82847],
                "89": [0, 0.68333, 0.22222, 0, 0.58056],
                "90": [0, 0.68333, 0.07153, 0.08334, 0.68264],
                "97": [0, 0.43056, 0, 0, 0.52859],
                "98": [0, 0.69444, 0, 0, 0.42917],
                "99": [0, 0.43056, 0, 0.05556, 0.43276],
                "100": [0, 0.69444, 0, 0.16667, 0.52049],
                "101": [0, 0.43056, 0, 0.05556, 0.46563],
                "102": [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
                "103": [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
                "104": [0, 0.69444, 0, 0, 0.57616],
                "105": [0, 0.65952, 0, 0, 0.34451],
                "106": [0.19444, 0.65952, 0.05724, 0, 0.41181],
                "107": [0, 0.69444, 0.03148, 0, 0.5206],
                "108": [0, 0.69444, 0.01968, 0.08334, 0.29838],
                "109": [0, 0.43056, 0, 0, 0.87801],
                "110": [0, 0.43056, 0, 0, 0.60023],
                "111": [0, 0.43056, 0, 0.05556, 0.48472],
                "112": [0.19444, 0.43056, 0, 0.08334, 0.50313],
                "113": [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
                "114": [0, 0.43056, 0.02778, 0.05556, 0.45116],
                "115": [0, 0.43056, 0, 0.05556, 0.46875],
                "116": [0, 0.61508, 0, 0.08334, 0.36111],
                "117": [0, 0.43056, 0, 0.02778, 0.57246],
                "118": [0, 0.43056, 0.03588, 0.02778, 0.48472],
                "119": [0, 0.43056, 0.02691, 0.08334, 0.71592],
                "120": [0, 0.43056, 0, 0.02778, 0.57153],
                "121": [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
                "122": [0, 0.43056, 0.04398, 0.05556, 0.46505],
                "160": [0, 0, 0, 0, 0.25],
                "915": [0, 0.68333, 0.13889, 0.08334, 0.61528],
                "916": [0, 0.68333, 0, 0.16667, 0.83334],
                "920": [0, 0.68333, 0.02778, 0.08334, 0.76278],
                "923": [0, 0.68333, 0, 0.16667, 0.69445],
                "926": [0, 0.68333, 0.07569, 0.08334, 0.74236],
                "928": [0, 0.68333, 0.08125, 0.05556, 0.83125],
                "931": [0, 0.68333, 0.05764, 0.08334, 0.77986],
                "933": [0, 0.68333, 0.13889, 0.05556, 0.58333],
                "934": [0, 0.68333, 0, 0.08334, 0.66667],
                "936": [0, 0.68333, 0.11, 0.05556, 0.61222],
                "937": [0, 0.68333, 0.05017, 0.08334, 0.7724],
                "945": [0, 0.43056, 37e-4, 0.02778, 0.6397],
                "946": [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
                "947": [0.19444, 0.43056, 0.05556, 0, 0.51773],
                "948": [0, 0.69444, 0.03785, 0.05556, 0.44444],
                "949": [0, 0.43056, 0, 0.08334, 0.46632],
                "950": [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
                "951": [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
                "952": [0, 0.69444, 0.02778, 0.08334, 0.46944],
                "953": [0, 0.43056, 0, 0.05556, 0.35394],
                "954": [0, 0.43056, 0, 0, 0.57616],
                "955": [0, 0.69444, 0, 0, 0.58334],
                "956": [0.19444, 0.43056, 0, 0.02778, 0.60255],
                "957": [0, 0.43056, 0.06366, 0.02778, 0.49398],
                "958": [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
                "959": [0, 0.43056, 0, 0.05556, 0.48472],
                "960": [0, 0.43056, 0.03588, 0, 0.57003],
                "961": [0.19444, 0.43056, 0, 0.08334, 0.51702],
                "962": [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
                "963": [0, 0.43056, 0.03588, 0, 0.57141],
                "964": [0, 0.43056, 0.1132, 0.02778, 0.43715],
                "965": [0, 0.43056, 0.03588, 0.02778, 0.54028],
                "966": [0.19444, 0.43056, 0, 0.08334, 0.65417],
                "967": [0.19444, 0.43056, 0, 0.05556, 0.62569],
                "968": [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
                "969": [0, 0.43056, 0.03588, 0, 0.62245],
                "977": [0, 0.69444, 0, 0.08334, 0.59144],
                "981": [0.19444, 0.69444, 0, 0.08334, 0.59583],
                "982": [0, 0.43056, 0.02778, 0, 0.82813],
                "1009": [0.19444, 0.43056, 0, 0.08334, 0.51702],
                "1013": [0, 0.43056, 0, 0.05556, 0.4059],
                "57649": [0, 0.43056, 0, 0.02778, 0.32246],
                "57911": [0.19444, 0.43056, 0, 0.08334, 0.38403]
              },
              "SansSerif-Bold": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0, 0, 0.36667],
                "34": [0, 0.69444, 0, 0, 0.55834],
                "35": [0.19444, 0.69444, 0, 0, 0.91667],
                "36": [0.05556, 0.75, 0, 0, 0.55],
                "37": [0.05556, 0.75, 0, 0, 1.02912],
                "38": [0, 0.69444, 0, 0, 0.83056],
                "39": [0, 0.69444, 0, 0, 0.30556],
                "40": [0.25, 0.75, 0, 0, 0.42778],
                "41": [0.25, 0.75, 0, 0, 0.42778],
                "42": [0, 0.75, 0, 0, 0.55],
                "43": [0.11667, 0.61667, 0, 0, 0.85556],
                "44": [0.10556, 0.13056, 0, 0, 0.30556],
                "45": [0, 0.45833, 0, 0, 0.36667],
                "46": [0, 0.13056, 0, 0, 0.30556],
                "47": [0.25, 0.75, 0, 0, 0.55],
                "48": [0, 0.69444, 0, 0, 0.55],
                "49": [0, 0.69444, 0, 0, 0.55],
                "50": [0, 0.69444, 0, 0, 0.55],
                "51": [0, 0.69444, 0, 0, 0.55],
                "52": [0, 0.69444, 0, 0, 0.55],
                "53": [0, 0.69444, 0, 0, 0.55],
                "54": [0, 0.69444, 0, 0, 0.55],
                "55": [0, 0.69444, 0, 0, 0.55],
                "56": [0, 0.69444, 0, 0, 0.55],
                "57": [0, 0.69444, 0, 0, 0.55],
                "58": [0, 0.45833, 0, 0, 0.30556],
                "59": [0.10556, 0.45833, 0, 0, 0.30556],
                "61": [-0.09375, 0.40625, 0, 0, 0.85556],
                "63": [0, 0.69444, 0, 0, 0.51945],
                "64": [0, 0.69444, 0, 0, 0.73334],
                "65": [0, 0.69444, 0, 0, 0.73334],
                "66": [0, 0.69444, 0, 0, 0.73334],
                "67": [0, 0.69444, 0, 0, 0.70278],
                "68": [0, 0.69444, 0, 0, 0.79445],
                "69": [0, 0.69444, 0, 0, 0.64167],
                "70": [0, 0.69444, 0, 0, 0.61111],
                "71": [0, 0.69444, 0, 0, 0.73334],
                "72": [0, 0.69444, 0, 0, 0.79445],
                "73": [0, 0.69444, 0, 0, 0.33056],
                "74": [0, 0.69444, 0, 0, 0.51945],
                "75": [0, 0.69444, 0, 0, 0.76389],
                "76": [0, 0.69444, 0, 0, 0.58056],
                "77": [0, 0.69444, 0, 0, 0.97778],
                "78": [0, 0.69444, 0, 0, 0.79445],
                "79": [0, 0.69444, 0, 0, 0.79445],
                "80": [0, 0.69444, 0, 0, 0.70278],
                "81": [0.10556, 0.69444, 0, 0, 0.79445],
                "82": [0, 0.69444, 0, 0, 0.70278],
                "83": [0, 0.69444, 0, 0, 0.61111],
                "84": [0, 0.69444, 0, 0, 0.73334],
                "85": [0, 0.69444, 0, 0, 0.76389],
                "86": [0, 0.69444, 0.01528, 0, 0.73334],
                "87": [0, 0.69444, 0.01528, 0, 1.03889],
                "88": [0, 0.69444, 0, 0, 0.73334],
                "89": [0, 0.69444, 0.0275, 0, 0.73334],
                "90": [0, 0.69444, 0, 0, 0.67223],
                "91": [0.25, 0.75, 0, 0, 0.34306],
                "93": [0.25, 0.75, 0, 0, 0.34306],
                "94": [0, 0.69444, 0, 0, 0.55],
                "95": [0.35, 0.10833, 0.03056, 0, 0.55],
                "97": [0, 0.45833, 0, 0, 0.525],
                "98": [0, 0.69444, 0, 0, 0.56111],
                "99": [0, 0.45833, 0, 0, 0.48889],
                "100": [0, 0.69444, 0, 0, 0.56111],
                "101": [0, 0.45833, 0, 0, 0.51111],
                "102": [0, 0.69444, 0.07639, 0, 0.33611],
                "103": [0.19444, 0.45833, 0.01528, 0, 0.55],
                "104": [0, 0.69444, 0, 0, 0.56111],
                "105": [0, 0.69444, 0, 0, 0.25556],
                "106": [0.19444, 0.69444, 0, 0, 0.28611],
                "107": [0, 0.69444, 0, 0, 0.53056],
                "108": [0, 0.69444, 0, 0, 0.25556],
                "109": [0, 0.45833, 0, 0, 0.86667],
                "110": [0, 0.45833, 0, 0, 0.56111],
                "111": [0, 0.45833, 0, 0, 0.55],
                "112": [0.19444, 0.45833, 0, 0, 0.56111],
                "113": [0.19444, 0.45833, 0, 0, 0.56111],
                "114": [0, 0.45833, 0.01528, 0, 0.37222],
                "115": [0, 0.45833, 0, 0, 0.42167],
                "116": [0, 0.58929, 0, 0, 0.40417],
                "117": [0, 0.45833, 0, 0, 0.56111],
                "118": [0, 0.45833, 0.01528, 0, 0.5],
                "119": [0, 0.45833, 0.01528, 0, 0.74445],
                "120": [0, 0.45833, 0, 0, 0.5],
                "121": [0.19444, 0.45833, 0.01528, 0, 0.5],
                "122": [0, 0.45833, 0, 0, 0.47639],
                "126": [0.35, 0.34444, 0, 0, 0.55],
                "160": [0, 0, 0, 0, 0.25],
                "168": [0, 0.69444, 0, 0, 0.55],
                "176": [0, 0.69444, 0, 0, 0.73334],
                "180": [0, 0.69444, 0, 0, 0.55],
                "184": [0.17014, 0, 0, 0, 0.48889],
                "305": [0, 0.45833, 0, 0, 0.25556],
                "567": [0.19444, 0.45833, 0, 0, 0.28611],
                "710": [0, 0.69444, 0, 0, 0.55],
                "711": [0, 0.63542, 0, 0, 0.55],
                "713": [0, 0.63778, 0, 0, 0.55],
                "728": [0, 0.69444, 0, 0, 0.55],
                "729": [0, 0.69444, 0, 0, 0.30556],
                "730": [0, 0.69444, 0, 0, 0.73334],
                "732": [0, 0.69444, 0, 0, 0.55],
                "733": [0, 0.69444, 0, 0, 0.55],
                "915": [0, 0.69444, 0, 0, 0.58056],
                "916": [0, 0.69444, 0, 0, 0.91667],
                "920": [0, 0.69444, 0, 0, 0.85556],
                "923": [0, 0.69444, 0, 0, 0.67223],
                "926": [0, 0.69444, 0, 0, 0.73334],
                "928": [0, 0.69444, 0, 0, 0.79445],
                "931": [0, 0.69444, 0, 0, 0.79445],
                "933": [0, 0.69444, 0, 0, 0.85556],
                "934": [0, 0.69444, 0, 0, 0.79445],
                "936": [0, 0.69444, 0, 0, 0.85556],
                "937": [0, 0.69444, 0, 0, 0.79445],
                "8211": [0, 0.45833, 0.03056, 0, 0.55],
                "8212": [0, 0.45833, 0.03056, 0, 1.10001],
                "8216": [0, 0.69444, 0, 0, 0.30556],
                "8217": [0, 0.69444, 0, 0, 0.30556],
                "8220": [0, 0.69444, 0, 0, 0.55834],
                "8221": [0, 0.69444, 0, 0, 0.55834]
              },
              "SansSerif-Italic": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0.05733, 0, 0.31945],
                "34": [0, 0.69444, 316e-5, 0, 0.5],
                "35": [0.19444, 0.69444, 0.05087, 0, 0.83334],
                "36": [0.05556, 0.75, 0.11156, 0, 0.5],
                "37": [0.05556, 0.75, 0.03126, 0, 0.83334],
                "38": [0, 0.69444, 0.03058, 0, 0.75834],
                "39": [0, 0.69444, 0.07816, 0, 0.27778],
                "40": [0.25, 0.75, 0.13164, 0, 0.38889],
                "41": [0.25, 0.75, 0.02536, 0, 0.38889],
                "42": [0, 0.75, 0.11775, 0, 0.5],
                "43": [0.08333, 0.58333, 0.02536, 0, 0.77778],
                "44": [0.125, 0.08333, 0, 0, 0.27778],
                "45": [0, 0.44444, 0.01946, 0, 0.33333],
                "46": [0, 0.08333, 0, 0, 0.27778],
                "47": [0.25, 0.75, 0.13164, 0, 0.5],
                "48": [0, 0.65556, 0.11156, 0, 0.5],
                "49": [0, 0.65556, 0.11156, 0, 0.5],
                "50": [0, 0.65556, 0.11156, 0, 0.5],
                "51": [0, 0.65556, 0.11156, 0, 0.5],
                "52": [0, 0.65556, 0.11156, 0, 0.5],
                "53": [0, 0.65556, 0.11156, 0, 0.5],
                "54": [0, 0.65556, 0.11156, 0, 0.5],
                "55": [0, 0.65556, 0.11156, 0, 0.5],
                "56": [0, 0.65556, 0.11156, 0, 0.5],
                "57": [0, 0.65556, 0.11156, 0, 0.5],
                "58": [0, 0.44444, 0.02502, 0, 0.27778],
                "59": [0.125, 0.44444, 0.02502, 0, 0.27778],
                "61": [-0.13, 0.37, 0.05087, 0, 0.77778],
                "63": [0, 0.69444, 0.11809, 0, 0.47222],
                "64": [0, 0.69444, 0.07555, 0, 0.66667],
                "65": [0, 0.69444, 0, 0, 0.66667],
                "66": [0, 0.69444, 0.08293, 0, 0.66667],
                "67": [0, 0.69444, 0.11983, 0, 0.63889],
                "68": [0, 0.69444, 0.07555, 0, 0.72223],
                "69": [0, 0.69444, 0.11983, 0, 0.59722],
                "70": [0, 0.69444, 0.13372, 0, 0.56945],
                "71": [0, 0.69444, 0.11983, 0, 0.66667],
                "72": [0, 0.69444, 0.08094, 0, 0.70834],
                "73": [0, 0.69444, 0.13372, 0, 0.27778],
                "74": [0, 0.69444, 0.08094, 0, 0.47222],
                "75": [0, 0.69444, 0.11983, 0, 0.69445],
                "76": [0, 0.69444, 0, 0, 0.54167],
                "77": [0, 0.69444, 0.08094, 0, 0.875],
                "78": [0, 0.69444, 0.08094, 0, 0.70834],
                "79": [0, 0.69444, 0.07555, 0, 0.73611],
                "80": [0, 0.69444, 0.08293, 0, 0.63889],
                "81": [0.125, 0.69444, 0.07555, 0, 0.73611],
                "82": [0, 0.69444, 0.08293, 0, 0.64584],
                "83": [0, 0.69444, 0.09205, 0, 0.55556],
                "84": [0, 0.69444, 0.13372, 0, 0.68056],
                "85": [0, 0.69444, 0.08094, 0, 0.6875],
                "86": [0, 0.69444, 0.1615, 0, 0.66667],
                "87": [0, 0.69444, 0.1615, 0, 0.94445],
                "88": [0, 0.69444, 0.13372, 0, 0.66667],
                "89": [0, 0.69444, 0.17261, 0, 0.66667],
                "90": [0, 0.69444, 0.11983, 0, 0.61111],
                "91": [0.25, 0.75, 0.15942, 0, 0.28889],
                "93": [0.25, 0.75, 0.08719, 0, 0.28889],
                "94": [0, 0.69444, 0.0799, 0, 0.5],
                "95": [0.35, 0.09444, 0.08616, 0, 0.5],
                "97": [0, 0.44444, 981e-5, 0, 0.48056],
                "98": [0, 0.69444, 0.03057, 0, 0.51667],
                "99": [0, 0.44444, 0.08336, 0, 0.44445],
                "100": [0, 0.69444, 0.09483, 0, 0.51667],
                "101": [0, 0.44444, 0.06778, 0, 0.44445],
                "102": [0, 0.69444, 0.21705, 0, 0.30556],
                "103": [0.19444, 0.44444, 0.10836, 0, 0.5],
                "104": [0, 0.69444, 0.01778, 0, 0.51667],
                "105": [0, 0.67937, 0.09718, 0, 0.23889],
                "106": [0.19444, 0.67937, 0.09162, 0, 0.26667],
                "107": [0, 0.69444, 0.08336, 0, 0.48889],
                "108": [0, 0.69444, 0.09483, 0, 0.23889],
                "109": [0, 0.44444, 0.01778, 0, 0.79445],
                "110": [0, 0.44444, 0.01778, 0, 0.51667],
                "111": [0, 0.44444, 0.06613, 0, 0.5],
                "112": [0.19444, 0.44444, 0.0389, 0, 0.51667],
                "113": [0.19444, 0.44444, 0.04169, 0, 0.51667],
                "114": [0, 0.44444, 0.10836, 0, 0.34167],
                "115": [0, 0.44444, 0.0778, 0, 0.38333],
                "116": [0, 0.57143, 0.07225, 0, 0.36111],
                "117": [0, 0.44444, 0.04169, 0, 0.51667],
                "118": [0, 0.44444, 0.10836, 0, 0.46111],
                "119": [0, 0.44444, 0.10836, 0, 0.68334],
                "120": [0, 0.44444, 0.09169, 0, 0.46111],
                "121": [0.19444, 0.44444, 0.10836, 0, 0.46111],
                "122": [0, 0.44444, 0.08752, 0, 0.43472],
                "126": [0.35, 0.32659, 0.08826, 0, 0.5],
                "160": [0, 0, 0, 0, 0.25],
                "168": [0, 0.67937, 0.06385, 0, 0.5],
                "176": [0, 0.69444, 0, 0, 0.73752],
                "184": [0.17014, 0, 0, 0, 0.44445],
                "305": [0, 0.44444, 0.04169, 0, 0.23889],
                "567": [0.19444, 0.44444, 0.04169, 0, 0.26667],
                "710": [0, 0.69444, 0.0799, 0, 0.5],
                "711": [0, 0.63194, 0.08432, 0, 0.5],
                "713": [0, 0.60889, 0.08776, 0, 0.5],
                "714": [0, 0.69444, 0.09205, 0, 0.5],
                "715": [0, 0.69444, 0, 0, 0.5],
                "728": [0, 0.69444, 0.09483, 0, 0.5],
                "729": [0, 0.67937, 0.07774, 0, 0.27778],
                "730": [0, 0.69444, 0, 0, 0.73752],
                "732": [0, 0.67659, 0.08826, 0, 0.5],
                "733": [0, 0.69444, 0.09205, 0, 0.5],
                "915": [0, 0.69444, 0.13372, 0, 0.54167],
                "916": [0, 0.69444, 0, 0, 0.83334],
                "920": [0, 0.69444, 0.07555, 0, 0.77778],
                "923": [0, 0.69444, 0, 0, 0.61111],
                "926": [0, 0.69444, 0.12816, 0, 0.66667],
                "928": [0, 0.69444, 0.08094, 0, 0.70834],
                "931": [0, 0.69444, 0.11983, 0, 0.72222],
                "933": [0, 0.69444, 0.09031, 0, 0.77778],
                "934": [0, 0.69444, 0.04603, 0, 0.72222],
                "936": [0, 0.69444, 0.09031, 0, 0.77778],
                "937": [0, 0.69444, 0.08293, 0, 0.72222],
                "8211": [0, 0.44444, 0.08616, 0, 0.5],
                "8212": [0, 0.44444, 0.08616, 0, 1],
                "8216": [0, 0.69444, 0.07816, 0, 0.27778],
                "8217": [0, 0.69444, 0.07816, 0, 0.27778],
                "8220": [0, 0.69444, 0.14205, 0, 0.5],
                "8221": [0, 0.69444, 316e-5, 0, 0.5]
              },
              "SansSerif-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "33": [0, 0.69444, 0, 0, 0.31945],
                "34": [0, 0.69444, 0, 0, 0.5],
                "35": [0.19444, 0.69444, 0, 0, 0.83334],
                "36": [0.05556, 0.75, 0, 0, 0.5],
                "37": [0.05556, 0.75, 0, 0, 0.83334],
                "38": [0, 0.69444, 0, 0, 0.75834],
                "39": [0, 0.69444, 0, 0, 0.27778],
                "40": [0.25, 0.75, 0, 0, 0.38889],
                "41": [0.25, 0.75, 0, 0, 0.38889],
                "42": [0, 0.75, 0, 0, 0.5],
                "43": [0.08333, 0.58333, 0, 0, 0.77778],
                "44": [0.125, 0.08333, 0, 0, 0.27778],
                "45": [0, 0.44444, 0, 0, 0.33333],
                "46": [0, 0.08333, 0, 0, 0.27778],
                "47": [0.25, 0.75, 0, 0, 0.5],
                "48": [0, 0.65556, 0, 0, 0.5],
                "49": [0, 0.65556, 0, 0, 0.5],
                "50": [0, 0.65556, 0, 0, 0.5],
                "51": [0, 0.65556, 0, 0, 0.5],
                "52": [0, 0.65556, 0, 0, 0.5],
                "53": [0, 0.65556, 0, 0, 0.5],
                "54": [0, 0.65556, 0, 0, 0.5],
                "55": [0, 0.65556, 0, 0, 0.5],
                "56": [0, 0.65556, 0, 0, 0.5],
                "57": [0, 0.65556, 0, 0, 0.5],
                "58": [0, 0.44444, 0, 0, 0.27778],
                "59": [0.125, 0.44444, 0, 0, 0.27778],
                "61": [-0.13, 0.37, 0, 0, 0.77778],
                "63": [0, 0.69444, 0, 0, 0.47222],
                "64": [0, 0.69444, 0, 0, 0.66667],
                "65": [0, 0.69444, 0, 0, 0.66667],
                "66": [0, 0.69444, 0, 0, 0.66667],
                "67": [0, 0.69444, 0, 0, 0.63889],
                "68": [0, 0.69444, 0, 0, 0.72223],
                "69": [0, 0.69444, 0, 0, 0.59722],
                "70": [0, 0.69444, 0, 0, 0.56945],
                "71": [0, 0.69444, 0, 0, 0.66667],
                "72": [0, 0.69444, 0, 0, 0.70834],
                "73": [0, 0.69444, 0, 0, 0.27778],
                "74": [0, 0.69444, 0, 0, 0.47222],
                "75": [0, 0.69444, 0, 0, 0.69445],
                "76": [0, 0.69444, 0, 0, 0.54167],
                "77": [0, 0.69444, 0, 0, 0.875],
                "78": [0, 0.69444, 0, 0, 0.70834],
                "79": [0, 0.69444, 0, 0, 0.73611],
                "80": [0, 0.69444, 0, 0, 0.63889],
                "81": [0.125, 0.69444, 0, 0, 0.73611],
                "82": [0, 0.69444, 0, 0, 0.64584],
                "83": [0, 0.69444, 0, 0, 0.55556],
                "84": [0, 0.69444, 0, 0, 0.68056],
                "85": [0, 0.69444, 0, 0, 0.6875],
                "86": [0, 0.69444, 0.01389, 0, 0.66667],
                "87": [0, 0.69444, 0.01389, 0, 0.94445],
                "88": [0, 0.69444, 0, 0, 0.66667],
                "89": [0, 0.69444, 0.025, 0, 0.66667],
                "90": [0, 0.69444, 0, 0, 0.61111],
                "91": [0.25, 0.75, 0, 0, 0.28889],
                "93": [0.25, 0.75, 0, 0, 0.28889],
                "94": [0, 0.69444, 0, 0, 0.5],
                "95": [0.35, 0.09444, 0.02778, 0, 0.5],
                "97": [0, 0.44444, 0, 0, 0.48056],
                "98": [0, 0.69444, 0, 0, 0.51667],
                "99": [0, 0.44444, 0, 0, 0.44445],
                "100": [0, 0.69444, 0, 0, 0.51667],
                "101": [0, 0.44444, 0, 0, 0.44445],
                "102": [0, 0.69444, 0.06944, 0, 0.30556],
                "103": [0.19444, 0.44444, 0.01389, 0, 0.5],
                "104": [0, 0.69444, 0, 0, 0.51667],
                "105": [0, 0.67937, 0, 0, 0.23889],
                "106": [0.19444, 0.67937, 0, 0, 0.26667],
                "107": [0, 0.69444, 0, 0, 0.48889],
                "108": [0, 0.69444, 0, 0, 0.23889],
                "109": [0, 0.44444, 0, 0, 0.79445],
                "110": [0, 0.44444, 0, 0, 0.51667],
                "111": [0, 0.44444, 0, 0, 0.5],
                "112": [0.19444, 0.44444, 0, 0, 0.51667],
                "113": [0.19444, 0.44444, 0, 0, 0.51667],
                "114": [0, 0.44444, 0.01389, 0, 0.34167],
                "115": [0, 0.44444, 0, 0, 0.38333],
                "116": [0, 0.57143, 0, 0, 0.36111],
                "117": [0, 0.44444, 0, 0, 0.51667],
                "118": [0, 0.44444, 0.01389, 0, 0.46111],
                "119": [0, 0.44444, 0.01389, 0, 0.68334],
                "120": [0, 0.44444, 0, 0, 0.46111],
                "121": [0.19444, 0.44444, 0.01389, 0, 0.46111],
                "122": [0, 0.44444, 0, 0, 0.43472],
                "126": [0.35, 0.32659, 0, 0, 0.5],
                "160": [0, 0, 0, 0, 0.25],
                "168": [0, 0.67937, 0, 0, 0.5],
                "176": [0, 0.69444, 0, 0, 0.66667],
                "184": [0.17014, 0, 0, 0, 0.44445],
                "305": [0, 0.44444, 0, 0, 0.23889],
                "567": [0.19444, 0.44444, 0, 0, 0.26667],
                "710": [0, 0.69444, 0, 0, 0.5],
                "711": [0, 0.63194, 0, 0, 0.5],
                "713": [0, 0.60889, 0, 0, 0.5],
                "714": [0, 0.69444, 0, 0, 0.5],
                "715": [0, 0.69444, 0, 0, 0.5],
                "728": [0, 0.69444, 0, 0, 0.5],
                "729": [0, 0.67937, 0, 0, 0.27778],
                "730": [0, 0.69444, 0, 0, 0.66667],
                "732": [0, 0.67659, 0, 0, 0.5],
                "733": [0, 0.69444, 0, 0, 0.5],
                "915": [0, 0.69444, 0, 0, 0.54167],
                "916": [0, 0.69444, 0, 0, 0.83334],
                "920": [0, 0.69444, 0, 0, 0.77778],
                "923": [0, 0.69444, 0, 0, 0.61111],
                "926": [0, 0.69444, 0, 0, 0.66667],
                "928": [0, 0.69444, 0, 0, 0.70834],
                "931": [0, 0.69444, 0, 0, 0.72222],
                "933": [0, 0.69444, 0, 0, 0.77778],
                "934": [0, 0.69444, 0, 0, 0.72222],
                "936": [0, 0.69444, 0, 0, 0.77778],
                "937": [0, 0.69444, 0, 0, 0.72222],
                "8211": [0, 0.44444, 0.02778, 0, 0.5],
                "8212": [0, 0.44444, 0.02778, 0, 1],
                "8216": [0, 0.69444, 0, 0, 0.27778],
                "8217": [0, 0.69444, 0, 0, 0.27778],
                "8220": [0, 0.69444, 0, 0, 0.5],
                "8221": [0, 0.69444, 0, 0, 0.5]
              },
              "Script-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "65": [0, 0.7, 0.22925, 0, 0.80253],
                "66": [0, 0.7, 0.04087, 0, 0.90757],
                "67": [0, 0.7, 0.1689, 0, 0.66619],
                "68": [0, 0.7, 0.09371, 0, 0.77443],
                "69": [0, 0.7, 0.18583, 0, 0.56162],
                "70": [0, 0.7, 0.13634, 0, 0.89544],
                "71": [0, 0.7, 0.17322, 0, 0.60961],
                "72": [0, 0.7, 0.29694, 0, 0.96919],
                "73": [0, 0.7, 0.19189, 0, 0.80907],
                "74": [0.27778, 0.7, 0.19189, 0, 1.05159],
                "75": [0, 0.7, 0.31259, 0, 0.91364],
                "76": [0, 0.7, 0.19189, 0, 0.87373],
                "77": [0, 0.7, 0.15981, 0, 1.08031],
                "78": [0, 0.7, 0.3525, 0, 0.9015],
                "79": [0, 0.7, 0.08078, 0, 0.73787],
                "80": [0, 0.7, 0.08078, 0, 1.01262],
                "81": [0, 0.7, 0.03305, 0, 0.88282],
                "82": [0, 0.7, 0.06259, 0, 0.85],
                "83": [0, 0.7, 0.19189, 0, 0.86767],
                "84": [0, 0.7, 0.29087, 0, 0.74697],
                "85": [0, 0.7, 0.25815, 0, 0.79996],
                "86": [0, 0.7, 0.27523, 0, 0.62204],
                "87": [0, 0.7, 0.27523, 0, 0.80532],
                "88": [0, 0.7, 0.26006, 0, 0.94445],
                "89": [0, 0.7, 0.2939, 0, 0.70961],
                "90": [0, 0.7, 0.24037, 0, 0.8212],
                "160": [0, 0, 0, 0, 0.25]
              },
              "Size1-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "40": [0.35001, 0.85, 0, 0, 0.45834],
                "41": [0.35001, 0.85, 0, 0, 0.45834],
                "47": [0.35001, 0.85, 0, 0, 0.57778],
                "91": [0.35001, 0.85, 0, 0, 0.41667],
                "92": [0.35001, 0.85, 0, 0, 0.57778],
                "93": [0.35001, 0.85, 0, 0, 0.41667],
                "123": [0.35001, 0.85, 0, 0, 0.58334],
                "125": [0.35001, 0.85, 0, 0, 0.58334],
                "160": [0, 0, 0, 0, 0.25],
                "710": [0, 0.72222, 0, 0, 0.55556],
                "732": [0, 0.72222, 0, 0, 0.55556],
                "770": [0, 0.72222, 0, 0, 0.55556],
                "771": [0, 0.72222, 0, 0, 0.55556],
                "8214": [-99e-5, 0.601, 0, 0, 0.77778],
                "8593": [1e-5, 0.6, 0, 0, 0.66667],
                "8595": [1e-5, 0.6, 0, 0, 0.66667],
                "8657": [1e-5, 0.6, 0, 0, 0.77778],
                "8659": [1e-5, 0.6, 0, 0, 0.77778],
                "8719": [0.25001, 0.75, 0, 0, 0.94445],
                "8720": [0.25001, 0.75, 0, 0, 0.94445],
                "8721": [0.25001, 0.75, 0, 0, 1.05556],
                "8730": [0.35001, 0.85, 0, 0, 1],
                "8739": [-599e-5, 0.606, 0, 0, 0.33333],
                "8741": [-599e-5, 0.606, 0, 0, 0.55556],
                "8747": [0.30612, 0.805, 0.19445, 0, 0.47222],
                "8748": [0.306, 0.805, 0.19445, 0, 0.47222],
                "8749": [0.306, 0.805, 0.19445, 0, 0.47222],
                "8750": [0.30612, 0.805, 0.19445, 0, 0.47222],
                "8896": [0.25001, 0.75, 0, 0, 0.83334],
                "8897": [0.25001, 0.75, 0, 0, 0.83334],
                "8898": [0.25001, 0.75, 0, 0, 0.83334],
                "8899": [0.25001, 0.75, 0, 0, 0.83334],
                "8968": [0.35001, 0.85, 0, 0, 0.47222],
                "8969": [0.35001, 0.85, 0, 0, 0.47222],
                "8970": [0.35001, 0.85, 0, 0, 0.47222],
                "8971": [0.35001, 0.85, 0, 0, 0.47222],
                "9168": [-99e-5, 0.601, 0, 0, 0.66667],
                "10216": [0.35001, 0.85, 0, 0, 0.47222],
                "10217": [0.35001, 0.85, 0, 0, 0.47222],
                "10752": [0.25001, 0.75, 0, 0, 1.11111],
                "10753": [0.25001, 0.75, 0, 0, 1.11111],
                "10754": [0.25001, 0.75, 0, 0, 1.11111],
                "10756": [0.25001, 0.75, 0, 0, 0.83334],
                "10758": [0.25001, 0.75, 0, 0, 0.83334]
              },
              "Size2-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "40": [0.65002, 1.15, 0, 0, 0.59722],
                "41": [0.65002, 1.15, 0, 0, 0.59722],
                "47": [0.65002, 1.15, 0, 0, 0.81111],
                "91": [0.65002, 1.15, 0, 0, 0.47222],
                "92": [0.65002, 1.15, 0, 0, 0.81111],
                "93": [0.65002, 1.15, 0, 0, 0.47222],
                "123": [0.65002, 1.15, 0, 0, 0.66667],
                "125": [0.65002, 1.15, 0, 0, 0.66667],
                "160": [0, 0, 0, 0, 0.25],
                "710": [0, 0.75, 0, 0, 1],
                "732": [0, 0.75, 0, 0, 1],
                "770": [0, 0.75, 0, 0, 1],
                "771": [0, 0.75, 0, 0, 1],
                "8719": [0.55001, 1.05, 0, 0, 1.27778],
                "8720": [0.55001, 1.05, 0, 0, 1.27778],
                "8721": [0.55001, 1.05, 0, 0, 1.44445],
                "8730": [0.65002, 1.15, 0, 0, 1],
                "8747": [0.86225, 1.36, 0.44445, 0, 0.55556],
                "8748": [0.862, 1.36, 0.44445, 0, 0.55556],
                "8749": [0.862, 1.36, 0.44445, 0, 0.55556],
                "8750": [0.86225, 1.36, 0.44445, 0, 0.55556],
                "8896": [0.55001, 1.05, 0, 0, 1.11111],
                "8897": [0.55001, 1.05, 0, 0, 1.11111],
                "8898": [0.55001, 1.05, 0, 0, 1.11111],
                "8899": [0.55001, 1.05, 0, 0, 1.11111],
                "8968": [0.65002, 1.15, 0, 0, 0.52778],
                "8969": [0.65002, 1.15, 0, 0, 0.52778],
                "8970": [0.65002, 1.15, 0, 0, 0.52778],
                "8971": [0.65002, 1.15, 0, 0, 0.52778],
                "10216": [0.65002, 1.15, 0, 0, 0.61111],
                "10217": [0.65002, 1.15, 0, 0, 0.61111],
                "10752": [0.55001, 1.05, 0, 0, 1.51112],
                "10753": [0.55001, 1.05, 0, 0, 1.51112],
                "10754": [0.55001, 1.05, 0, 0, 1.51112],
                "10756": [0.55001, 1.05, 0, 0, 1.11111],
                "10758": [0.55001, 1.05, 0, 0, 1.11111]
              },
              "Size3-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "40": [0.95003, 1.45, 0, 0, 0.73611],
                "41": [0.95003, 1.45, 0, 0, 0.73611],
                "47": [0.95003, 1.45, 0, 0, 1.04445],
                "91": [0.95003, 1.45, 0, 0, 0.52778],
                "92": [0.95003, 1.45, 0, 0, 1.04445],
                "93": [0.95003, 1.45, 0, 0, 0.52778],
                "123": [0.95003, 1.45, 0, 0, 0.75],
                "125": [0.95003, 1.45, 0, 0, 0.75],
                "160": [0, 0, 0, 0, 0.25],
                "710": [0, 0.75, 0, 0, 1.44445],
                "732": [0, 0.75, 0, 0, 1.44445],
                "770": [0, 0.75, 0, 0, 1.44445],
                "771": [0, 0.75, 0, 0, 1.44445],
                "8730": [0.95003, 1.45, 0, 0, 1],
                "8968": [0.95003, 1.45, 0, 0, 0.58334],
                "8969": [0.95003, 1.45, 0, 0, 0.58334],
                "8970": [0.95003, 1.45, 0, 0, 0.58334],
                "8971": [0.95003, 1.45, 0, 0, 0.58334],
                "10216": [0.95003, 1.45, 0, 0, 0.75],
                "10217": [0.95003, 1.45, 0, 0, 0.75]
              },
              "Size4-Regular": {
                "32": [0, 0, 0, 0, 0.25],
                "40": [1.25003, 1.75, 0, 0, 0.79167],
                "41": [1.25003, 1.75, 0, 0, 0.79167],
                "47": [1.25003, 1.75, 0, 0, 1.27778],
                "91": [1.25003, 1.75, 0, 0, 0.58334],
                "92": [1.25003, 1.75, 0, 0, 1.27778],
                "93": [1.25003, 1.75, 0, 0, 0.58334],
                "123": [1.25003, 1.75, 0, 0, 0.80556],
                "125": [1.25003, 1.75, 0, 0, 0.80556],
                "160": [0, 0, 0, 0, 0.25],
                "710": [0, 0.825, 0, 0, 1.8889],
                "732": [0, 0.825, 0, 0, 1.8889],
                "770": [0, 0.825, 0, 0, 1.8889],
                "771": [0, 0.825, 0, 0, 1.8889],
                "8730": [1.25003, 1.75, 0, 0, 1],
                "8968": [1.25003, 1.75, 0, 0, 0.63889],
                "8969": [1.25003, 1.75, 0, 0, 0.63889],
                "8970": [1.25003, 1.75, 0, 0, 0.63889],
                "8971": [1.25003, 1.75, 0, 0, 0.63889],
                "9115": [0.64502, 1.155, 0, 0, 0.875],
                "9116": [1e-5, 0.6, 0, 0, 0.875],
                "9117": [0.64502, 1.155, 0, 0, 0.875],
                "9118": [0.64502, 1.155, 0, 0, 0.875],
                "9119": [1e-5, 0.6, 0, 0, 0.875],
                "9120": [0.64502, 1.155, 0, 0, 0.875],
                "9121": [0.64502, 1.155, 0, 0, 0.66667],
                "9122": [-99e-5, 0.601, 0, 0, 0.66667],
                "9123": [0.64502, 1.155, 0, 0, 0.66667],
                "9124": [0.64502, 1.155, 0, 0, 0.66667],
                "9125": [-99e-5, 0.601, 0, 0, 0.66667],
                "9126": [0.64502, 1.155, 0, 0, 0.66667],
                "9127": [1e-5, 0.9, 0, 0, 0.88889],
                "9128": [0.65002, 1.15, 0, 0, 0.88889],
                "9129": [0.90001, 0, 0, 0, 0.88889],
                "9130": [0, 0.3, 0, 0, 0.88889],
                "9131": [1e-5, 0.9, 0, 0, 0.88889],
                "9132": [0.65002, 1.15, 0, 0, 0.88889],
                "9133": [0.90001, 0, 0, 0, 0.88889],
                "9143": [0.88502, 0.915, 0, 0, 1.05556],
                "10216": [1.25003, 1.75, 0, 0, 0.80556],
                "10217": [1.25003, 1.75, 0, 0, 0.80556],
                "57344": [-499e-5, 0.605, 0, 0, 1.05556],
                "57345": [-499e-5, 0.605, 0, 0, 1.05556],
                "57680": [0, 0.12, 0, 0, 0.45],
                "57681": [0, 0.12, 0, 0, 0.45],
                "57682": [0, 0.12, 0, 0, 0.45],
                "57683": [0, 0.12, 0, 0, 0.45]
              },
              "Typewriter-Regular": {
                "32": [0, 0, 0, 0, 0.525],
                "33": [0, 0.61111, 0, 0, 0.525],
                "34": [0, 0.61111, 0, 0, 0.525],
                "35": [0, 0.61111, 0, 0, 0.525],
                "36": [0.08333, 0.69444, 0, 0, 0.525],
                "37": [0.08333, 0.69444, 0, 0, 0.525],
                "38": [0, 0.61111, 0, 0, 0.525],
                "39": [0, 0.61111, 0, 0, 0.525],
                "40": [0.08333, 0.69444, 0, 0, 0.525],
                "41": [0.08333, 0.69444, 0, 0, 0.525],
                "42": [0, 0.52083, 0, 0, 0.525],
                "43": [-0.08056, 0.53055, 0, 0, 0.525],
                "44": [0.13889, 0.125, 0, 0, 0.525],
                "45": [-0.08056, 0.53055, 0, 0, 0.525],
                "46": [0, 0.125, 0, 0, 0.525],
                "47": [0.08333, 0.69444, 0, 0, 0.525],
                "48": [0, 0.61111, 0, 0, 0.525],
                "49": [0, 0.61111, 0, 0, 0.525],
                "50": [0, 0.61111, 0, 0, 0.525],
                "51": [0, 0.61111, 0, 0, 0.525],
                "52": [0, 0.61111, 0, 0, 0.525],
                "53": [0, 0.61111, 0, 0, 0.525],
                "54": [0, 0.61111, 0, 0, 0.525],
                "55": [0, 0.61111, 0, 0, 0.525],
                "56": [0, 0.61111, 0, 0, 0.525],
                "57": [0, 0.61111, 0, 0, 0.525],
                "58": [0, 0.43056, 0, 0, 0.525],
                "59": [0.13889, 0.43056, 0, 0, 0.525],
                "60": [-0.05556, 0.55556, 0, 0, 0.525],
                "61": [-0.19549, 0.41562, 0, 0, 0.525],
                "62": [-0.05556, 0.55556, 0, 0, 0.525],
                "63": [0, 0.61111, 0, 0, 0.525],
                "64": [0, 0.61111, 0, 0, 0.525],
                "65": [0, 0.61111, 0, 0, 0.525],
                "66": [0, 0.61111, 0, 0, 0.525],
                "67": [0, 0.61111, 0, 0, 0.525],
                "68": [0, 0.61111, 0, 0, 0.525],
                "69": [0, 0.61111, 0, 0, 0.525],
                "70": [0, 0.61111, 0, 0, 0.525],
                "71": [0, 0.61111, 0, 0, 0.525],
                "72": [0, 0.61111, 0, 0, 0.525],
                "73": [0, 0.61111, 0, 0, 0.525],
                "74": [0, 0.61111, 0, 0, 0.525],
                "75": [0, 0.61111, 0, 0, 0.525],
                "76": [0, 0.61111, 0, 0, 0.525],
                "77": [0, 0.61111, 0, 0, 0.525],
                "78": [0, 0.61111, 0, 0, 0.525],
                "79": [0, 0.61111, 0, 0, 0.525],
                "80": [0, 0.61111, 0, 0, 0.525],
                "81": [0.13889, 0.61111, 0, 0, 0.525],
                "82": [0, 0.61111, 0, 0, 0.525],
                "83": [0, 0.61111, 0, 0, 0.525],
                "84": [0, 0.61111, 0, 0, 0.525],
                "85": [0, 0.61111, 0, 0, 0.525],
                "86": [0, 0.61111, 0, 0, 0.525],
                "87": [0, 0.61111, 0, 0, 0.525],
                "88": [0, 0.61111, 0, 0, 0.525],
                "89": [0, 0.61111, 0, 0, 0.525],
                "90": [0, 0.61111, 0, 0, 0.525],
                "91": [0.08333, 0.69444, 0, 0, 0.525],
                "92": [0.08333, 0.69444, 0, 0, 0.525],
                "93": [0.08333, 0.69444, 0, 0, 0.525],
                "94": [0, 0.61111, 0, 0, 0.525],
                "95": [0.09514, 0, 0, 0, 0.525],
                "96": [0, 0.61111, 0, 0, 0.525],
                "97": [0, 0.43056, 0, 0, 0.525],
                "98": [0, 0.61111, 0, 0, 0.525],
                "99": [0, 0.43056, 0, 0, 0.525],
                "100": [0, 0.61111, 0, 0, 0.525],
                "101": [0, 0.43056, 0, 0, 0.525],
                "102": [0, 0.61111, 0, 0, 0.525],
                "103": [0.22222, 0.43056, 0, 0, 0.525],
                "104": [0, 0.61111, 0, 0, 0.525],
                "105": [0, 0.61111, 0, 0, 0.525],
                "106": [0.22222, 0.61111, 0, 0, 0.525],
                "107": [0, 0.61111, 0, 0, 0.525],
                "108": [0, 0.61111, 0, 0, 0.525],
                "109": [0, 0.43056, 0, 0, 0.525],
                "110": [0, 0.43056, 0, 0, 0.525],
                "111": [0, 0.43056, 0, 0, 0.525],
                "112": [0.22222, 0.43056, 0, 0, 0.525],
                "113": [0.22222, 0.43056, 0, 0, 0.525],
                "114": [0, 0.43056, 0, 0, 0.525],
                "115": [0, 0.43056, 0, 0, 0.525],
                "116": [0, 0.55358, 0, 0, 0.525],
                "117": [0, 0.43056, 0, 0, 0.525],
                "118": [0, 0.43056, 0, 0, 0.525],
                "119": [0, 0.43056, 0, 0, 0.525],
                "120": [0, 0.43056, 0, 0, 0.525],
                "121": [0.22222, 0.43056, 0, 0, 0.525],
                "122": [0, 0.43056, 0, 0, 0.525],
                "123": [0.08333, 0.69444, 0, 0, 0.525],
                "124": [0.08333, 0.69444, 0, 0, 0.525],
                "125": [0.08333, 0.69444, 0, 0, 0.525],
                "126": [0, 0.61111, 0, 0, 0.525],
                "127": [0, 0.61111, 0, 0, 0.525],
                "160": [0, 0, 0, 0, 0.525],
                "176": [0, 0.61111, 0, 0, 0.525],
                "184": [0.19445, 0, 0, 0, 0.525],
                "305": [0, 0.43056, 0, 0, 0.525],
                "567": [0.22222, 0.43056, 0, 0, 0.525],
                "711": [0, 0.56597, 0, 0, 0.525],
                "713": [0, 0.56555, 0, 0, 0.525],
                "714": [0, 0.61111, 0, 0, 0.525],
                "715": [0, 0.61111, 0, 0, 0.525],
                "728": [0, 0.61111, 0, 0, 0.525],
                "730": [0, 0.61111, 0, 0, 0.525],
                "770": [0, 0.61111, 0, 0, 0.525],
                "771": [0, 0.61111, 0, 0, 0.525],
                "776": [0, 0.61111, 0, 0, 0.525],
                "915": [0, 0.61111, 0, 0, 0.525],
                "916": [0, 0.61111, 0, 0, 0.525],
                "920": [0, 0.61111, 0, 0, 0.525],
                "923": [0, 0.61111, 0, 0, 0.525],
                "926": [0, 0.61111, 0, 0, 0.525],
                "928": [0, 0.61111, 0, 0, 0.525],
                "931": [0, 0.61111, 0, 0, 0.525],
                "933": [0, 0.61111, 0, 0, 0.525],
                "934": [0, 0.61111, 0, 0, 0.525],
                "936": [0, 0.61111, 0, 0, 0.525],
                "937": [0, 0.61111, 0, 0, 0.525],
                "8216": [0, 0.61111, 0, 0, 0.525],
                "8217": [0, 0.61111, 0, 0, 0.525],
                "8242": [0, 0.61111, 0, 0, 0.525],
                "9251": [0.11111, 0.21944, 0, 0, 0.525]
              }
            };
            ;
            var sigmasAndXis = {
              slant: [0.25, 0.25, 0.25],
              // sigma1
              space: [0, 0, 0],
              // sigma2
              stretch: [0, 0, 0],
              // sigma3
              shrink: [0, 0, 0],
              // sigma4
              xHeight: [0.431, 0.431, 0.431],
              // sigma5
              quad: [1, 1.171, 1.472],
              // sigma6
              extraSpace: [0, 0, 0],
              // sigma7
              num1: [0.677, 0.732, 0.925],
              // sigma8
              num2: [0.394, 0.384, 0.387],
              // sigma9
              num3: [0.444, 0.471, 0.504],
              // sigma10
              denom1: [0.686, 0.752, 1.025],
              // sigma11
              denom2: [0.345, 0.344, 0.532],
              // sigma12
              sup1: [0.413, 0.503, 0.504],
              // sigma13
              sup2: [0.363, 0.431, 0.404],
              // sigma14
              sup3: [0.289, 0.286, 0.294],
              // sigma15
              sub1: [0.15, 0.143, 0.2],
              // sigma16
              sub2: [0.247, 0.286, 0.4],
              // sigma17
              supDrop: [0.386, 0.353, 0.494],
              // sigma18
              subDrop: [0.05, 0.071, 0.1],
              // sigma19
              delim1: [2.39, 1.7, 1.98],
              // sigma20
              delim2: [1.01, 1.157, 1.42],
              // sigma21
              axisHeight: [0.25, 0.25, 0.25],
              // sigma22
              // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
              // they correspond to the font parameters of the extension fonts (family 3).
              // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
              // match cmex7, we'd use cmex7.tfm values for script and scriptscript
              // values.
              defaultRuleThickness: [0.04, 0.049, 0.049],
              // xi8; cmex7: 0.049
              bigOpSpacing1: [0.111, 0.111, 0.111],
              // xi9
              bigOpSpacing2: [0.166, 0.166, 0.166],
              // xi10
              bigOpSpacing3: [0.2, 0.2, 0.2],
              // xi11
              bigOpSpacing4: [0.6, 0.611, 0.611],
              // xi12; cmex7: 0.611
              bigOpSpacing5: [0.1, 0.143, 0.143],
              // xi13; cmex7: 0.143
              // The \sqrt rule width is taken from the height of the surd character.
              // Since we use the same font at all sizes, this thickness doesn't scale.
              sqrtRuleThickness: [0.04, 0.04, 0.04],
              // This value determines how large a pt is, for metrics which are defined
              // in terms of pts.
              // This value is also used in katex.less; if you change it make sure the
              // values match.
              ptPerEm: [10, 10, 10],
              // The space between adjacent `|` columns in an array definition. From
              // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
              doubleRuleSep: [0.2, 0.2, 0.2],
              // The width of separator lines in {array} environments. From
              // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
              arrayRuleWidth: [0.04, 0.04, 0.04],
              // Two values from LaTeX source2e:
              fboxsep: [0.3, 0.3, 0.3],
              //        3 pt / ptPerEm
              fboxrule: [0.04, 0.04, 0.04]
              // 0.4 pt / ptPerEm
            };
            var extraCharacterMap = {
              // Latin-1
              "\xC5": "A",
              "\xD0": "D",
              "\xDE": "o",
              "\xE5": "a",
              "\xF0": "d",
              "\xFE": "o",
              // Cyrillic
              "\u0410": "A",
              "\u0411": "B",
              "\u0412": "B",
              "\u0413": "F",
              "\u0414": "A",
              "\u0415": "E",
              "\u0416": "K",
              "\u0417": "3",
              "\u0418": "N",
              "\u0419": "N",
              "\u041A": "K",
              "\u041B": "N",
              "\u041C": "M",
              "\u041D": "H",
              "\u041E": "O",
              "\u041F": "N",
              "\u0420": "P",
              "\u0421": "C",
              "\u0422": "T",
              "\u0423": "y",
              "\u0424": "O",
              "\u0425": "X",
              "\u0426": "U",
              "\u0427": "h",
              "\u0428": "W",
              "\u0429": "W",
              "\u042A": "B",
              "\u042B": "X",
              "\u042C": "B",
              "\u042D": "3",
              "\u042E": "X",
              "\u042F": "R",
              "\u0430": "a",
              "\u0431": "b",
              "\u0432": "a",
              "\u0433": "r",
              "\u0434": "y",
              "\u0435": "e",
              "\u0436": "m",
              "\u0437": "e",
              "\u0438": "n",
              "\u0439": "n",
              "\u043A": "n",
              "\u043B": "n",
              "\u043C": "m",
              "\u043D": "n",
              "\u043E": "o",
              "\u043F": "n",
              "\u0440": "p",
              "\u0441": "c",
              "\u0442": "o",
              "\u0443": "y",
              "\u0444": "b",
              "\u0445": "x",
              "\u0446": "n",
              "\u0447": "n",
              "\u0448": "w",
              "\u0449": "w",
              "\u044A": "a",
              "\u044B": "m",
              "\u044C": "a",
              "\u044D": "e",
              "\u044E": "m",
              "\u044F": "r"
            };
            function setFontMetrics(fontName, metrics) {
              fontMetricsData[fontName] = metrics;
            }
            function getCharacterMetrics(character, font, mode) {
              if (!fontMetricsData[font]) {
                throw new Error("Font metrics not found for font: " + font + ".");
              }
              var ch2 = character.charCodeAt(0);
              var metrics = fontMetricsData[font][ch2];
              if (!metrics && character[0] in extraCharacterMap) {
                ch2 = extraCharacterMap[character[0]].charCodeAt(0);
                metrics = fontMetricsData[font][ch2];
              }
              if (!metrics && mode === "text") {
                if (supportedCodepoint(ch2)) {
                  metrics = fontMetricsData[font][77];
                }
              }
              if (metrics) {
                return {
                  depth: metrics[0],
                  height: metrics[1],
                  italic: metrics[2],
                  skew: metrics[3],
                  width: metrics[4]
                };
              }
            }
            var fontMetricsBySizeIndex = {};
            function getGlobalMetrics(size) {
              var sizeIndex;
              if (size >= 5) {
                sizeIndex = 0;
              } else if (size >= 3) {
                sizeIndex = 1;
              } else {
                sizeIndex = 2;
              }
              if (!fontMetricsBySizeIndex[sizeIndex]) {
                var metrics = fontMetricsBySizeIndex[sizeIndex] = {
                  cssEmPerMu: sigmasAndXis.quad[sizeIndex] / 18
                };
                for (var key in sigmasAndXis) {
                  if (sigmasAndXis.hasOwnProperty(key)) {
                    metrics[key] = sigmasAndXis[key][sizeIndex];
                  }
                }
              }
              return fontMetricsBySizeIndex[sizeIndex];
            }
            ;
            var sizeStyleMap = [
              // Each element contains [textsize, scriptsize, scriptscriptsize].
              // The size mappings are taken from TeX with \normalsize=10pt.
              [1, 1, 1],
              // size1: [5, 5, 5]              \tiny
              [2, 1, 1],
              // size2: [6, 5, 5]
              [3, 1, 1],
              // size3: [7, 5, 5]              \scriptsize
              [4, 2, 1],
              // size4: [8, 6, 5]              \footnotesize
              [5, 2, 1],
              // size5: [9, 6, 5]              \small
              [6, 3, 1],
              // size6: [10, 7, 5]             \normalsize
              [7, 4, 2],
              // size7: [12, 8, 6]             \large
              [8, 6, 3],
              // size8: [14.4, 10, 7]          \Large
              [9, 7, 6],
              // size9: [17.28, 12, 10]        \LARGE
              [10, 8, 7],
              // size10: [20.74, 14.4, 12]     \huge
              [11, 10, 9]
              // size11: [24.88, 20.74, 17.28] \HUGE
            ];
            var sizeMultipliers = [
              // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
              // you change size indexes, change that function.
              0.5,
              0.6,
              0.7,
              0.8,
              0.9,
              1,
              1.2,
              1.44,
              1.728,
              2.074,
              2.488
            ];
            var sizeAtStyle = function sizeAtStyle2(size, style) {
              return style.size < 2 ? size : sizeStyleMap[size - 1][style.size - 1];
            };
            var Options = /* @__PURE__ */ function() {
              function Options2(data) {
                this.style = void 0;
                this.color = void 0;
                this.size = void 0;
                this.textSize = void 0;
                this.phantom = void 0;
                this.font = void 0;
                this.fontFamily = void 0;
                this.fontWeight = void 0;
                this.fontShape = void 0;
                this.sizeMultiplier = void 0;
                this.maxSize = void 0;
                this.minRuleThickness = void 0;
                this._fontMetrics = void 0;
                this.style = data.style;
                this.color = data.color;
                this.size = data.size || Options2.BASESIZE;
                this.textSize = data.textSize || this.size;
                this.phantom = !!data.phantom;
                this.font = data.font || "";
                this.fontFamily = data.fontFamily || "";
                this.fontWeight = data.fontWeight || "";
                this.fontShape = data.fontShape || "";
                this.sizeMultiplier = sizeMultipliers[this.size - 1];
                this.maxSize = data.maxSize;
                this.minRuleThickness = data.minRuleThickness;
                this._fontMetrics = void 0;
              }
              var _proto = Options2.prototype;
              _proto.extend = function extend(extension) {
                var data = {
                  style: this.style,
                  size: this.size,
                  textSize: this.textSize,
                  color: this.color,
                  phantom: this.phantom,
                  font: this.font,
                  fontFamily: this.fontFamily,
                  fontWeight: this.fontWeight,
                  fontShape: this.fontShape,
                  maxSize: this.maxSize,
                  minRuleThickness: this.minRuleThickness
                };
                for (var key in extension) {
                  if (extension.hasOwnProperty(key)) {
                    data[key] = extension[key];
                  }
                }
                return new Options2(data);
              };
              _proto.havingStyle = function havingStyle(style) {
                if (this.style === style) {
                  return this;
                } else {
                  return this.extend({
                    style,
                    size: sizeAtStyle(this.textSize, style)
                  });
                }
              };
              _proto.havingCrampedStyle = function havingCrampedStyle() {
                return this.havingStyle(this.style.cramp());
              };
              _proto.havingSize = function havingSize(size) {
                if (this.size === size && this.textSize === size) {
                  return this;
                } else {
                  return this.extend({
                    style: this.style.text(),
                    size,
                    textSize: size,
                    sizeMultiplier: sizeMultipliers[size - 1]
                  });
                }
              };
              _proto.havingBaseStyle = function havingBaseStyle(style) {
                style = style || this.style.text();
                var wantSize = sizeAtStyle(Options2.BASESIZE, style);
                if (this.size === wantSize && this.textSize === Options2.BASESIZE && this.style === style) {
                  return this;
                } else {
                  return this.extend({
                    style,
                    size: wantSize
                  });
                }
              };
              _proto.havingBaseSizing = function havingBaseSizing() {
                var size;
                switch (this.style.id) {
                  case 4:
                  case 5:
                    size = 3;
                    break;
                  case 6:
                  case 7:
                    size = 1;
                    break;
                  default:
                    size = 6;
                }
                return this.extend({
                  style: this.style.text(),
                  size
                });
              };
              _proto.withColor = function withColor(color) {
                return this.extend({
                  color
                });
              };
              _proto.withPhantom = function withPhantom() {
                return this.extend({
                  phantom: true
                });
              };
              _proto.withFont = function withFont(font) {
                return this.extend({
                  font
                });
              };
              _proto.withTextFontFamily = function withTextFontFamily(fontFamily) {
                return this.extend({
                  fontFamily,
                  font: ""
                });
              };
              _proto.withTextFontWeight = function withTextFontWeight(fontWeight) {
                return this.extend({
                  fontWeight,
                  font: ""
                });
              };
              _proto.withTextFontShape = function withTextFontShape(fontShape) {
                return this.extend({
                  fontShape,
                  font: ""
                });
              };
              _proto.sizingClasses = function sizingClasses(oldOptions) {
                if (oldOptions.size !== this.size) {
                  return ["sizing", "reset-size" + oldOptions.size, "size" + this.size];
                } else {
                  return [];
                }
              };
              _proto.baseSizingClasses = function baseSizingClasses() {
                if (this.size !== Options2.BASESIZE) {
                  return ["sizing", "reset-size" + this.size, "size" + Options2.BASESIZE];
                } else {
                  return [];
                }
              };
              _proto.fontMetrics = function fontMetrics() {
                if (!this._fontMetrics) {
                  this._fontMetrics = getGlobalMetrics(this.size);
                }
                return this._fontMetrics;
              };
              _proto.getColor = function getColor() {
                if (this.phantom) {
                  return "transparent";
                } else {
                  return this.color;
                }
              };
              return Options2;
            }();
            Options.BASESIZE = 6;
            var src_Options = Options;
            ;
            var ptPerUnit = {
              // https://en.wikibooks.org/wiki/LaTeX/Lengths and
              // https://tex.stackexchange.com/a/8263
              "pt": 1,
              // TeX point
              "mm": 7227 / 2540,
              // millimeter
              "cm": 7227 / 254,
              // centimeter
              "in": 72.27,
              // inch
              "bp": 803 / 800,
              // big (PostScript) points
              "pc": 12,
              // pica
              "dd": 1238 / 1157,
              // didot
              "cc": 14856 / 1157,
              // cicero (12 didot)
              "nd": 685 / 642,
              // new didot
              "nc": 1370 / 107,
              // new cicero (12 new didot)
              "sp": 1 / 65536,
              // scaled point (TeX's internal smallest unit)
              // https://tex.stackexchange.com/a/41371
              "px": 803 / 800
              // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
            };
            var relativeUnit = {
              "ex": true,
              "em": true,
              "mu": true
            };
            var validUnit = function validUnit2(unit) {
              if (typeof unit !== "string") {
                unit = unit.unit;
              }
              return unit in ptPerUnit || unit in relativeUnit || unit === "ex";
            };
            var calculateSize = function calculateSize2(sizeValue, options) {
              var scale;
              if (sizeValue.unit in ptPerUnit) {
                scale = ptPerUnit[sizeValue.unit] / options.fontMetrics().ptPerEm / options.sizeMultiplier;
              } else if (sizeValue.unit === "mu") {
                scale = options.fontMetrics().cssEmPerMu;
              } else {
                var unitOptions;
                if (options.style.isTight()) {
                  unitOptions = options.havingStyle(options.style.text());
                } else {
                  unitOptions = options;
                }
                if (sizeValue.unit === "ex") {
                  scale = unitOptions.fontMetrics().xHeight;
                } else if (sizeValue.unit === "em") {
                  scale = unitOptions.fontMetrics().quad;
                } else {
                  throw new src_ParseError("Invalid unit: '" + sizeValue.unit + "'");
                }
                if (unitOptions !== options) {
                  scale *= unitOptions.sizeMultiplier / options.sizeMultiplier;
                }
              }
              return Math.min(sizeValue.number * scale, options.maxSize);
            };
            var makeEm = function makeEm2(n) {
              return +n.toFixed(4) + "em";
            };
            ;
            var createClass = function createClass2(classes) {
              return classes.filter(function(cls) {
                return cls;
              }).join(" ");
            };
            var initNode = function initNode2(classes, options, style) {
              this.classes = classes || [];
              this.attributes = {};
              this.height = 0;
              this.depth = 0;
              this.maxFontSize = 0;
              this.style = style || {};
              if (options) {
                if (options.style.isTight()) {
                  this.classes.push("mtight");
                }
                var color = options.getColor();
                if (color) {
                  this.style.color = color;
                }
              }
            };
            var _toNode = function toNode(tagName) {
              var node = document.createElement(tagName);
              node.className = createClass(this.classes);
              for (var style in this.style) {
                if (this.style.hasOwnProperty(style)) {
                  node.style[style] = this.style[style];
                }
              }
              for (var attr in this.attributes) {
                if (this.attributes.hasOwnProperty(attr)) {
                  node.setAttribute(attr, this.attributes[attr]);
                }
              }
              for (var i2 = 0; i2 < this.children.length; i2++) {
                node.appendChild(this.children[i2].toNode());
              }
              return node;
            };
            var _toMarkup = function toMarkup(tagName) {
              var markup = "<" + tagName;
              if (this.classes.length) {
                markup += ' class="' + utils.escape(createClass(this.classes)) + '"';
              }
              var styles2 = "";
              for (var style in this.style) {
                if (this.style.hasOwnProperty(style)) {
                  styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
                }
              }
              if (styles2) {
                markup += ' style="' + utils.escape(styles2) + '"';
              }
              for (var attr in this.attributes) {
                if (this.attributes.hasOwnProperty(attr)) {
                  markup += " " + attr + '="' + utils.escape(this.attributes[attr]) + '"';
                }
              }
              markup += ">";
              for (var i2 = 0; i2 < this.children.length; i2++) {
                markup += this.children[i2].toMarkup();
              }
              markup += "</" + tagName + ">";
              return markup;
            };
            var Span = /* @__PURE__ */ function() {
              function Span2(classes, children, options, style) {
                this.children = void 0;
                this.attributes = void 0;
                this.classes = void 0;
                this.height = void 0;
                this.depth = void 0;
                this.width = void 0;
                this.maxFontSize = void 0;
                this.style = void 0;
                initNode.call(this, classes, options, style);
                this.children = children || [];
              }
              var _proto = Span2.prototype;
              _proto.setAttribute = function setAttribute(attribute, value) {
                this.attributes[attribute] = value;
              };
              _proto.hasClass = function hasClass(className) {
                return utils.contains(this.classes, className);
              };
              _proto.toNode = function toNode() {
                return _toNode.call(this, "span");
              };
              _proto.toMarkup = function toMarkup() {
                return _toMarkup.call(this, "span");
              };
              return Span2;
            }();
            var Anchor = /* @__PURE__ */ function() {
              function Anchor2(href, classes, children, options) {
                this.children = void 0;
                this.attributes = void 0;
                this.classes = void 0;
                this.height = void 0;
                this.depth = void 0;
                this.maxFontSize = void 0;
                this.style = void 0;
                initNode.call(this, classes, options);
                this.children = children || [];
                this.setAttribute("href", href);
              }
              var _proto2 = Anchor2.prototype;
              _proto2.setAttribute = function setAttribute(attribute, value) {
                this.attributes[attribute] = value;
              };
              _proto2.hasClass = function hasClass(className) {
                return utils.contains(this.classes, className);
              };
              _proto2.toNode = function toNode() {
                return _toNode.call(this, "a");
              };
              _proto2.toMarkup = function toMarkup() {
                return _toMarkup.call(this, "a");
              };
              return Anchor2;
            }();
            var Img = /* @__PURE__ */ function() {
              function Img2(src, alt, style) {
                this.src = void 0;
                this.alt = void 0;
                this.classes = void 0;
                this.height = void 0;
                this.depth = void 0;
                this.maxFontSize = void 0;
                this.style = void 0;
                this.alt = alt;
                this.src = src;
                this.classes = ["mord"];
                this.style = style;
              }
              var _proto3 = Img2.prototype;
              _proto3.hasClass = function hasClass(className) {
                return utils.contains(this.classes, className);
              };
              _proto3.toNode = function toNode() {
                var node = document.createElement("img");
                node.src = this.src;
                node.alt = this.alt;
                node.className = "mord";
                for (var style in this.style) {
                  if (this.style.hasOwnProperty(style)) {
                    node.style[style] = this.style[style];
                  }
                }
                return node;
              };
              _proto3.toMarkup = function toMarkup() {
                var markup = "<img  src='" + this.src + " 'alt='" + this.alt + "' ";
                var styles2 = "";
                for (var style in this.style) {
                  if (this.style.hasOwnProperty(style)) {
                    styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
                  }
                }
                if (styles2) {
                  markup += ' style="' + utils.escape(styles2) + '"';
                }
                markup += "'/>";
                return markup;
              };
              return Img2;
            }();
            var iCombinations = {
              "\xEE": "\u0131\u0302",
              "\xEF": "\u0131\u0308",
              "\xED": "\u0131\u0301",
              // 'ī': '\u0131\u0304', // enable when we add Extended Latin
              "\xEC": "\u0131\u0300"
            };
            var SymbolNode = /* @__PURE__ */ function() {
              function SymbolNode2(text, height, depth, italic, skew, width, classes, style) {
                this.text = void 0;
                this.height = void 0;
                this.depth = void 0;
                this.italic = void 0;
                this.skew = void 0;
                this.width = void 0;
                this.maxFontSize = void 0;
                this.classes = void 0;
                this.style = void 0;
                this.text = text;
                this.height = height || 0;
                this.depth = depth || 0;
                this.italic = italic || 0;
                this.skew = skew || 0;
                this.width = width || 0;
                this.classes = classes || [];
                this.style = style || {};
                this.maxFontSize = 0;
                var script = scriptFromCodepoint(this.text.charCodeAt(0));
                if (script) {
                  this.classes.push(script + "_fallback");
                }
                if (/[îïíì]/.test(this.text)) {
                  this.text = iCombinations[this.text];
                }
              }
              var _proto4 = SymbolNode2.prototype;
              _proto4.hasClass = function hasClass(className) {
                return utils.contains(this.classes, className);
              };
              _proto4.toNode = function toNode() {
                var node = document.createTextNode(this.text);
                var span = null;
                if (this.italic > 0) {
                  span = document.createElement("span");
                  span.style.marginRight = makeEm(this.italic);
                }
                if (this.classes.length > 0) {
                  span = span || document.createElement("span");
                  span.className = createClass(this.classes);
                }
                for (var style in this.style) {
                  if (this.style.hasOwnProperty(style)) {
                    span = span || document.createElement("span");
                    span.style[style] = this.style[style];
                  }
                }
                if (span) {
                  span.appendChild(node);
                  return span;
                } else {
                  return node;
                }
              };
              _proto4.toMarkup = function toMarkup() {
                var needsSpan = false;
                var markup = "<span";
                if (this.classes.length) {
                  needsSpan = true;
                  markup += ' class="';
                  markup += utils.escape(createClass(this.classes));
                  markup += '"';
                }
                var styles2 = "";
                if (this.italic > 0) {
                  styles2 += "margin-right:" + this.italic + "em;";
                }
                for (var style in this.style) {
                  if (this.style.hasOwnProperty(style)) {
                    styles2 += utils.hyphenate(style) + ":" + this.style[style] + ";";
                  }
                }
                if (styles2) {
                  needsSpan = true;
                  markup += ' style="' + utils.escape(styles2) + '"';
                }
                var escaped = utils.escape(this.text);
                if (needsSpan) {
                  markup += ">";
                  markup += escaped;
                  markup += "</span>";
                  return markup;
                } else {
                  return escaped;
                }
              };
              return SymbolNode2;
            }();
            var SvgNode = /* @__PURE__ */ function() {
              function SvgNode2(children, attributes) {
                this.children = void 0;
                this.attributes = void 0;
                this.children = children || [];
                this.attributes = attributes || {};
              }
              var _proto5 = SvgNode2.prototype;
              _proto5.toNode = function toNode() {
                var svgNS = "http://www.w3.org/2000/svg";
                var node = document.createElementNS(svgNS, "svg");
                for (var attr in this.attributes) {
                  if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                    node.setAttribute(attr, this.attributes[attr]);
                  }
                }
                for (var i2 = 0; i2 < this.children.length; i2++) {
                  node.appendChild(this.children[i2].toNode());
                }
                return node;
              };
              _proto5.toMarkup = function toMarkup() {
                var markup = '<svg xmlns="http://www.w3.org/2000/svg"';
                for (var attr in this.attributes) {
                  if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                    markup += " " + attr + "='" + this.attributes[attr] + "'";
                  }
                }
                markup += ">";
                for (var i2 = 0; i2 < this.children.length; i2++) {
                  markup += this.children[i2].toMarkup();
                }
                markup += "</svg>";
                return markup;
              };
              return SvgNode2;
            }();
            var PathNode = /* @__PURE__ */ function() {
              function PathNode2(pathName, alternate) {
                this.pathName = void 0;
                this.alternate = void 0;
                this.pathName = pathName;
                this.alternate = alternate;
              }
              var _proto6 = PathNode2.prototype;
              _proto6.toNode = function toNode() {
                var svgNS = "http://www.w3.org/2000/svg";
                var node = document.createElementNS(svgNS, "path");
                if (this.alternate) {
                  node.setAttribute("d", this.alternate);
                } else {
                  node.setAttribute("d", path[this.pathName]);
                }
                return node;
              };
              _proto6.toMarkup = function toMarkup() {
                if (this.alternate) {
                  return "<path d='" + this.alternate + "'/>";
                } else {
                  return "<path d='" + path[this.pathName] + "'/>";
                }
              };
              return PathNode2;
            }();
            var LineNode = /* @__PURE__ */ function() {
              function LineNode2(attributes) {
                this.attributes = void 0;
                this.attributes = attributes || {};
              }
              var _proto7 = LineNode2.prototype;
              _proto7.toNode = function toNode() {
                var svgNS = "http://www.w3.org/2000/svg";
                var node = document.createElementNS(svgNS, "line");
                for (var attr in this.attributes) {
                  if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                    node.setAttribute(attr, this.attributes[attr]);
                  }
                }
                return node;
              };
              _proto7.toMarkup = function toMarkup() {
                var markup = "<line";
                for (var attr in this.attributes) {
                  if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                    markup += " " + attr + "='" + this.attributes[attr] + "'";
                  }
                }
                markup += "/>";
                return markup;
              };
              return LineNode2;
            }();
            function assertSymbolDomNode(group) {
              if (group instanceof SymbolNode) {
                return group;
              } else {
                throw new Error("Expected symbolNode but got " + String(group) + ".");
              }
            }
            function assertSpan(group) {
              if (group instanceof Span) {
                return group;
              } else {
                throw new Error("Expected span<HtmlDomNode> but got " + String(group) + ".");
              }
            }
            ;
            var ATOMS = {
              "bin": 1,
              "close": 1,
              "inner": 1,
              "open": 1,
              "punct": 1,
              "rel": 1
            };
            var NON_ATOMS = {
              "accent-token": 1,
              "mathord": 1,
              "op-token": 1,
              "spacing": 1,
              "textord": 1
            };
            var symbols = {
              "math": {},
              "text": {}
            };
            var src_symbols = symbols;
            function defineSymbol(mode, font, group, replace, name, acceptUnicodeChar) {
              symbols[mode][name] = {
                font,
                group,
                replace
              };
              if (acceptUnicodeChar && replace) {
                symbols[mode][replace] = symbols[mode][name];
              }
            }
            var math = "math";
            var symbols_text = "text";
            var main = "main";
            var ams = "ams";
            var accent = "accent-token";
            var bin = "bin";
            var symbols_close = "close";
            var inner = "inner";
            var mathord = "mathord";
            var op = "op-token";
            var symbols_open = "open";
            var punct = "punct";
            var rel = "rel";
            var spacing = "spacing";
            var textord = "textord";
            defineSymbol(math, main, rel, "\u2261", "\\equiv", true);
            defineSymbol(math, main, rel, "\u227A", "\\prec", true);
            defineSymbol(math, main, rel, "\u227B", "\\succ", true);
            defineSymbol(math, main, rel, "\u223C", "\\sim", true);
            defineSymbol(math, main, rel, "\u22A5", "\\perp");
            defineSymbol(math, main, rel, "\u2AAF", "\\preceq", true);
            defineSymbol(math, main, rel, "\u2AB0", "\\succeq", true);
            defineSymbol(math, main, rel, "\u2243", "\\simeq", true);
            defineSymbol(math, main, rel, "\u2223", "\\mid", true);
            defineSymbol(math, main, rel, "\u226A", "\\ll", true);
            defineSymbol(math, main, rel, "\u226B", "\\gg", true);
            defineSymbol(math, main, rel, "\u224D", "\\asymp", true);
            defineSymbol(math, main, rel, "\u2225", "\\parallel");
            defineSymbol(math, main, rel, "\u22C8", "\\bowtie", true);
            defineSymbol(math, main, rel, "\u2323", "\\smile", true);
            defineSymbol(math, main, rel, "\u2291", "\\sqsubseteq", true);
            defineSymbol(math, main, rel, "\u2292", "\\sqsupseteq", true);
            defineSymbol(math, main, rel, "\u2250", "\\doteq", true);
            defineSymbol(math, main, rel, "\u2322", "\\frown", true);
            defineSymbol(math, main, rel, "\u220B", "\\ni", true);
            defineSymbol(math, main, rel, "\u221D", "\\propto", true);
            defineSymbol(math, main, rel, "\u22A2", "\\vdash", true);
            defineSymbol(math, main, rel, "\u22A3", "\\dashv", true);
            defineSymbol(math, main, rel, "\u220B", "\\owns");
            defineSymbol(math, main, punct, ".", "\\ldotp");
            defineSymbol(math, main, punct, "\u22C5", "\\cdotp");
            defineSymbol(math, main, textord, "#", "\\#");
            defineSymbol(symbols_text, main, textord, "#", "\\#");
            defineSymbol(math, main, textord, "&", "\\&");
            defineSymbol(symbols_text, main, textord, "&", "\\&");
            defineSymbol(math, main, textord, "\u2135", "\\aleph", true);
            defineSymbol(math, main, textord, "\u2200", "\\forall", true);
            defineSymbol(math, main, textord, "\u210F", "\\hbar", true);
            defineSymbol(math, main, textord, "\u2203", "\\exists", true);
            defineSymbol(math, main, textord, "\u2207", "\\nabla", true);
            defineSymbol(math, main, textord, "\u266D", "\\flat", true);
            defineSymbol(math, main, textord, "\u2113", "\\ell", true);
            defineSymbol(math, main, textord, "\u266E", "\\natural", true);
            defineSymbol(math, main, textord, "\u2663", "\\clubsuit", true);
            defineSymbol(math, main, textord, "\u2118", "\\wp", true);
            defineSymbol(math, main, textord, "\u266F", "\\sharp", true);
            defineSymbol(math, main, textord, "\u2662", "\\diamondsuit", true);
            defineSymbol(math, main, textord, "\u211C", "\\Re", true);
            defineSymbol(math, main, textord, "\u2661", "\\heartsuit", true);
            defineSymbol(math, main, textord, "\u2111", "\\Im", true);
            defineSymbol(math, main, textord, "\u2660", "\\spadesuit", true);
            defineSymbol(math, main, textord, "\xA7", "\\S", true);
            defineSymbol(symbols_text, main, textord, "\xA7", "\\S");
            defineSymbol(math, main, textord, "\xB6", "\\P", true);
            defineSymbol(symbols_text, main, textord, "\xB6", "\\P");
            defineSymbol(math, main, textord, "\u2020", "\\dag");
            defineSymbol(symbols_text, main, textord, "\u2020", "\\dag");
            defineSymbol(symbols_text, main, textord, "\u2020", "\\textdagger");
            defineSymbol(math, main, textord, "\u2021", "\\ddag");
            defineSymbol(symbols_text, main, textord, "\u2021", "\\ddag");
            defineSymbol(symbols_text, main, textord, "\u2021", "\\textdaggerdbl");
            defineSymbol(math, main, symbols_close, "\u23B1", "\\rmoustache", true);
            defineSymbol(math, main, symbols_open, "\u23B0", "\\lmoustache", true);
            defineSymbol(math, main, symbols_close, "\u27EF", "\\rgroup", true);
            defineSymbol(math, main, symbols_open, "\u27EE", "\\lgroup", true);
            defineSymbol(math, main, bin, "\u2213", "\\mp", true);
            defineSymbol(math, main, bin, "\u2296", "\\ominus", true);
            defineSymbol(math, main, bin, "\u228E", "\\uplus", true);
            defineSymbol(math, main, bin, "\u2293", "\\sqcap", true);
            defineSymbol(math, main, bin, "\u2217", "\\ast");
            defineSymbol(math, main, bin, "\u2294", "\\sqcup", true);
            defineSymbol(math, main, bin, "\u25EF", "\\bigcirc", true);
            defineSymbol(math, main, bin, "\u2219", "\\bullet", true);
            defineSymbol(math, main, bin, "\u2021", "\\ddagger");
            defineSymbol(math, main, bin, "\u2240", "\\wr", true);
            defineSymbol(math, main, bin, "\u2A3F", "\\amalg");
            defineSymbol(math, main, bin, "&", "\\And");
            defineSymbol(math, main, rel, "\u27F5", "\\longleftarrow", true);
            defineSymbol(math, main, rel, "\u21D0", "\\Leftarrow", true);
            defineSymbol(math, main, rel, "\u27F8", "\\Longleftarrow", true);
            defineSymbol(math, main, rel, "\u27F6", "\\longrightarrow", true);
            defineSymbol(math, main, rel, "\u21D2", "\\Rightarrow", true);
            defineSymbol(math, main, rel, "\u27F9", "\\Longrightarrow", true);
            defineSymbol(math, main, rel, "\u2194", "\\leftrightarrow", true);
            defineSymbol(math, main, rel, "\u27F7", "\\longleftrightarrow", true);
            defineSymbol(math, main, rel, "\u21D4", "\\Leftrightarrow", true);
            defineSymbol(math, main, rel, "\u27FA", "\\Longleftrightarrow", true);
            defineSymbol(math, main, rel, "\u21A6", "\\mapsto", true);
            defineSymbol(math, main, rel, "\u27FC", "\\longmapsto", true);
            defineSymbol(math, main, rel, "\u2197", "\\nearrow", true);
            defineSymbol(math, main, rel, "\u21A9", "\\hookleftarrow", true);
            defineSymbol(math, main, rel, "\u21AA", "\\hookrightarrow", true);
            defineSymbol(math, main, rel, "\u2198", "\\searrow", true);
            defineSymbol(math, main, rel, "\u21BC", "\\leftharpoonup", true);
            defineSymbol(math, main, rel, "\u21C0", "\\rightharpoonup", true);
            defineSymbol(math, main, rel, "\u2199", "\\swarrow", true);
            defineSymbol(math, main, rel, "\u21BD", "\\leftharpoondown", true);
            defineSymbol(math, main, rel, "\u21C1", "\\rightharpoondown", true);
            defineSymbol(math, main, rel, "\u2196", "\\nwarrow", true);
            defineSymbol(math, main, rel, "\u21CC", "\\rightleftharpoons", true);
            defineSymbol(math, ams, rel, "\u226E", "\\nless", true);
            defineSymbol(math, ams, rel, "\uE010", "\\@nleqslant");
            defineSymbol(math, ams, rel, "\uE011", "\\@nleqq");
            defineSymbol(math, ams, rel, "\u2A87", "\\lneq", true);
            defineSymbol(math, ams, rel, "\u2268", "\\lneqq", true);
            defineSymbol(math, ams, rel, "\uE00C", "\\@lvertneqq");
            defineSymbol(math, ams, rel, "\u22E6", "\\lnsim", true);
            defineSymbol(math, ams, rel, "\u2A89", "\\lnapprox", true);
            defineSymbol(math, ams, rel, "\u2280", "\\nprec", true);
            defineSymbol(math, ams, rel, "\u22E0", "\\npreceq", true);
            defineSymbol(math, ams, rel, "\u22E8", "\\precnsim", true);
            defineSymbol(math, ams, rel, "\u2AB9", "\\precnapprox", true);
            defineSymbol(math, ams, rel, "\u2241", "\\nsim", true);
            defineSymbol(math, ams, rel, "\uE006", "\\@nshortmid");
            defineSymbol(math, ams, rel, "\u2224", "\\nmid", true);
            defineSymbol(math, ams, rel, "\u22AC", "\\nvdash", true);
            defineSymbol(math, ams, rel, "\u22AD", "\\nvDash", true);
            defineSymbol(math, ams, rel, "\u22EA", "\\ntriangleleft");
            defineSymbol(math, ams, rel, "\u22EC", "\\ntrianglelefteq", true);
            defineSymbol(math, ams, rel, "\u228A", "\\subsetneq", true);
            defineSymbol(math, ams, rel, "\uE01A", "\\@varsubsetneq");
            defineSymbol(math, ams, rel, "\u2ACB", "\\subsetneqq", true);
            defineSymbol(math, ams, rel, "\uE017", "\\@varsubsetneqq");
            defineSymbol(math, ams, rel, "\u226F", "\\ngtr", true);
            defineSymbol(math, ams, rel, "\uE00F", "\\@ngeqslant");
            defineSymbol(math, ams, rel, "\uE00E", "\\@ngeqq");
            defineSymbol(math, ams, rel, "\u2A88", "\\gneq", true);
            defineSymbol(math, ams, rel, "\u2269", "\\gneqq", true);
            defineSymbol(math, ams, rel, "\uE00D", "\\@gvertneqq");
            defineSymbol(math, ams, rel, "\u22E7", "\\gnsim", true);
            defineSymbol(math, ams, rel, "\u2A8A", "\\gnapprox", true);
            defineSymbol(math, ams, rel, "\u2281", "\\nsucc", true);
            defineSymbol(math, ams, rel, "\u22E1", "\\nsucceq", true);
            defineSymbol(math, ams, rel, "\u22E9", "\\succnsim", true);
            defineSymbol(math, ams, rel, "\u2ABA", "\\succnapprox", true);
            defineSymbol(math, ams, rel, "\u2246", "\\ncong", true);
            defineSymbol(math, ams, rel, "\uE007", "\\@nshortparallel");
            defineSymbol(math, ams, rel, "\u2226", "\\nparallel", true);
            defineSymbol(math, ams, rel, "\u22AF", "\\nVDash", true);
            defineSymbol(math, ams, rel, "\u22EB", "\\ntriangleright");
            defineSymbol(math, ams, rel, "\u22ED", "\\ntrianglerighteq", true);
            defineSymbol(math, ams, rel, "\uE018", "\\@nsupseteqq");
            defineSymbol(math, ams, rel, "\u228B", "\\supsetneq", true);
            defineSymbol(math, ams, rel, "\uE01B", "\\@varsupsetneq");
            defineSymbol(math, ams, rel, "\u2ACC", "\\supsetneqq", true);
            defineSymbol(math, ams, rel, "\uE019", "\\@varsupsetneqq");
            defineSymbol(math, ams, rel, "\u22AE", "\\nVdash", true);
            defineSymbol(math, ams, rel, "\u2AB5", "\\precneqq", true);
            defineSymbol(math, ams, rel, "\u2AB6", "\\succneqq", true);
            defineSymbol(math, ams, rel, "\uE016", "\\@nsubseteqq");
            defineSymbol(math, ams, bin, "\u22B4", "\\unlhd");
            defineSymbol(math, ams, bin, "\u22B5", "\\unrhd");
            defineSymbol(math, ams, rel, "\u219A", "\\nleftarrow", true);
            defineSymbol(math, ams, rel, "\u219B", "\\nrightarrow", true);
            defineSymbol(math, ams, rel, "\u21CD", "\\nLeftarrow", true);
            defineSymbol(math, ams, rel, "\u21CF", "\\nRightarrow", true);
            defineSymbol(math, ams, rel, "\u21AE", "\\nleftrightarrow", true);
            defineSymbol(math, ams, rel, "\u21CE", "\\nLeftrightarrow", true);
            defineSymbol(math, ams, rel, "\u25B3", "\\vartriangle");
            defineSymbol(math, ams, textord, "\u210F", "\\hslash");
            defineSymbol(math, ams, textord, "\u25BD", "\\triangledown");
            defineSymbol(math, ams, textord, "\u25CA", "\\lozenge");
            defineSymbol(math, ams, textord, "\u24C8", "\\circledS");
            defineSymbol(math, ams, textord, "\xAE", "\\circledR");
            defineSymbol(symbols_text, ams, textord, "\xAE", "\\circledR");
            defineSymbol(math, ams, textord, "\u2221", "\\measuredangle", true);
            defineSymbol(math, ams, textord, "\u2204", "\\nexists");
            defineSymbol(math, ams, textord, "\u2127", "\\mho");
            defineSymbol(math, ams, textord, "\u2132", "\\Finv", true);
            defineSymbol(math, ams, textord, "\u2141", "\\Game", true);
            defineSymbol(math, ams, textord, "\u2035", "\\backprime");
            defineSymbol(math, ams, textord, "\u25B2", "\\blacktriangle");
            defineSymbol(math, ams, textord, "\u25BC", "\\blacktriangledown");
            defineSymbol(math, ams, textord, "\u25A0", "\\blacksquare");
            defineSymbol(math, ams, textord, "\u29EB", "\\blacklozenge");
            defineSymbol(math, ams, textord, "\u2605", "\\bigstar");
            defineSymbol(math, ams, textord, "\u2222", "\\sphericalangle", true);
            defineSymbol(math, ams, textord, "\u2201", "\\complement", true);
            defineSymbol(math, ams, textord, "\xF0", "\\eth", true);
            defineSymbol(symbols_text, main, textord, "\xF0", "\xF0");
            defineSymbol(math, ams, textord, "\u2571", "\\diagup");
            defineSymbol(math, ams, textord, "\u2572", "\\diagdown");
            defineSymbol(math, ams, textord, "\u25A1", "\\square");
            defineSymbol(math, ams, textord, "\u25A1", "\\Box");
            defineSymbol(math, ams, textord, "\u25CA", "\\Diamond");
            defineSymbol(math, ams, textord, "\xA5", "\\yen", true);
            defineSymbol(symbols_text, ams, textord, "\xA5", "\\yen", true);
            defineSymbol(math, ams, textord, "\u2713", "\\checkmark", true);
            defineSymbol(symbols_text, ams, textord, "\u2713", "\\checkmark");
            defineSymbol(math, ams, textord, "\u2136", "\\beth", true);
            defineSymbol(math, ams, textord, "\u2138", "\\daleth", true);
            defineSymbol(math, ams, textord, "\u2137", "\\gimel", true);
            defineSymbol(math, ams, textord, "\u03DD", "\\digamma", true);
            defineSymbol(math, ams, textord, "\u03F0", "\\varkappa");
            defineSymbol(math, ams, symbols_open, "\u250C", "\\@ulcorner", true);
            defineSymbol(math, ams, symbols_close, "\u2510", "\\@urcorner", true);
            defineSymbol(math, ams, symbols_open, "\u2514", "\\@llcorner", true);
            defineSymbol(math, ams, symbols_close, "\u2518", "\\@lrcorner", true);
            defineSymbol(math, ams, rel, "\u2266", "\\leqq", true);
            defineSymbol(math, ams, rel, "\u2A7D", "\\leqslant", true);
            defineSymbol(math, ams, rel, "\u2A95", "\\eqslantless", true);
            defineSymbol(math, ams, rel, "\u2272", "\\lesssim", true);
            defineSymbol(math, ams, rel, "\u2A85", "\\lessapprox", true);
            defineSymbol(math, ams, rel, "\u224A", "\\approxeq", true);
            defineSymbol(math, ams, bin, "\u22D6", "\\lessdot");
            defineSymbol(math, ams, rel, "\u22D8", "\\lll", true);
            defineSymbol(math, ams, rel, "\u2276", "\\lessgtr", true);
            defineSymbol(math, ams, rel, "\u22DA", "\\lesseqgtr", true);
            defineSymbol(math, ams, rel, "\u2A8B", "\\lesseqqgtr", true);
            defineSymbol(math, ams, rel, "\u2251", "\\doteqdot");
            defineSymbol(math, ams, rel, "\u2253", "\\risingdotseq", true);
            defineSymbol(math, ams, rel, "\u2252", "\\fallingdotseq", true);
            defineSymbol(math, ams, rel, "\u223D", "\\backsim", true);
            defineSymbol(math, ams, rel, "\u22CD", "\\backsimeq", true);
            defineSymbol(math, ams, rel, "\u2AC5", "\\subseteqq", true);
            defineSymbol(math, ams, rel, "\u22D0", "\\Subset", true);
            defineSymbol(math, ams, rel, "\u228F", "\\sqsubset", true);
            defineSymbol(math, ams, rel, "\u227C", "\\preccurlyeq", true);
            defineSymbol(math, ams, rel, "\u22DE", "\\curlyeqprec", true);
            defineSymbol(math, ams, rel, "\u227E", "\\precsim", true);
            defineSymbol(math, ams, rel, "\u2AB7", "\\precapprox", true);
            defineSymbol(math, ams, rel, "\u22B2", "\\vartriangleleft");
            defineSymbol(math, ams, rel, "\u22B4", "\\trianglelefteq");
            defineSymbol(math, ams, rel, "\u22A8", "\\vDash", true);
            defineSymbol(math, ams, rel, "\u22AA", "\\Vvdash", true);
            defineSymbol(math, ams, rel, "\u2323", "\\smallsmile");
            defineSymbol(math, ams, rel, "\u2322", "\\smallfrown");
            defineSymbol(math, ams, rel, "\u224F", "\\bumpeq", true);
            defineSymbol(math, ams, rel, "\u224E", "\\Bumpeq", true);
            defineSymbol(math, ams, rel, "\u2267", "\\geqq", true);
            defineSymbol(math, ams, rel, "\u2A7E", "\\geqslant", true);
            defineSymbol(math, ams, rel, "\u2A96", "\\eqslantgtr", true);
            defineSymbol(math, ams, rel, "\u2273", "\\gtrsim", true);
            defineSymbol(math, ams, rel, "\u2A86", "\\gtrapprox", true);
            defineSymbol(math, ams, bin, "\u22D7", "\\gtrdot");
            defineSymbol(math, ams, rel, "\u22D9", "\\ggg", true);
            defineSymbol(math, ams, rel, "\u2277", "\\gtrless", true);
            defineSymbol(math, ams, rel, "\u22DB", "\\gtreqless", true);
            defineSymbol(math, ams, rel, "\u2A8C", "\\gtreqqless", true);
            defineSymbol(math, ams, rel, "\u2256", "\\eqcirc", true);
            defineSymbol(math, ams, rel, "\u2257", "\\circeq", true);
            defineSymbol(math, ams, rel, "\u225C", "\\triangleq", true);
            defineSymbol(math, ams, rel, "\u223C", "\\thicksim");
            defineSymbol(math, ams, rel, "\u2248", "\\thickapprox");
            defineSymbol(math, ams, rel, "\u2AC6", "\\supseteqq", true);
            defineSymbol(math, ams, rel, "\u22D1", "\\Supset", true);
            defineSymbol(math, ams, rel, "\u2290", "\\sqsupset", true);
            defineSymbol(math, ams, rel, "\u227D", "\\succcurlyeq", true);
            defineSymbol(math, ams, rel, "\u22DF", "\\curlyeqsucc", true);
            defineSymbol(math, ams, rel, "\u227F", "\\succsim", true);
            defineSymbol(math, ams, rel, "\u2AB8", "\\succapprox", true);
            defineSymbol(math, ams, rel, "\u22B3", "\\vartriangleright");
            defineSymbol(math, ams, rel, "\u22B5", "\\trianglerighteq");
            defineSymbol(math, ams, rel, "\u22A9", "\\Vdash", true);
            defineSymbol(math, ams, rel, "\u2223", "\\shortmid");
            defineSymbol(math, ams, rel, "\u2225", "\\shortparallel");
            defineSymbol(math, ams, rel, "\u226C", "\\between", true);
            defineSymbol(math, ams, rel, "\u22D4", "\\pitchfork", true);
            defineSymbol(math, ams, rel, "\u221D", "\\varpropto");
            defineSymbol(math, ams, rel, "\u25C0", "\\blacktriangleleft");
            defineSymbol(math, ams, rel, "\u2234", "\\therefore", true);
            defineSymbol(math, ams, rel, "\u220D", "\\backepsilon");
            defineSymbol(math, ams, rel, "\u25B6", "\\blacktriangleright");
            defineSymbol(math, ams, rel, "\u2235", "\\because", true);
            defineSymbol(math, ams, rel, "\u22D8", "\\llless");
            defineSymbol(math, ams, rel, "\u22D9", "\\gggtr");
            defineSymbol(math, ams, bin, "\u22B2", "\\lhd");
            defineSymbol(math, ams, bin, "\u22B3", "\\rhd");
            defineSymbol(math, ams, rel, "\u2242", "\\eqsim", true);
            defineSymbol(math, main, rel, "\u22C8", "\\Join");
            defineSymbol(math, ams, rel, "\u2251", "\\Doteq", true);
            defineSymbol(math, ams, bin, "\u2214", "\\dotplus", true);
            defineSymbol(math, ams, bin, "\u2216", "\\smallsetminus");
            defineSymbol(math, ams, bin, "\u22D2", "\\Cap", true);
            defineSymbol(math, ams, bin, "\u22D3", "\\Cup", true);
            defineSymbol(math, ams, bin, "\u2A5E", "\\doublebarwedge", true);
            defineSymbol(math, ams, bin, "\u229F", "\\boxminus", true);
            defineSymbol(math, ams, bin, "\u229E", "\\boxplus", true);
            defineSymbol(math, ams, bin, "\u22C7", "\\divideontimes", true);
            defineSymbol(math, ams, bin, "\u22C9", "\\ltimes", true);
            defineSymbol(math, ams, bin, "\u22CA", "\\rtimes", true);
            defineSymbol(math, ams, bin, "\u22CB", "\\leftthreetimes", true);
            defineSymbol(math, ams, bin, "\u22CC", "\\rightthreetimes", true);
            defineSymbol(math, ams, bin, "\u22CF", "\\curlywedge", true);
            defineSymbol(math, ams, bin, "\u22CE", "\\curlyvee", true);
            defineSymbol(math, ams, bin, "\u229D", "\\circleddash", true);
            defineSymbol(math, ams, bin, "\u229B", "\\circledast", true);
            defineSymbol(math, ams, bin, "\u22C5", "\\centerdot");
            defineSymbol(math, ams, bin, "\u22BA", "\\intercal", true);
            defineSymbol(math, ams, bin, "\u22D2", "\\doublecap");
            defineSymbol(math, ams, bin, "\u22D3", "\\doublecup");
            defineSymbol(math, ams, bin, "\u22A0", "\\boxtimes", true);
            defineSymbol(math, ams, rel, "\u21E2", "\\dashrightarrow", true);
            defineSymbol(math, ams, rel, "\u21E0", "\\dashleftarrow", true);
            defineSymbol(math, ams, rel, "\u21C7", "\\leftleftarrows", true);
            defineSymbol(math, ams, rel, "\u21C6", "\\leftrightarrows", true);
            defineSymbol(math, ams, rel, "\u21DA", "\\Lleftarrow", true);
            defineSymbol(math, ams, rel, "\u219E", "\\twoheadleftarrow", true);
            defineSymbol(math, ams, rel, "\u21A2", "\\leftarrowtail", true);
            defineSymbol(math, ams, rel, "\u21AB", "\\looparrowleft", true);
            defineSymbol(math, ams, rel, "\u21CB", "\\leftrightharpoons", true);
            defineSymbol(math, ams, rel, "\u21B6", "\\curvearrowleft", true);
            defineSymbol(math, ams, rel, "\u21BA", "\\circlearrowleft", true);
            defineSymbol(math, ams, rel, "\u21B0", "\\Lsh", true);
            defineSymbol(math, ams, rel, "\u21C8", "\\upuparrows", true);
            defineSymbol(math, ams, rel, "\u21BF", "\\upharpoonleft", true);
            defineSymbol(math, ams, rel, "\u21C3", "\\downharpoonleft", true);
            defineSymbol(math, main, rel, "\u22B6", "\\origof", true);
            defineSymbol(math, main, rel, "\u22B7", "\\imageof", true);
            defineSymbol(math, ams, rel, "\u22B8", "\\multimap", true);
            defineSymbol(math, ams, rel, "\u21AD", "\\leftrightsquigarrow", true);
            defineSymbol(math, ams, rel, "\u21C9", "\\rightrightarrows", true);
            defineSymbol(math, ams, rel, "\u21C4", "\\rightleftarrows", true);
            defineSymbol(math, ams, rel, "\u21A0", "\\twoheadrightarrow", true);
            defineSymbol(math, ams, rel, "\u21A3", "\\rightarrowtail", true);
            defineSymbol(math, ams, rel, "\u21AC", "\\looparrowright", true);
            defineSymbol(math, ams, rel, "\u21B7", "\\curvearrowright", true);
            defineSymbol(math, ams, rel, "\u21BB", "\\circlearrowright", true);
            defineSymbol(math, ams, rel, "\u21B1", "\\Rsh", true);
            defineSymbol(math, ams, rel, "\u21CA", "\\downdownarrows", true);
            defineSymbol(math, ams, rel, "\u21BE", "\\upharpoonright", true);
            defineSymbol(math, ams, rel, "\u21C2", "\\downharpoonright", true);
            defineSymbol(math, ams, rel, "\u21DD", "\\rightsquigarrow", true);
            defineSymbol(math, ams, rel, "\u21DD", "\\leadsto");
            defineSymbol(math, ams, rel, "\u21DB", "\\Rrightarrow", true);
            defineSymbol(math, ams, rel, "\u21BE", "\\restriction");
            defineSymbol(math, main, textord, "\u2018", "`");
            defineSymbol(math, main, textord, "$", "\\$");
            defineSymbol(symbols_text, main, textord, "$", "\\$");
            defineSymbol(symbols_text, main, textord, "$", "\\textdollar");
            defineSymbol(math, main, textord, "%", "\\%");
            defineSymbol(symbols_text, main, textord, "%", "\\%");
            defineSymbol(math, main, textord, "_", "\\_");
            defineSymbol(symbols_text, main, textord, "_", "\\_");
            defineSymbol(symbols_text, main, textord, "_", "\\textunderscore");
            defineSymbol(math, main, textord, "\u2220", "\\angle", true);
            defineSymbol(math, main, textord, "\u221E", "\\infty", true);
            defineSymbol(math, main, textord, "\u2032", "\\prime");
            defineSymbol(math, main, textord, "\u25B3", "\\triangle");
            defineSymbol(math, main, textord, "\u0393", "\\Gamma", true);
            defineSymbol(math, main, textord, "\u0394", "\\Delta", true);
            defineSymbol(math, main, textord, "\u0398", "\\Theta", true);
            defineSymbol(math, main, textord, "\u039B", "\\Lambda", true);
            defineSymbol(math, main, textord, "\u039E", "\\Xi", true);
            defineSymbol(math, main, textord, "\u03A0", "\\Pi", true);
            defineSymbol(math, main, textord, "\u03A3", "\\Sigma", true);
            defineSymbol(math, main, textord, "\u03A5", "\\Upsilon", true);
            defineSymbol(math, main, textord, "\u03A6", "\\Phi", true);
            defineSymbol(math, main, textord, "\u03A8", "\\Psi", true);
            defineSymbol(math, main, textord, "\u03A9", "\\Omega", true);
            defineSymbol(math, main, textord, "A", "\u0391");
            defineSymbol(math, main, textord, "B", "\u0392");
            defineSymbol(math, main, textord, "E", "\u0395");
            defineSymbol(math, main, textord, "Z", "\u0396");
            defineSymbol(math, main, textord, "H", "\u0397");
            defineSymbol(math, main, textord, "I", "\u0399");
            defineSymbol(math, main, textord, "K", "\u039A");
            defineSymbol(math, main, textord, "M", "\u039C");
            defineSymbol(math, main, textord, "N", "\u039D");
            defineSymbol(math, main, textord, "O", "\u039F");
            defineSymbol(math, main, textord, "P", "\u03A1");
            defineSymbol(math, main, textord, "T", "\u03A4");
            defineSymbol(math, main, textord, "X", "\u03A7");
            defineSymbol(math, main, textord, "\xAC", "\\neg", true);
            defineSymbol(math, main, textord, "\xAC", "\\lnot");
            defineSymbol(math, main, textord, "\u22A4", "\\top");
            defineSymbol(math, main, textord, "\u22A5", "\\bot");
            defineSymbol(math, main, textord, "\u2205", "\\emptyset");
            defineSymbol(math, ams, textord, "\u2205", "\\varnothing");
            defineSymbol(math, main, mathord, "\u03B1", "\\alpha", true);
            defineSymbol(math, main, mathord, "\u03B2", "\\beta", true);
            defineSymbol(math, main, mathord, "\u03B3", "\\gamma", true);
            defineSymbol(math, main, mathord, "\u03B4", "\\delta", true);
            defineSymbol(math, main, mathord, "\u03F5", "\\epsilon", true);
            defineSymbol(math, main, mathord, "\u03B6", "\\zeta", true);
            defineSymbol(math, main, mathord, "\u03B7", "\\eta", true);
            defineSymbol(math, main, mathord, "\u03B8", "\\theta", true);
            defineSymbol(math, main, mathord, "\u03B9", "\\iota", true);
            defineSymbol(math, main, mathord, "\u03BA", "\\kappa", true);
            defineSymbol(math, main, mathord, "\u03BB", "\\lambda", true);
            defineSymbol(math, main, mathord, "\u03BC", "\\mu", true);
            defineSymbol(math, main, mathord, "\u03BD", "\\nu", true);
            defineSymbol(math, main, mathord, "\u03BE", "\\xi", true);
            defineSymbol(math, main, mathord, "\u03BF", "\\omicron", true);
            defineSymbol(math, main, mathord, "\u03C0", "\\pi", true);
            defineSymbol(math, main, mathord, "\u03C1", "\\rho", true);
            defineSymbol(math, main, mathord, "\u03C3", "\\sigma", true);
            defineSymbol(math, main, mathord, "\u03C4", "\\tau", true);
            defineSymbol(math, main, mathord, "\u03C5", "\\upsilon", true);
            defineSymbol(math, main, mathord, "\u03D5", "\\phi", true);
            defineSymbol(math, main, mathord, "\u03C7", "\\chi", true);
            defineSymbol(math, main, mathord, "\u03C8", "\\psi", true);
            defineSymbol(math, main, mathord, "\u03C9", "\\omega", true);
            defineSymbol(math, main, mathord, "\u03B5", "\\varepsilon", true);
            defineSymbol(math, main, mathord, "\u03D1", "\\vartheta", true);
            defineSymbol(math, main, mathord, "\u03D6", "\\varpi", true);
            defineSymbol(math, main, mathord, "\u03F1", "\\varrho", true);
            defineSymbol(math, main, mathord, "\u03C2", "\\varsigma", true);
            defineSymbol(math, main, mathord, "\u03C6", "\\varphi", true);
            defineSymbol(math, main, bin, "\u2217", "*", true);
            defineSymbol(math, main, bin, "+", "+");
            defineSymbol(math, main, bin, "\u2212", "-", true);
            defineSymbol(math, main, bin, "\u22C5", "\\cdot", true);
            defineSymbol(math, main, bin, "\u2218", "\\circ", true);
            defineSymbol(math, main, bin, "\xF7", "\\div", true);
            defineSymbol(math, main, bin, "\xB1", "\\pm", true);
            defineSymbol(math, main, bin, "\xD7", "\\times", true);
            defineSymbol(math, main, bin, "\u2229", "\\cap", true);
            defineSymbol(math, main, bin, "\u222A", "\\cup", true);
            defineSymbol(math, main, bin, "\u2216", "\\setminus", true);
            defineSymbol(math, main, bin, "\u2227", "\\land");
            defineSymbol(math, main, bin, "\u2228", "\\lor");
            defineSymbol(math, main, bin, "\u2227", "\\wedge", true);
            defineSymbol(math, main, bin, "\u2228", "\\vee", true);
            defineSymbol(math, main, textord, "\u221A", "\\surd");
            defineSymbol(math, main, symbols_open, "\u27E8", "\\langle", true);
            defineSymbol(math, main, symbols_open, "\u2223", "\\lvert");
            defineSymbol(math, main, symbols_open, "\u2225", "\\lVert");
            defineSymbol(math, main, symbols_close, "?", "?");
            defineSymbol(math, main, symbols_close, "!", "!");
            defineSymbol(math, main, symbols_close, "\u27E9", "\\rangle", true);
            defineSymbol(math, main, symbols_close, "\u2223", "\\rvert");
            defineSymbol(math, main, symbols_close, "\u2225", "\\rVert");
            defineSymbol(math, main, rel, "=", "=");
            defineSymbol(math, main, rel, ":", ":");
            defineSymbol(math, main, rel, "\u2248", "\\approx", true);
            defineSymbol(math, main, rel, "\u2245", "\\cong", true);
            defineSymbol(math, main, rel, "\u2265", "\\ge");
            defineSymbol(math, main, rel, "\u2265", "\\geq", true);
            defineSymbol(math, main, rel, "\u2190", "\\gets");
            defineSymbol(math, main, rel, ">", "\\gt", true);
            defineSymbol(math, main, rel, "\u2208", "\\in", true);
            defineSymbol(math, main, rel, "\uE020", "\\@not");
            defineSymbol(math, main, rel, "\u2282", "\\subset", true);
            defineSymbol(math, main, rel, "\u2283", "\\supset", true);
            defineSymbol(math, main, rel, "\u2286", "\\subseteq", true);
            defineSymbol(math, main, rel, "\u2287", "\\supseteq", true);
            defineSymbol(math, ams, rel, "\u2288", "\\nsubseteq", true);
            defineSymbol(math, ams, rel, "\u2289", "\\nsupseteq", true);
            defineSymbol(math, main, rel, "\u22A8", "\\models");
            defineSymbol(math, main, rel, "\u2190", "\\leftarrow", true);
            defineSymbol(math, main, rel, "\u2264", "\\le");
            defineSymbol(math, main, rel, "\u2264", "\\leq", true);
            defineSymbol(math, main, rel, "<", "\\lt", true);
            defineSymbol(math, main, rel, "\u2192", "\\rightarrow", true);
            defineSymbol(math, main, rel, "\u2192", "\\to");
            defineSymbol(math, ams, rel, "\u2271", "\\ngeq", true);
            defineSymbol(math, ams, rel, "\u2270", "\\nleq", true);
            defineSymbol(math, main, spacing, "\xA0", "\\ ");
            defineSymbol(math, main, spacing, "\xA0", "\\space");
            defineSymbol(math, main, spacing, "\xA0", "\\nobreakspace");
            defineSymbol(symbols_text, main, spacing, "\xA0", "\\ ");
            defineSymbol(symbols_text, main, spacing, "\xA0", " ");
            defineSymbol(symbols_text, main, spacing, "\xA0", "\\space");
            defineSymbol(symbols_text, main, spacing, "\xA0", "\\nobreakspace");
            defineSymbol(math, main, spacing, null, "\\nobreak");
            defineSymbol(math, main, spacing, null, "\\allowbreak");
            defineSymbol(math, main, punct, ",", ",");
            defineSymbol(math, main, punct, ";", ";");
            defineSymbol(math, ams, bin, "\u22BC", "\\barwedge", true);
            defineSymbol(math, ams, bin, "\u22BB", "\\veebar", true);
            defineSymbol(math, main, bin, "\u2299", "\\odot", true);
            defineSymbol(math, main, bin, "\u2295", "\\oplus", true);
            defineSymbol(math, main, bin, "\u2297", "\\otimes", true);
            defineSymbol(math, main, textord, "\u2202", "\\partial", true);
            defineSymbol(math, main, bin, "\u2298", "\\oslash", true);
            defineSymbol(math, ams, bin, "\u229A", "\\circledcirc", true);
            defineSymbol(math, ams, bin, "\u22A1", "\\boxdot", true);
            defineSymbol(math, main, bin, "\u25B3", "\\bigtriangleup");
            defineSymbol(math, main, bin, "\u25BD", "\\bigtriangledown");
            defineSymbol(math, main, bin, "\u2020", "\\dagger");
            defineSymbol(math, main, bin, "\u22C4", "\\diamond");
            defineSymbol(math, main, bin, "\u22C6", "\\star");
            defineSymbol(math, main, bin, "\u25C3", "\\triangleleft");
            defineSymbol(math, main, bin, "\u25B9", "\\triangleright");
            defineSymbol(math, main, symbols_open, "{", "\\{");
            defineSymbol(symbols_text, main, textord, "{", "\\{");
            defineSymbol(symbols_text, main, textord, "{", "\\textbraceleft");
            defineSymbol(math, main, symbols_close, "}", "\\}");
            defineSymbol(symbols_text, main, textord, "}", "\\}");
            defineSymbol(symbols_text, main, textord, "}", "\\textbraceright");
            defineSymbol(math, main, symbols_open, "{", "\\lbrace");
            defineSymbol(math, main, symbols_close, "}", "\\rbrace");
            defineSymbol(math, main, symbols_open, "[", "\\lbrack", true);
            defineSymbol(symbols_text, main, textord, "[", "\\lbrack", true);
            defineSymbol(math, main, symbols_close, "]", "\\rbrack", true);
            defineSymbol(symbols_text, main, textord, "]", "\\rbrack", true);
            defineSymbol(math, main, symbols_open, "(", "\\lparen", true);
            defineSymbol(math, main, symbols_close, ")", "\\rparen", true);
            defineSymbol(symbols_text, main, textord, "<", "\\textless", true);
            defineSymbol(symbols_text, main, textord, ">", "\\textgreater", true);
            defineSymbol(math, main, symbols_open, "\u230A", "\\lfloor", true);
            defineSymbol(math, main, symbols_close, "\u230B", "\\rfloor", true);
            defineSymbol(math, main, symbols_open, "\u2308", "\\lceil", true);
            defineSymbol(math, main, symbols_close, "\u2309", "\\rceil", true);
            defineSymbol(math, main, textord, "\\", "\\backslash");
            defineSymbol(math, main, textord, "\u2223", "|");
            defineSymbol(math, main, textord, "\u2223", "\\vert");
            defineSymbol(symbols_text, main, textord, "|", "\\textbar", true);
            defineSymbol(math, main, textord, "\u2225", "\\|");
            defineSymbol(math, main, textord, "\u2225", "\\Vert");
            defineSymbol(symbols_text, main, textord, "\u2225", "\\textbardbl");
            defineSymbol(symbols_text, main, textord, "~", "\\textasciitilde");
            defineSymbol(symbols_text, main, textord, "\\", "\\textbackslash");
            defineSymbol(symbols_text, main, textord, "^", "\\textasciicircum");
            defineSymbol(math, main, rel, "\u2191", "\\uparrow", true);
            defineSymbol(math, main, rel, "\u21D1", "\\Uparrow", true);
            defineSymbol(math, main, rel, "\u2193", "\\downarrow", true);
            defineSymbol(math, main, rel, "\u21D3", "\\Downarrow", true);
            defineSymbol(math, main, rel, "\u2195", "\\updownarrow", true);
            defineSymbol(math, main, rel, "\u21D5", "\\Updownarrow", true);
            defineSymbol(math, main, op, "\u2210", "\\coprod");
            defineSymbol(math, main, op, "\u22C1", "\\bigvee");
            defineSymbol(math, main, op, "\u22C0", "\\bigwedge");
            defineSymbol(math, main, op, "\u2A04", "\\biguplus");
            defineSymbol(math, main, op, "\u22C2", "\\bigcap");
            defineSymbol(math, main, op, "\u22C3", "\\bigcup");
            defineSymbol(math, main, op, "\u222B", "\\int");
            defineSymbol(math, main, op, "\u222B", "\\intop");
            defineSymbol(math, main, op, "\u222C", "\\iint");
            defineSymbol(math, main, op, "\u222D", "\\iiint");
            defineSymbol(math, main, op, "\u220F", "\\prod");
            defineSymbol(math, main, op, "\u2211", "\\sum");
            defineSymbol(math, main, op, "\u2A02", "\\bigotimes");
            defineSymbol(math, main, op, "\u2A01", "\\bigoplus");
            defineSymbol(math, main, op, "\u2A00", "\\bigodot");
            defineSymbol(math, main, op, "\u222E", "\\oint");
            defineSymbol(math, main, op, "\u222F", "\\oiint");
            defineSymbol(math, main, op, "\u2230", "\\oiiint");
            defineSymbol(math, main, op, "\u2A06", "\\bigsqcup");
            defineSymbol(math, main, op, "\u222B", "\\smallint");
            defineSymbol(symbols_text, main, inner, "\u2026", "\\textellipsis");
            defineSymbol(math, main, inner, "\u2026", "\\mathellipsis");
            defineSymbol(symbols_text, main, inner, "\u2026", "\\ldots", true);
            defineSymbol(math, main, inner, "\u2026", "\\ldots", true);
            defineSymbol(math, main, inner, "\u22EF", "\\@cdots", true);
            defineSymbol(math, main, inner, "\u22F1", "\\ddots", true);
            defineSymbol(math, main, textord, "\u22EE", "\\varvdots");
            defineSymbol(math, main, accent, "\u02CA", "\\acute");
            defineSymbol(math, main, accent, "\u02CB", "\\grave");
            defineSymbol(math, main, accent, "\xA8", "\\ddot");
            defineSymbol(math, main, accent, "~", "\\tilde");
            defineSymbol(math, main, accent, "\u02C9", "\\bar");
            defineSymbol(math, main, accent, "\u02D8", "\\breve");
            defineSymbol(math, main, accent, "\u02C7", "\\check");
            defineSymbol(math, main, accent, "^", "\\hat");
            defineSymbol(math, main, accent, "\u20D7", "\\vec");
            defineSymbol(math, main, accent, "\u02D9", "\\dot");
            defineSymbol(math, main, accent, "\u02DA", "\\mathring");
            defineSymbol(math, main, mathord, "\uE131", "\\@imath");
            defineSymbol(math, main, mathord, "\uE237", "\\@jmath");
            defineSymbol(math, main, textord, "\u0131", "\u0131");
            defineSymbol(math, main, textord, "\u0237", "\u0237");
            defineSymbol(symbols_text, main, textord, "\u0131", "\\i", true);
            defineSymbol(symbols_text, main, textord, "\u0237", "\\j", true);
            defineSymbol(symbols_text, main, textord, "\xDF", "\\ss", true);
            defineSymbol(symbols_text, main, textord, "\xE6", "\\ae", true);
            defineSymbol(symbols_text, main, textord, "\u0153", "\\oe", true);
            defineSymbol(symbols_text, main, textord, "\xF8", "\\o", true);
            defineSymbol(symbols_text, main, textord, "\xC6", "\\AE", true);
            defineSymbol(symbols_text, main, textord, "\u0152", "\\OE", true);
            defineSymbol(symbols_text, main, textord, "\xD8", "\\O", true);
            defineSymbol(symbols_text, main, accent, "\u02CA", "\\'");
            defineSymbol(symbols_text, main, accent, "\u02CB", "\\`");
            defineSymbol(symbols_text, main, accent, "\u02C6", "\\^");
            defineSymbol(symbols_text, main, accent, "\u02DC", "\\~");
            defineSymbol(symbols_text, main, accent, "\u02C9", "\\=");
            defineSymbol(symbols_text, main, accent, "\u02D8", "\\u");
            defineSymbol(symbols_text, main, accent, "\u02D9", "\\.");
            defineSymbol(symbols_text, main, accent, "\xB8", "\\c");
            defineSymbol(symbols_text, main, accent, "\u02DA", "\\r");
            defineSymbol(symbols_text, main, accent, "\u02C7", "\\v");
            defineSymbol(symbols_text, main, accent, "\xA8", '\\"');
            defineSymbol(symbols_text, main, accent, "\u02DD", "\\H");
            defineSymbol(symbols_text, main, accent, "\u25EF", "\\textcircled");
            var ligatures = {
              "--": true,
              "---": true,
              "``": true,
              "''": true
            };
            defineSymbol(symbols_text, main, textord, "\u2013", "--", true);
            defineSymbol(symbols_text, main, textord, "\u2013", "\\textendash");
            defineSymbol(symbols_text, main, textord, "\u2014", "---", true);
            defineSymbol(symbols_text, main, textord, "\u2014", "\\textemdash");
            defineSymbol(symbols_text, main, textord, "\u2018", "`", true);
            defineSymbol(symbols_text, main, textord, "\u2018", "\\textquoteleft");
            defineSymbol(symbols_text, main, textord, "\u2019", "'", true);
            defineSymbol(symbols_text, main, textord, "\u2019", "\\textquoteright");
            defineSymbol(symbols_text, main, textord, "\u201C", "``", true);
            defineSymbol(symbols_text, main, textord, "\u201C", "\\textquotedblleft");
            defineSymbol(symbols_text, main, textord, "\u201D", "''", true);
            defineSymbol(symbols_text, main, textord, "\u201D", "\\textquotedblright");
            defineSymbol(math, main, textord, "\xB0", "\\degree", true);
            defineSymbol(symbols_text, main, textord, "\xB0", "\\degree");
            defineSymbol(symbols_text, main, textord, "\xB0", "\\textdegree", true);
            defineSymbol(math, main, textord, "\xA3", "\\pounds");
            defineSymbol(math, main, textord, "\xA3", "\\mathsterling", true);
            defineSymbol(symbols_text, main, textord, "\xA3", "\\pounds");
            defineSymbol(symbols_text, main, textord, "\xA3", "\\textsterling", true);
            defineSymbol(math, ams, textord, "\u2720", "\\maltese");
            defineSymbol(symbols_text, ams, textord, "\u2720", "\\maltese");
            var mathTextSymbols = '0123456789/@."';
            for (var i = 0; i < mathTextSymbols.length; i++) {
              var ch = mathTextSymbols.charAt(i);
              defineSymbol(math, main, textord, ch, ch);
            }
            var textSymbols = '0123456789!@*()-=+";:?/.,';
            for (var _i = 0; _i < textSymbols.length; _i++) {
              var _ch = textSymbols.charAt(_i);
              defineSymbol(symbols_text, main, textord, _ch, _ch);
            }
            var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (var _i2 = 0; _i2 < letters.length; _i2++) {
              var _ch2 = letters.charAt(_i2);
              defineSymbol(math, main, mathord, _ch2, _ch2);
              defineSymbol(symbols_text, main, textord, _ch2, _ch2);
            }
            defineSymbol(math, ams, textord, "C", "\u2102");
            defineSymbol(symbols_text, ams, textord, "C", "\u2102");
            defineSymbol(math, ams, textord, "H", "\u210D");
            defineSymbol(symbols_text, ams, textord, "H", "\u210D");
            defineSymbol(math, ams, textord, "N", "\u2115");
            defineSymbol(symbols_text, ams, textord, "N", "\u2115");
            defineSymbol(math, ams, textord, "P", "\u2119");
            defineSymbol(symbols_text, ams, textord, "P", "\u2119");
            defineSymbol(math, ams, textord, "Q", "\u211A");
            defineSymbol(symbols_text, ams, textord, "Q", "\u211A");
            defineSymbol(math, ams, textord, "R", "\u211D");
            defineSymbol(symbols_text, ams, textord, "R", "\u211D");
            defineSymbol(math, ams, textord, "Z", "\u2124");
            defineSymbol(symbols_text, ams, textord, "Z", "\u2124");
            defineSymbol(math, main, mathord, "h", "\u210E");
            defineSymbol(symbols_text, main, mathord, "h", "\u210E");
            var wideChar = "";
            for (var _i3 = 0; _i3 < letters.length; _i3++) {
              var _ch3 = letters.charAt(_i3);
              wideChar = String.fromCharCode(55349, 56320 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56372 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56424 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56580 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56684 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56736 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56788 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56840 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              wideChar = String.fromCharCode(55349, 56944 + _i3);
              defineSymbol(math, main, mathord, _ch3, wideChar);
              defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              if (_i3 < 26) {
                wideChar = String.fromCharCode(55349, 56632 + _i3);
                defineSymbol(math, main, mathord, _ch3, wideChar);
                defineSymbol(symbols_text, main, textord, _ch3, wideChar);
                wideChar = String.fromCharCode(55349, 56476 + _i3);
                defineSymbol(math, main, mathord, _ch3, wideChar);
                defineSymbol(symbols_text, main, textord, _ch3, wideChar);
              }
            }
            wideChar = String.fromCharCode(55349, 56668);
            defineSymbol(math, main, mathord, "k", wideChar);
            defineSymbol(symbols_text, main, textord, "k", wideChar);
            for (var _i4 = 0; _i4 < 10; _i4++) {
              var _ch4 = _i4.toString();
              wideChar = String.fromCharCode(55349, 57294 + _i4);
              defineSymbol(math, main, mathord, _ch4, wideChar);
              defineSymbol(symbols_text, main, textord, _ch4, wideChar);
              wideChar = String.fromCharCode(55349, 57314 + _i4);
              defineSymbol(math, main, mathord, _ch4, wideChar);
              defineSymbol(symbols_text, main, textord, _ch4, wideChar);
              wideChar = String.fromCharCode(55349, 57324 + _i4);
              defineSymbol(math, main, mathord, _ch4, wideChar);
              defineSymbol(symbols_text, main, textord, _ch4, wideChar);
              wideChar = String.fromCharCode(55349, 57334 + _i4);
              defineSymbol(math, main, mathord, _ch4, wideChar);
              defineSymbol(symbols_text, main, textord, _ch4, wideChar);
            }
            var extraLatin = "\xD0\xDE\xFE";
            for (var _i5 = 0; _i5 < extraLatin.length; _i5++) {
              var _ch5 = extraLatin.charAt(_i5);
              defineSymbol(math, main, mathord, _ch5, _ch5);
              defineSymbol(symbols_text, main, textord, _ch5, _ch5);
            }
            ;
            var wideLatinLetterData = [
              ["mathbf", "textbf", "Main-Bold"],
              // A-Z bold upright
              ["mathbf", "textbf", "Main-Bold"],
              // a-z bold upright
              ["mathnormal", "textit", "Math-Italic"],
              // A-Z italic
              ["mathnormal", "textit", "Math-Italic"],
              // a-z italic
              ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
              // A-Z bold italic
              ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
              // a-z bold italic
              // Map fancy A-Z letters to script, not calligraphic.
              // This aligns with unicode-math and math fonts (except Cambria Math).
              ["mathscr", "textscr", "Script-Regular"],
              // A-Z script
              ["", "", ""],
              // a-z script.  No font
              ["", "", ""],
              // A-Z bold script. No font
              ["", "", ""],
              // a-z bold script. No font
              ["mathfrak", "textfrak", "Fraktur-Regular"],
              // A-Z Fraktur
              ["mathfrak", "textfrak", "Fraktur-Regular"],
              // a-z Fraktur
              ["mathbb", "textbb", "AMS-Regular"],
              // A-Z double-struck
              ["mathbb", "textbb", "AMS-Regular"],
              // k double-struck
              // Note that we are using a bold font, but font metrics for regular Fraktur.
              ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
              // A-Z bold Fraktur
              ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
              // a-z bold Fraktur
              ["mathsf", "textsf", "SansSerif-Regular"],
              // A-Z sans-serif
              ["mathsf", "textsf", "SansSerif-Regular"],
              // a-z sans-serif
              ["mathboldsf", "textboldsf", "SansSerif-Bold"],
              // A-Z bold sans-serif
              ["mathboldsf", "textboldsf", "SansSerif-Bold"],
              // a-z bold sans-serif
              ["mathitsf", "textitsf", "SansSerif-Italic"],
              // A-Z italic sans-serif
              ["mathitsf", "textitsf", "SansSerif-Italic"],
              // a-z italic sans-serif
              ["", "", ""],
              // A-Z bold italic sans. No font
              ["", "", ""],
              // a-z bold italic sans. No font
              ["mathtt", "texttt", "Typewriter-Regular"],
              // A-Z monospace
              ["mathtt", "texttt", "Typewriter-Regular"]
              // a-z monospace
            ];
            var wideNumeralData = [
              ["mathbf", "textbf", "Main-Bold"],
              // 0-9 bold
              ["", "", ""],
              // 0-9 double-struck. No KaTeX font.
              ["mathsf", "textsf", "SansSerif-Regular"],
              // 0-9 sans-serif
              ["mathboldsf", "textboldsf", "SansSerif-Bold"],
              // 0-9 bold sans-serif
              ["mathtt", "texttt", "Typewriter-Regular"]
              // 0-9 monospace
            ];
            var wideCharacterFont = function wideCharacterFont2(wideChar2, mode) {
              var H = wideChar2.charCodeAt(0);
              var L = wideChar2.charCodeAt(1);
              var codePoint = (H - 55296) * 1024 + (L - 56320) + 65536;
              var j = mode === "math" ? 0 : 1;
              if (119808 <= codePoint && codePoint < 120484) {
                var i2 = Math.floor((codePoint - 119808) / 26);
                return [wideLatinLetterData[i2][2], wideLatinLetterData[i2][j]];
              } else if (120782 <= codePoint && codePoint <= 120831) {
                var _i6 = Math.floor((codePoint - 120782) / 10);
                return [wideNumeralData[_i6][2], wideNumeralData[_i6][j]];
              } else if (codePoint === 120485 || codePoint === 120486) {
                return [wideLatinLetterData[0][2], wideLatinLetterData[0][j]];
              } else if (120486 < codePoint && codePoint < 120782) {
                return ["", ""];
              } else {
                throw new src_ParseError("Unsupported character: " + wideChar2);
              }
            };
            ;
            var lookupSymbol = function lookupSymbol2(value, fontName, mode) {
              if (src_symbols[mode][value] && src_symbols[mode][value].replace) {
                value = src_symbols[mode][value].replace;
              }
              return {
                value,
                metrics: getCharacterMetrics(value, fontName, mode)
              };
            };
            var makeSymbol = function makeSymbol2(value, fontName, mode, options, classes) {
              var lookup = lookupSymbol(value, fontName, mode);
              var metrics = lookup.metrics;
              value = lookup.value;
              var symbolNode;
              if (metrics) {
                var italic = metrics.italic;
                if (mode === "text" || options && options.font === "mathit") {
                  italic = 0;
                }
                symbolNode = new SymbolNode(value, metrics.height, metrics.depth, italic, metrics.skew, metrics.width, classes);
              } else {
                typeof console !== "undefined" && console.warn("No character metrics " + ("for '" + value + "' in style '" + fontName + "' and mode '" + mode + "'"));
                symbolNode = new SymbolNode(value, 0, 0, 0, 0, 0, classes);
              }
              if (options) {
                symbolNode.maxFontSize = options.sizeMultiplier;
                if (options.style.isTight()) {
                  symbolNode.classes.push("mtight");
                }
                var color = options.getColor();
                if (color) {
                  symbolNode.style.color = color;
                }
              }
              return symbolNode;
            };
            var mathsym = function mathsym2(value, mode, options, classes) {
              if (classes === void 0) {
                classes = [];
              }
              if (options.font === "boldsymbol" && lookupSymbol(value, "Main-Bold", mode).metrics) {
                return makeSymbol(value, "Main-Bold", mode, options, classes.concat(["mathbf"]));
              } else if (value === "\\" || src_symbols[mode][value].font === "main") {
                return makeSymbol(value, "Main-Regular", mode, options, classes);
              } else {
                return makeSymbol(value, "AMS-Regular", mode, options, classes.concat(["amsrm"]));
              }
            };
            var boldsymbol = function boldsymbol2(value, mode, options, classes, type) {
              if (type !== "textord" && lookupSymbol(value, "Math-BoldItalic", mode).metrics) {
                return {
                  fontName: "Math-BoldItalic",
                  fontClass: "boldsymbol"
                };
              } else {
                return {
                  fontName: "Main-Bold",
                  fontClass: "mathbf"
                };
              }
            };
            var makeOrd = function makeOrd2(group, options, type) {
              var mode = group.mode;
              var text = group.text;
              var classes = ["mord"];
              var isFont = mode === "math" || mode === "text" && options.font;
              var fontOrFamily = isFont ? options.font : options.fontFamily;
              var wideFontName = "";
              var wideFontClass = "";
              if (text.charCodeAt(0) === 55349) {
                var _wideCharacterFont = wideCharacterFont(text, mode);
                wideFontName = _wideCharacterFont[0];
                wideFontClass = _wideCharacterFont[1];
              }
              if (wideFontName.length > 0) {
                return makeSymbol(text, wideFontName, mode, options, classes.concat(wideFontClass));
              } else if (fontOrFamily) {
                var fontName;
                var fontClasses;
                if (fontOrFamily === "boldsymbol") {
                  var fontData = boldsymbol(text, mode, options, classes, type);
                  fontName = fontData.fontName;
                  fontClasses = [fontData.fontClass];
                } else if (isFont) {
                  fontName = fontMap[fontOrFamily].fontName;
                  fontClasses = [fontOrFamily];
                } else {
                  fontName = retrieveTextFontName(fontOrFamily, options.fontWeight, options.fontShape);
                  fontClasses = [fontOrFamily, options.fontWeight, options.fontShape];
                }
                if (lookupSymbol(text, fontName, mode).metrics) {
                  return makeSymbol(text, fontName, mode, options, classes.concat(fontClasses));
                } else if (ligatures.hasOwnProperty(text) && fontName.slice(0, 10) === "Typewriter") {
                  var parts = [];
                  for (var i2 = 0; i2 < text.length; i2++) {
                    parts.push(makeSymbol(text[i2], fontName, mode, options, classes.concat(fontClasses)));
                  }
                  return makeFragment(parts);
                }
              }
              if (type === "mathord") {
                return makeSymbol(text, "Math-Italic", mode, options, classes.concat(["mathnormal"]));
              } else if (type === "textord") {
                var font = src_symbols[mode][text] && src_symbols[mode][text].font;
                if (font === "ams") {
                  var _fontName = retrieveTextFontName("amsrm", options.fontWeight, options.fontShape);
                  return makeSymbol(text, _fontName, mode, options, classes.concat("amsrm", options.fontWeight, options.fontShape));
                } else if (font === "main" || !font) {
                  var _fontName2 = retrieveTextFontName("textrm", options.fontWeight, options.fontShape);
                  return makeSymbol(text, _fontName2, mode, options, classes.concat(options.fontWeight, options.fontShape));
                } else {
                  var _fontName3 = retrieveTextFontName(font, options.fontWeight, options.fontShape);
                  return makeSymbol(text, _fontName3, mode, options, classes.concat(_fontName3, options.fontWeight, options.fontShape));
                }
              } else {
                throw new Error("unexpected type: " + type + " in makeOrd");
              }
            };
            var canCombine = function canCombine2(prev, next) {
              if (createClass(prev.classes) !== createClass(next.classes) || prev.skew !== next.skew || prev.maxFontSize !== next.maxFontSize) {
                return false;
              }
              if (prev.classes.length === 1) {
                var cls = prev.classes[0];
                if (cls === "mbin" || cls === "mord") {
                  return false;
                }
              }
              for (var style in prev.style) {
                if (prev.style.hasOwnProperty(style) && prev.style[style] !== next.style[style]) {
                  return false;
                }
              }
              for (var _style in next.style) {
                if (next.style.hasOwnProperty(_style) && prev.style[_style] !== next.style[_style]) {
                  return false;
                }
              }
              return true;
            };
            var tryCombineChars = function tryCombineChars2(chars) {
              for (var i2 = 0; i2 < chars.length - 1; i2++) {
                var prev = chars[i2];
                var next = chars[i2 + 1];
                if (prev instanceof SymbolNode && next instanceof SymbolNode && canCombine(prev, next)) {
                  prev.text += next.text;
                  prev.height = Math.max(prev.height, next.height);
                  prev.depth = Math.max(prev.depth, next.depth);
                  prev.italic = next.italic;
                  chars.splice(i2 + 1, 1);
                  i2--;
                }
              }
              return chars;
            };
            var sizeElementFromChildren = function sizeElementFromChildren2(elem) {
              var height = 0;
              var depth = 0;
              var maxFontSize = 0;
              for (var i2 = 0; i2 < elem.children.length; i2++) {
                var child = elem.children[i2];
                if (child.height > height) {
                  height = child.height;
                }
                if (child.depth > depth) {
                  depth = child.depth;
                }
                if (child.maxFontSize > maxFontSize) {
                  maxFontSize = child.maxFontSize;
                }
              }
              elem.height = height;
              elem.depth = depth;
              elem.maxFontSize = maxFontSize;
            };
            var makeSpan = function makeSpan2(classes, children, options, style) {
              var span = new Span(classes, children, options, style);
              sizeElementFromChildren(span);
              return span;
            };
            var makeSvgSpan = function makeSvgSpan2(classes, children, options, style) {
              return new Span(classes, children, options, style);
            };
            var makeLineSpan = function makeLineSpan2(className, options, thickness) {
              var line = makeSpan([className], [], options);
              line.height = Math.max(thickness || options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
              line.style.borderBottomWidth = makeEm(line.height);
              line.maxFontSize = 1;
              return line;
            };
            var makeAnchor = function makeAnchor2(href, classes, children, options) {
              var anchor = new Anchor(href, classes, children, options);
              sizeElementFromChildren(anchor);
              return anchor;
            };
            var makeFragment = function makeFragment2(children) {
              var fragment = new DocumentFragment(children);
              sizeElementFromChildren(fragment);
              return fragment;
            };
            var wrapFragment = function wrapFragment2(group, options) {
              if (group instanceof DocumentFragment) {
                return makeSpan([], [group], options);
              }
              return group;
            };
            var getVListChildrenAndDepth = function getVListChildrenAndDepth2(params) {
              if (params.positionType === "individualShift") {
                var oldChildren = params.children;
                var children = [oldChildren[0]];
                var _depth = -oldChildren[0].shift - oldChildren[0].elem.depth;
                var currPos = _depth;
                for (var i2 = 1; i2 < oldChildren.length; i2++) {
                  var diff = -oldChildren[i2].shift - currPos - oldChildren[i2].elem.depth;
                  var size = diff - (oldChildren[i2 - 1].elem.height + oldChildren[i2 - 1].elem.depth);
                  currPos = currPos + diff;
                  children.push({
                    type: "kern",
                    size
                  });
                  children.push(oldChildren[i2]);
                }
                return {
                  children,
                  depth: _depth
                };
              }
              var depth;
              if (params.positionType === "top") {
                var bottom = params.positionData;
                for (var _i6 = 0; _i6 < params.children.length; _i6++) {
                  var child = params.children[_i6];
                  bottom -= child.type === "kern" ? child.size : child.elem.height + child.elem.depth;
                }
                depth = bottom;
              } else if (params.positionType === "bottom") {
                depth = -params.positionData;
              } else {
                var firstChild = params.children[0];
                if (firstChild.type !== "elem") {
                  throw new Error('First child must have type "elem".');
                }
                if (params.positionType === "shift") {
                  depth = -firstChild.elem.depth - params.positionData;
                } else if (params.positionType === "firstBaseline") {
                  depth = -firstChild.elem.depth;
                } else {
                  throw new Error("Invalid positionType " + params.positionType + ".");
                }
              }
              return {
                children: params.children,
                depth
              };
            };
            var makeVList = function makeVList2(params, options) {
              var _getVListChildrenAndD = getVListChildrenAndDepth(params), children = _getVListChildrenAndD.children, depth = _getVListChildrenAndD.depth;
              var pstrutSize = 0;
              for (var i2 = 0; i2 < children.length; i2++) {
                var child = children[i2];
                if (child.type === "elem") {
                  var elem = child.elem;
                  pstrutSize = Math.max(pstrutSize, elem.maxFontSize, elem.height);
                }
              }
              pstrutSize += 2;
              var pstrut = makeSpan(["pstrut"], []);
              pstrut.style.height = makeEm(pstrutSize);
              var realChildren = [];
              var minPos = depth;
              var maxPos = depth;
              var currPos = depth;
              for (var _i22 = 0; _i22 < children.length; _i22++) {
                var _child = children[_i22];
                if (_child.type === "kern") {
                  currPos += _child.size;
                } else {
                  var _elem = _child.elem;
                  var classes = _child.wrapperClasses || [];
                  var style = _child.wrapperStyle || {};
                  var childWrap = makeSpan(classes, [pstrut, _elem], void 0, style);
                  childWrap.style.top = makeEm(-pstrutSize - currPos - _elem.depth);
                  if (_child.marginLeft) {
                    childWrap.style.marginLeft = _child.marginLeft;
                  }
                  if (_child.marginRight) {
                    childWrap.style.marginRight = _child.marginRight;
                  }
                  realChildren.push(childWrap);
                  currPos += _elem.height + _elem.depth;
                }
                minPos = Math.min(minPos, currPos);
                maxPos = Math.max(maxPos, currPos);
              }
              var vlist = makeSpan(["vlist"], realChildren);
              vlist.style.height = makeEm(maxPos);
              var rows;
              if (minPos < 0) {
                var emptySpan = makeSpan([], []);
                var depthStrut = makeSpan(["vlist"], [emptySpan]);
                depthStrut.style.height = makeEm(-minPos);
                var topStrut = makeSpan(["vlist-s"], [new SymbolNode("\u200B")]);
                rows = [makeSpan(["vlist-r"], [vlist, topStrut]), makeSpan(["vlist-r"], [depthStrut])];
              } else {
                rows = [makeSpan(["vlist-r"], [vlist])];
              }
              var vtable = makeSpan(["vlist-t"], rows);
              if (rows.length === 2) {
                vtable.classes.push("vlist-t2");
              }
              vtable.height = maxPos;
              vtable.depth = -minPos;
              return vtable;
            };
            var makeGlue = function makeGlue2(measurement, options) {
              var rule = makeSpan(["mspace"], [], options);
              var size = calculateSize(measurement, options);
              rule.style.marginRight = makeEm(size);
              return rule;
            };
            var retrieveTextFontName = function retrieveTextFontName2(fontFamily, fontWeight, fontShape) {
              var baseFontName = "";
              switch (fontFamily) {
                case "amsrm":
                  baseFontName = "AMS";
                  break;
                case "textrm":
                  baseFontName = "Main";
                  break;
                case "textsf":
                  baseFontName = "SansSerif";
                  break;
                case "texttt":
                  baseFontName = "Typewriter";
                  break;
                default:
                  baseFontName = fontFamily;
              }
              var fontStylesName;
              if (fontWeight === "textbf" && fontShape === "textit") {
                fontStylesName = "BoldItalic";
              } else if (fontWeight === "textbf") {
                fontStylesName = "Bold";
              } else if (fontWeight === "textit") {
                fontStylesName = "Italic";
              } else {
                fontStylesName = "Regular";
              }
              return baseFontName + "-" + fontStylesName;
            };
            var fontMap = {
              // styles
              "mathbf": {
                variant: "bold",
                fontName: "Main-Bold"
              },
              "mathrm": {
                variant: "normal",
                fontName: "Main-Regular"
              },
              "textit": {
                variant: "italic",
                fontName: "Main-Italic"
              },
              "mathit": {
                variant: "italic",
                fontName: "Main-Italic"
              },
              "mathnormal": {
                variant: "italic",
                fontName: "Math-Italic"
              },
              // "boldsymbol" is missing because they require the use of multiple fonts:
              // Math-BoldItalic and Main-Bold.  This is handled by a special case in
              // makeOrd which ends up calling boldsymbol.
              // families
              "mathbb": {
                variant: "double-struck",
                fontName: "AMS-Regular"
              },
              "mathcal": {
                variant: "script",
                fontName: "Caligraphic-Regular"
              },
              "mathfrak": {
                variant: "fraktur",
                fontName: "Fraktur-Regular"
              },
              "mathscr": {
                variant: "script",
                fontName: "Script-Regular"
              },
              "mathsf": {
                variant: "sans-serif",
                fontName: "SansSerif-Regular"
              },
              "mathtt": {
                variant: "monospace",
                fontName: "Typewriter-Regular"
              }
            };
            var svgData = {
              //   path, width, height
              vec: ["vec", 0.471, 0.714],
              // values from the font glyph
              oiintSize1: ["oiintSize1", 0.957, 0.499],
              // oval to overlay the integrand
              oiintSize2: ["oiintSize2", 1.472, 0.659],
              oiiintSize1: ["oiiintSize1", 1.304, 0.499],
              oiiintSize2: ["oiiintSize2", 1.98, 0.659]
            };
            var staticSvg = function staticSvg2(value, options) {
              var _svgData$value = svgData[value], pathName = _svgData$value[0], width = _svgData$value[1], height = _svgData$value[2];
              var path2 = new PathNode(pathName);
              var svgNode = new SvgNode([path2], {
                "width": makeEm(width),
                "height": makeEm(height),
                // Override CSS rule `.katex svg { width: 100% }`
                "style": "width:" + makeEm(width),
                "viewBox": "0 0 " + 1e3 * width + " " + 1e3 * height,
                "preserveAspectRatio": "xMinYMin"
              });
              var span = makeSvgSpan(["overlay"], [svgNode], options);
              span.height = height;
              span.style.height = makeEm(height);
              span.style.width = makeEm(width);
              return span;
            };
            var buildCommon = {
              fontMap,
              makeSymbol,
              mathsym,
              makeSpan,
              makeSvgSpan,
              makeLineSpan,
              makeAnchor,
              makeFragment,
              wrapFragment,
              makeVList,
              makeOrd,
              makeGlue,
              staticSvg,
              svgData,
              tryCombineChars
            };
            ;
            var thinspace = {
              number: 3,
              unit: "mu"
            };
            var mediumspace = {
              number: 4,
              unit: "mu"
            };
            var thickspace = {
              number: 5,
              unit: "mu"
            };
            var spacings = {
              mord: {
                mop: thinspace,
                mbin: mediumspace,
                mrel: thickspace,
                minner: thinspace
              },
              mop: {
                mord: thinspace,
                mop: thinspace,
                mrel: thickspace,
                minner: thinspace
              },
              mbin: {
                mord: mediumspace,
                mop: mediumspace,
                mopen: mediumspace,
                minner: mediumspace
              },
              mrel: {
                mord: thickspace,
                mop: thickspace,
                mopen: thickspace,
                minner: thickspace
              },
              mopen: {},
              mclose: {
                mop: thinspace,
                mbin: mediumspace,
                mrel: thickspace,
                minner: thinspace
              },
              mpunct: {
                mord: thinspace,
                mop: thinspace,
                mrel: thickspace,
                mopen: thinspace,
                mclose: thinspace,
                mpunct: thinspace,
                minner: thinspace
              },
              minner: {
                mord: thinspace,
                mop: thinspace,
                mbin: mediumspace,
                mrel: thickspace,
                mopen: thinspace,
                mpunct: thinspace,
                minner: thinspace
              }
            };
            var tightSpacings = {
              mord: {
                mop: thinspace
              },
              mop: {
                mord: thinspace,
                mop: thinspace
              },
              mbin: {},
              mrel: {},
              mopen: {},
              mclose: {
                mop: thinspace
              },
              mpunct: {},
              minner: {
                mop: thinspace
              }
            };
            ;
            var _functions = {};
            var _htmlGroupBuilders = {};
            var _mathmlGroupBuilders = {};
            function defineFunction(_ref) {
              var type = _ref.type, names = _ref.names, props = _ref.props, handler = _ref.handler, htmlBuilder2 = _ref.htmlBuilder, mathmlBuilder2 = _ref.mathmlBuilder;
              var data = {
                type,
                numArgs: props.numArgs,
                argTypes: props.argTypes,
                allowedInArgument: !!props.allowedInArgument,
                allowedInText: !!props.allowedInText,
                allowedInMath: props.allowedInMath === void 0 ? true : props.allowedInMath,
                numOptionalArgs: props.numOptionalArgs || 0,
                infix: !!props.infix,
                primitive: !!props.primitive,
                handler
              };
              for (var i2 = 0; i2 < names.length; ++i2) {
                _functions[names[i2]] = data;
              }
              if (type) {
                if (htmlBuilder2) {
                  _htmlGroupBuilders[type] = htmlBuilder2;
                }
                if (mathmlBuilder2) {
                  _mathmlGroupBuilders[type] = mathmlBuilder2;
                }
              }
            }
            function defineFunctionBuilders(_ref2) {
              var type = _ref2.type, htmlBuilder2 = _ref2.htmlBuilder, mathmlBuilder2 = _ref2.mathmlBuilder;
              defineFunction({
                type,
                names: [],
                props: {
                  numArgs: 0
                },
                handler: function handler() {
                  throw new Error("Should never be called.");
                },
                htmlBuilder: htmlBuilder2,
                mathmlBuilder: mathmlBuilder2
              });
            }
            var normalizeArgument = function normalizeArgument2(arg) {
              return arg.type === "ordgroup" && arg.body.length === 1 ? arg.body[0] : arg;
            };
            var ordargument = function ordargument2(arg) {
              return arg.type === "ordgroup" ? arg.body : [arg];
            };
            ;
            var buildHTML_makeSpan = buildCommon.makeSpan;
            var binLeftCanceller = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"];
            var binRightCanceller = ["rightmost", "mrel", "mclose", "mpunct"];
            var styleMap = {
              "display": src_Style.DISPLAY,
              "text": src_Style.TEXT,
              "script": src_Style.SCRIPT,
              "scriptscript": src_Style.SCRIPTSCRIPT
            };
            var DomEnum = {
              mord: "mord",
              mop: "mop",
              mbin: "mbin",
              mrel: "mrel",
              mopen: "mopen",
              mclose: "mclose",
              mpunct: "mpunct",
              minner: "minner"
            };
            var buildExpression = function buildExpression2(expression, options, isRealGroup, surrounding) {
              if (surrounding === void 0) {
                surrounding = [null, null];
              }
              var groups = [];
              for (var i2 = 0; i2 < expression.length; i2++) {
                var output = buildGroup(expression[i2], options);
                if (output instanceof DocumentFragment) {
                  var children = output.children;
                  groups.push.apply(groups, children);
                } else {
                  groups.push(output);
                }
              }
              buildCommon.tryCombineChars(groups);
              if (!isRealGroup) {
                return groups;
              }
              var glueOptions = options;
              if (expression.length === 1) {
                var node = expression[0];
                if (node.type === "sizing") {
                  glueOptions = options.havingSize(node.size);
                } else if (node.type === "styling") {
                  glueOptions = options.havingStyle(styleMap[node.style]);
                }
              }
              var dummyPrev = buildHTML_makeSpan([surrounding[0] || "leftmost"], [], options);
              var dummyNext = buildHTML_makeSpan([surrounding[1] || "rightmost"], [], options);
              var isRoot = isRealGroup === "root";
              traverseNonSpaceNodes(groups, function(node2, prev) {
                var prevType = prev.classes[0];
                var type = node2.classes[0];
                if (prevType === "mbin" && utils.contains(binRightCanceller, type)) {
                  prev.classes[0] = "mord";
                } else if (type === "mbin" && utils.contains(binLeftCanceller, prevType)) {
                  node2.classes[0] = "mord";
                }
              }, {
                node: dummyPrev
              }, dummyNext, isRoot);
              traverseNonSpaceNodes(groups, function(node2, prev) {
                var prevType = getTypeOfDomTree(prev);
                var type = getTypeOfDomTree(node2);
                var space = prevType && type ? node2.hasClass("mtight") ? tightSpacings[prevType][type] : spacings[prevType][type] : null;
                if (space) {
                  return buildCommon.makeGlue(space, glueOptions);
                }
              }, {
                node: dummyPrev
              }, dummyNext, isRoot);
              return groups;
            };
            var traverseNonSpaceNodes = function traverseNonSpaceNodes2(nodes, callback, prev, next, isRoot) {
              if (next) {
                nodes.push(next);
              }
              var i2 = 0;
              for (; i2 < nodes.length; i2++) {
                var node = nodes[i2];
                var partialGroup = checkPartialGroup(node);
                if (partialGroup) {
                  traverseNonSpaceNodes2(partialGroup.children, callback, prev, null, isRoot);
                  continue;
                }
                var nonspace = !node.hasClass("mspace");
                if (nonspace) {
                  var result = callback(node, prev.node);
                  if (result) {
                    if (prev.insertAfter) {
                      prev.insertAfter(result);
                    } else {
                      nodes.unshift(result);
                      i2++;
                    }
                  }
                }
                if (nonspace) {
                  prev.node = node;
                } else if (isRoot && node.hasClass("newline")) {
                  prev.node = buildHTML_makeSpan(["leftmost"]);
                }
                prev.insertAfter = function(index) {
                  return function(n) {
                    nodes.splice(index + 1, 0, n);
                    i2++;
                  };
                }(i2);
              }
              if (next) {
                nodes.pop();
              }
            };
            var checkPartialGroup = function checkPartialGroup2(node) {
              if (node instanceof DocumentFragment || node instanceof Anchor || node instanceof Span && node.hasClass("enclosing")) {
                return node;
              }
              return null;
            };
            var getOutermostNode = function getOutermostNode2(node, side) {
              var partialGroup = checkPartialGroup(node);
              if (partialGroup) {
                var children = partialGroup.children;
                if (children.length) {
                  if (side === "right") {
                    return getOutermostNode2(children[children.length - 1], "right");
                  } else if (side === "left") {
                    return getOutermostNode2(children[0], "left");
                  }
                }
              }
              return node;
            };
            var getTypeOfDomTree = function getTypeOfDomTree2(node, side) {
              if (!node) {
                return null;
              }
              if (side) {
                node = getOutermostNode(node, side);
              }
              return DomEnum[node.classes[0]] || null;
            };
            var makeNullDelimiter = function makeNullDelimiter2(options, classes) {
              var moreClasses = ["nulldelimiter"].concat(options.baseSizingClasses());
              return buildHTML_makeSpan(classes.concat(moreClasses));
            };
            var buildGroup = function buildGroup2(group, options, baseOptions) {
              if (!group) {
                return buildHTML_makeSpan();
              }
              if (_htmlGroupBuilders[group.type]) {
                var groupNode = _htmlGroupBuilders[group.type](group, options);
                if (baseOptions && options.size !== baseOptions.size) {
                  groupNode = buildHTML_makeSpan(options.sizingClasses(baseOptions), [groupNode], options);
                  var multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
                  groupNode.height *= multiplier;
                  groupNode.depth *= multiplier;
                }
                return groupNode;
              } else {
                throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
              }
            };
            function buildHTMLUnbreakable(children, options) {
              var body = buildHTML_makeSpan(["base"], children, options);
              var strut = buildHTML_makeSpan(["strut"]);
              strut.style.height = makeEm(body.height + body.depth);
              if (body.depth) {
                strut.style.verticalAlign = makeEm(-body.depth);
              }
              body.children.unshift(strut);
              return body;
            }
            function buildHTML(tree, options) {
              var tag = null;
              if (tree.length === 1 && tree[0].type === "tag") {
                tag = tree[0].tag;
                tree = tree[0].body;
              }
              var expression = buildExpression(tree, options, "root");
              var eqnNum;
              if (expression.length === 2 && expression[1].hasClass("tag")) {
                eqnNum = expression.pop();
              }
              var children = [];
              var parts = [];
              for (var i2 = 0; i2 < expression.length; i2++) {
                parts.push(expression[i2]);
                if (expression[i2].hasClass("mbin") || expression[i2].hasClass("mrel") || expression[i2].hasClass("allowbreak")) {
                  var nobreak = false;
                  while (i2 < expression.length - 1 && expression[i2 + 1].hasClass("mspace") && !expression[i2 + 1].hasClass("newline")) {
                    i2++;
                    parts.push(expression[i2]);
                    if (expression[i2].hasClass("nobreak")) {
                      nobreak = true;
                    }
                  }
                  if (!nobreak) {
                    children.push(buildHTMLUnbreakable(parts, options));
                    parts = [];
                  }
                } else if (expression[i2].hasClass("newline")) {
                  parts.pop();
                  if (parts.length > 0) {
                    children.push(buildHTMLUnbreakable(parts, options));
                    parts = [];
                  }
                  children.push(expression[i2]);
                }
              }
              if (parts.length > 0) {
                children.push(buildHTMLUnbreakable(parts, options));
              }
              var tagChild;
              if (tag) {
                tagChild = buildHTMLUnbreakable(buildExpression(tag, options, true));
                tagChild.classes = ["tag"];
                children.push(tagChild);
              } else if (eqnNum) {
                children.push(eqnNum);
              }
              var htmlNode = buildHTML_makeSpan(["katex-html"], children);
              htmlNode.setAttribute("aria-hidden", "true");
              if (tagChild) {
                var strut = tagChild.children[0];
                strut.style.height = makeEm(htmlNode.height + htmlNode.depth);
                if (htmlNode.depth) {
                  strut.style.verticalAlign = makeEm(-htmlNode.depth);
                }
              }
              return htmlNode;
            }
            ;
            function newDocumentFragment(children) {
              return new DocumentFragment(children);
            }
            var MathNode = /* @__PURE__ */ function() {
              function MathNode2(type, children, classes) {
                this.type = void 0;
                this.attributes = void 0;
                this.children = void 0;
                this.classes = void 0;
                this.type = type;
                this.attributes = {};
                this.children = children || [];
                this.classes = classes || [];
              }
              var _proto = MathNode2.prototype;
              _proto.setAttribute = function setAttribute(name, value) {
                this.attributes[name] = value;
              };
              _proto.getAttribute = function getAttribute(name) {
                return this.attributes[name];
              };
              _proto.toNode = function toNode() {
                var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                for (var attr in this.attributes) {
                  if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                    node.setAttribute(attr, this.attributes[attr]);
                  }
                }
                if (this.classes.length > 0) {
                  node.className = createClass(this.classes);
                }
                for (var i2 = 0; i2 < this.children.length; i2++) {
                  node.appendChild(this.children[i2].toNode());
                }
                return node;
              };
              _proto.toMarkup = function toMarkup() {
                var markup = "<" + this.type;
                for (var attr in this.attributes) {
                  if (Object.prototype.hasOwnProperty.call(this.attributes, attr)) {
                    markup += " " + attr + '="';
                    markup += utils.escape(this.attributes[attr]);
                    markup += '"';
                  }
                }
                if (this.classes.length > 0) {
                  markup += ' class ="' + utils.escape(createClass(this.classes)) + '"';
                }
                markup += ">";
                for (var i2 = 0; i2 < this.children.length; i2++) {
                  markup += this.children[i2].toMarkup();
                }
                markup += "</" + this.type + ">";
                return markup;
              };
              _proto.toText = function toText() {
                return this.children.map(function(child) {
                  return child.toText();
                }).join("");
              };
              return MathNode2;
            }();
            var TextNode = /* @__PURE__ */ function() {
              function TextNode2(text) {
                this.text = void 0;
                this.text = text;
              }
              var _proto2 = TextNode2.prototype;
              _proto2.toNode = function toNode() {
                return document.createTextNode(this.text);
              };
              _proto2.toMarkup = function toMarkup() {
                return utils.escape(this.toText());
              };
              _proto2.toText = function toText() {
                return this.text;
              };
              return TextNode2;
            }();
            var SpaceNode = /* @__PURE__ */ function() {
              function SpaceNode2(width) {
                this.width = void 0;
                this.character = void 0;
                this.width = width;
                if (width >= 0.05555 && width <= 0.05556) {
                  this.character = "\u200A";
                } else if (width >= 0.1666 && width <= 0.1667) {
                  this.character = "\u2009";
                } else if (width >= 0.2222 && width <= 0.2223) {
                  this.character = "\u2005";
                } else if (width >= 0.2777 && width <= 0.2778) {
                  this.character = "\u2005\u200A";
                } else if (width >= -0.05556 && width <= -0.05555) {
                  this.character = "\u200A\u2063";
                } else if (width >= -0.1667 && width <= -0.1666) {
                  this.character = "\u2009\u2063";
                } else if (width >= -0.2223 && width <= -0.2222) {
                  this.character = "\u205F\u2063";
                } else if (width >= -0.2778 && width <= -0.2777) {
                  this.character = "\u2005\u2063";
                } else {
                  this.character = null;
                }
              }
              var _proto3 = SpaceNode2.prototype;
              _proto3.toNode = function toNode() {
                if (this.character) {
                  return document.createTextNode(this.character);
                } else {
                  var node = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                  node.setAttribute("width", makeEm(this.width));
                  return node;
                }
              };
              _proto3.toMarkup = function toMarkup() {
                if (this.character) {
                  return "<mtext>" + this.character + "</mtext>";
                } else {
                  return '<mspace width="' + makeEm(this.width) + '"/>';
                }
              };
              _proto3.toText = function toText() {
                if (this.character) {
                  return this.character;
                } else {
                  return " ";
                }
              };
              return SpaceNode2;
            }();
            var mathMLTree = {
              MathNode,
              TextNode,
              SpaceNode,
              newDocumentFragment
            };
            ;
            var makeText = function makeText2(text, mode, options) {
              if (src_symbols[mode][text] && src_symbols[mode][text].replace && text.charCodeAt(0) !== 55349 && !(ligatures.hasOwnProperty(text) && options && (options.fontFamily && options.fontFamily.slice(4, 6) === "tt" || options.font && options.font.slice(4, 6) === "tt"))) {
                text = src_symbols[mode][text].replace;
              }
              return new mathMLTree.TextNode(text);
            };
            var makeRow = function makeRow2(body) {
              if (body.length === 1) {
                return body[0];
              } else {
                return new mathMLTree.MathNode("mrow", body);
              }
            };
            var getVariant = function getVariant2(group, options) {
              if (options.fontFamily === "texttt") {
                return "monospace";
              } else if (options.fontFamily === "textsf") {
                if (options.fontShape === "textit" && options.fontWeight === "textbf") {
                  return "sans-serif-bold-italic";
                } else if (options.fontShape === "textit") {
                  return "sans-serif-italic";
                } else if (options.fontWeight === "textbf") {
                  return "bold-sans-serif";
                } else {
                  return "sans-serif";
                }
              } else if (options.fontShape === "textit" && options.fontWeight === "textbf") {
                return "bold-italic";
              } else if (options.fontShape === "textit") {
                return "italic";
              } else if (options.fontWeight === "textbf") {
                return "bold";
              }
              var font = options.font;
              if (!font || font === "mathnormal") {
                return null;
              }
              var mode = group.mode;
              if (font === "mathit") {
                return "italic";
              } else if (font === "boldsymbol") {
                return group.type === "textord" ? "bold" : "bold-italic";
              } else if (font === "mathbf") {
                return "bold";
              } else if (font === "mathbb") {
                return "double-struck";
              } else if (font === "mathfrak") {
                return "fraktur";
              } else if (font === "mathscr" || font === "mathcal") {
                return "script";
              } else if (font === "mathsf") {
                return "sans-serif";
              } else if (font === "mathtt") {
                return "monospace";
              }
              var text = group.text;
              if (utils.contains(["\\imath", "\\jmath"], text)) {
                return null;
              }
              if (src_symbols[mode][text] && src_symbols[mode][text].replace) {
                text = src_symbols[mode][text].replace;
              }
              var fontName = buildCommon.fontMap[font].fontName;
              if (getCharacterMetrics(text, fontName, mode)) {
                return buildCommon.fontMap[font].variant;
              }
              return null;
            };
            var buildMathML_buildExpression = function buildExpression2(expression, options, isOrdgroup) {
              if (expression.length === 1) {
                var group = buildMathML_buildGroup(expression[0], options);
                if (isOrdgroup && group instanceof MathNode && group.type === "mo") {
                  group.setAttribute("lspace", "0em");
                  group.setAttribute("rspace", "0em");
                }
                return [group];
              }
              var groups = [];
              var lastGroup;
              for (var i2 = 0; i2 < expression.length; i2++) {
                var _group = buildMathML_buildGroup(expression[i2], options);
                if (_group instanceof MathNode && lastGroup instanceof MathNode) {
                  if (_group.type === "mtext" && lastGroup.type === "mtext" && _group.getAttribute("mathvariant") === lastGroup.getAttribute("mathvariant")) {
                    var _lastGroup$children;
                    (_lastGroup$children = lastGroup.children).push.apply(_lastGroup$children, _group.children);
                    continue;
                  } else if (_group.type === "mn" && lastGroup.type === "mn") {
                    var _lastGroup$children2;
                    (_lastGroup$children2 = lastGroup.children).push.apply(_lastGroup$children2, _group.children);
                    continue;
                  } else if (_group.type === "mi" && _group.children.length === 1 && lastGroup.type === "mn") {
                    var child = _group.children[0];
                    if (child instanceof TextNode && child.text === ".") {
                      var _lastGroup$children3;
                      (_lastGroup$children3 = lastGroup.children).push.apply(_lastGroup$children3, _group.children);
                      continue;
                    }
                  } else if (lastGroup.type === "mi" && lastGroup.children.length === 1) {
                    var lastChild = lastGroup.children[0];
                    if (lastChild instanceof TextNode && lastChild.text === "\u0338" && (_group.type === "mo" || _group.type === "mi" || _group.type === "mn")) {
                      var _child = _group.children[0];
                      if (_child instanceof TextNode && _child.text.length > 0) {
                        _child.text = _child.text.slice(0, 1) + "\u0338" + _child.text.slice(1);
                        groups.pop();
                      }
                    }
                  }
                }
                groups.push(_group);
                lastGroup = _group;
              }
              return groups;
            };
            var buildExpressionRow = function buildExpressionRow2(expression, options, isOrdgroup) {
              return makeRow(buildMathML_buildExpression(expression, options, isOrdgroup));
            };
            var buildMathML_buildGroup = function buildGroup2(group, options) {
              if (!group) {
                return new mathMLTree.MathNode("mrow");
              }
              if (_mathmlGroupBuilders[group.type]) {
                var result = _mathmlGroupBuilders[group.type](group, options);
                return result;
              } else {
                throw new src_ParseError("Got group of unknown type: '" + group.type + "'");
              }
            };
            function buildMathML(tree, texExpression, options, isDisplayMode, forMathmlOnly) {
              var expression = buildMathML_buildExpression(tree, options);
              var wrapper;
              if (expression.length === 1 && expression[0] instanceof MathNode && utils.contains(["mrow", "mtable"], expression[0].type)) {
                wrapper = expression[0];
              } else {
                wrapper = new mathMLTree.MathNode("mrow", expression);
              }
              var annotation = new mathMLTree.MathNode("annotation", [new mathMLTree.TextNode(texExpression)]);
              annotation.setAttribute("encoding", "application/x-tex");
              var semantics = new mathMLTree.MathNode("semantics", [wrapper, annotation]);
              var math2 = new mathMLTree.MathNode("math", [semantics]);
              math2.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
              if (isDisplayMode) {
                math2.setAttribute("display", "block");
              }
              var wrapperClass = forMathmlOnly ? "katex" : "katex-mathml";
              return buildCommon.makeSpan([wrapperClass], [math2]);
            }
            ;
            var optionsFromSettings = function optionsFromSettings2(settings) {
              return new src_Options({
                style: settings.displayMode ? src_Style.DISPLAY : src_Style.TEXT,
                maxSize: settings.maxSize,
                minRuleThickness: settings.minRuleThickness
              });
            };
            var displayWrap = function displayWrap2(node, settings) {
              if (settings.displayMode) {
                var classes = ["katex-display"];
                if (settings.leqno) {
                  classes.push("leqno");
                }
                if (settings.fleqn) {
                  classes.push("fleqn");
                }
                node = buildCommon.makeSpan(classes, [node]);
              }
              return node;
            };
            var buildTree = function buildTree2(tree, expression, settings) {
              var options = optionsFromSettings(settings);
              var katexNode;
              if (settings.output === "mathml") {
                return buildMathML(tree, expression, options, settings.displayMode, true);
              } else if (settings.output === "html") {
                var htmlNode = buildHTML(tree, options);
                katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
              } else {
                var mathMLNode = buildMathML(tree, expression, options, settings.displayMode, false);
                var _htmlNode = buildHTML(tree, options);
                katexNode = buildCommon.makeSpan(["katex"], [mathMLNode, _htmlNode]);
              }
              return displayWrap(katexNode, settings);
            };
            var buildHTMLTree = function buildHTMLTree2(tree, expression, settings) {
              var options = optionsFromSettings(settings);
              var htmlNode = buildHTML(tree, options);
              var katexNode = buildCommon.makeSpan(["katex"], [htmlNode]);
              return displayWrap(katexNode, settings);
            };
            var src_buildTree = (
              /* unused pure expression or super */
              null
            );
            ;
            var stretchyCodePoint = {
              widehat: "^",
              widecheck: "\u02C7",
              widetilde: "~",
              utilde: "~",
              overleftarrow: "\u2190",
              underleftarrow: "\u2190",
              xleftarrow: "\u2190",
              overrightarrow: "\u2192",
              underrightarrow: "\u2192",
              xrightarrow: "\u2192",
              underbrace: "\u23DF",
              overbrace: "\u23DE",
              overgroup: "\u23E0",
              undergroup: "\u23E1",
              overleftrightarrow: "\u2194",
              underleftrightarrow: "\u2194",
              xleftrightarrow: "\u2194",
              Overrightarrow: "\u21D2",
              xRightarrow: "\u21D2",
              overleftharpoon: "\u21BC",
              xleftharpoonup: "\u21BC",
              overrightharpoon: "\u21C0",
              xrightharpoonup: "\u21C0",
              xLeftarrow: "\u21D0",
              xLeftrightarrow: "\u21D4",
              xhookleftarrow: "\u21A9",
              xhookrightarrow: "\u21AA",
              xmapsto: "\u21A6",
              xrightharpoondown: "\u21C1",
              xleftharpoondown: "\u21BD",
              xrightleftharpoons: "\u21CC",
              xleftrightharpoons: "\u21CB",
              xtwoheadleftarrow: "\u219E",
              xtwoheadrightarrow: "\u21A0",
              xlongequal: "=",
              xtofrom: "\u21C4",
              xrightleftarrows: "\u21C4",
              xrightequilibrium: "\u21CC",
              // Not a perfect match.
              xleftequilibrium: "\u21CB",
              // None better available.
              "\\cdrightarrow": "\u2192",
              "\\cdleftarrow": "\u2190",
              "\\cdlongequal": "="
            };
            var mathMLnode = function mathMLnode2(label) {
              var node = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(stretchyCodePoint[label.replace(/^\\/, "")])]);
              node.setAttribute("stretchy", "true");
              return node;
            };
            var katexImagesData = {
              //   path(s), minWidth, height, align
              overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
              overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
              underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
              underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
              xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
              "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
              // CD minwwidth2.5pc
              xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
              "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
              Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
              xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
              xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
              overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
              xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
              xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
              overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
              xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
              xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
              xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
              "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
              xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
              xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
              overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
              overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
              underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
              underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
              xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
              xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
              xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
              xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
              xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
              xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
              overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
              underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
              overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
              undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
              xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
              xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
              // The next three arrows are from the mhchem package.
              // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
              // document as \xrightarrow or \xrightleftharpoons. Those have
              // min-length = 1.75em, so we set min-length on these next three to match.
              xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
              xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
              xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
            };
            var groupLength = function groupLength2(arg) {
              if (arg.type === "ordgroup") {
                return arg.body.length;
              } else {
                return 1;
              }
            };
            var svgSpan = function svgSpan2(group, options) {
              function buildSvgSpan_() {
                var viewBoxWidth = 4e5;
                var label = group.label.slice(1);
                if (utils.contains(["widehat", "widecheck", "widetilde", "utilde"], label)) {
                  var grp = group;
                  var numChars = groupLength(grp.base);
                  var viewBoxHeight;
                  var pathName;
                  var _height;
                  if (numChars > 5) {
                    if (label === "widehat" || label === "widecheck") {
                      viewBoxHeight = 420;
                      viewBoxWidth = 2364;
                      _height = 0.42;
                      pathName = label + "4";
                    } else {
                      viewBoxHeight = 312;
                      viewBoxWidth = 2340;
                      _height = 0.34;
                      pathName = "tilde4";
                    }
                  } else {
                    var imgIndex = [1, 1, 2, 2, 3, 3][numChars];
                    if (label === "widehat" || label === "widecheck") {
                      viewBoxWidth = [0, 1062, 2364, 2364, 2364][imgIndex];
                      viewBoxHeight = [0, 239, 300, 360, 420][imgIndex];
                      _height = [0, 0.24, 0.3, 0.3, 0.36, 0.42][imgIndex];
                      pathName = label + imgIndex;
                    } else {
                      viewBoxWidth = [0, 600, 1033, 2339, 2340][imgIndex];
                      viewBoxHeight = [0, 260, 286, 306, 312][imgIndex];
                      _height = [0, 0.26, 0.286, 0.3, 0.306, 0.34][imgIndex];
                      pathName = "tilde" + imgIndex;
                    }
                  }
                  var path2 = new PathNode(pathName);
                  var svgNode = new SvgNode([path2], {
                    "width": "100%",
                    "height": makeEm(_height),
                    "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight,
                    "preserveAspectRatio": "none"
                  });
                  return {
                    span: buildCommon.makeSvgSpan([], [svgNode], options),
                    minWidth: 0,
                    height: _height
                  };
                } else {
                  var spans = [];
                  var data = katexImagesData[label];
                  var paths = data[0], _minWidth = data[1], _viewBoxHeight = data[2];
                  var _height2 = _viewBoxHeight / 1e3;
                  var numSvgChildren = paths.length;
                  var widthClasses;
                  var aligns;
                  if (numSvgChildren === 1) {
                    var align1 = data[3];
                    widthClasses = ["hide-tail"];
                    aligns = [align1];
                  } else if (numSvgChildren === 2) {
                    widthClasses = ["halfarrow-left", "halfarrow-right"];
                    aligns = ["xMinYMin", "xMaxYMin"];
                  } else if (numSvgChildren === 3) {
                    widthClasses = ["brace-left", "brace-center", "brace-right"];
                    aligns = ["xMinYMin", "xMidYMin", "xMaxYMin"];
                  } else {
                    throw new Error("Correct katexImagesData or update code here to support\n                    " + numSvgChildren + " children.");
                  }
                  for (var i2 = 0; i2 < numSvgChildren; i2++) {
                    var _path = new PathNode(paths[i2]);
                    var _svgNode = new SvgNode([_path], {
                      "width": "400em",
                      "height": makeEm(_height2),
                      "viewBox": "0 0 " + viewBoxWidth + " " + _viewBoxHeight,
                      "preserveAspectRatio": aligns[i2] + " slice"
                    });
                    var _span = buildCommon.makeSvgSpan([widthClasses[i2]], [_svgNode], options);
                    if (numSvgChildren === 1) {
                      return {
                        span: _span,
                        minWidth: _minWidth,
                        height: _height2
                      };
                    } else {
                      _span.style.height = makeEm(_height2);
                      spans.push(_span);
                    }
                  }
                  return {
                    span: buildCommon.makeSpan(["stretchy"], spans, options),
                    minWidth: _minWidth,
                    height: _height2
                  };
                }
              }
              var _buildSvgSpan_ = buildSvgSpan_(), span = _buildSvgSpan_.span, minWidth = _buildSvgSpan_.minWidth, height = _buildSvgSpan_.height;
              span.height = height;
              span.style.height = makeEm(height);
              if (minWidth > 0) {
                span.style.minWidth = makeEm(minWidth);
              }
              return span;
            };
            var encloseSpan = function encloseSpan2(inner2, label, topPad, bottomPad, options) {
              var img;
              var totalHeight = inner2.height + inner2.depth + topPad + bottomPad;
              if (/fbox|color|angl/.test(label)) {
                img = buildCommon.makeSpan(["stretchy", label], [], options);
                if (label === "fbox") {
                  var color = options.color && options.getColor();
                  if (color) {
                    img.style.borderColor = color;
                  }
                }
              } else {
                var lines = [];
                if (/^[bx]cancel$/.test(label)) {
                  lines.push(new LineNode({
                    "x1": "0",
                    "y1": "0",
                    "x2": "100%",
                    "y2": "100%",
                    "stroke-width": "0.046em"
                  }));
                }
                if (/^x?cancel$/.test(label)) {
                  lines.push(new LineNode({
                    "x1": "0",
                    "y1": "100%",
                    "x2": "100%",
                    "y2": "0",
                    "stroke-width": "0.046em"
                  }));
                }
                var svgNode = new SvgNode(lines, {
                  "width": "100%",
                  "height": makeEm(totalHeight)
                });
                img = buildCommon.makeSvgSpan([], [svgNode], options);
              }
              img.height = totalHeight;
              img.style.height = makeEm(totalHeight);
              return img;
            };
            var stretchy = {
              encloseSpan,
              mathMLnode,
              svgSpan
            };
            ;
            function assertNodeType(node, type) {
              if (!node || node.type !== type) {
                throw new Error("Expected node of type " + type + ", but got " + (node ? "node of type " + node.type : String(node)));
              }
              return node;
            }
            function assertSymbolNodeType(node) {
              var typedNode = checkSymbolNodeType(node);
              if (!typedNode) {
                throw new Error("Expected node of symbol group type, but got " + (node ? "node of type " + node.type : String(node)));
              }
              return typedNode;
            }
            function checkSymbolNodeType(node) {
              if (node && (node.type === "atom" || NON_ATOMS.hasOwnProperty(node.type))) {
                return node;
              }
              return null;
            }
            ;
            var htmlBuilder = function htmlBuilder2(grp, options) {
              var base;
              var group;
              var supSubGroup;
              if (grp && grp.type === "supsub") {
                group = assertNodeType(grp.base, "accent");
                base = group.base;
                grp.base = base;
                supSubGroup = assertSpan(buildGroup(grp, options));
                grp.base = group;
              } else {
                group = assertNodeType(grp, "accent");
                base = group.base;
              }
              var body = buildGroup(base, options.havingCrampedStyle());
              var mustShift = group.isShifty && utils.isCharacterBox(base);
              var skew = 0;
              if (mustShift) {
                var baseChar = utils.getBaseElem(base);
                var baseGroup = buildGroup(baseChar, options.havingCrampedStyle());
                skew = assertSymbolDomNode(baseGroup).skew;
              }
              var accentBelow = group.label === "\\c";
              var clearance = accentBelow ? body.height + body.depth : Math.min(body.height, options.fontMetrics().xHeight);
              var accentBody;
              if (!group.isStretchy) {
                var accent2;
                var width;
                if (group.label === "\\vec") {
                  accent2 = buildCommon.staticSvg("vec", options);
                  width = buildCommon.svgData.vec[1];
                } else {
                  accent2 = buildCommon.makeOrd({
                    mode: group.mode,
                    text: group.label
                  }, options, "textord");
                  accent2 = assertSymbolDomNode(accent2);
                  accent2.italic = 0;
                  width = accent2.width;
                  if (accentBelow) {
                    clearance += accent2.depth;
                  }
                }
                accentBody = buildCommon.makeSpan(["accent-body"], [accent2]);
                var accentFull = group.label === "\\textcircled";
                if (accentFull) {
                  accentBody.classes.push("accent-full");
                  clearance = body.height;
                }
                var left = skew;
                if (!accentFull) {
                  left -= width / 2;
                }
                accentBody.style.left = makeEm(left);
                if (group.label === "\\textcircled") {
                  accentBody.style.top = ".2em";
                }
                accentBody = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: body
                  }, {
                    type: "kern",
                    size: -clearance
                  }, {
                    type: "elem",
                    elem: accentBody
                  }]
                }, options);
              } else {
                accentBody = stretchy.svgSpan(group, options);
                accentBody = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: body
                  }, {
                    type: "elem",
                    elem: accentBody,
                    wrapperClasses: ["svg-align"],
                    wrapperStyle: skew > 0 ? {
                      width: "calc(100% - " + makeEm(2 * skew) + ")",
                      marginLeft: makeEm(2 * skew)
                    } : void 0
                  }]
                }, options);
              }
              var accentWrap = buildCommon.makeSpan(["mord", "accent"], [accentBody], options);
              if (supSubGroup) {
                supSubGroup.children[0] = accentWrap;
                supSubGroup.height = Math.max(accentWrap.height, supSubGroup.height);
                supSubGroup.classes[0] = "mord";
                return supSubGroup;
              } else {
                return accentWrap;
              }
            };
            var mathmlBuilder = function mathmlBuilder2(group, options) {
              var accentNode = group.isStretchy ? stretchy.mathMLnode(group.label) : new mathMLTree.MathNode("mo", [makeText(group.label, group.mode)]);
              var node = new mathMLTree.MathNode("mover", [buildMathML_buildGroup(group.base, options), accentNode]);
              node.setAttribute("accent", "true");
              return node;
            };
            var NON_STRETCHY_ACCENT_REGEX = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(accent2) {
              return "\\" + accent2;
            }).join("|"));
            defineFunction({
              type: "accent",
              names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
              props: {
                numArgs: 1
              },
              handler: function handler(context, args) {
                var base = normalizeArgument(args[0]);
                var isStretchy = !NON_STRETCHY_ACCENT_REGEX.test(context.funcName);
                var isShifty = !isStretchy || context.funcName === "\\widehat" || context.funcName === "\\widetilde" || context.funcName === "\\widecheck";
                return {
                  type: "accent",
                  mode: context.parser.mode,
                  label: context.funcName,
                  isStretchy,
                  isShifty,
                  base
                };
              },
              htmlBuilder,
              mathmlBuilder
            });
            defineFunction({
              type: "accent",
              names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
              props: {
                numArgs: 1,
                allowedInText: true,
                allowedInMath: true,
                // unless in strict mode
                argTypes: ["primitive"]
              },
              handler: function handler(context, args) {
                var base = args[0];
                var mode = context.parser.mode;
                if (mode === "math") {
                  context.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + context.funcName + " works only in text mode");
                  mode = "text";
                }
                return {
                  type: "accent",
                  mode,
                  label: context.funcName,
                  isStretchy: false,
                  isShifty: true,
                  base
                };
              },
              htmlBuilder,
              mathmlBuilder
            });
            ;
            defineFunction({
              type: "accentUnder",
              names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var base = args[0];
                return {
                  type: "accentUnder",
                  mode: parser.mode,
                  label: funcName,
                  base
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var innerGroup = buildGroup(group.base, options);
                var accentBody = stretchy.svgSpan(group, options);
                var kern = group.label === "\\utilde" ? 0.12 : 0;
                var vlist = buildCommon.makeVList({
                  positionType: "top",
                  positionData: innerGroup.height,
                  children: [{
                    type: "elem",
                    elem: accentBody,
                    wrapperClasses: ["svg-align"]
                  }, {
                    type: "kern",
                    size: kern
                  }, {
                    type: "elem",
                    elem: innerGroup
                  }]
                }, options);
                return buildCommon.makeSpan(["mord", "accentunder"], [vlist], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var accentNode = stretchy.mathMLnode(group.label);
                var node = new mathMLTree.MathNode("munder", [buildMathML_buildGroup(group.base, options), accentNode]);
                node.setAttribute("accentunder", "true");
                return node;
              }
            });
            ;
            var paddedNode = function paddedNode2(group) {
              var node = new mathMLTree.MathNode("mpadded", group ? [group] : []);
              node.setAttribute("width", "+0.6em");
              node.setAttribute("lspace", "0.3em");
              return node;
            };
            defineFunction({
              type: "xArrow",
              names: [
                "\\xleftarrow",
                "\\xrightarrow",
                "\\xLeftarrow",
                "\\xRightarrow",
                "\\xleftrightarrow",
                "\\xLeftrightarrow",
                "\\xhookleftarrow",
                "\\xhookrightarrow",
                "\\xmapsto",
                "\\xrightharpoondown",
                "\\xrightharpoonup",
                "\\xleftharpoondown",
                "\\xleftharpoonup",
                "\\xrightleftharpoons",
                "\\xleftrightharpoons",
                "\\xlongequal",
                "\\xtwoheadrightarrow",
                "\\xtwoheadleftarrow",
                "\\xtofrom",
                // The next 3 functions are here to support the mhchem extension.
                // Direct use of these functions is discouraged and may break someday.
                "\\xrightleftarrows",
                "\\xrightequilibrium",
                "\\xleftequilibrium",
                // The next 3 functions are here only to support the {CD} environment.
                "\\\\cdrightarrow",
                "\\\\cdleftarrow",
                "\\\\cdlongequal"
              ],
              props: {
                numArgs: 1,
                numOptionalArgs: 1
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser, funcName = _ref.funcName;
                return {
                  type: "xArrow",
                  mode: parser.mode,
                  label: funcName,
                  body: args[0],
                  below: optArgs[0]
                };
              },
              // Flow is unable to correctly infer the type of `group`, even though it's
              // unambiguously determined from the passed-in `type` above.
              htmlBuilder: function htmlBuilder2(group, options) {
                var style = options.style;
                var newOptions = options.havingStyle(style.sup());
                var upperGroup = buildCommon.wrapFragment(buildGroup(group.body, newOptions, options), options);
                var arrowPrefix = group.label.slice(0, 2) === "\\x" ? "x" : "cd";
                upperGroup.classes.push(arrowPrefix + "-arrow-pad");
                var lowerGroup;
                if (group.below) {
                  newOptions = options.havingStyle(style.sub());
                  lowerGroup = buildCommon.wrapFragment(buildGroup(group.below, newOptions, options), options);
                  lowerGroup.classes.push(arrowPrefix + "-arrow-pad");
                }
                var arrowBody = stretchy.svgSpan(group, options);
                var arrowShift = -options.fontMetrics().axisHeight + 0.5 * arrowBody.height;
                var upperShift = -options.fontMetrics().axisHeight - 0.5 * arrowBody.height - 0.111;
                if (upperGroup.depth > 0.25 || group.label === "\\xleftequilibrium") {
                  upperShift -= upperGroup.depth;
                }
                var vlist;
                if (lowerGroup) {
                  var lowerShift = -options.fontMetrics().axisHeight + lowerGroup.height + 0.5 * arrowBody.height + 0.111;
                  vlist = buildCommon.makeVList({
                    positionType: "individualShift",
                    children: [{
                      type: "elem",
                      elem: upperGroup,
                      shift: upperShift
                    }, {
                      type: "elem",
                      elem: arrowBody,
                      shift: arrowShift
                    }, {
                      type: "elem",
                      elem: lowerGroup,
                      shift: lowerShift
                    }]
                  }, options);
                } else {
                  vlist = buildCommon.makeVList({
                    positionType: "individualShift",
                    children: [{
                      type: "elem",
                      elem: upperGroup,
                      shift: upperShift
                    }, {
                      type: "elem",
                      elem: arrowBody,
                      shift: arrowShift
                    }]
                  }, options);
                }
                vlist.children[0].children[0].children[1].classes.push("svg-align");
                return buildCommon.makeSpan(["mrel", "x-arrow"], [vlist], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var arrowNode = stretchy.mathMLnode(group.label);
                arrowNode.setAttribute("minsize", group.label.charAt(0) === "x" ? "1.75em" : "3.0em");
                var node;
                if (group.body) {
                  var upperNode = paddedNode(buildMathML_buildGroup(group.body, options));
                  if (group.below) {
                    var lowerNode = paddedNode(buildMathML_buildGroup(group.below, options));
                    node = new mathMLTree.MathNode("munderover", [arrowNode, lowerNode, upperNode]);
                  } else {
                    node = new mathMLTree.MathNode("mover", [arrowNode, upperNode]);
                  }
                } else if (group.below) {
                  var _lowerNode = paddedNode(buildMathML_buildGroup(group.below, options));
                  node = new mathMLTree.MathNode("munder", [arrowNode, _lowerNode]);
                } else {
                  node = paddedNode();
                  node = new mathMLTree.MathNode("mover", [arrowNode, node]);
                }
                return node;
              }
            });
            ;
            var mclass_makeSpan = buildCommon.makeSpan;
            function mclass_htmlBuilder(group, options) {
              var elements = buildExpression(group.body, options, true);
              return mclass_makeSpan([group.mclass], elements, options);
            }
            function mclass_mathmlBuilder(group, options) {
              var node;
              var inner2 = buildMathML_buildExpression(group.body, options);
              if (group.mclass === "minner") {
                node = new mathMLTree.MathNode("mpadded", inner2);
              } else if (group.mclass === "mord") {
                if (group.isCharacterBox) {
                  node = inner2[0];
                  node.type = "mi";
                } else {
                  node = new mathMLTree.MathNode("mi", inner2);
                }
              } else {
                if (group.isCharacterBox) {
                  node = inner2[0];
                  node.type = "mo";
                } else {
                  node = new mathMLTree.MathNode("mo", inner2);
                }
                if (group.mclass === "mbin") {
                  node.attributes.lspace = "0.22em";
                  node.attributes.rspace = "0.22em";
                } else if (group.mclass === "mpunct") {
                  node.attributes.lspace = "0em";
                  node.attributes.rspace = "0.17em";
                } else if (group.mclass === "mopen" || group.mclass === "mclose") {
                  node.attributes.lspace = "0em";
                  node.attributes.rspace = "0em";
                } else if (group.mclass === "minner") {
                  node.attributes.lspace = "0.0556em";
                  node.attributes.width = "+0.1111em";
                }
              }
              return node;
            }
            defineFunction({
              type: "mclass",
              names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
              props: {
                numArgs: 1,
                primitive: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var body = args[0];
                return {
                  type: "mclass",
                  mode: parser.mode,
                  mclass: "m" + funcName.slice(5),
                  // TODO(kevinb): don't prefix with 'm'
                  body: ordargument(body),
                  isCharacterBox: utils.isCharacterBox(body)
                };
              },
              htmlBuilder: mclass_htmlBuilder,
              mathmlBuilder: mclass_mathmlBuilder
            });
            var binrelClass = function binrelClass2(arg) {
              var atom = arg.type === "ordgroup" && arg.body.length ? arg.body[0] : arg;
              if (atom.type === "atom" && (atom.family === "bin" || atom.family === "rel")) {
                return "m" + atom.family;
              } else {
                return "mord";
              }
            };
            defineFunction({
              type: "mclass",
              names: ["\\@binrel"],
              props: {
                numArgs: 2
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser;
                return {
                  type: "mclass",
                  mode: parser.mode,
                  mclass: binrelClass(args[0]),
                  body: ordargument(args[1]),
                  isCharacterBox: utils.isCharacterBox(args[1])
                };
              }
            });
            defineFunction({
              type: "mclass",
              names: ["\\stackrel", "\\overset", "\\underset"],
              props: {
                numArgs: 2
              },
              handler: function handler(_ref3, args) {
                var parser = _ref3.parser, funcName = _ref3.funcName;
                var baseArg = args[1];
                var shiftedArg = args[0];
                var mclass;
                if (funcName !== "\\stackrel") {
                  mclass = binrelClass(baseArg);
                } else {
                  mclass = "mrel";
                }
                var baseOp = {
                  type: "op",
                  mode: baseArg.mode,
                  limits: true,
                  alwaysHandleSupSub: true,
                  parentIsSupSub: false,
                  symbol: false,
                  suppressBaseShift: funcName !== "\\stackrel",
                  body: ordargument(baseArg)
                };
                var supsub = {
                  type: "supsub",
                  mode: shiftedArg.mode,
                  base: baseOp,
                  sup: funcName === "\\underset" ? null : shiftedArg,
                  sub: funcName === "\\underset" ? shiftedArg : null
                };
                return {
                  type: "mclass",
                  mode: parser.mode,
                  mclass,
                  body: [supsub],
                  isCharacterBox: utils.isCharacterBox(supsub)
                };
              },
              htmlBuilder: mclass_htmlBuilder,
              mathmlBuilder: mclass_mathmlBuilder
            });
            ;
            defineFunction({
              type: "pmb",
              names: ["\\pmb"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                return {
                  type: "pmb",
                  mode: parser.mode,
                  mclass: binrelClass(args[0]),
                  body: ordargument(args[0])
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var elements = buildExpression(group.body, options, true);
                var node = buildCommon.makeSpan([group.mclass], elements, options);
                node.style.textShadow = "0.02em 0.01em 0.04px";
                return node;
              },
              mathmlBuilder: function mathmlBuilder2(group, style) {
                var inner2 = buildMathML_buildExpression(group.body, style);
                var node = new mathMLTree.MathNode("mstyle", inner2);
                node.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px");
                return node;
              }
            });
            ;
            var cdArrowFunctionName = {
              ">": "\\\\cdrightarrow",
              "<": "\\\\cdleftarrow",
              "=": "\\\\cdlongequal",
              "A": "\\uparrow",
              "V": "\\downarrow",
              "|": "\\Vert",
              ".": "no arrow"
            };
            var newCell = function newCell2() {
              return {
                type: "styling",
                body: [],
                mode: "math",
                style: "display"
              };
            };
            var isStartOfArrow = function isStartOfArrow2(node) {
              return node.type === "textord" && node.text === "@";
            };
            var isLabelEnd = function isLabelEnd2(node, endChar) {
              return (node.type === "mathord" || node.type === "atom") && node.text === endChar;
            };
            function cdArrow(arrowChar, labels, parser) {
              var funcName = cdArrowFunctionName[arrowChar];
              switch (funcName) {
                case "\\\\cdrightarrow":
                case "\\\\cdleftarrow":
                  return parser.callFunction(funcName, [labels[0]], [labels[1]]);
                case "\\uparrow":
                case "\\downarrow": {
                  var leftLabel = parser.callFunction("\\\\cdleft", [labels[0]], []);
                  var bareArrow = {
                    type: "atom",
                    text: funcName,
                    mode: "math",
                    family: "rel"
                  };
                  var sizedArrow = parser.callFunction("\\Big", [bareArrow], []);
                  var rightLabel = parser.callFunction("\\\\cdright", [labels[1]], []);
                  var arrowGroup = {
                    type: "ordgroup",
                    mode: "math",
                    body: [leftLabel, sizedArrow, rightLabel]
                  };
                  return parser.callFunction("\\\\cdparent", [arrowGroup], []);
                }
                case "\\\\cdlongequal":
                  return parser.callFunction("\\\\cdlongequal", [], []);
                case "\\Vert": {
                  var arrow = {
                    type: "textord",
                    text: "\\Vert",
                    mode: "math"
                  };
                  return parser.callFunction("\\Big", [arrow], []);
                }
                default:
                  return {
                    type: "textord",
                    text: " ",
                    mode: "math"
                  };
              }
            }
            function parseCD(parser) {
              var parsedRows = [];
              parser.gullet.beginGroup();
              parser.gullet.macros.set("\\cr", "\\\\\\relax");
              parser.gullet.beginGroup();
              while (true) {
                parsedRows.push(parser.parseExpression(false, "\\\\"));
                parser.gullet.endGroup();
                parser.gullet.beginGroup();
                var next = parser.fetch().text;
                if (next === "&" || next === "\\\\") {
                  parser.consume();
                } else if (next === "\\end") {
                  if (parsedRows[parsedRows.length - 1].length === 0) {
                    parsedRows.pop();
                  }
                  break;
                } else {
                  throw new src_ParseError("Expected \\\\ or \\cr or \\end", parser.nextToken);
                }
              }
              var row = [];
              var body = [row];
              for (var i2 = 0; i2 < parsedRows.length; i2++) {
                var rowNodes = parsedRows[i2];
                var cell = newCell();
                for (var j = 0; j < rowNodes.length; j++) {
                  if (!isStartOfArrow(rowNodes[j])) {
                    cell.body.push(rowNodes[j]);
                  } else {
                    row.push(cell);
                    j += 1;
                    var arrowChar = assertSymbolNodeType(rowNodes[j]).text;
                    var labels = new Array(2);
                    labels[0] = {
                      type: "ordgroup",
                      mode: "math",
                      body: []
                    };
                    labels[1] = {
                      type: "ordgroup",
                      mode: "math",
                      body: []
                    };
                    if ("=|.".indexOf(arrowChar) > -1) {
                    } else if ("<>AV".indexOf(arrowChar) > -1) {
                      for (var labelNum = 0; labelNum < 2; labelNum++) {
                        var inLabel = true;
                        for (var k = j + 1; k < rowNodes.length; k++) {
                          if (isLabelEnd(rowNodes[k], arrowChar)) {
                            inLabel = false;
                            j = k;
                            break;
                          }
                          if (isStartOfArrow(rowNodes[k])) {
                            throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[k]);
                          }
                          labels[labelNum].body.push(rowNodes[k]);
                        }
                        if (inLabel) {
                          throw new src_ParseError("Missing a " + arrowChar + " character to complete a CD arrow.", rowNodes[j]);
                        }
                      }
                    } else {
                      throw new src_ParseError('Expected one of "<>AV=|." after @', rowNodes[j]);
                    }
                    var arrow = cdArrow(arrowChar, labels, parser);
                    var wrappedArrow = {
                      type: "styling",
                      body: [arrow],
                      mode: "math",
                      style: "display"
                      // CD is always displaystyle.
                    };
                    row.push(wrappedArrow);
                    cell = newCell();
                  }
                }
                if (i2 % 2 === 0) {
                  row.push(cell);
                } else {
                  row.shift();
                }
                row = [];
                body.push(row);
              }
              parser.gullet.endGroup();
              parser.gullet.endGroup();
              var cols = new Array(body[0].length).fill({
                type: "align",
                align: "c",
                pregap: 0.25,
                // CD package sets \enskip between columns.
                postgap: 0.25
                // So pre and post each get half an \enskip, i.e. 0.25em.
              });
              return {
                type: "array",
                mode: "math",
                body,
                arraystretch: 1,
                addJot: true,
                rowGaps: [null],
                cols,
                colSeparationType: "CD",
                hLinesBeforeRow: new Array(body.length + 1).fill([])
              };
            }
            defineFunction({
              type: "cdlabel",
              names: ["\\\\cdleft", "\\\\cdright"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                return {
                  type: "cdlabel",
                  mode: parser.mode,
                  side: funcName.slice(4),
                  label: args[0]
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var newOptions = options.havingStyle(options.style.sup());
                var label = buildCommon.wrapFragment(buildGroup(group.label, newOptions, options), options);
                label.classes.push("cd-label-" + group.side);
                label.style.bottom = makeEm(0.8 - label.depth);
                label.height = 0;
                label.depth = 0;
                return label;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var label = new mathMLTree.MathNode("mrow", [buildMathML_buildGroup(group.label, options)]);
                label = new mathMLTree.MathNode("mpadded", [label]);
                label.setAttribute("width", "0");
                if (group.side === "left") {
                  label.setAttribute("lspace", "-1width");
                }
                label.setAttribute("voffset", "0.7em");
                label = new mathMLTree.MathNode("mstyle", [label]);
                label.setAttribute("displaystyle", "false");
                label.setAttribute("scriptlevel", "1");
                return label;
              }
            });
            defineFunction({
              type: "cdlabelparent",
              names: ["\\\\cdparent"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser;
                return {
                  type: "cdlabelparent",
                  mode: parser.mode,
                  fragment: args[0]
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var parent = buildCommon.wrapFragment(buildGroup(group.fragment, options), options);
                parent.classes.push("cd-vert-arrow");
                return parent;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                return new mathMLTree.MathNode("mrow", [buildMathML_buildGroup(group.fragment, options)]);
              }
            });
            ;
            defineFunction({
              type: "textord",
              names: ["\\@char"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                var arg = assertNodeType(args[0], "ordgroup");
                var group = arg.body;
                var number = "";
                for (var i2 = 0; i2 < group.length; i2++) {
                  var node = assertNodeType(group[i2], "textord");
                  number += node.text;
                }
                var code = parseInt(number);
                var text;
                if (isNaN(code)) {
                  throw new src_ParseError("\\@char has non-numeric argument " + number);
                } else if (code < 0 || code >= 1114111) {
                  throw new src_ParseError("\\@char with invalid code point " + number);
                } else if (code <= 65535) {
                  text = String.fromCharCode(code);
                } else {
                  code -= 65536;
                  text = String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
                }
                return {
                  type: "textord",
                  mode: parser.mode,
                  text
                };
              }
            });
            ;
            var color_htmlBuilder = function htmlBuilder2(group, options) {
              var elements = buildExpression(group.body, options.withColor(group.color), false);
              return buildCommon.makeFragment(elements);
            };
            var color_mathmlBuilder = function mathmlBuilder2(group, options) {
              var inner2 = buildMathML_buildExpression(group.body, options.withColor(group.color));
              var node = new mathMLTree.MathNode("mstyle", inner2);
              node.setAttribute("mathcolor", group.color);
              return node;
            };
            defineFunction({
              type: "color",
              names: ["\\textcolor"],
              props: {
                numArgs: 2,
                allowedInText: true,
                argTypes: ["color", "original"]
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                var color = assertNodeType(args[0], "color-token").color;
                var body = args[1];
                return {
                  type: "color",
                  mode: parser.mode,
                  color,
                  body: ordargument(body)
                };
              },
              htmlBuilder: color_htmlBuilder,
              mathmlBuilder: color_mathmlBuilder
            });
            defineFunction({
              type: "color",
              names: ["\\color"],
              props: {
                numArgs: 1,
                allowedInText: true,
                argTypes: ["color"]
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser, breakOnTokenText = _ref2.breakOnTokenText;
                var color = assertNodeType(args[0], "color-token").color;
                parser.gullet.macros.set("\\current@color", color);
                var body = parser.parseExpression(true, breakOnTokenText);
                return {
                  type: "color",
                  mode: parser.mode,
                  color,
                  body
                };
              },
              htmlBuilder: color_htmlBuilder,
              mathmlBuilder: color_mathmlBuilder
            });
            ;
            defineFunction({
              type: "cr",
              names: ["\\\\"],
              props: {
                numArgs: 0,
                numOptionalArgs: 0,
                allowedInText: true
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser;
                var size = parser.gullet.future().text === "[" ? parser.parseSizeGroup(true) : null;
                var newLine = !parser.settings.displayMode || !parser.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
                return {
                  type: "cr",
                  mode: parser.mode,
                  newLine,
                  size: size && assertNodeType(size, "size").value
                };
              },
              // The following builders are called only at the top level,
              // not within tabular/array environments.
              htmlBuilder: function htmlBuilder2(group, options) {
                var span = buildCommon.makeSpan(["mspace"], [], options);
                if (group.newLine) {
                  span.classes.push("newline");
                  if (group.size) {
                    span.style.marginTop = makeEm(calculateSize(group.size, options));
                  }
                }
                return span;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mspace");
                if (group.newLine) {
                  node.setAttribute("linebreak", "newline");
                  if (group.size) {
                    node.setAttribute("height", makeEm(calculateSize(group.size, options)));
                  }
                }
                return node;
              }
            });
            ;
            var globalMap = {
              "\\global": "\\global",
              "\\long": "\\\\globallong",
              "\\\\globallong": "\\\\globallong",
              "\\def": "\\gdef",
              "\\gdef": "\\gdef",
              "\\edef": "\\xdef",
              "\\xdef": "\\xdef",
              "\\let": "\\\\globallet",
              "\\futurelet": "\\\\globalfuture"
            };
            var checkControlSequence = function checkControlSequence2(tok) {
              var name = tok.text;
              if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) {
                throw new src_ParseError("Expected a control sequence", tok);
              }
              return name;
            };
            var getRHS = function getRHS2(parser) {
              var tok = parser.gullet.popToken();
              if (tok.text === "=") {
                tok = parser.gullet.popToken();
                if (tok.text === " ") {
                  tok = parser.gullet.popToken();
                }
              }
              return tok;
            };
            var letCommand = function letCommand2(parser, name, tok, global) {
              var macro = parser.gullet.macros.get(tok.text);
              if (macro == null) {
                tok.noexpand = true;
                macro = {
                  tokens: [tok],
                  numArgs: 0,
                  // reproduce the same behavior in expansion
                  unexpandable: !parser.gullet.isExpandable(tok.text)
                };
              }
              parser.gullet.macros.set(name, macro, global);
            };
            defineFunction({
              type: "internal",
              names: [
                "\\global",
                "\\long",
                "\\\\globallong"
                // can’t be entered directly
              ],
              props: {
                numArgs: 0,
                allowedInText: true
              },
              handler: function handler(_ref) {
                var parser = _ref.parser, funcName = _ref.funcName;
                parser.consumeSpaces();
                var token = parser.fetch();
                if (globalMap[token.text]) {
                  if (funcName === "\\global" || funcName === "\\\\globallong") {
                    token.text = globalMap[token.text];
                  }
                  return assertNodeType(parser.parseFunction(), "internal");
                }
                throw new src_ParseError("Invalid token after macro prefix", token);
              }
            });
            defineFunction({
              type: "internal",
              names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
              props: {
                numArgs: 0,
                allowedInText: true,
                primitive: true
              },
              handler: function handler(_ref2) {
                var parser = _ref2.parser, funcName = _ref2.funcName;
                var tok = parser.gullet.popToken();
                var name = tok.text;
                if (/^(?:[\\{}$&#^_]|EOF)$/.test(name)) {
                  throw new src_ParseError("Expected a control sequence", tok);
                }
                var numArgs = 0;
                var insert;
                var delimiters2 = [[]];
                while (parser.gullet.future().text !== "{") {
                  tok = parser.gullet.popToken();
                  if (tok.text === "#") {
                    if (parser.gullet.future().text === "{") {
                      insert = parser.gullet.future();
                      delimiters2[numArgs].push("{");
                      break;
                    }
                    tok = parser.gullet.popToken();
                    if (!/^[1-9]$/.test(tok.text)) {
                      throw new src_ParseError('Invalid argument number "' + tok.text + '"');
                    }
                    if (parseInt(tok.text) !== numArgs + 1) {
                      throw new src_ParseError('Argument number "' + tok.text + '" out of order');
                    }
                    numArgs++;
                    delimiters2.push([]);
                  } else if (tok.text === "EOF") {
                    throw new src_ParseError("Expected a macro definition");
                  } else {
                    delimiters2[numArgs].push(tok.text);
                  }
                }
                var _parser$gullet$consum = parser.gullet.consumeArg(), tokens = _parser$gullet$consum.tokens;
                if (insert) {
                  tokens.unshift(insert);
                }
                if (funcName === "\\edef" || funcName === "\\xdef") {
                  tokens = parser.gullet.expandTokens(tokens);
                  tokens.reverse();
                }
                parser.gullet.macros.set(name, {
                  tokens,
                  numArgs,
                  delimiters: delimiters2
                }, funcName === globalMap[funcName]);
                return {
                  type: "internal",
                  mode: parser.mode
                };
              }
            });
            defineFunction({
              type: "internal",
              names: [
                "\\let",
                "\\\\globallet"
                // can’t be entered directly
              ],
              props: {
                numArgs: 0,
                allowedInText: true,
                primitive: true
              },
              handler: function handler(_ref3) {
                var parser = _ref3.parser, funcName = _ref3.funcName;
                var name = checkControlSequence(parser.gullet.popToken());
                parser.gullet.consumeSpaces();
                var tok = getRHS(parser);
                letCommand(parser, name, tok, funcName === "\\\\globallet");
                return {
                  type: "internal",
                  mode: parser.mode
                };
              }
            });
            defineFunction({
              type: "internal",
              names: [
                "\\futurelet",
                "\\\\globalfuture"
                // can’t be entered directly
              ],
              props: {
                numArgs: 0,
                allowedInText: true,
                primitive: true
              },
              handler: function handler(_ref4) {
                var parser = _ref4.parser, funcName = _ref4.funcName;
                var name = checkControlSequence(parser.gullet.popToken());
                var middle = parser.gullet.popToken();
                var tok = parser.gullet.popToken();
                letCommand(parser, name, tok, funcName === "\\\\globalfuture");
                parser.gullet.pushToken(tok);
                parser.gullet.pushToken(middle);
                return {
                  type: "internal",
                  mode: parser.mode
                };
              }
            });
            ;
            var getMetrics = function getMetrics2(symbol, font, mode) {
              var replace = src_symbols.math[symbol] && src_symbols.math[symbol].replace;
              var metrics = getCharacterMetrics(replace || symbol, font, mode);
              if (!metrics) {
                throw new Error("Unsupported symbol " + symbol + " and font size " + font + ".");
              }
              return metrics;
            };
            var styleWrap = function styleWrap2(delim, toStyle, options, classes) {
              var newOptions = options.havingBaseStyle(toStyle);
              var span = buildCommon.makeSpan(classes.concat(newOptions.sizingClasses(options)), [delim], options);
              var delimSizeMultiplier = newOptions.sizeMultiplier / options.sizeMultiplier;
              span.height *= delimSizeMultiplier;
              span.depth *= delimSizeMultiplier;
              span.maxFontSize = newOptions.sizeMultiplier;
              return span;
            };
            var centerSpan = function centerSpan2(span, options, style) {
              var newOptions = options.havingBaseStyle(style);
              var shift = (1 - options.sizeMultiplier / newOptions.sizeMultiplier) * options.fontMetrics().axisHeight;
              span.classes.push("delimcenter");
              span.style.top = makeEm(shift);
              span.height -= shift;
              span.depth += shift;
            };
            var makeSmallDelim = function makeSmallDelim2(delim, style, center, options, mode, classes) {
              var text = buildCommon.makeSymbol(delim, "Main-Regular", mode, options);
              var span = styleWrap(text, style, options, classes);
              if (center) {
                centerSpan(span, options, style);
              }
              return span;
            };
            var mathrmSize = function mathrmSize2(value, size, mode, options) {
              return buildCommon.makeSymbol(value, "Size" + size + "-Regular", mode, options);
            };
            var makeLargeDelim = function makeLargeDelim2(delim, size, center, options, mode, classes) {
              var inner2 = mathrmSize(delim, size, mode, options);
              var span = styleWrap(buildCommon.makeSpan(["delimsizing", "size" + size], [inner2], options), src_Style.TEXT, options, classes);
              if (center) {
                centerSpan(span, options, src_Style.TEXT);
              }
              return span;
            };
            var makeGlyphSpan = function makeGlyphSpan2(symbol, font, mode) {
              var sizeClass;
              if (font === "Size1-Regular") {
                sizeClass = "delim-size1";
              } else {
                sizeClass = "delim-size4";
              }
              var corner = buildCommon.makeSpan(["delimsizinginner", sizeClass], [buildCommon.makeSpan([], [buildCommon.makeSymbol(symbol, font, mode)])]);
              return {
                type: "elem",
                elem: corner
              };
            };
            var makeInner = function makeInner2(ch2, height, options) {
              var width = fontMetricsData["Size4-Regular"][ch2.charCodeAt(0)] ? fontMetricsData["Size4-Regular"][ch2.charCodeAt(0)][4] : fontMetricsData["Size1-Regular"][ch2.charCodeAt(0)][4];
              var path2 = new PathNode("inner", innerPath(ch2, Math.round(1e3 * height)));
              var svgNode = new SvgNode([path2], {
                "width": makeEm(width),
                "height": makeEm(height),
                // Override CSS rule `.katex svg { width: 100% }`
                "style": "width:" + makeEm(width),
                "viewBox": "0 0 " + 1e3 * width + " " + Math.round(1e3 * height),
                "preserveAspectRatio": "xMinYMin"
              });
              var span = buildCommon.makeSvgSpan([], [svgNode], options);
              span.height = height;
              span.style.height = makeEm(height);
              span.style.width = makeEm(width);
              return {
                type: "elem",
                elem: span
              };
            };
            var lapInEms = 8e-3;
            var lap = {
              type: "kern",
              size: -1 * lapInEms
            };
            var verts = ["|", "\\lvert", "\\rvert", "\\vert"];
            var doubleVerts = ["\\|", "\\lVert", "\\rVert", "\\Vert"];
            var makeStackedDelim = function makeStackedDelim2(delim, heightTotal, center, options, mode, classes) {
              var top;
              var middle;
              var repeat;
              var bottom;
              var svgLabel = "";
              var viewBoxWidth = 0;
              top = repeat = bottom = delim;
              middle = null;
              var font = "Size1-Regular";
              if (delim === "\\uparrow") {
                repeat = bottom = "\u23D0";
              } else if (delim === "\\Uparrow") {
                repeat = bottom = "\u2016";
              } else if (delim === "\\downarrow") {
                top = repeat = "\u23D0";
              } else if (delim === "\\Downarrow") {
                top = repeat = "\u2016";
              } else if (delim === "\\updownarrow") {
                top = "\\uparrow";
                repeat = "\u23D0";
                bottom = "\\downarrow";
              } else if (delim === "\\Updownarrow") {
                top = "\\Uparrow";
                repeat = "\u2016";
                bottom = "\\Downarrow";
              } else if (utils.contains(verts, delim)) {
                repeat = "\u2223";
                svgLabel = "vert";
                viewBoxWidth = 333;
              } else if (utils.contains(doubleVerts, delim)) {
                repeat = "\u2225";
                svgLabel = "doublevert";
                viewBoxWidth = 556;
              } else if (delim === "[" || delim === "\\lbrack") {
                top = "\u23A1";
                repeat = "\u23A2";
                bottom = "\u23A3";
                font = "Size4-Regular";
                svgLabel = "lbrack";
                viewBoxWidth = 667;
              } else if (delim === "]" || delim === "\\rbrack") {
                top = "\u23A4";
                repeat = "\u23A5";
                bottom = "\u23A6";
                font = "Size4-Regular";
                svgLabel = "rbrack";
                viewBoxWidth = 667;
              } else if (delim === "\\lfloor" || delim === "\u230A") {
                repeat = top = "\u23A2";
                bottom = "\u23A3";
                font = "Size4-Regular";
                svgLabel = "lfloor";
                viewBoxWidth = 667;
              } else if (delim === "\\lceil" || delim === "\u2308") {
                top = "\u23A1";
                repeat = bottom = "\u23A2";
                font = "Size4-Regular";
                svgLabel = "lceil";
                viewBoxWidth = 667;
              } else if (delim === "\\rfloor" || delim === "\u230B") {
                repeat = top = "\u23A5";
                bottom = "\u23A6";
                font = "Size4-Regular";
                svgLabel = "rfloor";
                viewBoxWidth = 667;
              } else if (delim === "\\rceil" || delim === "\u2309") {
                top = "\u23A4";
                repeat = bottom = "\u23A5";
                font = "Size4-Regular";
                svgLabel = "rceil";
                viewBoxWidth = 667;
              } else if (delim === "(" || delim === "\\lparen") {
                top = "\u239B";
                repeat = "\u239C";
                bottom = "\u239D";
                font = "Size4-Regular";
                svgLabel = "lparen";
                viewBoxWidth = 875;
              } else if (delim === ")" || delim === "\\rparen") {
                top = "\u239E";
                repeat = "\u239F";
                bottom = "\u23A0";
                font = "Size4-Regular";
                svgLabel = "rparen";
                viewBoxWidth = 875;
              } else if (delim === "\\{" || delim === "\\lbrace") {
                top = "\u23A7";
                middle = "\u23A8";
                bottom = "\u23A9";
                repeat = "\u23AA";
                font = "Size4-Regular";
              } else if (delim === "\\}" || delim === "\\rbrace") {
                top = "\u23AB";
                middle = "\u23AC";
                bottom = "\u23AD";
                repeat = "\u23AA";
                font = "Size4-Regular";
              } else if (delim === "\\lgroup" || delim === "\u27EE") {
                top = "\u23A7";
                bottom = "\u23A9";
                repeat = "\u23AA";
                font = "Size4-Regular";
              } else if (delim === "\\rgroup" || delim === "\u27EF") {
                top = "\u23AB";
                bottom = "\u23AD";
                repeat = "\u23AA";
                font = "Size4-Regular";
              } else if (delim === "\\lmoustache" || delim === "\u23B0") {
                top = "\u23A7";
                bottom = "\u23AD";
                repeat = "\u23AA";
                font = "Size4-Regular";
              } else if (delim === "\\rmoustache" || delim === "\u23B1") {
                top = "\u23AB";
                bottom = "\u23A9";
                repeat = "\u23AA";
                font = "Size4-Regular";
              }
              var topMetrics = getMetrics(top, font, mode);
              var topHeightTotal = topMetrics.height + topMetrics.depth;
              var repeatMetrics = getMetrics(repeat, font, mode);
              var repeatHeightTotal = repeatMetrics.height + repeatMetrics.depth;
              var bottomMetrics = getMetrics(bottom, font, mode);
              var bottomHeightTotal = bottomMetrics.height + bottomMetrics.depth;
              var middleHeightTotal = 0;
              var middleFactor = 1;
              if (middle !== null) {
                var middleMetrics = getMetrics(middle, font, mode);
                middleHeightTotal = middleMetrics.height + middleMetrics.depth;
                middleFactor = 2;
              }
              var minHeight = topHeightTotal + bottomHeightTotal + middleHeightTotal;
              var repeatCount = Math.max(0, Math.ceil((heightTotal - minHeight) / (middleFactor * repeatHeightTotal)));
              var realHeightTotal = minHeight + repeatCount * middleFactor * repeatHeightTotal;
              var axisHeight = options.fontMetrics().axisHeight;
              if (center) {
                axisHeight *= options.sizeMultiplier;
              }
              var depth = realHeightTotal / 2 - axisHeight;
              var stack = [];
              if (svgLabel.length > 0) {
                var midHeight = realHeightTotal - topHeightTotal - bottomHeightTotal;
                var viewBoxHeight = Math.round(realHeightTotal * 1e3);
                var pathStr = tallDelim(svgLabel, Math.round(midHeight * 1e3));
                var path2 = new PathNode(svgLabel, pathStr);
                var width = (viewBoxWidth / 1e3).toFixed(3) + "em";
                var height = (viewBoxHeight / 1e3).toFixed(3) + "em";
                var svg = new SvgNode([path2], {
                  "width": width,
                  "height": height,
                  "viewBox": "0 0 " + viewBoxWidth + " " + viewBoxHeight
                });
                var wrapper = buildCommon.makeSvgSpan([], [svg], options);
                wrapper.height = viewBoxHeight / 1e3;
                wrapper.style.width = width;
                wrapper.style.height = height;
                stack.push({
                  type: "elem",
                  elem: wrapper
                });
              } else {
                stack.push(makeGlyphSpan(bottom, font, mode));
                stack.push(lap);
                if (middle === null) {
                  var innerHeight = realHeightTotal - topHeightTotal - bottomHeightTotal + 2 * lapInEms;
                  stack.push(makeInner(repeat, innerHeight, options));
                } else {
                  var _innerHeight = (realHeightTotal - topHeightTotal - bottomHeightTotal - middleHeightTotal) / 2 + 2 * lapInEms;
                  stack.push(makeInner(repeat, _innerHeight, options));
                  stack.push(lap);
                  stack.push(makeGlyphSpan(middle, font, mode));
                  stack.push(lap);
                  stack.push(makeInner(repeat, _innerHeight, options));
                }
                stack.push(lap);
                stack.push(makeGlyphSpan(top, font, mode));
              }
              var newOptions = options.havingBaseStyle(src_Style.TEXT);
              var inner2 = buildCommon.makeVList({
                positionType: "bottom",
                positionData: depth,
                children: stack
              }, newOptions);
              return styleWrap(buildCommon.makeSpan(["delimsizing", "mult"], [inner2], newOptions), src_Style.TEXT, options, classes);
            };
            var vbPad = 80;
            var emPad = 0.08;
            var sqrtSvg = function sqrtSvg2(sqrtName, height, viewBoxHeight, extraVinculum, options) {
              var path2 = sqrtPath(sqrtName, extraVinculum, viewBoxHeight);
              var pathNode = new PathNode(sqrtName, path2);
              var svg = new SvgNode([pathNode], {
                // Note: 1000:1 ratio of viewBox to document em width.
                "width": "400em",
                "height": makeEm(height),
                "viewBox": "0 0 400000 " + viewBoxHeight,
                "preserveAspectRatio": "xMinYMin slice"
              });
              return buildCommon.makeSvgSpan(["hide-tail"], [svg], options);
            };
            var makeSqrtImage = function makeSqrtImage2(height, options) {
              var newOptions = options.havingBaseSizing();
              var delim = traverseSequence("\\surd", height * newOptions.sizeMultiplier, stackLargeDelimiterSequence, newOptions);
              var sizeMultiplier = newOptions.sizeMultiplier;
              var extraVinculum = Math.max(0, options.minRuleThickness - options.fontMetrics().sqrtRuleThickness);
              var span;
              var spanHeight = 0;
              var texHeight = 0;
              var viewBoxHeight = 0;
              var advanceWidth;
              if (delim.type === "small") {
                viewBoxHeight = 1e3 + 1e3 * extraVinculum + vbPad;
                if (height < 1) {
                  sizeMultiplier = 1;
                } else if (height < 1.4) {
                  sizeMultiplier = 0.7;
                }
                spanHeight = (1 + extraVinculum + emPad) / sizeMultiplier;
                texHeight = (1 + extraVinculum) / sizeMultiplier;
                span = sqrtSvg("sqrtMain", spanHeight, viewBoxHeight, extraVinculum, options);
                span.style.minWidth = "0.853em";
                advanceWidth = 0.833 / sizeMultiplier;
              } else if (delim.type === "large") {
                viewBoxHeight = (1e3 + vbPad) * sizeToMaxHeight[delim.size];
                texHeight = (sizeToMaxHeight[delim.size] + extraVinculum) / sizeMultiplier;
                spanHeight = (sizeToMaxHeight[delim.size] + extraVinculum + emPad) / sizeMultiplier;
                span = sqrtSvg("sqrtSize" + delim.size, spanHeight, viewBoxHeight, extraVinculum, options);
                span.style.minWidth = "1.02em";
                advanceWidth = 1 / sizeMultiplier;
              } else {
                spanHeight = height + extraVinculum + emPad;
                texHeight = height + extraVinculum;
                viewBoxHeight = Math.floor(1e3 * height + extraVinculum) + vbPad;
                span = sqrtSvg("sqrtTall", spanHeight, viewBoxHeight, extraVinculum, options);
                span.style.minWidth = "0.742em";
                advanceWidth = 1.056;
              }
              span.height = texHeight;
              span.style.height = makeEm(spanHeight);
              return {
                span,
                advanceWidth,
                // Calculate the actual line width.
                // This actually should depend on the chosen font -- e.g. \boldmath
                // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
                // have thicker rules.
                ruleWidth: (options.fontMetrics().sqrtRuleThickness + extraVinculum) * sizeMultiplier
              };
            };
            var stackLargeDelimiters = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"];
            var stackAlwaysDelimiters = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"];
            var stackNeverDelimiters = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"];
            var sizeToMaxHeight = [0, 1.2, 1.8, 2.4, 3];
            var makeSizedDelim = function makeSizedDelim2(delim, size, options, mode, classes) {
              if (delim === "<" || delim === "\\lt" || delim === "\u27E8") {
                delim = "\\langle";
              } else if (delim === ">" || delim === "\\gt" || delim === "\u27E9") {
                delim = "\\rangle";
              }
              if (utils.contains(stackLargeDelimiters, delim) || utils.contains(stackNeverDelimiters, delim)) {
                return makeLargeDelim(delim, size, false, options, mode, classes);
              } else if (utils.contains(stackAlwaysDelimiters, delim)) {
                return makeStackedDelim(delim, sizeToMaxHeight[size], false, options, mode, classes);
              } else {
                throw new src_ParseError("Illegal delimiter: '" + delim + "'");
              }
            };
            var stackNeverDelimiterSequence = [{
              type: "small",
              style: src_Style.SCRIPTSCRIPT
            }, {
              type: "small",
              style: src_Style.SCRIPT
            }, {
              type: "small",
              style: src_Style.TEXT
            }, {
              type: "large",
              size: 1
            }, {
              type: "large",
              size: 2
            }, {
              type: "large",
              size: 3
            }, {
              type: "large",
              size: 4
            }];
            var stackAlwaysDelimiterSequence = [{
              type: "small",
              style: src_Style.SCRIPTSCRIPT
            }, {
              type: "small",
              style: src_Style.SCRIPT
            }, {
              type: "small",
              style: src_Style.TEXT
            }, {
              type: "stack"
            }];
            var stackLargeDelimiterSequence = [{
              type: "small",
              style: src_Style.SCRIPTSCRIPT
            }, {
              type: "small",
              style: src_Style.SCRIPT
            }, {
              type: "small",
              style: src_Style.TEXT
            }, {
              type: "large",
              size: 1
            }, {
              type: "large",
              size: 2
            }, {
              type: "large",
              size: 3
            }, {
              type: "large",
              size: 4
            }, {
              type: "stack"
            }];
            var delimTypeToFont = function delimTypeToFont2(type) {
              if (type.type === "small") {
                return "Main-Regular";
              } else if (type.type === "large") {
                return "Size" + type.size + "-Regular";
              } else if (type.type === "stack") {
                return "Size4-Regular";
              } else {
                throw new Error("Add support for delim type '" + type.type + "' here.");
              }
            };
            var traverseSequence = function traverseSequence2(delim, height, sequence, options) {
              var start = Math.min(2, 3 - options.style.size);
              for (var i2 = start; i2 < sequence.length; i2++) {
                if (sequence[i2].type === "stack") {
                  break;
                }
                var metrics = getMetrics(delim, delimTypeToFont(sequence[i2]), "math");
                var heightDepth = metrics.height + metrics.depth;
                if (sequence[i2].type === "small") {
                  var newOptions = options.havingBaseStyle(sequence[i2].style);
                  heightDepth *= newOptions.sizeMultiplier;
                }
                if (heightDepth > height) {
                  return sequence[i2];
                }
              }
              return sequence[sequence.length - 1];
            };
            var makeCustomSizedDelim = function makeCustomSizedDelim2(delim, height, center, options, mode, classes) {
              if (delim === "<" || delim === "\\lt" || delim === "\u27E8") {
                delim = "\\langle";
              } else if (delim === ">" || delim === "\\gt" || delim === "\u27E9") {
                delim = "\\rangle";
              }
              var sequence;
              if (utils.contains(stackNeverDelimiters, delim)) {
                sequence = stackNeverDelimiterSequence;
              } else if (utils.contains(stackLargeDelimiters, delim)) {
                sequence = stackLargeDelimiterSequence;
              } else {
                sequence = stackAlwaysDelimiterSequence;
              }
              var delimType = traverseSequence(delim, height, sequence, options);
              if (delimType.type === "small") {
                return makeSmallDelim(delim, delimType.style, center, options, mode, classes);
              } else if (delimType.type === "large") {
                return makeLargeDelim(delim, delimType.size, center, options, mode, classes);
              } else {
                return makeStackedDelim(delim, height, center, options, mode, classes);
              }
            };
            var makeLeftRightDelim = function makeLeftRightDelim2(delim, height, depth, options, mode, classes) {
              var axisHeight = options.fontMetrics().axisHeight * options.sizeMultiplier;
              var delimiterFactor = 901;
              var delimiterExtend = 5 / options.fontMetrics().ptPerEm;
              var maxDistFromAxis = Math.max(height - axisHeight, depth + axisHeight);
              var totalHeight = Math.max(
                // In real TeX, calculations are done using integral values which are
                // 65536 per pt, or 655360 per em. So, the division here truncates in
                // TeX but doesn't here, producing different results. If we wanted to
                // exactly match TeX's calculation, we could do
                //   Math.floor(655360 * maxDistFromAxis / 500) *
                //    delimiterFactor / 655360
                // (To see the difference, compare
                //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
                // in TeX and KaTeX)
                maxDistFromAxis / 500 * delimiterFactor,
                2 * maxDistFromAxis - delimiterExtend
              );
              return makeCustomSizedDelim(delim, totalHeight, true, options, mode, classes);
            };
            var delimiter = {
              sqrtImage: makeSqrtImage,
              sizedDelim: makeSizedDelim,
              sizeToMaxHeight,
              customSizedDelim: makeCustomSizedDelim,
              leftRightDelim: makeLeftRightDelim
            };
            ;
            var delimiterSizes = {
              "\\bigl": {
                mclass: "mopen",
                size: 1
              },
              "\\Bigl": {
                mclass: "mopen",
                size: 2
              },
              "\\biggl": {
                mclass: "mopen",
                size: 3
              },
              "\\Biggl": {
                mclass: "mopen",
                size: 4
              },
              "\\bigr": {
                mclass: "mclose",
                size: 1
              },
              "\\Bigr": {
                mclass: "mclose",
                size: 2
              },
              "\\biggr": {
                mclass: "mclose",
                size: 3
              },
              "\\Biggr": {
                mclass: "mclose",
                size: 4
              },
              "\\bigm": {
                mclass: "mrel",
                size: 1
              },
              "\\Bigm": {
                mclass: "mrel",
                size: 2
              },
              "\\biggm": {
                mclass: "mrel",
                size: 3
              },
              "\\Biggm": {
                mclass: "mrel",
                size: 4
              },
              "\\big": {
                mclass: "mord",
                size: 1
              },
              "\\Big": {
                mclass: "mord",
                size: 2
              },
              "\\bigg": {
                mclass: "mord",
                size: 3
              },
              "\\Bigg": {
                mclass: "mord",
                size: 4
              }
            };
            var delimiters = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
            function checkDelimiter(delim, context) {
              var symDelim = checkSymbolNodeType(delim);
              if (symDelim && utils.contains(delimiters, symDelim.text)) {
                return symDelim;
              } else if (symDelim) {
                throw new src_ParseError("Invalid delimiter '" + symDelim.text + "' after '" + context.funcName + "'", delim);
              } else {
                throw new src_ParseError("Invalid delimiter type '" + delim.type + "'", delim);
              }
            }
            defineFunction({
              type: "delimsizing",
              names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
              props: {
                numArgs: 1,
                argTypes: ["primitive"]
              },
              handler: function handler(context, args) {
                var delim = checkDelimiter(args[0], context);
                return {
                  type: "delimsizing",
                  mode: context.parser.mode,
                  size: delimiterSizes[context.funcName].size,
                  mclass: delimiterSizes[context.funcName].mclass,
                  delim: delim.text
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                if (group.delim === ".") {
                  return buildCommon.makeSpan([group.mclass]);
                }
                return delimiter.sizedDelim(group.delim, group.size, options, group.mode, [group.mclass]);
              },
              mathmlBuilder: function mathmlBuilder2(group) {
                var children = [];
                if (group.delim !== ".") {
                  children.push(makeText(group.delim, group.mode));
                }
                var node = new mathMLTree.MathNode("mo", children);
                if (group.mclass === "mopen" || group.mclass === "mclose") {
                  node.setAttribute("fence", "true");
                } else {
                  node.setAttribute("fence", "false");
                }
                node.setAttribute("stretchy", "true");
                var size = makeEm(delimiter.sizeToMaxHeight[group.size]);
                node.setAttribute("minsize", size);
                node.setAttribute("maxsize", size);
                return node;
              }
            });
            function assertParsed(group) {
              if (!group.body) {
                throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
              }
            }
            defineFunction({
              type: "leftright-right",
              names: ["\\right"],
              props: {
                numArgs: 1,
                primitive: true
              },
              handler: function handler(context, args) {
                var color = context.parser.gullet.macros.get("\\current@color");
                if (color && typeof color !== "string") {
                  throw new src_ParseError("\\current@color set to non-string in \\right");
                }
                return {
                  type: "leftright-right",
                  mode: context.parser.mode,
                  delim: checkDelimiter(args[0], context).text,
                  color
                  // undefined if not set via \color
                };
              }
            });
            defineFunction({
              type: "leftright",
              names: ["\\left"],
              props: {
                numArgs: 1,
                primitive: true
              },
              handler: function handler(context, args) {
                var delim = checkDelimiter(args[0], context);
                var parser = context.parser;
                ++parser.leftrightDepth;
                var body = parser.parseExpression(false);
                --parser.leftrightDepth;
                parser.expect("\\right", false);
                var right = assertNodeType(parser.parseFunction(), "leftright-right");
                return {
                  type: "leftright",
                  mode: parser.mode,
                  body,
                  left: delim.text,
                  right: right.delim,
                  rightColor: right.color
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                assertParsed(group);
                var inner2 = buildExpression(group.body, options, true, ["mopen", "mclose"]);
                var innerHeight = 0;
                var innerDepth = 0;
                var hadMiddle = false;
                for (var i2 = 0; i2 < inner2.length; i2++) {
                  if (inner2[i2].isMiddle) {
                    hadMiddle = true;
                  } else {
                    innerHeight = Math.max(inner2[i2].height, innerHeight);
                    innerDepth = Math.max(inner2[i2].depth, innerDepth);
                  }
                }
                innerHeight *= options.sizeMultiplier;
                innerDepth *= options.sizeMultiplier;
                var leftDelim;
                if (group.left === ".") {
                  leftDelim = makeNullDelimiter(options, ["mopen"]);
                } else {
                  leftDelim = delimiter.leftRightDelim(group.left, innerHeight, innerDepth, options, group.mode, ["mopen"]);
                }
                inner2.unshift(leftDelim);
                if (hadMiddle) {
                  for (var _i6 = 1; _i6 < inner2.length; _i6++) {
                    var middleDelim = inner2[_i6];
                    var isMiddle = middleDelim.isMiddle;
                    if (isMiddle) {
                      inner2[_i6] = delimiter.leftRightDelim(isMiddle.delim, innerHeight, innerDepth, isMiddle.options, group.mode, []);
                    }
                  }
                }
                var rightDelim;
                if (group.right === ".") {
                  rightDelim = makeNullDelimiter(options, ["mclose"]);
                } else {
                  var colorOptions = group.rightColor ? options.withColor(group.rightColor) : options;
                  rightDelim = delimiter.leftRightDelim(group.right, innerHeight, innerDepth, colorOptions, group.mode, ["mclose"]);
                }
                inner2.push(rightDelim);
                return buildCommon.makeSpan(["minner"], inner2, options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                assertParsed(group);
                var inner2 = buildMathML_buildExpression(group.body, options);
                if (group.left !== ".") {
                  var leftNode = new mathMLTree.MathNode("mo", [makeText(group.left, group.mode)]);
                  leftNode.setAttribute("fence", "true");
                  inner2.unshift(leftNode);
                }
                if (group.right !== ".") {
                  var rightNode = new mathMLTree.MathNode("mo", [makeText(group.right, group.mode)]);
                  rightNode.setAttribute("fence", "true");
                  if (group.rightColor) {
                    rightNode.setAttribute("mathcolor", group.rightColor);
                  }
                  inner2.push(rightNode);
                }
                return makeRow(inner2);
              }
            });
            defineFunction({
              type: "middle",
              names: ["\\middle"],
              props: {
                numArgs: 1,
                primitive: true
              },
              handler: function handler(context, args) {
                var delim = checkDelimiter(args[0], context);
                if (!context.parser.leftrightDepth) {
                  throw new src_ParseError("\\middle without preceding \\left", delim);
                }
                return {
                  type: "middle",
                  mode: context.parser.mode,
                  delim: delim.text
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var middleDelim;
                if (group.delim === ".") {
                  middleDelim = makeNullDelimiter(options, []);
                } else {
                  middleDelim = delimiter.sizedDelim(group.delim, 1, options, group.mode, []);
                  var isMiddle = {
                    delim: group.delim,
                    options
                  };
                  middleDelim.isMiddle = isMiddle;
                }
                return middleDelim;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var textNode = group.delim === "\\vert" || group.delim === "|" ? makeText("|", "text") : makeText(group.delim, group.mode);
                var middleNode = new mathMLTree.MathNode("mo", [textNode]);
                middleNode.setAttribute("fence", "true");
                middleNode.setAttribute("lspace", "0.05em");
                middleNode.setAttribute("rspace", "0.05em");
                return middleNode;
              }
            });
            ;
            var enclose_htmlBuilder = function htmlBuilder2(group, options) {
              var inner2 = buildCommon.wrapFragment(buildGroup(group.body, options), options);
              var label = group.label.slice(1);
              var scale = options.sizeMultiplier;
              var img;
              var imgShift = 0;
              var isSingleChar = utils.isCharacterBox(group.body);
              if (label === "sout") {
                img = buildCommon.makeSpan(["stretchy", "sout"]);
                img.height = options.fontMetrics().defaultRuleThickness / scale;
                imgShift = -0.5 * options.fontMetrics().xHeight;
              } else if (label === "phase") {
                var lineWeight = calculateSize({
                  number: 0.6,
                  unit: "pt"
                }, options);
                var clearance = calculateSize({
                  number: 0.35,
                  unit: "ex"
                }, options);
                var newOptions = options.havingBaseSizing();
                scale = scale / newOptions.sizeMultiplier;
                var angleHeight = inner2.height + inner2.depth + lineWeight + clearance;
                inner2.style.paddingLeft = makeEm(angleHeight / 2 + lineWeight);
                var viewBoxHeight = Math.floor(1e3 * angleHeight * scale);
                var path2 = phasePath(viewBoxHeight);
                var svgNode = new SvgNode([new PathNode("phase", path2)], {
                  "width": "400em",
                  "height": makeEm(viewBoxHeight / 1e3),
                  "viewBox": "0 0 400000 " + viewBoxHeight,
                  "preserveAspectRatio": "xMinYMin slice"
                });
                img = buildCommon.makeSvgSpan(["hide-tail"], [svgNode], options);
                img.style.height = makeEm(angleHeight);
                imgShift = inner2.depth + lineWeight + clearance;
              } else {
                if (/cancel/.test(label)) {
                  if (!isSingleChar) {
                    inner2.classes.push("cancel-pad");
                  }
                } else if (label === "angl") {
                  inner2.classes.push("anglpad");
                } else {
                  inner2.classes.push("boxpad");
                }
                var topPad = 0;
                var bottomPad = 0;
                var ruleThickness = 0;
                if (/box/.test(label)) {
                  ruleThickness = Math.max(
                    options.fontMetrics().fboxrule,
                    // default
                    options.minRuleThickness
                    // User override.
                  );
                  topPad = options.fontMetrics().fboxsep + (label === "colorbox" ? 0 : ruleThickness);
                  bottomPad = topPad;
                } else if (label === "angl") {
                  ruleThickness = Math.max(options.fontMetrics().defaultRuleThickness, options.minRuleThickness);
                  topPad = 4 * ruleThickness;
                  bottomPad = Math.max(0, 0.25 - inner2.depth);
                } else {
                  topPad = isSingleChar ? 0.2 : 0;
                  bottomPad = topPad;
                }
                img = stretchy.encloseSpan(inner2, label, topPad, bottomPad, options);
                if (/fbox|boxed|fcolorbox/.test(label)) {
                  img.style.borderStyle = "solid";
                  img.style.borderWidth = makeEm(ruleThickness);
                } else if (label === "angl" && ruleThickness !== 0.049) {
                  img.style.borderTopWidth = makeEm(ruleThickness);
                  img.style.borderRightWidth = makeEm(ruleThickness);
                }
                imgShift = inner2.depth + bottomPad;
                if (group.backgroundColor) {
                  img.style.backgroundColor = group.backgroundColor;
                  if (group.borderColor) {
                    img.style.borderColor = group.borderColor;
                  }
                }
              }
              var vlist;
              if (group.backgroundColor) {
                vlist = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: [
                    // Put the color background behind inner;
                    {
                      type: "elem",
                      elem: img,
                      shift: imgShift
                    },
                    {
                      type: "elem",
                      elem: inner2,
                      shift: 0
                    }
                  ]
                }, options);
              } else {
                var classes = /cancel|phase/.test(label) ? ["svg-align"] : [];
                vlist = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: [
                    // Write the \cancel stroke on top of inner.
                    {
                      type: "elem",
                      elem: inner2,
                      shift: 0
                    },
                    {
                      type: "elem",
                      elem: img,
                      shift: imgShift,
                      wrapperClasses: classes
                    }
                  ]
                }, options);
              }
              if (/cancel/.test(label)) {
                vlist.height = inner2.height;
                vlist.depth = inner2.depth;
              }
              if (/cancel/.test(label) && !isSingleChar) {
                return buildCommon.makeSpan(["mord", "cancel-lap"], [vlist], options);
              } else {
                return buildCommon.makeSpan(["mord"], [vlist], options);
              }
            };
            var enclose_mathmlBuilder = function mathmlBuilder2(group, options) {
              var fboxsep = 0;
              var node = new mathMLTree.MathNode(group.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [buildMathML_buildGroup(group.body, options)]);
              switch (group.label) {
                case "\\cancel":
                  node.setAttribute("notation", "updiagonalstrike");
                  break;
                case "\\bcancel":
                  node.setAttribute("notation", "downdiagonalstrike");
                  break;
                case "\\phase":
                  node.setAttribute("notation", "phasorangle");
                  break;
                case "\\sout":
                  node.setAttribute("notation", "horizontalstrike");
                  break;
                case "\\fbox":
                  node.setAttribute("notation", "box");
                  break;
                case "\\angl":
                  node.setAttribute("notation", "actuarial");
                  break;
                case "\\fcolorbox":
                case "\\colorbox":
                  fboxsep = options.fontMetrics().fboxsep * options.fontMetrics().ptPerEm;
                  node.setAttribute("width", "+" + 2 * fboxsep + "pt");
                  node.setAttribute("height", "+" + 2 * fboxsep + "pt");
                  node.setAttribute("lspace", fboxsep + "pt");
                  node.setAttribute("voffset", fboxsep + "pt");
                  if (group.label === "\\fcolorbox") {
                    var thk = Math.max(
                      options.fontMetrics().fboxrule,
                      // default
                      options.minRuleThickness
                      // user override
                    );
                    node.setAttribute("style", "border: " + thk + "em solid " + String(group.borderColor));
                  }
                  break;
                case "\\xcancel":
                  node.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
                  break;
              }
              if (group.backgroundColor) {
                node.setAttribute("mathbackground", group.backgroundColor);
              }
              return node;
            };
            defineFunction({
              type: "enclose",
              names: ["\\colorbox"],
              props: {
                numArgs: 2,
                allowedInText: true,
                argTypes: ["color", "text"]
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var color = assertNodeType(args[0], "color-token").color;
                var body = args[1];
                return {
                  type: "enclose",
                  mode: parser.mode,
                  label: funcName,
                  backgroundColor: color,
                  body
                };
              },
              htmlBuilder: enclose_htmlBuilder,
              mathmlBuilder: enclose_mathmlBuilder
            });
            defineFunction({
              type: "enclose",
              names: ["\\fcolorbox"],
              props: {
                numArgs: 3,
                allowedInText: true,
                argTypes: ["color", "color", "text"]
              },
              handler: function handler(_ref2, args, optArgs) {
                var parser = _ref2.parser, funcName = _ref2.funcName;
                var borderColor = assertNodeType(args[0], "color-token").color;
                var backgroundColor = assertNodeType(args[1], "color-token").color;
                var body = args[2];
                return {
                  type: "enclose",
                  mode: parser.mode,
                  label: funcName,
                  backgroundColor,
                  borderColor,
                  body
                };
              },
              htmlBuilder: enclose_htmlBuilder,
              mathmlBuilder: enclose_mathmlBuilder
            });
            defineFunction({
              type: "enclose",
              names: ["\\fbox"],
              props: {
                numArgs: 1,
                argTypes: ["hbox"],
                allowedInText: true
              },
              handler: function handler(_ref3, args) {
                var parser = _ref3.parser;
                return {
                  type: "enclose",
                  mode: parser.mode,
                  label: "\\fbox",
                  body: args[0]
                };
              }
            });
            defineFunction({
              type: "enclose",
              names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref4, args) {
                var parser = _ref4.parser, funcName = _ref4.funcName;
                var body = args[0];
                return {
                  type: "enclose",
                  mode: parser.mode,
                  label: funcName,
                  body
                };
              },
              htmlBuilder: enclose_htmlBuilder,
              mathmlBuilder: enclose_mathmlBuilder
            });
            defineFunction({
              type: "enclose",
              names: ["\\angl"],
              props: {
                numArgs: 1,
                argTypes: ["hbox"],
                allowedInText: false
              },
              handler: function handler(_ref5, args) {
                var parser = _ref5.parser;
                return {
                  type: "enclose",
                  mode: parser.mode,
                  label: "\\angl",
                  body: args[0]
                };
              }
            });
            ;
            var _environments = {};
            function defineEnvironment(_ref) {
              var type = _ref.type, names = _ref.names, props = _ref.props, handler = _ref.handler, htmlBuilder2 = _ref.htmlBuilder, mathmlBuilder2 = _ref.mathmlBuilder;
              var data = {
                type,
                numArgs: props.numArgs || 0,
                allowedInText: false,
                numOptionalArgs: 0,
                handler
              };
              for (var i2 = 0; i2 < names.length; ++i2) {
                _environments[names[i2]] = data;
              }
              if (htmlBuilder2) {
                _htmlGroupBuilders[type] = htmlBuilder2;
              }
              if (mathmlBuilder2) {
                _mathmlGroupBuilders[type] = mathmlBuilder2;
              }
            }
            ;
            var _macros = {};
            function defineMacro(name, body) {
              _macros[name] = body;
            }
            ;
            var SourceLocation = /* @__PURE__ */ function() {
              function SourceLocation2(lexer, start, end) {
                this.lexer = void 0;
                this.start = void 0;
                this.end = void 0;
                this.lexer = lexer;
                this.start = start;
                this.end = end;
              }
              SourceLocation2.range = function range(first, second) {
                if (!second) {
                  return first && first.loc;
                } else if (!first || !first.loc || !second.loc || first.loc.lexer !== second.loc.lexer) {
                  return null;
                } else {
                  return new SourceLocation2(first.loc.lexer, first.loc.start, second.loc.end);
                }
              };
              return SourceLocation2;
            }();
            ;
            var Token = /* @__PURE__ */ function() {
              function Token2(text, loc) {
                this.text = void 0;
                this.loc = void 0;
                this.noexpand = void 0;
                this.treatAsRelax = void 0;
                this.text = text;
                this.loc = loc;
              }
              var _proto = Token2.prototype;
              _proto.range = function range(endToken, text) {
                return new Token2(text, SourceLocation.range(this, endToken));
              };
              return Token2;
            }();
            ;
            function getHLines(parser) {
              var hlineInfo = [];
              parser.consumeSpaces();
              var nxt = parser.fetch().text;
              if (nxt === "\\relax") {
                parser.consume();
                parser.consumeSpaces();
                nxt = parser.fetch().text;
              }
              while (nxt === "\\hline" || nxt === "\\hdashline") {
                parser.consume();
                hlineInfo.push(nxt === "\\hdashline");
                parser.consumeSpaces();
                nxt = parser.fetch().text;
              }
              return hlineInfo;
            }
            var validateAmsEnvironmentContext = function validateAmsEnvironmentContext2(context) {
              var settings = context.parser.settings;
              if (!settings.displayMode) {
                throw new src_ParseError("{" + context.envName + "} can be used only in display mode.");
              }
            };
            function getAutoTag(name) {
              if (name.indexOf("ed") === -1) {
                return name.indexOf("*") === -1;
              }
            }
            function parseArray(parser, _ref, style) {
              var hskipBeforeAndAfter = _ref.hskipBeforeAndAfter, addJot = _ref.addJot, cols = _ref.cols, arraystretch = _ref.arraystretch, colSeparationType = _ref.colSeparationType, autoTag = _ref.autoTag, singleRow = _ref.singleRow, emptySingleRow = _ref.emptySingleRow, maxNumCols = _ref.maxNumCols, leqno = _ref.leqno;
              parser.gullet.beginGroup();
              if (!singleRow) {
                parser.gullet.macros.set("\\cr", "\\\\\\relax");
              }
              if (!arraystretch) {
                var stretch = parser.gullet.expandMacroAsText("\\arraystretch");
                if (stretch == null) {
                  arraystretch = 1;
                } else {
                  arraystretch = parseFloat(stretch);
                  if (!arraystretch || arraystretch < 0) {
                    throw new src_ParseError("Invalid \\arraystretch: " + stretch);
                  }
                }
              }
              parser.gullet.beginGroup();
              var row = [];
              var body = [row];
              var rowGaps = [];
              var hLinesBeforeRow = [];
              var tags = autoTag != null ? [] : void 0;
              function beginRow() {
                if (autoTag) {
                  parser.gullet.macros.set("\\@eqnsw", "1", true);
                }
              }
              function endRow() {
                if (tags) {
                  if (parser.gullet.macros.get("\\df@tag")) {
                    tags.push(parser.subparse([new Token("\\df@tag")]));
                    parser.gullet.macros.set("\\df@tag", void 0, true);
                  } else {
                    tags.push(Boolean(autoTag) && parser.gullet.macros.get("\\@eqnsw") === "1");
                  }
                }
              }
              beginRow();
              hLinesBeforeRow.push(getHLines(parser));
              while (true) {
                var cell = parser.parseExpression(false, singleRow ? "\\end" : "\\\\");
                parser.gullet.endGroup();
                parser.gullet.beginGroup();
                cell = {
                  type: "ordgroup",
                  mode: parser.mode,
                  body: cell
                };
                if (style) {
                  cell = {
                    type: "styling",
                    mode: parser.mode,
                    style,
                    body: [cell]
                  };
                }
                row.push(cell);
                var next = parser.fetch().text;
                if (next === "&") {
                  if (maxNumCols && row.length === maxNumCols) {
                    if (singleRow || colSeparationType) {
                      throw new src_ParseError("Too many tab characters: &", parser.nextToken);
                    } else {
                      parser.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
                    }
                  }
                  parser.consume();
                } else if (next === "\\end") {
                  endRow();
                  if (row.length === 1 && cell.type === "styling" && cell.body[0].body.length === 0 && (body.length > 1 || !emptySingleRow)) {
                    body.pop();
                  }
                  if (hLinesBeforeRow.length < body.length + 1) {
                    hLinesBeforeRow.push([]);
                  }
                  break;
                } else if (next === "\\\\") {
                  parser.consume();
                  var size = void 0;
                  if (parser.gullet.future().text !== " ") {
                    size = parser.parseSizeGroup(true);
                  }
                  rowGaps.push(size ? size.value : null);
                  endRow();
                  hLinesBeforeRow.push(getHLines(parser));
                  row = [];
                  body.push(row);
                  beginRow();
                } else {
                  throw new src_ParseError("Expected & or \\\\ or \\cr or \\end", parser.nextToken);
                }
              }
              parser.gullet.endGroup();
              parser.gullet.endGroup();
              return {
                type: "array",
                mode: parser.mode,
                addJot,
                arraystretch,
                body,
                cols,
                rowGaps,
                hskipBeforeAndAfter,
                hLinesBeforeRow,
                colSeparationType,
                tags,
                leqno
              };
            }
            function dCellStyle(envName) {
              if (envName.slice(0, 1) === "d") {
                return "display";
              } else {
                return "text";
              }
            }
            var array_htmlBuilder = function htmlBuilder2(group, options) {
              var r;
              var c;
              var nr = group.body.length;
              var hLinesBeforeRow = group.hLinesBeforeRow;
              var nc = 0;
              var body = new Array(nr);
              var hlines = [];
              var ruleThickness = Math.max(
                // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
                options.fontMetrics().arrayRuleWidth,
                options.minRuleThickness
                // User override.
              );
              var pt = 1 / options.fontMetrics().ptPerEm;
              var arraycolsep = 5 * pt;
              if (group.colSeparationType && group.colSeparationType === "small") {
                var localMultiplier = options.havingStyle(src_Style.SCRIPT).sizeMultiplier;
                arraycolsep = 0.2778 * (localMultiplier / options.sizeMultiplier);
              }
              var baselineskip = group.colSeparationType === "CD" ? calculateSize({
                number: 3,
                unit: "ex"
              }, options) : 12 * pt;
              var jot = 3 * pt;
              var arrayskip = group.arraystretch * baselineskip;
              var arstrutHeight = 0.7 * arrayskip;
              var arstrutDepth = 0.3 * arrayskip;
              var totalHeight = 0;
              function setHLinePos(hlinesInGap) {
                for (var i2 = 0; i2 < hlinesInGap.length; ++i2) {
                  if (i2 > 0) {
                    totalHeight += 0.25;
                  }
                  hlines.push({
                    pos: totalHeight,
                    isDashed: hlinesInGap[i2]
                  });
                }
              }
              setHLinePos(hLinesBeforeRow[0]);
              for (r = 0; r < group.body.length; ++r) {
                var inrow = group.body[r];
                var height = arstrutHeight;
                var depth = arstrutDepth;
                if (nc < inrow.length) {
                  nc = inrow.length;
                }
                var outrow = new Array(inrow.length);
                for (c = 0; c < inrow.length; ++c) {
                  var elt = buildGroup(inrow[c], options);
                  if (depth < elt.depth) {
                    depth = elt.depth;
                  }
                  if (height < elt.height) {
                    height = elt.height;
                  }
                  outrow[c] = elt;
                }
                var rowGap = group.rowGaps[r];
                var gap = 0;
                if (rowGap) {
                  gap = calculateSize(rowGap, options);
                  if (gap > 0) {
                    gap += arstrutDepth;
                    if (depth < gap) {
                      depth = gap;
                    }
                    gap = 0;
                  }
                }
                if (group.addJot) {
                  depth += jot;
                }
                outrow.height = height;
                outrow.depth = depth;
                totalHeight += height;
                outrow.pos = totalHeight;
                totalHeight += depth + gap;
                body[r] = outrow;
                setHLinePos(hLinesBeforeRow[r + 1]);
              }
              var offset = totalHeight / 2 + options.fontMetrics().axisHeight;
              var colDescriptions = group.cols || [];
              var cols = [];
              var colSep;
              var colDescrNum;
              var tagSpans = [];
              if (group.tags && group.tags.some(function(tag2) {
                return tag2;
              })) {
                for (r = 0; r < nr; ++r) {
                  var rw = body[r];
                  var shift = rw.pos - offset;
                  var tag = group.tags[r];
                  var tagSpan = void 0;
                  if (tag === true) {
                    tagSpan = buildCommon.makeSpan(["eqn-num"], [], options);
                  } else if (tag === false) {
                    tagSpan = buildCommon.makeSpan([], [], options);
                  } else {
                    tagSpan = buildCommon.makeSpan([], buildExpression(tag, options, true), options);
                  }
                  tagSpan.depth = rw.depth;
                  tagSpan.height = rw.height;
                  tagSpans.push({
                    type: "elem",
                    elem: tagSpan,
                    shift
                  });
                }
              }
              for (
                c = 0, colDescrNum = 0;
                // Continue while either there are more columns or more column
                // descriptions, so trailing separators don't get lost.
                c < nc || colDescrNum < colDescriptions.length;
                ++c, ++colDescrNum
              ) {
                var colDescr = colDescriptions[colDescrNum] || {};
                var firstSeparator = true;
                while (colDescr.type === "separator") {
                  if (!firstSeparator) {
                    colSep = buildCommon.makeSpan(["arraycolsep"], []);
                    colSep.style.width = makeEm(options.fontMetrics().doubleRuleSep);
                    cols.push(colSep);
                  }
                  if (colDescr.separator === "|" || colDescr.separator === ":") {
                    var lineType = colDescr.separator === "|" ? "solid" : "dashed";
                    var separator = buildCommon.makeSpan(["vertical-separator"], [], options);
                    separator.style.height = makeEm(totalHeight);
                    separator.style.borderRightWidth = makeEm(ruleThickness);
                    separator.style.borderRightStyle = lineType;
                    separator.style.margin = "0 " + makeEm(-ruleThickness / 2);
                    var _shift = totalHeight - offset;
                    if (_shift) {
                      separator.style.verticalAlign = makeEm(-_shift);
                    }
                    cols.push(separator);
                  } else {
                    throw new src_ParseError("Invalid separator type: " + colDescr.separator);
                  }
                  colDescrNum++;
                  colDescr = colDescriptions[colDescrNum] || {};
                  firstSeparator = false;
                }
                if (c >= nc) {
                  continue;
                }
                var sepwidth = void 0;
                if (c > 0 || group.hskipBeforeAndAfter) {
                  sepwidth = utils.deflt(colDescr.pregap, arraycolsep);
                  if (sepwidth !== 0) {
                    colSep = buildCommon.makeSpan(["arraycolsep"], []);
                    colSep.style.width = makeEm(sepwidth);
                    cols.push(colSep);
                  }
                }
                var col = [];
                for (r = 0; r < nr; ++r) {
                  var row = body[r];
                  var elem = row[c];
                  if (!elem) {
                    continue;
                  }
                  var _shift2 = row.pos - offset;
                  elem.depth = row.depth;
                  elem.height = row.height;
                  col.push({
                    type: "elem",
                    elem,
                    shift: _shift2
                  });
                }
                col = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: col
                }, options);
                col = buildCommon.makeSpan(["col-align-" + (colDescr.align || "c")], [col]);
                cols.push(col);
                if (c < nc - 1 || group.hskipBeforeAndAfter) {
                  sepwidth = utils.deflt(colDescr.postgap, arraycolsep);
                  if (sepwidth !== 0) {
                    colSep = buildCommon.makeSpan(["arraycolsep"], []);
                    colSep.style.width = makeEm(sepwidth);
                    cols.push(colSep);
                  }
                }
              }
              body = buildCommon.makeSpan(["mtable"], cols);
              if (hlines.length > 0) {
                var line = buildCommon.makeLineSpan("hline", options, ruleThickness);
                var dashes = buildCommon.makeLineSpan("hdashline", options, ruleThickness);
                var vListElems = [{
                  type: "elem",
                  elem: body,
                  shift: 0
                }];
                while (hlines.length > 0) {
                  var hline = hlines.pop();
                  var lineShift = hline.pos - offset;
                  if (hline.isDashed) {
                    vListElems.push({
                      type: "elem",
                      elem: dashes,
                      shift: lineShift
                    });
                  } else {
                    vListElems.push({
                      type: "elem",
                      elem: line,
                      shift: lineShift
                    });
                  }
                }
                body = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: vListElems
                }, options);
              }
              if (tagSpans.length === 0) {
                return buildCommon.makeSpan(["mord"], [body], options);
              } else {
                var eqnNumCol = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: tagSpans
                }, options);
                eqnNumCol = buildCommon.makeSpan(["tag"], [eqnNumCol], options);
                return buildCommon.makeFragment([body, eqnNumCol]);
              }
            };
            var alignMap = {
              c: "center ",
              l: "left ",
              r: "right "
            };
            var array_mathmlBuilder = function mathmlBuilder2(group, options) {
              var tbl = [];
              var glue = new mathMLTree.MathNode("mtd", [], ["mtr-glue"]);
              var tag = new mathMLTree.MathNode("mtd", [], ["mml-eqn-num"]);
              for (var i2 = 0; i2 < group.body.length; i2++) {
                var rw = group.body[i2];
                var row = [];
                for (var j = 0; j < rw.length; j++) {
                  row.push(new mathMLTree.MathNode("mtd", [buildMathML_buildGroup(rw[j], options)]));
                }
                if (group.tags && group.tags[i2]) {
                  row.unshift(glue);
                  row.push(glue);
                  if (group.leqno) {
                    row.unshift(tag);
                  } else {
                    row.push(tag);
                  }
                }
                tbl.push(new mathMLTree.MathNode("mtr", row));
              }
              var table = new mathMLTree.MathNode("mtable", tbl);
              var gap = group.arraystretch === 0.5 ? 0.1 : 0.16 + group.arraystretch - 1 + (group.addJot ? 0.09 : 0);
              table.setAttribute("rowspacing", makeEm(gap));
              var menclose = "";
              var align = "";
              if (group.cols && group.cols.length > 0) {
                var cols = group.cols;
                var columnLines = "";
                var prevTypeWasAlign = false;
                var iStart = 0;
                var iEnd = cols.length;
                if (cols[0].type === "separator") {
                  menclose += "top ";
                  iStart = 1;
                }
                if (cols[cols.length - 1].type === "separator") {
                  menclose += "bottom ";
                  iEnd -= 1;
                }
                for (var _i6 = iStart; _i6 < iEnd; _i6++) {
                  if (cols[_i6].type === "align") {
                    align += alignMap[cols[_i6].align];
                    if (prevTypeWasAlign) {
                      columnLines += "none ";
                    }
                    prevTypeWasAlign = true;
                  } else if (cols[_i6].type === "separator") {
                    if (prevTypeWasAlign) {
                      columnLines += cols[_i6].separator === "|" ? "solid " : "dashed ";
                      prevTypeWasAlign = false;
                    }
                  }
                }
                table.setAttribute("columnalign", align.trim());
                if (/[sd]/.test(columnLines)) {
                  table.setAttribute("columnlines", columnLines.trim());
                }
              }
              if (group.colSeparationType === "align") {
                var _cols = group.cols || [];
                var spacing2 = "";
                for (var _i22 = 1; _i22 < _cols.length; _i22++) {
                  spacing2 += _i22 % 2 ? "0em " : "1em ";
                }
                table.setAttribute("columnspacing", spacing2.trim());
              } else if (group.colSeparationType === "alignat" || group.colSeparationType === "gather") {
                table.setAttribute("columnspacing", "0em");
              } else if (group.colSeparationType === "small") {
                table.setAttribute("columnspacing", "0.2778em");
              } else if (group.colSeparationType === "CD") {
                table.setAttribute("columnspacing", "0.5em");
              } else {
                table.setAttribute("columnspacing", "1em");
              }
              var rowLines = "";
              var hlines = group.hLinesBeforeRow;
              menclose += hlines[0].length > 0 ? "left " : "";
              menclose += hlines[hlines.length - 1].length > 0 ? "right " : "";
              for (var _i32 = 1; _i32 < hlines.length - 1; _i32++) {
                rowLines += hlines[_i32].length === 0 ? "none " : hlines[_i32][0] ? "dashed " : "solid ";
              }
              if (/[sd]/.test(rowLines)) {
                table.setAttribute("rowlines", rowLines.trim());
              }
              if (menclose !== "") {
                table = new mathMLTree.MathNode("menclose", [table]);
                table.setAttribute("notation", menclose.trim());
              }
              if (group.arraystretch && group.arraystretch < 1) {
                table = new mathMLTree.MathNode("mstyle", [table]);
                table.setAttribute("scriptlevel", "1");
              }
              return table;
            };
            var alignedHandler = function alignedHandler2(context, args) {
              if (context.envName.indexOf("ed") === -1) {
                validateAmsEnvironmentContext(context);
              }
              var cols = [];
              var separationType = context.envName.indexOf("at") > -1 ? "alignat" : "align";
              var isSplit = context.envName === "split";
              var res = parseArray(context.parser, {
                cols,
                addJot: true,
                autoTag: isSplit ? void 0 : getAutoTag(context.envName),
                emptySingleRow: true,
                colSeparationType: separationType,
                maxNumCols: isSplit ? 2 : void 0,
                leqno: context.parser.settings.leqno
              }, "display");
              var numMaths;
              var numCols = 0;
              var emptyGroup = {
                type: "ordgroup",
                mode: context.mode,
                body: []
              };
              if (args[0] && args[0].type === "ordgroup") {
                var arg0 = "";
                for (var i2 = 0; i2 < args[0].body.length; i2++) {
                  var textord2 = assertNodeType(args[0].body[i2], "textord");
                  arg0 += textord2.text;
                }
                numMaths = Number(arg0);
                numCols = numMaths * 2;
              }
              var isAligned = !numCols;
              res.body.forEach(function(row) {
                for (var _i42 = 1; _i42 < row.length; _i42 += 2) {
                  var styling = assertNodeType(row[_i42], "styling");
                  var ordgroup = assertNodeType(styling.body[0], "ordgroup");
                  ordgroup.body.unshift(emptyGroup);
                }
                if (!isAligned) {
                  var curMaths = row.length / 2;
                  if (numMaths < curMaths) {
                    throw new src_ParseError("Too many math in a row: " + ("expected " + numMaths + ", but got " + curMaths), row[0]);
                  }
                } else if (numCols < row.length) {
                  numCols = row.length;
                }
              });
              for (var _i52 = 0; _i52 < numCols; ++_i52) {
                var align = "r";
                var pregap = 0;
                if (_i52 % 2 === 1) {
                  align = "l";
                } else if (_i52 > 0 && isAligned) {
                  pregap = 1;
                }
                cols[_i52] = {
                  type: "align",
                  align,
                  pregap,
                  postgap: 0
                };
              }
              res.colSeparationType = isAligned ? "align" : "alignat";
              return res;
            };
            defineEnvironment({
              type: "array",
              names: ["array", "darray"],
              props: {
                numArgs: 1
              },
              handler: function handler(context, args) {
                var symNode = checkSymbolNodeType(args[0]);
                var colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
                var cols = colalign.map(function(nde) {
                  var node = assertSymbolNodeType(nde);
                  var ca = node.text;
                  if ("lcr".indexOf(ca) !== -1) {
                    return {
                      type: "align",
                      align: ca
                    };
                  } else if (ca === "|") {
                    return {
                      type: "separator",
                      separator: "|"
                    };
                  } else if (ca === ":") {
                    return {
                      type: "separator",
                      separator: ":"
                    };
                  }
                  throw new src_ParseError("Unknown column alignment: " + ca, nde);
                });
                var res = {
                  cols,
                  hskipBeforeAndAfter: true,
                  // \@preamble in lttab.dtx
                  maxNumCols: cols.length
                };
                return parseArray(context.parser, res, dCellStyle(context.envName));
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
              props: {
                numArgs: 0
              },
              handler: function handler(context) {
                var delimiters2 = {
                  "matrix": null,
                  "pmatrix": ["(", ")"],
                  "bmatrix": ["[", "]"],
                  "Bmatrix": ["\\{", "\\}"],
                  "vmatrix": ["|", "|"],
                  "Vmatrix": ["\\Vert", "\\Vert"]
                }[context.envName.replace("*", "")];
                var colAlign = "c";
                var payload = {
                  hskipBeforeAndAfter: false,
                  cols: [{
                    type: "align",
                    align: colAlign
                  }]
                };
                if (context.envName.charAt(context.envName.length - 1) === "*") {
                  var parser = context.parser;
                  parser.consumeSpaces();
                  if (parser.fetch().text === "[") {
                    parser.consume();
                    parser.consumeSpaces();
                    colAlign = parser.fetch().text;
                    if ("lcr".indexOf(colAlign) === -1) {
                      throw new src_ParseError("Expected l or c or r", parser.nextToken);
                    }
                    parser.consume();
                    parser.consumeSpaces();
                    parser.expect("]");
                    parser.consume();
                    payload.cols = [{
                      type: "align",
                      align: colAlign
                    }];
                  }
                }
                var res = parseArray(context.parser, payload, dCellStyle(context.envName));
                var numCols = Math.max.apply(Math, [0].concat(res.body.map(function(row) {
                  return row.length;
                })));
                res.cols = new Array(numCols).fill({
                  type: "align",
                  align: colAlign
                });
                return delimiters2 ? {
                  type: "leftright",
                  mode: context.mode,
                  body: [res],
                  left: delimiters2[0],
                  right: delimiters2[1],
                  rightColor: void 0
                  // \right uninfluenced by \color in array
                } : res;
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["smallmatrix"],
              props: {
                numArgs: 0
              },
              handler: function handler(context) {
                var payload = {
                  arraystretch: 0.5
                };
                var res = parseArray(context.parser, payload, "script");
                res.colSeparationType = "small";
                return res;
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["subarray"],
              props: {
                numArgs: 1
              },
              handler: function handler(context, args) {
                var symNode = checkSymbolNodeType(args[0]);
                var colalign = symNode ? [args[0]] : assertNodeType(args[0], "ordgroup").body;
                var cols = colalign.map(function(nde) {
                  var node = assertSymbolNodeType(nde);
                  var ca = node.text;
                  if ("lc".indexOf(ca) !== -1) {
                    return {
                      type: "align",
                      align: ca
                    };
                  }
                  throw new src_ParseError("Unknown column alignment: " + ca, nde);
                });
                if (cols.length > 1) {
                  throw new src_ParseError("{subarray} can contain only one column");
                }
                var res = {
                  cols,
                  hskipBeforeAndAfter: false,
                  arraystretch: 0.5
                };
                res = parseArray(context.parser, res, "script");
                if (res.body.length > 0 && res.body[0].length > 1) {
                  throw new src_ParseError("{subarray} can contain only one column");
                }
                return res;
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["cases", "dcases", "rcases", "drcases"],
              props: {
                numArgs: 0
              },
              handler: function handler(context) {
                var payload = {
                  arraystretch: 1.2,
                  cols: [{
                    type: "align",
                    align: "l",
                    pregap: 0,
                    // TODO(kevinb) get the current style.
                    // For now we use the metrics for TEXT style which is what we were
                    // doing before.  Before attempting to get the current style we
                    // should look at TeX's behavior especially for \over and matrices.
                    postgap: 1
                    /* 1em quad */
                  }, {
                    type: "align",
                    align: "l",
                    pregap: 0,
                    postgap: 0
                  }]
                };
                var res = parseArray(context.parser, payload, dCellStyle(context.envName));
                return {
                  type: "leftright",
                  mode: context.mode,
                  body: [res],
                  left: context.envName.indexOf("r") > -1 ? "." : "\\{",
                  right: context.envName.indexOf("r") > -1 ? "\\}" : ".",
                  rightColor: void 0
                };
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["align", "align*", "aligned", "split"],
              props: {
                numArgs: 0
              },
              handler: alignedHandler,
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["gathered", "gather", "gather*"],
              props: {
                numArgs: 0
              },
              handler: function handler(context) {
                if (utils.contains(["gather", "gather*"], context.envName)) {
                  validateAmsEnvironmentContext(context);
                }
                var res = {
                  cols: [{
                    type: "align",
                    align: "c"
                  }],
                  addJot: true,
                  colSeparationType: "gather",
                  autoTag: getAutoTag(context.envName),
                  emptySingleRow: true,
                  leqno: context.parser.settings.leqno
                };
                return parseArray(context.parser, res, "display");
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["alignat", "alignat*", "alignedat"],
              props: {
                numArgs: 1
              },
              handler: alignedHandler,
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["equation", "equation*"],
              props: {
                numArgs: 0
              },
              handler: function handler(context) {
                validateAmsEnvironmentContext(context);
                var res = {
                  autoTag: getAutoTag(context.envName),
                  emptySingleRow: true,
                  singleRow: true,
                  maxNumCols: 1,
                  leqno: context.parser.settings.leqno
                };
                return parseArray(context.parser, res, "display");
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineEnvironment({
              type: "array",
              names: ["CD"],
              props: {
                numArgs: 0
              },
              handler: function handler(context) {
                validateAmsEnvironmentContext(context);
                return parseCD(context.parser);
              },
              htmlBuilder: array_htmlBuilder,
              mathmlBuilder: array_mathmlBuilder
            });
            defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}");
            defineMacro("\\notag", "\\nonumber");
            defineFunction({
              type: "text",
              // Doesn't matter what this is.
              names: ["\\hline", "\\hdashline"],
              props: {
                numArgs: 0,
                allowedInText: true,
                allowedInMath: true
              },
              handler: function handler(context, args) {
                throw new src_ParseError(context.funcName + " valid only within array environment");
              }
            });
            ;
            var environments = _environments;
            var src_environments = environments;
            ;
            defineFunction({
              type: "environment",
              names: ["\\begin", "\\end"],
              props: {
                numArgs: 1,
                argTypes: ["text"]
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var nameGroup = args[0];
                if (nameGroup.type !== "ordgroup") {
                  throw new src_ParseError("Invalid environment name", nameGroup);
                }
                var envName = "";
                for (var i2 = 0; i2 < nameGroup.body.length; ++i2) {
                  envName += assertNodeType(nameGroup.body[i2], "textord").text;
                }
                if (funcName === "\\begin") {
                  if (!src_environments.hasOwnProperty(envName)) {
                    throw new src_ParseError("No such environment: " + envName, nameGroup);
                  }
                  var env = src_environments[envName];
                  var _parser$parseArgument = parser.parseArguments("\\begin{" + envName + "}", env), _args = _parser$parseArgument.args, optArgs = _parser$parseArgument.optArgs;
                  var context = {
                    mode: parser.mode,
                    envName,
                    parser
                  };
                  var result = env.handler(context, _args, optArgs);
                  parser.expect("\\end", false);
                  var endNameToken = parser.nextToken;
                  var end = assertNodeType(parser.parseFunction(), "environment");
                  if (end.name !== envName) {
                    throw new src_ParseError("Mismatch: \\begin{" + envName + "} matched by \\end{" + end.name + "}", endNameToken);
                  }
                  return result;
                }
                return {
                  type: "environment",
                  mode: parser.mode,
                  name: envName,
                  nameGroup
                };
              }
            });
            ;
            var font_htmlBuilder = function htmlBuilder2(group, options) {
              var font = group.font;
              var newOptions = options.withFont(font);
              return buildGroup(group.body, newOptions);
            };
            var font_mathmlBuilder = function mathmlBuilder2(group, options) {
              var font = group.font;
              var newOptions = options.withFont(font);
              return buildMathML_buildGroup(group.body, newOptions);
            };
            var fontAliases = {
              "\\Bbb": "\\mathbb",
              "\\bold": "\\mathbf",
              "\\frak": "\\mathfrak",
              "\\bm": "\\boldsymbol"
            };
            defineFunction({
              type: "font",
              names: [
                // styles, except \boldsymbol defined below
                "\\mathrm",
                "\\mathit",
                "\\mathbf",
                "\\mathnormal",
                // families
                "\\mathbb",
                "\\mathcal",
                "\\mathfrak",
                "\\mathscr",
                "\\mathsf",
                "\\mathtt",
                // aliases, except \bm defined below
                "\\Bbb",
                "\\bold",
                "\\frak"
              ],
              props: {
                numArgs: 1,
                allowedInArgument: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var body = normalizeArgument(args[0]);
                var func = funcName;
                if (func in fontAliases) {
                  func = fontAliases[func];
                }
                return {
                  type: "font",
                  mode: parser.mode,
                  font: func.slice(1),
                  body
                };
              },
              htmlBuilder: font_htmlBuilder,
              mathmlBuilder: font_mathmlBuilder
            });
            defineFunction({
              type: "mclass",
              names: ["\\boldsymbol", "\\bm"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser;
                var body = args[0];
                var isCharacterBox2 = utils.isCharacterBox(body);
                return {
                  type: "mclass",
                  mode: parser.mode,
                  mclass: binrelClass(body),
                  body: [{
                    type: "font",
                    mode: parser.mode,
                    font: "boldsymbol",
                    body
                  }],
                  isCharacterBox: isCharacterBox2
                };
              }
            });
            defineFunction({
              type: "font",
              names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
              props: {
                numArgs: 0,
                allowedInText: true
              },
              handler: function handler(_ref3, args) {
                var parser = _ref3.parser, funcName = _ref3.funcName, breakOnTokenText = _ref3.breakOnTokenText;
                var mode = parser.mode;
                var body = parser.parseExpression(true, breakOnTokenText);
                var style = "math" + funcName.slice(1);
                return {
                  type: "font",
                  mode,
                  font: style,
                  body: {
                    type: "ordgroup",
                    mode: parser.mode,
                    body
                  }
                };
              },
              htmlBuilder: font_htmlBuilder,
              mathmlBuilder: font_mathmlBuilder
            });
            ;
            var adjustStyle = function adjustStyle2(size, originalStyle) {
              var style = originalStyle;
              if (size === "display") {
                style = style.id >= src_Style.SCRIPT.id ? style.text() : src_Style.DISPLAY;
              } else if (size === "text" && style.size === src_Style.DISPLAY.size) {
                style = src_Style.TEXT;
              } else if (size === "script") {
                style = src_Style.SCRIPT;
              } else if (size === "scriptscript") {
                style = src_Style.SCRIPTSCRIPT;
              }
              return style;
            };
            var genfrac_htmlBuilder = function htmlBuilder2(group, options) {
              var style = adjustStyle(group.size, options.style);
              var nstyle = style.fracNum();
              var dstyle = style.fracDen();
              var newOptions;
              newOptions = options.havingStyle(nstyle);
              var numerm = buildGroup(group.numer, newOptions, options);
              if (group.continued) {
                var hStrut = 8.5 / options.fontMetrics().ptPerEm;
                var dStrut = 3.5 / options.fontMetrics().ptPerEm;
                numerm.height = numerm.height < hStrut ? hStrut : numerm.height;
                numerm.depth = numerm.depth < dStrut ? dStrut : numerm.depth;
              }
              newOptions = options.havingStyle(dstyle);
              var denomm = buildGroup(group.denom, newOptions, options);
              var rule;
              var ruleWidth;
              var ruleSpacing;
              if (group.hasBarLine) {
                if (group.barSize) {
                  ruleWidth = calculateSize(group.barSize, options);
                  rule = buildCommon.makeLineSpan("frac-line", options, ruleWidth);
                } else {
                  rule = buildCommon.makeLineSpan("frac-line", options);
                }
                ruleWidth = rule.height;
                ruleSpacing = rule.height;
              } else {
                rule = null;
                ruleWidth = 0;
                ruleSpacing = options.fontMetrics().defaultRuleThickness;
              }
              var numShift;
              var clearance;
              var denomShift;
              if (style.size === src_Style.DISPLAY.size || group.size === "display") {
                numShift = options.fontMetrics().num1;
                if (ruleWidth > 0) {
                  clearance = 3 * ruleSpacing;
                } else {
                  clearance = 7 * ruleSpacing;
                }
                denomShift = options.fontMetrics().denom1;
              } else {
                if (ruleWidth > 0) {
                  numShift = options.fontMetrics().num2;
                  clearance = ruleSpacing;
                } else {
                  numShift = options.fontMetrics().num3;
                  clearance = 3 * ruleSpacing;
                }
                denomShift = options.fontMetrics().denom2;
              }
              var frac;
              if (!rule) {
                var candidateClearance = numShift - numerm.depth - (denomm.height - denomShift);
                if (candidateClearance < clearance) {
                  numShift += 0.5 * (clearance - candidateClearance);
                  denomShift += 0.5 * (clearance - candidateClearance);
                }
                frac = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: denomm,
                    shift: denomShift
                  }, {
                    type: "elem",
                    elem: numerm,
                    shift: -numShift
                  }]
                }, options);
              } else {
                var axisHeight = options.fontMetrics().axisHeight;
                if (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth) < clearance) {
                  numShift += clearance - (numShift - numerm.depth - (axisHeight + 0.5 * ruleWidth));
                }
                if (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift) < clearance) {
                  denomShift += clearance - (axisHeight - 0.5 * ruleWidth - (denomm.height - denomShift));
                }
                var midShift = -(axisHeight - 0.5 * ruleWidth);
                frac = buildCommon.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: denomm,
                    shift: denomShift
                  }, {
                    type: "elem",
                    elem: rule,
                    shift: midShift
                  }, {
                    type: "elem",
                    elem: numerm,
                    shift: -numShift
                  }]
                }, options);
              }
              newOptions = options.havingStyle(style);
              frac.height *= newOptions.sizeMultiplier / options.sizeMultiplier;
              frac.depth *= newOptions.sizeMultiplier / options.sizeMultiplier;
              var delimSize;
              if (style.size === src_Style.DISPLAY.size) {
                delimSize = options.fontMetrics().delim1;
              } else if (style.size === src_Style.SCRIPTSCRIPT.size) {
                delimSize = options.havingStyle(src_Style.SCRIPT).fontMetrics().delim2;
              } else {
                delimSize = options.fontMetrics().delim2;
              }
              var leftDelim;
              var rightDelim;
              if (group.leftDelim == null) {
                leftDelim = makeNullDelimiter(options, ["mopen"]);
              } else {
                leftDelim = delimiter.customSizedDelim(group.leftDelim, delimSize, true, options.havingStyle(style), group.mode, ["mopen"]);
              }
              if (group.continued) {
                rightDelim = buildCommon.makeSpan([]);
              } else if (group.rightDelim == null) {
                rightDelim = makeNullDelimiter(options, ["mclose"]);
              } else {
                rightDelim = delimiter.customSizedDelim(group.rightDelim, delimSize, true, options.havingStyle(style), group.mode, ["mclose"]);
              }
              return buildCommon.makeSpan(["mord"].concat(newOptions.sizingClasses(options)), [leftDelim, buildCommon.makeSpan(["mfrac"], [frac]), rightDelim], options);
            };
            var genfrac_mathmlBuilder = function mathmlBuilder2(group, options) {
              var node = new mathMLTree.MathNode("mfrac", [buildMathML_buildGroup(group.numer, options), buildMathML_buildGroup(group.denom, options)]);
              if (!group.hasBarLine) {
                node.setAttribute("linethickness", "0px");
              } else if (group.barSize) {
                var ruleWidth = calculateSize(group.barSize, options);
                node.setAttribute("linethickness", makeEm(ruleWidth));
              }
              var style = adjustStyle(group.size, options.style);
              if (style.size !== options.style.size) {
                node = new mathMLTree.MathNode("mstyle", [node]);
                var isDisplay = style.size === src_Style.DISPLAY.size ? "true" : "false";
                node.setAttribute("displaystyle", isDisplay);
                node.setAttribute("scriptlevel", "0");
              }
              if (group.leftDelim != null || group.rightDelim != null) {
                var withDelims = [];
                if (group.leftDelim != null) {
                  var leftOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.leftDelim.replace("\\", ""))]);
                  leftOp.setAttribute("fence", "true");
                  withDelims.push(leftOp);
                }
                withDelims.push(node);
                if (group.rightDelim != null) {
                  var rightOp = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode(group.rightDelim.replace("\\", ""))]);
                  rightOp.setAttribute("fence", "true");
                  withDelims.push(rightOp);
                }
                return makeRow(withDelims);
              }
              return node;
            };
            defineFunction({
              type: "genfrac",
              names: [
                "\\dfrac",
                "\\frac",
                "\\tfrac",
                "\\dbinom",
                "\\binom",
                "\\tbinom",
                "\\\\atopfrac",
                // can’t be entered directly
                "\\\\bracefrac",
                "\\\\brackfrac"
                // ditto
              ],
              props: {
                numArgs: 2,
                allowedInArgument: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var numer = args[0];
                var denom = args[1];
                var hasBarLine;
                var leftDelim = null;
                var rightDelim = null;
                var size = "auto";
                switch (funcName) {
                  case "\\dfrac":
                  case "\\frac":
                  case "\\tfrac":
                    hasBarLine = true;
                    break;
                  case "\\\\atopfrac":
                    hasBarLine = false;
                    break;
                  case "\\dbinom":
                  case "\\binom":
                  case "\\tbinom":
                    hasBarLine = false;
                    leftDelim = "(";
                    rightDelim = ")";
                    break;
                  case "\\\\bracefrac":
                    hasBarLine = false;
                    leftDelim = "\\{";
                    rightDelim = "\\}";
                    break;
                  case "\\\\brackfrac":
                    hasBarLine = false;
                    leftDelim = "[";
                    rightDelim = "]";
                    break;
                  default:
                    throw new Error("Unrecognized genfrac command");
                }
                switch (funcName) {
                  case "\\dfrac":
                  case "\\dbinom":
                    size = "display";
                    break;
                  case "\\tfrac":
                  case "\\tbinom":
                    size = "text";
                    break;
                }
                return {
                  type: "genfrac",
                  mode: parser.mode,
                  continued: false,
                  numer,
                  denom,
                  hasBarLine,
                  leftDelim,
                  rightDelim,
                  size,
                  barSize: null
                };
              },
              htmlBuilder: genfrac_htmlBuilder,
              mathmlBuilder: genfrac_mathmlBuilder
            });
            defineFunction({
              type: "genfrac",
              names: ["\\cfrac"],
              props: {
                numArgs: 2
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser, funcName = _ref2.funcName;
                var numer = args[0];
                var denom = args[1];
                return {
                  type: "genfrac",
                  mode: parser.mode,
                  continued: true,
                  numer,
                  denom,
                  hasBarLine: true,
                  leftDelim: null,
                  rightDelim: null,
                  size: "display",
                  barSize: null
                };
              }
            });
            defineFunction({
              type: "infix",
              names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
              props: {
                numArgs: 0,
                infix: true
              },
              handler: function handler(_ref3) {
                var parser = _ref3.parser, funcName = _ref3.funcName, token = _ref3.token;
                var replaceWith;
                switch (funcName) {
                  case "\\over":
                    replaceWith = "\\frac";
                    break;
                  case "\\choose":
                    replaceWith = "\\binom";
                    break;
                  case "\\atop":
                    replaceWith = "\\\\atopfrac";
                    break;
                  case "\\brace":
                    replaceWith = "\\\\bracefrac";
                    break;
                  case "\\brack":
                    replaceWith = "\\\\brackfrac";
                    break;
                  default:
                    throw new Error("Unrecognized infix genfrac command");
                }
                return {
                  type: "infix",
                  mode: parser.mode,
                  replaceWith,
                  token
                };
              }
            });
            var stylArray = ["display", "text", "script", "scriptscript"];
            var delimFromValue = function delimFromValue2(delimString) {
              var delim = null;
              if (delimString.length > 0) {
                delim = delimString;
                delim = delim === "." ? null : delim;
              }
              return delim;
            };
            defineFunction({
              type: "genfrac",
              names: ["\\genfrac"],
              props: {
                numArgs: 6,
                allowedInArgument: true,
                argTypes: ["math", "math", "size", "text", "math", "math"]
              },
              handler: function handler(_ref4, args) {
                var parser = _ref4.parser;
                var numer = args[4];
                var denom = args[5];
                var leftNode = normalizeArgument(args[0]);
                var leftDelim = leftNode.type === "atom" && leftNode.family === "open" ? delimFromValue(leftNode.text) : null;
                var rightNode = normalizeArgument(args[1]);
                var rightDelim = rightNode.type === "atom" && rightNode.family === "close" ? delimFromValue(rightNode.text) : null;
                var barNode = assertNodeType(args[2], "size");
                var hasBarLine;
                var barSize = null;
                if (barNode.isBlank) {
                  hasBarLine = true;
                } else {
                  barSize = barNode.value;
                  hasBarLine = barSize.number > 0;
                }
                var size = "auto";
                var styl = args[3];
                if (styl.type === "ordgroup") {
                  if (styl.body.length > 0) {
                    var textOrd = assertNodeType(styl.body[0], "textord");
                    size = stylArray[Number(textOrd.text)];
                  }
                } else {
                  styl = assertNodeType(styl, "textord");
                  size = stylArray[Number(styl.text)];
                }
                return {
                  type: "genfrac",
                  mode: parser.mode,
                  numer,
                  denom,
                  continued: false,
                  hasBarLine,
                  barSize,
                  leftDelim,
                  rightDelim,
                  size
                };
              },
              htmlBuilder: genfrac_htmlBuilder,
              mathmlBuilder: genfrac_mathmlBuilder
            });
            defineFunction({
              type: "infix",
              names: ["\\above"],
              props: {
                numArgs: 1,
                argTypes: ["size"],
                infix: true
              },
              handler: function handler(_ref5, args) {
                var parser = _ref5.parser, funcName = _ref5.funcName, token = _ref5.token;
                return {
                  type: "infix",
                  mode: parser.mode,
                  replaceWith: "\\\\abovefrac",
                  size: assertNodeType(args[0], "size").value,
                  token
                };
              }
            });
            defineFunction({
              type: "genfrac",
              names: ["\\\\abovefrac"],
              props: {
                numArgs: 3,
                argTypes: ["math", "size", "math"]
              },
              handler: function handler(_ref6, args) {
                var parser = _ref6.parser, funcName = _ref6.funcName;
                var numer = args[0];
                var barSize = assert(assertNodeType(args[1], "infix").size);
                var denom = args[2];
                var hasBarLine = barSize.number > 0;
                return {
                  type: "genfrac",
                  mode: parser.mode,
                  numer,
                  denom,
                  continued: false,
                  hasBarLine,
                  barSize,
                  leftDelim: null,
                  rightDelim: null,
                  size: "auto"
                };
              },
              htmlBuilder: genfrac_htmlBuilder,
              mathmlBuilder: genfrac_mathmlBuilder
            });
            ;
            var horizBrace_htmlBuilder = function htmlBuilder2(grp, options) {
              var style = options.style;
              var supSubGroup;
              var group;
              if (grp.type === "supsub") {
                supSubGroup = grp.sup ? buildGroup(grp.sup, options.havingStyle(style.sup()), options) : buildGroup(grp.sub, options.havingStyle(style.sub()), options);
                group = assertNodeType(grp.base, "horizBrace");
              } else {
                group = assertNodeType(grp, "horizBrace");
              }
              var body = buildGroup(group.base, options.havingBaseStyle(src_Style.DISPLAY));
              var braceBody = stretchy.svgSpan(group, options);
              var vlist;
              if (group.isOver) {
                vlist = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: body
                  }, {
                    type: "kern",
                    size: 0.1
                  }, {
                    type: "elem",
                    elem: braceBody
                  }]
                }, options);
                vlist.children[0].children[0].children[1].classes.push("svg-align");
              } else {
                vlist = buildCommon.makeVList({
                  positionType: "bottom",
                  positionData: body.depth + 0.1 + braceBody.height,
                  children: [{
                    type: "elem",
                    elem: braceBody
                  }, {
                    type: "kern",
                    size: 0.1
                  }, {
                    type: "elem",
                    elem: body
                  }]
                }, options);
                vlist.children[0].children[0].children[0].classes.push("svg-align");
              }
              if (supSubGroup) {
                var vSpan = buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options);
                if (group.isOver) {
                  vlist = buildCommon.makeVList({
                    positionType: "firstBaseline",
                    children: [{
                      type: "elem",
                      elem: vSpan
                    }, {
                      type: "kern",
                      size: 0.2
                    }, {
                      type: "elem",
                      elem: supSubGroup
                    }]
                  }, options);
                } else {
                  vlist = buildCommon.makeVList({
                    positionType: "bottom",
                    positionData: vSpan.depth + 0.2 + supSubGroup.height + supSubGroup.depth,
                    children: [{
                      type: "elem",
                      elem: supSubGroup
                    }, {
                      type: "kern",
                      size: 0.2
                    }, {
                      type: "elem",
                      elem: vSpan
                    }]
                  }, options);
                }
              }
              return buildCommon.makeSpan(["mord", group.isOver ? "mover" : "munder"], [vlist], options);
            };
            var horizBrace_mathmlBuilder = function mathmlBuilder2(group, options) {
              var accentNode = stretchy.mathMLnode(group.label);
              return new mathMLTree.MathNode(group.isOver ? "mover" : "munder", [buildMathML_buildGroup(group.base, options), accentNode]);
            };
            defineFunction({
              type: "horizBrace",
              names: ["\\overbrace", "\\underbrace"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                return {
                  type: "horizBrace",
                  mode: parser.mode,
                  label: funcName,
                  isOver: /^\\over/.test(funcName),
                  base: args[0]
                };
              },
              htmlBuilder: horizBrace_htmlBuilder,
              mathmlBuilder: horizBrace_mathmlBuilder
            });
            ;
            defineFunction({
              type: "href",
              names: ["\\href"],
              props: {
                numArgs: 2,
                argTypes: ["url", "original"],
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                var body = args[1];
                var href = assertNodeType(args[0], "url").url;
                if (!parser.settings.isTrusted({
                  command: "\\href",
                  url: href
                })) {
                  return parser.formatUnsupportedCmd("\\href");
                }
                return {
                  type: "href",
                  mode: parser.mode,
                  href,
                  body: ordargument(body)
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var elements = buildExpression(group.body, options, false);
                return buildCommon.makeAnchor(group.href, [], elements, options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var math2 = buildExpressionRow(group.body, options);
                if (!(math2 instanceof MathNode)) {
                  math2 = new MathNode("mrow", [math2]);
                }
                math2.setAttribute("href", group.href);
                return math2;
              }
            });
            defineFunction({
              type: "href",
              names: ["\\url"],
              props: {
                numArgs: 1,
                argTypes: ["url"],
                allowedInText: true
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser;
                var href = assertNodeType(args[0], "url").url;
                if (!parser.settings.isTrusted({
                  command: "\\url",
                  url: href
                })) {
                  return parser.formatUnsupportedCmd("\\url");
                }
                var chars = [];
                for (var i2 = 0; i2 < href.length; i2++) {
                  var c = href[i2];
                  if (c === "~") {
                    c = "\\textasciitilde";
                  }
                  chars.push({
                    type: "textord",
                    mode: "text",
                    text: c
                  });
                }
                var body = {
                  type: "text",
                  mode: parser.mode,
                  font: "\\texttt",
                  body: chars
                };
                return {
                  type: "href",
                  mode: parser.mode,
                  href,
                  body: ordargument(body)
                };
              }
            });
            ;
            defineFunction({
              type: "hbox",
              names: ["\\hbox"],
              props: {
                numArgs: 1,
                argTypes: ["text"],
                allowedInText: true,
                primitive: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                return {
                  type: "hbox",
                  mode: parser.mode,
                  body: ordargument(args[0])
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var elements = buildExpression(group.body, options, false);
                return buildCommon.makeFragment(elements);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                return new mathMLTree.MathNode("mrow", buildMathML_buildExpression(group.body, options));
              }
            });
            ;
            defineFunction({
              type: "html",
              names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
              props: {
                numArgs: 2,
                argTypes: ["raw", "original"],
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName, token = _ref.token;
                var value = assertNodeType(args[0], "raw").string;
                var body = args[1];
                if (parser.settings.strict) {
                  parser.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
                }
                var trustContext;
                var attributes = {};
                switch (funcName) {
                  case "\\htmlClass":
                    attributes.class = value;
                    trustContext = {
                      command: "\\htmlClass",
                      class: value
                    };
                    break;
                  case "\\htmlId":
                    attributes.id = value;
                    trustContext = {
                      command: "\\htmlId",
                      id: value
                    };
                    break;
                  case "\\htmlStyle":
                    attributes.style = value;
                    trustContext = {
                      command: "\\htmlStyle",
                      style: value
                    };
                    break;
                  case "\\htmlData": {
                    var data = value.split(",");
                    for (var i2 = 0; i2 < data.length; i2++) {
                      var keyVal = data[i2].split("=");
                      if (keyVal.length !== 2) {
                        throw new src_ParseError("Error parsing key-value for \\htmlData");
                      }
                      attributes["data-" + keyVal[0].trim()] = keyVal[1].trim();
                    }
                    trustContext = {
                      command: "\\htmlData",
                      attributes
                    };
                    break;
                  }
                  default:
                    throw new Error("Unrecognized html command");
                }
                if (!parser.settings.isTrusted(trustContext)) {
                  return parser.formatUnsupportedCmd(funcName);
                }
                return {
                  type: "html",
                  mode: parser.mode,
                  attributes,
                  body: ordargument(body)
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var elements = buildExpression(group.body, options, false);
                var classes = ["enclosing"];
                if (group.attributes.class) {
                  classes.push.apply(classes, group.attributes.class.trim().split(/\s+/));
                }
                var span = buildCommon.makeSpan(classes, elements, options);
                for (var attr in group.attributes) {
                  if (attr !== "class" && group.attributes.hasOwnProperty(attr)) {
                    span.setAttribute(attr, group.attributes[attr]);
                  }
                }
                return span;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                return buildExpressionRow(group.body, options);
              }
            });
            ;
            defineFunction({
              type: "htmlmathml",
              names: ["\\html@mathml"],
              props: {
                numArgs: 2,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                return {
                  type: "htmlmathml",
                  mode: parser.mode,
                  html: ordargument(args[0]),
                  mathml: ordargument(args[1])
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var elements = buildExpression(group.html, options, false);
                return buildCommon.makeFragment(elements);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                return buildExpressionRow(group.mathml, options);
              }
            });
            ;
            var sizeData = function sizeData2(str) {
              if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(str)) {
                return {
                  number: +str,
                  unit: "bp"
                };
              } else {
                var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(str);
                if (!match) {
                  throw new src_ParseError("Invalid size: '" + str + "' in \\includegraphics");
                }
                var data = {
                  number: +(match[1] + match[2]),
                  // sign + magnitude, cast to number
                  unit: match[3]
                };
                if (!validUnit(data)) {
                  throw new src_ParseError("Invalid unit: '" + data.unit + "' in \\includegraphics.");
                }
                return data;
              }
            };
            defineFunction({
              type: "includegraphics",
              names: ["\\includegraphics"],
              props: {
                numArgs: 1,
                numOptionalArgs: 1,
                argTypes: ["raw", "url"],
                allowedInText: false
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser;
                var width = {
                  number: 0,
                  unit: "em"
                };
                var height = {
                  number: 0.9,
                  unit: "em"
                };
                var totalheight = {
                  number: 0,
                  unit: "em"
                };
                var alt = "";
                if (optArgs[0]) {
                  var attributeStr = assertNodeType(optArgs[0], "raw").string;
                  var attributes = attributeStr.split(",");
                  for (var i2 = 0; i2 < attributes.length; i2++) {
                    var keyVal = attributes[i2].split("=");
                    if (keyVal.length === 2) {
                      var str = keyVal[1].trim();
                      switch (keyVal[0].trim()) {
                        case "alt":
                          alt = str;
                          break;
                        case "width":
                          width = sizeData(str);
                          break;
                        case "height":
                          height = sizeData(str);
                          break;
                        case "totalheight":
                          totalheight = sizeData(str);
                          break;
                        default:
                          throw new src_ParseError("Invalid key: '" + keyVal[0] + "' in \\includegraphics.");
                      }
                    }
                  }
                }
                var src = assertNodeType(args[0], "url").url;
                if (alt === "") {
                  alt = src;
                  alt = alt.replace(/^.*[\\/]/, "");
                  alt = alt.substring(0, alt.lastIndexOf("."));
                }
                if (!parser.settings.isTrusted({
                  command: "\\includegraphics",
                  url: src
                })) {
                  return parser.formatUnsupportedCmd("\\includegraphics");
                }
                return {
                  type: "includegraphics",
                  mode: parser.mode,
                  alt,
                  width,
                  height,
                  totalheight,
                  src
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var height = calculateSize(group.height, options);
                var depth = 0;
                if (group.totalheight.number > 0) {
                  depth = calculateSize(group.totalheight, options) - height;
                }
                var width = 0;
                if (group.width.number > 0) {
                  width = calculateSize(group.width, options);
                }
                var style = {
                  height: makeEm(height + depth)
                };
                if (width > 0) {
                  style.width = makeEm(width);
                }
                if (depth > 0) {
                  style.verticalAlign = makeEm(-depth);
                }
                var node = new Img(group.src, group.alt, style);
                node.height = height;
                node.depth = depth;
                return node;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mglyph", []);
                node.setAttribute("alt", group.alt);
                var height = calculateSize(group.height, options);
                var depth = 0;
                if (group.totalheight.number > 0) {
                  depth = calculateSize(group.totalheight, options) - height;
                  node.setAttribute("valign", makeEm(-depth));
                }
                node.setAttribute("height", makeEm(height + depth));
                if (group.width.number > 0) {
                  var width = calculateSize(group.width, options);
                  node.setAttribute("width", makeEm(width));
                }
                node.setAttribute("src", group.src);
                return node;
              }
            });
            ;
            defineFunction({
              type: "kern",
              names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
              props: {
                numArgs: 1,
                argTypes: ["size"],
                primitive: true,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var size = assertNodeType(args[0], "size");
                if (parser.settings.strict) {
                  var mathFunction = funcName[1] === "m";
                  var muUnit = size.value.unit === "mu";
                  if (mathFunction) {
                    if (!muUnit) {
                      parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " supports only mu units, " + ("not " + size.value.unit + " units"));
                    }
                    if (parser.mode !== "math") {
                      parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " works only in math mode");
                    }
                  } else {
                    if (muUnit) {
                      parser.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + funcName + " doesn't support mu units");
                    }
                  }
                }
                return {
                  type: "kern",
                  mode: parser.mode,
                  dimension: size.value
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                return buildCommon.makeGlue(group.dimension, options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var dimension = calculateSize(group.dimension, options);
                return new mathMLTree.SpaceNode(dimension);
              }
            });
            ;
            defineFunction({
              type: "lap",
              names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var body = args[0];
                return {
                  type: "lap",
                  mode: parser.mode,
                  alignment: funcName.slice(5),
                  body
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var inner2;
                if (group.alignment === "clap") {
                  inner2 = buildCommon.makeSpan([], [buildGroup(group.body, options)]);
                  inner2 = buildCommon.makeSpan(["inner"], [inner2], options);
                } else {
                  inner2 = buildCommon.makeSpan(["inner"], [buildGroup(group.body, options)]);
                }
                var fix = buildCommon.makeSpan(["fix"], []);
                var node = buildCommon.makeSpan([group.alignment], [inner2, fix], options);
                var strut = buildCommon.makeSpan(["strut"]);
                strut.style.height = makeEm(node.height + node.depth);
                if (node.depth) {
                  strut.style.verticalAlign = makeEm(-node.depth);
                }
                node.children.unshift(strut);
                node = buildCommon.makeSpan(["thinbox"], [node], options);
                return buildCommon.makeSpan(["mord", "vbox"], [node], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
                if (group.alignment !== "rlap") {
                  var offset = group.alignment === "llap" ? "-1" : "-0.5";
                  node.setAttribute("lspace", offset + "width");
                }
                node.setAttribute("width", "0px");
                return node;
              }
            });
            ;
            defineFunction({
              type: "styling",
              names: ["\\(", "$"],
              props: {
                numArgs: 0,
                allowedInText: true,
                allowedInMath: false
              },
              handler: function handler(_ref, args) {
                var funcName = _ref.funcName, parser = _ref.parser;
                var outerMode = parser.mode;
                parser.switchMode("math");
                var close = funcName === "\\(" ? "\\)" : "$";
                var body = parser.parseExpression(false, close);
                parser.expect(close);
                parser.switchMode(outerMode);
                return {
                  type: "styling",
                  mode: parser.mode,
                  style: "text",
                  body
                };
              }
            });
            defineFunction({
              type: "text",
              // Doesn't matter what this is.
              names: ["\\)", "\\]"],
              props: {
                numArgs: 0,
                allowedInText: true,
                allowedInMath: false
              },
              handler: function handler(context, args) {
                throw new src_ParseError("Mismatched " + context.funcName);
              }
            });
            ;
            var chooseMathStyle = function chooseMathStyle2(group, options) {
              switch (options.style.size) {
                case src_Style.DISPLAY.size:
                  return group.display;
                case src_Style.TEXT.size:
                  return group.text;
                case src_Style.SCRIPT.size:
                  return group.script;
                case src_Style.SCRIPTSCRIPT.size:
                  return group.scriptscript;
                default:
                  return group.text;
              }
            };
            defineFunction({
              type: "mathchoice",
              names: ["\\mathchoice"],
              props: {
                numArgs: 4,
                primitive: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                return {
                  type: "mathchoice",
                  mode: parser.mode,
                  display: ordargument(args[0]),
                  text: ordargument(args[1]),
                  script: ordargument(args[2]),
                  scriptscript: ordargument(args[3])
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var body = chooseMathStyle(group, options);
                var elements = buildExpression(body, options, false);
                return buildCommon.makeFragment(elements);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var body = chooseMathStyle(group, options);
                return buildExpressionRow(body, options);
              }
            });
            ;
            var assembleSupSub = function assembleSupSub2(base, supGroup, subGroup, options, style, slant, baseShift) {
              base = buildCommon.makeSpan([], [base]);
              var subIsSingleCharacter = subGroup && utils.isCharacterBox(subGroup);
              var sub;
              var sup;
              if (supGroup) {
                var elem = buildGroup(supGroup, options.havingStyle(style.sup()), options);
                sup = {
                  elem,
                  kern: Math.max(options.fontMetrics().bigOpSpacing1, options.fontMetrics().bigOpSpacing3 - elem.depth)
                };
              }
              if (subGroup) {
                var _elem = buildGroup(subGroup, options.havingStyle(style.sub()), options);
                sub = {
                  elem: _elem,
                  kern: Math.max(options.fontMetrics().bigOpSpacing2, options.fontMetrics().bigOpSpacing4 - _elem.height)
                };
              }
              var finalGroup;
              if (sup && sub) {
                var bottom = options.fontMetrics().bigOpSpacing5 + sub.elem.height + sub.elem.depth + sub.kern + base.depth + baseShift;
                finalGroup = buildCommon.makeVList({
                  positionType: "bottom",
                  positionData: bottom,
                  children: [{
                    type: "kern",
                    size: options.fontMetrics().bigOpSpacing5
                  }, {
                    type: "elem",
                    elem: sub.elem,
                    marginLeft: makeEm(-slant)
                  }, {
                    type: "kern",
                    size: sub.kern
                  }, {
                    type: "elem",
                    elem: base
                  }, {
                    type: "kern",
                    size: sup.kern
                  }, {
                    type: "elem",
                    elem: sup.elem,
                    marginLeft: makeEm(slant)
                  }, {
                    type: "kern",
                    size: options.fontMetrics().bigOpSpacing5
                  }]
                }, options);
              } else if (sub) {
                var top = base.height - baseShift;
                finalGroup = buildCommon.makeVList({
                  positionType: "top",
                  positionData: top,
                  children: [{
                    type: "kern",
                    size: options.fontMetrics().bigOpSpacing5
                  }, {
                    type: "elem",
                    elem: sub.elem,
                    marginLeft: makeEm(-slant)
                  }, {
                    type: "kern",
                    size: sub.kern
                  }, {
                    type: "elem",
                    elem: base
                  }]
                }, options);
              } else if (sup) {
                var _bottom = base.depth + baseShift;
                finalGroup = buildCommon.makeVList({
                  positionType: "bottom",
                  positionData: _bottom,
                  children: [{
                    type: "elem",
                    elem: base
                  }, {
                    type: "kern",
                    size: sup.kern
                  }, {
                    type: "elem",
                    elem: sup.elem,
                    marginLeft: makeEm(slant)
                  }, {
                    type: "kern",
                    size: options.fontMetrics().bigOpSpacing5
                  }]
                }, options);
              } else {
                return base;
              }
              var parts = [finalGroup];
              if (sub && slant !== 0 && !subIsSingleCharacter) {
                var spacer = buildCommon.makeSpan(["mspace"], [], options);
                spacer.style.marginRight = makeEm(slant);
                parts.unshift(spacer);
              }
              return buildCommon.makeSpan(["mop", "op-limits"], parts, options);
            };
            ;
            var noSuccessor = ["\\smallint"];
            var op_htmlBuilder = function htmlBuilder2(grp, options) {
              var supGroup;
              var subGroup;
              var hasLimits = false;
              var group;
              if (grp.type === "supsub") {
                supGroup = grp.sup;
                subGroup = grp.sub;
                group = assertNodeType(grp.base, "op");
                hasLimits = true;
              } else {
                group = assertNodeType(grp, "op");
              }
              var style = options.style;
              var large = false;
              if (style.size === src_Style.DISPLAY.size && group.symbol && !utils.contains(noSuccessor, group.name)) {
                large = true;
              }
              var base;
              if (group.symbol) {
                var fontName = large ? "Size2-Regular" : "Size1-Regular";
                var stash = "";
                if (group.name === "\\oiint" || group.name === "\\oiiint") {
                  stash = group.name.slice(1);
                  group.name = stash === "oiint" ? "\\iint" : "\\iiint";
                }
                base = buildCommon.makeSymbol(group.name, fontName, "math", options, ["mop", "op-symbol", large ? "large-op" : "small-op"]);
                if (stash.length > 0) {
                  var italic = base.italic;
                  var oval = buildCommon.staticSvg(stash + "Size" + (large ? "2" : "1"), options);
                  base = buildCommon.makeVList({
                    positionType: "individualShift",
                    children: [{
                      type: "elem",
                      elem: base,
                      shift: 0
                    }, {
                      type: "elem",
                      elem: oval,
                      shift: large ? 0.08 : 0
                    }]
                  }, options);
                  group.name = "\\" + stash;
                  base.classes.unshift("mop");
                  base.italic = italic;
                }
              } else if (group.body) {
                var inner2 = buildExpression(group.body, options, true);
                if (inner2.length === 1 && inner2[0] instanceof SymbolNode) {
                  base = inner2[0];
                  base.classes[0] = "mop";
                } else {
                  base = buildCommon.makeSpan(["mop"], inner2, options);
                }
              } else {
                var output = [];
                for (var i2 = 1; i2 < group.name.length; i2++) {
                  output.push(buildCommon.mathsym(group.name[i2], group.mode, options));
                }
                base = buildCommon.makeSpan(["mop"], output, options);
              }
              var baseShift = 0;
              var slant = 0;
              if ((base instanceof SymbolNode || group.name === "\\oiint" || group.name === "\\oiiint") && !group.suppressBaseShift) {
                baseShift = (base.height - base.depth) / 2 - options.fontMetrics().axisHeight;
                slant = base.italic;
              }
              if (hasLimits) {
                return assembleSupSub(base, supGroup, subGroup, options, style, slant, baseShift);
              } else {
                if (baseShift) {
                  base.style.position = "relative";
                  base.style.top = makeEm(baseShift);
                }
                return base;
              }
            };
            var op_mathmlBuilder = function mathmlBuilder2(group, options) {
              var node;
              if (group.symbol) {
                node = new MathNode("mo", [makeText(group.name, group.mode)]);
                if (utils.contains(noSuccessor, group.name)) {
                  node.setAttribute("largeop", "false");
                }
              } else if (group.body) {
                node = new MathNode("mo", buildMathML_buildExpression(group.body, options));
              } else {
                node = new MathNode("mi", [new TextNode(group.name.slice(1))]);
                var operator = new MathNode("mo", [makeText("\u2061", "text")]);
                if (group.parentIsSupSub) {
                  node = new MathNode("mrow", [node, operator]);
                } else {
                  node = newDocumentFragment([node, operator]);
                }
              }
              return node;
            };
            var singleCharBigOps = {
              "\u220F": "\\prod",
              "\u2210": "\\coprod",
              "\u2211": "\\sum",
              "\u22C0": "\\bigwedge",
              "\u22C1": "\\bigvee",
              "\u22C2": "\\bigcap",
              "\u22C3": "\\bigcup",
              "\u2A00": "\\bigodot",
              "\u2A01": "\\bigoplus",
              "\u2A02": "\\bigotimes",
              "\u2A04": "\\biguplus",
              "\u2A06": "\\bigsqcup"
            };
            defineFunction({
              type: "op",
              names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"],
              props: {
                numArgs: 0
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var fName = funcName;
                if (fName.length === 1) {
                  fName = singleCharBigOps[fName];
                }
                return {
                  type: "op",
                  mode: parser.mode,
                  limits: true,
                  parentIsSupSub: false,
                  symbol: true,
                  name: fName
                };
              },
              htmlBuilder: op_htmlBuilder,
              mathmlBuilder: op_mathmlBuilder
            });
            defineFunction({
              type: "op",
              names: ["\\mathop"],
              props: {
                numArgs: 1,
                primitive: true
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser;
                var body = args[0];
                return {
                  type: "op",
                  mode: parser.mode,
                  limits: false,
                  parentIsSupSub: false,
                  symbol: false,
                  body: ordargument(body)
                };
              },
              htmlBuilder: op_htmlBuilder,
              mathmlBuilder: op_mathmlBuilder
            });
            var singleCharIntegrals = {
              "\u222B": "\\int",
              "\u222C": "\\iint",
              "\u222D": "\\iiint",
              "\u222E": "\\oint",
              "\u222F": "\\oiint",
              "\u2230": "\\oiiint"
            };
            defineFunction({
              type: "op",
              names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
              props: {
                numArgs: 0
              },
              handler: function handler(_ref3) {
                var parser = _ref3.parser, funcName = _ref3.funcName;
                return {
                  type: "op",
                  mode: parser.mode,
                  limits: false,
                  parentIsSupSub: false,
                  symbol: false,
                  name: funcName
                };
              },
              htmlBuilder: op_htmlBuilder,
              mathmlBuilder: op_mathmlBuilder
            });
            defineFunction({
              type: "op",
              names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
              props: {
                numArgs: 0
              },
              handler: function handler(_ref4) {
                var parser = _ref4.parser, funcName = _ref4.funcName;
                return {
                  type: "op",
                  mode: parser.mode,
                  limits: true,
                  parentIsSupSub: false,
                  symbol: false,
                  name: funcName
                };
              },
              htmlBuilder: op_htmlBuilder,
              mathmlBuilder: op_mathmlBuilder
            });
            defineFunction({
              type: "op",
              names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"],
              props: {
                numArgs: 0
              },
              handler: function handler(_ref5) {
                var parser = _ref5.parser, funcName = _ref5.funcName;
                var fName = funcName;
                if (fName.length === 1) {
                  fName = singleCharIntegrals[fName];
                }
                return {
                  type: "op",
                  mode: parser.mode,
                  limits: false,
                  parentIsSupSub: false,
                  symbol: true,
                  name: fName
                };
              },
              htmlBuilder: op_htmlBuilder,
              mathmlBuilder: op_mathmlBuilder
            });
            ;
            var operatorname_htmlBuilder = function htmlBuilder2(grp, options) {
              var supGroup;
              var subGroup;
              var hasLimits = false;
              var group;
              if (grp.type === "supsub") {
                supGroup = grp.sup;
                subGroup = grp.sub;
                group = assertNodeType(grp.base, "operatorname");
                hasLimits = true;
              } else {
                group = assertNodeType(grp, "operatorname");
              }
              var base;
              if (group.body.length > 0) {
                var body = group.body.map(function(child2) {
                  var childText = child2.text;
                  if (typeof childText === "string") {
                    return {
                      type: "textord",
                      mode: child2.mode,
                      text: childText
                    };
                  } else {
                    return child2;
                  }
                });
                var expression = buildExpression(body, options.withFont("mathrm"), true);
                for (var i2 = 0; i2 < expression.length; i2++) {
                  var child = expression[i2];
                  if (child instanceof SymbolNode) {
                    child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
                  }
                }
                base = buildCommon.makeSpan(["mop"], expression, options);
              } else {
                base = buildCommon.makeSpan(["mop"], [], options);
              }
              if (hasLimits) {
                return assembleSupSub(base, supGroup, subGroup, options, options.style, 0, 0);
              } else {
                return base;
              }
            };
            var operatorname_mathmlBuilder = function mathmlBuilder2(group, options) {
              var expression = buildMathML_buildExpression(group.body, options.withFont("mathrm"));
              var isAllString = true;
              for (var i2 = 0; i2 < expression.length; i2++) {
                var node = expression[i2];
                if (node instanceof mathMLTree.SpaceNode) {
                } else if (node instanceof mathMLTree.MathNode) {
                  switch (node.type) {
                    case "mi":
                    case "mn":
                    case "ms":
                    case "mspace":
                    case "mtext":
                      break;
                    case "mo": {
                      var child = node.children[0];
                      if (node.children.length === 1 && child instanceof mathMLTree.TextNode) {
                        child.text = child.text.replace(/\u2212/, "-").replace(/\u2217/, "*");
                      } else {
                        isAllString = false;
                      }
                      break;
                    }
                    default:
                      isAllString = false;
                  }
                } else {
                  isAllString = false;
                }
              }
              if (isAllString) {
                var word = expression.map(function(node2) {
                  return node2.toText();
                }).join("");
                expression = [new mathMLTree.TextNode(word)];
              }
              var identifier = new mathMLTree.MathNode("mi", expression);
              identifier.setAttribute("mathvariant", "normal");
              var operator = new mathMLTree.MathNode("mo", [makeText("\u2061", "text")]);
              if (group.parentIsSupSub) {
                return new mathMLTree.MathNode("mrow", [identifier, operator]);
              } else {
                return mathMLTree.newDocumentFragment([identifier, operator]);
              }
            };
            defineFunction({
              type: "operatorname",
              names: ["\\operatorname@", "\\operatornamewithlimits"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var body = args[0];
                return {
                  type: "operatorname",
                  mode: parser.mode,
                  body: ordargument(body),
                  alwaysHandleSupSub: funcName === "\\operatornamewithlimits",
                  limits: false,
                  parentIsSupSub: false
                };
              },
              htmlBuilder: operatorname_htmlBuilder,
              mathmlBuilder: operatorname_mathmlBuilder
            });
            defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
            ;
            defineFunctionBuilders({
              type: "ordgroup",
              htmlBuilder: function htmlBuilder2(group, options) {
                if (group.semisimple) {
                  return buildCommon.makeFragment(buildExpression(group.body, options, false));
                }
                return buildCommon.makeSpan(["mord"], buildExpression(group.body, options, true), options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                return buildExpressionRow(group.body, options, true);
              }
            });
            ;
            defineFunction({
              type: "overline",
              names: ["\\overline"],
              props: {
                numArgs: 1
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                var body = args[0];
                return {
                  type: "overline",
                  mode: parser.mode,
                  body
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var innerGroup = buildGroup(group.body, options.havingCrampedStyle());
                var line = buildCommon.makeLineSpan("overline-line", options);
                var defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
                var vlist = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: innerGroup
                  }, {
                    type: "kern",
                    size: 3 * defaultRuleThickness
                  }, {
                    type: "elem",
                    elem: line
                  }, {
                    type: "kern",
                    size: defaultRuleThickness
                  }]
                }, options);
                return buildCommon.makeSpan(["mord", "overline"], [vlist], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("\u203E")]);
                operator.setAttribute("stretchy", "true");
                var node = new mathMLTree.MathNode("mover", [buildMathML_buildGroup(group.body, options), operator]);
                node.setAttribute("accent", "true");
                return node;
              }
            });
            ;
            defineFunction({
              type: "phantom",
              names: ["\\phantom"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                var body = args[0];
                return {
                  type: "phantom",
                  mode: parser.mode,
                  body: ordargument(body)
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var elements = buildExpression(group.body, options.withPhantom(), false);
                return buildCommon.makeFragment(elements);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var inner2 = buildMathML_buildExpression(group.body, options);
                return new mathMLTree.MathNode("mphantom", inner2);
              }
            });
            defineFunction({
              type: "hphantom",
              names: ["\\hphantom"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref2, args) {
                var parser = _ref2.parser;
                var body = args[0];
                return {
                  type: "hphantom",
                  mode: parser.mode,
                  body
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var node = buildCommon.makeSpan([], [buildGroup(group.body, options.withPhantom())]);
                node.height = 0;
                node.depth = 0;
                if (node.children) {
                  for (var i2 = 0; i2 < node.children.length; i2++) {
                    node.children[i2].height = 0;
                    node.children[i2].depth = 0;
                  }
                }
                node = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: node
                  }]
                }, options);
                return buildCommon.makeSpan(["mord"], [node], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var inner2 = buildMathML_buildExpression(ordargument(group.body), options);
                var phantom = new mathMLTree.MathNode("mphantom", inner2);
                var node = new mathMLTree.MathNode("mpadded", [phantom]);
                node.setAttribute("height", "0px");
                node.setAttribute("depth", "0px");
                return node;
              }
            });
            defineFunction({
              type: "vphantom",
              names: ["\\vphantom"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref3, args) {
                var parser = _ref3.parser;
                var body = args[0];
                return {
                  type: "vphantom",
                  mode: parser.mode,
                  body
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var inner2 = buildCommon.makeSpan(["inner"], [buildGroup(group.body, options.withPhantom())]);
                var fix = buildCommon.makeSpan(["fix"], []);
                return buildCommon.makeSpan(["mord", "rlap"], [inner2, fix], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var inner2 = buildMathML_buildExpression(ordargument(group.body), options);
                var phantom = new mathMLTree.MathNode("mphantom", inner2);
                var node = new mathMLTree.MathNode("mpadded", [phantom]);
                node.setAttribute("width", "0px");
                return node;
              }
            });
            ;
            defineFunction({
              type: "raisebox",
              names: ["\\raisebox"],
              props: {
                numArgs: 2,
                argTypes: ["size", "hbox"],
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                var amount = assertNodeType(args[0], "size").value;
                var body = args[1];
                return {
                  type: "raisebox",
                  mode: parser.mode,
                  dy: amount,
                  body
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var body = buildGroup(group.body, options);
                var dy = calculateSize(group.dy, options);
                return buildCommon.makeVList({
                  positionType: "shift",
                  positionData: -dy,
                  children: [{
                    type: "elem",
                    elem: body
                  }]
                }, options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
                var dy = group.dy.number + group.dy.unit;
                node.setAttribute("voffset", dy);
                return node;
              }
            });
            ;
            defineFunction({
              type: "internal",
              names: ["\\relax"],
              props: {
                numArgs: 0,
                allowedInText: true
              },
              handler: function handler(_ref) {
                var parser = _ref.parser;
                return {
                  type: "internal",
                  mode: parser.mode
                };
              }
            });
            ;
            defineFunction({
              type: "rule",
              names: ["\\rule"],
              props: {
                numArgs: 2,
                numOptionalArgs: 1,
                argTypes: ["size", "size", "size"]
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser;
                var shift = optArgs[0];
                var width = assertNodeType(args[0], "size");
                var height = assertNodeType(args[1], "size");
                return {
                  type: "rule",
                  mode: parser.mode,
                  shift: shift && assertNodeType(shift, "size").value,
                  width: width.value,
                  height: height.value
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var rule = buildCommon.makeSpan(["mord", "rule"], [], options);
                var width = calculateSize(group.width, options);
                var height = calculateSize(group.height, options);
                var shift = group.shift ? calculateSize(group.shift, options) : 0;
                rule.style.borderRightWidth = makeEm(width);
                rule.style.borderTopWidth = makeEm(height);
                rule.style.bottom = makeEm(shift);
                rule.width = width;
                rule.height = height + shift;
                rule.depth = -shift;
                rule.maxFontSize = height * 1.125 * options.sizeMultiplier;
                return rule;
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var width = calculateSize(group.width, options);
                var height = calculateSize(group.height, options);
                var shift = group.shift ? calculateSize(group.shift, options) : 0;
                var color = options.color && options.getColor() || "black";
                var rule = new mathMLTree.MathNode("mspace");
                rule.setAttribute("mathbackground", color);
                rule.setAttribute("width", makeEm(width));
                rule.setAttribute("height", makeEm(height));
                var wrapper = new mathMLTree.MathNode("mpadded", [rule]);
                if (shift >= 0) {
                  wrapper.setAttribute("height", makeEm(shift));
                } else {
                  wrapper.setAttribute("height", makeEm(shift));
                  wrapper.setAttribute("depth", makeEm(-shift));
                }
                wrapper.setAttribute("voffset", makeEm(shift));
                return wrapper;
              }
            });
            ;
            function sizingGroup(value, options, baseOptions) {
              var inner2 = buildExpression(value, options, false);
              var multiplier = options.sizeMultiplier / baseOptions.sizeMultiplier;
              for (var i2 = 0; i2 < inner2.length; i2++) {
                var pos = inner2[i2].classes.indexOf("sizing");
                if (pos < 0) {
                  Array.prototype.push.apply(inner2[i2].classes, options.sizingClasses(baseOptions));
                } else if (inner2[i2].classes[pos + 1] === "reset-size" + options.size) {
                  inner2[i2].classes[pos + 1] = "reset-size" + baseOptions.size;
                }
                inner2[i2].height *= multiplier;
                inner2[i2].depth *= multiplier;
              }
              return buildCommon.makeFragment(inner2);
            }
            var sizeFuncs = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
            var sizing_htmlBuilder = function htmlBuilder2(group, options) {
              var newOptions = options.havingSize(group.size);
              return sizingGroup(group.body, newOptions, options);
            };
            defineFunction({
              type: "sizing",
              names: sizeFuncs,
              props: {
                numArgs: 0,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var breakOnTokenText = _ref.breakOnTokenText, funcName = _ref.funcName, parser = _ref.parser;
                var body = parser.parseExpression(false, breakOnTokenText);
                return {
                  type: "sizing",
                  mode: parser.mode,
                  // Figure out what size to use based on the list of functions above
                  size: sizeFuncs.indexOf(funcName) + 1,
                  body
                };
              },
              htmlBuilder: sizing_htmlBuilder,
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var newOptions = options.havingSize(group.size);
                var inner2 = buildMathML_buildExpression(group.body, newOptions);
                var node = new mathMLTree.MathNode("mstyle", inner2);
                node.setAttribute("mathsize", makeEm(newOptions.sizeMultiplier));
                return node;
              }
            });
            ;
            defineFunction({
              type: "smash",
              names: ["\\smash"],
              props: {
                numArgs: 1,
                numOptionalArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser;
                var smashHeight = false;
                var smashDepth = false;
                var tbArg = optArgs[0] && assertNodeType(optArgs[0], "ordgroup");
                if (tbArg) {
                  var letter = "";
                  for (var i2 = 0; i2 < tbArg.body.length; ++i2) {
                    var node = tbArg.body[i2];
                    letter = node.text;
                    if (letter === "t") {
                      smashHeight = true;
                    } else if (letter === "b") {
                      smashDepth = true;
                    } else {
                      smashHeight = false;
                      smashDepth = false;
                      break;
                    }
                  }
                } else {
                  smashHeight = true;
                  smashDepth = true;
                }
                var body = args[0];
                return {
                  type: "smash",
                  mode: parser.mode,
                  body,
                  smashHeight,
                  smashDepth
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var node = buildCommon.makeSpan([], [buildGroup(group.body, options)]);
                if (!group.smashHeight && !group.smashDepth) {
                  return node;
                }
                if (group.smashHeight) {
                  node.height = 0;
                  if (node.children) {
                    for (var i2 = 0; i2 < node.children.length; i2++) {
                      node.children[i2].height = 0;
                    }
                  }
                }
                if (group.smashDepth) {
                  node.depth = 0;
                  if (node.children) {
                    for (var _i6 = 0; _i6 < node.children.length; _i6++) {
                      node.children[_i6].depth = 0;
                    }
                  }
                }
                var smashedNode = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: node
                  }]
                }, options);
                return buildCommon.makeSpan(["mord"], [smashedNode], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)]);
                if (group.smashHeight) {
                  node.setAttribute("height", "0px");
                }
                if (group.smashDepth) {
                  node.setAttribute("depth", "0px");
                }
                return node;
              }
            });
            ;
            defineFunction({
              type: "sqrt",
              names: ["\\sqrt"],
              props: {
                numArgs: 1,
                numOptionalArgs: 1
              },
              handler: function handler(_ref, args, optArgs) {
                var parser = _ref.parser;
                var index = optArgs[0];
                var body = args[0];
                return {
                  type: "sqrt",
                  mode: parser.mode,
                  body,
                  index
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var inner2 = buildGroup(group.body, options.havingCrampedStyle());
                if (inner2.height === 0) {
                  inner2.height = options.fontMetrics().xHeight;
                }
                inner2 = buildCommon.wrapFragment(inner2, options);
                var metrics = options.fontMetrics();
                var theta = metrics.defaultRuleThickness;
                var phi = theta;
                if (options.style.id < src_Style.TEXT.id) {
                  phi = options.fontMetrics().xHeight;
                }
                var lineClearance = theta + phi / 4;
                var minDelimiterHeight = inner2.height + inner2.depth + lineClearance + theta;
                var _delimiter$sqrtImage = delimiter.sqrtImage(minDelimiterHeight, options), img = _delimiter$sqrtImage.span, ruleWidth = _delimiter$sqrtImage.ruleWidth, advanceWidth = _delimiter$sqrtImage.advanceWidth;
                var delimDepth = img.height - ruleWidth;
                if (delimDepth > inner2.height + inner2.depth + lineClearance) {
                  lineClearance = (lineClearance + delimDepth - inner2.height - inner2.depth) / 2;
                }
                var imgShift = img.height - inner2.height - lineClearance - ruleWidth;
                inner2.style.paddingLeft = makeEm(advanceWidth);
                var body = buildCommon.makeVList({
                  positionType: "firstBaseline",
                  children: [{
                    type: "elem",
                    elem: inner2,
                    wrapperClasses: ["svg-align"]
                  }, {
                    type: "kern",
                    size: -(inner2.height + imgShift)
                  }, {
                    type: "elem",
                    elem: img
                  }, {
                    type: "kern",
                    size: ruleWidth
                  }]
                }, options);
                if (!group.index) {
                  return buildCommon.makeSpan(["mord", "sqrt"], [body], options);
                } else {
                  var newOptions = options.havingStyle(src_Style.SCRIPTSCRIPT);
                  var rootm = buildGroup(group.index, newOptions, options);
                  var toShift = 0.6 * (body.height - body.depth);
                  var rootVList = buildCommon.makeVList({
                    positionType: "shift",
                    positionData: -toShift,
                    children: [{
                      type: "elem",
                      elem: rootm
                    }]
                  }, options);
                  var rootVListWrap = buildCommon.makeSpan(["root"], [rootVList]);
                  return buildCommon.makeSpan(["mord", "sqrt"], [rootVListWrap, body], options);
                }
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var body = group.body, index = group.index;
                return index ? new mathMLTree.MathNode("mroot", [buildMathML_buildGroup(body, options), buildMathML_buildGroup(index, options)]) : new mathMLTree.MathNode("msqrt", [buildMathML_buildGroup(body, options)]);
              }
            });
            ;
            var styling_styleMap = {
              "display": src_Style.DISPLAY,
              "text": src_Style.TEXT,
              "script": src_Style.SCRIPT,
              "scriptscript": src_Style.SCRIPTSCRIPT
            };
            defineFunction({
              type: "styling",
              names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
              props: {
                numArgs: 0,
                allowedInText: true,
                primitive: true
              },
              handler: function handler(_ref, args) {
                var breakOnTokenText = _ref.breakOnTokenText, funcName = _ref.funcName, parser = _ref.parser;
                var body = parser.parseExpression(true, breakOnTokenText);
                var style = funcName.slice(1, funcName.length - 5);
                return {
                  type: "styling",
                  mode: parser.mode,
                  // Figure out what style to use by pulling out the style from
                  // the function name
                  style,
                  body
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var newStyle = styling_styleMap[group.style];
                var newOptions = options.havingStyle(newStyle).withFont("");
                return sizingGroup(group.body, newOptions, options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var newStyle = styling_styleMap[group.style];
                var newOptions = options.havingStyle(newStyle);
                var inner2 = buildMathML_buildExpression(group.body, newOptions);
                var node = new mathMLTree.MathNode("mstyle", inner2);
                var styleAttributes = {
                  "display": ["0", "true"],
                  "text": ["0", "false"],
                  "script": ["1", "false"],
                  "scriptscript": ["2", "false"]
                };
                var attr = styleAttributes[group.style];
                node.setAttribute("scriptlevel", attr[0]);
                node.setAttribute("displaystyle", attr[1]);
                return node;
              }
            });
            ;
            var htmlBuilderDelegate = function htmlBuilderDelegate2(group, options) {
              var base = group.base;
              if (!base) {
                return null;
              } else if (base.type === "op") {
                var delegate = base.limits && (options.style.size === src_Style.DISPLAY.size || base.alwaysHandleSupSub);
                return delegate ? op_htmlBuilder : null;
              } else if (base.type === "operatorname") {
                var _delegate = base.alwaysHandleSupSub && (options.style.size === src_Style.DISPLAY.size || base.limits);
                return _delegate ? operatorname_htmlBuilder : null;
              } else if (base.type === "accent") {
                return utils.isCharacterBox(base.base) ? htmlBuilder : null;
              } else if (base.type === "horizBrace") {
                var isSup = !group.sub;
                return isSup === base.isOver ? horizBrace_htmlBuilder : null;
              } else {
                return null;
              }
            };
            defineFunctionBuilders({
              type: "supsub",
              htmlBuilder: function htmlBuilder2(group, options) {
                var builderDelegate = htmlBuilderDelegate(group, options);
                if (builderDelegate) {
                  return builderDelegate(group, options);
                }
                var valueBase = group.base, valueSup = group.sup, valueSub = group.sub;
                var base = buildGroup(valueBase, options);
                var supm;
                var subm;
                var metrics = options.fontMetrics();
                var supShift = 0;
                var subShift = 0;
                var isCharacterBox2 = valueBase && utils.isCharacterBox(valueBase);
                if (valueSup) {
                  var newOptions = options.havingStyle(options.style.sup());
                  supm = buildGroup(valueSup, newOptions, options);
                  if (!isCharacterBox2) {
                    supShift = base.height - newOptions.fontMetrics().supDrop * newOptions.sizeMultiplier / options.sizeMultiplier;
                  }
                }
                if (valueSub) {
                  var _newOptions = options.havingStyle(options.style.sub());
                  subm = buildGroup(valueSub, _newOptions, options);
                  if (!isCharacterBox2) {
                    subShift = base.depth + _newOptions.fontMetrics().subDrop * _newOptions.sizeMultiplier / options.sizeMultiplier;
                  }
                }
                var minSupShift;
                if (options.style === src_Style.DISPLAY) {
                  minSupShift = metrics.sup1;
                } else if (options.style.cramped) {
                  minSupShift = metrics.sup3;
                } else {
                  minSupShift = metrics.sup2;
                }
                var multiplier = options.sizeMultiplier;
                var marginRight = makeEm(0.5 / metrics.ptPerEm / multiplier);
                var marginLeft = null;
                if (subm) {
                  var isOiint = group.base && group.base.type === "op" && group.base.name && (group.base.name === "\\oiint" || group.base.name === "\\oiiint");
                  if (base instanceof SymbolNode || isOiint) {
                    marginLeft = makeEm(-base.italic);
                  }
                }
                var supsub;
                if (supm && subm) {
                  supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
                  subShift = Math.max(subShift, metrics.sub2);
                  var ruleWidth = metrics.defaultRuleThickness;
                  var maxWidth = 4 * ruleWidth;
                  if (supShift - supm.depth - (subm.height - subShift) < maxWidth) {
                    subShift = maxWidth - (supShift - supm.depth) + subm.height;
                    var psi = 0.8 * metrics.xHeight - (supShift - supm.depth);
                    if (psi > 0) {
                      supShift += psi;
                      subShift -= psi;
                    }
                  }
                  var vlistElem = [{
                    type: "elem",
                    elem: subm,
                    shift: subShift,
                    marginRight,
                    marginLeft
                  }, {
                    type: "elem",
                    elem: supm,
                    shift: -supShift,
                    marginRight
                  }];
                  supsub = buildCommon.makeVList({
                    positionType: "individualShift",
                    children: vlistElem
                  }, options);
                } else if (subm) {
                  subShift = Math.max(subShift, metrics.sub1, subm.height - 0.8 * metrics.xHeight);
                  var _vlistElem = [{
                    type: "elem",
                    elem: subm,
                    marginLeft,
                    marginRight
                  }];
                  supsub = buildCommon.makeVList({
                    positionType: "shift",
                    positionData: subShift,
                    children: _vlistElem
                  }, options);
                } else if (supm) {
                  supShift = Math.max(supShift, minSupShift, supm.depth + 0.25 * metrics.xHeight);
                  supsub = buildCommon.makeVList({
                    positionType: "shift",
                    positionData: -supShift,
                    children: [{
                      type: "elem",
                      elem: supm,
                      marginRight
                    }]
                  }, options);
                } else {
                  throw new Error("supsub must have either sup or sub.");
                }
                var mclass = getTypeOfDomTree(base, "right") || "mord";
                return buildCommon.makeSpan([mclass], [base, buildCommon.makeSpan(["msupsub"], [supsub])], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var isBrace = false;
                var isOver;
                var isSup;
                if (group.base && group.base.type === "horizBrace") {
                  isSup = !!group.sup;
                  if (isSup === group.base.isOver) {
                    isBrace = true;
                    isOver = group.base.isOver;
                  }
                }
                if (group.base && (group.base.type === "op" || group.base.type === "operatorname")) {
                  group.base.parentIsSupSub = true;
                }
                var children = [buildMathML_buildGroup(group.base, options)];
                if (group.sub) {
                  children.push(buildMathML_buildGroup(group.sub, options));
                }
                if (group.sup) {
                  children.push(buildMathML_buildGroup(group.sup, options));
                }
                var nodeType;
                if (isBrace) {
                  nodeType = isOver ? "mover" : "munder";
                } else if (!group.sub) {
                  var base = group.base;
                  if (base && base.type === "op" && base.limits && (options.style === src_Style.DISPLAY || base.alwaysHandleSupSub)) {
                    nodeType = "mover";
                  } else if (base && base.type === "operatorname" && base.alwaysHandleSupSub && (base.limits || options.style === src_Style.DISPLAY)) {
                    nodeType = "mover";
                  } else {
                    nodeType = "msup";
                  }
                } else if (!group.sup) {
                  var _base = group.base;
                  if (_base && _base.type === "op" && _base.limits && (options.style === src_Style.DISPLAY || _base.alwaysHandleSupSub)) {
                    nodeType = "munder";
                  } else if (_base && _base.type === "operatorname" && _base.alwaysHandleSupSub && (_base.limits || options.style === src_Style.DISPLAY)) {
                    nodeType = "munder";
                  } else {
                    nodeType = "msub";
                  }
                } else {
                  var _base2 = group.base;
                  if (_base2 && _base2.type === "op" && _base2.limits && options.style === src_Style.DISPLAY) {
                    nodeType = "munderover";
                  } else if (_base2 && _base2.type === "operatorname" && _base2.alwaysHandleSupSub && (options.style === src_Style.DISPLAY || _base2.limits)) {
                    nodeType = "munderover";
                  } else {
                    nodeType = "msubsup";
                  }
                }
                return new mathMLTree.MathNode(nodeType, children);
              }
            });
            ;
            defineFunctionBuilders({
              type: "atom",
              htmlBuilder: function htmlBuilder2(group, options) {
                return buildCommon.mathsym(group.text, group.mode, options, ["m" + group.family]);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mo", [makeText(group.text, group.mode)]);
                if (group.family === "bin") {
                  var variant = getVariant(group, options);
                  if (variant === "bold-italic") {
                    node.setAttribute("mathvariant", variant);
                  }
                } else if (group.family === "punct") {
                  node.setAttribute("separator", "true");
                } else if (group.family === "open" || group.family === "close") {
                  node.setAttribute("stretchy", "false");
                }
                return node;
              }
            });
            ;
            var defaultVariant = {
              "mi": "italic",
              "mn": "normal",
              "mtext": "normal"
            };
            defineFunctionBuilders({
              type: "mathord",
              htmlBuilder: function htmlBuilder2(group, options) {
                return buildCommon.makeOrd(group, options, "mathord");
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node = new mathMLTree.MathNode("mi", [makeText(group.text, group.mode, options)]);
                var variant = getVariant(group, options) || "italic";
                if (variant !== defaultVariant[node.type]) {
                  node.setAttribute("mathvariant", variant);
                }
                return node;
              }
            });
            defineFunctionBuilders({
              type: "textord",
              htmlBuilder: function htmlBuilder2(group, options) {
                return buildCommon.makeOrd(group, options, "textord");
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var text = makeText(group.text, group.mode, options);
                var variant = getVariant(group, options) || "normal";
                var node;
                if (group.mode === "text") {
                  node = new mathMLTree.MathNode("mtext", [text]);
                } else if (/[0-9]/.test(group.text)) {
                  node = new mathMLTree.MathNode("mn", [text]);
                } else if (group.text === "\\prime") {
                  node = new mathMLTree.MathNode("mo", [text]);
                } else {
                  node = new mathMLTree.MathNode("mi", [text]);
                }
                if (variant !== defaultVariant[node.type]) {
                  node.setAttribute("mathvariant", variant);
                }
                return node;
              }
            });
            ;
            var cssSpace = {
              "\\nobreak": "nobreak",
              "\\allowbreak": "allowbreak"
            };
            var regularSpace = {
              " ": {},
              "\\ ": {},
              "~": {
                className: "nobreak"
              },
              "\\space": {},
              "\\nobreakspace": {
                className: "nobreak"
              }
            };
            defineFunctionBuilders({
              type: "spacing",
              htmlBuilder: function htmlBuilder2(group, options) {
                if (regularSpace.hasOwnProperty(group.text)) {
                  var className = regularSpace[group.text].className || "";
                  if (group.mode === "text") {
                    var ord = buildCommon.makeOrd(group, options, "textord");
                    ord.classes.push(className);
                    return ord;
                  } else {
                    return buildCommon.makeSpan(["mspace", className], [buildCommon.mathsym(group.text, group.mode, options)], options);
                  }
                } else if (cssSpace.hasOwnProperty(group.text)) {
                  return buildCommon.makeSpan(["mspace", cssSpace[group.text]], [], options);
                } else {
                  throw new src_ParseError('Unknown type of space "' + group.text + '"');
                }
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var node;
                if (regularSpace.hasOwnProperty(group.text)) {
                  node = new mathMLTree.MathNode("mtext", [new mathMLTree.TextNode("\xA0")]);
                } else if (cssSpace.hasOwnProperty(group.text)) {
                  return new mathMLTree.MathNode("mspace");
                } else {
                  throw new src_ParseError('Unknown type of space "' + group.text + '"');
                }
                return node;
              }
            });
            ;
            var pad = function pad2() {
              var padNode = new mathMLTree.MathNode("mtd", []);
              padNode.setAttribute("width", "50%");
              return padNode;
            };
            defineFunctionBuilders({
              type: "tag",
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var table = new mathMLTree.MathNode("mtable", [new mathMLTree.MathNode("mtr", [pad(), new mathMLTree.MathNode("mtd", [buildExpressionRow(group.body, options)]), pad(), new mathMLTree.MathNode("mtd", [buildExpressionRow(group.tag, options)])])]);
                table.setAttribute("width", "100%");
                return table;
              }
            });
            ;
            var textFontFamilies = {
              "\\text": void 0,
              "\\textrm": "textrm",
              "\\textsf": "textsf",
              "\\texttt": "texttt",
              "\\textnormal": "textrm"
            };
            var textFontWeights = {
              "\\textbf": "textbf",
              "\\textmd": "textmd"
            };
            var textFontShapes = {
              "\\textit": "textit",
              "\\textup": "textup"
            };
            var optionsWithFont = function optionsWithFont2(group, options) {
              var font = group.font;
              if (!font) {
                return options;
              } else if (textFontFamilies[font]) {
                return options.withTextFontFamily(textFontFamilies[font]);
              } else if (textFontWeights[font]) {
                return options.withTextFontWeight(textFontWeights[font]);
              } else {
                return options.withTextFontShape(textFontShapes[font]);
              }
            };
            defineFunction({
              type: "text",
              names: [
                // Font families
                "\\text",
                "\\textrm",
                "\\textsf",
                "\\texttt",
                "\\textnormal",
                // Font weights
                "\\textbf",
                "\\textmd",
                // Font Shapes
                "\\textit",
                "\\textup"
              ],
              props: {
                numArgs: 1,
                argTypes: ["text"],
                allowedInArgument: true,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser, funcName = _ref.funcName;
                var body = args[0];
                return {
                  type: "text",
                  mode: parser.mode,
                  body: ordargument(body),
                  font: funcName
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var newOptions = optionsWithFont(group, options);
                var inner2 = buildExpression(group.body, newOptions, true);
                return buildCommon.makeSpan(["mord", "text"], inner2, newOptions);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var newOptions = optionsWithFont(group, options);
                return buildExpressionRow(group.body, newOptions);
              }
            });
            ;
            defineFunction({
              type: "underline",
              names: ["\\underline"],
              props: {
                numArgs: 1,
                allowedInText: true
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                return {
                  type: "underline",
                  mode: parser.mode,
                  body: args[0]
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var innerGroup = buildGroup(group.body, options);
                var line = buildCommon.makeLineSpan("underline-line", options);
                var defaultRuleThickness = options.fontMetrics().defaultRuleThickness;
                var vlist = buildCommon.makeVList({
                  positionType: "top",
                  positionData: innerGroup.height,
                  children: [{
                    type: "kern",
                    size: defaultRuleThickness
                  }, {
                    type: "elem",
                    elem: line
                  }, {
                    type: "kern",
                    size: 3 * defaultRuleThickness
                  }, {
                    type: "elem",
                    elem: innerGroup
                  }]
                }, options);
                return buildCommon.makeSpan(["mord", "underline"], [vlist], options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var operator = new mathMLTree.MathNode("mo", [new mathMLTree.TextNode("\u203E")]);
                operator.setAttribute("stretchy", "true");
                var node = new mathMLTree.MathNode("munder", [buildMathML_buildGroup(group.body, options), operator]);
                node.setAttribute("accentunder", "true");
                return node;
              }
            });
            ;
            defineFunction({
              type: "vcenter",
              names: ["\\vcenter"],
              props: {
                numArgs: 1,
                argTypes: ["original"],
                // In LaTeX, \vcenter can act only on a box.
                allowedInText: false
              },
              handler: function handler(_ref, args) {
                var parser = _ref.parser;
                return {
                  type: "vcenter",
                  mode: parser.mode,
                  body: args[0]
                };
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var body = buildGroup(group.body, options);
                var axisHeight = options.fontMetrics().axisHeight;
                var dy = 0.5 * (body.height - axisHeight - (body.depth + axisHeight));
                return buildCommon.makeVList({
                  positionType: "shift",
                  positionData: dy,
                  children: [{
                    type: "elem",
                    elem: body
                  }]
                }, options);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                return new mathMLTree.MathNode("mpadded", [buildMathML_buildGroup(group.body, options)], ["vcenter"]);
              }
            });
            ;
            defineFunction({
              type: "verb",
              names: ["\\verb"],
              props: {
                numArgs: 0,
                allowedInText: true
              },
              handler: function handler(context, args, optArgs) {
                throw new src_ParseError("\\verb ended by end of line instead of matching delimiter");
              },
              htmlBuilder: function htmlBuilder2(group, options) {
                var text = makeVerb(group);
                var body = [];
                var newOptions = options.havingStyle(options.style.text());
                for (var i2 = 0; i2 < text.length; i2++) {
                  var c = text[i2];
                  if (c === "~") {
                    c = "\\textasciitilde";
                  }
                  body.push(buildCommon.makeSymbol(c, "Typewriter-Regular", group.mode, newOptions, ["mord", "texttt"]));
                }
                return buildCommon.makeSpan(["mord", "text"].concat(newOptions.sizingClasses(options)), buildCommon.tryCombineChars(body), newOptions);
              },
              mathmlBuilder: function mathmlBuilder2(group, options) {
                var text = new mathMLTree.TextNode(makeVerb(group));
                var node = new mathMLTree.MathNode("mtext", [text]);
                node.setAttribute("mathvariant", "monospace");
                return node;
              }
            });
            var makeVerb = function makeVerb2(group) {
              return group.body.replace(/ /g, group.star ? "\u2423" : "\xA0");
            };
            ;
            var functions = _functions;
            var src_functions = functions;
            ;
            var spaceRegexString = "[ \r\n	]";
            var controlWordRegexString = "\\\\[a-zA-Z@]+";
            var controlSymbolRegexString = "\\\\[^\uD800-\uDFFF]";
            var controlWordWhitespaceRegexString = "(" + controlWordRegexString + ")" + spaceRegexString + "*";
            var controlSpaceRegexString = "\\\\(\n|[ \r	]+\n?)[ \r	]*";
            var combiningDiacriticalMarkString = "[\u0300-\u036F]";
            var combiningDiacriticalMarksEndRegex = new RegExp(combiningDiacriticalMarkString + "+$");
            var tokenRegexString = "(" + spaceRegexString + "+)|" + // whitespace
            (controlSpaceRegexString + "|") + // \whitespace
            "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + // single codepoint
            (combiningDiacriticalMarkString + "*") + // ...plus accents
            "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
            (combiningDiacriticalMarkString + "*") + // ...plus accents
            "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
            ("|" + controlWordWhitespaceRegexString) + // \macroName + spaces
            ("|" + controlSymbolRegexString + ")");
            var Lexer = /* @__PURE__ */ function() {
              function Lexer2(input, settings) {
                this.input = void 0;
                this.settings = void 0;
                this.tokenRegex = void 0;
                this.catcodes = void 0;
                this.input = input;
                this.settings = settings;
                this.tokenRegex = new RegExp(tokenRegexString, "g");
                this.catcodes = {
                  "%": 14,
                  // comment character
                  "~": 13
                  // active character
                };
              }
              var _proto = Lexer2.prototype;
              _proto.setCatcode = function setCatcode(char, code) {
                this.catcodes[char] = code;
              };
              _proto.lex = function lex() {
                var input = this.input;
                var pos = this.tokenRegex.lastIndex;
                if (pos === input.length) {
                  return new Token("EOF", new SourceLocation(this, pos, pos));
                }
                var match = this.tokenRegex.exec(input);
                if (match === null || match.index !== pos) {
                  throw new src_ParseError("Unexpected character: '" + input[pos] + "'", new Token(input[pos], new SourceLocation(this, pos, pos + 1)));
                }
                var text = match[6] || match[3] || (match[2] ? "\\ " : " ");
                if (this.catcodes[text] === 14) {
                  var nlIndex = input.indexOf("\n", this.tokenRegex.lastIndex);
                  if (nlIndex === -1) {
                    this.tokenRegex.lastIndex = input.length;
                    this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)");
                  } else {
                    this.tokenRegex.lastIndex = nlIndex + 1;
                  }
                  return this.lex();
                }
                return new Token(text, new SourceLocation(this, pos, this.tokenRegex.lastIndex));
              };
              return Lexer2;
            }();
            ;
            var Namespace = /* @__PURE__ */ function() {
              function Namespace2(builtins, globalMacros) {
                if (builtins === void 0) {
                  builtins = {};
                }
                if (globalMacros === void 0) {
                  globalMacros = {};
                }
                this.current = void 0;
                this.builtins = void 0;
                this.undefStack = void 0;
                this.current = globalMacros;
                this.builtins = builtins;
                this.undefStack = [];
              }
              var _proto = Namespace2.prototype;
              _proto.beginGroup = function beginGroup() {
                this.undefStack.push({});
              };
              _proto.endGroup = function endGroup() {
                if (this.undefStack.length === 0) {
                  throw new src_ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
                }
                var undefs = this.undefStack.pop();
                for (var undef in undefs) {
                  if (undefs.hasOwnProperty(undef)) {
                    if (undefs[undef] == null) {
                      delete this.current[undef];
                    } else {
                      this.current[undef] = undefs[undef];
                    }
                  }
                }
              };
              _proto.endGroups = function endGroups() {
                while (this.undefStack.length > 0) {
                  this.endGroup();
                }
              };
              _proto.has = function has(name) {
                return this.current.hasOwnProperty(name) || this.builtins.hasOwnProperty(name);
              };
              _proto.get = function get(name) {
                if (this.current.hasOwnProperty(name)) {
                  return this.current[name];
                } else {
                  return this.builtins[name];
                }
              };
              _proto.set = function set(name, value, global) {
                if (global === void 0) {
                  global = false;
                }
                if (global) {
                  for (var i2 = 0; i2 < this.undefStack.length; i2++) {
                    delete this.undefStack[i2][name];
                  }
                  if (this.undefStack.length > 0) {
                    this.undefStack[this.undefStack.length - 1][name] = value;
                  }
                } else {
                  var top = this.undefStack[this.undefStack.length - 1];
                  if (top && !top.hasOwnProperty(name)) {
                    top[name] = this.current[name];
                  }
                }
                if (value == null) {
                  delete this.current[name];
                } else {
                  this.current[name] = value;
                }
              };
              return Namespace2;
            }();
            ;
            var macros = _macros;
            var src_macros = macros;
            defineMacro("\\noexpand", function(context) {
              var t = context.popToken();
              if (context.isExpandable(t.text)) {
                t.noexpand = true;
                t.treatAsRelax = true;
              }
              return {
                tokens: [t],
                numArgs: 0
              };
            });
            defineMacro("\\expandafter", function(context) {
              var t = context.popToken();
              context.expandOnce(true);
              return {
                tokens: [t],
                numArgs: 0
              };
            });
            defineMacro("\\@firstoftwo", function(context) {
              var args = context.consumeArgs(2);
              return {
                tokens: args[0],
                numArgs: 0
              };
            });
            defineMacro("\\@secondoftwo", function(context) {
              var args = context.consumeArgs(2);
              return {
                tokens: args[1],
                numArgs: 0
              };
            });
            defineMacro("\\@ifnextchar", function(context) {
              var args = context.consumeArgs(3);
              context.consumeSpaces();
              var nextToken = context.future();
              if (args[0].length === 1 && args[0][0].text === nextToken.text) {
                return {
                  tokens: args[1],
                  numArgs: 0
                };
              } else {
                return {
                  tokens: args[2],
                  numArgs: 0
                };
              }
            });
            defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
            defineMacro("\\TextOrMath", function(context) {
              var args = context.consumeArgs(2);
              if (context.mode === "text") {
                return {
                  tokens: args[0],
                  numArgs: 0
                };
              } else {
                return {
                  tokens: args[1],
                  numArgs: 0
                };
              }
            });
            var digitToNumber = {
              "0": 0,
              "1": 1,
              "2": 2,
              "3": 3,
              "4": 4,
              "5": 5,
              "6": 6,
              "7": 7,
              "8": 8,
              "9": 9,
              "a": 10,
              "A": 10,
              "b": 11,
              "B": 11,
              "c": 12,
              "C": 12,
              "d": 13,
              "D": 13,
              "e": 14,
              "E": 14,
              "f": 15,
              "F": 15
            };
            defineMacro("\\char", function(context) {
              var token = context.popToken();
              var base;
              var number = "";
              if (token.text === "'") {
                base = 8;
                token = context.popToken();
              } else if (token.text === '"') {
                base = 16;
                token = context.popToken();
              } else if (token.text === "`") {
                token = context.popToken();
                if (token.text[0] === "\\") {
                  number = token.text.charCodeAt(1);
                } else if (token.text === "EOF") {
                  throw new src_ParseError("\\char` missing argument");
                } else {
                  number = token.text.charCodeAt(0);
                }
              } else {
                base = 10;
              }
              if (base) {
                number = digitToNumber[token.text];
                if (number == null || number >= base) {
                  throw new src_ParseError("Invalid base-" + base + " digit " + token.text);
                }
                var digit;
                while ((digit = digitToNumber[context.future().text]) != null && digit < base) {
                  number *= base;
                  number += digit;
                  context.popToken();
                }
              }
              return "\\@char{" + number + "}";
            });
            var newcommand = function newcommand2(context, existsOK, nonexistsOK) {
              var arg = context.consumeArg().tokens;
              if (arg.length !== 1) {
                throw new src_ParseError("\\newcommand's first argument must be a macro name");
              }
              var name = arg[0].text;
              var exists = context.isDefined(name);
              if (exists && !existsOK) {
                throw new src_ParseError("\\newcommand{" + name + "} attempting to redefine " + (name + "; use \\renewcommand"));
              }
              if (!exists && !nonexistsOK) {
                throw new src_ParseError("\\renewcommand{" + name + "} when command " + name + " does not yet exist; use \\newcommand");
              }
              var numArgs = 0;
              arg = context.consumeArg().tokens;
              if (arg.length === 1 && arg[0].text === "[") {
                var argText = "";
                var token = context.expandNextToken();
                while (token.text !== "]" && token.text !== "EOF") {
                  argText += token.text;
                  token = context.expandNextToken();
                }
                if (!argText.match(/^\s*[0-9]+\s*$/)) {
                  throw new src_ParseError("Invalid number of arguments: " + argText);
                }
                numArgs = parseInt(argText);
                arg = context.consumeArg().tokens;
              }
              context.macros.set(name, {
                tokens: arg,
                numArgs
              });
              return "";
            };
            defineMacro("\\newcommand", function(context) {
              return newcommand(context, false, true);
            });
            defineMacro("\\renewcommand", function(context) {
              return newcommand(context, true, false);
            });
            defineMacro("\\providecommand", function(context) {
              return newcommand(context, true, true);
            });
            defineMacro("\\message", function(context) {
              var arg = context.consumeArgs(1)[0];
              console.log(arg.reverse().map(function(token) {
                return token.text;
              }).join(""));
              return "";
            });
            defineMacro("\\errmessage", function(context) {
              var arg = context.consumeArgs(1)[0];
              console.error(arg.reverse().map(function(token) {
                return token.text;
              }).join(""));
              return "";
            });
            defineMacro("\\show", function(context) {
              var tok = context.popToken();
              var name = tok.text;
              console.log(tok, context.macros.get(name), src_functions[name], src_symbols.math[name], src_symbols.text[name]);
              return "";
            });
            defineMacro("\\bgroup", "{");
            defineMacro("\\egroup", "}");
            defineMacro("~", "\\nobreakspace");
            defineMacro("\\lq", "`");
            defineMacro("\\rq", "'");
            defineMacro("\\aa", "\\r a");
            defineMacro("\\AA", "\\r A");
            defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
            defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
            defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
            defineMacro("\u212C", "\\mathscr{B}");
            defineMacro("\u2130", "\\mathscr{E}");
            defineMacro("\u2131", "\\mathscr{F}");
            defineMacro("\u210B", "\\mathscr{H}");
            defineMacro("\u2110", "\\mathscr{I}");
            defineMacro("\u2112", "\\mathscr{L}");
            defineMacro("\u2133", "\\mathscr{M}");
            defineMacro("\u211B", "\\mathscr{R}");
            defineMacro("\u212D", "\\mathfrak{C}");
            defineMacro("\u210C", "\\mathfrak{H}");
            defineMacro("\u2128", "\\mathfrak{Z}");
            defineMacro("\\Bbbk", "\\Bbb{k}");
            defineMacro("\xB7", "\\cdotp");
            defineMacro("\\llap", "\\mathllap{\\textrm{#1}}");
            defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}");
            defineMacro("\\clap", "\\mathclap{\\textrm{#1}}");
            defineMacro("\\mathstrut", "\\vphantom{(}");
            defineMacro("\\underbar", "\\underline{\\text{#1}}");
            defineMacro("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
            defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
            defineMacro("\\ne", "\\neq");
            defineMacro("\u2260", "\\neq");
            defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
            defineMacro("\u2209", "\\notin");
            defineMacro("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
            defineMacro("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
            defineMacro("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
            defineMacro("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
            defineMacro("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
            defineMacro("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
            defineMacro("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
            defineMacro("\u27C2", "\\perp");
            defineMacro("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
            defineMacro("\u220C", "\\notni");
            defineMacro("\u231C", "\\ulcorner");
            defineMacro("\u231D", "\\urcorner");
            defineMacro("\u231E", "\\llcorner");
            defineMacro("\u231F", "\\lrcorner");
            defineMacro("\xA9", "\\copyright");
            defineMacro("\xAE", "\\textregistered");
            defineMacro("\uFE0F", "\\textregistered");
            defineMacro("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
            defineMacro("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
            defineMacro("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
            defineMacro("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
            defineMacro("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
            defineMacro("\u22EE", "\\vdots");
            defineMacro("\\varGamma", "\\mathit{\\Gamma}");
            defineMacro("\\varDelta", "\\mathit{\\Delta}");
            defineMacro("\\varTheta", "\\mathit{\\Theta}");
            defineMacro("\\varLambda", "\\mathit{\\Lambda}");
            defineMacro("\\varXi", "\\mathit{\\Xi}");
            defineMacro("\\varPi", "\\mathit{\\Pi}");
            defineMacro("\\varSigma", "\\mathit{\\Sigma}");
            defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}");
            defineMacro("\\varPhi", "\\mathit{\\Phi}");
            defineMacro("\\varPsi", "\\mathit{\\Psi}");
            defineMacro("\\varOmega", "\\mathit{\\Omega}");
            defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
            defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
            defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
            defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
            defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
            defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
            var dotsByToken = {
              ",": "\\dotsc",
              "\\not": "\\dotsb",
              // \keybin@ checks for the following:
              "+": "\\dotsb",
              "=": "\\dotsb",
              "<": "\\dotsb",
              ">": "\\dotsb",
              "-": "\\dotsb",
              "*": "\\dotsb",
              ":": "\\dotsb",
              // Symbols whose definition starts with \DOTSB:
              "\\DOTSB": "\\dotsb",
              "\\coprod": "\\dotsb",
              "\\bigvee": "\\dotsb",
              "\\bigwedge": "\\dotsb",
              "\\biguplus": "\\dotsb",
              "\\bigcap": "\\dotsb",
              "\\bigcup": "\\dotsb",
              "\\prod": "\\dotsb",
              "\\sum": "\\dotsb",
              "\\bigotimes": "\\dotsb",
              "\\bigoplus": "\\dotsb",
              "\\bigodot": "\\dotsb",
              "\\bigsqcup": "\\dotsb",
              "\\And": "\\dotsb",
              "\\longrightarrow": "\\dotsb",
              "\\Longrightarrow": "\\dotsb",
              "\\longleftarrow": "\\dotsb",
              "\\Longleftarrow": "\\dotsb",
              "\\longleftrightarrow": "\\dotsb",
              "\\Longleftrightarrow": "\\dotsb",
              "\\mapsto": "\\dotsb",
              "\\longmapsto": "\\dotsb",
              "\\hookrightarrow": "\\dotsb",
              "\\doteq": "\\dotsb",
              // Symbols whose definition starts with \mathbin:
              "\\mathbin": "\\dotsb",
              // Symbols whose definition starts with \mathrel:
              "\\mathrel": "\\dotsb",
              "\\relbar": "\\dotsb",
              "\\Relbar": "\\dotsb",
              "\\xrightarrow": "\\dotsb",
              "\\xleftarrow": "\\dotsb",
              // Symbols whose definition starts with \DOTSI:
              "\\DOTSI": "\\dotsi",
              "\\int": "\\dotsi",
              "\\oint": "\\dotsi",
              "\\iint": "\\dotsi",
              "\\iiint": "\\dotsi",
              "\\iiiint": "\\dotsi",
              "\\idotsint": "\\dotsi",
              // Symbols whose definition starts with \DOTSX:
              "\\DOTSX": "\\dotsx"
            };
            defineMacro("\\dots", function(context) {
              var thedots = "\\dotso";
              var next = context.expandAfterFuture().text;
              if (next in dotsByToken) {
                thedots = dotsByToken[next];
              } else if (next.slice(0, 4) === "\\not") {
                thedots = "\\dotsb";
              } else if (next in src_symbols.math) {
                if (utils.contains(["bin", "rel"], src_symbols.math[next].group)) {
                  thedots = "\\dotsb";
                }
              }
              return thedots;
            });
            var spaceAfterDots = {
              // \rightdelim@ checks for the following:
              ")": true,
              "]": true,
              "\\rbrack": true,
              "\\}": true,
              "\\rbrace": true,
              "\\rangle": true,
              "\\rceil": true,
              "\\rfloor": true,
              "\\rgroup": true,
              "\\rmoustache": true,
              "\\right": true,
              "\\bigr": true,
              "\\biggr": true,
              "\\Bigr": true,
              "\\Biggr": true,
              // \extra@ also tests for the following:
              "$": true,
              // \extrap@ checks for the following:
              ";": true,
              ".": true,
              ",": true
            };
            defineMacro("\\dotso", function(context) {
              var next = context.future().text;
              if (next in spaceAfterDots) {
                return "\\ldots\\,";
              } else {
                return "\\ldots";
              }
            });
            defineMacro("\\dotsc", function(context) {
              var next = context.future().text;
              if (next in spaceAfterDots && next !== ",") {
                return "\\ldots\\,";
              } else {
                return "\\ldots";
              }
            });
            defineMacro("\\cdots", function(context) {
              var next = context.future().text;
              if (next in spaceAfterDots) {
                return "\\@cdots\\,";
              } else {
                return "\\@cdots";
              }
            });
            defineMacro("\\dotsb", "\\cdots");
            defineMacro("\\dotsm", "\\cdots");
            defineMacro("\\dotsi", "\\!\\cdots");
            defineMacro("\\dotsx", "\\ldots\\,");
            defineMacro("\\DOTSI", "\\relax");
            defineMacro("\\DOTSB", "\\relax");
            defineMacro("\\DOTSX", "\\relax");
            defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
            defineMacro("\\,", "\\tmspace+{3mu}{.1667em}");
            defineMacro("\\thinspace", "\\,");
            defineMacro("\\>", "\\mskip{4mu}");
            defineMacro("\\:", "\\tmspace+{4mu}{.2222em}");
            defineMacro("\\medspace", "\\:");
            defineMacro("\\;", "\\tmspace+{5mu}{.2777em}");
            defineMacro("\\thickspace", "\\;");
            defineMacro("\\!", "\\tmspace-{3mu}{.1667em}");
            defineMacro("\\negthinspace", "\\!");
            defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
            defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}");
            defineMacro("\\enspace", "\\kern.5em ");
            defineMacro("\\enskip", "\\hskip.5em\\relax");
            defineMacro("\\quad", "\\hskip1em\\relax");
            defineMacro("\\qquad", "\\hskip2em\\relax");
            defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
            defineMacro("\\tag@paren", "\\tag@literal{({#1})}");
            defineMacro("\\tag@literal", function(context) {
              if (context.macros.get("\\df@tag")) {
                throw new src_ParseError("Multiple \\tag");
              }
              return "\\gdef\\df@tag{\\text{#1}}";
            });
            defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
            defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
            defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
            defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
            defineMacro("\\newline", "\\\\\\relax");
            defineMacro("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
            var latexRaiseA = makeEm(fontMetricsData["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * fontMetricsData["Main-Regular"]["A".charCodeAt(0)][1]);
            defineMacro("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
            defineMacro("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
            defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
            defineMacro("\\@hspace", "\\hskip #1\\relax");
            defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
            defineMacro("\\ordinarycolon", ":");
            defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
            defineMacro("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
            defineMacro("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
            defineMacro("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
            defineMacro("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
            defineMacro("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
            defineMacro("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
            defineMacro("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
            defineMacro("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
            defineMacro("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
            defineMacro("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
            defineMacro("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
            defineMacro("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
            defineMacro("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
            defineMacro("\u2237", "\\dblcolon");
            defineMacro("\u2239", "\\eqcolon");
            defineMacro("\u2254", "\\coloneqq");
            defineMacro("\u2255", "\\eqqcolon");
            defineMacro("\u2A74", "\\Coloneqq");
            defineMacro("\\ratio", "\\vcentcolon");
            defineMacro("\\coloncolon", "\\dblcolon");
            defineMacro("\\colonequals", "\\coloneqq");
            defineMacro("\\coloncolonequals", "\\Coloneqq");
            defineMacro("\\equalscolon", "\\eqqcolon");
            defineMacro("\\equalscoloncolon", "\\Eqqcolon");
            defineMacro("\\colonminus", "\\coloneq");
            defineMacro("\\coloncolonminus", "\\Coloneq");
            defineMacro("\\minuscolon", "\\eqcolon");
            defineMacro("\\minuscoloncolon", "\\Eqcolon");
            defineMacro("\\coloncolonapprox", "\\Colonapprox");
            defineMacro("\\coloncolonsim", "\\Colonsim");
            defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
            defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
            defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
            defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
            defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
            defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
            defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
            defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
            defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
            defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
            defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
            defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
            defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
            defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
            defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
            defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
            defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
            defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
            defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
            defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
            defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
            defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
            defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
            defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
            defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
            defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
            defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
            defineMacro("\\imath", "\\html@mathml{\\@imath}{\u0131}");
            defineMacro("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
            defineMacro("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
            defineMacro("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
            defineMacro("\u27E6", "\\llbracket");
            defineMacro("\u27E7", "\\rrbracket");
            defineMacro("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
            defineMacro("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
            defineMacro("\u2983", "\\lBrace");
            defineMacro("\u2984", "\\rBrace");
            defineMacro("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
            defineMacro("\u29B5", "\\minuso");
            defineMacro("\\darr", "\\downarrow");
            defineMacro("\\dArr", "\\Downarrow");
            defineMacro("\\Darr", "\\Downarrow");
            defineMacro("\\lang", "\\langle");
            defineMacro("\\rang", "\\rangle");
            defineMacro("\\uarr", "\\uparrow");
            defineMacro("\\uArr", "\\Uparrow");
            defineMacro("\\Uarr", "\\Uparrow");
            defineMacro("\\N", "\\mathbb{N}");
            defineMacro("\\R", "\\mathbb{R}");
            defineMacro("\\Z", "\\mathbb{Z}");
            defineMacro("\\alef", "\\aleph");
            defineMacro("\\alefsym", "\\aleph");
            defineMacro("\\Alpha", "\\mathrm{A}");
            defineMacro("\\Beta", "\\mathrm{B}");
            defineMacro("\\bull", "\\bullet");
            defineMacro("\\Chi", "\\mathrm{X}");
            defineMacro("\\clubs", "\\clubsuit");
            defineMacro("\\cnums", "\\mathbb{C}");
            defineMacro("\\Complex", "\\mathbb{C}");
            defineMacro("\\Dagger", "\\ddagger");
            defineMacro("\\diamonds", "\\diamondsuit");
            defineMacro("\\empty", "\\emptyset");
            defineMacro("\\Epsilon", "\\mathrm{E}");
            defineMacro("\\Eta", "\\mathrm{H}");
            defineMacro("\\exist", "\\exists");
            defineMacro("\\harr", "\\leftrightarrow");
            defineMacro("\\hArr", "\\Leftrightarrow");
            defineMacro("\\Harr", "\\Leftrightarrow");
            defineMacro("\\hearts", "\\heartsuit");
            defineMacro("\\image", "\\Im");
            defineMacro("\\infin", "\\infty");
            defineMacro("\\Iota", "\\mathrm{I}");
            defineMacro("\\isin", "\\in");
            defineMacro("\\Kappa", "\\mathrm{K}");
            defineMacro("\\larr", "\\leftarrow");
            defineMacro("\\lArr", "\\Leftarrow");
            defineMacro("\\Larr", "\\Leftarrow");
            defineMacro("\\lrarr", "\\leftrightarrow");
            defineMacro("\\lrArr", "\\Leftrightarrow");
            defineMacro("\\Lrarr", "\\Leftrightarrow");
            defineMacro("\\Mu", "\\mathrm{M}");
            defineMacro("\\natnums", "\\mathbb{N}");
            defineMacro("\\Nu", "\\mathrm{N}");
            defineMacro("\\Omicron", "\\mathrm{O}");
            defineMacro("\\plusmn", "\\pm");
            defineMacro("\\rarr", "\\rightarrow");
            defineMacro("\\rArr", "\\Rightarrow");
            defineMacro("\\Rarr", "\\Rightarrow");
            defineMacro("\\real", "\\Re");
            defineMacro("\\reals", "\\mathbb{R}");
            defineMacro("\\Reals", "\\mathbb{R}");
            defineMacro("\\Rho", "\\mathrm{P}");
            defineMacro("\\sdot", "\\cdot");
            defineMacro("\\sect", "\\S");
            defineMacro("\\spades", "\\spadesuit");
            defineMacro("\\sub", "\\subset");
            defineMacro("\\sube", "\\subseteq");
            defineMacro("\\supe", "\\supseteq");
            defineMacro("\\Tau", "\\mathrm{T}");
            defineMacro("\\thetasym", "\\vartheta");
            defineMacro("\\weierp", "\\wp");
            defineMacro("\\Zeta", "\\mathrm{Z}");
            defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
            defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
            defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
            defineMacro("\\bra", "\\mathinner{\\langle{#1}|}");
            defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}");
            defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
            defineMacro("\\Bra", "\\left\\langle#1\\right|");
            defineMacro("\\Ket", "\\left|#1\\right\\rangle");
            var braketHelper = function braketHelper2(one) {
              return function(context) {
                var left = context.consumeArg().tokens;
                var middle = context.consumeArg().tokens;
                var middleDouble = context.consumeArg().tokens;
                var right = context.consumeArg().tokens;
                var oldMiddle = context.macros.get("|");
                var oldMiddleDouble = context.macros.get("\\|");
                context.macros.beginGroup();
                var midMacro = function midMacro2(double) {
                  return function(context2) {
                    if (one) {
                      context2.macros.set("|", oldMiddle);
                      if (middleDouble.length) {
                        context2.macros.set("\\|", oldMiddleDouble);
                      }
                    }
                    var doubled = double;
                    if (!double && middleDouble.length) {
                      var nextToken = context2.future();
                      if (nextToken.text === "|") {
                        context2.popToken();
                        doubled = true;
                      }
                    }
                    return {
                      tokens: doubled ? middleDouble : middle,
                      numArgs: 0
                    };
                  };
                };
                context.macros.set("|", midMacro(false));
                if (middleDouble.length) {
                  context.macros.set("\\|", midMacro(true));
                }
                var arg = context.consumeArg().tokens;
                var expanded = context.expandTokens([].concat(right, arg, left));
                context.macros.endGroup();
                return {
                  tokens: expanded.reverse(),
                  numArgs: 0
                };
              };
            };
            defineMacro("\\bra@ket", braketHelper(false));
            defineMacro("\\bra@set", braketHelper(true));
            defineMacro("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
            defineMacro("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
            defineMacro("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
            defineMacro("\\angln", "{\\angl n}");
            defineMacro("\\blue", "\\textcolor{##6495ed}{#1}");
            defineMacro("\\orange", "\\textcolor{##ffa500}{#1}");
            defineMacro("\\pink", "\\textcolor{##ff00af}{#1}");
            defineMacro("\\red", "\\textcolor{##df0030}{#1}");
            defineMacro("\\green", "\\textcolor{##28ae7b}{#1}");
            defineMacro("\\gray", "\\textcolor{gray}{#1}");
            defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}");
            defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}");
            defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}");
            defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}");
            defineMacro("\\blueD", "\\textcolor{##11accd}{#1}");
            defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}");
            defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}");
            defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}");
            defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}");
            defineMacro("\\tealD", "\\textcolor{##01a995}{#1}");
            defineMacro("\\tealE", "\\textcolor{##208170}{#1}");
            defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}");
            defineMacro("\\greenB", "\\textcolor{##8af281}{#1}");
            defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}");
            defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}");
            defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}");
            defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}");
            defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}");
            defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}");
            defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}");
            defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}");
            defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}");
            defineMacro("\\redB", "\\textcolor{##ff8482}{#1}");
            defineMacro("\\redC", "\\textcolor{##f9685d}{#1}");
            defineMacro("\\redD", "\\textcolor{##e84d39}{#1}");
            defineMacro("\\redE", "\\textcolor{##bc2612}{#1}");
            defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}");
            defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}");
            defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
            defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}");
            defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}");
            defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
            defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
            defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}");
            defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}");
            defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}");
            defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}");
            defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}");
            defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}");
            defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}");
            defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}");
            defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}");
            defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}");
            defineMacro("\\grayE", "\\textcolor{##babec2}{#1}");
            defineMacro("\\grayF", "\\textcolor{##888d93}{#1}");
            defineMacro("\\grayG", "\\textcolor{##626569}{#1}");
            defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}");
            defineMacro("\\grayI", "\\textcolor{##21242c}{#1}");
            defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}");
            defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
            ;
            var implicitCommands = {
              "^": true,
              // Parser.js
              "_": true,
              // Parser.js
              "\\limits": true,
              // Parser.js
              "\\nolimits": true
              // Parser.js
            };
            var MacroExpander = /* @__PURE__ */ function() {
              function MacroExpander2(input, settings, mode) {
                this.settings = void 0;
                this.expansionCount = void 0;
                this.lexer = void 0;
                this.macros = void 0;
                this.stack = void 0;
                this.mode = void 0;
                this.settings = settings;
                this.expansionCount = 0;
                this.feed(input);
                this.macros = new Namespace(src_macros, settings.macros);
                this.mode = mode;
                this.stack = [];
              }
              var _proto = MacroExpander2.prototype;
              _proto.feed = function feed(input) {
                this.lexer = new Lexer(input, this.settings);
              };
              _proto.switchMode = function switchMode(newMode) {
                this.mode = newMode;
              };
              _proto.beginGroup = function beginGroup() {
                this.macros.beginGroup();
              };
              _proto.endGroup = function endGroup() {
                this.macros.endGroup();
              };
              _proto.endGroups = function endGroups() {
                this.macros.endGroups();
              };
              _proto.future = function future() {
                if (this.stack.length === 0) {
                  this.pushToken(this.lexer.lex());
                }
                return this.stack[this.stack.length - 1];
              };
              _proto.popToken = function popToken() {
                this.future();
                return this.stack.pop();
              };
              _proto.pushToken = function pushToken(token) {
                this.stack.push(token);
              };
              _proto.pushTokens = function pushTokens(tokens) {
                var _this$stack;
                (_this$stack = this.stack).push.apply(_this$stack, tokens);
              };
              _proto.scanArgument = function scanArgument(isOptional) {
                var start;
                var end;
                var tokens;
                if (isOptional) {
                  this.consumeSpaces();
                  if (this.future().text !== "[") {
                    return null;
                  }
                  start = this.popToken();
                  var _this$consumeArg = this.consumeArg(["]"]);
                  tokens = _this$consumeArg.tokens;
                  end = _this$consumeArg.end;
                } else {
                  var _this$consumeArg2 = this.consumeArg();
                  tokens = _this$consumeArg2.tokens;
                  start = _this$consumeArg2.start;
                  end = _this$consumeArg2.end;
                }
                this.pushToken(new Token("EOF", end.loc));
                this.pushTokens(tokens);
                return start.range(end, "");
              };
              _proto.consumeSpaces = function consumeSpaces() {
                for (; ; ) {
                  var token = this.future();
                  if (token.text === " ") {
                    this.stack.pop();
                  } else {
                    break;
                  }
                }
              };
              _proto.consumeArg = function consumeArg(delims) {
                var tokens = [];
                var isDelimited = delims && delims.length > 0;
                if (!isDelimited) {
                  this.consumeSpaces();
                }
                var start = this.future();
                var tok;
                var depth = 0;
                var match = 0;
                do {
                  tok = this.popToken();
                  tokens.push(tok);
                  if (tok.text === "{") {
                    ++depth;
                  } else if (tok.text === "}") {
                    --depth;
                    if (depth === -1) {
                      throw new src_ParseError("Extra }", tok);
                    }
                  } else if (tok.text === "EOF") {
                    throw new src_ParseError("Unexpected end of input in a macro argument, expected '" + (delims && isDelimited ? delims[match] : "}") + "'", tok);
                  }
                  if (delims && isDelimited) {
                    if ((depth === 0 || depth === 1 && delims[match] === "{") && tok.text === delims[match]) {
                      ++match;
                      if (match === delims.length) {
                        tokens.splice(-match, match);
                        break;
                      }
                    } else {
                      match = 0;
                    }
                  }
                } while (depth !== 0 || isDelimited);
                if (start.text === "{" && tokens[tokens.length - 1].text === "}") {
                  tokens.pop();
                  tokens.shift();
                }
                tokens.reverse();
                return {
                  tokens,
                  start,
                  end: tok
                };
              };
              _proto.consumeArgs = function consumeArgs(numArgs, delimiters2) {
                if (delimiters2) {
                  if (delimiters2.length !== numArgs + 1) {
                    throw new src_ParseError("The length of delimiters doesn't match the number of args!");
                  }
                  var delims = delimiters2[0];
                  for (var i2 = 0; i2 < delims.length; i2++) {
                    var tok = this.popToken();
                    if (delims[i2] !== tok.text) {
                      throw new src_ParseError("Use of the macro doesn't match its definition", tok);
                    }
                  }
                }
                var args = [];
                for (var _i6 = 0; _i6 < numArgs; _i6++) {
                  args.push(this.consumeArg(delimiters2 && delimiters2[_i6 + 1]).tokens);
                }
                return args;
              };
              _proto.expandOnce = function expandOnce(expandableOnly) {
                var topToken = this.popToken();
                var name = topToken.text;
                var expansion = !topToken.noexpand ? this._getExpansion(name) : null;
                if (expansion == null || expandableOnly && expansion.unexpandable) {
                  if (expandableOnly && expansion == null && name[0] === "\\" && !this.isDefined(name)) {
                    throw new src_ParseError("Undefined control sequence: " + name);
                  }
                  this.pushToken(topToken);
                  return false;
                }
                this.expansionCount++;
                if (this.expansionCount > this.settings.maxExpand) {
                  throw new src_ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
                }
                var tokens = expansion.tokens;
                var args = this.consumeArgs(expansion.numArgs, expansion.delimiters);
                if (expansion.numArgs) {
                  tokens = tokens.slice();
                  for (var i2 = tokens.length - 1; i2 >= 0; --i2) {
                    var tok = tokens[i2];
                    if (tok.text === "#") {
                      if (i2 === 0) {
                        throw new src_ParseError("Incomplete placeholder at end of macro body", tok);
                      }
                      tok = tokens[--i2];
                      if (tok.text === "#") {
                        tokens.splice(i2 + 1, 1);
                      } else if (/^[1-9]$/.test(tok.text)) {
                        var _tokens;
                        (_tokens = tokens).splice.apply(_tokens, [i2, 2].concat(args[+tok.text - 1]));
                      } else {
                        throw new src_ParseError("Not a valid argument number", tok);
                      }
                    }
                  }
                }
                this.pushTokens(tokens);
                return tokens.length;
              };
              _proto.expandAfterFuture = function expandAfterFuture() {
                this.expandOnce();
                return this.future();
              };
              _proto.expandNextToken = function expandNextToken() {
                for (; ; ) {
                  if (this.expandOnce() === false) {
                    var token = this.stack.pop();
                    if (token.treatAsRelax) {
                      token.text = "\\relax";
                    }
                    return token;
                  }
                }
                throw new Error();
              };
              _proto.expandMacro = function expandMacro(name) {
                return this.macros.has(name) ? this.expandTokens([new Token(name)]) : void 0;
              };
              _proto.expandTokens = function expandTokens(tokens) {
                var output = [];
                var oldStackLength = this.stack.length;
                this.pushTokens(tokens);
                while (this.stack.length > oldStackLength) {
                  if (this.expandOnce(true) === false) {
                    var token = this.stack.pop();
                    if (token.treatAsRelax) {
                      token.noexpand = false;
                      token.treatAsRelax = false;
                    }
                    output.push(token);
                  }
                }
                return output;
              };
              _proto.expandMacroAsText = function expandMacroAsText(name) {
                var tokens = this.expandMacro(name);
                if (tokens) {
                  return tokens.map(function(token) {
                    return token.text;
                  }).join("");
                } else {
                  return tokens;
                }
              };
              _proto._getExpansion = function _getExpansion(name) {
                var definition = this.macros.get(name);
                if (definition == null) {
                  return definition;
                }
                if (name.length === 1) {
                  var catcode = this.lexer.catcodes[name];
                  if (catcode != null && catcode !== 13) {
                    return;
                  }
                }
                var expansion = typeof definition === "function" ? definition(this) : definition;
                if (typeof expansion === "string") {
                  var numArgs = 0;
                  if (expansion.indexOf("#") !== -1) {
                    var stripped = expansion.replace(/##/g, "");
                    while (stripped.indexOf("#" + (numArgs + 1)) !== -1) {
                      ++numArgs;
                    }
                  }
                  var bodyLexer = new Lexer(expansion, this.settings);
                  var tokens = [];
                  var tok = bodyLexer.lex();
                  while (tok.text !== "EOF") {
                    tokens.push(tok);
                    tok = bodyLexer.lex();
                  }
                  tokens.reverse();
                  var expanded = {
                    tokens,
                    numArgs
                  };
                  return expanded;
                }
                return expansion;
              };
              _proto.isDefined = function isDefined(name) {
                return this.macros.has(name) || src_functions.hasOwnProperty(name) || src_symbols.math.hasOwnProperty(name) || src_symbols.text.hasOwnProperty(name) || implicitCommands.hasOwnProperty(name);
              };
              _proto.isExpandable = function isExpandable(name) {
                var macro = this.macros.get(name);
                return macro != null ? typeof macro === "string" || typeof macro === "function" || !macro.unexpandable : src_functions.hasOwnProperty(name) && !src_functions[name].primitive;
              };
              return MacroExpander2;
            }();
            ;
            var unicodeSubRegEx = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/;
            var uSubsAndSups = Object.freeze({
              "\u208A": "+",
              "\u208B": "-",
              "\u208C": "=",
              "\u208D": "(",
              "\u208E": ")",
              "\u2080": "0",
              "\u2081": "1",
              "\u2082": "2",
              "\u2083": "3",
              "\u2084": "4",
              "\u2085": "5",
              "\u2086": "6",
              "\u2087": "7",
              "\u2088": "8",
              "\u2089": "9",
              "\u2090": "a",
              "\u2091": "e",
              "\u2095": "h",
              "\u1D62": "i",
              "\u2C7C": "j",
              "\u2096": "k",
              "\u2097": "l",
              "\u2098": "m",
              "\u2099": "n",
              "\u2092": "o",
              "\u209A": "p",
              "\u1D63": "r",
              "\u209B": "s",
              "\u209C": "t",
              "\u1D64": "u",
              "\u1D65": "v",
              "\u2093": "x",
              "\u1D66": "\u03B2",
              "\u1D67": "\u03B3",
              "\u1D68": "\u03C1",
              "\u1D69": "\u03D5",
              "\u1D6A": "\u03C7",
              "\u207A": "+",
              "\u207B": "-",
              "\u207C": "=",
              "\u207D": "(",
              "\u207E": ")",
              "\u2070": "0",
              "\xB9": "1",
              "\xB2": "2",
              "\xB3": "3",
              "\u2074": "4",
              "\u2075": "5",
              "\u2076": "6",
              "\u2077": "7",
              "\u2078": "8",
              "\u2079": "9",
              "\u1D2C": "A",
              "\u1D2E": "B",
              "\u1D30": "D",
              "\u1D31": "E",
              "\u1D33": "G",
              "\u1D34": "H",
              "\u1D35": "I",
              "\u1D36": "J",
              "\u1D37": "K",
              "\u1D38": "L",
              "\u1D39": "M",
              "\u1D3A": "N",
              "\u1D3C": "O",
              "\u1D3E": "P",
              "\u1D3F": "R",
              "\u1D40": "T",
              "\u1D41": "U",
              "\u2C7D": "V",
              "\u1D42": "W",
              "\u1D43": "a",
              "\u1D47": "b",
              "\u1D9C": "c",
              "\u1D48": "d",
              "\u1D49": "e",
              "\u1DA0": "f",
              "\u1D4D": "g",
              "\u02B0": "h",
              "\u2071": "i",
              "\u02B2": "j",
              "\u1D4F": "k",
              "\u02E1": "l",
              "\u1D50": "m",
              "\u207F": "n",
              "\u1D52": "o",
              "\u1D56": "p",
              "\u02B3": "r",
              "\u02E2": "s",
              "\u1D57": "t",
              "\u1D58": "u",
              "\u1D5B": "v",
              "\u02B7": "w",
              "\u02E3": "x",
              "\u02B8": "y",
              "\u1DBB": "z",
              "\u1D5D": "\u03B2",
              "\u1D5E": "\u03B3",
              "\u1D5F": "\u03B4",
              "\u1D60": "\u03D5",
              "\u1D61": "\u03C7",
              "\u1DBF": "\u03B8"
            });
            ;
            var unicodeAccents = {
              "\u0301": {
                "text": "\\'",
                "math": "\\acute"
              },
              "\u0300": {
                "text": "\\`",
                "math": "\\grave"
              },
              "\u0308": {
                "text": '\\"',
                "math": "\\ddot"
              },
              "\u0303": {
                "text": "\\~",
                "math": "\\tilde"
              },
              "\u0304": {
                "text": "\\=",
                "math": "\\bar"
              },
              "\u0306": {
                "text": "\\u",
                "math": "\\breve"
              },
              "\u030C": {
                "text": "\\v",
                "math": "\\check"
              },
              "\u0302": {
                "text": "\\^",
                "math": "\\hat"
              },
              "\u0307": {
                "text": "\\.",
                "math": "\\dot"
              },
              "\u030A": {
                "text": "\\r",
                "math": "\\mathring"
              },
              "\u030B": {
                "text": "\\H"
              },
              "\u0327": {
                "text": "\\c"
              }
            };
            var unicodeSymbols = {
              "\xE1": "a\u0301",
              "\xE0": "a\u0300",
              "\xE4": "a\u0308",
              "\u01DF": "a\u0308\u0304",
              "\xE3": "a\u0303",
              "\u0101": "a\u0304",
              "\u0103": "a\u0306",
              "\u1EAF": "a\u0306\u0301",
              "\u1EB1": "a\u0306\u0300",
              "\u1EB5": "a\u0306\u0303",
              "\u01CE": "a\u030C",
              "\xE2": "a\u0302",
              "\u1EA5": "a\u0302\u0301",
              "\u1EA7": "a\u0302\u0300",
              "\u1EAB": "a\u0302\u0303",
              "\u0227": "a\u0307",
              "\u01E1": "a\u0307\u0304",
              "\xE5": "a\u030A",
              "\u01FB": "a\u030A\u0301",
              "\u1E03": "b\u0307",
              "\u0107": "c\u0301",
              "\u1E09": "c\u0327\u0301",
              "\u010D": "c\u030C",
              "\u0109": "c\u0302",
              "\u010B": "c\u0307",
              "\xE7": "c\u0327",
              "\u010F": "d\u030C",
              "\u1E0B": "d\u0307",
              "\u1E11": "d\u0327",
              "\xE9": "e\u0301",
              "\xE8": "e\u0300",
              "\xEB": "e\u0308",
              "\u1EBD": "e\u0303",
              "\u0113": "e\u0304",
              "\u1E17": "e\u0304\u0301",
              "\u1E15": "e\u0304\u0300",
              "\u0115": "e\u0306",
              "\u1E1D": "e\u0327\u0306",
              "\u011B": "e\u030C",
              "\xEA": "e\u0302",
              "\u1EBF": "e\u0302\u0301",
              "\u1EC1": "e\u0302\u0300",
              "\u1EC5": "e\u0302\u0303",
              "\u0117": "e\u0307",
              "\u0229": "e\u0327",
              "\u1E1F": "f\u0307",
              "\u01F5": "g\u0301",
              "\u1E21": "g\u0304",
              "\u011F": "g\u0306",
              "\u01E7": "g\u030C",
              "\u011D": "g\u0302",
              "\u0121": "g\u0307",
              "\u0123": "g\u0327",
              "\u1E27": "h\u0308",
              "\u021F": "h\u030C",
              "\u0125": "h\u0302",
              "\u1E23": "h\u0307",
              "\u1E29": "h\u0327",
              "\xED": "i\u0301",
              "\xEC": "i\u0300",
              "\xEF": "i\u0308",
              "\u1E2F": "i\u0308\u0301",
              "\u0129": "i\u0303",
              "\u012B": "i\u0304",
              "\u012D": "i\u0306",
              "\u01D0": "i\u030C",
              "\xEE": "i\u0302",
              "\u01F0": "j\u030C",
              "\u0135": "j\u0302",
              "\u1E31": "k\u0301",
              "\u01E9": "k\u030C",
              "\u0137": "k\u0327",
              "\u013A": "l\u0301",
              "\u013E": "l\u030C",
              "\u013C": "l\u0327",
              "\u1E3F": "m\u0301",
              "\u1E41": "m\u0307",
              "\u0144": "n\u0301",
              "\u01F9": "n\u0300",
              "\xF1": "n\u0303",
              "\u0148": "n\u030C",
              "\u1E45": "n\u0307",
              "\u0146": "n\u0327",
              "\xF3": "o\u0301",
              "\xF2": "o\u0300",
              "\xF6": "o\u0308",
              "\u022B": "o\u0308\u0304",
              "\xF5": "o\u0303",
              "\u1E4D": "o\u0303\u0301",
              "\u1E4F": "o\u0303\u0308",
              "\u022D": "o\u0303\u0304",
              "\u014D": "o\u0304",
              "\u1E53": "o\u0304\u0301",
              "\u1E51": "o\u0304\u0300",
              "\u014F": "o\u0306",
              "\u01D2": "o\u030C",
              "\xF4": "o\u0302",
              "\u1ED1": "o\u0302\u0301",
              "\u1ED3": "o\u0302\u0300",
              "\u1ED7": "o\u0302\u0303",
              "\u022F": "o\u0307",
              "\u0231": "o\u0307\u0304",
              "\u0151": "o\u030B",
              "\u1E55": "p\u0301",
              "\u1E57": "p\u0307",
              "\u0155": "r\u0301",
              "\u0159": "r\u030C",
              "\u1E59": "r\u0307",
              "\u0157": "r\u0327",
              "\u015B": "s\u0301",
              "\u1E65": "s\u0301\u0307",
              "\u0161": "s\u030C",
              "\u1E67": "s\u030C\u0307",
              "\u015D": "s\u0302",
              "\u1E61": "s\u0307",
              "\u015F": "s\u0327",
              "\u1E97": "t\u0308",
              "\u0165": "t\u030C",
              "\u1E6B": "t\u0307",
              "\u0163": "t\u0327",
              "\xFA": "u\u0301",
              "\xF9": "u\u0300",
              "\xFC": "u\u0308",
              "\u01D8": "u\u0308\u0301",
              "\u01DC": "u\u0308\u0300",
              "\u01D6": "u\u0308\u0304",
              "\u01DA": "u\u0308\u030C",
              "\u0169": "u\u0303",
              "\u1E79": "u\u0303\u0301",
              "\u016B": "u\u0304",
              "\u1E7B": "u\u0304\u0308",
              "\u016D": "u\u0306",
              "\u01D4": "u\u030C",
              "\xFB": "u\u0302",
              "\u016F": "u\u030A",
              "\u0171": "u\u030B",
              "\u1E7D": "v\u0303",
              "\u1E83": "w\u0301",
              "\u1E81": "w\u0300",
              "\u1E85": "w\u0308",
              "\u0175": "w\u0302",
              "\u1E87": "w\u0307",
              "\u1E98": "w\u030A",
              "\u1E8D": "x\u0308",
              "\u1E8B": "x\u0307",
              "\xFD": "y\u0301",
              "\u1EF3": "y\u0300",
              "\xFF": "y\u0308",
              "\u1EF9": "y\u0303",
              "\u0233": "y\u0304",
              "\u0177": "y\u0302",
              "\u1E8F": "y\u0307",
              "\u1E99": "y\u030A",
              "\u017A": "z\u0301",
              "\u017E": "z\u030C",
              "\u1E91": "z\u0302",
              "\u017C": "z\u0307",
              "\xC1": "A\u0301",
              "\xC0": "A\u0300",
              "\xC4": "A\u0308",
              "\u01DE": "A\u0308\u0304",
              "\xC3": "A\u0303",
              "\u0100": "A\u0304",
              "\u0102": "A\u0306",
              "\u1EAE": "A\u0306\u0301",
              "\u1EB0": "A\u0306\u0300",
              "\u1EB4": "A\u0306\u0303",
              "\u01CD": "A\u030C",
              "\xC2": "A\u0302",
              "\u1EA4": "A\u0302\u0301",
              "\u1EA6": "A\u0302\u0300",
              "\u1EAA": "A\u0302\u0303",
              "\u0226": "A\u0307",
              "\u01E0": "A\u0307\u0304",
              "\xC5": "A\u030A",
              "\u01FA": "A\u030A\u0301",
              "\u1E02": "B\u0307",
              "\u0106": "C\u0301",
              "\u1E08": "C\u0327\u0301",
              "\u010C": "C\u030C",
              "\u0108": "C\u0302",
              "\u010A": "C\u0307",
              "\xC7": "C\u0327",
              "\u010E": "D\u030C",
              "\u1E0A": "D\u0307",
              "\u1E10": "D\u0327",
              "\xC9": "E\u0301",
              "\xC8": "E\u0300",
              "\xCB": "E\u0308",
              "\u1EBC": "E\u0303",
              "\u0112": "E\u0304",
              "\u1E16": "E\u0304\u0301",
              "\u1E14": "E\u0304\u0300",
              "\u0114": "E\u0306",
              "\u1E1C": "E\u0327\u0306",
              "\u011A": "E\u030C",
              "\xCA": "E\u0302",
              "\u1EBE": "E\u0302\u0301",
              "\u1EC0": "E\u0302\u0300",
              "\u1EC4": "E\u0302\u0303",
              "\u0116": "E\u0307",
              "\u0228": "E\u0327",
              "\u1E1E": "F\u0307",
              "\u01F4": "G\u0301",
              "\u1E20": "G\u0304",
              "\u011E": "G\u0306",
              "\u01E6": "G\u030C",
              "\u011C": "G\u0302",
              "\u0120": "G\u0307",
              "\u0122": "G\u0327",
              "\u1E26": "H\u0308",
              "\u021E": "H\u030C",
              "\u0124": "H\u0302",
              "\u1E22": "H\u0307",
              "\u1E28": "H\u0327",
              "\xCD": "I\u0301",
              "\xCC": "I\u0300",
              "\xCF": "I\u0308",
              "\u1E2E": "I\u0308\u0301",
              "\u0128": "I\u0303",
              "\u012A": "I\u0304",
              "\u012C": "I\u0306",
              "\u01CF": "I\u030C",
              "\xCE": "I\u0302",
              "\u0130": "I\u0307",
              "\u0134": "J\u0302",
              "\u1E30": "K\u0301",
              "\u01E8": "K\u030C",
              "\u0136": "K\u0327",
              "\u0139": "L\u0301",
              "\u013D": "L\u030C",
              "\u013B": "L\u0327",
              "\u1E3E": "M\u0301",
              "\u1E40": "M\u0307",
              "\u0143": "N\u0301",
              "\u01F8": "N\u0300",
              "\xD1": "N\u0303",
              "\u0147": "N\u030C",
              "\u1E44": "N\u0307",
              "\u0145": "N\u0327",
              "\xD3": "O\u0301",
              "\xD2": "O\u0300",
              "\xD6": "O\u0308",
              "\u022A": "O\u0308\u0304",
              "\xD5": "O\u0303",
              "\u1E4C": "O\u0303\u0301",
              "\u1E4E": "O\u0303\u0308",
              "\u022C": "O\u0303\u0304",
              "\u014C": "O\u0304",
              "\u1E52": "O\u0304\u0301",
              "\u1E50": "O\u0304\u0300",
              "\u014E": "O\u0306",
              "\u01D1": "O\u030C",
              "\xD4": "O\u0302",
              "\u1ED0": "O\u0302\u0301",
              "\u1ED2": "O\u0302\u0300",
              "\u1ED6": "O\u0302\u0303",
              "\u022E": "O\u0307",
              "\u0230": "O\u0307\u0304",
              "\u0150": "O\u030B",
              "\u1E54": "P\u0301",
              "\u1E56": "P\u0307",
              "\u0154": "R\u0301",
              "\u0158": "R\u030C",
              "\u1E58": "R\u0307",
              "\u0156": "R\u0327",
              "\u015A": "S\u0301",
              "\u1E64": "S\u0301\u0307",
              "\u0160": "S\u030C",
              "\u1E66": "S\u030C\u0307",
              "\u015C": "S\u0302",
              "\u1E60": "S\u0307",
              "\u015E": "S\u0327",
              "\u0164": "T\u030C",
              "\u1E6A": "T\u0307",
              "\u0162": "T\u0327",
              "\xDA": "U\u0301",
              "\xD9": "U\u0300",
              "\xDC": "U\u0308",
              "\u01D7": "U\u0308\u0301",
              "\u01DB": "U\u0308\u0300",
              "\u01D5": "U\u0308\u0304",
              "\u01D9": "U\u0308\u030C",
              "\u0168": "U\u0303",
              "\u1E78": "U\u0303\u0301",
              "\u016A": "U\u0304",
              "\u1E7A": "U\u0304\u0308",
              "\u016C": "U\u0306",
              "\u01D3": "U\u030C",
              "\xDB": "U\u0302",
              "\u016E": "U\u030A",
              "\u0170": "U\u030B",
              "\u1E7C": "V\u0303",
              "\u1E82": "W\u0301",
              "\u1E80": "W\u0300",
              "\u1E84": "W\u0308",
              "\u0174": "W\u0302",
              "\u1E86": "W\u0307",
              "\u1E8C": "X\u0308",
              "\u1E8A": "X\u0307",
              "\xDD": "Y\u0301",
              "\u1EF2": "Y\u0300",
              "\u0178": "Y\u0308",
              "\u1EF8": "Y\u0303",
              "\u0232": "Y\u0304",
              "\u0176": "Y\u0302",
              "\u1E8E": "Y\u0307",
              "\u0179": "Z\u0301",
              "\u017D": "Z\u030C",
              "\u1E90": "Z\u0302",
              "\u017B": "Z\u0307",
              "\u03AC": "\u03B1\u0301",
              "\u1F70": "\u03B1\u0300",
              "\u1FB1": "\u03B1\u0304",
              "\u1FB0": "\u03B1\u0306",
              "\u03AD": "\u03B5\u0301",
              "\u1F72": "\u03B5\u0300",
              "\u03AE": "\u03B7\u0301",
              "\u1F74": "\u03B7\u0300",
              "\u03AF": "\u03B9\u0301",
              "\u1F76": "\u03B9\u0300",
              "\u03CA": "\u03B9\u0308",
              "\u0390": "\u03B9\u0308\u0301",
              "\u1FD2": "\u03B9\u0308\u0300",
              "\u1FD1": "\u03B9\u0304",
              "\u1FD0": "\u03B9\u0306",
              "\u03CC": "\u03BF\u0301",
              "\u1F78": "\u03BF\u0300",
              "\u03CD": "\u03C5\u0301",
              "\u1F7A": "\u03C5\u0300",
              "\u03CB": "\u03C5\u0308",
              "\u03B0": "\u03C5\u0308\u0301",
              "\u1FE2": "\u03C5\u0308\u0300",
              "\u1FE1": "\u03C5\u0304",
              "\u1FE0": "\u03C5\u0306",
              "\u03CE": "\u03C9\u0301",
              "\u1F7C": "\u03C9\u0300",
              "\u038E": "\u03A5\u0301",
              "\u1FEA": "\u03A5\u0300",
              "\u03AB": "\u03A5\u0308",
              "\u1FE9": "\u03A5\u0304",
              "\u1FE8": "\u03A5\u0306",
              "\u038F": "\u03A9\u0301",
              "\u1FFA": "\u03A9\u0300"
            };
            var Parser = /* @__PURE__ */ function() {
              function Parser2(input, settings) {
                this.mode = void 0;
                this.gullet = void 0;
                this.settings = void 0;
                this.leftrightDepth = void 0;
                this.nextToken = void 0;
                this.mode = "math";
                this.gullet = new MacroExpander(input, settings, this.mode);
                this.settings = settings;
                this.leftrightDepth = 0;
              }
              var _proto = Parser2.prototype;
              _proto.expect = function expect(text, consume) {
                if (consume === void 0) {
                  consume = true;
                }
                if (this.fetch().text !== text) {
                  throw new src_ParseError("Expected '" + text + "', got '" + this.fetch().text + "'", this.fetch());
                }
                if (consume) {
                  this.consume();
                }
              };
              _proto.consume = function consume() {
                this.nextToken = null;
              };
              _proto.fetch = function fetch() {
                if (this.nextToken == null) {
                  this.nextToken = this.gullet.expandNextToken();
                }
                return this.nextToken;
              };
              _proto.switchMode = function switchMode(newMode) {
                this.mode = newMode;
                this.gullet.switchMode(newMode);
              };
              _proto.parse = function parse() {
                if (!this.settings.globalGroup) {
                  this.gullet.beginGroup();
                }
                if (this.settings.colorIsTextColor) {
                  this.gullet.macros.set("\\color", "\\textcolor");
                }
                try {
                  var parse2 = this.parseExpression(false);
                  this.expect("EOF");
                  if (!this.settings.globalGroup) {
                    this.gullet.endGroup();
                  }
                  return parse2;
                } finally {
                  this.gullet.endGroups();
                }
              };
              _proto.subparse = function subparse(tokens) {
                var oldToken = this.nextToken;
                this.consume();
                this.gullet.pushToken(new Token("}"));
                this.gullet.pushTokens(tokens);
                var parse = this.parseExpression(false);
                this.expect("}");
                this.nextToken = oldToken;
                return parse;
              };
              _proto.parseExpression = function parseExpression(breakOnInfix, breakOnTokenText) {
                var body = [];
                while (true) {
                  if (this.mode === "math") {
                    this.consumeSpaces();
                  }
                  var lex = this.fetch();
                  if (Parser2.endOfExpression.indexOf(lex.text) !== -1) {
                    break;
                  }
                  if (breakOnTokenText && lex.text === breakOnTokenText) {
                    break;
                  }
                  if (breakOnInfix && src_functions[lex.text] && src_functions[lex.text].infix) {
                    break;
                  }
                  var atom = this.parseAtom(breakOnTokenText);
                  if (!atom) {
                    break;
                  } else if (atom.type === "internal") {
                    continue;
                  }
                  body.push(atom);
                }
                if (this.mode === "text") {
                  this.formLigatures(body);
                }
                return this.handleInfixNodes(body);
              };
              _proto.handleInfixNodes = function handleInfixNodes(body) {
                var overIndex = -1;
                var funcName;
                for (var i2 = 0; i2 < body.length; i2++) {
                  if (body[i2].type === "infix") {
                    if (overIndex !== -1) {
                      throw new src_ParseError("only one infix operator per group", body[i2].token);
                    }
                    overIndex = i2;
                    funcName = body[i2].replaceWith;
                  }
                }
                if (overIndex !== -1 && funcName) {
                  var numerNode;
                  var denomNode;
                  var numerBody = body.slice(0, overIndex);
                  var denomBody = body.slice(overIndex + 1);
                  if (numerBody.length === 1 && numerBody[0].type === "ordgroup") {
                    numerNode = numerBody[0];
                  } else {
                    numerNode = {
                      type: "ordgroup",
                      mode: this.mode,
                      body: numerBody
                    };
                  }
                  if (denomBody.length === 1 && denomBody[0].type === "ordgroup") {
                    denomNode = denomBody[0];
                  } else {
                    denomNode = {
                      type: "ordgroup",
                      mode: this.mode,
                      body: denomBody
                    };
                  }
                  var node;
                  if (funcName === "\\\\abovefrac") {
                    node = this.callFunction(funcName, [numerNode, body[overIndex], denomNode], []);
                  } else {
                    node = this.callFunction(funcName, [numerNode, denomNode], []);
                  }
                  return [node];
                } else {
                  return body;
                }
              };
              _proto.handleSupSubscript = function handleSupSubscript(name) {
                var symbolToken = this.fetch();
                var symbol = symbolToken.text;
                this.consume();
                this.consumeSpaces();
                var group = this.parseGroup(name);
                if (!group) {
                  throw new src_ParseError("Expected group after '" + symbol + "'", symbolToken);
                }
                return group;
              };
              _proto.formatUnsupportedCmd = function formatUnsupportedCmd(text) {
                var textordArray = [];
                for (var i2 = 0; i2 < text.length; i2++) {
                  textordArray.push({
                    type: "textord",
                    mode: "text",
                    text: text[i2]
                  });
                }
                var textNode = {
                  type: "text",
                  mode: this.mode,
                  body: textordArray
                };
                var colorNode = {
                  type: "color",
                  mode: this.mode,
                  color: this.settings.errorColor,
                  body: [textNode]
                };
                return colorNode;
              };
              _proto.parseAtom = function parseAtom(breakOnTokenText) {
                var base = this.parseGroup("atom", breakOnTokenText);
                if (this.mode === "text") {
                  return base;
                }
                var superscript;
                var subscript;
                while (true) {
                  this.consumeSpaces();
                  var lex = this.fetch();
                  if (lex.text === "\\limits" || lex.text === "\\nolimits") {
                    if (base && base.type === "op") {
                      var limits = lex.text === "\\limits";
                      base.limits = limits;
                      base.alwaysHandleSupSub = true;
                    } else if (base && base.type === "operatorname") {
                      if (base.alwaysHandleSupSub) {
                        base.limits = lex.text === "\\limits";
                      }
                    } else {
                      throw new src_ParseError("Limit controls must follow a math operator", lex);
                    }
                    this.consume();
                  } else if (lex.text === "^") {
                    if (superscript) {
                      throw new src_ParseError("Double superscript", lex);
                    }
                    superscript = this.handleSupSubscript("superscript");
                  } else if (lex.text === "_") {
                    if (subscript) {
                      throw new src_ParseError("Double subscript", lex);
                    }
                    subscript = this.handleSupSubscript("subscript");
                  } else if (lex.text === "'") {
                    if (superscript) {
                      throw new src_ParseError("Double superscript", lex);
                    }
                    var prime = {
                      type: "textord",
                      mode: this.mode,
                      text: "\\prime"
                    };
                    var primes = [prime];
                    this.consume();
                    while (this.fetch().text === "'") {
                      primes.push(prime);
                      this.consume();
                    }
                    if (this.fetch().text === "^") {
                      primes.push(this.handleSupSubscript("superscript"));
                    }
                    superscript = {
                      type: "ordgroup",
                      mode: this.mode,
                      body: primes
                    };
                  } else if (uSubsAndSups[lex.text]) {
                    var str = uSubsAndSups[lex.text];
                    var isSub = unicodeSubRegEx.test(lex.text);
                    this.consume();
                    while (true) {
                      var token = this.fetch().text;
                      if (!uSubsAndSups[token]) {
                        break;
                      }
                      if (unicodeSubRegEx.test(token) !== isSub) {
                        break;
                      }
                      this.consume();
                      str += uSubsAndSups[token];
                    }
                    var body = new Parser2(str, this.settings).parse();
                    if (isSub) {
                      subscript = {
                        type: "ordgroup",
                        mode: "math",
                        body
                      };
                    } else {
                      superscript = {
                        type: "ordgroup",
                        mode: "math",
                        body
                      };
                    }
                  } else {
                    break;
                  }
                }
                if (superscript || subscript) {
                  return {
                    type: "supsub",
                    mode: this.mode,
                    base,
                    sup: superscript,
                    sub: subscript
                  };
                } else {
                  return base;
                }
              };
              _proto.parseFunction = function parseFunction(breakOnTokenText, name) {
                var token = this.fetch();
                var func = token.text;
                var funcData = src_functions[func];
                if (!funcData) {
                  return null;
                }
                this.consume();
                if (name && name !== "atom" && !funcData.allowedInArgument) {
                  throw new src_ParseError("Got function '" + func + "' with no arguments" + (name ? " as " + name : ""), token);
                } else if (this.mode === "text" && !funcData.allowedInText) {
                  throw new src_ParseError("Can't use function '" + func + "' in text mode", token);
                } else if (this.mode === "math" && funcData.allowedInMath === false) {
                  throw new src_ParseError("Can't use function '" + func + "' in math mode", token);
                }
                var _this$parseArguments = this.parseArguments(func, funcData), args = _this$parseArguments.args, optArgs = _this$parseArguments.optArgs;
                return this.callFunction(func, args, optArgs, token, breakOnTokenText);
              };
              _proto.callFunction = function callFunction(name, args, optArgs, token, breakOnTokenText) {
                var context = {
                  funcName: name,
                  parser: this,
                  token,
                  breakOnTokenText
                };
                var func = src_functions[name];
                if (func && func.handler) {
                  return func.handler(context, args, optArgs);
                } else {
                  throw new src_ParseError("No function handler for " + name);
                }
              };
              _proto.parseArguments = function parseArguments(func, funcData) {
                var totalArgs = funcData.numArgs + funcData.numOptionalArgs;
                if (totalArgs === 0) {
                  return {
                    args: [],
                    optArgs: []
                  };
                }
                var args = [];
                var optArgs = [];
                for (var i2 = 0; i2 < totalArgs; i2++) {
                  var argType = funcData.argTypes && funcData.argTypes[i2];
                  var isOptional = i2 < funcData.numOptionalArgs;
                  if (funcData.primitive && argType == null || // \sqrt expands into primitive if optional argument doesn't exist
                  funcData.type === "sqrt" && i2 === 1 && optArgs[0] == null) {
                    argType = "primitive";
                  }
                  var arg = this.parseGroupOfType("argument to '" + func + "'", argType, isOptional);
                  if (isOptional) {
                    optArgs.push(arg);
                  } else if (arg != null) {
                    args.push(arg);
                  } else {
                    throw new src_ParseError("Null argument, please report this as a bug");
                  }
                }
                return {
                  args,
                  optArgs
                };
              };
              _proto.parseGroupOfType = function parseGroupOfType(name, type, optional) {
                switch (type) {
                  case "color":
                    return this.parseColorGroup(optional);
                  case "size":
                    return this.parseSizeGroup(optional);
                  case "url":
                    return this.parseUrlGroup(optional);
                  case "math":
                  case "text":
                    return this.parseArgumentGroup(optional, type);
                  case "hbox": {
                    var group = this.parseArgumentGroup(optional, "text");
                    return group != null ? {
                      type: "styling",
                      mode: group.mode,
                      body: [group],
                      style: "text"
                      // simulate \textstyle
                    } : null;
                  }
                  case "raw": {
                    var token = this.parseStringGroup("raw", optional);
                    return token != null ? {
                      type: "raw",
                      mode: "text",
                      string: token.text
                    } : null;
                  }
                  case "primitive": {
                    if (optional) {
                      throw new src_ParseError("A primitive argument cannot be optional");
                    }
                    var _group = this.parseGroup(name);
                    if (_group == null) {
                      throw new src_ParseError("Expected group as " + name, this.fetch());
                    }
                    return _group;
                  }
                  case "original":
                  case null:
                  case void 0:
                    return this.parseArgumentGroup(optional);
                  default:
                    throw new src_ParseError("Unknown group type as " + name, this.fetch());
                }
              };
              _proto.consumeSpaces = function consumeSpaces() {
                while (this.fetch().text === " ") {
                  this.consume();
                }
              };
              _proto.parseStringGroup = function parseStringGroup(modeName, optional) {
                var argToken = this.gullet.scanArgument(optional);
                if (argToken == null) {
                  return null;
                }
                var str = "";
                var nextToken;
                while ((nextToken = this.fetch()).text !== "EOF") {
                  str += nextToken.text;
                  this.consume();
                }
                this.consume();
                argToken.text = str;
                return argToken;
              };
              _proto.parseRegexGroup = function parseRegexGroup(regex, modeName) {
                var firstToken = this.fetch();
                var lastToken = firstToken;
                var str = "";
                var nextToken;
                while ((nextToken = this.fetch()).text !== "EOF" && regex.test(str + nextToken.text)) {
                  lastToken = nextToken;
                  str += lastToken.text;
                  this.consume();
                }
                if (str === "") {
                  throw new src_ParseError("Invalid " + modeName + ": '" + firstToken.text + "'", firstToken);
                }
                return firstToken.range(lastToken, str);
              };
              _proto.parseColorGroup = function parseColorGroup(optional) {
                var res = this.parseStringGroup("color", optional);
                if (res == null) {
                  return null;
                }
                var match = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(res.text);
                if (!match) {
                  throw new src_ParseError("Invalid color: '" + res.text + "'", res);
                }
                var color = match[0];
                if (/^[0-9a-f]{6}$/i.test(color)) {
                  color = "#" + color;
                }
                return {
                  type: "color-token",
                  mode: this.mode,
                  color
                };
              };
              _proto.parseSizeGroup = function parseSizeGroup(optional) {
                var res;
                var isBlank = false;
                this.gullet.consumeSpaces();
                if (!optional && this.gullet.future().text !== "{") {
                  res = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size");
                } else {
                  res = this.parseStringGroup("size", optional);
                }
                if (!res) {
                  return null;
                }
                if (!optional && res.text.length === 0) {
                  res.text = "0pt";
                  isBlank = true;
                }
                var match = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(res.text);
                if (!match) {
                  throw new src_ParseError("Invalid size: '" + res.text + "'", res);
                }
                var data = {
                  number: +(match[1] + match[2]),
                  // sign + magnitude, cast to number
                  unit: match[3]
                };
                if (!validUnit(data)) {
                  throw new src_ParseError("Invalid unit: '" + data.unit + "'", res);
                }
                return {
                  type: "size",
                  mode: this.mode,
                  value: data,
                  isBlank
                };
              };
              _proto.parseUrlGroup = function parseUrlGroup(optional) {
                this.gullet.lexer.setCatcode("%", 13);
                this.gullet.lexer.setCatcode("~", 12);
                var res = this.parseStringGroup("url", optional);
                this.gullet.lexer.setCatcode("%", 14);
                this.gullet.lexer.setCatcode("~", 13);
                if (res == null) {
                  return null;
                }
                var url = res.text.replace(/\\([#$%&~_^{}])/g, "$1");
                return {
                  type: "url",
                  mode: this.mode,
                  url
                };
              };
              _proto.parseArgumentGroup = function parseArgumentGroup(optional, mode) {
                var argToken = this.gullet.scanArgument(optional);
                if (argToken == null) {
                  return null;
                }
                var outerMode = this.mode;
                if (mode) {
                  this.switchMode(mode);
                }
                this.gullet.beginGroup();
                var expression = this.parseExpression(false, "EOF");
                this.expect("EOF");
                this.gullet.endGroup();
                var result = {
                  type: "ordgroup",
                  mode: this.mode,
                  loc: argToken.loc,
                  body: expression
                };
                if (mode) {
                  this.switchMode(outerMode);
                }
                return result;
              };
              _proto.parseGroup = function parseGroup(name, breakOnTokenText) {
                var firstToken = this.fetch();
                var text = firstToken.text;
                var result;
                if (text === "{" || text === "\\begingroup") {
                  this.consume();
                  var groupEnd = text === "{" ? "}" : "\\endgroup";
                  this.gullet.beginGroup();
                  var expression = this.parseExpression(false, groupEnd);
                  var lastToken = this.fetch();
                  this.expect(groupEnd);
                  this.gullet.endGroup();
                  result = {
                    type: "ordgroup",
                    mode: this.mode,
                    loc: SourceLocation.range(firstToken, lastToken),
                    body: expression,
                    // A group formed by \begingroup...\endgroup is a semi-simple group
                    // which doesn't affect spacing in math mode, i.e., is transparent.
                    // https://tex.stackexchange.com/questions/1930/when-should-one-
                    // use-begingroup-instead-of-bgroup
                    semisimple: text === "\\begingroup" || void 0
                  };
                } else {
                  result = this.parseFunction(breakOnTokenText, name) || this.parseSymbol();
                  if (result == null && text[0] === "\\" && !implicitCommands.hasOwnProperty(text)) {
                    if (this.settings.throwOnError) {
                      throw new src_ParseError("Undefined control sequence: " + text, firstToken);
                    }
                    result = this.formatUnsupportedCmd(text);
                    this.consume();
                  }
                }
                return result;
              };
              _proto.formLigatures = function formLigatures(group) {
                var n = group.length - 1;
                for (var i2 = 0; i2 < n; ++i2) {
                  var a = group[i2];
                  var v = a.text;
                  if (v === "-" && group[i2 + 1].text === "-") {
                    if (i2 + 1 < n && group[i2 + 2].text === "-") {
                      group.splice(i2, 3, {
                        type: "textord",
                        mode: "text",
                        loc: SourceLocation.range(a, group[i2 + 2]),
                        text: "---"
                      });
                      n -= 2;
                    } else {
                      group.splice(i2, 2, {
                        type: "textord",
                        mode: "text",
                        loc: SourceLocation.range(a, group[i2 + 1]),
                        text: "--"
                      });
                      n -= 1;
                    }
                  }
                  if ((v === "'" || v === "`") && group[i2 + 1].text === v) {
                    group.splice(i2, 2, {
                      type: "textord",
                      mode: "text",
                      loc: SourceLocation.range(a, group[i2 + 1]),
                      text: v + v
                    });
                    n -= 1;
                  }
                }
              };
              _proto.parseSymbol = function parseSymbol() {
                var nucleus = this.fetch();
                var text = nucleus.text;
                if (/^\\verb[^a-zA-Z]/.test(text)) {
                  this.consume();
                  var arg = text.slice(5);
                  var star = arg.charAt(0) === "*";
                  if (star) {
                    arg = arg.slice(1);
                  }
                  if (arg.length < 2 || arg.charAt(0) !== arg.slice(-1)) {
                    throw new src_ParseError("\\verb assertion failed --\n                    please report what input caused this bug");
                  }
                  arg = arg.slice(1, -1);
                  return {
                    type: "verb",
                    mode: "text",
                    body: arg,
                    star
                  };
                }
                if (unicodeSymbols.hasOwnProperty(text[0]) && !src_symbols[this.mode][text[0]]) {
                  if (this.settings.strict && this.mode === "math") {
                    this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + text[0] + '" used in math mode', nucleus);
                  }
                  text = unicodeSymbols[text[0]] + text.slice(1);
                }
                var match = combiningDiacriticalMarksEndRegex.exec(text);
                if (match) {
                  text = text.substring(0, match.index);
                  if (text === "i") {
                    text = "\u0131";
                  } else if (text === "j") {
                    text = "\u0237";
                  }
                }
                var symbol;
                if (src_symbols[this.mode][text]) {
                  if (this.settings.strict && this.mode === "math" && extraLatin.indexOf(text) >= 0) {
                    this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + text[0] + '" used in math mode', nucleus);
                  }
                  var group = src_symbols[this.mode][text].group;
                  var loc = SourceLocation.range(nucleus);
                  var s;
                  if (ATOMS.hasOwnProperty(group)) {
                    var family = group;
                    s = {
                      type: "atom",
                      mode: this.mode,
                      family,
                      loc,
                      text
                    };
                  } else {
                    s = {
                      type: group,
                      mode: this.mode,
                      loc,
                      text
                    };
                  }
                  symbol = s;
                } else if (text.charCodeAt(0) >= 128) {
                  if (this.settings.strict) {
                    if (!supportedCodepoint(text.charCodeAt(0))) {
                      this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + text[0] + '"' + (" (" + text.charCodeAt(0) + ")"), nucleus);
                    } else if (this.mode === "math") {
                      this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + text[0] + '" used in math mode', nucleus);
                    }
                  }
                  symbol = {
                    type: "textord",
                    mode: "text",
                    loc: SourceLocation.range(nucleus),
                    text
                  };
                } else {
                  return null;
                }
                this.consume();
                if (match) {
                  for (var i2 = 0; i2 < match[0].length; i2++) {
                    var accent2 = match[0][i2];
                    if (!unicodeAccents[accent2]) {
                      throw new src_ParseError("Unknown accent ' " + accent2 + "'", nucleus);
                    }
                    var command = unicodeAccents[accent2][this.mode] || unicodeAccents[accent2].text;
                    if (!command) {
                      throw new src_ParseError("Accent " + accent2 + " unsupported in " + this.mode + " mode", nucleus);
                    }
                    symbol = {
                      type: "accent",
                      mode: this.mode,
                      loc: SourceLocation.range(nucleus),
                      label: command,
                      isStretchy: false,
                      isShifty: true,
                      // $FlowFixMe
                      base: symbol
                    };
                  }
                }
                return symbol;
              };
              return Parser2;
            }();
            Parser.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
            ;
            var parseTree = function parseTree2(toParse, settings) {
              if (!(typeof toParse === "string" || toParse instanceof String)) {
                throw new TypeError("KaTeX can only parse string typed expression");
              }
              var parser = new Parser(toParse, settings);
              delete parser.gullet.macros.current["\\df@tag"];
              var tree = parser.parse();
              delete parser.gullet.macros.current["\\current@color"];
              delete parser.gullet.macros.current["\\color"];
              if (parser.gullet.macros.get("\\df@tag")) {
                if (!settings.displayMode) {
                  throw new src_ParseError("\\tag works only in display equations");
                }
                tree = [{
                  type: "tag",
                  mode: "text",
                  body: tree,
                  tag: parser.subparse([new Token("\\df@tag")])
                }];
              }
              return tree;
            };
            var src_parseTree = parseTree;
            ;
            var render = function render2(expression, baseNode, options) {
              baseNode.textContent = "";
              var node = renderToDomTree(expression, options).toNode();
              baseNode.appendChild(node);
            };
            if (typeof document !== "undefined") {
              if (document.compatMode !== "CSS1Compat") {
                typeof console !== "undefined" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.");
                render = function render2() {
                  throw new src_ParseError("KaTeX doesn't work in quirks mode.");
                };
              }
            }
            var renderToString = function renderToString2(expression, options) {
              var markup = renderToDomTree(expression, options).toMarkup();
              return markup;
            };
            var generateParseTree = function generateParseTree2(expression, options) {
              var settings = new Settings(options);
              return src_parseTree(expression, settings);
            };
            var renderError = function renderError2(error, expression, options) {
              if (options.throwOnError || !(error instanceof src_ParseError)) {
                throw error;
              }
              var node = buildCommon.makeSpan(["katex-error"], [new SymbolNode(expression)]);
              node.setAttribute("title", error.toString());
              node.setAttribute("style", "color:" + options.errorColor);
              return node;
            };
            var renderToDomTree = function renderToDomTree2(expression, options) {
              var settings = new Settings(options);
              try {
                var tree = src_parseTree(expression, settings);
                return buildTree(tree, expression, settings);
              } catch (error) {
                return renderError(error, expression, settings);
              }
            };
            var renderToHTMLTree = function renderToHTMLTree2(expression, options) {
              var settings = new Settings(options);
              try {
                var tree = src_parseTree(expression, settings);
                return buildHTMLTree(tree, expression, settings);
              } catch (error) {
                return renderError(error, expression, settings);
              }
            };
            var katex = {
              /**
               * Current KaTeX version
               */
              version: "0.16.9",
              /**
               * Renders the given LaTeX into an HTML+MathML combination, and adds
               * it as a child to the specified DOM node.
               */
              render,
              /**
               * Renders the given LaTeX into an HTML+MathML combination string,
               * for sending to the client.
               */
              renderToString,
              /**
               * KaTeX error, usually during parsing.
               */
              ParseError: src_ParseError,
              /**
               * The shema of Settings
               */
              SETTINGS_SCHEMA,
              /**
               * Parses the given LaTeX into KaTeX's internal parse tree structure,
               * without rendering to HTML or MathML.
               *
               * NOTE: This method is not currently recommended for public use.
               * The internal tree representation is unstable and is very likely
               * to change. Use at your own risk.
               */
              __parse: generateParseTree,
              /**
               * Renders the given LaTeX into an HTML+MathML internal DOM tree
               * representation, without flattening that representation to a string.
               *
               * NOTE: This method is not currently recommended for public use.
               * The internal tree representation is unstable and is very likely
               * to change. Use at your own risk.
               */
              __renderToDomTree: renderToDomTree,
              /**
               * Renders the given LaTeX into an HTML internal DOM tree representation,
               * without MathML and without flattening that representation to a string.
               *
               * NOTE: This method is not currently recommended for public use.
               * The internal tree representation is unstable and is very likely
               * to change. Use at your own risk.
               */
              __renderToHTMLTree: renderToHTMLTree,
              /**
               * extends internal font metrics object with a new object
               * each key in the new object represents a font name
              */
              __setFontMetrics: setFontMetrics,
              /**
               * adds a new symbol to builtin symbols table
               */
              __defineSymbol: defineSymbol,
              /**
               * adds a new function to builtin function list,
               * which directly produce parse tree elements
               * and have their own html/mathml builders
               */
              __defineFunction: defineFunction,
              /**
               * adds a new macro to builtin macro list
               */
              __defineMacro: defineMacro,
              /**
               * Expose the dom tree node types, which can be useful for type checking nodes.
               *
               * NOTE: This method is not currently recommended for public use.
               * The internal tree representation is unstable and is very likely
               * to change. Use at your own risk.
               */
              __domTree: {
                Span,
                Anchor,
                SymbolNode,
                SvgNode,
                PathNode,
                LineNode
              }
            };
            ;
            var katex_webpack = katex;
            __webpack_exports__ = __webpack_exports__["default"];
            return __webpack_exports__;
          }()
        );
      });
    }
  });
  require_stdin();
})();

;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("katex"));
	else if(typeof define === 'function' && define.amd)
		define(["katex"], factory);
	else if(typeof exports === 'object')
		exports["renderMathInElement"] = factory(require("katex"));
	else
		root["renderMathInElement"] = factory(root["katex"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__771__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 771:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__771__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auto_render; }
});

// EXTERNAL MODULE: external "katex"
var external_katex_ = __webpack_require__(771);
var external_katex_default = /*#__PURE__*/__webpack_require__.n(external_katex_);
;// CONCATENATED MODULE: ./contrib/auto-render/splitAtDelimiters.js
/* eslint no-constant-condition:0 */
var findEndOfMath = function findEndOfMath(delimiter, text, startIndex) {
  // Adapted from
  // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
  var index = startIndex;
  var braceLevel = 0;
  var delimLength = delimiter.length;

  while (index < text.length) {
    var character = text[index];

    if (braceLevel <= 0 && text.slice(index, index + delimLength) === delimiter) {
      return index;
    } else if (character === "\\") {
      index++;
    } else if (character === "{") {
      braceLevel++;
    } else if (character === "}") {
      braceLevel--;
    }

    index++;
  }

  return -1;
};

var escapeRegex = function escapeRegex(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

var amsRegex = /^\\begin{/;

var splitAtDelimiters = function splitAtDelimiters(text, delimiters) {
  var index;
  var data = [];
  var regexLeft = new RegExp("(" + delimiters.map(function (x) {
    return escapeRegex(x.left);
  }).join("|") + ")");

  while (true) {
    index = text.search(regexLeft);

    if (index === -1) {
      break;
    }

    if (index > 0) {
      data.push({
        type: "text",
        data: text.slice(0, index)
      });
      text = text.slice(index); // now text starts with delimiter
    } // ... so this always succeeds:


    var i = delimiters.findIndex(function (delim) {
      return text.startsWith(delim.left);
    });
    index = findEndOfMath(delimiters[i].right, text, delimiters[i].left.length);

    if (index === -1) {
      break;
    }

    var rawData = text.slice(0, index + delimiters[i].right.length);
    var math = amsRegex.test(rawData) ? rawData : text.slice(delimiters[i].left.length, index);
    data.push({
      type: "math",
      data: math,
      rawData: rawData,
      display: delimiters[i].display
    });
    text = text.slice(index + delimiters[i].right.length);
  }

  if (text !== "") {
    data.push({
      type: "text",
      data: text
    });
  }

  return data;
};

/* harmony default export */ var auto_render_splitAtDelimiters = (splitAtDelimiters);
;// CONCATENATED MODULE: ./contrib/auto-render/auto-render.js
/* eslint no-console:0 */


/* Note: optionsCopy is mutated by this method. If it is ever exposed in the
 * API, we should copy it before mutating.
 */

var renderMathInText = function renderMathInText(text, optionsCopy) {
  var data = auto_render_splitAtDelimiters(text, optionsCopy.delimiters);

  if (data.length === 1 && data[0].type === 'text') {
    // There is no formula in the text.
    // Let's return null which means there is no need to replace
    // the current text node with a new one.
    return null;
  }

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    if (data[i].type === "text") {
      fragment.appendChild(document.createTextNode(data[i].data));
    } else {
      var span = document.createElement("span");
      var math = data[i].data; // Override any display mode defined in the settings with that
      // defined by the text itself

      optionsCopy.displayMode = data[i].display;

      try {
        if (optionsCopy.preProcess) {
          math = optionsCopy.preProcess(math);
        }

        external_katex_default().render(math, span, optionsCopy);
      } catch (e) {
        if (!(e instanceof (external_katex_default()).ParseError)) {
          throw e;
        }

        optionsCopy.errorCallback("KaTeX auto-render: Failed to parse `" + data[i].data + "` with ", e);
        fragment.appendChild(document.createTextNode(data[i].rawData));
        continue;
      }

      fragment.appendChild(span);
    }
  }

  return fragment;
};

var renderElem = function renderElem(elem, optionsCopy) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    var childNode = elem.childNodes[i];

    if (childNode.nodeType === 3) {
      // Text node
      // Concatenate all sibling text nodes.
      // Webkit browsers split very large text nodes into smaller ones,
      // so the delimiters may be split across different nodes.
      var textContentConcat = childNode.textContent;
      var sibling = childNode.nextSibling;
      var nSiblings = 0;

      while (sibling && sibling.nodeType === Node.TEXT_NODE) {
        textContentConcat += sibling.textContent;
        sibling = sibling.nextSibling;
        nSiblings++;
      }

      var frag = renderMathInText(textContentConcat, optionsCopy);

      if (frag) {
        // Remove extra text nodes
        for (var j = 0; j < nSiblings; j++) {
          childNode.nextSibling.remove();
        }

        i += frag.childNodes.length - 1;
        elem.replaceChild(frag, childNode);
      } else {
        // If the concatenated text does not contain math
        // the siblings will not either
        i += nSiblings;
      }
    } else if (childNode.nodeType === 1) {
      (function () {
        // Element node
        var className = ' ' + childNode.className + ' ';
        var shouldRender = optionsCopy.ignoredTags.indexOf(childNode.nodeName.toLowerCase()) === -1 && optionsCopy.ignoredClasses.every(function (x) {
          return className.indexOf(' ' + x + ' ') === -1;
        });

        if (shouldRender) {
          renderElem(childNode, optionsCopy);
        }
      })();
    } // Otherwise, it's something else, and ignore it.

  }
};

var renderMathInElement = function renderMathInElement(elem, options) {
  if (!elem) {
    throw new Error("No element provided to render");
  }

  var optionsCopy = {}; // Object.assign(optionsCopy, option)

  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      optionsCopy[option] = options[option];
    }
  } // default options


  optionsCopy.delimiters = optionsCopy.delimiters || [{
    left: "$$",
    right: "$$",
    display: true
  }, {
    left: "\\(",
    right: "\\)",
    display: false
  }, // LaTeX uses $…$, but it ruins the display of normal `$` in text:
  // {left: "$", right: "$", display: false},
  // $ must come after $$
  // Render AMS environments even if outside $$…$$ delimiters.
  {
    left: "\\begin{equation}",
    right: "\\end{equation}",
    display: true
  }, {
    left: "\\begin{align}",
    right: "\\end{align}",
    display: true
  }, {
    left: "\\begin{alignat}",
    right: "\\end{alignat}",
    display: true
  }, {
    left: "\\begin{gather}",
    right: "\\end{gather}",
    display: true
  }, {
    left: "\\begin{CD}",
    right: "\\end{CD}",
    display: true
  }, {
    left: "\\[",
    right: "\\]",
    display: true
  }];
  optionsCopy.ignoredTags = optionsCopy.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"];
  optionsCopy.ignoredClasses = optionsCopy.ignoredClasses || [];
  optionsCopy.errorCallback = optionsCopy.errorCallback || console.error; // Enable sharing of global macros defined via `\gdef` between different
  // math elements within a single call to `renderMathInElement`.

  optionsCopy.macros = optionsCopy.macros || {};
  renderElem(elem, optionsCopy);
};

/* harmony default export */ var auto_render = (renderMathInElement);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
;
(() => {
  // <stdin>
  console.log("Hello from Hugo!");
})();
