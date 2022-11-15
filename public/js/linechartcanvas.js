
(function() {
    function ia(k, E) {
      k.prototype = pb(E.prototype);
      k.prototype.constructor = k;
      k.base = E.prototype
    }
  
    function pb(k) {
      function E() {}
      E.prototype = k;
      return new E
    }
  
    function cb(k, E, e) {
      "millisecond" === e ? k.setMilliseconds(k.getMilliseconds() + 1 * E) : "second" === e ? k.setSeconds(k.getSeconds() + 1 * E) : "minute" === e ? k.setMinutes(k.getMinutes() + 1 * E) : "hour" === e ? k.setHours(k.getHours() + 1 * E) : "day" === e ? k.setDate(k.getDate() + 1 * E) : "week" === e ? k.setDate(k.getDate() + 7 * E) : "month" === e ? k.setMonth(k.getMonth() + 1 * E) : "year" === e && k.setFullYear(k.getFullYear() +
        1 * E);
      return k
    }
  
    function pa(k, E) {
      var e = !1;
      0 > k && (e = !0, k *= -1);
      k = "" + k;
      for (E = E ? E : 1; k.length < E;) k = "0" + k;
      return e ? "-" + k : k
    }
  
    function Pa(k) {
      if (!k) return k;
      k = k.replace(/^\s\s*/, "");
      for (var E = /\s/, e = k.length; E.test(k.charAt(--e)););
      return k.slice(0, e + 1)
    }
  
    function Ha(k) {
      k.roundRect = function(k, e, u, F, M, z, s, A) {
        s && (this.fillStyle = s);
        A && (this.strokeStyle = A);
        "undefined" === typeof M && (M = 5);
        this.lineWidth = z;
        this.beginPath();
        this.moveTo(k + M, e);
        this.lineTo(k + u - M, e);
        this.quadraticCurveTo(k + u, e, k + u, e + M);
        this.lineTo(k + u, e + F -
          M);
        this.quadraticCurveTo(k + u, e + F, k + u - M, e + F);
        this.lineTo(k + M, e + F);
        this.quadraticCurveTo(k, e + F, k, e + F - M);
        this.lineTo(k, e + M);
        this.quadraticCurveTo(k, e, k + M, e);
        this.closePath();
        s && this.fill();
        A && 0 < z && this.stroke()
      }
    }
  
    function Xa(k, E) {
      return k - E
    }
  
    function db(k, E, e) {
      if (k && E && e) {
        e = e + "." + E;
        var u = "image/" + E;
        k = k.toDataURL(u);
        var F = !1,
          M = document.createElement("a");
        M.download = e;
        M.href = k;
        if ("undefined" !== typeof Blob && new Blob) {
          for (var z = k.replace(/^data:[a-z\/]*;base64,/, ""), z = atob(z), s = new ArrayBuffer(z.length), s =
              new Uint8Array(s), A = 0; A < z.length; A++) s[A] = z.charCodeAt(A);
          E = new Blob([s.buffer], {
            type: "image/" + E
          });
          try {
            window.navigator.msSaveBlob(E, e), F = !0
          } catch (P) {
            M.dataset.downloadurl = [u, M.download, M.href].join(":"), M.href = window.URL.createObjectURL(E)
          }
        }
        if (!F) try {
          event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), M.dispatchEvent ? M.dispatchEvent(event) : M.fireEvent && M.fireEvent("onclick")
        } catch (G) {
          E = window.open(), E.document.write("<img src='" + k + "'></img><div>Please right click on the image and save it to your device</div>"),
            E.document.close()
        }
      }
    }
  
    function V(k) {
      var E = ((k & 16711680) >> 16).toString(16),
        e = ((k & 65280) >> 8).toString(16);
      k = ((k & 255) >> 0).toString(16);
      E = 2 > E.length ? "0" + E : E;
      e = 2 > e.length ? "0" + e : e;
      k = 2 > k.length ? "0" + k : k;
      return "#" + E + e + k
    }
  
    function qb(k, E) {
      var e = this.length >>> 0,
        u = Number(E) || 0,
        u = 0 > u ? Math.ceil(u) : Math.floor(u);
      for (0 > u && (u += e); u < e; u++)
        if (u in this && this[u] === k) return u;
      return -1
    }
  
    function e(k) {
      return null === k || "undefined" === typeof k
    }
  
    function Ea(k) {
      k.indexOf || (k.indexOf = qb);
      return k
    }
  
    function rb(k) {
      if (ka.fSDec) k[xa("`eeDwdouMhrudods")](xa("e`u`@ohl`uhnoHuds`uhnoDoe"),
        function() {
          ka._fTWm && ka._fTWm(k)
        })
    }
  
    function eb(k, E, e) {
      e = e || "normal";
      var u = k + "_" + E + "_" + e,
        F = fb[u];
      if (isNaN(F)) {
        try {
          if (!Fa) {
            var M = document.body;
            Fa = document.createElement("span");
            Fa.innerHTML = "";
            var z = document.createTextNode("Mpgyi");
            Fa.appendChild(z);
            M.appendChild(Fa)
          }
          Fa.style.display = "";
          Q(Fa, {
            position: "absolute",
            left: "0px",
            top: "-20000px",
            padding: "0px",
            margin: "0px",
            border: "none",
            whiteSpace: "pre",
            lineHeight: "normal",
            fontFamily: k,
            fontSize: E + "px",
            fontWeight: e
          });
          F = Math.round(Fa.offsetHeight);
          Fa.style.display =
            "none"
        } catch (s) {
          F = Math.ceil(1.1 * E)
        }
        F = Math.max(F, E);
        fb[u] = F
      }
      return F
    }
  
    function S(k, E) {
      var e = [];
      if (e = {
          solid: [],
          shortDash: [3, 1],
          shortDot: [1, 1],
          shortDashDot: [3, 1, 1, 1],
          shortDashDotDot: [3, 1, 1, 1, 1, 1],
          dot: [1, 2],
          dash: [4, 2],
          dashDot: [4, 2, 1, 2],
          longDash: [8, 2],
          longDashDot: [8, 2, 1, 2],
          longDashDotDot: [8, 2, 1, 2, 1, 2]
        } [k || "solid"])
        for (var u = 0; u < e.length; u++) e[u] *= E;
      else e = [];
      return e
    }
  
    function A(k, E, L, u, F) {
      u = u || [];
      F = e(F) ? sb ? {
        passive: !1,
        capture: !1
      } : !1 : F;
      u.push([k, E, L, F]);
      return k.addEventListener ? (k.addEventListener(E, L,
        F), L) : k.attachEvent ? (u = function(E) {
        E = E || window.event;
        E.preventDefault = E.preventDefault || function() {
          E.returnValue = !1
        };
        E.stopPropagation = E.stopPropagation || function() {
          E.cancelBubble = !0
        };
        L.call(k, E)
      }, k.attachEvent("on" + E, u), u) : !1
    }
  
    function gb(k, E, e, u) {
      u = u || !1;
      if (k.removeEventListener) k.removeEventListener(E, e, u);
      else if (k.detachEvent) k.detachEvent("on" + E, e);
      else return !1
    }
  
    function hb(k, E) {
      if ("createEvent" in document) {
        var e = document.createEvent("HTMLEvents");
        e.initEvent(E, !1, !0);
        k.dispatchEvent(e)
      } else k.fireEvent("on" +
        E)
    }
  
    function ib(k) {
      if (k._menuButton) k.exportEnabled ? (Q(k._menuButton, {
        backgroundColor: k.toolbar.itemBackgroundColor,
        color: k.toolbar.fontColor
      }), Sa(k._menuButton), k._menuButton.title = k._cultureInfo.menuText) : za(k._menuButton);
      else if (k.exportEnabled && u) {
        var E = !1;
        k._menuButton = document.createElement("button");
        Ca(k, k._menuButton, "menu");
        k._toolBar.appendChild(k._menuButton);
        A(k._menuButton, "touchstart", function(k) {
          E = !0
        }, k.allDOMEventHandlers);
        A(k._menuButton, "click", function() {
          "none" !== k._dropdownMenu.style.display ||
            k._dropDownCloseTime && 500 >= (new Date).getTime() - k._dropDownCloseTime.getTime() || (k._dropdownMenu.style.display = "block", k._menuButton.blur(), k._dropdownMenu.focus())
        }, k.allDOMEventHandlers, !0);
        A(k._menuButton, "mousemove", function() {
          E || (Q(k._menuButton, {
            backgroundColor: k.toolbar.itemBackgroundColorOnHover,
            color: k.toolbar.fontColorOnHover
          }), 0 >= navigator.userAgent.search("MSIE") && Q(k._menuButton.childNodes[0], {
            WebkitFilter: "invert(100%)",
            filter: "invert(100%)"
          }))
        }, k.allDOMEventHandlers, !0);
        A(k._menuButton,
          "mouseout",
          function() {
            E || (Q(k._menuButton, {
              backgroundColor: k.toolbar.itemBackgroundColor,
              color: k.toolbar.fontColor
            }), 0 >= navigator.userAgent.search("MSIE") && Q(k._menuButton.childNodes[0], {
              WebkitFilter: "invert(0%)",
              filter: "invert(0%)"
            }))
          }, k.allDOMEventHandlers, !0)
      }
      if (k.exportEnabled && k._dropdownMenu) {
        Q(k._dropdownMenu, {
          backgroundColor: k.toolbar.itemBackgroundColor,
          color: k.toolbar.fontColor
        });
        for (var e = k._dropdownMenu.childNodes, $ = [k._cultureInfo.printText, k._cultureInfo.saveJPGText, k._cultureInfo.savePNGText],
            F = 0; F < e.length; F++) Q(e[F], {
          backgroundColor: k.toolbar.itemBackgroundColor,
          color: k.toolbar.fontColor
        }), e[F].innerHTML = $[F]
      } else !k._dropdownMenu && (k.exportEnabled && u) && (E = !1, k._dropdownMenu = document.createElement("div"), k._dropdownMenu.setAttribute("tabindex", -1), e = -1 !== k.theme.indexOf("dark") ? "black" : "#888888", Q(k._dropdownMenu, {
          position: "absolute",
          zIndex: 1,
          userSelect: "none",
          MozUserSeelct: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          cursor: "pointer",
          right: "0px",
          top: "25px",
          minWidth: "120px",
          outline: 0,
          fontSize: "14px",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "5px 0px 5px 0px",
          textAlign: "left",
          lineHeight: "10px",
          backgroundColor: k.toolbar.itemBackgroundColor,
          boxShadow: "2px 2px 10px" + e
        }), k._dropdownMenu.style.display = "none", k._toolBar.appendChild(k._dropdownMenu), A(k._dropdownMenu, "blur", function() {
          za(k._dropdownMenu);
          k._dropDownCloseTime = new Date
        }, k.allDOMEventHandlers, !0), e = document.createElement("div"), Q(e, {
          padding: "12px 8px 12px 8px"
        }), e.innerHTML = k._cultureInfo.printText, e.style.backgroundColor =
        k.toolbar.itemBackgroundColor, e.style.color = k.toolbar.fontColor, k._dropdownMenu.appendChild(e), A(e, "touchstart", function(k) {
          E = !0
        }, k.allDOMEventHandlers), A(e, "mousemove", function() {
          E || (this.style.backgroundColor = k.toolbar.itemBackgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover)
        }, k.allDOMEventHandlers, !0), A(e, "mouseout", function() {
          E || (this.style.backgroundColor = k.toolbar.itemBackgroundColor, this.style.color = k.toolbar.fontColor)
        }, k.allDOMEventHandlers, !0), A(e, "click", function() {
          k.print();
          za(k._dropdownMenu)
        }, k.allDOMEventHandlers, !0), e = document.createElement("div"), Q(e, {
          padding: "12px 8px 12px 8px"
        }), e.innerHTML = k._cultureInfo.saveJPGText, e.style.backgroundColor = k.toolbar.itemBackgroundColor, e.style.color = k.toolbar.fontColor, k._dropdownMenu.appendChild(e), A(e, "touchstart", function(k) {
          E = !0
        }, k.allDOMEventHandlers), A(e, "mousemove", function() {
          E || (this.style.backgroundColor = k.toolbar.itemBackgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover)
        }, k.allDOMEventHandlers, !0), A(e,
          "mouseout",
          function() {
            E || (this.style.backgroundColor = k.toolbar.itemBackgroundColor, this.style.color = k.toolbar.fontColor)
          }, k.allDOMEventHandlers, !0), A(e, "click", function() {
          k.exportChart({
            format: "jpeg",
            fileName: k.exportFileName
          });
          za(k._dropdownMenu)
        }, k.allDOMEventHandlers, !0), e = document.createElement("div"), Q(e, {
          padding: "12px 8px 12px 8px"
        }), e.innerHTML = k._cultureInfo.savePNGText, e.style.backgroundColor = k.toolbar.itemBackgroundColor, e.style.color = k.toolbar.fontColor, k._dropdownMenu.appendChild(e), A(e,
          "touchstart",
          function(k) {
            E = !0
          }, k.allDOMEventHandlers), A(e, "mousemove", function() {
          E || (this.style.backgroundColor = k.toolbar.itemBackgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover)
        }, k.allDOMEventHandlers, !0), A(e, "mouseout", function() {
          E || (this.style.backgroundColor = k.toolbar.itemBackgroundColor, this.style.color = k.toolbar.fontColor)
        }, k.allDOMEventHandlers, !0), A(e, "click", function() {
          k.exportChart({
            format: "png",
            fileName: k.exportFileName
          });
          za(k._dropdownMenu)
        }, k.allDOMEventHandlers, !0))
    }
  
    function jb(k,
      e, u) {
      k *= la;
      e *= la;
      k = u.getImageData(k, e, 2, 2).data;
      e = !0;
      for (u = 0; 4 > u; u++)
        if (k[u] !== k[u + 4] | k[u] !== k[u + 8] | k[u] !== k[u + 12]) {
          e = !1;
          break
        } return e ? k[0] << 16 | k[1] << 8 | k[2] : 0
    }
  
    function sa(k, e, u) {
      return k in e ? e[k] : u[k]
    }
  
    function Ta(k, e, L) {
      if (u && kb) {
        var $ = k.getContext("2d");
        Ua = $.webkitBackingStorePixelRatio || $.mozBackingStorePixelRatio || $.msBackingStorePixelRatio || $.oBackingStorePixelRatio || $.backingStorePixelRatio || 1;
        la = Ya / Ua;
        k.width = e * la;
        k.height = L * la;
        Ya !== Ua && (k.style.width = e + "px", k.style.height = L + "px", $.scale(la,
          la))
      } else k.width = e, k.height = L
    }
  
    function tb(k) {
      if (!ub) {
        var e = !1,
          u = !1;
        "undefined" === typeof ja.Chart.creditHref ? (k.creditHref = xa("iuuqr;..b`ow`rkr/bnl."), k.creditText = xa("B`ow`rKR/bnl")) : (e = k.updateOption("creditText"), u = k.updateOption("creditHref"));
        if (k.creditHref && k.creditText) {
          k._creditLink || (k._creditLink = document.createElement("a"), k._creditLink.setAttribute("class", "canvasjs-chart-credit"), k._creditLink.setAttribute("title", "JavaScript Charts"), Q(k._creditLink, {
            outline: "none",
            margin: "0px",
            position: "absolute",
            right: "2px",
            top: k.height - 14 + "px",
            color: "dimgrey",
            textDecoration: "none",
            fontSize: "11px",
            fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"
          }), k._creditLink.setAttribute("tabIndex", -1), k._creditLink.setAttribute("target", "_blank"));
          if (0 === k.renderCount || e || u) k._creditLink.setAttribute("href", k.creditHref), k._creditLink.innerHTML = k.creditText;
          k._creditLink && k.creditHref && k.creditText ? (k._creditLink.parentElement || k._canvasJSContainer.appendChild(k._creditLink), k._creditLink.style.top =
            k.height - 14 + "px") : k._creditLink.parentElement && k._canvasJSContainer.removeChild(k._creditLink)
        }
      }
    }
  
    function ta(k, e) {
      Ma && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
      var L = document.createElement("canvas");
      L.setAttribute("class", "canvasjs-chart-canvas");
      Ta(L, k, e);
      u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(L);
      return L
    }
  
    function Q(k, e) {
      for (var u in e) k.style[u] = e[u]
    }
  
    function Ca(k, e, u) {
      e.getAttribute("state") || (e.style.backgroundColor = k.toolbar.itemBackgroundColor,
        e.style.color = k.toolbar.fontColor, e.style.border = "none", Q(e, {
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none"
        }));
      e.getAttribute("state") !== u && (e.setAttribute("state", u), e.setAttribute("type", "button"), Q(e, {
          padding: "5px 12px",
          cursor: "pointer",
          "float": "left",
          width: "40px",
          height: "25px",
          outline: "0px",
          verticalAlign: "baseline",
          lineHeight: "0"
        }), e.setAttribute("title", k._cultureInfo[u + "Text"]), e.innerHTML = "<img src='" + vb[u].image + "' alt='" + k._cultureInfo[u + "Text"] + "' />",
        Q(e.childNodes[0], {
          height: "95%",
          pointerEvents: "none"
        }))
    }
  
    function Sa() {
      for (var k = null, e = 0; e < arguments.length; e++) k = arguments[e], k.style && (k.style.display = "inline")
    }
  
    function za() {
      for (var k = null, e = 0; e < arguments.length; e++)(k = arguments[e]) && k.style && (k.style.display = "none")
    }
  
    function Za(k) {
      if (null === k || "object" !== typeof k) return k;
      if (k instanceof Date) return new Date(k.getTime());
      Array.isArray || (Array.isArray = function(k) {
        return "[object Array]" === Object.prototype.toString.call(k)
      });
      if (Array.isArray(k)) {
        for (var e = [], u = 0; u < k.length; u++) e.push(Za(k[u]));
        return e
      }
      e = new k.constructor;
      for (u in k) k.hasOwnProperty(u) && (e[u] = Za(k[u]));
      return e
    }
  
    function Va(k, e, u, $, F) {
      if (null === k || "undefined" === typeof k) return "undefined" === typeof u ? e : u;
      k = parseFloat(k.toString()) * (0 <= k.toString().indexOf("%") ? e / 100 : 1);
      "undefined" !== typeof $ && (k = Math.min($, k), "undefined" !== typeof F && (k = Math.max(F, k)));
      return !isNaN(k) && k <= e && 0 <= k ? k : "undefined" === typeof u ? e : u
    }
  
    function Z(k, E, u, $, F) {
      this._defaultsKey = k;
      this._themeOptionsKey = E;
      this._index =
        $;
      this.parent = F;
      this._eventListeners = [];
      k = {};
      this.theme && e(this.parent) && e(E) && e($) ? k = e(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[E]) && (null === $ ? k = this.parent.themeOptions[E] : 0 < this.parent.themeOptions[E].length && ($ = Math.min(this.parent.themeOptions[E].length - 1, $), k = this.parent.themeOptions[E][$]));
      this.themeOptions = k;
      this.options = u ? u : {
        _isPlaceholder: !0
      };
      this.setOptions(this.options,
        k)
    }
  
    function La(k, e, u, $, F) {
      "undefined" === typeof F && (F = 0);
      this._padding = F;
      this._x1 = k;
      this._y1 = e;
      this._x2 = u;
      this._y2 = $;
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }
  
    function oa(k, e) {
      oa.base.constructor.call(this, "TextBlock", null, e, null, null);
      this.ctx = k;
      this._isDirty = !0;
      this._wrappedText = null;
      this._initialize()
    }
  
    function Wa(k, e) {
      Wa.base.constructor.call(this, "Toolbar", "toolbar", e, null, k);
      this.chart = k;
      this.canvas = k.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName =
        "toolbar"
    }
  
    function Ia(k, E) {
      Ia.base.constructor.call(this, "Title", "title", E, null, k);
      this.chart = k;
      this.canvas = k.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "title";
      if (e(this.options.margin) && k.options.subtitles)
        for (var u = k.options.subtitles, $ = 0; $ < u.length; $++)
          if ((e(u[$].horizontalAlign) && "center" === this.horizontalAlign || u[$].horizontalAlign === this.horizontalAlign) && (e(u[$].verticalAlign) && "top" === this.verticalAlign || u[$].verticalAlign === this.verticalAlign) && !u[$].dockInsidePlotArea === !this.dockInsidePlotArea) {
            this.margin =
              0;
            break
          }
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.height = this.width = null;
      this.bounds = {
        x1: null,
        y1: null,
        x2: null,
        y2: null
      }
    }
  
    function Na(k, e, u) {
      Na.base.constructor.call(this, "Subtitle", "subtitles", e, u, k);
      this.chart = k;
      this.canvas = k.canvas;
      this.ctx = this.chart.ctx;
      this.optionsName = "subtitles";
      this.isOptionsInArray = !0;
      "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
      this.height = this.width = null;
      this.bounds = {
        x1: null,
        y1: null,
        x2: null,
        y2: null
      }
    }
  
    function $a() {
      this.pool = []
    }
  
    function Oa(k) {
      var e;
      k && Qa[k] && (e = Qa[k]);
      Oa.base.constructor.call(this, "CultureInfo", null, e, null, null)
    }
    var Ma = !1,
      ka = {},
      u = !!document.createElement("canvas").getContext,
      ja = {
        Chart: {
          width: 500,
          height: 400,
          zoomEnabled: !1,
          zoomType: "x",
          backgroundColor: "white",
          theme: "light1",
          animationEnabled: !1,
          animationDuration: 1200,
          dataPointWidth: null,
          dataPointMinWidth: null,
          dataPointMaxWidth: null,
          colorSet: "colorSet1",
          culture: "en",
          creditHref: "",
          creditText: "CanvasJS",
          interactivityEnabled: !0,
          exportEnabled: !1,
          exportFileName: "Chart",
          rangeChanging: null,
          rangeChanged: null,
          publicProperties: {
            title: "readWrite",
            subtitles: "readWrite",
            toolbar: "readWrite",
            toolTip: "readWrite",
            legend: "readWrite",
            axisX: "readWrite",
            axisY: "readWrite",
            axisX2: "readWrite",
            axisY2: "readWrite",
            data: "readWrite",
            options: "readWrite",
            bounds: "readOnly",
            container: "readOnly",
            selectedColorSet: "readOnly"
          }
        },
        Title: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 20,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: u ? "transparent" : null,
          margin: 5,
          wrap: !0,
          maxWidth: null,
          dockInsidePlotArea: !1,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Subtitle: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 14,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          margin: 2,
          wrap: !0,
          maxWidth: null,
          dockInsidePlotArea: !1,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white",
          publicProperties: {
            options: "readWrite",
            chart: "readOnly"
          }
        },
        Legend: {
          name: null,
          verticalAlign: "center",
          horizontalAlign: "right",
          fontSize: 14,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          cursor: null,
          itemmouseover: null,
          itemmouseout: null,
          itemmousemove: null,
          itemclick: null,
          dockInsidePlotArea: !1,
          reversed: !1,
          backgroundColor: u ? "transparent" : null,
          borderColor: u ? "transparent" : null,
          borderThickness: 0,
          cornerRadius: 0,
          maxWidth: null,
          maxHeight: null,
          markerMargin: null,
          itemMaxWidth: null,
          itemWidth: null,
          itemWrap: !0,
          itemTextFormatter: null,
          publicProperties: {
            options: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        ToolTip: {
          enabled: !0,
          shared: !1,
          animationEnabled: !0,
          content: null,
          contentFormatter: null,
          reversed: !1,
          backgroundColor: u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
          borderColor: null,
          borderThickness: 2,
          cornerRadius: 5,
          fontSize: 14,
          fontColor: "black",
          fontFamily: "Calibri, Arial, Georgia, serif;",
          fontWeight: "normal",
          fontStyle: "italic",
          updated: null,
          hidden: null,
          publicProperties: {
            options: "readWrite",
            chart: "readOnly"
          }
        },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: !1,
          logarithmic: !1,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: !0,
          titleMaxWidth: null,
          titleBackgroundColor: u ? "transparent" : null,
          titleBorderColor: u ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: !0,
          labelWrap: !0,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: u ? "transparent" : null,
          labelBorderColor: u ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: !1,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: u ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: {
            options: "readWrite",
            stripLines: "readWrite",
            scaleBreaks: "readWrite",
            crosshair: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: !0,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: u ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          showOnTop: !1,
          publicProperties: {
            options: "readWrite",
            axis: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        ScaleBreaks: {
          autoCalculate: !1,
          collapsibleThreshold: "25%",
          maxNumberOfAutoBreaks: 2,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: {
            options: "readWrite",
            customBreaks: "readWrite",
            axis: "readOnly",
            autoBreaks: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Break: {
          startValue: null,
          endValue: null,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: {
            options: "readWrite",
            scaleBreaks: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        Crosshair: {
          enabled: !1,
          snapToDataPoint: !1,
          color: "grey",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelWrap: !0,
          labelMaxWidth: null,
          labelBackgroundColor: u ? "grey" : null,
          labelBorderColor: u ? "grey" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
          labelFontSize: 12,
          labelFontColor: "#fff",
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          valueFormatString: null,
          updated: null,
          hidden: null,
          publicProperties: {
            options: "readWrite",
            axis: "readOnly",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: !1,
          highlightEnabled: !0,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelBackgroundColor: null,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: !0,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: !1,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          neckHeight: null,
          neckWidth: null,
          reversed: !1,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: null,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: u ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: u ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: !0,
          publicProperties: {
            options: "readWrite",
            axisX: "readWrite",
            axisY: "readWrite",
            chart: "readOnly"
          }
        },
        TextBlock: {
          x: 0,
          y: 0,
          width: null,
          height: null,
          maxWidth: null,
          maxHeight: null,
          padding: 0,
          angle: 0,
          text: "",
          horizontalAlign: "center",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          textBaseline: "top"
        },
        CultureInfo: {
          decimalSeparator: ".",
          digitGroupSeparator: ",",
          zoomText: "Zoom",
          panText: "Pan",
          resetText: "Reset",
          menuText: "More Options",
          saveJPGText: "Save as JPEG",
          savePNGText: "Save as PNG",
          printText: "Print",
          days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          months: "January February March April May June July August September October November December".split(" "),
          shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
      },
      Qa = {
        en: {}
      },
      s = u ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      Aa = u ? "Impact, Charcoal, sans-serif" : "Arial",
      ya = {
        colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
        colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
      },
      N, W, O, X, ua;
    W = "#333333";
    O = "#000000";
    N = "#666666";
    ua = X = "#000000";
    var ma = 20,
      G = 14,
      Ga = {
        colorSet: "colorSet1",
        backgroundColor: "#FFFFFF",
        title: {
          fontFamily: Aa,
          fontSize: 32,
          fontColor: W,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        },
        subtitles: [{
          fontFamily: Aa,
          fontSize: G,
          fontColor: W,
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        }],
        data: [{
          indexLabelFontFamily: s,
          indexLabelFontSize: G,
          indexLabelFontColor: W,
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
        }],
        axisX: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: O,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: N,
          tickThickness: 1,
          tickColor: N,
          gridThickness: 0,
          gridColor: N,
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: ua,
            color: X,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisX2: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: O,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: N,
          tickThickness: 1,
          tickColor: N,
          gridThickness: 0,
          gridColor: N,
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: ua,
            color: X,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: O,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: N,
          tickThickness: 1,
          tickColor: N,
          gridThickness: 1,
          gridColor: N,
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: ua,
            color: X,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY2: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: W,
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: O,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: N,
          tickThickness: 1,
          tickColor: N,
          gridThickness: 1,
          gridColor: N,
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FF7300",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FF7300",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: ua,
            color: X,
            thickness: 1,
            lineDashType: "dash"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        legend: {
          fontFamily: s,
          fontSize: 14,
          fontColor: W,
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        toolTip: {
          fontFamily: s,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1
        },
        toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white"
        }
      };
    N = "#2A2A2A";
    O = W = "#F5F5F5";
    N = "#FFFFFF";
    X = "#40BAF1";
    ua = "#F5F5F5";
    var ma = 20,
      G = 14,
      Ja = {
        colorSet: "colorSet2",
        title: {
          fontFamily: s,
          fontSize: 33,
          fontColor: "#3A3A3A",
          fontWeight: "bold",
          verticalAlign: "top",
          margin: 5
        },
        subtitles: [{
          fontFamily: s,
          fontSize: G,
          fontColor: "#3A3A3A",
          fontWeight: "normal",
          verticalAlign: "top",
          margin: 5
        }],
        data: [{
          indexLabelFontFamily: s,
          indexLabelFontSize: G,
          indexLabelFontColor: "#666666",
          indexLabelFontWeight: "normal",
          indexLabelLineThickness: 1
        }],
        axisX: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickThickness: 1,
          tickColor: "#BBBBBB",
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisX2: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        axisY2: [{
          titleFontFamily: s,
          titleFontSize: ma,
          titleFontColor: "#666666",
          titleFontWeight: "normal",
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#666666",
          labelFontWeight: "normal",
          lineThickness: 0,
          lineColor: "#BBBBBB",
          tickColor: "#BBBBBB",
          tickThickness: 1,
          gridThickness: 1,
          gridColor: "#BBBBBB",
          stripLines: [{
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#FFA500",
            labelFontWeight: "normal",
            labelBackgroundColor: null,
            color: "#FFA500",
            thickness: 1
          }],
          crosshair: {
            labelFontFamily: s,
            labelFontSize: G,
            labelFontColor: "#EEEEEE",
            labelFontWeight: "normal",
            labelBackgroundColor: "black",
            color: "black",
            thickness: 1,
            lineDashType: "dot"
          },
          scaleBreaks: {
            type: "zigzag",
            spacing: "2%",
            lineColor: "#BBBBBB",
            lineThickness: 1,
            lineDashType: "solid"
          }
        }],
        legend: {
          fontFamily: s,
          fontSize: 14,
          fontColor: "#3A3A3A",
          fontWeight: "bold",
          verticalAlign: "bottom",
          horizontalAlign: "center"
        },
        toolTip: {
          fontFamily: s,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1
        },
        toolbar: {
          itemBackgroundColor: "white",
          itemBackgroundColorOnHover: "#2196f3",
          buttonBorderColor: "#2196f3",
          buttonBorderThickness: 1,
          fontColor: "black",
          fontColorOnHover: "white"
        }
      };
    O = W = "#F5F5F5";
    N = "#FFFFFF";
    X = "#40BAF1";
    ua = "#F5F5F5";
    ma = 20;
    G = 14;
    Aa = {
      colorSet: "colorSet12",
      backgroundColor: "#2A2A2A",
      title: {
        fontFamily: Aa,
        fontSize: 32,
        fontColor: W,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5
      },
      subtitles: [{
        fontFamily: Aa,
        fontSize: G,
        fontColor: W,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5
      }],
      toolbar: {
        itemBackgroundColor: "#666666",
        itemBackgroundColorOnHover: "#FF7372",
        buttonBorderColor: "#FF7372",
        buttonBorderThickness: 1,
        fontColor: "#F5F5F5",
        fontColorOnHover: "#F5F5F5"
      },
      data: [{
        indexLabelFontFamily: s,
        indexLabelFontSize: G,
        indexLabelFontColor: O,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }],
      axisX: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 0,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      axisX2: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 0,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      axisY: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 1,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      axisY2: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 1,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      legend: {
        fontFamily: s,
        fontSize: 14,
        fontColor: W,
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      toolTip: {
        fontFamily: s,
        fontSize: 14,
        fontStyle: "normal",
        cornerRadius: 0,
        borderThickness: 1,
        fontColor: O,
        backgroundColor: "rgba(0, 0, 0, .7)"
      }
    };
    N = "#FFFFFF";
    O = W = "#FAFAFA";
    X = "#40BAF1";
    ua = "#F5F5F5";
    ma = 20;
    G = 14;
    X = {
      colorSet: "colorSet2",
      backgroundColor: "#32373A",
      title: {
        fontFamily: s,
        fontSize: 32,
        fontColor: W,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5
      },
      subtitles: [{
        fontFamily: s,
        fontSize: G,
        fontColor: W,
        fontWeight: "normal",
        verticalAlign: "top",
        margin: 5
      }],
      toolbar: {
        itemBackgroundColor: "#666666",
        itemBackgroundColorOnHover: "#FF7372",
        buttonBorderColor: "#FF7372",
        buttonBorderThickness: 1,
        fontColor: "#F5F5F5",
        fontColorOnHover: "#F5F5F5"
      },
      data: [{
        indexLabelFontFamily: s,
        indexLabelFontSize: G,
        indexLabelFontColor: O,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }],
      axisX: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 0,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      axisX2: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 0,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      axisY: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 1,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      axisY2: [{
        titleFontFamily: s,
        titleFontSize: ma,
        titleFontColor: O,
        titleFontWeight: "normal",
        labelFontFamily: s,
        labelFontSize: G,
        labelFontColor: O,
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: N,
        tickThickness: 1,
        tickColor: N,
        gridThickness: 1,
        gridColor: N,
        stripLines: [{
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }],
        crosshair: {
          labelFontFamily: s,
          labelFontSize: G,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: ua,
          color: X,
          thickness: 1,
          lineDashType: "dash"
        },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }],
      legend: {
        fontFamily: s,
        fontSize: 14,
        fontColor: W,
        fontWeight: "bold",
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      toolTip: {
        fontFamily: s,
        fontSize: 14,
        fontStyle: "normal",
        cornerRadius: 0,
        borderThickness: 1,
        fontColor: O,
        backgroundColor: "rgba(0, 0, 0, .7)"
      }
    };
    var ab = {
        light1: Ga,
        light2: Ja,
        dark1: Aa,
        dark2: X,
        theme1: Ga,
        theme2: Ja,
        theme3: Ga
      },
      aa = {
        numberDuration: 1,
        yearDuration: 314496E5,
        monthDuration: 2592E6,
        weekDuration: 6048E5,
        dayDuration: 864E5,
        hourDuration: 36E5,
        minuteDuration: 6E4,
        secondDuration: 1E3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
    (function() {
      ka.fSDec = function(k) {
        for (var e = "", u = 0; u < k.length; u++) e += String.fromCharCode(Math.ceil(k.length / 57 / 5) ^ k.charCodeAt(u));
        return e
      };
      delete ja[ka.fSDec("Bi`su")][ka.fSDec("bsdehuIsdg")];
      ka.pro = {
        sCH: ja[ka.fSDec("Bi`su")][ka.fSDec("bsdehuIsdg")]
      };
      ka.pos = ["cm", "cs", "um"];
      ka._fTWm = function(k) {
        if ("undefined" === typeof ka.pro.sCH && !lb) try {
          var e = (new Date).getMonth() % 3,
            u, $, F = k[ka.fSDec("buy")];
          F[ka.fSDec("udyuC`rdmhod")] = ka.fSDec("unq");
          F[ka.fSDec("gnou")] = 11 + ka.fSDec("qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg");
          F[ka.fSDec("ghmmRuxmd")] = ka.fSDec("fsdx");
          u = "cm" === ka.pos[e] || "um" === ka.pos[e] ? 0 : k.width - F[ka.fSDec("ld`rtsdUdyu")](ka.fSDec("B`ow`rKR!Ush`m")).width;
          $ = "um" === ka.pos[e] ? 0 : k.height - 11;
          F[ka.fSDec("ghmmUdyu")](ka.fSDec("B`ow`rKR!Ush`m"),
            u, $);
          "cs" === ka.pos[e] && (k[ka.fSDec("^bsdehuMhoj")].style.right = ka.fSDec("`tun"))
        } catch (M) {}
      }
    })();
    var sb = function() {
        var k = !1;
        try {
          var e = Object.defineProperty && Object.defineProperty({}, "passive", {
            get: function() {
              k = !0;
              return !1
            }
          });
          window.addEventListener && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e))
        } catch (u) {
          k = !1
        }
        return k
      }(),
      fb = {},
      Fa = null,
      mb = function(k) {
        var e = 0,
          u = 0;
        this.options.width ? e = this.width : this.width = e = 0 < this.container.clientWidth ? this.container.clientWidth :
          this.width;
        this.options.height ? u = this.height : this.height = u = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
        if (this.canvas.width !== e * la || this.canvas.height !== u * la) {
          for (var $ = 0; $ < k.length; $++) Ta(k[$], e, u);
          this.bounds = {
            x1: 0,
            y1: 0,
            x2: this.width,
            y2: this.height,
            width: this.width,
            height: this.height
          };
          return !0
        }
        return !1
      },
      nb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
      },
      Da = function(k) {
        k.width = 1;
        k.height = 1;
        k.getContext("2d") && k.getContext("2d").clearRect(0, 0, 1, 1)
      },
      ob = function(k, e, u) {
        e = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= e ? 12 : 11, Math.round(e * (k / 400)))
      },
      fa = function() {
        var k = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
          e = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          u = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          $ = "January February March April May June July August September October November December".split(" "),
          F = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          M = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
          z = /[^-+\dA-Z]/g;
        return function(s, A, P) {
          var G = P ? P.days : e,
            N = P ? P.months : $,
            S = P ? P.shortDays : u,
            O = P ? P.shortMonths : F;
          P = "";
          var d = !1;
          s = s && s.getTime ? s : s ? new Date(s) : new Date;
          if (isNaN(s)) throw SyntaxError("invalid date");
          "UTC:" === A.slice(0, 4) && (A = A.slice(4), d = !0);
          P = d ? "getUTC" : "get";
          var t = s[P + "Date"](),
            w = s[P + "Day"](),
            r = s[P + "Month"](),
            a = s[P + "FullYear"](),
            f = s[P + "Hours"](),
            c = s[P + "Minutes"](),
            b = s[P + "Seconds"](),
            g = s[P + "Milliseconds"](),
            h = d ? 0 : s.getTimezoneOffset();
          return P = A.replace(k, function(C) {
            switch (C) {
              case "D":
                return t;
              case "DD":
                return pa(t, 2);
              case "DDD":
                return S[w];
              case "DDDD":
                return G[w];
              case "M":
                return r + 1;
              case "MM":
                return pa(r + 1, 2);
              case "MMM":
                return O[r];
              case "MMMM":
                return N[r];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return pa(String(a).slice(-2), 2);
              case "YYY":
                return pa(String(a).slice(-3),
                  3);
              case "YYYY":
                return pa(a, 4);
              case "h":
                return f % 12 || 12;
              case "hh":
                return pa(f % 12 || 12, 2);
              case "H":
                return f;
              case "HH":
                return pa(f, 2);
              case "m":
                return c;
              case "mm":
                return pa(c, 2);
              case "s":
                return b;
              case "ss":
                return pa(b, 2);
              case "f":
                return pa(String(g), 3).slice(0, 1);
              case "ff":
                return pa(String(g), 3).slice(0, 2);
              case "fff":
                return pa(String(g), 3).slice(0, 3);
              case "t":
                return 12 > f ? "a" : "p";
              case "tt":
                return 12 > f ? "am" : "pm";
              case "T":
                return 12 > f ? "A" : "P";
              case "TT":
                return 12 > f ? "AM" : "PM";
              case "K":
                return d ? "UTC" : (String(s).match(M) || [""]).pop().replace(z, "");
              case "z":
                return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
              case "zz":
                return (0 < h ? "-" : "+") + pa(Math.floor(Math.abs(h) / 60), 2);
              case "zzz":
                return (0 < h ? "-" : "+") + pa(Math.floor(Math.abs(h) / 60), 2) + pa(Math.abs(h) % 60, 2);
              default:
                return C.slice(1, C.length - 1)
            }
          })
        }
      }(),
      ba = function(k, e, u) {
        if (null === k) return "";
        if (!isFinite(k)) return k;
        k = Number(k);
        var $ = 0 > k ? !0 : !1;
        $ && (k *= -1);
        var F = u ? u.decimalSeparator : ".",
          s = u ? u.digitGroupSeparator : ",",
          z = "";
        e = String(e);
        var z = 1,
          A = u = "",
          G = -1,
          P = [],
          N = [],
          S = 0,
          O = 0,
          V = 0,
          d = !1,
          t = 0,
          A = e.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        e = null;
        for (var w = 0; A && w < A.length; w++)
          if (e = A[w], "." === e && 0 > G) G = w;
          else {
            if ("%" === e) z *= 100;
            else if ("\u2030" === e) {
              z *= 1E3;
              continue
            } else if ("," === e[0] && "." === e[e.length - 1]) {
              z /= Math.pow(1E3, e.length - 1);
              G = w + e.length - 1;
              continue
            } else "E" !== e[0] && "e" !== e[0] || "0" !== e[e.length - 1] || (d = !0);
            0 > G ? (P.push(e), "#" === e || "0" === e ? S++ : "," === e && V++) : (N.push(e), "#" !== e && "0" !== e || O++)
          } d && (e = Math.floor(k), A = -Math.floor(Math.log(k) / Math.LN10 + 1), t = 0 === k ? 0 : 0 === e ? -(S +
          A) : String(e).length - S, z /= Math.pow(10, t));
        0 > G && (G = w);
        z = (k * z).toFixed(O);
        e = z.split(".");
        z = (e[0] + "").split("");
        k = (e[1] + "").split("");
        z && "0" === z[0] && z.shift();
        for (d = A = w = O = G = 0; 0 < P.length;)
          if (e = P.pop(), "#" === e || "0" === e)
            if (G++, G === S) {
              var r = z,
                z = [];
              if ("0" === e)
                for (e = S - O - (r ? r.length : 0); 0 < e;) r.unshift("0"), e--;
              for (; 0 < r.length;) u = r.pop() + u, d++, 0 === d % A && (w === V && 0 < r.length) && (u = s + u)
            } else 0 < z.length ? (u = z.pop() + u, O++, d++) : "0" === e && (u = "0" + u, O++, d++), 0 === d % A && (w === V && 0 < z.length) && (u = s + u);
        else "E" !== e[0] && "e" !== e[0] ||
          "0" !== e[e.length - 1] || !/[eE][+-]*[0]+/.test(e) ? "," === e ? (w++, A = d, d = 0, 0 < z.length && (u = s + u)) : u = 1 < e.length && ('"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]) ? e.slice(1, e.length - 1) + u : e + u : (e = 0 > t ? e.replace("+", "").replace("-", "") : e.replace("-", ""), u += e.replace(/[0]+/, function(a) {
            return pa(t, a.length)
          }));
        s = "";
        for (P = !1; 0 < N.length;) e = N.shift(), "#" === e || "0" === e ? 0 < k.length && 0 !== Number(k.join("")) ? (s += k.shift(), P = !0) : "0" === e && (s += "0", P = !0) : 1 < e.length && ('"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] &&
          "'" === e[e.length - 1]) ? s += e.slice(1, e.length - 1) : "E" !== e[0] && "e" !== e[0] || "0" !== e[e.length - 1] || !/[eE][+-]*[0]+/.test(e) ? s += e : (e = 0 > t ? e.replace("+", "").replace("-", "") : e.replace("-", ""), s += e.replace(/[0]+/, function(a) {
          return pa(t, a.length)
        }));
        u += (P ? F : "") + s;
        return $ ? "-" + u : u
      },
      Ba = function(e) {
        var u = 0,
          L = 0;
        e = e || window.event;
        e.offsetX || 0 === e.offsetX ? (u = e.offsetX, L = e.offsetY) : e.layerX || 0 == e.layerX ? (u = e.layerX, L = e.layerY) : (u = e.pageX - e.target.offsetLeft, L = e.pageY - e.target.offsetTop);
        return {
          x: u,
          y: L
        }
      },
      kb = !0,
      Ya = window.devicePixelRatio ||
      1,
      Ua = 1,
      la = kb ? Ya / Ua : 1,
      ea = function(e, u, L, s, F, A, z, G, N, P, S, O, V) {
        "undefined" === typeof V && (V = 1);
        z = z || 0;
        G = G || "black";
        var Q = 15 < s - u && 15 < F - L ? 8 : 0.35 * Math.min(s - u, F - L);
        e.beginPath();
        e.moveTo(u, L);
        e.save();
        e.fillStyle = A;
        e.globalAlpha = V;
        e.fillRect(u, L, s - u, F - L);
        e.globalAlpha = 1;
        0 < z && (V = 0 === z % 2 ? 0 : 0.5, e.beginPath(), e.lineWidth = z, e.strokeStyle = G, e.moveTo(u, L), e.rect(u - V, L - V, s - u + 2 * V, F - L + 2 * V), e.stroke());
        e.restore();
        !0 === N && (e.save(), e.beginPath(), e.moveTo(u, L), e.lineTo(u + Q, L + Q), e.lineTo(s - Q, L + Q), e.lineTo(s, L), e.closePath(),
          z = e.createLinearGradient((s + u) / 2, L + Q, (s + u) / 2, L), z.addColorStop(0, A), z.addColorStop(1, "rgba(255, 255, 255, .4)"), e.fillStyle = z, e.fill(), e.restore());
        !0 === P && (e.save(), e.beginPath(), e.moveTo(u, F), e.lineTo(u + Q, F - Q), e.lineTo(s - Q, F - Q), e.lineTo(s, F), e.closePath(), z = e.createLinearGradient((s + u) / 2, F - Q, (s + u) / 2, F), z.addColorStop(0, A), z.addColorStop(1, "rgba(255, 255, 255, .4)"), e.fillStyle = z, e.fill(), e.restore());
        !0 === S && (e.save(), e.beginPath(), e.moveTo(u, L), e.lineTo(u + Q, L + Q), e.lineTo(u + Q, F - Q), e.lineTo(u, F),
          e.closePath(), z = e.createLinearGradient(u + Q, (F + L) / 2, u, (F + L) / 2), z.addColorStop(0, A), z.addColorStop(1, "rgba(255, 255, 255, 0.1)"), e.fillStyle = z, e.fill(), e.restore());
        !0 === O && (e.save(), e.beginPath(), e.moveTo(s, L), e.lineTo(s - Q, L + Q), e.lineTo(s - Q, F - Q), e.lineTo(s, F), z = e.createLinearGradient(s - Q, (F + L) / 2, s, (F + L) / 2), z.addColorStop(0, A), z.addColorStop(1, "rgba(255, 255, 255, 0.1)"), e.fillStyle = z, z.addColorStop(0, A), z.addColorStop(1, "rgba(255, 255, 255, 0.1)"), e.fillStyle = z, e.fill(), e.closePath(), e.restore())
      },
      xa = function(e) {
        for (var u = "", L = 0; L < e.length; L++) u += String.fromCharCode(Math.ceil(e.length / 57 / 5) ^ e.charCodeAt(L));
        return u
      },
      lb = window && window[xa("mnb`uhno")] && window[xa("mnb`uhno")].href && window[xa("mnb`uhno")].href.indexOf && (-1 !== window[xa("mnb`uhno")].href.indexOf(xa("b`ow`rkr/bnl")) || -1 !== window[xa("mnb`uhno")].href.indexOf(xa("gdonqhy/bnl")) || -1 !== window[xa("mnb`uhno")].href.indexOf(xa("gheemd"))),
      ub = lb && -1 === window[xa("mnb`uhno")].href.indexOf(xa("gheemd")),
      vb = {
        reset: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
        },
        pan: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
        },
        zoom: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
        },
        menu: {
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
        }
      };
    Z.prototype.setOptions = function(e, u) {
      if (ja[this._defaultsKey]) {
        var L = ja[this._defaultsKey],
          s;
        for (s in L) "publicProperties" !== s && L.hasOwnProperty(s) && (this[s] = e && s in e ? e[s] : u && s in u ? u[s] : L[s])
      } else Ma && window.console && console.log("defaults not set")
    };
    Z.prototype.get = function(e) {
      var u = ja[this._defaultsKey];
      if ("options" === e) return this.options && this.options._isPlaceholder ? null : this.options;
      if (u.hasOwnProperty(e) || u.publicProperties && u.publicProperties.hasOwnProperty(e)) return this[e];
      window.console &&
        window.console.log('Property "' + e + "\" doesn't exist. Please check for typo.")
    };
    Z.prototype.set = function(e, u, L) {
      L = "undefined" === typeof L ? !0 : L;
      var s = ja[this._defaultsKey];
      if ("options" === e) this.createUserOptions(u);
      else if (s.hasOwnProperty(e) || s.publicProperties && s.publicProperties.hasOwnProperty(e) && "readWrite" === s.publicProperties[e]) this.options._isPlaceholder && this.createUserOptions(), this.options[e] = u;
      else {
        window.console && (s.publicProperties && s.publicProperties.hasOwnProperty(e) && "readOnly" === s.publicProperties[e] ?
          window.console.log('Property "' + e + '" is read-only.') : window.console.log('Property "' + e + "\" doesn't exist. Please check for typo."));
        return
      }
      L && (this.stockChart || this.chart || this).render()
    };
    Z.prototype.addTo = function(e, u, s, A) {
      A = "undefined" === typeof A ? !0 : A;
      var F = ja[this._defaultsKey];
      F.hasOwnProperty(e) || F.publicProperties && F.publicProperties.hasOwnProperty(e) && "readWrite" === F.publicProperties[e] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[e] && (this.options[e] = []), e = this.options[e], s = "undefined" === typeof s || null === s ? e.length : s, e.splice(s, 0, u), A && (this.stockChart || this.chart || this).render()) : window.console && (F.publicProperties && F.publicProperties.hasOwnProperty(e) && "readOnly" === F.publicProperties[e] ? window.console.log('Property "' + e + '" is read-only.') : window.console.log('Property "' + e + "\" doesn't exist. Please check for typo."))
    };
    Z.prototype.createUserOptions = function(e) {
      if ("undefined" !== typeof e || this.options._isPlaceholder)
        if (this.parent.options._isPlaceholder &&
          this.parent.createUserOptions(), this.isOptionsInArray) {
          this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
          var u = this.parent.options[this.optionsName],
            s = u.length;
          this.options._isPlaceholder || (Ea(u), s = u.indexOf(this.options));
          this.options = "undefined" === typeof e ? {} : e;
          u[s] = this.options
        } else this.options = "undefined" === typeof e ? {} : e, e = this.parent.options, this.optionsName ? u = this.optionsName : (u = this._defaultsKey) && 0 !== u.length ? (s = u.charAt(0).toLowerCase(), 1 < u.length && (s = s.concat(u.slice(1))),
          u = s) : u = void 0, e[u] = this.options
    };
    Z.prototype.remove = function(e) {
      e = "undefined" === typeof e ? !0 : e;
      if (this.isOptionsInArray) {
        var u = this.parent.options[this.optionsName];
        Ea(u);
        var s = u.indexOf(this.options);
        0 <= s && u.splice(s, 1)
      } else delete this.parent.options[this.optionsName];
      e && (this.stockChart || this.chart || this).render()
    };
    Z.prototype.updateOption = function(k) {
      !ja[this._defaultsKey] && (Ma && window.console) && console.log("defaults not set");
      var u = ja[this._defaultsKey],
        s = {},
        A = this[k],
        F = this._themeOptionsKey,
        M = this._index;
      this.theme && e(this.parent) && e(F) && e(M) ? s = e(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[F]) && (null === M ? s = this.parent.themeOptions[F] : 0 < this.parent.themeOptions[F].length && (s = Math.min(this.parent.themeOptions[F].length - 1, M), s = this.parent.themeOptions[F][s]));
      this.themeOptions = s;
      k in u && (A = k in this.options ? this.options[k] : s && k in s ? s[k] : u[k]);
      if (A === this[k]) return !1;
      this[k] =
        A;
      return !0
    };
    Z.prototype.trackChanges = function(e) {
      if (!this.sessionVariables) throw "Session Variable Store not set";
      this.sessionVariables[e] = this.options[e]
    };
    Z.prototype.isBeingTracked = function(e) {
      this.options._oldOptions || (this.options._oldOptions = {});
      return this.options._oldOptions[e] ? !0 : !1
    };
    Z.prototype.hasOptionChanged = function(e) {
      if (!this.sessionVariables) throw "Session Variable Store not set";
      return this.sessionVariables[e] !== this.options[e]
    };
    Z.prototype.addEventListener = function(e, u, s) {
      e && u && (this._eventListeners[e] =
        this._eventListeners[e] || [], this._eventListeners[e].push({
          context: s || this,
          eventHandler: u
        }))
    };
    Z.prototype.removeEventListener = function(e, u) {
      if (e && u && this._eventListeners[e])
        for (var s = this._eventListeners[e], A = 0; A < s.length; A++)
          if (s[A].eventHandler === u) {
            s[A].splice(A, 1);
            break
          }
    };
    Z.prototype.removeAllEventListeners = function() {
      this._eventListeners = []
    };
    Z.prototype.dispatchEvent = function(e, u, s) {
      if (e && this._eventListeners[e]) {
        u = u || {};
        for (var A = this._eventListeners[e], F = 0; F < A.length; F++) A[F].eventHandler.call(A[F].context,
          u)
      }
      "function" === typeof this[e] && this[e].call(s || this.chart, u)
    };
    La.prototype.registerSpace = function(e, u) {
      "top" === e ? this._topOccupied += u.height : "bottom" === e ? this._bottomOccupied += u.height : "left" === e ? this._leftOccupied += u.width : "right" === e && (this._rightOccupied += u.width)
    };
    La.prototype.unRegisterSpace = function(e, u) {
      "top" === e ? this._topOccupied -= u.height : "bottom" === e ? this._bottomOccupied -= u.height : "left" === e ? this._leftOccupied -= u.width : "right" === e && (this._rightOccupied -= u.width)
    };
    La.prototype.getFreeSpace =
      function() {
        return {
          x1: this._x1 + this._leftOccupied,
          y1: this._y1 + this._topOccupied,
          x2: this._x2 - this._rightOccupied,
          y2: this._y2 - this._bottomOccupied,
          width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
          height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
      };
    La.prototype.reset = function() {
      this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    ia(oa, Z);
    oa.prototype._initialize = function() {
      e(this.padding) || "object" !== typeof this.padding ? this.topPadding =
        this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = e(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = e(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = e(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = e(this.padding.left) ? 0 : Number(this.padding.left) | 0)
    };
    oa.prototype.render = function(e) {
      if (0 !== this.fontSize) {
        e && this.ctx.save();
        var u = this.ctx.font;
        this.ctx.textBaseline = this.textBaseline;
        var s = 0;
        this._isDirty &&
          this.measureText(this.ctx);
        this.ctx.translate(this.x, this.y + s);
        "middle" === this.textBaseline && (s = -this._lineHeight / 2);
        this.ctx.font = this._getFontString();
        this.ctx.rotate(Math.PI / 180 * this.angle);
        var A = 0,
          F = this.topPadding,
          M = null;
        this.ctx.roundRect || Ha(this.ctx);
        (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, s, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
        this.ctx.fillStyle = this.fontColor;
        for (s = 0; s < this._wrappedText.lines.length; s++) {
          M =
            this._wrappedText.lines[s];
          if ("right" === this.horizontalAlign || "right" === this.textAlign) A = this.width - M.width - this.rightPadding;
          else if ("left" === this.horizontalAlign || "left" === this.textAlign) A = this.leftPadding;
          else if ("center" === this.horizontalAlign || "center" === this.textAlign) A = (this.width - (this.leftPadding + this.rightPadding)) / 2 - M.width / 2 + this.leftPadding;
          this.ctx.fillText(M.text, A, F);
          F += M.height
        }
        this.ctx.font = u;
        e && this.ctx.restore()
      }
    };
    oa.prototype.setText = function(e) {
      this.text = e;
      this._isDirty = !0;
      this._wrappedText =
        null
    };
    oa.prototype.measureText = function() {
      this._lineHeight = eb(this.fontFamily, this.fontSize, this.fontWeight);
      if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
      this._wrapText(this.ctx);
      this._isDirty = !1;
      return {
        width: this.width,
        height: this.height
      }
    };
    oa.prototype._getLineWithWidth = function(e, u, s) {
      e = String(e);
      if (!e) return {
        text: "",
        width: 0
      };
      var A = s = 0,
        F = e.length - 1,
        M = Infinity;
      for (this.ctx.font = this._getFontString(); A <= F;) {
        var M = Math.floor((A + F) / 2),
          z = e.substr(0, M + 1);
        s = this.ctx.measureText(z).width;
        if (s < u) A = M + 1;
        else if (s > u) F = M - 1;
        else break
      }
      s > u && 1 < z.length && (z = z.substr(0, z.length - 1), s = this.ctx.measureText(z).width);
      u = !0;
      if (z.length === e.length || " " === e[z.length]) u = !1;
      u && (e = z.split(" "), 1 < e.length && e.pop(), z = e.join(" "), s = this.ctx.measureText(z).width);
      return {
        text: z,
        width: s
      }
    };
    oa.prototype._wrapText = function() {
      var e = new String(Pa(String(this.text))),
        u = [],
        s = this.ctx.font,
        A = 0,
        F = 0;
      this.ctx.font = this._getFontString();
      if (0 === this.frontSize) F = A = 0;
      else
        for (; 0 < e.length;) {
          var M = this.maxHeight - (this.topPadding +
              this.bottomPadding),
            z = this._getLineWithWidth(e, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
          z.height = this._lineHeight;
          u.push(z);
          var G = F,
            F = Math.max(F, z.width),
            A = A + z.height,
            e = Pa(e.slice(z.text.length, e.length));
          M && A > M && (z = u.pop(), A -= z.height, F = G)
        }
      this._wrappedText = {
        lines: u,
        width: F,
        height: A
      };
      this.width = F + (this.leftPadding + this.rightPadding);
      this.height = A + (this.topPadding + this.bottomPadding);
      this.ctx.font = s
    };
    oa.prototype._getFontString = function() {
      var e;
      e = "" + (this.fontStyle ? this.fontStyle + " " :
        "");
      e += this.fontWeight ? this.fontWeight + " " : "";
      e += this.fontSize ? this.fontSize + "px " : "";
      var s = this.fontFamily ? this.fontFamily + "" : "";
      !u && s && (s = s.split(",")[0], "'" !== s[0] && '"' !== s[0] && (s = "'" + s + "'"));
      return e += s
    };
    ia(Wa, Z);
    ia(Ia, Z);
    Ia.prototype.setLayout = function() {
      if (this.text) {
        var u = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
          s = u.layoutManager.getFreeSpace(),
          A = s.x1,
          G = s.y1,
          F = 0,
          M = 0,
          z = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
          N, Q;
        "top" === this.verticalAlign ||
          "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = s.width - 4 - z * ("center" === this.horizontalAlign ? 2 : 1)), M = 0.5 * s.height - this.margin - 2, F = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = s.height - 4), M = 0.5 * s.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = s.width - 4), M = 0.5 * s.height - 4));
        var P;
        e(this.padding) || "number" !== typeof this.padding ? e(this.padding) || "object" !==
          typeof this.padding || (P = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, P += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : P = 2 * this.padding;
        this.wrap || (M = Math.min(M, 1.5 * this.fontSize + P));
        M = new oa(this.ctx, {
          fontSize: this.fontSize,
          fontFamily: this.fontFamily,
          fontColor: this.fontColor,
          fontStyle: this.fontStyle,
          fontWeight: this.fontWeight,
          horizontalAlign: this.horizontalAlign,
          verticalAlign: this.verticalAlign,
          borderColor: this.borderColor,
          borderThickness: this.borderThickness,
          backgroundColor: this.backgroundColor,
          maxWidth: this.maxWidth,
          maxHeight: M,
          cornerRadius: this.cornerRadius,
          text: this.text,
          padding: this.padding,
          textBaseline: "top"
        });
        P = M.measureText();
        "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (G = s.y1 + 2, Q = "top") : "bottom" === this.verticalAlign && (G = s.y2 - 2 - P.height, Q = "bottom"), "left" === this.horizontalAlign ? A = s.x1 + 2 : "center" === this.horizontalAlign ? A = s.x1 + s.width / 2 - P.width / 2 : "right" === this.horizontalAlign && (A = s.x2 - 2 - P.width - z), N = this.horizontalAlign,
          this.width = P.width, this.height = P.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (A = s.x1 + 2, G = s.y2 - 2 - (this.maxWidth / 2 - P.width / 2), F = -90, Q = "left", this.width = P.height, this.height = P.width) : "right" === this.horizontalAlign ? (A = s.x2 - 2, G = s.y1 + 2 + (this.maxWidth / 2 - P.width / 2), F = 90, Q = "right", this.width = P.height, this.height = P.width) : "center" === this.horizontalAlign && (G = u.y1 + (u.height / 2 - P.height / 2), A = u.x1 + (u.width / 2 - P.width / 2), Q = "center", this.width = P.width, this.height = P.height), N = "center");
        M.x =
          A;
        M.y = G;
        M.angle = F;
        M.horizontalAlign = N;
        this._textBlock = M;
        u.layoutManager.registerSpace(Q, {
          width: this.width + ("left" === Q || "right" === Q ? this.margin + 2 : 0),
          height: this.height + ("top" === Q || "bottom" === Q ? this.margin + 2 : 0)
        });
        this.bounds = {
          x1: A,
          y1: G,
          x2: A + this.width,
          y2: G + this.height
        };
        this.ctx.textBaseline = "top"
      }
    };
    Ia.prototype.render = function() {
      this._textBlock && this._textBlock.render(!0)
    };
    ia(Na, Z);
    Na.prototype.setLayout = Ia.prototype.setLayout;
    Na.prototype.render = Ia.prototype.render;
    $a.prototype.get = function(e, u) {
      var s =
        null;
      0 < this.pool.length ? (s = this.pool.pop(), Ta(s, e, u)) : s = ta(e, u);
      return s
    };
    $a.prototype.release = function(e) {
      this.pool.push(e)
    };
    ia(Oa, Z);
    var Ra = {
      addTheme: function(e, u) {
        ab[e] = u
      },
      addColorSet: function(e, u) {
        ya[e] = u
      },
      addCultureInfo: function(e, u) {
        Qa[e] = u
      },
      formatNumber: function(e, u, s) {
        s = s || "en";
        if (Qa[s]) return ba(e, u || "#,##0.##", new Oa(s));
        throw "Unknown Culture Name";
      },
      formatDate: function(e, u, s) {
        s = s || "en";
        if (Qa[s]) return fa(e, u || "DD MMM YYYY", new Oa(s));
        throw "Unknown Culture Name";
      }
    };
    "undefined" !== typeof module &&
      "undefined" !== typeof module.exports ? module.exports = Ra : "function" === typeof define && define.amd ? define([], function() {
        return Ra
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ra);
    var Ka = Ra.Chart = function() {
      function k(a, f) {
        return a.x - f.x
      }
  
      function s(a, f, c) {
        f = f || {};
        e(c) ? (this.predefinedThemes = ab, this.optionsName =
          this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
        this.theme = e(f.theme) || e(this.predefinedThemes[f.theme]) ? "light1" : f.theme;
        s.base.constructor.call(this, "Chart", this.optionsName, f, this.index, this.parent);
        var b = this;
        this._containerId = a;
        this._objectsInitialized = !1;
        this.overlaidCanvasCtx = this.ctx = null;
        this._indexLabels = [];
        this._panTimerId =
          0;
        this._lastTouchEventType = "";
        this._lastTouchData = null;
        this.isAnimating = !1;
        this.renderCount = 0;
        this.disableToolTip = this.animatedRender = !1;
        this.canvasPool = new $a;
        this.allDOMEventHandlers = [];
        this.panEnabled = !1;
        this._defaultCursor = "default";
        this.plotArea = {
          canvas: null,
          ctx: null,
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
          width: 0,
          height: 0
        };
        this._dataInRenderedOrder = [];
        (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", f = a = 0, a = this.options.width ?
          this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, f = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = f, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position =
          "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", u || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ta(a, f), this._preRenderCanvas = ta(a, f), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext &&
          (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ha(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ha(this._preRenderCtx), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(a, f), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")),
            this.overlaidCanvas = ta(a, f), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline =
              "top", Ha(this.overlaidCanvasCtx)), this._eventManager = new ja(this), this.windowResizeHandler = A(window, "resize", function() {
              b._updateSize() && b.render()
            }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), Q(this._toolBar, {
              position: "absolute",
              right: "1px",
              top: "1px"
            }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
              x1: 0,
              y1: 0,
              x2: this.width,
              y2: this.height
            }, A(this.overlaidCanvas, "click", function(a) {
                b._mouseEventHandler(a)
              },
              this.allDOMEventHandlers), A(this.overlaidCanvas, "mousemove", function(a) {
              b._mouseEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, "mouseup", function(a) {
              b._mouseEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, "mousedown", function(a) {
              b._mouseEventHandler(a);
              za(b._dropdownMenu)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, "mouseout", function(a) {
              b._mouseEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" :
              "touchstart",
              function(a) {
                b._touchEventHandler(a)
              }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
              b._touchEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
              b._touchEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
              b._touchEventHandler(a)
            }, this.allDOMEventHandlers),
            this.toolTip = new ra(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
              axisX: [],
              axisX2: [],
              axisY: [],
              axisY2: []
            })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
      }
  
      function G(a, f) {
        for (var c = [], b, g = 0; g < a.length; g++)
          if (0 == g) c.push(a[0]);
          else {
            var h, C, e;
            e = g - 1;
            h = 0 === e ? 0 : e - 1;
            C = e === a.length - 1 ? e : e + 1;
            b = Math.abs((a[C].x - a[h].x) / (0 === a[C].x - a[e].x ? 0.01 : a[C].x - a[e].x)) * (f - 1) /
              2 + 1;
            var d = (a[C].x - a[h].x) / b;
            b = (a[C].y - a[h].y) / b;
            c[c.length] = a[e].x > a[h].x && 0 < d || a[e].x < a[h].x && 0 > d ? {
              x: a[e].x + d / 3,
              y: a[e].y + b / 3
            } : {
              x: a[e].x,
              y: a[e].y + b / 9
            };
            e = g;
            h = 0 === e ? 0 : e - 1;
            C = e === a.length - 1 ? e : e + 1;
            b = Math.abs((a[C].x - a[h].x) / (0 === a[e].x - a[h].x ? 0.01 : a[e].x - a[h].x)) * (f - 1) / 2 + 1;
            d = (a[C].x - a[h].x) / b;
            b = (a[C].y - a[h].y) / b;
            c[c.length] = a[e].x > a[h].x && 0 < d || a[e].x < a[h].x && 0 > d ? {
              x: a[e].x - d / 3,
              y: a[e].y - b / 3
            } : {
              x: a[e].x,
              y: a[e].y - b / 9
            };
            c[c.length] = a[g]
          } return c
      }
  
      function N(a, f, c, b, g, h, C, e, d, m) {
        var n = 0;
        m ? (C.color = h, e.color = h) :
          m = 1;
        n = d ? Math.abs(g - c) : Math.abs(b - f);
        n = 0 < C.trimLength ? Math.abs(n * C.trimLength / 100) : Math.abs(n - C.length);
        d ? (c += n / 2, g -= n / 2) : (f += n / 2, b -= n / 2);
        var n = 1 === Math.round(C.thickness) % 2 ? 0.5 : 0,
          p = 1 === Math.round(e.thickness) % 2 ? 0.5 : 0;
        a.save();
        a.globalAlpha = m;
        a.strokeStyle = e.color || h;
        a.lineWidth = e.thickness || 2;
        a.setLineDash && a.setLineDash(S(e.dashType, e.thickness));
        a.beginPath();
        d && 0 < e.thickness ? (a.moveTo(b - C.thickness / 2, Math.round((c + g) / 2) - p), a.lineTo(f + C.thickness / 2, Math.round((c + g) / 2) - p)) : 0 < e.thickness && (a.moveTo(Math.round((f +
          b) / 2) - p, c + C.thickness / 2), a.lineTo(Math.round((f + b) / 2) - p, g - C.thickness / 2));
        a.stroke();
        a.strokeStyle = C.color || h;
        a.lineWidth = C.thickness || 2;
        a.setLineDash && a.setLineDash(S(C.dashType, C.thickness));
        a.beginPath();
        d && 0 < C.thickness ? (a.moveTo(b - n, c), a.lineTo(b - n, g), a.moveTo(f + n, c), a.lineTo(f + n, g)) : 0 < C.thickness && (a.moveTo(f, c + n), a.lineTo(b, c + n), a.moveTo(f, g - n), a.lineTo(b, g - n));
        a.stroke();
        a.restore()
      }
  
      function F(a, f) {
        F.base.constructor.call(this, "Legend", "legend", f, null, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.ghostCtx = this.chart._eventManager.ghostCtx;
        this.items = [];
        this.optionsName = "legend";
        this.height = this.width = 0;
        this.orientation = null;
        this.dataSeries = [];
        this.bounds = {
          x1: null,
          y1: null,
          x2: null,
          y2: null
        };
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.lineHeight = eb(this.fontFamily, this.fontSize, this.fontWeight);
        this.horizontalSpacing = this.fontSize
      }
  
      function M(a, f, c, b) {
        M.base.constructor.call(this, "DataSeries", "data", f, c,
          a);
        this.chart = a;
        this.canvas = a.canvas;
        this._ctx = a.canvas.ctx;
        this.index = c;
        this.noDataPointsInPlotArea = 0;
        this.id = b;
        this.chart._eventManager.objectMap[b] = {
          id: b,
          objectType: "dataSeries",
          dataSeriesIndex: c
        };
        a = f.dataPoints ? f.dataPoints.length : 0;
        this.dataPointEOs = [];
        for (f = 0; f < a; f++) this.dataPointEOs[f] = {};
        this.dataPointIds = [];
        this.plotUnit = [];
        this.axisY = this.axisX = null;
        this.optionsName = "data";
        this.isOptionsInArray = !0;
        null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity =
          1);
        this.axisPlacement = this.getDefaultAxisPlacement();
        "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
      }
  
      function z(a, f, c, b, g, h) {
        z.base.constructor.call(this, "Axis", f, c, b, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = a.ctx;
        this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
        this.labels = [];
        this.dataSeries = [];
        this._stripLineLabels = this._ticks = this._labels = null;
        this.dataInfo = {
          min: Infinity,
          max: -Infinity,
          viewPortMin: Infinity,
          viewPortMax: -Infinity,
          minDiff: Infinity
        };
        this.isOptionsInArray = !0;
        "axisX" === g ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", e(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", e(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" ===
          h || "bottom" === h ? (this.optionsName = "axisY", e(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", e(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
        "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
        "undefined" === typeof this.options.labelFontSize &&
          (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
        this.type = g;
        "axisX" !== g || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
        this._position = h;
        this.lineCoordinates = {
          x1: null,
          y1: null,
          x2: null,
          y2: null,
          width: null
        };
        this.labelAngle = (this.labelAngle % 360 + 360) % 360;
        90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
        this.options.scaleBreaks && (this.scaleBreaks = new O(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId,
          this));
        this.stripLines = [];
        if (this.options.stripLines && 0 < this.options.stripLines.length)
          for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new P(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
        this.options.crosshair && (this.crosshair = new X(this.chart, this.options.crosshair, this));
        this._titleTextBlock = null;
        this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum =
          null);
        this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
        this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
        this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null ===
          this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
        null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
        null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
        this.trackChanges("viewportMinimum");
        this.trackChanges("viewportMaximum")
      }
  
      function O(a, f, c, b) {
        O.base.constructor.call(this,
          "ScaleBreaks", "scaleBreaks", f, null, b);
        this.id = c;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.axis = b;
        this.optionsName = "scaleBreaks";
        this.isOptionsInArray = !1;
        this._appliedBreaks = [];
        this.customBreaks = [];
        this.autoBreaks = [];
        "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
        this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
        if (this.options.customBreaks &&
          0 < this.options.customBreaks.length) {
          for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new W(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
          this._appliedBreaks.sort(function(a, b) {
            return a.startValue - b.startValue
          });
          for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
        }
      }
  
      function W(a, f, c, b, g, h) {
        W.base.constructor.call(this, "Break", f, c, b, h);
        this.id = g;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.scaleBreaks = h;
        this.optionsName =
          f;
        this.isOptionsInArray = !0;
        this.type = c.type ? this.type : h.type;
        this.fillOpacity = e(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
        this.lineThickness = e(c.lineThickness) ? h.lineThickness : this.lineThickness;
        this.color = c.color ? this.color : h.color;
        this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
        this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
        !e(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
        !e(this.endValue) && this.endValue.getTime && (this.endValue =
          this.endValue.getTime());
        "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
        this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
        "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
        this.size = h.parent.logarithmic ?
          1 : 0
      }
  
      function P(a, f, c, b, g) {
        P.base.constructor.call(this, "StripLine", "stripLines", f, c, g);
        this.id = b;
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.label = this.label;
        this.axis = g;
        this.optionsName = "stripLines";
        this.isOptionsInArray = !0;
        this._thicknessType = "pixel";
        null !== this.startValue && null !== this.endValue && (this.value = g.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() :
          this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
      }
  
      function X(a, f, c) {
        X.base.constructor.call(this, "Crosshair", "crosshair", f, null, c);
        this.chart = a;
        this.ctx = this.chart.ctx;
        this.axis = c;
        this.optionsName = "crosshair";
        this._thicknessType = "pixel"
      }
  
      function ra(a, f) {
        ra.base.constructor.call(this, "ToolTip", "toolTip", f, null, a);
        this.chart = a;
        this.canvas = a.canvas;
        this.ctx = this.chart.ctx;
        this.currentDataPointIndex = this.currentSeriesIndex = -1;
        this._prevY = this._prevX =
          NaN;
        this.containerTransitionDuration = 0.1;
        this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
        this.optionsName = "toolTip";
        this._initialize()
      }
  
      function ja(a) {
        this.chart = a;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.ghostCanvas = ta(this.chart.width, this.chart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
      }
  
      function ma(a) {
        this.chart = a;
        this.ctx = this.chart.plotArea.ctx;
        this.animations = [];
        this.animationRequestId = null
      }
      ia(s, Z);
      s.prototype.destroy = function() {
        var a = this.allDOMEventHandlers;
        this._animator && this._animator.cancelAllAnimations();
        this._panTimerId && clearTimeout(this._panTimerId);
        for (var f = 0; f < a.length; f++) gb(a[f][0], a[f][1], a[f][2], a[f][3]);
        this.allDOMEventHandlers = [];
        for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
        for (; this.container &&
          this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
        for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes();) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
        this.container = this._canvasJSContainer = null;
        this.toolTip.container = null;
        this.canvas && Da(this.canvas);
        this.overlaidCanvas && Da(this.overlaidCanvas);
        this._preRenderCanvas && Da(this._preRenderCanvas);
        this._breaksCanvas && Da(this._breaksCanvas);
        this._eventManager && this._eventManager.ghostCanvas && Da(this._eventManager.ghostCanvas);
        this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null
      };
      s.prototype._updateOptions = function() {
        var a = this;
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("dataPointWidth");
        this.updateOption("dataPointMinWidth");
        this.updateOption("dataPointMaxWidth");
        this.updateOption("interactivityEnabled");
        this.updateOption("theme");
        this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("culture");
        this._cultureInfo = new Oa(this.options.culture);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && u;
        this.updateOption("animationDuration");
        this.updateOption("rangeChanging");
        this.updateOption("rangeChanged");
        this.updateOption("exportEnabled");
        this.updateOption("exportFileName");
        this.updateOption("zoomType");
        this.toolbar = new Wa(this, this.options.toolbar);
        if (this.options.zoomEnabled || this.panEnabled) {
          if (this._zoomButton) Q(this._zoomButton, {
            borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
            backgroundColor: a.toolbar.itemBackgroundColor,
            color: a.toolbar.fontColor
          }), this._zoomButton.title = this._cultureInfo.zoomText;
          else {
            var f = !1;
            za(this._zoomButton = document.createElement("button"));
            Ca(this, this._zoomButton, "pan");
            this._zoomButton.title = this._cultureInfo.panText;
            this._toolBar.appendChild(this._zoomButton);
            this._zoomButton.style.borderRight =
              this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
            A(this._zoomButton, "touchstart", function(a) {
              f = !0
            }, this.allDOMEventHandlers);
            A(this._zoomButton, "click", function() {
              a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, Ca(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, Ca(a, a._zoomButton, "pan"));
              a.render()
            }, this.allDOMEventHandlers);
            A(this._zoomButton, "mousemove", function() {
              f ? f = !1 : (Q(a._zoomButton, {
                backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                color: a.toolbar.fontColorOnHover,
                transition: "0.4s",
                WebkitTransition: "0.4s"
              }), 0 >= navigator.userAgent.search("MSIE") && Q(a._zoomButton.childNodes[0], {
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)"
              }))
            }, this.allDOMEventHandlers);
            A(this._zoomButton, "mouseout", function() {
              f || (Q(a._zoomButton, {
                backgroundColor: a.toolbar.itemBackgroundColor,
                color: a.toolbar.fontColor,
                transition: "0.4s",
                WebkitTransition: "0.4s"
              }), 0 >= navigator.userAgent.search("MSIE") && Q(a._zoomButton.childNodes[0], {
                WebkitFilter: "invert(0%)",
                filter: "invert(0%)"
              }))
            }, this.allDOMEventHandlers)
          }
          this._resetButton ?
            (Q(this._resetButton, {
              borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
              backgroundColor: a.toolbar.itemBackgroundColor,
              color: a.toolbar.fontColor
            }), this._resetButton.title = this._cultureInfo.resetText) : (f = !1, za(this._resetButton = document.createElement("button")), Ca(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton),
              A(this._resetButton, "touchstart", function(a) {
                f = !0
              }, this.allDOMEventHandlers), A(this._resetButton, "click", function() {
                a.toolTip.hide();
                a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", {
                  chart: a,
                  toolTip: a.toolTip
                }, a.toolTip);
                a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, Ca(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                if (a.sessionVariables.axisX)
                  for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum =
                    null, a.sessionVariables.axisX[b].newViewportMaximum = null;
                if (a.sessionVariables.axisX2)
                  for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
                if (a.sessionVariables.axisY)
                  for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
                if (a.sessionVariables.axisY2)
                  for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum =
                    null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
                a.resetOverlayedCanvas();
                0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], {
                  WebkitFilter: "invert(0%)",
                  filter: "invert(0%)"
                });
                za(a._zoomButton, a._resetButton);
                a.stockChart && (a.stockChart._rangeEventParameter = {
                  stockChart: a.stockChart,
                  source: "chart",
                  index: a.stockChart.charts.indexOf(a),
                  minimum: null,
                  maximum: null
                });
                a._dispatchRangeEvent("rangeChanging", "reset");
                a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging",
                  a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                a.render();
                a.syncCharts && a.syncCharts(null, null);
                a._dispatchRangeEvent("rangeChanged", "reset");
                a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart))
              }, this.allDOMEventHandlers), A(this._resetButton, "mousemove", function() {
                f || (Q(a._resetButton, {
                  backgroundColor: a.toolbar.itemBackgroundColorOnHover,
                  color: a.toolbar.fontColorOnHover,
                  transition: "0.4s",
                  WebkitTransition: "0.4s"
                }), 0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], {
                  WebkitFilter: "invert(100%)",
                  filter: "invert(100%)"
                }))
              }, this.allDOMEventHandlers), A(this._resetButton, "mouseout", function() {
                f || (Q(a._resetButton, {
                  backgroundColor: a.toolbar.itemBackgroundColor,
                  color: a.toolbar.fontColor,
                  transition: "0.4s",
                  WebkitTransition: "0.4s"
                }), 0 >= navigator.userAgent.search("MSIE") && Q(a._resetButton.childNodes[0], {
                  WebkitFilter: "invert(0%)",
                  filter: "invert(0%)"
                }))
              }, this.allDOMEventHandlers),
              this.overlaidCanvas.style.cursor = a._defaultCursor);
          this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Sa(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))
        } else this.panEnabled = this.zoomEnabled = !1;
        ib(this);
        "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? Ca(a, a._zoomButton, "zoom") : Ca(a, a._zoomButton, "pan"),
          a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && Ca(a, a._resetButton, "reset"));
        this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
        for (var c in this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c)
      };
      s.prototype._updateSize = function() {
        return mb.call(this, [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas])
      };
      s.prototype._initialize = function() {
        this.isNavigator = e(this.parent) || e(this.parent._defaultsKey) ||
          "Navigator" !== this.parent._defaultsKey ? !1 : !0;
        this._animator ? this._animator.cancelAllAnimations() : this._animator = new ma(this);
        this.removeAllEventListeners();
        this.disableToolTip = !1;
        this._axes = [];
        this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
        this._updateOptions();
        this.animatedRender = u && this.animationEnabled && 0 === this.renderCount;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        this.axisX = [];
        this.axisX2 = [];
        this.axisY = [];
        this.axisY2 = [];
        this._indexLabels = [];
        this._dataInRenderedOrder = [];
        this._events = [];
        this._eventManager && this._eventManager.reset();
        this.plotInfo = {
          axisPlacement: null,
          plotTypes: []
        };
        this.layoutManager = new La(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.data = [];
        this.title = null;
        this.subtitles = [];
        var a = 0,
          f = null;
        if (this.options.data) {
          for (var c = 0; c < this.options.data.length; c++)
            if (a++, !this.options.data[c].type || 0 <= s._supportedChartTypes.indexOf(this.options.data[c].type)) {
              var b = new M(this, this.options.data[c],
                a - 1, ++this._eventManager.lastObjectId);
              "error" === b.type && (b.linkedDataSeriesIndex = e(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
              null === b.name && (b.name = "DataSeries " + a);
              null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index %
                this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
              null === b.markerSize &&
                (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
              "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) {
                return a.x
              }) && b.dataPoints.sort(k) : b.dataPoints.sort(k));
              this.data.push(b);
              var g = b.axisPlacement,
                f = f || g,
                h;
              "normal" === g ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' :
                "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === g ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === g ? "normal" === this.plotInfo.axisPlacement ?
                h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === g && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
              if (h && window.console) {
                window.console.log(h);
                return
              }
            } for (c = 0; c < this.data.length; c++) {
            if ("none" == f && "error" === this.data[c].type && window.console) {
              window.console.log('You cannot combine "' +
                b.type + '" with error chart');
              return
            }
            "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = f || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex])
          }
        }
        this._objectsInitialized = !0;
        this._plotAreaElements = []
      };
      s._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
      s.prototype.setLayout = function() {
        for (var a = this._plotAreaElements, f = 0; f < this.data.length; f++)
          if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
            if (!this.data[f].axisYType || "primary" === this.data[f].axisYType)
              if (this.options.axisY && 0 < this.options.axisY.length) {
                if (!this.axisY.length)
                  for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new z(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" ===
                    this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new z(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                this.data[f].axisY = this.axisY[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY.length ? this.data[f].axisYIndex : 0];
                this.axisY[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY.length ? this.data[f].axisYIndex : 0].dataSeries.push(this.data[f])
              } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new z(this, "axisY", this.options.axisY,
                0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new z(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[f].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[f]);
            if ("secondary" === this.data[f].axisYType)
              if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                if (!this.axisY2.length)
                  for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new z(this, "axisY2", this.options.axisY2[c], c,
                    "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new z(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                this.data[f].axisY = this.axisY2[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY2.length ? this.data[f].axisYIndex : 0];
                this.axisY2[0 <= this.data[f].axisYIndex && this.data[f].axisYIndex < this.axisY2.length ? this.data[f].axisYIndex : 0].dataSeries.push(this.data[f])
              } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] =
                new z(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new z(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[f].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[f]);
            if (!this.data[f].axisXType || "primary" === this.data[f].axisXType)
              if (this.options.axisX && 0 < this.options.axisX.length) {
                if (!this.axisX.length)
                  for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] =
                    new z(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new z(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                this.data[f].axisX = this.axisX[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX.length ? this.data[f].axisXIndex : 0];
                this.axisX[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX.length ? this.data[f].axisXIndex : 0].dataSeries.push(this.data[f])
              } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ?
                this._axes.push(this.axisX[0] = new z(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new z(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[f].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[f]);
            if ("secondary" === this.data[f].axisXType)
              if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                if (!this.axisX2.length)
                  for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] =
                    new z(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new z(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                this.data[f].axisX = this.axisX2[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX2.length ? this.data[f].axisXIndex : 0];
                this.axisX2[0 <= this.data[f].axisXIndex && this.data[f].axisXIndex < this.axisX2.length ? this.data[f].axisXIndex : 0].dataSeries.push(this.data[f])
              } else this.axisX2.length || ("normal" ===
                this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new z(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new z(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[f].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[f])
          } if (this.axisY) {
          for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
          for (c = 0; c < this.axisY.length - 1; c++) "undefined" ===
            typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10)
        }
        if (this.axisY2) {
          for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
          for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10)
        }
        this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness =
          0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
        if (this.axisX)
          for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
        if (this.axisX2)
          for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
        this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness &&
          "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
        c = !1;
        if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
          for (f = 0; f < this._axes.length; f++)
            if (!e(this._axes[f].viewportMinimum) || !e(this._axes[f].viewportMaximum)) {
              c = !0;
              break
            } c ? (Sa(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness +
          "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (za(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
        rb(this);
        this._processData();
        this.options.title && (this.title = new Ia(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
        if (this.options.subtitles)
          for (f = 0; f < this.options.subtitles.length; f++) c = new Na(this, this.options.subtitles[f], f), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
        this.legend = new F(this, this.options.legend);
        for (f = 0; f < this.data.length; f++)(this.data[f].showInLegend || "pie" === this.data[f].type || "doughnut" === this.data[f].type || "funnel" === this.data[f].type ||
          "pyramid" === this.data[f].type) && this.legend.dataSeries.push(this.data[f]);
        this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
        for (f = 0; f < this._axes.length; f++)
          if (this._axes[f].scaleBreaks && this._axes[f].scaleBreaks._appliedBreaks.length) {
            u ? (this._breaksCanvas = ta(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
            break
          } this._preRenderCanvas = ta(this.width, this.height);
        this._preRenderCtx =
          this._preRenderCanvas.getContext("2d");
        "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || z.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
      };
      s.prototype.renderElements = function() {
        var a = this._plotAreaElements;
        this.title && !this.title.dockInsidePlotArea && this.title.render();
        for (var f = 0; f < this.subtitles.length; f++) this.subtitles[f].dockInsidePlotArea || this.subtitles[f].render();
        this.legend.dockInsidePlotArea ||
          this.legend.render();
        if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) z.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
        else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
        else return;
        for (f = 0; f < a.length; f++) a[f].setLayout(), a[f].render();
        var c = [];
        if (this.animatedRender) {
          var b = ta(this.width, this.height);
          b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
        }
        tb(this);
        var a = this.ctx.miterLimit,
          g;
        this.ctx.miterLimit =
          3;
        u && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
        for (f = 0; f < this.plotInfo.plotTypes.length; f++)
          for (var h = this.plotInfo.plotTypes[f], C = 0; C < h.plotUnits.length; C++) {
            var e = h.plotUnits[C],
              d = null;
            e.targetCanvas && Da(e.targetCanvas);
            e.targetCanvas = null;
            this.animatedRender && (e.targetCanvas = ta(this.width, this.height), e.targetCanvasCtx = e.targetCanvas.getContext("2d"), g = e.targetCanvasCtx.miterLimit, e.targetCanvasCtx.miterLimit = 3);
            "line" === e.type ? d = this.renderLine(e) : "stepLine" === e.type ? d = this.renderStepLine(e) : "spline" === e.type ? d = this.renderSpline(e) : "column" === e.type ? d = this.renderColumn(e) : "bar" === e.type ? d = this.renderBar(e) : "area" === e.type ? d = this.renderArea(e) : "stepArea" === e.type ? d = this.renderStepArea(e) :
              "splineArea" === e.type ? d = this.renderSplineArea(e) : "stackedColumn" === e.type ? d = this.renderStackedColumn(e) : "stackedColumn100" === e.type ? d = this.renderStackedColumn100(e) : "stackedBar" === e.type ? d = this.renderStackedBar(e) : "stackedBar100" === e.type ? d = this.renderStackedBar100(e) : "stackedArea" === e.type ? d = this.renderStackedArea(e) : "stackedArea100" === e.type ? d = this.renderStackedArea100(e) : "bubble" === e.type ? d = d = this.renderBubble(e) : "scatter" === e.type ? d = this.renderScatter(e) : "pie" === e.type ? this.renderPie(e) : "doughnut" ===
              e.type ? this.renderPie(e) : "funnel" === e.type ? d = this.renderFunnel(e) : "pyramid" === e.type ? d = this.renderFunnel(e) : "candlestick" === e.type ? d = this.renderCandlestick(e) : "ohlc" === e.type ? d = this.renderCandlestick(e) : "rangeColumn" === e.type ? d = this.renderRangeColumn(e) : "error" === e.type ? d = this.renderError(e) : "rangeBar" === e.type ? d = this.renderRangeBar(e) : "rangeArea" === e.type ? d = this.renderRangeArea(e) : "rangeSplineArea" === e.type ? d = this.renderRangeSplineArea(e) : "waterfall" === e.type ? d = this.renderWaterfall(e) : "boxAndWhisker" ===
              e.type && (d = this.renderBoxAndWhisker(e));
            for (var m = 0; m < e.dataSeriesIndexes.length; m++) this._dataInRenderedOrder.push(this.data[e.dataSeriesIndexes[m]]);
            this.animatedRender && (e.targetCanvasCtx.miterLimit = g, d && c.push(d))
          }
        this.ctx.miterLimit = a;
        this.animatedRender && this._breaksCanvasCtx && c.push({
          source: this._breaksCanvasCtx,
          dest: this.plotArea.ctx,
          animationCallback: w.fadeInAnimation,
          easingFunction: w.easing.easeInQuad,
          animationBase: 0,
          startTimePercent: 0.7
        });
        this.animatedRender && 0 < this._indexLabels.length &&
          (g = ta(this.width, this.height).getContext("2d"), c.push(this.renderIndexLabels(g)));
        var n = this;
        if (0 < c.length) n.disableToolTip = !0, n._animator.animate(200, n.animationDuration, function(a) {
          n.ctx.clearRect(0, 0, n.width, n.height);
          n.ctx.drawImage(b, 0, 0, Math.floor(n.width * la), Math.floor(n.height * la), 0, 0, n.width, n.height);
          for (var f = 0; f < c.length; f++) d = c[f], 1 > a && "undefined" !== typeof d.startTimePercent ? a >= d.startTimePercent && d.animationCallback(d.easingFunction(a - d.startTimePercent, 0, 1, 1 - d.startTimePercent), d) :
            d.animationCallback(d.easingFunction(a, 0, 1, 1), d);
          n.dispatchEvent("dataAnimationIterationEnd", {
            chart: n
          })
        }, function() {
          c = [];
          for (var a = 0; a < n.plotInfo.plotTypes.length; a++)
            for (var f = n.plotInfo.plotTypes[a], g = 0; g < f.plotUnits.length; g++) {
              var h = f.plotUnits[g];
              h.targetCanvas && Da(h.targetCanvas);
              h.targetCanvas = null
            }
          b = null;
          n.disableToolTip = !1;
          n.dispatchEvent("dataAnimationEnd", {
            chart: n
          })
        });
        else {
          if (n._breaksCanvas)
            if (u) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height);
            else
              for (m = 0; m < n._axes.length; m++) n._axes[m].createMask();
          0 < n._indexLabels.length && n.renderIndexLabels();
          n.dispatchEvent("dataAnimationIterationEnd", {
            chart: n
          });
          n.dispatchEvent("dataAnimationEnd", {
            chart: n
          })
        }
        this.attachPlotAreaEventHandlers();
        this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || za(this._zoomButton, this._resetButton);
        this.toolTip._updateToolTip();
        this.renderCount++;
        Ma && (n = this, setTimeout(function() {
          var a = document.getElementById("ghostCanvasCopy");
          a && (Ta(a, n.width, n.height), a.getContext("2d").drawImage(n._eventManager.ghostCanvas,
            0, 0))
        }, 2E3));
        this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
        for (m = 0; m < this._axes.length; m++) this._axes[m].maskCanvas && (delete this._axes[m].maskCanvas, delete this._axes[m].maskCtx)
      };
      s.prototype.render = function(a) {
        a && (this.options = a);
        this._initialize();
        this.setLayout();
        this.renderElements();
        this._preRenderCanvas && Da(this._preRenderCanvas)
      };
      s.prototype.attachPlotAreaEventHandlers = function() {
        this.attachEvent({
          context: this,
          chart: this,
          mousedown: this._plotAreaMouseDown,
          mouseup: this._plotAreaMouseUp,
          mousemove: this._plotAreaMouseMove,
          cursor: this.panEnabled ? "move" : "default",
          capture: !0,
          bounds: this.plotArea
        })
      };
      s.prototype.categoriseDataSeries = function() {
        for (var a = "", f = 0; f < this.data.length; f++)
          if (a = this.data[f], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= s._supportedChartTypes.indexOf(a.type)) {
            for (var c = null, b = !1, g = null, h = !1, C = 0; C < this.plotInfo.plotTypes.length; C++)
              if (this.plotInfo.plotTypes[C].type === a.type) {
                b = !0;
                c = this.plotInfo.plotTypes[C];
                break
              } b || (c = {
              type: a.type,
              totalDataSeries: 0,
              plotUnits: []
            }, this.plotInfo.plotTypes.push(c));
            for (C = 0; C < c.plotUnits.length; C++)
              if (c.plotUnits[C].axisYType === a.axisYType && c.plotUnits[C].axisXType === a.axisXType && c.plotUnits[C].axisYIndex === a.axisYIndex && c.plotUnits[C].axisXIndex === a.axisXIndex) {
                h = !0;
                g = c.plotUnits[C];
                break
              } h || (g = {
              type: a.type,
              previousDataSeriesCount: 0,
              index: c.plotUnits.length,
              plotType: c,
              axisXType: a.axisXType,
              axisYType: a.axisYType,
              axisYIndex: a.axisYIndex,
              axisXIndex: a.axisXIndex,
              axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex &&
                a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
              axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
              dataSeriesIndexes: [],
              yTotals: [],
              yAbsTotals: []
            }, c.plotUnits.push(g));
            c.totalDataSeries++;
            g.dataSeriesIndexes.push(f);
            a.plotUnit = g
          } for (f = 0; f < this.plotInfo.plotTypes.length; f++)
          for (c = this.plotInfo.plotTypes[f],
            C = a = 0; C < c.plotUnits.length; C++) c.plotUnits[C].previousDataSeriesCount = a, a += c.plotUnits[C].dataSeriesIndexes.length
      };
      s.prototype.assignIdToDataPoints = function() {
        for (var a = 0; a < this.data.length; a++) {
          var f = this.data[a];
          if (f.dataPoints)
            for (var c = f.dataPoints.length, b = 0; b < c; b++) f.dataPointIds[b] = ++this._eventManager.lastObjectId
        }
      };
      s.prototype._processData = function() {
        this.assignIdToDataPoints();
        this.categoriseDataSeries();
        for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
          for (var f = this.plotInfo.plotTypes[a],
              c = 0; c < f.plotUnits.length; c++) {
            var b = f.plotUnits[c];
            "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" ===
              b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b)
          }
        this.calculateAutoBreaks()
      };
      s.prototype._processMultiseriesPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
          for (var f = a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h = !1, C = 0; C < a.dataSeriesIndexes.length; C++) {
            var e = this.data[a.dataSeriesIndexes[C]],
              d = 0,
              m = !1,
              n = !1,
              p;
            if ("normal" === e.axisPlacement || "xySwapped" === e.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
              l = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
              this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
            if (e.dataPoints[d].x && e.dataPoints[d].x.getTime || "dateTime" === e.xValueType) h = !0;
            for (d = 0; d < e.dataPoints.length; d++) {
              "undefined" === typeof e.dataPoints[d].x && (e.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0));
              e.dataPoints[d].x.getTime ? (h = !0, b = e.dataPoints[d].x.getTime()) : b = e.dataPoints[d].x;
              g = e.dataPoints[d].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              g < f.min && "number" === typeof g && (f.min = g);
              g > f.max && "number" === typeof g && (f.max = g);
              if (0 < d) {
                if (a.axisX.logarithmic) {
                  var x = b / e.dataPoints[d - 1].x;
                  1 > x && (x = 1 / x);
                  c.minDiff > x && 1 !== x && (c.minDiff = x)
                } else x = b - e.dataPoints[d - 1].x, 0 > x && (x *= -1), c.minDiff > x && 0 !== x && (c.minDiff = x);
                null !== g && null !== e.dataPoints[d - 1].y && (a.axisY.logarithmic ? (x = g / e.dataPoints[d - 1].y, 1 > x && (x = 1 / x), f.minDiff > x && 1 !== x && (f.minDiff = x)) : (x = g - e.dataPoints[d - 1].y, 0 > x && (x *= -1), f.minDiff > x && 0 !== x && (f.minDiff = x)))
              }
              if (b < q && !m) null !== g && (p = b);
              else {
                if (!m && (m = !0, 0 < d)) {
                  d -= 2;
                  continue
                }
                if (b > l &&
                  !n) n = !0;
                else if (b > l && n) continue;
                e.dataPoints[d].label && (a.axisX.labels[b] = e.dataPoints[d].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === g ? c.viewPortMin === b && p < b && (c.viewPortMin = p) : (g < f.viewPortMin && "number" === typeof g && (f.viewPortMin = g), g > f.viewPortMax && "number" === typeof g && (f.viewPortMax = g))
              }
            }
            e.axisX.valueType = e.xValueType = h ? "dateTime" : "number"
          }
      };
      s.prototype._processStackedPlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
          for (var f =
              a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h = !1, C = [], d = [], J = Infinity, m = -Infinity, n = 0; n < a.dataSeriesIndexes.length; n++) {
            var p = this.data[a.dataSeriesIndexes[n]],
              q = 0,
              l = !1,
              x = !1,
              w;
            if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var u = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
              v = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
            if (p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType) h = !0;
            for (q = 0; q < p.dataPoints.length; q++) {
              "undefined" === typeof p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
              p.dataPoints[q].x.getTime ? (h = !0, b = p.dataPoints[q].x.getTime()) :
                b = p.dataPoints[q].x;
              g = e(p.dataPoints[q].y) ? 0 : p.dataPoints[q].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              if (0 < q) {
                if (a.axisX.logarithmic) {
                  var y = b / p.dataPoints[q - 1].x;
                  1 > y && (y = 1 / y);
                  c.minDiff > y && 1 !== y && (c.minDiff = y)
                } else y = b - p.dataPoints[q - 1].x, 0 > y && (y *= -1), c.minDiff > y && 0 !== y && (c.minDiff = y);
                null !== g && null !== p.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < g && (y = g / p.dataPoints[q - 1].y, 1 > y && (y = 1 / y), f.minDiff > y && 1 !== y && (f.minDiff = y)) : (y = g - p.dataPoints[q - 1].y, 0 > y && (y *= -1), f.minDiff > y && 0 !== y && (f.minDiff = y)))
              }
              if (b < u &&
                !l) null !== p.dataPoints[q].y && (w = b);
              else {
                if (!l && (l = !0, 0 < q)) {
                  q -= 2;
                  continue
                }
                if (b > v && !x) x = !0;
                else if (b > v && x) continue;
                p.dataPoints[q].label && (a.axisX.labels[b] = p.dataPoints[q].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === p.dataPoints[q].y ? c.viewPortMin === b && w < b && (c.viewPortMin = w) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + g, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(g), 0 <= g ? C[b] ? C[b] += g : (C[b] = g, J = Math.min(g, J)) : d[b] ? d[b] += g : (d[b] = g, m = Math.max(g,
                  m)))
              }
            }
            a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (f.dataPointYPositiveSums ? (f.dataPointYPositiveSums.push.apply(f.dataPointYPositiveSums, C), f.dataPointYNegativeSums.push.apply(f.dataPointYPositiveSums, d)) : (f.dataPointYPositiveSums = C, f.dataPointYNegativeSums = d));
            p.axisX.valueType = p.xValueType = h ? "dateTime" : "number"
          }
          for (q in C) C.hasOwnProperty(q) && !isNaN(q) && (a = C[q], a < f.min && (f.min = Math.min(a, J)), a > f.max && (f.max = a), q < c.viewPortMin || q > c.viewPortMax ||
            (a < f.viewPortMin && (f.viewPortMin = Math.min(a, J)), a > f.viewPortMax && (f.viewPortMax = a)));
          for (q in d) d.hasOwnProperty(q) && !isNaN(q) && (a = d[q], a < f.min && (f.min = a), a > f.max && (f.max = Math.max(a, m)), q < c.viewPortMin || q > c.viewPortMax || (a < f.viewPortMin && (f.viewPortMin = a), a > f.viewPortMax && (f.viewPortMax = Math.max(a, m))))
        }
      };
      s.prototype._processStacked100PlotUnit = function(a) {
        if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
          for (var f = a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h = !1, C = !1, d = !1, J = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
            var n =
              this.data[a.dataSeriesIndexes[m]],
              p = 0,
              q = !1,
              l = !1,
              x;
            if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var w = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
              u = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
              this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
            if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) h = !0;
            for (p = 0; p < n.dataPoints.length; p++) {
              "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
              n.dataPoints[p].x.getTime ? (h = !0, b = n.dataPoints[p].x.getTime()) : b = n.dataPoints[p].x;
              g = e(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              if (0 < p) {
                if (a.axisX.logarithmic) {
                  var v =
                    b / n.dataPoints[p - 1].x;
                  1 > v && (v = 1 / v);
                  c.minDiff > v && 1 !== v && (c.minDiff = v)
                } else v = b - n.dataPoints[p - 1].x, 0 > v && (v *= -1), c.minDiff > v && 0 !== v && (c.minDiff = v);
                e(g) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < g && (v = g / n.dataPoints[p - 1].y, 1 > v && (v = 1 / v), f.minDiff > v && 1 !== v && (f.minDiff = v)) : (v = g - n.dataPoints[p - 1].y, 0 > v && (v *= -1), f.minDiff > v && 0 !== v && (f.minDiff = v)))
              }
              if (b < w && !q) null !== g && (x = b);
              else {
                if (!q && (q = !0, 0 < p)) {
                  p -= 2;
                  continue
                }
                if (b > u && !l) l = !0;
                else if (b > u && l) continue;
                n.dataPoints[p].label && (a.axisX.labels[b] = n.dataPoints[p].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                null === g ? c.viewPortMin === b && x < b && (c.viewPortMin = x) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + g, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(g), 0 <= g ? C = !0 : 0 > g && (d = !0), J[b] = J[b] ? J[b] + Math.abs(g) : Math.abs(g))
              }
            }
            n.axisX.valueType = n.xValueType = h ? "dateTime" : "number"
          }
          a.axisY.logarithmic ? (f.max = e(f.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(f.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), f.min =
            e(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : C && !d ? (f.max = e(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = e(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : C && d ? (f.max = e(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = e(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99)) : !C && d && (f.max = e(f.viewPortMax) ? -1 : Math.max(f.viewPortMax, -1), f.min = e(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99));
          f.viewPortMin = f.min;
          f.viewPortMax = f.max;
          a.dataPointYSums = J
        }
      };
      s.prototype._processMultiYPlotUnit = function(a) {
        if (a.dataSeriesIndexes &&
          !(1 > a.dataSeriesIndexes.length))
          for (var f = a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h, C, e = !1, d = 0; d < a.dataSeriesIndexes.length; d++) {
            var m = this.data[a.dataSeriesIndexes[d]],
              n = 0,
              p = !1,
              q = !1,
              l, x, w;
            if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) var u = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum :
              a.axisX.logarithmic ? 0 : -Infinity,
              v = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
            if (m.dataPoints[n].x && m.dataPoints[n].x.getTime || "dateTime" === m.xValueType) e = !0;
            for (n = 0; n < m.dataPoints.length; n++) {
              "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
              m.dataPoints[n].x.getTime ?
                (e = !0, b = m.dataPoints[n].x.getTime()) : b = m.dataPoints[n].x;
              if ((g = m.dataPoints[n].y) && g.length) {
                h = Math.min.apply(null, g);
                C = Math.max.apply(null, g);
                x = !0;
                for (var y = 0; y < g.length; y++) null === g.k && (x = !1);
                x && (p || (w = l), l = b)
              }
              b < c.min && (c.min = b);
              b > c.max && (c.max = b);
              h < f.min && (f.min = h);
              C > f.max && (f.max = C);
              0 < n && (a.axisX.logarithmic ? (x = b / m.dataPoints[n - 1].x, 1 > x && (x = 1 / x), c.minDiff > x && 1 !== x && (c.minDiff = x)) : (x = b - m.dataPoints[n - 1].x, 0 > x && (x *= -1), c.minDiff > x && 0 !== x && (c.minDiff = x)), g && (null !== g[0] && m.dataPoints[n - 1].y && null !==
                m.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (x = g[0] / m.dataPoints[n - 1].y[0], 1 > x && (x = 1 / x), f.minDiff > x && 1 !== x && (f.minDiff = x)) : (x = g[0] - m.dataPoints[n - 1].y[0], 0 > x && (x *= -1), f.minDiff > x && 0 !== x && (f.minDiff = x))));
              if (!(b < u) || p) {
                if (!p && (p = !0, 0 < n)) {
                  n -= 2;
                  l = w;
                  continue
                }
                if (b > v && !q) q = !0;
                else if (b > v && q) continue;
                m.dataPoints[n].label && (a.axisX.labels[b] = m.dataPoints[n].label);
                b < c.viewPortMin && (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                if (c.viewPortMin === b && g)
                  for (y = 0; y < g.length; y++)
                    if (null === g[y] && l < b) {
                      c.viewPortMin =
                        l;
                      break
                    } null === g ? c.viewPortMin === b && l < b && (c.viewPortMin = l) : (h < f.viewPortMin && (f.viewPortMin = h), C > f.viewPortMax && (f.viewPortMax = C))
              }
            }
            m.axisX.valueType = m.xValueType = e ? "dateTime" : "number"
          }
      };
      s.prototype._processSpecificPlotUnit = function(a) {
        if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
          for (var f = a.axisY.dataInfo, c = a.axisX.dataInfo, b, g, h = !1, C = 0; C < a.dataSeriesIndexes.length; C++) {
            var e = this.data[a.dataSeriesIndexes[C]],
              d = 0,
              m = !1,
              n = !1,
              p = b = 0;
            if ("normal" === e.axisPlacement || "xySwapped" ===
              e.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
              l = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
              this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
            if (e.dataPoints[d].x && e.dataPoints[d].x.getTime || "dateTime" === e.xValueType) h = !0;
            for (d = 0; d < e.dataPoints.length; d++) "undefined" !== typeof e.dataPoints[d].isCumulativeSum && !0 === e.dataPoints[d].isCumulativeSum ? (e.dataPointEOs[d].cumulativeSumYStartValue = 0, e.dataPointEOs[d].cumulativeSum = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, e.dataPoints[d].y = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum) : "undefined" !== typeof e.dataPoints[d].isIntermediateSum &&
              !0 === e.dataPoints[d].isIntermediateSum ? (e.dataPointEOs[d].cumulativeSumYStartValue = p, e.dataPointEOs[d].cumulativeSum = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, e.dataPoints[d].y = 0 === d ? 0 : b, p = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, b = 0) : (g = "number" !== typeof e.dataPoints[d].y ? 0 : e.dataPoints[d].y, e.dataPointEOs[d].cumulativeSumYStartValue = 0 === d ? 0 : e.dataPointEOs[d - 1].cumulativeSum, e.dataPointEOs[d].cumulativeSum = 0 === d ? g : e.dataPointEOs[d - 1].cumulativeSum + g, b += g);
            for (d = 0; d < e.dataPoints.length; d++)
              if ("undefined" ===
                typeof e.dataPoints[d].x && (e.dataPoints[d].x = d + (a.axisX.logarithmic ? 1 : 0)), e.dataPoints[d].x.getTime ? (h = !0, b = e.dataPoints[d].x.getTime()) : b = e.dataPoints[d].x, g = e.dataPoints[d].y, b < c.min && (c.min = b), b > c.max && (c.max = b), e.dataPointEOs[d].cumulativeSum < f.min && (f.min = e.dataPointEOs[d].cumulativeSum), e.dataPointEOs[d].cumulativeSum > f.max && (f.max = e.dataPointEOs[d].cumulativeSum), 0 < d && (a.axisX.logarithmic ? (p = b / e.dataPoints[d - 1].x, 1 > p && (p = 1 / p), c.minDiff > p && 1 !== p && (c.minDiff = p)) : (p = b - e.dataPoints[d - 1].x, 0 > p &&
                  (p *= -1), c.minDiff > p && 0 !== p && (c.minDiff = p)), null !== g && null !== e.dataPoints[d - 1].y && (a.axisY.logarithmic ? (g = e.dataPointEOs[d].cumulativeSum / e.dataPointEOs[d - 1].cumulativeSum, 1 > g && (g = 1 / g), f.minDiff > g && 1 !== g && (f.minDiff = g)) : (g = e.dataPointEOs[d].cumulativeSum - e.dataPointEOs[d - 1].cumulativeSum, 0 > g && (g *= -1), f.minDiff > g && 0 !== g && (f.minDiff = g)))), !(b < q) || m) {
                if (!m && (m = !0, 0 < d)) {
                  d -= 2;
                  continue
                }
                if (b > l && !n) n = !0;
                else if (b > l && n) continue;
                e.dataPoints[d].label && (a.axisX.labels[b] = e.dataPoints[d].label);
                b < c.viewPortMin &&
                  (c.viewPortMin = b);
                b > c.viewPortMax && (c.viewPortMax = b);
                0 < d && (e.dataPointEOs[d - 1].cumulativeSum < f.viewPortMin && (f.viewPortMin = e.dataPointEOs[d - 1].cumulativeSum), e.dataPointEOs[d - 1].cumulativeSum > f.viewPortMax && (f.viewPortMax = e.dataPointEOs[d - 1].cumulativeSum));
                e.dataPointEOs[d].cumulativeSum < f.viewPortMin && (f.viewPortMin = e.dataPointEOs[d].cumulativeSum);
                e.dataPointEOs[d].cumulativeSum > f.viewPortMax && (f.viewPortMax = e.dataPointEOs[d].cumulativeSum)
              } e.axisX.valueType = e.xValueType = h ? "dateTime" : "number"
          }
      };
      s.prototype.calculateAutoBreaks = function() {
        function a(a, b, c, f) {
          if (f) return c = Math.pow(Math.min(c * a / b, b / a), 0.2), 1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)), {
            startValue: a * c,
            endValue: b / c
          };
          c = 0.2 * Math.min(c - b + a, b - a);
          0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a)));
          return {
            startValue: a + c,
            endValue: b - c
          }
        }
  
        function f(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            var b = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
              c = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate &&
              1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
            if (b || c)
              for (var f = a.axisY.dataInfo, h = a.axisX.dataInfo, l, C = h.min, m = h.max, d = f.min, n = f.max, h = h._dataRanges, f = f._dataRanges, p, q = 0, va = 0; va < a.dataSeriesIndexes.length; va++) {
                var w = g.data[a.dataSeriesIndexes[va]];
                if (!(4 > w.dataPoints.length))
                  for (q = 0; q < w.dataPoints.length; q++)
                    if (b && (p = (m + 1 - C) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, l = w.dataPoints[q].x.getTime ? w.dataPoints[q].x.getTime() : w.dataPoints[q].x, p = Math.floor((l - C) / p), l <
                        h[p].min && (h[p].min = l), l > h[p].max && (h[p].max = l)), c) {
                      var J = (n + 1 - d) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                      if ((l = "waterfall" === a.type ? w.dataPointEOs[q].cumulativeSum : w.dataPoints[q].y) && l.length)
                        for (var u = 0; u < l.length; u++) p = Math.floor((l[u] - d) / J), l[u] < f[p].min && (f[p].min = l[u]), l[u] > f[p].max && (f[p].max = l[u]);
                      else e(l) || (p = Math.floor((l - d) / J), l < f[p].min && (f[p].min = l), l > f[p].max && (f[p].max = l))
                    }
              }
          }
        }
  
        function c(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) &&
            a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
            for (var b = a.axisX.dataInfo, c = b.min, f = b.max, h = b._dataRanges, l, C = 0, m = 0; m < a.dataSeriesIndexes.length; m++) {
              var e = g.data[a.dataSeriesIndexes[m]];
              if (!(4 > e.dataPoints.length))
                for (C = 0; C < e.dataPoints.length; C++) l = (f + 1 - c) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b = e.dataPoints[C].x.getTime ? e.dataPoints[C].x.getTime() : e.dataPoints[C].x, l = Math.floor((b - c) / l), b < h[l].min && (h[l].min =
                  b), b > h[l].max && (h[l].max = b)
            }
        }
        for (var b, g = this, h = !1, C = 0; C < this._axes.length; C++)
          if (this._axes[C].scaleBreaks && this._axes[C].scaleBreaks.autoCalculate && 1 <= this._axes[C].scaleBreaks.maxNumberOfAutoBreaks) {
            h = !0;
            this._axes[C].dataInfo._dataRanges = [];
            for (var d = 0; d < 100 / Math.max(parseFloat(this._axes[C].scaleBreaks.collapsibleThreshold) || 10, 10); d++) this._axes[C].dataInfo._dataRanges.push({
              min: Infinity,
              max: -Infinity
            })
          } if (h) {
          for (C = 0; C < this.plotInfo.plotTypes.length; C++)
            for (h = this.plotInfo.plotTypes[C], d = 0; d <
              h.plotUnits.length; d++) b = h.plotUnits[d], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? f(b) : 0 <= b.type.indexOf("stacked") && c(b);
          for (C = 0; C < this._axes.length; C++)
            if (this._axes[C].dataInfo._dataRanges) {
              var w =
                this._axes[C].dataInfo.min;
              b = (this._axes[C].dataInfo.max + 1 - w) * Math.max(parseFloat(this._axes[C].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
              var m = this._axes[C].dataInfo._dataRanges,
                n, p, h = [];
              if (this._axes[C].dataInfo.dataPointYPositiveSums) {
                var q = this._axes[C].dataInfo.dataPointYPositiveSums;
                n = m;
                for (d in q)
                  if (q.hasOwnProperty(d) && !isNaN(d) && (p = q[d], !e(p))) {
                    var l = Math.floor((p - w) / b);
                    p < n[l].min && (n[l].min = p);
                    p > n[l].max && (n[l].max = p)
                  } delete this._axes[C].dataInfo.dataPointYPositiveSums
              }
              if (this._axes[C].dataInfo.dataPointYNegativeSums) {
                q =
                  this._axes[C].dataInfo.dataPointYNegativeSums;
                n = m;
                for (d in q) q.hasOwnProperty(d) && !isNaN(d) && (p = -1 * q[d], e(p) || (l = Math.floor((p - w) / b), p < n[l].min && (n[l].min = p), p > n[l].max && (n[l].max = p)));
                delete this._axes[C].dataInfo.dataPointYNegativeSums
              }
              for (d = 0; d < m.length - 1; d++)
                if (n = m[d].max, isFinite(n))
                  for (; d < m.length - 1;)
                    if (w = m[d + 1].min, isFinite(w)) {
                      p = w - n;
                      p > b && h.push({
                        diff: p,
                        start: n,
                        end: w
                      });
                      break
                    } else d++;
              if (this._axes[C].scaleBreaks.customBreaks)
                for (d = 0; d < this._axes[C].scaleBreaks.customBreaks.length; d++)
                  for (b =
                    0; b < h.length; b++)
                    if (this._axes[C].scaleBreaks.customBreaks[d].startValue <= h[b].start && h[b].start <= this._axes[C].scaleBreaks.customBreaks[d].endValue || this._axes[C].scaleBreaks.customBreaks[d].startValue <= h[b].start && h[b].start <= this._axes[C].scaleBreaks.customBreaks[d].endValue || h[b].start <= this._axes[C].scaleBreaks.customBreaks[d].startValue && this._axes[C].scaleBreaks.customBreaks[d].startValue <= h[b].end || h[b].start <= this._axes[C].scaleBreaks.customBreaks[d].endValue && this._axes[C].scaleBreaks.customBreaks[d].endValue <=
                      h[b].end) h.splice(b, 1), b--;
              h.sort(function(a, b) {
                return b.diff - a.diff
              });
              for (d = 0; d < Math.min(h.length, this._axes[C].scaleBreaks.maxNumberOfAutoBreaks); d++) b = a(h[d].start, h[d].end, this._axes[C].logarithmic ? this._axes[C].dataInfo.max / this._axes[C].dataInfo.min : this._axes[C].dataInfo.max - this._axes[C].dataInfo.min, this._axes[C].logarithmic), this._axes[C].scaleBreaks.autoBreaks.push(new W(this, "autoBreaks", b, d, ++this._eventManager.lastObjectId, this._axes[C].scaleBreaks)), this._axes[C].scaleBreaks._appliedBreaks.push(this._axes[C].scaleBreaks.autoBreaks[this._axes[C].scaleBreaks.autoBreaks.length -
                1]);
              this._axes[C].scaleBreaks._appliedBreaks.sort(function(a, b) {
                return a.startValue - b.startValue
              })
            }
        }
      };
      s.prototype.renderCrosshairs = function(a) {
        for (var f = 0; f < this.axisX.length; f++) this.axisX[f] != a && (this.axisX[f].crosshair && this.axisX[f].crosshair.enabled && !this.axisX[f].crosshair._hidden) && this.axisX[f].showCrosshair(this.axisX[f].crosshair._updatedValue);
        for (f = 0; f < this.axisX2.length; f++) this.axisX2[f] != a && (this.axisX2[f].crosshair && this.axisX2[f].crosshair.enabled && !this.axisX2[f].crosshair._hidden) &&
          this.axisX2[f].showCrosshair(this.axisX2[f].crosshair._updatedValue);
        for (f = 0; f < this.axisY.length; f++) this.axisY[f] != a && (this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && !this.axisY[f].crosshair._hidden) && this.axisY[f].showCrosshair(this.axisY[f].crosshair._updatedValue);
        for (f = 0; f < this.axisY2.length; f++) this.axisY2[f] != a && (this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && !this.axisY2[f].crosshair._hidden) && this.axisY2[f].showCrosshair(this.axisY2[f].crosshair._updatedValue)
      };
      s.prototype.getDataPointAtXY =
        function(a, f, c) {
          c = c || !1;
          for (var b = [], g = this._dataInRenderedOrder.length - 1; 0 <= g; g--) {
            var h = null;
            (h = this._dataInRenderedOrder[g].getDataPointAtXY(a, f, c)) && b.push(h)
          }
          a = null;
          f = !1;
          for (c = 0; c < b.length; c++)
            if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type)
              if (g = sa("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= g / 2) {
                f = !0;
                break
              } for (c = 0; c < b.length; c++) f && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type &&
            "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a
        };
      s.prototype.getObjectAtXY = function(a, f, c) {
        var b = null;
        if (c = this.getDataPointAtXY(a, f, c || !1)) b = c.dataSeries.dataPointIds[c.dataPointIndex];
        else if (u) b = jb(a, f, this._eventManager.ghostCtx);
        else
          for (c = 0; c < this.legend.items.length; c++) {
            var g = this.legend.items[c];
            a >= g.x1 && (a <= g.x2 && f >= g.y1 && f <= g.y2) && (b = g.id)
          }
        return b
      };
      s.prototype.getAutoFontSize = ob;
      s.prototype.resetOverlayedCanvas =
        function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
      s.prototype.clearCanvas = nb;
      s.prototype.attachEvent = function(a) {
        this._events.push(a)
      };
      s.prototype._touchEventHandler = function(a) {
        if (a.changedTouches && this.interactivityEnabled) {
          var f = [],
            c = a.changedTouches,
            b = c ? c[0] : a,
            g = null;
          switch (a.type) {
            case "touchstart":
            case "MSPointerDown":
              f = ["mousemove", "mousedown"];
              this._lastTouchData = Ba(b);
              this._lastTouchData.time = new Date;
              break;
            case "touchmove":
            case "MSPointerMove":
              f = ["mousemove"];
              break;
            case "touchend":
            case "MSPointerUp":
              var h = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                f = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
              break;
            default:
              return
          }
          if (!(c && 1 < c.length)) {
            g = Ba(b);
            g.time = new Date;
            try {
              var C = g.y - this._lastTouchData.y,
                h = g.time - this._lastTouchData.time;
              if (1 < Math.abs(C) && this._lastTouchData.scroll || 5 < Math.abs(C) && 250 > h) this._lastTouchData.scroll = !0
            } catch (d) {}
            this._lastTouchEventType =
              a.type;
            if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
            else
              for (c = 0; c < f.length; c++)
                if (g = f[c], C = document.createEvent("MouseEvent"), C.initMouseEvent(g, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), b.target.dispatchEvent(C), !e(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === g) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault()
          }
        }
      };
      s.prototype._dispatchRangeEvent = function(a, f) {
        var c = {
          chart: this
        };
        c.type = a;
        c.trigger = f;
        var b = [];
        this.axisX && 0 < this.axisX.length && b.push("axisX");
        this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
        this.axisY && 0 < this.axisY.length && b.push("axisY");
        this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
        for (var g = 0; g < b.length; g++)
          if (e(c[b[g]]) && (c[b[g]] = []), "axisY" === b[g])
            for (var h = 0; h < this.axisY.length; h++) c[b[g]].push({
              viewportMinimum: this[b[g]][h].sessionVariables.newViewportMinimum,
              viewportMaximum: this[b[g]][h].sessionVariables.newViewportMaximum
            });
          else if ("axisY2" === b[g])
          for (h = 0; h < this.axisY2.length; h++) c[b[g]].push({
            viewportMinimum: this[b[g]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[g]][h].sessionVariables.newViewportMaximum
          });
        else if ("axisX" === b[g])
          for (h = 0; h < this.axisX.length; h++) c[b[g]].push({
            viewportMinimum: this[b[g]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[g]][h].sessionVariables.newViewportMaximum
          });
        else if ("axisX2" === b[g])
          for (h = 0; h < this.axisX2.length; h++) c[b[g]].push({
            viewportMinimum: this[b[g]][h].sessionVariables.newViewportMinimum,
            viewportMaximum: this[b[g]][h].sessionVariables.newViewportMaximum
          });
        this.dispatchEvent(a, c, this)
      };
      s.prototype._mouseEventHandler = function(a) {
        "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
        var f = Ba(a),
          c = a.type,
          b, g;
        a.which ? g = 3 == a.which : a.button && (g = 2 == a.button);
        s.capturedEventParam && (b = s.capturedEventParam, "mouseup" === c && (s.capturedEventParam = null, b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup",
          b.chart._mouseEventHandler, !1)), b.hasOwnProperty(c) && ("mouseup" !== c || b.chart.overlaidCanvas.releaseCapture ? a.target !== b.chart.overlaidCanvas && u || b[c].call(b.context, f.x, f.y) : a.target !== b.chart.overlaidCanvas && (b.chart.isDrag = !1)));
        if (this.interactivityEnabled)
          if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
          else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Ma && window.console && (window.console.log(c + " --\x3e x: " + f.x + "; y:" + f.y), g && window.console.log(a.which),
            "mouseup" === c && window.console.log("mouseup")), !g) {
          if (!s.capturedEventParam && this._events) {
            for (var h = 0; h < this._events.length; h++)
              if (this._events[h].hasOwnProperty(c))
                if (b = this._events[h], g = b.bounds, f.x >= g.x1 && f.x <= g.x2 && f.y >= g.y1 && f.y <= g.y2) {
                  b[c].call(b.context, f.x, f.y);
                  "mousedown" === c && !0 === b.capture ? (s.capturedEventParam = b, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (b.chart.overlaidCanvas.releaseCapture ?
                    b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                  break
                } else b = null;
            a.target.style.cursor = b && b.cursor ? b.cursor : this._defaultCursor
          }
          c = this.plotArea;
          if (f.x < c.x1 || f.x > c.x2 || f.y < c.y1 || f.y > c.y2) {
            this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", {
              chart: this,
              toolTip: this.toolTip
            }, this.toolTip)) : this.resetOverlayedCanvas();
            for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair && this.axisX[h].crosshair.enabled &&
              (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisX[h].options
              }, this.axisX[h].crosshair));
            for (h = 0; h < this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", {
              chart: this,
              axis: this.axisX2[h].options
            }, this.axisX2[h].crosshair));
            for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && (this.axisY[h].crosshair.hide(),
              this.axisY[h].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisY[h].options
              }, this.axisY[h].crosshair));
            for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", {
              chart: this,
              axis: this.axisY2[h].options
            }, this.axisY2[h].crosshair))
          }
          this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
        }
      };
      s.prototype._plotAreaMouseDown = function(a, f) {
        this.isDrag = !0;
        this.dragStartPoint = {
          x: a,
          y: f
        }
      };
      s.prototype._plotAreaMouseUp = function(a, f) {
        if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
          var c = f - this.dragStartPoint.y,
            b = a - this.dragStartPoint.x,
            g = 0 <= this.zoomType.indexOf("x"),
            h = 0 <= this.zoomType.indexOf("y"),
            C = !1;
          this.resetOverlayedCanvas();
          if ("xySwapped" === this.plotInfo.axisPlacement) var e = h,
            h = g,
            g = e;
          if (this.panEnabled || this.zoomEnabled) {
            if (this.panEnabled)
              for (g = h = 0; g < this._axes.length; g++) c = this._axes[g], c.logarithmic ?
                c.viewportMinimum < c.minimum ? (h = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * h, c.sessionVariables.newViewportMaximum = c.viewportMaximum * h, C = !0) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / h, c.sessionVariables.newViewportMaximum = c.viewportMaximum / h, C = !0) : c.viewportMinimum < c.minimum ? (h = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + h, c.sessionVariables.newViewportMaximum =
                  c.viewportMaximum + h, C = !0) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - h, c.sessionVariables.newViewportMaximum = c.viewportMaximum - h, C = !0);
            else if ((!g || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
              if (!this.dragStartPoint) return;
              c = g ? this.dragStartPoint.x : this.plotArea.x1;
              b = h ? this.dragStartPoint.y : this.plotArea.y1;
              g = g ? a : this.plotArea.x2;
              h = h ? f : this.plotArea.y2;
              2 < Math.abs(c - g) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c,
                b, g, h) && (C = !0)
            }
            C && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
              stockChart: this.stockChart,
              source: "chart",
              index: this.stockChart.charts.indexOf(this),
              minimum: this.stockChart.sessionVariables._axisXMin,
              maximum: this.stockChart.sessionVariables._axisXMax
            }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging",
              this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), C && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Sa(this._zoomButton, this._resetButton), Ca(this, this._zoomButton, "pan"), Ca(this, this._resetButton,
              "reset")))
          }
        }
        this.isDrag = !1;
        if ("none" !== this.plotInfo.axisPlacement) {
          this.resetOverlayedCanvas();
          if (this.axisX && 0 < this.axisX.length)
            for (C = 0; C < this.axisX.length; C++) this.axisX[C].crosshair && this.axisX[C].crosshair.enabled && this.axisX[C].renderCrosshair(a, f);
          if (this.axisX2 && 0 < this.axisX2.length)
            for (C = 0; C < this.axisX2.length; C++) this.axisX2[C].crosshair && this.axisX2[C].crosshair.enabled && this.axisX2[C].renderCrosshair(a, f);
          if (this.axisY && 0 < this.axisY.length)
            for (C = 0; C < this.axisY.length; C++) this.axisY[C].crosshair &&
              this.axisY[C].crosshair.enabled && this.axisY[C].renderCrosshair(a, f);
          if (this.axisY2 && 0 < this.axisY2.length)
            for (C = 0; C < this.axisY2.length; C++) this.axisY2[C].crosshair && this.axisY2[C].crosshair.enabled && this.axisY2[C].renderCrosshair(a, f);
          if (this.axisX && 0 < this.axisX.length)
            for (C = 0; C < this.axisX.length; C++) this.axisX[C].crosshair && this.axisX[C].crosshair.enabled && this.axisX[C].crosshair.renderLabel();
          if (this.axisX2 && 0 < this.axisX2.length)
            for (C = 0; C < this.axisX2.length; C++) this.axisX2[C].crosshair && this.axisX2[C].crosshair.enabled &&
              this.axisX2[C].crosshair.renderLabel();
          if (this.axisY && 0 < this.axisY.length)
            for (C = 0; C < this.axisY.length; C++) this.axisY[C].crosshair && this.axisY[C].crosshair.enabled && this.axisY[C].crosshair.renderLabel();
          if (this.axisY2 && 0 < this.axisY2.length)
            for (C = 0; C < this.axisY2.length; C++) this.axisY2[C].crosshair && this.axisY2[C].crosshair.enabled && this.axisY2[C].crosshair.renderLabel()
        }
      };
      s.prototype._plotAreaMouseMove = function(a, f) {
        if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
          var c = 0,
            b = 0,
            g = c = null,
            g = 0 <= this.zoomType.indexOf("x"),
            h = 0 <= this.zoomType.indexOf("y"),
            C = this;
          "xySwapped" === this.plotInfo.axisPlacement && (c = h, h = g, g = c);
          c = this.dragStartPoint.x - a;
          b = this.dragStartPoint.y - f;
          if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
            this.toolTip.hide();
            this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", {
              chart: this,
              toolTip: this.toolTip
            }, this.toolTip);
            for (var e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && (this.axisX[e].crosshair.hide(), this.axisX[e].crosshair.dispatchEvent("hidden", {
              chart: this,
              axis: this.axisX[e].options
            }, this.axisX[e].crosshair));
            for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && (this.axisX2[e].crosshair.hide(), this.axisX2[e].crosshair.dispatchEvent("hidden", {
              chart: this,
              axis: this.axisX2[e].options
            }, this.axisX2[e].crosshair));
            for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && (this.axisY[e].crosshair.hide(), this.axisY[e].crosshair.dispatchEvent("hidden", {
                chart: this,
                axis: this.axisY[e].options
              },
              this.axisY[e].crosshair));
            for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && (this.axisY2[e].crosshair.hide(), this.axisY2[e].crosshair.dispatchEvent("hidden", {
              chart: this,
              axis: this.axisY2[e].options
            }, this.axisY2[e].crosshair))
          } else this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, f);
          if ((!g || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled))
            if (this.panEnabled) g = {
              x1: g ? this.plotArea.x1 + c : this.plotArea.x1,
              y1: h ? this.plotArea.y1 +
                b : this.plotArea.y1,
              x2: g ? this.plotArea.x2 + c : this.plotArea.x2,
              y2: h ? this.plotArea.y2 + b : this.plotArea.y2
            }, clearTimeout(C._panTimerId), C._panTimerId = setTimeout(function(b, c, g, h) {
              return function() {
                C._zoomPanToSelectedRegion(b, c, g, h, !0) && (C._dispatchRangeEvent("rangeChanging", "pan"), C.stockChart && (C.stockChart.navigator && C.stockChart.navigator.enabled) && (C.stockChart._rangeEventParameter.type = "rangeChanging", C.stockChart.dispatchEvent("rangeChanging", C.stockChart._rangeEventParameter, C.stockChart)), C.render(),
                  C._dispatchRangeEvent("rangeChanged", "pan"), C.stockChart && (C.stockChart.navigator && C.stockChart.navigator.enabled) && (C.stockChart._rangeEventParameter.type = "rangeChanged", C.stockChart.dispatchEvent("rangeChanged", C.stockChart._rangeEventParameter, C.stockChart)), C.dragStartPoint.x = a, C.dragStartPoint.y = f)
              }
            }(g.x1, g.y1, g.x2, g.y2), 0);
            else if (this.zoomEnabled) {
            this.resetOverlayedCanvas();
            c = this.overlaidCanvasCtx.globalAlpha;
            this.overlaidCanvasCtx.fillStyle = "#A89896";
            var b = g ? this.dragStartPoint.x : this.plotArea.x1,
              e = h ? this.dragStartPoint.y : this.plotArea.y1,
              d = g ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
              m = h ? f - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
            this.validateRegion(b, e, g ? a : this.plotArea.x2 - this.plotArea.x1, h ? f : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
            this.overlaidCanvasCtx.globalAlpha = 0.7;
            this.overlaidCanvasCtx.fillRect(b, e, d, m);
            this.overlaidCanvasCtx.globalAlpha = c
          }
        } else if (this.toolTip.mouseMoveHandler(a,
            f), "none" !== this.plotInfo.axisPlacement) {
          if (this.axisX && 0 < this.axisX.length)
            for (g = 0; g < this.axisX.length; g++) this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && this.axisX[g].renderCrosshair(a, f);
          if (this.axisX2 && 0 < this.axisX2.length)
            for (g = 0; g < this.axisX2.length; g++) this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && this.axisX2[g].renderCrosshair(a, f);
          if (this.axisY && 0 < this.axisY.length)
            for (g = 0; g < this.axisY.length; g++) this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && this.axisY[g].renderCrosshair(a,
              f);
          if (this.axisY2 && 0 < this.axisY2.length)
            for (g = 0; g < this.axisY2.length; g++) this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && this.axisY2[g].renderCrosshair(a, f);
          if (this.axisX && 0 < this.axisX.length)
            for (g = 0; g < this.axisX.length; g++) this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && this.axisX[g].crosshair.renderLabel();
          if (this.axisX2 && 0 < this.axisX2.length)
            for (g = 0; g < this.axisX2.length; g++) this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && this.axisX2[g].crosshair.renderLabel();
          if (this.axisY && 0 < this.axisY.length)
            for (g = 0; g < this.axisY.length; g++) this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && this.axisY[g].crosshair.renderLabel();
          if (this.axisY2 && 0 < this.axisY2.length)
            for (g = 0; g < this.axisY2.length; g++) this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && this.axisY2[g].crosshair.renderLabel()
        }
      };
      s.prototype._zoomPanToSelectedRegion = function(a, f, c, b, g) {
        a = this.validateRegion(a, f, c, b, g);
        f = a.axesWithValidRange;
        c = a.axesRanges;
        if (a.isValid)
          for (b = 0; b < f.length; b++) g = c[b],
            f[b].setViewPortRange(g.val1, g.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(g.val1, g.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
              stockChart: this.stockChart,
              source: "chart",
              index: this.stockChart.charts.indexOf(this),
              minimum: g.val1,
              maximum: g.val2
            });
        return a.isValid
      };
      s.prototype.validateRegion = function(a, f, c, b, g) {
        g = g || !1;
        for (var h = 0 <= this.zoomType.indexOf("x"), e = 0 <= this.zoomType.indexOf("y"), d = !1, w = [], m = [], n = [], p = 0; p < this._axes.length; p++)("axisX" === this._axes[p].type &&
          h || "axisY" === this._axes[p].type && e) && m.push(this._axes[p]);
        for (e = 0; e < m.length; e++) {
          var p = m[e],
            h = !1,
            q = p.convertPixelToValue({
              x: a,
              y: f
            }),
            l = p.convertPixelToValue({
              x: c,
              y: b
            });
          if (q > l) var x = l,
            l = q,
            q = x;
          if (p.scaleBreaks)
            for (x = 0; !h && x < p.scaleBreaks._appliedBreaks.length; x++) h = p.scaleBreaks._appliedBreaks[x].startValue <= q && p.scaleBreaks._appliedBreaks[x].endValue >= l;
          if (isFinite(p.dataInfo.minDiff))
            if (x = p.getApparentDifference(q, l, null, !0), !(h || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) &&
                (p.logarithmic && x < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && x < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || l > p.maximum)) w.push(p), n.push({
              val1: q,
              val2: l
            }), d = !0;
            else if (!g) {
            d = !1;
            break
          }
        }
        return {
          isValid: d,
          axesWithValidRange: w,
          axesRanges: n
        }
      };
      s.prototype.preparePlotArea = function() {
        var a = this.plotArea;
        !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
        if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
          var f = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
          if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
            var c = this.axisY[0];
            a.x1 = f.x1 < f.x2 ? f.x1 : c.lineCoordinates.x1;
            a.y1 = f.y1 < c.lineCoordinates.y1 ? f.y1 : c.lineCoordinates.y1;
            a.x2 = f.x2 > c.lineCoordinates.x2 ? f.x2 : c.lineCoordinates.x2;
            a.y2 = f.y2 > f.y1 ? f.y2 : c.lineCoordinates.y2;
            a.width = a.x2 - a.x1;
            a.height = a.y2 - a.y1
          }
          this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = f.x1 < f.x2 ? f.x1 : c.lineCoordinates.x1, a.y1 = f.y1 < c.lineCoordinates.y1 ? f.y1 : c.lineCoordinates.y1, a.x2 = f.x2 > c.lineCoordinates.x2 ?
            f.x2 : c.lineCoordinates.x2, a.y2 = f.y2 > f.y1 ? f.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
        } else f = this.layoutManager.getFreeSpace(), a.x1 = f.x1, a.x2 = f.x2, a.y1 = f.y1, a.y2 = f.y2, a.width = f.width, a.height = f.height;
        u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
        a.layoutManager = new La(a.x1, a.y1, a.x2, a.y2, 2)
      };
      s.prototype.renderIndexLabels = function(a) {
        var f = a || this.plotArea.ctx,
          c = this.plotArea,
          b = 0,
          g = 0,
          h = 0,
          C = h = g = 0,
          d = 0,
          J = b = 0,
          m = 0;
        for (a = 0; a < this._indexLabels.length; a++) {
          var n = this._indexLabels[a],
            p = n.chartType.toLowerCase(),
            q, l, C = sa("indexLabelFontColor", n.dataPoint, n.dataSeries),
            x = sa("indexLabelFontSize", n.dataPoint, n.dataSeries),
            d = sa("indexLabelFontFamily", n.dataPoint, n.dataSeries),
            J = sa("indexLabelFontStyle", n.dataPoint, n.dataSeries),
            m = sa("indexLabelFontWeight", n.dataPoint, n.dataSeries),
            r = sa("indexLabelBackgroundColor", n.dataPoint, n.dataSeries);
          q = sa("indexLabelMaxWidth", n.dataPoint, n.dataSeries);
          l = sa("indexLabelWrap", n.dataPoint, n.dataSeries);
          var ha = sa("indexLabelLineDashType", n.dataPoint, n.dataSeries),
            v = sa("indexLabelLineColor", n.dataPoint, n.dataSeries),
            y = e(n.dataPoint.indexLabelLineThickness) ? e(n.dataSeries.options.indexLabelLineThickness) ? 0 : n.dataSeries.options.indexLabelLineThickness : n.dataPoint.indexLabelLineThickness,
            b = 0 < y ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
            k = {
              percent: null,
              total: null
            },
            t = null;
          if (0 <= n.dataSeries.type.indexOf("stacked") ||
            "pie" === n.dataSeries.type || "doughnut" === n.dataSeries.type) k = this.getPercentAndTotal(n.dataSeries, n.dataPoint);
          if (n.dataSeries.indexLabelFormatter || n.dataPoint.indexLabelFormatter) t = {
            chart: this,
            dataSeries: n.dataSeries,
            dataPoint: n.dataPoint,
            index: n.indexKeyword,
            total: k.total,
            percent: k.percent
          };
          var s = n.dataPoint.indexLabelFormatter ? n.dataPoint.indexLabelFormatter(t) : n.dataPoint.indexLabel ? this.replaceKeywordsWithValue(n.dataPoint.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : n.dataSeries.indexLabelFormatter ?
            n.dataSeries.indexLabelFormatter(t) : n.dataSeries.indexLabel ? this.replaceKeywordsWithValue(n.dataSeries.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : null;
          if (null !== s && "" !== s) {
            var k = sa("indexLabelPlacement", n.dataPoint, n.dataSeries),
              t = sa("indexLabelOrientation", n.dataPoint, n.dataSeries),
              B = sa("indexLabelTextAlign", n.dataPoint, n.dataSeries),
              z = n.direction,
              g = n.dataSeries.axisX,
              h = n.dataSeries.axisY,
              A = !1,
              r = new oa(f, {
                x: 0,
                y: 0,
                maxWidth: q ? q : 0.5 * this.width,
                maxHeight: l ? 5 * x : 1.5 * x,
                angle: "horizontal" ===
                  t ? 0 : -90,
                text: s,
                padding: 0,
                backgroundColor: r,
                textAlign: B,
                fontSize: x,
                fontFamily: d,
                fontWeight: m,
                fontColor: C,
                fontStyle: J,
                textBaseline: "middle"
              });
            r.measureText();
            n.dataSeries.indexLabelMaxWidth = r.maxWidth;
            if ("stackedarea100" === p) {
              if (n.point.x < c.x1 || n.point.x > c.x2 || n.point.y < c.y1 - 1 || n.point.y > c.y2 + 1) continue
            } else if ("rangearea" === p || "rangesplinearea" === p) {
              if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < h.viewportMinimum || Math.min.apply(null, n.dataPoint.y) >
                h.viewportMaximum) continue
            } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
              if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || n.dataPoint.y < h.viewportMinimum || n.dataPoint.y > h.viewportMaximum) continue
            } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !n.axisSwapped) {
              if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || n.bounds.y1 > c.y2 || n.bounds.y2 < c.y1) continue
            } else if (0 <= p.indexOf("bar") || "error" ===
              p) {
              if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || n.bounds.x1 > c.x2 || n.bounds.x2 < c.x1) continue
            } else if ("candlestick" === p || "ohlc" === p) {
              if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < h.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > h.viewportMaximum) continue
            } else if (n.dataPoint.x < g.viewportMinimum || n.dataPoint.x > g.viewportMaximum) continue;
            C = d = 2;
            "horizontal" === t ? (J = r.width, m = r.height) : (m = r.width, J = r.height);
            if ("normal" ===
              this.plotInfo.axisPlacement) {
              if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) k = "auto", d = 4;
              else if (0 <= p.indexOf("stacked")) "auto" === k && (k = "inside");
              else if ("bubble" === p || "scatter" === p) k = "inside";
              q = n.point.x - ("horizontal" === t ? J / 2 : J / 2 - x / 2);
              "inside" !== k ? (g = c.y1, h = c.y2, 0 < z ? (l = n.point.y + ("horizontal" === t ? x / 2 : 0) - m - d - b, l < g && (l = "auto" === k ? Math.max(n.point.y, g) + x / 2 + d : g + x / 2 + d, A = l + m > n.point.y)) : (l = n.point.y + x / 2 + d + b, l > h - m && (l = "auto" === k ? Math.min(n.point.y, h) + x / 2 - m - d : h + x / 2 - m, A = l < n.point.y))) : (g = Math.max(n.bounds.y1,
                c.y1), h = Math.min(n.bounds.y2, c.y2 - m + x / 2), b = 0 <= p.indexOf("range") || "error" === p ? 0 < z ? Math.max(n.bounds.y1, c.y1) + x / 2 + d : Math.min(n.bounds.y2, c.y2) + x / 2 - m + d : (Math.max(n.bounds.y1, c.y1) + Math.min(n.bounds.y2, c.y2)) / 2 - m / 2 + x / 2 + ("horizontal" === t ? d : 0), 0 < z ? (l = Math.max(n.point.y, b), l < g && ("bubble" === p || "scatter" === p) && (l = Math.max(n.point.y - m - d, c.y1 + d))) : (l = Math.min(n.point.y, b), l > h - m - d && ("bubble" === p || "scatter" === p) && (l = Math.min(n.point.y + d, c.y2 - m - d))), l = Math.min(l, h))
            } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") ||
              0 <= p.indexOf("scatter") ? (k = "auto", C = 4) : 0 <= p.indexOf("stacked") ? "auto" === k && (k = "inside") : "bubble" === p && (k = "inside"), l = n.point.y + x / 2 - m / 2 + d, "inside" !== k ? (g = c.x1, h = c.x2, 0 > z ? (q = n.point.x - ("horizontal" === t ? J : J - x / 2) - C - b, q < g && (q = "auto" === k ? Math.max(n.point.x, g) + C : g + C, A = q + J > n.point.x)) : (q = n.point.x + ("horizontal" === t ? 0 : x / 2) + C + b, q > h - J - C - b && (q = "auto" === k ? Math.min(n.point.x, h) - ("horizontal" === t ? J : J / 2) - C : h - J - C, A = q < n.point.x))) : (g = Math.max(n.bounds.x1, c.x1), Math.min(n.bounds.x2, c.x2), b = 0 <= p.indexOf("range") || "error" ===
                p ? 0 > z ? Math.max(n.bounds.x1, c.x1) + x / 2 + C : Math.min(n.bounds.x2, c.x2) - J / 2 - C + ("horizontal" === t ? 0 : x / 2) : (Math.max(n.bounds.x1, c.x1) + Math.min(n.bounds.x2, c.x2)) / 2 + ("horizontal" === t ? 0 : x / 2), q = 0 > z ? Math.max(n.point.x, b) - ("horizontal" === t ? J / 2 : 0) : Math.min(n.point.x, b) - J / 2, q = Math.max(q, g));
            "vertical" === t && (l += m - x / 2);
            r.x = q;
            r.y = l;
            r.render(!0);
            y && ("inside" !== k && (0 > p.indexOf("bar") && ("error" !== p || !n.axisSwapped) && n.point.x > c.x1 && n.point.x < c.x2 || !A) && (0 > p.indexOf("column") && ("error" !== p || n.axisSwapped) && n.point.y > c.y1 &&
              n.point.y < c.y2 || !A)) && (f.lineWidth = y, f.strokeStyle = v ? v : "gray", f.setLineDash && f.setLineDash(S(ha, y)), f.beginPath(), f.moveTo(n.point.x, n.point.y), 0 <= p.indexOf("bar") || "error" === p && n.axisSwapped ? f.lineTo(q + (0 < n.direction ? -C : J + C) + ("vertical" === t ? -x / 2 : 0), l + ("vertical" === t ? -m / 2 : m / 2 - x / 2) - d) : 0 <= p.indexOf("column") || "error" === p && !n.axisSwapped ? f.lineTo(q + J / 2 - ("horizontal" === t ? 0 : x / 2), l + ("vertical" === t ? (l - m < n.point.y ? 0 : -m) + d : (l - x / 2 < n.point.y ? m : 0) - x / 2)) : f.lineTo(q + J / 2 - ("horizontal" === t ? 0 : x / 2), l + ("vertical" ===
              t ? l - m < n.point.y ? 0 : -m : (l - x / 2 < n.point.y ? m : 0) - x / 2)), f.stroke())
          }
        }
        f = {
          source: f,
          dest: this.plotArea.ctx,
          animationCallback: w.fadeInAnimation,
          easingFunction: w.easing.easeInQuad,
          animationBase: 0,
          startTimePercent: 0.7
        };
        for (a = 0; a < this._indexLabels.length; a++) n = this._indexLabels[a], r = sa("indexLabelBackgroundColor", n.dataPoint, n.dataSeries), n.dataSeries.indexLabelBackgroundColor = e(r) ? u ? "transparent" : null : r;
        return f
      };
      s.prototype.renderLine = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx :
          f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this._eventManager.ghostCtx;
          c.save();
          var g = this.plotArea;
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          for (var h = [], e, d = 0; d < a.dataSeriesIndexes.length; d++) {
            var J = a.dataSeriesIndexes[d],
              m = this.data[J];
            c.lineWidth = m.lineThickness;
            var n = m.dataPoints,
              p = "solid";
            if (c.setLineDash) {
              var q = S(m.nullDataLineDashType, m.lineThickness),
                p = m.lineDashType,
                l = S(p, m.lineThickness);
              c.setLineDash(l)
            }
            var x = m.id;
            this._eventManager.objectMap[x] = {
              objectType: "dataSeries",
              dataSeriesIndex: J
            };
            x = V(x);
            b.strokeStyle = x;
            b.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness, 4) : 0;
            var x = m._colorSet,
              k = x = m.lineColor = m.options.lineColor ? m.options.lineColor : x[0];
            c.strokeStyle = x;
            var ha = !0,
              v = 0,
              y, t;
            c.beginPath();
            if (0 < n.length) {
              for (var s = !1, v = 0; v < n.length; v++)
                if (y = n[v].x.getTime ? n[v].x.getTime() : n[v].x, !(y < a.axisX.dataInfo.viewPortMin || y > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !s)))
                  if ("number" !== typeof n[v].y) 0 < v && !(m.connectNullData || s || ha) && (c.stroke(), u && b.stroke()),
                    s = !0;
                  else {
                    y = a.axisX.convertValueToPixel(y);
                    t = a.axisY.convertValueToPixel(n[v].y);
                    var D = m.dataPointIds[v];
                    this._eventManager.objectMap[D] = {
                      id: D,
                      objectType: "dataPoint",
                      dataSeriesIndex: J,
                      dataPointIndex: v,
                      x1: y,
                      y1: t
                    };
                    ha || s ? (!ha && m.connectNullData ? (c.setLineDash && (m.options.nullDataLineDashType || p === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(e.x, e.y), p = m.nullDataLineDashType, c.setLineDash(q)), c.lineTo(y, t), u && b.lineTo(y, t)) : (c.beginPath(), c.moveTo(y, t),
                      u && (b.beginPath(), b.moveTo(y, t))), s = ha = !1) : (c.lineTo(y, t), u && b.lineTo(y, t), 0 == v % 500 && (c.stroke(), c.beginPath(), c.moveTo(y, t), u && (b.stroke(), b.beginPath(), b.moveTo(y, t))));
                    e = {
                      x: y,
                      y: t
                    };
                    v < n.length - 1 && (k !== (n[v].lineColor || x) || p !== (n[v].lineDashType || m.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(y, t), k = n[v].lineColor || x, c.strokeStyle = k, c.setLineDash && (n[v].lineDashType ? (p = n[v].lineDashType, c.setLineDash(S(p, m.lineThickness))) : (p = m.lineDashType, c.setLineDash(l))));
                    if (0 < n[v].markerSize || 0 < m.markerSize) {
                      var B =
                        m.getMarkerProperties(v, y, t, c);
                      h.push(B);
                      D = V(D);
                      u && h.push({
                        x: y,
                        y: t,
                        ctx: b,
                        type: B.type,
                        size: B.size,
                        color: D,
                        borderColor: D,
                        borderThickness: B.borderThickness
                      })
                    }(n[v].indexLabel || m.indexLabel || n[v].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "line",
                      dataPoint: n[v],
                      dataSeries: m,
                      point: {
                        x: y,
                        y: t
                      },
                      direction: 0 > n[v].y === a.axisY.reversed ? 1 : -1,
                      color: x
                    })
                  } c.stroke();
              u && b.stroke()
            }
          }
          r.drawMarkers(h);
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation =
            "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), b.beginPath());
          c.restore();
          c.beginPath();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderStepLine =
        function(a) {
          var f = a.targetCanvasCtx || this.plotArea.ctx,
            c = u ? this._preRenderCtx : f;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var g = this.plotArea;
            c.beginPath();
            c.rect(g.x1, g.y1, g.width, g.height);
            c.clip();
            for (var h = [], e, d = 0; d < a.dataSeriesIndexes.length; d++) {
              var J = a.dataSeriesIndexes[d],
                m = this.data[J];
              c.lineWidth = m.lineThickness;
              var n = m.dataPoints,
                p = "solid";
              if (c.setLineDash) {
                var q = S(m.nullDataLineDashType, m.lineThickness),
                  p = m.lineDashType,
                  l = S(p, m.lineThickness);
                c.setLineDash(l)
              }
              var x =
                m.id;
              this._eventManager.objectMap[x] = {
                objectType: "dataSeries",
                dataSeriesIndex: J
              };
              x = V(x);
              b.strokeStyle = x;
              b.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness, 4) : 0;
              var x = m._colorSet,
                k = x = m.lineColor = m.options.lineColor ? m.options.lineColor : x[0];
              c.strokeStyle = x;
              var ha = !0,
                v = 0,
                y, t;
              c.beginPath();
              if (0 < n.length) {
                for (var s = !1, v = 0; v < n.length; v++)
                  if (y = n[v].getTime ? n[v].x.getTime() : n[v].x, !(y < a.axisX.dataInfo.viewPortMin || y > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !s)))
                    if ("number" !== typeof n[v].y) 0 <
                      v && !(m.connectNullData || s || ha) && (c.stroke(), u && b.stroke()), s = !0;
                    else {
                      var D = t;
                      y = a.axisX.convertValueToPixel(y);
                      t = a.axisY.convertValueToPixel(n[v].y);
                      var B = m.dataPointIds[v];
                      this._eventManager.objectMap[B] = {
                        id: B,
                        objectType: "dataPoint",
                        dataSeriesIndex: J,
                        dataPointIndex: v,
                        x1: y,
                        y1: t
                      };
                      ha || s ? (!ha && m.connectNullData ? (c.setLineDash && (m.options.nullDataLineDashType || p === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(e.x, e.y), p = m.nullDataLineDashType, c.setLineDash(q)),
                        c.lineTo(y, D), c.lineTo(y, t), u && (b.lineTo(y, D), b.lineTo(y, t))) : (c.beginPath(), c.moveTo(y, t), u && (b.beginPath(), b.moveTo(y, t))), s = ha = !1) : (c.lineTo(y, D), u && b.lineTo(y, D), c.lineTo(y, t), u && b.lineTo(y, t), 0 == v % 500 && (c.stroke(), c.beginPath(), c.moveTo(y, t), u && (b.stroke(), b.beginPath(), b.moveTo(y, t))));
                      e = {
                        x: y,
                        y: t
                      };
                      v < n.length - 1 && (k !== (n[v].lineColor || x) || p !== (n[v].lineDashType || m.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(y, t), k = n[v].lineColor || x, c.strokeStyle = k, c.setLineDash && (n[v].lineDashType ? (p = n[v].lineDashType,
                        c.setLineDash(S(p, m.lineThickness))) : (p = m.lineDashType, c.setLineDash(l))));
                      if (0 < n[v].markerSize || 0 < m.markerSize) D = m.getMarkerProperties(v, y, t, c), h.push(D), B = V(B), u && h.push({
                        x: y,
                        y: t,
                        ctx: b,
                        type: D.type,
                        size: D.size,
                        color: B,
                        borderColor: B,
                        borderThickness: D.borderThickness
                      });
                      (n[v].indexLabel || m.indexLabel || n[v].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "stepLine",
                        dataPoint: n[v],
                        dataSeries: m,
                        point: {
                          x: y,
                          y: t
                        },
                        direction: 0 > n[v].y === a.axisY.reversed ? 1 : -1,
                        color: x
                      })
                    } c.stroke();
                u && b.stroke()
              }
            }
            r.drawMarkers(h);
            u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), b.beginPath());
            c.restore();
            c.beginPath();
            return {
              source: f,
              dest: this.plotArea.ctx,
              animationCallback: w.xClipAnimation,
              easingFunction: w.easing.linear,
              animationBase: 0
            }
          }
        };
      s.prototype.renderSpline = function(a) {
        function f(a) {
          a = G(a, 2);
          if (0 < a.length) {
            b.beginPath();
            u && g.beginPath();
            b.moveTo(a[0].x, a[0].y);
            a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
            a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
            u && g.moveTo(a[0].x, a[0].y);
            for (var c = 0; c < a.length - 3; c += 3)
              if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), u && g.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c +
                  2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), u && (g.stroke(), g.beginPath(), g.moveTo(a[c + 3].x, a[c + 3].y));
            b.stroke();
            u && g.stroke()
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx,
          b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = this._eventManager.ghostCtx;
          b.save();
          var h = this.plotArea;
          b.beginPath();
          b.rect(h.x1, h.y1, h.width, h.height);
          b.clip();
          for (var e = [], d = 0; d < a.dataSeriesIndexes.length; d++) {
            var J = a.dataSeriesIndexes[d],
              m = this.data[J];
            b.lineWidth = m.lineThickness;
            var n = m.dataPoints,
              p = "solid";
            if (b.setLineDash) {
              var q = S(m.nullDataLineDashType, m.lineThickness),
                p = m.lineDashType,
                l = S(p, m.lineThickness);
              b.setLineDash(l)
            }
            var x = m.id;
            this._eventManager.objectMap[x] = {
              objectType: "dataSeries",
              dataSeriesIndex: J
            };
            x = V(x);
            g.strokeStyle = x;
            g.lineWidth = 0 < m.lineThickness ? Math.max(m.lineThickness,
              4) : 0;
            var x = m._colorSet,
              k = x = m.lineColor = m.options.lineColor ? m.options.lineColor : x[0];
            b.strokeStyle = x;
            var ha = 0,
              v, y, t = [];
            b.beginPath();
            if (0 < n.length)
              for (y = !1, ha = 0; ha < n.length; ha++)
                if (v = n[ha].getTime ? n[ha].x.getTime() : n[ha].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !y)))
                  if ("number" !== typeof n[ha].y) 0 < ha && !y && (m.connectNullData ? b.setLineDash && (0 < t.length && (m.options.nullDataLineDashType || !n[ha - 1].lineDashType)) && (t[t.length - 1].newLineDashArray = q, p = m.nullDataLineDashType) :
                    (f(t), t = [])), y = !0;
                  else {
                    v = a.axisX.convertValueToPixel(v);
                    y = a.axisY.convertValueToPixel(n[ha].y);
                    var s = m.dataPointIds[ha];
                    this._eventManager.objectMap[s] = {
                      id: s,
                      objectType: "dataPoint",
                      dataSeriesIndex: J,
                      dataPointIndex: ha,
                      x1: v,
                      y1: y
                    };
                    t[t.length] = {
                      x: v,
                      y: y
                    };
                    ha < n.length - 1 && (k !== (n[ha].lineColor || x) || p !== (n[ha].lineDashType || m.lineDashType)) && (k = n[ha].lineColor || x, t[t.length - 1].newStrokeStyle = k, b.setLineDash && (n[ha].lineDashType ? (p = n[ha].lineDashType, t[t.length - 1].newLineDashArray = S(p, m.lineThickness)) : (p =
                      m.lineDashType, t[t.length - 1].newLineDashArray = l)));
                    if (0 < n[ha].markerSize || 0 < m.markerSize) {
                      var D = m.getMarkerProperties(ha, v, y, b);
                      e.push(D);
                      s = V(s);
                      u && e.push({
                        x: v,
                        y: y,
                        ctx: g,
                        type: D.type,
                        size: D.size,
                        color: s,
                        borderColor: s,
                        borderThickness: D.borderThickness
                      })
                    }(n[ha].indexLabel || m.indexLabel || n[ha].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "spline",
                      dataPoint: n[ha],
                      dataSeries: m,
                      point: {
                        x: v,
                        y: y
                      },
                      direction: 0 > n[ha].y === a.axisY.reversed ? 1 : -1,
                      color: x
                    });
                    y = !1
                  } f(t)
          }
          r.drawMarkers(e);
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), g.beginPath());
          b.restore();
          b.beginPath();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderColumn = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = 0,
            e, d, J, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
            n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth :
            Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
            p = a.axisX.dataInfo.minDiff;
          isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
          p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
          !this.dataPointMaxWidth && (this.dataPointMinWidth &&
            n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
          p < h && (p = h);
          p > n && (p = n);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (n = 0; n < a.dataSeriesIndexes.length; n++) {
            var q = a.dataSeriesIndexes[n],
              l = this.data[q],
              x = l.dataPoints;
            if (0 < x.length)
              for (var k = 5 < p && l.bevelEnabled ? !0 : !1, h =
                  0; h < x.length; h++)
                if (x[h].getTime ? J = x[h].x.getTime() : J = x[h].x, !(J < a.axisX.dataInfo.viewPortMin || J > a.axisX.dataInfo.viewPortMax) && "number" === typeof x[h].y) {
                  e = a.axisX.convertValueToPixel(J);
                  d = a.axisY.convertValueToPixel(x[h].y);
                  e = a.axisX.reversed ? e + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : e - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                  var r = a.axisX.reversed ? e - p << 0 : e + p << 0,
                    v;
                  0 <= x[h].y ? v = m : (v = d, d = m);
                  d > v && (b = d, d = v, v = b);
                  b = x[h].color ? x[h].color : l._colorSet[h % l._colorSet.length];
                  ea(c, a.axisX.reversed ? r : e, d, a.axisX.reversed ? e : r, v, b, 0, null, k && (a.axisY.reversed ? 0 > x[h].y : 0 <= x[h].y), (a.axisY.reversed ? 0 <= x[h].y : 0 > x[h].y) && k, !1, !1, l.fillOpacity);
                  b = l.dataPointIds[h];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: q,
                    dataPointIndex: h,
                    x1: e,
                    y1: d,
                    x2: r,
                    y2: v
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx, a.axisX.reversed ? r : e, d, a.axisX.reversed ? e : r, v, b, 0, null, !1, !1, !1, !1);
                  (x[h].indexLabel || l.indexLabel || x[h].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "column",
                    dataPoint: x[h],
                    dataSeries: l,
                    point: {
                      x: e + (r - e) / 2,
                      y: 0 > x[h].y === a.axisY.reversed ? d : v
                    },
                    direction: 0 > x[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: e,
                      y1: Math.min(d, v),
                      x2: r,
                      y2: Math.max(d, v)
                    },
                    color: b
                  })
                }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
            0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.yScaleAnimation,
            easingFunction: w.easing.easeOutQuart,
            animationBase: m < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : m > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : m
          }
        }
      };
      s.prototype.renderStackedColumn = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = [],
            e = [],
            d = [],
            J = [],
            m = 0,
            n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
          var l = a.axisX.dataInfo.minDiff;
          isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
          l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(l) /
            Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && m > n && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && n < m) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
          l < m && (l = m);
          l > n && (l = n);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1,
            g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
            var k = a.dataSeriesIndexes[x],
              r = this.data[k],
              v = r.dataPoints;
            if (0 < v.length) {
              var t = 5 < l && r.bevelEnabled ? !0 : !1;
              c.strokeStyle = "#4572A7 ";
              for (m = 0; m < v.length; m++)
                if (b = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
                  n = a.axisX.convertValueToPixel(b);
                  var s = n - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                    K = s + l << 0,
                    D;
                  if (a.axisY.logarithmic ||
                    a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) d[b] = v[m].y + (d[b] ? d[b] : 0), 0 < d[b] && (p = a.axisY.convertValueToPixel(d[b]), D = "undefined" !== typeof h[b] ? h[b] : q, h[b] = p);
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) J[b] = v[m].y + (J[b] ? J[b] : 0), D = a.axisY.convertValueToPixel(J[b]), p = "undefined" !== typeof e[b] ? e[b] : q, e[b] = D;
                  else if (p = a.axisY.convertValueToPixel(v[m].y), 0 <= v[m].y) {
                    var B = "undefined" !== typeof h[b] ? h[b] : 0;
                    p -= B;
                    D = q - B;
                    h[b] = B + (D - p)
                  } else B =
                    e[b] ? e[b] : 0, D = p + B, p = q + B, e[b] = B + (D - p);
                  b = v[m].color ? v[m].color : r._colorSet[m % r._colorSet.length];
                  ea(c, s, a.axisY.reversed ? D : p, K, a.axisY.reversed ? p : D, b, 0, null, t && (a.axisY.reversed ? 0 > v[m].y : 0 <= v[m].y), (a.axisY.reversed ? 0 <= v[m].y : 0 > v[m].y) && t, !1, !1, r.fillOpacity);
                  b = r.dataPointIds[m];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: m,
                    x1: s,
                    y1: p,
                    x2: K,
                    y2: D
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx, s, p, K, D, b, 0, null, !1, !1, !1, !1);
                  (v[m].indexLabel || r.indexLabel || v[m].indexLabelFormatter ||
                    r.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedColumn",
                    dataPoint: v[m],
                    dataSeries: r,
                    point: {
                      x: n,
                      y: 0 <= v[m].y ? p : D
                    },
                    direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: s,
                      y1: Math.min(p, D),
                      x2: K,
                      y2: Math.max(p, D)
                    },
                    color: b
                  })
                }
            }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
            this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.yScaleAnimation,
            easingFunction: w.easing.easeOutQuart,
            animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
          }
        }
      };
      s.prototype.renderStackedColumn100 = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx :
          f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = [],
            e = [],
            d = [],
            J = [],
            m = 0,
            n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
          var l = a.axisX.dataInfo.minDiff;
          isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
          l = this.options.dataPointWidth ?
            this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && m > n && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && n < m) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
          l < m && (l = m);
          l > n && (l = n);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
            var r = a.dataSeriesIndexes[x],
              k = this.data[r],
              v = k.dataPoints;
            if (0 < v.length)
              for (var t = 5 < l && k.bevelEnabled ? !0 : !1, m = 0; m < v.length; m++)
                if (b = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
                  n = a.axisX.convertValueToPixel(b);
                  p = 0 !== a.dataPointYSums[b] ?
                    100 * (v[m].y / a.dataPointYSums[b]) : 0;
                  var s = n - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                    K = s + l << 0,
                    D;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) {
                    d[b] = p + ("undefined" !== typeof d[b] ? d[b] : 0);
                    if (0 >= d[b]) continue;
                    p = a.axisY.convertValueToPixel(d[b]);
                    D = h[b] ? h[b] : q;
                    h[b] = p
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) J[b] = p + ("undefined" !== typeof J[b] ? J[b] : 0), D = a.axisY.convertValueToPixel(J[b]), p = e[b] ? e[b] : q, e[b] = D;
                  else if (p = a.axisY.convertValueToPixel(p), 0 <= v[m].y) {
                    var B = "undefined" !== typeof h[b] ? h[b] : 0;
                    p -= B;
                    D = q - B;
                    a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.y1 - p) && (p = g.y1);
                    h[b] = B + (D - p)
                  } else B = "undefined" !== typeof e[b] ? e[b] : 0, D = p + B, p = q + B, a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.y2 - D) && (D = g.y2), e[b] = B + (D - p);
                  b = v[m].color ? v[m].color : k._colorSet[m % k._colorSet.length];
                  ea(c, s, a.axisY.reversed ? D : p, K, a.axisY.reversed ? p : D, b, 0, null, t && (a.axisY.reversed ? 0 > v[m].y : 0 <= v[m].y), (a.axisY.reversed ? 0 <= v[m].y : 0 > v[m].y) &&
                    t, !1, !1, k.fillOpacity);
                  b = k.dataPointIds[m];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: r,
                    dataPointIndex: m,
                    x1: s,
                    y1: p,
                    x2: K,
                    y2: D
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx, s, p, K, D, b, 0, null, !1, !1, !1, !1);
                  (v[m].indexLabel || k.indexLabel || v[m].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedColumn100",
                    dataPoint: v[m],
                    dataSeries: k,
                    point: {
                      x: n,
                      y: 0 <= v[m].y ? p : D
                    },
                    direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: s,
                      y1: Math.min(p, D),
                      x2: K,
                      y2: Math.max(p,
                        D)
                    },
                    color: b
                  })
                }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.yScaleAnimation,
            easingFunction: w.easing.easeOutQuart,
            animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
          }
        }
      };
      s.prototype.renderBar = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = 0,
            e, d, J, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ?
            this.dataPointWidth : 1,
            n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
            p = a.axisX.dataInfo.minDiff;
          isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
          p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && h > n && (h =
            Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
          p < h && (p = h);
          p > n && (p = n);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (n = 0; n < a.dataSeriesIndexes.length; n++) {
            var q =
              a.dataSeriesIndexes[n],
              l = this.data[q],
              x = l.dataPoints;
            if (0 < x.length) {
              var k = 5 < p && l.bevelEnabled ? !0 : !1;
              c.strokeStyle = "#4572A7 ";
              for (h = 0; h < x.length; h++)
                if (x[h].getTime ? J = x[h].x.getTime() : J = x[h].x, !(J < a.axisX.dataInfo.viewPortMin || J > a.axisX.dataInfo.viewPortMax) && "number" === typeof x[h].y) {
                  d = a.axisX.convertValueToPixel(J);
                  e = a.axisY.convertValueToPixel(x[h].y);
                  d = a.axisX.reversed ? d + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : d - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount +
                    n) * p << 0;
                  var r = a.axisX.reversed ? d - p << 0 : d + p << 0,
                    v;
                  0 <= x[h].y ? v = m : (v = e, e = m);
                  b = x[h].color ? x[h].color : l._colorSet[h % l._colorSet.length];
                  ea(c, a.axisY.reversed ? e : v, a.axisX.reversed ? r : d, a.axisY.reversed ? v : e, a.axisX.reversed ? d : r, b, 0, null, k, !1, !1, !1, l.fillOpacity);
                  b = l.dataPointIds[h];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: q,
                    dataPointIndex: h,
                    x1: v,
                    y1: d,
                    x2: e,
                    y2: r
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx, v, a.axisX.reversed ? r : d, e, a.axisX.reversed ? d : r, b, 0, null, !1, !1, !1, !1);
                  (x[h].indexLabel ||
                    l.indexLabel || x[h].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "bar",
                    dataPoint: x[h],
                    dataSeries: l,
                    point: {
                      x: 0 <= x[h].y ? e : v,
                      y: d + (r - d) / 2
                    },
                    direction: 0 > x[h].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(v, e),
                      y1: d,
                      x2: Math.max(v, e),
                      y2: r
                    },
                    color: b
                  })
                }
            }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas,
            0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.xScaleAnimation,
            easingFunction: w.easing.easeOutQuart,
            animationBase: m < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : m > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : m
          }
        }
      };
      s.prototype.renderStackedBar = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = [],
            e = [],
            d = [],
            J = [],
            m = 0,
            n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
          var l = a.axisX.dataInfo.minDiff;
          isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
          l =
            this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && m > p && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && p < m) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
          l < m && (l = m);
          l > p && (l = p);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
            var r = a.dataSeriesIndexes[x],
              k = this.data[r],
              v = k.dataPoints;
            if (0 < v.length) {
              var t = 5 < l && k.bevelEnabled ? !0 : !1;
              c.strokeStyle = "#4572A7 ";
              for (m = 0; m < v.length; m++)
                if (b = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" ===
                  typeof v[m].y) {
                  p = a.axisX.convertValueToPixel(b);
                  var s = p - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                    K = s + l << 0,
                    D;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) d[b] = v[m].y + (d[b] ? d[b] : 0), 0 < d[b] && (D = h[b] ? h[b] : q, h[b] = n = a.axisY.convertValueToPixel(d[b]));
                  else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) J[b] = v[m].y + (J[b] ? J[b] : 0), n = e[b] ? e[b] : q, e[b] = D = a.axisY.convertValueToPixel(J[b]);
                  else if (n = a.axisY.convertValueToPixel(v[m].y),
                    0 <= v[m].y) {
                    var B = h[b] ? h[b] : 0;
                    D = q + B;
                    n += B;
                    h[b] = B + (n - D)
                  } else B = e[b] ? e[b] : 0, D = n - B, n = q - B, e[b] = B + (n - D);
                  b = v[m].color ? v[m].color : k._colorSet[m % k._colorSet.length];
                  ea(c, a.axisY.reversed ? n : D, s, a.axisY.reversed ? D : n, K, b, 0, null, t, !1, !1, !1, k.fillOpacity);
                  b = k.dataPointIds[m];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: r,
                    dataPointIndex: m,
                    x1: D,
                    y1: s,
                    x2: n,
                    y2: K
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx, D, s, n, K, b, 0, null, !1, !1, !1, !1);
                  (v[m].indexLabel || k.indexLabel || v[m].indexLabelFormatter ||
                    k.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedBar",
                    dataPoint: v[m],
                    dataSeries: k,
                    point: {
                      x: 0 <= v[m].y ? n : D,
                      y: p
                    },
                    direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(D, n),
                      y1: s,
                      x2: Math.max(D, n),
                      y2: K
                    },
                    color: b
                  })
                }
            }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.xScaleAnimation,
            easingFunction: w.easing.easeOutQuart,
            animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
          }
        }
      };
      s.prototype.renderStackedBar100 = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b =
            null,
            g = this.plotArea,
            h = [],
            e = [],
            d = [],
            J = [],
            m = 0,
            n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            m = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
          var l = a.axisX.dataInfo.minDiff;
          isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
          l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.height * (a.axisX.logarithmic ?
            Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
          this.dataPointMaxWidth && m > p && (m = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && p < m) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, m));
          l < m && (l = m);
          l > p && (l = p);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(),
            this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
            var k = a.dataSeriesIndexes[x],
              r = this.data[k],
              v = r.dataPoints;
            if (0 < v.length) {
              var t = 5 < l && r.bevelEnabled ? !0 : !1;
              c.strokeStyle = "#4572A7 ";
              for (m = 0; m < v.length; m++)
                if (b = v[m].x.getTime ? v[m].x.getTime() : v[m].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof v[m].y) {
                  p = a.axisX.convertValueToPixel(b);
                  var s;
                  s = 0 !== a.dataPointYSums[b] ? 100 *
                    (v[m].y / a.dataPointYSums[b]) : 0;
                  var K = p - a.plotType.plotUnits.length * l / 2 + a.index * l << 0,
                    D = K + l << 0;
                  if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < v[m].y) {
                    d[b] = s + (d[b] ? d[b] : 0);
                    if (0 >= d[b]) continue;
                    s = h[b] ? h[b] : q;
                    h[b] = n = a.axisY.convertValueToPixel(d[b])
                  } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= v[m].y) J[b] = s + (J[b] ? J[b] : 0), n = e[b] ? e[b] : q, e[b] = s = a.axisY.convertValueToPixel(J[b]);
                  else if (n = a.axisY.convertValueToPixel(s), 0 <= v[m].y) {
                    var B =
                      h[b] ? h[b] : 0;
                    s = q + B;
                    n += B;
                    a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.x2 - n) && (n = g.x2);
                    h[b] = B + (n - s)
                  } else B = e[b] ? e[b] : 0, s = n - B, n = q - B, a.dataSeriesIndexes.length - 1 === x && 1 >= Math.abs(g.x1 - s) && (s = g.x1), e[b] = B + (n - s);
                  b = v[m].color ? v[m].color : r._colorSet[m % r._colorSet.length];
                  ea(c, a.axisY.reversed ? n : s, K, a.axisY.reversed ? s : n, D, b, 0, null, t, !1, !1, !1, r.fillOpacity);
                  b = r.dataPointIds[m];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: m,
                    x1: s,
                    y1: K,
                    x2: n,
                    y2: D
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx,
                    s, K, n, D, b, 0, null, !1, !1, !1, !1);
                  (v[m].indexLabel || r.indexLabel || v[m].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stackedBar100",
                    dataPoint: v[m],
                    dataSeries: r,
                    point: {
                      x: 0 <= v[m].y ? n : s,
                      y: p
                    },
                    direction: 0 > v[m].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: Math.min(s, n),
                      y1: K,
                      x2: Math.max(s, n),
                      y2: D
                    },
                    color: b
                  })
                }
            }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
            a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.xScaleAnimation,
            easingFunction: w.easing.easeOutQuart,
            animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
          }
        }
      };
      s.prototype.renderArea =
        function(a) {
          var f, c;
  
          function b() {
            D && (0 < l.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? K = s : 0 > a.axisY.viewportMaximum ? K = d.y1 : 0 < a.axisY.viewportMinimum && (K = s), h.lineTo(t, K), h.lineTo(D.x, K), h.closePath(), h.globalAlpha = l.fillOpacity, h.fill(), h.globalAlpha = 1, u && (e.lineTo(t, K), e.lineTo(D.x, K), e.closePath(), e.fill()), h.beginPath(), h.moveTo(t, v), e.beginPath(), e.moveTo(t, v), D = {
              x: t,
              y: v
            })
          }
          var g = a.targetCanvasCtx || this.plotArea.ctx,
            h = u ? this._preRenderCtx :
            g;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx,
              d = a.axisY.lineCoordinates,
              J = [],
              m = this.plotArea,
              n;
            h.save();
            u && e.save();
            h.beginPath();
            h.rect(m.x1, m.y1, m.width, m.height);
            h.clip();
            u && (e.beginPath(), e.rect(m.x1, m.y1, m.width, m.height), e.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p],
                l = this.data[q],
                x = l.dataPoints,
                J = l.id;
              this._eventManager.objectMap[J] = {
                objectType: "dataSeries",
                dataSeriesIndex: q
              };
              J = V(J);
              e.fillStyle = J;
              J = [];
              f = !0;
              var k = 0,
                t, v, y, s = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                  a.axisY.viewportMinimum : 0),
                K, D = null;
              if (0 < x.length) {
                var B = l._colorSet[k % l._colorSet.length],
                  z = l.lineColor = l.options.lineColor || B,
                  A = z;
                h.fillStyle = B;
                h.strokeStyle = z;
                h.lineWidth = l.lineThickness;
                c = "solid";
                if (h.setLineDash) {
                  var Y = S(l.nullDataLineDashType, l.lineThickness);
                  c = l.lineDashType;
                  var da = S(c, l.lineThickness);
                  h.setLineDash(da)
                }
                for (var ga = !0; k < x.length; k++)
                  if (y = x[k].x.getTime ? x[k].x.getTime() : x[k].x, !(y < a.axisX.dataInfo.viewPortMin || y > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !ga)))
                    if ("number" !==
                      typeof x[k].y) l.connectNullData || (ga || f) || b(), ga = !0;
                    else {
                      t = a.axisX.convertValueToPixel(y);
                      v = a.axisY.convertValueToPixel(x[k].y);
                      f || ga ? (!f && l.connectNullData ? (h.setLineDash && (l.options.nullDataLineDashType || c === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (f = t, c = v, t = n.x, v = n.y, b(), h.moveTo(n.x, n.y), t = f, v = c, D = n, c = l.nullDataLineDashType, h.setLineDash(Y)), h.lineTo(t, v), u && e.lineTo(t, v)) : (h.beginPath(), h.moveTo(t, v), u && (e.beginPath(), e.moveTo(t, v)), D = {
                        x: t,
                        y: v
                      }), ga = f = !1) : (h.lineTo(t, v), u && e.lineTo(t,
                        v), 0 == k % 250 && b());
                      n = {
                        x: t,
                        y: v
                      };
                      k < x.length - 1 && (A !== (x[k].lineColor || z) || c !== (x[k].lineDashType || l.lineDashType)) && (b(), A = x[k].lineColor || z, h.strokeStyle = A, h.setLineDash && (x[k].lineDashType ? (c = x[k].lineDashType, h.setLineDash(S(c, l.lineThickness))) : (c = l.lineDashType, h.setLineDash(da))));
                      var ca = l.dataPointIds[k];
                      this._eventManager.objectMap[ca] = {
                        id: ca,
                        objectType: "dataPoint",
                        dataSeriesIndex: q,
                        dataPointIndex: k,
                        x1: t,
                        y1: v
                      };
                      0 !== x[k].markerSize && (0 < x[k].markerSize || 0 < l.markerSize) && (y = l.getMarkerProperties(k,
                        t, v, h), J.push(y), ca = V(ca), u && J.push({
                        x: t,
                        y: v,
                        ctx: e,
                        type: y.type,
                        size: y.size,
                        color: ca,
                        borderColor: ca,
                        borderThickness: y.borderThickness
                      }));
                      (x[k].indexLabel || l.indexLabel || x[k].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "area",
                        dataPoint: x[k],
                        dataSeries: l,
                        point: {
                          x: t,
                          y: v
                        },
                        direction: 0 > x[k].y === a.axisY.reversed ? 1 : -1,
                        color: B
                      })
                    } b();
                r.drawMarkers(J)
              }
            }
            u && (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
              h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return {
              source: g,
              dest: this.plotArea.ctx,
              animationCallback: w.xClipAnimation,
              easingFunction: w.easing.linear,
              animationBase: 0
            }
          }
        };
      s.prototype.renderSplineArea = function(a) {
        function f() {
          var c =
            G(y, 2);
          if (0 < c.length) {
            if (0 < n.lineThickness) {
              b.beginPath();
              b.moveTo(c[0].x, c[0].y);
              c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
              c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
              for (var f = 0; f < c.length - 3; f += 3)
                if (b.bezierCurveTo(c[f + 1].x, c[f + 1].y, c[f + 2].x, c[f + 2].y, c[f + 3].x, c[f + 3].y), u && g.bezierCurveTo(c[f + 1].x, c[f + 1].y, c[f + 2].x, c[f + 2].y, c[f + 3].x, c[f + 3].y), c[f + 3].newStrokeStyle || c[f + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(c[f + 3].x, c[f + 3].y), c[f + 3].newStrokeStyle && (b.strokeStyle =
                  c[f + 3].newStrokeStyle), c[f + 3].newLineDashArray && b.setLineDash(c[f + 3].newLineDashArray);
              b.stroke()
            }
            b.beginPath();
            b.moveTo(c[0].x, c[0].y);
            u && (g.beginPath(), g.moveTo(c[0].x, c[0].y));
            for (f = 0; f < c.length - 3; f += 3) b.bezierCurveTo(c[f + 1].x, c[f + 1].y, c[f + 2].x, c[f + 2].y, c[f + 3].x, c[f + 3].y), u && g.bezierCurveTo(c[f + 1].x, c[f + 1].y, c[f + 2].x, c[f + 2].y, c[f + 3].x, c[f + 3].y);
            a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t = k : 0 > a.axisY.viewportMaximum ? t = h.y1 : 0 < a.axisY.viewportMinimum && (t = k);
            v = {
              x: c[0].x,
              y: c[0].y
            };
            b.lineTo(c[c.length - 1].x, t);
            b.lineTo(v.x, t);
            b.closePath();
            b.globalAlpha = n.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            u && (g.lineTo(c[c.length - 1].x, t), g.lineTo(v.x, t), g.closePath(), g.fill())
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx,
          b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = this._eventManager.ghostCtx,
            h = a.axisY.lineCoordinates,
            e = [],
            d = this.plotArea;
          b.save();
          u && g.save();
          b.beginPath();
          b.rect(d.x1, d.y1, d.width, d.height);
          b.clip();
          u && (g.beginPath(), g.rect(d.x1, d.y1, d.width,
            d.height), g.clip());
          for (var J = 0; J < a.dataSeriesIndexes.length; J++) {
            var m = a.dataSeriesIndexes[J],
              n = this.data[m],
              p = n.dataPoints,
              e = n.id;
            this._eventManager.objectMap[e] = {
              objectType: "dataSeries",
              dataSeriesIndex: m
            };
            e = V(e);
            g.fillStyle = e;
            var e = [],
              q = 0,
              l, x, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
              t, v = null,
              y = [];
            if (0 < p.length) {
              var s = n._colorSet[q % n._colorSet.length],
                K = n.lineColor = n.options.lineColor || s,
                D = K;
              b.fillStyle = s;
              b.strokeStyle = K;
              b.lineWidth = n.lineThickness;
              var B = "solid";
              if (b.setLineDash) {
                var z = S(n.nullDataLineDashType, n.lineThickness),
                  B = n.lineDashType,
                  A = S(B, n.lineThickness);
                b.setLineDash(A)
              }
              for (x = !1; q < p.length; q++)
                if (l = p[q].x.getTime ? p[q].x.getTime() : p[q].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !x)))
                  if ("number" !== typeof p[q].y) 0 < q && !x && (n.connectNullData ? b.setLineDash && (0 < y.length && (n.options.nullDataLineDashType || !p[q - 1].lineDashType)) && (y[y.length - 1].newLineDashArray = z, B = n.nullDataLineDashType) : (f(), y = [])), x = !0;
                  else {
                    l = a.axisX.convertValueToPixel(l);
                    x = a.axisY.convertValueToPixel(p[q].y);
                    var Y = n.dataPointIds[q];
                    this._eventManager.objectMap[Y] = {
                      id: Y,
                      objectType: "dataPoint",
                      dataSeriesIndex: m,
                      dataPointIndex: q,
                      x1: l,
                      y1: x
                    };
                    y[y.length] = {
                      x: l,
                      y: x
                    };
                    q < p.length - 1 && (D !== (p[q].lineColor || K) || B !== (p[q].lineDashType || n.lineDashType)) && (D = p[q].lineColor || K, y[y.length - 1].newStrokeStyle = D, b.setLineDash && (p[q].lineDashType ? (B = p[q].lineDashType, y[y.length - 1].newLineDashArray = S(B, n.lineThickness)) : (B = n.lineDashType, y[y.length - 1].newLineDashArray =
                      A)));
                    if (0 !== p[q].markerSize && (0 < p[q].markerSize || 0 < n.markerSize)) {
                      var da = n.getMarkerProperties(q, l, x, b);
                      e.push(da);
                      Y = V(Y);
                      u && e.push({
                        x: l,
                        y: x,
                        ctx: g,
                        type: da.type,
                        size: da.size,
                        color: Y,
                        borderColor: Y,
                        borderThickness: da.borderThickness
                      })
                    }(p[q].indexLabel || n.indexLabel || p[q].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "splineArea",
                      dataPoint: p[q],
                      dataSeries: n,
                      point: {
                        x: l,
                        y: x
                      },
                      direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1,
                      color: s
                    });
                    x = !1
                  } f();
              r.drawMarkers(e)
            }
          }
          u && (c.drawImage(this._preRenderCanvas,
            0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
          b.restore();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderStepArea = function(a) {
        var f, c;
  
        function b() {
          D && (0 < l.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? K = s : 0 > a.axisY.viewportMaximum ? K = d.y1 : 0 < a.axisY.viewportMinimum && (K = s), h.lineTo(t, K), h.lineTo(D.x, K), h.closePath(), h.globalAlpha = l.fillOpacity, h.fill(), h.globalAlpha = 1, u && (e.lineTo(t, K), e.lineTo(D.x, K), e.closePath(), e.fill()), h.beginPath(), h.moveTo(t, v), e.beginPath(), e.moveTo(t, v), D = {
            x: t,
            y: v
          })
        }
        var g = a.targetCanvasCtx ||
          this.plotArea.ctx,
          h = u ? this._preRenderCtx : g;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var e = this._eventManager.ghostCtx,
            d = a.axisY.lineCoordinates,
            J = [],
            m = this.plotArea,
            n;
          h.save();
          u && e.save();
          h.beginPath();
          h.rect(m.x1, m.y1, m.width, m.height);
          h.clip();
          u && (e.beginPath(), e.rect(m.x1, m.y1, m.width, m.height), e.clip());
          for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
            var q = a.dataSeriesIndexes[p],
              l = this.data[q],
              x = l.dataPoints,
              J = l.id;
            this._eventManager.objectMap[J] = {
              objectType: "dataSeries",
              dataSeriesIndex: q
            };
            J = V(J);
            e.fillStyle =
              J;
            J = [];
            f = !0;
            var k = 0,
              t, v, y, s = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
              K, D = null;
            c = !1;
            if (0 < x.length) {
              var B = l._colorSet[k % l._colorSet.length],
                z = l.lineColor = l.options.lineColor || B,
                A = z;
              h.fillStyle = B;
              h.strokeStyle = z;
              h.lineWidth = l.lineThickness;
              var Y = "solid";
              if (h.setLineDash) {
                var da = S(l.nullDataLineDashType, l.lineThickness),
                  Y = l.lineDashType,
                  ga = S(Y, l.lineThickness);
                h.setLineDash(ga)
              }
              for (; k < x.length; k++)
                if (y = x[k].x.getTime ? x[k].x.getTime() : x[k].x, !(y < a.axisX.dataInfo.viewPortMin ||
                    y > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !c))) {
                  var ca = v;
                  "number" !== typeof x[k].y ? (l.connectNullData || (c || f) || b(), c = !0) : (t = a.axisX.convertValueToPixel(y), v = a.axisY.convertValueToPixel(x[k].y), f || c ? (!f && l.connectNullData ? (h.setLineDash && (l.options.nullDataLineDashType || Y === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (f = t, c = v, t = n.x, v = n.y, b(), h.moveTo(n.x, n.y), t = f, v = c, D = n, Y = l.nullDataLineDashType, h.setLineDash(da)), h.lineTo(t, ca), h.lineTo(t, v), u && (e.lineTo(t, ca), e.lineTo(t, v))) :
                    (h.beginPath(), h.moveTo(t, v), u && (e.beginPath(), e.moveTo(t, v)), D = {
                      x: t,
                      y: v
                    }), c = f = !1) : (h.lineTo(t, ca), u && e.lineTo(t, ca), h.lineTo(t, v), u && e.lineTo(t, v), 0 == k % 250 && b()), n = {
                    x: t,
                    y: v
                  }, k < x.length - 1 && (A !== (x[k].lineColor || z) || Y !== (x[k].lineDashType || l.lineDashType)) && (b(), A = x[k].lineColor || z, h.strokeStyle = A, h.setLineDash && (x[k].lineDashType ? (Y = x[k].lineDashType, h.setLineDash(S(Y, l.lineThickness))) : (Y = l.lineDashType, h.setLineDash(ga)))), y = l.dataPointIds[k], this._eventManager.objectMap[y] = {
                    id: y,
                    objectType: "dataPoint",
                    dataSeriesIndex: q,
                    dataPointIndex: k,
                    x1: t,
                    y1: v
                  }, 0 !== x[k].markerSize && (0 < x[k].markerSize || 0 < l.markerSize) && (ca = l.getMarkerProperties(k, t, v, h), J.push(ca), y = V(y), u && J.push({
                    x: t,
                    y: v,
                    ctx: e,
                    type: ca.type,
                    size: ca.size,
                    color: y,
                    borderColor: y,
                    borderThickness: ca.borderThickness
                  })), (x[k].indexLabel || l.indexLabel || x[k].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "stepArea",
                    dataPoint: x[k],
                    dataSeries: l,
                    point: {
                      x: t,
                      y: v
                    },
                    direction: 0 > x[k].y === a.axisY.reversed ? 1 : -1,
                    color: B
                  }))
                } b();
              r.drawMarkers(J)
            }
          }
          u &&
            (g.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(m.x1, m.y1, m.width, m.height), this._eventManager.ghostCtx.restore());
          h.restore();
          return {
            source: g,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderStackedArea = function(a) {
        function f() {
          if (!(1 > m.length)) {
            for (0 < B.lineThickness && b.stroke(); 0 < m.length;) {
              var a = m.pop();
              b.lineTo(a.x, a.y);
              u && s.lineTo(a.x, a.y)
            }
            b.closePath();
            b.globalAlpha = B.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            u && (s.closePath(), s.fill(), s.beginPath());
            m = []
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx,
          b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = null,
            h = null,
            e = [],
            d = this.plotArea,
            k = [],
            m = [],
            n = [],
            p = [],
            q = 0,
            l, x, t = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            s = this._eventManager.ghostCtx,
            v, y, R;
          u && s.beginPath();
          b.save();
          u && s.save();
          b.beginPath();
          b.rect(d.x1, d.y1, d.width, d.height);
          b.clip();
          u && (s.beginPath(), s.rect(d.x1, d.y1, d.width, d.height), s.clip());
          for (var g = [], K = 0; K < a.dataSeriesIndexes.length; K++) {
            var D = a.dataSeriesIndexes[K],
              B = this.data[D],
              z = B.dataPoints;
            B.dataPointIndexes = [];
            for (q = 0; q < z.length; q++) D = z[q].x.getTime ? z[q].x.getTime() : z[q].x, B.dataPointIndexes[D] =
              q, g[D] || (n.push(D), g[D] = !0);
            n.sort(Xa)
          }
          for (K = 0; K < a.dataSeriesIndexes.length; K++) {
            D = a.dataSeriesIndexes[K];
            B = this.data[D];
            z = B.dataPoints;
            y = !0;
            m = [];
            q = B.id;
            this._eventManager.objectMap[q] = {
              objectType: "dataSeries",
              dataSeriesIndex: D
            };
            q = V(q);
            s.fillStyle = q;
            if (0 < n.length) {
              var g = B._colorSet[0],
                A = B.lineColor = B.options.lineColor || g,
                Y = A;
              b.fillStyle = g;
              b.strokeStyle = A;
              b.lineWidth = B.lineThickness;
              R = "solid";
              if (b.setLineDash) {
                var da = S(B.nullDataLineDashType, B.lineThickness);
                R = B.lineDashType;
                var ga = S(R, B.lineThickness);
                b.setLineDash(ga)
              }
              for (var ca = !0, q = 0; q < n.length; q++) {
                var h = n[q],
                  na = null,
                  na = 0 <= B.dataPointIndexes[h] ? z[B.dataPointIndexes[h]] : {
                    x: h,
                    y: null
                  };
                if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ca)))
                  if ("number" !== typeof na.y) B.connectNullData || (ca || y) || f(), ca = !0;
                  else {
                    l = a.axisX.convertValueToPixel(h);
                    var wa = k[h] ? k[h] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      p[h] = na.y + (p[h] ? p[h] : 0);
                      if (0 >= p[h] && a.axisY.logarithmic) continue;
                      x = a.axisY.convertValueToPixel(p[h])
                    } else x = a.axisY.convertValueToPixel(na.y), x -= wa;
                    m.push({
                      x: l,
                      y: t - wa
                    });
                    k[h] = t - x;
                    y || ca ? (!y && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || R === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (y = m.pop(), R = m[m.length - 1], f(), b.moveTo(v.x, v.y), m.push(R), m.push(y), R = B.nullDataLineDashType, b.setLineDash(da)), b.lineTo(l, x), u && s.lineTo(l, x)) : (b.beginPath(), b.moveTo(l, x), u && (s.beginPath(), s.moveTo(l, x))), ca = y = !1) : (b.lineTo(l, x), u && s.lineTo(l, x),
                      0 == q % 250 && (f(), b.moveTo(l, x), u && s.moveTo(l, x), m.push({
                        x: l,
                        y: t - wa
                      })));
                    v = {
                      x: l,
                      y: x
                    };
                    q < z.length - 1 && (Y !== (z[q].lineColor || A) || R !== (z[q].lineDashType || B.lineDashType)) && (f(), b.beginPath(), b.moveTo(l, x), m.push({
                      x: l,
                      y: t - wa
                    }), Y = z[q].lineColor || A, b.strokeStyle = Y, b.setLineDash && (z[q].lineDashType ? (R = z[q].lineDashType, b.setLineDash(S(R, B.lineThickness))) : (R = B.lineDashType, b.setLineDash(ga))));
                    if (0 <= B.dataPointIndexes[h]) {
                      var qa = B.dataPointIds[B.dataPointIndexes[h]];
                      this._eventManager.objectMap[qa] = {
                        id: qa,
                        objectType: "dataPoint",
                        dataSeriesIndex: D,
                        dataPointIndex: B.dataPointIndexes[h],
                        x1: l,
                        y1: x
                      }
                    }
                    0 <= B.dataPointIndexes[h] && 0 !== na.markerSize && (0 < na.markerSize || 0 < B.markerSize) && (wa = B.getMarkerProperties(B.dataPointIndexes[h], l, x, b), e.push(wa), h = V(qa), u && e.push({
                      x: l,
                      y: x,
                      ctx: s,
                      type: wa.type,
                      size: wa.size,
                      color: h,
                      borderColor: h,
                      borderThickness: wa.borderThickness
                    }));
                    (na.indexLabel || B.indexLabel || na.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedArea",
                      dataPoint: na,
                      dataSeries: B,
                      point: {
                        x: l,
                        y: x
                      },
                      direction: 0 >
                        z[q].y === a.axisY.reversed ? 1 : -1,
                      color: g
                    })
                  }
              }
              f();
              b.moveTo(l, x);
              u && s.moveTo(l, x)
            }
            delete B.dataPointIndexes
          }
          r.drawMarkers(e);
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(d.x1,
            d.y1, d.width, d.height), s.restore());
          b.restore();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderStackedArea100 = function(a) {
        function f() {
          for (0 < B.lineThickness && b.stroke(); 0 < m.length;) {
            var a = m.pop();
            b.lineTo(a.x, a.y);
            u && R.lineTo(a.x, a.y)
          }
          b.closePath();
          b.globalAlpha = B.fillOpacity;
          b.fill();
          b.globalAlpha = 1;
          b.beginPath();
          u && (R.closePath(), R.fill(), R.beginPath());
          m = []
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx,
          b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = null,
            h = null,
            e = this.plotArea,
            d = [],
            k = [],
            m = [],
            n = [],
            p = [],
            q = 0,
            l, x, t, s, v, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            R = this._eventManager.ghostCtx;
          b.save();
          u && R.save();
          b.beginPath();
          b.rect(e.x1, e.y1, e.width, e.height);
          b.clip();
          u && (R.beginPath(), R.rect(e.x1, e.y1, e.width, e.height), R.clip());
          for (var g = [], K = 0; K < a.dataSeriesIndexes.length; K++) {
            var D = a.dataSeriesIndexes[K],
              B = this.data[D],
              z = B.dataPoints;
            B.dataPointIndexes = [];
            for (q = 0; q < z.length; q++) D = z[q].x.getTime ? z[q].x.getTime() : z[q].x, B.dataPointIndexes[D] = q, g[D] || (n.push(D), g[D] = !0);
            n.sort(Xa)
          }
          for (K = 0; K < a.dataSeriesIndexes.length; K++) {
            D = a.dataSeriesIndexes[K];
            B = this.data[D];
            z = B.dataPoints;
            s = !0;
            g = B.id;
            this._eventManager.objectMap[g] = {
              objectType: "dataSeries",
              dataSeriesIndex: D
            };
            g = V(g);
            R.fillStyle = g;
            m = [];
            if (0 < n.length) {
              var g = B._colorSet[q % B._colorSet.length],
                A = B.lineColor = B.options.lineColor || g,
                Y = A;
              b.fillStyle = g;
              b.strokeStyle = A;
              b.lineWidth = B.lineThickness;
              v = "solid";
              if (b.setLineDash) {
                var da = S(B.nullDataLineDashType, B.lineThickness);
                v = B.lineDashType;
                var ga = S(v, B.lineThickness);
                b.setLineDash(ga)
              }
              for (var ca = !0, q = 0; q < n.length; q++) {
                var h = n[q],
                  na = null,
                  na = 0 <= B.dataPointIndexes[h] ? z[B.dataPointIndexes[h]] : {
                    x: h,
                    y: null
                  };
                if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ca)))
                  if ("number" !== typeof na.y) B.connectNullData || (ca || s) || f(), ca = !0;
                  else {
                    var wa;
                    wa = 0 !== a.dataPointYSums[h] ? 100 * (na.y / a.dataPointYSums[h]) : 0;
                    l = a.axisX.convertValueToPixel(h);
                    var qa = k[h] ? k[h] : 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                      p[h] = wa + (p[h] ? p[h] : 0);
                      if (0 >= p[h] && a.axisY.logarithmic) continue;
                      x = a.axisY.convertValueToPixel(p[h])
                    } else x = a.axisY.convertValueToPixel(wa), x -= qa;
                    m.push({
                      x: l,
                      y: y - qa
                    });
                    k[h] = y - x;
                    s || ca ? (!s && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || v === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (s = m.pop(), v = m[m.length - 1], f(), b.moveTo(t.x, t.y), m.push(v), m.push(s), v = B.nullDataLineDashType,
                      b.setLineDash(da)), b.lineTo(l, x), u && R.lineTo(l, x)) : (b.beginPath(), b.moveTo(l, x), u && (R.beginPath(), R.moveTo(l, x))), ca = s = !1) : (b.lineTo(l, x), u && R.lineTo(l, x), 0 == q % 250 && (f(), b.moveTo(l, x), u && R.moveTo(l, x), m.push({
                      x: l,
                      y: y - qa
                    })));
                    t = {
                      x: l,
                      y: x
                    };
                    q < z.length - 1 && (Y !== (z[q].lineColor || A) || v !== (z[q].lineDashType || B.lineDashType)) && (f(), b.beginPath(), b.moveTo(l, x), m.push({
                      x: l,
                      y: y - qa
                    }), Y = z[q].lineColor || A, b.strokeStyle = Y, b.setLineDash && (z[q].lineDashType ? (v = z[q].lineDashType, b.setLineDash(S(v, B.lineThickness))) : (v =
                      B.lineDashType, b.setLineDash(ga))));
                    if (0 <= B.dataPointIndexes[h]) {
                      var H = B.dataPointIds[B.dataPointIndexes[h]];
                      this._eventManager.objectMap[H] = {
                        id: H,
                        objectType: "dataPoint",
                        dataSeriesIndex: D,
                        dataPointIndex: B.dataPointIndexes[h],
                        x1: l,
                        y1: x
                      }
                    }
                    0 <= B.dataPointIndexes[h] && 0 !== na.markerSize && (0 < na.markerSize || 0 < B.markerSize) && (qa = B.getMarkerProperties(q, l, x, b), d.push(qa), h = V(H), u && d.push({
                      x: l,
                      y: x,
                      ctx: R,
                      type: qa.type,
                      size: qa.size,
                      color: h,
                      borderColor: h,
                      borderThickness: qa.borderThickness
                    }));
                    (na.indexLabel || B.indexLabel ||
                      na.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedArea100",
                      dataPoint: na,
                      dataSeries: B,
                      point: {
                        x: l,
                        y: x
                      },
                      direction: 0 > z[q].y === a.axisY.reversed ? 1 : -1,
                      color: g
                    })
                  }
              }
              f();
              b.moveTo(l, x);
              u && R.moveTo(l, x)
            }
            delete B.dataPointIndexes
          }
          r.drawMarkers(d);
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas,
            0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), R.restore());
          b.restore();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderBubble = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this.plotArea,
            g = 0,
            h, e;
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(b.x1, b.y1, b.width, b.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
          for (var d = -Infinity, k = Infinity, m = 0; m < a.dataSeriesIndexes.length; m++)
            for (var n = a.dataSeriesIndexes[m], p = this.data[n], q = p.dataPoints, l = 0, g = 0; g < q.length; g++) h = q[g].getTime ? h = q[g].x.getTime() : h = q[g].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" ===
              typeof q[g].z || (l = q[g].z, l > d && (d = l), l < k && (k = l));
          for (var x = 25 * Math.PI, t = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, x), m = 0; m < a.dataSeriesIndexes.length; m++)
            if (n = a.dataSeriesIndexes[m], p = this.data[n], q = p.dataPoints, 0 < q.length)
              for (c.strokeStyle = "#4572A7 ", g = 0; g < q.length; g++)
                if (h = q[g].getTime ? h = q[g].x.getTime() : h = q[g].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[g].y) {
                  h = a.axisX.convertValueToPixel(h);
                  e = a.axisY.convertValueToPixel(q[g].y);
                  var l = q[g].z,
                    s = 2 * Math.max(Math.sqrt((d === k ? t / 2 : x + (t - x) / (d - k) * (l - k)) / Math.PI) << 0, 1),
                    l = p.getMarkerProperties(g, c);
                  l.size = s;
                  c.globalAlpha = p.fillOpacity;
                  r.drawMarker(h, e, c, l.type, l.size, l.color, l.borderColor, l.borderThickness);
                  c.globalAlpha = 1;
                  var v = p.dataPointIds[g];
                  this._eventManager.objectMap[v] = {
                    id: v,
                    objectType: "dataPoint",
                    dataSeriesIndex: n,
                    dataPointIndex: g,
                    x1: h,
                    y1: e,
                    size: s
                  };
                  s = V(v);
                  u && r.drawMarker(h, e, this._eventManager.ghostCtx, l.type, l.size, s, s, l.borderThickness);
                  (q[g].indexLabel || p.indexLabel ||
                    q[g].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "bubble",
                    dataPoint: q[g],
                    dataSeries: p,
                    point: {
                      x: h,
                      y: e
                    },
                    direction: 1,
                    bounds: {
                      x1: h - l.size / 2,
                      y1: e - l.size / 2,
                      x2: h + l.size / 2,
                      y2: e + l.size / 2
                    },
                    color: null
                  })
                } u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
            this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.fadeInAnimation,
            easingFunction: w.easing.easeInQuad,
            animationBase: 0
          }
        }
      };
      s.prototype.renderScatter = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this.plotArea,
            g = 0,
            h, e;
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(b.x1, b.y1, b.width, b.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
          for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
            var k = a.dataSeriesIndexes[d],
              m = this.data[k],
              n = m.dataPoints;
            if (0 < n.length) {
              c.strokeStyle = "#4572A7 ";
              Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
              for (var p = 0, q = 0, g = 0; g < n.length; g++)
                if (h = n[g].getTime ? h = n[g].x.getTime() : h = n[g].x, !(h < a.axisX.dataInfo.viewPortMin ||
                    h > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[g].y) {
                  h = a.axisX.convertValueToPixel(h);
                  e = a.axisY.convertValueToPixel(n[g].y);
                  var l = m.getMarkerProperties(g, h, e, c);
                  c.globalAlpha = m.fillOpacity;
                  r.drawMarker(l.x, l.y, l.ctx, l.type, l.size, l.color, l.borderColor, l.borderThickness);
                  c.globalAlpha = 1;
                  Math.sqrt((p - h) * (p - h) + (q - e) * (q - e)) < Math.min(l.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = m.dataPointIds[g], this._eventManager.objectMap[p] = {
                    id: p,
                    objectType: "dataPoint",
                    dataSeriesIndex: k,
                    dataPointIndex: g,
                    x1: h,
                    y1: e
                  }, p = V(p), u && r.drawMarker(l.x, l.y, this._eventManager.ghostCtx, l.type, l.size, p, p, l.borderThickness), (n[g].indexLabel || m.indexLabel || n[g].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "scatter",
                    dataPoint: n[g],
                    dataSeries: m,
                    point: {
                      x: h,
                      y: e
                    },
                    direction: 1,
                    bounds: {
                      x1: h - l.size / 2,
                      y1: e - l.size / 2,
                      x2: h + l.size / 2,
                      y2: e + l.size / 2
                    },
                    color: null
                  }), p = h, q = e)
                }
            }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop",
            a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.fadeInAnimation,
            easingFunction: w.easing.easeInQuad,
            animationBase: 0
          }
        }
      };
      s.prototype.renderCandlestick =
        function(a) {
          var f = a.targetCanvasCtx || this.plotArea.ctx,
            c = u ? this._preRenderCtx : f,
            b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var g = null,
              h = null,
              d = this.plotArea,
              k = 0,
              t, m, n, p, q, l, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
              h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
              x = a.axisX.dataInfo.minDiff;
            isFinite(x) || (x = 0.3 * Math.abs(a.axisX.range));
            x = this.options.dataPointWidth ?
              this.dataPointWidth : 0.7 * d.width * (a.axisX.logarithmic ? Math.log(x) / Math.log(a.axisX.range) : Math.abs(x) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && g > h && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            x < g && (x = g);
            x > h && (x = h);
            c.save();
            u && b.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (b.beginPath(), b.rect(d.x1, d.y1, d.width,
              d.height), b.clip());
            for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
              var s = a.dataSeriesIndexes[r],
                v = this.data[s],
                y = v.dataPoints;
              if (0 < y.length)
                for (var R = 5 < x && v.bevelEnabled ? !0 : !1, k = 0; k < y.length; k++)
                  if (y[k].getTime ? l = y[k].x.getTime() : l = y[k].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && !e(y[k].y) && y[k].y.length && "number" === typeof y[k].y[0] && "number" === typeof y[k].y[1] && "number" === typeof y[k].y[2] && "number" === typeof y[k].y[3]) {
                    t = a.axisX.convertValueToPixel(l);
                    m = a.axisY.convertValueToPixel(y[k].y[0]);
                    n = a.axisY.convertValueToPixel(y[k].y[1]);
                    p = a.axisY.convertValueToPixel(y[k].y[2]);
                    q = a.axisY.convertValueToPixel(y[k].y[3]);
                    var K = t - x / 2 << 0,
                      D = K + x << 0,
                      h = v.options.fallingColor ? v.fallingColor : v._colorSet[0],
                      g = y[k].color ? y[k].color : v._colorSet[0],
                      B = Math.round(Math.max(1, 0.15 * x)),
                      z = 0 === B % 2 ? 0 : 0.5,
                      A = v.dataPointIds[k];
                    this._eventManager.objectMap[A] = {
                      id: A,
                      objectType: "dataPoint",
                      dataSeriesIndex: s,
                      dataPointIndex: k,
                      x1: K,
                      y1: m,
                      x2: D,
                      y2: n,
                      x3: t,
                      y3: p,
                      x4: t,
                      y4: q,
                      borderThickness: B,
                      color: g
                    };
                    c.strokeStyle = g;
                    c.beginPath();
                    c.lineWidth = B;
                    b.lineWidth = Math.max(B, 4);
                    "candlestick" === v.type ? (c.moveTo(t - z, n), c.lineTo(t - z, Math.min(m, q)), c.stroke(), c.moveTo(t - z, Math.max(m, q)), c.lineTo(t - z, p), c.stroke(), ea(c, K, Math.min(m, q), D, Math.max(m, q), y[k].y[0] <= y[k].y[3] ? v.risingColor : h, B, g, R, R, !1, !1, v.fillOpacity), u && (g = V(A), b.strokeStyle = g, b.moveTo(t - z, n), b.lineTo(t - z, Math.min(m, q)), b.stroke(), b.moveTo(t - z, Math.max(m, q)), b.lineTo(t - z, p), b.stroke(), ea(b, K, Math.min(m, q), D, Math.max(m, q), g, 0, null, !1, !1, !1, !1))) : "ohlc" === v.type && (c.moveTo(t -
                      z, n), c.lineTo(t - z, p), c.stroke(), c.beginPath(), c.moveTo(t, m), c.lineTo(K, m), c.stroke(), c.beginPath(), c.moveTo(t, q), c.lineTo(D, q), c.stroke(), u && (g = V(A), b.strokeStyle = g, b.moveTo(t - z, n), b.lineTo(t - z, p), b.stroke(), b.beginPath(), b.moveTo(t, m), b.lineTo(K, m), b.stroke(), b.beginPath(), b.moveTo(t, q), b.lineTo(D, q), b.stroke()));
                    (y[k].indexLabel || v.indexLabel || y[k].indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({
                      chartType: v.type,
                      dataPoint: y[k],
                      dataSeries: v,
                      point: {
                        x: K + (D - K) / 2,
                        y: a.axisY.reversed ?
                          p : n
                      },
                      direction: 1,
                      bounds: {
                        x1: K,
                        y1: Math.min(n, p),
                        x2: D,
                        y2: Math.max(n, p)
                      },
                      color: g
                    })
                  }
            }
            u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), b.restore());
            c.restore();
            return {
              source: f,
              dest: this.plotArea.ctx,
              animationCallback: w.fadeInAnimation,
              easingFunction: w.easing.easeInQuad,
              animationBase: 0
            }
          }
        };
      s.prototype.renderBoxAndWhisker = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f,
          b = this._eventManager.ghostCtx;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = null,
            h = this.plotArea,
            d = 0,
            k, t, m, n, p, q, l, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
            d = this.options.dataPointMaxWidth ?
            this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
            x = a.axisX.dataInfo.minDiff;
          isFinite(x) || (x = 0.3 * Math.abs(a.axisX.range));
          x = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(x) / Math.log(a.axisX.range) : Math.abs(x) / Math.abs(a.axisX.range)) << 0;
          this.dataPointMaxWidth && g > d && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && d < g) && (d = Math.max(this.options.dataPointWidth ?
            this.dataPointWidth : -Infinity, g));
          x < g && (x = g);
          x > d && (x = d);
          c.save();
          u && b.save();
          c.beginPath();
          c.rect(h.x1, h.y1, h.width, h.height);
          c.clip();
          u && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
          for (var r = !1, r = !!a.axisY.reversed, s = 0; s < a.dataSeriesIndexes.length; s++) {
            var v = a.dataSeriesIndexes[s],
              y = this.data[v],
              R = y.dataPoints;
            if (0 < R.length)
              for (var z = 5 < x && y.bevelEnabled ? !0 : !1, d = 0; d < R.length; d++)
                if (R[d].getTime ? l = R[d].x.getTime() : l = R[d].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) &&
                  !e(R[d].y) && R[d].y.length && "number" === typeof R[d].y[0] && "number" === typeof R[d].y[1] && "number" === typeof R[d].y[2] && "number" === typeof R[d].y[3] && "number" === typeof R[d].y[4] && 5 === R[d].y.length) {
                  k = a.axisX.convertValueToPixel(l);
                  t = a.axisY.convertValueToPixel(R[d].y[0]);
                  m = a.axisY.convertValueToPixel(R[d].y[1]);
                  n = a.axisY.convertValueToPixel(R[d].y[2]);
                  p = a.axisY.convertValueToPixel(R[d].y[3]);
                  q = a.axisY.convertValueToPixel(R[d].y[4]);
                  var D = k - x / 2 << 0,
                    B = k + x / 2 << 0,
                    g = R[d].color ? R[d].color : y._colorSet[0],
                    A = Math.round(Math.max(1,
                      0.15 * x)),
                    F = 0 === A % 2 ? 0 : 0.5,
                    Y = R[d].whiskerColor ? R[d].whiskerColor : R[d].color ? y.whiskerColor ? y.whiskerColor : R[d].color : y.whiskerColor ? y.whiskerColor : g,
                    da = "number" === typeof R[d].whiskerThickness ? R[d].whiskerThickness : "number" === typeof y.options.whiskerThickness ? y.whiskerThickness : A,
                    ga = R[d].whiskerDashType ? R[d].whiskerDashType : y.whiskerDashType,
                    ca = e(R[d].whiskerLength) ? e(y.options.whiskerLength) ? x : y.whiskerLength : R[d].whiskerLength,
                    ca = "number" === typeof ca ? 0 >= ca ? 0 : ca >= x ? x : ca : "string" === typeof ca ? parseInt(ca) *
                    x / 100 > x ? x : parseInt(ca) * x / 100 : x,
                    na = 1 === Math.round(da) % 2 ? 0.5 : 0,
                    wa = R[d].stemColor ? R[d].stemColor : R[d].color ? y.stemColor ? y.stemColor : R[d].color : y.stemColor ? y.stemColor : g,
                    qa = "number" === typeof R[d].stemThickness ? R[d].stemThickness : "number" === typeof y.options.stemThickness ? y.stemThickness : A,
                    H = 1 === Math.round(qa) % 2 ? 0.5 : 0,
                    E = R[d].stemDashType ? R[d].stemDashType : y.stemDashType,
                    G = R[d].lineColor ? R[d].lineColor : R[d].color ? y.lineColor ? y.lineColor : R[d].color : y.lineColor ? y.lineColor : g,
                    L = "number" === typeof R[d].lineThickness ?
                    R[d].lineThickness : "number" === typeof y.options.lineThickness ? y.lineThickness : A,
                    M = R[d].lineDashType ? R[d].lineDashType : y.lineDashType,
                    T = 1 === Math.round(L) % 2 ? 0.5 : 0,
                    Q = y.upperBoxColor,
                    N = y.lowerBoxColor,
                    P = e(y.options.fillOpacity) ? 1 : y.fillOpacity,
                    U = y.dataPointIds[d];
                  this._eventManager.objectMap[U] = {
                    id: U,
                    objectType: "dataPoint",
                    dataSeriesIndex: v,
                    dataPointIndex: d,
                    x1: D,
                    y1: t,
                    x2: B,
                    y2: m,
                    x3: k,
                    y3: n,
                    x4: k,
                    y4: p,
                    y5: q,
                    borderThickness: A,
                    color: g,
                    stemThickness: qa,
                    stemColor: wa,
                    whiskerThickness: da,
                    whiskerLength: ca,
                    whiskerColor: Y,
                    lineThickness: L,
                    lineColor: G
                  };
                  c.save();
                  0 < qa && (c.beginPath(), c.strokeStyle = wa, c.lineWidth = qa, c.setLineDash && c.setLineDash(S(E, qa)), c.moveTo(k - H, m), c.lineTo(k - H, t), c.stroke(), c.moveTo(k - H, p), c.lineTo(k - H, n), c.stroke());
                  c.restore();
                  b.lineWidth = Math.max(A, 4);
                  c.beginPath();
                  ea(c, D, Math.min(q, m), B, Math.max(m, q), N, 0, g, r ? z : !1, r ? !1 : z, !1, !1, P);
                  c.beginPath();
                  ea(c, D, Math.min(n, q), B, Math.max(q, n), Q, 0, g, r ? !1 : z, r ? z : !1, !1, !1, P);
                  c.beginPath();
                  c.lineWidth = A;
                  c.strokeStyle = g;
                  c.rect(D - F, Math.min(m, n) - F, B - D + 2 * F, Math.max(m,
                    n) - Math.min(m, n) + 2 * F);
                  c.stroke();
                  c.save();
                  0 < L && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(S(M, L)), c.strokeStyle = G, c.lineWidth = L, c.moveTo(D, q - T), c.lineTo(B, q - T), c.stroke());
                  c.restore();
                  c.save();
                  0 < da && (c.beginPath(), c.setLineDash && c.setLineDash(S(ga, da)), c.strokeStyle = Y, c.lineWidth = da, c.moveTo(k - ca / 2 << 0, p - na), c.lineTo(k + ca / 2 << 0, p - na), c.stroke(), c.moveTo(k - ca / 2 << 0, t + na), c.lineTo(k + ca / 2 << 0, t + na), c.stroke());
                  c.restore();
                  u && (g = V(U), b.strokeStyle = g, b.lineWidth = qa, 0 < qa && (b.moveTo(k - F - H, m),
                    b.lineTo(k - F - H, Math.max(t, p)), b.stroke(), b.moveTo(k - F - H, Math.min(t, p)), b.lineTo(k - F - H, n), b.stroke()), ea(b, D, Math.max(m, n), B, Math.min(m, n), g, 0, null, !1, !1, !1, !1), 0 < da && (b.beginPath(), b.lineWidth = da, b.moveTo(k + ca / 2, p - na), b.lineTo(k - ca / 2, p - na), b.stroke(), b.moveTo(k + ca / 2, t + na), b.lineTo(k - ca / 2, t + na), b.stroke()));
                  (R[d].indexLabel || y.indexLabel || R[d].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                    chartType: y.type,
                    dataPoint: R[d],
                    dataSeries: y,
                    point: {
                      x: D + (B - D) / 2,
                      y: a.axisY.reversed ? t : p
                    },
                    direction: 1,
                    bounds: {
                      x1: D,
                      y1: Math.min(t, p),
                      x2: B,
                      y2: Math.max(t, p)
                    },
                    color: g
                  })
                }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), b.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.fadeInAnimation,
            easingFunction: w.easing.easeInQuad,
            animationBase: 0
          }
        }
      };
      s.prototype.renderRangeColumn = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = 0,
            d, k, t, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ?
            this.dataPointWidth : 0.03 * this.width;
          var m = a.axisX.dataInfo.minDiff;
          isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
          m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (g.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && h > d && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && d < h) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth :
            -Infinity, h));
          m < h && (m = h);
          m > d && (m = d);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
            var p = a.dataSeriesIndexes[n],
              q = this.data[p],
              l = q.dataPoints;
            if (0 < l.length)
              for (var x = 5 < m && q.bevelEnabled ? !0 : !1, h = 0; h < l.length; h++)
                if (l[h].getTime ? t = l[h].x.getTime() : t = l[h].x, !(t <
                    a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax) && !e(l[h].y) && l[h].y.length && "number" === typeof l[h].y[0] && "number" === typeof l[h].y[1]) {
                  b = a.axisX.convertValueToPixel(t);
                  d = a.axisY.convertValueToPixel(l[h].y[0]);
                  k = a.axisY.convertValueToPixel(l[h].y[1]);
                  var r = a.axisX.reversed ? b + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + n) * m << 0 : b - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + n) * m << 0,
                    s = a.axisX.reversed ? r - m << 0 : r + m << 0,
                    b = l[h].color ? l[h].color : q._colorSet[h % q._colorSet.length];
                  if (d > k) {
                    var v = d;
                    d = k;
                    k = v
                  }
                  v = q.dataPointIds[h];
                  this._eventManager.objectMap[v] = {
                    id: v,
                    objectType: "dataPoint",
                    dataSeriesIndex: p,
                    dataPointIndex: h,
                    x1: r,
                    y1: d,
                    x2: s,
                    y2: k
                  };
                  ea(c, a.axisX.reversed ? s : r, d, a.axisX.reversed ? r : s, k, b, 0, b, x, x, !1, !1, q.fillOpacity);
                  b = V(v);
                  u && ea(this._eventManager.ghostCtx, a.axisX.reversed ? s : r, d, a.axisX.reversed ? r : s, k, b, 0, null, !1, !1, !1, !1);
                  if (l[h].indexLabel || q.indexLabel || l[h].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeColumn",
                    dataPoint: l[h],
                    dataSeries: q,
                    indexKeyword: 0,
                    point: {
                      x: r + (s - r) / 2,
                      y: l[h].y[1] >= l[h].y[0] ? k : d
                    },
                    direction: l[h].y[1] >= l[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: r,
                      y1: Math.min(d, k),
                      x2: s,
                      y2: Math.max(d, k)
                    },
                    color: b
                  }), this._indexLabels.push({
                    chartType: "rangeColumn",
                    dataPoint: l[h],
                    dataSeries: q,
                    indexKeyword: 1,
                    point: {
                      x: r + (s - r) / 2,
                      y: l[h].y[1] >= l[h].y[0] ? d : k
                    },
                    direction: l[h].y[1] >= l[h].y[0] ? 1 : -1,
                    bounds: {
                      x1: r,
                      y1: Math.min(d, k),
                      x2: s,
                      y2: Math.max(d, k)
                    },
                    color: b
                  })
                }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop",
            a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.fadeInAnimation,
            easingFunction: w.easing.easeInQuad,
            animationBase: 0
          }
        }
      };
      s.prototype.renderError =
        function(a) {
          var f = a.targetCanvasCtx || this.plotArea.ctx,
            c = u ? this._preRenderCtx : f,
            b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var g = null,
              h = !1,
              d = this.plotArea,
              k = 0,
              t, m, n, p, q, l, x, r = a.axisX.dataInfo.minDiff;
            isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(d.x1, d.y1, d.width, d.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(d.x1,
              d.y1, d.width, d.height), this._eventManager.ghostCtx.clip());
            for (var s = 0, v = 0; v < this.data.length; v++) !this.data[v].type.match(/(bar|column)/ig) || !this.data[v].visible || this.data[v].type.match(/(stacked)/ig) && s || s++;
            for (var y = 0; y < a.dataSeriesIndexes.length; y++) {
              var R = a.dataSeriesIndexes[y],
                z = this.data[R],
                D = z.dataPoints,
                B = e(z._linkedSeries) ? !1 : z._linkedSeries.type.match(/(bar|column)/ig) && z._linkedSeries.visible ? !0 : !1,
                A = 0;
              if (B)
                for (g = z._linkedSeries.id, v = 0; v < g; v++) !this.data[v].type.match(/(bar|column)/ig) ||
                  !this.data[v].visible || this.data[v].type.match(/(stacked)/ig) && A || (this.data[v].type.match(/(range)/ig) && (h = !0), A++);
              g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              k = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? s : 1))) << 0 : 0.3 * this.width;
              h && (k = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth :
                b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? s : 1))) << 0 : 0.03 * this.width);
              v = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? d.height : d.width) * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / (B ? s : 1)) << 0;
              this.dataPointMaxWidth && g > k && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, k));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && k < g) && (k = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
              v < g &&
                (v = g);
              v > k && (v = k);
              if (0 < D.length)
                for (var F = z._colorSet, k = 0; k < D.length; k++) {
                  var g = z.lineColor = z.options.color ? z.options.color : F[0],
                    Y = {
                      color: D[k].whiskerColor ? D[k].whiskerColor : D[k].color ? z.whiskerColor ? z.whiskerColor : D[k].color : z.whiskerColor ? z.whiskerColor : g,
                      thickness: e(D[k].whiskerThickness) ? z.whiskerThickness : D[k].whiskerThickness,
                      dashType: D[k].whiskerDashType ? D[k].whiskerDashType : z.whiskerDashType,
                      length: e(D[k].whiskerLength) ? e(z.options.whiskerLength) ? v : z.options.whiskerLength : D[k].whiskerLength,
                      trimLength: e(D[k].whiskerLength) ? e(z.options.whiskerLength) ? 50 : 0 : 0
                    };
                  Y.length = "number" === typeof Y.length ? 0 >= Y.length ? 0 : Y.length >= v ? v : Y.length : "string" === typeof Y.length ? parseInt(Y.length) * v / 100 > v ? v : parseInt(Y.length) * v / 100 > v : v;
                  Y.thickness = "number" === typeof Y.thickness ? 0 > Y.thickness ? 0 : Math.round(Y.thickness) : 2;
                  var da = {
                    color: D[k].stemColor ? D[k].stemColor : D[k].color ? z.stemColor ? z.stemColor : D[k].color : z.stemColor ? z.stemColor : g,
                    thickness: D[k].stemThickness ? D[k].stemThickness : z.stemThickness,
                    dashType: D[k].stemDashType ?
                      D[k].stemDashType : z.stemDashType
                  };
                  da.thickness = "number" === typeof da.thickness ? 0 > da.thickness ? 0 : Math.round(da.thickness) : 2;
                  D[k].getTime ? x = D[k].x.getTime() : x = D[k].x;
                  if (!(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax) && !e(D[k].y) && D[k].y.length && "number" === typeof D[k].y[0] && "number" === typeof D[k].y[1]) {
                    var ga = a.axisX.convertValueToPixel(x);
                    b ? m = ga : t = ga;
                    ga = a.axisY.convertValueToPixel(D[k].y[0]);
                    b ? n = ga : q = ga;
                    ga = a.axisY.convertValueToPixel(D[k].y[1]);
                    b ? p = ga : l = ga;
                    b ? (q = a.axisX.reversed ? m + (B ?
                      s : 1) * v / 2 - (B ? A - 1 : 0) * v << 0 : m - (B ? s : 1) * v / 2 + (B ? A - 1 : 0) * v << 0, l = a.axisX.reversed ? q - v << 0 : q + v << 0) : (n = a.axisX.reversed ? t + (B ? s : 1) * v / 2 - (B ? A - 1 : 0) * v << 0 : t - (B ? s : 1) * v / 2 + (B ? A - 1 : 0) * v << 0, p = a.axisX.reversed ? n - v << 0 : n + v << 0);
                    !b && q > l && (ga = q, q = l, l = ga);
                    b && n > p && (ga = n, n = p, p = ga);
                    ga = z.dataPointIds[k];
                    this._eventManager.objectMap[ga] = {
                      id: ga,
                      objectType: "dataPoint",
                      dataSeriesIndex: R,
                      dataPointIndex: k,
                      x1: Math.min(n, p),
                      y1: Math.min(q, l),
                      x2: Math.max(p, n),
                      y2: Math.max(l, q),
                      isXYSwapped: b,
                      stemProperties: da,
                      whiskerProperties: Y
                    };
                    N(c, Math.min(n,
                      p), Math.min(q, l), Math.max(p, n), Math.max(l, q), g, Y, da, b);
                    u && N(this._eventManager.ghostCtx, n, q, p, l, g, Y, da, b);
                    if (D[k].indexLabel || z.indexLabel || D[k].indexLabelFormatter || z.indexLabelFormatter) this._indexLabels.push({
                        chartType: "error",
                        dataPoint: D[k],
                        dataSeries: z,
                        indexKeyword: 0,
                        point: {
                          x: b ? D[k].y[1] >= D[k].y[0] ? n : p : n + (p - n) / 2,
                          y: b ? q + (l - q) / 2 : D[k].y[1] >= D[k].y[0] ? l : q
                        },
                        direction: D[k].y[1] >= D[k].y[0] ? -1 : 1,
                        bounds: {
                          x1: b ? Math.min(n, p) : n,
                          y1: b ? q : Math.min(q, l),
                          x2: b ? Math.max(n, p) : p,
                          y2: b ? l : Math.max(q, l)
                        },
                        color: g,
                        axisSwapped: b
                      }),
                      this._indexLabels.push({
                        chartType: "error",
                        dataPoint: D[k],
                        dataSeries: z,
                        indexKeyword: 1,
                        point: {
                          x: b ? D[k].y[1] >= D[k].y[0] ? p : n : n + (p - n) / 2,
                          y: b ? q + (l - q) / 2 : D[k].y[1] >= D[k].y[0] ? q : l
                        },
                        direction: D[k].y[1] >= D[k].y[0] ? 1 : -1,
                        bounds: {
                          x1: b ? Math.min(n, p) : n,
                          y1: b ? q : Math.min(q, l),
                          x2: b ? Math.max(n, p) : p,
                          y2: b ? l : Math.max(q, l)
                        },
                        color: g,
                        axisSwapped: b
                      })
                  }
                }
            }
            u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
              a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(d.x1, d.y1, d.width, d.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: f,
              dest: this.plotArea.ctx,
              animationCallback: w.fadeInAnimation,
              easingFunction: w.easing.easeInQuad,
              animationBase: 0
            }
          }
        };
      s.prototype.renderRangeBar = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx :
          f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = null,
            g = this.plotArea,
            h = 0,
            d, k, t, m, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          d = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
          var n = a.axisX.dataInfo.minDiff;
          isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
          n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 *
            (g.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && h > d && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, d));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && d < h) && (d = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
          n < h && (n = h);
          n > d && (n = d);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(g.x1, g.y1, g.width, g.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(),
            this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
          for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
            var q = a.dataSeriesIndexes[p],
              l = this.data[q],
              x = l.dataPoints;
            if (0 < x.length) {
              var r = 5 < n && l.bevelEnabled ? !0 : !1;
              c.strokeStyle = "#4572A7 ";
              for (h = 0; h < x.length; h++)
                if (x[h].getTime ? m = x[h].x.getTime() : m = x[h].x, !(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax) && !e(x[h].y) && x[h].y.length && "number" === typeof x[h].y[0] && "number" === typeof x[h].y[1]) {
                  d = a.axisY.convertValueToPixel(x[h].y[0]);
                  k = a.axisY.convertValueToPixel(x[h].y[1]);
                  t = a.axisX.convertValueToPixel(m);
                  t = a.axisX.reversed ? t + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) * n << 0 : t - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
                  var s = a.axisX.reversed ? t - n << 0 : t + n << 0;
                  d > k && (b = d, d = k, k = b);
                  b = x[h].color ? x[h].color : l._colorSet[h % l._colorSet.length];
                  ea(c, d, a.axisX.reversed ? s : t, k, a.axisX.reversed ? t : s, b, 0, null, r, !1, !1, !1, l.fillOpacity);
                  b = l.dataPointIds[h];
                  this._eventManager.objectMap[b] = {
                    id: b,
                    objectType: "dataPoint",
                    dataSeriesIndex: q,
                    dataPointIndex: h,
                    x1: d,
                    y1: t,
                    x2: k,
                    y2: s
                  };
                  b = V(b);
                  u && ea(this._eventManager.ghostCtx, d, a.axisX.reversed ? s : t, k, a.axisX.reversed ? t : s, b, 0, null, !1, !1, !1, !1);
                  if (x[h].indexLabel || l.indexLabel || x[h].indexLabelFormatter || l.indexLabelFormatter) this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: x[h],
                    dataSeries: l,
                    indexKeyword: 0,
                    point: {
                      x: x[h].y[1] >= x[h].y[0] ? d : k,
                      y: t + (s - t) / 2
                    },
                    direction: x[h].y[1] >= x[h].y[0] ? -1 : 1,
                    bounds: {
                      x1: Math.min(d, k),
                      y1: t,
                      x2: Math.max(d, k),
                      y2: s
                    },
                    color: b
                  }), this._indexLabels.push({
                    chartType: "rangeBar",
                    dataPoint: x[h],
                    dataSeries: l,
                    indexKeyword: 1,
                    point: {
                      x: x[h].y[1] >= x[h].y[0] ? k : d,
                      y: t + (s - t) / 2
                    },
                    direction: x[h].y[1] >= x[h].y[0] ? 1 : -1,
                    bounds: {
                      x1: Math.min(d, k),
                      y1: t,
                      x2: Math.max(d, k),
                      y2: s
                    },
                    color: b
                  })
                }
            }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
            0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.fadeInAnimation,
            easingFunction: w.easing.easeInQuad,
            animationBase: 0
          }
        }
      };
      s.prototype.renderRangeArea = function(a) {
        function f() {
          if (y) {
            for (var a = null, c = k.length - 1; 0 <= c; c--) a = k[c], b.lineTo(a.x, a.y2), g.lineTo(a.x, a.y2);
            b.closePath();
            b.globalAlpha = n.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            g.fill();
            if (0 < n.lineThickness) {
              b.beginPath();
              b.moveTo(a.x, a.y2);
              for (c = 0; c < k.length; c++) a = k[c], b.lineTo(a.x, a.y2);
              b.moveTo(k[0].x, k[0].y1);
              for (c = 0; c < k.length; c++) a = k[c], b.lineTo(a.x, a.y1);
              b.stroke()
            }
            b.beginPath();
            b.moveTo(x, t);
            g.beginPath();
            g.moveTo(x, t);
            y = {
              x: x,
              y: t
            };
            k = [];
            k.push({
              x: x,
              y1: t,
              y2: s
            })
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx,
          b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = this._eventManager.ghostCtx,
            h = [],
            e = this.plotArea;
          b.save();
          u && g.save();
          b.beginPath();
          b.rect(e.x1, e.y1, e.width, e.height);
          b.clip();
          u && (g.beginPath(),
            g.rect(e.x1, e.y1, e.width, e.height), g.clip());
          for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
            var k = [],
              m = a.dataSeriesIndexes[d],
              n = this.data[m],
              p = n.dataPoints,
              h = n.id;
            this._eventManager.objectMap[h] = {
              objectType: "dataSeries",
              dataSeriesIndex: m
            };
            h = V(h);
            g.fillStyle = h;
            var h = [],
              q = !0,
              l = 0,
              x, t, s, v, y = null;
            if (0 < p.length) {
              var z = n._colorSet[l % n._colorSet.length],
                A = n.lineColor = n.options.lineColor || z,
                D = A;
              b.fillStyle = z;
              b.strokeStyle = A;
              b.lineWidth = n.lineThickness;
              var B = "solid";
              if (b.setLineDash) {
                var F = S(n.nullDataLineDashType,
                    n.lineThickness),
                  B = n.lineDashType,
                  E = S(B, n.lineThickness);
                b.setLineDash(E)
              }
              for (var Y = !0; l < p.length; l++)
                if (v = p[l].x.getTime ? p[l].x.getTime() : p[l].x, !(v < a.axisX.dataInfo.viewPortMin || v > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !Y)))
                  if (null !== p[l].y && p[l].y.length && "number" === typeof p[l].y[0] && "number" === typeof p[l].y[1]) {
                    x = a.axisX.convertValueToPixel(v);
                    t = a.axisY.convertValueToPixel(p[l].y[0]);
                    s = a.axisY.convertValueToPixel(p[l].y[1]);
                    q || Y ? (n.connectNullData && !q ? (b.setLineDash && (n.options.nullDataLineDashType ||
                      B === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (k[k.length - 1].newLineDashArray = E, B = n.nullDataLineDashType, b.setLineDash(F)), b.lineTo(x, t), u && g.lineTo(x, t), k.push({
                      x: x,
                      y1: t,
                      y2: s
                    })) : (b.beginPath(), b.moveTo(x, t), y = {
                      x: x,
                      y: t
                    }, k = [], k.push({
                      x: x,
                      y1: t,
                      y2: s
                    }), u && (g.beginPath(), g.moveTo(x, t))), Y = q = !1) : (b.lineTo(x, t), k.push({
                      x: x,
                      y1: t,
                      y2: s
                    }), u && g.lineTo(x, t), 0 == l % 250 && f());
                    v = n.dataPointIds[l];
                    this._eventManager.objectMap[v] = {
                      id: v,
                      objectType: "dataPoint",
                      dataSeriesIndex: m,
                      dataPointIndex: l,
                      x1: x,
                      y1: t,
                      y2: s
                    };
                    l < p.length - 1 && (D !== (p[l].lineColor || A) || B !== (p[l].lineDashType || n.lineDashType)) && (f(), D = p[l].lineColor || A, k[k.length - 1].newStrokeStyle = D, b.strokeStyle = D, b.setLineDash && (p[l].lineDashType ? (B = p[l].lineDashType, k[k.length - 1].newLineDashArray = S(B, n.lineThickness), b.setLineDash(k[k.length - 1].newLineDashArray)) : (B = n.lineDashType, k[k.length - 1].newLineDashArray = E, b.setLineDash(E))));
                    if (0 !== p[l].markerSize && (0 < p[l].markerSize || 0 < n.markerSize)) {
                      var da = n.getMarkerProperties(l, x, s, b);
                      h.push(da);
                      var ga =
                        V(v);
                      u && h.push({
                        x: x,
                        y: s,
                        ctx: g,
                        type: da.type,
                        size: da.size,
                        color: ga,
                        borderColor: ga,
                        borderThickness: da.borderThickness
                      });
                      da = n.getMarkerProperties(l, x, t, b);
                      h.push(da);
                      ga = V(v);
                      u && h.push({
                        x: x,
                        y: t,
                        ctx: g,
                        type: da.type,
                        size: da.size,
                        color: ga,
                        borderColor: ga,
                        borderThickness: da.borderThickness
                      })
                    }
                    if (p[l].indexLabel || n.indexLabel || p[l].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({
                      chartType: "rangeArea",
                      dataPoint: p[l],
                      dataSeries: n,
                      indexKeyword: 0,
                      point: {
                        x: x,
                        y: t
                      },
                      direction: p[l].y[0] > p[l].y[1] ===
                        a.axisY.reversed ? -1 : 1,
                      color: z
                    }), this._indexLabels.push({
                      chartType: "rangeArea",
                      dataPoint: p[l],
                      dataSeries: n,
                      indexKeyword: 1,
                      point: {
                        x: x,
                        y: s
                      },
                      direction: p[l].y[0] > p[l].y[1] === a.axisY.reversed ? 1 : -1,
                      color: z
                    })
                  } else Y || q || f(), Y = !0;
              f();
              r.drawMarkers(h)
            }
          }
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
            this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          b.restore();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderRangeSplineArea = function(a) {
        function f(a, c) {
          var f = G(t, 2);
          if (0 < f.length) {
            if (0 < m.lineThickness) {
              b.strokeStyle = c;
              b.setLineDash && b.setLineDash(a);
              b.beginPath();
              b.moveTo(f[0].x,
                f[0].y);
              for (var h = 0; h < f.length - 3; h += 3) {
                if (f[h].newStrokeStyle || f[h].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(f[h].x, f[h].y), f[h].newStrokeStyle && (b.strokeStyle = f[h].newStrokeStyle), f[h].newLineDashArray && b.setLineDash(f[h].newLineDashArray);
                b.bezierCurveTo(f[h + 1].x, f[h + 1].y, f[h + 2].x, f[h + 2].y, f[h + 3].x, f[h + 3].y)
              }
            }
            b.beginPath();
            b.moveTo(f[0].x, f[0].y);
            u && (g.beginPath(), g.moveTo(f[0].x, f[0].y));
            for (h = 0; h < f.length - 3; h += 3) b.bezierCurveTo(f[h + 1].x, f[h + 1].y, f[h + 2].x, f[h + 2].y, f[h + 3].x, f[h + 3].y),
              u && g.bezierCurveTo(f[h + 1].x, f[h + 1].y, f[h + 2].x, f[h + 2].y, f[h + 3].x, f[h + 3].y);
            f = G(s, 2);
            b.lineTo(s[s.length - 1].x, s[s.length - 1].y);
            for (h = f.length - 1; 2 < h; h -= 3) b.bezierCurveTo(f[h - 1].x, f[h - 1].y, f[h - 2].x, f[h - 2].y, f[h - 3].x, f[h - 3].y), u && g.bezierCurveTo(f[h - 1].x, f[h - 1].y, f[h - 2].x, f[h - 2].y, f[h - 3].x, f[h - 3].y);
            b.closePath();
            b.globalAlpha = m.fillOpacity;
            b.fill();
            u && (g.closePath(), g.fill());
            b.globalAlpha = 1;
            if (0 < m.lineThickness) {
              b.strokeStyle = c;
              b.setLineDash && b.setLineDash(a);
              b.beginPath();
              b.moveTo(f[0].x, f[0].y);
              for (var l =
                  h = 0; h < f.length - 3; h += 3, l++) {
                if (t[l].newStrokeStyle || t[l].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(f[h].x, f[h].y), t[l].newStrokeStyle && (b.strokeStyle = t[l].newStrokeStyle), t[l].newLineDashArray && b.setLineDash(t[l].newLineDashArray);
                b.bezierCurveTo(f[h + 1].x, f[h + 1].y, f[h + 2].x, f[h + 2].y, f[h + 3].x, f[h + 3].y)
              }
              f = G(t, 2);
              b.moveTo(f[0].x, f[0].y);
              for (l = h = 0; h < f.length - 3; h += 3, l++) {
                if (t[l].newStrokeStyle || t[l].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(f[h].x, f[h].y), t[l].newStrokeStyle && (b.strokeStyle =
                  t[l].newStrokeStyle), t[l].newLineDashArray && b.setLineDash(t[l].newLineDashArray);
                b.bezierCurveTo(f[h + 1].x, f[h + 1].y, f[h + 2].x, f[h + 2].y, f[h + 3].x, f[h + 3].y)
              }
              b.stroke()
            }
            b.beginPath()
          }
        }
        var c = a.targetCanvasCtx || this.plotArea.ctx,
          b = u ? this._preRenderCtx : c;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var g = this._eventManager.ghostCtx,
            h = [],
            e = this.plotArea;
          b.save();
          u && g.save();
          b.beginPath();
          b.rect(e.x1, e.y1, e.width, e.height);
          b.clip();
          u && (g.beginPath(), g.rect(e.x1, e.y1, e.width, e.height), g.clip());
          for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
            var k =
              a.dataSeriesIndexes[d],
              m = this.data[k],
              n = m.dataPoints,
              h = m.id;
            this._eventManager.objectMap[h] = {
              objectType: "dataSeries",
              dataSeriesIndex: k
            };
            h = V(h);
            g.fillStyle = h;
            var h = [],
              p = 0,
              q, l, x, t = [],
              s = [];
            if (0 < n.length) {
              var v = m._colorSet[p % m._colorSet.length],
                y = m.lineColor = m.options.lineColor || v,
                z = y;
              b.fillStyle = v;
              b.lineWidth = m.lineThickness;
              var A = "solid",
                D;
              if (b.setLineDash) {
                var B = S(m.nullDataLineDashType, m.lineThickness),
                  A = m.lineDashType;
                D = S(A, m.lineThickness)
              }
              for (l = !1; p < n.length; p++)
                if (q = n[p].x.getTime ? n[p].x.getTime() :
                  n[p].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !l)))
                  if (null !== n[p].y && n[p].y.length && "number" === typeof n[p].y[0] && "number" === typeof n[p].y[1]) {
                    q = a.axisX.convertValueToPixel(q);
                    l = a.axisY.convertValueToPixel(n[p].y[0]);
                    x = a.axisY.convertValueToPixel(n[p].y[1]);
                    var F = m.dataPointIds[p];
                    this._eventManager.objectMap[F] = {
                      id: F,
                      objectType: "dataPoint",
                      dataSeriesIndex: k,
                      dataPointIndex: p,
                      x1: q,
                      y1: l,
                      y2: x
                    };
                    t[t.length] = {
                      x: q,
                      y: l
                    };
                    s[s.length] = {
                      x: q,
                      y: x
                    };
                    p < n.length - 1 && (z !==
                      (n[p].lineColor || y) || A !== (n[p].lineDashType || m.lineDashType)) && (z = n[p].lineColor || y, t[t.length - 1].newStrokeStyle = z, b.setLineDash && (n[p].lineDashType ? (A = n[p].lineDashType, t[t.length - 1].newLineDashArray = S(A, m.lineThickness)) : (A = m.lineDashType, t[t.length - 1].newLineDashArray = D)));
                    if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < m.markerSize)) {
                      var E = m.getMarkerProperties(p, q, l, b);
                      h.push(E);
                      var Y = V(F);
                      u && h.push({
                        x: q,
                        y: l,
                        ctx: g,
                        type: E.type,
                        size: E.size,
                        color: Y,
                        borderColor: Y,
                        borderThickness: E.borderThickness
                      });
                      E = m.getMarkerProperties(p, q, x, b);
                      h.push(E);
                      Y = V(F);
                      u && h.push({
                        x: q,
                        y: x,
                        ctx: g,
                        type: E.type,
                        size: E.size,
                        color: Y,
                        borderColor: Y,
                        borderThickness: E.borderThickness
                      })
                    }
                    if (n[p].indexLabel || m.indexLabel || n[p].indexLabelFormatter || m.indexLabelFormatter) this._indexLabels.push({
                      chartType: "rangeSplineArea",
                      dataPoint: n[p],
                      dataSeries: m,
                      indexKeyword: 0,
                      point: {
                        x: q,
                        y: l
                      },
                      direction: n[p].y[0] <= n[p].y[1] ? -1 : 1,
                      color: v
                    }), this._indexLabels.push({
                      chartType: "rangeSplineArea",
                      dataPoint: n[p],
                      dataSeries: m,
                      indexKeyword: 1,
                      point: {
                        x: q,
                        y: x
                      },
                      direction: n[p].y[0] <= n[p].y[1] ? 1 : -1,
                      color: v
                    });
                    l = !1
                  } else 0 < p && !l && (m.connectNullData ? b.setLineDash && (0 < t.length && (m.options.nullDataLineDashType || !n[p - 1].lineDashType)) && (t[t.length - 1].newLineDashArray = B, A = m.nullDataLineDashType) : (f(D, y), t = [], s = [])), l = !0;
              f(D, y);
              r.drawMarkers(h)
            }
          }
          u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas,
            0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
          b.restore();
          return {
            source: c,
            dest: this.plotArea.ctx,
            animationCallback: w.xClipAnimation,
            easingFunction: w.easing.linear,
            animationBase: 0
          }
        }
      };
      s.prototype.renderWaterfall = function(a) {
        var f = a.targetCanvasCtx || this.plotArea.ctx,
          c = u ? this._preRenderCtx : f;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var b = this._eventManager.ghostCtx,
            g = null,
            h = this.plotArea,
            e = 0,
            d, k, m, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
            e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
          k = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
          var q = a.axisX.dataInfo.minDiff;
          isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
          q = this.options.dataPointWidth ?
            this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
          this.dataPointMaxWidth && e > k && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, k));
          !this.dataPointMaxWidth && (this.dataPointMinWidth && k < e) && (k = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
          q < e && (q = e);
          q > k && (q = k);
          c.save();
          u && this._eventManager.ghostCtx.save();
          c.beginPath();
          c.rect(h.x1, h.y1, h.width, h.height);
          c.clip();
          u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
          for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
            var x = a.dataSeriesIndexes[l],
              t = this.data[x],
              r = t.dataPoints,
              g = t._colorSet[0];
            t.risingColor = t.options.risingColor ? t.options.risingColor : g;
            t.fallingColor = t.options.fallingColor ? t.options.fallingColor : "#e40a0a";
            var v = "number" === typeof t.options.lineThickness ? Math.round(t.lineThickness) : 1,
              s = 1 === Math.round(v) %
              2 ? -0.5 : 0;
            if (0 < r.length)
              for (var z = 5 < q && t.bevelEnabled ? !0 : !1, A = !1, D = null, B = null, e = 0; e < r.length; e++)
                if (r[e].getTime ? n = r[e].x.getTime() : n = r[e].x, "number" !== typeof r[e].y) {
                  if (0 < e && !A && t.connectNullData) var F = t.options.nullDataLineDashType || !r[e - 1].lineDashType ? t.nullDataLineDashType : r[e - 1].lineDashType;
                  A = !0
                } else {
                  d = a.axisX.convertValueToPixel(n);
                  k = 0 === t.dataPointEOs[e].cumulativeSum ? p : a.axisY.convertValueToPixel(t.dataPointEOs[e].cumulativeSum);
                  m = 0 === t.dataPointEOs[e].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(t.dataPointEOs[e].cumulativeSumYStartValue);
                  d = a.axisX.reversed ? d + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + l) * q << 0 : d - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + l) * q << 0;
                  var E = a.axisX.reversed ? d - q << 0 : d + q << 0;
                  k > m && (g = k, k = m, m = g);
                  a.axisY.reversed && (g = k, k = m, m = g);
                  g = t.dataPointIds[e];
                  this._eventManager.objectMap[g] = {
                    id: g,
                    objectType: "dataPoint",
                    dataSeriesIndex: x,
                    dataPointIndex: e,
                    x1: d,
                    y1: k,
                    x2: E,
                    y2: m
                  };
                  var Y = r[e].color ? r[e].color : 0 < r[e].y ? t.risingColor : t.fallingColor;
                  ea(c, a.axisX.reversed ? E : d, a.axisY.reversed ? m : k, a.axisX.reversed ?
                    d : E, a.axisY.reversed ? k : m, Y, 0, Y, z, z, !1, !1, t.fillOpacity);
                  g = V(g);
                  u && ea(this._eventManager.ghostCtx, a.axisX.reversed ? E : d, k, a.axisX.reversed ? d : E, m, g, 0, null, !1, !1, !1, !1);
                  var da, Y = d;
                  da = "undefined" !== typeof r[e].isIntermediateSum && !0 === r[e].isIntermediateSum || "undefined" !== typeof r[e].isCumulativeSum && !0 === r[e].isCumulativeSum ? 0 < r[e].y ? k : m : 0 < r[e].y ? m : k;
                  0 < e && D && (!A || t.connectNullData) && (A && c.setLineDash && c.setLineDash(S(F, v)), c.beginPath(), c.moveTo(D, B - s), c.lineTo(Y, da - s), 0 < v && c.stroke(), u && (b.beginPath(),
                    b.moveTo(D, B - s), b.lineTo(Y, da - s), 0 < v && b.stroke()));
                  A = !1;
                  D = E;
                  B = 0 < r[e].y ? k : m;
                  Y = r[e].lineDashType ? r[e].lineDashType : t.options.lineDashType ? t.options.lineDashType : "shortDash";
                  c.strokeStyle = r[e].lineColor ? r[e].lineColor : t.options.lineColor ? t.options.lineColor : "#9e9e9e";
                  c.lineWidth = v;
                  c.setLineDash && (Y = S(Y, v), c.setLineDash(Y));
                  (r[e].indexLabel || t.indexLabel || r[e].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                    chartType: "waterfall",
                    dataPoint: r[e],
                    dataSeries: t,
                    point: {
                      x: d + (E - d) / 2,
                      y: 0 <=
                        r[e].y ? k : m
                    },
                    direction: 0 > r[e].y === a.axisY.reversed ? 1 : -1,
                    bounds: {
                      x1: d,
                      y1: Math.min(k, m),
                      x2: E,
                      y2: Math.max(k, m)
                    },
                    color: g
                  })
                }
          }
          u && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1,
            h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
          c.restore();
          return {
            source: f,
            dest: this.plotArea.ctx,
            animationCallback: w.fadeInAnimation,
            easingFunction: w.easing.easeInQuad,
            animationBase: 0
          }
        }
      };
      var d = function(a, f, c, b, g, h, e, d, k) {
        if (!(0 > c)) {
          "undefined" === typeof d && (d = 1);
          if (!u) {
            var m = Number((e % (2 * Math.PI)).toFixed(8));
            Number((h % (2 * Math.PI)).toFixed(8)) === m && (e -= 1E-4)
          }
          a.save();
          a.globalAlpha = d;
          "pie" === g ? (a.beginPath(), a.moveTo(f.x, f.y), a.arc(f.x, f.y, c, h, e, !1), a.fillStyle = b, a.strokeStyle = "white",
            a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === g && (a.beginPath(), a.arc(f.x, f.y, c, h, e, !1), 0 <= k && a.arc(f.x, f.y, k * c, e, h, !0), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
          a.globalAlpha = 1;
          a.restore()
        }
      };
      s.prototype.renderPie = function(a) {
        function f() {
          if (m && n) {
            for (var a = 0, b = 0, c = 0, f = 0, g = 0; g < n.length; g++) {
              var h = n[g],
                d = m.dataPointIds[g];
              l[g].id = d;
              l[g].objectType = "dataPoint";
              l[g].dataPointIndex = g;
              l[g].dataSeriesIndex = 0;
              var p = l[g],
                k = {
                  percent: null,
                  total: null
                },
                C = null,
                k = w.getPercentAndTotal(m,
                  h);
              if (m.indexLabelFormatter || h.indexLabelFormatter) C = {
                chart: w.options,
                dataSeries: m,
                dataPoint: h,
                total: k.total,
                percent: k.percent
              };
              k = h.indexLabelFormatter ? h.indexLabelFormatter(C) : h.indexLabel ? w.replaceKeywordsWithValue(h.indexLabel, h, m, g) : m.indexLabelFormatter ? m.indexLabelFormatter(C) : m.indexLabel ? w.replaceKeywordsWithValue(m.indexLabel, h, m, g) : h.label ? h.label : "";
              w._eventManager.objectMap[d] = p;
              p.center = {
                x: z.x,
                y: z.y
              };
              p.y = h.y;
              p.radius = B;
              p.percentInnerRadius = E;
              p.indexLabelText = k;
              p.indexLabelPlacement = m.indexLabelPlacement;
              p.indexLabelLineColor = h.indexLabelLineColor ? h.indexLabelLineColor : m.options.indexLabelLineColor ? m.options.indexLabelLineColor : h.color ? h.color : m._colorSet[g % m._colorSet.length];
              p.indexLabelLineThickness = e(h.indexLabelLineThickness) ? m.indexLabelLineThickness : h.indexLabelLineThickness;
              p.indexLabelLineDashType = h.indexLabelLineDashType ? h.indexLabelLineDashType : m.indexLabelLineDashType;
              p.indexLabelFontColor = h.indexLabelFontColor ? h.indexLabelFontColor : m.indexLabelFontColor;
              p.indexLabelFontStyle = h.indexLabelFontStyle ?
                h.indexLabelFontStyle : m.indexLabelFontStyle;
              p.indexLabelFontWeight = h.indexLabelFontWeight ? h.indexLabelFontWeight : m.indexLabelFontWeight;
              p.indexLabelFontSize = e(h.indexLabelFontSize) ? m.indexLabelFontSize : h.indexLabelFontSize;
              p.indexLabelFontFamily = h.indexLabelFontFamily ? h.indexLabelFontFamily : m.indexLabelFontFamily;
              p.indexLabelBackgroundColor = h.indexLabelBackgroundColor ? h.indexLabelBackgroundColor : m.options.indexLabelBackgroundColor ? m.options.indexLabelBackgroundColor : m.indexLabelBackgroundColor;
              p.indexLabelMaxWidth =
                h.indexLabelMaxWidth ? h.indexLabelMaxWidth : m.indexLabelMaxWidth ? m.indexLabelMaxWidth : 0.33 * q.width;
              p.indexLabelWrap = "undefined" !== typeof h.indexLabelWrap ? h.indexLabelWrap : m.indexLabelWrap;
              p.indexLabelTextAlign = h.indexLabelTextAlign ? h.indexLabelTextAlign : m.indexLabelTextAlign ? m.indexLabelTextAlign : "left";
              p.startAngle = 0 === g ? m.startAngle ? m.startAngle / 180 * Math.PI : 0 : l[g - 1].endAngle;
              p.startAngle = (p.startAngle + 2 * Math.PI) % (2 * Math.PI);
              p.endAngle = p.startAngle + 2 * Math.PI / A * Math.abs(h.y);
              h = (p.endAngle + p.startAngle) /
                2;
              h = (h + 2 * Math.PI) % (2 * Math.PI);
              p.midAngle = h;
              if (p.midAngle > Math.PI / 2 - v && p.midAngle < Math.PI / 2 + v) {
                if (0 === a || l[c].midAngle > p.midAngle) c = g;
                a++
              } else if (p.midAngle > 3 * Math.PI / 2 - v && p.midAngle < 3 * Math.PI / 2 + v) {
                if (0 === b || l[f].midAngle > p.midAngle) f = g;
                b++
              }
              p.hemisphere = h > Math.PI / 2 && h <= 3 * Math.PI / 2 ? "left" : "right";
              p.indexLabelTextBlock = new oa(w.plotArea.ctx, {
                fontSize: p.indexLabelFontSize,
                fontFamily: p.indexLabelFontFamily,
                fontColor: p.indexLabelFontColor,
                fontStyle: p.indexLabelFontStyle,
                fontWeight: p.indexLabelFontWeight,
                textAlign: p.indexLabelTextAlign,
                backgroundColor: p.indexLabelBackgroundColor,
                maxWidth: p.indexLabelMaxWidth,
                maxHeight: p.indexLabelWrap ? 5 * p.indexLabelFontSize : 1.5 * p.indexLabelFontSize,
                text: p.indexLabelText,
                padding: 0,
                textBaseline: "top"
              });
              p.indexLabelTextBlock.measureText()
            }
            d = h = 0;
            k = !1;
            for (g = 0; g < n.length; g++) p = l[(c + g) % n.length], 1 < a && (p.midAngle > Math.PI / 2 - v && p.midAngle < Math.PI / 2 + v) && (h <= a / 2 && !k ? (p.hemisphere = "right", h++) : (p.hemisphere = "left", k = !0));
            k = !1;
            for (g = 0; g < n.length; g++) p = l[(f + g) % n.length], 1 < b && (p.midAngle >
              3 * Math.PI / 2 - v && p.midAngle < 3 * Math.PI / 2 + v) && (d <= b / 2 && !k ? (p.hemisphere = "left", d++) : (p.hemisphere = "right", k = !0))
          }
        }
  
        function c(a) {
          var b = w.plotArea.ctx;
          b.clearRect(q.x1, q.y1, q.width, q.height);
          b.fillStyle = w.backgroundColor;
          b.fillRect(q.x1, q.y1, q.width, q.height);
          for (b = 0; b < n.length; b++) {
            var c = l[b].startAngle,
              f = l[b].endAngle;
            if (f > c) {
              var g = 0.07 * B * Math.cos(l[b].midAngle),
                h = 0.07 * B * Math.sin(l[b].midAngle),
                e = !1;
              if (n[b].exploded) {
                if (1E-9 < Math.abs(l[b].center.x - (z.x + g)) || 1E-9 < Math.abs(l[b].center.y - (z.y + h))) l[b].center.x =
                  z.x + g * a, l[b].center.y = z.y + h * a, e = !0
              } else if (0 < Math.abs(l[b].center.x - z.x) || 0 < Math.abs(l[b].center.y - z.y)) l[b].center.x = z.x + g * (1 - a), l[b].center.y = z.y + h * (1 - a), e = !0;
              e && (g = {}, g.dataSeries = m, g.dataPoint = m.dataPoints[b], g.index = b, w.toolTip.highlightObjects([g]));
              d(w.plotArea.ctx, l[b].center, l[b].radius, n[b].color ? n[b].color : m._colorSet[b % m._colorSet.length], m.type, c, f, m.fillOpacity, l[b].percentInnerRadius)
            }
          }
          a = w.plotArea.ctx;
          a.save();
          a.fillStyle = "black";
          a.strokeStyle = "grey";
          a.textBaseline = "middle";
          a.lineJoin =
            "round";
          for (b = b = 0; b < n.length; b++) c = l[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, f = 0, f = "left" === c.hemisphere ? "inside" !== m.indexLabelPlacement ? -(c.indexLabelTextBlock.width + p) : -c.indexLabelTextBlock.width / 2 : "inside" !== m.indexLabelPlacement ? p : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += f, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= f, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness &&
            (f = c.center.x + B * Math.cos(c.midAngle), g = c.center.y + B * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(S(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(f, g), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -p : p), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
          a.save()
        }
  
        function b(a, b) {
          var c = 0,
            c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height /
            2,
            f = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
            g = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
            h = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
          return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? g - f : c - h
        }
  
        function g(a) {
          for (var c = null, f = 1; f < n.length; f++)
            if (c = (a + f + l.length) % l.length, l[c].hemisphere !== l[a].hemisphere) {
              c = null;
              break
            } else if (l[c].indexLabelText && c !== a && (0 > b(l[c], l[a]) || ("right" === l[a].hemisphere ? l[c].indexLabelTextBlock.y >= l[a].indexLabelTextBlock.y : l[c].indexLabelTextBlock.y <=
              l[a].indexLabelTextBlock.y))) break;
          else c = null;
          return c
        }
  
        function h(a, c, f) {
          f = (f || 0) + 1;
          if (1E3 < f) return 0;
          c = c || 0;
          var e = 0,
            d = z.y - 1 * r,
            m = z.y + 1 * r;
          if (0 <= a && a < n.length) {
            var p = l[a];
            if (0 > c && p.indexLabelTextBlock.y < d || 0 < c && p.indexLabelTextBlock.y > m) return 0;
            var q = 0,
              k = 0,
              k = q = q = 0;
            0 > c ? p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 > d && p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + c < d && (c = -(d - (p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + c))) : p.indexLabelTextBlock.y + p.indexLabelTextBlock.height /
              2 < d && p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + c > m && (c = p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + c - m);
            c = p.indexLabelTextBlock.y + c;
            d = 0;
            d = "right" === p.hemisphere ? z.x + Math.sqrt(Math.pow(r, 2) - Math.pow(c - z.y, 2)) : z.x - Math.sqrt(Math.pow(r, 2) - Math.pow(c - z.y, 2));
            k = z.x + B * Math.cos(p.midAngle);
            q = z.y + B * Math.sin(p.midAngle);
            q = Math.sqrt(Math.pow(d - k, 2) + Math.pow(c - q, 2));
            k = Math.acos(B / r);
            q = Math.acos((r * r + B * B - q * q) / (2 * B * r));
            c = q < k ? c - p.indexLabelTextBlock.y : 0;
            d = null;
            for (m = 1; m < n.length; m++)
              if (d =
                (a - m + l.length) % l.length, l[d].hemisphere !== l[a].hemisphere) {
                d = null;
                break
              } else if (l[d].indexLabelText && l[d].hemisphere === l[a].hemisphere && d !== a && (0 > b(l[d], l[a]) || ("right" === l[a].hemisphere ? l[d].indexLabelTextBlock.y <= l[a].indexLabelTextBlock.y : l[d].indexLabelTextBlock.y >= l[a].indexLabelTextBlock.y))) break;
            else d = null;
            k = d;
            q = g(a);
            m = d = 0;
            0 > c ? (m = "right" === p.hemisphere ? k : q, e = c, null !== m && (k = -c, c = p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 - (l[m].indexLabelTextBlock.y + l[m].indexLabelTextBlock.height /
              2), c - k < x && (d = -k, m = h(m, d, f + 1), +m.toFixed(s) > +d.toFixed(s) && (e = c > x ? -(c - x) : -(k - (m - d)))))) : 0 < c && (m = "right" === p.hemisphere ? q : k, e = c, null !== m && (k = c, c = l[m].indexLabelTextBlock.y - l[m].indexLabelTextBlock.height / 2 - (p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2), c - k < x && (d = k, m = h(m, d, f + 1), +m.toFixed(s) < +d.toFixed(s) && (e = c > x ? c - x : k - (d - m)))));
            e && (f = p.indexLabelTextBlock.y + e, c = 0, c = "right" === p.hemisphere ? z.x + Math.sqrt(Math.pow(r, 2) - Math.pow(f - z.y, 2)) : z.x - Math.sqrt(Math.pow(r, 2) - Math.pow(f - z.y, 2)), p.midAngle >
              Math.PI / 2 - v && p.midAngle < Math.PI / 2 + v ? (d = (a - 1 + l.length) % l.length, d = l[d], a = l[(a + 1 + l.length) % l.length], "left" === p.hemisphere && "right" === d.hemisphere && c > d.indexLabelTextBlock.x ? c = d.indexLabelTextBlock.x - 15 : "right" === p.hemisphere && ("left" === a.hemisphere && c < a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x + 15)) : p.midAngle > 3 * Math.PI / 2 - v && p.midAngle < 3 * Math.PI / 2 + v && (d = (a - 1 + l.length) % l.length, d = l[d], a = l[(a + 1 + l.length) % l.length], "right" === p.hemisphere && "left" === d.hemisphere && c < d.indexLabelTextBlock.x ? c = d.indexLabelTextBlock.x +
                15 : "left" === p.hemisphere && ("right" === a.hemisphere && c > a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x - 15)), p.indexLabelTextBlock.y = f, p.indexLabelTextBlock.x = c, p.indexLabelAngle = Math.atan2(p.indexLabelTextBlock.y - z.y, p.indexLabelTextBlock.x - z.x))
          }
          return e
        }
  
        function k() {
          var a = w.plotArea.ctx;
          a.fillStyle = "grey";
          a.strokeStyle = "grey";
          a.font = "16px Arial";
          a.textBaseline = "middle";
          for (var c = a = 0, f = 0, e = !0, c = 0; 10 > c && (1 > c || 0 < f); c++) {
            if (m.radius || !m.radius && "undefined" !== typeof m.innerRadius && null !== m.innerRadius &&
              B - f <= F) e = !1;
            e && (B -= f);
            f = 0;
            if ("inside" !== m.indexLabelPlacement) {
              r = B * u;
              for (a = 0; a < n.length; a++) {
                var d = l[a];
                d.indexLabelTextBlock.x = z.x + r * Math.cos(d.midAngle);
                d.indexLabelTextBlock.y = z.y + r * Math.sin(d.midAngle);
                d.indexLabelAngle = d.midAngle;
                d.radius = B;
                d.percentInnerRadius = E
              }
              for (var C, t, a = 0; a < n.length; a++) {
                var d = l[a],
                  v = g(a);
                if (null !== v) {
                  C = l[a];
                  t = l[v];
                  var D = 0,
                    D = b(C, t) - x;
                  if (0 > D) {
                    for (var va = t = 0, A = 0; A < n.length; A++) A !== a && l[A].hemisphere === d.hemisphere && (l[A].indexLabelTextBlock.y < d.indexLabelTextBlock.y ? t++ :
                      va++);
                    t = D / (t + va || 1) * va;
                    var va = -1 * (D - t),
                      K = A = 0;
                    "right" === d.hemisphere ? (A = h(a, t), va = -1 * (D - A), K = h(v, va), +K.toFixed(s) < +va.toFixed(s) && +A.toFixed(s) <= +t.toFixed(s) && h(a, -(va - K))) : (A = h(v, t), va = -1 * (D - A), K = h(a, va), +K.toFixed(s) < +va.toFixed(s) && +A.toFixed(s) <= +t.toFixed(s) && h(v, -(va - K)))
                  }
                }
              }
            } else
              for (a = 0; a < n.length; a++) d = l[a], r = "pie" === m.type ? 0.7 * B : 0.8 * B, v = z.x + r * Math.cos(d.midAngle), t = z.y + r * Math.sin(d.midAngle), d.indexLabelTextBlock.x = v, d.indexLabelTextBlock.y = t;
            for (a = 0; a < n.length; a++)
              if (d = l[a], v = d.indexLabelTextBlock.measureText(),
                0 !== v.height && 0 !== v.width) v = v = 0, "right" === d.hemisphere ? (v = q.x2 - (d.indexLabelTextBlock.x + d.indexLabelTextBlock.width + p), v *= -1) : v = q.x1 - (d.indexLabelTextBlock.x - d.indexLabelTextBlock.width - p), 0 < v && (!e && d.indexLabelText && (t = "right" === d.hemisphere ? q.x2 - d.indexLabelTextBlock.x : d.indexLabelTextBlock.x - q.x1, 0.3 * d.indexLabelTextBlock.maxWidth > t ? d.indexLabelText = "" : d.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * d.indexLabelTextBlock.maxWidth < t && (d.indexLabelTextBlock.x -= "right" === d.hemisphere ? 2 : -2)), Math.abs(d.indexLabelTextBlock.y -
                d.indexLabelTextBlock.height / 2 - z.y) < B || Math.abs(d.indexLabelTextBlock.y + d.indexLabelTextBlock.height / 2 - z.y) < B) && (v /= Math.abs(Math.cos(d.indexLabelAngle)), 9 < v && (v *= 0.3), v > f && (f = v)), v = v = 0, 0 < d.indexLabelAngle && d.indexLabelAngle < Math.PI ? (v = q.y2 - (d.indexLabelTextBlock.y + d.indexLabelTextBlock.height / 2 + 5), v *= -1) : v = q.y1 - (d.indexLabelTextBlock.y - d.indexLabelTextBlock.height / 2 - 5), 0 < v && (!e && d.indexLabelText && (t = 0 < d.indexLabelAngle && d.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a, v * t) && h(a, 2 * t)), Math.abs(d.indexLabelTextBlock.x -
                z.x) < B && (v /= Math.abs(Math.sin(d.indexLabelAngle)), 9 < v && (v *= 0.3), v > f && (f = v)));
            var G = function(a, b, c) {
              for (var f = [], g = 0; f.push(l[b]), b !== c; b = (b + 1 + n.length) % n.length);
              f.sort(function(a, b) {
                return a.y - b.y
              });
              for (b = 0; b < f.length; b++)
                if (c = f[b], g < 0.7 * a) g += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                else break
            };
            (function() {
              for (var a = -1, c = -1, f = 0, h = !1, e = 0; e < n.length; e++)
                if (h = !1, C = l[e], C.indexLabelText) {
                  var d = g(e);
                  if (null !== d) {
                    var m = l[d];
                    D = 0;
                    D = b(C, m);
                    var q;
                    if (q = 0 > D) {
                      q = C.indexLabelTextBlock.x;
                      var k = C.indexLabelTextBlock.y - C.indexLabelTextBlock.height / 2,
                        x = C.indexLabelTextBlock.y + C.indexLabelTextBlock.height / 2,
                        t = m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2,
                        w = m.indexLabelTextBlock.x + m.indexLabelTextBlock.width,
                        v = m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2;
                      q = C.indexLabelTextBlock.x + C.indexLabelTextBlock.width < m.indexLabelTextBlock.x - p || q > w + p || k > v + p || x < t - p ? !1 : !0
                    }
                    q ? (0 > a && (a = e), d !== a && (c = d, f += -D), 0 === e % Math.max(n.length /
                      10, 3) && (h = !0)) : h = !0;
                    h && (0 < f && 0 <= a && 0 <= c) && (G(f, a, c), c = a = -1, f = 0)
                  }
                } 0 < f && G(f, a, c)
            })()
          }
        }
  
        function t() {
          w.plotArea.layoutManager.reset();
          w.title && (w.title.dockInsidePlotArea || "center" === w.title.horizontalAlign && "center" === w.title.verticalAlign) && w.title.render();
          if (w.subtitles)
            for (var a = 0; a < w.subtitles.length; a++) {
              var b = w.subtitles[a];
              (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
            }
          w.legend && (w.legend.dockInsidePlotArea || "center" === w.legend.horizontalAlign && "center" ===
            w.legend.verticalAlign) && (w.legend.setLayout(), w.legend.render())
        }
        var w = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          var m = this.data[a.dataSeriesIndexes[0]],
            n = m.dataPoints,
            p = 10,
            q = this.plotArea,
            l = m.dataPointEOs,
            x = 2,
            r, u = 1.3,
            v = 20 / 180 * Math.PI,
            s = 6,
            z = {
              x: (q.x2 + q.x1) / 2,
              y: (q.y2 + q.y1) / 2
            },
            A = 0;
          a = !1;
          for (var D = 0; D < n.length; D++) A += Math.abs(n[D].y), !a && ("undefined" !== typeof n[D].indexLabel && null !== n[D].indexLabel && 0 < n[D].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[D].label && null !== n[D].label &&
            0 < n[D].label.toString().length) && (a = !0);
          if (0 !== A) {
            a = a || "undefined" !== typeof m.indexLabel && null !== m.indexLabel && 0 < m.indexLabel.toString().length;
            var B = "inside" !== m.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
            m.radius && (B = Va(m.radius, B));
            var F = "undefined" !== typeof m.innerRadius && null !== m.innerRadius ? Va(m.innerRadius, B) : 0.7 * B;
            m.radius = B;
            "doughnut" === m.type && (m.innerRadius = F);
            var E = Math.min(F / B, (B - 1) / B);
            this.pieDoughnutClickHandler = function(a) {
              w.isAnimating ||
                !e(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && w._animator.animate(0, 500, function(a) {
                  c(a);
                  t();
                  w.dispatchEvent("dataAnimationIterationEnd", {
                    chart: w
                  });
                  w.dispatchEvent("dataAnimationEnd", {
                    chart: w
                  })
                }))
            };
            f();
            k();
            k();
            k();
            k();
            this.disableToolTip = !0;
            this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
              var b = w.plotArea.ctx;
              b.clearRect(q.x1, q.y1, q.width, q.height);
              b.fillStyle = w.backgroundColor;
              b.fillRect(q.x1,
                q.y1, q.width, q.height);
              for (var b = l[0].startAngle + 2 * Math.PI * a, c = 0; c < n.length; c++) {
                var f = 0 === c ? l[c].startAngle : g,
                  g = f + (l[c].endAngle - l[c].startAngle),
                  h = !1;
                g > b && (g = b, h = !0);
                var e = n[c].color ? n[c].color : m._colorSet[c % m._colorSet.length];
                g > f && d(w.plotArea.ctx, l[c].center, l[c].radius, e, m.type, f, g, m.fillOpacity, l[c].percentInnerRadius);
                if (h) break
              }
              t();
              w.dispatchEvent("dataAnimationIterationEnd", {
                chart: w
              });
              1 <= a && w.dispatchEvent("dataAnimationEnd", {
                chart: w
              })
            }, function() {
              w.disableToolTip = !1;
              w._animator.animate(0,
                w.animatedRender ? 500 : 0,
                function(a) {
                  c(a);
                  t();
                  w.dispatchEvent("dataAnimationIterationEnd", {
                    chart: w
                  })
                });
              w.dispatchEvent("dataAnimationEnd", {
                chart: w
              })
            })
          }
        }
      };
      var t = function(a, f, c, b) {
        "undefined" === typeof c && (c = 1);
        0 >= Math.round(f.y4 - f.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(f.x1), Math.round(f.y1)), a.lineTo(Math.round(f.x2), Math.round(f.y2)), a.lineTo(Math.round(f.x3), Math.round(f.y3)), a.lineTo(Math.round(f.x4), Math.round(f.y4)), "undefined" !== f.x5 && (a.lineTo(Math.round(f.x5), Math.round(f.y5)),
          a.lineTo(Math.round(f.x6), Math.round(f.y6))), a.closePath(), a.fillStyle = b ? b : f.color, a.fill(), a.globalAplha = 1, a.restore())
      };
      s.prototype.renderFunnel = function(a) {
        function f() {
          for (var a = 0, b = [], c = 0; c < y.length; c++) {
            if ("undefined" === typeof y[c].y) return -1;
            y[c].y = "number" === typeof y[c].y ? y[c].y : 0;
            a += Math.abs(y[c].y)
          }
          if (0 === a) return -1;
          for (c = b[0] = 0; c < y.length; c++) b.push(Math.abs(y[c].y) * F / a);
          return b
        }
  
        function c() {
          var a = $,
            b = Z,
            c = T,
            f = aa,
            g, h;
          g = Q;
          h = N - O;
          f = Math.abs((h - g) * (b - a + (f - c)) / 2);
          c = aa - T;
          g = h - g;
          h = c * (h - N);
          h = Math.abs(h);
          h = f + h;
          for (var f = [], e = 0, l = 0; l < y.length; l++) {
            if ("undefined" === typeof y[l].y) return -1;
            y[l].y = "number" === typeof y[l].y ? y[l].y : 0;
            e += Math.abs(y[l].y)
          }
          if (0 === e) return -1;
          for (var d = f[0] = 0, m = 0, p, n, b = b - a, d = !1, l = 0; l < y.length; l++) a = Math.abs(y[l].y) * h / e, d ? p = 0 == Number(c.toFixed(3)) ? 0 : a / c : (n = ia * ia * b * b - 4 * Math.abs(ia) * a, 0 > n ? (n = c, d = (b + n) * (g - m) / 2, a -= d, p = g - m, m += g - m, p += 0 == n ? 0 : a / n, m += a / n, d = !0) : (p = (Math.abs(ia) * b - Math.sqrt(n)) / 2, n = b - 2 * p / Math.abs(ia), m += p, m > g && (m -= p, n = c, d = (b + n) * (g - m) / 2, a -= d, p = g - m, m += g - m, p += a / n, m += a / n, d = !0),
            b = n)), f.push(p);
          return f
        }
  
        function b() {
          if (v && y) {
            for (var a, b, c, f, g, h, d, m, p, n, q, k, C, x, t, w = [], r = [], s = {
                percent: null,
                total: null
              }, J = null, B = 0; B < y.length; B++) t = U[B], t = "undefined" !== typeof t.x5 ? (t.y2 + t.y4) / 2 : (t.y2 + t.y3) / 2, t = l(t).x2 + 1, w[B] = M - t - V;
            t = 0.5 * V;
            for (var B = 0, A = y.length - 1; B < y.length || 0 <= A; B++, A--) {
              b = v.reversed ? y[A] : y[B];
              a = b.color ? b.color : v.reversed ? v._colorSet[(y.length - 1 - B) % v._colorSet.length] : v._colorSet[B % v._colorSet.length];
              c = b.indexLabelPlacement || v.indexLabelPlacement || "outside";
              x = b.indexLabelTextAlign ||
                v.indexLabelTextAlign || "left";
              f = b.indexLabelBackgroundColor || v.indexLabelBackgroundColor || (u ? "transparent" : null);
              g = b.indexLabelFontColor || v.indexLabelFontColor || "#979797";
              h = e(b.indexLabelFontSize) ? v.indexLabelFontSize : b.indexLabelFontSize;
              d = b.indexLabelFontStyle || v.indexLabelFontStyle || "normal";
              m = b.indexLabelFontFamily || v.indexLabelFontFamily || "arial";
              p = b.indexLabelFontWeight || v.indexLabelFontWeight || "normal";
              a = b.indexLabelLineColor || v.options.indexLabelLineColor || a;
              n = "number" === typeof b.indexLabelLineThickness ?
                b.indexLabelLineThickness : "number" === typeof v.indexLabelLineThickness ? v.indexLabelLineThickness : 2;
              q = b.indexLabelLineDashType || v.indexLabelLineDashType || "solid";
              k = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof v.indexLabelWrap ? v.indexLabelWrap : !0;
              C = v.dataPointIds[B];
              z._eventManager.objectMap[C] = {
                id: C,
                objectType: "dataPoint",
                dataPointIndex: B,
                dataSeriesIndex: 0,
                funnelSection: U[v.reversed ? y.length - 1 - B : B]
              };
              "inside" === v.indexLabelPlacement && (w[B] = B !== ja ? v.reversed ? U[B].x2 - U[B].x1 :
                U[B].x3 - U[B].x4 : U[B].x3 - U[B].x6, 20 > w[B] && (w[B] = B !== ja ? v.reversed ? U[B].x3 - U[B].x4 : U[B].x2 - U[B].x1 : U[B].x2 - U[B].x1, w[B] /= 2));
              C = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : v.options.indexLabelMaxWidth ? v.indexLabelMaxWidth : w[B];
              if (C > w[B] || 0 > C) C = w[B];
              r[B] = "inside" === v.indexLabelPlacement ? U[B].height : !1;
              s = z.getPercentAndTotal(v, b);
              if (v.indexLabelFormatter || b.indexLabelFormatter) J = {
                chart: z.options,
                dataSeries: v,
                dataPoint: b,
                total: s.total,
                percent: s.percent
              };
              b = b.indexLabelFormatter ? b.indexLabelFormatter(J) : b.indexLabel ?
                z.replaceKeywordsWithValue(b.indexLabel, b, v, B) : v.indexLabelFormatter ? v.indexLabelFormatter(J) : v.indexLabel ? z.replaceKeywordsWithValue(v.indexLabel, b, v, B) : b.label ? b.label : "";
              0 >= n && (n = 0);
              1E3 > C && 1E3 - C < t && (C += 1E3 - C);
              P.roundRect || Ha(P);
              c = new oa(P, {
                fontSize: h,
                fontFamily: m,
                fontColor: g,
                fontStyle: d,
                fontWeight: p,
                horizontalAlign: c,
                textAlign: x,
                backgroundColor: f,
                maxWidth: C,
                maxHeight: !1 === r[B] ? k ? 4.28571429 * h : 1.5 * h : r[B],
                text: b,
                padding: la
              });
              c.measureText();
              I.push({
                textBlock: c,
                id: v.reversed ? A : B,
                isDirty: !1,
                lineColor: a,
                lineThickness: n,
                lineDashType: q,
                height: c.height < c.maxHeight ? c.height : c.maxHeight,
                width: c.width < c.maxWidth ? c.width : c.maxWidth
              })
            }
          }
        }
  
        function g() {
          var a, b, c, f, g, h = [];
          g = !1;
          c = 0;
          for (var e, l = M - Z - V / 2, l = v.options.indexLabelMaxWidth ? v.indexLabelMaxWidth > l ? l : v.indexLabelMaxWidth : l, d = I.length - 1; 0 <= d; d--) {
            e = y[I[d].id];
            c = I[d];
            f = c.textBlock;
            b = (a = q(d) < U.length ? I[q(d)] : null) ? a.textBlock : null;
            c = c.height;
            a && f.y + c + la > b.y && (g = !0);
            c = e.indexLabelMaxWidth || l;
            if (c > l || 0 > c) c = l;
            h.push(c)
          }
          if (g)
            for (d = I.length - 1; 0 <= d; d--) a = U[d], I[d].textBlock.maxWidth =
              h[h.length - (d + 1)], I[d].textBlock.measureText(), I[d].textBlock.x = M - l, c = I[d].textBlock.height < I[d].textBlock.maxHeight ? I[d].textBlock.height : I[d].textBlock.maxHeight, g = I[d].textBlock.width < I[d].textBlock.maxWidth ? I[d].textBlock.width : I[d].textBlock.maxWidth, I[d].height = c, I[d].width = g, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, I[d].textBlock.y = c - I[d].height / 2, v.reversed ? (I[d].textBlock.y + I[d].height > W + K && (I[d].textBlock.y = W + K - I[d].height), I[d].textBlock.y < ba - K && (I[d].textBlock.y = ba - K)) :
              (I[d].textBlock.y < W - K && (I[d].textBlock.y = W - K), I[d].textBlock.y + I[d].height > ba + K && (I[d].textBlock.y = ba + K - I[d].height))
        }
  
        function h() {
          var a, b, c, f;
          if ("inside" !== v.indexLabelPlacement)
            for (var g = 0; g < U.length; g++) 0 == I[g].textBlock.text.length ? I[g].isDirty = !0 : (a = U[g], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = v.reversed ? "undefined" !== typeof a.x5 ? c > ea ? l(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < ea ? l(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, I[g].textBlock.x = b + V, I[g].textBlock.y =
              c - I[g].height / 2, v.reversed ? (I[g].textBlock.y + I[g].height > W + K && (I[g].textBlock.y = W + K - I[g].height), I[g].textBlock.y < ba - K && (I[g].textBlock.y = ba - K)) : (I[g].textBlock.y < W - K && (I[g].textBlock.y = W - K), I[g].textBlock.y + I[g].height > ba + K && (I[g].textBlock.y = ba + K - I[g].height)));
          else
            for (g = 0; g < U.length; g++) 0 == I[g].textBlock.text.length ? I[g].isDirty = !0 : (a = U[g], b = a.height, c = I[g].height, f = I[g].width, b >= c ? (b = g != ja ? (a.x4 + a.x3) / 2 - f / 2 : (a.x5 + a.x4) / 2 - f / 2, c = g != ja ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, I[g].textBlock.x = b, I[g].textBlock.y =
              c) : I[g].isDirty = !0)
        }
  
        function d() {
          function a(b, c) {
            var f;
            if (0 > b || b >= I.length) return 0;
            var g, h = I[b].textBlock;
            if (0 > c) {
              c *= -1;
              g = p(b);
              f = k(g, b);
              if (f >= c) return h.y -= c, c;
              if (0 == b) return 0 < f && (h.y -= f), f;
              f += a(g, -(c - f));
              0 < f && (h.y -= f);
              return f
            }
            g = q(b);
            f = k(b, g);
            if (f >= c) return h.y += c, c;
            if (b == U.length - 1) return 0 < f && (h.y += f), f;
            f += a(g, c - f);
            0 < f && (h.y += f);
            return f
          }
  
          function b() {
            var a, f, g, h, d = 0,
              l;
            h = (N - Q + 2 * K) / n;
            l = n;
            for (var e, m = 1; m < l; m++) {
              g = m * h;
              for (var k = I.length - 1; 0 <= k; k--) !I[k].isDirty && (I[k].textBlock.y < g && I[k].textBlock.y +
                I[k].height > g) && (e = q(k), !(e >= I.length - 1) && I[k].textBlock.y + I[k].height + la > I[e].textBlock.y && (I[k].textBlock.y = I[k].textBlock.y + I[k].height - g > g - I[k].textBlock.y ? g + 1 : g - I[k].height - 1))
            }
            for (e = U.length - 1; 0 < e; e--)
              if (!I[e].isDirty) {
                g = p(e);
                if (0 > g && (g = 0, I[g].isDirty)) break;
                if (I[e].textBlock.y < I[g].textBlock.y + I[g].height) {
                  f = f || e;
                  h = e;
                  for (l = 0; I[h].textBlock.y < I[g].textBlock.y + I[g].height + la;) {
                    a = a || I[h].textBlock.y + I[h].height;
                    l += I[h].height;
                    l += la;
                    h = g;
                    if (0 >= h) {
                      h = 0;
                      l += I[h].height;
                      break
                    }
                    g = p(h);
                    if (0 > g) {
                      h = 0;
                      l += I[h].height;
                      break
                    }
                  }
                  if (h != e) {
                    d = I[h].textBlock.y;
                    a -= d;
                    a = l - a;
                    d = c(a, f, h);
                    break
                  }
                }
              } return d
          }
  
          function c(a, b, f) {
            var g = [],
              h = 0,
              d = 0;
            for (a = Math.abs(a); f <= b; f++) g.push(U[f]);
            g.sort(function(a, b) {
              return a.height - b.height
            });
            for (f = 0; f < g.length; f++)
              if (b = g[f], h < a) d++, h += I[b.id].height + la, I[b.id].textBlock.text = "", I[b.id].indexLabelText = "", I[b.id].isDirty = !0, I[b.id].textBlock.measureText();
              else break;
            return d
          }
          for (var f, g, h, l, e, m, n = 1, C = 0; C < 2 * n; C++) {
            for (var t = I.length - 1; 0 <= t && !(0 <= p(t) && p(t), h = I[t], l = h.textBlock, m = (e = q(t) < U.length ?
                I[q(t)] : null) ? e.textBlock : null, f = +h.height.toFixed(6), g = +l.y.toFixed(6), !h.isDirty && (e && g + f + la > +m.y.toFixed(6)) && (f = l.y + f + la - m.y, g = a(t, -f), g < f && (0 < g && (f -= g), g = a(q(t), f), g != f))); t--);
            b()
          }
        }
  
        function k(a, b) {
          return (b < U.length ? I[b].textBlock.y : v.reversed ? W + K : ba + K) - (0 > a ? v.reversed ? ba - K : W - K : I[a].textBlock.y + I[a].height + la)
        }
  
        function r(a, b, c) {
          var f, g, d, l = [],
            e = K,
            p = []; - 1 !== b && (0 <= fa.indexOf(b) ? (g = fa.indexOf(b), fa.splice(g, 1)) : (fa.push(b), fa = fa.sort(function(a, b) {
            return a - b
          })));
          if (0 === fa.length) l = pa;
          else {
            g = K *
              (1 != fa.length || 0 != fa[0] && fa[0] != U.length - 1 ? 2 : 1) / m();
            for (var q = 0; q < U.length; q++) {
              if (1 == fa.length && 0 == fa[0]) {
                if (0 === q) {
                  l.push(pa[q]);
                  f = e;
                  continue
                }
              } else 0 === q && (f = -1 * e);
              l.push(pa[q] + f);
              if (0 <= fa.indexOf(q) || q < U.length && 0 <= fa.indexOf(q + 1)) f += g
            }
          }
          d = function() {
            for (var a = [], b = 0; b < U.length; b++) a.push(l[b] - U[b].y1);
            return a
          }();
          var k = {
            startTime: (new Date).getTime(),
            duration: c || 500,
            easingFunction: function(a, b, c, f) {
              return w.easing.easeOutQuart(a, b, c, f)
            },
            changeSection: function(a) {
              for (var b, c, f = 0; f < U.length; f++) b =
                d[f], c = U[f], b *= a, "undefined" === typeof p[f] && (p[f] = 0), 0 > p && (p *= -1), c.y1 += b - p[f], c.y2 += b - p[f], c.y3 += b - p[f], c.y4 += b - p[f], c.y5 && (c.y5 += b - p[f], c.y6 += b - p[f]), p[f] = b
            }
          };
          a._animator.animate(0, c, function(c) {
            var f = a.plotArea.ctx || a.ctx;
            ra = !0;
            f.clearRect(A.x1, A.y1, A.x2 - A.x1, A.y2 - A.y1);
            f.fillStyle = a.backgroundColor;
            f.fillRect(A.x1, A.y1, A.width, A.height);
            k.changeSection(c, b);
            var g = {};
            g.dataSeries = v;
            g.dataPoint = v.reversed ? v.dataPoints[y.length - 1 - b] : v.dataPoints[b];
            g.index = v.reversed ? y.length - 1 - b : b;
            a.toolTip.highlightObjects([g]);
            for (g = 0; g < U.length; g++) t(f, U[g], v.fillOpacity);
            s(f);
            G && ("inside" !== v.indexLabelPlacement ? n(f) : h(), x(f));
            1 <= c && (ra = !1)
          }, null, w.easing.easeOutQuart)
        }
  
        function m() {
          for (var a = 0, b = 0; b < U.length - 1; b++)(0 <= fa.indexOf(b) || 0 <= fa.indexOf(b + 1)) && a++;
          return a
        }
  
        function n(a) {
          for (var b, c, f, g, h = 0; h < U.length; h++) g = 1 === I[h].lineThickness % 2 ? 0.5 : 0, c = ((U[h].y2 + U[h].y4) / 2 << 0) + g, b = l(c).x2 - 1, f = I[h].textBlock.x, g = (I[h].textBlock.y + I[h].height / 2 << 0) + g, I[h].isDirty || 0 == I[h].lineThickness || (a.strokeStyle = I[h].lineColor, a.lineWidth =
            I[h].lineThickness, a.setLineDash && a.setLineDash(S(I[h].lineDashType, I[h].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(f, g), a.stroke())
        }
  
        function p(a) {
          for (a -= 1; - 1 <= a && -1 != a && I[a].isDirty; a--);
          return a
        }
  
        function q(a) {
          for (a += 1; a <= U.length && a != U.length && I[a].isDirty; a++);
          return a
        }
  
        function l(a) {
          for (var b, c = 0; c < y.length; c++)
            if (U[c].y1 < a && U[c].y4 > a) {
              b = U[c];
              break
            } return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), {
            x1: a,
            x2: a
          }) : -1
        }
  
        function x(a) {
          for (var b = 0; b < U.length; b++) I[b].isDirty || (a && (I[b].textBlock.ctx = a), I[b].textBlock.render(!0))
        }
  
        function s(a) {
          z.plotArea.layoutManager.reset();
          a.roundRect || Ha(a);
          z.title && (z.title.dockInsidePlotArea || "center" === z.title.horizontalAlign && "center" === z.title.verticalAlign) && (z.title.ctx = a, z.title.render());
          if (z.subtitles)
            for (var b = 0; b < z.subtitles.length; b++) {
              var c = z.subtitles[b];
              if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) z.subtitles.ctx =
                a, c.render()
            }
          z.legend && (z.legend.dockInsidePlotArea || "center" === z.legend.horizontalAlign && "center" === z.legend.verticalAlign) && (z.legend.ctx = a, z.legend.setLayout(), z.legend.render());
          ka.fNg && ka.fNg(z)
        }
        var z = this;
        if (!(0 >= a.dataSeriesIndexes.length)) {
          for (var v = this.data[a.dataSeriesIndexes[0]], y = v.dataPoints, A = this.plotArea, K = 0.025 * A.width, D = 0.01 * A.width, B = 0, F = A.height - 2 * K, E = Math.min(A.width - 2 * D, 2.8 * A.height), G = !1, L = 0; L < y.length; L++)
            if (!G && ("undefined" !== typeof y[L].indexLabel && null !== y[L].indexLabel &&
                0 < y[L].indexLabel.toString().length) && (G = !0), !G && ("undefined" !== typeof y[L].label && null !== y[L].label && 0 < y[L].label.toString().length) && (G = !0), !G && "function" === typeof v.indexLabelFormatter || "function" === typeof y[L].indexLabelFormatter) G = !0;
          G = G || "undefined" !== typeof v.indexLabel && null !== v.indexLabel && 0 < v.indexLabel.toString().length;
          "inside" !== v.indexLabelPlacement && G || (D = (A.width - 0.75 * E) / 2);
          var L = A.x1 + D,
            M = A.x2 - D,
            Q = A.y1 + K,
            N = A.y2 - K,
            P = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
          if (0 != v.length && (v.dataPoints &&
              v.visible) && 0 !== y.length) {
            var O, H;
            a = 75 * E / 100;
            var V = 30 * (M - a) / 100;
            "funnel" === v.type ? (O = e(v.options.neckHeight) ? 0.35 * F : v.neckHeight, H = e(v.options.neckWidth) ? 0.25 * a : v.neckWidth, "string" === typeof O && O.match(/%$/) ? (O = parseInt(O), O = O * F / 100) : O = parseInt(O), "string" === typeof H && H.match(/%$/) ? (H = parseInt(H), H = H * a / 100) : H = parseInt(H), O > F ? O = F : 0 >= O && (O = 0), H > a ? H = a - 0.5 : 0 >= H && (H = 0)) : "pyramid" === v.type && (H = O = 0, v.reversed = v.reversed ? !1 : !0);
            var D = L + a / 2,
              $ = L,
              Z = L + a,
              W = v.reversed ? N : Q,
              T = D - H / 2,
              aa = D + H / 2,
              ea = v.reversed ? Q + O : N - O,
              ba = v.reversed ? Q : N;
            a = [];
            var D = [],
              U = [],
              E = [],
              X = Q,
              ja, ia = (ea - W) / (T - $),
              ma = -ia,
              L = "area" === (v.valueRepresents ? v.valueRepresents : "height") ? c() : f();
            if (-1 !== L) {
              if (v.reversed)
                for (E.push(X), H = L.length - 1; 0 < H; H--) X += L[H], E.push(X);
              else
                for (H = 0; H < L.length; H++) X += L[H], E.push(X);
              if (v.reversed)
                for (H = 0; H < L.length; H++) E[H] < ea ? (a.push(T), D.push(aa), ja = H) : (a.push((E[H] - W + ia * $) / ia), D.push((E[H] - W + ma * Z) / ma));
              else
                for (H = 0; H < L.length; H++) E[H] < ea ? (a.push((E[H] - W + ia * $) / ia), D.push((E[H] - W + ma * Z) / ma), ja = H) : (a.push(T), D.push(aa));
              for (H = 0; H < L.length - 1; H++) X = v.reversed ? y[y.length - 1 - H].color ? y[y.length - 1 - H].color : v._colorSet[(y.length - 1 - H) % v._colorSet.length] : y[H].color ? y[H].color : v._colorSet[H % v._colorSet.length], H === ja ? U.push({
                x1: a[H],
                y1: E[H],
                x2: D[H],
                y2: E[H],
                x3: aa,
                y3: ea,
                x4: D[H + 1],
                y4: E[H + 1],
                x5: a[H + 1],
                y5: E[H + 1],
                x6: T,
                y6: ea,
                id: H,
                height: E[H + 1] - E[H],
                color: X
              }) : U.push({
                x1: a[H],
                y1: E[H],
                x2: D[H],
                y2: E[H],
                x3: D[H + 1],
                y3: E[H + 1],
                x4: a[H + 1],
                y4: E[H + 1],
                id: H,
                height: E[H + 1] - E[H],
                color: X
              });
              var la = 2,
                I = [],
                ra = !1,
                fa = [],
                pa = [],
                L = !1;
              a = a = 0;
              Ea(fa);
              for (H = 0; H <
                y.length; H++) y[H].exploded && (L = !0, v.reversed ? fa.push(y.length - 1 - H) : fa.push(H));
              P.clearRect(A.x1, A.y1, A.width, A.height);
              P.fillStyle = z.backgroundColor;
              P.fillRect(A.x1, A.y1, A.width, A.height);
              if (G && v.visible && (b(), h(), g(), "inside" !== v.indexLabelPlacement)) {
                d();
                for (H = 0; H < y.length; H++) I[H].isDirty || (a = I[H].textBlock.x + I[H].width, a = (M - a) / 2, 0 == H && (B = a), B > a && (B = a));
                for (H = 0; H < U.length; H++) U[H].x1 += B, U[H].x2 += B, U[H].x3 += B, U[H].x4 += B, U[H].x5 && (U[H].x5 += B, U[H].x6 += B), I[H].textBlock.x += B
              }
              for (H = 0; H < U.length; H++) B =
                U[H], t(P, B, v.fillOpacity), pa.push(B.y1);
              s(P);
              G && v.visible && ("inside" === v.indexLabelPlacement || z.animationEnabled || n(P), z.animationEnabled || x());
              if (!G)
                for (H = 0; H < y.length; H++) B = v.dataPointIds[H], a = {
                  id: B,
                  objectType: "dataPoint",
                  dataPointIndex: H,
                  dataSeriesIndex: 0,
                  funnelSection: U[v.reversed ? y.length - 1 - H : H]
                }, z._eventManager.objectMap[B] = a;
              !z.animationEnabled && L ? r(z, -1, 0) : z.animationEnabled && !z.animatedRender && r(z, -1, 0);
              this.funnelPyramidClickHandler = function(a) {
                var b = -1;
                if (!ra && !z.isAnimating && (e(a.dataSeries.explodeOnClick) ||
                    a.dataSeries.explodeOnClick) && (b = v.reversed ? y.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <= b)) {
                  a = b;
                  if ("funnel" === v.type || "pyramid" === v.type) v.reversed ? y[y.length - 1 - a].exploded = y[y.length - 1 - a].exploded ? !1 : !0 : y[a].exploded = y[a].exploded ? !1 : !0;
                  r(z, b, 500)
                }
              };
              return {
                source: P,
                dest: this.plotArea.ctx,
                animationCallback: function(a, b) {
                  w.fadeInAnimation(a, b);
                  1 <= a && (r(z, -1, 500), s(z.plotArea.ctx || z.ctx))
                },
                easingFunction: w.easing.easeInQuad,
                animationBase: 0
              }
            }
          }
        }
      };
      s.prototype.requestAnimFrame = function() {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1E3 / 60)
          }
      }();
      s.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
      s.prototype.set = function(a, f, c) {
        c = "undefined" === typeof c ? !0 : c;
        "options" === a ? (this.options = f,
          c && this.render()) : s.base.set.call(this, a, f, c)
      };
      s.prototype.exportChart = function(a) {
        a = "undefined" === typeof a ? {} : a;
        var f = a.format ? a.format : "png",
          c = a.fileName ? a.fileName : this.exportFileName;
        if (a.toDataURL) return this.canvas.toDataURL("image/" + f);
        db(this.canvas, f, c)
      };
      s.prototype.print = function() {
        var a = this.exportChart({
            toDataURL: !0
          }),
          f = document.createElement("iframe");
        f.setAttribute("class", "canvasjs-chart-print-frame");
        Q(f, {
          position: "absolute",
          width: "100%",
          border: "0px",
          margin: "0px 0px 0px 0px",
          padding: "0px 0px 0px 0px"
        });
        f.style.height = this.height + "px";
        this._canvasJSContainer.appendChild(f);
        var c = this,
          b = f.contentWindow || f.contentDocument.document || f.contentDocument;
        b.document.open();
        b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
        b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
        b.document.close();
        setTimeout(function() {
          b.focus();
          b.print();
          setTimeout(function() {
              c._canvasJSContainer.removeChild(f)
            },
            1E3)
        }, 500)
      };
      s.prototype.getPercentAndTotal = function(a, f) {
        var c = null,
          b = null,
          g = c = null;
        if (0 <= a.type.indexOf("stacked")) b = 0, c = f.x.getTime ? f.x.getTime() : f.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], g = isNaN(f.y) ? 0 : 0 === c ? 0 : 100 * (f.y / c));
        else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
          for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
          g = isNaN(f.y) ? 0 : 100 * (f.y / b)
        }
        return {
          percent: g,
          total: b
        }
      };
      s.prototype.replaceKeywordsWithValue =
        function(a, f, c, b, g) {
          var h = this;
          g = "undefined" === typeof g ? 0 : g;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var d = "#percent",
              e = "#total",
              k = this.getPercentAndTotal(c, f),
              e = isNaN(k.total) ? e : k.total,
              d = isNaN(k.percent) ? d : k.percent;
            do {
              k = "";
              if (c.percentFormatString) k = c.percentFormatString;
              else {
                var k = "#,##0.",
                  m = Math.max(Math.ceil(Math.log(1 / Math.abs(d)) / Math.LN10), 2);
                if (isNaN(m) || !isFinite(m)) m =
                  2;
                for (var n = 0; n < m; n++) k += "#";
                c.percentFormatString = k
              }
              a = a.replace("#percent", ba(d, k, h._cultureInfo));
              a = a.replace("#total", ba(e, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo))
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
            if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
            a = Pa(a.slice(1, a.length - 1));
            a = a.replace("#index", g);
            var d = null;
            try {
              var l = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              l && 0 < l.length && (d = Pa(l[2]), a = Pa(l[1]))
            } catch (e) {}
            l = null;
            if ("color" === a) return "waterfall" === c.type ? f.color ? f.color : 0 < f.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[d % c._colorSet.length] : f.color ? f.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (f.hasOwnProperty(a)) l = f;
            else if (c.hasOwnProperty(a)) l = c;
            else return "";
            l = l[a];
            null !== d && (l = l[d]);
            if ("x" === a)
              if (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || f.x && f.x.getTime) {
                if (!c.axisX.logarithmic) return fa(l,
                  f.xValueFormatString ? f.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY", h._cultureInfo)
              } else return ba(l, f.xValueFormatString ? f.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", h._cultureInfo);
            else return "y" === a ? ba(l, f.yValueFormatString ? f.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########",
              h._cultureInfo) : "z" === a ? ba(l, f.zValueFormatString ? f.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", h._cultureInfo) : l
          })
        };
      ia(F, Z);
      F.prototype.setLayout = function() {
        var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
          f = a.layoutManager.getFreeSpace(),
          c = null,
          b = 0,
          g = 0,
          h = 0,
          d = 0,
          k = this.markerMargin = this.chart.options.legend && !e(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
        this.height = 0;
        var t = [],
          m = [];
        if ("top" === this.verticalAlign || "bottom" === this.verticalAlign) this.orientation = "horizontal", c = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : f.width, d = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * f.height;
        else if ("center" === this.verticalAlign) {
          this.orientation = "vertical";
          if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign) c = this.horizontalAlign;
          h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * f.width;
          d = this.maxHeight =
            null !== this.maxHeight ? this.maxHeight : f.height
        }
        this.errorMarkerColor = [];
        for (var n = 0; n < this.dataSeries.length; n++) {
          var p = this.dataSeries[n];
          if (p.dataPoints && p.dataPoints.length)
            if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
              var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType :
                M.getDefaultLegendMarker(p._linkedSeries.type) : M.getDefaultLegendMarker(p.type) : p.markerType,
                l = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                  chart: this.chart,
                  legend: this.options,
                  dataSeries: p,
                  dataPoint: null
                }) : p.name,
                x = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? e(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0],
                w = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight :
                0,
                r = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor,
                v = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
              "error" === p.type && this.errorMarkerColor.push(x);
              l = this.chart.replaceKeywordsWithValue(l, p.dataPoints[0], p, n);
              q = {
                markerType: q,
                markerColor: x,
                text: l,
                textBlock: null,
                chartType: p.type,
                markerSize: w,
                lineColor: p._colorSet[0],
                dataSeriesIndex: p.index,
                dataPointIndex: null,
                markerBorderColor: r,
                markerBorderThickness: v
              };
              t.push(q)
            } else
              for (var s =
                  0; s < p.dataPoints.length; s++) {
                var u = p.dataPoints[s],
                  q = u.legendMarkerType ? u.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : M.getDefaultLegendMarker(p.type),
                  l = u.legendText ? u.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                    chart: this.chart,
                    legend: this.options,
                    dataSeries: p,
                    dataPoint: u
                  }) : u.name ? u.name : "DataPoint: " + (s + 1),
                  x = u.legendMarkerColor ? u.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : u.color ? u.color : p.color ? p.color : p._colorSet[s % p._colorSet.length],
                  w = 0.75 * this.lineHeight,
                  r = u.legendMarkerBorderColor ? u.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : u.markerBorderColor ? u.markerBorderColor : p.markerBorderColor,
                  v = u.legendMarkerBorderThickness ? u.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : u.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0,
                  l = this.chart.replaceKeywordsWithValue(l, u, p, s),
                  q = {
                    markerType: q,
                    markerColor: x,
                    text: l,
                    textBlock: null,
                    chartType: p.type,
                    markerSize: w,
                    dataSeriesIndex: n,
                    dataPointIndex: s,
                    markerBorderColor: r,
                    markerBorderThickness: v
                  };
                (u.showInLegend || p.showInLegend && !1 !== u.showInLegend) && t.push(q)
              }
        }!0 === this.reversed && t.reverse();
        if (0 < t.length) {
          p = null;
          x = l = u = s = 0;
          u = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, h) : this.itemMaxWidth = h;
          w = 0 === w ? 0.75 * this.lineHeight : w;
          u -= w + k;
          for (n = 0; n < t.length; n++) {
            q =
              t[n];
            r = u;
            if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) r -= 2 * 0.1 * this.lineHeight;
            if (!(0 >= d || "undefined" === typeof d || 0 >= r || "undefined" === typeof r)) {
              if ("horizontal" === this.orientation) {
                q.textBlock = new oa(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: r,
                  maxHeight: this.itemWrap ? d : this.lineHeight,
                  angle: 0,
                  text: q.text,
                  horizontalAlign: "left",
                  fontSize: this.fontSize,
                  fontFamily: this.fontFamily,
                  fontWeight: this.fontWeight,
                  fontColor: this.fontColor,
                  fontStyle: this.fontStyle,
                  textBaseline: "middle"
                });
                q.textBlock.measureText();
                null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + k + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                if (!p || p.width + Math.round(q.textBlock.width + w + k + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h) p = {
                  items: [],
                  width: 0
                }, m.push(p), this.height += l, l = 0;
                l = Math.max(l, q.textBlock.height)
              } else q.textBlock = new oa(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: u,
                  maxHeight: !0 === this.itemWrap ?
                    d : 1.5 * this.fontSize,
                  angle: 0,
                  text: q.text,
                  horizontalAlign: "left",
                  fontSize: this.fontSize,
                  fontFamily: this.fontFamily,
                  fontWeight: this.fontWeight,
                  fontColor: this.fontColor,
                  fontStyle: this.fontStyle,
                  textBaseline: "middle"
                }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + k + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < d - this.lineHeight ? (p = {
                  items: [],
                  width: 0
                }, m.push(p)) : (p = m[s], s = (s + 1) % m.length), this.height +=
                q.textBlock.height;
              q.textBlock.x = p.width;
              q.textBlock.y = 0;
              p.width += Math.round(q.textBlock.width + w + k + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
              p.items.push(q);
              this.width = Math.max(p.width, this.width);
              x = q.textBlock.width + (w + k + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
            }
          }
          this.itemWidth = x;
          this.height = !1 === this.itemWrap ? m.length * this.lineHeight : this.height +
            l;
          this.height = Math.min(d, this.height);
          this.width = Math.min(h, this.width)
        }
        "top" === this.verticalAlign ? (g = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, b = f.y1) : "center" === this.verticalAlign ? (g = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, b = f.y1 + f.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (g = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 -
          this.width : f.x1 + f.width / 2 - this.width / 2, b = f.y2 - this.height);
        this.items = t;
        for (n = 0; n < this.items.length; n++) q = t[n], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = {
          id: q.id,
          objectType: "legendItem",
          legendItemIndex: n,
          dataSeriesIndex: q.dataSeriesIndex,
          dataPointIndex: q.dataPointIndex
        };
        this.markerSize = w;
        this.rows = m;
        0 < t.length && a.layoutManager.registerSpace(c, {
          width: this.width + 2 + 2,
          height: this.height + 5 + 5
        });
        this.bounds = {
          x1: g,
          y1: b,
          x2: g + this.width,
          y2: b + this.height
        }
      };
      F.prototype.render =
        function() {
          var a = this.bounds.x1,
            f = this.bounds.y1,
            c = this.markerMargin,
            b = this.maxWidth,
            g = this.maxHeight,
            h = this.markerSize,
            d = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, f, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var e = 0, k = 0; k < d.length; k++) {
            for (var m = d[k], n = 0, p = 0; p < m.items.length; p++) {
              var q = m.items[p],
                l = q.textBlock.x + a + (0 === p ? 0.2 * h : this.horizontalSpacing),
                t = f + e,
                w = l;
              this.chart.data[q.dataSeriesIndex].visible ||
                (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, f, b, Math.max(g - g % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(l - 0.1 * this.lineHeight, t + this.lineHeight / 2), this.ctx.lineTo(l + 0.85 * this.lineHeight, t + this.lineHeight / 2), this.ctx.stroke(), w -= 0.1 * this.lineHeight;
              if ("error" === q.chartType) {
                this.ctx.strokeStyle =
                  this.errorMarkerColor[0];
                this.ctx.lineWidth = h / 8;
                this.ctx.beginPath();
                var u = l - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                  v = t + 0.15 * this.lineHeight,
                  s = 0.7 * this.lineHeight,
                  z = s + 0.02 * this.lineHeight;
                this.ctx.moveTo(u, v);
                this.ctx.lineTo(u + s, v);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(u + s / 2, v);
                this.ctx.lineTo(u + s / 2, v + z);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(u, v + z);
                this.ctx.lineTo(u + s, v + z);
                this.ctx.stroke();
                this.errorMarkerColor.shift()
              }
              r.drawMarker(l + h / 2, t + this.lineHeight / 2, this.ctx,
                q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
              q.textBlock.x = l + c + h;
              if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
              q.textBlock.y = Math.round(t + this.lineHeight / 2);
              q.textBlock.render(!0);
              this.ctx.restore();
              n = 0 < p ? Math.max(n, q.textBlock.height) : q.textBlock.height;
              this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha =
                1);
              l = V(q.id);
              this.ghostCtx.fillStyle = l;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(w, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - w, q.textBlock.height);
              q.x1 = this.chart._eventManager.objectMap[q.id].x1 = w;
              q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
              q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
              q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2
            }
            e += n
          }
        };
      ia(M,
        Z);
      M.prototype.getDefaultAxisPlacement = function() {
        var a = this.type;
        if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
        if ("bar" === a || "stackedBar" === a ||
          "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
        if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
        "error" !== a && window.console.log("Unknown Chart Type: " + a);
        return null
      };
      M.getDefaultLegendMarker = function(a) {
        if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" ===
          a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
        if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
        if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
        if ("error" === a) return "none";
        window.console.log("Unknown Chart Type: " + a);
        return null
      };
      M.prototype.getDataPointAtX = function(a, f) {
        if (!this.dataPoints || 0 === this.dataPoints.length) return null;
        var c = {
            dataPoint: null,
            distance: Infinity,
            index: NaN
          },
          b = null,
          g = 0,
          h = 0,
          d = 1,
          e = Infinity,
          k = 0,
          m = 0,
          n = 0;
        "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
        for (;;) {
          h =
            0 < d ? n + g : n - g;
          if (0 <= h && h < this.dataPoints.length) {
            var b = this.dataPoints[h],
              p = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
            p < c.distance && (c.dataPoint = b, c.distance = p, c.index = h);
            b = p;
            b <= e ? e = b : 0 < d ? k++ : m++;
            if (1E3 < k && 1E3 < m) break
          } else if (0 > n - g && n + g >= this.dataPoints.length) break; - 1 === d ? (g++, d = 1) : d = -1
        }
        return f || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? f && null !== c.dataPoint ? c : null : c
      };
      M.prototype.getDataPointAtXY = function(a, f, c) {
        if (!this.dataPoints || 0 ===
          this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || f < this.chart.plotArea.y1 || f > this.chart.plotArea.y2) return null;
        c = c || !1;
        var b = [],
          g = 0,
          h = 0,
          d = 1,
          e = !1,
          k = Infinity,
          m = 0,
          n = 0,
          p = 0;
        if ("none" !== this.chart.plotInfo.axisPlacement)
          if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
              x: a,
              y: f
            }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
            p = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p /
              this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
        for (;;) {
          h = 0 < d ? p + g : p - g;
          if (0 <= h && h < this.dataPoints.length) {
            var q = this.chart._eventManager.objectMap[this.dataPointIds[h]],
              l = this.dataPoints[h],
              t = null;
            if (q) {
              switch (this.type) {
                case "column":
                case "stackedColumn":
                case "stackedColumn100":
                case "bar":
                case "stackedBar":
                case "stackedBar100":
                case "rangeColumn":
                case "rangeBar":
                case "waterfall":
                case "error":
                  a >=
                    q.x1 && (a <= q.x2 && f >= q.y1 && f <= q.y2) && (b.push({
                      dataPoint: l,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - f), Math.abs(q.y2 - f))
                    }), e = !0);
                  break;
                case "line":
                case "stepLine":
                case "spline":
                case "area":
                case "stepArea":
                case "stackedArea":
                case "stackedArea100":
                case "splineArea":
                case "scatter":
                  var w = sa("markerSize", l, this) || 4,
                    r = c ? 20 : w,
                    t = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2));
                  t <= r && b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: t
                  });
                  q =
                    Math.abs(q.x1 - a);
                  q <= k ? k = q : 0 < d ? m++ : n++;
                  t <= w / 2 && (e = !0);
                  break;
                case "rangeArea":
                case "rangeSplineArea":
                  w = sa("markerSize", l, this) || 4;
                  r = c ? 20 : w;
                  t = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - f, 2)));
                  t <= r && b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: t
                  });
                  q = Math.abs(q.x1 - a);
                  q <= k ? k = q : 0 < d ? m++ : n++;
                  t <= w / 2 && (e = !0);
                  break;
                case "bubble":
                  w = q.size;
                  t = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - f, 2));
                  t <= w / 2 && (b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: t
                  }), e = !0);
                  break;
                case "pie":
                case "doughnut":
                  w = q.center;
                  r = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                  t = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - f, 2));
                  t < q.radius && t > r && (t = Math.atan2(f - w.y, a - w.x), 0 > t && (t += 2 * Math.PI), t = Number(((180 * (t / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), r = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === r && 1 < q.endAngle && (r = 360), w >= r && 0 !== l.y && (r += 360, t < w && (t += 360)), t > w && t < r && (b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: 0
                  }), e = !0));
                  break;
                case "funnel":
                case "pyramid":
                  t = q.funnelSection;
                  f > t.y1 && f < t.y4 && (t.y6 ? f > t.y6 ? (h = t.x6 + (t.x5 - t.x6) / (t.y5 - t.y6) * (f - t.y6), t = t.x3 + (t.x4 - t.x3) / (t.y4 - t.y3) * (f - t.y3)) : (h = t.x1 + (t.x6 - t.x1) / (t.y6 - t.y1) * (f - t.y1), t = t.x2 + (t.x3 - t.x2) / (t.y3 - t.y2) * (f - t.y2)) : (h = t.x1 + (t.x4 - t.x1) / (t.y4 - t.y1) * (f - t.y1), t = t.x2 + (t.x3 - t.x2) / (t.y3 - t.y2) * (f - t.y2)), a > h && a < t && (b.push({
                    dataPoint: l,
                    dataPointIndex: q.dataPointIndex,
                    dataSeries: this,
                    distance: 0
                  }), e = !0));
                  break;
                case "boxAndWhisker":
                  if (a >=
                    q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && f >= q.y4 - q.borderThickness / 2 && f <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && f >= q.y1 && f <= q.y4) b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - f), Math.abs(q.y3 - f))
                  }), e = !0;
                  break;
                case "candlestick":
                  if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && f >= q.y2 - q.borderThickness / 2 && f <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness &&
                    f >= q.y1 && f <= q.y4) b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - f), Math.abs(q.y3 - f))
                  }), e = !0;
                  break;
                case "ohlc":
                  if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && f >= q.y2 && f <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && f >= q.y1 - q.borderThickness / 2 && f <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && f >= q.y4 - q.borderThickness / 2 && f <= q.y4 + q.borderThickness / 2) b.push({
                    dataPoint: l,
                    dataPointIndex: h,
                    dataSeries: this,
                    distance: Math.min(Math.abs(q.x1 - a),
                      Math.abs(q.x2 - a), Math.abs(q.y2 - f), Math.abs(q.y3 - f))
                  }), e = !0
              }
              if (e || 1E3 < m && 1E3 < n) break
            }
          } else if (0 > p - g && p + g >= this.dataPoints.length) break; - 1 === d ? (g++, d = 1) : d = -1
        }
        a = null;
        for (f = 0; f < b.length; f++) a ? b[f].distance <= a.distance && (a = b[f]) : a = b[f];
        return a
      };
      M.prototype.getMarkerProperties = function(a, f, c, b) {
        var g = this.dataPoints;
        return {
          x: f,
          y: c,
          ctx: b,
          type: g[a].markerType ? g[a].markerType : this.markerType,
          size: g[a].markerSize ? g[a].markerSize : this.markerSize,
          color: g[a].markerColor ? g[a].markerColor : this.markerColor ? this.markerColor : g[a].color ? g[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
          borderColor: g[a].markerBorderColor ? g[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
          borderThickness: g[a].markerBorderThickness ? g[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
        }
      };
      ia(z, Z);
      z.prototype.createExtraLabelsForLog = function(a) {
        a = (a || 0) + 1;
        if (!(5 < a)) {
          var f = this.logLabelValues[0] || this.intervalStartPosition;
          if (Math.log(this.range) / Math.log(f / this.viewportMinimum) <
            this.noTicks - 1) {
            for (var c = z.getNiceNumber((f - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), b = Math.ceil(this.viewportMinimum / c) * c; b < f; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
            this.logLabelValues.sort(Xa);
            this.createExtraLabelsForLog(a)
          }
        }
      };
      z.prototype.createLabels = function() {
        var a, f, c = 0,
          b = 0,
          g, h = 0,
          d = 0,
          b = 0,
          b = this.interval,
          k = 0,
          t, m = 0.6 * this.chart.height,
          n;
        a = !1;
        var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
          q = p.length ? e(this.scaleBreaks.firstBreakIndex) ?
          0 : this.scaleBreaks.firstBreakIndex : 0;
        if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
          g = this.viewportMaximum;
          if (this.labels) {
            a = Math.ceil(b);
            for (var b = Math.ceil(this.intervalStartPosition), l = !1, c = b; c < this.viewportMaximum; c += a)
              if (this.labels[c]) l = !0;
              else {
                l = !1;
                break
              } l && (this.interval = a, this.intervalStartPosition = b)
          }
          if (this.logarithmic && !this.equidistantInterval)
            for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, l = q; b < this.logLabelValues.length; b++)
              if (c =
                this.logLabelValues[b], c < this.viewportMinimum) b++;
              else {
                for (; l < p.length && c > p[l].endValue; l++);
                a = l < p.length && c >= p[l].startValue && c <= p[l].endValue;
                n = c;
                a || (a = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.options,
                  value: n,
                  label: this.labels[n] ? this.labels[n] : null
                }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ba(n, this.valueFormatString, this.chart._cultureInfo), a = new oa(this.ctx, {
                  x: 0,
                  y: 0,
                  maxWidth: h,
                  maxHeight: d,
                  angle: this.labelAngle,
                  text: this.prefix + a + this.suffix,
                  backgroundColor: this.labelBackgroundColor,
                  borderColor: this.labelBorderColor,
                  cornerRadius: this.labelCornerRadius,
                  textAlign: this.labelTextAlign,
                  fontSize: this.labelFontSize,
                  fontFamily: this.labelFontFamily,
                  fontWeight: this.labelFontWeight,
                  fontColor: this.labelFontColor,
                  fontStyle: this.labelFontStyle,
                  textBaseline: "middle",
                  borderThickness: 0
                }), this._labels.push({
                  position: n,
                  textBlock: a,
                  effectiveHeight: null
                }))
              } l = q;
          for (c = this.intervalStartPosition; c <= g; c = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase,
              this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
            for (; l < p.length && c > p[l].endValue; l++);
            a = l < p.length && c >= p[l].startValue && c <= p[l].endValue;
            n = c;
            a || (a = this.labelFormatter ? this.labelFormatter({
              chart: this.chart,
              axis: this.options,
              value: n,
              label: this.labels[n] ? this.labels[n] : null
            }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ba(n, this.valueFormatString, this.chart._cultureInfo), a = new oa(this.ctx, {
              x: 0,
              y: 0,
              maxWidth: h,
              maxHeight: d,
              angle: this.labelAngle,
              text: this.prefix + a + this.suffix,
              textAlign: this.labelTextAlign,
              backgroundColor: this.labelBackgroundColor,
              borderColor: this.labelBorderColor,
              borderThickness: this.labelBorderThickness,
              cornerRadius: this.labelCornerRadius,
              fontSize: this.labelFontSize,
              fontFamily: this.labelFontFamily,
              fontWeight: this.labelFontWeight,
              fontColor: this.labelFontColor,
              fontStyle: this.labelFontStyle,
              textBaseline: "middle"
            }), this._labels.push({
              position: n,
              textBlock: a,
              effectiveHeight: null
            }))
          }
        } else
          for (this.intervalStartPosition =
            this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), g = cb(new Date(this.viewportMaximum), this.interval, this.intervalType), l = q, c = this.intervalStartPosition; c < g; cb(c, b, this.intervalType)) {
            for (a = c.getTime(); l < p.length && a > p[l].endValue; l++);
            n = a;
            a = l < p.length && a >= p[l].startValue && a <= p[l].endValue;
            a || (a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: new Date(n),
                label: this.labels[n] ? this.labels[n] : null
              }) : "axisX" === this.type && this.labels[n] ?
              this.labels[n] : fa(n, this.valueFormatString, this.chart._cultureInfo), a = new oa(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxHeight: d,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({
                position: n,
                textBlock: a,
                effectiveHeight: null,
                breaksLabelType: void 0
              }))
          }
        if ("bottom" === this._position || "top" === this._position) k = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ?
          Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * aa[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
        else if ("left" === this._position || "right" === this._position) k = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height *
          Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * aa[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), d = "undefined" ===
          typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
        for (b = 0; b < this._labels.length; b++) {
          a = this._labels[b].textBlock;
          a.maxWidth = h;
          a.maxHeight = d;
          var w = a.measureText();
          t = w.height
        }
        g = [];
        q = p = 0;
        if (this.labelAutoFit || this.options.labelAutoFit)
          if (e(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position ||
            "top" === this._position)
            if (h = 0.9 * k >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
              this.sessionVariables.labelFontSize = this.labelFontSize;
              this.sessionVariables.labelMaxWidth = h;
              this.sessionVariables.labelMaxHeight = d;
              this.sessionVariables.labelAngle = this.labelAngle;
              this.sessionVariables.labelWrap = this.labelWrap;
              for (c = 0; c < this._labels.length; c++)
                if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  for (var r, l = a.text.split(" "), b = 0; b < l.length; b++) n = l[b], this.ctx.font = a.fontStyle + " " +
                    a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, n = this.ctx.measureText(n), n.width > q && (r = c, q = n.width)
                } c = 0;
              for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                if (!this._labels[c].breaksLabelType) {
                  a = this._labels[c].textBlock;
                  w = a.measureText();
                  for (l = c + 1; l < this._labels.length; l++)
                    if (!this._labels[l].breaksLabelType) {
                      f = this._labels[l].textBlock;
                      f = f.measureText();
                      break
                    } g.push(a.height);
                  this.sessionVariables.labelMaxHeight = Math.max.apply(Math, g);
                  Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                  b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                  if (e(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = (m - (t + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI /
                        180 * Math.abs(-25)), !e(this.options.labelWrap)) this.labelWrap ? e(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), n), this.sessionVariables.labelWrap = this.labelWrap, f && w.width + f.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : e(this.options.labelMaxWidth) ?
                      (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelMaxWidth = h, f && w.width + f.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = this.labelWrap);
                    else {
                      if (e(this.options.labelWrap))
                        if (!e(this.options.labelMaxWidth)) this.options.labelMaxWidth <
                          h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = d);
                        else if (!e(f))
                        if (b = w.width + f.width >> 0, l = this.labelFontSize, q < h) b - 2 * h > p && (p = b - 2 * h, b >= 2 * h && b < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, e(this.options.labelFontSize) && 12 < l && (l = Math.floor(12 / 13 * l), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                          l : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * h && b < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = l) : b >= 2.8 * h && b < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, q), this.sessionVariables.labelWrap = !0, e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                          l : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * h && b < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * h && b < 5 * h ? (e(this.options.labelFontSize) && 12 < l && (l = Math.floor(12 / 13 * l), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : b > 5 * h && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = l, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelAngle = this.labelAngle));
                        else if (r === c && (0 === r && q + this._labels[r + 1].textBlock.measureText().width - 2 * h > p || r === this._labels.length - 1 && q + this._labels[r - 1].textBlock.measureText().width - 2 * h > p || 0 < r && r < this._labels.length - 1 && q + this._labels[r + 1].textBlock.measureText().width - 2 * h > p &&
                          q + this._labels[r - 1].textBlock.measureText().width - 2 * h > p)) p = 0 === r ? q + this._labels[r + 1].textBlock.measureText().width - 2 * h : q + this._labels[r - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n;
                      else if (0 === p)
                        for (this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? l : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), n), w = a.measureText(), b < this._labels.length - 1 && (l = b + 1, f = this._labels[l].textBlock, f.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), n), f = f.measureText(), w.width + f.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25))
                    }
                  else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : Math.min((b - h * Math.cos(Math.PI /
                    180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = 0 != this.labelAngle ? (m - (t + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (m - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, e(this.options.labelWrap)) ? e(this.options.labelWrap) && (this.labelWrap && !e(this.options.labelMaxWidth) ?
                    (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = b < 0.9 * k ? 0.9 * k : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                    this.options.labelMaxWidth : n) : (e(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = d)
                } for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
            } else
              for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = e(this.options.labelMaxWidth) ? e(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = e(this.options.labelFontSize) ? e(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize :
                this.options.labelFontSize, a.angle = this.labelAngle = e(this.options.labelAngle) ? e(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = e(this.options.labelWrap) ? e(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = e(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = d : this.sessionVariables.labelMaxHeight,
                a.measureText();
        else if ("left" === this._position || "right" === this._position)
          if (h = e(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, d = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
            this.sessionVariables.labelFontSize = this.labelFontSize;
            this.sessionVariables.labelMaxWidth = h;
            this.sessionVariables.labelMaxHeight = d;
            this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ?
              0 : this.sessionVariables.labelAngle;
            this.sessionVariables.labelWrap = this.labelWrap;
            for (c = 0; c < this._labels.length; c++)
              if (!this._labels[c].breaksLabelType) {
                a = this._labels[c].textBlock;
                w = a.measureText();
                for (l = c + 1; l < this._labels.length; l++)
                  if (!this._labels[l].breaksLabelType) {
                    f = this._labels[l].textBlock;
                    f = f.measureText();
                    break
                  } g.push(a.height);
                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, g);
                b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (d - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                e(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? e(this.options.labelWrap) ? e(this.options.labelWrap) && (e(this.options.labelMaxWidth) ? e(f) || (k = w.height + f.height >> 0, k - 2 * d > q && (q = k - 2 * d, k >= 2 * d && k < 2.4 * d ? (e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelFontSize =
                  e(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : k >= 2.4 * d && k < 2.8 * d ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : k >= 2.8 * d && k < 3.2 * d ? (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelWrap = !0, e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                  this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k >= 3.2 * d && k < 3.6 * d ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : k > 3.6 * d && k < 10 * d ? (e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ?
                  this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k > 10 * d && k < 50 * d && (e(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = e(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight =
                  d, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = e(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = d, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ?
                  this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = d) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min((b - d * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), d), e(this.options.labelWrap)) ? e(this.options.labelWrap) && (this.labelWrap && !e(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth :
                  this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : b, e(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? d : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth =
                  h) : (this.sessionVariables.labelMaxHeight = d, e(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
              } for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap =
              this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
          } else
            for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = e(this.options.labelMaxWidth) ? e(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = e(this.options.labelFontSize) ? e(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize =
              this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = e(this.options.labelAngle) ? e(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = e(this.options.labelWrap) ? e(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = e(this.sessionVariables.labelMaxHeight) ?
              this.sessionVariables.labelMaxHeight = d : this.sessionVariables.labelMaxHeight, a.measureText();
        for (c = 0; c < this.stripLines.length; c++) {
          var h = this.stripLines[c],
            s;
          if ("outside" === h.labelPlacement) {
            d = this.sessionVariables.labelMaxWidth;
            if ("bottom" === this._position || "top" === this._position) e(h.options.labelWrap) && !e(this.sessionVariables.stripLineLabelMaxHeight) ? s = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = s = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            if ("left" === this._position || "right" === this._position) e(h.options.labelWrap) && !e(this.sessionVariables.stripLineLabelMaxHeight) ? s = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = s = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
            e(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE")
          } else d = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, s = e(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position ||
            "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, e(h.labelBackgroundColor) && (e(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = u ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
          a = new oa(this.ctx, {
            x: 0,
            y: 0,
            backgroundColor: h.labelBackgroundColor,
            borderColor: h.labelBorderColor,
            borderThickness: h.labelBorderThickness,
            cornerRadius: h.labelCornerRadius,
            maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : d,
            maxHeight: s,
            angle: this.labelAngle,
            text: h.labelFormatter ?
              h.labelFormatter({
                chart: this.chart,
                axis: this,
                stripLine: h
              }) : h.label,
            textAlign: this.labelTextAlign,
            fontSize: "outside" === h.labelPlacement ? h.options.labelFontSize ? h.labelFontSize : this.labelFontSize : h.labelFontSize,
            fontFamily: "outside" === h.labelPlacement ? h.options.labelFontFamily ? h.labelFontFamily : this.labelFontFamily : h.labelFontFamily,
            fontWeight: "outside" === h.labelPlacement ? h.options.labelFontWeight ? h.labelFontWeight : this.labelFontWeight : h.labelFontWeight,
            fontColor: h.labelFontColor || h.color,
            fontStyle: "outside" ===
              h.labelPlacement ? h.options.labelFontStyle ? h.labelFontStyle : this.fontWeight : h.labelFontStyle,
            textBaseline: "middle"
          });
          this._stripLineLabels.push({
            position: h.value,
            textBlock: a,
            effectiveHeight: null,
            stripLine: h
          })
        }
      };
      z.prototype.createLabelsAndCalculateWidth = function() {
        var a = 0,
          f = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var c = this.chart.isNavigator ? 0 : 5;
        if ("left" === this._position || "right" === this._position) {
          this.createLabels();
          if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
            for (f =
              0; f < this._labels.length; f++) {
              var b = this._labels[f].textBlock,
                g = b.measureText(),
                h = 0,
                h = 0 === this.labelAngle ? g.width : g.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
              a < h && (a = h);
              this._labels[f].effectiveWidth = h
            }
          for (f = 0; f < this._stripLineLabels.length; f++) "outside" === this._stripLineLabels[f].stripLine.labelPlacement && (this._stripLineLabels[f].stripLine.value >= this.viewportMinimum && this._stripLineLabels[f].stripLine.value <= this.viewportMaximum) &&
            (b = this._stripLineLabels[f].textBlock, g = b.measureText(), h = 0 === this.labelAngle ? g.width : g.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < h && (a = h), this._stripLineLabels[f].effectiveWidth = h)
        }
        return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
      };
      z.prototype.createLabelsAndCalculateHeight = function() {
        var a = 0;
        this._labels = [];
        this._stripLineLabels = [];
        var f, c = 0,
          b = this.chart.isNavigator ? 0 : 5;
        if ("bottom" === this._position || "top" === this._position) {
          this.createLabels();
          if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
            for (c = 0; c < this._labels.length; c++) {
              f = this._labels[c].textBlock;
              var g = f.measureText(),
                h = 0,
                h = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
              a < h && (a = h);
              this._labels[c].effectiveHeight = h
            }
          for (c = 0; c < this._stripLineLabels.length; c++) "outside" ===
            this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (f = this._stripLineLabels[c].textBlock, g = f.measureText(), h = 0 === this.labelAngle ? g.height : g.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (g.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < h && (a = h), this._stripLineLabels[c].effectiveHeight = h)
        }
        return (this.title ? this._titleTextBlock.measureText().height +
          2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
      };
      z.setLayout = function(a, f, c, b, g, h) {
        var d, k, t, m, n = a[0] ? a[0].chart : f[0].chart,
          p = n.isNavigator ? 0 : 10,
          q = n._axes;
        if (a && 0 < a.length)
          for (var l = 0; l < a.length; l++) a[l] && a[l].calculateAxisParameters();
        if (f && 0 < f.length)
          for (l = 0; l < f.length; l++) f[l].calculateAxisParameters();
        if (c && 0 < c.length)
          for (l = 0; l < c.length; l++) c[l].calculateAxisParameters();
        if (b && 0 < b.length)
          for (l = 0; l < b.length; l++) b[l].calculateAxisParameters();
        for (l = 0; l < q.length; l++)
          if (q[l] && q[l].scaleBreaks &&
            q[l].scaleBreaks._appliedBreaks.length)
            for (var w = q[l].scaleBreaks._appliedBreaks, r = 0; r < w.length && !(w[r].startValue > q[l].viewportMaximum); r++) w[r].endValue < q[l].viewportMinimum || (e(q[l].scaleBreaks.firstBreakIndex) && (q[l].scaleBreaks.firstBreakIndex = r), w[r].startValue >= q[l].viewPortMinimum && (q[l].scaleBreaks.lastBreakIndex = r));
        for (var s = r = 0, v = 0, u = 0, z = 0, A = 0, D = 0, B, E, F = k = 0, G, L, M, w = G = L = M = !1, l = 0; l < q.length; l++) q[l] && q[l].title && (q[l]._titleTextBlock = new oa(q[l].ctx, {
          text: q[l].title,
          horizontalAlign: "center",
          fontSize: q[l].titleFontSize,
          fontFamily: q[l].titleFontFamily,
          fontWeight: q[l].titleFontWeight,
          fontColor: q[l].titleFontColor,
          fontStyle: q[l].titleFontStyle,
          borderColor: q[l].titleBorderColor,
          borderThickness: q[l].titleBorderThickness,
          backgroundColor: q[l].titleBackgroundColor,
          cornerRadius: q[l].titleCornerRadius,
          textBaseline: "top"
        }));
        for (l = 0; l < q.length; l++)
          if (q[l].title) switch (q[l]._position) {
            case "left":
              q[l]._titleTextBlock.maxWidth = q[l].titleMaxWidth || h.height;
              q[l]._titleTextBlock.maxHeight = q[l].titleWrap ?
                0.8 * h.width : 1.5 * q[l].titleFontSize;
              q[l]._titleTextBlock.angle = -90;
              break;
            case "right":
              q[l]._titleTextBlock.maxWidth = q[l].titleMaxWidth || h.height;
              q[l]._titleTextBlock.maxHeight = q[l].titleWrap ? 0.8 * h.width : 1.5 * q[l].titleFontSize;
              q[l]._titleTextBlock.angle = 90;
              break;
            default:
              q[l]._titleTextBlock.maxWidth = q[l].titleMaxWidth || h.width, q[l]._titleTextBlock.maxHeight = q[l].titleWrap ? 0.8 * h.height : 1.5 * q[l].titleFontSize, q[l]._titleTextBlock.angle = 0
          }
        if ("normal" === g) {
          for (var u = [], z = [], A = [], D = [], P = [], Q = [], N = [], O = []; 4 >
            r;) {
            var H = 0,
              V = 0,
              S = 0,
              W = 0,
              $ = g = 0,
              T = 0,
              ba = 0,
              Z = 0,
              X = 0,
              U = 0,
              aa = 0;
            if (c && 0 < c.length)
              for (A = [], l = U = 0; l < c.length; l++) A.push(Math.ceil(c[l] ? c[l].createLabelsAndCalculateWidth() : 0)), U += A[l], T += c[l] && !n.isNavigator ? c[l].margin : 0;
            else A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
            N.push(A);
            if (b && 0 < b.length)
              for (D = [], l = aa = 0; l < b.length; l++) D.push(Math.ceil(b[l] ? b[l].createLabelsAndCalculateWidth() : 0)), aa += D[l], ba += b[l] ? b[l].margin : 0;
            else D.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
            O.push(D);
            d = Math.round(h.x1 + U + T);
            t = Math.round(h.x2 - aa - ba > n.width - p ? n.width - p : h.x2 - aa - ba);
            if (a && 0 < a.length)
              for (u = [], l = Z = 0; l < a.length; l++) a[l] && (a[l].lineCoordinates = {}), a[l].lineCoordinates.width = Math.abs(t - d), a[l].title && (a[l]._titleTextBlock.maxWidth = 0 < a[l].titleMaxWidth && a[l].titleMaxWidth < a[l].lineCoordinates.width ? a[l].titleMaxWidth : a[l].lineCoordinates.width), u.push(Math.ceil(a[l] ? a[l].createLabelsAndCalculateHeight() : 0)), Z += u[l], g += a[l] && !n.isNavigator ? a[l].margin : 0;
            else u.push(Math.ceil(a[0] ?
              a[0].createLabelsAndCalculateHeight() : 0));
            P.push(u);
            if (f && 0 < f.length)
              for (z = [], l = X = 0; l < f.length; l++) f[l] && (f[l].lineCoordinates = {}), f[l].lineCoordinates.width = Math.abs(t - d), f[l].title && (f[l]._titleTextBlock.maxWidth = 0 < f[l].titleMaxWidth && f[l].titleMaxWidth < f[l].lineCoordinates.width ? f[l].titleMaxWidth : f[l].lineCoordinates.width), z.push(Math.ceil(f[l] ? f[l].createLabelsAndCalculateHeight() : 0)), X += z[l], $ += f[l] && !n.isNavigator ? f[l].margin : 0;
            else z.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateHeight() :
              0));
            Q.push(z);
            if (a && 0 < a.length)
              for (l = 0; l < a.length; l++) a[l] && (a[l].lineCoordinates.x1 = d, t = Math.round(h.x2 - aa - ba > n.width - p ? n.width - p : h.x2 - aa - ba), a[l]._labels && 1 < a[l]._labels.length && (k = m = 0, m = a[l]._labels[1], k = "dateTime" === a[l].valueType ? a[l]._labels[a[l]._labels.length - 2] : a[l]._labels[a[l]._labels.length - 1], s = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), v = k.textBlock.width * Math.cos(Math.PI /
                  180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle))), !a[l] || (!a[l].labelAutoFit || e(B) || e(E) || n.isNavigator || n.stockChart) || (k = 0, 0 < a[l].labelAngle ? E + v > t && (k += 0 < a[l].labelAngle ? E + v - t - aa : 0) : 0 > a[l].labelAngle ? B - s < d && B - s < a[l].viewportMinimum && (F = d - (T + a[l].tickLength + A + B - s + a[l].labelFontSize / 2)) : 0 === a[l].labelAngle && (E + v > t && (k = E + v / 2 - t - aa), B - s < d && B - s < a[l].viewportMinimum && (F = d - T - a[l].tickLength - A - B + s / 2)), a[l].viewportMaximum === a[l].maximum &&
                  a[l].viewportMinimum === a[l].minimum && 0 < a[l].labelAngle && 0 < k ? t -= k : a[l].viewportMaximum === a[l].maximum && a[l].viewportMinimum === a[l].minimum && 0 > a[l].labelAngle && 0 < F ? d += F : a[l].viewportMaximum === a[l].maximum && a[l].viewportMinimum === a[l].minimum && 0 === a[l].labelAngle && (0 < F && (d += F), 0 < k && (t -= k))), n.panEnabled ? Z = e(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = Z : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = Z, k = Math.round(h.y2 - Z - g + H), m = Math.round(h.y2), a[l].lineCoordinates.x2 =
                t, a[l].lineCoordinates.width = t - d, a[l].lineCoordinates.y1 = k, a[l].lineCoordinates.y2 = k + a[l].lineThickness / 2, "inside" === a[l].labelPlacement && 0 < l && (a[l].lineCoordinates.y1 = a[l].lineCoordinates.y1 + u[l] - (a[l]._titleTextBlock ? a[l]._titleTextBlock.height : 0) - ("inside" === a[l].tickPlacement ? a[l].tickLength : 0), a[l].lineCoordinates.y2 = a[l].lineCoordinates.y1 + a[l].lineThickness / 2), a[l].bounds = {
                  x1: d,
                  y1: k,
                  x2: t,
                  y2: m - (Z + g - u[l] - H),
                  width: t - d,
                  height: m - k
                }), H += u[l] + a[l].margin;
            if (f && 0 < f.length)
              for (l = 0; l < f.length; l++) f[l].lineCoordinates.x1 =
                Math.round(h.x1 + U + T), f[l].lineCoordinates.x2 = Math.round(h.x2 - aa - ba > n.width - p ? n.width - p : h.x2 - aa - ba), f[l].lineCoordinates.width = Math.abs(t - d), f[l]._labels && 1 < f[l]._labels.length && (m = f[l]._labels[1], k = "dateTime" === f[l].valueType ? f[l]._labels[f[l]._labels.length - 2] : f[l]._labels[f[l]._labels.length - 1], s = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), v = k.textBlock.width * Math.cos(Math.PI / 180 *
                  Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle))), n.panEnabled ? X = e(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height = X : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = X, k = Math.round(h.y1), m = Math.round(h.y2 + f[l].margin), f[l].lineCoordinates.y1 = k + X + $ - V, f[l].lineCoordinates.y2 = k, "inside" === f[l].labelPlacement && 0 < l && (f[l].lineCoordinates.y1 = f[l - 1].bounds.y1 - z[l] + (f[l]._titleTextBlock ? f[l]._titleTextBlock.height :
                  0)), f[l].bounds = {
                  x1: d,
                  y1: k + (X + $ - z[l] - V),
                  x2: t,
                  y2: m,
                  width: t - d,
                  height: m - k
                }, V += z[l] + f[l].margin;
            if (c && 0 < c.length)
              for (l = 0; l < c.length; l++) T = n.isNavigator ? 0 : 10, c[l] && (d = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), T = c[l]._labels && 0 < c[l]._labels.length ? c[l]._labels[c[l]._labels.length - 1].textBlock.height / 2 : p, k = Math.round(h.y1 + X + $ < Math.max(T, p) ? Math.max(T, p) : h.y1 + X + $), t = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), T = 0 < a.length ? 0 : c[l]._labels && 0 < c[l]._labels.length ? c[l]._labels[0].textBlock.height /
                2 : p, m = Math.round(h.y2 - Z - g - T), c[l].lineCoordinates = {
                  x1: d - S,
                  y1: k,
                  x2: t - S,
                  y2: m,
                  height: Math.abs(m - k)
                }, "inside" === c[l].labelPlacement && 0 < l && (c[l].lineCoordinates.x1 = c[l].lineCoordinates.x1 - (A[l] - (c[l]._titleTextBlock ? c[l]._titleTextBlock.height : 0)) + ("outside" === c[l].tickPlacement ? c[l].tickLength : 0), c[l].lineCoordinates.x2 = c[l].lineCoordinates.x1 + c[l].lineThickness / 2), c[l].bounds = {
                  x1: d - (A[l] + S),
                  y1: k,
                  x2: t,
                  y2: m,
                  width: t - d,
                  height: m - k
                }, c[l].title && (c[l]._titleTextBlock.maxWidth = 0 < c[l].titleMaxWidth && c[l].titleMaxWidth <
                  c[l].lineCoordinates.height ? c[l].titleMaxWidth : c[l].lineCoordinates.height), S += A[l] + c[l].margin);
            if (b && 0 < b.length)
              for (l = 0; l < b.length; l++) b[l] && (d = Math.round(a[0] ? a[0].lineCoordinates.x2 : f[0].lineCoordinates.x2), t = Math.round(d), T = b[l]._labels && 0 < b[l]._labels.length ? b[l]._labels[b[l]._labels.length - 1].textBlock.height / 2 : 0, k = Math.round(h.y1 + X + $ < Math.max(T, p) ? Math.max(T, p) : h.y1 + X + $), T = 0 < a.length ? 0 : b[l]._labels && 0 < b[l]._labels.length ? b[l]._labels[0].textBlock.height / 2 : 0, m = Math.round(h.y2 - (Z + g + T)), b[l].lineCoordinates = {
                x1: d + W,
                y1: k,
                x2: d + W,
                y2: m,
                height: Math.abs(m - k)
              }, "inside" === b[l].labelPlacement && 0 < l && (b[l].lineCoordinates.x1 = b[l].lineCoordinates.x1 + (D[l] - (b[l]._titleTextBlock ? b[l]._titleTextBlock.height : 0)) - ("outside" === b[l].tickPlacement ? b[l].tickLength : 0) - 2, b[l].lineCoordinates.x2 = b[l].lineCoordinates.x1 + b[l].lineThickness / 2), b[l].bounds = {
                x1: d,
                y1: k,
                x2: t + (D[l] + W),
                y2: m,
                width: t - d,
                height: m - k
              }, b[l].title && (b[l]._titleTextBlock.maxWidth = 0 < b[l].titleMaxWidth && b[l].titleMaxWidth < b[l].lineCoordinates.height ? b[l].titleMaxWidth :
                b[l].lineCoordinates.height), W += D[l] + b[l].margin);
            if (a && 0 < a.length)
              for (l = 0; l < a.length; l++) a[l] && (a[l].calculateValueToPixelConversionParameters(), a[l].calculateBreaksSizeInValues(), a[l]._labels && 1 < a[l]._labels.length && (B = (a[l].logarithmic ? Math.log(a[l]._labels[1].position / a[l].viewportMinimum) / a[l].conversionParameters.lnLogarithmBase : a[l]._labels[1].position - a[l].viewportMinimum) * Math.abs(a[l].conversionParameters.pixelPerUnit) + a[l].lineCoordinates.x1, d = a[l]._labels[a[l]._labels.length - ("dateTime" ===
                a[l].valueType ? 2 : 1)].position, d = a[l].getApparentDifference(a[l].viewportMinimum, d), E = a[l].logarithmic ? (1 < d ? Math.log(d) / a[l].conversionParameters.lnLogarithmBase * Math.abs(a[l].conversionParameters.pixelPerUnit) : 0) + a[l].lineCoordinates.x1 : (0 < d ? d * Math.abs(a[l].conversionParameters.pixelPerUnit) : 0) + a[l].lineCoordinates.x1));
            if (f && 0 < f.length)
              for (l = 0; l < f.length; l++) f[l].calculateValueToPixelConversionParameters(), f[l].calculateBreaksSizeInValues(), f[l]._labels && 1 < f[l]._labels.length && (B = (f[l].logarithmic ?
                  Math.log(f[l]._labels[1].position / f[l].viewportMinimum) / f[l].conversionParameters.lnLogarithmBase : f[l]._labels[1].position - f[l].viewportMinimum) * Math.abs(f[l].conversionParameters.pixelPerUnit) + f[l].lineCoordinates.x1, d = f[l]._labels[f[l]._labels.length - ("dateTime" === f[l].valueType ? 2 : 1)].position, d = f[l].getApparentDifference(f[l].viewportMinimum, d), E = f[l].logarithmic ? (1 < d ? Math.log(d) / f[l].conversionParameters.lnLogarithmBase * Math.abs(f[l].conversionParameters.pixelPerUnit) : 0) + f[l].lineCoordinates.x1 :
                (0 < d ? d * Math.abs(f[l].conversionParameters.pixelPerUnit) : 0) + f[l].lineCoordinates.x1);
            for (l = 0; l < q.length; l++) "axisY" === q[l].type && (q[l].calculateValueToPixelConversionParameters(), q[l].calculateBreaksSizeInValues());
            if (0 < r) {
              if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) w = P[r - 1][l] === P[r][l] ? !0 : !1;
              else w = !0;
              if (f && 0 < f.length)
                for (l = 0; l < f.length; l++) G = Q[r - 1][l] === Q[r][l] ? !0 : !1;
              else G = !0;
              if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) L = N[r - 1][l] === N[r][l] ? !0 : !1;
              else L = !0;
              if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) M = O[r -
                  1][l] === O[r][l] ? !0 : !1;
              else M = !0
            }
            if (w && G && L && M) break;
            r++
          }
          if (a && 0 < a.length)
            for (l = 0; l < a.length; l++) a[l].calculateStripLinesThicknessInValues(), a[l].calculateBreaksInPixels();
          if (f && 0 < f.length)
            for (l = 0; l < f.length; l++) f[l].calculateStripLinesThicknessInValues(), f[l].calculateBreaksInPixels();
          if (c && 0 < c.length)
            for (l = 0; l < c.length; l++) c[l].calculateStripLinesThicknessInValues(), c[l].calculateBreaksInPixels();
          if (b && 0 < b.length)
            for (l = 0; l < b.length; l++) b[l].calculateStripLinesThicknessInValues(), b[l].calculateBreaksInPixels()
        } else {
          p = [];
          B = [];
          F = [];
          s = [];
          E = [];
          v = [];
          P = [];
          for (Q = []; 4 > r;) {
            Z = W = V = S = ba = T = $ = g = O = N = H = X = 0;
            if (a && 0 < a.length)
              for (F = [], l = W = 0; l < a.length; l++) F.push(Math.ceil(a[l] ? a[l].createLabelsAndCalculateWidth() : 0)), W += F[l], g += a[l] && !n.isNavigator ? a[l].margin : 0;
            else F.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
            P.push(F);
            if (f && 0 < f.length)
              for (s = [], l = Z = 0; l < f.length; l++) s.push(Math.ceil(f[l] ? f[l].createLabelsAndCalculateWidth() : 0)), Z += s[l], $ += f[l] ? f[l].margin : 0;
            else s.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateWidth() :
              0));
            Q.push(s);
            if (c && 0 < c.length)
              for (l = 0; l < c.length; l++) c[l].lineCoordinates = {}, d = Math.round(h.x1 + W + g), t = Math.round(h.x2 - Z - $ > n.width - 10 ? n.width - 10 : h.x2 - Z - $), c[l].labelAutoFit && !e(u) && (0 < !a.length && (d = 0 > c[l].labelAngle ? Math.max(d, u) : 0 === c[l].labelAngle ? Math.max(d, u / 2) : d), 0 < !f.length && (t = 0 < c[l].labelAngle ? t - z / 2 : 0 === c[l].labelAngle ? t - z / 2 : t)), c[l].lineCoordinates.x1 = d, c[l].lineCoordinates.x2 = t, c[l].lineCoordinates.width = Math.abs(t - d), c[l].title && (c[l]._titleTextBlock.maxWidth = 0 < c[l].titleMaxWidth && c[l].titleMaxWidth <
                c[l].lineCoordinates.width ? c[l].titleMaxWidth : c[l].lineCoordinates.width);
            if (b && 0 < b.length)
              for (l = 0; l < b.length; l++) b[l].lineCoordinates = {}, d = Math.round(h.x1 + W + g), t = Math.round(h.x2 - Z - $ > b[l].chart.width - 10 ? b[l].chart.width - 10 : h.x2 - Z - $), b[l] && b[l].labelAutoFit && !e(A) && (0 < !a.length && (d = 0 < b[l].labelAngle ? Math.max(d, A) : 0 === b[l].labelAngle ? Math.max(d, A / 2) : d), 0 < !f.length && (t -= D / 2)), b[l].lineCoordinates.x1 = d, b[l].lineCoordinates.x2 = t, b[l].lineCoordinates.width = Math.abs(t - d), b[l].title && (b[l]._titleTextBlock.maxWidth =
                0 < b[l].titleMaxWidth && b[l].titleMaxWidth < b[l].lineCoordinates.width ? b[l].titleMaxWidth : b[l].lineCoordinates.width);
            if (c && 0 < c.length)
              for (p = [], l = S = 0; l < c.length; l++) p.push(Math.ceil(c[l] ? c[l].createLabelsAndCalculateHeight() : 0)), S += p[l] + c[l].margin, T += c[l].margin;
            else p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
            E.push(p);
            if (b && 0 < b.length)
              for (B = [], l = V = 0; l < b.length; l++) B.push(Math.ceil(b[l] ? b[l].createLabelsAndCalculateHeight() : 0)), V += B[l], ba += b[l].margin;
            else B.push(Math.ceil(b[0] ?
              b[0].createLabelsAndCalculateHeight() : 0));
            v.push(B);
            if (c && 0 < c.length)
              for (l = 0; l < c.length; l++) 0 < c[l]._labels.length && (m = c[l]._labels[0], k = c[l]._labels[c[l]._labels.length - 1], u = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), z = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)));
            if (b && 0 < b.length)
              for (l = 0; l < b.length; l++) b[l] && 0 < b[l]._labels.length && (m = b[l]._labels[0], k = b[l]._labels[b[l]._labels.length - 1], A = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)), D = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)));
            if (n.panEnabled)
              for (l = 0; l < c.length; l++) p[l] = e(n.sessionVariables.axisY.height) ?
                n.sessionVariables.axisY.height = p[l] : n.sessionVariables.axisY.height;
            else
              for (l = 0; l < c.length; l++) n.sessionVariables.axisY.height = p[l];
            if (c && 0 < c.length)
              for (l = c.length - 1; 0 <= l; l--) k = Math.round(h.y2), m = Math.round(h.y2 > c[l].chart.height ? c[l].chart.height : h.y2), c[l].lineCoordinates.y1 = k - (p[l] + c[l].margin + X), c[l].lineCoordinates.y2 = k - (p[l] + c[l].margin + X), "inside" === c[l].labelPlacement && 0 < l && (c[l].lineCoordinates.y1 = c[l].lineCoordinates.y1 + p[l] - (c[l]._titleTextBlock ? c[l]._titleTextBlock.height : 0) - ("inside" ===
                c[l].tickPlacement ? c[l].tickLength : 0), c[l].lineCoordinates.y2 = c[l].lineCoordinates.y1 + c[l].lineThickness / 2), c[l].bounds = {
                x1: d,
                y1: k - (p[l] + X + c[l].margin),
                x2: t,
                y2: m - (X + c[l].margin),
                width: t - d,
                height: p[l]
              }, c[l].title && (c[l]._titleTextBlock.maxWidth = 0 < c[l].titleMaxWidth && c[l].titleMaxWidth < c[l].lineCoordinates.width ? c[l].titleMaxWidth : c[l].lineCoordinates.width), X += p[l] + c[l].margin;
            if (b && 0 < b.length)
              for (l = b.length - 1; 0 <= l; l--) b[l] && (k = Math.round(h.y1), m = Math.round(h.y1 + (B[l] + b[l].margin + H)), b[l].lineCoordinates.y1 =
                m, b[l].lineCoordinates.y2 = m, "inside" === b[l].labelPlacement && 0 < l && (b[l].lineCoordinates.y1 = m - B[l] + (b[l]._titleTextBlock ? b[l]._titleTextBlock.height : 0)), b[l].bounds = {
                  x1: d,
                  y1: k + (b[l].margin + H),
                  x2: t,
                  y2: m,
                  width: t - d,
                  height: V
                }, b[l].title && (b[l]._titleTextBlock.maxWidth = 0 < b[l].titleMaxWidth && b[l].titleMaxWidth < b[l].lineCoordinates.width ? b[l].titleMaxWidth : b[l].lineCoordinates.width), H += B[l] + b[l].margin);
            if (a && 0 < a.length)
              for (l = 0; l < a.length; l++) {
                T = a[l]._labels && 0 < a[l]._labels.length ? a[l]._labels[0].textBlock.fontSize /
                  2 : 0;
                d = Math.round(h.x1 + g);
                k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1) : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1;
                t = Math.round(h.x1 + W + g);
                m = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - S > n.height - Math.max(T, 10) ? n.height - Math.max(T, 10) : h.y2 - S) : h.y2 > n.height - Math.max(T, 10) ? n.height - Math.max(T, 10) : h.y2;
                if (c && 0 < c.length)
                  for (T = 0; T < c.length; T++) c[T] && c[T].labelAutoFit && (t = 0 > c[T].labelAngle ? Math.max(t, u) : 0 === c[T].labelAngle ? Math.max(t, u / 2) : t, d =
                    0 > c[T].labelAngle || 0 === c[T].labelAngle ? t - W : d);
                if (b && 0 < b.length)
                  for (T = 0; T < b.length; T++) b[T] && b[T].labelAutoFit && (t = b[T].lineCoordinates.x1, d = t - W);
                a[l].lineCoordinates = {
                  x1: t - N,
                  y1: k,
                  x2: t - N,
                  y2: m,
                  height: Math.abs(m - k)
                };
                "inside" === a[l].labelPlacement && 0 < l && (a[l].lineCoordinates.x1 = a[l].lineCoordinates.x1 - (F[l] - (a[l]._titleTextBlock ? a[l]._titleTextBlock.height : 0)) + ("outside" === a[l].tickPlacement ? a[l].tickLength : 0), a[l].lineCoordinates.x2 = a[l].lineCoordinates.x1 + a[l].lineThickness / 2);
                a[l].bounds = {
                  x1: t - (F[l] +
                    N),
                  y1: k,
                  x2: t,
                  y2: m,
                  width: t - d,
                  height: m - k
                };
                a[l].title && (a[l]._titleTextBlock.maxWidth = 0 < a[l].titleMaxWidth && a[l].titleMaxWidth < a[l].lineCoordinates.height ? a[l].titleMaxWidth : a[l].lineCoordinates.height);
                a[l].calculateValueToPixelConversionParameters();
                a[l].calculateBreaksSizeInValues();
                N += F[l] + a[l].margin
              }
            if (f && 0 < f.length)
              for (l = 0; l < f.length; l++) {
                T = f[l]._labels && 0 < f[l]._labels.length ? f[l]._labels[0].textBlock.fontSize / 2 : 0;
                d = Math.round(h.x1 - g);
                k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 <
                  Math.max(T, 10) ? Math.max(T, 10) : h.y1) : h.y1 < Math.max(T, 10) ? Math.max(T, 10) : h.y1;
                t = Math.round(h.x2 - Z - $);
                m = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - S > n.height - Math.max(T, 10) ? n.height - Math.max(T, 10) : h.y2 - S) : h.y2 > n.height - Math.max(T, 10) ? n.height - Math.max(T, 10) : h.y2;
                if (c && 0 < c.length)
                  for (T = 0; T < c.length; T++) c[T] && c[T].labelAutoFit && (t = 0 > c[T].labelAngle ? Math.max(t, u) : 0 === c[T].labelAngle ? Math.max(t, u / 2) : t, d = 0 > c[T].labelAngle || 0 === c[T].labelAngle ? t - Z : d);
                if (b && 0 < b.length)
                  for (T = 0; T < b.length; T++) b[T] &&
                    b[T].labelAutoFit && (t = b[T].lineCoordinates.x2, d = t - Z);
                f[l].lineCoordinates = {
                  x1: t + O,
                  y1: k,
                  x2: t + O,
                  y2: m,
                  height: Math.abs(m - k)
                };
                "inside" === f[l].labelPlacement && 0 < l && (f[l].lineCoordinates.x1 = f[l].lineCoordinates.x1 + (s[l] - (f[l]._titleTextBlock ? f[l]._titleTextBlock.height : 0) - 2) - ("outside" === f[l].tickPlacement ? f[l].tickLength : 0), f[l].lineCoordinates.x2 = f[l].lineCoordinates.x1 + f[l].lineThickness / 2);
                f[l].bounds = {
                  x1: f[l].lineCoordinates.x1,
                  y1: k,
                  x2: t + s[l] + O,
                  y2: m,
                  width: t - d,
                  height: m - k
                };
                f[l].title && (f[l]._titleTextBlock.maxWidth =
                  0 < f[l].titleMaxWidth && f[l].titleMaxWidth < f[l].lineCoordinates.height ? f[l].titleMaxWidth : f[l].lineCoordinates.height);
                f[l].calculateValueToPixelConversionParameters();
                f[l].calculateBreaksSizeInValues();
                O += s[l] + f[l].margin
              }
            for (l = 0; l < q.length; l++) "axisY" === q[l].type && (q[l].calculateValueToPixelConversionParameters(), q[l].calculateBreaksSizeInValues());
            if (0 < r) {
              if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) w = P[r - 1][l] === P[r][l] ? !0 : !1;
              else w = !0;
              if (f && 0 < f.length)
                for (l = 0; l < f.length; l++) G = Q[r - 1][l] === Q[r][l] ? !0 :
                  !1;
              else G = !0;
              if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) L = E[r - 1][l] === E[r][l] ? !0 : !1;
              else L = !0;
              if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) M = v[r - 1][l] === v[r][l] ? !0 : !1;
              else M = !0
            }
            if (w && G && L && M) break;
            r++
          }
          if (c && 0 < c.length)
            for (l = 0; l < c.length; l++) c[l].calculateStripLinesThicknessInValues(), c[l].calculateBreaksInPixels();
          if (b && 0 < b.length)
            for (l = 0; l < b.length; l++) b[l].calculateStripLinesThicknessInValues(), b[l].calculateBreaksInPixels();
          if (a && 0 < a.length)
            for (l = 0; l < a.length; l++) a[l].calculateStripLinesThicknessInValues(),
              a[l].calculateBreaksInPixels();
          if (f && 0 < f.length)
            for (l = 0; l < f.length; l++) f[l].calculateStripLinesThicknessInValues(), f[l].calculateBreaksInPixels()
        }
      };
      z.render = function(a, f, c, b, g) {
        var h = a[0] ? a[0].chart : f[0].chart;
        g = h.ctx;
        h.alignVerticalAxes && h.alignVerticalAxes();
        g.save();
        g.beginPath();
        a[0] && g.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
        f[0] && g.rect(5, f[f.length - 1].bounds.y1, f[0].chart.width - 10, f[0].bounds.height);
        g.clip();
        if (a && 0 < a.length)
          for (var d = 0; d < a.length; d++) a[d].renderLabelsTicksAndTitle();
        if (f && 0 < f.length)
          for (d = 0; d < f.length; d++) f[d].renderLabelsTicksAndTitle();
        g.restore();
        if (c && 0 < c.length)
          for (d = 0; d < c.length; d++) c[d].renderLabelsTicksAndTitle();
        if (b && 0 < b.length)
          for (d = 0; d < b.length; d++) b[d].renderLabelsTicksAndTitle();
        h.preparePlotArea();
        h = h.plotArea;
        g.save();
        g.beginPath();
        g.rect(h.x1, h.y1, Math.abs(h.x2 - h.x1), Math.abs(h.y2 - h.y1));
        g.clip();
        if (a && 0 < a.length)
          for (d = 0; d < a.length; d++) a[d].renderStripLinesOfThicknessType("value");
        if (f && 0 < f.length)
          for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("value");
        if (c && 0 < c.length)
          for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("value");
        if (b && 0 < b.length)
          for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("value");
        if (a && 0 < a.length)
          for (d = 0; d < a.length; d++) a[d].renderInterlacedColors();
        if (f && 0 < f.length)
          for (d = 0; d < f.length; d++) f[d].renderInterlacedColors();
        if (c && 0 < c.length)
          for (d = 0; d < c.length; d++) c[d].renderInterlacedColors();
        if (b && 0 < b.length)
          for (d = 0; d < b.length; d++) b[d].renderInterlacedColors();
        g.restore();
        if (a && 0 < a.length)
          for (d = 0; d < a.length; d++) a[d].renderGrid(),
            u && (a[d].createMask(), a[d].renderBreaksBackground());
        if (f && 0 < f.length)
          for (d = 0; d < f.length; d++) f[d].renderGrid(), u && (f[d].createMask(), f[d].renderBreaksBackground());
        if (c && 0 < c.length)
          for (d = 0; d < c.length; d++) c[d].renderGrid(), u && (c[d].createMask(), c[d].renderBreaksBackground());
        if (b && 0 < b.length)
          for (d = 0; d < b.length; d++) b[d].renderGrid(), u && (b[d].createMask(), b[d].renderBreaksBackground());
        if (a && 0 < a.length)
          for (d = 0; d < a.length; d++) a[d].renderAxisLine();
        if (f && 0 < f.length)
          for (d = 0; d < f.length; d++) f[d].renderAxisLine();
        if (c && 0 < c.length)
          for (d = 0; d < c.length; d++) c[d].renderAxisLine();
        if (b && 0 < b.length)
          for (d = 0; d < b.length; d++) b[d].renderAxisLine();
        if (a && 0 < a.length)
          for (d = 0; d < a.length; d++) a[d].renderStripLinesOfThicknessType("pixel");
        if (f && 0 < f.length)
          for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("pixel");
        if (c && 0 < c.length)
          for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("pixel");
        if (b && 0 < b.length)
          for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("pixel")
      };
      z.prototype.calculateStripLinesThicknessInValues =
        function() {
          for (var a = 0; a < this.stripLines.length; a++)
            if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
              var f = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                f = this.getApparentDifference(f, c);
              this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) /
                Math.log(f)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - f) / 2;
              this.stripLines[a].thickness = f;
              this.stripLines[a]._thicknessType = "value"
            }
        };
      z.prototype.calculateBreaksSizeInValues = function() {
        for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, f = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ?
            this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !e(this.scaleBreaks.options.spacing), g, d = 0; d < f.length; d++) g = b || !e(f[d].options.spacing), f[d].spacing = Va(f[d].spacing, a, 8, g ? 0.1 * a : 8, g ? 0 : 3) << 0, f[d].size = 0 > f[d].spacing ? 0 : Math.abs(f[d].spacing / c), this.logarithmic && (f[d].size = Math.pow(this.logarithmBase, f[d].size))
      };
      z.prototype.calculateBreaksInPixels = function() {
        if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
          var a =
            this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
          for (var f = 0; f < a.length && !(a[f].startValue > this.conversionParameters.maximum); f++) a[f].endValue < this.conversionParameters.minimum || (e(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = f), a[f].startValue >= this.conversionParameters.minimum && (a[f].startPixel = this.convertValueToPixel(a[f].startValue), this.scaleBreaks.lastBreakIndex = f), a[f].endValue <= this.conversionParameters.maximum &&
            (a[f].endPixel = this.convertValueToPixel(a[f].endValue)))
        }
      };
      z.prototype.renderLabelsTicksAndTitle = function() {
        var a = this,
          f = !1,
          c = 0,
          b = 0,
          g = 1,
          d = 0;
        0 !== this.labelAngle && 360 !== this.labelAngle && (g = 1.2);
        if ("undefined" === typeof this.options.interval) {
          if ("bottom" === this._position || "top" === this._position)
            if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], g = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, e, k = this.viewportMaximum, t = this.lineCoordinates.width / Math.log(this.range), m = this._labels.length -
                  1; 0 <= m; m--) {
                p = this._labels[m];
                if (p.position < this.viewportMinimum) break;
                p.position > this.viewportMaximum || !(m === this._labels.length - 1 || e < Math.log(k / p.position) * t / g) || (c.push(p), k = p.position, e = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
              }
              this._labels = c
            } else {
              for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (e = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height *
                Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += e);
              c > this.lineCoordinates.width * g && this.labelAutoFit && (f = !0)
            } if ("left" === this._position || "right" === this._position)
            if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
              for (var c = [], n, k = this.viewportMaximum, t = this.lineCoordinates.height / Math.log(this.range), m = this._labels.length - 1; 0 <= m; m--) {
                p = this._labels[m];
                if (p.position < this.viewportMinimum) break;
                p.position > this.viewportMaximum || !(m === this._labels.length - 1 || n < Math.log(k / p.position) *
                  t) || (c.push(p), k = p.position, n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
              }
              this._labels = c
            } else {
              for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += n);
              b > this.lineCoordinates.height * g && this.labelAutoFit && (f = !0)
            }
        }
        this.logarithmic && (!this.equidistantInterval &&
          this.labelAutoFit) && this._labels.sort(function(a, b) {
          return a.position - b.position
        });
        var m = 0,
          p, q;
        if ("bottom" === this._position) {
          for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y <<
            0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width *
            Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = q.x, p.textBlock.y = q.y));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd",
            function() {
              for (m = 0; m < a._labels.length; m++)
                if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b, q.y << 0);
                  a.ctx.lineTo(b, q.y - a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore()
                }
            }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 +
            this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("top" === this._position) {
          for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
            this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 <
            this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) +
              ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), p.textBlock.x = q.x, p.textBlock.y = q.y));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
            for (m = 0; m < a._labels.length; m++)
              if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle =
                  a.tickColor;
                var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(b, q.y << 0);
                a.ctx.lineTo(b, q.y + a.tickLength << 0);
                a.ctx.stroke();
                a.ctx.restore()
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("left" === this._position) {
          for (m =
            0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y =
            q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
            ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
            for (m = 0; m < a._labels.length; m++)
              if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                a.ctx.lineWidth =
                  a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(q.x << 0, b);
                a.ctx.lineTo(q.x + a.tickLength << 0, b);
                a.ctx.stroke();
                a.ctx.restore()
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        } else if ("right" ===
          this._position) {
          for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), f && 0 !== d++ % 2 && this.labelAutoFit || (0 === this.labelAngle ?
            (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
              ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
          "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
            for (m = 0; m < a._labels.length; m++)
              if (p = a._labels[m], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position),
                  a.tickThickness)) {
                a.ctx.lineWidth = a.tickThickness;
                a.ctx.strokeStyle = a.tickColor;
                var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                a.ctx.save();
                a.ctx.beginPath();
                a.ctx.moveTo(q.x << 0, b);
                a.ctx.lineTo(q.x - a.tickLength << 0, b);
                a.ctx.stroke();
                a.ctx.restore()
              }
          }, this);
          this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
        }
        d =
          0;
        if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() {
          for (m = 0; m < a._labels.length; m++) p = a._labels[m], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || f && 0 !== d++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(!0), a.ctx.restore())
        }, this);
        else
          for (m = 0; m < this._labels.length; m++) p = this._labels[m], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || f && 0 !== d++ % 2 && this.labelAutoFit) || p.textBlock.render(!0)
      };
      z.prototype.renderInterlacedColors =
        function() {
          var a = this.chart.plotArea.ctx,
            f, c, b = this.chart.plotArea,
            g = 0;
          f = !0;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, g = 0; g < this._labels.length; g++) f ? (f = this.getPixelCoordinatesOnAxis(this._labels[g].position), c = g + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[g + 1].position), a.fillRect(Math.min(c.x, f.x), b.y1, Math.abs(c.x - f.x), Math.abs(b.y1 - b.y2)), f = !1) :
              f = !0;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, g = 0; g < this._labels.length; g++) f ? (c = this.getPixelCoordinatesOnAxis(this._labels[g].position), f = g + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[g + 1].position), a.fillRect(b.x1, Math.min(c.y, f.y), Math.abs(b.x1 - b.x2), Math.abs(f.y - c.y)), f = !1) : f = !0;
          a.beginPath()
        };
      z.prototype.renderStripLinesOfThicknessType = function(a) {
        if (this.stripLines &&
          0 < this.stripLines.length && a) {
          for (var f = this, c, b = 0, g = 0, d = !1, k = !1, t = [], w = [], k = !1, b = 0; b < this.stripLines.length; b++) {
            var m = this.stripLines[b];
            m._thicknessType === a && ("pixel" === a && (m.value < this.viewportMinimum || m.value > this.viewportMaximum || e(m.value) || isNaN(this.range)) || "value" === a && (m.startValue <= this.viewportMinimum && m.endValue <= this.viewportMinimum || m.startValue >= this.viewportMaximum && m.endValue >= this.viewportMaximum || e(m.startValue) || e(m.endValue) || isNaN(this.range)) || t.push(m))
          }
          for (b = 0; b < this._stripLineLabels.length; b++)
            if (m =
              this.stripLines[b], c = this._stripLineLabels[b], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) {
              a = this.getPixelCoordinatesOnAxis(c.position);
              if ("outside" === c.stripLine.labelPlacement)
                if (m && (this.ctx.strokeStyle = m.color, "pixel" === m._thicknessType && (this.ctx.lineWidth = m.thickness)), "bottom" === this._position) {
                  var n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                  this.ctx.beginPath();
                  this.ctx.moveTo(n, a.y << 0);
                  this.ctx.lineTo(n, a.y + this.tickLength << 0);
                  this.ctx.stroke();
                  0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (a.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width /
                    2, a.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (a.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x <<
                    0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" ===
                  this._position && (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
              else c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? e(m.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, e(m.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ?
                "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth :
                this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? e(m.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, e(m.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                  this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - c.textBlock.height > this.chart.plotArea.y1 ?
                e(m.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : e(m.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width -
                3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - +c.textBlock.height > this.chart.plotArea.y1 ? e(m.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 - 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : e(m.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize /
                2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
              c.textBlock.x = a.x;
              c.textBlock.y = a.y;
              w.push(c)
            } if (!k) {
            k = !1;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            for (b = 0; b < t.length; b++) m =
              t[b], m.showOnTop ? d || (d = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                for (g = 0; g < t.length; g++) m = t[g], m.showOnTop && m.render();
                this.ctx.restore()
              }, m)) : m.render();
            for (b = 0; b < w.length; b++) c = w[b], c.stripLine.showOnTop ? k || (k = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (g = 0; g < w.length; g++) c =
                w[g], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (f.ctx.save(), f.ctx.beginPath(), f.ctx.rect(f.chart.plotArea.x1, f.chart.plotArea.y1, f.chart.plotArea.width, f.chart.plotArea.height), f.ctx.clip(), c.textBlock.render(!0), f.ctx.restore())
            }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
            this.ctx.restore();
            k = !0
          }
          if (k)
            for (k = !1, b = 0; b < w.length; b++) c = w[b], "outside" === c.stripLine.labelPlacement && c.textBlock.render(!0)
        }
      };
      z.prototype.renderBreaksBackground = function() {
        this.chart._breaksCanvas &&
          (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
      };
      z.prototype.createMask = function() {
        if (this.scaleBreaks &&
          0 < this.scaleBreaks._appliedBreaks.length) {
          var a = this.scaleBreaks._appliedBreaks;
          u ? (this.maskCanvas = ta(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
          this.maskCtx.save();
          this.maskCtx.beginPath();
          this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
          this.maskCtx.clip();
          for (var f = 0; f < a.length; f++) a[f].endValue < this.viewportMinimum ||
            (a[f].startValue > this.viewportMaximum || isNaN(this.range)) || a[f].render(this.maskCtx);
          this.maskCtx.restore()
        }
      };
      z.prototype.renderCrosshair = function(a, f) {
        isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, f), this.crosshair.dispatchEvent("updated", {
          chart: this.chart,
          crosshair: this.options,
          axis: this,
          value: this.crosshair.value
        }, this))
      };
      z.prototype.showCrosshair = function(a) {
        e(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a),
          null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a))
      };
      z.prototype.renderGrid = function() {
        if (this.gridThickness && 0 < this.gridThickness) {
          var a = this.chart.ctx;
          a.save();
          var f, c = this.chart.plotArea;
          a.lineWidth = this.gridThickness;
          a.strokeStyle = this.gridColor;
          a.setLineDash && a.setLineDash(S(this.gridDashType, this.gridThickness));
          if ("bottom" === this._position || "top" === this._position)
            for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum ||
              this._labels[b].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[b].position), f = 1 === a.lineWidth % 2 ? (f.x << 0) + 0.5 : f.x << 0, a.moveTo(f, c.y1 << 0), a.lineTo(f, c.y2 << 0), a.stroke());
          else if ("left" === this._position || "right" === this._position)
            for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[b].position), f =
              1 === a.lineWidth % 2 ? (f.y << 0) + 0.5 : f.y << 0, a.moveTo(c.x1 << 0, f), a.lineTo(c.x2 << 0, f), a.stroke());
          a.restore()
        }
      };
      z.prototype.renderAxisLine = function() {
        var a = this.chart.ctx,
          f = u ? this.chart._preRenderCtx : a,
          c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
          b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
          g, d;
        f.save();
        if ("bottom" === this._position || "top" === this._position) {
          if (this.lineThickness) {
            this.reversed ? (g = this.lineCoordinates.x2, d = this.lineCoordinates.x1) : (g = this.lineCoordinates.x1, d = this.lineCoordinates.x2);
            f.lineWidth = this.lineThickness;
            f.strokeStyle = this.lineColor ? this.lineColor : "black";
            f.setLineDash && f.setLineDash(S(this.lineDashType, this.lineThickness));
            var k = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
            f.beginPath();
            if (this.scaleBreaks && !e(this.scaleBreaks.firstBreakIndex))
              if (e(this.scaleBreaks.lastBreakIndex)) g = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
              else
                for (var t = this.scaleBreaks.firstBreakIndex; t <= this.scaleBreaks.lastBreakIndex; t++) f.moveTo(g,
                  k), f.lineTo(this.scaleBreaks._appliedBreaks[t].startPixel + c, k), g = this.scaleBreaks._appliedBreaks[t].endPixel + b;
            g && (f.moveTo(g, k), f.lineTo(d, k));
            f.stroke()
          }
        } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
          this.reversed ? (g = this.lineCoordinates.y1, d = this.lineCoordinates.y2) : (g = this.lineCoordinates.y2, d = this.lineCoordinates.y1);
          f.lineWidth = this.lineThickness;
          f.strokeStyle = this.lineColor;
          f.setLineDash && f.setLineDash(S(this.lineDashType, this.lineThickness));
          k = 1 === this.lineThickness %
            2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
          f.beginPath();
          if (this.scaleBreaks && !e(this.scaleBreaks.firstBreakIndex))
            if (e(this.scaleBreaks.lastBreakIndex)) g = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
            else
              for (t = this.scaleBreaks.firstBreakIndex; t <= this.scaleBreaks.lastBreakIndex; t++) f.moveTo(k, g), f.lineTo(k, this.scaleBreaks._appliedBreaks[t].startPixel + b), g = this.scaleBreaks._appliedBreaks[t].endPixel + c;
          g && (f.moveTo(k, g), f.lineTo(k, d));
          f.stroke()
        }
        u &&
          (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), f.clearRect(0, 0, this.chart.width, this.chart.height));
        f.restore()
      };
      z.prototype.getPixelCoordinatesOnAxis = function(a) {
        var f = {};
        if ("bottom" === this._position || "top" === this._position) f.x = this.convertValueToPixel(a), f.y = this.lineCoordinates.y1;
        if ("left" === this._position || "right" === this._position) f.y =
          this.convertValueToPixel(a), f.x = this.lineCoordinates.x2;
        return f
      };
      z.prototype.convertPixelToValue = function(a) {
        if ("undefined" === typeof a) return null;
        var f = 0,
          c = 0,
          b, f = !0,
          g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
          c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
        if (this.logarithmic) {
          a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
          if (c <= this.conversionParameters.reference === ("left" === this._position ||
              "right" === this._position) !== this.reversed)
            for (c = 0; c < g.length; c++) {
              if (!(g[c].endValue < this.conversionParameters.minimum))
                if (f)
                  if (g[c].startValue < this.conversionParameters.minimum) {
                    if (1 < g[c].size && this.conversionParameters.minimum * Math.pow(g[c].endValue / g[c].startValue, Math.log(b) / Math.log(g[c].size)) < g[c].endValue) {
                      a = Math.pow(g[c].endValue / g[c].startValue, Math.log(b) / Math.log(g[c].size));
                      break
                    } else a *= g[c].endValue / this.conversionParameters.minimum / Math.pow(g[c].size, Math.log(g[c].endValue / this.conversionParameters.minimum) /
                      Math.log(g[c].endValue / g[c].startValue)), b /= Math.pow(g[c].size, Math.log(g[c].endValue / this.conversionParameters.minimum) / Math.log(g[c].endValue / g[c].startValue));
                    f = !1
                  } else if (b > g[c].startValue / this.conversionParameters.minimum) {
                b /= g[c].startValue / this.conversionParameters.minimum;
                if (b < g[c].size) {
                  a *= Math.pow(g[c].endValue / g[c].startValue, 1 === g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)) / b;
                  break
                } else a *= g[c].endValue / g[c].startValue / g[c].size;
                b /= g[c].size;
                f = !1
              } else break;
              else if (b > g[c].startValue / g[c -
                  1].endValue) {
                b /= g[c].startValue / g[c - 1].endValue;
                if (b < g[c].size) {
                  a *= Math.pow(g[c].endValue / g[c].startValue, 1 === g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)) / b;
                  break
                } else a *= g[c].endValue / g[c].startValue / g[c].size;
                b /= g[c].size
              } else break
            } else
              for (c = g.length - 1; 0 <= c; c--)
                if (!(g[c].startValue > this.conversionParameters.minimum))
                  if (f)
                    if (g[c].endValue > this.conversionParameters.minimum) {
                      if (1 < g[c].size && this.conversionParameters.minimum * Math.pow(g[c].endValue / g[c].startValue, Math.log(b) / Math.log(g[c].size)) >
                        g[c].startValue) {
                        a = Math.pow(g[c].endValue / g[c].startValue, Math.log(b) / Math.log(g[c].size));
                        break
                      } else a *= g[c].startValue / this.conversionParameters.minimum * Math.pow(g[c].size, Math.log(g[c].startValue / this.conversionParameters.minimum) / Math.log(g[c].endValue / g[c].startValue)) * b, b *= Math.pow(g[c].size, Math.log(this.conversionParameters.minimum / g[c].startValue) / Math.log(g[c].endValue / g[c].startValue));
                      f = !1
                    } else if (b < g[c].endValue / this.conversionParameters.minimum) {
            b /= g[c].endValue / this.conversionParameters.minimum;
            if (b > 1 / g[c].size) {
              a *= Math.pow(g[c].endValue / g[c].startValue, 1 >= g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)) * b;
              break
            } else a /= g[c].endValue / g[c].startValue / g[c].size;
            b *= g[c].size;
            f = !1
          } else break;
          else if (b < g[c].endValue / g[c + 1].startValue) {
            b /= g[c].endValue / g[c + 1].startValue;
            if (b > 1 / g[c].size) {
              a *= Math.pow(g[c].endValue / g[c].startValue, 1 >= g[c].size ? 1 : Math.log(b) / Math.log(g[c].size)) * b;
              break
            } else a /= g[c].endValue / g[c].startValue / g[c].size;
            b *= g[c].size
          } else break;
          f = a * this.viewportMinimum
        } else {
          a = b = (c - this.conversionParameters.reference) /
            this.conversionParameters.pixelPerUnit;
          if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
            for (c = 0; c < g.length; c++) {
              if (!(g[c].endValue < this.conversionParameters.minimum))
                if (f)
                  if (g[c].startValue < this.conversionParameters.minimum) {
                    if (g[c].size && this.conversionParameters.minimum + b * (g[c].endValue - g[c].startValue) / g[c].size < g[c].endValue) {
                      a = 0 >= g[c].size ? 0 : b * (g[c].endValue - g[c].startValue) / g[c].size;
                      break
                    } else a += g[c].endValue - this.conversionParameters.minimum -
                      g[c].size * (g[c].endValue - this.conversionParameters.minimum) / (g[c].endValue - g[c].startValue), b -= g[c].size * (g[c].endValue - this.conversionParameters.minimum) / (g[c].endValue - g[c].startValue);
                    f = !1
                  } else if (b > g[c].startValue - this.conversionParameters.minimum) {
                b -= g[c].startValue - this.conversionParameters.minimum;
                if (b < g[c].size) {
                  a += (g[c].endValue - g[c].startValue) * (0 === g[c].size ? 1 : b / g[c].size) - b;
                  break
                } else a += g[c].endValue - g[c].startValue - g[c].size;
                b -= g[c].size;
                f = !1
              } else break;
              else if (b > g[c].startValue - g[c -
                  1].endValue) {
                b -= g[c].startValue - g[c - 1].endValue;
                if (b < g[c].size) {
                  a += (g[c].endValue - g[c].startValue) * (0 === g[c].size ? 1 : b / g[c].size) - b;
                  break
                } else a += g[c].endValue - g[c].startValue - g[c].size;
                b -= g[c].size
              } else break
            } else
              for (c = g.length - 1; 0 <= c; c--)
                if (!(g[c].startValue > this.conversionParameters.minimum))
                  if (f)
                    if (g[c].endValue > this.conversionParameters.minimum)
                      if (g[c].size && this.conversionParameters.minimum + b * (g[c].endValue - g[c].startValue) / g[c].size > g[c].startValue) {
                        a = 0 >= g[c].size ? 0 : b * (g[c].endValue - g[c].startValue) /
                          g[c].size;
                        break
                      } else a += g[c].startValue - this.conversionParameters.minimum + g[c].size * (this.conversionParameters.minimum - g[c].startValue) / (g[c].endValue - g[c].startValue), b += g[c].size * (this.conversionParameters.minimum - g[c].startValue) / (g[c].endValue - g[c].startValue), f = !1;
          else if (b < g[c].endValue - this.conversionParameters.minimum) {
            b -= g[c].endValue - this.conversionParameters.minimum;
            if (b > -1 * g[c].size) {
              a += (g[c].endValue - g[c].startValue) * (0 === g[c].size ? 1 : b / g[c].size) + b;
              break
            } else a -= g[c].endValue - g[c].startValue -
              g[c].size;
            b += g[c].size;
            f = !1
          } else break;
          else if (b < g[c].endValue - g[c + 1].startValue) {
            b -= g[c].endValue - g[c + 1].startValue;
            if (b > -1 * g[c].size) {
              a += (g[c].endValue - g[c].startValue) * (0 === g[c].size ? 1 : b / g[c].size) + b;
              break
            } else a -= g[c].endValue - g[c].startValue - g[c].size;
            b += g[c].size
          } else break;
          f = this.conversionParameters.minimum + a
        }
        return f
      };
      z.prototype.convertValueToPixel = function(a) {
        a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
        return this.logarithmic ? this.conversionParameters.reference +
          this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
      };
      z.prototype.getApparentDifference = function(a, f, c, b) {
        var g = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
        if (this.logarithmic) {
          c = e(c) ? f / a : c;
          for (var d = 0; d < g.length && !(f < g[d].startValue); d++) a > g[d].endValue || (a <= g[d].startValue && f >= g[d].endValue ? c = c / g[d].endValue * g[d].startValue * g[d].size : a >= g[d].startValue && f >= g[d].endValue ? c = c / g[d].endValue * a * Math.pow(g[d].size, Math.log(g[d].endValue / a) / Math.log(g[d].endValue / g[d].startValue)) : a <= g[d].startValue && f <= g[d].endValue ? c = c / f * g[d].startValue * Math.pow(g[d].size, Math.log(f / g[d].startValue) / Math.log(g[d].endValue / g[d].startValue)) : !b && (a > g[d].startValue && f < g[d].endValue) &&
            (c = a * Math.pow(g[d].size, Math.log(f / a) / Math.log(g[d].endValue / g[d].startValue))))
        } else
          for (c = e(c) ? Math.abs(f - a) : c, d = 0; d < g.length && !(f < g[d].startValue); d++) a > g[d].endValue || (a <= g[d].startValue && f >= g[d].endValue ? c = c - g[d].endValue + g[d].startValue + g[d].size : a > g[d].startValue && f >= g[d].endValue ? c = c - g[d].endValue + a + g[d].size * (g[d].endValue - a) / (g[d].endValue - g[d].startValue) : a <= g[d].startValue && f < g[d].endValue ? c = c - f + g[d].startValue + g[d].size * (f - g[d].startValue) / (g[d].endValue - g[d].startValue) : !b && (a > g[d].startValue &&
            f < g[d].endValue) && (c = a + g[d].size * (f - a) / (g[d].endValue - g[d].startValue)));
        return c
      };
      z.prototype.setViewPortRange = function(a, f) {
        this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, f);
        this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, f)
      };
      z.prototype.getXValueAt = function(a) {
        if (!a) return null;
        var f = null;
        "left" === this._position ? f = this.convertPixelToValue(a.y) : "bottom" === this._position && (f = this.convertPixelToValue(a.x));
        return f
      };
      z.prototype.calculateValueToPixelConversionParameters =
        function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var f = {
              pixelPerUnit: null,
              minimum: null,
              reference: null
            },
            c = this.lineCoordinates.width,
            b = this.lineCoordinates.height,
            c = "bottom" === this._position || "top" === this._position ? c : b,
            b = Math.abs(this.range);
          if (this.logarithmic)
            for (var d = 0; d < a.length && !(this.viewportMaximum < a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? c = 0 : this.viewportMinimum <= a[d].startValue &&
              this.viewportMaximum >= a[d].endValue ? (b = b / a[d].endValue * a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100) : c - Math.min(a[d].spacing, 0.1 * c)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b / a[d].endValue * this.viewportMinimum, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * Math.log(a[d].endValue / this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * Math.log(a[d].endValue /
                this.viewportMinimum) / Math.log(a[d].endValue / a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (b = b / this.viewportMaximum * a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[d].startValue) / Math.log(a[d].endValue / a[d].startValue)));
          else
            for (d = 0; d < a.length && !(this.viewportMaximum <
                a[d].startValue); d++) this.viewportMinimum > a[d].endValue || (this.viewportMinimum >= a[d].startValue && this.viewportMaximum <= a[d].endValue ? c = 0 : this.viewportMinimum <= a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b - a[d].endValue + a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100) : c - Math.min(a[d].spacing, 0.1 * c)) : this.viewportMinimum > a[d].startValue && this.viewportMaximum >= a[d].endValue ? (b = b - a[d].endValue + this.viewportMinimum, c = 0 < a[d].spacing.toString().indexOf("%") ?
              c * (1 - parseFloat(a[d].spacing) / 100 * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * (a[d].endValue - this.viewportMinimum) / (a[d].endValue - a[d].startValue)) : this.viewportMinimum <= a[d].startValue && this.viewportMaximum < a[d].endValue && (b = b - this.viewportMaximum + a[d].startValue, c = 0 < a[d].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[d].spacing) / 100 * (this.viewportMaximum - a[d].startValue) / (a[d].endValue - a[d].startValue)) : c - Math.min(a[d].spacing, 0.1 * c) * (this.viewportMaximum -
              a[d].startValue) / (a[d].endValue - a[d].startValue)));
          f.minimum = this.viewportMinimum;
          f.maximum = this.viewportMaximum;
          f.range = b;
          if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? -1 : 1) * c * f.lnLogarithmBase / Math.log(Math.abs(b))) : f.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), f.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position) this.logarithmic ?
            (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? 1 : -1) * c * f.lnLogarithmBase / Math.log(Math.abs(b))) : f.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), f.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = f
        };
      z.prototype.calculateAxisParameters = function() {
        if (this.logarithmic) this.calculateLogarithmicAxisParameters();
        else {
          var a = this.chart.layoutManager.getFreeSpace(),
            f = !1,
            c = !1;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth =
            a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
            b = 4;
          "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
          var a = Math.max(b, Math.floor(this.maxWidth / a)),
            d, h, k, b = 0;
          !e(this.options.viewportMinimum) && (!e(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
          if (e(this.options.viewportMinimum) && !e(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
          if (e(this.options.viewportMaximum) && !e(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          else if (null === this.viewportMaximum ||
            isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
          if (this.scaleBreaks)
            for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
              if ((!e(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !e(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !e(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!e(this.sessionVariables.newViewportMaximum) &&
                  this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !e(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !e(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(b, 1);
                break
              } if ("axisX" === this.type) {
            if (this.dataSeries && 0 < this.dataSeries.length)
              for (d = 0; d < this.dataSeries.length; d++) "dateTime" === this.dataSeries[d].xValueType && (c = !0);
            d = null !== this.viewportMinimum ?
              this.viewportMinimum : this.dataInfo.viewPortMin;
            h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
            0 === h - d && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, d -= b);
            Infinity !== this.dataInfo.minDiff ? k = this.dataInfo.minDiff : 1 < h - d ? k = 0.5 * Math.abs(h - d) : (k = 1, c && (f = !0))
          } else "axisY" === this.type && (d = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(d) ||
            isFinite(h) ? isFinite(d) ? isFinite(h) || (h = d) : d = h : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === d && 0 === h ? (h += 9, d = 0) : 0 === h - d ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, d -= b) : d > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, d, null, !0)), 5), 0 <= h ? d = h - b : h = isFinite(d) ? d + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d, h, null, !0)), 0.05), 0 !== h && (h += b), 0 !== d && (d -=
              b)), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d ? 0.5 * Math.abs(h - d) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < d && (d = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
          b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? d : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, !0);
          if ("axisX" === this.type && c) {
            this.valueType =
              "dateTime";
            this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") :
              b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * aa.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * aa.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * aa.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * aa.secondDuration) <= a ? (this.interval =
                10, this.intervalType = "second") : b / (15 * aa.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * aa.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * aa.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * aa.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * aa.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * aa.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * aa.minuteDuration) <= a ? (this.interval =
                10, this.intervalType = "minute") : b / (15 * aa.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * aa.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * aa.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * aa.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * aa.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * aa.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * aa.hourDuration) <= a ? (this.interval = 6, this.intervalType =
                "hour") : b / (1 * aa.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * aa.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * aa.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * aa.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * aa.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * aa.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * aa.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * aa.monthDuration) <=
              a ? (this.interval = 2, this.intervalType = "month") : b / (3 * aa.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * aa.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * aa.yearDuration) <= a ? 1 : b / (2 * aa.yearDuration) <= a ? 2 : b / (4 * aa.yearDuration) <= a ? 4 : Math.floor(z.getNiceNumber(b / (a - 1), !0) / aa.yearDuration), this.intervalType = "year"));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = d - k / 2;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
              h + k / 2;
            f ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString =
              "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
            this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
          } else {
            this.intervalType = "number";
            b = z.getNiceNumber(b, !1);
            this.interval = this.options && 0 < this.options.interval ? this.options.interval : z.getNiceNumber(b / (a - 1), !0);
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? d - k / 2 : Math.floor(d / this.interval) * this.interval;
            if (null === this.viewportMaximum ||
              isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? h + k / 2 : Math.ceil(h / this.interval) * this.interval;
            0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = z.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
          }
          if (null === this.minimum || null === this.maximum)
            if ("axisX" === this.type ? (d =
                null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === h - d && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, d -= b), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d ? 0.5 * Math.abs(h - d) : 1) : "axisY" === this.type && (d = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(d) || isFinite(h) ? 0 === d && 0 === h ? (h += 9, d = 0) : 0 === h - d ? (b = Math.min(Math.abs(0.01 * Math.abs(h)),
                5), h += b, d -= b) : d > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, d, null, !0)), 5), 0 <= h ? d = h - b : h = isFinite(d) ? d + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(d, h, null, !0)), 0.05), 0 !== h && (h += b), 0 !== d && (d -= b)) : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, d = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - d ? 0.5 * Math.abs(h - d) : 1, this.includeZero && (null === this.minimum ||
                isNaN(this.minimum)) && 0 < d && (d = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)), Math.abs(this.getApparentDifference(d, h, null, !0)), "axisX" === this.type && c) {
              this.valueType = "dateTime";
              if (null === this.minimum || isNaN(this.minimum)) this.minimum = d - k / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
              if (null === this.maximum || isNaN(this.maximum)) this.maximum =
                h + k / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)
            } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? d - k / 2 : Math.floor(d / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)),
              null === this.maximum && (this.maximum = "axisX" === this.type ? h + k / 2 : Math.ceil(h / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
          e(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          e(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.range = this.viewportMaximum - this.viewportMinimum;
          this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
          this.valueFormatString || (this.valueFormatString = z.generateValueFormatString(this.range, 2))
        }
      };
      z.prototype.calculateLogarithmicAxisParameters =
        function() {
          var a = this.chart.layoutManager.getFreeSpace(),
            d = Math.log(this.logarithmBase),
            c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
            b, g, h, k;
          k = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum ||
            isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
          if (this.scaleBreaks)
            for (k = 0; k < this.scaleBreaks._appliedBreaks.length; k++)
              if ((!e(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[k].startValue || !e(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[k].startValue || !e(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[k].startValue) && (!e(this.sessionVariables.newViewportMaximum) &&
                  this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[k].endValue || !e(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[k].endValue || !e(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[k].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(k, 1);
                break
              }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax,
            1 === g / b && (k = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), g *= k, b /= k), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / b > this.logarithmBase ? g / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(g) ? (g = "undefined" === typeof this.options.interval ? 0 :
              this.options.interval, b = 1) : 0 >= b ? b = g : isFinite(g) || (g = b), 1 === b && 1 === g ? (g *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === g / b ? (k = Math.min(g * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), g *= k, b /= k) : b > g ? (k = Math.min(b / g * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= g ? b = g / k : g = b * k) : (k = Math.min(g / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== g && (g *= k), 1 !== b && (b /= k)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / b > this.logarithmBase ?
            g / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > g && (g = 1));
          k = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var t = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum) - (isNaN(this.viewportMinimum) ||
            null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          k = Math.pow(this.logarithmBase, z.getNiceNumber(Math.abs(Math.log(k) / d), !1));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = z.getNiceExponent(Math.log(k) / d / (a - 1), !0), c = z.getNiceNumber(t / (a - 1), !0));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(g) / d / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval &&
            (this.interval = z.getNiceExponent(Math.ceil(Math.log(k) / d) / (a - 1)), c = z.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
          if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === g / b && (k = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), g *= k, b /= k), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / b > this.logarithmBase ?
            g / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(g) ? 1 === b && 1 === g ? (g *= this.logarithmBase, b /= this.logarithmBase) : 1 === g / b ? (k = Math.pow(this.logarithmBase, this.interval), g *= k, b /= k) : b > g ? (k = Math.min(0.01 * (b / g), 5), 1 <= g ? b = g / k : g = b * k) : (k = Math.min(g / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== g && (g *= k), 1 !== b && (b /= k)) : (g = "undefined" ===
            typeof this.options.interval ? 0 : this.options.interval, b = 1), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : g / b > this.logarithmBase ? g / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > g && (g = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) /
            d / this.interval)), e(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum :
            this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? g * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(g) / d / this.interval)), e(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum ||
            isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum,
            this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b =
            Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum;) d += c;
            this.equidistantInterval = !1;
            this.intervalStartPosition = d;
            this.interval = c
          } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval &&
            (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(d) || !isFinite(d)) d = 2;
            if (2 < d)
              for (k = 0; k < d - 2; k++) this.valueFormatString += "#"
          }
        };
      z.generateValueFormatString = function(a, d) {
        var c = "#,##0.",
          b = d;
        1 > a && (b += Math.floor(Math.abs(Math.log(a) /
          Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
        for (var g = 0; g < b; g++) c += "#";
        return c
      };
      z.getNiceExponent = function(a, d) {
        var c = Math.floor(Math.log(a) / Math.LN10),
          b = a / Math.pow(10, c),
          b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
        return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
      };
      z.getNiceNumber = function(a, d) {
        var c = Math.floor(Math.log(a) / Math.LN10),
          b = a / Math.pow(10, c),
          b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
        return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
      };
      z.prototype.getLabelStartPoint = function() {
        var a = aa[this.intervalType + "Duration"] * this.interval,
          a = new Date(Math.floor(this.viewportMinimum / a) * a);
        if ("millisecond" !== this.intervalType)
          if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
          else if ("minute" === this.intervalType) {
          if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("hour" === this.intervalType) {
          if (0 < a.getMinutes() || 0 < a.getSeconds() ||
            0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("day" === this.intervalType) {
          if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else if ("week" === this.intervalType) {
          if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0),
            a.setSeconds(0), a.setMilliseconds(0)
        } else if ("month" === this.intervalType) {
          if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
        } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0),
          a.setSeconds(0), a.setMilliseconds(0));
        return a
      };
      ia(O, Z);
      ia(W, Z);
      W.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder) {
          var d = 0;
          this.parent.options._isPlaceholder && this.parent.createUserOptions();
          this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
          this.options = "undefined" === typeof a ? {} : a;
          this.parent.options[this.optionsName][d] = this.options
        }
      };
      W.prototype.render = function(a) {
        if (0 !== this.spacing ||
          0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
          var d = this.ctx,
            c = this.ctx.globalAlpha;
          this.ctx = a || this.ctx;
          this.ctx.save();
          this.ctx.beginPath();
          this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
          this.ctx.clip();
          var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
            g = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
          this.ctx.strokeStyle =
            this.lineColor;
          this.ctx.fillStyle = this.color;
          this.ctx.beginPath();
          this.ctx.globalAlpha = 1;
          V(this.id);
          var h, e, k, t, m, n;
          a = Math.max(this.spacing, 3);
          var p = Math.max(0, this.lineThickness);
          this.ctx.lineWidth = p;
          this.ctx.setLineDash && this.ctx.setLineDash(S(this.lineDashType, p));
          if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
            if (b = 1 === p % 2 ? (b.x << 0) + 0.5 : b.x << 0, e = 1 === p % 2 ? (g.x << 0) + 0.5 : g.x << 0, "top" === this.scaleBreaks.parent._position ? (g = this.chart.plotArea.y1, k = this.chart.plotArea.y2 +
                p / 2 + 0.5 << 0) : (g = this.chart.plotArea.y2, k = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = {
                x1: b - p / 2,
                y1: g,
                x2: e + p / 2,
                y2: k
              }, this.ctx.moveTo(b, g), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, k), this.ctx.lineTo(e, k), this.ctx.lineTo(e, g);
            else if ("wavy" === this.type) {
            t = b;
            m = g;
            h = 0.5;
            n = (k - m) / a / 3;
            for (var q = 0; q < n; q++) this.ctx.bezierCurveTo(t + h * a, m + a, t + h * a, m + 2 * a, t, m + 3 * a), m += 3 * a, h *= -1;
            this.ctx.bezierCurveTo(t + h * a,
              m + a, t + h * a, m + 2 * a, t, m + 3 * a);
            t = e;
            h *= -1;
            this.ctx.lineTo(t, m);
            for (q = 0; q < n; q++) this.ctx.bezierCurveTo(t + h * a, m - a, t + h * a, m - 2 * a, t, m - 3 * a), m -= 3 * a, h *= -1
          } else {
            if ("zigzag" === this.type) {
              h = -1;
              m = g + a;
              t = b + a;
              n = (k - m) / a / 2;
              for (q = 0; q < n; q++) this.ctx.lineTo(t, m), t += 2 * h * a, m += 2 * a, h *= -1;
              this.ctx.lineTo(t, m);
              t += e - b;
              for (q = 0; q < n + 1; q++) this.ctx.lineTo(t, m), t += 2 * h * a, m -= 2 * a, h *= -1;
              this.ctx.lineTo(t + h * a, m + a)
            }
          } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
            if (g = 1 === p % 2 ? (g.y << 0) + 0.5 : g.y <<
              0, k = 1 === p % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, e = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, e = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = {
                x1: b,
                y1: g - p / 2,
                x2: e,
                y2: k + p / 2
              }, this.ctx.moveTo(b, g), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(e, g), this.ctx.lineTo(e, k), this.ctx.lineTo(b, k);
            else if ("wavy" === this.type) {
            t = b;
            m = g;
            h = 0.5;
            n =
              (e - t) / a / 3;
            for (q = 0; q < n; q++) this.ctx.bezierCurveTo(t + a, m + h * a, t + 2 * a, m + h * a, t + 3 * a, m), t += 3 * a, h *= -1;
            this.ctx.bezierCurveTo(t + a, m + h * a, t + 2 * a, m + h * a, t + 3 * a, m);
            m = k;
            h *= -1;
            this.ctx.lineTo(t, m);
            for (q = 0; q < n; q++) this.ctx.bezierCurveTo(t - a, m + h * a, t - 2 * a, m + h * a, t - 3 * a, m), t -= 3 * a, h *= -1
          } else if ("zigzag" === this.type) {
            h = 1;
            m = g - a;
            t = b + a;
            n = (e - t) / a / 2;
            for (q = 0; q < n; q++) this.ctx.lineTo(t, m), m += 2 * h * a, t += 2 * a, h *= -1;
            this.ctx.lineTo(t, m);
            m += k - g;
            for (q = 0; q < n + 1; q++) this.ctx.lineTo(t, m), m += 2 * h * a, t -= 2 * a, h *= -1;
            this.ctx.lineTo(t + a, m + h * a)
          }
          0 < p && this.ctx.stroke();
          this.ctx.closePath();
          this.ctx.globalAlpha = this.fillOpacity;
          this.ctx.globalCompositeOperation = "destination-over";
          this.ctx.fill();
          this.ctx.restore();
          this.ctx.globalAlpha = c;
          this.ctx = d
        }
      };
      ia(P, Z);
      P.prototype.createUserOptions = function(a) {
        if ("undefined" !== typeof a || this.options._isPlaceholder) {
          var d = 0;
          this.parent.options._isPlaceholder && this.parent.createUserOptions();
          this.options._isPlaceholder || (Ea(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
          this.options = "undefined" ===
            typeof a ? {} : a;
          this.parent.options.stripLines[d] = this.options
        }
      };
      P.prototype.render = function() {
        this.ctx.save();
        var a = this.parent.getPixelCoordinatesOnAxis(this.value),
          d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
        if (0 < d) {
          var c = null === this.opacity ? 1 : this.opacity;
          this.ctx.strokeStyle = this.color;
          this.ctx.beginPath();
          var b = this.ctx.globalAlpha;
          this.ctx.globalAlpha = c;
          V(this.id);
          var g, h, e,
            k;
          this.ctx.lineWidth = d;
          this.ctx.setLineDash && this.ctx.setLineDash(S(this.lineDashType, d));
          if ("bottom" === this.parent._position || "top" === this.parent._position) g = h = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, e = this.chart.plotArea.y1, k = this.chart.plotArea.y2, this.bounds = {
            x1: g - d / 2,
            y1: e,
            x2: h + d / 2,
            y2: k
          };
          else if ("left" === this.parent._position || "right" === this.parent._position) e = k = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, g = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = {
            x1: g,
            y1: e - d / 2,
            x2: h,
            y2: k + d / 2
          };
          this.ctx.moveTo(g, e);
          this.ctx.lineTo(h, k);
          this.ctx.stroke();
          this.ctx.globalAlpha = b
        }
        this.ctx.restore()
      };
      ia(X, Z);
      X.prototype.showAt = function(a) {
        if (!this.enabled) return !1;
        var d = this.chart,
          c = !1;
        d.resetOverlayedCanvas();
        d.clearedOverlayedCanvas = this.parent.type;
        this.chart.renderCrosshairs(this.parent);
        if ("xySwapped" === d.plotInfo.axisPlacement)
          if ("bottom" === this.parent._position)
            for (var b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum &&
              a <= d.axisY[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
          for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
        else if ("left" === this.parent._position)
          for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
        else {
          if ("right" === this.parent._position)
            for (b = 0; b < d.axisX2.length; b++) this.parent ===
              d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null)
        } else if ("bottom" === this.parent._position)
          for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
        else if ("top" === this.parent._position)
          for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
        else if ("left" === this.parent._position)
          for (b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
        else if ("right" === this.parent._position)
          for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
        for (b = 0; b < d.axisX.length; b++) a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && (d.axisX[b].crosshair.enabled && !e(a) &&
          a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum) && (d.axisX[b].showCrosshair(a), d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = !0));
        for (b = 0; b < d.axisX2.length; b++) a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && (d.axisX2[b].crosshair.enabled && !e(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum) && (d.axisX2[b].showCrosshair(a), d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = !0));
        for (b = 0; b < d.axisY.length; b++) a = d.axisY[b]._crosshairValue,
          d.axisY[b].crosshair && (d.axisY[b].crosshair.enabled && !e(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum) && (d.axisY[b].showCrosshair(a), d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = !0));
        for (b = 0; b < d.axisY2.length; b++) a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && (d.axisY2[b].crosshair.enabled && !e(a) && a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum) && (d.axisY2[b].showCrosshair(a), d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair &&
          (c = !0));
        this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
        return c
      };
      X.prototype.hide = function() {
        this.chart.resetOverlayedCanvas();
        this.chart.renderCrosshairs(this.parent);
        this._hidden = !0
      };
      X.prototype.render = function(a, d, c) {
        var b, g, h, k, t = null,
          w = null,
          m = null,
          n = "";
        if (!this.valueFormatString)
          if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
          else {
            var p = 0,
              p = "xySwapped" === this.chart.plotInfo.axisPlacement ?
              50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
            this.valueFormatString = z.generateValueFormatString(this.parent.range, p)
          } var m = null === this.opacity ? 1 : this.opacity,
          p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit *
            this.thickness),
          q = this.chart.overlaidCanvasCtx,
          l = q.globalAlpha;
        q.globalAlpha = m;
        q.beginPath();
        q.strokeStyle = this.color;
        q.lineWidth = p;
        q.save();
        this.labelFontSize = Math.abs(e(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
        this.labelMaxWidth = e(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
        this.labelMaxHeight = e(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
        0 < p && q.setLineDash && q.setLineDash(S(this.lineDashType, p));
        m = new oa(q, {
          x: 0,
          y: 0,
          padding: {
            top: 2,
            right: 3,
            bottom: 2,
            left: 4
          },
          backgroundColor: this.labelBackgroundColor,
          borderColor: this.labelBorderColor,
          borderThickness: this.labelBorderThickness,
          cornerRadius: this.labelCornerRadius,
          maxWidth: this.labelMaxWidth,
          maxHeight: this.labelMaxHeight,
          angle: this.labelAngle,
          text: n,
          horizontalAlign: "left",
          fontSize: this.labelFontSize,
          fontFamily: this.labelFontFamily,
          fontWeight: this.labelFontWeight,
          fontColor: this.labelFontColor,
          fontStyle: this.labelFontStyle,
          textBaseline: "middle"
        });
        if (this.snapToDataPoint) {
          var r =
            0,
            n = [];
          if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
            var s = null;
            if ("bottom" === this.parent._position || "top" === this.parent._position) r = this.parent.dataSeries[0].axisX.convertPixelToValue({
              y: d
            });
            else if ("left" === this.parent._position || "right" === this.parent._position) r = this.parent.convertPixelToValue({
              y: d
            });
            for (var u = 0; u < this.parent.dataSeries.length; u++)(s = this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (s.dataSeries = this.parent.dataSeries[u], null !== s.dataPoint.y && s.dataSeries.visible &&
              n.push(s));
            s = null;
            if (0 === n.length) return;
            n.sort(function(a, b) {
              return a.distance - b.distance
            });
            s = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
            u = 0;
            if ("rangeBar" === n[0].dataSeries.type || "error" === n[0].dataSeries.type)
              for (var s = Math.abs(a - this.parent.convertValueToPixel(n[u].dataPoint.y[0])), v = 0, r = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (var y = 0; y < n[r].dataPoint.y.length; y++) v = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else v =
                  Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y)), v < s && (s = v, u = r);
            else if ("stackedBar" === n[0].dataSeries.type)
              for (var s = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), A = v = 0, r = u = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y = 0; y < n[r].dataPoint.y.length; y++) v = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else A += n[r].dataPoint.y, v = Math.abs(a - this.parent.convertValueToPixel(A)), v < s && (s = v, u = r);
            else if ("stackedBar100" === n[0].dataSeries.type)
              for (var s =
                  Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), E = A = v = 0, r = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y = 0; y < n[r].dataPoint.y.length; y++) v = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else A += n[r].dataPoint.y, E = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, E = 100 * (A / n[r].dataSeries.plotUnit.dataPointYSums[E]), v = Math.abs(a - this.parent.convertValueToPixel(E)), v < s && (s = v, u = r);
            else
              for (s = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                r = u = v = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y = 0; y < n[r].dataPoint.y.length; y++) v = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else v = Math.abs(a - this.parent.convertValueToPixel(n[r].dataPoint.y)), v < s && (s = v, u = r);
            y = n[u];
            if ("bottom" === this.parent._position || "top" === this.parent._position) {
              b = 0;
              if ("rangeBar" === this.parent.dataSeries[u].type || "error" === this.parent.dataSeries[u].type) {
                s = Math.abs(a - this.parent.convertValueToPixel(y.dataPoint.y[0]));
                for (r = v = 0; r < y.dataPoint.y.length; r++) v = Math.abs(a - this.parent.convertValueToPixel(y.dataPoint.y[r])), v < s && (s = v, b = r);
                t = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(y.dataPoint.y[b]) << 0;
                this.value = y.dataPoint.y[b];
                m.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: y.dataPoint.y[b]
                  }) : e(this.options.label) ? ba(e(c) ? y.dataPoint.y[b] : c, this.valueFormatString, this.chart._cultureInfo) :
                  this.label
              } else if ("stackedBar" === this.parent.dataSeries[u].type) {
                s = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                A = v = 0;
                for (r = u; 0 <= r; r--) A += n[r].dataPoint.y, v = Math.abs(a - this.parent.convertValueToPixel(A)), v < s && (s = v, b = r);
                t = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(A) << 0) + 0.5 : this.parent.convertValueToPixel(A) << 0;
                this.value = A;
                m.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: y.dataPoint.y
                  }) : e(this.options.label) ?
                  ba(e(c) ? y.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label
              } else if ("stackedBar100" === this.parent.dataSeries[u].type) {
                s = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                E = A = v = 0;
                for (r = u; 0 <= r; r--) A += n[r].dataPoint.y, E = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, E = 100 * (A / n[r].dataSeries.plotUnit.dataPointYSums[E]), v = Math.abs(a - this.parent.convertValueToPixel(E)), v < s && (s = v, b = r);
                t = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(E) << 0) + 0.5 :
                  this.parent.convertValueToPixel(E) << 0;
                this.value = E;
                m.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: E
                }) : e(this.options.label) ? ba(e(c) ? E : c, this.valueFormatString, this.chart._cultureInfo) : this.label
              } else t = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(y.dataPoint.y) << 0, this.value = y.dataPoint.y, m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.y
              }) : e(this.options.label) ? ba(e(c) ? y.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              b = g = t;
              h = this.chart.plotArea.y1;
              k = this.chart.plotArea.y2;
              this.bounds = {
                x1: b - p / 2,
                y1: h,
                x2: g + p / 2,
                y2: k
              };
              m.x = b - m.measureText().width / 2;
              m.x + m.width > this.chart.bounds.x2 ? m.x = this.chart.bounds.x2 - m.width : m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
              m.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -m.height + this.parent.tickLength : m.fontSize /
                2) + 2;
              m.y + m.height > this.chart.bounds.y2 ? m.y = this.chart.bounds.y2 - m.height : m.y < this.chart.bounds.y1 && (m.y = this.chart.bounds.y1)
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              h = k = w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(y.dataPoint.x) << 0;
              b = this.chart.plotArea.x1;
              g = this.chart.plotArea.x2;
              this.bounds = {
                x1: b,
                y1: h - p / 2,
                x2: g,
                y2: k + p / 2
              };
              E = !1;
              if (this.parent.labels)
                for (n = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r +=
                  n)
                  if (this.parent.labels[r]) E = !0;
                  else {
                    E = !1;
                    break
                  } if (E) {
                if ("axisX" === this.parent.type)
                  for (r = this.parent.convertPixelToValue({
                      y: d
                    }), s = null, u = 0; u < this.parent.dataSeries.length; u++)(s = this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (m.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: y.dataPoint.x
                  }) : e(this.options.label) ? s.dataPoint.label : this.label)
              } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.x
              }) : e(this.options.label) ? fa(y.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.x
              }) : e(this.options.label) ? ba(y.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
              this.value = y.dataPoint.x;
              m.y = k + m.fontSize / 2 - m.measureText().height /
                2 + 2;
              m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
              "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
            }
          } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
            r = this.parent.convertPixelToValue({
              x: a
            });
            for (u = 0; u < this.parent.dataSeries.length; u++)(s =
              this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (s.dataSeries = this.parent.dataSeries[u], null !== s.dataPoint.y && s.dataSeries.visible && n.push(s));
            if (0 === n.length) return;
            n.sort(function(a, b) {
              return a.distance - b.distance
            });
            y = n[0];
            b = g = t = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(y.dataPoint.x) << 0;
            h = this.chart.plotArea.y1;
            k = this.chart.plotArea.y2;
            this.bounds = {
              x1: b - p / 2,
              y1: h,
              x2: g + p / 2,
              y2: k
            };
            E = !1;
            if (this.parent.labels)
              for (n = Math.ceil(this.parent.interval),
                r = 0; r < this.parent.viewportMaximum; r += n)
                if (this.parent.labels[r]) E = !0;
                else {
                  E = !1;
                  break
                } if (E) {
              if ("axisX" === this.parent.type)
                for (r = this.parent.convertPixelToValue({
                    x: a
                  }), s = null, u = 0; u < this.parent.dataSeries.length; u++)(s = this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (m.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: y.dataPoint.x
                }) : e(this.options.label) ? s.dataPoint.label : this.label)
            } else "dateTime" === this.parent.valueType ?
              m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.x
              }) : e(this.options.label) ? fa(y.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.x
              }) : e(this.options.label) ? ba(y.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
            this.value = y.dataPoint.x;
            m.x = b - m.measureText().width / 2;
            m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width);
            m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
            "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
          } else if ("left" === this.parent._position || "right" === this.parent._position) {
            !e(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (r = this.parent.dataSeries[0].axisX.convertPixelToValue({
              x: a
            }));
            for (u = 0; u < this.parent.dataSeries.length; u++)(s = this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (s.dataSeries = this.parent.dataSeries[u], null !== s.dataPoint.y && s.dataSeries.visible && n.push(s));
            if (0 === n.length) return;
            n.sort(function(a, b) {
              return a.distance - b.distance
            });
            u = 0;
            if ("rangeColumn" === n[0].dataSeries.type || "rangeArea" === n[0].dataSeries.type || "error" === n[0].dataSeries.type || "rangeSplineArea" === n[0].dataSeries.type || "candlestick" === n[0].dataSeries.type || "ohlc" === n[0].dataSeries.type ||
              "boxAndWhisker" === n[0].dataSeries.type)
              for (s = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y[0])), r = v = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y = 0; y < n[r].dataPoint.y.length; y++) v = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else v = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y)), v < s && (s = v, u = r);
            else if ("stackedColumn" === n[0].dataSeries.type || "stackedArea" === n[0].dataSeries.type)
              for (s = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                r = A = v = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y = 0; y < n[r].dataPoint.y.length; y++) v = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else A += n[r].dataPoint.y, v = Math.abs(d - this.parent.convertValueToPixel(A)), v < s && (s = v, u = r);
            else if ("stackedColumn100" === n[0].dataSeries.type || "stackedArea100" === n[0].dataSeries.type)
              for (s = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), r = E = A = v = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y =
                    0; y < n[r].dataPoint.y.length; y++) v = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else A += n[r].dataPoint.y, E = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, E = 100 * (A / n[r].dataSeries.plotUnit.dataPointYSums[E]), v = Math.abs(d - this.parent.convertValueToPixel(E)), v < s && (s = v, u = r);
            else
              for (s = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), r = v = 0; r < n.length; r++)
                if (n[r].dataPoint.y && n[r].dataPoint.y.length)
                  for (y = 0; y < n[r].dataPoint.y.length; y++) v =
                    Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y[y])), v < s && (s = v, u = r);
                else v = Math.abs(d - this.parent.convertValueToPixel(n[r].dataPoint.y)), v < s && (s = v, u = r);
            y = n[u];
            b = 0;
            if ("rangeColumn" === this.parent.dataSeries[u].type || "rangeArea" === this.parent.dataSeries[u].type || "error" === this.parent.dataSeries[u].type || "rangeSplineArea" === this.parent.dataSeries[u].type || "candlestick" === this.parent.dataSeries[u].type || "ohlc" === this.parent.dataSeries[u].type || "boxAndWhisker" === this.parent.dataSeries[u].type) {
              s =
                Math.abs(d - this.parent.convertValueToPixel(y.dataPoint.y[0]));
              for (r = v = 0; r < y.dataPoint.y.length; r++) v = Math.abs(d - this.parent.convertValueToPixel(y.dataPoint.y[r])), v < s && (s = v, b = r);
              w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(y.dataPoint.y[b]) << 0;
              m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.y[b]
              }) : e(this.options.label) ? ba(e(c) ? y.dataPoint.y[b] : c, this.valueFormatString,
                this.chart._cultureInfo) : this.label;
              this.value = y.dataPoint.y[b]
            } else if ("stackedColumn" === this.parent.dataSeries[u].type || "stackedArea" === this.parent.dataSeries[u].type) {
              s = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
              A = v = 0;
              for (r = u; 0 <= r; r--) A += n[r].dataPoint.y, v = Math.abs(d - this.parent.convertValueToPixel(A)), v < s && (s = v, b = r);
              w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(A) << 0) + 0.5 : this.parent.convertValueToPixel(A) << 0;
              m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: y.dataPoint.y
              }) : e(this.options.label) ? ba(e(c) ? y.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = A
            } else if ("stackedColumn100" === this.parent.dataSeries[u].type || "stackedArea100" === this.parent.dataSeries[u].type) {
              s = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
              A = v = 0;
              for (r = u; 0 <= r; r--) A += n[r].dataPoint.y, E = n[r].dataPoint.x.getTime ? n[r].dataPoint.x.getTime() : n[r].dataPoint.x, E = 100 * (A / n[r].dataSeries.plotUnit.dataPointYSums[E]),
                v = Math.abs(d - this.parent.convertValueToPixel(E)), v < s && (s = v, b = r);
              w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(E) << 0) + 0.5 : this.parent.convertValueToPixel(E) << 0;
              m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: E
              }) : e(this.options.label) ? ba(e(c) ? E : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = E
            } else "waterfall" === this.parent.dataSeries[u].type ? (w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y.dataSeries.dataPointEOs[y.index].cumulativeSum) <<
              0) + 0.5 : this.parent.convertValueToPixel(y.dataSeries.dataPointEOs[y.index].cumulativeSum) << 0, m.text = this.labelFormatter ? this.labelFormatter({
              chart: this.chart,
              axis: this.parent.options,
              crosshair: this.options,
              value: y.dataSeries.dataPointEOs[y.index].cumulativeSum
            }) : e(this.options.label) ? ba(e(c) ? y.dataSeries.dataPointEOs[y.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = y.dataSeries.dataPointEOs[y.index].cumulativeSum) : (w = 1 === q.lineWidth % 2 ? (e(a) ? d : this.parent.convertValueToPixel(y.dataPoint.y) <<
              0) + 0.5 : e(a) ? d : this.parent.convertValueToPixel(y.dataPoint.y) << 0, m.text = this.labelFormatter ? this.labelFormatter({
              chart: this.chart,
              axis: this.parent.options,
              crosshair: this.options,
              value: e(c) ? y.dataPoint.y : c
            }) : e(this.options.label) ? ba(e(c) ? y.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = y.dataPoint.y);
            h = k = w;
            b = this.chart.plotArea.x1;
            g = this.chart.plotArea.x2;
            this.bounds = {
              x1: b,
              y1: h - p / 2,
              x2: g,
              y2: k + p / 2
            };
            m.y = k + m.fontSize / 2 - m.measureText().height / 2 + 2;
            m.y - m.fontSize / 2 < this.chart.bounds.y1 ?
              m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
            "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
          }
          n = null;
          if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && m.y - m.fontSize / 2 < this.chart.bounds.y1 && (m.y = this.chart.bounds.y1 + m.fontSize /
            2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - m.fontSize / 2 + m.measureText().height > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.height + m.fontSize / 2 + 2), b >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && g <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < p && (q.moveTo(b, h), q.lineTo(g, k), q.stroke(), this._hidden = !1), q.restore());
          if ("left" === this.parent._position ||
            "right" === this.parent._position) "left" === this.parent._position && m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1), "right" === this.parent._position && m.x + m.measureText().width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.measureText().width), k >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && h <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < p && (q.moveTo(b, h), q.lineTo(g,
            k), q.stroke(), this._hidden = !1), q.restore())
        } else {
          if ("bottom" === this.parent._position || "top" === this.parent._position) b = g = t = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h = this.chart.plotArea.y1, k = this.chart.plotArea.y2, this.bounds = {
            x1: b - p / 2,
            y1: h,
            x2: g + p / 2,
            y2: k
          };
          else if ("left" === this.parent._position || "right" === this.parent._position) h = k = w = 1 === q.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
            x1: b,
            y1: h - p / 2,
            x2: g,
            y2: k + p / 2
          };
          if ("xySwapped" === this.chart.plotInfo.axisPlacement)
            if ("left" ===
              this.parent._position || "right" === this.parent._position) {
              E = !1;
              if (this.parent.labels)
                for (n = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += n)
                  if (this.parent.labels[r]) E = !0;
                  else {
                    E = !1;
                    break
                  } if (E) {
                if ("axisX" === this.parent.type)
                  for (r = this.parent.convertPixelToValue({
                      y: d
                    }), s = null, u = 0; u < this.parent.dataSeries.length; u++)(s = this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (m.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: e(c) ? this.parent.convertPixelToValue(a) : c
                  }) : e(this.options.label) ? s.dataPoint.label : this.label)
              } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: e(c) ? this.parent.convertPixelToValue(d) : c
              }) : e(this.options.label) ? fa(e(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: e(c) ? this.parent.convertPixelToValue(d) : c
              }) : e(this.options.label) ? ba(e(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
              m.y = d + m.fontSize / 2 - m.measureText().height / 2 + 2;
              m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height + m.fontSize / 2);
              "left" === this.parent._position ?
                m.x = this.parent.lineCoordinates.x1 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
            } else {
              if ("bottom" === this.parent._position || "top" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: e(c) ? this.parent.convertPixelToValue(a) : c
                }) : e(this.options.label) ? ba(e(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, m.x = b - m.measureText().width /
                2, m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width), m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1), "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
            }
          else if ("bottom" === this.parent._position || "top" === this.parent._position) {
            E = !1;
            n = "";
            if (this.parent.labels)
              for (n = Math.ceil(this.parent.interval), r = 0; r < this.parent.viewportMaximum; r += n)
                if (this.parent.labels[r]) E = !0;
                else {
                  E = !1;
                  break
                } if (E) {
              if ("axisX" === this.parent.type)
                for (r = this.parent.convertPixelToValue({
                    x: a
                  }), s = null, u = 0; u < this.parent.dataSeries.length; u++)(s = this.parent.dataSeries[u].getDataPointAtX(r, !0)) && 0 <= s.index && (m.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: e(c) ? this.parent.convertPixelToValue(a) : c
                }) : e(this.options.label) ? e(c) ? s.dataPoint.label : c : this.label)
            } else "dateTime" === this.parent.valueType ? m.text = this.labelFormatter ?
              this.labelFormatter({
                chart: this.chart,
                axis: this.parent.options,
                crosshair: this.options,
                value: e(c) ? this.parent.convertPixelToValue(a) : c
              }) : e(this.options.label) ? fa(e(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (m.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: e(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c
                }) : e(this.options.label) ?
                ba(e(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
            m.x = b - m.measureText().width / 2;
            m.x + m.width > this.chart.bounds.x2 && (m.x = this.chart.bounds.x2 - m.width);
            m.x < this.chart.bounds.x1 && (m.x = this.chart.bounds.x1);
            "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
          } else if ("left" === this.parent._position || "right" === this.parent._position) m.text =
            this.labelFormatter ? this.labelFormatter({
              chart: this.chart,
              axis: this.parent.options,
              crosshair: this.options,
              value: e(c) ? this.parent.convertPixelToValue(d) : c
            }) : e(this.options.label) ? ba(e(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, m.y = d + m.fontSize / 2 - m.measureText().height / 2 + 2, m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 + 2 : m.y + m.measureText().height - m.fontSize / 2 > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.measureText().height +
              m.fontSize / 2), "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
          "left" === this.parent._position && m.x < this.chart.bounds.x1 ? m.x = this.chart.bounds.x1 : "right" === this.parent._position && m.x + m.measureText().width > this.chart.bounds.x2 ? m.x = this.chart.bounds.x2 - m.measureText().width : "top" === this.parent._position && m.y - m.fontSize / 2 < this.chart.bounds.y1 ? m.y = this.chart.bounds.y1 + m.fontSize / 2 : "bottom" === this.parent._position &&
            this.parent.lineCoordinates.y2 - m.fontSize / 2 + m.measureText().height > this.chart.bounds.y2 && (m.y = this.chart.bounds.y2 - m.height + m.fontSize / 2 + 2);
          0 < p && (q.moveTo(b, h), q.lineTo(g, k), q.stroke(), this._hidden = !1);
          q.restore();
          this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d)
        }
        if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(t);
        if ("left" === this.parent._position ||
          "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(w);
        this._textBlock = m;
        e(c) || this.renderLabel();
        q.globalAlpha = l
      };
      X.prototype.renderLabel = function() {
        e(this._textBlock) || (e(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(!0)
      };
      ia(ra, Z);
      ra.prototype._initialize = function() {
        this.updateOption("updated");
        this.updateOption("hidden");
        if (this.enabled) {
          this.container = document.createElement("div");
          this.container.setAttribute("class", "canvasjs-chart-tooltip");
          this.container.style.position = "absolute";
          this.container.style.height = "auto";
          this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
          this.container.style.zIndex = "1000";
          this.container.style.pointerEvents = "none";
          this.container.style.display = "none";
          var a = document.createElement("div");
          a.style.width = "auto";
          a.style.height = "auto";
          a.style.minWidth = "50px";
          a.style.lineHeight = "normal";
          a.style.margin = "0px 0px 0px 0px";
          a.style.padding = "5px";
          a.style.fontFamily = "Calibri, Arial, Georgia, serif";
          a.style.fontWeight = "normal";
          a.style.fontStyle = u ? "italic" : "normal";
          a.style.fontSize = "14px";
          a.style.color = "#000000";
          a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
          a.style.textAlign = "left";
          a.style.border = "2px solid gray";
          a.style.background = u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
          a.style.textIndent = "0px";
          a.style.whiteSpace = "nowrap";
          a.style.borderRadius = "5px";
          a.style.MozUserSelect = "none";
          a.style.WebkitUserSelect = "none";
          a.style.msUserSelect = "none";
          a.style.userSelect = "none";
          u || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
          a.innerText = "Sample Tooltip";
          this.container.appendChild(a);
          this.contentDiv = this.container.firstChild;
          this.container.style.borderRadius = this.contentDiv.style.borderRadius;
          this.chart._canvasJSContainer.appendChild(this.container)
        }
      };
      ra.prototype.mouseMoveHandler = function(a, d) {
        this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated ||
          (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d))
      };
      ra.prototype._updateToolTip = function(a, d, c) {
        c = "undefined" === typeof c ? !0 : c;
        this.container || this._initialize();
        this.enabled || this.hide();
        if (!this.chart.disableToolTip) {
          if ("undefined" === typeof a || "undefined" === typeof d) {
            if (isNaN(this._prevX) || isNaN(this._prevY)) return;
            a = this._prevX;
            d = this._prevY
          } else this._prevX = a, this._prevY = d;
          var b = null,
            g = null,
            h = [],
            k = 0;
          if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
            var t = [];
            if (this.chart.axisX)
              for (var r = 0; r < this.chart.axisX.length; r++) {
                for (var k = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[r].convertPixelToValue({
                    y: d
                  }) : this.chart.axisX[r].convertPixelToValue({
                    x: a
                  }), m = null, b = 0; b < this.chart.axisX[r].dataSeries.length; b++)(m = this.chart.axisX[r].dataSeries[b].getDataPointAtX(k, c)) && 0 <= m.index && (m.dataSeries = this.chart.axisX[r].dataSeries[b], null !== m.dataPoint.y && m.dataSeries.visible && t.push(m));
                m = null
              }
            if (this.chart.axisX2)
              for (r = 0; r < this.chart.axisX2.length; r++) {
                k =
                  "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[r].convertPixelToValue({
                    y: d
                  }) : this.chart.axisX2[r].convertPixelToValue({
                    x: a
                  });
                m = null;
                for (b = 0; b < this.chart.axisX2[r].dataSeries.length; b++)(m = this.chart.axisX2[r].dataSeries[b].getDataPointAtX(k, c)) && 0 <= m.index && (m.dataSeries = this.chart.axisX2[r].dataSeries[b], null !== m.dataPoint.y && m.dataSeries.visible && t.push(m));
                m = null
              }
            if (0 === t.length) return;
            t.sort(function(a, b) {
              return a.distance - b.distance
            });
            c = t[0];
            for (b = 0; b < t.length; b++) t[b].dataPoint.x.valueOf() ===
              c.dataPoint.x.valueOf() && h.push(t[b]);
            t = null
          } else {
            if (b = this.chart.getDataPointAtXY(a, d, c)) this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
            else if (u)
              if (b = jb(a, d, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                b = this.chart._eventManager.objectMap[b];
                if ("legendItem" === b.objectType) return;
                this.currentSeriesIndex = b.dataSeriesIndex;
                this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1
              } else this.currentDataPointIndex = -1;
            else this.currentDataPointIndex = -1;
            if (0 <= this.currentSeriesIndex) {
              g = this.chart.data[this.currentSeriesIndex];
              m = {};
              if (0 <= this.currentDataPointIndex) b = g.dataPoints[this.currentDataPointIndex], m.dataSeries = g, m.dataPoint = b, m.index = this.currentDataPointIndex, m.distance = Math.abs(b.x - k), "waterfall" === g.type && (m.cumulativeSumYStartValue = g.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, m.cumulativeSum = g.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
              else {
                if (!this.enabled || "line" !==
                  g.type && "stepLine" !== g.type && "spline" !== g.type && "area" !== g.type && "stepArea" !== g.type && "splineArea" !== g.type && "stackedArea" !== g.type && "stackedArea100" !== g.type && "rangeArea" !== g.type && "rangeSplineArea" !== g.type && "candlestick" !== g.type && "ohlc" !== g.type && "boxAndWhisker" !== g.type) return;
                k = g.axisX.convertPixelToValue({
                  x: a
                });
                m = g.getDataPointAtX(k, c);
                e(m) || (m.dataSeries = g, this.currentDataPointIndex = m.index, b = m.dataPoint)
              }
              if (!e(m) && !e(m.dataPoint) && !e(m.dataPoint.y))
                if (m.dataSeries.axisY)
                  if (0 < m.dataPoint.y.length) {
                    for (b =
                      c = 0; b < m.dataPoint.y.length; b++) m.dataPoint.y[b] < m.dataSeries.axisY.viewportMinimum ? c-- : m.dataPoint.y[b] > m.dataSeries.axisY.viewportMaximum && c++;
                    c < m.dataPoint.y.length && c > -m.dataPoint.y.length && h.push(m)
                  } else "column" === g.type || "bar" === g.type ? 0 > m.dataPoint.y ? 0 > m.dataSeries.axisY.viewportMinimum && m.dataSeries.axisY.viewportMaximum >= m.dataPoint.y && h.push(m) : m.dataSeries.axisY.viewportMinimum <= m.dataPoint.y && 0 <= m.dataSeries.axisY.viewportMaximum && h.push(m) : "bubble" === g.type ? (c = this.chart._eventManager.objectMap[g.dataPointIds[m.index]].size /
                    2, m.dataPoint.y >= m.dataSeries.axisY.viewportMinimum - c && m.dataPoint.y <= m.dataSeries.axisY.viewportMaximum + c && h.push(m)) : "waterfall" === g.type ? (c = 0, m.cumulativeSumYStartValue < m.dataSeries.axisY.viewportMinimum ? c-- : m.cumulativeSumYStartValue > m.dataSeries.axisY.viewportMaximum && c++, m.cumulativeSum < m.dataSeries.axisY.viewportMinimum ? c-- : m.cumulativeSum > m.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && h.push(m)) : (0 <= m.dataSeries.type.indexOf("100") || "stackedColumn" === g.type || "stackedBar" === g.type || m.dataPoint.y >=
                    m.dataSeries.axisY.viewportMinimum && m.dataPoint.y <= m.dataSeries.axisY.viewportMaximum) && h.push(m);
              else h.push(m)
            }
          }
          if (0 < h.length) {
            if (this.highlightObjects(h), this.enabled) {
              c = "";
              c = this.getToolTipInnerHTML({
                entries: h
              });
              if (null !== c) {
                this.contentDiv.innerHTML = c;
                if (this.isToolTipDefinedInData && e(this.options.content) && e(this.options.contentFormatter))
                  for (k = this.contentDiv.getElementsByTagName("span"), b = 0; b < k.length; b++) k[b] && (k[b].style.color = k[b].getAttribute("data-color"));
                k = !1;
                "none" === this.container.style.display &&
                  (k = !0, this.container.style.display = "block");
                try {
                  this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" ===
                    h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[g.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ?
                    h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ?
                    this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal"
                } catch (n) {}
                "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type || "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" ===
                  h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                0 > a && (a += this.container.clientWidth + 20);
                a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                d = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !==
                  h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : d : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
                d = -d + 10;
                0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                this.fixMozTransitionDelay(a, d);
                !this.animationEnabled || k ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                this.positionLeft = a;
                this.positionBottom = d;
                this.container.style.left = a + "px";
                this.container.style.bottom = d + "px"
              } else this.hide(!1), this.enabled && this.dispatchEvent("hidden", {
                chart: this.chart,
                toolTip: this
              }, this);
              d = [];
              for (b = 0; b < h.length; b++) d.push({
                xValue: h[b].dataPoint.x,
                dataPoint: h[b].dataPoint,
                dataSeries: h[b].dataSeries,
                dataPointIndex: h[b].index,
                dataSeriesIndex: h[b].dataSeries._index
              });
              d = {
                chart: this.chart,
                toolTip: this.options,
                content: c,
                entries: d
              };
              this._entries = h;
              this.dispatchEvent("updated", d, this)
            }
          } else this.hide(), this.enabled && this.dispatchEvent("hidden", {
            chart: this.chart,
            toolTip: this
          }, this)
        }
      };
      ra.prototype.highlightObjects = function(a) {
        var f = this.chart.overlaidCanvasCtx;
        if (e(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), f.clearRect(0, 0, this.chart.width, this.chart.height),
          this.chart.clearedOverlayedCanvas = "toolTip";
        f.save();
        var c = this.chart.plotArea,
          b = 0;
        f.beginPath();
        f.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
        f.clip();
        for (c = 0; c < a.length; c++) {
          var g = a[c];
          if ((g = this.chart._eventManager.objectMap[g.dataSeries.dataPointIds[g.index]]) && g.objectType && "dataPoint" === g.objectType) {
            var b = this.chart.data[g.dataSeriesIndex],
              h = b.dataPoints[g.dataPointIndex],
              k = g.dataPointIndex;
            !1 === h.highlightEnabled || !0 !== b.highlightEnabled && !0 !== h.highlightEnabled || ("line" === b.type || "stepLine" === b.type ||
              "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (h = b.getMarkerProperties(k, g.x1, g.y1, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), r.drawMarkers([h]), "undefined" !== typeof g.y2 && (h = b.getMarkerProperties(k, g.x1, g.y2, this.chart.overlaidCanvasCtx),
                h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), r.drawMarkers([h]))) : "bubble" === b.type ? (h = b.getMarkerProperties(k, g.x1, g.y1, this.chart.overlaidCanvasCtx), h.size = g.size, h.color = "white", h.borderColor = "white", f.globalAlpha = 0.3, r.drawMarkers([h]), f.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type ||
              "rangeColumn" === b.type || "waterfall" === b.type ? ea(f, g.x1, g.y1, g.x2, g.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === b.type || "doughnut" === b.type ? d(f, g.center, g.radius, "white", b.type, g.startAngle, g.endAngle, 0.3, g.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? t(f, g.funnelSection, 0.3, "white") : "candlestick" === b.type ? (f.globalAlpha = 1, f.strokeStyle = g.color, f.lineWidth = 2 * g.borderThickness, b = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(g.x3 - b, Math.min(g.y2, g.y3)), f.lineTo(g.x3 - b, Math.min(g.y1, g.y4)),
                f.stroke(), f.beginPath(), f.moveTo(g.x3 - b, Math.max(g.y1, g.y4)), f.lineTo(g.x3 - b, Math.max(g.y2, g.y3)), f.stroke(), ea(f, g.x1, Math.min(g.y1, g.y4), g.x2, Math.max(g.y1, g.y4), "transparent", 2 * g.borderThickness, g.color, !1, !1, !1, !1), f.globalAlpha = 1) : "ohlc" === b.type ? (f.globalAlpha = 1, f.strokeStyle = g.color, f.lineWidth = 2 * g.borderThickness, b = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(g.x3 - b, g.y2), f.lineTo(g.x3 - b, g.y3), f.stroke(), f.beginPath(), f.moveTo(g.x3, g.y1), f.lineTo(g.x1, g.y1), f.stroke(), f.beginPath(), f.moveTo(g.x3,
                g.y4), f.lineTo(g.x2, g.y4), f.stroke(), f.globalAlpha = 1) : "boxAndWhisker" === b.type ? (f.save(), f.globalAlpha = 1, f.strokeStyle = g.stemColor, f.lineWidth = 2 * g.stemThickness, 0 < g.stemThickness && (f.beginPath(), f.moveTo(g.x3, g.y2 + g.borderThickness / 2), f.lineTo(g.x3, g.y1 + g.whiskerThickness / 2), f.stroke(), f.beginPath(), f.moveTo(g.x3, g.y4 - g.whiskerThickness / 2), f.lineTo(g.x3, g.y3 - g.borderThickness / 2), f.stroke()), f.beginPath(), ea(f, g.x1 - g.borderThickness / 2, Math.max(g.y2 + g.borderThickness / 2, g.y3 + g.borderThickness / 2), g.x2 +
                  g.borderThickness / 2, Math.min(g.y2 - g.borderThickness / 2, g.y3 - g.borderThickness / 2), "transparent", g.borderThickness, g.color, !1, !1, !1, !1), f.globalAlpha = 1, f.strokeStyle = g.whiskerColor, f.lineWidth = 2 * g.whiskerThickness, 0 < g.whiskerThickness && (f.beginPath(), f.moveTo(Math.floor(g.x3 - g.whiskerLength / 2), g.y4), f.lineTo(Math.ceil(g.x3 + g.whiskerLength / 2), g.y4), f.stroke(), f.beginPath(), f.moveTo(Math.floor(g.x3 - g.whiskerLength / 2), g.y1), f.lineTo(Math.ceil(g.x3 + g.whiskerLength / 2), g.y1), f.stroke()), f.globalAlpha = 1, f.strokeStyle =
                g.lineColor, f.lineWidth = 2 * g.lineThickness, 0 < g.lineThickness && (f.beginPath(), f.moveTo(g.x1, g.y5), f.lineTo(g.x2, g.y5), f.stroke()), f.restore(), f.globalAlpha = 1) : "error" === b.type && N(f, g.x1, g.y1, g.x2, g.y2, "white", g.whiskerProperties, g.stemProperties, g.isXYSwapped, 0.3))
          }
        }
        f.restore();
        f.globalAlpha = 1;
        f.beginPath()
      };
      ra.prototype.getToolTipInnerHTML = function(a) {
        a = a.entries;
        var d = null,
          c = null,
          b = null,
          g = 0,
          h = "";
        this.isToolTipDefinedInData = !0;
        for (var e = 0; e < a.length; e++)
          if (a[e].dataSeries.toolTipContent || a[e].dataPoint.toolTipContent) {
            this.isToolTipDefinedInData = !1;
            break
          } if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
          chart: this.chart,
          toolTip: this.options,
          entries: a
        }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
        else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
          for (var k = null, t = "", e = 0; e < a.length; e++) {
            c = a[e].dataSeries;
            b = a[e].dataPoint;
            g = a[e].index;
            h = "";
            if (0 === e && this.isToolTipDefinedInData && !this.content) {
              this.chart.axisX && 0 < this.chart.axisX.length ? t += "undefined" !==
                typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (t += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
              t += "</br>";
              if (!c.visible) continue;
              t = this.chart.replaceKeywordsWithValue(t, b, c, g)
            }
            null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" ===
              c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" +
                (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", k = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" ===
              c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === c.type || "ohlc" ===
              c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === c.type &&
              (this.chart.axisX && 1 < this.chart.axisX.length && (h += k != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
              null === d && (d = ""), c.visible && (!0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(h, b, c, g) + d, e < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(h, b, c, g), e < a.length - 1 && (d += "</br>"))))
          }
          null !== d && (d = t + d)
        } else {
          c = a[0].dataSeries;
          b = a[0].dataPoint;
          g = a[0].index;
          if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) return null;
          "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type ||
            "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ?
            h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ?
              "" : "'{color}'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" ===
            c.type || "ohlc" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content &&
              "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
          null === d && (d = "");
          d += this.chart.replaceKeywordsWithValue(h, b, c, g)
        }
        return d
      };
      ra.prototype.enableAnimation = function() {
        if (!this.container.style.WebkitTransition) {
          var a = this.getContainerTransition(this.containerTransitionDuration);
          this.container.style.WebkitTransition = a;
          this.container.style.MsTransition = a;
          this.container.style.transition = a;
          this.container.style.MozTransition = this.mozContainerTransition
        }
      };
      ra.prototype.disableAnimation = function() {
        this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
          "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
      };
      ra.prototype.hide = function(a) {
        this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
      };
      ra.prototype.show = function(a, d, c) {
        this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c)
      };
      ra.prototype.showAtIndex = function(a, d) {};
      ra.prototype.showAtX = function(a, d) {
        if (!this.enabled) return !1;
        this.chart.clearedOverlayedCanvas = null;
        var c, b, g, h = [];
        g = !1;
        d = !e(d) && 0 <= d && d < this.chart.data.length ? d : 0;
        if (this.shared)
          for (var k = 0; k < this.chart.data.length; k++) c = this.chart.data[k], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !e(b.dataPoint.y) && c.visible) && (b.dataSeries = c, h.push(b));
        else c = this.chart.data[d], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !e(b.dataPoint.y) && c.visible) && (b.dataSeries = c, h.push(b));
        if (0 < h.length) {
          for (k = 0; k < h.length; k++)
            if (b = h[k], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) &&
              b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
              g = !1;
              break
            } else if (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum) g = !0;
          else {
            g = !1;
            break
          }
          if (g) return this.hide(), !1;
          this.highlightObjects(h);
          this._entries = h;
          k = "";
          k = this.getToolTipInnerHTML({
            entries: h
          });
          if (null !== k) {
            this.contentDiv.innerHTML = k;
            if (this.isToolTipDefinedInData &&
              e(this.options.content) && e(this.options.contentFormatter))
              for (b = this.contentDiv.getElementsByTagName("span"), k = 0; k < b.length; k++) b[k] && (b[k].style.color = b[k].getAttribute("data-color"));
            k = !1;
            "none" === this.container.style.display && (k = !0, this.container.style.display = "block");
            try {
              this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor =
                this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[c.index % h[0].dataSeries._colorSet.length] :
                this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ?
                this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" :
                "normal"
            } catch (t) {}
            "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) - this.container.clientWidth << 0 : h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth <<
              0, c -= 10);
            0 > c && (c += this.container.clientWidth + 20);
            c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
            h = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type ||
              "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
            h = -h + 10;
            0 < h + this.container.clientHeight + 5 && (h -= h + this.container.clientHeight + 5 - 0);
            this.fixMozTransitionDelay(c, h);
            !this.animationEnabled || k ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition =
              this.mozContainerTransition);
            this.container.style.left = c + "px";
            this.container.style.bottom = h + "px"
          } else return this.hide(!1), !1
        } else return this.hide(), !1;
        return !0
      };
      ra.prototype.fixMozTransitionDelay = function(a, d) {
        if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
        else {
          var c = parseFloat(this.container.style.left),
            c = isNaN(c) ? 0 : c,
            b = parseFloat(this.container.style.bottom),
            b = isNaN(b) ? 0 : b;
          10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition =
            this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
        }
      };
      ra.prototype.getContainerTransition = function(a) {
        return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
      };
      ja.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.previousDataPointEventObject = null;
        this.eventObjects = [];
        u && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
      };
      ja.prototype.getNewObjectTrackingId =
        function() {
          return ++this.lastObjectId
        };
      ja.prototype.mouseEventHandler = function(a) {
        if ("mousemove" === a.type || "click" === a.type) {
          var d = [],
            c = Ba(a),
            b = null;
          if ((b = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[b])
            if (b = this.objectMap[b], "dataPoint" === b.objectType) {
              var g = this.chart.data[b.dataSeriesIndex],
                h = g.dataPoints[b.dataPointIndex],
                e = b.dataPointIndex;
              b.eventParameter = {
                x: c.x,
                y: c.y,
                dataPoint: h,
                dataSeries: g.options,
                dataPointIndex: e,
                dataSeriesIndex: g.index,
                chart: this.chart
              };
              b.eventContext = {
                context: h,
                userContext: h,
                mouseover: "mouseover",
                mousemove: "mousemove",
                mouseout: "mouseout",
                click: "click"
              };
              d.push(b);
              b = this.objectMap[g.id];
              b.eventParameter = {
                x: c.x,
                y: c.y,
                dataPoint: h,
                dataSeries: g.options,
                dataPointIndex: e,
                dataSeriesIndex: g.index,
                chart: this.chart
              };
              b.eventContext = {
                context: g,
                userContext: g.options,
                mouseover: "mouseover",
                mousemove: "mousemove",
                mouseout: "mouseout",
                click: "click"
              };
              d.push(this.objectMap[g.id])
            } else "legendItem" === b.objectType && (g = this.chart.data[b.dataSeriesIndex], h = null !== b.dataPointIndex ?
              g.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                x: c.x,
                y: c.y,
                dataSeries: g.options,
                dataPoint: h,
                dataPointIndex: b.dataPointIndex,
                dataSeriesIndex: b.dataSeriesIndex,
                chart: this.chart
              }, b.eventContext = {
                context: this.chart.legend,
                userContext: this.chart.legend.options,
                mouseover: "itemmouseover",
                mousemove: "itemmousemove",
                mouseout: "itemmouseout",
                click: "itemclick"
              }, d.push(b));
          g = [];
          for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
            h = !0;
            for (b = 0; b < d.length; b++)
              if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                h = !1;
                break
              } h ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : g.push(this.mouseoveredObjectMaps[c])
          }
          this.mouseoveredObjectMaps = g;
          for (c = 0; c < d.length; c++) {
            g = !1;
            for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
              if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                g = !0;
                break
              } g || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
            "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a)
          }
        }
      };
      ja.prototype.fireEvent = function(a, d, c) {
        if (a && d) {
          var b =
            a.eventParameter,
            g = a.eventContext,
            h = a.eventContext.userContext;
          h && (g && h[g[d]]) && h[g[d]].call(h, b);
          "mouseout" !== d ? h.cursor && h.cursor !== c.target.style.cursor && (c.target.style.cursor = h.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
          "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) &&
            this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b)
        }
      };
      ma.prototype.animate = function(a, d, c, b, g) {
        var h = this;
        this.chart.isAnimating = !0;
        g = g || w.easing.linear;
        c && this.animations.push({
          startTime: (new Date).getTime() + (a ? a : 0),
          duration: d,
          animationCallback: c,
          onComplete: b
        });
        for (a = []; 0 < this.animations.length;)
          if (d = this.animations.shift(), c = (new Date).getTime(), b = 0, d.startTime <= c && (b = g(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1),
            1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete) d.onComplete();
        this.animations = a;
        0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
          h.animate.call(h)
        }) : this.chart.isAnimating = !1
      };
      ma.prototype.cancelAllAnimations = function() {
        this.animations = [];
        this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
        this.animationRequestId = null;
        this.chart.isAnimating = !1
      };
      var w = {
          yScaleAnimation: function(a, d) {
            if (0 !== a) {
              var c =
                d.dest,
                b = d.source.canvas,
                g = d.animationBase;
              c.drawImage(b, 0, 0, b.width, b.height, 0, g - g * a, c.canvas.width / la, a * c.canvas.height / la)
            }
          },
          xScaleAnimation: function(a, d) {
            if (0 !== a) {
              var c = d.dest,
                b = d.source.canvas,
                g = d.animationBase;
              c.drawImage(b, 0, 0, b.width, b.height, g - g * a, 0, a * c.canvas.width / la, c.canvas.height / la)
            }
          },
          xClipAnimation: function(a, d) {
            if (0 !== a) {
              var c = d.dest,
                b = d.source.canvas;
              c.save();
              0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / la, b.height / la);
              c.restore()
            }
          },
          fadeInAnimation: function(a, d) {
            if (0 !==
              a) {
              var c = d.dest,
                b = d.source.canvas;
              c.save();
              c.globalAlpha = a;
              c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / la, c.canvas.height / la);
              c.restore()
            }
          },
          easing: {
            linear: function(a, d, c, b) {
              return c * a / b + d
            },
            easeOutQuad: function(a, d, c, b) {
              return -c * (a /= b) * (a - 2) + d
            },
            easeOutQuart: function(a, d, c, b) {
              return -c * ((a = a / b - 1) * a * a * a - 1) + d
            },
            easeInQuad: function(a, d, c, b) {
              return c * (a /= b) * a + d
            },
            easeInQuart: function(a, d, c, b) {
              return c * (a /= b) * a * a * a + d
            }
          }
        },
        r = {
          drawMarker: function(a, d, c, b, g, h, e, k) {
            if (c) {
              var t = 1;
              c.fillStyle = h ? h : "#000000";
              c.strokeStyle = e ? e : "#000000";
              c.lineWidth = k ? k : 0;
              c.setLineDash && c.setLineDash(S("solid", k));
              "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, g / 2, 0, 2 * Math.PI, !1), h && c.fill(), k && (e ? c.stroke() : (t = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t))) : "square" === b ? (c.beginPath(), c.rect(a - g / 2, d - g / 2, g, g), h && c.fill(), k && (e ? c.stroke() : (t = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - g / 2, d + g / 2), c.lineTo(a +
                g / 2, d + g / 2), c.lineTo(a, d - g / 2), c.closePath(), h && c.fill(), k && (e ? c.stroke() : (t = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t)), c.beginPath()) : "cross" === b && (c.strokeStyle = h, c.lineWidth = g / 4, c.beginPath(), c.moveTo(a - g / 2, d - g / 2), c.lineTo(a + g / 2, d + g / 2), c.stroke(), c.moveTo(a + g / 2, d - g / 2), c.lineTo(a - g / 2, d + g / 2), c.stroke())
            }
          },
          drawMarkers: function(a) {
            for (var d = 0; d < a.length; d++) {
              var c = a[d];
              r.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness)
            }
          }
        };
      return s
    }();
    Ka.version = "v3.7.1 GA";
    window.CanvasJS && (Ka && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = Ka);
    ja.StockChart = {
      width: 500,
      height: 600,
      backgroundColor: "white",
      theme: "light1",
      animationEnabled: !1,
      animationDuration: 1200,
      culture: "en",
      creditHref: "",
      creditText: "CanvasJS",
      exportEnabled: !1,
      exportFileName: "StockChart",
      colorSet: "colorSet1",
      rangeChanging: null,
      rangeChanged: null,
      publicProperties: {
        title: "readWrite",
        subtitles: "readWrite",
        toolbar: "readWrite",
        navigator: "readWrite",
        rangeSelector: "readWrite",
        charts: "readWrite",
        options: "readWrite",
        bounds: "readOnly",
        container: "readOnly",
        selectedColorSet: "readOnly"
      }
    };
    ja.Navigator = {
      enabled: !0,
      width: 500,
      height: 70,
      verticalAlign: "bottom",
      horizontalAlign: "center",
      dynamicUpdate: !0,
      backgroundColor: "#fff",
      animationEnabled: !1,
      animationDuration: 1200,
      theme: "light1",
      publicProperties: {
        slider: "readWrite",
        backgroundColor: "readWrite",
        animationEnabled: "readWrite",
        animationDuration: "readWrite",
        theme: "readWrite",
        axisX: "readWrite",
        axisY: "readWrite",
        axisX2: "readWrite",
        axisY2: "readWrite",
        data: "readWrite",
        options: "readWrite",
        bounds: "readOnly"
      }
    };
    ja.RangeSelector = {
      enabled: !0,
      width: 500,
      height: 35,
      label: "Range",
      verticalAlign: "top",
      horizontalAlign: "center",
      selectedRangeButtonIndex: null,
      publicProperties: {
        options: "readWrite",
        buttons: "readWrite",
        inputFields: "readWrite",
        buttonStyle: "readWrite",
        bounds: "readOnly"
      }
    };
    ja.RangeButton = {
      range: null,
      rangeType: null,
      label: null,
      style: "position: inline; margin: 5px 0;text-align:center;cursor: pointer;",
      backgroundColorDisabled: "#ddd",
      publicProperties: {
        options: "readWrite",
        bounds: "readOnly"
      }
    };
    ja.ButtonStyle = {
      backgroundColor: "#fff",
      backgroundColorOnHover: "#2196f3",
      backgroundColorOnSelect: "#2196f3",
      borderColor: "#2196f3",
      borderThickness: 2,
      labelFontColor: "#000",
      labelFontColorOnHover: "#fff",
      labelFontSize: 14,
      labelFontStyle: "normal",
      labelFontFamily: u ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      labelFontWeight: "normal",
      width: null,
      maxWidth: null,
      padding: {
        left: 5,
        right: 5,
        top: 2,
        bottom: 2
      },
      spacing: 5,
      cursor: "pointer",
      publicProperties: {
        options: "readWrite"
      }
    };
    ja.InputFields = {
      enabled: !0,
      startValue: null,
      endValue: null,
      valueType: "dateTime",
      valueFormatString: "MMM DD YYYY",
      publicProperties: {
        style: "readWrite",
        options: "readWrite"
      }
    };
    ja.Style = {
      backgroundColor: "#fff",
      borderColor: "#2196f3",
      borderColorOnFocus: "#008eff",
      borderThickness: 2,
      fontColor: "#000",
      fontSize: 12,
      fontStyle: "normal",
      fontFamily: u ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
      fontWeight: "normal",
      width: null,
      maxWidth: null,
      padding: {
        left: 5,
        right: 5,
        top: 2,
        bottom: 2
      },
      spacing: 5,
      cursor: "text",
      publicProperties: {
        options: "readWrite"
      }
    };
    ja.Slider = {
      maskColor: "#d9e8f9",
      maskInverted: !1,
      maskOpacity: 0.7,
      handleColor: "#ddd",
      handleBorderColor: "#aaa",
      handleBorderThickness: 1,
      handleWidth: 8,
      handleHeight: 18,
      minimum: null,
      maximum: null,
      outlineThickness: 1,
      outlineColor: "#666",
      outlineInverted: !1,
      publicProperties: {
        options: "readWrite"
      }
    };
    ja.CultureInfo.rangeSelector = {
      fromText: "From",
      toText: "To",
      rangeText: "Range"
    };
    N = "#FFFFFF";
    W = "#333333";
    O = "#000000";
    Ga = {
      colorSet: "colorSet1",
      backgroundColor: N,
      title: Ga.title,
      subtitles: Ga.subtitles,
      charts: [Ga],
      rangeSelector: {
        buttonStyle: {
          backgroundColor: "#FEFEFE",
          backgroundColorOnHover: "#41a5f5",
          backgroundColorOnSelect: "#2196f3",
          borderColor: "#2196f3",
          borderThickness: 1,
          labelFontColor: O,
          labelFontColorOnHover: "#ffffff",
          labelFontSize: 14,
          labelFontStyle: "normal",
          labelFontFamily: s,
          labelFontWeight: "normal",
          spacing: 0
        },
        inputFields: {
          style: {
            backgroundColor: "#ffffff",
            borderColor: "#2196f3",
            borderColorOnFocus: "#2196f3",
            borderThickness: 1,
            fontColor: O,
            fontSize: 14,
            fontStyle: "normal",
            fontFamily: s,
            fontWeight: "normal"
          }
        }
      },
      navigator: {
        backgroundColor: N,
        slider: {
          maskColor: "#d9e8f9",
          maskOpacity: 0.6,
          handleColor: "#efefef",
          handleBorderColor: "#666666",
          handleBorderThickness: 1,
          outlineColor: "#666666",
          outlineThickness: 1
        }
      },
      toolbar: Ga.toolbar
    };
    N = "#FFFFFF";
    W = "#3A3A3A";
    O = "#666666";
    Ja = {
      colorSet: "colorSet2",
      backgroundColor: N,
      title: Ja.title,
      subtitles: Ja.subtitles,
      charts: [Ja],
      rangeSelector: {
        buttonStyle: {
          backgroundColor: "#FEFEFE",
          backgroundColorOnHover: "#41a5f5",
          backgroundColorOnSelect: "#2196f3",
          borderColor: "#2196f3",
          borderThickness: 1,
          labelFontColor: O,
          labelFontColorOnHover: "#ffffff",
          labelFontSize: 14,
          labelFontStyle: "normal",
          labelFontFamily: s,
          labelFontWeight: "normal",
          spacing: 0
        },
        inputFields: {
          style: {
            backgroundColor: "#ffffff",
            borderColor: "#2196f3",
            borderColorOnFocus: "#2196f3",
            borderThickness: 1,
            fontColor: O,
            fontSize: 14,
            fontStyle: "normal",
            fontFamily: s,
            fontWeight: "normal"
          }
        }
      },
      navigator: {
        backgroundColor: N,
        slider: {
          maskColor: "#D9E8F9",
          maskOpacity: 0.6,
          handleColor: "#EFEFEF",
          handleBorderColor: "#BBBBBB",
          handleBorderThickness: 1,
          outlineColor: "#BBBBBB",
          outlineThickness: 1
        }
      },
      toolbar: Ja.toolbar
    };
    N = "#2A2A2A";
    O = W = "#F5F5F5";
    Aa = {
      colorSet: "colorSet1",
      backgroundColor: N,
      title: Aa.title,
      subtitles: Aa.subtitles,
      charts: [Aa],
      rangeSelector: {
        buttonStyle: {
          backgroundColor: "#666666",
          backgroundColorOnHover: "#FF7372",
          backgroundColorOnSelect: "#FF7372",
          borderColor: "#FF7372",
          borderThickness: 1,
          labelFontColor: O,
          labelFontColorOnHover: "#F5F5F5",
          labelFontSize: 14,
          labelFontStyle: "normal",
          labelFontFamily: s,
          labelFontWeight: "normal",
          spacing: 0
        },
        inputFields: {
          style: {
            backgroundColor: "#666666",
            borderColor: "#FF7372",
            borderColorOnFocus: "#FF7372",
            borderThickness: 1,
            fontColor: O,
            fontSize: 14,
            fontStyle: "normal",
            fontFamily: s,
            fontWeight: "normal"
          }
        }
      },
      navigator: {
        backgroundColor: N,
        slider: {
          maskColor: "#d9e8f9",
          maskOpacity: 0.6,
          handleColor: "#efefef",
          handleBorderColor: "#666666",
          handleBorderThickness: 1,
          outlineColor: "#FFFFFF",
          outlineThickness: 1
        }
      },
      toolbar: Aa.toolbar
    };
    N = "#32373A";
    O = W = "#FAFAFA";
    var bb = {
      light1: Ga,
      light2: Ja,
      dark1: Aa,
      dark2: {
        colorSet: "colorSet2",
        backgroundColor: N,
        title: X.title,
        subtitles: X.subtitles,
        charts: [X],
        rangeSelector: {
          buttonStyle: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            backgroundColorOnSelect: "#FF7372",
            borderColor: "#666",
            borderThickness: 1,
            labelFontColor: O,
            labelFontColorOnHover: "#F5F5F5",
            labelFontSize: 14,
            labelFontStyle: "normal",
            labelFontFamily: s,
            labelFontWeight: "normal",
            spacing: 0
          },
          inputFields: {
            style: {
              backgroundColor: "#666666",
              borderColor: "#666",
              borderColorOnFocus: "#FF7372",
              borderThickness: 1,
              fontColor: O,
              fontSize: 14,
              fontStyle: "normal",
              fontFamily: s,
              fontWeight: "normal"
            }
          }
        },
        navigator: {
          backgroundColor: N,
          slider: {
            maskColor: "#d9e8f9",
            maskOpacity: 0.6,
            handleColor: "#efefef",
            handleBorderColor: "#666666",
            handleBorderThickness: 1,
            outlineColor: "#666",
            outlineThickness: 1
          }
        },
        toolbar: X.toolbar
      }
    };
    W = Ra.StockChart = function() {
      function k(d) {
        var e;
        e = document.createElement("div");
        e.setAttribute("class", d);
        Q(e, {
          position: "absolute",
          textAlign: "left",
          cursor: "auto",
          webkitTapHighlightColor: "transparent"
        });
        return e
      }
  
      function E(d, k, w) {
        d = document.createElement(d);
        d.setAttribute("class", k);
        Q(d, {
          webkitTapHighlightColor: "transparent"
        });
        e(w) || d.setAttribute("type", w);
        return d
      }
  
      function G(d, k) {
        k =
          k || {};
        this.theme = e(k.theme) || e(ab[k.theme]) ? "light1" : k.theme;
        this.predefinedThemes = bb;
        G.base.constructor.call(this, "StockChart", null, k, null, null);
        this.optionsName = "stockChart";
        var w = this;
        this.sessionVariables = {};
        this._axisXMax = this._axisXMin = null;
        this._containerId = d;
        this._objectsInitialized = !1;
        this.ctx = null;
        this.plotArea = {
          canvas: null,
          ctx: null,
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
          width: 0,
          height: 0
        };
        this._dataInRenderedOrder = [];
        this.allDOMEventHandlers = [];
        if (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) :
          this._containerId) {
          this.container.innerHTML = "";
          var r = 0,
            a = 0;
          this._defaultCursor = "default";
          r = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
          a = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
          this.width = r;
          this.height = a;
          this.x1 = this.y1 = 0;
          this.x2 = this.width;
          this.y2 = this.height;
          this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1;
          this._canvasJSContainer = document.createElement("div");
          this._canvasJSContainer.setAttribute("class", "canvasjs-stock-container");
          this._canvasJSContainer.style.position = "relative";
          this._canvasJSContainer.style.userSelect = this._canvasJSContainer.style.WebkitUserSelect = this._canvasJSContainer.style.MozUserSelect = this._canvasJSContainer.style.msUserSelect = "none";
          this._canvasJSContainer.style.textAlign = "left";
          this._canvasJSContainer.style.cursor = "auto";
          this._canvasJSContainer.style.direction = "ltr";
          this._canvasJSContainer.style.fontFamily = s;
          u || (this._canvasJSContainer.style.height =
            "0px");
          this.container.appendChild(this._canvasJSContainer);
          this.canvas = ta(r, a);
          this.canvas.style.position = "absolute";
          this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ha(this.ctx), this.overlaidCanvas = ta(r, a), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx =
              this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ha(this.overlaidCanvasCtx)), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(r, a), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), Q(this._toolBar, {
              position: "absolute",
              right: "1px",
              top: "1px",
              zIndex: 999
            }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
              x1: 0,
              y1: 0,
              x2: this.width,
              y2: this.height
            }, this.charts = [], Ea(this.charts), this._eventManager = new M(this), A(this.overlaidCanvas, "click", function(a) {
              w._mouseEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, "mousemove", function(a) {
              w._mouseEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, "mouseup", function(a) {
              w._mouseEventHandler(a)
            }, this.allDOMEventHandlers),
            A(this.overlaidCanvas, "mousedown", function(a) {
              w._mouseEventHandler(a);
              za(w._dropdownMenu)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, "mouseout", function(a) {
              w._mouseEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
              w._touchEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
              w._touchEventHandler(a)
            }, this.allDOMEventHandlers),
            A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
              w._touchEventHandler(a)
            }, this.allDOMEventHandlers), A(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
              w._touchEventHandler(a)
            }, this.allDOMEventHandlers), this.windowResizeHandler = A(window, "resize", function() {
              w._updateSize() && w.render()
            }, this.allDOMEventHandlers))
        } else window.console && window.console.log('CanvasJS Error: StockChart Container with id "' + this._containerId +
          '" was not found')
      }
  
      function N(d, e) {
        N.base.constructor.call(this, d, e);
        this.options = e;
        this.dockInsidePlotArea = !1
      }
  
      function F(d, e, k) {
        F.base.constructor.call(this, d, e, k);
        this.options = e;
        this.dockInsidePlotArea = !1
      }
  
      function M(d) {
        this.stockChart = d;
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.ghostCanvas = ta(this.stockChart.width, this.stockChart.height);
        this.ghostCtx = this.ghostCanvas.getContext("2d");
        this.mouseoveredObjectMaps = []
      }
  
      function z(d, e) {
        e = e || {};
        this.optionsName =
          "navigator";
        z.base.constructor.call(this, "Navigator", "navigator", e, null, d);
        this.parent = this.stockChart = d
      }
  
      function O(d, t) {
        this.panel = k("canvasjs-slider-panel");
        this.parent = this.navigator = d;
        this.stockChart = d.stockChart;
        this.navigator.panel.appendChild(this.panel);
        O.base.constructor.call(this, "Slider", "slider", t, null, d);
        this.options = e(t.navigator) || e(t.navigator.slider) ? {} : t.navigator.slider;
        this.optionsName = "slider";
        this.panMode = !1;
        this.sessionVariables = {}
      }
  
      function S(d, k) {
        S.base.constructor.call(this,
          "RangeSelector", "rangeSelector", k, null, d);
        this.parent = this.stockChart = d;
        this.options = e(k) || e(k.rangeSelector) ? {} : k.rangeSelector;
        this.optionsName = "rangeSelector";
        this.ctx = d.ctx
      }
  
      function P(d, k, w) {
        P.base.constructor.call(this, "RangeButton", "rangeButton", w, k, d.rangeSelector);
        this.stockChart = d;
        this.parent = this.rangeSelector = d.rangeSelector;
        this.options = e(w) ? {} : w;
        this.optionsName = "rangeButton";
        this.enabled = !1;
        this.state = "off"
      }
  
      function V(d, k) {
        V.base.constructor.call(this, "InputFields", "inputFields", k, null,
          d.rangeSelector);
        this.stockChart = d;
        this.options = e(k) || e(k.inputFields) ? {} : k.inputFields;
        this.parent = this.rangeSelector = d.rangeSelector;
        this.elements = [];
        this._textBlocks = [];
        this.optionsName = "inputFields";
        this.elements.push(E("input", "canvasjs-input-field", "text"));
        this.elements.push(E("input", "canvasjs-input-field", "text"));
        for (var w = 0; w < this.elements.length; w++) this.stockChart._canvasJSContainer.appendChild(this.elements[w]);
        var r = this,
          a = null,
          f = null;
        A(this.elements[0], "focus", function() {
          r.enabled &&
            (r.elements[0].focused = !0, r._textBlocks[0].borderColor = r.style.borderColorOnFocus, r._textBlocks[0].render(!0))
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[0], "focusout", function() {
          if (r.enabled) {
            r.elements[0].focused = !1;
            var a;
            r.stockChart.charts && r.stockChart.charts.length && (a = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
            this.value = "dateTime" === r.valueType ? fa(a ? a.viewportMinimum : null, "YYYY-MM-DD",
              r.stockChart._cultureInfo) : ba(a ? a.viewportMinimum : null, r.valueFormatString, r.stockChart._cultureInfo);
            this.style.display = "none";
            r._textBlocks[0].borderColor = r.style.borderColor;
            r._textBlocks[0].render(!0)
          }
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[1], "focus", function() {
          r.enabled && (r.elements[1].focused = !0, r._textBlocks[1].borderColor = r.style.borderColorOnFocus, r._textBlocks[1].render(!0))
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[1], "focusout", function() {
          if (r.enabled) {
            r.elements[1].focused = !1;
            var a;
            r.stockChart.charts && r.stockChart.charts.length && (a = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
            this.value = "dateTime" === r.valueType ? fa(a ? a.viewportMaximum : null, "YYYY-MM-DD", r.stockChart._cultureInfo) : ba(a ? a.viewportMaximum : null, r.valueFormatString, r.stockChart._cultureInfo);
            this.style.display = "none";
            r._textBlocks[1].borderColor = r.style.borderColor;
            r._textBlocks[1].render(!0)
          }
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[0], "change", function(c) {
          if (r.enabled) {
            var b, d;
            r.stockChart.charts && r.stockChart.charts.length && (r.stockChart.navigator && r.stockChart.navigator.enabled && (d = r.stockChart.navigator && r.stockChart.navigator.chart && r.stockChart.navigator.chart.axisX ? r.stockChart.navigator.chart.axisX[0] : r.stockChart.navigator.chart.axisX2[0]), b = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
            c = "dateTime" === r.valueType ? isNaN((new Date(this.value.replace(/-/g,
              "/"))).getTime()) ? null : (new Date(this.value.replace(/-/g, "/"))).getTime() : this.value;
            a = e(d) ? !e(c) && c < (e(b) ? null : b.maximum) ? Math.max(e(b) ? null : b.minimum, c) : e(b) ? null : b.minimum : !e(c) && c < (e(d) ? null : d.maximum) ? Math.max(e(d) ? null : d.minimum, c) : e(d) ? null : d.minimum;
            f = e(b) ? null : b.viewportMaximum;
            r.stockChart._rangeEventParameter = {
              stockChart: r.stockChart,
              source: "inputFields",
              index: null,
              minimum: a,
              maximum: f
            };
            r.stockChart._rangeEventParameter.type = "rangeChanging";
            r.stockChart.dispatchEvent("rangeChanging", r.stockChart._rangeEventParameter,
              r.stockChart);
            r.stockChart.sessionVariables._axisXMin = a;
            r.stockChart.sessionVariables._axisXMax = f;
            r.stockChart._syncCharts(a, f);
            r.stockChart._rangeEventParameter.type = "rangeChanged";
            r.stockChart.dispatchEvent("rangeChanged", r.stockChart._rangeEventParameter, r.stockChart);
            r.stockChart.rangeSelector && r.stockChart.rangeSelector.resetRangeButtons()
          }
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[1], "change", function(c) {
          if (r.enabled) {
            var b, d;
            r.stockChart.charts && r.stockChart.charts.length &&
              (r.stockChart.navigator && r.stockChart.navigator.enabled && (d = r.stockChart.navigator && r.stockChart.navigator.chart && r.stockChart.navigator.chart.axisX ? r.stockChart.navigator.chart.axisX[0] : r.stockChart.navigator.chart.axisX2[0]), b = r.stockChart.charts[0].axisX && r.stockChart.charts[0].axisX.length ? r.stockChart.charts[0].axisX[0] : r.stockChart.charts[0].axisX2[0]);
            c = "dateTime" === r.valueType ? isNaN((new Date(this.value.replace(/-/g, "/"))).getTime()) ? null : (new Date(this.value.replace(/-/g, "/"))).getTime() :
              this.value;
            a = b ? b.viewportMinimum : null;
            f = e(d) ? !e(c) && c > (b ? b.minimum : null) ? Math.min(b ? b.maximum : null, c) : b ? b.maximum : null : !e(c) && c > (d ? d.minimum : null) ? Math.min(d ? d.maximum : null, c) : d ? d.maximum : null;
            r.stockChart._rangeEventParameter = {
              stockChart: r.stockChart,
              source: "inputFields",
              index: null,
              minimum: a,
              maximum: f
            };
            r.stockChart._rangeEventParameter.type = "rangeChanging";
            r.stockChart.dispatchEvent("rangeChanging", r.stockChart._rangeEventParameter, r.stockChart);
            r.stockChart.sessionVariables._axisXMin = a;
            r.stockChart.sessionVariables._axisXMax =
              f;
            r.stockChart._syncCharts(a, f);
            r.stockChart._rangeEventParameter.type = "rangeChanged";
            r.stockChart.dispatchEvent("rangeChanged", r.stockChart._rangeEventParameter, r.stockChart);
            r.stockChart.rangeSelector && r.stockChart.rangeSelector.resetRangeButtons()
          }
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[0], "keydown", function(a) {
          if (r.enabled && 13 === a.keyCode) {
            var b = "dateTime" === r.valueType ? fa(r.startValue, "YYYY-MM-DD") : ba(r.startValue, r.valueFormatString);
            this.value != b && hb(this, "change");
            this.blur();
            a.preventDefault && a.preventDefault()
          }
        }, this.rangeSelector.stockChart.allDOMEventHandlers);
        A(this.elements[1], "keydown", function(a) {
          if (r.enabled && 13 === a.keyCode) {
            var b = "dateTime" === r.valueType ? fa(r.endValue, "YYYY-MM-DD") : ba(r.endValue, r.valueFormatString);
            this.value != b && hb(this, "change");
            this.blur();
            a.preventDefault && a.preventDefault()
          }
        }, this.rangeSelector.stockChart.allDOMEventHandlers)
      }
  
      function W(d, k) {
        W.base.constructor.call(this, "ButtonStyle", "buttonStyle", k, null, d.rangeSelector);
        this.stockChart =
          d;
        this.parent = this.rangeSelector = d.rangeSelector;
        this.options = e(k) || e(k.buttonStyle) ? {} : k.buttonStyle;
        this.optionsName = "buttonStyle"
      }
  
      function X(d, k) {
        X.base.constructor.call(this, "Style", "style", k, null, d.rangeSelector.inputFields);
        this.stockChart = d;
        this.parent = this.inputFields = d.rangeSelector.inputFields;
        this.options = e(k) || e(k.style) ? {} : k.style;
        this.optionsName = "style"
      }
      var aa = !0;
      ia(G, Z);
      G.prototype._updateOptions = function() {
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("theme");
        this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1);
        this.updateOption("backgroundColor");
        this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
        this.updateOption("exportEnabled");
        this.updateOption("exportFileName");
        this.updateOption("creditHref");
        this.updateOption("creditHref");
        this.updateOption("culture");
        this._cultureInfo = new Oa(this.options.culture);
        this.updateOption("animationEnabled");
        this.updateOption("animationDuration");
        this.updateOption("rangeChanging");
        this.updateOption("rangeChanged");
        this.toolbar = new Wa(this, this.options.toolbar);
        ib(this)
      };
      G._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bubble scatter stackedColumn stackedColumn100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeArea rangeSplineArea waterfall".split(" "));
      G.prototype._initialize = function() {
        this._updateOptions();
        this.animationEnabled = this.animationEnabled && u;
        this._updateSize();
        this.clearCanvas();
        this.ctx.beginPath();
        var d, t = e(this.options.charts) ? [] : this.options.charts;
        Ea(t);
        for (var w = 0; w < this.charts.length; w++) d = this.charts[w], 0 > t.indexOf(d.options) && (this.charts.splice(w, 1), d.destroy(), this._canvasJSContainer.removeChild(d.panel), w--);
        this.layoutManager = new La(0, 0, this.width, this.height, 2);
        this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
        this.title = null;
        this.subtitles = [];
        this.options.title && (this.title = new N(this, this.options.title), this.title.setLayout());
        if (this.options.subtitles)
          for (w =
            0; w < this.options.subtitles.length; w++) d = new F(this, this.options.subtitles[w], w), this.subtitles.push(d), d.setLayout();
        this.navigator = this.navigator || new z(this, this.options.navigator);
        this.navigator._initialize();
        if (this.navigator.enabled) {
          d = {
            theme: this.options.navigator && this.options.navigator.theme ? this.options.navigator.theme : this.theme,
            animationEnabled: this.options.navigator && !e(this.options.navigator.animationEnabled) ? this.options.navigator.animationEnabled : this.animationEnabled,
            animationDuration: this.options.navigator &&
              this.options.navigator.animationDuration ? this.options.navigator.animationDuration : this.animationDuration,
            culture: this.options.navigator && this.options.navigator.culture ? this.options.navigator.culture : this.culture,
            zoomEnabled: !1,
            data: this.options.navigator && this.options.navigator.data ? this.options.navigator.data : this.options.charts && this.options.charts[0] && this.options.charts[0].data ? Za(this.options.charts[0].data) : [],
            axisX: this.options.navigator && this.options.navigator.axisX ? this.options.navigator.axisX : {},
            axisY: this.options.navigator && this.options.navigator.axisY ? this.options.navigator.axisY : {},
            axisX2: this.options.navigator && this.options.navigator.axisX2 ? this.options.navigator.axisX2 : {},
            axisY2: this.options.navigator && this.options.navigator.axisY2 ? this.options.navigator.axisY2 : {},
            interactivityEnabled: !1,
            exportEnabled: !1
          };
          for (w = 0; w < d.data.length; w++) !e(this.navigator.options.data) || !e(d.data[w].type) && (e(d.data[w].type) || 0 <= d.data[w].type.indexOf("range") || 0 <= d.data[w].type.indexOf("ohlc") || 0 <= d.data[w].type.indexOf("candlestick") ||
            0 <= d.data[w].type.indexOf("error")) ? this.navigator.options.data && e(this.navigator.options.data[w].type) && (d.data[w].type = "splineArea") : d.data[w].type = "splineArea";
          if (d.axisX.length)
            for (w = 0; w < d.axisX.length; w++) d.axisX[w].titleFontSize = e(d.axisX[w].titleFontSize) ? 1 : d.axisX[w].titleFontSize, d.axisX[w].labelFontSize = e(d.axisX[w].labelFontSize) ? 12 : d.axisX[w].labelFontSize, d.axisX[w].labelAngle = e(d.axisX[w].labelAngle) ? 0 : d.axisX[w].labelAngle, d.axisX[w].labelPlacement = e(d.axisX[w].labelPlacement) ? "inside" :
              d.axisX[w].labelPlacement, d.axisX[w].tickLength = e(d.axisX[w].tickLength) ? 0 : d.axisX[w].tickLength, d.axisX[w].lineThickness = e(d.axisX[w].lineThickness) ? 0 : d.axisX[w].lineThickness, d.axisX[w].tickThickness = e(d.axisX[w].tickThickness) ? 0 : d.axisX[w].tickThickness, d.axisX[w].gridThickness = e(d.axisX[w].gridThickness) ? 1 : d.axisX[w].gridThickness;
          else d.axisX.titleFontSize = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.titleFontSize) ? this.options.navigator.axisX.titleFontSize :
            u ? 0 : 1, d.axisX.labelFontSize = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.labelFontSize) ? this.options.navigator.axisX.labelFontSize : 12, d.axisX.labelAngle = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.labelAngle) ? this.options.navigator.axisX.labelAngle : 0, d.axisX.labelPlacement = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.labelPlacement) ? this.options.navigator.axisX.labelPlacement :
            "inside", d.axisX.tickLength = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.tickLength) ? this.options.navigator.axisX.tickLength : 0, d.axisX.lineThickness = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.lineThickness) ? this.options.navigator.axisX.lineThickness : 0, d.axisX.tickThickness = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.tickThickness) ? this.options.navigator.axisX.tickThickness :
            0, d.axisX.gridThickness = this.options.navigator && this.options.navigator.axisX && !e(this.options.navigator.axisX.gridThickness) ? this.options.navigator.axisX.gridThickness : 1;
          if (d.axisY.length)
            for (w = 0; w < d.axisY.length; w++) d.axisY[w].titleFontSize = d.axisY[w].titleFontSize ? d.axisY[w].titleFontSize : u ? 0 : 1, d.axisY[w].labelFontSize = d.axisY[w].labelFontSize ? d.axisY[w].labelFontSize : u ? 0 : 1, d.axisY[w].labelPlacement = d.axisY[w].labelPlacement ? d.axisY[w].labelPlacement : "inside", d.axisY[w].includeZero = !1, d.axisY[w].lineThickness =
              0, d.axisY[w].tickThickness = 0, d.axisY[w].tickLength = 0, d.axisY[w].gridThickness = 0;
          else d.axisY.titleFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.titleFontSize ? this.options.navigator.axisY.titleFontSize : u ? 0 : 1, d.axisY.labelFontSize = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelFontSize ? this.options.navigator.axisY.labelFontSize : u ? 0 : 1, d.axisY.labelPlacement = this.options.navigator && this.options.navigator.axisY && this.options.navigator.axisY.labelPlacement ?
            this.options.navigator.axisY.labelPlacement : "inside", d.axisY.includeZero = !1, d.axisY.lineThickness = 0, d.axisY.tickThickness = 0, d.axisY.tickLength = 0, d.axisY.gridThickness = 0;
          if (d.axisX2.length)
            for (w = 0; w < d.axisX2.length; w++) d.axisX2[w].titleFontSize = d.axisX2[w].titleFontSize ? d.axisX2[w].titleFontSize : u ? 0 : 1, d.axisX2[w].labelFontSize = d.axisX2[w].labelFontSize ? d.axisX2[w].labelFontSize : 12, d.axisX2[w].labelAngle = e(d.axisX2[w].labelAngle) ? 0 : d.axisX2[w].labelAngle, d.axisX2[w].labelPlacement = d.axisX2[w].labelPlacement ?
              d.axisX2[w].labelPlacement : "inside", d.axisX2[w].tickLength = e(d.axisX2[w].tickLength) ? 0 : d.axisX2[w].tickLength, d.axisX2[w].lineThickness = d.axisX2[w].lineThickness ? d.axisX2[w].lineThickness : 0, d.axisX2[w].tickThickness = d.axisX2[w].tickThickness ? d.axisX2[w].tickThickness : 1, d.axisX2[w].gridThickness = e(d.axisX2[w].gridThickness) ? 1 : d.axisX2[w].gridThickness;
          else d.axisX2.titleFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.titleFontSize ? this.options.navigator.axisX2.titleFontSize :
            u ? 0 : 1, d.axisX2.labelFontSize = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelFontSize ? this.options.navigator.axisX2.labelFontSize : 12, d.axisX2.labelAngle = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelAngle ? this.options.navigator.axisX2.labelAngle : 0, d.axisX2.labelPlacement = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.labelPlacement ? this.options.navigator.axisX2.labelPlacement :
            "inside", d.axisX2.tickLength = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickLength ? this.options.navigator.axisX2.tickLength : 0, d.axisX2.lineThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.lineThickness ? this.options.navigator.axisX2.lineThickness : 0, d.axisX2.tickThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.tickThickness ? this.options.navigator.axisX2.tickThickness :
            1, d.axisX2.gridThickness = this.options.navigator && this.options.navigator.axisX2 && this.options.navigator.axisX2.gridThickness ? this.options.navigator.axisX2.gridThickness : 1;
          if (d.axisY2.length)
            for (w = 0; w < d.axisY2.length; w++) d.axisY2[w].titleFontSize = d.axisY2[w].titleFontSize ? d.axisY2[w].titleFontSize : u ? 0 : 1, d.axisY2[w].labelFontSize = d.axisY2[w].labelFontSize ? d.axisY2[w].labelFontSize : u ? 0 : 1, d.axisY2[w].labelPlacement = d.axisY2[w].labelPlacement ? d.axisY2[w].labelPlacement : "inside", d.axisY2[w].includeZero = !1, d.axisY2[w].lineThickness = 0, d.axisY2[w].margin = 0, d.axisY2[w].tickLength = 0, d.axisY2[w].tickThickness = 0, d.axisY2[w].gridThickness = 0;
          else d.axisY2.titleFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.titleFontSize ? this.options.navigator.axisY2.titleFontSize : u ? 0 : 1, d.axisY2.labelFontSize = this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelFontSize ? this.options.navigator.axisY2.labelFontSize : u ? 0 : 1, d.axisY2.labelPlacement =
            this.options.navigator && this.options.navigator.axisY2 && this.options.navigator.axisY2.labelPlacement ? this.options.navigator.axisY2.labelPlacement : "inside", d.axisY2.includeZero = !1, d.axisY2.lineThickness = 0, d.axisY2.margin = 0, d.axisY2.tickLength = 0, d.axisY2.tickThickness = 0, d.axisY2.gridThickness = 0;
          d.backgroundColor = this.navigator.backgroundColor;
          for (w = 0; w < d.data.length; w++) d.data[w].markerSize = d.data[w].markerSize ? d.data[w].markerSize : 0;
          if (!this.navigator.chart) {
            var r = k("canvasjs-chart-panel");
            this.navigator.panel.appendChild(r);
            r.style.height = this.navigator.height + "px";
            r.style.width = this.navigator.width + "px"
          }
          this.navigator.chart && (this.navigator.chart.panel.style.width = this.navigator.width + "px");
          this.navigator.chart = this.navigator.chart || new Ka(r, d, {
            parent: this.navigator,
            isOptionsInArray: !1,
            index: null,
            predefinedThemes: bb,
            optionsName: "navigator",
            stockChart: this
          });
          this.navigator.chart._initialize();
          this.navigator.chart.setLayout();
          this.navigator.chart.selectedColorSet = this.selectedColorSet;
          this.navigator._chartOptions = d;
          this.navigator.slider =
            this.navigator.slider || new O(this.navigator, this.options);
          this.navigator.slider._initialize()
        }
        this.rangeSelector = this.rangeSelector || new S(this, this.options);
        this.rangeSelector.buttonStyle = this.rangeSelector.buttonStyle || new W(this, this.rangeSelector.options);
        this.rangeSelector.inputFields = this.rangeSelector.inputFields || new V(this, this.rangeSelector.options);
        this.rangeSelector.inputFields.style = new X(this, this.rangeSelector.inputFields.options);
        this.rangeSelector.inputFields.style._updateOptions();
        this.rangeSelector.inputFields._initialize();
        if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled)
          for (this.rangeSelector.inputFields._textBlocks = [], this.rangeSelector.inputFields._labels = [], this.rangeSelector.inputFieldsWidth = 0, r = this.rangeSelector.inputFields.style.maxWidth = this.rangeSelector.inputFields.style.options.maxWidth ? this.rangeSelector.inputFields.style.options.maxWidth : this.rangeSelector.stockChart.width / 2, w = 0; w < this.rangeSelector.inputFields.elements.length; w++) {
            d =
              new oa(this.rangeSelector.ctx, {
                x: 0,
                y: 0,
                backgroundColor: this.rangeSelector.inputFields.style.backgroundColor,
                borderColor: this.rangeSelector.inputFields.style.borderColor,
                borderThickness: this.rangeSelector.inputFields.style.borderThickness,
                cornerRadius: 0,
                maxWidth: e(this.rangeSelector.inputFields.style.options.width) ? r : this.rangeSelector.inputFields.style.width,
                maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
                angle: 0,
                padding: this.rangeSelector.inputFields.style.padding,
                text: this.rangeSelector.inputFields.valueFormatString,
                horizontalAlign: "center",
                textAlign: "center",
                fontSize: this.rangeSelector.inputFields.style.fontSize,
                fontFamily: this.rangeSelector.inputFields.style.fontFamily,
                fontWeight: this.rangeSelector.inputFields.style.fontWeight,
                fontColor: this.rangeSelector.inputFields.style.fontColor,
                fontStyle: this.rangeSelector.inputFields.style.fontStyle,
                textBaseline: "middle"
              });
            var t = d.measureText(),
              a = new oa(this.rangeSelector.ctx, {
                x: 0,
                y: 0,
                backgroundColor: u ? "transparent" : null,
                borderColor: this.rangeSelector.inputFields.style.borderColor,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: this.rangeSelector.inputFields.style.maxWidth,
                maxHeight: 2 * this.rangeSelector.inputFields.style.fontSize,
                angle: 0,
                padding: this.rangeSelector.inputFields.style.padding,
                text: "From",
                horizontalAlign: "left",
                fontSize: this.rangeSelector.inputFields.style.fontSize,
                fontFamily: this.rangeSelector.inputFields.style.fontFamily,
                fontWeight: this.rangeSelector.inputFields.style.fontWeight,
                fontColor: this.rangeSelector.inputFields.style.fontColor,
                fontStyle: this.rangeSelector.inputFields.style.fontStyle,
                textBaseline: "middle"
              });
            this.rangeSelector.inputFields._textBlocks.push(d);
            this.rangeSelector.inputFields._labels.push(a);
            this.rangeSelector.inputFields._textBlocks[w].bounds = {
              x1: null,
              x2: null,
              y1: null,
              y2: null,
              width: null,
              height: null
            };
            this.rangeSelector.inputFields._labels[w].bounds = {
              x1: null,
              x2: null,
              y1: null,
              y2: null,
              width: null,
              height: null
            };
            this.rangeSelector.inputFieldsWidth += t.width + this.rangeSelector.inputFields.style.spacing + a.measureText().width;
            this.rangeSelector.inputFieldsHeight = this.rangeSelector.inputFieldsHeight <
              t.height ? t.height : this.rangeSelector.inputFieldsHeight;
            d = this.rangeSelector.inputFields._textBlocks[w];
            d.id = ++this.rangeSelector.stockChart._eventManager.lastObjectId;
            this.rangeSelector.stockChart._eventManager.objectMap[d.id] = {
              id: d.id,
              objectType: "inputFields",
              inputFieldIndex: w
            }
          }
        this.rangeSelector.buttonStyle._updateOptions();
        this.rangeSelector._initialize();
        this._objectsInitialized = !0
      };
      G.prototype.render = function(d) {
        var t = this;
        d && (this.options = d);
        this._initialize();
        this.title && this.title.render();
        if (this.subtitles)
          for (d = 0; d < this.subtitles.length; d++) this.subtitles[d].render();
        var w;
        if (this.options.charts) {
          w = Array(this.options.charts.length);
          var r = this.layoutManager.getFreeSpace(),
            a = r.height,
            r = r.height,
            f = this.options.charts.length;
          for (d = 0; d < this.options.charts.length; d++) !e(this.options.charts[d].height) && parseFloat(this.options.charts[d].height) && (w[d] = 0 <= this.options.charts[d].height.toString().indexOf("%") ? Va(this.options.charts[d].height, a, Math.floor(r / f), this.height, 0) : this.options.charts[d].height,
            r -= w[d], f--);
          r = Math.floor(r / f);
          for (d = 0; d < this.options.charts.length; d++) e(w[d]) && (w[d] = r);
          var c, f = this.options.charts,
            b = this.charts;
          this.charts = [];
          for (d = 0; d < f.length; d++) {
            r = this.layoutManager.getFreeSpace();
            a = f[d];
            a.theme = f[d].theme ? f[d].theme : this.options.theme ? this.options.theme : this.theme;
            a.animationEnabled = e(f[d].animationEnabled) ? this.animationEnabled : f[d].animationEnabled;
            a.animationDuration = f[d].animationDuration ? f[d].animationDuration : this.animationDuration;
            a.culture = f[d].culture ? f[d].culture :
              this.culture;
            a.height = f[d].height ? w[d] : null;
            e(f.backgroundColor) ? e(this.options.backgroundColor) || (a.backgroundColor = this.backgroundColor) : a.backgroundColor = this.options.charts[d].backgroundColor;
            for (c = b.length; 0 < c-- && b[c].options !== a;);
            0 <= c ? (this.charts[d] = b[c], this.charts[d].options = a) : (c = k("canvasjs-chart-panel"), c.style.height = w[d] + "px", this._canvasJSContainer.appendChild(c), this.charts[d] = new Ka(c, a, {
              parent: this,
              isOptionsInArray: !0,
              index: d,
              predefinedThemes: bb,
              optionsName: "charts",
              stockChart: this
            }));
            this.charts[d].panel.style.width = r.width + "px";
            this.charts[d].panel.style.top = r.y1 + "px";
            this.charts[d].panel.style.left = r.x1 + "px";
            this.charts[d].panel.style.height = w[d] + "px";
            this.charts[d].height = a.height ? a.height : w[d];
            this.layoutManager.registerSpace("top", {
              width: r.width,
              height: w[d]
            })
          }
          b = null;
          for (d = 0; d < this.charts.length; d++)
            if (!e(this.options.charts[d].data))
              for (c = 0; c < this.options.charts[d].data.length; c++) w = this.options.charts[d].data[c], 0 <= G._supportedChartTypes.indexOf(w.type) || e(w.type) || (aa = !1, window.console && window.console.log("CanvasJS Error: " + w.type + " Chart is not Supported in StockChart"));
          if (!aa) return;
          this.setChartsLayout();
          for (d = w = 0; d < this.charts.length; d++)
            if (e(this.charts[d].options.colorSet)) {
              this.charts[d].selectedColorSet = [];
              for (c = w; c < w + this.charts[d].data.length; c++) this.charts[d].selectedColorSet.push(this.selectedColorSet[c % this.selectedColorSet.length]);
              w += this.charts[d].data.length
            } if (this.navigator && this.navigator.enabled)
            if (this.navigator.options.data) {
              this.navigator.chart.selectedColorSet = [];
              for (c = w; c < w + this.navigator.chart.data.length; c++) this.navigator.chart.selectedColorSet.push(this.selectedColorSet[c % this.selectedColorSet.length]);
              w += this.navigator.chart.data.length
            } else this.navigator.chart.selectedColorSet = this.charts[0].selectedColorSet
        }
        if (this.navigator && this.navigator.enabled) {
          for (d = 0; d < this.navigator.chart.data.length; d++) 0 <= G._supportedChartTypes.indexOf(this.navigator.chart.data[d].type) || (aa = !1, window.console && window.console.log("CanvasJS Error: " + this.navigator.chart.data[d].type +
            " Chart is not Supported in Navigator"));
          if (aa) {
            var g = this.navigator.chart.axisX && this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0];
            g && (g.bounds && g.bounds.x1 > this._chartsPlotAreaX1) && (this._chartsPlotAreaX1 = g.bounds.x1);
            this.navigator.width = this.navigator.chart.width = this.navigator.slider.fullWidth = this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + (g && g.bounds ? g.bounds.x1 : 0);
            this.navigator.panel.style.left =
              this._chartsPlotAreaX1 + this.layoutManager.getFreeSpace().x1 - (g && g.bounds ? g.bounds.x1 : 0) + "px";
            this.navigator.panel.style.width = this.navigator.chart.panel.style.width = this.navigator.options.width ? this.navigator.options.width : this._chartsPlotAreaX2 - this._chartsPlotAreaX1 + (g && g.bounds ? g.bounds.x1 : 0) + "px";
            this.navigator.chart.render(this.navigator._chartOptions);
            this.navigator.backgroundColor = this.navigator.chart.backgroundColor;
            this.navigator.animationEnabled = this.navigator.chart.animationEnabled;
            this.navigator.animationDuration =
              this.navigator.chart.animationDuration;
            this.navigator.theme = this.navigator.chart.theme;
            this.navigator.axisX = this.navigator.chart.axisX;
            this.navigator.axisX2 = this.navigator.chart.axisX2;
            this.navigator.axisY = this.navigator.chart.axisY;
            this.navigator.axisY2 = this.navigator.chart.axisY2;
            this.navigator.data = this.navigator.chart.data
          }
        }
        r = w = null;
        c = 0;
        f = a = null;
        for (d = 0; d < this.charts.length; d++)
          for (b = this.charts[d].axisX && this.charts[d].axisX.length ? this.charts[d].axisX : this.charts[d].axisX2, w = w || (b && 0 < b.length ?
              b[0].minimum : null), r = r || (b && 0 < b.length ? b[0].maximum : null), c = 0; c < b.length; c++) g = b[c], g.minimum < w && (w = g.minimum), g.maximum > r && (r = g.maximum);
        var h;
        this.navigator && (this.navigator.chart && aa) && (h = this.navigator.chart.axisX && 0 < this.navigator.chart.axisX.length ? this.navigator.chart.axisX[0] : this.navigator.chart.axisX2[0], this._axisXMin = this.navigator.slider.minimum = e(this.navigator.options.slider) || e(this.navigator.options.slider.minimum) ? null : Math.max(h.minimum, this.navigator.slider.minimum), this._axisXMax =
          this.navigator.slider.maximum = e(this.navigator.options.slider) || e(this.navigator.options.slider.maximum) ? null : Math.min(h.maximum, this.navigator.slider.maximum));
        if (this.rangeSelector && this.rangeSelector.enabled) {
          c = h ? h.maximum - h.minimum : r - w;
          this.charts && this.charts.length && (g = this.charts[0].axisX && this.charts[0].axisX.length ? this.charts[0].axisX[0] : this.charts[0].axisX2[0]);
          for (d = 0; d < this.rangeSelector.buttons.length; d++) {
            var s = null,
              b = this.rangeSelector.buttons[d];
            "year" === b.rangeType ? s = 31104E6 * b.range :
              "ytd" === b.rangeType ? s = "ytd" : "month" === b.rangeType ? s = 2592E6 * b.range : "week" === b.rangeType ? s = 6048E5 * b.range : "day" === b.rangeType ? s = 864E5 * b.range : "hour" === b.rangeType ? s = 36E5 * b.range : "minute" === b.rangeType ? s = 6E4 * b.range : "second" === b.rangeType ? s = 1E3 * b.range : "millisecond" === b.rangeType ? s = b.range : "all" === b.rangeType ? s = null : "number" === b.rangeType && (s = b.range);
            if ("ytd" === b.rangeType || s < c) b.enabled = !0;
            b.enabled ? (b.cursor = this.rangeSelector.buttonStyle.cursor, "on" === b.state && ((e(this._axisXMin) && e(this._axisXMax) &&
              (b.textBlock.fontWeight = "bold", b.textBlock.fontColor = this.rangeSelector.buttonStyle.labelFontColorOnHover, b.textBlock.backgroundColor = this.rangeSelector.buttonStyle.backgroundColorOnSelect), "ytd" === b.rangeType && g) ? (a = new Date(g.viewportMaximum), a.setDate(1), a.setMonth(0), a = a.getTime()) : e(s) ? h ? (a = h.minimum, f = h.maximum) : g && (a = g.minimum, f = g.maximum) : g.viewportMaximum - s < (h ? h.minimum : g.minimum) ? (f = h.minimum - (g.viewportMaximum - s), a = h.minimum, f = Math.min(h.maximum, g.viewportMaximum + f)) : (a = g.viewportMaximum -
              s, f = g.viewportMaximum)), e(this._axisXMin) && e(this._axisXMax) || (b.state = "off"), this._axisXMin = e(this._axisXMin) ? a : this._axisXMin, this._axisXMax = e(this._axisXMax) ? f : this._axisXMax) : b.cursor = "not-allowed";
            b.mousemove = function(a) {
              this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(!0))
            };
            b.mouseover = function(a) {
              this.enabled &&
                "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnHover, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, this.textBlock.render(!0))
            };
            b.mouseout = function(a) {
              this.enabled && "off" === this.state && (this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColor, this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColor, this.textBlock.render(!0))
            };
            b.click = function(a) {
              if (this.enabled) {
                for (var b =
                    0, c = null, d = null, g = 0; g < t.rangeSelector.buttons.length; g++) t.rangeSelector.buttons[g] != this && (t.rangeSelector.buttons[g].state = "off"), t.rangeSelector.buttons[g].textBlock.fontWeight = t.rangeSelector.buttonStyle.labelFontWeight, t.rangeSelector.buttons[g].textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColor, t.rangeSelector.buttons[g].textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColor, t.rangeSelector.buttons[g].textBlock.render(!0);
                var f;
                t.charts && t.charts.length &&
                  (f = t.charts[0].axisX && t.charts[0].axisX.length ? t.charts[0].axisX[0] : t.charts[0].axisX2[0]);
                var h;
                t.navigator && t.navigator.chart && (h = t.navigator.chart.axisX ? t.navigator.chart.axisX[0] : t.navigator.chart.axisX2[0]);
                "year" === this.rangeType ? b = 31104E6 * this.range : "month" === this.rangeType ? b = 2592E6 * this.range : "week" === this.rangeType ? b = 6048E5 * this.range : "day" === this.rangeType ? b = 864E5 * this.range : "hour" === this.rangeType ? b = 36E5 * this.range : "minute" === this.rangeType ? b = 6E4 * this.range : "second" === this.rangeType ? b =
                  1E3 * this.range : "millisecond" === this.rangeType ? b = this.range : "all" === this.rangeType ? b = null : "number" === this.rangeType && (b = this.range);
                "ytd" === this.rangeType && f ? (c = new Date(f.viewportMaximum), c.setDate(1), c.setMonth(0), b = c.getTime(), c = Math.max(b, h ? h.minimum : f.minimum), d = f.viewportMaximum) : e(b) ? h ? (c = h.minimum, d = h.maximum) : f && (c = f.minimum, d = f.maximum) : h && f.viewportMaximum - b < (h ? h.minimum : f.minimum) ? (h = t.navigator.chart.axisX[0].minimum - (f.viewportMaximum - b), c = t.navigator.chart.axisX[0].minimum, d = Math.min(t.navigator.chart.axisX[0].maximum,
                  f.viewportMaximum + h)) : (c = f.viewportMaximum - b, d = f.viewportMaximum);
                t._rangeEventParameter = {
                  stockChart: t,
                  source: "buttons",
                  index: this._index,
                  minimum: c,
                  maximum: d
                };
                "on" != this.state && (t._rangeEventParameter.type = "rangeChanging", t.dispatchEvent("rangeChanging", t._rangeEventParameter, t), t._syncCharts(c, d), t.sessionVariables._axisXMin = c, t.sessionVariables._axisXMax = d, t._rangeEventParameter.type = "rangeChanged", t.dispatchEvent("rangeChanged", t._rangeEventParameter, t), this.state = "on");
                this.textBlock.fontWeight =
                  "bold";
                this.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover;
                this.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect;
                this.textBlock.render(!0)
              }
            }
          }
          if (this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) {
            this.rangeSelector.inputFields.valueType = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueType ? this.options.rangeSelector.inputFields.valueType : this.isDateTime ?
              "dateTime" : "number";
            for (d = 0; d < this.rangeSelector.inputFields._textBlocks.length; d++) g = this.rangeSelector.inputFields._textBlocks[d], g.mousemove = function(a) {
                t.rangeSelector && t.rangeSelector.inputFields && !t.rangeSelector.inputFields.enabled || (a.inputField.cursor = a.stockChart.rangeSelector.inputFields.style.cursor)
              }, g.mouseover = function(a) {
                t.rangeSelector && t.rangeSelector.inputFields && !t.rangeSelector.inputFields.enabled || (a.inputField.cursor = a.stockChart.rangeSelector.inputFields.style.cursor)
              }, g.mouseout =
              function(a) {
                t.rangeSelector && t.rangeSelector.inputFields && !t.rangeSelector.inputFields.enabled || (a.inputField.cursor = "auto")
              }, g.click = function(a) {
                t.rangeSelector && t.rangeSelector.inputFields && !t.rangeSelector.inputFields.enabled || (a.stockChart.rangeSelector.inputFields.elements[a.inputFieldIndex].style.display = "inline", a.stockChart.rangeSelector.inputFields.elements[a.inputFieldIndex].focus())
              };
            if (isFinite(w) && isFinite(r)) {
              "dateTime" === this.rangeSelector.inputFields.valueType ? (this.rangeSelector.inputFields.valueFormatString =
                this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "MMM DD YYYY", this.rangeSelector.inputFields.startValue = e(this.rangeSelector.inputFields.options.startValue) ? e(a) ? w : a : fa(this.rangeSelector.inputFields.options.startValue, this.rangeSelector.inputFields.valueFormatString), this.rangeSelector.inputFields.endValue = e(this.rangeSelector.inputFields.options.endValue) ? e(f) ? r :
                f : fa(this.rangeSelector.inputFields.options.endValue, this.rangeSelector.inputFields.valueFormatString)) : (this.rangeSelector.inputFields.valueFormatString = this.options.rangeSelector && this.options.rangeSelector.inputFields && this.options.rangeSelector.inputFields.valueFormatString ? this.options.rangeSelector.inputFields.valueFormatString : "#,##0.##", this.rangeSelector.inputFields.startValue = e(this.rangeSelector.inputFields.options.startValue) ? e(a) ? w : a : this.rangeSelector.inputFields.options.startValue,
                this.rangeSelector.inputFields.endValue = e(this.rangeSelector.inputFields.options.endValue) ? e(f) ? r : f : this.rangeSelector.inputFields.options.endValue);
              if (!(e(this._axisXMin) && e(this._axisXMax) && e(this.rangeSelector.inputFields.options.startValue) && e(this.rangeSelector.inputFields.options.endValue)))
                for (c = 0; c < this.rangeSelector.buttons.length; c++) b = this.rangeSelector.buttons[c];
              d = fa(this.rangeSelector.inputFields.startValue, "YYYY-MM-DD'T'HH:mm:ssZ");
              g = fa(this.rangeSelector.inputFields.endValue, "YYYY-MM-DD'T'HH:mm:ssZ");
              u || (d = d.replace(/-/g, "/"), g = g.replace(/-/g, "/"), d = d.replace("T", " "), g = g.replace("T", " "), d = d.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"), g = g.replace(/(\+[0-9]{2})(\:)([0-9]{2}$)/, " UTC$1$3"));
              this._axisXMin = e(this._axisXMin) ? "dateTime" === this.rangeSelector.inputFields.valueType ? (new Date(d)).getTime() : this.rangeSelector.inputFields.startValue : this._axisXMin;
              this._axisXMax = e(this._axisXMax) ? "dateTime" === this.rangeSelector.inputFields.valueType ? (new Date(g)).getTime() : this.rangeSelector.inputFields.endValue :
                this._axisXMax
            }
            for (d = 0; d < this.rangeSelector.inputFields.elements.length; d++) this.rangeSelector.inputFields.elements[d].title = "dateTime" === this.rangeSelector.inputFields.valueType ? "YYYY-MM-DD" : this.rangeSelector.inputFields.valueFormatString
          }
          this.rangeSelector.render()
        }
        e(this._axisXMin) && (this._axisXMin = w);
        e(this._axisXMax) && (this._axisXMax = r);
        this._axisXMin = !e(this.sessionVariables._axisXMin) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("minimum") ? this.sessionVariables._axisXMin :
          this._axisXMin;
        this._axisXMax = !e(this.sessionVariables._axisXMax) && this.navigator && this.navigator.slider && !this.navigator.slider.hasOptionChanged("maximum") ? this.sessionVariables._axisXMax : this._axisXMax;
        if (!e(h)) {
          this.navigator.slider.hasOptionChanged("minimum") && (this._axisXMin = this.sessionVariables._axisXMin = this.navigator.slider.sessionVariables.minimum = this.navigator.slider.minimum = this.navigator.slider.options.minimum);
          this.navigator.slider.hasOptionChanged("maximum") && (this._axisXMax = this.sessionVariables._axisXMax =
            this.navigator.slider.sessionVariables.maximum = this.navigator.slider.maximum = this.navigator.slider.options.maximum);
          if (this._axisXMin < h.minimum || this._axisXMin > h.maximum) this._axisXMin = h.minimum;
          if (this._axisXMax < h.minimum || this._axisXMax > h.maximum) this._axisXMax = h.maximum
        }!e(h) && h.reversed ? this._syncCharts(this._axisXMax, this._axisXMin) : this._syncCharts(this._axisXMin, this._axisXMax)
      };
      G.prototype.setChartsLayout = function() {
        var d, e, k = 0,
          r = this.width;
        this.isPlotAreaSet = this.isDateTime = !1;
        for (var a =
            0; a < this.charts.length; a++) {
          d = this.charts[a];
          d._initialize();
          d.setLayout();
          e = {};
          if ((d.axisX[0] || d.axisX2[0]) && (d.axisY[0] || d.axisY2[0])) {
            var f = d.axisX[0] ? d.axisX[0].lineCoordinates : d.axisX2[0].lineCoordinates;
            if (d.axisY && 0 < d.axisY.length && d.axisY[0]) {
              var c = d.axisY[0];
              e.x1 = f.x1 < f.x2 ? f.x1 : c.lineCoordinates.x1;
              e.x2 = f.x2 > c.lineCoordinates.x2 ? f.x2 : c.lineCoordinates.x2
            }
            d.axisY2 && 0 < d.axisY2.length && d.axisY2[0] && (c = d.axisY2[0], e.x1 = f.x1 < f.x2 ? f.x1 : c.lineCoordinates.x1, e.x2 = f.x2 > c.lineCoordinates.x2 ? f.x2 : c.lineCoordinates.x2)
          }
          for (f =
            0; f < d.data.length; f++) "dateTime" === d.data[f].xValueType && (this.isDateTime = !0);
          k = Math.max(k, e.x1);
          r = Math.min(r, e.x2);
          d.sessionVariables.plotAreaBounds = e
        }
        this._chartsPlotAreaX1 = k;
        this._chartsPlotAreaX2 = r
      };
      G.prototype._updateSize = function() {
        return mb.call(this, [this.canvas, this.overlaidCanvas])
      };
      G.prototype._syncCharts = function(d, k) {
        for (var w = this, r = null, a = Math.min(d, k), f = Math.max(d, k), c = 0; c < this.charts.length; c++) {
          r = this.charts[c];
          r.toolTip && r.toolTip.enabled && r.toolTip.hide();
          for (var b = 0; b < r.axisX.length; b++) r.axisX[b].setViewPortRange(d,
            k), r.axisX[b].options.labelAngle = e(r.axisX[b].options.labelAngle) ? 0 : r.axisX[b].options.labelAngle, this.charts[c].axisX[b].crosshair && this.charts[c].axisX[b].crosshair.enabled && (this.charts[c].axisX[b].crosshair.options.updated || (this.charts[c].axisX[b].crosshair.options.updated = function(a) {
              for (var b = 0; b < w.charts.length; b++)
                if (w.charts[b] != a.chart)
                  for (var c = 0; c < w.charts[b].axisX.length; c++) w.charts[b].axisX[c].crosshair && w.charts[b].axisX[c].crosshair.showAt(a.value)
            }), this.charts[c].axisX[b].crosshair.options.hidden ||
            (this.charts[c].axisX[b].crosshair.options.hidden = function(a) {
              for (var b = 0; b < w.charts.length; b++)
                if (w.charts[b] != a.chart)
                  for (var c = 0; c < w.charts[b].axisX.length; c++) w.charts[b].axisX[c].crosshair && w.charts[b].axisX[c].crosshair.hide()
            }));
          for (b = 0; b < r.axisX2.length; b++) r.axisX2[b].setViewPortRange(d, k), r.axisX2[b].options.labelAngle = e(r.axisX2[b].options.labelAngle) ? 0 : r.axisX2[b].options.labelAngle, this.charts[c].axisX2[b].crosshair && this.charts[c].axisX2[b].crosshair.enabled && (this.charts[c].axisX2[b].crosshair.options.updated ||
            (this.charts[c].axisX2[b].crosshair.options.updated = function(a) {
              for (var b = 0; b < w.charts.length; b++)
                if (w.charts[b] != a.chart)
                  for (var c = 0; c < w.charts[b].axisX2.length; c++) w.charts[b].axisX2[c].crosshair && w.charts[b].axisX2[c].crosshair.showAt(a.value)
            }), this.charts[c].axisX2[b].crosshair.options.hidden || (this.charts[c].axisX2[b].crosshair.options.hidden = function(a) {
              for (var b = 0; b < w.charts.length; b++)
                if (w.charts[b] != a.chart)
                  for (var c = 0; c < w.charts[b].axisX2.length; c++) w.charts[b].axisX2[c].crosshair && w.charts[b].axisX2[c].crosshair.hide()
            }));
          r.options.toolbar ? r.options.toolbar = r.options.toolbar : w.options.toolbar && (r.options.toolbar = w.options.toolbar);
          r._initialize();
          r.setLayout();
          r.panEnabled = r.options.zoomEnabled && r.zoomEnabled ? !1 : !0;
          r.renderElements();
          (e(this.charts[c].options.toolTip) || !e(this.charts[c].options.toolTip) && e(this.charts[c].options.toolTip.updated)) && this.charts[c].toolTip && (this.charts[c].toolTip.updated = function(a) {
            for (var b = 0; b < w.charts.length; b++) w.charts[b] != a.chart && w.charts[b].toolTip.showAtX(a.entries[0].xValue,
              a.entries[0].dataSeriesIndex)
          });
          (e(this.charts[c].options.toolTip) || !e(this.charts[c].options.toolTip) && e(this.charts[c].options.toolTip.hidden)) && this.charts[c].toolTip && (this.charts[c].toolTip.hidden = function(a) {
            for (var b = 0; b < w.charts.length; b++) w.charts[b] != a.chart && w.charts[b].toolTip.hide()
          })
        }
        this.rangeSelector && (this.rangeSelector.enabled && this.rangeSelector.inputFields && this.rangeSelector.inputFields.enabled) && this.rangeSelector._updateInputFields(a, f);
        this.navigator && this.navigator.enabled &&
          this.navigator._updateSlider(a, f)
      };
      G.prototype.destroy = function() {
        for (var d = this.allDOMEventHandlers, e = 0; e < this.charts.length; e++) this.charts[e].destroy();
        this.navigator && this.navigator.enabled && this.navigator.chart.destroy();
        for (e = 0; e < d.length; e++) gb(d[e][0], d[e][1], d[e][2], d[e][3]);
        for (this.allDOMEventHandlers = []; this.navigator && this.navigator.enabled && this.navigator.panel.hasChildNodes();) this.navigator.panel.removeChild(this.navigator.panel.lastChild);
        for (; this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
        for (; this.container && this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
        this.container = this._canvasJSContainer = null;
        Da(this.canvas);
        Da(this.overlaidCanvas);
        this._eventManager && this._eventManager.ghostCanvas && Da(this._eventManager.ghostCanvas);
        this.navigator.panel = null;
        this.rangeSelector.panel = null
      };
      G.prototype.exportChart = function(d) {
        d = "undefined" === typeof d ? {} : d;
        var e = d.format ? d.format : "png",
          k = d.fileName ? d.fileName : this.exportFileName,
          r = this.canvas.cloneNode();
        r.setAttribute("class",
          r.getAttribute("class") + "-clone");
        var a = r.getContext("2d");
        a.drawImage(this.canvas, 0, 0);
        for (var f = [], c = 0; c < this.charts.length; c++) {
          var b = this.charts[c];
          f.push({
            canvas: b.canvas,
            position: {
              x: b.container.offsetLeft,
              y: b.container.offsetTop
            }
          });
          f.push({
            canvas: b.overlaidCanvas,
            position: {
              x: b.container.offsetLeft,
              y: b.container.offsetTop
            }
          })
        }
        this.navigator && this.navigator.enabled && (c = this.navigator, f.push({
          canvas: c.chart.canvas,
          position: {
            x: c.panel.offsetLeft,
            y: c.panel.offsetTop
          }
        }), f.push({
          canvas: c.chart.overlaidCanvas,
          position: {
            x: c.panel.offsetLeft,
            y: c.panel.offsetTop
          }
        }));
        for (c = 0; c < f.length; c++) a.drawImage(f[c].canvas, f[c].position.x * la, f[c].position.y * la);
        if (d.toDataURL) return r.toDataURL("image/" + e);
        db(r, e, k)
      };
      G.prototype.print = function() {
        var d = this.exportChart({
            toDataURL: !0
          }),
          e = document.createElement("iframe");
        e.setAttribute("class", "canvasjs-chart-print-frame");
        Q(e, {
          position: "absolute",
          width: "100%",
          border: 0,
          margin: 0,
          padding: 0
        });
        e.style.height = this.height + "px";
        this._canvasJSContainer.appendChild(e);
        var k = this,
          r = e.contentWindow || e.contentDocument.document || e.contentDocument;
        r.document.open();
        r.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + d + '"/><body/></html>');
        r.document.body && r.document.body.style && (r.document.body.style.margin = "0px 0px 0px 0px", r.document.body.style.padding = "0px 0px 0px 0px");
        r.document.close();
        setTimeout(function() {
          r.focus();
          r.print();
          setTimeout(function() {
            k._canvasJSContainer.removeChild(e)
          }, 1E3)
        }, 500)
      };
      G.prototype.getObjectAtXY = function(d, k, w) {
        w = null;
        if (!e(this.rangeSelector)) {
          for (var r =
              0; r < this.rangeSelector.buttons.length; r++) {
            var a = this.rangeSelector.buttons[r];
            d >= a.bounds.x1 && (d <= a.bounds.x2 && k >= a.bounds.y1 && k <= a.bounds.y2) && (w = a.id)
          }
          for (r = 0; r < this.rangeSelector.inputFields._textBlocks.length; r++) a = this.rangeSelector.inputFields._textBlocks[r], d >= a.bounds.x1 && (d <= a.bounds.x2 && k >= a.bounds.y1 && k <= a.bounds.y2) && (w = a.id)
        }
        return w
      };
      G.prototype._touchEventHandler = function(d) {
        if (d.changedTouches) {
          var k = [],
            w = d.changedTouches,
            r = w ? w[0] : d,
            a = null;
          switch (d.type) {
            case "touchstart":
            case "MSPointerDown":
              k = ["mousemove", "mousedown"];
              this._lastTouchData = Ba(r);
              this._lastTouchData.time = new Date;
              break;
            case "touchmove":
            case "MSPointerMove":
              k = ["mousemove"];
              break;
            case "touchend":
            case "MSPointerUp":
              var f = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                k = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup", "click"] : ["mouseup"];
              break;
            default:
              return
          }
          if (!(w && 1 < w.length)) {
            a = Ba(r);
            a.time = new Date;
            try {
              var c = a.y - this._lastTouchData.y,
                f = a.time - this._lastTouchData.time;
              if (1 < Math.abs(c) && this._lastTouchData.scroll || 5 < Math.abs(c) && 250 > f) this._lastTouchData.scroll = !0
            } catch (b) {}
            this._lastTouchEventType = d.type;
            if (this._lastTouchData && this._lastTouchData.scroll) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
            else
              for (w = 0; w < k.length; w++)
                if (a = k[w], c = document.createEvent("MouseEvent"), c.initMouseEvent(a, !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), r.target.dispatchEvent(c), this._lastTouchData && !e(this._lastTouchData.scroll) &&
                  !this._lastTouchData.scroll || this._lastTouchData && !this._lastTouchData.scroll && 250 < f || "click" === a) d.preventManipulation && d.preventManipulation(), d.preventDefault && d.cancelable && d.preventDefault()
          }
        }
      };
      G.prototype._mouseEventHandler = function(d) {
        "undefined" === typeof d.target && d.srcElement && (d.target = d.srcElement);
        var e = Ba(d),
          k = d.type,
          r, a;
        d.which ? a = 3 == d.which : d.button && (a = 2 == d.button);
        G.capturedEventParam && (r = G.capturedEventParam, "mouseup" === k && (G.capturedEventParam = null, r.stockChart.overlaidCanvas.releaseCapture ?
          r.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", r.stockChart._mouseEventHandler, !1)), r.hasOwnProperty(k) && ("mouseup" !== k || r.stockChart.overlaidCanvas.releaseCapture ? d.target !== r.stockChart.overlaidCanvas && u || r[k].call(r.context, e.x, e.y) : d.target !== r.stockChart.overlaidCanvas && (r.stockChart.isDrag = !1)));
        if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
        else if (d.preventManipulation && d.preventManipulation(), d.preventDefault && d.preventDefault(), Ma &&
          window.console && (window.console.log(k + " --\x3e x: " + e.x + "; y:" + e.y), a && window.console.log(d.which), "mouseup" === k && window.console.log("mouseup")), !a) {
          if (!G.capturedEventParam && this._events) {
            for (var f = 0; f < this._events.length; f++)
              if (this._events[f].hasOwnProperty(k))
                if (r = this._events[f], a = r.bounds, e.x >= a.x1 && e.x <= a.x2 && e.y >= a.y1 && e.y <= a.y2) {
                  r[k].call(r.context, e.x, e.y);
                  "mousedown" === k && !0 === r.capture ? (Chart.capturedEventParam = r, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup",
                    this._mouseEventHandler, !1)) : "mouseup" === k && (r.stockChart.overlaidCanvas.releaseCapture ? r.stockChart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                  break
                } else r = null;
            d.target.style.cursor = r && r.cursor ? r.cursor : this._defaultCursor
          }
          k = this.bounds;
          (e.x < k.x1 || e.x > k.x2 || e.y < k.y1 || e.y > k.y2) && this.resetOverlayedCanvas();
          !this.isDrag && this._eventManager && this._eventManager.mouseEventHandler(d)
        }
      };
      G.prototype.resetOverlayedCanvas = function() {
        this.overlaidCanvasCtx.clearRect(0,
          0, this.width, this.height)
      };
      G.prototype.clearCanvas = nb;
      G.prototype.getAutoFontSize = ob;
      ia(N, Ia);
      ia(F, Na);
      Ka.prototype.alignVerticalAxes = function() {
        if (!this.isNavigator && this.stockChart) {
          for (var d = this.sessionVariables.plotAreaBounds, e = this.stockChart._chartsPlotAreaX1 - d.x1, d = d.x2 - this.stockChart._chartsPlotAreaX2, k = 0; k < this.axisX.length; k++) this.axisX[k].lineCoordinates.x1 += e, this.axisX[k].lineCoordinates.x2 -= d, this.axisX[k].lineCoordinates.width = this.axisX[k].lineCoordinates.x2 - this.axisX[k].lineCoordinates.x1,
            this.axisX[k].bounds.x1 += e, this.axisX[k].bounds.x2 -= d, this.axisX[k].calculateValueToPixelConversionParameters();
          for (k = 0; k < this.axisX2.length; k++) this.axisX2[k].lineCoordinates.x1 += e, this.axisX2[k].lineCoordinates.x2 -= d, this.axisX2[k].lineCoordinates.width = this.axisX2[k].lineCoordinates.x2 - this.axisX2[k].lineCoordinates.x1, this.axisX2[k].bounds.x1 += e, this.axisX2[k].bounds.x2 -= d, this.axisX2[k].calculateValueToPixelConversionParameters();
          for (k = 0; k < this.axisY.length; k++) this.axisY[k].lineCoordinates.x1 +=
            e, this.axisY[k].lineCoordinates.x2 += e, this.axisY[k].bounds.x1 += e, this.axisY[k].bounds.x2 += e;
          for (k = 0; k < this.axisY2.length; k++) this.axisY2[k].lineCoordinates.x1 -= d, this.axisY2[k].lineCoordinates.x2 -= d, this.axisY2[k].bounds.x1 -= d, this.axisY2[k].bounds.x2 -= d
        }
      };
      Ka.prototype.syncCharts = function(d, k) {
        this.stockChart && (d = e(d) ? this.stockChart._axisXMin : d, k = e(k) ? this.stockChart._axisXMax : k, this.stockChart._syncCharts(d, k), this.stockChart.sessionVariables._axisXMin = d, this.stockChart.sessionVariables._axisXMax =
          k, this.stockChart.rangeSelector && "zoom" !== this._zoomButton.getAttribute("state") && this.stockChart.rangeSelector.resetRangeButtons())
      };
      M.prototype.reset = function() {
        this.lastObjectId = 0;
        this.objectMap = [];
        this.rectangularRegionEventSubscriptions = [];
        this.eventObjects = [];
        u && (this.ghostCtx.clearRect(0, 0, this.stockChart.width, this.stockChart.height), this.ghostCtx.beginPath())
      };
      M.prototype.getNewObjectTrackingId = function() {
        return ++this.lastObjectId
      };
      M.prototype.mouseEventHandler = function(d) {
        if ("mousemove" ===
          d.type || "click" === d.type) {
          var e = [],
            k = Ba(d),
            r = null;
          if ((r = this.stockChart.getObjectAtXY(k.x, k.y, !1)) && "undefined" !== typeof this.objectMap[r])
            if (r = this.objectMap[r], "rangeButton" === r.objectType) {
              var a = this.stockChart.rangeSelector.buttons[r.rangeButtonIndex];
              r.eventParameter = {
                x: k.x,
                y: k.y,
                rangeButton: a,
                rangeButtonIndex: r.rangeButtonIndex,
                stockChart: this.stockChart
              };
              r.eventContext = {
                context: this.stockChart.rangeSelector,
                userContext: a,
                mouseover: "mouseover",
                mousemove: "mousemove",
                mouseout: "mouseout",
                click: "click"
              };
              e.push(r)
            } else "inputFields" === r.objectType && (a = this.stockChart.rangeSelector.inputFields._textBlocks[r.inputFieldIndex], r.eventParameter = {
              x: k.x,
              y: k.y,
              inputField: a,
              inputFieldIndex: r.inputFieldIndex,
              stockChart: this.stockChart
            }, r.eventContext = {
              context: this.stockChart.rangeSelector,
              userContext: a,
              mouseover: "mouseover",
              mousemove: "mousemove",
              mouseout: "mouseout",
              click: "click"
            }, e.push(r));
          a = [];
          for (k = 0; k < this.mouseoveredObjectMaps.length; k++) {
            for (var f = !0, r = 0; r < e.length; r++)
              if (e[r].id === this.mouseoveredObjectMaps[k].id) {
                f = !1;
                break
              } f ? this.fireEvent(this.mouseoveredObjectMaps[k], "mouseout", d) : a.push(this.mouseoveredObjectMaps[k])
          }
          this.mouseoveredObjectMaps = a;
          for (k = 0; k < e.length; k++) {
            a = !1;
            for (r = 0; r < this.mouseoveredObjectMaps.length; r++)
              if (e[k].id === this.mouseoveredObjectMaps[r].id) {
                a = !0;
                break
              } a || (this.fireEvent(e[k], "mouseover", d), this.mouseoveredObjectMaps.push(e[k]));
            "click" === d.type ? this.fireEvent(e[k], "click", d) : "mousemove" === d.type && this.fireEvent(e[k], "mousemove", d)
          }
        }
      };
      M.prototype.fireEvent = function(d, e, k) {
        if (d &&
          e) {
          var r = d.eventParameter,
            a = d.eventContext,
            f = d.eventContext.userContext;
          f && (a && f[a[e]]) && f[a[e]].call(f, r);
          "mouseout" !== e ? f.cursor && f.cursor !== k.target.style.cursor && (k.target.style.cursor = f.cursor) : (k.target.style.cursor = this.stockChart._defaultCursor, delete d.eventParameter, delete d.eventContext)
        }
      };
      ia(z, Z);
      z.prototype._updateOptions = function() {
        this.updateOption("enabled");
        this.updateOption("backgroundColor");
        this.options.backgroundColor || (this.backgroundColor = this.stockChart.backgroundColor);
        this.updateOption("animationEnabled");
        this.animationEnabled = this.animationEnabled && u;
        this.updateOption("animationDuration");
        this.updateOption("theme");
        this.updateOption("verticalAlign");
        this.updateOption("horizontalAlign");
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("dynamicUpdate")
      };
      z.prototype._initialize = function() {
        this._updateOptions();
        var d;
        this.enabled && !this.panel && (this.panel = k("canvasjs-navigator-panel"), (d = !e(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel)) || this.stockChart._canvasJSContainer.appendChild(this.panel));
        d = !e(this.panel) && this.stockChart._canvasJSContainer.contains(this.panel);
        if (this.enabled) {
          this.height = this.options.height ? parseInt(this.options.height) : 0.14 * this.stockChart.height;
          d || this.stockChart._canvasJSContainer.appendChild(this.panel);
          var t = this.stockChart.layoutManager.getFreeSpace(),
            s = t.x1,
            r = t.y1;
          this.width = this.options.width ? this.width : t.width;
          "top" === this.verticalAlign ? (r = t.y1 + 2, d = "top") : (r = t.y2 - this.height - 2, d = "bottom");
          "left" === this.horizontalAlign ? s = t.x1 + 2 : "center" === this.horizontalAlign ?
            s = t.x1 + t.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (s = t.x2 - 2 - this.width);
          this.panel.style.top = r + "px";
          this.panel.style.left = s + "px";
          this.panel.style.height = this.height + "px";
          this.panel.style.width = this.width + "px";
          this.stockChart.layoutManager.registerSpace(d, {
            width: this.width,
            height: this.height + 2
          });
          this.bounds = {
            x1: s,
            y1: r,
            x2: s + this.width,
            y2: r + this.height
          }
        } else d && this.stockChart._canvasJSContainer.removeChild(this.panel)
      };
      z.prototype._updateSlider = function(d, k) {
        var s = this.chart.axisX && this.chart.axisX.length ?
          this.chart.axisX[0] : this.chart.axisX2[0];
        if (!e(s)) {
          var r = Math.max(s.bounds.x1, s.convertValueToPixel(s.reversed ? Math.max(d, Math.min(s.maximum, k)) : Math.min(d, Math.min(s.maximum, k)))),
            a = s.convertValueToPixel(s.reversed ? Math.min(d, Math.min(s.maximum, k)) : Math.max(d, Math.min(s.maximum, k)));
          this.slider.panel.style.left = r + "px";
          this.slider.left = r;
          this.slider.panel.style.width = a - r + "px";
          this.slider.width = a - r;
          this.slider.minimum = d;
          this.slider.maximum = k;
          this.chart.resetOverlayedCanvas();
          this.slider.maskInverted ?
            ea(this.chart.overlaidCanvasCtx, r, 0, a, this.height, this.slider.maskColor, 0, this.slider.outlineColor, 0, 0, 0, 0, this.slider.maskOpacity) : (ea(this.chart.overlaidCanvasCtx, s.bounds.x1, 0, r, this.height, this.slider.maskColor, 0, this.slider.outlineColor, !1, !1, !1, !1, this.slider.maskOpacity), ea(this.chart.overlaidCanvasCtx, a, 0, this.width, this.height, this.slider.maskColor, 0, this.slider.outlineColor, !1, !1, !1, !1, this.slider.maskOpacity));
          this.chart.overlaidCanvasCtx.lineWidth = this.slider.outlineThickness;
          this.chart.overlaidCanvasCtx.strokeStyle =
            this.slider.outlineColor;
          this.chart.overlaidCanvasCtx.save();
          this.chart.overlaidCanvasCtx.beginPath();
          0 < this.slider.outlineThickness && (this.slider.outlineInverted ? (this.chart.overlaidCanvasCtx.moveTo(s.bounds.x1, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness /
            2 << 0) + 0.5 : r, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.height - this.slider.outlineThickness)) : (this.chart.overlaidCanvasCtx.moveTo(s.bounds.x1, this.slider.outlineThickness /
            2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (r - this.slider.outlineThickness / 2 << 0) + 0.5 : r, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 === this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.height - this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(1 ===
            this.slider.outlineThickness % 2 ? (a - this.slider.outlineThickness / 2 << 0) + 0.5 : a, this.slider.outlineThickness / 2), this.chart.overlaidCanvasCtx.lineTo(this.width, this.slider.outlineThickness / 2)));
          this.chart.overlaidCanvasCtx.stroke();
          this.chart.overlaidCanvasCtx.restore();
          ea(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? r - this.slider.handleWidth / 2 << 0.5 : r - this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 -
            this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? r + this.slider.handleWidth / 2 << 0.5 : r + this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height / 2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, !1, !1, !1, !1, 1);
          ea(this.chart.overlaidCanvasCtx, 1 === this.slider.handleBorderThickness % 2 ? a - this.slider.handleWidth / 2 << 0.5 : a - this.slider.handleWidth / 2 <<
            0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 - this.slider.handleHeight / 2 << 0.5 : this.height / 2 - this.slider.handleHeight / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? a + this.slider.handleWidth / 2 << 0.5 : a + this.slider.handleWidth / 2 << 0, 1 === this.slider.handleBorderThickness % 2 ? this.height / 2 + this.slider.handleHeight / 2 << 0.5 : this.height / 2 + this.slider.handleHeight / 2 << 0, this.slider.handleColor, this.slider.handleBorderThickness, this.slider.handleBorderColor, !1, !1, !1, !1, 1);
          this.chart.overlaidCanvasCtx.lineWidth =
            this.slider.handleBorderThickness;
          this.chart.overlaidCanvasCtx.strokeStyle = this.slider.handleBorderColor;
          this.chart.overlaidCanvasCtx.save();
          this.chart.overlaidCanvasCtx.beginPath();
          this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (r - this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (r - this.slider.handleBorderThickness /
            2 << 0) + 0.5 : r) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (r + this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) + Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (r + this.slider.handleBorderThickness / 2 << 0) + 0.5 : r) + Math.round(this.slider.handleBorderThickness), this.height /
            2 + this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.moveTo((1 === this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (a - this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) - Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.moveTo((1 ===
            this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 - this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.lineTo((1 === this.slider.handleBorderThickness % 2 ? (a + this.slider.handleBorderThickness / 2 << 0) + 0.5 : a) + Math.round(this.slider.handleBorderThickness), this.height / 2 + this.slider.handleHeight / 4);
          this.chart.overlaidCanvasCtx.stroke();
          this.chart.overlaidCanvasCtx.restore()
        }
      };
      ia(O, Z);
      O.prototype._updateOptions =
        function() {
          this.updateOption("maskColor");
          this.updateOption("maskInverted");
          this.updateOption("maskOpacity");
          this.updateOption("handleColor");
          this.updateOption("handleBorderColor");
          this.updateOption("handleBorderThickness");
          this.updateOption("handleWidth");
          this.updateOption("handleHeight");
          this.updateOption("outlineColor");
          this.updateOption("outlineThickness");
          this.updateOption("outlineInverted");
          this.updateOption("minimum");
          this.updateOption("maximum")
        };
      O.prototype._attachEvents = function() {
        var d =
          this;
        A(this.panel, "mousedown", function(e) {
          d.stockChart.isDrag = !0;
          e.target !== d.leftHandle && e.target !== d.rightHandle && (d.stockChart.navigatorClicked = !0, d.currentHandle = d.leftHandle, d.panMode = !0, d.startPosition = Ba(e), e.target === d.currentHandle ? d.startPosition.x += d.currentHandle.offsetLeft + d.currentHandle.clientWidth / 2 + d.panel.offsetLeft : e.target === d.panel && (d.startPosition.x += d.panel.offsetLeft), d.startWidth = d.panel.clientWidth, d.startLeft = d.panel.offsetLeft)
        }, this.stockChart.allDOMEventHandlers);
        A(this.panel,
          window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart",
          function(e) {
            d.stockChart._touchEventHandler(e)
          }, this.stockChart.allDOMEventHandlers);
        A(this.navigator.panel, "mousedown", function(k) {
          if (k.target !== d.navigator.slider.panel && k.target !== d.leftHandle && k.target !== d.rightHandle) {
            d.stockChart.navigatorClicked = !0;
            var s = Ba(k),
              r, a;
            r = 0;
            var f = d.navigator.chart.axisX && d.navigator.chart.axisX.length ? d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
            k = d.navigator.slider.left;
            e(d.startLeft) && (d.startLeft =
              k);
            r = k + d.navigator.slider.width;
            a = s.x - (k + r) / 2;
            if (s.x < k || s.x > r) {
              var s = Math.max(0, k + a),
                c = Math.min(r + a, d.navigator.width);
              r + a > d.navigator.width && (r = r + a - d.navigator.width, s -= r);
              0 > k + a && (r = Math.abs(k + a), c += r);
              d.stockChart._rangeEventParameter = {
                stockChart: d.stockChart,
                source: "navigator",
                index: null,
                minimum: f.convertPixelToValue(s),
                maximum: f.convertPixelToValue(c)
              };
              d.stockChart.sessionVariables._axisXMin = f.convertPixelToValue(s);
              d.stockChart.sessionVariables._axisXMax = f.convertPixelToValue(c);
              d.navigator.dynamicUpdate ?
                (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(f.convertPixelToValue(s), f.convertPixelToValue(c)), d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)
            }
          }
        }, this.navigator.stockChart.allDOMEventHandlers);
        A(this.navigator.panel, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(e) {
          d.stockChart._touchEventHandler(e)
        }, this.navigator.stockChart.allDOMEventHandlers);
        A(this.navigator.stockChart.container, "mousemove", function(k) {
          var s = d.navigator.chart.axisX && d.navigator.chart.axisX.length ? d.navigator.chart.axisX[0] : d.navigator.chart.axisX2[0];
          if (!e(d.currentHandle) && d.startPosition) {
            d.navigator.chart.overlaidCanvas.style.cursor = d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor =
              "ew-resize";
            var r;
            r = d.currentHandle === d.leftHandle ? 1 : -1;
            var a = Ba(k);
            k = k.target || k.srcElement;
            a.x = k === d.currentHandle ? a.x + (d.currentHandle.offsetLeft + d.currentHandle.clientWidth / 2 + d.panel.offsetLeft) : k === d.mask || k === d.panel ? a.x + d.panel.offsetLeft : k === d.rightHandle && d.currentHandle === d.leftHandle ? a.x + (d.rightHandle.offsetLeft + d.rightHandle.clientWidth / 2 + d.panel.offsetLeft) : k === d.leftHandle && d.currentHandle === d.rightHandle ? a.x + d.panel.offsetLeft : a.x + ("canvasjs-chart-toolbar" === k.parentElement.className ?
              k.offsetParent.offsetLeft + k.offsetLeft - d.stockChart._chartsPlotAreaX1 : k.parentElement.parentElement.parentElement === d.navigator.panel ? k.offsetLeft : k.offsetLeft - d.stockChart._chartsPlotAreaX1);
            var f = a.x - d.startPosition.x;
            if (0 !== f) {
              k = d.panel.offsetLeft;
              var c = d.panel.clientWidth;
              0 < r && (k = Math.max(d.startLeft + r * f, d._left));
              d.panMode || (c = Math.min(d.startWidth - r * f, d.fullWidth), r * f > d.startWidth ? (k = 0 < r ? d.startLeft + d.startWidth : Math.max(a.x, d._left), c = (0 < r ? a.x : d.startLeft) - parseFloat(k)) : 0 > r && (k = d.startLeft));
              k + c <= d._left + d.fullWidth && (2 < Math.abs(d.startLeft - k) || 2 < Math.abs(d.startWidth - parseFloat(c))) && (0 < r && (d.left = k, d.panel.style.left = d.left + "px"), d.panMode || (d.panel.style.width = d.width = c + "px"), e(s) || (r = s.convertPixelToValue(Math.max(s.bounds.x1, parseFloat(k))), s = s.convertPixelToValue(parseFloat(k) + parseFloat(c)), d.stockChart.sessionVariables._axisXMin = r, d.stockChart.sessionVariables._axisXMax = s, d.stockChart.rangeSelector && !d.panMode && d.stockChart.rangeSelector.resetRangeButtons(), d.stockChart._rangeEventParameter = {
                stockChart: d.stockChart,
                source: "navigator",
                index: null,
                minimum: r,
                maximum: s
              }, d.navigator.dynamicUpdate ? (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart), d.stockChart._syncCharts(r, s), d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart)) : d.navigator._updateSlider(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax)))
            }
          } else d.navigator.chart.overlaidCanvas.style.cursor =
            d.navigator.chart.container.style.cursor = d.navigator.panel.style.cursor = "auto"
        }, this.navigator.stockChart.allDOMEventHandlers);
        A(this.navigator.stockChart.container, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(e) {
          d.stockChart._touchEventHandler(e)
        }, this.navigator.stockChart.allDOMEventHandlers)
      };
      O.prototype._initialize = function() {
        var d = this,
          k;
        this._updateOptions();
        aa && (this.eventsAttached || (this._attachEvents(), this.eventsAttached = !0), this.handleWidth = this.options.handleWidth ?
          this.handleWidth : 8, this.handleHeight = this.options.handleHeight ? Math.min(this.navigator.height, this.options.handleHeight) : 0.25 * this.navigator.height, this.leftHandle ? Q(this.leftHandle, {
            height: this.navigator.height + "px",
            width: this.handleWidth + 10 + "px",
            position: "absolute",
            left: "-" + (this.handleWidth / 2 + 8) + "px",
            top: 0,
            cursor: "ew-resize",
            borderStyle: "solid",
            borderWidth: this.handleBorderThickness + "px",
            borderColor: "transparent",
            outline: "none",
            padding: 0,
            backgroundColor: "transparent",
            color: "transparent",
            fontSize: "12px",
            fontFamily: "Arial",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            opacity: 1,
            zIndex: 999
          }) : (this.leftHandle = E("button", "canvasjs-slider-handle", "button"), this.leftHandle.innerHTML = "||", Q(this.leftHandle, {
            height: this.navigator.height + "px",
            width: this.handleWidth + 10 + "px",
            position: "absolute",
            left: "-" + (this.handleWidth / 2 + 8) + "px",
            top: 0,
            cursor: "ew-resize",
            borderStyle: "solid",
            borderWidth: this.handleBorderThickness + "px",
            borderColor: "transparent",
            outline: "none",
            padding: 0,
            backgroundColor: "transparent",
            color: "transparent",
            fontSize: "12px",
            fontFamily: "Arial",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            opacity: 1,
            zIndex: 999
          }), this.panel.appendChild(this.leftHandle), this.initHandle(this.leftHandle, 1)), this.rightHandle ? Q(this.rightHandle, {
            height: this.navigator.height + "px",
            width: this.handleWidth + 10 + "px",
            position: "absolute",
            right: "-" + (this.handleWidth / 2 + 8) + "px",
            top: 0,
            cursor: "ew-resize",
            borderStyle: "solid",
            borderWidth: this.handleBorderThickness + "px",
            borderColor: "transparent",
            outline: "none",
            padding: "0px",
            backgroundColor: "transparent",
            color: "transparent",
            fontSize: "12px",
            fontFamily: "Arial",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            opacity: 1,
            zIndex: "999"
          }) : (this.rightHandle = E("button", "canvasjs-slider-handle", "button"), this.rightHandle.innerHTML = "||", Q(this.rightHandle, {
            height: this.navigator.height + "px",
            width: this.handleWidth + 10 + "px",
            position: "absolute",
            right: "-" + (this.handleWidth / 2 + 8) + "px",
            top: 0,
            cursor: "ew-resize",
            borderStyle: "solid",
            borderWidth: this.handleBorderThickness +
              "px",
            borderColor: "transparent",
            outline: "none",
            padding: "0px",
            backgroundColor: "transparent",
            color: "transparent",
            fontSize: "12px",
            fontFamily: "Arial",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            opacity: 1,
            zIndex: "999"
          }), this.panel.appendChild(this.rightHandle), this.initHandle(this.rightHandle, -1)), Q(this.panel, {
            position: "absolute",
            height: this.navigator.height + "px",
            width: "100%",
            cursor: "move"
          }), this.fullWidth = this.panel.clientWidth, this._left = this.navigator.panel.offsetLeft,
          A(document, "mousedown", function(e) {
            if (d.stockChart.rangeSelector && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled)
              for (var k = 0; k < d.stockChart.rangeSelector.inputFields.elements.length; k++) e.target != d.stockChart.rangeSelector.inputFields.elements[k] && d.stockChart.rangeSelector.inputFields.elements[k].focused && d.stockChart.rangeSelector.inputFields.elements[k].blur()
          }, this.navigator.stockChart.allDOMEventHandlers), A(document, window.navigator.msPointerEnabled ? "MSPointerDown" :
            "touchstart",
            function(d) {
              a: {
                var e = d.changedTouches,
                  e = e ? e[0] : d,
                  a = "";
                switch (d.type) {
                  case "touchstart":
                  case "MSPointerDown":
                    a = "mousedown";
                    break;
                  case "touchmove":
                  case "MSPointerMove":
                    a = "mousemove";
                    break;
                  case "touchend":
                  case "MSPointerUp":
                    a = "mouseup";
                    break;
                  default:
                    break a
                }
                d = document.createEvent("MouseEvent");d.initMouseEvent(a, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null);e.target.dispatchEvent(d)
              }
            }, this.navigator.stockChart.allDOMEventHandlers), A(document, "mouseup", function(s) {
            d.panMode = !1;
            d.navigator.stockChart.isDrag = !1;
            if (d.stockChart.navigatorClicked) {
              s = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
              var r = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
              e(d.stockChart._rangeEventParameter) && (d.stockChart._rangeEventParameter = {
                stockChart: d.stockChart,
                source: "navigator",
                index: null,
                minimum: s,
                maximum: r
              });
              if (2 < Math.abs(d.startLeft - d.left) || 2 < Math.abs(d.startWidth - parseFloat(d.width))) {
                d.navigator.dynamicUpdate ||
                  (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging", d.stockChart._rangeEventParameter, d.stockChart));
                for (var a = 0; a < d.stockChart.charts.length; a++) {
                  k = d.stockChart.charts[a];
                  k.toolTip && k.toolTip.enabled && k.toolTip.hide();
                  for (var f = 0; f < k.axisX.length; f++) k.axisX[f].setViewPortRange(s, r);
                  for (f = 0; f < k.axisX2.length; f++) k.axisX2[f].setViewPortRange(s, r);
                  k.render()
                }
                d.stockChart.rangeSelector && (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields &&
                  d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(s, r);
                d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart))
              }
            }
            d.stockChart.navigatorClicked = d.currentHandle = d.startPosition = d.startWidth = d.startLeft = null
          }, this.navigator.stockChart.allDOMEventHandlers), A(document, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(s) {
            d.panMode = !1;
            d.navigator.stockChart.isDrag = !1;
            if (d.stockChart.navigatorClicked) {
              s = Math.min(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
              var r = Math.max(d.stockChart.sessionVariables._axisXMin, d.stockChart.sessionVariables._axisXMax);
              e(d.stockChart._rangeEventParameter) && (d.stockChart._rangeEventParameter = {
                stockChart: d.stockChart,
                source: "navigator",
                index: null,
                minimum: s,
                maximum: r
              });
              d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanging", d.stockChart.dispatchEvent("rangeChanging",
                d.stockChart._rangeEventParameter, d.stockChart));
              for (var a = 0; a < d.stockChart.charts.length; a++) {
                k = d.stockChart.charts[a];
                k.toolTip && k.toolTip.enabled && k.toolTip.hide();
                for (var f = 0; f < k.axisX.length; f++) k.axisX[f].setViewPortRange(s, r);
                for (f = 0; f < k.axisX2.length; f++) k.axisX2[f].setViewPortRange(s, r);
                k.render()
              }
              d.stockChart.rangeSelector && (d.stockChart.rangeSelector.enabled && d.stockChart.rangeSelector.inputFields && d.stockChart.rangeSelector.inputFields.enabled) && d.stockChart.rangeSelector._updateInputFields(s,
                r);
              d.navigator.dynamicUpdate || (d.stockChart._rangeEventParameter.type = "rangeChanged", d.stockChart.dispatchEvent("rangeChanged", d.stockChart._rangeEventParameter, d.stockChart))
            }
            d.stockChart.navigatorClicked = d.currentHandle = d.startPosition = d.startWidth = d.startLeft = null
          }, this.navigator.stockChart.allDOMEventHandlers))
      };
      O.prototype.initHandle = function(d, e) {
        var k = this;
        d && (A(d, "mousedown", function(d) {
          k.stockChart.navigatorClicked = !0;
          k.currentHandle = this;
          k.startPosition = Ba(d);
          d.target === k.currentHandle ?
            k.startPosition.x += k.currentHandle.offsetLeft + k.currentHandle.clientWidth / 2 + k.panel.offsetLeft : d.target === k.panel && (k.startPosition.x += k.panel.offsetLeft);
          k.startWidth = k.panel.clientWidth;
          k.startLeft = k.panel.offsetLeft;
          d.preventDefault && d.preventDefault();
          d.stopPropagation && d.stopPropagation()
        }, this.navigator.stockChart.allDOMEventHandlers), A(d, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(d) {
          k.stockChart._touchEventHandler(d)
        }, this.navigator.stockChart.allDOMEventHandlers))
      };
      ia(S, Z);
      S.prototype._updateOptions = function() {
        this.updateOption("enabled");
        this.updateOption("verticalAlign");
        this.updateOption("horizontalAlign");
        this.updateOption("width");
        this.updateOption("height");
        this.updateOption("label");
        this.updateOption("selectedRangeButtonIndex")
      };
      S.prototype._initialize = function() {
        var d = 0;
        this._updateOptions();
        this._label = {};
        this.buttons = [];
        if (aa && this.enabled) {
          if (this.options.buttons)
            for (var k = 0; k < this.options.buttons.length; k++) this.buttons.push(new P(this.stockChart,
              k, this.options.buttons[k]));
          else {
            for (k = 0; 6 > k; k++) this.buttons.push(new P(this.stockChart, k));
            this.buttonLabels = "1m 3m 6m YTD 1y All".split(" ")
          }
          this._wrapElements = !1;
          var s = this.stockChart.layoutManager.getFreeSpace(),
            r = s.x1,
            k = s.y1;
          this.width = this.options.width ? this.width : s.width;
          e(this.buttonStyle.options.labelFontSize) && (this.buttonStyle.labelFontSize = this.stockChart.getAutoFontSize(this.buttonStyle.labelFontSize));
          this.rangeButtonsWidth = 0;
          this.buttonStyle.maxWidth = this.buttonStyle.options.maxWidth ?
            this.buttonStyle.options.maxWidth : this.stockChart.width / this.buttons.length;
          if (this.buttons && 0 < this.buttons.length) {
            var a = new oa(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: this.stockChart.backgroundColor,
              borderThickness: 0,
              cornerRadius: 0,
              maxWidth: 0.2 * this.stockChart.width,
              maxHeight: 2 * this.buttonStyle.labelFontSize,
              angle: 0,
              padding: {
                left: 5,
                right: 5,
                top: 2,
                bottom: 2
              },
              text: e(this.stockChart.options.culture) || e(this.stockChart._cultureInfo.rangeSelector.rangeText) ? this.label : this.stockChart._cultureInfo.rangeSelector.rangeText,
              horizontalAlign: "left",
              fontSize: this.buttonStyle.labelFontSize,
              fontFamily: this.buttonStyle.labelFontFamily,
              fontWeight: this.buttonStyle.labelFontWeight,
              fontColor: this.buttonStyle.labelFontColor,
              fontStyle: this.buttonStyle.labelFontStyle,
              textBaseline: "middle"
            });
            this._label.textBlock = a
          }
          for (k = 0; k < this.buttons.length; k++) {
            var f = this.buttons[k];
            f._index = k;
            a = new oa(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: this.buttonStyle.backgroundColor,
              borderColor: this.buttonStyle.borderColor,
              borderThickness: this.buttonStyle.borderThickness,
              cornerRadius: 0,
              maxWidth: this.buttonStyle.options.width ? this.buttonStyle.width : this.buttonStyle.maxWidth,
              maxHeight: 2 * this.buttonStyle.labelFontSize,
              angle: 0,
              padding: this.buttonStyle.padding,
              text: this.options.buttons && this.options.buttons.length ? e(f.label) ? "" : f.label : this.buttonLabels[k],
              horizontalAlign: "center",
              textAlign: "center",
              fontSize: this.buttonStyle.labelFontSize,
              fontFamily: this.buttonStyle.labelFontFamily,
              fontWeight: this.buttonStyle.labelFontWeight,
              fontColor: this.buttonStyle.labelFontColor,
              fontStyle: this.buttonStyle.labelFontStyle,
              textBaseline: "middle"
            });
            f.state = e(this.selectedRangeButtonIndex) || this.selectedRangeButtonIndex !== k ? "off" : "on";
            f.textBlock = a;
            f.bounds = {
              x1: null,
              x2: null,
              y1: null,
              y2: null,
              width: null,
              height: null
            };
            a.measureText();
            this.rangeButtonsWidth += a.width + this.buttonStyle.spacing;
            this.rangeButtonsHeight = a.height;
            d = d < a.height ? a.height : d;
            f = this.buttons[k];
            f.id = ++this.stockChart._eventManager.lastObjectId;
            this.stockChart._eventManager.objectMap[f.id] = {
              id: f.id,
              objectType: "rangeButton",
              rangeButtonIndex: k
            }
          }
          this.height <
            this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness && (this.height = this.inputFieldsHeight + 2 * this.inputFields.style.borderThickness);
          this.height < d + 2 * this.buttonStyle.borderThickness + 5 && (this.height = d + 2 * this.buttonStyle.borderThickness + 5);
          this._label && (this._label.textBlock && this.rangeButtonsWidth && this.inputFieldsWidth) && this.rangeButtonsWidth + this._label.textBlock.measureText().width + this.inputFieldsWidth >= this.stockChart.width && (this.height = this.options.height ? this.height : 2 * this.height,
            this._wrapElements = !0);
          "bottom" === this.verticalAlign ? (k = s.y2 - this.height, d = "bottom") : (k = s.y1, d = "top");
          "left" === this.horizontalAlign ? r = s.x1 + 2 : "center" === this.horizontalAlign ? r = s.x1 + s.width / 2 - this.width / 2 : "right" === this.horizontalAlign && (r = s.x2 - 2 - this.width);
          this.stockChart.layoutManager.registerSpace(d, {
            width: this.width,
            height: this.height
          });
          this.bounds = {
            x1: r,
            y1: k,
            x2: r + this.width,
            y2: k + this.height,
            width: this.width,
            height: this.height
          };
          for (k = 0; k < this.buttons.length; k++) this.buttons[k]._initialize(k)
        }
      };
      S.prototype.render = function() {
        var d;
        this.setButtonsLayout();
        ea(this.ctx, this.bounds.x1, this.bounds.y1, this.bounds.x2, this.bounds.y2, this.stockChart.backgroundColor, 0, null, 0, 0, 0, 0, 1);
        this._label && this._label.textBlock && this._label.textBlock.render(!0);
        for (d = 0; d < this.buttons.length; d++) this.buttons[d].enabled || (this.buttons[d].textBlock.backgroundColor = this.buttons[d].backgroundColorDisabled, this.buttons[d].textBlock.borderColor = this.buttons[d].backgroundColorDisabled), this.buttons[d].render(!0);
        this.inputFields &&
          this.inputFields.enabled && this.renderInputFields(!0)
      };
      S.prototype.setButtonsLayout = function() {
        var d, e, k = this.bounds.x1 + 5,
          r, a;
        this._label && (this._label.textBlock && 0 < this.buttons.length) && (this._label.textBlock.x = k, this._label.textBlock.y = a = this.bounds.y1 + this._label.textBlock.measureText().height / 2 + 2 * this.buttons[0].textBlock.borderThickness, this._label.bounds = {
          x1: k,
          y1: a - this._label.textBlock.fontSize / 2,
          x2: k + this._label.textBlock.measureText().width,
          y2: a + this._label.textBlock.measureText().height,
          width: this._label.textBlock.measureText().width,
          height: this._label.textBlock.measureText().height
        }, k += this._label.bounds.width);
        for (d = 0; d < this.buttons.length; d++) e = this.buttons[d], e.textBlock.width = e.textBlock.maxWidth = this.buttonStyle.width = this.buttonStyle.options.width ? this.buttonStyle.width : e.textBlock.width, r = k + e.textBlock.width, e.textBlock.x = e.bounds.x1 = 1 === e.textBlock.borderThickness % 2 ? (k << 0) + 0.5 : k, e.bounds.x2 = r, a = 1 === e.textBlock.borderThickness % 2 ? this.bounds.y1 + e.textBlock.height / 2 + 2 * e.textBlock.borderThickness <<
          0.5 : this.bounds.y1 + e.textBlock.height / 2 + 2 * e.textBlock.borderThickness, e.textBlock.y = a, e.bounds.y1 = a - e.textBlock.height / 2, e.bounds.y2 = e.bounds.y1 + e.textBlock.height, e.bounds.width = r - k, e.bounds.height = e.bounds.y2 - e.bounds.y1, k = r + this.buttonStyle.spacing, e.textBlock.maxWidth = this.buttonStyle.maxWidth
      };
      S.prototype.resetRangeButtons = function() {
        for (var d = 0; d < this.buttons.length; d++) this.buttons[d].enabled && (this.buttons[d].state = "off", this.buttons[d].textBlock.backgroundColor = this.buttonStyle.backgroundColor,
          this.buttons[d].textBlock.fontColor = this.buttonStyle.labelFontColor, this.buttons[d].textBlock.fontWeight = this.buttonStyle.labelFontWeight, this.buttons[d].textBlock.render(!0))
      };
      S.prototype.renderInputFields = function() {
        this.inputFields._textBlocks[0].text = "dateTime" === this.inputFields.valueType && isFinite(this.inputFields.startValue) ? fa(this.inputFields.startValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : ba(this.inputFields.startValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo);
        this.inputFields._textBlocks[1].text = "dateTime" === this.inputFields.valueType && isFinite(this.inputFields.endValue) ? fa(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo) : ba(this.inputFields.endValue, this.inputFields.valueFormatString, this.stockChart._cultureInfo);
        this.inputFields._labels[0].text = e(this.stockChart._cultureInfo.rangeSelector.fromText) ? "From" : this.stockChart._cultureInfo.rangeSelector.fromText;
        this.inputFields._labels[1].text = e(this.stockChart._cultureInfo.rangeSelector.toText) ?
          "To" : this.stockChart._cultureInfo.rangeSelector.toText;
        var d = 0,
          k = !0;
        if (this.stockChart.title && this.stockChart.title.text && ("top" === this.stockChart.title.verticalAlign || "right" === this.stockChart.title.horizontalAlign && "center" === this.stockChart.title.verticalAlign && this.stockChart.exportEnabled) || "bottom" === this.verticalAlign) k = !1;
        if (this.stockChart.subtitles)
          for (var s = 0; s < this.stockChart.subtitles.length; s++) this.stockChart.subtitles[s] && (this.stockChart.subtitles[s].text && ("top" === this.stockChart.subtitles[s].verticalAlign ||
            "right" === this.stockChart.subtitles[s].horizontalAlign && "center" === this.stockChart.subtitles[s].verticalAlign && this.stockChart.exportEnabled)) && (k = !1);
        for (s = this.inputFields._textBlocks.length - 1; 0 <= s; s--) {
          var r = this.inputFields._textBlocks[s],
            a = r.measureText();
          r._width = this.inputFields.style.options.width ? this.inputFields.style.width : Math.abs(a.width - r._width) <= ("dateTime" === this.inputFields.valueType ? 10 : 5) ? r._width : a.width + 10;
          d += r._width + this.inputFields.style.spacing;
          this.inputFields.elements[s].style.width =
            r._width - this.inputFields.style.spacing - 2 * this.inputFields.style.borderThickness - 5 + "px";
          r.x = r.bounds.x1 = 1 === r.borderThickness % 2 ? (this.bounds.x2 - d - (this.stockChart.exportEnabled && k ? 40 : 0) << 0) + 0.5 : this.bounds.x2 - d - (this.stockChart.exportEnabled && k ? 40 : 0);
          r.bounds.x2 = r.bounds.x1 + r._width;
          this.inputFields.elements[s].style.left = this.bounds.x2 - d - (this.stockChart.exportEnabled && k ? 40 : 0) + this.inputFields.style.borderThickness + "px";
          d += this.inputFields._labels[s].measureText().width;
          this.inputFields._labels[s].x =
            this.inputFields._labels[s].bounds.x1 = this.bounds.x2 - d - (this.stockChart.exportEnabled && k ? 40 : 0);
          this.inputFields._labels[s].bounds.x2 = this.inputFields._labels[s].bounds.x1 + this.inputFields._labels[s].measureText().width;
          r.width = r._width;
          r.y = 1 === r.borderThickness % 2 ? (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * r.borderThickness << 0.5 : (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * r.borderThickness;
          this.inputFields._labels[s].y =
            (this._wrapElements ? this.bounds.y1 + this.rangeButtonsHeight + 10 : this.bounds.y1) + a.height / 2 + 2 * r.borderThickness;
          r.bounds.y1 = this.inputFields._labels[s].bounds.y1 = r.y - a.height / 2 + 2 * r.borderThickness;
          r.bounds.y2 = this.inputFields._labels[s].bounds.y2 = r.bounds.y1 + a.height;
          this.inputFields.elements[s].style.top = this.inputFields._labels[s].bounds.y1 + "px";
          r.render(!0);
          this.inputFields._labels[s].render(!0)
        }
      };
      S.prototype._updateInputFields = function(d, e) {
        !this.inputFields.elements[0].focused && isFinite(d) && (this.inputFields.elements[0].value =
          "dateTime" === this.inputFields.valueType ? fa(d, "YYYY-MM-DD") : ba(d, this.inputFields.valueFormatString));
        !this.inputFields.elements[1].focused && isFinite(e) && (this.inputFields.elements[1].value = "dateTime" === this.inputFields.valueType ? fa(e, "YYYY-MM-DD") : ba(e, this.inputFields.valueFormatString));
        for (var k = 0; k < this.inputFields.elements.length; k++) this.inputFields.elements[k].focused && this.inputFields.elements[k].focus();
        this.inputFields.startValue = d;
        this.inputFields.endValue = e;
        this.render()
      };
      ia(P, Z);
      P.prototype._updateOptions =
        function() {
          this.updateOption("style");
          this.updateOption("label");
          this.updateOption("range");
          this.updateOption("rangeType")
        };
      P.prototype._initialize = function(d) {
        this._updateOptions();
        var k = "1m 3m 6m YTD 1y All".split(" "),
          s = [1, 3, 6, null, 1, null],
          r = "month month month ytd year all".split(" ");
        this.range = "undefined" !== typeof this.options.range ? this.range : e(s[d]) ? null : s[d];
        this.rangeType = "undefined" !== typeof this.options.rangeType ? this.rangeType : r[d];
        this.label = this.textBlock.text = e(this.options.label) ?
          k[d] : this.label
      };
      P.prototype.render = function() {
        this.textBlock.render(!0)
      };
      ia(V, Z);
      V.prototype._updateOptions = function() {
        this.updateOption("enabled");
        this.updateOption("startValue");
        this.updateOption("endValue");
        this.updateOption("valueType");
        this.updateOption("valueFormatString")
      };
      V.prototype._initialize = function() {
        this._updateOptions();
        e(this.style.options.fontSize) && (this.style.fontSize = this.stockChart.getAutoFontSize(this.style.fontSize));
        if (this.enabled) {
          for (var d = 0; d < this.elements.length; d++) this.elements[d].style.position =
            "absolute", this.elements[d].style.display = this.elements[d].focused ? "inline" : "none", this.elements[d].style.backgroundColor = this.style.backgroundColor, this.elements[d].style.border = "none", this.elements[d].style.outline = "none", this.elements[d].style.outlineOffset = 0, this.elements[d].style.textAlign = "center", this.elements[d].style.color = this.style.fontColor, this.elements[d].style.fontSize = this.elements[d].style.height = this.style.fontSize + "px", this.elements[d].style.fontStyle = this.style.fontStyle, this.elements[d].style.fontFamily =
            this.style.fontFamily, this.elements[d].style.fontWeight = this.style.fontWeight, this.elements[d].style.lineHeight = 1, isNaN(this.style.padding) ? (this.elements[d].style.paddingTop = this.style.padding.top + "px", this.elements[d].style.paddingRight = this.style.padding.right + "px", this.elements[d].style.paddingBottom = this.style.padding.bottom + "px", this.elements[d].style.paddingLeft = this.style.padding.left + "px") : this.elements[d].style.padding = this.style.padding + "px", this.elements[d].style.mozAppearance = this.elements[d].style.webkitAppearance =
            this.elements[d].style.appearance = "none", this.elements[d].style.webkitBorderRadius = 0, this.elements[d].style.mozBorderRadius = 0, this.elements[d].style.borderRadius = 0, this.elements[d].style.boxSizing = "content-box";
          this.parent = this.rangeSelector = this.stockChart.rangeSelector
        }
      };
      ia(W, Z);
      W.prototype._updateOptions = function() {
        this.updateOption("backgroundColor");
        this.updateOption("backgroundColorOnHover");
        this.updateOption("backgroundColorOnSelect");
        this.updateOption("borderColor");
        this.updateOption("borderThickness");
        this.updateOption("labelFontColor");
        this.updateOption("labelFontColorOnHover");
        this.updateOption("labelFontSize");
        this.updateOption("labelFontStyle");
        this.updateOption("labelFontFamily");
        this.updateOption("labelFontWeight");
        this.updateOption("width");
        this.updateOption("maxWidth");
        this.updateOption("padding");
        this.updateOption("spacing");
        this.updateOption("cursor")
      };
      ia(X, Z);
      X.prototype._updateOptions = function() {
        this.updateOption("backgroundColor");
        this.updateOption("borderColor");
        this.updateOption("borderThickness");
        this.updateOption("borderColorOnFocus");
        this.updateOption("fontColor");
        this.updateOption("fontSize");
        this.updateOption("fontStyle");
        this.updateOption("fontFamily");
        this.updateOption("fontWeight");
        this.updateOption("width");
        this.updateOption("maxWidth");
        this.updateOption("padding");
        this.updateOption("spacing");
        this.updateOption("cursor")
      };
      return G
    }();
    W.version = "v1.7.1 GA";
    window.CanvasJS && (W && (!window.CanvasJS.StockChart && window.CanvasJS.Chart) && (window.CanvasJS.StockChart = W), W && !window.CanvasJS.Chart &&
      (window.CanvasJS.Chart = Ka, window.CanvasJS.StockChart = W))
  })();
  
  document.createElement("canvas").getContext || function() {
    function V() {
      return this.context_ || (this.context_ = new C(this))
    }
  
    function W(a, b, c) {
      var g = M.call(arguments, 2);
      return function() {
        return a.apply(b, g.concat(M.call(arguments)))
      }
    }
  
    function N(a) {
      return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
  
    function O(a) {
      a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
      a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
      a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }
  
    function X(a) {
      var b = a.srcElement;
      switch (a.propertyName) {
        case "width":
          b.getContext().clearRect();
          b.style.width = b.attributes.width.nodeValue + "px";
          b.firstChild.style.width = b.clientWidth + "px";
          break;
        case "height":
          b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
            "px"
      }
    }
  
    function Y(a) {
      a = a.srcElement;
      a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }
  
    function D() {
      return [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]
    }
  
    function t(a, b) {
      for (var c = D(), g = 0; 3 > g; g++)
        for (var e = 0; 3 > e; e++) {
          for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
          c[g][e] = f
        }
      return c
    }
  
    function P(a, b) {
      b.fillStyle = a.fillStyle;
      b.lineCap = a.lineCap;
      b.lineJoin = a.lineJoin;
      b.lineWidth = a.lineWidth;
      b.miterLimit = a.miterLimit;
      b.shadowBlur = a.shadowBlur;
      b.shadowColor = a.shadowColor;
      b.shadowOffsetX =
        a.shadowOffsetX;
      b.shadowOffsetY = a.shadowOffsetY;
      b.strokeStyle = a.strokeStyle;
      b.globalAlpha = a.globalAlpha;
      b.font = a.font;
      b.textAlign = a.textAlign;
      b.textBaseline = a.textBaseline;
      b.arcScaleX_ = a.arcScaleX_;
      b.arcScaleY_ = a.arcScaleY_;
      b.lineScale_ = a.lineScale_
    }
  
    function Q(a) {
      var b = a.indexOf("(", 3),
        c = a.indexOf(")", b + 1),
        b = a.substring(b + 1, c).split(",");
      if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
      return b
    }
  
    function E(a, b, c) {
      return Math.min(c, Math.max(b, a))
    }
  
    function F(a, b, c) {
      0 > c && c++;
      1 < c && c--;
      return 1 > 6 * c ? a + 6 * (b - a) * c :
        1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }
  
    function G(a) {
      if (a in H) return H[a];
      var b, c = 1;
      a = String(a);
      if ("#" == a.charAt(0)) b = a;
      else if (/^rgb/.test(a)) {
        c = Q(a);
        b = "#";
        for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
        c = +c[3]
      } else if (/^hsl/.test(a)) {
        e = c = Q(a);
        b = parseFloat(e[0]) / 360 % 360;
        0 > b && b++;
        g = E(parseFloat(e[1]) / 100, 0, 1);
        e = E(parseFloat(e[2]) / 100, 0, 1);
        if (0 == g) g = e = b = e;
        else {
          var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
            d = 2 * e - f;
          g = F(d, f, b + 1 / 3);
          e = F(d, f, b);
          b = F(d, f, b - 1 / 3)
        }
        b = "#" +
          v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
        c = c[3]
      } else b = Z[a] || a;
      return H[a] = {
        color: b,
        alpha: c
      }
    }
  
    function C(a) {
      this.m_ = D();
      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = [];
      this.fillStyle = this.strokeStyle = "#000";
      this.lineWidth = 1;
      this.lineJoin = "miter";
      this.lineCap = "butt";
      this.miterLimit = 1 * q;
      this.globalAlpha = 1;
      this.font = "10px sans-serif";
      this.textAlign = "left";
      this.textBaseline = "alphabetic";
      this.canvas = a;
      var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
        c = a.ownerDocument.createElement("div");
      c.style.cssText = b;
      a.appendChild(c);
      b = c.cloneNode(!1);
      b.style.backgroundColor = "red";
      b.style.filter = "alpha(opacity=0)";
      a.appendChild(b);
      this.element_ = c;
      this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }
  
    function R(a, b, c, g) {
      a.currentPath_.push({
        type: "bezierCurveTo",
        cp1x: b.x,
        cp1y: b.y,
        cp2x: c.x,
        cp2y: c.y,
        x: g.x,
        y: g.y
      });
      a.currentX_ = g.x;
      a.currentY_ = g.y
    }
  
    function S(a, b) {
      var c = G(a.strokeStyle),
        g = c.color,
        c = c.alpha * a.globalAlpha,
        e = a.lineScale_ * a.lineWidth;
      1 > e && (c *= e);
      b.push("<g_vml_:stroke",
        ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }
  
    function T(a, b, c, g) {
      var e = a.fillStyle,
        f = a.arcScaleX_,
        d = a.arcScaleY_,
        k = g.x - c.x,
        n = g.y - c.y;
      if (e instanceof w) {
        var h = 0,
          l = g = 0,
          u = 0,
          m = 1;
        if ("gradient" == e.type_) {
          h = e.x1_ / f;
          c = e.y1_ / d;
          var p = s(a, e.x0_ / f, e.y0_ / d),
            h = s(a, h, c),
            h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
          0 > h && (h += 360);
          1E-6 > h && (h = 0)
        } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
          n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
        f = e.colors_;
        f.sort(function(a, b) {
          return a.offset - b.offset
        });
        d = f.length;
        p = f[0].color;
        c = f[d - 1].color;
        k = f[0].alpha * a.globalAlpha;
        a = f[d - 1].alpha * a.globalAlpha;
        for (var n = [], r = 0; r < d; r++) {
          var t = f[r];
          n.push(t.offset * m + u + " " + t.color)
        }
        b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
      } else e instanceof
      I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }
  
    function s(a, b, c) {
      a = a.m_;
      return {
        x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
        y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
      }
    }
  
    function z(a, b, c) {
      isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
        b[1][0]))))
    }
  
    function w(a) {
      this.type_ = a;
      this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
      this.colors_ = []
    }
  
    function I(a, b) {
      if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
      if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
      switch (b) {
        case "repeat":
        case null:
        case "":
          this.repetition_ = "repeat";
          break;
        case "repeat-x":
        case "repeat-y":
        case "no-repeat":
          this.repetition_ = b;
          break;
        default:
          throw new A("SYNTAX_ERR");
      }
      this.src_ = a.src;
      this.width_ = a.width;
      this.height_ = a.height
    }
  
    function A(a) {
      this.code = this[a];
      this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
      k = x.round,
      J = x.sin,
      K = x.cos,
      ba = x.abs,
      aa = x.sqrt,
      q = 10,
      r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
      init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a))
      },
      init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++) this.initElement(a[b])
      },
      initElement: function(a) {
        if (!a.getContext) {
          a.getContext =
            V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
        }
        return a
      }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
      for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      },
      H = {},
      L = {},
      $ = {
        butt: "flat",
        round: "round"
      },
      d = C.prototype;
    d.clearRect = function() {
      this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
      this.element_.innerHTML = ""
    };
    d.beginPath = function() {
      this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({
        type: "moveTo",
        x: c.x,
        y: c.y
      });
      this.currentX_ = c.x;
      this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
      var c = s(this, a, b);
      this.currentPath_.push({
        type: "lineTo",
        x: c.x,
        y: c.y
      });
      this.currentX_ = c.x;
      this.currentY_ = c.y
    };
    d.bezierCurveTo =
      function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e)
      };
    d.quadraticCurveTo = function(a, b, c, g) {
      a = s(this, a, b);
      c = s(this, c, g);
      g = {
        x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
        y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
      };
      R(this, g, {
        x: g.x + (c.x - this.currentX_) / 3,
        y: g.y + (c.y - this.currentY_) / 3
      }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
      c *= q;
      var d = f ? "at" : "wa",
        k = a + K(g) * c - r,
        n = b + J(g) * c - r;
      g = a + K(e) * c - r;
      e = b + J(e) * c - r;
      k != g || f || (k += 0.125);
      a = s(this, a, b);
      k = s(this, k, n);
      g = s(this, g, e);
      this.currentPath_.push({
        type: d,
        x: a.x,
        y: a.y,
        radius: c,
        xStart: k.x,
        yStart: k.y,
        xEnd: g.x,
        yEnd: g.y
      })
    };
    d.rect = function(a, b, c, g) {
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a + c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.stroke();
      this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
      var e = this.currentPath_;
      this.beginPath();
      this.moveTo(a, b);
      this.lineTo(a + c, b);
      this.lineTo(a +
        c, b + g);
      this.lineTo(a, b + g);
      this.closePath();
      this.fill();
      this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
      var e = new w("gradient");
      e.x0_ = a;
      e.y0_ = b;
      e.x1_ = c;
      e.y1_ = g;
      return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
      var d = new w("gradientradial");
      d.x0_ = a;
      d.y0_ = b;
      d.r0_ = c;
      d.x1_ = g;
      d.y1_ = e;
      d.r1_ = f;
      return d
    };
    d.drawImage = function(a, b) {
      var c, g, e, d, r, y, n, h;
      e = a.runtimeStyle.width;
      d = a.runtimeStyle.height;
      a.runtimeStyle.width = "auto";
      a.runtimeStyle.height = "auto";
      var l = a.width,
        u = a.height;
      a.runtimeStyle.width =
        e;
      a.runtimeStyle.height = d;
      if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
      else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
      else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
      else throw Error("Invalid number of arguments");
      var m = s(this, c, g),
        p = [];
      p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
        10, "px;height:", 10, "px;position:absolute;");
      if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
        var t = [];
        t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
        var v = s(this, c + e, g),
          w = s(this, c, g + d);
        c = s(this, c + e, g + d);
        m.x = x.max(m.x, v.x, w.x, c.x);
        m.y = x.max(m.y, v.y, w.y, c.y);
        p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
      } else p.push("top:",
        k(m.y / q), "px;left:", k(m.x / q), "px;");
      p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
      this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
      var b = [];
      b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
        ' stroked="', !a, '"', ' path="');
      for (var c = {
          x: null,
          y: null
        }, d = {
          x: null,
          y: null
        }, e = 0; e < this.currentPath_.length; e++) {
        var f = this.currentPath_[e];
        switch (f.type) {
          case "moveTo":
            b.push(" m ", k(f.x), ",", k(f.y));
            break;
          case "lineTo":
            b.push(" l ", k(f.x), ",", k(f.y));
            break;
          case "close":
            b.push(" x ");
            f = null;
            break;
          case "bezierCurveTo":
            b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
            break;
          case "at":
          case "wa":
            b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
              f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
        }
        if (f) {
          if (null == c.x || f.x < c.x) c.x = f.x;
          if (null == d.x || f.x > d.x) d.x = f.x;
          if (null == c.y || f.y < c.y) c.y = f.y;
          if (null == d.y || f.y > d.y) d.y = f.y
        }
      }
      b.push(' ">');
      a ? T(this, b, c, d) : S(this, b);
      b.push("</g_vml_:shape>");
      this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
      this.stroke(!0)
    };
    d.closePath = function() {
      this.currentPath_.push({
        type: "close"
      })
    };
    d.save = function() {
      var a = {};
      P(this, a);
      this.aStack_.push(a);
      this.mStack_.push(this.m_);
      this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
      this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
      z(this, t([
        [1, 0, 0],
        [0, 1, 0],
        [a, b, 1]
      ], this.m_), !1)
    };
    d.rotate = function(a) {
      var b = K(a);
      a = J(a);
      z(this, t([
        [b, a, 0],
        [-a, b, 0],
        [0, 0, 1]
      ], this.m_), !1)
    };
    d.scale = function(a, b) {
      this.arcScaleX_ *= a;
      this.arcScaleY_ *= b;
      z(this, t([
        [a, 0, 0],
        [0, b, 0],
        [0, 0, 1]
      ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
      z(this, t([
        [a,
          b, 0
        ],
        [c, d, 0],
        [e, f, 1]
      ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
      z(this, [
        [a, b, 0],
        [c, d, 0],
        [e, f, 1]
      ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
      var f = this.m_;
      d = 0;
      var r = 1E3,
        t = 0,
        n = [],
        h;
      h = this.font;
      if (L[h]) h = L[h];
      else {
        var l = document.createElement("div").style;
        try {
          l.font = h
        } catch (u) {}
        h = L[h] = {
          style: l.fontStyle || "normal",
          variant: l.fontVariant || "normal",
          weight: l.fontWeight || "normal",
          size: l.fontSize || 10,
          family: l.fontFamily || "sans-serif"
        }
      }
      var l = h,
        m = this.element_;
      h = {};
      for (var p in l) h[p] = l[p];
      p = parseFloat(m.currentStyle.fontSize);
      m = parseFloat(l.size);
      "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
      h.size *= 0.981;
      p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
      m = this.element_.currentStyle;
      l = this.textAlign.toLowerCase();
      switch (l) {
        case "left":
        case "center":
        case "right":
          break;
        case "end":
          l = "ltr" == m.direction ? "right" : "left";
          break;
        case "start":
          l = "rtl" == m.direction ? "right" :
            "left";
          break;
        default:
          l = "left"
      }
      switch (this.textBaseline) {
        case "hanging":
        case "top":
          t = h.size / 1.75;
          break;
        case "middle":
          break;
        default:
        case null:
        case "alphabetic":
        case "ideographic":
        case "bottom":
          t = -h.size / 2.25
      }
      switch (l) {
        case "right":
          d = 1E3;
          r = 0.05;
          break;
        case "center":
          d = r = 500
      }
      b = s(this, b + 0, c + t);
      n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
      e ? S(this, n) : T(this, n, {
        x: -d,
        y: 0
      }, {
        x: r,
        y: h.size
      });
      e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
      b = k(b.x / q) + "," + k(b.y / q);
      n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
      this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
      this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
      b, c, d) {
      this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
      this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
      var b = this.element_.ownerDocument;
      this.textMeasureEl_.innerHTML = "";
      this.textMeasureEl_.style.font = this.font;
      this.textMeasureEl_.appendChild(b.createTextNode(a));
      return {
        width: this.textMeasureEl_.offsetWidth
      }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
      return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
      b = G(b);
      this.colors_.push({
        offset: a,
        color: b.color,
        alpha: b.alpha
      })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
      13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
  }();
  /*tslint:enable*/
  /*eslint-enable*/
  /*jshint ignore:end*/
  