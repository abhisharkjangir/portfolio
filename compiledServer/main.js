module.exports = (function(e) {
  var t = {}
  function r(o) {
    if (t[o]) return t[o].exports
    var n = (t[o] = { i: o, l: !1, exports: {} })
    return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  return (
    (r.e = function() {
      return Promise.resolve()
    }),
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var o = Object.create(null)
      if (
        (r.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          r.d(
            o,
            n,
            function(t) {
              return e[t]
            }.bind(null, n)
          )
      return o
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    (r.oe = function(e) {
      process.nextTick(function() {
        throw e
      })
    }),
    r((r.s = 0))
  )
})({
  '+5i3':
    /*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        hidden: 'main-hidden-206W-',
        root: 'main-root-afOfS',
        'gatsby-image-outer-wrapper': 'main-gatsby-image-outer-wrapper-2WjX0',
        'fadeup-enter': 'main-fadeup-enter-2D57A',
        'fadeup-enter-active': 'main-fadeup-enter-active-1eUBn',
        'fadedown-enter': 'main-fadedown-enter-2RrJb',
        'fadedown-enter-active': 'main-fadedown-enter-active-3lxeA',
        'fade-enter': 'main-fade-enter-1Nf2L',
        'fade-enter-active': 'main-fade-enter-active-1XqrM',
        overline: 'main-overline-BnxcE',
        main: 'main-main-24UiG'
      }
    },
  '+MiA':
    /*!***************************!*\
  !*** ./src/apis/index.js ***!
  \***************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var r
          ;(r =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && r(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var o,
            n,
            a = {},
            i = function(e) {
              return (e && a[e]) || ''
            },
            c = i
          ;(t.default = c),
            (o =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (o.register(
                a,
                'API_ENDPOINTS',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\apis\\index.js'
              ),
              o.register(
                i,
                'getApiEndPoint',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\apis\\index.js'
              ),
              o.register(
                c,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\apis\\index.js'
              )),
            (n =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '+pfj':
    /*!*************************************************!*\
  !*** ./src/containers/common/helmet/reducer.js ***!
  \*************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! immutable */ 'nuGg'),
            a = r(/*! ./constants */ '67/z')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = Object(n.fromJS)({ data: Object(n.fromJS)({}) }),
            l = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : u,
                t = arguments.length > 1 ? arguments[1] : void 0,
                r = t.type,
                o = t.data
              switch (r) {
                case a.SET_INFO:
                  return e.set('data', Object(n.fromJS)(o))
                default:
                  return e
              }
            },
            s = l
          ;(t.default = s),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'initialState',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\reducer.js'
              ),
              i.register(
                l,
                'helmetReducer',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\reducer.js'
              ),
              i.register(
                s,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\reducer.js'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '/Krw':
    /*!*********************************************!*\
  !*** ./src/components/section/section.scss ***!
  \*********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        section: 'section-section-1piec',
        relative: 'section-relative-DaTii'
      }
    },
  '/daj':
    /*!***************************************!*\
  !*** ./src/components/hero/hero.scss ***!
  \***************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        getintouch: 'hero-getintouch-2o5Eq',
        description: 'hero-description-3-s69',
        overline: 'hero-overline-JUqi7',
        title: 'hero-title-18qNz',
        subtitle: 'hero-subtitle-2pYVm',
        section: 'hero-section-2YV69'
      }
    },
  '/sd9':
    /*!****************************************!*\
  !*** ./src/components/social/index.js ***!
  \****************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./social */ 'CA8t')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  0:
    /*!***********************************************!*\
  !*** multi babel-polyfill ./server/loader.js ***!
  \***********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      r(/*! babel-polyfill */ '8Vax'),
        (e.exports = r(
          /*! C:\Users\ba21415\Desktop\universal-demo\server\loader.js */ 'zzXv'
        ))
    },
  '09b2':
    /*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/utils.js ***!
  \**************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.cacheProm = t.loadFromPromiseCache = t.cacheExport = t.loadFromCache = t.callForString = t.createDefaultRender = t.createElement = t.findExport = t.resolveExport = t.tryRequire = t.DefaultError = t.DefaultLoading = t.babelInterop = t.isWebpack = t.isServer = t.isTest = void 0)
      var o,
        n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
          },
        a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              },
        i = (function(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          return (t.default = e), t
        })(r(/*! react */ 'cDcd')),
        c = r(/*! ./requireById */ 'aVE6'),
        u = (o = c) && o.__esModule ? o : { default: o }
      t.isTest = !1
      var l = (t.isServer = !(
          'undefined' != typeof window &&
          window.document &&
          window.document.createElement
        )),
        s =
          ((t.isWebpack = function() {
            return void 0 !== r
          }),
          (t.babelInterop = function(e) {
            return e &&
              'object' === (void 0 === e ? 'undefined' : a(e)) &&
              e.__esModule
              ? e.default
              : e
          })),
        d =
          ((t.DefaultLoading = function() {
            return i.createElement('div', null, 'Loading...')
          }),
          (t.DefaultError = function(e) {
            var t = e.error
            return i.createElement('div', null, 'Error: ', t && t.message)
          }),
          (t.tryRequire = function(e) {
            try {
              return (0, u.default)(e)
            } catch (e) {
              0
            }
            return null
          }),
          (t.resolveExport = function(e, t, r, o, n, a, i) {
            var c =
                arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
              u = d(e, t)
            if (r && e) {
              var l = 'undefined' == typeof window,
                s = { isServer: l, isSync: c }
              r(e, s, n, a)
            }
            return o && u && p(u, o, n, i), u
          }),
          (t.findExport = function(e, t) {
            return 'function' == typeof t
              ? t(e)
              : null === t
              ? e
              : e && 'object' === (void 0 === e ? 'undefined' : a(e)) && t
              ? e[t]
              : s(e)
          })),
        _ = (t.createElement = function(e, t) {
          return i.isValidElement(e)
            ? i.cloneElement(e, t)
            : i.createElement(e, t)
        }),
        f =
          ((t.createDefaultRender = function(e, t) {
            return function(r, o, a, i) {
              return a
                ? _(e, r)
                : i
                ? _(t, n({}, r, { error: i }))
                : _(o || e, r)
            }
          }),
          (t.callForString = function(e, t) {
            return 'function' == typeof e ? e(t) : e
          })),
        p =
          ((t.loadFromCache = function(e, t, r) {
            return !l && r[f(e, t)]
          }),
          (t.cacheExport = function(e, t, r, o) {
            return (o[f(t, r)] = e)
          }))
      ;(t.loadFromPromiseCache = function(e, t, r) {
        return r[f(e, t)]
      }),
        (t.cacheProm = function(e, t, r, o) {
          return (o[f(t, r)] = e)
        })
    },
  '0Rch':
    /*!********************************************!*\
  !*** ./src/components/pages/home/home.jsx ***!
  \********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./home.scss */ 'Ds/V'
            ),
            _home_scss__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _home_scss__WEBPACK_IMPORTED_MODULE_1__
            ),
            _hero_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ../../hero/hero */ 'NyCy'
            ),
            _about_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ../../about/about */ 'LW+Q'
            ),
            _jobs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ../../jobs */ '582B'
            ),
            _work_work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              /*! ../../work/work */ 'ELCj'
            ),
            _projects_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              /*! ../../projects/projects */ 'nN7j'
            ),
            _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              /*! ../../contact */ 'G4Lk'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            Home = (function(_React$PureComponent) {
              _inherits(Home, _React$PureComponent)
              var _super = _createSuper(Home)
              function Home() {
                return (
                  _classCallCheck(this, Home), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(Home, [
                  {
                    key: 'render',
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'home',
                          className:
                            _home_scss__WEBPACK_IMPORTED_MODULE_1___default.a
                              .home
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hero_hero__WEBPACK_IMPORTED_MODULE_2__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _about_about__WEBPACK_IMPORTED_MODULE_3__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _jobs__WEBPACK_IMPORTED_MODULE_4__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _work_work__WEBPACK_IMPORTED_MODULE_5__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _projects_projects__WEBPACK_IMPORTED_MODULE_6__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _contact__WEBPACK_IMPORTED_MODULE_7__.default,
                          null
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Home
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = Home,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Home,
                'Home',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\pages\\home\\home.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\pages\\home\\home.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  '0TPh':
    /*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('hoist-non-react-statics')
    },
  '0eKw':
    /*!*********************************************!*\
  !*** ./src/components/common/icon/index.js ***!
  \*********************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./icon */ 'y6mh')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  '0gVH':
    /*!********************************************!*\
  !*** ./src/components/contact/contact.jsx ***!
  \********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! ../section */ 'G7fN'),
            c = r(/*! ./contact.scss */ 'jRZC'),
            u = r.n(c),
            l = r(/*! ../heading/heading */ 'vuz3')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var s,
            d,
            _ = function() {
              return a.a.createElement(
                i.default,
                { id: 'contact' },
                a.a.createElement(
                  'div',
                  { className: u.a.contact },
                  a.a.createElement(l.default, {
                    text: "What's Next?",
                    center: !0
                  }),
                  a.a.createElement(
                    'h4',
                    { className: u.a.title },
                    'Get In Touch'
                  ),
                  a.a.createElement(
                    'p',
                    null,
                    'Although I‘m not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I‘ll try my best to answer your email!'
                  ),
                  a.a.createElement(
                    'a',
                    {
                      href:
                        'mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,',
                      className: u.a.bigButton
                    },
                    'Say Hello'
                  )
                )
              )
            },
            f = _
          ;(t.default = f),
            (s =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (s.register(
                _,
                'Contact',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\contact\\contact.jsx'
              ),
              s.register(
                f,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\contact\\contact.jsx'
              )),
            (d =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && d(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '1fKG':
    /*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('redux-saga')
    },
  '1gEx':
    /*!************************************!*\
  !*** ./src/assets/images/nasa.png ***!
  \************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = r.p + 'static/assets/nasa.55e61c5d.png'
    },
  '1peN':
    /*!************************************************!*\
  !*** ./src/components/common/icon/twitter.jsx ***!
  \************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 612 612'
                },
                a.a.createElement('title', null, 'Twitter'),
                a.a.createElement('path', {
                  d:
                    'M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411\r c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513\r c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101\r c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104\r c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194\r c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485\r c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z'
                })
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Twitter',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\twitter.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\twitter.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '20nU':
    /*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var r
          function o(e, t) {
            var r = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e)
              t &&
                (o = o.filter(function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
          }
          function n(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? o(Object(r), !0).forEach(function(t) {
                    a(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : o(Object(r)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          }
          function a(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = r),
              e
            )
          }
          ;(r =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && r(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i = { PROD: 'prod', STAG: 'stag', LOCAL: 'local' },
            c = { URL: 'https://abhisharjangir.com/', env: 'Staging' },
            u = { URL: 'https://abhisharjangir.com/', env: 'Production' },
            l = { URL: 'https://abhisharjangir.com/', env: 'Local' },
            s = {},
            d = Object({ NODE_ENV: 'production' }).REACT_APP_ENV,
            _ = {}
          switch (d) {
            case i.PROD:
              _ = n({}, u, {}, s)
              break
            case i.STAG:
              _ = n({}, c, {}, s)
              break
            case i.LOCAL:
              _ = n({}, l, {}, s)
              break
            default:
              _ = n({}, c, {}, s)
          }
          var f,
            p,
            m = _
          ;(t.default = m),
            (f =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (f.register(
                i,
                'ENV_TYPES',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                c,
                'STAG_ENV',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                u,
                'PROD_ENV',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                l,
                'LOCAL_ENV',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                s,
                'COMMON_ENV',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                d,
                'appEnv',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                _,
                'ENV',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              ),
              f.register(
                m,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\config.js'
              )),
            (p =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && p(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          )
        )
    },
  '24ww':
    /*!*******************************!*\
  !*** ./src/assets/resume.pdf ***!
  \*******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = r.p + 'static/assets/resume.eb55e88c.pdf'
    },
  '2Yea':
    /*!*****************************************!*\
  !*** ./src/components/about/about.scss ***!
  \*****************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        aboutFlexContainer: 'about-aboutFlexContainer-3G1og',
        aboutContent: 'about-aboutContent-BEhNe',
        aboutPic: 'about-aboutPic-i7mSP'
      }
    },
  '2ZrK':
    /*!******************************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/structure/immutable/index.js ***!
  \******************************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o,
        n = r(/*! immutable */ 'nuGg')
      var a = {
        fromJS: function(e) {
          return (0, n.fromJS)(e, function(e, t) {
            return n.Iterable.isIndexed(t) ? t.toList() : t.toMap()
          })
        },
        getIn: ((o = r(/*! ./getIn */ '9/cL')) && o.__esModule
          ? o
          : { default: o }
        ).default,
        merge: function(e, t) {
          return e.merge(t)
        },
        toJS: function(e) {
          return n.Iterable.isIterable(e) ? e.toJS() : e
        }
      }
      t.default = a
    },
  '2kqy':
    /*!************************************************!*\
  !*** ./src/containers/common/helmet/index.jsx ***!
  \************************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./helmet */ '9JHH')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  '3E+Y':
    /*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('tiny-invariant')
    },
  '3Fcl':
    /*!*******************************!*\
  !*** ./src/utils/throttle.js ***!
  \*******************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var r
          ;(r =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && r(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var o,
            n,
            a = function(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 100,
                r = null
              return function() {
                for (
                  var o = arguments.length, n = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  n[a] = arguments[a]
                null === r &&
                  (r = setTimeout(function() {
                    e.apply(void 0, n), (r = null)
                  }, t))
              }
            },
            i = a
          ;(t.default = i),
            (o =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (o.register(
                a,
                'throttle',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\throttle.js'
              ),
              o.register(
                i,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\throttle.js'
              )),
            (n =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '3QwP':
    /*!**************************************!*\
  !*** ./src/components/menu/menu.jsx ***!
  \**************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! prop-types */ 'rf6O'),
            c = r.n(i),
            u = r(/*! react-router-dom */ 'oncg'),
            l = r(/*! ./menu.scss */ 'MJ5s'),
            s = r.n(l),
            d = r(/*! ../../assets/resume.pdf */ '24ww'),
            _ = r.n(d)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var f = function(e) {
              return {
                transform: 'translateX('.concat(e ? '0' : '100', 'vw)'),
                visibility: ''.concat(e ? 'visible' : 'hidden')
              }
            },
            p = function(e) {
              var t = e.isMenuOpen,
                r = e.toggleMenu,
                o = e.links
              return a.a.createElement(
                'div',
                {
                  className: s.a.menu,
                  onClick: function() {
                    return r()
                  },
                  style: f(t)
                },
                a.a.createElement(
                  'aside',
                  { className: s.a.aside },
                  a.a.createElement(
                    'div',
                    { className: s.a.nav },
                    a.a.createElement(
                      'ol',
                      null,
                      o.map(function(e) {
                        var t = e.name,
                          r = e.to
                        return a.a.createElement(
                          'li',
                          { key: t },
                          a.a.createElement(u.Link, { to: r }, t)
                        )
                      })
                    ),
                    a.a.createElement(
                      'a',
                      { className: s.a.resumeLink, href: _.a },
                      'Resume'
                    )
                  )
                )
              )
            }
          p.propTypes = {
            isMenuOpen: c.a.bool.isRequired,
            toggleMenu: c.a.func.isRequired,
            links: c.a.array.isRequired
          }
          var m,
            b,
            v = p
          ;(t.default = v),
            (m =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (m.register(
                f,
                'getMenuStyle',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\menu\\menu.jsx'
              ),
              m.register(
                p,
                'Menu',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\menu\\menu.jsx'
              ),
              m.register(
                v,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\menu\\menu.jsx'
              )),
            (b =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '3UD+':
    /*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = function(e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e)
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function() {
                return t.l
              }
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function() {
                return t.i
              }
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1)
        }
        return t
      }
    },
  '3kFc':
    /*!************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/actions.js ***!
  \************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.routerActions = t.goForward = t.goBack = t.go = t.replace = t.push = t.CALL_HISTORY_METHOD = t.onLocationChanged = t.LOCATION_CHANGE = void 0)
      t.LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
      t.onLocationChanged = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        return {
          type: '@@router/LOCATION_CHANGE',
          payload: { location: e, action: t, isFirstRendering: r }
        }
      }
      t.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD'
      var o = function(e) {
          return function() {
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
              r[o] = arguments[o]
            return {
              type: '@@router/CALL_HISTORY_METHOD',
              payload: { method: e, args: r }
            }
          }
        },
        n = o('push')
      t.push = n
      var a = o('replace')
      t.replace = a
      var i = o('go')
      t.go = i
      var c = o('goBack')
      t.goBack = c
      var u = o('goForward')
      t.goForward = u
      var l = { push: n, replace: a, go: i, goBack: c, goForward: u }
      t.routerActions = l
    },
  '4Rtg':
    /*!**********************************************************!*\
  !*** ./node_modules/connected-react-router/immutable.js ***!
  \**********************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = r(/*! ./lib/immutable */ '5ZG9')
    },
  '4WpZ':
    /*!********************************************!*\
  !*** ./src/components/pages/home/index.js ***!
  \********************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./home */ '0Rch')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  '582B':
    /*!**************************************!*\
  !*** ./src/components/jobs/index.js ***!
  \**************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./jobs */ 'KNu3')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  '5ZG9':
    /*!**************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/immutable.js ***!
  \**************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'LOCATION_CHANGE', {
          enumerable: !0,
          get: function() {
            return c.LOCATION_CHANGE
          }
        }),
        Object.defineProperty(t, 'CALL_HISTORY_METHOD', {
          enumerable: !0,
          get: function() {
            return c.CALL_HISTORY_METHOD
          }
        }),
        Object.defineProperty(t, 'onLocationChanged', {
          enumerable: !0,
          get: function() {
            return c.onLocationChanged
          }
        }),
        Object.defineProperty(t, 'push', {
          enumerable: !0,
          get: function() {
            return c.push
          }
        }),
        Object.defineProperty(t, 'replace', {
          enumerable: !0,
          get: function() {
            return c.replace
          }
        }),
        Object.defineProperty(t, 'go', {
          enumerable: !0,
          get: function() {
            return c.go
          }
        }),
        Object.defineProperty(t, 'goBack', {
          enumerable: !0,
          get: function() {
            return c.goBack
          }
        }),
        Object.defineProperty(t, 'goForward', {
          enumerable: !0,
          get: function() {
            return c.goForward
          }
        }),
        Object.defineProperty(t, 'routerActions', {
          enumerable: !0,
          get: function() {
            return c.routerActions
          }
        }),
        Object.defineProperty(t, 'routerMiddleware', {
          enumerable: !0,
          get: function() {
            return u.default
          }
        }),
        (t.createMatchSelector = t.getSearch = t.getHash = t.getAction = t.getLocation = t.connectRouter = t.ConnectedRouter = void 0)
      var o = l(r(/*! ./ConnectedRouter */ 'NZGD')),
        n = l(r(/*! ./reducer */ 'VYZd')),
        a = l(r(/*! ./selectors */ 'LrNv')),
        i = l(r(/*! ./structure/immutable */ '2ZrK')),
        c = r(/*! ./actions */ '3kFc'),
        u = l(r(/*! ./middleware */ 'S9CH'))
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var s = (0, o.default)(i.default)
      t.ConnectedRouter = s
      var d = (0, n.default)(i.default)
      t.connectRouter = d
      var _ = (0, a.default)(i.default),
        f = _.getLocation,
        p = _.getAction,
        m = _.getHash,
        b = _.getSearch,
        v = _.createMatchSelector
      ;(t.createMatchSelector = v),
        (t.getSearch = b),
        (t.getHash = m),
        (t.getAction = p),
        (t.getLocation = f)
    },
  '5msD':
    /*!*******************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireUniversalModule.js ***!
  \*******************************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.clearChunks = t.flushModuleIds = t.flushChunkNames = t.MODULE_IDS = t.CHUNK_NAMES = void 0)
      var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
          }
          return e
        }
      t.default = function(e, t, o, u) {
        var l = t.key,
          s = t.timeout,
          d = void 0 === s ? 15e3 : s,
          _ = t.onLoad,
          f = t.onError,
          p = t.isDynamic,
          m = t.modCache,
          b = t.promCache,
          v = t.usesBabelPlugin,
          h = c(p, e, t, o),
          y = h.chunkName,
          E = h.path,
          g = h.resolve,
          O = h.load
        return {
          requireSync: function(e, t) {
            var o = (0, n.loadFromCache)(y, e, m)
            if (!o) {
              var a = void 0
              if (!(0, n.isWebpack)() && E) {
                var i = (0, n.callForString)(E, e) || ''
                a = (0, n.tryRequire)(i)
              } else if ((0, n.isWebpack)() && g) {
                var c = (0, n.callForString)(g, e)
                r.m[c] && (a = (0, n.tryRequire)(c))
              }
              a && (o = (0, n.resolveExport)(a, l, _, y, e, t, m, !0))
            }
            return o
          },
          requireAsync: function(e, t) {
            var r = (0, n.loadFromCache)(y, e, m)
            if (r) return Promise.resolve(r)
            var o = (0, n.loadFromPromiseCache)(y, e, b)
            if (o) return o
            var a = new Promise(function(r, o) {
              var a = function(e) {
                  if (
                    ((e = e || new Error('timeout exceeded')),
                    clearTimeout(i),
                    f)
                  ) {
                    var t = 'undefined' == typeof window
                    f(e, { isServer: t })
                  }
                  o(e)
                },
                i = d && setTimeout(a, d),
                c = function(o) {
                  clearTimeout(i)
                  var c = (0, n.resolveExport)(o, l, _, y, e, t, m)
                  if (c) return r(c)
                  a(new Error('export not found'))
                },
                u = O(e, { resolve: c, reject: a })
              u && 'function' == typeof u.then && u.then(c).catch(a)
            })
            return (0, n.cacheProm)(a, y, e, b), a
          },
          addModule: function(e) {
            if (n.isServer || n.isTest) {
              if (y) {
                var r = (0, n.callForString)(y, e)
                if (v)
                  (t && !!t.ignoreBabelRename) || (r = r.replace(/\//g, '-'))
                if ((r && a.add(r), !n.isTest)) return r
              }
              if ((0, n.isWebpack)()) {
                var o = (0, n.callForString)(g, e)
                return o && i.add(o), o
              }
              if (!(0, n.isWebpack)()) {
                var c = (0, n.callForString)(E, e)
                return c && i.add(c), c
              }
            }
          },
          shouldUpdate: function(r, o) {
            var a = (0, n.callForString)(y, r),
              i = c(p, e, t, o)
            return a !== (0, n.callForString)(i.chunkName, o)
          },
          asyncOnly: (!E && !g) || 'function' == typeof y
        }
      }
      var n = r(/*! ./utils */ '09b2'),
        a = (t.CHUNK_NAMES = new Set()),
        i = (t.MODULE_IDS = new Set())
      ;(t.flushChunkNames = function() {
        var e = Array.from(a)
        return a.clear(), e
      }),
        (t.flushModuleIds = function() {
          var e = Array.from(i)
          return i.clear(), e
        }),
        (t.clearChunks = function() {
          a.clear(), i.clear()
        })
      var c = function(e, t, r, n) {
        if (e) {
          var a = 'function' == typeof t ? t(n) : t
          return r && (a = o({}, a, r)), a
        }
        var i =
          'function' == typeof t
            ? t
            : function() {
                return t
              }
        return {
          file: 'default',
          id: r.id || 'default',
          chunkName: r.chunkName || 'default',
          resolve: r.resolve || '',
          path: r.path || '',
          load: i,
          ignoreBabelRename: !0
        }
      }
    },
  '67/z':
    /*!***************************************************!*\
  !*** ./src/containers/common/helmet/constants.js ***!
  \***************************************************/
    /*! exports provided: HELMET_STATE_KEY, NAMESPACE, SET_INFO */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o
          r.d(t, 'HELMET_STATE_KEY', function() {
            return i
          }),
            r.d(t, 'NAMESPACE', function() {
              return c
            }),
            r.d(t, 'SET_INFO', function() {
              return u
            }),
            (o =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var n,
            a,
            i = 'helmet',
            c = 'helmet/',
            u = ''.concat(c, 'SET_INFO')
          ;(n =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (n.register(
              i,
              'HELMET_STATE_KEY',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\constants.js'
            ),
            n.register(
              c,
              'NAMESPACE',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\constants.js'
            ),
            n.register(
              u,
              'SET_INFO',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\constants.js'
            )),
            (a =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && a(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '7ITC':
    /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react-dom/server')
    },
  '7QCE':
    /*!************************************************!*\
  !*** ./src/containers/pages/home/constants.js ***!
  \************************************************/
    /*! exports provided: HOME_STATE_KEY, NAMESPACE, FETCH_USERS, FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o
          r.d(t, 'HOME_STATE_KEY', function() {
            return i
          }),
            r.d(t, 'NAMESPACE', function() {
              return c
            }),
            r.d(t, 'FETCH_USERS', function() {
              return u
            }),
            r.d(t, 'FETCHING_USERS', function() {
              return l
            }),
            r.d(t, 'FETCH_USERS_SUCCESS', function() {
              return s
            }),
            r.d(t, 'FETCH_USERS_ERROR', function() {
              return d
            }),
            (o =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var n,
            a,
            i = 'home',
            c = 'home/',
            u = ''.concat(c, 'FETCH_USERS'),
            l = ''.concat(c, 'FETCHING_USERS'),
            s = ''.concat(c, 'FETCH_USERS_SUCCESS'),
            d = ''.concat(c, 'FETCH_USERS_ERROR')
          ;(n =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (n.register(
              i,
              'HOME_STATE_KEY',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\constants.js'
            ),
            n.register(
              c,
              'NAMESPACE',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\constants.js'
            ),
            n.register(
              u,
              'FETCH_USERS',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\constants.js'
            ),
            n.register(
              l,
              'FETCHING_USERS',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\constants.js'
            ),
            n.register(
              s,
              'FETCH_USERS_SUCCESS',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\constants.js'
            ),
            n.register(
              d,
              'FETCH_USERS_ERROR',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\constants.js'
            )),
            (a =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && a(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  '7mHa':
    /*!************************************************!*\
  !*** ./src/components/common/image/image.scss ***!
  \************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = { placeholder: 'image-placeholder-6hSbg' }
    },
  '8Vax':
    /*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('babel-polyfill')
    },
  '8lb2':
    /*!*************************************!*\
  !*** ./src/components/app/index.js ***!
  \*************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./app */ 'Zka1')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  '9/cL':
    /*!******************************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/structure/immutable/getIn.js ***!
  \******************************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o,
        n = r(/*! immutable */ 'nuGg'),
        a =
          (o = r(/*! ../plain/getIn */ 'aP/T')) && o.__esModule
            ? o
            : { default: o }
      var i = function(e, t) {
        return n.Iterable.isIterable(e) ? e.getIn(t) : (0, a.default)(e, t)
      }
      t.default = i
    },
  '9JHH':
    /*!*************************************************!*\
  !*** ./src/containers/common/helmet/helmet.jsx ***!
  \*************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! react-router */ 'MGin'
            ),
            react_router__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react_router__WEBPACK_IMPORTED_MODULE_1__
            ),
            react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! react-redux */ 'h74D'
            ),
            react_redux__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              react_redux__WEBPACK_IMPORTED_MODULE_2__
            ),
            react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! react-helmet */ 'zIXN'
            ),
            react_helmet__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react_helmet__WEBPACK_IMPORTED_MODULE_3__
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! prop-types */ 'rf6O'
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__
            ),
            reselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              /*! reselect */ 'MWqi'
            ),
            reselect__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
              reselect__WEBPACK_IMPORTED_MODULE_5__
            ),
            _utils_meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              /*! ../../../utils/meta */ 'AsVr'
            ),
            _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              /*! ./actions */ 'MZxF'
            ),
            _selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              /*! ./selectors */ 'HvDf'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function ownKeys(e, t) {
            var r = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e)
              t &&
                (o = o.filter(function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
          }
          function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? ownKeys(Object(r), !0).forEach(function(t) {
                    _defineProperty(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          }
          function _defineProperty(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = r),
              e
            )
          }
          function _objectWithoutProperties(e, t) {
            if (null == e) return {}
            var r,
              o,
              n = _objectWithoutPropertiesLoose(e, t)
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e)
              for (o = 0; o < a.length; o++)
                (r = a[o]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (n[r] = e[r]))
            }
            return n
          }
          function _objectWithoutPropertiesLoose(e, t) {
            if (null == e) return {}
            var r,
              o,
              n = {},
              a = Object.keys(e)
            for (o = 0; o < a.length; o++)
              (r = a[o]), t.indexOf(r) >= 0 || (n[r] = e[r])
            return n
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            SITE_URL =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.siteURL,
            FACEBOOK_APP_ID = 'XXXXXXXXX',
            defaultTitle =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.title,
            defaultDescription =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default
                .description,
            defaultKeywords =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.keywords,
            defaultImage =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.image,
            defaultTwitter =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.twitter,
            defaultSep =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.sep,
            defaultUpdated =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default.updated,
            defaultPublished =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default
                .published,
            defaultContentType =
              _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default.default
                .contentType,
            Page = (function(_React$PureComponent) {
              _inherits(Page, _React$PureComponent)
              var _super = _createSuper(Page)
              function Page() {
                return (
                  _classCallCheck(this, Page), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(Page, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      var e = this.props,
                        t = e.location.pathname,
                        r = e.setInfo
                      _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default[t] &&
                        r(_utils_meta__WEBPACK_IMPORTED_MODULE_6__.default[t])
                    }
                  },
                  {
                    key: 'componentWillReceiveProps',
                    value: function(e) {
                      var t = e.location.pathname,
                        r = this.props,
                        o = r.location.pathname,
                        n = r.setInfo
                      o !== t &&
                        _utils_meta__WEBPACK_IMPORTED_MODULE_6__.default[t] &&
                        n(_utils_meta__WEBPACK_IMPORTED_MODULE_6__.default[t])
                    }
                  },
                  {
                    key: 'getMetaTags',
                    value: function(e, t) {
                      var r = e.title,
                        o = e.description,
                        n = e.image,
                        a = e.contentType,
                        i = e.twitter,
                        c = e.noCrawl,
                        u = e.published,
                        l = e.updated,
                        s = e.category,
                        d = e.tags,
                        _ = e.keywords,
                        f = r
                          ? (r + defaultSep + defaultTitle).substring(0, 60)
                          : defaultTitle,
                        p = o ? o.substring(0, 155) : defaultDescription,
                        m = n ? ''.concat(SITE_URL).concat(n) : defaultImage,
                        b = [
                          { itemprop: 'name', content: f },
                          { itemprop: 'description', content: p },
                          { itemprop: 'image', content: m },
                          { name: 'description', content: p },
                          { name: 'keywords', content: _ || defaultKeywords },
                          {
                            name: 'twitter:card',
                            content: 'summary_large_image'
                          },
                          { name: 'twitter:site', content: defaultTwitter },
                          { name: 'twitter:title', content: f },
                          { name: 'twitter:description', content: p },
                          {
                            name: 'twitter:creator',
                            content: i || defaultTwitter
                          },
                          { name: 'twitter:image:src', content: m },
                          { property: 'og:title', content: f },
                          {
                            property: 'og:type',
                            content: a || defaultContentType
                          },
                          { property: 'og:url', content: SITE_URL + t },
                          { property: 'og:image', content: m },
                          { property: 'og:description', content: p },
                          { property: 'og:site_name', content: defaultTitle },
                          { property: 'fb:app_id', content: FACEBOOK_APP_ID }
                        ]
                      return (
                        c
                          ? b.push({
                              name: 'robots',
                              content: 'noindex, nofollow'
                            })
                          : b.push({
                              name: 'robots',
                              content: 'index, follow'
                            }),
                        u &&
                          b.push({
                            name: 'article:published_time',
                            content: u || defaultPublished
                          }),
                        l &&
                          b.push({
                            name: 'article:modified_time',
                            content: l || defaultUpdated
                          }),
                        s && b.push({ name: 'article:section', content: s }),
                        d && b.push({ name: 'article:tag', content: d }),
                        b
                      )
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = this.props,
                        t = e.children,
                        r = e.id,
                        o = e.className,
                        n = e.location,
                        a = e.data,
                        i = _objectWithoutProperties(e, [
                          'children',
                          'id',
                          'className',
                          'location',
                          'data'
                        ]),
                        c = n.pathname
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { id: r, className: o },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a,
                          {
                            htmlAttributes: {
                              lang: 'en',
                              itemscope: void 0,
                              itemtype: 'http://schema.org/'.concat(
                                i.schema || 'WebPage'
                              )
                            },
                            title: a.title
                              ? a.title + defaultSep + defaultTitle
                              : defaultTitle,
                            link: [{ rel: 'canonical', href: SITE_URL + c }],
                            meta: this.getMetaTags(
                              _objectSpread({}, i, {}, a),
                              c
                            )
                          }
                        ),
                        t
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Page
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent)
          Page.propTypes = {
            title:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            description:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            image:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            contentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            twitter:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            noCrawl:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            published:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            updated:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            category:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            tags:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            keywords:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            children:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
                .isRequired,
            id:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            className:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
                .isRequired,
            location:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
                .isRequired,
            setInfo:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
            data:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
                .isRequired
          }
          var mapStateToProps = Object(
              reselect__WEBPACK_IMPORTED_MODULE_5__.createStructuredSelector
            )({
              data: Object(
                _selectors__WEBPACK_IMPORTED_MODULE_8__.getHelmetData
              )()
            }),
            mapDispatchToProps = function(e) {
              return {
                setInfo: function(t) {
                  return e(
                    Object(_actions__WEBPACK_IMPORTED_MODULE_7__.setHelmetInfo)(
                      t
                    )
                  )
                }
              }
            },
            _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(
              mapStateToProps,
              mapDispatchToProps
            )(
              Object(react_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(Page)
            ),
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                SITE_URL,
                'SITE_URL',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                FACEBOOK_APP_ID,
                'FACEBOOK_APP_ID',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultTitle,
                'defaultTitle',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultDescription,
                'defaultDescription',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultKeywords,
                'defaultKeywords',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultImage,
                'defaultImage',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultTwitter,
                'defaultTwitter',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultSep,
                'defaultSep',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultUpdated,
                'defaultUpdated',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultPublished,
                'defaultPublished',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                defaultContentType,
                'defaultContentType',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                Page,
                'Page',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                mapStateToProps,
                'mapStateToProps',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                mapDispatchToProps,
                'mapDispatchToProps',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\helmet.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  '9MSh':
    /*!***********************************!*\
  !*** external "resolve-pathname" ***!
  \***********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('resolve-pathname')
    },
  A63B:
    /*!****************************************!*\
  !*** ./src/components/email/email.jsx ***!
  \****************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _email_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./email.scss */ 'Dfjr'
            ),
            _email_scss__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _email_scss__WEBPACK_IMPORTED_MODULE_1__
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            Email = (function(_React$PureComponent) {
              _inherits(Email, _React$PureComponent)
              var _super = _createSuper(Email)
              function Email() {
                return (
                  _classCallCheck(this, Email), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(Email, [
                  {
                    key: 'render',
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'email',
                          className:
                            _email_scss__WEBPACK_IMPORTED_MODULE_1___default.a
                              .email
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            {
                              href:
                                'mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,'
                            },
                            'abhisharjangir@ymail.com'
                          )
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Email
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = Email,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Email,
                'Email',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\email\\email.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\email\\email.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  AsVr:
    /*!***************************!*\
  !*** ./src/utils/meta.js ***!
  \***************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! ../assets/images/abhishar.jpg */ 'SH4R'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u =
              'Abhishar Jangir is a software engineer based in Gurgaon, IN, who specializes in developing websites.',
            l = {
              default: {
                title: 'Software Engineer',
                description: u,
                image: a.a,
                twitter: '@abhishar_jangir',
                sep: ' | ',
                siteURL: 'https://abhisharjangir.com',
                keywords:
                  'Abhishar Jangir, Abhishar, Jangir, Front end developer, reactjs developer, web developer, mern developer, javascript developer, abhisharkjangir,abhishar.jangir',
                facebookAppId: 'XXXXXXXXX',
                updated: new Date().toDateString(),
                published: new Date().toDateString(),
                contentType: 'website'
              },
              '/': { id: 'home', title: 'Abhishar Jangir', description: u },
              '/404': {
                pathname: '/404',
                id: 'notfound',
                title: 'oh! no',
                description: 'There&lsquo;s not much left here for you.'
              }
            }
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'description',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\meta.js'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\meta.js'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  CA8t:
    /*!******************************************!*\
  !*** ./src/components/social/social.jsx ***!
  \******************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _social_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./social.scss */ 'CfUZ'
            ),
            _social_scss__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _social_scss__WEBPACK_IMPORTED_MODULE_1__
            ),
            _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ../../constants */ 'X7BR'
            ),
            _common_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ../common/icon */ '0eKw'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            Social = (function(_React$PureComponent) {
              _inherits(Social, _React$PureComponent)
              var _super = _createSuper(Social)
              function Social() {
                return (
                  _classCallCheck(this, Social), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(Social, [
                  {
                    key: 'render',
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'social',
                          className:
                            _social_scss__WEBPACK_IMPORTED_MODULE_1___default.a
                              .social
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'ul',
                          null,
                          _constants__WEBPACK_IMPORTED_MODULE_2__.socialList.map(
                            function(e) {
                              var t = e.name,
                                r = e.url
                              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'li',
                                { key: t },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  'a',
                                  {
                                    href: r,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': t
                                  },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _common_icon__WEBPACK_IMPORTED_MODULE_3__.default,
                                    { name: t }
                                  )
                                )
                              )
                            }
                          )
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Social
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = Social,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Social,
                'Social',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\social\\social.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\social\\social.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  CcSZ:
    /*!***********************************************!*\
  !*** ./src/components/common/icon/folder.jsx ***!
  \***********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 60 60'
                },
                a.a.createElement('title', null, 'Folder'),
                a.a.createElement('path', {
                  d:
                    'M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0\r c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177\r C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5\r H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083\r c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953\r c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z'
                })
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Folder',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\folder.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\folder.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  CfUZ:
    /*!*******************************************!*\
  !*** ./src/components/social/social.scss ***!
  \*******************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = { social: 'social-social-1kb9T' }
    },
  'DI/g':
    /*!*******************************!*\
  !*** ./src/utils/isServer.js ***!
  \*******************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var r
          ;(r =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && r(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var o,
            n,
            a = !(
              'undefined' != typeof window &&
              window.document &&
              window.document.createElement
            ),
            i = a
          ;(t.default = i),
            (o =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (o.register(
                a,
                'isServer',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\isServer.js'
              ),
              o.register(
                i,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\isServer.js'
              )),
            (n =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && n(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  Dfjr:
    /*!*****************************************!*\
  !*** ./src/components/email/email.scss ***!
  \*****************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = { email: 'email-email-aM3y6' }
    },
  DowU:
    /*!************************************!*\
  !*** ./src/containers/app/app.jsx ***!
  \************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! react-redux */ 'h74D'),
            c = r(/*! react-router-dom */ 'oncg'),
            u = r(/*! ../../components/app */ '8lb2')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          var l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            s = function(e) {
              var t = Object(c.useLocation)()
              return (
                Object(n.useEffect)(function() {
                  if (t.hash) {
                    var e = t.hash.substring(1)
                    setTimeout(function() {
                      var t = document.getElementById(e)
                      t && t.scrollIntoView()
                    }, 100)
                  }
                }),
                a.a.createElement(u.default, e)
              )
            }
          l(s, 'useLocation{location}\nuseEffect{}', function() {
            return [c.useLocation]
          })
          var d,
            _,
            f = Object(i.connect)(null, null)(s)
          ;(t.default = f),
            (d =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                s,
                'App',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\app\\app.jsx'
              ),
              d.register(
                f,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\app\\app.jsx'
              )),
            (_ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && _(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  'Ds/V':
    /*!*********************************************!*\
  !*** ./src/components/pages/home/home.scss ***!
  \*********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = { home: 'home-home-3HeFN' }
    },
  E4SY:
    /*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react-lazyload')
    },
  ELCj:
    /*!**************************************!*\
  !*** ./src/components/work/work.jsx ***!
  \**************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! ../section */ 'G7fN'),
            c = r(/*! ./work.scss */ 'grKG'),
            u = r.n(c),
            l = r(/*! ../heading/heading */ 'vuz3'),
            s = r(/*! ../common/icon */ '0eKw'),
            d = r(/*! ../../assets/images/meuzic.png */ 'g4yK'),
            _ = r.n(d),
            f = r(/*! ../../assets/images/wordbook.png */ 'PN6K'),
            p = r.n(f),
            m = r(/*! ../../assets/images/nasa.png */ '1gEx'),
            b = r.n(m),
            v = r(/*! ../common/image/image */ 'ujeq')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var h,
            y,
            E = function() {
              var e = [
                {
                  title: 'Meuzic',
                  description:
                    'Meuzic is a proressive web app for downloading music in MP3 and MP4 format with create playlist feature without signin/signup.',
                  tech: ['ReactJS', 'Redux', 'SASS', 'NodeJS'],
                  links: [{ url: 'https://meuzic.com', iconName: 'external' }],
                  image: _.a,
                  type: 'Featured Project',
                  url: 'https://meuzic.com'
                },
                {
                  title: 'Nasa Explorer',
                  description:
                    'A web app for exploring Epic, Apod & Earth which comsumes Nasa APIs.',
                  tech: ['ReactJS', 'Material UI', 'Nasa APIs'],
                  links: [
                    {
                      url: 'https://nasa.abhisharjangir.com',
                      iconName: 'external'
                    }
                  ],
                  image: b.a,
                  type: 'Featured Project',
                  url: 'https://nasa.abhisharjangir.com'
                },
                {
                  title: 'Word Book',
                  description:
                    'Word book is a web app for learning daily new english words which have features ie storing favrioute word, google translation, word quiz etc.',
                  tech: ['ReactJS', 'Wordnik API', 'SASS'],
                  links: [
                    {
                      url: 'https://wordbook.abhisharjangir.com',
                      iconName: 'external'
                    }
                  ],
                  image: p.a,
                  type: 'Featured Project',
                  url: 'https://wordbook.abhisharjangir.com'
                }
              ]
              return a.a.createElement(
                i.default,
                { id: 'work' },
                a.a.createElement(l.default, {
                  text: "Some Things I've Built"
                }),
                e.map(function(e) {
                  var t = e.type,
                    r = e.title,
                    o = e.description,
                    n = e.links,
                    i = e.image,
                    c = e.tech,
                    l = e.url
                  return a.a.createElement(
                    'div',
                    { className: u.a.work },
                    a.a.createElement(
                      'div',
                      { className: u.a.content },
                      a.a.createElement('h4', null, t),
                      a.a.createElement('h5', null, r),
                      a.a.createElement(
                        'div',
                        { className: u.a.description },
                        o
                      ),
                      a.a.createElement(
                        'ul',
                        { className: u.a.list },
                        c.map(function(e) {
                          return a.a.createElement('li', { key: e }, e)
                        })
                      ),
                      a.a.createElement(
                        'div',
                        { className: u.a.link },
                        n.map(function(e) {
                          var t = e.url,
                            r = e.iconName
                          return a.a.createElement(
                            'a',
                            {
                              href: t,
                              target: '_blank',
                              rel: 'nofollow noopener noreferrer',
                              'aria-label': ''
                            },
                            a.a.createElement(s.default, { name: r })
                          )
                        })
                      )
                    ),
                    a.a.createElement(
                      'a',
                      {
                        href: l,
                        target: '_blank',
                        rel: 'nofollow noopener noreferrer',
                        'aria-label': '',
                        className: u.a.imgContainer
                      },
                      a.a.createElement(v.default, {
                        src: i,
                        className: u.a.image,
                        alt: ''
                      })
                    )
                  )
                })
              )
            },
            g = E
          ;(t.default = g),
            (h =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (h.register(
                E,
                'Work',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\work\\work.jsx'
              ),
              h.register(
                g,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\work\\work.jsx'
              )),
            (y =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && y(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  G4Lk:
    /*!*****************************************!*\
  !*** ./src/components/contact/index.js ***!
  \*****************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./contact */ '0gVH')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  G7fN:
    /*!*****************************************!*\
  !*** ./src/components/section/index.js ***!
  \*****************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./section */ 'OBjG')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  GH1V:
    /*!****************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/helpers.js ***!
  \****************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.__handleAfter = t.__update = void 0)
      var o = a(r(/*! hoist-non-react-statics */ '0TPh')),
        n = a(r(/*! ./index */ 'Gr0I'))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__update = function(e, t, r) {
        var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
        return r ? (t.error || (t.error = null), i(e, t, o, n, a)) : t
      }
      var i = (t.__handleAfter = function(e, t, r, a, i) {
        var c = t.mod,
          u = t.error
        c && !u
          ? ((0, o.default)(n.default, c, { preload: !0, preloadWeak: !0 }),
            e.onAfter &&
              (0, e.onAfter)({ isMount: r, isSync: a, isServer: i }, c))
          : u && e.onError && e.onError(u)
        return t
      })
    },
  Gr0I:
    /*!**************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/index.js ***!
  \**************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      ;(function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.setHasBabelPlugin = t.ReportChunks = t.MODULE_IDS = t.CHUNK_NAMES = void 0)
        var o =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t]
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
              }
              return e
            },
          n = (function() {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r]
                ;(o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  'value' in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o)
              }
            }
            return function(t, r, o) {
              return r && e(t.prototype, r), o && e(t, o), t
            }
          })(),
          a = r(/*! ./requireUniversalModule */ '5msD')
        Object.defineProperty(t, 'CHUNK_NAMES', {
          enumerable: !0,
          get: function() {
            return a.CHUNK_NAMES
          }
        }),
          Object.defineProperty(t, 'MODULE_IDS', {
            enumerable: !0,
            get: function() {
              return a.MODULE_IDS
            }
          })
        var i = r(/*! ./report-chunks */ 'LeAe')
        Object.defineProperty(t, 'ReportChunks', {
          enumerable: !0,
          get: function() {
            return f(i).default
          }
        }),
          (t.default = function(e) {
            var t,
              r,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = a.render,
              f = a.loading,
              E = void 0 === f ? d.DefaultLoading : f,
              g = a.error,
              O = void 0 === g ? d.DefaultError : g,
              L = a.minDelay,
              P = void 0 === L ? 0 : L,
              D = a.alwaysDelay,
              M = void 0 !== D && D,
              C = a.testBabelPlugin,
              H = void 0 !== C && C,
              w = a.loadingTransition,
              k = void 0 === w || w,
              j = v(a, [
                'render',
                'loading',
                'error',
                'minDelay',
                'alwaysDelay',
                'testBabelPlugin',
                'loadingTransition'
              ]),
              U = i || (0, d.createDefaultRender)(E, O),
              R = h || H
            return (
              (j.isDynamic = R),
              (j.usesBabelPlugin = h),
              (j.modCache = {}),
              (j.promCache = {}),
              (r = t = (function(t) {
                function r(e, t) {
                  p(this, r)
                  var o = m(
                    this,
                    (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t)
                  )
                  return (
                    (o.update = function(e) {
                      var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        r =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        n =
                          arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3]
                      o._initialized &&
                        (e.error || (e.error = null), o.handleAfter(e, t, r, n))
                    }),
                    (o.state = o.init(o.props, o.context)),
                    (o.state.error = null),
                    o
                  )
                }
                return (
                  b(r, t),
                  n(
                    r,
                    [
                      {
                        key: 'requireAsyncInner',
                        value: function(e, t, r, o, n) {
                          var a = this
                          !r.mod && k && this.update({ mod: null, props: t })
                          var i = new Date()
                          e(t, o)
                            .then(function(e) {
                              var r = { mod: e, props: t, context: o },
                                c = new Date() - i
                              if (c < P)
                                return setTimeout(function() {
                                  return a.update(r, n)
                                }, P - c)
                              a.update(r, n)
                            })
                            .catch(function(e) {
                              return a.update({
                                error: e,
                                props: t,
                                context: o
                              })
                            })
                        }
                      },
                      {
                        key: 'handleBefore',
                        value: function(e, t) {
                          var r =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2]
                          if (this.props.onBefore) {
                            var o = this.props.onBefore,
                              n = { isMount: e, isSync: t, isServer: r }
                            o(n)
                          }
                        }
                      },
                      {
                        key: 'handleAfter',
                        value: function(e, t, o, n) {
                          var a = e.mod,
                            i = e.error
                          a && !i
                            ? ((0, l.default)(r, a, {
                                preload: !0,
                                preloadWeak: !0
                              }),
                              this.props.onAfter &&
                                (0, this.props.onAfter)(
                                  { isMount: t, isSync: o, isServer: n },
                                  a
                                ))
                            : i && this.props.onError && this.props.onError(i)
                          this.setState(e)
                        }
                      },
                      {
                        key: 'init',
                        value: function(t, r) {
                          var o = (0, s.default)(e, j, t),
                            n = o.addModule,
                            a = o.requireSync,
                            i = o.requireAsync,
                            c = o.asyncOnly,
                            u = void 0
                          try {
                            u = a(t, r)
                          } catch (e) {
                            return (0, _.__update)(
                              t,
                              { error: e, props: t, context: r },
                              this._initialized
                            )
                          }
                          this._asyncOnly = c
                          var l = n(t)
                          return (
                            r.report && r.report(l),
                            u || d.isServer
                              ? (this.handleBefore(!0, !0, d.isServer),
                                (0, _.__update)(
                                  t,
                                  {
                                    asyncOnly: c,
                                    props: t,
                                    mod: u,
                                    context: r
                                  },
                                  this._initialized,
                                  !0,
                                  !0,
                                  d.isServer
                                ))
                              : (this.handleBefore(!0, !1),
                                this.requireAsyncInner(
                                  i,
                                  t,
                                  {
                                    props: t,
                                    asyncOnly: c,
                                    mod: u,
                                    context: r
                                  },
                                  r,
                                  !0
                                ),
                                { mod: u, asyncOnly: c, context: r, props: t })
                          )
                        }
                      }
                    ],
                    [
                      {
                        key: 'preload',
                        value: function(t) {
                          var o =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {}
                          t = t || {}
                          var n = (0, s.default)(e, j, t),
                            a = n.requireAsync,
                            i = n.requireSync,
                            c = void 0
                          try {
                            c = i(t, o)
                          } catch (e) {
                            return Promise.reject(e)
                          }
                          return Promise.resolve()
                            .then(function() {
                              return c || a(t, o)
                            })
                            .then(function(e) {
                              return (
                                (0, l.default)(r, e, {
                                  preload: !0,
                                  preloadWeak: !0
                                }),
                                e
                              )
                            })
                        }
                      },
                      {
                        key: 'preloadWeak',
                        value: function(t) {
                          var o =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {}
                          t = t || {}
                          var n = (0, s.default)(e, j, t),
                            a = n.requireSync,
                            i = a(t, o)
                          return (
                            i &&
                              (0, l.default)(r, i, {
                                preload: !0,
                                preloadWeak: !0
                              }),
                            i
                          )
                        }
                      }
                    ]
                  ),
                  n(
                    r,
                    [
                      {
                        key: 'componentDidMount',
                        value: function() {
                          this._initialized = !0
                        }
                      },
                      {
                        key: 'componentDidUpdate',
                        value: function(t) {
                          var r = this
                          if (R || this._asyncOnly) {
                            var o = (0, s.default)(e, j, this.props, t),
                              n = o.requireSync,
                              a = o.requireAsync
                            if ((0, o.shouldUpdate)(this.props, t)) {
                              var i = void 0
                              try {
                                i = n(this.props, this.context)
                              } catch (e) {
                                return this.update({ error: e })
                              }
                              if ((this.handleBefore(!1, !!i), !i))
                                return this.requireAsyncInner(a, this.props, {
                                  mod: i
                                })
                              var c = { mod: i }
                              if (M)
                                return (
                                  k && this.update({ mod: null }),
                                  void setTimeout(function() {
                                    return r.update(c, !1, !0)
                                  }, P)
                                )
                              this.update(c, !1, !0)
                            }
                          }
                        }
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function() {
                          this._initialized = !1
                        }
                      },
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props,
                            t = e.isLoading,
                            r = e.error,
                            o = v(e, ['isLoading', 'error']),
                            n = this.state,
                            a = n.mod,
                            i = n.error
                          return U(o, a, t, r || i)
                        }
                      }
                    ],
                    [
                      {
                        key: 'getDerivedStateFromProps',
                        value: function(t, r) {
                          var n = (0, s.default)(e, j, t, r.props),
                            a = n.requireSync,
                            i = n.shouldUpdate
                          if (y() && i(r.props, t)) {
                            var c = a(t, r.context)
                            return o({}, r, { mod: c })
                          }
                          return null
                        }
                      }
                    ]
                  ),
                  r
                )
              })(c.default.Component)),
              (t.contextTypes = {
                store: u.default.object,
                report: u.default.func
              }),
              r
            )
          })
        var c = f(r(/*! react */ 'cDcd')),
          u = f(r(/*! prop-types */ 'rf6O')),
          l = f(r(/*! hoist-non-react-statics */ '0TPh')),
          s = (r(/*! vm */ 'r5oh'), f(a)),
          d = r(/*! ./utils */ '09b2'),
          _ = r(/*! ./helpers */ 'GH1V')
        function f(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function p(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function m(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
        }
        function b(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t))
        }
        function v(e, t) {
          var r = {}
          for (var o in e)
            t.indexOf(o) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]))
          return r
        }
        var h = !1,
          y = function() {
            return e.hot && !1
          }
        t.setHasBabelPlugin = function() {
          h = !0
        }
      }.call(this, r(/*! ./../../webpack/buildin/module.js */ 'YuTi')(e)))
    },
  HXvF:
    /*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        logo: 'header-logo-3xoBS',
        hamburger: 'header-hamburger-K0Oyu',
        header: 'header-header-3v_A5',
        links: 'header-links-2grfC',
        resumeButton: 'header-resumeButton-3xWeO',
        hamburgerBox: 'header-hamburgerBox-Bbc6-',
        hamburgerInner: 'header-hamburgerInner-1oAxX'
      }
    },
  HvDf:
    /*!***************************************************!*\
  !*** ./src/containers/common/helmet/selectors.js ***!
  \***************************************************/
    /*! exports provided: helmetState, getHelmetData */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          r.d(t, 'helmetState', function() {
            return u
          }),
            r.d(t, 'getHelmetData', function() {
              return l
            })
          var o,
            n = r(/*! reselect */ 'MWqi'),
            a = r(/*! ./constants */ '67/z')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function(e) {
              return e.get(a.HELMET_STATE_KEY)
            },
            l = function() {
              return Object(n.createSelector)(u, function(e) {
                return e.get('data').toJS()
              })
            }
          ;(i =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              u,
              'helmetState',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\selectors.js'
            ),
            i.register(
              l,
              'getHelmetData',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\selectors.js'
            )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  JRJN:
    /*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      e.exports = r(/*! ./cjs/history.min.js */ 'Jihk')
    },
  Jihk:
    /*!*************************************************!*\
  !*** ./node_modules/history/cjs/history.min.js ***!
  \*************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      function o(e) {
        return e && 'object' == typeof e && 'default' in e ? e.default : e
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = o(r(/*! resolve-pathname */ '9MSh')),
        a = o(r(/*! value-equal */ 'LCjP'))
      r(/*! tiny-warning */ 'QpMV')
      var i = o(r(/*! tiny-invariant */ '3E+Y'))
      function c() {
        return (c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
          }).apply(this, arguments)
      }
      function u(e) {
        return '/' === e.charAt(0) ? e : '/' + e
      }
      function l(e) {
        return '/' === e.charAt(0) ? e.substr(1) : e
      }
      function s(e, t) {
        return (function(e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== '/?#'.indexOf(e.charAt(t.length))
          )
        })(e, t)
          ? e.substr(t.length)
          : e
      }
      function d(e) {
        return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e
      }
      function _(e) {
        var t = e || '/',
          r = '',
          o = '',
          n = t.indexOf('#')
        ;-1 !== n && ((o = t.substr(n)), (t = t.substr(0, n)))
        var a = t.indexOf('?')
        return (
          -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a))),
          { pathname: t, search: '?' === r ? '' : r, hash: '#' === o ? '' : o }
        )
      }
      function f(e) {
        var t = e.pathname,
          r = e.search,
          o = e.hash,
          n = t || '/'
        return (
          r && '?' !== r && (n += '?' === r.charAt(0) ? r : '?' + r),
          o && '#' !== o && (n += '#' === o.charAt(0) ? o : '#' + o),
          n
        )
      }
      function p(e, t, r, o) {
        var a
        'string' == typeof e
          ? ((a = _(e)).state = t)
          : (void 0 === (a = c({}, e)).pathname && (a.pathname = ''),
            a.search
              ? '?' !== a.search.charAt(0) && (a.search = '?' + a.search)
              : (a.search = ''),
            a.hash
              ? '#' !== a.hash.charAt(0) && (a.hash = '#' + a.hash)
              : (a.hash = ''),
            void 0 !== t && void 0 === a.state && (a.state = t))
        try {
          a.pathname = decodeURI(a.pathname)
        } catch (e) {
          throw e instanceof URIError
            ? new URIError(
                'Pathname "' +
                  a.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : e
        }
        return (
          r && (a.key = r),
          o
            ? a.pathname
              ? '/' !== a.pathname.charAt(0) &&
                (a.pathname = n(a.pathname, o.pathname))
              : (a.pathname = o.pathname)
            : a.pathname || (a.pathname = '/'),
          a
        )
      }
      function m() {
        var e = null,
          t = []
        return {
          setPrompt: function(t) {
            return (
              (e = t),
              function() {
                e === t && (e = null)
              }
            )
          },
          confirmTransitionTo: function(t, r, o, n) {
            if (null != e) {
              var a = 'function' == typeof e ? e(t, r) : e
              'string' == typeof a
                ? 'function' == typeof o
                  ? o(a, n)
                  : n(!0)
                : n(!1 !== a)
            } else n(!0)
          },
          appendListener: function(e) {
            var r = !0
            function o() {
              r && e.apply(void 0, arguments)
            }
            return (
              t.push(o),
              function() {
                ;(r = !1),
                  (t = t.filter(function(e) {
                    return e !== o
                  }))
              }
            )
          },
          notifyListeners: function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o]
            t.forEach(function(e) {
              return e.apply(void 0, r)
            })
          }
        }
      }
      var b = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      function v(e, t) {
        t(window.confirm(e))
      }
      function h() {
        try {
          return window.history.state || {}
        } catch (e) {
          return {}
        }
      }
      var y = {
        hashbang: {
          encodePath: function(e) {
            return '!' === e.charAt(0) ? e : '!/' + l(e)
          },
          decodePath: function(e) {
            return '!' === e.charAt(0) ? e.substr(1) : e
          }
        },
        noslash: { encodePath: l, decodePath: u },
        slash: { encodePath: u, decodePath: u }
      }
      function E(e) {
        var t = e.indexOf('#')
        return -1 === t ? e : e.slice(0, t)
      }
      function g() {
        var e = window.location.href,
          t = e.indexOf('#')
        return -1 === t ? '' : e.substring(t + 1)
      }
      function O(e) {
        window.location.replace(E(window.location.href) + '#' + e)
      }
      function L(e, t, r) {
        return Math.min(Math.max(e, t), r)
      }
      ;(t.createBrowserHistory = function(e) {
        void 0 === e && (e = {}), b || i(!1)
        var t = window.history,
          r = (function() {
            var e = window.navigator.userAgent
            return (
              ((-1 === e.indexOf('Android 2.') &&
                -1 === e.indexOf('Android 4.0')) ||
                -1 === e.indexOf('Mobile Safari') ||
                -1 !== e.indexOf('Chrome') ||
                -1 !== e.indexOf('Windows Phone')) &&
              window.history &&
              'pushState' in window.history
            )
          })(),
          o = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          n = e,
          a = n.forceRefresh,
          l = void 0 !== a && a,
          _ = n.getUserConfirmation,
          y = void 0 === _ ? v : _,
          E = n.keyLength,
          g = void 0 === E ? 6 : E,
          O = e.basename ? d(u(e.basename)) : ''
        function L(e) {
          var t = e || {},
            r = t.key,
            o = t.state,
            n = window.location,
            a = n.pathname + n.search + n.hash
          return O && (a = s(a, O)), p(a, o, r)
        }
        function P() {
          return Math.random()
            .toString(36)
            .substr(2, g)
        }
        var D = m()
        function M(e) {
          c(I, e),
            (I.length = t.length),
            D.notifyListeners(I.location, I.action)
        }
        function C(e) {
          ;(function(e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS')
            )
          })(e) || k(L(e.state))
        }
        function H() {
          k(L(h()))
        }
        var w = !1
        function k(e) {
          w
            ? ((w = !1), M())
            : D.confirmTransitionTo(e, 'POP', y, function(t) {
                t
                  ? M({ action: 'POP', location: e })
                  : (function(e) {
                      var t = I.location,
                        r = U.indexOf(t.key)
                      ;-1 === r && (r = 0)
                      var o = U.indexOf(e.key)
                      ;-1 === o && (o = 0)
                      var n = r - o
                      n && ((w = !0), T(n))
                    })(e)
              })
        }
        var j = L(h()),
          U = [j.key]
        function R(e) {
          return O + f(e)
        }
        function T(e) {
          t.go(e)
        }
        var A = 0
        function G(e) {
          1 === (A += e) && 1 === e
            ? (window.addEventListener('popstate', C),
              o && window.addEventListener('hashchange', H))
            : 0 === A &&
              (window.removeEventListener('popstate', C),
              o && window.removeEventListener('hashchange', H))
        }
        var S = !1,
          I = {
            length: t.length,
            action: 'POP',
            location: j,
            createHref: R,
            push: function(e, o) {
              var n = p(e, o, P(), I.location)
              D.confirmTransitionTo(n, 'PUSH', y, function(e) {
                if (e) {
                  var o = R(n),
                    a = n.key,
                    i = n.state
                  if (r)
                    if ((t.pushState({ key: a, state: i }, null, o), l))
                      window.location.href = o
                    else {
                      var c = U.indexOf(I.location.key),
                        u = U.slice(0, c + 1)
                      u.push(n.key), (U = u), M({ action: 'PUSH', location: n })
                    }
                  else window.location.href = o
                }
              })
            },
            replace: function(e, o) {
              var n = 'REPLACE',
                a = p(e, o, P(), I.location)
              D.confirmTransitionTo(a, n, y, function(e) {
                if (e) {
                  var o = R(a),
                    i = a.key,
                    c = a.state
                  if (r)
                    if ((t.replaceState({ key: i, state: c }, null, o), l))
                      window.location.replace(o)
                    else {
                      var u = U.indexOf(I.location.key)
                      ;-1 !== u && (U[u] = a.key), M({ action: n, location: a })
                    }
                  else window.location.replace(o)
                }
              })
            },
            go: T,
            goBack: function() {
              T(-1)
            },
            goForward: function() {
              T(1)
            },
            block: function(e) {
              void 0 === e && (e = !1)
              var t = D.setPrompt(e)
              return (
                S || (G(1), (S = !0)),
                function() {
                  return S && ((S = !1), G(-1)), t()
                }
              )
            },
            listen: function(e) {
              var t = D.appendListener(e)
              return (
                G(1),
                function() {
                  G(-1), t()
                }
              )
            }
          }
        return I
      }),
        (t.createHashHistory = function(e) {
          void 0 === e && (e = {}), b || i(!1)
          var t = window.history,
            r = (window.navigator.userAgent.indexOf('Firefox'), e),
            o = r.getUserConfirmation,
            n = void 0 === o ? v : o,
            a = r.hashType,
            l = void 0 === a ? 'slash' : a,
            _ = e.basename ? d(u(e.basename)) : '',
            h = y[l],
            L = h.encodePath,
            P = h.decodePath
          function D() {
            var e = P(g())
            return _ && (e = s(e, _)), p(e)
          }
          var M = m()
          function C(e) {
            c(x, e),
              (x.length = t.length),
              M.notifyListeners(x.location, x.action)
          }
          var H = !1,
            w = null
          function k() {
            var e = g(),
              t = L(e)
            if (e !== t) O(t)
            else {
              var r = D(),
                o = x.location
              if (
                !H &&
                (function(e, t) {
                  return (
                    e.pathname === t.pathname &&
                    e.search === t.search &&
                    e.hash === t.hash
                  )
                })(o, r)
              )
                return
              if (w === f(r)) return
              ;(w = null),
                (function(e) {
                  H
                    ? ((H = !1), C())
                    : M.confirmTransitionTo(e, 'POP', n, function(t) {
                        t
                          ? C({ action: 'POP', location: e })
                          : (function(e) {
                              var t = x.location,
                                r = T.lastIndexOf(f(t))
                              ;-1 === r && (r = 0)
                              var o = T.lastIndexOf(f(e))
                              ;-1 === o && (o = 0)
                              var n = r - o
                              n && ((H = !0), A(n))
                            })(e)
                      })
                })(r)
            }
          }
          var j = g(),
            U = L(j)
          j !== U && O(U)
          var R = D(),
            T = [f(R)]
          function A(e) {
            t.go(e)
          }
          var G = 0
          function S(e) {
            1 === (G += e) && 1 === e
              ? window.addEventListener('hashchange', k)
              : 0 === G && window.removeEventListener('hashchange', k)
          }
          var I = !1,
            x = {
              length: t.length,
              action: 'POP',
              location: R,
              createHref: function(e) {
                var t = document.querySelector('base'),
                  r = ''
                return (
                  t && t.getAttribute('href') && (r = E(window.location.href)),
                  r + '#' + L(_ + f(e))
                )
              },
              push: function(e, t) {
                var r = p(e, void 0, void 0, x.location)
                M.confirmTransitionTo(r, 'PUSH', n, function(e) {
                  if (e) {
                    var t = f(r),
                      o = L(_ + t)
                    if (g() !== o) {
                      ;(w = t),
                        (function(e) {
                          window.location.hash = e
                        })(o)
                      var n = T.lastIndexOf(f(x.location)),
                        a = T.slice(0, n + 1)
                      a.push(t), (T = a), C({ action: 'PUSH', location: r })
                    } else C()
                  }
                })
              },
              replace: function(e, t) {
                var r = 'REPLACE',
                  o = p(e, void 0, void 0, x.location)
                M.confirmTransitionTo(o, r, n, function(e) {
                  if (e) {
                    var t = f(o),
                      n = L(_ + t)
                    g() !== n && ((w = t), O(n))
                    var a = T.indexOf(f(x.location))
                    ;-1 !== a && (T[a] = t), C({ action: r, location: o })
                  }
                })
              },
              go: A,
              goBack: function() {
                A(-1)
              },
              goForward: function() {
                A(1)
              },
              block: function(e) {
                void 0 === e && (e = !1)
                var t = M.setPrompt(e)
                return (
                  I || (S(1), (I = !0)),
                  function() {
                    return I && ((I = !1), S(-1)), t()
                  }
                )
              },
              listen: function(e) {
                var t = M.appendListener(e)
                return (
                  S(1),
                  function() {
                    S(-1), t()
                  }
                )
              }
            }
          return x
        }),
        (t.createMemoryHistory = function(e) {
          void 0 === e && (e = {})
          var t = e,
            r = t.getUserConfirmation,
            o = t.initialEntries,
            n = void 0 === o ? ['/'] : o,
            a = t.initialIndex,
            i = void 0 === a ? 0 : a,
            u = t.keyLength,
            l = void 0 === u ? 6 : u,
            s = m()
          function d(e) {
            c(E, e),
              (E.length = E.entries.length),
              s.notifyListeners(E.location, E.action)
          }
          function _() {
            return Math.random()
              .toString(36)
              .substr(2, l)
          }
          var b = L(i, 0, n.length - 1),
            v = n.map(function(e) {
              return p(e, void 0, 'string' == typeof e ? _() : e.key || _())
            }),
            h = f
          function y(e) {
            var t = L(E.index + e, 0, E.entries.length - 1),
              o = E.entries[t]
            s.confirmTransitionTo(o, 'POP', r, function(e) {
              e ? d({ action: 'POP', location: o, index: t }) : d()
            })
          }
          var E = {
            length: v.length,
            action: 'POP',
            location: v[b],
            index: b,
            entries: v,
            createHref: h,
            push: function(e, t) {
              var o = p(e, t, _(), E.location)
              s.confirmTransitionTo(o, 'PUSH', r, function(e) {
                if (e) {
                  var t = E.index + 1,
                    r = E.entries.slice(0)
                  r.length > t ? r.splice(t, r.length - t, o) : r.push(o),
                    d({ action: 'PUSH', location: o, index: t, entries: r })
                }
              })
            },
            replace: function(e, t) {
              var o = 'REPLACE',
                n = p(e, t, _(), E.location)
              s.confirmTransitionTo(n, o, r, function(e) {
                e && ((E.entries[E.index] = n), d({ action: o, location: n }))
              })
            },
            go: y,
            goBack: function() {
              y(-1)
            },
            goForward: function() {
              y(1)
            },
            canGo: function(e) {
              var t = E.index + e
              return 0 <= t && t < E.entries.length
            },
            block: function(e) {
              return void 0 === e && (e = !1), s.setPrompt(e)
            },
            listen: function(e) {
              return s.appendListener(e)
            }
          }
          return E
        }),
        (t.createLocation = p),
        (t.locationsAreEqual = function(e, t) {
          return (
            e.pathname === t.pathname &&
            e.search === t.search &&
            e.hash === t.hash &&
            e.key === t.key &&
            a(e.state, t.state)
          )
        }),
        (t.parsePath = _),
        (t.createPath = f)
    },
  KNu3:
    /*!**************************************!*\
  !*** ./src/components/jobs/jobs.jsx ***!
  \**************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! ../section */ 'G7fN'),
            c = r(/*! ./jobs.scss */ 'lqWb'),
            u = r.n(c),
            l = r(/*! ../heading/heading */ 'vuz3')
          function s(e, t) {
            return (
              (function(e) {
                if (Array.isArray(e)) return e
              })(e) ||
              (function(e, t) {
                if (
                  'undefined' == typeof Symbol ||
                  !(Symbol.iterator in Object(e))
                )
                  return
                var r = [],
                  o = !0,
                  n = !1,
                  a = void 0
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(o = (i = c.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    o = !0
                  );
                } catch (e) {
                  ;(n = !0), (a = e)
                } finally {
                  try {
                    o || null == c.return || c.return()
                  } finally {
                    if (n) throw a
                  }
                }
                return r
              })(e, t) ||
              (function(e, t) {
                if (!e) return
                if ('string' == typeof e) return d(e, t)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === r && e.constructor && (r = e.constructor.name)
                if ('Map' === r || 'Set' === r) return Array.from(r)
                if (
                  'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return d(e, t)
              })(e, t) ||
              (function() {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()
            )
          }
          function d(e, t) {
            ;(null == t || t > e.length) && (t = e.length)
            for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]
            return o
          }
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          var _ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            f = [
              {
                company: 'Bed Bath & Beyond',
                title: ' System Analyst',
                url: 'https://www.bedbathandbeyond.com',
                range: 'Oct 2k18 - Present',
                html:
                  '<ul><li>Create several reusable components in ReactJS.</li><li>Build new features and enhancemnents.</li><li>Communicate with onshore business and design team to collect the requirements.</li><li>Code debugging and bug fixing.</li></ul>'
              },
              {
                company: 'Chimes Group',
                title: ' Front End Developer',
                url: 'https://chimesgroup.in/',
                range: 'Aug 2k16 - Oct 2k18',
                html:
                  '<ul><li>Worked on different client&lsquo;s websites from scratch i.e Dauble, Dauble Business.</li><li>Build admin dashboard for MuscleMatics.</li><li>Build hybrid andriod & IOS mobile app for dynamic forms to collect client specific information in react native.</li><li>Build react app to draw the construction pipelines on ESRI & LeafLet map.</li></ul>'
              },
              {
                company: 'Medzin',
                title: ' Front End Developer',
                url: 'https://medzin.in/',
                range: 'Nov 2k15 - Jul 2k16',
                html:
                  '<ul><li>Build company&lsquo;s websites ie Medzin, Medzin Business </li><li>Build dashboard to manage Pharmacies, Doctors, Labs, Medicines & orders.</li></ul>'
              }
            ],
            p = function() {
              var e = s(Object(n.useState)(1), 2),
                t = e[0],
                r = e[1],
                o = f[t - 1],
                c = o.title,
                d = o.company,
                _ = o.url,
                p = o.range,
                m = o.html
              return a.a.createElement(
                i.default,
                {
                  id: 'experience',
                  style: { position: 'relative', maxWidth: '700px' }
                },
                a.a.createElement(l.default, { text: "Where I've Worked" }),
                a.a.createElement(
                  'div',
                  { className: u.a.jobTabs },
                  a.a.createElement(
                    'ul',
                    { className: u.a.tablist },
                    f.map(function(e, o) {
                      return a.a.createElement(
                        'li',
                        null,
                        a.a.createElement(
                          'button',
                          {
                            onClick: function() {
                              return r(o + 1)
                            },
                            type: 'button',
                            className: t === o + 1 ? u.a.buttonActive : void 0
                          },
                          e.company
                        )
                      )
                    })
                  ),
                  a.a.createElement(
                    'div',
                    { className: u.a.jobContent },
                    a.a.createElement(
                      'div',
                      { className: u.a.jobTabContent },
                      a.a.createElement(
                        'h4',
                        { className: u.a.jobTitle },
                        a.a.createElement('span', null, c),
                        a.a.createElement(
                          'span',
                          { className: u.a.jobCompany },
                          a.a.createElement('span', null, ' @ '),
                          a.a.createElement(
                            'a',
                            {
                              href: _,
                              target: '_blank',
                              rel: 'nofollow noopener noreferrer'
                            },
                            d
                          )
                        )
                      ),
                      a.a.createElement(
                        'h5',
                        { className: u.a.jobDetail },
                        a.a.createElement('span', null, p)
                      ),
                      a.a.createElement('div', {
                        dangerouslySetInnerHTML: { __html: m }
                      })
                    )
                  )
                )
              )
            }
          _(p, 'useState{[selectedTab, selectTab](1)}')
          var m,
            b,
            v = p
          ;(t.default = v),
            (m =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (m.register(
                f,
                'TabList',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\jobs\\jobs.jsx'
              ),
              m.register(
                p,
                'Jobs',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\jobs\\jobs.jsx'
              ),
              m.register(
                v,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\jobs\\jobs.jsx'
              )),
            (b =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  KOMj:
    /*!**************************************************!*\
  !*** ./src/components/common/icon/instagram.jsx ***!
  \**************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 512 512'
                },
                a.a.createElement('title', null, 'Instagram'),
                a.a.createElement(
                  'g',
                  null,
                  a.a.createElement(
                    'g',
                    null,
                    a.a.createElement('path', {
                      d:
                        'M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z'
                    })
                  )
                ),
                a.a.createElement(
                  'g',
                  null,
                  a.a.createElement(
                    'g',
                    null,
                    a.a.createElement('path', {
                      d:
                        'M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z'
                    })
                  )
                ),
                a.a.createElement(
                  'g',
                  null,
                  a.a.createElement(
                    'g',
                    null,
                    a.a.createElement('circle', {
                      cx: '393.6',
                      cy: '118.4',
                      r: '17.056'
                    })
                  )
                )
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Instagram',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\instagram.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\instagram.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  LCjP:
    /*!******************************!*\
  !*** external "value-equal" ***!
  \******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('value-equal')
    },
  LRLl:
    /*!***********************************************!*\
  !*** ./src/containers/pages/home/reducers.js ***!
  \***********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! immutable */ 'nuGg'),
            a = r(/*! ./constants */ '7QCE')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = Object(n.fromJS)({
              isfetching: !1,
              data: Object(n.fromJS)([]),
              error: null
            }),
            l = function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : u,
                t = arguments.length > 1 ? arguments[1] : void 0,
                r = t.type,
                o = t.data
              switch (r) {
                case a.FETCHING_USERS:
                  return e.set('isFetching', !0)
                case a.FETCH_USERS_SUCCESS:
                  return e
                    .set('isFetching', !1)
                    .set('data', Object(n.fromJS)(o))
                case a.FETCH_USERS_ERROR:
                  return e
                    .set('isFetching', !1)
                    .set('data', Object(n.fromJS)([]))
                    .set('error', o)
                default:
                  return e
              }
            },
            s = l
          ;(t.default = s),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'initialState',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\reducers.js'
              ),
              i.register(
                l,
                'homeReducer',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\reducers.js'
              ),
              i.register(
                s,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\reducers.js'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  'LW+Q':
    /*!****************************************!*\
  !*** ./src/components/about/about.jsx ***!
  \****************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! react-router-dom */ 'oncg'),
            c = r(/*! ../section */ 'G7fN'),
            u = r(/*! ./about.scss */ '2Yea'),
            l = r.n(u),
            s = r(/*! ../../assets/images/abhishar.jpg */ 'SH4R'),
            d = r.n(s),
            _ = r(/*! ../heading/heading */ 'vuz3'),
            f = r(/*! ../common/image/image */ 'ujeq')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var p,
            m,
            b = function() {
              return a.a.createElement(
                c.default,
                { id: 'about', style: { position: 'relative' } },
                a.a.createElement(_.default, { text: 'About Me' }),
                a.a.createElement(
                  'div',
                  { className: l.a.aboutFlexContainer },
                  a.a.createElement(
                    'div',
                    { className: l.a.aboutContent },
                    a.a.createElement(
                      'p',
                      null,
                      'Hello! I‘m Abhishar, a front-end developer based in Gurgaon, India, who is happily writing code for mobile, tablet & desktop websites since 2015.'
                    ),
                    a.a.createElement(
                      'p',
                      null,
                      'After my graduation from',
                      a.a.createElement(
                        'a',
                        {
                          href: 'https://bkbiet.ac.in/',
                          target: '_blank',
                          rel: 'nofollow noopener noreferrer'
                        },
                        'BKBIET, Pilani'
                      ),
                      ', I started my career as a web designer and today, after 4+ years, as a front-end developer, I worked on a wide variety of web apps.'
                    ),
                    a.a.createElement(
                      'p',
                      null,
                      'Currently, I‘m working with',
                      a.a.createElement(
                        'a',
                        {
                          href: 'https://www.bedbathandbeyond.com/',
                          target: '_blank',
                          rel: 'nofollow noopener noreferrer'
                        },
                        'Bed Bath & Beyond'
                      ),
                      '.'
                    ),
                    a.a.createElement(
                      'p',
                      null,
                      'Here are a few technologies I‘ve been working with recently:'
                    ),
                    a.a.createElement(
                      'ul',
                      null,
                      [
                        'JavaScript (ES6+)',
                        'HTML5 & (S)CSS',
                        'ReactJS',
                        'Node.js',
                        'Webpack',
                        'Redux'
                      ].map(function(e) {
                        return a.a.createElement('li', { key: e }, e)
                      })
                    )
                  ),
                  a.a.createElement(
                    'div',
                    { className: l.a.aboutPic },
                    a.a.createElement(
                      i.Link,
                      { to: '/' },
                      a.a.createElement(f.default, {
                        src: d.a,
                        alt: 'Abhishar Jangir'
                      })
                    )
                  )
                )
              )
            },
            v = b
          ;(t.default = v),
            (p =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (p.register(
                b,
                'About',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\about\\about.jsx'
              ),
              p.register(
                v,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\about\\about.jsx'
              )),
            (m =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && m(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  LacT:
    /*!*********************************!*\
  !*** ./src/utils/apiService.js ***!
  \*********************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! ./axios */ 'on7z'),
            a = r(/*! ../apis */ '+MiA')
          function i(e, t) {
            var r = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e)
              t &&
                (o = o.filter(function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
          }
          function c(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = r),
              e
            )
          }
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var u,
            l,
            s = function(e) {
              var t = e.method,
                r = void 0 === t ? 'GET' : t,
                o = e.url,
                u = e.data,
                l = e.appendUrl,
                s = void 0 === l ? '' : l
              return (
                (o = Object(a.default)(o) + s),
                new Promise(function(e, t) {
                  Object(n.default)({ url: o, method: r, data: u })
                    .then(function(t) {
                      e(
                        (function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {}
                            t % 2
                              ? i(Object(r), !0).forEach(function(t) {
                                  c(e, t, r[t])
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : i(Object(r)).forEach(function(t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  )
                                })
                          }
                          return e
                        })({}, t)
                      )
                    })
                    .catch(function(e) {
                      t(e)
                    })
                })
              )
            },
            d = s
          ;(t.default = d),
            (u =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (u.register(
                s,
                'apiService',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\apiService.js'
              ),
              u.register(
                d,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\apiService.js'
              )),
            (l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  Lc87:
    /*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('query-string')
    },
  LeAe:
    /*!**********************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/report-chunks.js ***!
  \**********************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t
          }
        })(),
        n = i(r(/*! react */ 'cDcd')),
        a = i(r(/*! prop-types */ 'rf6O'))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var l = (function(e) {
        function t() {
          return (
            c(this, t),
            u(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, e),
          o(t, [
            {
              key: 'getChildContext',
              value: function() {
                return { report: this.props.report }
              }
            },
            {
              key: 'render',
              value: function() {
                return n.default.Children.only(this.props.children)
              }
            }
          ]),
          t
        )
      })(n.default.Component)
      ;(l.propTypes = { report: a.default.func.isRequired }),
        (l.childContextTypes = { report: a.default.func.isRequired }),
        (t.default = l)
    },
  LrNv:
    /*!**************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/selectors.js ***!
  \**************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o = r(/*! react-router */ 'MGin')
      function n(e) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      var a = function(e) {
        var t = e.getIn,
          r = e.toJS,
          a = function(e) {
            var o,
              a = r(t(e, ['router']))
            if (
              null == (o = a) ||
              'object' !== n(o) ||
              !t(o, ['location']) ||
              !t(o, ['action'])
            )
              throw 'Could not find router reducer in state tree, it must be mounted under "router"'
            return a
          },
          i = function(e) {
            return r(t(a(e), ['location']))
          }
        return {
          getLocation: i,
          getAction: function(e) {
            return r(t(a(e), ['action']))
          },
          getRouter: a,
          getSearch: function(e) {
            return r(t(a(e), ['location', 'search']))
          },
          getHash: function(e) {
            return r(t(a(e), ['location', 'hash']))
          },
          createMatchSelector: function(e) {
            var t = null,
              r = null
            return function(n) {
              var a = (i(n) || {}).pathname
              if (a === t) return r
              t = a
              var c = (0, o.matchPath)(a, e)
              return (c && r && c.url === r.url) || (r = c), r
            }
          }
        }
      }
      t.default = a
    },
  MGin:
    /*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react-router')
    },
  MJ5s:
    /*!***************************************!*\
  !*** ./src/components/menu/menu.scss ***!
  \***************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        aside: 'menu-aside-27VM7',
        nav: 'menu-nav-zWWEF',
        resumeLink: 'menu-resumeLink-2EkQp',
        menu: 'menu-menu-20yH9'
      }
    },
  MLcn:
    /*!*********************************************!*\
  !*** ./src/components/common/icon/fork.jsx ***!
  \*********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  'aria-label': 'forks',
                  viewBox: '0 0 10 16',
                  version: '1.1',
                  width: '10',
                  height: '16',
                  role: 'img'
                },
                a.a.createElement('path', {
                  fillRule: 'evenodd',
                  d:
                    'M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
                })
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Fork',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\fork.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\fork.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  MWqi:
    /*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('reselect')
    },
  MZxF:
    /*!*************************************************!*\
  !*** ./src/containers/common/helmet/actions.js ***!
  \*************************************************/
    /*! exports provided: setHelmetInfo */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          r.d(t, 'setHelmetInfo', function() {
            return c
          })
          var o,
            n = r(/*! ./constants */ '67/z')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var a,
            i,
            c = function(e) {
              return { type: n.SET_INFO, data: e }
            }
          ;(a =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            a.register(
              c,
              'setHelmetInfo',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\common\\helmet\\actions.js'
            ),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  Mqhw:
    /*!****************************!*\
  !*** ./src/rootReducer.js ***!
  \****************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! redux-immutable */ 'RGyf'),
            a = r(/*! connected-react-router/immutable */ '4Rtg'),
            i = r(/*! immutable */ 'nuGg'),
            c = r(/*! ./containers/common/helmet/constants */ '67/z'),
            u = r(/*! ./containers/common/helmet/reducer */ '+pfj')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var l,
            s,
            d = function(e) {
              return Object(n.combineReducers)(
                ((t = { router: Object(i.fromJS)(Object(a.connectRouter)(e)) }),
                (r = c.HELMET_STATE_KEY),
                (o = u.default),
                r in t
                  ? Object.defineProperty(t, r, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (t[r] = o),
                t)
              )
              var t, r, o
            },
            _ = d
          ;(t.default = _),
            (l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (l.register(
                d,
                'createRootReducer',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\rootReducer.js'
              ),
              l.register(
                _,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\rootReducer.js'
              )),
            (s =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          )
        )
    },
  NZGD:
    /*!********************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/ConnectedRouter.js ***!
  \********************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o = (function(e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {}
                o.get || o.set ? Object.defineProperty(t, r, o) : (t[r] = e[r])
              }
          return (t.default = e), t
        })(r(/*! react */ 'cDcd')),
        n = l(r(/*! prop-types */ 'rf6O')),
        a = r(/*! react-redux */ 'h74D'),
        i = r(/*! react-router */ 'MGin'),
        c = r(/*! ./actions */ '3kFc'),
        u = l(r(/*! ./selectors */ 'LrNv'))
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function d() {
        return (d =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
          }).apply(this, arguments)
      }
      function _(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function f(e, t) {
        return !t || ('object' !== s(t) && 'function' != typeof t)
          ? (function(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return e
            })(e)
          : t
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var b = function(e) {
        var t = (0, u.default)(e).getLocation,
          r = (function(e) {
            function r(e) {
              var o
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
                (o = f(this, p(r).call(this, e)))
              var n = e.store,
                a = e.history,
                i = e.onLocationChanged
              ;(o.inTimeTravelling = !1),
                (o.unsubscribe = n.subscribe(function() {
                  var r = t(n.getState()),
                    i = r.pathname,
                    c = r.search,
                    u = r.hash,
                    l = a.location,
                    s = l.pathname,
                    d = l.search,
                    _ = l.hash
                  'PUSH' !== e.history.action ||
                    (s === i && d === c && _ === u) ||
                    ((o.inTimeTravelling = !0),
                    a.push({ pathname: i, search: c, hash: u }))
                }))
              var c = function(e, t) {
                var r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2]
                o.inTimeTravelling ? (o.inTimeTravelling = !1) : i(e, t, r)
              }
              return (o.unlisten = a.listen(c)), c(a.location, a.action, !0), o
            }
            var n, a, c
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  )
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 }
                })),
                  t && m(e, t)
              })(r, e),
              (n = r),
              (a = [
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.unlisten(), this.unsubscribe()
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.history,
                      r = e.children
                    return o.default.createElement(i.Router, { history: t }, r)
                  }
                }
              ]) && _(n.prototype, a),
              c && _(n, c),
              r
            )
          })(o.PureComponent)
        r.propTypes = {
          store: n.default.shape({
            getState: n.default.func.isRequired,
            subscribe: n.default.func.isRequired
          }).isRequired,
          history: n.default.shape({
            action: n.default.string.isRequired,
            listen: n.default.func.isRequired,
            location: n.default.object.isRequired,
            push: n.default.func.isRequired
          }).isRequired,
          basename: n.default.string,
          children: n.default.oneOfType([n.default.func, n.default.node]),
          onLocationChanged: n.default.func.isRequired
        }
        var l = function(e) {
          var t = e.context || a.ReactReduxContext
          if (null == t) throw 'Please upgrade to react-redux v6'
          return o.default.createElement(t.Consumer, null, function(t) {
            var n = t.store
            return o.default.createElement(r, d({ store: n }, e))
          })
        }
        return (
          (l.propTypes = { context: n.default.object }),
          (0, a.connect)(null, function(e) {
            return {
              onLocationChanged: function(t, r, o) {
                return e((0, c.onLocationChanged)(t, r, o))
              }
            }
          })(l)
        )
      }
      t.default = b
    },
  NyCy:
    /*!**************************************!*\
  !*** ./src/components/hero/hero.jsx ***!
  \**************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! ../section */ 'G7fN'),
            c = r(/*! ./hero.scss */ '/daj'),
            u = r.n(c)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var l,
            s,
            d = function() {
              return a.a.createElement(
                i.default,
                { id: 'hero', className: u.a.section },
                a.a.createElement(
                  'h1',
                  { className: u.a.overline },
                  'Hi, my name is'
                ),
                a.a.createElement(
                  'h2',
                  { className: u.a.title },
                  'Abhishar Jangir.'
                ),
                a.a.createElement(
                  'h3',
                  { className: u.a.subtitle },
                  'I write code for websites.'
                ),
                a.a.createElement(
                  'div',
                  { className: u.a.description },
                  a.a.createElement(
                    'p',
                    null,
                    'I‘m a front-end developer based in Gurugram, India, specializing in developing high-quality websites with latest technologies & best practices.'
                  )
                ),
                a.a.createElement(
                  'div',
                  null,
                  a.a.createElement(
                    'a',
                    {
                      className: u.a.getintouch,
                      href:
                        'mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,'
                    },
                    'Get In Touch'
                  )
                )
              )
            },
            _ = d
          ;(t.default = _),
            (l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (l.register(
                d,
                'Hero',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\hero\\hero.jsx'
              ),
              l.register(
                _,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\hero\\hero.jsx'
              )),
            (s =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  OBjG:
    /*!********************************************!*\
  !*** ./src/components/section/section.jsx ***!
  \********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! prop-types */ 'rf6O'),
            c = r.n(i),
            u = r(/*! ./section.scss */ '/Krw'),
            l = r.n(u)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var s = function(e) {
            var t = e.children,
              r = e.style,
              o = e.id,
              n = e.className,
              i = ''
            return (
              (i = n ? ''.concat(l.a.section, ' ').concat(n) : l.a.section),
              a.a.createElement('div', { id: o, className: i, style: r }, t)
            )
          }
          ;(s.propTypes = {
            children: c.a.object.isRequired,
            style: c.a.object,
            id: c.a.object,
            className: c.a.string
          }),
            (s.defaultProps = { style: {}, id: '', className: null })
          var d,
            _,
            f = s
          ;(t.default = f),
            (d =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (d.register(
                s,
                'Section',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\section\\section.jsx'
              ),
              d.register(
                f,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\section\\section.jsx'
              )),
            (_ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && _(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  PN6K:
    /*!****************************************!*\
  !*** ./src/assets/images/wordbook.png ***!
  \****************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = r.p + 'static/assets/wordbook.94acf44e.png'
    },
  QcoN:
    /*!*******************************************!*\
  !*** ./src/containers/pages/home/saga.js ***!
  \*******************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! redux-saga/effects */ 'oZtI'),
            a = r(/*! ./constants */ '7QCE'),
            i = r(/*! ./actions */ 'jLua'),
            c = r(/*! ../../../utils/apiService */ 'LacT')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          var u = regeneratorRuntime.mark(s),
            l = regeneratorRuntime.mark(d)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          function s() {
            var e, t
            return regeneratorRuntime.wrap(
              function(r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (r.prev = 0),
                        (r.next = 3),
                        Object(n.put)(Object(i.fetchingUsers)())
                      )
                    case 3:
                      return (
                        (r.next = 5),
                        Object(n.call)(c.default, {
                          method: 'GET',
                          url: 'users'
                        })
                      )
                    case 5:
                      if (((e = r.sent), (t = e.data), 200 !== e.status)) {
                        r.next = 12
                        break
                      }
                      return (
                        (r.next = 11),
                        Object(n.put)(Object(i.fetchUserSuccess)(t.data))
                      )
                    case 11:
                      return r.abrupt('return', r.sent)
                    case 12:
                      return (
                        (r.next = 14),
                        Object(n.put)(
                          Object(i.fetchUserError)('Somthing went wrong!')
                        )
                      )
                    case 14:
                      return r.abrupt('return', r.sent)
                    case 17:
                      return (
                        (r.prev = 17),
                        (r.t0 = r.catch(0)),
                        (r.next = 21),
                        Object(n.put)(Object(i.fetchUserError)(r.t0))
                      )
                    case 21:
                      return r.abrupt('return', r.sent)
                    case 22:
                    case 'end':
                      return r.stop()
                  }
              },
              u,
              null,
              [[0, 17]]
            )
          }
          function d() {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(n.takeLatest)(a.FETCH_USERS, s)
                  case 2:
                  case 'end':
                    return e.stop()
                }
            }, l)
          }
          var _,
            f,
            p = d
          ;(t.default = p),
            (_ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (_.register(
                s,
                'fetchUsers',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\saga.js'
              ),
              _.register(
                d,
                'homeSaga',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\saga.js'
              ),
              _.register(
                p,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\saga.js'
              )),
            (f =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && f(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  QpMV:
    /*!*******************************!*\
  !*** external "tiny-warning" ***!
  \*******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('tiny-warning')
    },
  RGyf:
    /*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('redux-immutable')
    },
  S9CH:
    /*!***************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/middleware.js ***!
  \***************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o = r(/*! ./actions */ '3kFc')
      function n(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, r = new Array(e.length); t < e.length; t++)
                r[t] = e[t]
              return r
            }
          })(e) ||
          (function(e) {
            if (
              Symbol.iterator in Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e)
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            )
          })()
        )
      }
      var a = function(e) {
        return function(t) {
          return function(t) {
            return function(r) {
              if (r.type !== o.CALL_HISTORY_METHOD) return t(r)
              var a = r.payload,
                i = a.method,
                c = a.args
              e[i].apply(e, n(c))
            }
          }
        }
      }
      t.default = a
    },
  SH4R:
    /*!****************************************!*\
  !*** ./src/assets/images/abhishar.jpg ***!
  \****************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = r.p + 'static/assets/abhishar.21f99d1c.jpg'
    },
  Sy6E:
    /*!*************************************************!*\
  !*** ./src/components/common/icon/external.jsx ***!
  \*************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 194.818 194.818'
                },
                a.a.createElement('title', null, 'External'),
                a.a.createElement(
                  'g',
                  null,
                  a.a.createElement('path', {
                    d:
                      'M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728\r c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04\r C194.818,6.19,190.789,2.161,185.818,2.161z'
                  }),
                  a.a.createElement('path', {
                    d:
                      'M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140\r c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z'
                  })
                )
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'External',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\external.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\external.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  T4xW:
    /*!***************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById sync ^.*$ ***!
  \***************************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      var o = {
        '.': 'aVE6',
        './': 'aVE6',
        './index': 'aVE6',
        './index.js': 'aVE6'
      }
      function n(e) {
        var t = a(e)
        return r(t)
      }
      function a(e) {
        if (!r.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return o[e]
      }
      ;(n.keys = function() {
        return Object.keys(o)
      }),
        (n.resolve = a),
        (e.exports = n),
        (n.id = 'T4xW')
    },
  Uhar:
    /*!***********************************************!*\
  !*** ./src/components/common/icon/github.jsx ***!
  \***********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 438.549 438.549'
                },
                a.a.createElement('title', null, 'GitHub'),
                a.a.createElement('path', {
                  d:
                    'M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\r c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\r c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\r c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\r c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\r c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\r c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\r c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\r c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\r c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\r c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\r c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\r c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\r c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\r c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\r c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\r c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\r c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\r C438.536,184.851,428.728,148.168,409.132,114.573z'
                })
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'GitHub',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\github.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\github.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  Uw7I:
    /*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./footer */ 'YaUY')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  VLWd:
    /*!*************************************!*\
  !*** ./src/containers/app/index.js ***!
  \*************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./app */ 'DowU')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  VYZd:
    /*!************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/reducer.js ***!
  \************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o = r(/*! ./actions */ '3kFc')
      function n(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function(e, t) {
            var r = [],
              o = !0,
              n = !1,
              a = void 0
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(o = (i = c.next()).done) &&
                (r.push(i.value), !t || r.length !== t);
                o = !0
              );
            } catch (e) {
              ;(n = !0), (a = e)
            } finally {
              try {
                o || null == c.return || c.return()
              } finally {
                if (n) throw a
              }
            }
            return r
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(r)
          'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            o.forEach(function(t) {
              i(e, t, r[t])
            })
        }
        return e
      }
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        )
      }
      var c = function(e) {
          if (!e) return e
          var t = e.search || window.location.search
          if ('string' != typeof t || 0 === t.length)
            return a({}, e, { query: {} })
          var r = t
            .substring(1)
            .split('&')
            .reduce(function(e, t) {
              var r = n(t.split('='), 2)
              return a({}, e, i({}, r[0], r[1]))
            }, {})
          return a({}, e, { query: r })
        },
        u = function(e) {
          var t = e.fromJS,
            r = e.merge
          return function(e) {
            var n = t({ location: c(e.location), action: e.action })
            return function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = a.type,
                u = a.payload
              if (i === o.LOCATION_CHANGE) {
                var l = u.location,
                  s = u.action,
                  d = u.isFirstRendering
                return d ? e : r(e, { location: t(c(l)), action: s })
              }
              return e
            }
          }
        }
      t.default = u
    },
  VmXB:
    /*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
    /*! exports provided: RouteList, default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module, __dirname) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e, o) {
          r.d(t, 'RouteList', function() {
            return E
          })
          var n,
            a = r(/*! path */ 'oyvS'),
            i = r.n(a),
            c = r(/*! babel-plugin-universal-import/universalImport */ 'lY48'),
            u = r.n(c),
            l = r(/*! react */ 'cDcd'),
            s = r.n(l),
            d = r(/*! react-universal-component */ 'Gr0I'),
            _ = r.n(d),
            f = r(/*! react-router-dom */ 'oncg'),
            p = r(/*! ./utils/universalOptions */ 'vrxZ')
          function m() {
            return (m =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
              }).apply(this, arguments)
          }
          ;(n =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && n(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var b,
            v,
            h = _()(
              u()({
                id: './containers/pages/home',
                load: function() {
                  return Promise.all([
                    Promise.resolve().then(
                      r.bind(null, /*! ./containers/pages/home */ 'pbYc')
                    )
                  ]).then(function(e) {
                    return e[0]
                  })
                },
                path: function() {
                  return i.a.join(o, './containers/pages/home')
                },
                resolve: function() {
                  /*! ./containers/pages/home */ return 'pbYc'
                },
                chunkName: function() {
                  return 'home-page'
                }
              }),
              p.default
            ),
            y = _()(
              u()({
                id: './components/pages/notfound',
                load: function() {
                  return Promise.all([
                    Promise.resolve().then(
                      r.bind(null, /*! ./components/pages/notfound */ 'ZHBv')
                    )
                  ]).then(function(e) {
                    return e[0]
                  })
                },
                path: function() {
                  return i.a.join(o, './components/pages/notfound')
                },
                resolve: function() {
                  /*! ./components/pages/notfound */ return 'ZHBv'
                },
                chunkName: function() {
                  return 'notfound-page'
                }
              }),
              p.default
            ),
            E = [{ path: '/', component: h, exact: !0 }, { component: y }],
            g = function() {
              return s.a.createElement(
                f.Switch,
                null,
                E.map(function(e, t) {
                  return s.a.createElement(f.Route, m({ key: t }, e))
                })
              )
            }
          ;(t.default = g),
            (b =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (b.register(
                h,
                'Home',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\routes.js'
              ),
              b.register(
                y,
                'Notfound',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\routes.js'
              ),
              b.register(
                E,
                'RouteList',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\routes.js'
              ),
              b.register(
                g,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\routes.js'
              )),
            (v =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && v(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          ),
          '/'
        )
    },
  'X+Qw':
    /*!************************************************!*\
  !*** ./src/components/common/icon/codepen.jsx ***!
  \************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 31.665 31.665'
                },
                a.a.createElement('title', null, 'Codepen'),
                a.a.createElement('path', {
                  d:
                    'M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444\r c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086\r v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z\r M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215\r l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215\r V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z'
                })
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Codepen',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\codepen.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\codepen.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  X7BR:
    /*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
    /*! exports provided: socialList */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o
          r.d(t, 'socialList', function() {
            return i
          }),
            (o =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.enterModule
                : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var n,
            a,
            i = [
              { name: 'github', url: 'https://github.com/abhisharkjangir' },
              {
                name: 'linkedin',
                url: 'https://in.linkedin.com/in/abhishar-jangir'
              },
              {
                name: 'instagram',
                url: 'https://www.instagram.com/abhishar.jangir/'
              },
              { name: 'twitter', url: 'https://twitter.com/Abhishar_jangir' }
            ]
          ;(n =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            n.register(
              i,
              'socialList',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\constants.js'
            ),
            (a =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && a(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          )
        )
    },
  YaUY:
    /*!******************************************!*\
  !*** ./src/components/footer/footer.jsx ***!
  \******************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ./footer.scss */ 'ky7P'
            ),
            _footer_scss__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              _footer_scss__WEBPACK_IMPORTED_MODULE_1__
            ),
            _common_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ../common/icon */ '0eKw'
            ),
            _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ../../constants */ 'X7BR'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            Footer = (function(_React$PureComponent) {
              _inherits(Footer, _React$PureComponent)
              var _super = _createSuper(Footer)
              function Footer() {
                return (
                  _classCallCheck(this, Footer), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(Footer, [
                  {
                    key: 'render',
                    value: function() {
                      var e = new Date()
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'Footer',
                          className:
                            _footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a
                              .footer
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            className:
                              _footer_scss__WEBPACK_IMPORTED_MODULE_1___default
                                .a.socialContainer
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'ul',
                            {
                              className:
                                _footer_scss__WEBPACK_IMPORTED_MODULE_1___default
                                  .a.list
                            },
                            _constants__WEBPACK_IMPORTED_MODULE_3__.socialList.map(
                              function(e) {
                                var t = e.name,
                                  r = e.url
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  'li',
                                  { key: t },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'a',
                                    {
                                      href: r,
                                      target: '_blank',
                                      rel: 'nofollow noopener noreferrer',
                                      'aria-label': t
                                    },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                      _common_icon__WEBPACK_IMPORTED_MODULE_2__.default,
                                      { name: t }
                                    )
                                  )
                                )
                              }
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            className:
                              _footer_scss__WEBPACK_IMPORTED_MODULE_1___default
                                .a.content
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            { href: '/', 'aria-label': 'github' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'span',
                              null,
                              'Made with ❤ by Abhishar Jangir'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'div',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'span',
                                null,
                                'Copyright ©',
                                e.getFullYear()
                              )
                            )
                          )
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Footer
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = Footer,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Footer,
                'Footer',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\footer\\footer.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\footer\\footer.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  YuTi:
    /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function() {
                return e.l
              }
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function() {
                return e.i
              }
            }),
            (e.webpackPolyfill = 1)),
          e
        )
      }
    },
  ZFcg:
    /*!**************************!*\
  !*** external "history" ***!
  \**************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('history')
    },
  ZHBv:
    /*!************************************************!*\
  !*** ./src/components/pages/notfound/index.js ***!
  \************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/routes.js (referenced with import(), require.resolve) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t)
      var o = r(/*! ./notfound */ 'udBv')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  Zka1:
    /*!************************************!*\
  !*** ./src/components/app/app.jsx ***!
  \************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../header */ 'ihrq'
            ),
            _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ../../routes */ 'VmXB'
            ),
            _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ../../styles/main.scss */ '+5i3'
            ),
            _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__
            ),
            _containers_common_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ../../containers/common/helmet */ '2kqy'
            ),
            _social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              /*! ../social */ '/sd9'
            ),
            _email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              /*! ../email */ 'na3V'
            ),
            _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              /*! ../footer */ 'Uw7I'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            App = (function(_React$PureComponent) {
              _inherits(App, _React$PureComponent)
              var _super = _createSuper(App)
              function App() {
                return _classCallCheck(this, App), _super.apply(this, arguments)
              }
              return (
                _createClass(App, [
                  {
                    key: 'render',
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'app',
                          className:
                            _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default
                              .a.app
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _header__WEBPACK_IMPORTED_MODULE_1__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            id: 'main-content',
                            className:
                              _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default
                                .a.main
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _routes__WEBPACK_IMPORTED_MODULE_2__.default,
                            null
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _containers_common_helmet__WEBPACK_IMPORTED_MODULE_4__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _social__WEBPACK_IMPORTED_MODULE_5__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _email__WEBPACK_IMPORTED_MODULE_6__.default,
                          null
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _footer__WEBPACK_IMPORTED_MODULE_7__.default,
                          null
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                App
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = App,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                App,
                'App',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\app\\app.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\app\\app.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  Zqzj:
    /*!*****************************************************!*\
  !*** ./src/components/pages/notfound/notfound.scss ***!
  \*****************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        notfound: 'notfound-notfound-1iIks',
        bigButton: 'notfound-bigButton-15nvv',
        title: 'notfound-title-ZtJbw'
      }
    },
  'aP/T':
    /*!**************************************************************************!*\
  !*** ./node_modules/connected-react-router/lib/structure/plain/getIn.js ***!
  \**************************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o = function(e, t) {
        if (!e) return e
        var r = t.length
        if (r) {
          for (var o = e, n = 0; n < r && o; ++n) o = o[t[n]]
          return o
        }
      }
      t.default = o
    },
  aVE6:
    /*!**************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById/index.js ***!
  \**************************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = r(/*! ../utils */ '09b2')
      t.default = function(e) {
        return (0, o.isWebpack)() || 'string' != typeof e
          ? r('' + e)
          : r('T4xW')('' + e)
      }
    },
  apg1:
    /*!***************************************************************!*\
  !*** ./node_modules/history/warnAboutDeprecatedCJSRequire.js ***!
  \***************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      e.exports = function(e) {}
    },
  c2y3:
    /*!*************************************************!*\
  !*** ./src/components/common/icon/linkedin.jsx ***!
  \*************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 430.117 430.117'
                },
                a.a.createElement('title', null, 'LinkedIn'),
                a.a.createElement('path', {
                  d:
                    'M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707\r c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21\r v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824\r C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463\r c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z\r M5.477,420.56h92.184v-277.32H5.477V420.56z'
                })
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Linkedin',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\linkedin.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\linkedin.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  cDcd:
    /*!************************!*\
  !*** external "react" ***!
  \************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react')
    },
  dzxm:
    /*!***********************************************!*\
  !*** ./src/components/projects/projects.scss ***!
  \***********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        Project: 'projects-Project-3H6SM',
        projectInner: 'projects-projectInner-3JfIm',
        projectHeader: 'projects-projectHeader-2XxZE',
        moreButton: 'projects-moreButton-2Beau',
        view: 'projects-view-otPHa',
        projectDescription: 'projects-projectDescription-MUuJJ',
        center: 'projects-center-1dzI2',
        grid: 'projects-grid-37jzh',
        projects: 'projects-projects-DXHVW',
        project: 'projects-project-14HRv',
        folder: 'projects-folder-35lvq',
        projectLinks: 'projects-projectLinks-229pB',
        iconLink: 'projects-iconLink-1zZiv',
        projectName: 'projects-projectName-2ZL7A',
        techList: 'projects-techList-n-6yh'
      }
    },
  e4a2:
    /*!*************************!*\
  !*** ./src/rootSaga.js ***!
  \*************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          r.d(t, 'default', function() {
            return d
          })
          var o,
            n = r(/*! redux-saga/effects */ 'oZtI')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          var a = regeneratorRuntime.mark(d)
          function i(e) {
            return (
              (function(e) {
                if (Array.isArray(e)) return c(e)
              })(e) ||
              (function(e) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(e)
                )
                  return Array.from(e)
              })(e) ||
              (function(e, t) {
                if (!e) return
                if ('string' == typeof e) return c(e, t)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === r && e.constructor && (r = e.constructor.name)
                if ('Map' === r || 'Set' === r) return Array.from(r)
                if (
                  'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return c(e, t)
              })(e) ||
              (function() {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()
            )
          }
          function c(e, t) {
            ;(null == t || t > e.length) && (t = e.length)
            for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]
            return o
          }
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var u,
            l,
            s = function(e) {
              var t = []
              return (
                e.forEach(function(e) {
                  t.push(e())
                }),
                t
              )
            }
          function d() {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(n.all)(i(s([])))
                  case 2:
                  case 'end':
                    return e.stop()
                }
            }, a)
          }
          ;(u =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (u.register(
              s,
              'callSagas',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\rootSaga.js'
            ),
            u.register(
              d,
              'rootSaga',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\rootSaga.js'
            )),
            (l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          )
        )
    },
  g4yK:
    /*!**************************************!*\
  !*** ./src/assets/images/meuzic.png ***!
  \**************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = r.p + 'static/assets/meuzic.2eded11f.png'
    },
  grKG:
    /*!***************************************!*\
  !*** ./src/components/work/work.scss ***!
  \***************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        work: 'work-work-3ibdt',
        description: 'work-description-2sfNE',
        imgContainer: 'work-imgContainer-2DSYL',
        content: 'work-content-tIXXF',
        list: 'work-list-bUqFT',
        link: 'work-link-2ikrq',
        image: 'work-image-1QacF'
      }
    },
  h74D:
    /*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react-redux')
    },
  'hf+U':
    /*!*****************************************************!*\
  !*** ./node_modules/history/createMemoryHistory.js ***!
  \*****************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r(/*! ./warnAboutDeprecatedCJSRequire.js */ 'apg1')(
        'createMemoryHistory'
      ),
        (e.exports = r(/*! ./index.js */ 'JRJN').createMemoryHistory)
    },
  ihrq:
    /*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./header */ 'ySCG')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  jLua:
    /*!**********************************************!*\
  !*** ./src/containers/pages/home/actions.js ***!
  \**********************************************/
    /*! exports provided: fetchUsers, fetchingUsers, fetchUserSuccess, fetchUserError */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          r.d(t, 'fetchUsers', function() {
            return c
          }),
            r.d(t, 'fetchingUsers', function() {
              return u
            }),
            r.d(t, 'fetchUserSuccess', function() {
              return l
            }),
            r.d(t, 'fetchUserError', function() {
              return s
            })
          var o,
            n = r(/*! ./constants */ '7QCE')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var a,
            i,
            c = function() {
              return { type: n.FETCH_USERS }
            },
            u = function() {
              return { type: n.FETCHING_USERS }
            },
            l = function(e) {
              return { type: n.FETCH_USERS_SUCCESS, data: e }
            },
            s = function(e) {
              return { type: n.FETCH_USERS_ERROR, data: e }
            }
          ;(a =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (a.register(
              c,
              'fetchUsers',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\actions.js'
            ),
            a.register(
              u,
              'fetchingUsers',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\actions.js'
            ),
            a.register(
              l,
              'fetchUserSuccess',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\actions.js'
            ),
            a.register(
              s,
              'fetchUserError',
              'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\actions.js'
            )),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && i(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  jRZC:
    /*!*********************************************!*\
  !*** ./src/components/contact/contact.scss ***!
  \*********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        contact: 'contact-contact-2-wh2',
        bigButton: 'contact-bigButton-27ZNw',
        title: 'contact-title-2wzp-'
      }
    },
  ky7P:
    /*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        footer: 'footer-footer-1NlzQ',
        socialContainer: 'footer-socialContainer-2l52b',
        list: 'footer-list-1NsNu',
        content: 'footer-content-38teJ'
      }
    },
  lV95:
    /*!**************************************!*\
  !*** ./src/components/menu/index.js ***!
  \**************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./menu */ '3QwP')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  lY48:
    /*!***********************************************************************!*\
  !*** ./node_modules/babel-plugin-universal-import/universalImport.js ***!
  \***********************************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = function(e, t) {
        if (!1 === t) return e
        var r = e.load
        return (
          (e.then = function(e) {
            return r().then(function(t) {
              return e && e(t)
            })
          }),
          (e.catch = function(e) {
            return r().catch(function(t) {
              return e && e(t)
            })
          }),
          e
        )
      }
      var o = !1
      !(function() {
        if (!o) {
          var e,
            t = void 0 !== r
          try {
            if (t) {
              e = r(/*! react-universal-component */ 'Gr0I')
            } else e = r(/*! react-universal-component */ 'Gr0I')
            e && (e.setHasBabelPlugin(), (o = !0))
          } catch (e) {}
        }
      })()
    },
  lqWb:
    /*!***************************************!*\
  !*** ./src/components/jobs/jobs.scss ***!
  \***************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        jobTabs: 'jobs-jobTabs-h5ttz',
        tablist: 'jobs-tablist-vr3cb',
        jobTabContent: 'jobs-jobTabContent-2eCmU',
        buttonActive: 'jobs-buttonActive-1rLqq',
        jobContent: 'jobs-jobContent-1adri',
        jobTitle: 'jobs-jobTitle-J5M4s',
        jobCompany: 'jobs-jobCompany-2__-j',
        jobDetail: 'jobs-jobDetail-TvNn8',
        jobDescription: 'jobs-jobDescription-3gsqZ'
      }
    },
  'mw/K':
    /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('fs')
    },
  nN7j:
    /*!**********************************************!*\
  !*** ./src/components/projects/projects.jsx ***!
  \**********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! react-router-dom */ 'oncg'),
            c = r(/*! ../section */ 'G7fN'),
            u = r(/*! ./projects.scss */ 'dzxm'),
            l = r.n(u),
            s = r(/*! ../common/icon */ '0eKw')
          function d(e, t) {
            return (
              (function(e) {
                if (Array.isArray(e)) return e
              })(e) ||
              (function(e, t) {
                if (
                  'undefined' == typeof Symbol ||
                  !(Symbol.iterator in Object(e))
                )
                  return
                var r = [],
                  o = !0,
                  n = !1,
                  a = void 0
                try {
                  for (
                    var i, c = e[Symbol.iterator]();
                    !(o = (i = c.next()).done) &&
                    (r.push(i.value), !t || r.length !== t);
                    o = !0
                  );
                } catch (e) {
                  ;(n = !0), (a = e)
                } finally {
                  try {
                    o || null == c.return || c.return()
                  } finally {
                    if (n) throw a
                  }
                }
                return r
              })(e, t) ||
              (function(e, t) {
                if (!e) return
                if ('string' == typeof e) return _(e, t)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === r && e.constructor && (r = e.constructor.name)
                if ('Map' === r || 'Set' === r) return Array.from(r)
                if (
                  'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return _(e, t)
              })(e, t) ||
              (function() {
                throw new TypeError(
                  'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()
            )
          }
          function _(e, t) {
            ;(null == t || t > e.length) && (t = e.length)
            for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]
            return o
          }
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          var f =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            p = function() {
              var e = [
                  {
                    name: 'React Go',
                    description:
                      'A starter kit for react app with all the best practices.',
                    tech: [
                      'react',
                      'redux',
                      'redux-saga',
                      'reselect',
                      'nodejs',
                      'sass',
                      'pwa',
                      'react-universal-component',
                      'server-side-rendering',
                      'seo-friendly'
                    ],
                    links: [
                      {
                        iconName: 'github',
                        url: 'https://github.com/abhisharkjangir/reactgo'
                      },
                      {
                        iconName: 'external',
                        url: 'https://reactgo.abhisharjangir.com'
                      }
                    ]
                  },
                  {
                    name: 'Portfolio',
                    description:
                      'My portfolio website which shows my experience, work and projects.',
                    tech: [
                      'react',
                      'redux',
                      'redux-saga',
                      'reselect',
                      'nodejs',
                      'sass'
                    ],
                    links: [
                      {
                        iconName: 'github',
                        url: 'https://github.com/abhisharkjangir/portfolio'
                      },
                      {
                        iconName: 'external',
                        url: 'https://abhisharjangir.com'
                      }
                    ]
                  },
                  {
                    name: 'Online Image Editor',
                    description:
                      'A Image editor which is powered by Adobe Creative SDK.',
                    tech: ['react', 'Creative SDK'],
                    links: [
                      {
                        iconName: 'github',
                        url: 'https://github.com/abhisharkjangir/react-aviary'
                      },
                      {
                        iconName: 'external',
                        url: 'https://ie.abhisharjangir.com'
                      }
                    ]
                  }
                ],
                t = e.length > 6 ? 6 : e.length,
                r = d(Object(n.useState)(t), 2),
                o = r[0],
                u = r[1],
                _ = o === t ? t : e.length
              return a.a.createElement(
                c.default,
                {
                  id: 'projects',
                  style: { flexDirection: 'column', alignItems: 'flex-start' }
                },
                a.a.createElement(
                  'div',
                  { className: l.a.Project },
                  a.a.createElement('h4', null, 'Other Noteworthy Projects'),
                  a.a.createElement(
                    'div',
                    { className: l.a.center },
                    a.a.createElement(i.Link, { to: '/', className: l.a.view })
                  ),
                  a.a.createElement(
                    'div',
                    { className: l.a.grid },
                    a.a.createElement(
                      'div',
                      { className: l.a.projects },
                      e.slice(0, _).map(function(e) {
                        var t = e.name,
                          r = e.description,
                          o = e.tech,
                          n = e.links
                        return a.a.createElement(
                          'div',
                          { className: l.a.project },
                          a.a.createElement(
                            'div',
                            { className: l.a.projectInner },
                            a.a.createElement(
                              'div',
                              { className: l.a.projectHeader },
                              a.a.createElement(
                                'div',
                                { className: l.a.folder },
                                a.a.createElement(s.default, { name: 'folder' })
                              ),
                              a.a.createElement(
                                'div',
                                { className: l.a.projectLinks },
                                n.map(function(e) {
                                  var t = e.iconName,
                                    r = e.url
                                  return a.a.createElement(
                                    'a',
                                    {
                                      target: '_blank',
                                      rel: 'nofollow noopener noreferrer',
                                      'aria-label': '',
                                      key: t,
                                      href: r,
                                      className: l.a.iconLink
                                    },
                                    a.a.createElement(s.default, { name: t })
                                  )
                                })
                              )
                            ),
                            a.a.createElement(
                              'h5',
                              { className: l.a.projectName },
                              t
                            ),
                            a.a.createElement(
                              'div',
                              { className: l.a.projectDescription },
                              r
                            ),
                            a.a.createElement(
                              'ul',
                              { className: l.a.techList },
                              o.map(function(e) {
                                return a.a.createElement('li', { key: e }, e)
                              })
                            )
                          )
                        )
                      })
                    )
                  ),
                  e.length > 6 &&
                    a.a.createElement(
                      'button',
                      {
                        type: 'button',
                        onClick: function() {
                          return u(o === t ? 'all' : t)
                        },
                        className: l.a.moreButton
                      },
                      o === t ? 'Show More' : 'Show Less'
                    )
                )
              )
            }
          f(p, 'useState{[count, toggleShow](preSetVal)}')
          var m,
            b,
            v = p
          ;(t.default = v),
            (m =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (m.register(
                p,
                'Projects',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\projects\\projects.jsx'
              ),
              m.register(
                v,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\projects\\projects.jsx'
              )),
            (b =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  na3V:
    /*!***************************************!*\
  !*** ./src/components/email/index.js ***!
  \***************************************/
    /*! exports provided: default */ function(e, t, r) {
      'use strict'
      r.r(t)
      var o = r(/*! ./email */ 'A63B')
      r.d(t, 'default', function() {
        return o.default
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  nnsb:
    /*!**********************************************************!*\
  !*** ./node_modules/react-universal-component/server.js ***!
  \**********************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      e.exports = {
        flushModuleIds: r(/*! ./dist/requireUniversalModule */ '5msD')
          .flushModuleIds,
        flushChunkNames: r(/*! ./dist/requireUniversalModule */ '5msD')
          .flushChunkNames,
        clearChunks: r(/*! ./dist/requireUniversalModule */ '5msD').clearChunks,
        ReportChunks: r(/*! ./dist/report-chunks */ 'LeAe').default
      }
    },
  nuGg:
    /*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('immutable')
    },
  oHfu:
    /*!*********************************************!*\
  !*** ./src/components/common/icon/logo.jsx ***!
  \*********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 84 96'
                },
                a.a.createElement('title', null, 'Logo'),
                a.a.createElement(
                  'g',
                  { id: 'Logo', transform: 'translate(-8.000000, -2.000000)' },
                  a.a.createElement(
                    'g',
                    { transform: 'translate(11.000000, 5.000000)' },
                    a.a.createElement('polygon', {
                      id: 'Shape',
                      stroke: '#64FFDA',
                      strokeWidth: '5',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      points: '39 0 0 22 0 67 39 90 78 68 78 23'
                    })
                  )
                )
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Logo',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\logo.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\logo.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  oZtI:
    /*!************************************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js + 10 modules ***!
  \************************************************************/
    /*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t)
      Object.assign
      var o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              },
        n = function(e) {
          return '@@redux-saga/' + e
        },
        a = n('TASK'),
        i = n('HELPER'),
        c = (n('MATCH'), n('CANCEL_PROMISE')),
        u = (n('SAGA_ACTION'), n('SELF_CANCELLATION')),
        l = function(e) {
          return function() {
            return e
          }
        },
        s =
          (l(!0),
          l(!1),
          function(e) {
            return e
          })
      function d(e, t, r) {
        if (!t(e))
          throw ((function(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ''
            'undefined' == typeof window
              ? console.log(
                  'redux-saga ' + e + ': ' + t + '\n' + ((r && r.stack) || r)
                )
              : console[e](t, r)
          })('error', 'uncaught at check', r),
          new Error(r))
      }
      var _ = Object.prototype.hasOwnProperty
      function f(e, t) {
        return p.notUndef(e) && _.call(e, t)
      }
      var p = {
        undef: function(e) {
          return null == e
        },
        notUndef: function(e) {
          return null != e
        },
        func: function(e) {
          return 'function' == typeof e
        },
        number: function(e) {
          return 'number' == typeof e
        },
        string: function(e) {
          return 'string' == typeof e
        },
        array: Array.isArray,
        object: function(e) {
          return (
            e && !p.array(e) && 'object' === (void 0 === e ? 'undefined' : o(e))
          )
        },
        promise: function(e) {
          return e && p.func(e.then)
        },
        iterator: function(e) {
          return e && p.func(e.next) && p.func(e.throw)
        },
        iterable: function(e) {
          return e && p.func(Symbol) ? p.func(e[Symbol.iterator]) : p.array(e)
        },
        task: function(e) {
          return e && e[a]
        },
        observable: function(e) {
          return e && p.func(e.subscribe)
        },
        buffer: function(e) {
          return e && p.func(e.isEmpty) && p.func(e.take) && p.func(e.put)
        },
        pattern: function(e) {
          return (
            e &&
            (p.string(e) ||
              'symbol' === (void 0 === e ? 'undefined' : o(e)) ||
              p.func(e) ||
              p.array(e))
          )
        },
        channel: function(e) {
          return e && p.func(e.take) && p.func(e.close)
        },
        helper: function(e) {
          return e && e[i]
        },
        stringableFunc: function(e) {
          return p.func(e) && f(e, 'toString')
        }
      }
      function m(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          r = void 0,
          o = new Promise(function(o) {
            r = setTimeout(function() {
              return o(t)
            }, e)
          })
        return (
          (o[c] = function() {
            return clearTimeout(r)
          }),
          o
        )
      }
      !(function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
      })()
      var b = function(e) {
          throw e
        },
        v = function(e) {
          return { value: e, done: !0 }
        }
      function h(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
          o = arguments[3],
          n = { name: r, next: e, throw: t, return: v }
        return (
          o && (n[i] = !0),
          'undefined' != typeof Symbol &&
            (n[Symbol.iterator] = function() {
              return n
            }),
          n
        )
      }
      function y(e, t) {
        return function() {
          return e.apply(void 0, arguments)
        }
      }
      var E = function(e, t) {
          return (
            e +
            ' has been deprecated in favor of ' +
            t +
            ', please update your code'
          )
        },
        g = { done: !0, value: void 0 },
        O = {}
      function L(e) {
        return p.channel(e)
          ? 'channel'
          : Array.isArray(e)
          ? String(
              e.map(function(e) {
                return String(e)
              })
            )
          : String(e)
      }
      function P(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'iterator',
          o = void 0,
          n = t
        function a(t, r) {
          if (n === O) return g
          if (r) throw ((n = O), r)
          o && o(t)
          var a = e[n](),
            i = a[0],
            c = a[1],
            u = a[2]
          return (o = u), (n = i) === O ? g : c
        }
        return h(
          a,
          function(e) {
            return a(null, e)
          },
          r,
          !0
        )
      }
      function D() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t = arguments[1],
          r = new Array(e),
          o = 0,
          n = 0,
          a = 0,
          i = function(t) {
            ;(r[n] = t), (n = (n + 1) % e), o++
          },
          c = function() {
            if (0 != o) {
              var t = r[a]
              return (r[a] = null), o--, (a = (a + 1) % e), t
            }
          },
          u = function() {
            for (var e = []; o; ) e.push(c())
            return e
          }
        return {
          isEmpty: function() {
            return 0 == o
          },
          put: function(c) {
            if (o < e) i(c)
            else {
              var l = void 0
              switch (t) {
                case 1:
                  throw new Error("Channel's Buffer overflow!")
                case 3:
                  ;(r[n] = c), (a = n = (n + 1) % e)
                  break
                case 4:
                  ;(l = 2 * e),
                    (r = u()),
                    (o = r.length),
                    (n = r.length),
                    (a = 0),
                    (r.length = l),
                    (e = l),
                    i(c)
              }
            }
          },
          take: c,
          flush: u
        }
      }
      var M = function(e) {
        return D(e, 3)
      }
      Object.assign
      var C = { type: '@@redux-saga/CHANNEL_END' }
      function H(e, t) {
        for (
          var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2;
          n < r;
          n++
        )
          o[n - 2] = arguments[n]
        var a = { done: !1, value: A(e) },
          i = function(e) {
            return { done: !1, value: q.apply(void 0, [t].concat(o, [e])) }
          },
          c = void 0,
          u = function(e) {
            return (c = e)
          }
        return P(
          {
            q1: function() {
              return ['q2', a, u]
            },
            q2: function() {
              return c === C ? [O] : ['q1', i(c)]
            }
          },
          'q1',
          'takeEvery(' + L(e) + ', ' + t.name + ')'
        )
      }
      function w(e, t) {
        for (
          var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2;
          n < r;
          n++
        )
          o[n - 2] = arguments[n]
        var a = { done: !1, value: A(e) },
          i = function(e) {
            return { done: !1, value: q.apply(void 0, [t].concat(o, [e])) }
          },
          c = function(e) {
            return { done: !1, value: V(e) }
          },
          u = void 0,
          l = void 0,
          s = function(e) {
            return (u = e)
          },
          d = function(e) {
            return (l = e)
          }
        return P(
          {
            q1: function() {
              return ['q2', a, d]
            },
            q2: function() {
              return l === C ? [O] : u ? ['q3', c(u)] : ['q1', i(l), s]
            },
            q3: function() {
              return ['q1', i(l), s]
            }
          },
          'q1',
          'takeLatest(' + L(e) + ', ' + t.name + ')'
        )
      }
      function k(e, t, r) {
        for (
          var o = arguments.length, n = Array(o > 3 ? o - 3 : 0), a = 3;
          a < o;
          a++
        )
          n[a - 3] = arguments[a]
        var i = void 0,
          c = void 0,
          u = { done: !1, value: X(t, M(1)) },
          l = function() {
            return { done: !1, value: A(c) }
          },
          s = function(e) {
            return { done: !1, value: q.apply(void 0, [r].concat(n, [e])) }
          },
          d = { done: !1, value: K(m, e) },
          _ = function(e) {
            return (i = e)
          },
          f = function(e) {
            return (c = e)
          }
        return P(
          {
            q1: function() {
              return ['q2', u, f]
            },
            q2: function() {
              return ['q3', l(), _]
            },
            q3: function() {
              return i === C ? [O] : ['q4', s(i)]
            },
            q4: function() {
              return ['q2', d]
            }
          },
          'q1',
          'throttle(' + L(t) + ', ' + r.name + ')'
        )
      }
      var j = n('IO'),
        U = 'TAKE',
        R =
          '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)',
        T = function(e, t) {
          var r
          return ((r = {})[j] = !0), (r[e] = t), r
        }
      function A() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*'
        if (
          (arguments.length &&
            d(
              arguments[0],
              p.notUndef,
              'take(patternOrChannel): patternOrChannel is undefined'
            ),
          p.pattern(e))
        )
          return T(U, { pattern: e })
        if (p.channel(e)) return T(U, { channel: e })
        throw new Error(
          'take(patternOrChannel): argument ' +
            String(e) +
            ' is not valid channel or a valid pattern'
        )
      }
      A.maybe = function() {
        var e = A.apply(void 0, arguments)
        return (e[U].maybe = !0), e
      }
      var G = y(A.maybe)
      function S(e, t) {
        return (
          arguments.length > 1
            ? (d(
                e,
                p.notUndef,
                'put(channel, action): argument channel is undefined'
              ),
              d(
                e,
                p.channel,
                'put(channel, action): argument ' +
                  e +
                  ' is not a valid channel'
              ),
              d(
                t,
                p.notUndef,
                'put(channel, action): argument action is undefined'
              ))
            : (d(e, p.notUndef, 'put(action): argument action is undefined'),
              (t = e),
              (e = null)),
          T('PUT', { channel: e, action: t })
        )
      }
      function I(e) {
        return T('ALL', e)
      }
      function x(e) {
        return T('RACE', e)
      }
      function B(e, t, r) {
        d(t, p.notUndef, e + ': argument fn is undefined')
        var o = null
        if (p.array(t)) {
          var n = t
          ;(o = n[0]), (t = n[1])
        } else if (t.fn) {
          var a = t
          ;(o = a.context), (t = a.fn)
        }
        return (
          o && p.string(t) && p.func(o[t]) && (t = o[t]),
          d(t, p.func, e + ': argument ' + t + ' is not a function'),
          { context: o, fn: t, args: r }
        )
      }
      function K(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o]
        return T('CALL', B('call', e, r))
      }
      function W(e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
        return T('CALL', B('apply', { context: e, fn: t }, r))
      }
      function N(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o]
        return T('CPS', B('cps', e, r))
      }
      function q(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o]
        return T('FORK', B('fork', e, r))
      }
      function F(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o]
        var n = q.apply(void 0, [e].concat(r))
        return (n.FORK.detached = !0), n
      }
      function z() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        if (t.length > 1)
          return I(
            t.map(function(e) {
              return z(e)
            })
          )
        var o = t[0]
        return (
          d(o, p.notUndef, 'join(task): argument task is undefined'),
          d(
            o,
            p.task,
            'join(task): argument ' + o + ' is not a valid Task object ' + R
          ),
          T('JOIN', o)
        )
      }
      function V() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        if (t.length > 1)
          return I(
            t.map(function(e) {
              return V(e)
            })
          )
        var o = t[0]
        return (
          1 === t.length &&
            (d(o, p.notUndef, 'cancel(task): argument task is undefined'),
            d(
              o,
              p.task,
              'cancel(task): argument ' + o + ' is not a valid Task object ' + R
            )),
          T('CANCEL', o || u)
        )
      }
      function J(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o]
        return (
          0 === arguments.length
            ? (e = s)
            : (d(
                e,
                p.notUndef,
                'select(selector,[...]): argument selector is undefined'
              ),
              d(
                e,
                p.func,
                'select(selector,[...]): argument ' + e + ' is not a function'
              )),
          T('SELECT', { selector: e, args: r })
        )
      }
      function X(e, t) {
        return (
          d(
            e,
            p.notUndef,
            'actionChannel(pattern,...): argument pattern is undefined'
          ),
          arguments.length > 1 &&
            (d(
              t,
              p.notUndef,
              'actionChannel(pattern, buffer): argument buffer is undefined'
            ),
            d(
              t,
              p.buffer,
              'actionChannel(pattern, buffer): argument ' +
                t +
                ' is not a valid buffer'
            )),
          T('ACTION_CHANNEL', { pattern: e, buffer: t })
        )
      }
      function Y() {
        return T('CANCELLED', {})
      }
      function Z(e) {
        return (
          d(
            e,
            p.channel,
            'flush(channel): argument ' + e + ' is not valid channel'
          ),
          T('FLUSH', e)
        )
      }
      function $(e) {
        return (
          d(
            e,
            p.string,
            'getContext(prop): argument ' + e + ' is not a string'
          ),
          T('GET_CONTEXT', e)
        )
      }
      function Q(e) {
        return (
          d(
            e,
            p.object,
            (function(e, t) {
              return (
                (e ? e + '.' : '') +
                'setContext(props): argument ' +
                t +
                ' is not a plain object'
              )
            })(null, e)
          ),
          T('SET_CONTEXT', e)
        )
      }
      function ee(e, t) {
        for (
          var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2;
          n < r;
          n++
        )
          o[n - 2] = arguments[n]
        return q.apply(void 0, [H, e, t].concat(o))
      }
      function te(e, t) {
        for (
          var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), n = 2;
          n < r;
          n++
        )
          o[n - 2] = arguments[n]
        return q.apply(void 0, [w, e, t].concat(o))
      }
      function re(e, t, r) {
        for (
          var o = arguments.length, n = Array(o > 3 ? o - 3 : 0), a = 3;
          a < o;
          a++
        )
          n[a - 3] = arguments[a]
        return q.apply(void 0, [k, e, t, r].concat(n))
      }
      ;(S.resolve = function() {
        var e = S.apply(void 0, arguments)
        return (e.PUT.resolve = !0), e
      }),
        (S.sync = y(S.resolve, E('put.sync', 'put.resolve')))
      var oe = function(e) {
        return function(t) {
          return t && t[j] && t[e]
        }
      }
      oe(U),
        oe('PUT'),
        oe('ALL'),
        oe('RACE'),
        oe('CALL'),
        oe('CPS'),
        oe('FORK'),
        oe('JOIN'),
        oe('CANCEL'),
        oe('SELECT'),
        oe('ACTION_CHANNEL'),
        oe('CANCELLED'),
        oe('FLUSH'),
        oe('GET_CONTEXT'),
        oe('SET_CONTEXT')
      r.d(t, 'take', function() {
        return A
      }),
        r.d(t, 'takem', function() {
          return G
        }),
        r.d(t, 'put', function() {
          return S
        }),
        r.d(t, 'all', function() {
          return I
        }),
        r.d(t, 'race', function() {
          return x
        }),
        r.d(t, 'call', function() {
          return K
        }),
        r.d(t, 'apply', function() {
          return W
        }),
        r.d(t, 'cps', function() {
          return N
        }),
        r.d(t, 'fork', function() {
          return q
        }),
        r.d(t, 'spawn', function() {
          return F
        }),
        r.d(t, 'join', function() {
          return z
        }),
        r.d(t, 'cancel', function() {
          return V
        }),
        r.d(t, 'select', function() {
          return J
        }),
        r.d(t, 'actionChannel', function() {
          return X
        }),
        r.d(t, 'cancelled', function() {
          return Y
        }),
        r.d(t, 'flush', function() {
          return Z
        }),
        r.d(t, 'getContext', function() {
          return $
        }),
        r.d(t, 'setContext', function() {
          return Q
        }),
        r.d(t, 'takeEvery', function() {
          return ee
        }),
        r.d(t, 'takeLatest', function() {
          return te
        }),
        r.d(t, 'throttle', function() {
          return re
        })
    },
  on7z:
    /*!****************************!*\
  !*** ./src/utils/axios.js ***!
  \****************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! axios */ 'zr5I'),
            a = r.n(n),
            i = r(/*! query-string */ 'Lc87'),
            c = r.n(i),
            u = r(/*! ../config */ '20nU')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var l,
            s,
            d = function(e) {
              var t = {
                  baseURL: e || u.default.BASE_URL,
                  paramsSerializer: function(e) {
                    return c.a.stringify(e)
                  }
                },
                r = a.a.create(t)
              return (
                r.interceptors.request.use(
                  function(e) {
                    return e
                  },
                  function(e) {
                    return Promise.reject(e)
                  }
                ),
                r.interceptors.response.use(
                  function(e) {
                    return e.data.success, !e.data.success && e.data.message, e
                  },
                  function(e) {
                    return Promise.reject(e)
                  }
                ),
                r
              )
            },
            _ = d(u.default.URL)
          ;(t.default = _),
            (l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (l.register(
                'Authentication failed!',
                'AUTH_FAILED',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\axios.js'
              ),
              l.register(
                d,
                'Axios',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\axios.js'
              ),
              l.register(
                _,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\axios.js'
              )),
            (s =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && s(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  oncg:
    /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react-router-dom')
    },
  ou4z:
    /*!*******************************************************!*\
  !*** (webpack)-flush-chunks/dist/createApiWithCss.js ***!
  \*******************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createCssHash = t.stylesAsString = t.isCss = t.isJs = t.getJsFileRegex = void 0)
      var o = a(r(/*! react */ 'cDcd')),
        n = a(r(/*! fs */ 'mw/K'))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.default = function(e, t, r, n) {
        var a = r.publicPath.replace(/\/$/, ''),
          d = i(e),
          _ = e.filter(function(e) {
            return c(d, e)
          }),
          f = t.filter(u),
          p = s(r),
          m = {
            Js: function() {
              return o.default.createElement(
                'span',
                null,
                _.map(function(e, t) {
                  return o.default.createElement('script', {
                    type: 'text/javascript',
                    src: a + '/' + e,
                    key: t,
                    defer: !0
                  })
                })
              )
            },
            Styles: function() {
              return o.default.createElement(
                'span',
                null,
                f.map(function(e, t) {
                  return o.default.createElement('link', {
                    rel: 'stylesheet',
                    href: a + '/' + e,
                    key: t
                  })
                })
              )
            },
            js: {
              toString: function() {
                return _.map(function(e) {
                  return (
                    "<script type='text/javascript' src='" +
                    a +
                    '/' +
                    e +
                    "' defer='defer'></script>"
                  )
                }).join('\n')
              }
            },
            styles: {
              toString: function() {
                return f
                  .map(function(e) {
                    return (
                      "<link rel='stylesheet' href='" + a + '/' + e + "' />"
                    )
                  })
                  .join('\n')
              }
            },
            Css: function() {
              return o.default.createElement(
                'span',
                null,
                o.default.createElement('style', null, l(f, n))
              )
            },
            css: {
              toString: function() {
                return '<style>' + l(f, n) + '</style>'
              }
            },
            scripts: _,
            stylesheets: f,
            publicPath: a,
            outputPath: n,
            cssHashRaw: p,
            CssHash: function() {
              return o.default.createElement('script', {
                type: 'text/javascript',
                dangerouslySetInnerHTML: {
                  __html: 'window.__CSS_CHUNKS__ = ' + JSON.stringify(p)
                }
              })
            },
            cssHash: {
              toString: function() {
                return (
                  "<script type='text/javascript'>window.__CSS_CHUNKS__= " +
                  JSON.stringify(p) +
                  '</script>'
                )
              }
            }
          }
        return m
      }
      var i = (t.getJsFileRegex = function(e) {
          return !!e.find(function(e) {
            return e.includes('no_css')
          })
            ? /\.no_css\.js$/
            : /\.js$/
        }),
        c = (t.isJs = function(e, t) {
          return e.test(t) && !/\.hot-update\.js$/.test(t)
        }),
        u = (t.isCss = function(e) {
          return /\.css$/.test(e)
        }),
        l = (t.stylesAsString = function(e, t) {
          if (!t)
            throw new Error(
              "No `outputPath` was provided as an option to `flushChunks`.\n      Please provide one so stylesheets can be read from the\n      file system since you're embedding the css as a string."
            )
          var r = t.replace(/\/$/, '')
          return e
            .map(function(e) {
              var t = r + '/' + e
              return n.default.readFileSync(t, 'utf8')
            })
            .join('\n')
            .replace(/\/\*# sourceMappingURL=.+\*\//g, '')
        }),
        s = (t.createCssHash = function(e) {
          var t = e.assetsByChunkName,
            r = e.publicPath
          return Object.keys(t).reduce(function(e, o) {
            if (!t[o] || !t[o].find) return e
            var n = t[o].find(function(e) {
              return e.endsWith('.css')
            })
            return n && (e[o] = '' + r + n), e
          }, {})
        })
    },
  oyvS:
    /*!***********************!*\
  !*** external "path" ***!
  \***********************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('path')
    },
  pbYc:
    /*!********************************************!*\
  !*** ./src/containers/pages/home/index.js ***!
  \********************************************/
    /*! exports provided: default, sagas, reducer, homeStateKey, fetchUsers, fetchingUsers, fetchUserSuccess, fetchUserError */
    /*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/routes.js (referenced with import(), require.resolve) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t)
      var o = r(/*! ./home */ 'yQkA')
      r.d(t, 'default', function() {
        return o.default
      })
      var n = r(/*! ./actions */ 'jLua')
      r.d(t, 'fetchUsers', function() {
        return n.fetchUsers
      }),
        r.d(t, 'fetchingUsers', function() {
          return n.fetchingUsers
        }),
        r.d(t, 'fetchUserSuccess', function() {
          return n.fetchUserSuccess
        }),
        r.d(t, 'fetchUserError', function() {
          return n.fetchUserError
        })
      var a = r(/*! ./saga */ 'QcoN')
      r.d(t, 'sagas', function() {
        return a.default
      })
      var i = r(/*! ./reducers */ 'LRLl')
      r.d(t, 'reducer', function() {
        return i.default
      })
      var c = r(/*! ./constants */ '7QCE')
      r.d(t, 'homeStateKey', function() {
        return c.HOME_STATE_KEY
      })
      'undefined' != typeof reactHotLoaderGlobal &&
        reactHotLoaderGlobal.default.signature
    },
  pwlD:
    /*!*************************************************!*\
  !*** ./src/components/common/icon/location.jsx ***!
  \*************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  role: 'img',
                  viewBox: '0 0 512 512'
                },
                a.a.createElement('title', null, 'Location'),
                a.a.createElement(
                  'g',
                  null,
                  a.a.createElement(
                    'g',
                    null,
                    a.a.createElement('path', {
                      d:
                        'M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z'
                    })
                  )
                ),
                a.a.createElement(
                  'g',
                  null,
                  a.a.createElement(
                    'g',
                    null,
                    a.a.createElement('path', {
                      d:
                        'M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z'
                    })
                  )
                )
              )
            },
            l = u
          ;(t.default = l),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Location',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\location.jsx'
              ),
              i.register(
                l,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\location.jsx'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  r5oh:
    /*!*********************!*\
  !*** external "vm" ***!
  \*********************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('vm')
    },
  rKB8:
    /*!************************!*\
  !*** external "redux" ***!
  \************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('redux')
    },
  rf6O:
    /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('prop-types')
    },
  roNf:
    /*!**************************************************!*\
  !*** (webpack)-flush-chunks/dist/flushChunks.js ***!
  \**************************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t,
      r
    ) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.filesFromChunks = t.concatFilesAtKeys = t.normalizePath = t.isUnique = t.createFilesByModuleId = t.createFilesByPath = t.flushWebpack = t.flushBabel = t.flush = t.flushFilesPure = t.flushFiles = t.flushChunks = void 0)
      var o,
        n = r(/*! ./createApiWithCss */ 'ou4z'),
        a = (o = n) && o.__esModule ? o : { default: o }
      function i(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]
          return r
        }
        return Array.from(e)
      }
      var c = null,
        u = null,
        l = void 0 !== r,
        s = { before: ['bootstrap', 'vendor'], after: ['main'] }
      t.default = function(e, t) {
        return d(e, l, t)
      }
      var d = function(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = r.before || s.before,
            n = function(t, r) {
              return L(t, e, r)
            },
            c = n(o),
            u = r.chunkNames
              ? n(r.chunkNames, !0)
              : f(r.moduleIds || [], e, r.rootDir, t),
            l = r.after || s.after,
            d = n(l)
          return (0, a.default)(
            [].concat(i(c), i(u), i(d)).filter(y),
            [].concat(i(c), i(d.reverse()), i(u)).filter(y),
            e,
            r.outputPath
          )
        },
        _ = function(e, t, r) {
          var o = r.chunkNames
              ? L(r.chunkNames, e)
              : f(r.moduleIds || [], e, r.rootDir, t),
            n = r.filter
          if (n) {
            if ('function' == typeof n) return o.filter(n)
            var a = n instanceof RegExp ? n : new RegExp('.' + n + '$')
            return o.filter(function(e) {
              return a.test(e)
            })
          }
          return o
        },
        f = function(e, t, r, o) {
          return o ? m(e, t).filter(y) : p(e, t, r).filter(y)
        },
        p = function(e, t, r) {
          if (!r)
            throw new Error(
              'No `rootDir` was provided as an option to `flushChunks`.\n      Please provide one so modules rendered server-side can be\n      paired to their webpack equivalents client-side, and their\n      corresponding chunks.'
            )
          var o = r
          return (
            (c = c || v(t)),
            g(
              c,
              e.map(function(e) {
                return E(e, o)
              })
            )
          )
        },
        m = function(e, t) {
          return (u = u || h(t)), g(u, e)
        },
        b = function(e) {
          return e.reduce(function(e, t) {
            return (e[t.id] = t.files), e
          }, {})
        },
        v = function(e) {
          var t = e.chunks,
            r = e.modules,
            o = b(t)
          return r.reduce(function(e, t) {
            var r = t.name,
              n = g(o, t.chunks)
            return (e[r] = n.filter(y)), e
          }, {})
        },
        h = function(e) {
          var t = v(e)
          return e.modules.reduce(function(e, r) {
            var o = r.name
            return (e[r.id] = t[o]), e
          }, {})
        },
        y = function(e, t, r) {
          return r.indexOf(e) === t
        },
        E = function(e, t) {
          return e.replace(t, '.').replace(/\.js$/, '') + '.js'
        },
        g = function(e, t) {
          return t.reduce(function(t, r) {
            return t.concat(e[r] || [])
          }, [])
        },
        O = function(e) {
          var t = e.chunkNames,
            r = e.stats,
            o = e.checkChunkNames
          return t
            .reduce(function(e, t) {
              if (
                !(function(e, t, r) {
                  var o = !(!t[e] && !t[e + '-'])
                  return (
                    !o &&
                      r &&
                      console.warn(
                        '[FLUSH CHUNKS]: Unable to find ' +
                          e +
                          ' in Webpack chunks. Please check usage of Babel plugin.'
                      ),
                    o
                  )
                })(t, r.assetsByChunkName, o)
              )
                return e
              var n = (function(e, t) {
                return t && t[e] ? t[e].chunks : [e]
              })(t, r.namedChunkGroups)
              return e.push.apply(e, i(n)), e
            }, [])
            .filter(y)
        },
        L = function(e, t, r) {
          var o,
            n,
            a = (n = t.chunks) ? b(n) : {},
            c = O({ chunkNames: e, stats: t, checkChunkNames: r })
          return (o = []).concat
            .apply(
              o,
              i(
                c.map(function(e) {
                  return 'number' == typeof e
                    ? a[e]
                    : t.assetsByChunkName[e] || t.assetsByChunkName[e + '-']
                })
              )
            )
            .filter(function(e) {
              return e
            })
        }
      ;(t.flushChunks = d),
        (t.flushFiles = function(e, t) {
          return _(e, l, t)
        }),
        (t.flushFilesPure = _),
        (t.flush = f),
        (t.flushBabel = p),
        (t.flushWebpack = m),
        (t.createFilesByPath = v),
        (t.createFilesByModuleId = h),
        (t.isUnique = y),
        (t.normalizePath = E),
        (t.concatFilesAtKeys = g),
        (t.filesFromChunks = L)
    },
  udBv:
    /*!****************************************************!*\
  !*** ./src/components/pages/notfound/notfound.jsx ***!
  \****************************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! react-router-dom */ 'oncg'
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__
            ),
            _notfound_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! ./notfound.scss */ 'Zqzj'
            ),
            _notfound_scss__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              _notfound_scss__WEBPACK_IMPORTED_MODULE_2__
            ),
            _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ../../section */ 'G7fN'
            ),
            _heading_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ../../heading/heading */ 'vuz3'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            NotFound = (function(_React$PureComponent) {
              _inherits(NotFound, _React$PureComponent)
              var _super = _createSuper(NotFound)
              function NotFound() {
                return (
                  _classCallCheck(this, NotFound), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(NotFound, [
                  {
                    key: 'render',
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _section__WEBPACK_IMPORTED_MODULE_3__.default,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'div',
                          {
                            id: 'notfound',
                            className:
                              _notfound_scss__WEBPACK_IMPORTED_MODULE_2___default
                                .a.notfound
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _heading_heading__WEBPACK_IMPORTED_MODULE_4__.default,
                            { text: 'oh! no', center: !0 }
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h1',
                            {
                              className:
                                _notfound_scss__WEBPACK_IMPORTED_MODULE_2___default
                                  .a.title
                            },
                            'There‘s not much left here for you.'
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link,
                            {
                              to: '/',
                              className:
                                _notfound_scss__WEBPACK_IMPORTED_MODULE_2___default
                                  .a.bigButton
                            },
                            'Go Home'
                          )
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                NotFound
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = NotFound,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                NotFound,
                'NotFound',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\pages\\notfound\\notfound.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\pages\\notfound\\notfound.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  ujeq:
    /*!***********************************************!*\
  !*** ./src/components/common/image/image.jsx ***!
  \***********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! prop-types */ 'rf6O'),
            c = r.n(i),
            u = r(/*! react-lazyload */ 'E4SY'),
            l = r.n(u),
            s = r(/*! ./image.scss */ '7mHa'),
            d = r.n(s)
          function _() {
            return (_ =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t]
                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
              }).apply(this, arguments)
          }
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var f = function() {
              return a.a.createElement('div', { className: d.a.placeholder })
            },
            p = function(e) {
              var t = e.src,
                r = e.alt,
                o = e.lazy,
                n = e.className,
                i = e.lazyloadOptions
              return o
                ? a.a.createElement(
                    l.a,
                    _({}, i, { once: !0 }),
                    a.a.createElement('img', { alt: r, className: n, src: t })
                  )
                : a.a.createElement('img', { src: t, alt: r, className: n })
            }
          ;(p.propTypes = {
            lazy: c.a.bool,
            src: c.a.string.isRequired,
            alt: c.a.string,
            className: c.a.string.isRequired,
            lazyloadOptions: c.a.object
          }),
            (p.defaultProps = {
              lazy: !0,
              alt: '',
              lazyloadOptions: {
                offset: 100,
                placeholder: a.a.createElement(f, null)
              }
            })
          var m,
            b,
            v = p
          ;(t.default = v),
            (m =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (m.register(
                f,
                'Placeholder',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\image\\image.jsx'
              ),
              m.register(
                p,
                'Image',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\image\\image.jsx'
              ),
              m.register(
                v,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\image\\image.jsx'
              )),
            (b =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && b(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  vL89:
    /*!*********************************************!*\
  !*** ./src/components/heading/heading.scss ***!
  \*********************************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = {
        heading: 'heading-heading-3xWQN',
        headingCenter: 'heading-headingCenter-1Dm1Y'
      }
    },
  vrxZ:
    /*!***************************************!*\
  !*** ./src/utils/universalOptions.js ***!
  \***************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var i,
            c,
            u = function() {
              return a.a.createElement(a.a.Fragment, null)
            },
            l = function() {
              return a.a.createElement(a.a.Fragment, null)
            },
            s = {
              loading: a.a.createElement(u, null),
              error: a.a.createElement(l, null),
              timeout: 15e3
            },
            d = s
          ;(t.default = d),
            (i =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (i.register(
                u,
                'Loading',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\universalOptions.js'
              ),
              i.register(
                l,
                'Error',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\universalOptions.js'
              ),
              i.register(
                s,
                'universalOptions',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\universalOptions.js'
              ),
              i.register(
                d,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\utils\\universalOptions.js'
              )),
            (c =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && c(e)
        }.call(
          this,
          r(
            /*! ./../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  vuz3:
    /*!********************************************!*\
  !*** ./src/components/heading/heading.jsx ***!
  \********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! ./heading.scss */ 'vL89'),
            c = r.n(i)
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var u,
            l,
            s = function(e) {
              var t = e.text,
                r = e.center
              return a.a.createElement(
                'h3',
                { className: r ? c.a.headingCenter : c.a.heading },
                t
              )
            },
            d = s
          ;(t.default = d),
            (u =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (u.register(
                s,
                'Heading',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\heading\\heading.jsx'
              ),
              u.register(
                d,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\heading\\heading.jsx'
              )),
            (l =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && l(e)
        }.call(
          this,
          r(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  wNa6:
    /*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! redux */ 'rKB8'),
            a = r(/*! connected-react-router/immutable */ '4Rtg'),
            i = r(/*! history */ 'ZFcg'),
            c = r(/*! redux-saga */ '1fKG'),
            u = r.n(c),
            l = r(/*! immutable */ 'nuGg'),
            s = r(/*! ./utils/isServer */ 'DI/g'),
            d = r(/*! ./rootReducer */ 'Mqhw')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var _,
            f,
            p = function(e) {
              var t = e
                  ? (e.location.search = '?server=true')
                  : Object(i.createBrowserHistory)(),
                r = u()(),
                o = [Object(a.routerMiddleware)(t), r],
                c = n.compose.apply(
                  void 0,
                  [n.applyMiddleware.apply(void 0, o)].concat([])
                ),
                _ = s.default ? {} : window.__PRELOADED_STATE__
              delete _.router, s.default || delete window.__PRELOADED_STATE__
              var f = Object(n.createStore)(
                Object(d.default)(t),
                Object(l.fromJS)(_),
                c
              )
              return (f.runSaga = r.run), { store: f, history: t }
            }
          ;(t.default = p),
            (_ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              _.register(
                p,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\store.js'
              ),
            (f =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && f(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          )
        )
    },
  y6mh:
    /*!*********************************************!*\
  !*** ./src/components/common/icon/icon.jsx ***!
  \*********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          var o,
            n = r(/*! react */ 'cDcd'),
            a = r.n(n),
            i = r(/*! prop-types */ 'rf6O'),
            c = r.n(i),
            u = r(/*! ./github */ 'Uhar'),
            l = r(/*! ./linkedin */ 'c2y3'),
            s = r(/*! ./instagram */ 'KOMj'),
            d = r(/*! ./twitter */ '1peN'),
            _ = r(/*! ./codepen */ 'X+Qw'),
            f = r(/*! ./logo */ 'oHfu'),
            p = r(/*! ./external */ 'Sy6E'),
            m = r(/*! ./folder */ 'CcSZ'),
            b = r(/*! ./location */ 'pwlD'),
            v = r(/*! ./fork */ 'MLcn')
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var h = function(e) {
            switch (e.name) {
              case 'fork':
                return a.a.createElement(v.default, null)
              case 'logo':
                return a.a.createElement(f.default, null)
              case 'github':
                return a.a.createElement(u.default, null)
              case 'linkedin':
                return a.a.createElement(l.default, null)
              case 'instagram':
                return a.a.createElement(s.default, null)
              case 'twitter':
                return a.a.createElement(d.default, null)
              case 'codepen':
                return a.a.createElement(_.default, null)
              case 'external':
                return a.a.createElement(p.default, null)
              case 'location':
                return a.a.createElement(b.default, null)
              case 'folder':
                return a.a.createElement(m.default, null)
              default:
                return a.a.createElement(u.default, null)
            }
          }
          h.propTypes = { name: c.a.string.isRequired }
          var y,
            E,
            g = h
          ;(t.default = g),
            (y =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (y.register(
                h,
                'Icon',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\icon.jsx'
              ),
              y.register(
                g,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\common\\icon\\icon.jsx'
              )),
            (E =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && E(e)
        }.call(
          this,
          r(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(e)
        )
    },
  yQkA:
    /*!********************************************!*\
  !*** ./src/containers/pages/home/home.jsx ***!
  \********************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _components_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! ../../../components/pages/home */ '4WpZ'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            Home = (function(_React$PureComponent) {
              _inherits(Home, _React$PureComponent)
              var _super = _createSuper(Home)
              function Home() {
                return (
                  _classCallCheck(this, Home), _super.apply(this, arguments)
                )
              }
              return (
                _createClass(Home, [
                  {
                    key: 'render',
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_pages_home__WEBPACK_IMPORTED_MODULE_1__.default,
                        this.props
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Home
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent)
          Home.propTypes = {}
          var _default = Home,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Home,
                'Home',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\home.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\containers\\pages\\home\\home.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  ySCG:
    /*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
    /*! exports provided: default */
    /*! ModuleConcatenation bailout: Module uses eval() */ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! react */ 'cDcd'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              /*! react-helmet */ 'zIXN'
            ),
            react_helmet__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react_helmet__WEBPACK_IMPORTED_MODULE_1__
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              /*! react-router-dom */ 'oncg'
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              react_router_dom__WEBPACK_IMPORTED_MODULE_2__
            ),
            _header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              /*! ./header.scss */ 'HXvF'
            ),
            _header_scss__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              _header_scss__WEBPACK_IMPORTED_MODULE_3__
            ),
            _common_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              /*! ../common/icon */ '0eKw'
            ),
            _utils_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              /*! ../../utils/throttle */ '3Fcl'
            ),
            _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              /*! ../../utils/isServer */ 'DI/g'
            ),
            _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              /*! ../../assets/resume.pdf */ '24ww'
            ),
            _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
              _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_7__
            ),
            _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              /*! ../menu */ 'lV95'
            ),
            enterModule
          function _typeof(e) {
            return (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            )
          }
          function _createSuper(e) {
            return function() {
              var t,
                r = _getPrototypeOf(e)
              if (_isNativeReflectConstruct()) {
                var o = _getPrototypeOf(this).constructor
                t = Reflect.construct(r, arguments, o)
              } else t = r.apply(this, arguments)
              return _possibleConstructorReturn(this, t)
            }
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ('object' !== _typeof(t) && 'function' != typeof t)
              ? _assertThisInitialized(e)
              : t
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return e
          }
          function _isNativeReflectConstruct() {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function() {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          function _inherits(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t)
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e
              })(e, t)
          }
          function _defineProperty(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = r),
              e
            )
          }
          ;(enterModule =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module)
          var __signature__ =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e
                  },
            hamBefore = 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in',
            hamBeforeActive = 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s',
            hamAfter =
              'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            hamAfterActive =
              'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s',
            Navigation = [
              { name: 'About', to: '/#about' },
              { name: 'Experience', to: '/#experience' },
              { name: 'Work', to: '/#work' },
              { name: 'Contact', to: '/#contact' }
            ],
            Header = (function(_React$PureComponent) {
              _inherits(Header, _React$PureComponent)
              var _super = _createSuper(Header)
              function Header() {
                var e
                return (
                  _classCallCheck(this, Header),
                  _defineProperty(
                    _assertThisInitialized((e = _super.call(this))),
                    'toggleMenu',
                    function() {
                      var t = e.state.isMenuOpen
                      e.setState({ isMenuOpen: !t })
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(e),
                    'handleScroll',
                    function() {
                      if (
                        !_utils_isServer__WEBPACK_IMPORTED_MODULE_6__.default
                      ) {
                        var t = e.state,
                          r = t.scrollDirection,
                          o = t.lastScrollTop,
                          n = t.isMenuOpen,
                          a = window,
                          i = a.scrollY,
                          c = a.innerHeight
                        Math.abs(o - i) <= 5 ||
                          n ||
                          (i < 5
                            ? e.setState({ scrollDirection: 'none' })
                            : i > o && i > 100
                            ? 'down' !== r &&
                              e.setState({ scrollDirection: 'down' })
                            : i + c < document.body.scrollHeight &&
                              'up' !== r &&
                              e.setState({ scrollDirection: 'up' }),
                          e.setState({ lastScrollTop: i }))
                      }
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(e),
                    'getHeaderStyle',
                    function() {
                      var t = e.state.scrollDirection
                      return {
                        height: 'none' === t ? '100px' : '70px',
                        boxShadow:
                          'up' === t ? '0 10px 30px -10px #020c1bb3' : 'none',
                        transform: 'translateY('.concat(
                          'down' === t ? '-70px' : '0px',
                          ')'
                        )
                      }
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(e),
                    'getHamburgerStyle',
                    function() {
                      var t = e.state.isMenuOpen
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'style',
                          null,
                          '\n          .'
                            .concat(
                              _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                .a.hamburgerInner,
                              '{\n            transition-delay: '
                            )
                            .concat(
                              t ? '0.12s' : '0s',
                              ';\n            transform: rotate('
                            )
                            .concat(
                              t ? '225deg' : '0deg',
                              ')!important;\n            transition-timing-function: cubic-bezier('
                            )
                            .concat(
                              t
                                ? '0.215, 0.61, 0.355, 1'
                                : '0.55, 0.055, 0.675, 0.19',
                              ');\n          }\n          .'
                            )
                            .concat(
                              _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                .a.hamburgerInner,
                              '::before{\n            width:'
                            )
                            .concat(t ? '100%' : '120%', ';\n            top:')
                            .concat(
                              t ? '0' : '-10px',
                              ';\n            opacity:'
                            )
                            .concat(t ? '0' : '1', ';\n            transition:')
                            .concat(
                              t ? hamBeforeActive : hamBefore,
                              ';\n          }\n          .'
                            )
                            .concat(
                              _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                .a.hamburgerInner,
                              '::after{\n            width:'
                            )
                            .concat(
                              t ? '100%' : '80%',
                              ';\n            bottom:'
                            )
                            .concat(
                              t ? '0' : '-10px',
                              ';\n            transform:rotate('
                            )
                            .concat(
                              t ? '-90deg' : '0',
                              ');\n            transition:'
                            )
                            .concat(
                              t ? hamAfterActive : hamAfter,
                              ';\n          }\n          '
                            )
                        )
                      )
                    }
                  ),
                  (e.state = {
                    scrollDirection: 'none',
                    lastScrollTop: 0,
                    isMenuOpen: !1
                  }),
                  e
                )
              }
              return (
                _createClass(Header, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      var e = this
                      window.addEventListener('scroll', function() {
                        return Object(
                          _utils_throttle__WEBPACK_IMPORTED_MODULE_5__.default
                        )(e.handleScroll())
                      })
                    }
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = this,
                        t = this.state.isMenuOpen
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        {
                          id: 'Header',
                          className:
                            _header_scss__WEBPACK_IMPORTED_MODULE_3___default.a
                              .header,
                          style: this.getHeaderStyle()
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'nav',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            {
                              className:
                                _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                  .a.logo
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
                              { to: '/', 'aria-label': 'home' },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _common_icon__WEBPACK_IMPORTED_MODULE_4__.default,
                                { name: 'logo' }
                              ),
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'span',
                                null,
                                'A'
                              )
                            )
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            {
                              role: 'button',
                              className:
                                _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                  .a.hamburger,
                              onClick: function() {
                                return e.toggleMenu()
                              }
                            },
                            this.getHamburgerStyle(),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'div',
                              {
                                className:
                                  _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.hamburgerBox
                              },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                {
                                  className:
                                    _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                      .a.hamburgerInner
                                }
                              )
                            )
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            {
                              className:
                                _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                  .a.links
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'ol',
                              null,
                              Navigation.map(function(e) {
                                var t = e.name,
                                  r = e.to
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  'li',
                                  { key: t },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
                                    { to: r },
                                    t
                                  )
                                )
                              })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'div',
                              {
                                className:
                                  _header_scss__WEBPACK_IMPORTED_MODULE_3___default
                                    .a.resumeButton
                              },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'a',
                                {
                                  href:
                                    _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_7___default.a
                                },
                                'Resume'
                              )
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _menu__WEBPACK_IMPORTED_MODULE_8__.default,
                          {
                            isMenuOpen: t,
                            toggleMenu: this.toggleMenu,
                            links: Navigation
                          }
                        )
                      )
                    }
                  },
                  {
                    key: '__reactstandin__regenerateByEval',
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code)
                    }
                  }
                ]),
                Header
              )
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent),
            _default = Header,
            reactHotLoader,
            leaveModule
          ;(__webpack_exports__.default = _default),
            (reactHotLoader =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                hamBefore,
                'hamBefore',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              ),
              reactHotLoader.register(
                hamBeforeActive,
                'hamBeforeActive',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              ),
              reactHotLoader.register(
                hamAfter,
                'hamAfter',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              ),
              reactHotLoader.register(
                hamAfterActive,
                'hamAfterActive',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              ),
              reactHotLoader.register(
                Navigation,
                'Navigation',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              ),
              reactHotLoader.register(
                Header,
                'Header',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              ),
              reactHotLoader.register(
                _default,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\src\\components\\header\\header.jsx'
              )),
            (leaveModule =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module)
        }.call(
          this,
          __webpack_require__(
            /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ '3UD+'
          )(module)
        )
    },
  zIXN:
    /*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('react-helmet')
    },
  zr5I:
    /*!************************!*\
  !*** external "axios" ***!
  \************************/
    /*! no static exports found */
    /*! ModuleConcatenation bailout: Module is not an ECMAScript module */ function(
      e,
      t
    ) {
      e.exports = require('axios')
    },
  zzXv:
    /*!**************************!*\
  !*** ./server/loader.js ***!
  \**************************/
    /*! exports provided: injectHTML, default */
    /*! ModuleConcatenation bailout: Module uses injected variables (module) */ function(
      e,
      t,
      r
    ) {
      'use strict'
      r.r(t),
        function(e) {
          r.d(t, 'injectHTML', function() {
            return T
          })
          var o,
            n = r(/*! fs */ 'mw/K'),
            a = r.n(n),
            i = r(/*! path */ 'oyvS'),
            c = r.n(i),
            u = r(/*! react */ 'cDcd'),
            l = r.n(u),
            s = r(/*! react-router-dom */ 'oncg'),
            d = r(/*! react-dom/server */ '7ITC'),
            _ = r(/*! react-helmet */ 'zIXN'),
            f = r.n(_),
            p = r(/*! react-redux */ 'h74D'),
            m = r(/*! history/createMemoryHistory */ 'hf+U'),
            b = r.n(m),
            v = r(/*! react-router */ 'MGin'),
            h = r(/*! react-universal-component/server */ 'nnsb'),
            y = r(/*! webpack-flush-chunks */ 'roNf'),
            E = r.n(y),
            g = r(/*! redux-saga */ '1fKG'),
            O = r(/*! ../src/store */ 'wNa6'),
            L = r(/*! ../src/containers/app */ 'VLWd'),
            P = r(/*! ../src/routes */ 'VmXB'),
            D = r(/*! ../src/rootSaga */ 'e4a2'),
            M = r(/*! ../src/containers/common/helmet/actions */ 'MZxF'),
            C = r(/*! ../src/utils/meta */ 'AsVr')
          function H(e) {
            return (
              (function(e) {
                if (Array.isArray(e)) return w(e)
              })(e) ||
              (function(e) {
                if (
                  'undefined' != typeof Symbol &&
                  Symbol.iterator in Object(e)
                )
                  return Array.from(e)
              })(e) ||
              (function(e, t) {
                if (!e) return
                if ('string' == typeof e) return w(e, t)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === r && e.constructor && (r = e.constructor.name)
                if ('Map' === r || 'Set' === r) return Array.from(r)
                if (
                  'Arguments' === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return w(e, t)
              })(e) ||
              (function() {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              })()
            )
          }
          function w(e, t) {
            ;(null == t || t > e.length) && (t = e.length)
            for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]
            return o
          }
          ;(o =
            'undefined' != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0) && o(e)
          'undefined' != typeof reactHotLoaderGlobal &&
            reactHotLoaderGlobal.default.signature
          var k,
            j,
            U = function(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'utf8',
                r = ''
              try {
                r = a.a.readFileSync(
                  c.a.resolve(
                    process.cwd(),
                    './'.concat('build', '/').concat(e)
                  ),
                  t
                )
              } catch (t) {
                console.log('Error loading:', e, t.stack)
              }
              return r
            },
            R =
              "\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-155127051-1');\n</script> <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-155127051-1\"></script>\n",
            T = function(e, t) {
              var r = t.html,
                o = t.title,
                n = t.meta,
                a = t.body,
                i = t.scripts,
                c = void 0 === i ? '' : i,
                u = t.state,
                l = t.style,
                s = void 0 === l ? '' : l,
                d = t.cssHash,
                _ = e
              return (_ = (_ = (_ = (_ = (_ = _.replace(
                '<html>',
                '<html '.concat(r, '>')
              )).replace(/<title>.*?<\/title>/g, o)).replace(
                '</head>',
                ''.concat(n, '<style>').concat(s, '</style></head>')
              )).replace(
                '<div id="root"></div>',
                '<div id="root">'
                  .concat(a, '</div>')
                  .concat(d, '<script>window.__PRELOADED_STATE__ = ')
                  .concat(u, '</script>')
              )).replace('</body>', ''.concat(R).concat(c, '</body>')))
            },
            A = function(e) {
              var t = e.clientStats
              return function(e, r) {
                a.a.readFile(
                  c.a.resolve(process.cwd(), './public/index.html'),
                  'utf8',
                  function(o, n) {
                    if (o)
                      return (
                        console.error(
                          '::::::: Error while reading index.html file from /public',
                          o
                        ),
                        r.status(404).end()
                      )
                    var a = b()({ initialEntries: [e.path] }),
                      i = Object(O.default)(a).store,
                      c = i.runSaga(D.default),
                      u = {},
                      _ = []
                    P.RouteList.some(function(t) {
                      var r = Object(s.matchPath)(e.path, t)
                      return (
                        r &&
                          t.fetchRouteData &&
                          (_ = [].concat(H(_), H(t.fetchRouteData))),
                        r
                      )
                    }),
                      _.map(function(e) {
                        return i.dispatch(e()), e
                      }),
                      C.default[e.url] &&
                        i.dispatch(Object(M.setHelmetInfo)(C.default[e.url])),
                      i.dispatch(g.END)
                    try {
                      c.done.then(function() {
                        var o = Object(d.renderToString)(
                          l.a.createElement(
                            p.Provider,
                            { store: i },
                            l.a.createElement(
                              v.StaticRouter,
                              { location: e.url, context: u },
                              l.a.createElement(L.default, null)
                            )
                          )
                        )
                        if (u.url)
                          r.writeHead(302, { Location: u.url }), r.end()
                        else {
                          var a = f.a.renderStatic(),
                            c = Object(h.flushChunkNames)(),
                            s = E()(t, { chunkNames: c }),
                            _ = s.js,
                            m = s.stylesheets,
                            b = s.cssHash,
                            y = ''
                          m.map(function(e) {
                            return (y += U(e)), e
                          })
                          var g = JSON.stringify(i.getState()).replace(
                              /</g,
                              '\\u003c'
                            ),
                            O = T(n, {
                              html: a.htmlAttributes.toString(),
                              title: a.title.toString(),
                              meta: a.meta.toString(),
                              body: o,
                              scripts: _,
                              style: y,
                              state: g,
                              cssHash: b
                            })
                          r.send(O)
                        }
                      })
                    } catch (e) {
                      console.log('::::: Error :::::', e)
                    }
                  }
                )
              }
            }
          ;(t.default = A),
            (k =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0) &&
              (k.register(
                !1,
                'isDev',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\server\\loader.js'
              ),
              k.register(
                U,
                'inlineResource',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\server\\loader.js'
              ),
              k.register(
                R,
                'googleAnalyticsScripts',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\server\\loader.js'
              ),
              k.register(
                T,
                'injectHTML',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\server\\loader.js'
              ),
              k.register(
                A,
                'default',
                'C:\\Users\\ba21415\\Desktop\\universal-demo\\server\\loader.js'
              )),
            (j =
              'undefined' != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0) && j(e)
        }.call(
          this,
          r(/*! ./../node_modules/webpack/buildin/harmony-module.js */ '3UD+')(
            e
          )
        )
    }
})
//# sourceMappingURL=main.js.map
