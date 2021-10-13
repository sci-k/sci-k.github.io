!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function f(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(m(e,t))return;return 1}function r(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){for(var n=[],s=0;s<e.length;++s)n.push(t(e[s],s));return n}function c(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function _(e,t,n,s){return xt(e,t,n,s,!0).utc()}function y(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function g(e){if(null==e._isValid){var t=y(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function w(e){var t=_(NaN);return null!=e?c(y(t),e):y(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var p=f.momentProperties=[],t=!1;function v(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=y(t)),r(t._locale)||(e._locale=t._locale),0<p.length)for(n=0;n<p.length;n++)r(i=t[s=p[n]])||(e[s]=i);return e}function k(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,f.updateOffset(this),t=!1)}function M(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function D(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return c(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,i),a){for(var e,t,n=[],s=0;s<arguments.length;s++){if(e="","object"==typeof arguments[s]){for(t in e+="\n["+s+"] ",arguments[0])m(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[s];n.push(e)}D(i+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,S={};function Y(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),S[e]||(D(t),S[e]=!0)}function O(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=c({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},c(s[n],e[n]),c(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=c({},s[n]));return s}function x(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};function T(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R={},W={};function C(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(W[e]=i),t&&(W[t[0]]=function(){return T(i.apply(this,arguments),t[1],t[2])}),n&&(W[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function U(e,t){return e.isValid()?(t=H(t,e.localeData()),R[t]=R[t]||function(s){for(var e,i=s.match(N),t=0,r=i.length;t<r;t++)W[i[t]]?i[t]=W[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=O(i[n])?i[n].call(e,s):i[n];return t}}(t),R[t](e)):e.localeData().invalidDate()}function H(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(P.lastIndex=0;0<=n&&P.test(e);)e=e.replace(P,s),P.lastIndex=0,--n;return e}var F={};function L(e,t){var n=e.toLowerCase();F[n]=F[n+"s"]=F[t]=e}function V(e){return"string"==typeof e?F[e]||F[e.toLowerCase()]:void 0}function G(e){var t,n,s={};for(n in e)m(e,n)&&(t=V(n))&&(s[t]=e[n]);return s}var E={};function A(e,t){E[e]=t}function j(e){return e%4==0&&e%100!=0||e%400==0}function I(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var t=+e,n=0;return 0!=t&&isFinite(t)&&(n=I(t)),n}function z(t,n){return function(e){return null!=e?(q(this,t,e),f.updateOffset(this,n),this):$(this,t)}}function $(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function q(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&j(e.year())&&1===e.month()&&29===e.date()?(n=Z(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),xe(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var B,J=/\d/,Q=/\d\d/,X=/\d{3}/,K=/\d{4}/,ee=/[+-]?\d{6}/,te=/\d\d?/,ne=/\d\d\d\d?/,se=/\d\d\d\d\d\d?/,ie=/\d{1,3}/,re=/\d{1,4}/,ae=/[+-]?\d{1,6}/,oe=/\d+/,ue=/[+-]?\d+/,le=/Z|[+-]\d\d:?\d\d/gi,he=/Z|[+-]\d\d(?::?\d\d)?/gi,de=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function ce(e,n,s){B[e]=O(n)?n:function(e,t){return e&&s?s:n}}function fe(e,t){return m(B,e)?B[e](t._strict,t._locale):new RegExp(me(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function me(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}B={};var _e={};function ye(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=Z(e)}),t=0;t<e.length;t++)_e[e[t]]=s}function ge(e,i){ye(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var we,pe=0,ve=1,ke=2,Me=3,De=4,Se=5,Ye=6,Oe=7,be=8;function xe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1==s?j(e)?29:28:31-s%7%2}we=Array.prototype.indexOf?Array.prototype.indexOf:function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},C("M",["MM",2],"Mo",function(){return this.month()+1}),C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),C("MMMM",0,0,function(e){return this.localeData().months(this,e)}),L("month","M"),A("month",8),ce("M",te),ce("MM",te,Q),ce("MMM",function(e,t){return t.monthsShortRegex(e)}),ce("MMMM",function(e,t){return t.monthsRegex(e)}),ye(["M","MM"],function(e,t){t[ve]=Z(e)-1}),ye(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[ve]=i:y(n).invalidMonth=e});var Te="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ne="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Pe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Re=de,We=de;function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=Z(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),xe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Ce(this,e),f.updateOffset(this,!0),this):$(this,"Month")}function He(){function e(e,t){return t.length-e.length}for(var t,n=[],s=[],i=[],r=0;r<12;r++)t=_([2e3,r]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),i.push(this.months(t,"")),i.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),i.sort(e),r=0;r<12;r++)n[r]=me(n[r]),s[r]=me(s[r]);for(r=0;r<24;r++)i[r]=me(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Fe(e){return j(e)?366:365}C("Y",0,0,function(){var e=this.year();return e<=9999?T(e,4):"+"+e}),C(0,["YY",2],0,function(){return this.year()%100}),C(0,["YYYY",4],0,"year"),C(0,["YYYYY",5],0,"year"),C(0,["YYYYYY",6,!0],0,"year"),L("year","y"),A("year",1),ce("Y",ue),ce("YY",te,Q),ce("YYYY",re,K),ce("YYYYY",ae,ee),ce("YYYYYY",ae,ee),ye(["YYYYY","YYYYYY"],pe),ye("YYYY",function(e,t){t[pe]=2===e.length?f.parseTwoDigitYear(e):Z(e)}),ye("YY",function(e,t){t[pe]=f.parseTwoDigitYear(e)}),ye("Y",function(e,t){t[pe]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return Z(e)+(68<Z(e)?1900:2e3)};var Le=z("FullYear",!0);function Ve(e){var t,n;return e<100&&0<=e?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ge(e,t,n){var s=7+t-n;return s-(7+Ve(e,0,s).getUTCDay()-t)%7-1}function Ee(e,t,n,s,i){var r,a=1+7*(t-1)+(7+n-s)%7+Ge(e,s,i),o=a<=0?Fe(r=e-1)+a:a>Fe(e)?(r=e+1,a-Fe(e)):(r=e,a);return{year:r,dayOfYear:o}}function Ae(e,t,n){var s,i,r=Ge(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+je(i=e.year()-1,t,n):a>je(e.year(),t,n)?(s=a-je(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function je(e,t,n){var s=Ge(e,t,n),i=Ge(e+1,t,n);return(Fe(e)-s+i)/7}C("w",["ww",2],"wo","week"),C("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),A("week",5),A("isoWeek",5),ce("w",te),ce("ww",te,Q),ce("W",te),ce("WW",te,Q),ge(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=Z(e)});function Ie(e,t){return e.slice(t,7).concat(e.slice(0,t))}C("d",0,"do","day"),C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),C("e",0,0,"weekday"),C("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),A("day",11),A("weekday",11),A("isoWeekday",11),ce("d",te),ce("e",te),ce("E",te),ce("dd",function(e,t){return t.weekdaysMinRegex(e)}),ce("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ce("dddd",function(e,t){return t.weekdaysRegex(e)}),ge(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:y(n).invalidWeekday=e}),ge(["d","e","E"],function(e,t,n,s){t[s]=Z(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),$e="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),qe=de,Be=de,Je=de;function Qe(){function e(e,t){return t.length-e.length}for(var t,n,s,i,r=[],a=[],o=[],u=[],l=0;l<7;l++)t=_([2e3,1]).day(l),n=me(this.weekdaysMin(t,"")),s=me(this.weekdaysShort(t,"")),i=me(this.weekdays(t,"")),r.push(n),a.push(s),o.push(i),u.push(n),u.push(s),u.push(i);r.sort(e),a.sort(e),o.sort(e),u.sort(e),this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}C("H",["HH",2],0,"hour"),C("h",["hh",2],0,Xe),C("k",["kk",2],0,function(){return this.hours()||24}),C("hmm",0,0,function(){return""+Xe.apply(this)+T(this.minutes(),2)}),C("hmmss",0,0,function(){return""+Xe.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),C("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),C("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),L("hour","h"),A("hour",13),ce("a",et),ce("A",et),ce("H",te),ce("h",te),ce("k",te),ce("HH",te,Q),ce("hh",te,Q),ce("kk",te,Q),ce("hmm",ne),ce("hmmss",se),ce("Hmm",ne),ce("Hmmss",se),ye(["H","HH"],Me),ye(["k","kk"],function(e,t,n){var s=Z(e);t[Me]=24===s?0:s}),ye(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ye(["h","hh"],function(e,t,n){t[Me]=Z(e),y(n).bigHour=!0}),ye("hmm",function(e,t,n){var s=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s)),y(n).bigHour=!0}),ye("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s,2)),t[Se]=Z(e.substr(i)),y(n).bigHour=!0}),ye("Hmm",function(e,t,n){var s=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s))}),ye("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s,2)),t[Se]=Z(e.substr(i))});var tt=z("Hours",!0);var nt,st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Te,monthsShort:Ne,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ut(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&function(e,t){for(var n=Math.min(e.length,t.length),s=0;s<n;s+=1)if(e[s]!==t[s])return s;return n}(i,n)>=t-1)break;t--}r++}return nt}function ut(t){var e;if(void 0===it[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=nt._abbr,require("./locale/"+t),lt(e)}catch(e){it[t]=null}return it[t]}function lt(e,t){var n;return e&&((n=r(t)?dt(e):ht(e,t))?nt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),nt._abbr}function ht(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])Y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ut(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new x(b(s,t)),rt[e]&&rt[e].forEach(function(e){ht(e.name,e.config)}),lt(e),it[e]}function dt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return nt;if(!o(e)){if(t=ut(e))return t;e=[e]}return ot(e)}function ct(e){var t,n=e._a;return n&&-2===y(e).overflow&&(t=n[ve]<0||11<n[ve]?ve:n[ke]<1||n[ke]>xe(n[pe],n[ve])?ke:n[Me]<0||24<n[Me]||24===n[Me]&&(0!==n[De]||0!==n[Se]||0!==n[Ye])?Me:n[De]<0||59<n[De]?De:n[Se]<0||59<n[Se]?Se:n[Ye]<0||999<n[Ye]?Ye:-1,y(e)._overflowDayOfYear&&(t<pe||ke<t)&&(t=ke),y(e)._overflowWeeks&&-1===t&&(t=Oe),y(e)._overflowWeekday&&-1===t&&(t=be),y(e).overflow=t),e}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],wt=/^\/?Date\((-?\d+)/i,pt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,vt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function kt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(y(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Ot(e)}else e._isValid=!1}function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Ne.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}function Dt(e){var t,n,s,i,r=pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(r){if(t=Mt(r[4],r[3],r[2],r[5],r[6],r[7]),n=r[1],s=t,i=e,n&&ze.indexOf(n)!==new Date(s[0],s[1],s[2]).getDay()&&(y(i).weekdayMismatch=!0,!void(i._isValid=!1)))return;e._a=t,e._tzm=function(e,t,n){if(e)return vt[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return 60*((s-i)/100)+i}(r[8],r[9],r[10]),e._d=Ve.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function St(e,t,n){return null!=e?e:null!=t?t:n}function Yt(e){var t,n,s,i,r,a,o,u=[];if(!e._d){for(a=e,o=new Date(f.now()),s=a._useUTC?[o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()]:[o.getFullYear(),o.getMonth(),o.getDate()],e._w&&null==e._a[ke]&&null==e._a[ve]&&function(e){var t,n,s,i,r,a,o,u,l;null!=(t=e._w).GG||null!=t.W||null!=t.E?(r=1,a=4,n=St(t.GG,e._a[pe],Ae(Tt(),1,4).year),s=St(t.W,1),((i=St(t.E,1))<1||7<i)&&(u=!0)):(r=e._locale._week.dow,a=e._locale._week.doy,l=Ae(Tt(),r,a),n=St(t.gg,e._a[pe],l.year),s=St(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r);s<1||s>je(n,r,a)?y(e)._overflowWeeks=!0:null!=u?y(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[pe]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=St(e._a[pe],s[pe]),(e._dayOfYear>Fe(r)||0===e._dayOfYear)&&(y(e)._overflowDayOfYear=!0),n=Ve(r,0,e._dayOfYear),e._a[ve]=n.getUTCMonth(),e._a[ke]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=u[t]=s[t];for(;t<7;t++)e._a[t]=u[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Me]&&0===e._a[De]&&0===e._a[Se]&&0===e._a[Ye]&&(e._nextDay=!0,e._a[Me]=0),e._d=(e._useUTC?Ve:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,u),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Me]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function Ot(e){if(e._f!==f.ISO_8601)if(e._f!==f.RFC_2822){e._a=[],y(e).empty=!0;for(var t,n,s,i,r,a,o,u=""+e._i,l=u.length,h=0,d=H(e._f,e._locale).match(N)||[],c=0;c<d.length;c++)n=d[c],(t=(u.match(fe(n,e))||[])[0])&&(0<(s=u.substr(0,u.indexOf(t))).length&&y(e).unusedInput.push(s),u=u.slice(u.indexOf(t)+t.length),h+=t.length),W[n]?(t?y(e).empty=!1:y(e).unusedTokens.push(n),r=n,o=e,null!=(a=t)&&m(_e,r)&&_e[r](a,o._a,o,r)):e._strict&&!t&&y(e).unusedTokens.push(n);y(e).charsLeftOver=l-h,0<u.length&&y(e).unusedInput.push(u),e._a[Me]<=12&&!0===y(e).bigHour&&0<e._a[Me]&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[Me]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[Me],e._meridiem),null!==(i=y(e).era)&&(e._a[pe]=e._locale.erasConvertYear(i,e._a[pe])),Yt(e),ct(e)}else Dt(e);else kt(e)}function bt(e){var t,n,s=e._i,i=e._f;return e._locale=e._locale||dt(e._l),null===s||void 0===i&&""===s?w({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),M(s)?new k(ct(s)):(a(s)?e._d=s:o(i)?function(e){var t,n,s,i,r,a,o=!1;if(0===e._f.length)return y(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,a=!1,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Ot(t),g(t)&&(a=!0),r+=y(t).charsLeftOver,r+=10*y(t).unusedTokens.length,y(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));c(e,n||t)}(e):i?Ot(e):r(n=(t=e)._i)?t._d=new Date(f.now()):a(n)?t._d=new Date(n.valueOf()):"string"==typeof n?function(e){var t=wt.exec(e._i);null===t?(kt(e),!1===e._isValid&&(delete e._isValid,Dt(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:f.createFromInputFallback(e)))):e._d=new Date(+t[1])}(t):o(n)?(t._a=d(n.slice(0),function(e){return parseInt(e,10)}),Yt(t)):u(n)?function(e){var t,n;e._d||(n=void 0===(t=G(e._i)).day?t.date:t.day,e._a=d([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),Yt(e))}(t):h(n)?t._d=new Date(n):f.createFromInputFallback(t),g(e)||(e._d=null),e))}function xt(e,t,n,s,i){var r,a={};return!0!==t&&!1!==t||(s=t,t=void 0),!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&l(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new k(ct(bt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return xt(e,t,n,s,!1)}f.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),f.ISO_8601=function(){},f.RFC_2822=function(){};var Nt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:w()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:w()});function Rt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var t=G(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){var t,n,s=!1;for(t in e)if(m(e,t)&&(-1===we.call(Wt,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<Wt.length;++n)if(e[Wt[n]]){if(s)return!1;parseFloat(e[Wt[n]])!==Z(e[Wt[n]])&&(s=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=dt(),this._bubble()}function Ut(e){return e instanceof Ct}function Ht(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){C(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+T(~~(e/60),2)+n+T(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ce("Z",he),ce("ZZ",he),ye(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Vt(he,e)});var Lt=/([\+\-]|\d\d)/gi;function Vt(e,t){var n,s,i=(t||"").match(e);return null===i?null:0===(s=60*(n=((i[i.length-1]||[])+"").match(Lt)||["-",0,0])[1]+Z(n[2]))?0:"+"===n[0]?s:-s}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(M(e)||a(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),f.updateOffset(n,!1),n):Tt(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}function At(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}f.updateOffset=function(){};var jt=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Zt(e,t){var n,s,i,r=e,a=null;return Ut(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=jt.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:Z(a[ke])*n,h:Z(a[Me])*n,m:Z(a[De])*n,s:Z(a[Se])*n,ms:Z(Ht(1e3*a[Ye]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:zt(a[2],n),M:zt(a[3],n),w:zt(a[4],n),d:zt(a[5],n),h:zt(a[6],n),m:zt(a[7],n),s:zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=$t(e,t):((n=$t(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ct(r),Ut(e)&&m(e,"_locale")&&(s._locale=e._locale),Ut(e)&&m(e,"_isValid")&&(s._isValid=e._isValid),s}function zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function $t(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=t-e.clone().add(n.months,"M"),n}function qt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(Y(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),Bt(this,Zt(e,t),s),this}}function Bt(e,t,n,s){var i=t._milliseconds,r=Ht(t._days),a=Ht(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,$(e,"Month")+a*n),r&&q(e,"Date",$(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&f.updateOffset(e,r||a))}Zt.fn=Ct.prototype,Zt.invalid=function(){return Zt(NaN)};var Jt=qt(1,"add"),Qt=qt(-1,"subtract");function Xt(e){return"string"==typeof e||e instanceof String}function Kt(e){return M(e)||a(e)||Xt(e)||h(e)||function(t){var e=o(t),n=!1;e&&(n=0===t.filter(function(e){return!h(e)&&Xt(t)}).length);return e&&n}(e)||function(e){var t,n,s=u(e)&&!l(e),i=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<r.length;t+=1)n=r[t],i=i||m(e,n);return s&&i}(e)||null==e}function en(e,t){if(e.date()<t.date())return-en(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months"),i=t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(1+n,"months")-s);return-(n+i)||0}function tn(e){var t;return void 0===e?this._locale._abbr:(null!=(t=dt(e))&&(this._locale=t),this)}f.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",f.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var nn=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function sn(){return this._locale}var rn=126227808e5;function an(e,t){return(e%t+t)%t}function on(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-rn:new Date(e,t,n).valueOf()}function un(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-rn:Date.UTC(e,t,n)}function ln(e,t){return t.erasAbbrRegex(e)}function hn(){for(var e=[],t=[],n=[],s=[],i=this.eras(),r=0,a=i.length;r<a;++r)t.push(me(i[r].name)),e.push(me(i[r].abbr)),n.push(me(i[r].narrow)),s.push(me(i[r].name)),s.push(me(i[r].abbr)),s.push(me(i[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}function dn(e,t){C(0,[e,e.length],0,t)}function cn(e,t,n,s,i){var r;return null==e?Ae(this,s,i).year:((r=je(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ve(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}C("N",0,0,"eraAbbr"),C("NN",0,0,"eraAbbr"),C("NNN",0,0,"eraAbbr"),C("NNNN",0,0,"eraName"),C("NNNNN",0,0,"eraNarrow"),C("y",["y",1],"yo","eraYear"),C("y",["yy",2],0,"eraYear"),C("y",["yyy",3],0,"eraYear"),C("y",["yyyy",4],0,"eraYear"),ce("N",ln),ce("NN",ln),ce("NNN",ln),ce("NNNN",function(e,t){return t.erasNameRegex(e)}),ce("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),ye(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){var i=n._locale.erasParse(e,s,n._strict);i?y(n).era=i:y(n).invalidEra=e}),ce("y",oe),ce("yy",oe),ce("yyy",oe),ce("yyyy",oe),ce("yo",function(e,t){return t._eraYearOrdinalRegex||oe}),ye(["y","yy","yyy","yyyy"],pe),ye(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[pe]=n._locale.eraYearOrdinalParse(e,i):t[pe]=parseInt(e,10)}),C(0,["gg",2],0,function(){return this.weekYear()%100}),C(0,["GG",2],0,function(){return this.isoWeekYear()%100}),dn("gggg","weekYear"),dn("ggggg","weekYear"),dn("GGGG","isoWeekYear"),dn("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),A("weekYear",1),A("isoWeekYear",1),ce("G",ue),ce("g",ue),ce("GG",te,Q),ce("gg",te,Q),ce("GGGG",re,K),ce("gggg",re,K),ce("GGGGG",ae,ee),ce("ggggg",ae,ee),ge(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=Z(e)}),ge(["gg","GG"],function(e,t,n,s){t[s]=f.parseTwoDigitYear(e)}),C("Q",0,"Qo","quarter"),L("quarter","Q"),A("quarter",7),ce("Q",J),ye("Q",function(e,t){t[ve]=3*(Z(e)-1)}),C("D",["DD",2],"Do","date"),L("date","D"),A("date",9),ce("D",te),ce("DD",te,Q),ce("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ye(["D","DD"],ke),ye("Do",function(e,t){t[ke]=Z(e.match(te)[0])});var fn=z("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),A("dayOfYear",4),ce("DDD",ie),ce("DDDD",X),ye(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Z(e)}),C("m",["mm",2],0,"minute"),L("minute","m"),A("minute",14),ce("m",te),ce("mm",te,Q),ye(["m","mm"],De);var mn=z("Minutes",!1);C("s",["ss",2],0,"second"),L("second","s"),A("second",15),ce("s",te),ce("ss",te,Q),ye(["s","ss"],Se);var _n,yn,gn=z("Seconds",!1);for(C("S",0,0,function(){return~~(this.millisecond()/100)}),C(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),C(0,["SSS",3],0,"millisecond"),C(0,["SSSS",4],0,function(){return 10*this.millisecond()}),C(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),C(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),C(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),C(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),C(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),A("millisecond",16),ce("S",ie,J),ce("SS",ie,Q),ce("SSS",ie,X),_n="SSSS";_n.length<=9;_n+="S")ce(_n,oe);function wn(e,t){t[Ye]=Z(1e3*("0."+e))}for(_n="S";_n.length<=9;_n+="S")ye(_n,wn);yn=z("Milliseconds",!1),C("z",0,0,"zoneAbbr"),C("zz",0,0,"zoneName");var pn=k.prototype;function vn(e){return e}pn.add=Jt,pn.calendar=function(e,t){1===arguments.length&&(arguments[0]?Kt(arguments[0])?(e=arguments[0],t=void 0):function(e){for(var t=u(e)&&!l(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i=0;i<s.length;i+=1)n=n||m(e,s[i]);return t&&n}(arguments[0])&&(t=arguments[0],e=void 0):t=e=void 0);var n=e||Tt(),s=Gt(n,this).startOf("day"),i=f.calendarFormat(this,s)||"sameElse",r=t&&(O(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},pn.clone=function(){return new k(this)},pn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=V(t)){case"year":r=en(this,s)/12;break;case"month":r=en(this,s);break;case"quarter":r=en(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:I(r)},pn.endOf=function(e){var t,n;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?un:on,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-an(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-an(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-an(t,1e3)-1;break}return this._d.setTime(t),f.updateOffset(this,!0),this},pn.format=function(e){e=e||(this.isUtc()?f.defaultFormatUtc:f.defaultFormat);var t=U(this,e);return this.localeData().postformat(t)},pn.from=function(e,t){return this.isValid()&&(M(e)&&e.isValid()||Tt(e).isValid())?Zt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},pn.fromNow=function(e){return this.from(Tt(),e)},pn.to=function(e,t){return this.isValid()&&(M(e)&&e.isValid()||Tt(e).isValid())?Zt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},pn.toNow=function(e){return this.to(Tt(),e)},pn.get=function(e){return O(this[e=V(e)])?this[e]():this},pn.invalidAt=function(){return y(this).overflow},pn.isAfter=function(e,t){var n=M(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},pn.isBefore=function(e,t){var n=M(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},pn.isBetween=function(e,t,n,s){var i=M(e)?e:Tt(e),r=M(t)?t:Tt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n)))},pn.isSame=function(e,t){var n,s=M(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},pn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},pn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},pn.isValid=function(){return g(this)},pn.lang=nn,pn.locale=tn,pn.localeData=sn,pn.max=Pt,pn.min=Nt,pn.parsingFlags=function(){return c({},y(this))},pn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t,n=[];for(t in e)m(e,t)&&n.push({unit:t,priority:E[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=G(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(O(this[e=V(e)]))return this[e](t);return this},pn.startOf=function(e){var t,n;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?un:on,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=an(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=an(t,6e4);break;case"second":t=this._d.valueOf(),t-=an(t,1e3);break}return this._d.setTime(t),f.updateOffset(this,!0),this},pn.subtract=Qt,pn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},pn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},pn.toDate=function(){return new Date(this.valueOf())},pn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},pn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,s="moment",i="";return this.isLocal()||(s=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),e="["+s+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=i+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+n)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(pn[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),pn.toJSON=function(){return this.isValid()?this.toISOString():null},pn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},pn.unix=function(){return Math.floor(this.valueOf()/1e3)},pn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},pn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},pn.eraName=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].name;if(t[n].until<=e&&e<=t[n].since)return t[n].name}return""},pn.eraNarrow=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].narrow;if(t[n].until<=e&&e<=t[n].since)return t[n].narrow}return""},pn.eraAbbr=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].abbr;if(t[n].until<=e&&e<=t[n].since)return t[n].abbr}return""},pn.eraYear=function(){for(var e,t,n=this.localeData().eras(),s=0,i=n.length;s<i;++s)if(e=n[s].since<=n[s].until?1:-1,t=this.clone().startOf("day").valueOf(),n[s].since<=t&&t<=n[s].until||n[s].until<=t&&t<=n[s].since)return(this.year()-f(n[s].since).year())*e+n[s].offset;return this.year()},pn.year=Le,pn.isLeapYear=function(){return j(this.year())},pn.weekYear=function(e){return cn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},pn.isoWeekYear=function(e){return cn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},pn.quarter=pn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},pn.month=Ue,pn.daysInMonth=function(){return xe(this.year(),this.month())},pn.week=pn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},pn.isoWeek=pn.isoWeeks=function(e){var t=Ae(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},pn.weeksInYear=function(){var e=this.localeData()._week;return je(this.year(),e.dow,e.doy)},pn.weeksInWeekYear=function(){var e=this.localeData()._week;return je(this.weekYear(),e.dow,e.doy)},pn.isoWeeksInYear=function(){return je(this.year(),1,4)},pn.isoWeeksInISOWeekYear=function(){return je(this.isoWeekYear(),1,4)},pn.date=fn,pn.day=pn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},pn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},pn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},pn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},pn.hour=pn.hours=tt,pn.minute=pn.minutes=mn,pn.second=pn.seconds=gn,pn.millisecond=pn.milliseconds=yn,pn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Et(this);if("string"==typeof e){if(null===(e=Vt(he,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Et(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?Bt(this,Zt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,f.updateOffset(this,!0),this._changeInProgress=null)),this},pn.utc=function(e){return this.utcOffset(0,e)},pn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this},pn.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Vt(le,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},pn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},pn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},pn.isLocal=function(){return!!this.isValid()&&!this._isUTC},pn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},pn.isUtc=At,pn.isUTC=At,pn.zoneAbbr=function(){return this._isUTC?"UTC":""},pn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},pn.dates=n("dates accessor is deprecated. Use date instead.",fn),pn.months=n("months accessor is deprecated. Use month instead",Ue),pn.years=n("years accessor is deprecated. Use year instead",Le),pn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),pn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e,t={};return v(t,this),(t=bt(t))._a?(e=(t._isUTC?_:Tt)(t._a),this._isDSTShifted=this.isValid()&&0<function(e,t,n){for(var s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0,a=0;a<s;a++)(n&&e[a]!==t[a]||!n&&Z(e[a])!==Z(t[a]))&&r++;return r+i}(t._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});var kn=x.prototype;function Mn(e,t,n,s){var i=dt(),r=_().set(s,t);return i[n](r,e)}function Dn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return Mn(e,t,n,"month");for(var s=[],i=0;i<12;i++)s[i]=Mn(e,i,n,"month");return s}function Sn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=dt(),a=e?r._week.dow:0,o=[];if(null!=n)return Mn(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=Mn(t,(i+a)%7,s,"day");return o}kn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return O(s)?s.call(t,n):s},kn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(N).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},kn.invalidDate=function(){return this._invalidDate},kn.ordinal=function(e){return this._ordinal.replace("%d",e)},kn.preparse=vn,kn.postformat=vn,kn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return O(i)?i(e,t,n,s):i.replace(/%d/i,e)},kn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return O(n)?n(t):n.replace(/%s/i,t)},kn.set=function(e){var t,n;for(n in e)m(e,n)&&(O(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},kn.eras=function(e,t){for(var n,s=this._eras||dt("en")._eras,i=0,r=s.length;i<r;++i){switch(typeof s[i].since){case"string":n=f(s[i].since).startOf("day"),s[i].since=n.valueOf();break}switch(typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=f(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf();break}}return s},kn.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s];break}else if(0<=[r,a,o].indexOf(e))return u[s]},kn.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?f(e.since).year():f(e.since).year()+(t-e.offset)*n},kn.erasAbbrRegex=function(e){return m(this,"_erasAbbrRegex")||hn.call(this),e?this._erasAbbrRegex:this._erasRegex},kn.erasNameRegex=function(e){return m(this,"_erasNameRegex")||hn.call(this),e?this._erasNameRegex:this._erasRegex},kn.erasNarrowRegex=function(e){return m(this,"_erasNarrowRegex")||hn.call(this),e?this._erasNarrowRegex:this._erasRegex},kn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Pe).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},kn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Pe.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},kn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=_([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=we.call(this._shortMonthsParse,a))?i:null:-1!==(i=we.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=we.call(this._shortMonthsParse,a))||-1!==(i=we.call(this._longMonthsParse,a))?i:null:-1!==(i=we.call(this._longMonthsParse,a))||-1!==(i=we.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=_([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},kn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||He.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=We),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},kn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||He.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Re),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},kn.week=function(e){return Ae(e,this._week.dow,this._week.doy).week},kn.firstDayOfYear=function(){return this._week.doy},kn.firstDayOfWeek=function(){return this._week.dow},kn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ie(n,this._week.dow):e?n[e.day()]:n},kn.weekdaysMin=function(e){return!0===e?Ie(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},kn.weekdaysShort=function(e){return!0===e?Ie(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},kn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=_([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=we.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=we.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._shortWeekdaysParse,a))||-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=we.call(this._shortWeekdaysParse,a))||-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:-1!==(i=we.call(this._minWeekdaysParse,a))||-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=_([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},kn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},kn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Be),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},kn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},kn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},kn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},lt("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===Z(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")}}),f.lang=n("moment.lang is deprecated. Use moment.locale instead.",lt),f.langData=n("moment.langData is deprecated. Use moment.localeData instead.",dt);var Yn=Math.abs;function On(e,t,n,s){var i=Zt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function bn(e){return e<0?Math.floor(e):Math.ceil(e)}function xn(e){return 4800*e/146097}function Tn(e){return 146097*e/4800}function Nn(e){return function(){return this.as(e)}}var Pn=Nn("ms"),Rn=Nn("s"),Wn=Nn("m"),Cn=Nn("h"),Un=Nn("d"),Hn=Nn("w"),Fn=Nn("M"),Ln=Nn("Q"),Vn=Nn("y");function Gn(e){return function(){return this.isValid()?this._data[e]:NaN}}var En=Gn("milliseconds"),An=Gn("seconds"),jn=Gn("minutes"),In=Gn("hours"),Zn=Gn("days"),zn=Gn("months"),$n=Gn("years");var qn=Math.round,Bn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Jn(e,t,n,s){var i=Zt(e).abs(),r=qn(i.as("s")),a=qn(i.as("m")),o=qn(i.as("h")),u=qn(i.as("d")),l=qn(i.as("M")),h=qn(i.as("w")),d=qn(i.as("y")),c=(r<=n.ss?["s",r]:r<n.s&&["ss",r])||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return null!=n.w&&(c=c||h<=1&&["w"]||h<n.w&&["ww",h]),(c=c||l<=1&&["M"]||l<n.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=t,c[3]=0<+e,c[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,c)}var Qn=Math.abs;function Xn(e){return(0<e)-(e<0)||+e}function Kn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o,u=Qn(this._milliseconds)/1e3,l=Qn(this._days),h=Qn(this._months),d=this.asSeconds();return d?(e=I(u/60),t=I(e/60),u%=60,e%=60,n=I(h/12),h%=12,s=u?u.toFixed(3).replace(/\.?0+$/,""):"",i=d<0?"-":"",r=Xn(this._months)!==Xn(d)?"-":"",a=Xn(this._days)!==Xn(d)?"-":"",o=Xn(this._milliseconds)!==Xn(d)?"-":"",i+"P"+(n?r+n+"Y":"")+(h?r+h+"M":"")+(l?a+l+"D":"")+(t||e||u?"T":"")+(t?o+t+"H":"")+(e?o+e+"M":"")+(u?o+s+"S":"")):"P0D"}var es=Ct.prototype;return es.isValid=function(){return this._isValid},es.abs=function(){var e=this._data;return this._milliseconds=Yn(this._milliseconds),this._days=Yn(this._days),this._months=Yn(this._months),e.milliseconds=Yn(e.milliseconds),e.seconds=Yn(e.seconds),e.minutes=Yn(e.minutes),e.hours=Yn(e.hours),e.months=Yn(e.months),e.years=Yn(e.years),this},es.add=function(e,t){return On(this,e,t,1)},es.subtract=function(e,t){return On(this,e,t,-1)},es.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=V(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+xn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Tn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},es.asMilliseconds=Pn,es.asSeconds=Rn,es.asMinutes=Wn,es.asHours=Cn,es.asDays=Un,es.asWeeks=Hn,es.asMonths=Fn,es.asQuarters=Ln,es.asYears=Vn,es.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*Z(this._months/12):NaN},es._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*bn(Tn(o)+a),o=a=0),u.milliseconds=r%1e3,e=I(r/1e3),u.seconds=e%60,t=I(e/60),u.minutes=t%60,n=I(t/60),u.hours=n%24,a+=I(n/24),o+=i=I(xn(a)),a-=bn(Tn(i)),s=I(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},es.clone=function(){return Zt(this)},es.get=function(e){return e=V(e),this.isValid()?this[e+"s"]():NaN},es.milliseconds=En,es.seconds=An,es.minutes=jn,es.hours=In,es.days=Zn,es.weeks=function(){return I(this.days()/7)},es.months=zn,es.years=$n,es.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,s,i=!1,r=Bn;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(r=Object.assign({},Bn,t),null!=t.s&&null==t.ss&&(r.ss=t.s-1)),n=this.localeData(),s=Jn(this,!i,r,n),i&&(s=n.pastFuture(+this,s)),n.postformat(s)},es.toISOString=Kn,es.toString=Kn,es.toJSON=Kn,es.locale=tn,es.localeData=sn,es.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Kn),es.lang=nn,C("X",0,0,"unix"),C("x",0,0,"valueOf"),ce("x",ue),ce("X",/[+-]?\d+(\.\d{1,3})?/),ye("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),ye("x",function(e,t,n){n._d=new Date(Z(e))}),f.version="2.29.1",e=Tt,f.fn=pn,f.min=function(){return Rt("isBefore",[].slice.call(arguments,0))},f.max=function(){return Rt("isAfter",[].slice.call(arguments,0))},f.now=function(){return Date.now?Date.now():+new Date},f.utc=_,f.unix=function(e){return Tt(1e3*e)},f.months=function(e,t){return Dn(e,t,"months")},f.isDate=a,f.locale=lt,f.invalid=w,f.duration=Zt,f.isMoment=M,f.weekdays=function(e,t,n){return Sn(e,t,n,"weekdays")},f.parseZone=function(){return Tt.apply(null,arguments).parseZone()},f.localeData=dt,f.isDuration=Ut,f.monthsShort=function(e,t){return Dn(e,t,"monthsShort")},f.weekdaysMin=function(e,t,n){return Sn(e,t,n,"weekdaysMin")},f.defineLocale=ht,f.updateLocale=function(e,t){var n,s,i;return null!=t?(i=st,null!=it[e]&&null!=it[e].parentLocale?it[e].set(b(it[e]._config,t)):(null!=(s=ut(e))&&(i=s._config),t=b(i,t),null==s&&(t.abbr=e),(n=new x(t)).parentLocale=it[e],it[e]=n),lt(e)):null!=it[e]&&(null!=it[e].parentLocale?(it[e]=it[e].parentLocale,e===lt()&&lt(e)):null!=it[e]&&delete it[e]),it[e]},f.locales=function(){return s(it)},f.weekdaysShort=function(e,t,n){return Sn(e,t,n,"weekdaysShort")},f.normalizeUnits=V,f.relativeTimeRounding=function(e){return void 0===e?qn:"function"==typeof e&&(qn=e,!0)},f.relativeTimeThreshold=function(e,t){return void 0!==Bn[e]&&(void 0===t?Bn[e]:(Bn[e]=t,"s"===e&&(Bn.ss=t-1),!0))},f.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},f.prototype=pn,f.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},f});
//# sourceMappingURL=moment.min.js.map
//////! moment.js
////! version : 2.27.0
////! authors : Tim Wood, Iskren Chernev, Moment.js contributors
////! license : MIT
////! momentjs.com
//
//;(function (global, factory) {
//    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//    typeof define === 'function' && define.amd ? define(factory) :
//    global.moment = factory()
//}(this, (function () { 'use strict';
//
//    var hookCallback;
//
//    function hooks() {
//        return hookCallback.apply(null, arguments);
//    }
//
//    // This is done to register the method called with moment()
//    // without creating circular dependencies.
//    function setHookCallback(callback) {
//        hookCallback = callback;
//    }
//
//    function isArray(input) {
//        return (
//            input instanceof Array ||
//            Object.prototype.toString.call(input) === '[object Array]'
//        );
//    }
//
//    function isObject(input) {
//        // IE8 will treat undefined and null as object if it wasn't for
//        // input != null
//        return (
//            input != null &&
//            Object.prototype.toString.call(input) === '[object Object]'
//        );
//    }
//
//    function hasOwnProp(a, b) {
//        return Object.prototype.hasOwnProperty.call(a, b);
//    }
//
//    function isObjectEmpty(obj) {
//        if (Object.getOwnPropertyNames) {
//            return Object.getOwnPropertyNames(obj).length === 0;
//        } else {
//            var k;
//            for (k in obj) {
//                if (hasOwnProp(obj, k)) {
//                    return false;
//                }
//            }
//            return true;
//        }
//    }
//
//    function isUndefined(input) {
//        return input === void 0;
//    }
//
//    function isNumber(input) {
//        return (
//            typeof input === 'number' ||
//            Object.prototype.toString.call(input) === '[object Number]'
//        );
//    }
//
//    function isDate(input) {
//        return (
//            input instanceof Date ||
//            Object.prototype.toString.call(input) === '[object Date]'
//        );
//    }
//
//    function map(arr, fn) {
//        var res = [],
//            i;
//        for (i = 0; i < arr.length; ++i) {
//            res.push(fn(arr[i], i));
//        }
//        return res;
//    }
//
//    function extend(a, b) {
//        for (var i in b) {
//            if (hasOwnProp(b, i)) {
//                a[i] = b[i];
//            }
//        }
//
//        if (hasOwnProp(b, 'toString')) {
//            a.toString = b.toString;
//        }
//
//        if (hasOwnProp(b, 'valueOf')) {
//            a.valueOf = b.valueOf;
//        }
//
//        return a;
//    }
//
//    function createUTC(input, format, locale, strict) {
//        return createLocalOrUTC(input, format, locale, strict, true).utc();
//    }
//
//    function defaultParsingFlags() {
//        // We need to deep clone this object.
//        return {
//            empty: false,
//            unusedTokens: [],
//            unusedInput: [],
//            overflow: -2,
//            charsLeftOver: 0,
//            nullInput: false,
//            invalidEra: null,
//            invalidMonth: null,
//            invalidFormat: false,
//            userInvalidated: false,
//            iso: false,
//            parsedDateParts: [],
//            era: null,
//            meridiem: null,
//            rfc2822: false,
//            weekdayMismatch: false,
//        };
//    }
//
//    function getParsingFlags(m) {
//        if (m._pf == null) {
//            m._pf = defaultParsingFlags();
//        }
//        return m._pf;
//    }
//
//    var some;
//    if (Array.prototype.some) {
//        some = Array.prototype.some;
//    } else {
//        some = function (fun) {
//            var t = Object(this),
//                len = t.length >>> 0,
//                i;
//
//            for (i = 0; i < len; i++) {
//                if (i in t && fun.call(this, t[i], i, t)) {
//                    return true;
//                }
//            }
//
//            return false;
//        };
//    }
//
//    function isValid(m) {
//        if (m._isValid == null) {
//            var flags = getParsingFlags(m),
//                parsedParts = some.call(flags.parsedDateParts, function (i) {
//                    return i != null;
//                }),
//                isNowValid =
//                    !isNaN(m._d.getTime()) &&
//                    flags.overflow < 0 &&
//                    !flags.empty &&
//                    !flags.invalidEra &&
//                    !flags.invalidMonth &&
//                    !flags.invalidWeekday &&
//                    !flags.weekdayMismatch &&
//                    !flags.nullInput &&
//                    !flags.invalidFormat &&
//                    !flags.userInvalidated &&
//                    (!flags.meridiem || (flags.meridiem && parsedParts));
//
//            if (m._strict) {
//                isNowValid =
//                    isNowValid &&
//                    flags.charsLeftOver === 0 &&
//                    flags.unusedTokens.length === 0 &&
//                    flags.bigHour === undefined;
//            }
//
//            if (Object.isFrozen == null || !Object.isFrozen(m)) {
//                m._isValid = isNowValid;
//            } else {
//                return isNowValid;
//            }
//        }
//        return m._isValid;
//    }
//
//    function createInvalid(flags) {
//        var m = createUTC(NaN);
//        if (flags != null) {
//            extend(getParsingFlags(m), flags);
//        } else {
//            getParsingFlags(m).userInvalidated = true;
//        }
//
//        return m;
//    }
//
//    // Plugins that add properties should also add the key here (null value),
//    // so we can properly clone ourselves.
//    var momentProperties = (hooks.momentProperties = []),
//        updateInProgress = false;
//
//    function copyConfig(to, from) {
//        var i, prop, val;
//
//        if (!isUndefined(from._isAMomentObject)) {
//            to._isAMomentObject = from._isAMomentObject;
//        }
//        if (!isUndefined(from._i)) {
//            to._i = from._i;
//        }
//        if (!isUndefined(from._f)) {
//            to._f = from._f;
//        }
//        if (!isUndefined(from._l)) {
//            to._l = from._l;
//        }
//        if (!isUndefined(from._strict)) {
//            to._strict = from._strict;
//        }
//        if (!isUndefined(from._tzm)) {
//            to._tzm = from._tzm;
//        }
//        if (!isUndefined(from._isUTC)) {
//            to._isUTC = from._isUTC;
//        }
//        if (!isUndefined(from._offset)) {
//            to._offset = from._offset;
//        }
//        if (!isUndefined(from._pf)) {
//            to._pf = getParsingFlags(from);
//        }
//        if (!isUndefined(from._locale)) {
//            to._locale = from._locale;
//        }
//
//        if (momentProperties.length > 0) {
//            for (i = 0; i < momentProperties.length; i++) {
//                prop = momentProperties[i];
//                val = from[prop];
//                if (!isUndefined(val)) {
//                    to[prop] = val;
//                }
//            }
//        }
//
//        return to;
//    }
//
//    // Moment prototype object
//    function Moment(config) {
//        copyConfig(this, config);
//        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
//        if (!this.isValid()) {
//            this._d = new Date(NaN);
//        }
//        // Prevent infinite loop in case updateOffset creates new moment
//        // objects.
//        if (updateInProgress === false) {
//            updateInProgress = true;
//            hooks.updateOffset(this);
//            updateInProgress = false;
//        }
//    }
//
//    function isMoment(obj) {
//        return (
//            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
//        );
//    }
//
//    function warn(msg) {
//        if (
//            hooks.suppressDeprecationWarnings === false &&
//            typeof console !== 'undefined' &&
//            console.warn
//        ) {
//            console.warn('Deprecation warning: ' + msg);
//        }
//    }
//
//    function deprecate(msg, fn) {
//        var firstTime = true;
//
//        return extend(function () {
//            if (hooks.deprecationHandler != null) {
//                hooks.deprecationHandler(null, msg);
//            }
//            if (firstTime) {
//                var args = [],
//                    arg,
//                    i,
//                    key;
//                for (i = 0; i < arguments.length; i++) {
//                    arg = '';
//                    if (typeof arguments[i] === 'object') {
//                        arg += '\n[' + i + '] ';
//                        for (key in arguments[0]) {
//                            if (hasOwnProp(arguments[0], key)) {
//                                arg += key + ': ' + arguments[0][key] + ', ';
//                            }
//                        }
//                        arg = arg.slice(0, -2); // Remove trailing comma and space
//                    } else {
//                        arg = arguments[i];
//                    }
//                    args.push(arg);
//                }
//                warn(
//                    msg +
//                        '\nArguments: ' +
//                        Array.prototype.slice.call(args).join('') +
//                        '\n' +
//                        new Error().stack
//                );
//                firstTime = false;
//            }
//            return fn.apply(this, arguments);
//        }, fn);
//    }
//
//    var deprecations = {};
//
//    function deprecateSimple(name, msg) {
//        if (hooks.deprecationHandler != null) {
//            hooks.deprecationHandler(name, msg);
//        }
//        if (!deprecations[name]) {
//            warn(msg);
//            deprecations[name] = true;
//        }
//    }
//
//    hooks.suppressDeprecationWarnings = false;
//    hooks.deprecationHandler = null;
//
//    function isFunction(input) {
//        return (
//            (typeof Function !== 'undefined' && input instanceof Function) ||
//            Object.prototype.toString.call(input) === '[object Function]'
//        );
//    }
//
//    function set(config) {
//        var prop, i;
//        for (i in config) {
//            if (hasOwnProp(config, i)) {
//                prop = config[i];
//                if (isFunction(prop)) {
//                    this[i] = prop;
//                } else {
//                    this['_' + i] = prop;
//                }
//            }
//        }
//        this._config = config;
//        // Lenient ordinal parsing accepts just a number in addition to
//        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
//        // TODO: Remove "ordinalParse" fallback in next major release.
//        this._dayOfMonthOrdinalParseLenient = new RegExp(
//            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
//                '|' +
//                /\d{1,2}/.source
//        );
//    }
//
//    function mergeConfigs(parentConfig, childConfig) {
//        var res = extend({}, parentConfig),
//            prop;
//        for (prop in childConfig) {
//            if (hasOwnProp(childConfig, prop)) {
//                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
//                    res[prop] = {};
//                    extend(res[prop], parentConfig[prop]);
//                    extend(res[prop], childConfig[prop]);
//                } else if (childConfig[prop] != null) {
//                    res[prop] = childConfig[prop];
//                } else {
//                    delete res[prop];
//                }
//            }
//        }
//        for (prop in parentConfig) {
//            if (
//                hasOwnProp(parentConfig, prop) &&
//                !hasOwnProp(childConfig, prop) &&
//                isObject(parentConfig[prop])
//            ) {
//                // make sure changes to properties don't modify parent config
//                res[prop] = extend({}, res[prop]);
//            }
//        }
//        return res;
//    }
//
//    function Locale(config) {
//        if (config != null) {
//            this.set(config);
//        }
//    }
//
//    var keys;
//
//    if (Object.keys) {
//        keys = Object.keys;
//    } else {
//        keys = function (obj) {
//            var i,
//                res = [];
//            for (i in obj) {
//                if (hasOwnProp(obj, i)) {
//                    res.push(i);
//                }
//            }
//            return res;
//        };
//    }
//
//    var defaultCalendar = {
//        sameDay: '[Today at] LT',
//        nextDay: '[Tomorrow at] LT',
//        nextWeek: 'dddd [at] LT',
//        lastDay: '[Yesterday at] LT',
//        lastWeek: '[Last] dddd [at] LT',
//        sameElse: 'L',
//    };
//
//    function calendar(key, mom, now) {
//        var output = this._calendar[key] || this._calendar['sameElse'];
//        return isFunction(output) ? output.call(mom, now) : output;
//    }
//
//    function zeroFill(number, targetLength, forceSign) {
//        var absNumber = '' + Math.abs(number),
//            zerosToFill = targetLength - absNumber.length,
//            sign = number >= 0;
//        return (
//            (sign ? (forceSign ? '+' : '') : '-') +
//            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
//            absNumber
//        );
//    }
//
//    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
//        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
//        formatFunctions = {},
//        formatTokenFunctions = {};
//
//    // token:    'M'
//    // padded:   ['MM', 2]
//    // ordinal:  'Mo'
//    // callback: function () { this.month() + 1 }
//    function addFormatToken(token, padded, ordinal, callback) {
//        var func = callback;
//        if (typeof callback === 'string') {
//            func = function () {
//                return this[callback]();
//            };
//        }
//        if (token) {
//            formatTokenFunctions[token] = func;
//        }
//        if (padded) {
//            formatTokenFunctions[padded[0]] = function () {
//                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
//            };
//        }
//        if (ordinal) {
//            formatTokenFunctions[ordinal] = function () {
//                return this.localeData().ordinal(
//                    func.apply(this, arguments),
//                    token
//                );
//            };
//        }
//    }
//
//    function removeFormattingTokens(input) {
//        if (input.match(/\[[\s\S]/)) {
//            return input.replace(/^\[|\]$/g, '');
//        }
//        return input.replace(/\\/g, '');
//    }
//
//    function makeFormatFunction(format) {
//        var array = format.match(formattingTokens),
//            i,
//            length;
//
//        for (i = 0, length = array.length; i < length; i++) {
//            if (formatTokenFunctions[array[i]]) {
//                array[i] = formatTokenFunctions[array[i]];
//            } else {
//                array[i] = removeFormattingTokens(array[i]);
//            }
//        }
//
//        return function (mom) {
//            var output = '',
//                i;
//            for (i = 0; i < length; i++) {
//                output += isFunction(array[i])
//                    ? array[i].call(mom, format)
//                    : array[i];
//            }
//            return output;
//        };
//    }
//
//    // format date using native date object
//    function formatMoment(m, format) {
//        if (!m.isValid()) {
//            return m.localeData().invalidDate();
//        }
//
//        format = expandFormat(format, m.localeData());
//        formatFunctions[format] =
//            formatFunctions[format] || makeFormatFunction(format);
//
//        return formatFunctions[format](m);
//    }
//
//    function expandFormat(format, locale) {
//        var i = 5;
//
//        function replaceLongDateFormatTokens(input) {
//            return locale.longDateFormat(input) || input;
//        }
//
//        localFormattingTokens.lastIndex = 0;
//        while (i >= 0 && localFormattingTokens.test(format)) {
//            format = format.replace(
//                localFormattingTokens,
//                replaceLongDateFormatTokens
//            );
//            localFormattingTokens.lastIndex = 0;
//            i -= 1;
//        }
//
//        return format;
//    }
//
//    var defaultLongDateFormat = {
//        LTS: 'h:mm:ss A',
//        LT: 'h:mm A',
//        L: 'MM/DD/YYYY',
//        LL: 'MMMM D, YYYY',
//        LLL: 'MMMM D, YYYY h:mm A',
//        LLLL: 'dddd, MMMM D, YYYY h:mm A',
//    };
//
//    function longDateFormat(key) {
//        var format = this._longDateFormat[key],
//            formatUpper = this._longDateFormat[key.toUpperCase()];
//
//        if (format || !formatUpper) {
//            return format;
//        }
//
//        this._longDateFormat[key] = formatUpper
//            .match(formattingTokens)
//            .map(function (tok) {
//                if (
//                    tok === 'MMMM' ||
//                    tok === 'MM' ||
//                    tok === 'DD' ||
//                    tok === 'dddd'
//                ) {
//                    return tok.slice(1);
//                }
//                return tok;
//            })
//            .join('');
//
//        return this._longDateFormat[key];
//    }
//
//    var defaultInvalidDate = 'Invalid date';
//
//    function invalidDate() {
//        return this._invalidDate;
//    }
//
//    var defaultOrdinal = '%d',
//        defaultDayOfMonthOrdinalParse = /\d{1,2}/;
//
//    function ordinal(number) {
//        return this._ordinal.replace('%d', number);
//    }
//
//    var defaultRelativeTime = {
//        future: 'in %s',
//        past: '%s ago',
//        s: 'a few seconds',
//        ss: '%d seconds',
//        m: 'a minute',
//        mm: '%d minutes',
//        h: 'an hour',
//        hh: '%d hours',
//        d: 'a day',
//        dd: '%d days',
//        w: 'a week',
//        ww: '%d weeks',
//        M: 'a month',
//        MM: '%d months',
//        y: 'a year',
//        yy: '%d years',
//    };
//
//    function relativeTime(number, withoutSuffix, string, isFuture) {
//        var output = this._relativeTime[string];
//        return isFunction(output)
//            ? output(number, withoutSuffix, string, isFuture)
//            : output.replace(/%d/i, number);
//    }
//
//    function pastFuture(diff, output) {
//        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
//        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
//    }
//
//    var aliases = {};
//
//    function addUnitAlias(unit, shorthand) {
//        var lowerCase = unit.toLowerCase();
//        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
//    }
//
//    function normalizeUnits(units) {
//        return typeof units === 'string'
//            ? aliases[units] || aliases[units.toLowerCase()]
//            : undefined;
//    }
//
//    function normalizeObjectUnits(inputObject) {
//        var normalizedInput = {},
//            normalizedProp,
//            prop;
//
//        for (prop in inputObject) {
//            if (hasOwnProp(inputObject, prop)) {
//                normalizedProp = normalizeUnits(prop);
//                if (normalizedProp) {
//                    normalizedInput[normalizedProp] = inputObject[prop];
//                }
//            }
//        }
//
//        return normalizedInput;
//    }
//
//    var priorities = {};
//
//    function addUnitPriority(unit, priority) {
//        priorities[unit] = priority;
//    }
//
//    function getPrioritizedUnits(unitsObj) {
//        var units = [],
//            u;
//        for (u in unitsObj) {
//            if (hasOwnProp(unitsObj, u)) {
//                units.push({ unit: u, priority: priorities[u] });
//            }
//        }
//        units.sort(function (a, b) {
//            return a.priority - b.priority;
//        });
//        return units;
//    }
//
//    function isLeapYear(year) {
//        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//    }
//
//    function absFloor(number) {
//        if (number < 0) {
//            // -0 -> 0
//            return Math.ceil(number) || 0;
//        } else {
//            return Math.floor(number);
//        }
//    }
//
//    function toInt(argumentForCoercion) {
//        var coercedNumber = +argumentForCoercion,
//            value = 0;
//
//        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
//            value = absFloor(coercedNumber);
//        }
//
//        return value;
//    }
//
//    function makeGetSet(unit, keepTime) {
//        return function (value) {
//            if (value != null) {
//                set$1(this, unit, value);
//                hooks.updateOffset(this, keepTime);
//                return this;
//            } else {
//                return get(this, unit);
//            }
//        };
//    }
//
//    function get(mom, unit) {
//        return mom.isValid()
//            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
//            : NaN;
//    }
//
//    function set$1(mom, unit, value) {
//        if (mom.isValid() && !isNaN(value)) {
//            if (
//                unit === 'FullYear' &&
//                isLeapYear(mom.year()) &&
//                mom.month() === 1 &&
//                mom.date() === 29
//            ) {
//                value = toInt(value);
//                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
//                    value,
//                    mom.month(),
//                    daysInMonth(value, mom.month())
//                );
//            } else {
//                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
//            }
//        }
//    }
//
//    // MOMENTS
//
//    function stringGet(units) {
//        units = normalizeUnits(units);
//        if (isFunction(this[units])) {
//            return this[units]();
//        }
//        return this;
//    }
//
//    function stringSet(units, value) {
//        if (typeof units === 'object') {
//            units = normalizeObjectUnits(units);
//            var prioritized = getPrioritizedUnits(units),
//                i;
//            for (i = 0; i < prioritized.length; i++) {
//                this[prioritized[i].unit](units[prioritized[i].unit]);
//            }
//        } else {
//            units = normalizeUnits(units);
//            if (isFunction(this[units])) {
//                return this[units](value);
//            }
//        }
//        return this;
//    }
//
//    var match1 = /\d/, //       0 - 9
//        match2 = /\d\d/, //      00 - 99
//        match3 = /\d{3}/, //     000 - 999
//        match4 = /\d{4}/, //    0000 - 9999
//        match6 = /[+-]?\d{6}/, // -999999 - 999999
//        match1to2 = /\d\d?/, //       0 - 99
//        match3to4 = /\d\d\d\d?/, //     999 - 9999
//        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
//        match1to3 = /\d{1,3}/, //       0 - 999
//        match1to4 = /\d{1,4}/, //       0 - 9999
//        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
//        matchUnsigned = /\d+/, //       0 - inf
//        matchSigned = /[+-]?\d+/, //    -inf - inf
//        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
//        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
//        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
//        // any word (or two) characters or numbers including two/three word month in arabic.
//        // includes scottish gaelic two word and hyphenated months
//        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
//        regexes;
//
//    regexes = {};
//
//    function addRegexToken(token, regex, strictRegex) {
//        regexes[token] = isFunction(regex)
//            ? regex
//            : function (isStrict, localeData) {
//                  return isStrict && strictRegex ? strictRegex : regex;
//              };
//    }
//
//    function getParseRegexForToken(token, config) {
//        if (!hasOwnProp(regexes, token)) {
//            return new RegExp(unescapeFormat(token));
//        }
//
//        return regexes[token](config._strict, config._locale);
//    }
//
//    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
//    function unescapeFormat(s) {
//        return regexEscape(
//            s
//                .replace('\\', '')
//                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
//                    matched,
//                    p1,
//                    p2,
//                    p3,
//                    p4
//                ) {
//                    return p1 || p2 || p3 || p4;
//                })
//        );
//    }
//
//    function regexEscape(s) {
//        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
//    }
//
//    var tokens = {};
//
//    function addParseToken(token, callback) {
//        var i,
//            func = callback;
//        if (typeof token === 'string') {
//            token = [token];
//        }
//        if (isNumber(callback)) {
//            func = function (input, array) {
//                array[callback] = toInt(input);
//            };
//        }
//        for (i = 0; i < token.length; i++) {
//            tokens[token[i]] = func;
//        }
//    }
//
//    function addWeekParseToken(token, callback) {
//        addParseToken(token, function (input, array, config, token) {
//            config._w = config._w || {};
//            callback(input, config._w, config, token);
//        });
//    }
//
//    function addTimeToArrayFromToken(token, input, config) {
//        if (input != null && hasOwnProp(tokens, token)) {
//            tokens[token](input, config._a, config, token);
//        }
//    }
//
//    var YEAR = 0,
//        MONTH = 1,
//        DATE = 2,
//        HOUR = 3,
//        MINUTE = 4,
//        SECOND = 5,
//        MILLISECOND = 6,
//        WEEK = 7,
//        WEEKDAY = 8;
//
//    function mod(n, x) {
//        return ((n % x) + x) % x;
//    }
//
//    var indexOf;
//
//    if (Array.prototype.indexOf) {
//        indexOf = Array.prototype.indexOf;
//    } else {
//        indexOf = function (o) {
//            // I know
//            var i;
//            for (i = 0; i < this.length; ++i) {
//                if (this[i] === o) {
//                    return i;
//                }
//            }
//            return -1;
//        };
//    }
//
//    function daysInMonth(year, month) {
//        if (isNaN(year) || isNaN(month)) {
//            return NaN;
//        }
//        var modMonth = mod(month, 12);
//        year += (month - modMonth) / 12;
//        return modMonth === 1
//            ? isLeapYear(year)
//                ? 29
//                : 28
//            : 31 - ((modMonth % 7) % 2);
//    }
//
//    // FORMATTING
//
//    addFormatToken('M', ['MM', 2], 'Mo', function () {
//        return this.month() + 1;
//    });
//
//    addFormatToken('MMM', 0, 0, function (format) {
//        return this.localeData().monthsShort(this, format);
//    });
//
//    addFormatToken('MMMM', 0, 0, function (format) {
//        return this.localeData().months(this, format);
//    });
//
//    // ALIASES
//
//    addUnitAlias('month', 'M');
//
//    // PRIORITY
//
//    addUnitPriority('month', 8);
//
//    // PARSING
//
//    addRegexToken('M', match1to2);
//    addRegexToken('MM', match1to2, match2);
//    addRegexToken('MMM', function (isStrict, locale) {
//        return locale.monthsShortRegex(isStrict);
//    });
//    addRegexToken('MMMM', function (isStrict, locale) {
//        return locale.monthsRegex(isStrict);
//    });
//
//    addParseToken(['M', 'MM'], function (input, array) {
//        array[MONTH] = toInt(input) - 1;
//    });
//
//    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
//        var month = config._locale.monthsParse(input, token, config._strict);
//        // if we didn't find a month name, mark the date as invalid.
//        if (month != null) {
//            array[MONTH] = month;
//        } else {
//            getParsingFlags(config).invalidMonth = input;
//        }
//    });
//
//    // LOCALES
//
//    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
//            '_'
//        ),
//        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
//            '_'
//        ),
//        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
//        defaultMonthsShortRegex = matchWord,
//        defaultMonthsRegex = matchWord;
//
//    function localeMonths(m, format) {
//        if (!m) {
//            return isArray(this._months)
//                ? this._months
//                : this._months['standalone'];
//        }
//        return isArray(this._months)
//            ? this._months[m.month()]
//            : this._months[
//                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
//                      ? 'format'
//                      : 'standalone'
//              ][m.month()];
//    }
//
//    function localeMonthsShort(m, format) {
//        if (!m) {
//            return isArray(this._monthsShort)
//                ? this._monthsShort
//                : this._monthsShort['standalone'];
//        }
//        return isArray(this._monthsShort)
//            ? this._monthsShort[m.month()]
//            : this._monthsShort[
//                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
//              ][m.month()];
//    }
//
//    function handleStrictParse(monthName, format, strict) {
//        var i,
//            ii,
//            mom,
//            llc = monthName.toLocaleLowerCase();
//        if (!this._monthsParse) {
//            // this is not used
//            this._monthsParse = [];
//            this._longMonthsParse = [];
//            this._shortMonthsParse = [];
//            for (i = 0; i < 12; ++i) {
//                mom = createUTC([2000, i]);
//                this._shortMonthsParse[i] = this.monthsShort(
//                    mom,
//                    ''
//                ).toLocaleLowerCase();
//                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
//            }
//        }
//
//        if (strict) {
//            if (format === 'MMM') {
//                ii = indexOf.call(this._shortMonthsParse, llc);
//                return ii !== -1 ? ii : null;
//            } else {
//                ii = indexOf.call(this._longMonthsParse, llc);
//                return ii !== -1 ? ii : null;
//            }
//        } else {
//            if (format === 'MMM') {
//                ii = indexOf.call(this._shortMonthsParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._longMonthsParse, llc);
//                return ii !== -1 ? ii : null;
//            } else {
//                ii = indexOf.call(this._longMonthsParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._shortMonthsParse, llc);
//                return ii !== -1 ? ii : null;
//            }
//        }
//    }
//
//    function localeMonthsParse(monthName, format, strict) {
//        var i, mom, regex;
//
//        if (this._monthsParseExact) {
//            return handleStrictParse.call(this, monthName, format, strict);
//        }
//
//        if (!this._monthsParse) {
//            this._monthsParse = [];
//            this._longMonthsParse = [];
//            this._shortMonthsParse = [];
//        }
//
//        // TODO: add sorting
//        // Sorting makes sure if one month (or abbr) is a prefix of another
//        // see sorting in computeMonthsParse
//        for (i = 0; i < 12; i++) {
//            // make the regex if we don't have it already
//            mom = createUTC([2000, i]);
//            if (strict && !this._longMonthsParse[i]) {
//                this._longMonthsParse[i] = new RegExp(
//                    '^' + this.months(mom, '').replace('.', '') + '$',
//                    'i'
//                );
//                this._shortMonthsParse[i] = new RegExp(
//                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
//                    'i'
//                );
//            }
//            if (!strict && !this._monthsParse[i]) {
//                regex =
//                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
//                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
//            }
//            // test the regex
//            if (
//                strict &&
//                format === 'MMMM' &&
//                this._longMonthsParse[i].test(monthName)
//            ) {
//                return i;
//            } else if (
//                strict &&
//                format === 'MMM' &&
//                this._shortMonthsParse[i].test(monthName)
//            ) {
//                return i;
//            } else if (!strict && this._monthsParse[i].test(monthName)) {
//                return i;
//            }
//        }
//    }
//
//    // MOMENTS
//
//    function setMonth(mom, value) {
//        var dayOfMonth;
//
//        if (!mom.isValid()) {
//            // No op
//            return mom;
//        }
//
//        if (typeof value === 'string') {
//            if (/^\d+$/.test(value)) {
//                value = toInt(value);
//            } else {
//                value = mom.localeData().monthsParse(value);
//                // TODO: Another silent failure?
//                if (!isNumber(value)) {
//                    return mom;
//                }
//            }
//        }
//
//        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
//        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
//        return mom;
//    }
//
//    function getSetMonth(value) {
//        if (value != null) {
//            setMonth(this, value);
//            hooks.updateOffset(this, true);
//            return this;
//        } else {
//            return get(this, 'Month');
//        }
//    }
//
//    function getDaysInMonth() {
//        return daysInMonth(this.year(), this.month());
//    }
//
//    function monthsShortRegex(isStrict) {
//        if (this._monthsParseExact) {
//            if (!hasOwnProp(this, '_monthsRegex')) {
//                computeMonthsParse.call(this);
//            }
//            if (isStrict) {
//                return this._monthsShortStrictRegex;
//            } else {
//                return this._monthsShortRegex;
//            }
//        } else {
//            if (!hasOwnProp(this, '_monthsShortRegex')) {
//                this._monthsShortRegex = defaultMonthsShortRegex;
//            }
//            return this._monthsShortStrictRegex && isStrict
//                ? this._monthsShortStrictRegex
//                : this._monthsShortRegex;
//        }
//    }
//
//    function monthsRegex(isStrict) {
//        if (this._monthsParseExact) {
//            if (!hasOwnProp(this, '_monthsRegex')) {
//                computeMonthsParse.call(this);
//            }
//            if (isStrict) {
//                return this._monthsStrictRegex;
//            } else {
//                return this._monthsRegex;
//            }
//        } else {
//            if (!hasOwnProp(this, '_monthsRegex')) {
//                this._monthsRegex = defaultMonthsRegex;
//            }
//            return this._monthsStrictRegex && isStrict
//                ? this._monthsStrictRegex
//                : this._monthsRegex;
//        }
//    }
//
//    function computeMonthsParse() {
//        function cmpLenRev(a, b) {
//            return b.length - a.length;
//        }
//
//        var shortPieces = [],
//            longPieces = [],
//            mixedPieces = [],
//            i,
//            mom;
//        for (i = 0; i < 12; i++) {
//            // make the regex if we don't have it already
//            mom = createUTC([2000, i]);
//            shortPieces.push(this.monthsShort(mom, ''));
//            longPieces.push(this.months(mom, ''));
//            mixedPieces.push(this.months(mom, ''));
//            mixedPieces.push(this.monthsShort(mom, ''));
//        }
//        // Sorting makes sure if one month (or abbr) is a prefix of another it
//        // will match the longer piece.
//        shortPieces.sort(cmpLenRev);
//        longPieces.sort(cmpLenRev);
//        mixedPieces.sort(cmpLenRev);
//        for (i = 0; i < 12; i++) {
//            shortPieces[i] = regexEscape(shortPieces[i]);
//            longPieces[i] = regexEscape(longPieces[i]);
//        }
//        for (i = 0; i < 24; i++) {
//            mixedPieces[i] = regexEscape(mixedPieces[i]);
//        }
//
//        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
//        this._monthsShortRegex = this._monthsRegex;
//        this._monthsStrictRegex = new RegExp(
//            '^(' + longPieces.join('|') + ')',
//            'i'
//        );
//        this._monthsShortStrictRegex = new RegExp(
//            '^(' + shortPieces.join('|') + ')',
//            'i'
//        );
//    }
//
//    // FORMATTING
//
//    addFormatToken('Y', 0, 0, function () {
//        var y = this.year();
//        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
//    });
//
//    addFormatToken(0, ['YY', 2], 0, function () {
//        return this.year() % 100;
//    });
//
//    addFormatToken(0, ['YYYY', 4], 0, 'year');
//    addFormatToken(0, ['YYYYY', 5], 0, 'year');
//    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
//
//    // ALIASES
//
//    addUnitAlias('year', 'y');
//
//    // PRIORITIES
//
//    addUnitPriority('year', 1);
//
//    // PARSING
//
//    addRegexToken('Y', matchSigned);
//    addRegexToken('YY', match1to2, match2);
//    addRegexToken('YYYY', match1to4, match4);
//    addRegexToken('YYYYY', match1to6, match6);
//    addRegexToken('YYYYYY', match1to6, match6);
//
//    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
//    addParseToken('YYYY', function (input, array) {
//        array[YEAR] =
//            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
//    });
//    addParseToken('YY', function (input, array) {
//        array[YEAR] = hooks.parseTwoDigitYear(input);
//    });
//    addParseToken('Y', function (input, array) {
//        array[YEAR] = parseInt(input, 10);
//    });
//
//    // HELPERS
//
//    function daysInYear(year) {
//        return isLeapYear(year) ? 366 : 365;
//    }
//
//    // HOOKS
//
//    hooks.parseTwoDigitYear = function (input) {
//        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
//    };
//
//    // MOMENTS
//
//    var getSetYear = makeGetSet('FullYear', true);
//
//    function getIsLeapYear() {
//        return isLeapYear(this.year());
//    }
//
//    function createDate(y, m, d, h, M, s, ms) {
//        // can't just apply() to create a date:
//        // https://stackoverflow.com/q/181348
//        var date;
//        // the date constructor remaps years 0-99 to 1900-1999
//        if (y < 100 && y >= 0) {
//            // preserve leap years using a full 400 year cycle, then reset
//            date = new Date(y + 400, m, d, h, M, s, ms);
//            if (isFinite(date.getFullYear())) {
//                date.setFullYear(y);
//            }
//        } else {
//            date = new Date(y, m, d, h, M, s, ms);
//        }
//
//        return date;
//    }
//
//    function createUTCDate(y) {
//        var date, args;
//        // the Date.UTC function remaps years 0-99 to 1900-1999
//        if (y < 100 && y >= 0) {
//            args = Array.prototype.slice.call(arguments);
//            // preserve leap years using a full 400 year cycle, then reset
//            args[0] = y + 400;
//            date = new Date(Date.UTC.apply(null, args));
//            if (isFinite(date.getUTCFullYear())) {
//                date.setUTCFullYear(y);
//            }
//        } else {
//            date = new Date(Date.UTC.apply(null, arguments));
//        }
//
//        return date;
//    }
//
//    // start-of-first-week - start-of-year
//    function firstWeekOffset(year, dow, doy) {
//        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
//            fwd = 7 + dow - doy,
//            // first-week day local weekday -- which local weekday is fwd
//            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
//
//        return -fwdlw + fwd - 1;
//    }
//
//    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
//    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
//        var localWeekday = (7 + weekday - dow) % 7,
//            weekOffset = firstWeekOffset(year, dow, doy),
//            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
//            resYear,
//            resDayOfYear;
//
//        if (dayOfYear <= 0) {
//            resYear = year - 1;
//            resDayOfYear = daysInYear(resYear) + dayOfYear;
//        } else if (dayOfYear > daysInYear(year)) {
//            resYear = year + 1;
//            resDayOfYear = dayOfYear - daysInYear(year);
//        } else {
//            resYear = year;
//            resDayOfYear = dayOfYear;
//        }
//
//        return {
//            year: resYear,
//            dayOfYear: resDayOfYear,
//        };
//    }
//
//    function weekOfYear(mom, dow, doy) {
//        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
//            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
//            resWeek,
//            resYear;
//
//        if (week < 1) {
//            resYear = mom.year() - 1;
//            resWeek = week + weeksInYear(resYear, dow, doy);
//        } else if (week > weeksInYear(mom.year(), dow, doy)) {
//            resWeek = week - weeksInYear(mom.year(), dow, doy);
//            resYear = mom.year() + 1;
//        } else {
//            resYear = mom.year();
//            resWeek = week;
//        }
//
//        return {
//            week: resWeek,
//            year: resYear,
//        };
//    }
//
//    function weeksInYear(year, dow, doy) {
//        var weekOffset = firstWeekOffset(year, dow, doy),
//            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
//        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
//    }
//
//    // FORMATTING
//
//    addFormatToken('w', ['ww', 2], 'wo', 'week');
//    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
//
//    // ALIASES
//
//    addUnitAlias('week', 'w');
//    addUnitAlias('isoWeek', 'W');
//
//    // PRIORITIES
//
//    addUnitPriority('week', 5);
//    addUnitPriority('isoWeek', 5);
//
//    // PARSING
//
//    addRegexToken('w', match1to2);
//    addRegexToken('ww', match1to2, match2);
//    addRegexToken('W', match1to2);
//    addRegexToken('WW', match1to2, match2);
//
//    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
//        input,
//        week,
//        config,
//        token
//    ) {
//        week[token.substr(0, 1)] = toInt(input);
//    });
//
//    // HELPERS
//
//    // LOCALES
//
//    function localeWeek(mom) {
//        return weekOfYear(mom, this._week.dow, this._week.doy).week;
//    }
//
//    var defaultLocaleWeek = {
//        dow: 0, // Sunday is the first day of the week.
//        doy: 6, // The week that contains Jan 6th is the first week of the year.
//    };
//
//    function localeFirstDayOfWeek() {
//        return this._week.dow;
//    }
//
//    function localeFirstDayOfYear() {
//        return this._week.doy;
//    }
//
//    // MOMENTS
//
//    function getSetWeek(input) {
//        var week = this.localeData().week(this);
//        return input == null ? week : this.add((input - week) * 7, 'd');
//    }
//
//    function getSetISOWeek(input) {
//        var week = weekOfYear(this, 1, 4).week;
//        return input == null ? week : this.add((input - week) * 7, 'd');
//    }
//
//    // FORMATTING
//
//    addFormatToken('d', 0, 'do', 'day');
//
//    addFormatToken('dd', 0, 0, function (format) {
//        return this.localeData().weekdaysMin(this, format);
//    });
//
//    addFormatToken('ddd', 0, 0, function (format) {
//        return this.localeData().weekdaysShort(this, format);
//    });
//
//    addFormatToken('dddd', 0, 0, function (format) {
//        return this.localeData().weekdays(this, format);
//    });
//
//    addFormatToken('e', 0, 0, 'weekday');
//    addFormatToken('E', 0, 0, 'isoWeekday');
//
//    // ALIASES
//
//    addUnitAlias('day', 'd');
//    addUnitAlias('weekday', 'e');
//    addUnitAlias('isoWeekday', 'E');
//
//    // PRIORITY
//    addUnitPriority('day', 11);
//    addUnitPriority('weekday', 11);
//    addUnitPriority('isoWeekday', 11);
//
//    // PARSING
//
//    addRegexToken('d', match1to2);
//    addRegexToken('e', match1to2);
//    addRegexToken('E', match1to2);
//    addRegexToken('dd', function (isStrict, locale) {
//        return locale.weekdaysMinRegex(isStrict);
//    });
//    addRegexToken('ddd', function (isStrict, locale) {
//        return locale.weekdaysShortRegex(isStrict);
//    });
//    addRegexToken('dddd', function (isStrict, locale) {
//        return locale.weekdaysRegex(isStrict);
//    });
//
//    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
//        var weekday = config._locale.weekdaysParse(input, token, config._strict);
//        // if we didn't get a weekday name, mark the date as invalid
//        if (weekday != null) {
//            week.d = weekday;
//        } else {
//            getParsingFlags(config).invalidWeekday = input;
//        }
//    });
//
//    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
//        week[token] = toInt(input);
//    });
//
//    // HELPERS
//
//    function parseWeekday(input, locale) {
//        if (typeof input !== 'string') {
//            return input;
//        }
//
//        if (!isNaN(input)) {
//            return parseInt(input, 10);
//        }
//
//        input = locale.weekdaysParse(input);
//        if (typeof input === 'number') {
//            return input;
//        }
//
//        return null;
//    }
//
//    function parseIsoWeekday(input, locale) {
//        if (typeof input === 'string') {
//            return locale.weekdaysParse(input) % 7 || 7;
//        }
//        return isNaN(input) ? null : input;
//    }
//
//    // LOCALES
//    function shiftWeekdays(ws, n) {
//        return ws.slice(n, 7).concat(ws.slice(0, n));
//    }
//
//    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
//            '_'
//        ),
//        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
//        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
//        defaultWeekdaysRegex = matchWord,
//        defaultWeekdaysShortRegex = matchWord,
//        defaultWeekdaysMinRegex = matchWord;
//
//    function localeWeekdays(m, format) {
//        var weekdays = isArray(this._weekdays)
//            ? this._weekdays
//            : this._weekdays[
//                  m && m !== true && this._weekdays.isFormat.test(format)
//                      ? 'format'
//                      : 'standalone'
//              ];
//        return m === true
//            ? shiftWeekdays(weekdays, this._week.dow)
//            : m
//            ? weekdays[m.day()]
//            : weekdays;
//    }
//
//    function localeWeekdaysShort(m) {
//        return m === true
//            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
//            : m
//            ? this._weekdaysShort[m.day()]
//            : this._weekdaysShort;
//    }
//
//    function localeWeekdaysMin(m) {
//        return m === true
//            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
//            : m
//            ? this._weekdaysMin[m.day()]
//            : this._weekdaysMin;
//    }
//
//    function handleStrictParse$1(weekdayName, format, strict) {
//        var i,
//            ii,
//            mom,
//            llc = weekdayName.toLocaleLowerCase();
//        if (!this._weekdaysParse) {
//            this._weekdaysParse = [];
//            this._shortWeekdaysParse = [];
//            this._minWeekdaysParse = [];
//
//            for (i = 0; i < 7; ++i) {
//                mom = createUTC([2000, 1]).day(i);
//                this._minWeekdaysParse[i] = this.weekdaysMin(
//                    mom,
//                    ''
//                ).toLocaleLowerCase();
//                this._shortWeekdaysParse[i] = this.weekdaysShort(
//                    mom,
//                    ''
//                ).toLocaleLowerCase();
//                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
//            }
//        }
//
//        if (strict) {
//            if (format === 'dddd') {
//                ii = indexOf.call(this._weekdaysParse, llc);
//                return ii !== -1 ? ii : null;
//            } else if (format === 'ddd') {
//                ii = indexOf.call(this._shortWeekdaysParse, llc);
//                return ii !== -1 ? ii : null;
//            } else {
//                ii = indexOf.call(this._minWeekdaysParse, llc);
//                return ii !== -1 ? ii : null;
//            }
//        } else {
//            if (format === 'dddd') {
//                ii = indexOf.call(this._weekdaysParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._shortWeekdaysParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._minWeekdaysParse, llc);
//                return ii !== -1 ? ii : null;
//            } else if (format === 'ddd') {
//                ii = indexOf.call(this._shortWeekdaysParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._weekdaysParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._minWeekdaysParse, llc);
//                return ii !== -1 ? ii : null;
//            } else {
//                ii = indexOf.call(this._minWeekdaysParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._weekdaysParse, llc);
//                if (ii !== -1) {
//                    return ii;
//                }
//                ii = indexOf.call(this._shortWeekdaysParse, llc);
//                return ii !== -1 ? ii : null;
//            }
//        }
//    }
//
//    function localeWeekdaysParse(weekdayName, format, strict) {
//        var i, mom, regex;
//
//        if (this._weekdaysParseExact) {
//            return handleStrictParse$1.call(this, weekdayName, format, strict);
//        }
//
//        if (!this._weekdaysParse) {
//            this._weekdaysParse = [];
//            this._minWeekdaysParse = [];
//            this._shortWeekdaysParse = [];
//            this._fullWeekdaysParse = [];
//        }
//
//        for (i = 0; i < 7; i++) {
//            // make the regex if we don't have it already
//
//            mom = createUTC([2000, 1]).day(i);
//            if (strict && !this._fullWeekdaysParse[i]) {
//                this._fullWeekdaysParse[i] = new RegExp(
//                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
//                    'i'
//                );
//                this._shortWeekdaysParse[i] = new RegExp(
//                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
//                    'i'
//                );
//                this._minWeekdaysParse[i] = new RegExp(
//                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
//                    'i'
//                );
//            }
//            if (!this._weekdaysParse[i]) {
//                regex =
//                    '^' +
//                    this.weekdays(mom, '') +
//                    '|^' +
//                    this.weekdaysShort(mom, '') +
//                    '|^' +
//                    this.weekdaysMin(mom, '');
//                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
//            }
//            // test the regex
//            if (
//                strict &&
//                format === 'dddd' &&
//                this._fullWeekdaysParse[i].test(weekdayName)
//            ) {
//                return i;
//            } else if (
//                strict &&
//                format === 'ddd' &&
//                this._shortWeekdaysParse[i].test(weekdayName)
//            ) {
//                return i;
//            } else if (
//                strict &&
//                format === 'dd' &&
//                this._minWeekdaysParse[i].test(weekdayName)
//            ) {
//                return i;
//            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
//                return i;
//            }
//        }
//    }
//
//    // MOMENTS
//
//    function getSetDayOfWeek(input) {
//        if (!this.isValid()) {
//            return input != null ? this : NaN;
//        }
//        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
//        if (input != null) {
//            input = parseWeekday(input, this.localeData());
//            return this.add(input - day, 'd');
//        } else {
//            return day;
//        }
//    }
//
//    function getSetLocaleDayOfWeek(input) {
//        if (!this.isValid()) {
//            return input != null ? this : NaN;
//        }
//        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
//        return input == null ? weekday : this.add(input - weekday, 'd');
//    }
//
//    function getSetISODayOfWeek(input) {
//        if (!this.isValid()) {
//            return input != null ? this : NaN;
//        }
//
//        // behaves the same as moment#day except
//        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
//        // as a setter, sunday should belong to the previous week.
//
//        if (input != null) {
//            var weekday = parseIsoWeekday(input, this.localeData());
//            return this.day(this.day() % 7 ? weekday : weekday - 7);
//        } else {
//            return this.day() || 7;
//        }
//    }
//
//    function weekdaysRegex(isStrict) {
//        if (this._weekdaysParseExact) {
//            if (!hasOwnProp(this, '_weekdaysRegex')) {
//                computeWeekdaysParse.call(this);
//            }
//            if (isStrict) {
//                return this._weekdaysStrictRegex;
//            } else {
//                return this._weekdaysRegex;
//            }
//        } else {
//            if (!hasOwnProp(this, '_weekdaysRegex')) {
//                this._weekdaysRegex = defaultWeekdaysRegex;
//            }
//            return this._weekdaysStrictRegex && isStrict
//                ? this._weekdaysStrictRegex
//                : this._weekdaysRegex;
//        }
//    }
//
//    function weekdaysShortRegex(isStrict) {
//        if (this._weekdaysParseExact) {
//            if (!hasOwnProp(this, '_weekdaysRegex')) {
//                computeWeekdaysParse.call(this);
//            }
//            if (isStrict) {
//                return this._weekdaysShortStrictRegex;
//            } else {
//                return this._weekdaysShortRegex;
//            }
//        } else {
//            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
//                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
//            }
//            return this._weekdaysShortStrictRegex && isStrict
//                ? this._weekdaysShortStrictRegex
//                : this._weekdaysShortRegex;
//        }
//    }
//
//    function weekdaysMinRegex(isStrict) {
//        if (this._weekdaysParseExact) {
//            if (!hasOwnProp(this, '_weekdaysRegex')) {
//                computeWeekdaysParse.call(this);
//            }
//            if (isStrict) {
//                return this._weekdaysMinStrictRegex;
//            } else {
//                return this._weekdaysMinRegex;
//            }
//        } else {
//            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
//                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
//            }
//            return this._weekdaysMinStrictRegex && isStrict
//                ? this._weekdaysMinStrictRegex
//                : this._weekdaysMinRegex;
//        }
//    }
//
//    function computeWeekdaysParse() {
//        function cmpLenRev(a, b) {
//            return b.length - a.length;
//        }
//
//        var minPieces = [],
//            shortPieces = [],
//            longPieces = [],
//            mixedPieces = [],
//            i,
//            mom,
//            minp,
//            shortp,
//            longp;
//        for (i = 0; i < 7; i++) {
//            // make the regex if we don't have it already
//            mom = createUTC([2000, 1]).day(i);
//            minp = regexEscape(this.weekdaysMin(mom, ''));
//            shortp = regexEscape(this.weekdaysShort(mom, ''));
//            longp = regexEscape(this.weekdays(mom, ''));
//            minPieces.push(minp);
//            shortPieces.push(shortp);
//            longPieces.push(longp);
//            mixedPieces.push(minp);
//            mixedPieces.push(shortp);
//            mixedPieces.push(longp);
//        }
//        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
//        // will match the longer piece.
//        minPieces.sort(cmpLenRev);
//        shortPieces.sort(cmpLenRev);
//        longPieces.sort(cmpLenRev);
//        mixedPieces.sort(cmpLenRev);
//
//        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
//        this._weekdaysShortRegex = this._weekdaysRegex;
//        this._weekdaysMinRegex = this._weekdaysRegex;
//
//        this._weekdaysStrictRegex = new RegExp(
//            '^(' + longPieces.join('|') + ')',
//            'i'
//        );
//        this._weekdaysShortStrictRegex = new RegExp(
//            '^(' + shortPieces.join('|') + ')',
//            'i'
//        );
//        this._weekdaysMinStrictRegex = new RegExp(
//            '^(' + minPieces.join('|') + ')',
//            'i'
//        );
//    }
//
//    // FORMATTING
//
//    function hFormat() {
//        return this.hours() % 12 || 12;
//    }
//
//    function kFormat() {
//        return this.hours() || 24;
//    }
//
//    addFormatToken('H', ['HH', 2], 0, 'hour');
//    addFormatToken('h', ['hh', 2], 0, hFormat);
//    addFormatToken('k', ['kk', 2], 0, kFormat);
//
//    addFormatToken('hmm', 0, 0, function () {
//        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
//    });
//
//    addFormatToken('hmmss', 0, 0, function () {
//        return (
//            '' +
//            hFormat.apply(this) +
//            zeroFill(this.minutes(), 2) +
//            zeroFill(this.seconds(), 2)
//        );
//    });
//
//    addFormatToken('Hmm', 0, 0, function () {
//        return '' + this.hours() + zeroFill(this.minutes(), 2);
//    });
//
//    addFormatToken('Hmmss', 0, 0, function () {
//        return (
//            '' +
//            this.hours() +
//            zeroFill(this.minutes(), 2) +
//            zeroFill(this.seconds(), 2)
//        );
//    });
//
//    function meridiem(token, lowercase) {
//        addFormatToken(token, 0, 0, function () {
//            return this.localeData().meridiem(
//                this.hours(),
//                this.minutes(),
//                lowercase
//            );
//        });
//    }
//
//    meridiem('a', true);
//    meridiem('A', false);
//
//    // ALIASES
//
//    addUnitAlias('hour', 'h');
//
//    // PRIORITY
//    addUnitPriority('hour', 13);
//
//    // PARSING
//
//    function matchMeridiem(isStrict, locale) {
//        return locale._meridiemParse;
//    }
//
//    addRegexToken('a', matchMeridiem);
//    addRegexToken('A', matchMeridiem);
//    addRegexToken('H', match1to2);
//    addRegexToken('h', match1to2);
//    addRegexToken('k', match1to2);
//    addRegexToken('HH', match1to2, match2);
//    addRegexToken('hh', match1to2, match2);
//    addRegexToken('kk', match1to2, match2);
//
//    addRegexToken('hmm', match3to4);
//    addRegexToken('hmmss', match5to6);
//    addRegexToken('Hmm', match3to4);
//    addRegexToken('Hmmss', match5to6);
//
//    addParseToken(['H', 'HH'], HOUR);
//    addParseToken(['k', 'kk'], function (input, array, config) {
//        var kInput = toInt(input);
//        array[HOUR] = kInput === 24 ? 0 : kInput;
//    });
//    addParseToken(['a', 'A'], function (input, array, config) {
//        config._isPm = config._locale.isPM(input);
//        config._meridiem = input;
//    });
//    addParseToken(['h', 'hh'], function (input, array, config) {
//        array[HOUR] = toInt(input);
//        getParsingFlags(config).bigHour = true;
//    });
//    addParseToken('hmm', function (input, array, config) {
//        var pos = input.length - 2;
//        array[HOUR] = toInt(input.substr(0, pos));
//        array[MINUTE] = toInt(input.substr(pos));
//        getParsingFlags(config).bigHour = true;
//    });
//    addParseToken('hmmss', function (input, array, config) {
//        var pos1 = input.length - 4,
//            pos2 = input.length - 2;
//        array[HOUR] = toInt(input.substr(0, pos1));
//        array[MINUTE] = toInt(input.substr(pos1, 2));
//        array[SECOND] = toInt(input.substr(pos2));
//        getParsingFlags(config).bigHour = true;
//    });
//    addParseToken('Hmm', function (input, array, config) {
//        var pos = input.length - 2;
//        array[HOUR] = toInt(input.substr(0, pos));
//        array[MINUTE] = toInt(input.substr(pos));
//    });
//    addParseToken('Hmmss', function (input, array, config) {
//        var pos1 = input.length - 4,
//            pos2 = input.length - 2;
//        array[HOUR] = toInt(input.substr(0, pos1));
//        array[MINUTE] = toInt(input.substr(pos1, 2));
//        array[SECOND] = toInt(input.substr(pos2));
//    });
//
//    // LOCALES
//
//    function localeIsPM(input) {
//        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
//        // Using charAt should be more compatible.
//        return (input + '').toLowerCase().charAt(0) === 'p';
//    }
//
//    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
//        // Setting the hour should keep the time, because the user explicitly
//        // specified which hour they want. So trying to maintain the same hour (in
//        // a new timezone) makes sense. Adding/subtracting hours does not follow
//        // this rule.
//        getSetHour = makeGetSet('Hours', true);
//
//    function localeMeridiem(hours, minutes, isLower) {
//        if (hours > 11) {
//            return isLower ? 'pm' : 'PM';
//        } else {
//            return isLower ? 'am' : 'AM';
//        }
//    }
//
//    var baseConfig = {
//        calendar: defaultCalendar,
//        longDateFormat: defaultLongDateFormat,
//        invalidDate: defaultInvalidDate,
//        ordinal: defaultOrdinal,
//        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
//        relativeTime: defaultRelativeTime,
//
//        months: defaultLocaleMonths,
//        monthsShort: defaultLocaleMonthsShort,
//
//        week: defaultLocaleWeek,
//
//        weekdays: defaultLocaleWeekdays,
//        weekdaysMin: defaultLocaleWeekdaysMin,
//        weekdaysShort: defaultLocaleWeekdaysShort,
//
//        meridiemParse: defaultLocaleMeridiemParse,
//    };
//
//    // internal storage for locale config files
//    var locales = {},
//        localeFamilies = {},
//        globalLocale;
//
//    function commonPrefix(arr1, arr2) {
//        var i,
//            minl = Math.min(arr1.length, arr2.length);
//        for (i = 0; i < minl; i += 1) {
//            if (arr1[i] !== arr2[i]) {
//                return i;
//            }
//        }
//        return minl;
//    }
//
//    function normalizeLocale(key) {
//        return key ? key.toLowerCase().replace('_', '-') : key;
//    }
//
//    // pick the locale from the array
//    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
//    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
//    function chooseLocale(names) {
//        var i = 0,
//            j,
//            next,
//            locale,
//            split;
//
//        while (i < names.length) {
//            split = normalizeLocale(names[i]).split('-');
//            j = split.length;
//            next = normalizeLocale(names[i + 1]);
//            next = next ? next.split('-') : null;
//            while (j > 0) {
//                locale = loadLocale(split.slice(0, j).join('-'));
//                if (locale) {
//                    return locale;
//                }
//                if (
//                    next &&
//                    next.length >= j &&
//                    commonPrefix(split, next) >= j - 1
//                ) {
//                    //the next array item is better than a shallower substring of this one
//                    break;
//                }
//                j--;
//            }
//            i++;
//        }
//        return globalLocale;
//    }
//
//    function loadLocale(name) {
//        var oldLocale = null,
//            aliasedRequire;
//        // TODO: Find a better way to register and load all the locales in Node
//        if (
//            locales[name] === undefined &&
//            typeof module !== 'undefined' &&
//            module &&
//            module.exports
//        ) {
//            try {
//                oldLocale = globalLocale._abbr;
//                aliasedRequire = require;
//                aliasedRequire('./locale/' + name);
//                getSetGlobalLocale(oldLocale);
//            } catch (e) {
//                // mark as not found to avoid repeating expensive file require call causing high CPU
//                // when trying to find en-US, en_US, en-us for every format call
//                locales[name] = null; // null means not found
//            }
//        }
//        return locales[name];
//    }
//
//    // This function will load locale and then set the global locale.  If
//    // no arguments are passed in, it will simply return the current global
//    // locale key.
//    function getSetGlobalLocale(key, values) {
//        var data;
//        if (key) {
//            if (isUndefined(values)) {
//                data = getLocale(key);
//            } else {
//                data = defineLocale(key, values);
//            }
//
//            if (data) {
//                // moment.duration._locale = moment._locale = data;
//                globalLocale = data;
//            } else {
//                if (typeof console !== 'undefined' && console.warn) {
//                    //warn user if arguments are passed but the locale could not be set
//                    console.warn(
//                        'Locale ' + key + ' not found. Did you forget to load it?'
//                    );
//                }
//            }
//        }
//
//        return globalLocale._abbr;
//    }
//
//    function defineLocale(name, config) {
//        if (config !== null) {
//            var locale,
//                parentConfig = baseConfig;
//            config.abbr = name;
//            if (locales[name] != null) {
//                deprecateSimple(
//                    'defineLocaleOverride',
//                    'use moment.updateLocale(localeName, config) to change ' +
//                        'an existing locale. moment.defineLocale(localeName, ' +
//                        'config) should only be used for creating a new locale ' +
//                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
//                );
//                parentConfig = locales[name]._config;
//            } else if (config.parentLocale != null) {
//                if (locales[config.parentLocale] != null) {
//                    parentConfig = locales[config.parentLocale]._config;
//                } else {
//                    locale = loadLocale(config.parentLocale);
//                    if (locale != null) {
//                        parentConfig = locale._config;
//                    } else {
//                        if (!localeFamilies[config.parentLocale]) {
//                            localeFamilies[config.parentLocale] = [];
//                        }
//                        localeFamilies[config.parentLocale].push({
//                            name: name,
//                            config: config,
//                        });
//                        return null;
//                    }
//                }
//            }
//            locales[name] = new Locale(mergeConfigs(parentConfig, config));
//
//            if (localeFamilies[name]) {
//                localeFamilies[name].forEach(function (x) {
//                    defineLocale(x.name, x.config);
//                });
//            }
//
//            // backwards compat for now: also set the locale
//            // make sure we set the locale AFTER all child locales have been
//            // created, so we won't end up with the child locale set.
//            getSetGlobalLocale(name);
//
//            return locales[name];
//        } else {
//            // useful for testing
//            delete locales[name];
//            return null;
//        }
//    }
//
//    function updateLocale(name, config) {
//        if (config != null) {
//            var locale,
//                tmpLocale,
//                parentConfig = baseConfig;
//
//            if (locales[name] != null && locales[name].parentLocale != null) {
//                // Update existing child locale in-place to avoid memory-leaks
//                locales[name].set(mergeConfigs(locales[name]._config, config));
//            } else {
//                // MERGE
//                tmpLocale = loadLocale(name);
//                if (tmpLocale != null) {
//                    parentConfig = tmpLocale._config;
//                }
//                config = mergeConfigs(parentConfig, config);
//                if (tmpLocale == null) {
//                    // updateLocale is called for creating a new locale
//                    // Set abbr so it will have a name (getters return
//                    // undefined otherwise).
//                    config.abbr = name;
//                }
//                locale = new Locale(config);
//                locale.parentLocale = locales[name];
//                locales[name] = locale;
//            }
//
//            // backwards compat for now: also set the locale
//            getSetGlobalLocale(name);
//        } else {
//            // pass null for config to unupdate, useful for tests
//            if (locales[name] != null) {
//                if (locales[name].parentLocale != null) {
//                    locales[name] = locales[name].parentLocale;
//                    if (name === getSetGlobalLocale()) {
//                        getSetGlobalLocale(name);
//                    }
//                } else if (locales[name] != null) {
//                    delete locales[name];
//                }
//            }
//        }
//        return locales[name];
//    }
//
//    // returns locale data
//    function getLocale(key) {
//        var locale;
//
//        if (key && key._locale && key._locale._abbr) {
//            key = key._locale._abbr;
//        }
//
//        if (!key) {
//            return globalLocale;
//        }
//
//        if (!isArray(key)) {
//            //short-circuit everything else
//            locale = loadLocale(key);
//            if (locale) {
//                return locale;
//            }
//            key = [key];
//        }
//
//        return chooseLocale(key);
//    }
//
//    function listLocales() {
//        return keys(locales);
//    }
//
//    function checkOverflow(m) {
//        var overflow,
//            a = m._a;
//
//        if (a && getParsingFlags(m).overflow === -2) {
//            overflow =
//                a[MONTH] < 0 || a[MONTH] > 11
//                    ? MONTH
//                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
//                    ? DATE
//                    : a[HOUR] < 0 ||
//                      a[HOUR] > 24 ||
//                      (a[HOUR] === 24 &&
//                          (a[MINUTE] !== 0 ||
//                              a[SECOND] !== 0 ||
//                              a[MILLISECOND] !== 0))
//                    ? HOUR
//                    : a[MINUTE] < 0 || a[MINUTE] > 59
//                    ? MINUTE
//                    : a[SECOND] < 0 || a[SECOND] > 59
//                    ? SECOND
//                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
//                    ? MILLISECOND
//                    : -1;
//
//            if (
//                getParsingFlags(m)._overflowDayOfYear &&
//                (overflow < YEAR || overflow > DATE)
//            ) {
//                overflow = DATE;
//            }
//            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
//                overflow = WEEK;
//            }
//            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
//                overflow = WEEKDAY;
//            }
//
//            getParsingFlags(m).overflow = overflow;
//        }
//
//        return m;
//    }
//
//    // iso 8601 regex
//    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
//    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
//        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
//        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
//        isoDates = [
//            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
//            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
//            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
//            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
//            ['YYYY-DDD', /\d{4}-\d{3}/],
//            ['YYYY-MM', /\d{4}-\d\d/, false],
//            ['YYYYYYMMDD', /[+-]\d{10}/],
//            ['YYYYMMDD', /\d{8}/],
//            ['GGGG[W]WWE', /\d{4}W\d{3}/],
//            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
//            ['YYYYDDD', /\d{7}/],
//            ['YYYYMM', /\d{6}/, false],
//            ['YYYY', /\d{4}/, false],
//        ],
//        // iso time formats and regexes
//        isoTimes = [
//            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
//            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
//            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
//            ['HH:mm', /\d\d:\d\d/],
//            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
//            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
//            ['HHmmss', /\d\d\d\d\d\d/],
//            ['HHmm', /\d\d\d\d/],
//            ['HH', /\d\d/],
//        ],
//        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
//        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
//        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
//        obsOffsets = {
//            UT: 0,
//            GMT: 0,
//            EDT: -4 * 60,
//            EST: -5 * 60,
//            CDT: -5 * 60,
//            CST: -6 * 60,
//            MDT: -6 * 60,
//            MST: -7 * 60,
//            PDT: -7 * 60,
//            PST: -8 * 60,
//        };
//
//    // date from iso format
//    function configFromISO(config) {
//        var i,
//            l,
//            string = config._i,
//            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
//            allowTime,
//            dateFormat,
//            timeFormat,
//            tzFormat;
//
//        if (match) {
//            getParsingFlags(config).iso = true;
//
//            for (i = 0, l = isoDates.length; i < l; i++) {
//                if (isoDates[i][1].exec(match[1])) {
//                    dateFormat = isoDates[i][0];
//                    allowTime = isoDates[i][2] !== false;
//                    break;
//                }
//            }
//            if (dateFormat == null) {
//                config._isValid = false;
//                return;
//            }
//            if (match[3]) {
//                for (i = 0, l = isoTimes.length; i < l; i++) {
//                    if (isoTimes[i][1].exec(match[3])) {
//                        // match[2] should be 'T' or space
//                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
//                        break;
//                    }
//                }
//                if (timeFormat == null) {
//                    config._isValid = false;
//                    return;
//                }
//            }
//            if (!allowTime && timeFormat != null) {
//                config._isValid = false;
//                return;
//            }
//            if (match[4]) {
//                if (tzRegex.exec(match[4])) {
//                    tzFormat = 'Z';
//                } else {
//                    config._isValid = false;
//                    return;
//                }
//            }
//            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
//            configFromStringAndFormat(config);
//        } else {
//            config._isValid = false;
//        }
//    }
//
//    function extractFromRFC2822Strings(
//        yearStr,
//        monthStr,
//        dayStr,
//        hourStr,
//        minuteStr,
//        secondStr
//    ) {
//        var result = [
//            untruncateYear(yearStr),
//            defaultLocaleMonthsShort.indexOf(monthStr),
//            parseInt(dayStr, 10),
//            parseInt(hourStr, 10),
//            parseInt(minuteStr, 10),
//        ];
//
//        if (secondStr) {
//            result.push(parseInt(secondStr, 10));
//        }
//
//        return result;
//    }
//
//    function untruncateYear(yearStr) {
//        var year = parseInt(yearStr, 10);
//        if (year <= 49) {
//            return 2000 + year;
//        } else if (year <= 999) {
//            return 1900 + year;
//        }
//        return year;
//    }
//
//    function preprocessRFC2822(s) {
//        // Remove comments and folding whitespace and replace multiple-spaces with a single space
//        return s
//            .replace(/\([^)]*\)|[\n\t]/g, ' ')
//            .replace(/(\s\s+)/g, ' ')
//            .replace(/^\s\s*/, '')
//            .replace(/\s\s*$/, '');
//    }
//
//    function checkWeekday(weekdayStr, parsedInput, config) {
//        if (weekdayStr) {
//            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
//            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
//                weekdayActual = new Date(
//                    parsedInput[0],
//                    parsedInput[1],
//                    parsedInput[2]
//                ).getDay();
//            if (weekdayProvided !== weekdayActual) {
//                getParsingFlags(config).weekdayMismatch = true;
//                config._isValid = false;
//                return false;
//            }
//        }
//        return true;
//    }
//
//    function calculateOffset(obsOffset, militaryOffset, numOffset) {
//        if (obsOffset) {
//            return obsOffsets[obsOffset];
//        } else if (militaryOffset) {
//            // the only allowed military tz is Z
//            return 0;
//        } else {
//            var hm = parseInt(numOffset, 10),
//                m = hm % 100,
//                h = (hm - m) / 100;
//            return h * 60 + m;
//        }
//    }
//
//    // date and time from ref 2822 format
//    function configFromRFC2822(config) {
//        var match = rfc2822.exec(preprocessRFC2822(config._i)),
//            parsedArray;
//        if (match) {
//            parsedArray = extractFromRFC2822Strings(
//                match[4],
//                match[3],
//                match[2],
//                match[5],
//                match[6],
//                match[7]
//            );
//            if (!checkWeekday(match[1], parsedArray, config)) {
//                return;
//            }
//
//            config._a = parsedArray;
//            config._tzm = calculateOffset(match[8], match[9], match[10]);
//
//            config._d = createUTCDate.apply(null, config._a);
//            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
//
//            getParsingFlags(config).rfc2822 = true;
//        } else {
//            config._isValid = false;
//        }
//    }
//
//    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
//    function configFromString(config) {
//        var matched = aspNetJsonRegex.exec(config._i);
//        if (matched !== null) {
//            config._d = new Date(+matched[1]);
//            return;
//        }
//
//        configFromISO(config);
//        if (config._isValid === false) {
//            delete config._isValid;
//        } else {
//            return;
//        }
//
//        configFromRFC2822(config);
//        if (config._isValid === false) {
//            delete config._isValid;
//        } else {
//            return;
//        }
//
//        if (config._strict) {
//            config._isValid = false;
//        } else {
//            // Final attempt, use Input Fallback
//            hooks.createFromInputFallback(config);
//        }
//    }
//
//    hooks.createFromInputFallback = deprecate(
//        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
//            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
//            'discouraged and will be removed in an upcoming major release. Please refer to ' +
//            'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
//        function (config) {
//            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
//        }
//    );
//
//    // Pick the first defined of two or three arguments.
//    function defaults(a, b, c) {
//        if (a != null) {
//            return a;
//        }
//        if (b != null) {
//            return b;
//        }
//        return c;
//    }
//
//    function currentDateArray(config) {
//        // hooks is actually the exported moment object
//        var nowValue = new Date(hooks.now());
//        if (config._useUTC) {
//            return [
//                nowValue.getUTCFullYear(),
//                nowValue.getUTCMonth(),
//                nowValue.getUTCDate(),
//            ];
//        }
//        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
//    }
//
//    // convert an array to a date.
//    // the array should mirror the parameters below
//    // note: all values past the year are optional and will default to the lowest possible value.
//    // [year, month, day , hour, minute, second, millisecond]
//    function configFromArray(config) {
//        var i,
//            date,
//            input = [],
//            currentDate,
//            expectedWeekday,
//            yearToUse;
//
//        if (config._d) {
//            return;
//        }
//
//        currentDate = currentDateArray(config);
//
//        //compute day of the year from weeks and weekdays
//        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
//            dayOfYearFromWeekInfo(config);
//        }
//
//        //if the day of the year is set, figure out what it is
//        if (config._dayOfYear != null) {
//            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
//
//            if (
//                config._dayOfYear > daysInYear(yearToUse) ||
//                config._dayOfYear === 0
//            ) {
//                getParsingFlags(config)._overflowDayOfYear = true;
//            }
//
//            date = createUTCDate(yearToUse, 0, config._dayOfYear);
//            config._a[MONTH] = date.getUTCMonth();
//            config._a[DATE] = date.getUTCDate();
//        }
//
//        // Default to current date.
//        // * if no year, month, day of month are given, default to today
//        // * if day of month is given, default month and year
//        // * if month is given, default only year
//        // * if year is given, don't default anything
//        for (i = 0; i < 3 && config._a[i] == null; ++i) {
//            config._a[i] = input[i] = currentDate[i];
//        }
//
//        // Zero out whatever was not defaulted, including time
//        for (; i < 7; i++) {
//            config._a[i] = input[i] =
//                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
//        }
//
//        // Check for 24:00:00.000
//        if (
//            config._a[HOUR] === 24 &&
//            config._a[MINUTE] === 0 &&
//            config._a[SECOND] === 0 &&
//            config._a[MILLISECOND] === 0
//        ) {
//            config._nextDay = true;
//            config._a[HOUR] = 0;
//        }
//
//        config._d = (config._useUTC ? createUTCDate : createDate).apply(
//            null,
//            input
//        );
//        expectedWeekday = config._useUTC
//            ? config._d.getUTCDay()
//            : config._d.getDay();
//
//        // Apply timezone offset from input. The actual utcOffset can be changed
//        // with parseZone.
//        if (config._tzm != null) {
//            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
//        }
//
//        if (config._nextDay) {
//            config._a[HOUR] = 24;
//        }
//
//        // check for mismatching day of week
//        if (
//            config._w &&
//            typeof config._w.d !== 'undefined' &&
//            config._w.d !== expectedWeekday
//        ) {
//            getParsingFlags(config).weekdayMismatch = true;
//        }
//    }
//
//    function dayOfYearFromWeekInfo(config) {
//        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
//
//        w = config._w;
//        if (w.GG != null || w.W != null || w.E != null) {
//            dow = 1;
//            doy = 4;
//
//            // TODO: We need to take the current isoWeekYear, but that depends on
//            // how we interpret now (local, utc, fixed offset). So create
//            // a now version of current config (take local/utc/offset flags, and
//            // create now).
//            weekYear = defaults(
//                w.GG,
//                config._a[YEAR],
//                weekOfYear(createLocal(), 1, 4).year
//            );
//            week = defaults(w.W, 1);
//            weekday = defaults(w.E, 1);
//            if (weekday < 1 || weekday > 7) {
//                weekdayOverflow = true;
//            }
//        } else {
//            dow = config._locale._week.dow;
//            doy = config._locale._week.doy;
//
//            curWeek = weekOfYear(createLocal(), dow, doy);
//
//            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
//
//            // Default to current week.
//            week = defaults(w.w, curWeek.week);
//
//            if (w.d != null) {
//                // weekday -- low day numbers are considered next week
//                weekday = w.d;
//                if (weekday < 0 || weekday > 6) {
//                    weekdayOverflow = true;
//                }
//            } else if (w.e != null) {
//                // local weekday -- counting starts from beginning of week
//                weekday = w.e + dow;
//                if (w.e < 0 || w.e > 6) {
//                    weekdayOverflow = true;
//                }
//            } else {
//                // default to beginning of week
//                weekday = dow;
//            }
//        }
//        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
//            getParsingFlags(config)._overflowWeeks = true;
//        } else if (weekdayOverflow != null) {
//            getParsingFlags(config)._overflowWeekday = true;
//        } else {
//            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
//            config._a[YEAR] = temp.year;
//            config._dayOfYear = temp.dayOfYear;
//        }
//    }
//
//    // constant that refers to the ISO standard
//    hooks.ISO_8601 = function () {};
//
//    // constant that refers to the RFC 2822 form
//    hooks.RFC_2822 = function () {};
//
//    // date from string and format string
//    function configFromStringAndFormat(config) {
//        // TODO: Move this to another part of the creation flow to prevent circular deps
//        if (config._f === hooks.ISO_8601) {
//            configFromISO(config);
//            return;
//        }
//        if (config._f === hooks.RFC_2822) {
//            configFromRFC2822(config);
//            return;
//        }
//        config._a = [];
//        getParsingFlags(config).empty = true;
//
//        // This array is used to make a Date, either with `new Date` or `Date.UTC`
//        var string = '' + config._i,
//            i,
//            parsedInput,
//            tokens,
//            token,
//            skipped,
//            stringLength = string.length,
//            totalParsedInputLength = 0,
//            era;
//
//        tokens =
//            expandFormat(config._f, config._locale).match(formattingTokens) || [];
//
//        for (i = 0; i < tokens.length; i++) {
//            token = tokens[i];
//            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
//                [])[0];
//            if (parsedInput) {
//                skipped = string.substr(0, string.indexOf(parsedInput));
//                if (skipped.length > 0) {
//                    getParsingFlags(config).unusedInput.push(skipped);
//                }
//                string = string.slice(
//                    string.indexOf(parsedInput) + parsedInput.length
//                );
//                totalParsedInputLength += parsedInput.length;
//            }
//            // don't parse if it's not a known token
//            if (formatTokenFunctions[token]) {
//                if (parsedInput) {
//                    getParsingFlags(config).empty = false;
//                } else {
//                    getParsingFlags(config).unusedTokens.push(token);
//                }
//                addTimeToArrayFromToken(token, parsedInput, config);
//            } else if (config._strict && !parsedInput) {
//                getParsingFlags(config).unusedTokens.push(token);
//            }
//        }
//
//        // add remaining unparsed input length to the string
//        getParsingFlags(config).charsLeftOver =
//            stringLength - totalParsedInputLength;
//        if (string.length > 0) {
//            getParsingFlags(config).unusedInput.push(string);
//        }
//
//        // clear _12h flag if hour is <= 12
//        if (
//            config._a[HOUR] <= 12 &&
//            getParsingFlags(config).bigHour === true &&
//            config._a[HOUR] > 0
//        ) {
//            getParsingFlags(config).bigHour = undefined;
//        }
//
//        getParsingFlags(config).parsedDateParts = config._a.slice(0);
//        getParsingFlags(config).meridiem = config._meridiem;
//        // handle meridiem
//        config._a[HOUR] = meridiemFixWrap(
//            config._locale,
//            config._a[HOUR],
//            config._meridiem
//        );
//
//        // handle era
//        era = getParsingFlags(config).era;
//        if (era !== null) {
//            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
//        }
//
//        configFromArray(config);
//        checkOverflow(config);
//    }
//
//    function meridiemFixWrap(locale, hour, meridiem) {
//        var isPm;
//
//        if (meridiem == null) {
//            // nothing to do
//            return hour;
//        }
//        if (locale.meridiemHour != null) {
//            return locale.meridiemHour(hour, meridiem);
//        } else if (locale.isPM != null) {
//            // Fallback
//            isPm = locale.isPM(meridiem);
//            if (isPm && hour < 12) {
//                hour += 12;
//            }
//            if (!isPm && hour === 12) {
//                hour = 0;
//            }
//            return hour;
//        } else {
//            // this is not supposed to happen
//            return hour;
//        }
//    }
//
//    // date from string and array of format strings
//    function configFromStringAndArray(config) {
//        var tempConfig,
//            bestMoment,
//            scoreToBeat,
//            i,
//            currentScore,
//            validFormatFound,
//            bestFormatIsValid = false;
//
//        if (config._f.length === 0) {
//            getParsingFlags(config).invalidFormat = true;
//            config._d = new Date(NaN);
//            return;
//        }
//
//        for (i = 0; i < config._f.length; i++) {
//            currentScore = 0;
//            validFormatFound = false;
//            tempConfig = copyConfig({}, config);
//            if (config._useUTC != null) {
//                tempConfig._useUTC = config._useUTC;
//            }
//            tempConfig._f = config._f[i];
//            configFromStringAndFormat(tempConfig);
//
//            if (isValid(tempConfig)) {
//                validFormatFound = true;
//            }
//
//            // if there is any input that was not parsed add a penalty for that format
//            currentScore += getParsingFlags(tempConfig).charsLeftOver;
//
//            //or tokens
//            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
//
//            getParsingFlags(tempConfig).score = currentScore;
//
//            if (!bestFormatIsValid) {
//                if (
//                    scoreToBeat == null ||
//                    currentScore < scoreToBeat ||
//                    validFormatFound
//                ) {
//                    scoreToBeat = currentScore;
//                    bestMoment = tempConfig;
//                    if (validFormatFound) {
//                        bestFormatIsValid = true;
//                    }
//                }
//            } else {
//                if (currentScore < scoreToBeat) {
//                    scoreToBeat = currentScore;
//                    bestMoment = tempConfig;
//                }
//            }
//        }
//
//        extend(config, bestMoment || tempConfig);
//    }
//
//    function configFromObject(config) {
//        if (config._d) {
//            return;
//        }
//
//        var i = normalizeObjectUnits(config._i),
//            dayOrDate = i.day === undefined ? i.date : i.day;
//        config._a = map(
//            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
//            function (obj) {
//                return obj && parseInt(obj, 10);
//            }
//        );
//
//        configFromArray(config);
//    }
//
//    function createFromConfig(config) {
//        var res = new Moment(checkOverflow(prepareConfig(config)));
//        if (res._nextDay) {
//            // Adding is smart enough around DST
//            res.add(1, 'd');
//            res._nextDay = undefined;
//        }
//
//        return res;
//    }
//
//    function prepareConfig(config) {
//        var input = config._i,
//            format = config._f;
//
//        config._locale = config._locale || getLocale(config._l);
//
//        if (input === null || (format === undefined && input === '')) {
//            return createInvalid({ nullInput: true });
//        }
//
//        if (typeof input === 'string') {
//            config._i = input = config._locale.preparse(input);
//        }
//
//        if (isMoment(input)) {
//            return new Moment(checkOverflow(input));
//        } else if (isDate(input)) {
//            config._d = input;
//        } else if (isArray(format)) {
//            configFromStringAndArray(config);
//        } else if (format) {
//            configFromStringAndFormat(config);
//        } else {
//            configFromInput(config);
//        }
//
//        if (!isValid(config)) {
//            config._d = null;
//        }
//
//        return config;
//    }
//
//    function configFromInput(config) {
//        var input = config._i;
//        if (isUndefined(input)) {
//            config._d = new Date(hooks.now());
//        } else if (isDate(input)) {
//            config._d = new Date(input.valueOf());
//        } else if (typeof input === 'string') {
//            configFromString(config);
//        } else if (isArray(input)) {
//            config._a = map(input.slice(0), function (obj) {
//                return parseInt(obj, 10);
//            });
//            configFromArray(config);
//        } else if (isObject(input)) {
//            configFromObject(config);
//        } else if (isNumber(input)) {
//            // from milliseconds
//            config._d = new Date(input);
//        } else {
//            hooks.createFromInputFallback(config);
//        }
//    }
//
//    function createLocalOrUTC(input, format, locale, strict, isUTC) {
//        var c = {};
//
//        if (format === true || format === false) {
//            strict = format;
//            format = undefined;
//        }
//
//        if (locale === true || locale === false) {
//            strict = locale;
//            locale = undefined;
//        }
//
//        if (
//            (isObject(input) && isObjectEmpty(input)) ||
//            (isArray(input) && input.length === 0)
//        ) {
//            input = undefined;
//        }
//        // object construction must be done this way.
//        // https://github.com/moment/moment/issues/1423
//        c._isAMomentObject = true;
//        c._useUTC = c._isUTC = isUTC;
//        c._l = locale;
//        c._i = input;
//        c._f = format;
//        c._strict = strict;
//
//        return createFromConfig(c);
//    }
//
//    function createLocal(input, format, locale, strict) {
//        return createLocalOrUTC(input, format, locale, strict, false);
//    }
//
//    var prototypeMin = deprecate(
//            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
//            function () {
//                var other = createLocal.apply(null, arguments);
//                if (this.isValid() && other.isValid()) {
//                    return other < this ? this : other;
//                } else {
//                    return createInvalid();
//                }
//            }
//        ),
//        prototypeMax = deprecate(
//            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
//            function () {
//                var other = createLocal.apply(null, arguments);
//                if (this.isValid() && other.isValid()) {
//                    return other > this ? this : other;
//                } else {
//                    return createInvalid();
//                }
//            }
//        );
//
//    // Pick a moment m from moments so that m[fn](other) is true for all
//    // other. This relies on the function fn to be transitive.
//    //
//    // moments should either be an array of moment objects or an array, whose
//    // first element is an array of moment objects.
//    function pickBy(fn, moments) {
//        var res, i;
//        if (moments.length === 1 && isArray(moments[0])) {
//            moments = moments[0];
//        }
//        if (!moments.length) {
//            return createLocal();
//        }
//        res = moments[0];
//        for (i = 1; i < moments.length; ++i) {
//            if (!moments[i].isValid() || moments[i][fn](res)) {
//                res = moments[i];
//            }
//        }
//        return res;
//    }
//
//    // TODO: Use [].sort instead?
//    function min() {
//        var args = [].slice.call(arguments, 0);
//
//        return pickBy('isBefore', args);
//    }
//
//    function max() {
//        var args = [].slice.call(arguments, 0);
//
//        return pickBy('isAfter', args);
//    }
//
//    var now = function () {
//        return Date.now ? Date.now() : +new Date();
//    };
//
//    var ordering = [
//        'year',
//        'quarter',
//        'month',
//        'week',
//        'day',
//        'hour',
//        'minute',
//        'second',
//        'millisecond',
//    ];
//
//    function isDurationValid(m) {
//        var key,
//            unitHasDecimal = false,
//            i;
//        for (key in m) {
//            if (
//                hasOwnProp(m, key) &&
//                !(
//                    indexOf.call(ordering, key) !== -1 &&
//                    (m[key] == null || !isNaN(m[key]))
//                )
//            ) {
//                return false;
//            }
//        }
//
//        for (i = 0; i < ordering.length; ++i) {
//            if (m[ordering[i]]) {
//                if (unitHasDecimal) {
//                    return false; // only allow non-integers for smallest unit
//                }
//                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
//                    unitHasDecimal = true;
//                }
//            }
//        }
//
//        return true;
//    }
//
//    function isValid$1() {
//        return this._isValid;
//    }
//
//    function createInvalid$1() {
//        return createDuration(NaN);
//    }
//
//    function Duration(duration) {
//        var normalizedInput = normalizeObjectUnits(duration),
//            years = normalizedInput.year || 0,
//            quarters = normalizedInput.quarter || 0,
//            months = normalizedInput.month || 0,
//            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
//            days = normalizedInput.day || 0,
//            hours = normalizedInput.hour || 0,
//            minutes = normalizedInput.minute || 0,
//            seconds = normalizedInput.second || 0,
//            milliseconds = normalizedInput.millisecond || 0;
//
//        this._isValid = isDurationValid(normalizedInput);
//
//        // representation for dateAddRemove
//        this._milliseconds =
//            +milliseconds +
//            seconds * 1e3 + // 1000
//            minutes * 6e4 + // 1000 * 60
//            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
//        // Because of dateAddRemove treats 24 hours as different from a
//        // day when working around DST, we need to store them separately
//        this._days = +days + weeks * 7;
//        // It is impossible to translate months into days without knowing
//        // which months you are are talking about, so we have to store
//        // it separately.
//        this._months = +months + quarters * 3 + years * 12;
//
//        this._data = {};
//
//        this._locale = getLocale();
//
//        this._bubble();
//    }
//
//    function isDuration(obj) {
//        return obj instanceof Duration;
//    }
//
//    function absRound(number) {
//        if (number < 0) {
//            return Math.round(-1 * number) * -1;
//        } else {
//            return Math.round(number);
//        }
//    }
//
//    // compare two arrays, return the number of differences
//    function compareArrays(array1, array2, dontConvert) {
//        var len = Math.min(array1.length, array2.length),
//            lengthDiff = Math.abs(array1.length - array2.length),
//            diffs = 0,
//            i;
//        for (i = 0; i < len; i++) {
//            if (
//                (dontConvert && array1[i] !== array2[i]) ||
//                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
//            ) {
//                diffs++;
//            }
//        }
//        return diffs + lengthDiff;
//    }
//
//    // FORMATTING
//
//    function offset(token, separator) {
//        addFormatToken(token, 0, 0, function () {
//            var offset = this.utcOffset(),
//                sign = '+';
//            if (offset < 0) {
//                offset = -offset;
//                sign = '-';
//            }
//            return (
//                sign +
//                zeroFill(~~(offset / 60), 2) +
//                separator +
//                zeroFill(~~offset % 60, 2)
//            );
//        });
//    }
//
//    offset('Z', ':');
//    offset('ZZ', '');
//
//    // PARSING
//
//    addRegexToken('Z', matchShortOffset);
//    addRegexToken('ZZ', matchShortOffset);
//    addParseToken(['Z', 'ZZ'], function (input, array, config) {
//        config._useUTC = true;
//        config._tzm = offsetFromString(matchShortOffset, input);
//    });
//
//    // HELPERS
//
//    // timezone chunker
//    // '+10:00' > ['10',  '00']
//    // '-1530'  > ['-15', '30']
//    var chunkOffset = /([\+\-]|\d\d)/gi;
//
//    function offsetFromString(matcher, string) {
//        var matches = (string || '').match(matcher),
//            chunk,
//            parts,
//            minutes;
//
//        if (matches === null) {
//            return null;
//        }
//
//        chunk = matches[matches.length - 1] || [];
//        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
//        minutes = +(parts[1] * 60) + toInt(parts[2]);
//
//        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
//    }
//
//    // Return a moment from input, that is local/utc/zone equivalent to model.
//    function cloneWithOffset(input, model) {
//        var res, diff;
//        if (model._isUTC) {
//            res = model.clone();
//            diff =
//                (isMoment(input) || isDate(input)
//                    ? input.valueOf()
//                    : createLocal(input).valueOf()) - res.valueOf();
//            // Use low-level api, because this fn is low-level api.
//            res._d.setTime(res._d.valueOf() + diff);
//            hooks.updateOffset(res, false);
//            return res;
//        } else {
//            return createLocal(input).local();
//        }
//    }
//
//    function getDateOffset(m) {
//        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
//        // https://github.com/moment/moment/pull/1871
//        return -Math.round(m._d.getTimezoneOffset());
//    }
//
//    // HOOKS
//
//    // This function will be called whenever a moment is mutated.
//    // It is intended to keep the offset in sync with the timezone.
//    hooks.updateOffset = function () {};
//
//    // MOMENTS
//
//    // keepLocalTime = true means only change the timezone, without
//    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
//    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
//    // +0200, so we adjust the time as needed, to be valid.
//    //
//    // Keeping the time actually adds/subtracts (one hour)
//    // from the actual represented time. That is why we call updateOffset
//    // a second time. In case it wants us to change the offset again
//    // _changeInProgress == true case, then we have to adjust, because
//    // there is no such time in the given timezone.
//    function getSetOffset(input, keepLocalTime, keepMinutes) {
//        var offset = this._offset || 0,
//            localAdjust;
//        if (!this.isValid()) {
//            return input != null ? this : NaN;
//        }
//        if (input != null) {
//            if (typeof input === 'string') {
//                input = offsetFromString(matchShortOffset, input);
//                if (input === null) {
//                    return this;
//                }
//            } else if (Math.abs(input) < 16 && !keepMinutes) {
//                input = input * 60;
//            }
//            if (!this._isUTC && keepLocalTime) {
//                localAdjust = getDateOffset(this);
//            }
//            this._offset = input;
//            this._isUTC = true;
//            if (localAdjust != null) {
//                this.add(localAdjust, 'm');
//            }
//            if (offset !== input) {
//                if (!keepLocalTime || this._changeInProgress) {
//                    addSubtract(
//                        this,
//                        createDuration(input - offset, 'm'),
//                        1,
//                        false
//                    );
//                } else if (!this._changeInProgress) {
//                    this._changeInProgress = true;
//                    hooks.updateOffset(this, true);
//                    this._changeInProgress = null;
//                }
//            }
//            return this;
//        } else {
//            return this._isUTC ? offset : getDateOffset(this);
//        }
//    }
//
//    function getSetZone(input, keepLocalTime) {
//        if (input != null) {
//            if (typeof input !== 'string') {
//                input = -input;
//            }
//
//            this.utcOffset(input, keepLocalTime);
//
//            return this;
//        } else {
//            return -this.utcOffset();
//        }
//    }
//
//    function setOffsetToUTC(keepLocalTime) {
//        return this.utcOffset(0, keepLocalTime);
//    }
//
//    function setOffsetToLocal(keepLocalTime) {
//        if (this._isUTC) {
//            this.utcOffset(0, keepLocalTime);
//            this._isUTC = false;
//
//            if (keepLocalTime) {
//                this.subtract(getDateOffset(this), 'm');
//            }
//        }
//        return this;
//    }
//
//    function setOffsetToParsedOffset() {
//        if (this._tzm != null) {
//            this.utcOffset(this._tzm, false, true);
//        } else if (typeof this._i === 'string') {
//            var tZone = offsetFromString(matchOffset, this._i);
//            if (tZone != null) {
//                this.utcOffset(tZone);
//            } else {
//                this.utcOffset(0, true);
//            }
//        }
//        return this;
//    }
//
//    function hasAlignedHourOffset(input) {
//        if (!this.isValid()) {
//            return false;
//        }
//        input = input ? createLocal(input).utcOffset() : 0;
//
//        return (this.utcOffset() - input) % 60 === 0;
//    }
//
//    function isDaylightSavingTime() {
//        return (
//            this.utcOffset() > this.clone().month(0).utcOffset() ||
//            this.utcOffset() > this.clone().month(5).utcOffset()
//        );
//    }
//
//    function isDaylightSavingTimeShifted() {
//        if (!isUndefined(this._isDSTShifted)) {
//            return this._isDSTShifted;
//        }
//
//        var c = {},
//            other;
//
//        copyConfig(c, this);
//        c = prepareConfig(c);
//
//        if (c._a) {
//            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
//            this._isDSTShifted =
//                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
//        } else {
//            this._isDSTShifted = false;
//        }
//
//        return this._isDSTShifted;
//    }
//
//    function isLocal() {
//        return this.isValid() ? !this._isUTC : false;
//    }
//
//    function isUtcOffset() {
//        return this.isValid() ? this._isUTC : false;
//    }
//
//    function isUtc() {
//        return this.isValid() ? this._isUTC && this._offset === 0 : false;
//    }
//
//    // ASP.NET json date format regex
//    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
//        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
//        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
//        // and further modified to allow for strings containing both week and day
//        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
//
//    function createDuration(input, key) {
//        var duration = input,
//            // matching against regexp is expensive, do it on demand
//            match = null,
//            sign,
//            ret,
//            diffRes;
//
//        if (isDuration(input)) {
//            duration = {
//                ms: input._milliseconds,
//                d: input._days,
//                M: input._months,
//            };
//        } else if (isNumber(input) || !isNaN(+input)) {
//            duration = {};
//            if (key) {
//                duration[key] = +input;
//            } else {
//                duration.milliseconds = +input;
//            }
//        } else if ((match = aspNetRegex.exec(input))) {
//            sign = match[1] === '-' ? -1 : 1;
//            duration = {
//                y: 0,
//                d: toInt(match[DATE]) * sign,
//                h: toInt(match[HOUR]) * sign,
//                m: toInt(match[MINUTE]) * sign,
//                s: toInt(match[SECOND]) * sign,
//                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
//            };
//        } else if ((match = isoRegex.exec(input))) {
//            sign = match[1] === '-' ? -1 : 1;
//            duration = {
//                y: parseIso(match[2], sign),
//                M: parseIso(match[3], sign),
//                w: parseIso(match[4], sign),
//                d: parseIso(match[5], sign),
//                h: parseIso(match[6], sign),
//                m: parseIso(match[7], sign),
//                s: parseIso(match[8], sign),
//            };
//        } else if (duration == null) {
//            // checks for null or undefined
//            duration = {};
//        } else if (
//            typeof duration === 'object' &&
//            ('from' in duration || 'to' in duration)
//        ) {
//            diffRes = momentsDifference(
//                createLocal(duration.from),
//                createLocal(duration.to)
//            );
//
//            duration = {};
//            duration.ms = diffRes.milliseconds;
//            duration.M = diffRes.months;
//        }
//
//        ret = new Duration(duration);
//
//        if (isDuration(input) && hasOwnProp(input, '_locale')) {
//            ret._locale = input._locale;
//        }
//
//        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
//            ret._isValid = input._isValid;
//        }
//
//        return ret;
//    }
//
//    createDuration.fn = Duration.prototype;
//    createDuration.invalid = createInvalid$1;
//
//    function parseIso(inp, sign) {
//        // We'd normally use ~~inp for this, but unfortunately it also
//        // converts floats to ints.
//        // inp may be undefined, so careful calling replace on it.
//        var res = inp && parseFloat(inp.replace(',', '.'));
//        // apply sign while we're at it
//        return (isNaN(res) ? 0 : res) * sign;
//    }
//
//    function positiveMomentsDifference(base, other) {
//        var res = {};
//
//        res.months =
//            other.month() - base.month() + (other.year() - base.year()) * 12;
//        if (base.clone().add(res.months, 'M').isAfter(other)) {
//            --res.months;
//        }
//
//        res.milliseconds = +other - +base.clone().add(res.months, 'M');
//
//        return res;
//    }
//
//    function momentsDifference(base, other) {
//        var res;
//        if (!(base.isValid() && other.isValid())) {
//            return { milliseconds: 0, months: 0 };
//        }
//
//        other = cloneWithOffset(other, base);
//        if (base.isBefore(other)) {
//            res = positiveMomentsDifference(base, other);
//        } else {
//            res = positiveMomentsDifference(other, base);
//            res.milliseconds = -res.milliseconds;
//            res.months = -res.months;
//        }
//
//        return res;
//    }
//
//    // TODO: remove 'name' arg after deprecation is removed
//    function createAdder(direction, name) {
//        return function (val, period) {
//            var dur, tmp;
//            //invert the arguments, but complain about it
//            if (period !== null && !isNaN(+period)) {
//                deprecateSimple(
//                    name,
//                    'moment().' +
//                        name +
//                        '(period, number) is deprecated. Please use moment().' +
//                        name +
//                        '(number, period). ' +
//                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
//                );
//                tmp = val;
//                val = period;
//                period = tmp;
//            }
//
//            dur = createDuration(val, period);
//            addSubtract(this, dur, direction);
//            return this;
//        };
//    }
//
//    function addSubtract(mom, duration, isAdding, updateOffset) {
//        var milliseconds = duration._milliseconds,
//            days = absRound(duration._days),
//            months = absRound(duration._months);
//
//        if (!mom.isValid()) {
//            // No op
//            return;
//        }
//
//        updateOffset = updateOffset == null ? true : updateOffset;
//
//        if (months) {
//            setMonth(mom, get(mom, 'Month') + months * isAdding);
//        }
//        if (days) {
//            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
//        }
//        if (milliseconds) {
//            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
//        }
//        if (updateOffset) {
//            hooks.updateOffset(mom, days || months);
//        }
//    }
//
//    var add = createAdder(1, 'add'),
//        subtract = createAdder(-1, 'subtract');
//
//    function isString(input) {
//        return typeof input === 'string' || input instanceof String;
//    }
//
//    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
//    function isMomentInput(input) {
//        return (
//            isMoment(input) ||
//            isDate(input) ||
//            isString(input) ||
//            isNumber(input) ||
//            isNumberOrStringArray(input) ||
//            isMomentInputObject(input) ||
//            input === null ||
//            input === undefined
//        );
//    }
//
//    function isMomentInputObject(input) {
//        var objectTest = isObject(input) && !isObjectEmpty(input),
//            propertyTest = false,
//            properties = [
//                'years',
//                'year',
//                'y',
//                'months',
//                'month',
//                'M',
//                'days',
//                'day',
//                'd',
//                'dates',
//                'date',
//                'D',
//                'hours',
//                'hour',
//                'h',
//                'minutes',
//                'minute',
//                'm',
//                'seconds',
//                'second',
//                's',
//                'milliseconds',
//                'millisecond',
//                'ms',
//            ],
//            i,
//            property;
//
//        for (i = 0; i < properties.length; i += 1) {
//            property = properties[i];
//            propertyTest = propertyTest || hasOwnProp(input, property);
//        }
//
//        return objectTest && propertyTest;
//    }
//
//    function isNumberOrStringArray(input) {
//        var arrayTest = isArray(input),
//            dataTypeTest = false;
//        if (arrayTest) {
//            dataTypeTest =
//                input.filter(function (item) {
//                    return !isNumber(item) && isString(input);
//                }).length === 0;
//        }
//        return arrayTest && dataTypeTest;
//    }
//
//    function isCalendarSpec(input) {
//        var objectTest = isObject(input) && !isObjectEmpty(input),
//            propertyTest = false,
//            properties = [
//                'sameDay',
//                'nextDay',
//                'lastDay',
//                'nextWeek',
//                'lastWeek',
//                'sameElse',
//            ],
//            i,
//            property;
//
//        for (i = 0; i < properties.length; i += 1) {
//            property = properties[i];
//            propertyTest = propertyTest || hasOwnProp(input, property);
//        }
//
//        return objectTest && propertyTest;
//    }
//
//    function getCalendarFormat(myMoment, now) {
//        var diff = myMoment.diff(now, 'days', true);
//        return diff < -6
//            ? 'sameElse'
//            : diff < -1
//            ? 'lastWeek'
//            : diff < 0
//            ? 'lastDay'
//            : diff < 1
//            ? 'sameDay'
//            : diff < 2
//            ? 'nextDay'
//            : diff < 7
//            ? 'nextWeek'
//            : 'sameElse';
//    }
//
//    function calendar$1(time, formats) {
//        // Support for single parameter, formats only overload to the calendar function
//        if (arguments.length === 1) {
//            if (isMomentInput(arguments[0])) {
//                time = arguments[0];
//                formats = undefined;
//            } else if (isCalendarSpec(arguments[0])) {
//                formats = arguments[0];
//                time = undefined;
//            }
//        }
//        // We want to compare the start of today, vs this.
//        // Getting start-of-today depends on whether we're local/utc/offset or not.
//        var now = time || createLocal(),
//            sod = cloneWithOffset(now, this).startOf('day'),
//            format = hooks.calendarFormat(this, sod) || 'sameElse',
//            output =
//                formats &&
//                (isFunction(formats[format])
//                    ? formats[format].call(this, now)
//                    : formats[format]);
//
//        return this.format(
//            output || this.localeData().calendar(format, this, createLocal(now))
//        );
//    }
//
//    function clone() {
//        return new Moment(this);
//    }
//
//    function isAfter(input, units) {
//        var localInput = isMoment(input) ? input : createLocal(input);
//        if (!(this.isValid() && localInput.isValid())) {
//            return false;
//        }
//        units = normalizeUnits(units) || 'millisecond';
//        if (units === 'millisecond') {
//            return this.valueOf() > localInput.valueOf();
//        } else {
//            return localInput.valueOf() < this.clone().startOf(units).valueOf();
//        }
//    }
//
//    function isBefore(input, units) {
//        var localInput = isMoment(input) ? input : createLocal(input);
//        if (!(this.isValid() && localInput.isValid())) {
//            return false;
//        }
//        units = normalizeUnits(units) || 'millisecond';
//        if (units === 'millisecond') {
//            return this.valueOf() < localInput.valueOf();
//        } else {
//            return this.clone().endOf(units).valueOf() < localInput.valueOf();
//        }
//    }
//
//    function isBetween(from, to, units, inclusivity) {
//        var localFrom = isMoment(from) ? from : createLocal(from),
//            localTo = isMoment(to) ? to : createLocal(to);
//        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
//            return false;
//        }
//        inclusivity = inclusivity || '()';
//        return (
//            (inclusivity[0] === '('
//                ? this.isAfter(localFrom, units)
//                : !this.isBefore(localFrom, units)) &&
//            (inclusivity[1] === ')'
//                ? this.isBefore(localTo, units)
//                : !this.isAfter(localTo, units))
//        );
//    }
//
//    function isSame(input, units) {
//        var localInput = isMoment(input) ? input : createLocal(input),
//            inputMs;
//        if (!(this.isValid() && localInput.isValid())) {
//            return false;
//        }
//        units = normalizeUnits(units) || 'millisecond';
//        if (units === 'millisecond') {
//            return this.valueOf() === localInput.valueOf();
//        } else {
//            inputMs = localInput.valueOf();
//            return (
//                this.clone().startOf(units).valueOf() <= inputMs &&
//                inputMs <= this.clone().endOf(units).valueOf()
//            );
//        }
//    }
//
//    function isSameOrAfter(input, units) {
//        return this.isSame(input, units) || this.isAfter(input, units);
//    }
//
//    function isSameOrBefore(input, units) {
//        return this.isSame(input, units) || this.isBefore(input, units);
//    }
//
//    function diff(input, units, asFloat) {
//        var that, zoneDelta, output;
//
//        if (!this.isValid()) {
//            return NaN;
//        }
//
//        that = cloneWithOffset(input, this);
//
//        if (!that.isValid()) {
//            return NaN;
//        }
//
//        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
//
//        units = normalizeUnits(units);
//
//        switch (units) {
//            case 'year':
//                output = monthDiff(this, that) / 12;
//                break;
//            case 'month':
//                output = monthDiff(this, that);
//                break;
//            case 'quarter':
//                output = monthDiff(this, that) / 3;
//                break;
//            case 'second':
//                output = (this - that) / 1e3;
//                break; // 1000
//            case 'minute':
//                output = (this - that) / 6e4;
//                break; // 1000 * 60
//            case 'hour':
//                output = (this - that) / 36e5;
//                break; // 1000 * 60 * 60
//            case 'day':
//                output = (this - that - zoneDelta) / 864e5;
//                break; // 1000 * 60 * 60 * 24, negate dst
//            case 'week':
//                output = (this - that - zoneDelta) / 6048e5;
//                break; // 1000 * 60 * 60 * 24 * 7, negate dst
//            default:
//                output = this - that;
//        }
//
//        return asFloat ? output : absFloor(output);
//    }
//
//    function monthDiff(a, b) {
//        if (a.date() < b.date()) {
//            // end-of-month calculations work correct when the start month has more
//            // days than the end month.
//            return -monthDiff(b, a);
//        }
//        // difference in months
//        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
//            // b is in (anchor - 1 month, anchor + 1 month)
//            anchor = a.clone().add(wholeMonthDiff, 'months'),
//            anchor2,
//            adjust;
//
//        if (b - anchor < 0) {
//            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
//            // linear across the month
//            adjust = (b - anchor) / (anchor - anchor2);
//        } else {
//            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
//            // linear across the month
//            adjust = (b - anchor) / (anchor2 - anchor);
//        }
//
//        //check for negative zero, return zero if negative zero
//        return -(wholeMonthDiff + adjust) || 0;
//    }
//
//    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
//    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
//
//    function toString() {
//        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
//    }
//
//    function toISOString(keepOffset) {
//        if (!this.isValid()) {
//            return null;
//        }
//        var utc = keepOffset !== true,
//            m = utc ? this.clone().utc() : this;
//        if (m.year() < 0 || m.year() > 9999) {
//            return formatMoment(
//                m,
//                utc
//                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
//                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
//            );
//        }
//        if (isFunction(Date.prototype.toISOString)) {
//            // native implementation is ~50x faster, use it when we can
//            if (utc) {
//                return this.toDate().toISOString();
//            } else {
//                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
//                    .toISOString()
//                    .replace('Z', formatMoment(m, 'Z'));
//            }
//        }
//        return formatMoment(
//            m,
//            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
//        );
//    }
//
//    /**
//     * Return a human readable representation of a moment that can
//     * also be evaluated to get a new moment which is the same
//     *
//     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
//     */
//    function inspect() {
//        if (!this.isValid()) {
//            return 'moment.invalid(/* ' + this._i + ' */)';
//        }
//        var func = 'moment',
//            zone = '',
//            prefix,
//            year,
//            datetime,
//            suffix;
//        if (!this.isLocal()) {
//            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
//            zone = 'Z';
//        }
//        prefix = '[' + func + '("]';
//        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
//        datetime = '-MM-DD[T]HH:mm:ss.SSS';
//        suffix = zone + '[")]';
//
//        return this.format(prefix + year + datetime + suffix);
//    }
//
//    function format(inputString) {
//        if (!inputString) {
//            inputString = this.isUtc()
//                ? hooks.defaultFormatUtc
//                : hooks.defaultFormat;
//        }
//        var output = formatMoment(this, inputString);
//        return this.localeData().postformat(output);
//    }
//
//    function from(time, withoutSuffix) {
//        if (
//            this.isValid() &&
//            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
//        ) {
//            return createDuration({ to: this, from: time })
//                .locale(this.locale())
//                .humanize(!withoutSuffix);
//        } else {
//            return this.localeData().invalidDate();
//        }
//    }
//
//    function fromNow(withoutSuffix) {
//        return this.from(createLocal(), withoutSuffix);
//    }
//
//    function to(time, withoutSuffix) {
//        if (
//            this.isValid() &&
//            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
//        ) {
//            return createDuration({ from: this, to: time })
//                .locale(this.locale())
//                .humanize(!withoutSuffix);
//        } else {
//            return this.localeData().invalidDate();
//        }
//    }
//
//    function toNow(withoutSuffix) {
//        return this.to(createLocal(), withoutSuffix);
//    }
//
//    // If passed a locale key, it will set the locale for this
//    // instance.  Otherwise, it will return the locale configuration
//    // variables for this instance.
//    function locale(key) {
//        var newLocaleData;
//
//        if (key === undefined) {
//            return this._locale._abbr;
//        } else {
//            newLocaleData = getLocale(key);
//            if (newLocaleData != null) {
//                this._locale = newLocaleData;
//            }
//            return this;
//        }
//    }
//
//    var lang = deprecate(
//        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
//        function (key) {
//            if (key === undefined) {
//                return this.localeData();
//            } else {
//                return this.locale(key);
//            }
//        }
//    );
//
//    function localeData() {
//        return this._locale;
//    }
//
//    var MS_PER_SECOND = 1000,
//        MS_PER_MINUTE = 60 * MS_PER_SECOND,
//        MS_PER_HOUR = 60 * MS_PER_MINUTE,
//        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
//
//    // actual modulo - handles negative numbers (for dates before 1970):
//    function mod$1(dividend, divisor) {
//        return ((dividend % divisor) + divisor) % divisor;
//    }
//
//    function localStartOfDate(y, m, d) {
//        // the date constructor remaps years 0-99 to 1900-1999
//        if (y < 100 && y >= 0) {
//            // preserve leap years using a full 400 year cycle, then reset
//            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
//        } else {
//            return new Date(y, m, d).valueOf();
//        }
//    }
//
//    function utcStartOfDate(y, m, d) {
//        // Date.UTC remaps years 0-99 to 1900-1999
//        if (y < 100 && y >= 0) {
//            // preserve leap years using a full 400 year cycle, then reset
//            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
//        } else {
//            return Date.UTC(y, m, d);
//        }
//    }
//
//    function startOf(units) {
//        var time, startOfDate;
//        units = normalizeUnits(units);
//        if (units === undefined || units === 'millisecond' || !this.isValid()) {
//            return this;
//        }
//
//        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
//
//        switch (units) {
//            case 'year':
//                time = startOfDate(this.year(), 0, 1);
//                break;
//            case 'quarter':
//                time = startOfDate(
//                    this.year(),
//                    this.month() - (this.month() % 3),
//                    1
//                );
//                break;
//            case 'month':
//                time = startOfDate(this.year(), this.month(), 1);
//                break;
//            case 'week':
//                time = startOfDate(
//                    this.year(),
//                    this.month(),
//                    this.date() - this.weekday()
//                );
//                break;
//            case 'isoWeek':
//                time = startOfDate(
//                    this.year(),
//                    this.month(),
//                    this.date() - (this.isoWeekday() - 1)
//                );
//                break;
//            case 'day':
//            case 'date':
//                time = startOfDate(this.year(), this.month(), this.date());
//                break;
//            case 'hour':
//                time = this._d.valueOf();
//                time -= mod$1(
//                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
//                    MS_PER_HOUR
//                );
//                break;
//            case 'minute':
//                time = this._d.valueOf();
//                time -= mod$1(time, MS_PER_MINUTE);
//                break;
//            case 'second':
//                time = this._d.valueOf();
//                time -= mod$1(time, MS_PER_SECOND);
//                break;
//        }
//
//        this._d.setTime(time);
//        hooks.updateOffset(this, true);
//        return this;
//    }
//
//    function endOf(units) {
//        var time, startOfDate;
//        units = normalizeUnits(units);
//        if (units === undefined || units === 'millisecond' || !this.isValid()) {
//            return this;
//        }
//
//        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
//
//        switch (units) {
//            case 'year':
//                time = startOfDate(this.year() + 1, 0, 1) - 1;
//                break;
//            case 'quarter':
//                time =
//                    startOfDate(
//                        this.year(),
//                        this.month() - (this.month() % 3) + 3,
//                        1
//                    ) - 1;
//                break;
//            case 'month':
//                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
//                break;
//            case 'week':
//                time =
//                    startOfDate(
//                        this.year(),
//                        this.month(),
//                        this.date() - this.weekday() + 7
//                    ) - 1;
//                break;
//            case 'isoWeek':
//                time =
//                    startOfDate(
//                        this.year(),
//                        this.month(),
//                        this.date() - (this.isoWeekday() - 1) + 7
//                    ) - 1;
//                break;
//            case 'day':
//            case 'date':
//                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
//                break;
//            case 'hour':
//                time = this._d.valueOf();
//                time +=
//                    MS_PER_HOUR -
//                    mod$1(
//                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
//                        MS_PER_HOUR
//                    ) -
//                    1;
//                break;
//            case 'minute':
//                time = this._d.valueOf();
//                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
//                break;
//            case 'second':
//                time = this._d.valueOf();
//                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
//                break;
//        }
//
//        this._d.setTime(time);
//        hooks.updateOffset(this, true);
//        return this;
//    }
//
//    function valueOf() {
//        return this._d.valueOf() - (this._offset || 0) * 60000;
//    }
//
//    function unix() {
//        return Math.floor(this.valueOf() / 1000);
//    }
//
//    function toDate() {
//        return new Date(this.valueOf());
//    }
//
//    function toArray() {
//        var m = this;
//        return [
//            m.year(),
//            m.month(),
//            m.date(),
//            m.hour(),
//            m.minute(),
//            m.second(),
//            m.millisecond(),
//        ];
//    }
//
//    function toObject() {
//        var m = this;
//        return {
//            years: m.year(),
//            months: m.month(),
//            date: m.date(),
//            hours: m.hours(),
//            minutes: m.minutes(),
//            seconds: m.seconds(),
//            milliseconds: m.milliseconds(),
//        };
//    }
//
//    function toJSON() {
//        // new Date(NaN).toJSON() === null
//        return this.isValid() ? this.toISOString() : null;
//    }
//
//    function isValid$2() {
//        return isValid(this);
//    }
//
//    function parsingFlags() {
//        return extend({}, getParsingFlags(this));
//    }
//
//    function invalidAt() {
//        return getParsingFlags(this).overflow;
//    }
//
//    function creationData() {
//        return {
//            input: this._i,
//            format: this._f,
//            locale: this._locale,
//            isUTC: this._isUTC,
//            strict: this._strict,
//        };
//    }
//
//    addFormatToken('N', 0, 0, 'eraAbbr');
//    addFormatToken('NN', 0, 0, 'eraAbbr');
//    addFormatToken('NNN', 0, 0, 'eraAbbr');
//    addFormatToken('NNNN', 0, 0, 'eraName');
//    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
//
//    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
//    addFormatToken('y', ['yy', 2], 0, 'eraYear');
//    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
//    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
//
//    addRegexToken('N', matchEraAbbr);
//    addRegexToken('NN', matchEraAbbr);
//    addRegexToken('NNN', matchEraAbbr);
//    addRegexToken('NNNN', matchEraName);
//    addRegexToken('NNNNN', matchEraNarrow);
//
//    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
//        input,
//        array,
//        config,
//        token
//    ) {
//        var era = config._locale.erasParse(input, token, config._strict);
//        if (era) {
//            getParsingFlags(config).era = era;
//        } else {
//            getParsingFlags(config).invalidEra = input;
//        }
//    });
//
//    addRegexToken('y', matchUnsigned);
//    addRegexToken('yy', matchUnsigned);
//    addRegexToken('yyy', matchUnsigned);
//    addRegexToken('yyyy', matchUnsigned);
//    addRegexToken('yo', matchEraYearOrdinal);
//
//    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
//    addParseToken(['yo'], function (input, array, config, token) {
//        var match;
//        if (config._locale._eraYearOrdinalRegex) {
//            match = input.match(config._locale._eraYearOrdinalRegex);
//        }
//
//        if (config._locale.eraYearOrdinalParse) {
//            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
//        } else {
//            array[YEAR] = parseInt(input, 10);
//        }
//    });
//
//    function localeEras(m, format) {
//        var i,
//            l,
//            date,
//            eras = this._eras || getLocale('en')._eras;
//        for (i = 0, l = eras.length; i < l; ++i) {
//            switch (typeof eras[i].since) {
//                case 'string':
//                    // truncate time
//                    date = hooks(eras[i].since).startOf('day');
//                    eras[i].since = date.valueOf();
//                    break;
//            }
//
//            switch (typeof eras[i].until) {
//                case 'undefined':
//                    eras[i].until = +Infinity;
//                    break;
//                case 'string':
//                    // truncate time
//                    date = hooks(eras[i].until).startOf('day').valueOf();
//                    eras[i].until = date.valueOf();
//                    break;
//            }
//        }
//        return eras;
//    }
//
//    function localeErasParse(eraName, format, strict) {
//        var i,
//            l,
//            eras = this.eras(),
//            name,
//            abbr,
//            narrow;
//        eraName = eraName.toUpperCase();
//
//        for (i = 0, l = eras.length; i < l; ++i) {
//            name = eras[i].name.toUpperCase();
//            abbr = eras[i].abbr.toUpperCase();
//            narrow = eras[i].narrow.toUpperCase();
//
//            if (strict) {
//                switch (format) {
//                    case 'N':
//                    case 'NN':
//                    case 'NNN':
//                        if (abbr === eraName) {
//                            return eras[i];
//                        }
//                        break;
//
//                    case 'NNNN':
//                        if (name === eraName) {
//                            return eras[i];
//                        }
//                        break;
//
//                    case 'NNNNN':
//                        if (narrow === eraName) {
//                            return eras[i];
//                        }
//                        break;
//                }
//            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
//                return eras[i];
//            }
//        }
//    }
//
//    function localeErasConvertYear(era, year) {
//        var dir = era.since <= era.until ? +1 : -1;
//        if (year === undefined) {
//            return hooks(era.since).year();
//        } else {
//            return hooks(era.since).year() + (year - era.offset) * dir;
//        }
//    }
//
//    function getEraName() {
//        var i,
//            l,
//            val,
//            eras = this.localeData().eras();
//        for (i = 0, l = eras.length; i < l; ++i) {
//            // truncate time
//            val = this.startOf('day').valueOf();
//
//            if (eras[i].since <= val && val <= eras[i].until) {
//                return eras[i].name;
//            }
//            if (eras[i].until <= val && val <= eras[i].since) {
//                return eras[i].name;
//            }
//        }
//
//        return '';
//    }
//
//    function getEraNarrow() {
//        var i,
//            l,
//            val,
//            eras = this.localeData().eras();
//        for (i = 0, l = eras.length; i < l; ++i) {
//            // truncate time
//            val = this.startOf('day').valueOf();
//
//            if (eras[i].since <= val && val <= eras[i].until) {
//                return eras[i].narrow;
//            }
//            if (eras[i].until <= val && val <= eras[i].since) {
//                return eras[i].narrow;
//            }
//        }
//
//        return '';
//    }
//
//    function getEraAbbr() {
//        var i,
//            l,
//            val,
//            eras = this.localeData().eras();
//        for (i = 0, l = eras.length; i < l; ++i) {
//            // truncate time
//            val = this.startOf('day').valueOf();
//
//            if (eras[i].since <= val && val <= eras[i].until) {
//                return eras[i].abbr;
//            }
//            if (eras[i].until <= val && val <= eras[i].since) {
//                return eras[i].abbr;
//            }
//        }
//
//        return '';
//    }
//
//    function getEraYear() {
//        var i,
//            l,
//            dir,
//            val,
//            eras = this.localeData().eras();
//        for (i = 0, l = eras.length; i < l; ++i) {
//            dir = eras[i].since <= eras[i].until ? +1 : -1;
//
//            // truncate time
//            val = this.startOf('day').valueOf();
//
//            if (
//                (eras[i].since <= val && val <= eras[i].until) ||
//                (eras[i].until <= val && val <= eras[i].since)
//            ) {
//                return (
//                    (this.year() - hooks(eras[i].since).year()) * dir +
//                    eras[i].offset
//                );
//            }
//        }
//
//        return this.year();
//    }
//
//    function erasNameRegex(isStrict) {
//        if (!hasOwnProp(this, '_erasNameRegex')) {
//            computeErasParse.call(this);
//        }
//        return isStrict ? this._erasNameRegex : this._erasRegex;
//    }
//
//    function erasAbbrRegex(isStrict) {
//        if (!hasOwnProp(this, '_erasAbbrRegex')) {
//            computeErasParse.call(this);
//        }
//        return isStrict ? this._erasAbbrRegex : this._erasRegex;
//    }
//
//    function erasNarrowRegex(isStrict) {
//        if (!hasOwnProp(this, '_erasNarrowRegex')) {
//            computeErasParse.call(this);
//        }
//        return isStrict ? this._erasNarrowRegex : this._erasRegex;
//    }
//
//    function matchEraAbbr(isStrict, locale) {
//        return locale.erasAbbrRegex(isStrict);
//    }
//
//    function matchEraName(isStrict, locale) {
//        return locale.erasNameRegex(isStrict);
//    }
//
//    function matchEraNarrow(isStrict, locale) {
//        return locale.erasNarrowRegex(isStrict);
//    }
//
//    function matchEraYearOrdinal(isStrict, locale) {
//        return locale._eraYearOrdinalRegex || matchUnsigned;
//    }
//
//    function computeErasParse() {
//        var abbrPieces = [],
//            namePieces = [],
//            narrowPieces = [],
//            mixedPieces = [],
//            i,
//            l,
//            eras = this.eras();
//
//        for (i = 0, l = eras.length; i < l; ++i) {
//            namePieces.push(regexEscape(eras[i].name));
//            abbrPieces.push(regexEscape(eras[i].abbr));
//            narrowPieces.push(regexEscape(eras[i].narrow));
//
//            mixedPieces.push(regexEscape(eras[i].name));
//            mixedPieces.push(regexEscape(eras[i].abbr));
//            mixedPieces.push(regexEscape(eras[i].narrow));
//        }
//
//        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
//        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
//        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
//        this._erasNarrowRegex = new RegExp(
//            '^(' + narrowPieces.join('|') + ')',
//            'i'
//        );
//    }
//
//    // FORMATTING
//
//    addFormatToken(0, ['gg', 2], 0, function () {
//        return this.weekYear() % 100;
//    });
//
//    addFormatToken(0, ['GG', 2], 0, function () {
//        return this.isoWeekYear() % 100;
//    });
//
//    function addWeekYearFormatToken(token, getter) {
//        addFormatToken(0, [token, token.length], 0, getter);
//    }
//
//    addWeekYearFormatToken('gggg', 'weekYear');
//    addWeekYearFormatToken('ggggg', 'weekYear');
//    addWeekYearFormatToken('GGGG', 'isoWeekYear');
//    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
//
//    // ALIASES
//
//    addUnitAlias('weekYear', 'gg');
//    addUnitAlias('isoWeekYear', 'GG');
//
//    // PRIORITY
//
//    addUnitPriority('weekYear', 1);
//    addUnitPriority('isoWeekYear', 1);
//
//    // PARSING
//
//    addRegexToken('G', matchSigned);
//    addRegexToken('g', matchSigned);
//    addRegexToken('GG', match1to2, match2);
//    addRegexToken('gg', match1to2, match2);
//    addRegexToken('GGGG', match1to4, match4);
//    addRegexToken('gggg', match1to4, match4);
//    addRegexToken('GGGGG', match1to6, match6);
//    addRegexToken('ggggg', match1to6, match6);
//
//    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
//        input,
//        week,
//        config,
//        token
//    ) {
//        week[token.substr(0, 2)] = toInt(input);
//    });
//
//    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
//        week[token] = hooks.parseTwoDigitYear(input);
//    });
//
//    // MOMENTS
//
//    function getSetWeekYear(input) {
//        return getSetWeekYearHelper.call(
//            this,
//            input,
//            this.week(),
//            this.weekday(),
//            this.localeData()._week.dow,
//            this.localeData()._week.doy
//        );
//    }
//
//    function getSetISOWeekYear(input) {
//        return getSetWeekYearHelper.call(
//            this,
//            input,
//            this.isoWeek(),
//            this.isoWeekday(),
//            1,
//            4
//        );
//    }
//
//    function getISOWeeksInYear() {
//        return weeksInYear(this.year(), 1, 4);
//    }
//
//    function getISOWeeksInISOWeekYear() {
//        return weeksInYear(this.isoWeekYear(), 1, 4);
//    }
//
//    function getWeeksInYear() {
//        var weekInfo = this.localeData()._week;
//        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
//    }
//
//    function getWeeksInWeekYear() {
//        var weekInfo = this.localeData()._week;
//        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
//    }
//
//    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
//        var weeksTarget;
//        if (input == null) {
//            return weekOfYear(this, dow, doy).year;
//        } else {
//            weeksTarget = weeksInYear(input, dow, doy);
//            if (week > weeksTarget) {
//                week = weeksTarget;
//            }
//            return setWeekAll.call(this, input, week, weekday, dow, doy);
//        }
//    }
//
//    function setWeekAll(weekYear, week, weekday, dow, doy) {
//        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
//            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
//
//        this.year(date.getUTCFullYear());
//        this.month(date.getUTCMonth());
//        this.date(date.getUTCDate());
//        return this;
//    }
//
//    // FORMATTING
//
//    addFormatToken('Q', 0, 'Qo', 'quarter');
//
//    // ALIASES
//
//    addUnitAlias('quarter', 'Q');
//
//    // PRIORITY
//
//    addUnitPriority('quarter', 7);
//
//    // PARSING
//
//    addRegexToken('Q', match1);
//    addParseToken('Q', function (input, array) {
//        array[MONTH] = (toInt(input) - 1) * 3;
//    });
//
//    // MOMENTS
//
//    function getSetQuarter(input) {
//        return input == null
//            ? Math.ceil((this.month() + 1) / 3)
//            : this.month((input - 1) * 3 + (this.month() % 3));
//    }
//
//    // FORMATTING
//
//    addFormatToken('D', ['DD', 2], 'Do', 'date');
//
//    // ALIASES
//
//    addUnitAlias('date', 'D');
//
//    // PRIORITY
//    addUnitPriority('date', 9);
//
//    // PARSING
//
//    addRegexToken('D', match1to2);
//    addRegexToken('DD', match1to2, match2);
//    addRegexToken('Do', function (isStrict, locale) {
//        // TODO: Remove "ordinalParse" fallback in next major release.
//        return isStrict
//            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
//            : locale._dayOfMonthOrdinalParseLenient;
//    });
//
//    addParseToken(['D', 'DD'], DATE);
//    addParseToken('Do', function (input, array) {
//        array[DATE] = toInt(input.match(match1to2)[0]);
//    });
//
//    // MOMENTS
//
//    var getSetDayOfMonth = makeGetSet('Date', true);
//
//    // FORMATTING
//
//    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
//
//    // ALIASES
//
//    addUnitAlias('dayOfYear', 'DDD');
//
//    // PRIORITY
//    addUnitPriority('dayOfYear', 4);
//
//    // PARSING
//
//    addRegexToken('DDD', match1to3);
//    addRegexToken('DDDD', match3);
//    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
//        config._dayOfYear = toInt(input);
//    });
//
//    // HELPERS
//
//    // MOMENTS
//
//    function getSetDayOfYear(input) {
//        var dayOfYear =
//            Math.round(
//                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
//            ) + 1;
//        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
//    }
//
//    // FORMATTING
//
//    addFormatToken('m', ['mm', 2], 0, 'minute');
//
//    // ALIASES
//
//    addUnitAlias('minute', 'm');
//
//    // PRIORITY
//
//    addUnitPriority('minute', 14);
//
//    // PARSING
//
//    addRegexToken('m', match1to2);
//    addRegexToken('mm', match1to2, match2);
//    addParseToken(['m', 'mm'], MINUTE);
//
//    // MOMENTS
//
//    var getSetMinute = makeGetSet('Minutes', false);
//
//    // FORMATTING
//
//    addFormatToken('s', ['ss', 2], 0, 'second');
//
//    // ALIASES
//
//    addUnitAlias('second', 's');
//
//    // PRIORITY
//
//    addUnitPriority('second', 15);
//
//    // PARSING
//
//    addRegexToken('s', match1to2);
//    addRegexToken('ss', match1to2, match2);
//    addParseToken(['s', 'ss'], SECOND);
//
//    // MOMENTS
//
//    var getSetSecond = makeGetSet('Seconds', false);
//
//    // FORMATTING
//
//    addFormatToken('S', 0, 0, function () {
//        return ~~(this.millisecond() / 100);
//    });
//
//    addFormatToken(0, ['SS', 2], 0, function () {
//        return ~~(this.millisecond() / 10);
//    });
//
//    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
//    addFormatToken(0, ['SSSS', 4], 0, function () {
//        return this.millisecond() * 10;
//    });
//    addFormatToken(0, ['SSSSS', 5], 0, function () {
//        return this.millisecond() * 100;
//    });
//    addFormatToken(0, ['SSSSSS', 6], 0, function () {
//        return this.millisecond() * 1000;
//    });
//    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
//        return this.millisecond() * 10000;
//    });
//    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
//        return this.millisecond() * 100000;
//    });
//    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
//        return this.millisecond() * 1000000;
//    });
//
//    // ALIASES
//
//    addUnitAlias('millisecond', 'ms');
//
//    // PRIORITY
//
//    addUnitPriority('millisecond', 16);
//
//    // PARSING
//
//    addRegexToken('S', match1to3, match1);
//    addRegexToken('SS', match1to3, match2);
//    addRegexToken('SSS', match1to3, match3);
//
//    var token, getSetMillisecond;
//    for (token = 'SSSS'; token.length <= 9; token += 'S') {
//        addRegexToken(token, matchUnsigned);
//    }
//
//    function parseMs(input, array) {
//        array[MILLISECOND] = toInt(('0.' + input) * 1000);
//    }
//
//    for (token = 'S'; token.length <= 9; token += 'S') {
//        addParseToken(token, parseMs);
//    }
//
//    getSetMillisecond = makeGetSet('Milliseconds', false);
//
//    // FORMATTING
//
//    addFormatToken('z', 0, 0, 'zoneAbbr');
//    addFormatToken('zz', 0, 0, 'zoneName');
//
//    // MOMENTS
//
//    function getZoneAbbr() {
//        return this._isUTC ? 'UTC' : '';
//    }
//
//    function getZoneName() {
//        return this._isUTC ? 'Coordinated Universal Time' : '';
//    }
//
//    var proto = Moment.prototype;
//
//    proto.add = add;
//    proto.calendar = calendar$1;
//    proto.clone = clone;
//    proto.diff = diff;
//    proto.endOf = endOf;
//    proto.format = format;
//    proto.from = from;
//    proto.fromNow = fromNow;
//    proto.to = to;
//    proto.toNow = toNow;
//    proto.get = stringGet;
//    proto.invalidAt = invalidAt;
//    proto.isAfter = isAfter;
//    proto.isBefore = isBefore;
//    proto.isBetween = isBetween;
//    proto.isSame = isSame;
//    proto.isSameOrAfter = isSameOrAfter;
//    proto.isSameOrBefore = isSameOrBefore;
//    proto.isValid = isValid$2;
//    proto.lang = lang;
//    proto.locale = locale;
//    proto.localeData = localeData;
//    proto.max = prototypeMax;
//    proto.min = prototypeMin;
//    proto.parsingFlags = parsingFlags;
//    proto.set = stringSet;
//    proto.startOf = startOf;
//    proto.subtract = subtract;
//    proto.toArray = toArray;
//    proto.toObject = toObject;
//    proto.toDate = toDate;
//    proto.toISOString = toISOString;
//    proto.inspect = inspect;
//    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
//        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
//            return 'Moment<' + this.format() + '>';
//        };
//    }
//    proto.toJSON = toJSON;
//    proto.toString = toString;
//    proto.unix = unix;
//    proto.valueOf = valueOf;
//    proto.creationData = creationData;
//    proto.eraName = getEraName;
//    proto.eraNarrow = getEraNarrow;
//    proto.eraAbbr = getEraAbbr;
//    proto.eraYear = getEraYear;
//    proto.year = getSetYear;
//    proto.isLeapYear = getIsLeapYear;
//    proto.weekYear = getSetWeekYear;
//    proto.isoWeekYear = getSetISOWeekYear;
//    proto.quarter = proto.quarters = getSetQuarter;
//    proto.month = getSetMonth;
//    proto.daysInMonth = getDaysInMonth;
//    proto.week = proto.weeks = getSetWeek;
//    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
//    proto.weeksInYear = getWeeksInYear;
//    proto.weeksInWeekYear = getWeeksInWeekYear;
//    proto.isoWeeksInYear = getISOWeeksInYear;
//    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
//    proto.date = getSetDayOfMonth;
//    proto.day = proto.days = getSetDayOfWeek;
//    proto.weekday = getSetLocaleDayOfWeek;
//    proto.isoWeekday = getSetISODayOfWeek;
//    proto.dayOfYear = getSetDayOfYear;
//    proto.hour = proto.hours = getSetHour;
//    proto.minute = proto.minutes = getSetMinute;
//    proto.second = proto.seconds = getSetSecond;
//    proto.millisecond = proto.milliseconds = getSetMillisecond;
//    proto.utcOffset = getSetOffset;
//    proto.utc = setOffsetToUTC;
//    proto.local = setOffsetToLocal;
//    proto.parseZone = setOffsetToParsedOffset;
//    proto.hasAlignedHourOffset = hasAlignedHourOffset;
//    proto.isDST = isDaylightSavingTime;
//    proto.isLocal = isLocal;
//    proto.isUtcOffset = isUtcOffset;
//    proto.isUtc = isUtc;
//    proto.isUTC = isUtc;
//    proto.zoneAbbr = getZoneAbbr;
//    proto.zoneName = getZoneName;
//    proto.dates = deprecate(
//        'dates accessor is deprecated. Use date instead.',
//        getSetDayOfMonth
//    );
//    proto.months = deprecate(
//        'months accessor is deprecated. Use month instead',
//        getSetMonth
//    );
//    proto.years = deprecate(
//        'years accessor is deprecated. Use year instead',
//        getSetYear
//    );
//    proto.zone = deprecate(
//        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
//        getSetZone
//    );
//    proto.isDSTShifted = deprecate(
//        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
//        isDaylightSavingTimeShifted
//    );
//
//    function createUnix(input) {
//        return createLocal(input * 1000);
//    }
//
//    function createInZone() {
//        return createLocal.apply(null, arguments).parseZone();
//    }
//
//    function preParsePostFormat(string) {
//        return string;
//    }
//
//    var proto$1 = Locale.prototype;
//
//    proto$1.calendar = calendar;
//    proto$1.longDateFormat = longDateFormat;
//    proto$1.invalidDate = invalidDate;
//    proto$1.ordinal = ordinal;
//    proto$1.preparse = preParsePostFormat;
//    proto$1.postformat = preParsePostFormat;
//    proto$1.relativeTime = relativeTime;
//    proto$1.pastFuture = pastFuture;
//    proto$1.set = set;
//    proto$1.eras = localeEras;
//    proto$1.erasParse = localeErasParse;
//    proto$1.erasConvertYear = localeErasConvertYear;
//    proto$1.erasAbbrRegex = erasAbbrRegex;
//    proto$1.erasNameRegex = erasNameRegex;
//    proto$1.erasNarrowRegex = erasNarrowRegex;
//
//    proto$1.months = localeMonths;
//    proto$1.monthsShort = localeMonthsShort;
//    proto$1.monthsParse = localeMonthsParse;
//    proto$1.monthsRegex = monthsRegex;
//    proto$1.monthsShortRegex = monthsShortRegex;
//    proto$1.week = localeWeek;
//    proto$1.firstDayOfYear = localeFirstDayOfYear;
//    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
//
//    proto$1.weekdays = localeWeekdays;
//    proto$1.weekdaysMin = localeWeekdaysMin;
//    proto$1.weekdaysShort = localeWeekdaysShort;
//    proto$1.weekdaysParse = localeWeekdaysParse;
//
//    proto$1.weekdaysRegex = weekdaysRegex;
//    proto$1.weekdaysShortRegex = weekdaysShortRegex;
//    proto$1.weekdaysMinRegex = weekdaysMinRegex;
//
//    proto$1.isPM = localeIsPM;
//    proto$1.meridiem = localeMeridiem;
//
//    function get$1(format, index, field, setter) {
//        var locale = getLocale(),
//            utc = createUTC().set(setter, index);
//        return locale[field](utc, format);
//    }
//
//    function listMonthsImpl(format, index, field) {
//        if (isNumber(format)) {
//            index = format;
//            format = undefined;
//        }
//
//        format = format || '';
//
//        if (index != null) {
//            return get$1(format, index, field, 'month');
//        }
//
//        var i,
//            out = [];
//        for (i = 0; i < 12; i++) {
//            out[i] = get$1(format, i, field, 'month');
//        }
//        return out;
//    }
//
//    // ()
//    // (5)
//    // (fmt, 5)
//    // (fmt)
//    // (true)
//    // (true, 5)
//    // (true, fmt, 5)
//    // (true, fmt)
//    function listWeekdaysImpl(localeSorted, format, index, field) {
//        if (typeof localeSorted === 'boolean') {
//            if (isNumber(format)) {
//                index = format;
//                format = undefined;
//            }
//
//            format = format || '';
//        } else {
//            format = localeSorted;
//            index = format;
//            localeSorted = false;
//
//            if (isNumber(format)) {
//                index = format;
//                format = undefined;
//            }
//
//            format = format || '';
//        }
//
//        var locale = getLocale(),
//            shift = localeSorted ? locale._week.dow : 0,
//            i,
//            out = [];
//
//        if (index != null) {
//            return get$1(format, (index + shift) % 7, field, 'day');
//        }
//
//        for (i = 0; i < 7; i++) {
//            out[i] = get$1(format, (i + shift) % 7, field, 'day');
//        }
//        return out;
//    }
//
//    function listMonths(format, index) {
//        return listMonthsImpl(format, index, 'months');
//    }
//
//    function listMonthsShort(format, index) {
//        return listMonthsImpl(format, index, 'monthsShort');
//    }
//
//    function listWeekdays(localeSorted, format, index) {
//        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
//    }
//
//    function listWeekdaysShort(localeSorted, format, index) {
//        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
//    }
//
//    function listWeekdaysMin(localeSorted, format, index) {
//        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
//    }
//
//    getSetGlobalLocale('en', {
//        eras: [
//            {
//                since: '0001-01-01',
//                until: +Infinity,
//                offset: 1,
//                name: 'Anno Domini',
//                narrow: 'AD',
//                abbr: 'AD',
//            },
//            {
//                since: '0000-12-31',
//                until: -Infinity,
//                offset: 1,
//                name: 'Before Christ',
//                narrow: 'BC',
//                abbr: 'BC',
//            },
//        ],
//        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
//        ordinal: function (number) {
//            var b = number % 10,
//                output =
//                    toInt((number % 100) / 10) === 1
//                        ? 'th'
//                        : b === 1
//                        ? 'st'
//                        : b === 2
//                        ? 'nd'
//                        : b === 3
//                        ? 'rd'
//                        : 'th';
//            return number + output;
//        },
//    });
//
//    // Side effect imports
//
//    hooks.lang = deprecate(
//        'moment.lang is deprecated. Use moment.locale instead.',
//        getSetGlobalLocale
//    );
//    hooks.langData = deprecate(
//        'moment.langData is deprecated. Use moment.localeData instead.',
//        getLocale
//    );
//
//    var mathAbs = Math.abs;
//
//    function abs() {
//        var data = this._data;
//
//        this._milliseconds = mathAbs(this._milliseconds);
//        this._days = mathAbs(this._days);
//        this._months = mathAbs(this._months);
//
//        data.milliseconds = mathAbs(data.milliseconds);
//        data.seconds = mathAbs(data.seconds);
//        data.minutes = mathAbs(data.minutes);
//        data.hours = mathAbs(data.hours);
//        data.months = mathAbs(data.months);
//        data.years = mathAbs(data.years);
//
//        return this;
//    }
//
//    function addSubtract$1(duration, input, value, direction) {
//        var other = createDuration(input, value);
//
//        duration._milliseconds += direction * other._milliseconds;
//        duration._days += direction * other._days;
//        duration._months += direction * other._months;
//
//        return duration._bubble();
//    }
//
//    // supports only 2.0-style add(1, 's') or add(duration)
//    function add$1(input, value) {
//        return addSubtract$1(this, input, value, 1);
//    }
//
//    // supports only 2.0-style subtract(1, 's') or subtract(duration)
//    function subtract$1(input, value) {
//        return addSubtract$1(this, input, value, -1);
//    }
//
//    function absCeil(number) {
//        if (number < 0) {
//            return Math.floor(number);
//        } else {
//            return Math.ceil(number);
//        }
//    }
//
//    function bubble() {
//        var milliseconds = this._milliseconds,
//            days = this._days,
//            months = this._months,
//            data = this._data,
//            seconds,
//            minutes,
//            hours,
//            years,
//            monthsFromDays;
//
//        // if we have a mix of positive and negative values, bubble down first
//        // check: https://github.com/moment/moment/issues/2166
//        if (
//            !(
//                (milliseconds >= 0 && days >= 0 && months >= 0) ||
//                (milliseconds <= 0 && days <= 0 && months <= 0)
//            )
//        ) {
//            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
//            days = 0;
//            months = 0;
//        }
//
//        // The following code bubbles up values, see the tests for
//        // examples of what that means.
//        data.milliseconds = milliseconds % 1000;
//
//        seconds = absFloor(milliseconds / 1000);
//        data.seconds = seconds % 60;
//
//        minutes = absFloor(seconds / 60);
//        data.minutes = minutes % 60;
//
//        hours = absFloor(minutes / 60);
//        data.hours = hours % 24;
//
//        days += absFloor(hours / 24);
//
//        // convert days to months
//        monthsFromDays = absFloor(daysToMonths(days));
//        months += monthsFromDays;
//        days -= absCeil(monthsToDays(monthsFromDays));
//
//        // 12 months -> 1 year
//        years = absFloor(months / 12);
//        months %= 12;
//
//        data.days = days;
//        data.months = months;
//        data.years = years;
//
//        return this;
//    }
//
//    function daysToMonths(days) {
//        // 400 years have 146097 days (taking into account leap year rules)
//        // 400 years have 12 months === 4800
//        return (days * 4800) / 146097;
//    }
//
//    function monthsToDays(months) {
//        // the reverse of daysToMonths
//        return (months * 146097) / 4800;
//    }
//
//    function as(units) {
//        if (!this.isValid()) {
//            return NaN;
//        }
//        var days,
//            months,
//            milliseconds = this._milliseconds;
//
//        units = normalizeUnits(units);
//
//        if (units === 'month' || units === 'quarter' || units === 'year') {
//            days = this._days + milliseconds / 864e5;
//            months = this._months + daysToMonths(days);
//            switch (units) {
//                case 'month':
//                    return months;
//                case 'quarter':
//                    return months / 3;
//                case 'year':
//                    return months / 12;
//            }
//        } else {
//            // handle milliseconds separately because of floating point math errors (issue #1867)
//            days = this._days + Math.round(monthsToDays(this._months));
//            switch (units) {
//                case 'week':
//                    return days / 7 + milliseconds / 6048e5;
//                case 'day':
//                    return days + milliseconds / 864e5;
//                case 'hour':
//                    return days * 24 + milliseconds / 36e5;
//                case 'minute':
//                    return days * 1440 + milliseconds / 6e4;
//                case 'second':
//                    return days * 86400 + milliseconds / 1000;
//                // Math.floor prevents floating point math errors here
//                case 'millisecond':
//                    return Math.floor(days * 864e5) + milliseconds;
//                default:
//                    throw new Error('Unknown unit ' + units);
//            }
//        }
//    }
//
//    // TODO: Use this.as('ms')?
//    function valueOf$1() {
//        if (!this.isValid()) {
//            return NaN;
//        }
//        return (
//            this._milliseconds +
//            this._days * 864e5 +
//            (this._months % 12) * 2592e6 +
//            toInt(this._months / 12) * 31536e6
//        );
//    }
//
//    function makeAs(alias) {
//        return function () {
//            return this.as(alias);
//        };
//    }
//
//    var asMilliseconds = makeAs('ms'),
//        asSeconds = makeAs('s'),
//        asMinutes = makeAs('m'),
//        asHours = makeAs('h'),
//        asDays = makeAs('d'),
//        asWeeks = makeAs('w'),
//        asMonths = makeAs('M'),
//        asQuarters = makeAs('Q'),
//        asYears = makeAs('y');
//
//    function clone$1() {
//        return createDuration(this);
//    }
//
//    function get$2(units) {
//        units = normalizeUnits(units);
//        return this.isValid() ? this[units + 's']() : NaN;
//    }
//
//    function makeGetter(name) {
//        return function () {
//            return this.isValid() ? this._data[name] : NaN;
//        };
//    }
//
//    var milliseconds = makeGetter('milliseconds'),
//        seconds = makeGetter('seconds'),
//        minutes = makeGetter('minutes'),
//        hours = makeGetter('hours'),
//        days = makeGetter('days'),
//        months = makeGetter('months'),
//        years = makeGetter('years');
//
//    function weeks() {
//        return absFloor(this.days() / 7);
//    }
//
//    var round = Math.round,
//        thresholds = {
//            ss: 44, // a few seconds to seconds
//            s: 45, // seconds to minute
//            m: 45, // minutes to hour
//            h: 22, // hours to day
//            d: 26, // days to month/week
//            w: null, // weeks to month
//            M: 11, // months to year
//        };
//
//    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
//    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
//        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
//    }
//
//    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
//        var duration = createDuration(posNegDuration).abs(),
//            seconds = round(duration.as('s')),
//            minutes = round(duration.as('m')),
//            hours = round(duration.as('h')),
//            days = round(duration.as('d')),
//            months = round(duration.as('M')),
//            weeks = round(duration.as('w')),
//            years = round(duration.as('y')),
//            a =
//                (seconds <= thresholds.ss && ['s', seconds]) ||
//                (seconds < thresholds.s && ['ss', seconds]) ||
//                (minutes <= 1 && ['m']) ||
//                (minutes < thresholds.m && ['mm', minutes]) ||
//                (hours <= 1 && ['h']) ||
//                (hours < thresholds.h && ['hh', hours]) ||
//                (days <= 1 && ['d']) ||
//                (days < thresholds.d && ['dd', days]);
//
//        if (thresholds.w != null) {
//            a =
//                a ||
//                (weeks <= 1 && ['w']) ||
//                (weeks < thresholds.w && ['ww', weeks]);
//        }
//        a = a ||
//            (months <= 1 && ['M']) ||
//            (months < thresholds.M && ['MM', months]) ||
//            (years <= 1 && ['y']) || ['yy', years];
//
//        a[2] = withoutSuffix;
//        a[3] = +posNegDuration > 0;
//        a[4] = locale;
//        return substituteTimeAgo.apply(null, a);
//    }
//
//    // This function allows you to set the rounding function for relative time strings
//    function getSetRelativeTimeRounding(roundingFunction) {
//        if (roundingFunction === undefined) {
//            return round;
//        }
//        if (typeof roundingFunction === 'function') {
//            round = roundingFunction;
//            return true;
//        }
//        return false;
//    }
//
//    // This function allows you to set a threshold for relative time strings
//    function getSetRelativeTimeThreshold(threshold, limit) {
//        if (thresholds[threshold] === undefined) {
//            return false;
//        }
//        if (limit === undefined) {
//            return thresholds[threshold];
//        }
//        thresholds[threshold] = limit;
//        if (threshold === 's') {
//            thresholds.ss = limit - 1;
//        }
//        return true;
//    }
//
//    function humanize(argWithSuffix, argThresholds) {
//        if (!this.isValid()) {
//            return this.localeData().invalidDate();
//        }
//
//        var withSuffix = false,
//            th = thresholds,
//            locale,
//            output;
//
//        if (typeof argWithSuffix === 'object') {
//            argThresholds = argWithSuffix;
//            argWithSuffix = false;
//        }
//        if (typeof argWithSuffix === 'boolean') {
//            withSuffix = argWithSuffix;
//        }
//        if (typeof argThresholds === 'object') {
//            th = Object.assign({}, thresholds, argThresholds);
//            if (argThresholds.s != null && argThresholds.ss == null) {
//                th.ss = argThresholds.s - 1;
//            }
//        }
//
//        locale = this.localeData();
//        output = relativeTime$1(this, !withSuffix, th, locale);
//
//        if (withSuffix) {
//            output = locale.pastFuture(+this, output);
//        }
//
//        return locale.postformat(output);
//    }
//
//    var abs$1 = Math.abs;
//
//    function sign(x) {
//        return (x > 0) - (x < 0) || +x;
//    }
//
//    function toISOString$1() {
//        // for ISO strings we do not use the normal bubbling rules:
//        //  * milliseconds bubble up until they become hours
//        //  * days do not bubble at all
//        //  * months bubble up until they become years
//        // This is because there is no context-free conversion between hours and days
//        // (think of clock changes)
//        // and also not between days and months (28-31 days per month)
//        if (!this.isValid()) {
//            return this.localeData().invalidDate();
//        }
//
//        var seconds = abs$1(this._milliseconds) / 1000,
//            days = abs$1(this._days),
//            months = abs$1(this._months),
//            minutes,
//            hours,
//            years,
//            s,
//            total = this.asSeconds(),
//            totalSign,
//            ymSign,
//            daysSign,
//            hmsSign;
//
//        if (!total) {
//            // this is the same as C#'s (Noda) and python (isodate)...
//            // but not other JS (goog.date)
//            return 'P0D';
//        }
//
//        // 3600 seconds -> 60 minutes -> 1 hour
//        minutes = absFloor(seconds / 60);
//        hours = absFloor(minutes / 60);
//        seconds %= 60;
//        minutes %= 60;
//
//        // 12 months -> 1 year
//        years = absFloor(months / 12);
//        months %= 12;
//
//        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
//        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
//
//        totalSign = total < 0 ? '-' : '';
//        ymSign = sign(this._months) !== sign(total) ? '-' : '';
//        daysSign = sign(this._days) !== sign(total) ? '-' : '';
//        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
//
//        return (
//            totalSign +
//            'P' +
//            (years ? ymSign + years + 'Y' : '') +
//            (months ? ymSign + months + 'M' : '') +
//            (days ? daysSign + days + 'D' : '') +
//            (hours || minutes || seconds ? 'T' : '') +
//            (hours ? hmsSign + hours + 'H' : '') +
//            (minutes ? hmsSign + minutes + 'M' : '') +
//            (seconds ? hmsSign + s + 'S' : '')
//        );
//    }
//
//    var proto$2 = Duration.prototype;
//
//    proto$2.isValid = isValid$1;
//    proto$2.abs = abs;
//    proto$2.add = add$1;
//    proto$2.subtract = subtract$1;
//    proto$2.as = as;
//    proto$2.asMilliseconds = asMilliseconds;
//    proto$2.asSeconds = asSeconds;
//    proto$2.asMinutes = asMinutes;
//    proto$2.asHours = asHours;
//    proto$2.asDays = asDays;
//    proto$2.asWeeks = asWeeks;
//    proto$2.asMonths = asMonths;
//    proto$2.asQuarters = asQuarters;
//    proto$2.asYears = asYears;
//    proto$2.valueOf = valueOf$1;
//    proto$2._bubble = bubble;
//    proto$2.clone = clone$1;
//    proto$2.get = get$2;
//    proto$2.milliseconds = milliseconds;
//    proto$2.seconds = seconds;
//    proto$2.minutes = minutes;
//    proto$2.hours = hours;
//    proto$2.days = days;
//    proto$2.weeks = weeks;
//    proto$2.months = months;
//    proto$2.years = years;
//    proto$2.humanize = humanize;
//    proto$2.toISOString = toISOString$1;
//    proto$2.toString = toISOString$1;
//    proto$2.toJSON = toISOString$1;
//    proto$2.locale = locale;
//    proto$2.localeData = localeData;
//
//    proto$2.toIsoString = deprecate(
//        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
//        toISOString$1
//    );
//    proto$2.lang = lang;
//
//    // FORMATTING
//
//    addFormatToken('X', 0, 0, 'unix');
//    addFormatToken('x', 0, 0, 'valueOf');
//
//    // PARSING
//
//    addRegexToken('x', matchSigned);
//    addRegexToken('X', matchTimestamp);
//    addParseToken('X', function (input, array, config) {
//        config._d = new Date(parseFloat(input) * 1000);
//    });
//    addParseToken('x', function (input, array, config) {
//        config._d = new Date(toInt(input));
//    });
//
//    //! moment.js
//
//    hooks.version = '2.27.0';
//
//    setHookCallback(createLocal);
//
//    hooks.fn = proto;
//    hooks.min = min;
//    hooks.max = max;
//    hooks.now = now;
//    hooks.utc = createUTC;
//    hooks.unix = createUnix;
//    hooks.months = listMonths;
//    hooks.isDate = isDate;
//    hooks.locale = getSetGlobalLocale;
//    hooks.invalid = createInvalid;
//    hooks.duration = createDuration;
//    hooks.isMoment = isMoment;
//    hooks.weekdays = listWeekdays;
//    hooks.parseZone = createInZone;
//    hooks.localeData = getLocale;
//    hooks.isDuration = isDuration;
//    hooks.monthsShort = listMonthsShort;
//    hooks.weekdaysMin = listWeekdaysMin;
//    hooks.defineLocale = defineLocale;
//    hooks.updateLocale = updateLocale;
//    hooks.locales = listLocales;
//    hooks.weekdaysShort = listWeekdaysShort;
//    hooks.normalizeUnits = normalizeUnits;
//    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
//    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
//    hooks.calendarFormat = getCalendarFormat;
//    hooks.prototype = proto;
//
//    // currently HTML5 input type only supports 24-hour formats
//    hooks.HTML5_FMT = {
//        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
//        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
//        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
//        DATE: 'YYYY-MM-DD', // <input type="date" />
//        TIME: 'HH:mm', // <input type="time" />
//        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
//        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
//        WEEK: 'GGGG-[W]WW', // <input type="week" />
//        MONTH: 'YYYY-MM', // <input type="month" />
//    };
//
//    return hooks;
//
//})));