!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define('ReactDropdownTreeSelect', ['react'], t)
    : 'object' == typeof exports
    ? (exports.ReactDropdownTreeSelect = t(require('react')))
    : (e.ReactDropdownTreeSelect = t(e.React))
})(this, function(e) {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 25))
    )
  })([
    function(e, t, n) {
      e.exports = n(12)()
    },
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      var r
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function() {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var a = typeof r
              if ('string' === a || 'number' === a) e.push((this && this[r]) || r)
              else if (Array.isArray(r)) e.push(o.apply(this, r))
              else if ('object' === a) for (var i in r) n.call(r, i) && r[i] && e.push((this && this[i]) || i)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function() {
                return o
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      var r = n(1),
        o = /-([a-z])/g,
        a = /^--[a-zA-Z0-9-]+$|^[^-]+$/
      var i = r.version.split('.')[0] >= 16
      e.exports = {
        PRESERVE_CUSTOM_ATTRIBUTES: i,
        camelCase: function(e) {
          if ('string' != typeof e) throw new TypeError('First argument must be a string')
          return a.test(e)
            ? e
            : e.toLowerCase().replace(o, function(e, t) {
                return t.toUpperCase()
              })
        },
        invertObject: function(e, t) {
          if (!e || 'object' != typeof e) throw new TypeError('First argument must be an object')
          var n,
            r,
            o = 'function' == typeof t,
            a = {},
            i = {}
          for (n in e)
            (r = e[n]), o && (a = t(n, r)) && 2 === a.length ? (i[a[0]] = a[1]) : 'string' == typeof r && (i[r] = n)
          return i
        },
        isCustomComponent: function(e, t) {
          if (-1 === e.indexOf('-')) return t && 'string' == typeof t.is
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1
            default:
              return !0
          }
        },
      }
    },
    function(e, t, n) {
      'use strict'
      for (var r, o = n(24).CASE_SENSITIVE_TAG_NAMES, a = {}, i = 0, l = o.length; i < l; i++)
        (r = o[i]), (a[r.toLowerCase()] = r)
      function s(e) {
        for (var t, n = {}, r = 0, o = e.length; r < o; r++) n[(t = e[r]).name] = t.value
        return n
      }
      function c(e) {
        var t = (function(e) {
          return a[e]
        })((e = e.toLowerCase()))
        return t || e
      }
      e.exports = {
        formatAttributes: s,
        formatDOM: function e(t, n, r) {
          n = n || null
          for (var o, a, i, l = [], u = 0, d = t.length; u < d; u++) {
            switch (
              ((o = t[u]),
              (i = { next: null, prev: l[u - 1] || null, parent: n }),
              (a = l[u - 1]) && (a.next = i),
              '#' !== o.nodeName[0] &&
                ((i.name = c(o.nodeName)),
                (i.attribs = {}),
                o.attributes && o.attributes.length && (i.attribs = s(o.attributes))),
              o.nodeType)
            ) {
              case 1:
                'script' === i.name || 'style' === i.name ? (i.type = i.name) : (i.type = 'tag'),
                  (i.children = e(o.childNodes, i))
                break
              case 3:
                ;(i.type = 'text'), (i.data = o.nodeValue)
                break
              case 8:
                ;(i.type = 'comment'), (i.data = o.nodeValue)
            }
            l.push(i)
          }
          return (
            r &&
              (l.unshift({
                name: r.substring(0, r.indexOf(' ')).toLowerCase(),
                data: r,
                type: 'directive',
                next: l[0] ? l[0] : null,
                prev: null,
                parent: n,
              }),
              l[1] && (l[1].prev = l[0])),
            l
          )
        },
        isIE: function(e) {
          return e ? document.documentMode === e : /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)
        },
      }
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      var r
      ;(r = function(e) {
        return (function(e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var o = (t[r] = { exports: {}, id: r, loaded: !1 })
            return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
          }
          return (n.m = e), (n.c = t), (n.p = ''), n(0)
        })([
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
                },
              o = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                    ;(r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r)
                  }
                }
                return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t
                }
              })(),
              a = function(e, t, n) {
                for (var r = !0; r; ) {
                  var o = e,
                    a = t,
                    i = n
                  ;(r = !1), null === o && (o = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(o, a)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var s = l.get
                    if (void 0 === s) return
                    return s.call(i)
                  }
                  var c = Object.getPrototypeOf(o)
                  if (null === c) return
                  ;(e = c), (t = a), (n = i), (r = !0), (l = c = void 0)
                }
              }
            function i(e) {
              return e && e.__esModule ? e : { default: e }
            }
            var l = n(8),
              s = i(l),
              c = i(n(6)),
              u = i(n(2)),
              d = n(1),
              h = (function(e) {
                function t(e) {
                  !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                  })(this, t),
                    a(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                    (this.state = {
                      showLoader: !1,
                      lastScrollTop: 0,
                      actionTriggered: !1,
                      pullToRefreshThresholdBreached: !1,
                    }),
                    (this.startY = 0),
                    (this.currentY = 0),
                    (this.dragging = !1),
                    (this.maxPullDownDistance = 0),
                    (this.onScrollListener = this.onScrollListener.bind(this)),
                    (this.throttledOnScrollListener = (0, u.default)(this.onScrollListener, 150).bind(this)),
                    (this.onStart = this.onStart.bind(this)),
                    (this.onMove = this.onMove.bind(this)),
                    (this.onEnd = this.onEnd.bind(this)),
                    (this.getScrollableTarget = this.getScrollableTarget.bind(this))
                }
                return (
                  (function(e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
                    ;(e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                  })(t, l.Component),
                  o(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        if (
                          ((this._scrollableNode = this.getScrollableTarget()),
                          (this.el = this.props.height ? this._infScroll : this._scrollableNode || window),
                          this.el.addEventListener('scroll', this.throttledOnScrollListener),
                          'number' == typeof this.props.initialScrollY &&
                            this.el.scrollHeight > this.props.initialScrollY &&
                            this.el.scrollTo(0, this.props.initialScrollY),
                          this.props.pullDownToRefresh &&
                            (this.el.addEventListener('touchstart', this.onStart),
                            this.el.addEventListener('touchmove', this.onMove),
                            this.el.addEventListener('touchend', this.onEnd),
                            this.el.addEventListener('mousedown', this.onStart),
                            this.el.addEventListener('mousemove', this.onMove),
                            this.el.addEventListener('mouseup', this.onEnd),
                            (this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height),
                            this.forceUpdate(),
                            'function' != typeof this.props.refreshFunction))
                        )
                          throw new Error(
                            'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                          )
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.el.removeEventListener('scroll', this.throttledOnScrollListener),
                          this.props.pullDownToRefresh &&
                            (this.el.removeEventListener('touchstart', this.onStart),
                            this.el.removeEventListener('touchmove', this.onMove),
                            this.el.removeEventListener('touchend', this.onEnd),
                            this.el.removeEventListener('mousedown', this.onStart),
                            this.el.removeEventListener('mousemove', this.onMove),
                            this.el.removeEventListener('mouseup', this.onEnd))
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        ;(this.props.key === e.key && this.props.dataLength === e.dataLength) ||
                          this.setState({ showLoader: !1, actionTriggered: !1, pullToRefreshThresholdBreached: !1 })
                      },
                    },
                    {
                      key: 'getScrollableTarget',
                      value: function() {
                        return this.props.scrollableTarget instanceof HTMLElement
                          ? this.props.scrollableTarget
                          : 'string' == typeof this.props.scrollableTarget
                          ? document.getElementById(this.props.scrollableTarget)
                          : (null === this.props.scrollableTarget &&
                              console.warn(
                                'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                              ),
                            null)
                      },
                    },
                    {
                      key: 'onStart',
                      value: function(e) {
                        this.state.lastScrollTop ||
                          ((this.dragging = !0),
                          (this.startY = e.pageY || e.touches[0].pageY),
                          (this.currentY = this.startY),
                          (this._infScroll.style.willChange = 'transform'),
                          (this._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'))
                      },
                    },
                    {
                      key: 'onMove',
                      value: function(e) {
                        this.dragging &&
                          ((this.currentY = e.pageY || e.touches[0].pageY),
                          this.currentY < this.startY ||
                            (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold &&
                              this.setState({ pullToRefreshThresholdBreached: !0 }),
                            this.currentY - this.startY > 1.5 * this.maxPullDownDistance ||
                              ((this._infScroll.style.overflow = 'visible'),
                              (this._infScroll.style.transform =
                                'translate3d(0px, ' + (this.currentY - this.startY) + 'px, 0px)'))))
                      },
                    },
                    {
                      key: 'onEnd',
                      value: function(e) {
                        var t = this
                        ;(this.startY = 0),
                          (this.currentY = 0),
                          (this.dragging = !1),
                          this.state.pullToRefreshThresholdBreached &&
                            this.props.refreshFunction &&
                            this.props.refreshFunction(),
                          requestAnimationFrame(function() {
                            t._infScroll &&
                              ((t._infScroll.style.overflow = 'auto'),
                              (t._infScroll.style.transform = 'none'),
                              (t._infScroll.style.willChange = 'none'))
                          })
                      },
                    },
                    {
                      key: 'isElementAtBottom',
                      value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0.8 : arguments[1],
                          n =
                            e === document.body || e === document.documentElement
                              ? window.screen.availHeight
                              : e.clientHeight,
                          r = (0, d.parseThreshold)(t)
                        return r.unit === d.ThresholdUnits.Pixel
                          ? e.scrollTop + n >= e.scrollHeight - r.value
                          : e.scrollTop + n >= (r.value / 100) * e.scrollHeight
                      },
                    },
                    {
                      key: 'onScrollListener',
                      value: function(e) {
                        var t = this
                        'function' == typeof this.props.onScroll &&
                          setTimeout(function() {
                            return t.props.onScroll(e)
                          }, 0)
                        var n =
                          this.props.height || this._scrollableNode
                            ? e.target
                            : document.documentElement.scrollTop
                            ? document.documentElement
                            : document.body
                        this.state.actionTriggered ||
                          (this.isElementAtBottom(n, this.props.scrollThreshold) &&
                            this.props.hasMore &&
                            (this.setState({ actionTriggered: !0, showLoader: !0 }), this.props.next()),
                          this.setState({ lastScrollTop: n.scrollTop }))
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = r(
                            { height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' },
                            this.props.style
                          ),
                          n = this.props.hasChildren || !(!this.props.children || !this.props.children.length),
                          o = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
                        return s.default.createElement(
                          'div',
                          { style: o },
                          s.default.createElement(
                            'div',
                            {
                              className: 'infinite-scroll-component ' + (this.props.className || ''),
                              ref: function(t) {
                                return (e._infScroll = t)
                              },
                              style: t,
                            },
                            this.props.pullDownToRefresh &&
                              s.default.createElement(
                                'div',
                                {
                                  style: { position: 'relative' },
                                  ref: function(t) {
                                    return (e._pullDown = t)
                                  },
                                },
                                s.default.createElement(
                                  'div',
                                  {
                                    style: {
                                      position: 'absolute',
                                      left: 0,
                                      right: 0,
                                      top: -1 * this.maxPullDownDistance,
                                    },
                                  },
                                  !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
                                  this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
                                )
                              ),
                            this.props.children,
                            !this.state.showLoader && !n && this.props.hasMore && this.props.loader,
                            this.state.showLoader && this.props.hasMore && this.props.loader,
                            !this.props.hasMore && this.props.endMessage
                          )
                        )
                      },
                    },
                  ]),
                  t
                )
              })()
            ;(t.default = h),
              (h.defaultProps = {
                pullDownToRefreshContent: s.default.createElement('h3', null, 'Pull down to refresh'),
                releaseToRefreshContent: s.default.createElement('h3', null, 'Release to refresh'),
                pullDownToRefreshThreshold: 100,
                disableBrowserPullToRefresh: !0,
              }),
              (h.propTypes = {
                next: c.default.func,
                hasMore: c.default.bool,
                children: c.default.node,
                loader: c.default.node.isRequired,
                scrollThreshold: c.default.oneOfType([c.default.number, c.default.string]),
                endMessage: c.default.node,
                style: c.default.object,
                height: c.default.number,
                scrollableTarget: c.default.node,
                hasChildren: c.default.bool,
                pullDownToRefresh: c.default.bool,
                pullDownToRefreshContent: c.default.node,
                releaseToRefreshContent: c.default.node,
                pullDownToRefreshThreshold: c.default.number,
                refreshFunction: c.default.func,
                onScroll: c.default.func,
                dataLength: c.default.number.isRequired,
                key: c.default.string,
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.parseThreshold = function(e) {
                if ('number' == typeof e) return { unit: n.Percent, value: 100 * e }
                if ('string' == typeof e)
                  return e.match(/^(\d*(\.\d+)?)px$/)
                    ? { unit: n.Pixel, value: parseFloat(e) }
                    : e.match(/^(\d*(\.\d+)?)%$/)
                    ? { unit: n.Percent, value: parseFloat(e) }
                    : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), r)
                return console.warn('scrollThreshold should be string or number'), r
              })
            var n = { Pixel: 'Pixel', Percent: 'Percent' }
            t.ThresholdUnits = n
            var r = { unit: n.Percent, value: 0.8 }
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t, n) {
                var r, o
                return (
                  t || (t = 250),
                  function() {
                    var a = n || this,
                      i = +new Date(),
                      l = arguments
                    r && i < r + t
                      ? (clearTimeout(o),
                        (o = setTimeout(function() {
                          ;(r = i), e.apply(a, l)
                        }, t)))
                      : ((r = i), e.apply(a, l))
                  }
                )
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            function n(e) {
              return function() {
                return e
              }
            }
            var r = function() {}
            ;(r.thatReturns = n),
              (r.thatReturnsFalse = n(!1)),
              (r.thatReturnsTrue = n(!0)),
              (r.thatReturnsNull = n(null)),
              (r.thatReturnsThis = function() {
                return this
              }),
              (r.thatReturnsArgument = function(e) {
                return e
              }),
              (e.exports = r)
          },
          function(e, t, n) {
            'use strict'
            var r = function(e) {}
            e.exports = function(e, t, n, o, a, i, l, s) {
              if ((r(t), !e)) {
                var c
                if (void 0 === t)
                  c = new Error(
                    'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                  )
                else {
                  var u = [n, o, a, i, l, s],
                    d = 0
                  ;(c = new Error(
                    t.replace(/%s/g, function() {
                      return u[d++]
                    })
                  )).name = 'Invariant Violation'
                }
                throw ((c.framesToPop = 1), c)
              }
            }
          },
          function(e, t, n) {
            'use strict'
            var r = n(3),
              o = n(4),
              a = n(7)
            e.exports = function() {
              function e(e, t, n, r, i, l) {
                l !== a &&
                  o(
                    !1,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
              }
              function t() {
                return e
              }
              e.isRequired = e
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
              }
              return (n.checkPropTypes = r), (n.PropTypes = n), n
            }
          },
          function(e, t, n) {
            e.exports = n(5)()
          },
          function(e, t) {
            'use strict'
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
          },
          function(t, n) {
            t.exports = e
          },
        ])
      }),
        (e.exports = r(n(1)))
    },
    function(e, t, n) {
      var r = n(14),
        o = n(22),
        a = { decodeEntities: !0, lowerCaseAttributeNames: !1 }
      function i(e, t) {
        if ('string' != typeof e) throw new TypeError('First argument must be a string')
        return r(o(e, a), t)
      }
      ;(i.domToReact = r), (i.htmlToDOM = o), (e.exports = i)
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e, t) {
        var n = e.filter(t)
        return 0 !== n.length && n.length !== e.length
      }
    },
    function(e, t, n) {
      'use strict'
      var r = n(13)
      function o() {}
      function a() {}
      ;(a.resetWarningCache = o),
        (e.exports = function() {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          }
          return (n.PropTypes = n), n
        })
    },
    function(e, t, n) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(e, t, n) {
      var r = n(1),
        o = n(15),
        a = n(5),
        i = r.cloneElement,
        l = r.createElement,
        s = r.isValidElement
      function c(e) {
        return a.PRESERVE_CUSTOM_ATTRIBUTES && 'tag' === e.type && a.isCustomComponent(e.name, e.attribs)
      }
      e.exports = function e(t, n) {
        for (var r, a, u, d, h = [], p = 'function' == typeof (n = n || {}).replace, f = 0, g = t.length; f < g; f++)
          if (((r = t[f]), p && ((a = n.replace(r)), s(a)))) g > 1 && (a = i(a, { key: a.key || f })), h.push(a)
          else if ('text' !== r.type) {
            if (((u = r.attribs), c(r) || (u = o(r.attribs)), (d = null), 'script' === r.type || 'style' === r.type))
              r.children[0] && (u.dangerouslySetInnerHTML = { __html: r.children[0].data })
            else {
              if ('tag' !== r.type) continue
              'textarea' === r.name && r.children[0]
                ? (u.defaultValue = r.children[0].data)
                : r.children && r.children.length && (d = e(r.children, n))
            }
            g > 1 && (u.key = f), h.push(l(r.name, u, d))
          } else h.push(r.data)
        return 1 === h.length ? h[0] : h
      }
    },
    function(e, t, n) {
      var r = n(16),
        o = n(20),
        a = n(5),
        i = a.camelCase,
        l = r.html,
        s = r.svg,
        c = r.isCustomAttribute,
        u = Object.prototype.hasOwnProperty
      e.exports = function(e) {
        var t, n, r, d
        e = e || {}
        var h = {}
        for (t in e)
          (r = e[t]),
            c(t)
              ? (h[t] = r)
              : ((n = t.toLowerCase()),
                u.call(l, n)
                  ? (h[(d = l[n]).propertyName] = !!(d.hasBooleanValue || (d.hasOverloadedBooleanValue && !r)) || r)
                  : u.call(s, t)
                  ? (h[(d = s[t]).propertyName] = r)
                  : a.PRESERVE_CUSTOM_ATTRIBUTES && (h[t] = r))
        return (
          null != e.style &&
            (h.style = (function(e) {
              if ('string' != typeof e) throw new TypeError('First argument must be a string.')
              var t = {}
              return (
                o(e, function(e, n) {
                  e && n && (t[i(e)] = n)
                }),
                t
              )
            })(e.style)),
          h
        )
      }
    },
    function(e, t, n) {
      var r = n(17),
        o = n(18),
        a = n(19),
        i = a.MUST_USE_PROPERTY,
        l = a.HAS_BOOLEAN_VALUE,
        s = a.HAS_NUMERIC_VALUE,
        c = a.HAS_POSITIVE_NUMERIC_VALUE,
        u = a.HAS_OVERLOADED_BOOLEAN_VALUE
      function d(e, t) {
        return (e & t) === t
      }
      function h(e, t, n) {
        var r,
          o,
          a,
          h = e.Properties,
          p = e.DOMAttributeNames
        for (o in h)
          (r = p[o] || (n ? o : o.toLowerCase())),
            (a = h[o]),
            (t[r] = {
              attributeName: r,
              propertyName: o,
              mustUseProperty: d(a, i),
              hasBooleanValue: d(a, l),
              hasNumericValue: d(a, s),
              hasPositiveNumericValue: d(a, c),
              hasOverloadedBooleanValue: d(a, u),
            })
      }
      var p = {}
      h(r, p)
      var f = {}
      h(o, f, !0)
      var g = {}
      h(r, g), h(o, g, !0)
      e.exports = {
        html: p,
        svg: f,
        properties: g,
        isCustomAttribute: RegExp.prototype.test.bind(
          new RegExp(
            '^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
          )
        ),
      }
    },
    function(e, t) {
      e.exports = {
        Properties: {
          autoFocus: 4,
          accept: 0,
          acceptCharset: 0,
          accessKey: 0,
          action: 0,
          allowFullScreen: 4,
          allowTransparency: 0,
          alt: 0,
          as: 0,
          async: 4,
          autoComplete: 0,
          autoPlay: 4,
          capture: 4,
          cellPadding: 0,
          cellSpacing: 0,
          charSet: 0,
          challenge: 0,
          checked: 5,
          cite: 0,
          classID: 0,
          className: 0,
          cols: 24,
          colSpan: 0,
          content: 0,
          contentEditable: 0,
          contextMenu: 0,
          controls: 4,
          controlsList: 0,
          coords: 0,
          crossOrigin: 0,
          data: 0,
          dateTime: 0,
          default: 4,
          defer: 4,
          dir: 0,
          disabled: 4,
          download: 32,
          draggable: 0,
          encType: 0,
          form: 0,
          formAction: 0,
          formEncType: 0,
          formMethod: 0,
          formNoValidate: 4,
          formTarget: 0,
          frameBorder: 0,
          headers: 0,
          height: 0,
          hidden: 4,
          high: 0,
          href: 0,
          hrefLang: 0,
          htmlFor: 0,
          httpEquiv: 0,
          icon: 0,
          id: 0,
          inputMode: 0,
          integrity: 0,
          is: 0,
          keyParams: 0,
          keyType: 0,
          kind: 0,
          label: 0,
          lang: 0,
          list: 0,
          loop: 4,
          low: 0,
          manifest: 0,
          marginHeight: 0,
          marginWidth: 0,
          max: 0,
          maxLength: 0,
          media: 0,
          mediaGroup: 0,
          method: 0,
          min: 0,
          minLength: 0,
          multiple: 5,
          muted: 5,
          name: 0,
          nonce: 0,
          noValidate: 4,
          open: 4,
          optimum: 0,
          pattern: 0,
          placeholder: 0,
          playsInline: 4,
          poster: 0,
          preload: 0,
          profile: 0,
          radioGroup: 0,
          readOnly: 4,
          referrerPolicy: 0,
          rel: 0,
          required: 4,
          reversed: 4,
          role: 0,
          rows: 24,
          rowSpan: 8,
          sandbox: 0,
          scope: 0,
          scoped: 4,
          scrolling: 0,
          seamless: 4,
          selected: 5,
          shape: 0,
          size: 24,
          sizes: 0,
          span: 24,
          spellCheck: 0,
          src: 0,
          srcDoc: 0,
          srcLang: 0,
          srcSet: 0,
          start: 8,
          step: 0,
          style: 0,
          summary: 0,
          tabIndex: 0,
          target: 0,
          title: 0,
          type: 0,
          useMap: 0,
          value: 0,
          width: 0,
          wmode: 0,
          wrap: 0,
          about: 0,
          datatype: 0,
          inlist: 0,
          prefix: 0,
          property: 0,
          resource: 0,
          typeof: 0,
          vocab: 0,
          autoCapitalize: 0,
          autoCorrect: 0,
          autoSave: 0,
          color: 0,
          itemProp: 0,
          itemScope: 4,
          itemType: 0,
          itemID: 0,
          itemRef: 0,
          results: 0,
          security: 0,
          unselectable: 0,
        },
        DOMAttributeNames: {
          acceptCharset: 'accept-charset',
          className: 'class',
          htmlFor: 'for',
          httpEquiv: 'http-equiv',
        },
      }
    },
    function(e, t) {
      e.exports = {
        Properties: {
          accentHeight: 0,
          accumulate: 0,
          additive: 0,
          alignmentBaseline: 0,
          allowReorder: 0,
          alphabetic: 0,
          amplitude: 0,
          arabicForm: 0,
          ascent: 0,
          attributeName: 0,
          attributeType: 0,
          autoReverse: 0,
          azimuth: 0,
          baseFrequency: 0,
          baseProfile: 0,
          baselineShift: 0,
          bbox: 0,
          begin: 0,
          bias: 0,
          by: 0,
          calcMode: 0,
          capHeight: 0,
          clip: 0,
          clipPath: 0,
          clipRule: 0,
          clipPathUnits: 0,
          colorInterpolation: 0,
          colorInterpolationFilters: 0,
          colorProfile: 0,
          colorRendering: 0,
          contentScriptType: 0,
          contentStyleType: 0,
          cursor: 0,
          cx: 0,
          cy: 0,
          d: 0,
          decelerate: 0,
          descent: 0,
          diffuseConstant: 0,
          direction: 0,
          display: 0,
          divisor: 0,
          dominantBaseline: 0,
          dur: 0,
          dx: 0,
          dy: 0,
          edgeMode: 0,
          elevation: 0,
          enableBackground: 0,
          end: 0,
          exponent: 0,
          externalResourcesRequired: 0,
          fill: 0,
          fillOpacity: 0,
          fillRule: 0,
          filter: 0,
          filterRes: 0,
          filterUnits: 0,
          floodColor: 0,
          floodOpacity: 0,
          focusable: 0,
          fontFamily: 0,
          fontSize: 0,
          fontSizeAdjust: 0,
          fontStretch: 0,
          fontStyle: 0,
          fontVariant: 0,
          fontWeight: 0,
          format: 0,
          from: 0,
          fx: 0,
          fy: 0,
          g1: 0,
          g2: 0,
          glyphName: 0,
          glyphOrientationHorizontal: 0,
          glyphOrientationVertical: 0,
          glyphRef: 0,
          gradientTransform: 0,
          gradientUnits: 0,
          hanging: 0,
          horizAdvX: 0,
          horizOriginX: 0,
          ideographic: 0,
          imageRendering: 0,
          in: 0,
          in2: 0,
          intercept: 0,
          k: 0,
          k1: 0,
          k2: 0,
          k3: 0,
          k4: 0,
          kernelMatrix: 0,
          kernelUnitLength: 0,
          kerning: 0,
          keyPoints: 0,
          keySplines: 0,
          keyTimes: 0,
          lengthAdjust: 0,
          letterSpacing: 0,
          lightingColor: 0,
          limitingConeAngle: 0,
          local: 0,
          markerEnd: 0,
          markerMid: 0,
          markerStart: 0,
          markerHeight: 0,
          markerUnits: 0,
          markerWidth: 0,
          mask: 0,
          maskContentUnits: 0,
          maskUnits: 0,
          mathematical: 0,
          mode: 0,
          numOctaves: 0,
          offset: 0,
          opacity: 0,
          operator: 0,
          order: 0,
          orient: 0,
          orientation: 0,
          origin: 0,
          overflow: 0,
          overlinePosition: 0,
          overlineThickness: 0,
          paintOrder: 0,
          panose1: 0,
          pathLength: 0,
          patternContentUnits: 0,
          patternTransform: 0,
          patternUnits: 0,
          pointerEvents: 0,
          points: 0,
          pointsAtX: 0,
          pointsAtY: 0,
          pointsAtZ: 0,
          preserveAlpha: 0,
          preserveAspectRatio: 0,
          primitiveUnits: 0,
          r: 0,
          radius: 0,
          refX: 0,
          refY: 0,
          renderingIntent: 0,
          repeatCount: 0,
          repeatDur: 0,
          requiredExtensions: 0,
          requiredFeatures: 0,
          restart: 0,
          result: 0,
          rotate: 0,
          rx: 0,
          ry: 0,
          scale: 0,
          seed: 0,
          shapeRendering: 0,
          slope: 0,
          spacing: 0,
          specularConstant: 0,
          specularExponent: 0,
          speed: 0,
          spreadMethod: 0,
          startOffset: 0,
          stdDeviation: 0,
          stemh: 0,
          stemv: 0,
          stitchTiles: 0,
          stopColor: 0,
          stopOpacity: 0,
          strikethroughPosition: 0,
          strikethroughThickness: 0,
          string: 0,
          stroke: 0,
          strokeDasharray: 0,
          strokeDashoffset: 0,
          strokeLinecap: 0,
          strokeLinejoin: 0,
          strokeMiterlimit: 0,
          strokeOpacity: 0,
          strokeWidth: 0,
          surfaceScale: 0,
          systemLanguage: 0,
          tableValues: 0,
          targetX: 0,
          targetY: 0,
          textAnchor: 0,
          textDecoration: 0,
          textRendering: 0,
          textLength: 0,
          to: 0,
          transform: 0,
          u1: 0,
          u2: 0,
          underlinePosition: 0,
          underlineThickness: 0,
          unicode: 0,
          unicodeBidi: 0,
          unicodeRange: 0,
          unitsPerEm: 0,
          vAlphabetic: 0,
          vHanging: 0,
          vIdeographic: 0,
          vMathematical: 0,
          values: 0,
          vectorEffect: 0,
          version: 0,
          vertAdvY: 0,
          vertOriginX: 0,
          vertOriginY: 0,
          viewBox: 0,
          viewTarget: 0,
          visibility: 0,
          widths: 0,
          wordSpacing: 0,
          writingMode: 0,
          x: 0,
          xHeight: 0,
          x1: 0,
          x2: 0,
          xChannelSelector: 0,
          xlinkActuate: 0,
          xlinkArcrole: 0,
          xlinkHref: 0,
          xlinkRole: 0,
          xlinkShow: 0,
          xlinkTitle: 0,
          xlinkType: 0,
          xmlBase: 0,
          xmlns: 0,
          xmlnsXlink: 0,
          xmlLang: 0,
          xmlSpace: 0,
          y: 0,
          y1: 0,
          y2: 0,
          yChannelSelector: 0,
          z: 0,
          zoomAndPan: 0,
        },
        DOMAttributeNames: {
          accentHeight: 'accent-height',
          alignmentBaseline: 'alignment-baseline',
          arabicForm: 'arabic-form',
          baselineShift: 'baseline-shift',
          capHeight: 'cap-height',
          clipPath: 'clip-path',
          clipRule: 'clip-rule',
          colorInterpolation: 'color-interpolation',
          colorInterpolationFilters: 'color-interpolation-filters',
          colorProfile: 'color-profile',
          colorRendering: 'color-rendering',
          dominantBaseline: 'dominant-baseline',
          enableBackground: 'enable-background',
          fillOpacity: 'fill-opacity',
          fillRule: 'fill-rule',
          floodColor: 'flood-color',
          floodOpacity: 'flood-opacity',
          fontFamily: 'font-family',
          fontSize: 'font-size',
          fontSizeAdjust: 'font-size-adjust',
          fontStretch: 'font-stretch',
          fontStyle: 'font-style',
          fontVariant: 'font-variant',
          fontWeight: 'font-weight',
          glyphName: 'glyph-name',
          glyphOrientationHorizontal: 'glyph-orientation-horizontal',
          glyphOrientationVertical: 'glyph-orientation-vertical',
          horizAdvX: 'horiz-adv-x',
          horizOriginX: 'horiz-origin-x',
          imageRendering: 'image-rendering',
          letterSpacing: 'letter-spacing',
          lightingColor: 'lighting-color',
          markerEnd: 'marker-end',
          markerMid: 'marker-mid',
          markerStart: 'marker-start',
          overlinePosition: 'overline-position',
          overlineThickness: 'overline-thickness',
          paintOrder: 'paint-order',
          panose1: 'panose-1',
          pointerEvents: 'pointer-events',
          renderingIntent: 'rendering-intent',
          shapeRendering: 'shape-rendering',
          stopColor: 'stop-color',
          stopOpacity: 'stop-opacity',
          strikethroughPosition: 'strikethrough-position',
          strikethroughThickness: 'strikethrough-thickness',
          strokeDasharray: 'stroke-dasharray',
          strokeDashoffset: 'stroke-dashoffset',
          strokeLinecap: 'stroke-linecap',
          strokeLinejoin: 'stroke-linejoin',
          strokeMiterlimit: 'stroke-miterlimit',
          strokeOpacity: 'stroke-opacity',
          strokeWidth: 'stroke-width',
          textAnchor: 'text-anchor',
          textDecoration: 'text-decoration',
          textRendering: 'text-rendering',
          underlinePosition: 'underline-position',
          underlineThickness: 'underline-thickness',
          unicodeBidi: 'unicode-bidi',
          unicodeRange: 'unicode-range',
          unitsPerEm: 'units-per-em',
          vAlphabetic: 'v-alphabetic',
          vHanging: 'v-hanging',
          vIdeographic: 'v-ideographic',
          vMathematical: 'v-mathematical',
          vectorEffect: 'vector-effect',
          vertAdvY: 'vert-adv-y',
          vertOriginX: 'vert-origin-x',
          vertOriginY: 'vert-origin-y',
          wordSpacing: 'word-spacing',
          writingMode: 'writing-mode',
          xHeight: 'x-height',
          xlinkActuate: 'xlink:actuate',
          xlinkArcrole: 'xlink:arcrole',
          xlinkHref: 'xlink:href',
          xlinkRole: 'xlink:role',
          xlinkShow: 'xlink:show',
          xlinkTitle: 'xlink:title',
          xlinkType: 'xlink:type',
          xmlBase: 'xml:base',
          xmlnsXlink: 'xmlns:xlink',
          xmlLang: 'xml:lang',
          xmlSpace: 'xml:space',
        },
      }
    },
    function(e, t) {
      e.exports = {
        MUST_USE_PROPERTY: 1,
        HAS_BOOLEAN_VALUE: 4,
        HAS_NUMERIC_VALUE: 8,
        HAS_POSITIVE_NUMERIC_VALUE: 24,
        HAS_OVERLOADED_BOOLEAN_VALUE: 32,
      }
    },
    function(e, t, n) {
      var r = n(21)
      e.exports = function(e, t) {
        var n,
          o = null
        if (!e || 'string' != typeof e) return o
        for (var a, i, l = r(e), s = 'function' == typeof t, c = 0, u = l.length; c < u; c++)
          (a = (n = l[c]).property), (i = n.value), s ? t(a, i, n) : i && (o || (o = {}), (o[a] = i))
        return o
      }
    },
    function(e, t) {
      var n = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,
        r = /\n/g,
        o = /^\s*/,
        a = /^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        s = /^[;\s]*/,
        c = /^\s+|\s+$/g,
        u = '\n',
        d = '/',
        h = '*',
        p = '',
        f = 'comment',
        g = 'declaration'
      function y(e) {
        return e ? e.replace(c, p) : p
      }
      e.exports = function(e, t) {
        if ('string' != typeof e) throw new TypeError('First argument must be a string')
        if (!e) return []
        t = t || {}
        var c = 1,
          m = 1
        function v(e) {
          var t = e.match(r)
          t && (c += t.length)
          var n = e.lastIndexOf(u)
          m = ~n ? e.length - n : m + e.length
        }
        function b() {
          var e = { line: c, column: m }
          return function(t) {
            return (t.position = new w(e)), S(), t
          }
        }
        function w(e) {
          ;(this.start = e), (this.end = { line: c, column: m }), (this.source = t.source)
        }
        w.prototype.content = e
        var k = []
        function O(n) {
          var r = new Error(t.source + ':' + c + ':' + m + ': ' + n)
          if (((r.reason = n), (r.filename = t.source), (r.line = c), (r.column = m), (r.source = e), !t.silent))
            throw r
          k.push(r)
        }
        function T(t) {
          var n = t.exec(e)
          if (n) {
            var r = n[0]
            return v(r), (e = e.slice(r.length)), n
          }
        }
        function S() {
          T(o)
        }
        function _(e) {
          var t
          for (e = e || []; (t = x()); ) !1 !== t && e.push(t)
          return e
        }
        function x() {
          var t = b()
          if (d == e.charAt(0) && h == e.charAt(1)) {
            for (var n = 2; p != e.charAt(n) && (h != e.charAt(n) || d != e.charAt(n + 1)); ) ++n
            if (((n += 2), p === e.charAt(n - 1))) return O('End of comment missing')
            var r = e.slice(2, n - 2)
            return (m += 2), v(r), (e = e.slice(n)), (m += 2), t({ type: f, comment: r })
          }
        }
        function E() {
          var e = b(),
            t = T(a)
          if (t) {
            if ((x(), !T(i))) return O("property missing ':'")
            var r = T(l),
              o = e({ type: g, property: y(t[0].replace(n, p)), value: r ? y(r[0].replace(n, p)) : p })
            return T(s), o
          }
        }
        return (
          S(),
          (function() {
            var e,
              t = []
            for (_(t); (e = E()); ) !1 !== e && (t.push(e), _(t))
            return t
          })()
        )
      }
    },
    function(e, t, n) {
      'use strict'
      var r = n(23),
        o = n(6),
        a = o.formatDOM,
        i = o.isIE(9),
        l = /<(![a-zA-Z\s]+)>/
      e.exports = function(e) {
        if ('string' != typeof e) throw new TypeError('First argument must be a string.')
        if (!e) return []
        var t,
          n = e.match(l)
        return n && n[1] && ((t = n[1]), i && (e = e.replace(n[0], ''))), a(r(e), null, t)
      }
    },
    function(e, t, n) {
      'use strict'
      var r,
        o,
        a,
        i = n(6).isIE,
        l = /<([a-zA-Z]+[0-9]?)/,
        s = /<\/head>/i,
        c = /<\/body>/i,
        u = /<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,
        d = i(),
        h = i(9)
      if ('function' == typeof window.DOMParser) {
        var p = new window.DOMParser(),
          f = h ? 'text/xml' : 'text/html'
        r = function(e, t) {
          return (
            t && (e = ['<', t, '>', e, '</', t, '>'].join('')),
            h && (e = e.replace(u, '<$1$2$3/>')),
            p.parseFromString(e, f)
          )
        }
      }
      if ('object' == typeof document.implementation) {
        var g = document.implementation.createHTMLDocument(d ? 'HTML_DOM_PARSER_TITLE' : void 0)
        o = function(e, t) {
          if (t) return (g.documentElement.getElementsByTagName(t)[0].innerHTML = e), g
          try {
            return (g.documentElement.innerHTML = e), g
          } catch (t) {
            if (r) return r(e)
          }
        }
      }
      var y = document.createElement('template')
      y.content &&
        (a = function(e) {
          return (y.innerHTML = e), y.content.childNodes
        })
      var m = o || r
      e.exports = function(e) {
        var t,
          n,
          o,
          i,
          u = e.match(l)
        switch ((u && u[1] && (t = u[1].toLowerCase()), t)) {
          case 'html':
            if (r)
              return (
                (n = r(e)),
                s.test(e) || ((o = n.getElementsByTagName('head')[0]) && o.parentNode.removeChild(o)),
                c.test(e) || ((o = n.getElementsByTagName('body')[0]) && o.parentNode.removeChild(o)),
                n.getElementsByTagName('html')
              )
            break
          case 'head':
            if (m) return (i = m(e).getElementsByTagName('head')), c.test(e) ? i[0].parentNode.childNodes : i
            break
          case 'body':
            if (m) return (i = m(e).getElementsByTagName('body')), s.test(e) ? i[0].parentNode.childNodes : i
            break
          default:
            if (a) return a(e)
            if (m) return m(e, 'body').getElementsByTagName('body')[0].childNodes
        }
        return []
      }
    },
    function(e, t, n) {
      'use strict'
      e.exports = {
        CASE_SENSITIVE_TAG_NAMES: [
          'animateMotion',
          'animateTransform',
          'clipPath',
          'feBlend',
          'feColorMatrix',
          'feComponentTransfer',
          'feComposite',
          'feConvolveMatrix',
          'feDiffuseLighting',
          'feDisplacementMap',
          'feDropShadow',
          'feFlood',
          'feFuncA',
          'feFuncB',
          'feFuncG',
          'feFuncR',
          'feGaussainBlur',
          'feImage',
          'feMerge',
          'feMergeNode',
          'feMorphology',
          'feOffset',
          'fePointLight',
          'feSpecularLighting',
          'feSpotLight',
          'feTile',
          'feTurbulence',
          'foreignObject',
          'linearGradient',
          'radialGradient',
          'textPath',
        ],
      }
    },
    function(e, t, n) {
      'use strict'
      n.r(t)
      var r,
        o,
        a,
        i = n(2),
        l = n.n(i),
        s = n(0),
        c = n.n(s),
        u = n(1),
        d = n.n(u),
        h = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object.keys(e).reduce(function(t, n) {
            var r
            return (t['data-' + ((r = n), r.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())] = e[n]), t
          }, {})
        },
        p = ((function() {})(),
        function(e) {
          return !e || (Array.isArray(e) && !e.length)
        }),
        f = function(e, t) {
          return (
            e instanceof Event &&
            !(function(e) {
              if (e.path) return e.path
              for (var t = e.target, n = [t]; t.parentElement; ) (t = t.parentElement), n.unshift(t)
              return n
            })(e).some(function(e) {
              return e === t
            })
          )
        },
        g = function(e, t) {
          var n = void 0
          return function() {
            for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            var i = !n
            clearTimeout(n),
              (n = setTimeout(function() {
                ;(n = null), e.apply(void 0, o)
              }, t)),
              i && e.apply(void 0, o)
          }
        },
        y = ((r = 'rdts'),
        (o = 1),
        (a = new WeakMap()),
        {
          get: function(e) {
            return a.has(e) || a.set(e, o++), '' + r + a.get(e)
          },
          reset: function() {
            ;(a = new WeakMap()), (o = 1)
          },
        }),
        m = n(7),
        v = n.n(m),
        b = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function w(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var k = l.a.bind(v.a),
        O = function(e) {
          return e + '_tag'
        },
        T = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = w(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleClick = function(e) {
                var t = r.props,
                  n = t.id,
                  o = t.onDelete
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), o(n, void 0 !== (e.key || e.keyCode))
              }),
              (r.onKeyDown = function(e) {
                'Backspace' === e.key && (r.handleClick(e), e.preventDefault())
              }),
              (r.onKeyUp = function(e) {
                ;(32 === e.keyCode || ['Delete', 'Enter'].indexOf(e.key) > -1) && (r.handleClick(e), e.preventDefault())
              }),
              w(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            b(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.id,
                    n = e.label,
                    r = e.labelRemove,
                    o = void 0 === r ? 'Remove' : r,
                    a = e.readOnly,
                    i = e.disabled,
                    l = O(t),
                    s = t + '_button',
                    c = k('tag-remove', { readOnly: a }, { disabled: i }),
                    u = a || i
                  return d.a.createElement(
                    'span',
                    { className: k('tag'), id: l, 'aria-label': n },
                    n,
                    d.a.createElement(
                      'button',
                      {
                        id: s,
                        onClick: u ? void 0 : this.handleClick,
                        onKeyDown: u ? void 0 : this.onKeyDown,
                        onKeyUp: u ? void 0 : this.onKeyUp,
                        className: c,
                        type: 'button',
                        'aria-label': o,
                        'aria-labelledby': s + ' ' + l,
                        'aria-disabled': u,
                      },
                      'x'
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      T.propTypes = {
        id: c.a.string.isRequired,
        label: c.a.string.isRequired,
        onDelete: c.a.func,
        readOnly: c.a.bool,
        disabled: c.a.bool,
        labelRemove: c.a.string,
      }
      var S = T,
        _ = n(8),
        x = n.n(_)
      function E(e, t) {
        var n = (function(e) {
          if (!e) return {}
          if ('#' === e[0]) return { 'aria-labelledby': e.substring(1).replace(/ #/g, ' ') }
          return { 'aria-label': e }
        })(e)
        return t && (n['aria-labelledby'] = ((n['aria-labelledby'] || '') + ' ' + t).trim()), n
      }
      var P = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        C =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }
      var N = l.a.bind(x.a),
        j = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var n = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (n.handleInputChange = function(e) {
                e.persist(), n.delayedCallback(e)
              }),
              (n.delayedCallback = g(function(e) {
                return n.props.onInputChange(e.target.value)
              }, 300)),
              n
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            P(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.tags,
                    n = e.onTagRemove,
                    r = e.inputRef,
                    o = e.texts,
                    a = void 0 === o ? {} : o,
                    i = e.onFocus,
                    l = e.onBlur,
                    s = e.disabled,
                    c = e.readOnly,
                    u = e.onKeyDown,
                    p = e.activeDescendant
                  return d.a.createElement(
                    'ul',
                    { className: N('tag-list') },
                    (function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments[1],
                        n = arguments[2],
                        r = arguments[3],
                        o = arguments[4]
                      return e.map(function(e) {
                        var a = e._id,
                          i = e.label,
                          l = e.tagClassName,
                          s = e.dataset
                        return d.a.createElement(
                          'li',
                          C({ className: N('tag-item', l), key: 'tag-item-' + a }, h(s)),
                          d.a.createElement(S, {
                            label: i,
                            id: a,
                            onDelete: t,
                            readOnly: n,
                            disabled: r,
                            labelRemove: o,
                          })
                        )
                      })
                    })(t, n, c, s, a.labelRemove),
                    d.a.createElement(
                      'li',
                      { className: N('tag-item') },
                      d.a.createElement(
                        'input',
                        C(
                          {
                            type: 'text',
                            disabled: s,
                            ref: r,
                            className: N('search'),
                            placeholder: a.placeholder || 'Choose...',
                            onKeyDown: u,
                            onChange: this.handleInputChange,
                            onFocus: i,
                            onBlur: l,
                            readOnly: c,
                            'aria-activedescendant': p,
                            'aria-autocomplete': u ? 'list' : void 0,
                          },
                          E(a.label)
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      j.propTypes = {
        tags: c.a.array,
        texts: c.a.object,
        onInputChange: c.a.func,
        onFocus: c.a.func,
        onBlur: c.a.func,
        onTagRemove: c.a.func,
        onKeyDown: c.a.func,
        inputRef: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
        activeDescendant: c.a.string,
      }
      var A = j,
        D = n(4),
        M = n.n(D),
        R =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        I = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function F(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var L = l.a.bind(M.a),
        B = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = F(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e.mode,
                  n = e.texts,
                  o = void 0 === n ? {} : n,
                  a = e.showDropdown,
                  i = e.clientId,
                  l = e.tags,
                  s = i + '_trigger',
                  c = [],
                  u = E(o.label)
                return (
                  l &&
                    l.length &&
                    (u['aria-label'] && c.push(s),
                    l.forEach(function(e) {
                      c.push(O(e._id))
                    }),
                    (u = E(o.label, c.join(' ')))),
                  R(
                    {
                      id: s,
                      role: 'button',
                      tabIndex: 0,
                      'aria-haspopup': 'simpleSelect' === t ? 'listbox' : 'tree',
                      'aria-expanded': a ? 'true' : 'false',
                    },
                    u
                  )
                )
              }),
              (r.handleTrigger = function(e) {
                ;(e.key && 13 !== e.keyCode && 32 !== e.keyCode && 40 !== e.keyCode) ||
                  (e.key && r.triggerNode && r.triggerNode !== document.activeElement) ||
                  (r.props.showDropdown || 32 !== e.keyCode || e.preventDefault(), r.props.onTrigger(e))
              }),
              F(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            I(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.disabled,
                    r = t.readOnly,
                    o = t.showDropdown,
                    a = L({ 'dropdown-trigger': !0, arrow: !0, disabled: n, readOnly: r, top: o, bottom: !o })
                  return d.a.createElement(
                    'a',
                    R(
                      {
                        ref: function(t) {
                          e.triggerNode = t
                        },
                        className: a,
                        onClick: n ? void 0 : this.handleTrigger,
                        onKeyDown: n ? void 0 : this.handleTrigger,
                      },
                      this.getAriaAttributes()
                    ),
                    this.props.children
                  )
                },
              },
            ]),
            t
          )
        })()
      B.propTypes = {
        onTrigger: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
        showDropdown: c.a.bool,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        texts: c.a.object,
        clientId: c.a.string,
        tags: c.a.array,
      }
      var V = B,
        U = n(9),
        H = n.n(U),
        z = n(10),
        Y = n.n(z),
        q = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function K(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var W = (function(e) {
        function t() {
          var e, n, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = K(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleClick = function() {
              var e = r.props,
                t = e.onAction,
                n = e.actionData
              t && t(n.nodeId, n.action)
            }),
            K(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['PureComponent']),
          q(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.title,
                  n = e.className,
                  r = e.text,
                  o = e.readOnly
                return d.a.createElement(
                  'i',
                  { title: t, className: n, onClick: o ? void 0 : this.handleClick },
                  Y()(r)
                )
              },
            },
          ]),
          t
        )
      })()
      ;(W.propTypes = {
        title: c.a.string,
        text: c.a.string,
        className: c.a.string,
        actionData: c.a.object,
        onAction: c.a.func,
        readOnly: c.a.bool,
      }),
        (W.defaultProps = { onAction: function() {} })
      var $ = W,
        X =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        G = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var Z = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['PureComponent']),
          G(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.actions,
                  n = e.id,
                  r = (function(e, t) {
                    var n = {}
                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                    return n
                  })(e, ['actions', 'id'])
                return p(t)
                  ? null
                  : t.map(function(e, t) {
                      var o = e.id || 'action-' + t
                      return d.a.createElement(
                        $,
                        X({ key: o }, r, e, { actionData: { action: X({}, e, { id: o }), nodeId: n } })
                      )
                    })
              },
            },
          ]),
          t
        )
      })()
      Z.propTypes = { id: c.a.string.isRequired, actions: c.a.array }
      var J = Z,
        Q =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ee = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var te = function(e) {
          var t = e.checked,
            n = e.indeterminate
          return function(e) {
            e && ((e.checked = t), (e.indeterminate = n))
          }
        },
        ne = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            ee(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.checked,
                    n = e.indeterminate,
                    r = void 0 !== n && n,
                    o = e.onChange,
                    a = e.disabled,
                    i = e.readOnly,
                    l = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['checked', 'indeterminate', 'onChange', 'disabled', 'readOnly']),
                    s = a || i
                  return d.a.createElement(
                    'input',
                    Q({ type: 'checkbox', ref: te({ checked: t, indeterminate: r }), onChange: o, disabled: s }, l)
                  )
                },
              },
            ]),
            t
          )
        })()
      ne.propTypes = {
        checked: c.a.bool,
        indeterminate: c.a.bool,
        onChange: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
      }
      var re = ne,
        oe =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ae = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var ie = function(e) {
          var t = e.checked
          return function(e) {
            e && (e.checked = t)
          }
        },
        le = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            ae(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.name,
                    n = e.checked,
                    r = e.onChange,
                    o = e.disabled,
                    a = e.readOnly,
                    i = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['name', 'checked', 'onChange', 'disabled', 'readOnly']),
                    l = o || a
                  return d.a.createElement(
                    'input',
                    oe({ type: 'radio', name: t, ref: ie({ checked: n }), onChange: r, disabled: l }, i)
                  )
                },
              },
            ]),
            t
          )
        })()
      le.propTypes = {
        name: c.a.string.isRequired,
        checked: c.a.bool,
        onChange: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
      }
      var se = le,
        ce = n(3),
        ue = n.n(ce),
        de =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        he = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function pe(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var fe = l.a.bind(ue.a),
        ge = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = pe(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleCheckboxChange = function(e) {
                var t = r.props,
                  n = t.mode,
                  o = t.id,
                  a = t.onCheckboxChange
                'simpleSelect' === n || 'radioSelect' === n ? a(o, !0) : a(o, e.target.checked)
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
              }),
              pe(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            he(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.title,
                    r = e.label,
                    o = e.id,
                    a = e.partial,
                    i = e.checked,
                    l = this.props,
                    s = l.value,
                    c = l.disabled,
                    u = l.showPartiallySelected,
                    h = l.readOnly,
                    p = l.clientId,
                    f = { className: 'node-label' }
                  'simpleSelect' === t && !h && !c && (f.onClick = this.handleCheckboxChange)
                  var g = { id: o, value: s, checked: i, disabled: c, readOnly: h, tabIndex: -1 }
                  return d.a.createElement(
                    'label',
                    { title: n || r, htmlFor: o },
                    'radioSelect' === t
                      ? d.a.createElement(
                          se,
                          de({ name: p, className: 'radio-item', onChange: this.handleCheckboxChange }, g)
                        )
                      : d.a.createElement(
                          re,
                          de(
                            {
                              name: o,
                              className: fe('checkbox-item', { 'simple-select': 'simpleSelect' === t }),
                              indeterminate: u && a,
                              onChange: this.handleCheckboxChange,
                            },
                            g
                          )
                        ),
                    d.a.createElement('span', f, r)
                  )
                },
              },
            ]),
            t
          )
        })()
      ge.propTypes = {
        id: c.a.string.isRequired,
        actions: c.a.array,
        title: c.a.string,
        label: c.a.string.isRequired,
        value: c.a.string.isRequired,
        checked: c.a.bool,
        partial: c.a.bool,
        disabled: c.a.bool,
        dataset: c.a.object,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        onCheckboxChange: c.a.func,
        readOnly: c.a.bool,
        clientId: c.a.string,
      }
      var ye = ge,
        me = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function ve(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var be = l.a.bind(ue.a),
        we = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = ve(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.onToggle = function(e) {
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), r.props.onNodeToggle(r.props.id)
              }),
              (r.onKeyDown = function(e) {
                ;('Enter' !== e.key && 32 !== e.keyCode) || (r.props.onNodeToggle(r.props.id), e.preventDefault())
              }),
              ve(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            me(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.expanded
                  if (e.isLeaf) return null
                  var n = be('toggle', { expanded: t, collapsed: !t })
                  return d.a.createElement('i', {
                    role: 'button',
                    tabIndex: -1,
                    className: n,
                    onClick: this.onToggle,
                    onKeyDown: this.onKeyDown,
                    'aria-hidden': !0,
                  })
                },
              },
            ]),
            t
          )
        })()
      we.propTypes = { expanded: c.a.bool, isLeaf: c.a.bool, onNodeToggle: c.a.func, id: c.a.string }
      var ke = we,
        Oe =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Te = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function Se(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var _e = l.a.bind(ue.a),
        xe = function(e) {
          return p(e)
        },
        Ee = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = Se(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e._children,
                  n = e._depth,
                  o = e.checked,
                  a = e.disabled,
                  i = e.expanded,
                  l = e.readOnly,
                  s = e.mode,
                  c = e.partial,
                  u = {}
                return (
                  (u.role = 'simpleSelect' === s ? 'option' : 'treeitem'),
                  (u['aria-disabled'] = a || l),
                  (u['aria-selected'] = o),
                  'simpleSelect' !== s &&
                    ((u['aria-checked'] = c ? 'mixed' : o),
                    (u['aria-level'] = (n || 0) + 1),
                    (u['aria-expanded'] = t && (i ? 'true' : 'false'))),
                  u
                )
              }),
              Se(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            Te(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.keepTreeOnSearch,
                    r = e._id,
                    o = e._children,
                    a = e.dataset,
                    i = e._depth,
                    l = e.expanded,
                    s = e.title,
                    c = e.label,
                    u = e.partial,
                    p = e.checked,
                    f = e.value,
                    g = e.disabled,
                    y = e.actions,
                    m = e.onAction,
                    v = e.searchModeOn,
                    b = e.onNodeToggle,
                    w = e.onCheckboxChange,
                    k = e.showPartiallySelected,
                    O = e.readOnly,
                    T = e.clientId,
                    S = (function(e) {
                      var t = e.keepTreeOnSearch,
                        n = e.keepChildrenOnSearch,
                        r = e._children,
                        o = e.matchInChildren,
                        a = e.matchInParent,
                        i = e.disabled,
                        l = e.partial,
                        s = e.hide,
                        c = e.className,
                        u = e.showPartiallySelected,
                        d = e.readOnly,
                        h = e.checked,
                        p = e._focused
                      return _e(
                        'node',
                        {
                          leaf: xe(r),
                          tree: !xe(r),
                          disabled: i,
                          hide: s,
                          'match-in-children': t && o,
                          'match-in-parent': t && n && a,
                          partial: u && l,
                          readOnly: d,
                          checked: h,
                          focused: p,
                        },
                        c
                      )
                    })(this.props),
                    _ = n || !v ? { paddingLeft: 20 * (i || 0) + 'px' } : {},
                    x = r + '_li'
                  return d.a.createElement(
                    'li',
                    Oe({ className: S, style: _, id: x }, h(a), this.getAriaAttributes()),
                    d.a.createElement(ke, { isLeaf: xe(o), expanded: l, id: r, onNodeToggle: b }),
                    d.a.createElement(ye, {
                      title: s,
                      label: c,
                      id: r,
                      partial: u,
                      checked: p,
                      value: f,
                      disabled: g,
                      mode: t,
                      onCheckboxChange: w,
                      showPartiallySelected: k,
                      readOnly: O,
                      clientId: T,
                    }),
                    d.a.createElement(J, { actions: y, onAction: m, id: r, readOnly: O })
                  )
                },
              },
            ]),
            t
          )
        })()
      Ee.propTypes = {
        _id: c.a.string.isRequired,
        _depth: c.a.number,
        _children: c.a.array,
        actions: c.a.array,
        className: c.a.string,
        title: c.a.string,
        label: c.a.string.isRequired,
        value: c.a.string.isRequired,
        checked: c.a.bool,
        expanded: c.a.bool,
        disabled: c.a.bool,
        partial: c.a.bool,
        dataset: c.a.object,
        keepTreeOnSearch: c.a.bool,
        keepChildrenOnSearch: c.a.bool,
        searchModeOn: c.a.bool,
        onNodeToggle: c.a.func,
        onAction: c.a.func,
        onCheckboxChange: c.a.func,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        readOnly: c.a.bool,
        clientId: c.a.string,
      }
      var Pe = Ee,
        Ce =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Ne = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var je = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            Ae.call(n),
            (n.currentPage = 1),
            n.computeInstanceProps(e, !0),
            (n.state = { items: n.allVisibleNodes.slice(0, n.props.pageSize) }),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['Component']),
          Ne(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.searchModeOn
                return d.a.createElement(
                  'ul',
                  Ce(
                    { className: 'root ' + (e ? 'searchModeOn' : ''), ref: this.setNodeRef },
                    this.getAriaAttributes()
                  ),
                  this.state.scrollableTarget &&
                    d.a.createElement(
                      H.a,
                      {
                        dataLength: this.state.items.length,
                        next: this.loadMore,
                        hasMore: this.hasMore(),
                        loader: d.a.createElement('span', { className: 'searchLoader' }, 'Loading...'),
                        scrollableTarget: this.state.scrollableTarget,
                      },
                      this.state.items
                    )
                )
              },
            },
          ]),
          t
        )
      })()
      ;(je.propTypes = {
        data: c.a.object,
        keepTreeOnSearch: c.a.bool,
        keepChildrenOnSearch: c.a.bool,
        searchModeOn: c.a.bool,
        onChange: c.a.func,
        onNodeToggle: c.a.func,
        onAction: c.a.func,
        onCheckboxChange: c.a.func,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        pageSize: c.a.number,
        readOnly: c.a.bool,
        clientId: c.a.string,
        activeDescendant: c.a.string,
      }),
        (je.defaultProps = { pageSize: 100 })
      var Ae = function() {
          var e = this
          ;(this.componentWillReceiveProps = function(t) {
            var n = t.activeDescendant,
              r = n === e.props.activeDescendant
            e.computeInstanceProps(t, !r),
              e.setState({ items: e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize) }, function() {
                if (!r) {
                  var t = e.state.scrollableTarget,
                    o = n && document && document.getElementById(n)
                  o && t && (t.scrollTop = o.offsetTop - (t.clientHeight - o.clientHeight) / 2)
                }
              })
          }),
            (this.componentDidMount = function() {
              e.setState({ scrollableTarget: e.node.parentNode })
            }),
            (this.computeInstanceProps = function(t, n) {
              if (
                ((e.allVisibleNodes = e.getNodes(t)),
                (e.totalPages = Math.ceil(e.allVisibleNodes.length / e.props.pageSize)),
                n && t.activeDescendant)
              ) {
                var r = t.activeDescendant.replace(/_li$/, ''),
                  o =
                    e.allVisibleNodes.findIndex(function(e) {
                      return e.key === r
                    }) + 1
                e.currentPage = o > 0 ? Math.ceil(o / e.props.pageSize) : 1
              }
            }),
            (this.getNodes = function(e) {
              var t = e.data,
                n = e.keepTreeOnSearch,
                r = e.keepChildrenOnSearch,
                o = e.searchModeOn,
                a = e.mode,
                i = e.showPartiallySelected,
                l = e.readOnly,
                s = e.onAction,
                c = e.onChange,
                u = e.onCheckboxChange,
                h = e.onNodeToggle,
                p = e.activeDescendant,
                f = e.clientId,
                g = []
              return (
                t.forEach(function(e) {
                  ;(function(e, t, n) {
                    if (t || e.expanded) return !0
                    var r = e._parent && n.get(e._parent)
                    return !r || r.expanded
                  })(e, o, t) &&
                    g.push(
                      d.a.createElement(
                        Pe,
                        Ce({ keepTreeOnSearch: n, keepChildrenOnSearch: r, key: e._id }, e, {
                          searchModeOn: o,
                          onChange: c,
                          onCheckboxChange: u,
                          onNodeToggle: h,
                          onAction: s,
                          mode: a,
                          showPartiallySelected: i,
                          readOnly: l,
                          clientId: f,
                          activeDescendant: p,
                        })
                      )
                    )
                }),
                g
              )
            }),
            (this.hasMore = function() {
              return e.currentPage < e.totalPages
            }),
            (this.loadMore = function() {
              e.currentPage = e.currentPage + 1
              var t = e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize)
              e.setState({ items: t })
            }),
            (this.setNodeRef = function(t) {
              e.node = t
            }),
            (this.getAriaAttributes = function() {
              var t = e.props.mode
              return {
                role: 'simpleSelect' === t ? 'listbox' : 'tree',
                'aria-multiselectable': /multiSelect|hierarchical/.test(t),
              }
            })
        },
        De = je,
        Me = n(11),
        Re = n.n(Me),
        Ie = function(e) {
          return e
        },
        Fe = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ie
          return (
            Re()(e[t], function(e) {
              return n(e).checked
            }) ||
            e[t].some(function(e) {
              return n(e).partial
            })
          )
        }
      var Le = function(e) {
          var t = e.tree,
            n = e.simple,
            r = e.radio,
            o = e.showPartialState,
            a = e.hierarchical,
            i = e.rootPrefixId
          return (function e(t) {
            var n = t.nodes,
              r = t.parent,
              o = t.depth,
              a = void 0 === o ? 0 : o,
              i = t.simple,
              l = t.radio,
              s = t.showPartialState,
              c = t.hierarchical,
              u = t.rootPrefixId,
              d = t._rv,
              h = void 0 === d ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : d,
              f = i || l
            return (
              n.forEach(function(t, n) {
                ;(t._depth = a),
                  r
                    ? ((t._id = t.id || r._id + '-' + n), (t._parent = r._id), r._children.push(t._id))
                    : (t._id = t.id || '' + (u ? u + '-' + n : n)),
                  f && t.checked && (h.singleSelectedNode ? (t.checked = !1) : (h.singleSelectedNode = t)),
                  f &&
                    t.isDefaultValue &&
                    h.singleSelectedNode &&
                    !h.singleSelectedNode.isDefaultValue &&
                    ((h.singleSelectedNode.checked = !1), (h.singleSelectedNode = null)),
                  !t.isDefaultValue ||
                    (f && 0 !== h.defaultValues.length) ||
                    (h.defaultValues.push(t._id), (t.checked = !0), f && (h.singleSelectedNode = t)),
                  (c && !l) ||
                    (function(e) {
                      for (
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n =
                            arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
                              ? ['disabled']
                              : ['checked', 'disabled'],
                          r = 0;
                        r < n.length;
                        r++
                      ) {
                        var o = n[r]
                        void 0 === e[o] && void 0 !== t[o] && (e[o] = t[o])
                      }
                    })(t, r, !l),
                  h.list.set(t._id, t),
                  !i &&
                    t.children &&
                    ((t._children = []),
                    e({
                      nodes: t.children,
                      parent: t,
                      depth: a + 1,
                      radio: l,
                      showPartialState: s,
                      hierarchical: c,
                      _rv: h,
                    }),
                    s &&
                      !t.checked &&
                      ((t.partial = Fe(t)),
                      f ||
                        p(t.children) ||
                        !t.children.every(function(e) {
                          return e.checked
                        }) ||
                        (t.checked = !0)),
                    (t.children = void 0))
              }),
              h
            )
          })({
            nodes: Array.isArray(t) ? t : [t],
            simple: n,
            radio: r,
            showPartialState: o,
            hierarchical: a,
            rootPrefixId: i,
          })
        },
        Be = function e(t, n, r) {
          ;(n[t._id] = !0),
            p(t._children) ||
              t._children.forEach(function(t) {
                return e(r(t), n, r)
              })
        },
        Ve = function(e, t) {
          var n = [],
            r = {}
          return (
            e.forEach(function(e, o) {
              r[o] || (t(e, o, r) && n.push(e), (r[o] = !0))
            }),
            n
          )
        },
        Ue = {
          getNodesMatching: Ve,
          getVisibleNodes: function(e, t, n) {
            return Ve(e, function(e, r, o) {
              return n && e._children && e._children.length && !0 !== e.expanded && Be(e, o, t), !e.hide
            })
          },
          markSubTreeVisited: Be,
        },
        He = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var n = [],
                  r = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  ;(o = !0), (a = e)
                } finally {
                  try {
                    !r && l.return && l.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return n
              })(e, t)
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          }
        })(),
        ze = 'ArrowUp',
        Ye = 'ArrowDown',
        qe = 'ArrowLeft',
        Ke = 'ArrowRight',
        We = 'Enter',
        $e = 'Home',
        Xe = 'PageUp',
        Ge = 'End',
        Ze = 'PageDown',
        Je = {
          None: 'None',
          FocusPrevious: 'FocusPrevious',
          FocusNext: 'FocusNext',
          FocusParent: 'FocusParent',
          FocusFirst: 'FocusFirst',
          FocusLast: 'FocusLast',
          ToggleExpanded: 'ToggleExpanded',
          ToggleChecked: 'ToggleChecked',
        },
        Qe = new Set([Je.FocusPrevious, Je.FocusNext, Je.FocusParent, Je.FocusFirst, Je.FocusLast]),
        et = [ze, Ye, $e, Xe, Ge, Ze],
        tt = et.concat([qe, Ke, We]),
        nt = function(e, t, n, r) {
          return t.indexOf(e) > -1 || (!n && e === r)
        },
        rt = function(e, t, n) {
          if (!e || 0 === e.length) return t
          var r = t
          ;(function(e) {
            return nt(e, [Je.FocusFirst, Je.FocusLast], !0)
          })(n)
            ? (r = He(e, 1)[0])
            : [Je.FocusPrevious, Je.FocusNext].indexOf(n) > -1 &&
              (r = (function(e, t) {
                var n = e.indexOf(t) + 1
                return n % e.length == 0 ? e[0] : e[n]
              })(e, t))
          return r
        },
        ot = {
          isValidKey: function(e, t) {
            return (t ? tt : et).indexOf(e) > -1
          },
          getAction: function(e, t) {
            return t === qe
              ? (function(e, t) {
                  return e && t === qe
                    ? !0 === e.expanded
                      ? Je.ToggleExpanded
                      : e._parent
                      ? Je.FocusParent
                      : Je.None
                    : Je.None
                })(e, t)
              : t === Ke
              ? (function(e, t) {
                  return e && e._children && t === Ke ? (!0 !== e.expanded ? Je.ToggleExpanded : Je.FocusNext) : Je.None
                })(e, t)
              : (function(e, t) {
                  return nt(e, [$e, Xe], t, Ye)
                })(t, e)
              ? Je.FocusFirst
              : (function(e, t) {
                  return nt(e, [Ge, Ze], t, ze)
                })(t, e)
              ? Je.FocusLast
              : (function(e, t) {
                  if (!e) return Je.None
                  switch (t) {
                    case ze:
                      return Je.FocusPrevious
                    case Ye:
                      return Je.FocusNext
                    case We:
                      return Je.ToggleChecked
                    default:
                      return Je.None
                  }
                })(e, t)
          },
          getNextFocus: function(e, t, n, r, o) {
            if (n === Je.FocusParent)
              return (function(e, t) {
                return e && e._parent ? t(e._parent) : e
              })(t, r)
            if (!Qe.has(n)) return t
            var a = Ue.getVisibleNodes(e, r, o)
            return (
              (function(e) {
                return nt(e, [Je.FocusPrevious, Je.FocusLast], !0)
              })(n) && (a = a.reverse()),
              rt(a, t, n)
            )
          },
          getNextFocusAfterTagDelete: function(e, t, n, r) {
            var o =
              t &&
              t.findIndex(function(t) {
                return t._id === e
              })
            if (o < 0 || !n.length) return r
            var a = n[(o = n.length > o ? o : n.length - 1)]._id,
              i = document.getElementById(O(a))
            return (i && i.firstElementChild) || r
          },
          handleFocusNavigationkey: function(e, t, n, r, o) {
            var a = ot.getNextFocus(e, n, t, r, o)
            return n && a && n._id !== a._id && (n._focused = !1), a ? ((a._focused = !0), a._id) : n && n._id
          },
          handleToggleNavigationkey: function(e, t, n, r, o) {
            return (
              e !== Je.ToggleChecked || n || t.readOnly || t.disabled
                ? e === Je.ToggleExpanded && o(t._id)
                : r(t._id, !0 !== t.checked),
              t && t._id
            )
          },
        },
        at = ot,
        it = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var lt = (function() {
          function e(t) {
            var n = t.data,
              r = t.mode,
              o = t.showPartiallySelected,
              a = t.rootPrefixId,
              i = t.searchPredicate
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this._src = n),
              (this.simpleSelect = 'simpleSelect' === r),
              (this.radioSelect = 'radioSelect' === r),
              (this.hierarchical = 'hierarchical' === r),
              (this.searchPredicate = i)
            var l = Le({
                tree: JSON.parse(JSON.stringify(n)),
                simple: this.simpleSelect,
                radio: this.radioSelect,
                showPartialState: o,
                hierarchical: this.hierarchical,
                rootPrefixId: a,
              }),
              s = l.list,
              c = l.defaultValues,
              u = l.singleSelectedNode
            ;(this.tree = s),
              (this.defaultValues = c),
              (this.showPartialState = !this.hierarchical && o),
              (this.searchMaps = new Map()),
              (this.simpleSelect || this.radioSelect) && u && (this.currentChecked = u._id)
          }
          return (
            it(e, [
              {
                key: 'getNodeById',
                value: function(e) {
                  return this.tree.get(e)
                },
              },
              {
                key: 'getMatches',
                value: function(e) {
                  var t = this
                  if (this.searchMaps.has(e)) return this.searchMaps.get(e)
                  var n = -1,
                    r = e
                  this.searchMaps.forEach(function(t, o) {
                    e.startsWith(o) && o.length > n && ((n = o.length), (r = o))
                  })
                  var o = [],
                    a = this._getAddOnMatch(o, e)
                  r !== e
                    ? this.searchMaps.get(r).forEach(function(e) {
                        return a(t.getNodeById(e))
                      })
                    : this.tree.forEach(a)
                  return this.searchMaps.set(e, o), o
                },
              },
              {
                key: 'addParentsToTree',
                value: function(e, t) {
                  if (void 0 !== e) {
                    var n = this.getNodeById(e)
                    this.addParentsToTree(n._parent, t), (n.hide = !0), (n.matchInChildren = !0), t.set(e, n)
                  }
                },
              },
              {
                key: 'addChildrenToTree',
                value: function(e, t, n) {
                  var r = this
                  void 0 !== e &&
                    e.forEach(function(e) {
                      if (!n || !n.includes(e)) {
                        var o = r.getNodeById(e)
                        ;(o.matchInParent = !0), t.set(e, o), r.addChildrenToTree(o._children, t)
                      }
                    })
                },
              },
              {
                key: 'filterTree',
                value: function(e, t, n) {
                  var r = this,
                    o = this.getMatches(e.toLowerCase()),
                    a = new Map()
                  o.forEach(function(e) {
                    var i = r.getNodeById(e)
                    ;(i.hide = !1),
                      t && r.addParentsToTree(i._parent, a),
                      a.set(e, i),
                      t && n && r.addChildrenToTree(i._children, a, o)
                  })
                  var i = 0 === o.length
                  return (this.matchTree = a), { allNodesHidden: i, tree: a }
                },
              },
              {
                key: 'restoreNodes',
                value: function() {
                  return (
                    this.tree.forEach(function(e) {
                      e.hide = !1
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'restoreDefaultValues',
                value: function() {
                  var e = this
                  return (
                    this.defaultValues.forEach(function(t) {
                      e.setNodeCheckedState(t, !0)
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'togglePreviousChecked',
                value: function(e, t) {
                  var n = this.currentChecked
                  n && n !== e && (this.getNodeById(n).checked = !1), (this.currentChecked = t ? e : null)
                },
              },
              {
                key: 'setNodeCheckedState',
                value: function(e, t) {
                  var n = this.getNodeById(e)
                  ;(n.checked = t),
                    this.showPartialState && (n.partial = !1),
                    this.simpleSelect
                      ? this.togglePreviousChecked(e, t)
                      : this.radioSelect
                      ? (this.togglePreviousChecked(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        t || this.unCheckParents(n))
                      : (this.hierarchical || this.toggleChildren(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        this.hierarchical || t || this.unCheckParents(n))
                },
              },
              {
                key: 'unCheckParents',
                value: function(e) {
                  for (var t = e._parent; t; ) {
                    var n = this.getNodeById(t)
                    ;(n.checked = !1), (n.partial = Fe(n, '_children', this.getNodeById.bind(this))), (t = n._parent)
                  }
                },
              },
              {
                key: 'partialCheckParents',
                value: function(e) {
                  for (var t = this, n = e._parent; n; ) {
                    var r = this.getNodeById(n)
                    ;(r.checked = r._children.every(function(e) {
                      return t.getNodeById(e).checked
                    })),
                      (r.partial = Fe(r, '_children', this.getNodeById.bind(this))),
                      (n = r._parent)
                  }
                },
              },
              {
                key: 'toggleChildren',
                value: function(e, t) {
                  var n = this,
                    r = this.getNodeById(e)
                  ;(r.checked = t),
                    this.showPartialState && (r.partial = !1),
                    p(r._children) ||
                      r._children.forEach(function(e) {
                        return n.toggleChildren(e, t)
                      })
                },
              },
              {
                key: 'toggleNodeExpandState',
                value: function(e) {
                  var t = this.getNodeById(e)
                  return (t.expanded = !t.expanded), t.expanded || this.collapseChildren(t), this.tree
                },
              },
              {
                key: 'collapseChildren',
                value: function(e) {
                  var t = this
                  ;(e.expanded = !1),
                    p(e._children) ||
                      e._children.forEach(function(e) {
                        return t.collapseChildren(t.getNodeById(e))
                      })
                },
              },
              {
                key: 'getTreeAndTags',
                value: function() {
                  return { tree: this.tree, tags: this.tags }
                },
              },
              {
                key: 'handleNavigationKey',
                value: function(e, t, n, r, o, a, i) {
                  var l = this,
                    s = e && this.getNodeById(e),
                    c = at.getAction(s, n)
                  return Qe.has(c)
                    ? at.handleFocusNavigationkey(
                        t,
                        c,
                        s,
                        function(e) {
                          return l.getNodeById(e)
                        },
                        o
                      )
                    : s && t.has(s._id)
                    ? at.handleToggleNavigationkey(c, s, r, a, i)
                    : e
                },
              },
              {
                key: '_getAddOnMatch',
                value: function(e, t) {
                  var n = function(e, t) {
                    return e.label.toLowerCase().indexOf(t) >= 0
                  }
                  return (
                    'function' == typeof this.searchPredicate && (n = this.searchPredicate),
                    function(r) {
                      n(r, t) && e.push(r._id)
                    }
                  )
                },
              },
              {
                key: 'tags',
                get: function() {
                  var e = this
                  return this.radioSelect || this.simpleSelect
                    ? this.currentChecked
                      ? [this.getNodeById(this.currentChecked)]
                      : []
                    : Ue.getNodesMatching(this.tree, function(t, n, r) {
                        return (
                          t.checked &&
                            !e.hierarchical &&
                            Ue.markSubTreeVisited(t, r, function(t) {
                              return e.getNodeById(t)
                            }),
                          t.checked
                        )
                      })
                },
              },
            ]),
            e
          )
        })(),
        st =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ct = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      /*!
       * React Dropdown Tree Select
       * A lightweight, fast and highly customizable tree select component.
       * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
       * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
       * license MIT
       * see https://github.com/dowjones/react-dropdown-tree-select
       */
      var ut = l.a.bind(M.a),
        dt = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var n = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (n.initNewProps = function(e) {
                var t = e.data,
                  r = e.mode,
                  o = e.showDropdown,
                  a = e.showPartiallySelected,
                  i = e.searchPredicate
                n.treeManager = new lt({
                  data: t,
                  mode: r,
                  showPartiallySelected: a,
                  rootPrefixId: n.clientId,
                  searchPredicate: i,
                })
                var l = n.state.currentFocus && n.treeManager.getNodeById(n.state.currentFocus)
                l && (l._focused = !0),
                  n.setState(function(e) {
                    return st(
                      { showDropdown: /initial|always/.test(o) || !0 === e.showDropdown },
                      n.treeManager.getTreeAndTags()
                    )
                  })
              }),
              (n.resetSearchState = function() {
                return (
                  (n.searchInput.value = ''),
                  { tree: n.treeManager.restoreNodes(), searchModeOn: !1, allNodesHidden: !1 }
                )
              }),
              (n.handleClick = function(e, t) {
                n.setState(function(e) {
                  var t = 'always' === n.props.showDropdown || n.keepDropdownActive || !e.showDropdown
                  return (
                    t !== e.showDropdown &&
                      (t
                        ? document.addEventListener('click', n.handleOutsideClick, !1)
                        : document.removeEventListener('click', n.handleOutsideClick, !1)),
                    t ? n.props.onFocus() : n.props.onBlur(),
                    t ? { showDropdown: t } : st({ showDropdown: t }, n.resetSearchState())
                  )
                }, t)
              }),
              (n.handleOutsideClick = function(e) {
                'always' !== n.props.showDropdown && f(e, n.node) && n.handleClick()
              }),
              (n.onInputChange = function(e) {
                var t = n.treeManager.filterTree(e, n.props.keepTreeOnSearch, n.props.keepChildrenOnSearch),
                  r = t.allNodesHidden,
                  o = t.tree,
                  a = e.length > 0
                n.setState({ tree: o, searchModeOn: a, allNodesHidden: r })
              }),
              (n.onTagRemove = function(e, t) {
                var r = n.state.tags
                n.onCheckboxChange(e, !1, function(o) {
                  t && at.getNextFocusAfterTagDelete(e, r, o, n.searchInput).focus()
                })
              }),
              (n.onNodeToggle = function(e) {
                n.treeManager.toggleNodeExpandState(e)
                var t = n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree
                n.setState({ tree: t }),
                  'function' == typeof n.props.onNodeToggle && n.props.onNodeToggle(n.treeManager.getNodeById(e))
              }),
              (n.onCheckboxChange = function(e, t, r) {
                var o = n.props,
                  a = o.mode,
                  i = o.keepOpenOnSelect
                n.treeManager.setNodeCheckedState(e, t)
                var l = n.treeManager.tags,
                  s = ['simpleSelect', 'radioSelect'].indexOf(a) > -1,
                  c = !(s && !i) && n.state.showDropdown
                l.length || (n.treeManager.restoreDefaultValues(), (l = n.treeManager.tags))
                var u = {
                  tree: n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree,
                  tags: l,
                  showDropdown: c,
                }
                ;((s && !c) || n.props.clearSearchOnChange) && Object.assign(u, n.resetSearchState()),
                  s && !c && document.removeEventListener('click', n.handleOutsideClick, !1),
                  n.setState(u, function() {
                    r && r(l)
                  }),
                  n.props.onChange(n.treeManager.getNodeById(e), l)
              }),
              (n.onAction = function(e, t) {
                n.props.onAction(n.treeManager.getNodeById(e), t)
              }),
              (n.onInputFocus = function() {
                n.keepDropdownActive = !0
              }),
              (n.onInputBlur = function() {
                n.keepDropdownActive = !1
              }),
              (n.onTrigger = function(e) {
                n.handleClick(e, function() {
                  n.state.showDropdown && n.searchInput.focus()
                })
              }),
              (n.onKeyboardKeyDown = function(e) {
                var t = n.props,
                  r = t.readOnly,
                  o = t.mode,
                  a = n.state,
                  i = a.showDropdown,
                  l = a.tags,
                  s = a.searchModeOn,
                  c = a.currentFocus,
                  u = n.treeManager,
                  d = s ? u.matchTree : u.tree
                if (i || (!at.isValidKey(e.key, !1) && !/^\w$/i.test(e.key)))
                  if (i && at.isValidKey(e.key, !0)) {
                    var h = u.handleNavigationKey(c, d, e.key, r, !s, n.onCheckboxChange, n.onNodeToggle)
                    h !== c && n.setState({ currentFocus: h })
                  } else {
                    if (i && ['Escape', 'Tab'].indexOf(e.key) > -1)
                      return void ('simpleSelect' === o && d.has(c)
                        ? n.onCheckboxChange(c, !0)
                        : ((n.keepDropdownActive = !1), n.handleClick()))
                    if ('Backspace' !== e.key || !l.length || 0 !== n.searchInput.value.length) return
                    var p = l.pop()
                    n.onCheckboxChange(p._id, !1)
                  }
                else if (
                  (e.persist(),
                  n.handleClick(null, function() {
                    return n.onKeyboardKeyDown(e)
                  }),
                  /\w/i.test(e.key))
                )
                  return
                e.preventDefault()
              }),
              (n.getAriaAttributes = function() {
                var e = n.props,
                  t = e.mode,
                  r = e.texts
                return 'radioSelect' !== t ? {} : st({ role: 'radiogroup' }, E(r.label))
              }),
              (n.state = { searchModeOn: !1, currentFocus: void 0 }),
              (n.clientId = e.id || y.get(n)),
              n
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['Component']),
            ct(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.initNewProps(this.props)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('click', this.handleOutsideClick, !1)
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  this.initNewProps(e)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.disabled,
                    r = t.readOnly,
                    o = t.mode,
                    a = t.texts,
                    i = this.state,
                    l = i.showDropdown,
                    s = i.currentFocus,
                    c = i.tags,
                    u = {
                      disabled: n,
                      readOnly: r,
                      activeDescendant: s ? s + '_li' : void 0,
                      texts: a,
                      mode: o,
                      clientId: this.clientId,
                    }
                  return d.a.createElement(
                    'div',
                    {
                      id: this.clientId,
                      className: ut(this.props.className, 'react-dropdown-tree-select'),
                      ref: function(t) {
                        e.node = t
                      },
                    },
                    d.a.createElement(
                      'div',
                      {
                        className: ut(
                          'dropdown',
                          { 'simple-select': 'simpleSelect' === o },
                          { 'radio-select': 'radioSelect' === o }
                        ),
                      },
                      d.a.createElement(
                        V,
                        st({ onTrigger: this.onTrigger, showDropdown: l }, u, { tags: c }),
                        d.a.createElement(
                          A,
                          st(
                            {
                              inputRef: function(t) {
                                e.searchInput = t
                              },
                              tags: c,
                              onInputChange: this.onInputChange,
                              onFocus: this.onInputFocus,
                              onBlur: this.onInputBlur,
                              onTagRemove: this.onTagRemove,
                              onKeyDown: this.onKeyboardKeyDown,
                            },
                            u
                          )
                        )
                      ),
                      l &&
                        d.a.createElement(
                          'div',
                          st({ className: 'dropdown-content' }, this.getAriaAttributes()),
                          this.state.allNodesHidden
                            ? d.a.createElement('span', { className: 'no-matches' }, a.noMatches || 'No matches found')
                            : d.a.createElement(
                                De,
                                st(
                                  {
                                    data: this.state.tree,
                                    keepTreeOnSearch: this.props.keepTreeOnSearch,
                                    keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                    searchModeOn: this.state.searchModeOn,
                                    onAction: this.onAction,
                                    onCheckboxChange: this.onCheckboxChange,
                                    onNodeToggle: this.onNodeToggle,
                                    mode: o,
                                    showPartiallySelected: this.props.showPartiallySelected,
                                  },
                                  u
                                )
                              )
                        )
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      ;(dt.propTypes = {
        data: c.a.oneOfType([c.a.object, c.a.array]).isRequired,
        clearSearchOnChange: c.a.bool,
        keepTreeOnSearch: c.a.bool,
        keepChildrenOnSearch: c.a.bool,
        keepOpenOnSelect: c.a.bool,
        texts: c.a.shape({
          placeholder: c.a.string,
          noMatches: c.a.string,
          label: c.a.string,
          labelRemove: c.a.string,
        }),
        showDropdown: c.a.oneOf(['default', 'initial', 'always']),
        className: c.a.string,
        onChange: c.a.func,
        onAction: c.a.func,
        onNodeToggle: c.a.func,
        onFocus: c.a.func,
        onBlur: c.a.func,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        disabled: c.a.bool,
        readOnly: c.a.bool,
        id: c.a.string,
        searchPredicate: c.a.func,
      }),
        (dt.defaultProps = {
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
          texts: {},
          showDropdown: 'default',
        })
      t.default = dt
    },
  ])
})
//# sourceMappingURL=react-dropdown-tree-select.js.map
