(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "glamorous", "chokidar", "./Audio", "./BallTriangle", "./Bars", "./CradleLoader", "./Grid", "./Hearts", "./MutatingDot", "./Oval", "./Plane", "./Puff", "./RevolvingDot", "./Rings", "./TailSpin", "./ThreeDots", "./Triangle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("glamorous"), require("chokidar"), require("./Audio"), require("./BallTriangle"), require("./Bars"), require("./CradleLoader"), require("./Grid"), require("./Hearts"), require("./MutatingDot"), require("./Oval"), require("./Plane"), require("./Puff"), require("./RevolvingDot"), require("./Rings"), require("./TailSpin"), require("./ThreeDots"), require("./Triangle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.glamorous, global.chokidar, global.Audio, global.BallTriangle, global.Bars, global.CradleLoader, global.Grid, global.Hearts, global.MutatingDot, global.Oval, global.Plane, global.Puff, global.RevolvingDot, global.Rings, global.TailSpin, global.ThreeDots, global.Triangle);
    global.index = mod.exports;
  }
})(this, function (exports, _glamorous, _chokidar, _Audio, _BallTriangle, _Bars, _CradleLoader, _Grid, _Hearts, _MutatingDot, _Oval, _Plane, _Puff, _RevolvingDot, _Rings, _TailSpin, _ThreeDots, _Triangle) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Spinner = undefined;
  var Spinner = exports.Spinner = {
    Circle: _glamorous.Circle,
    Audio: _Audio.Audio,
    BallTriangle: _BallTriangle.BallTriangle,
    Bars: _Bars.Bars,
    CradleLoader: _CradleLoader.CradleLoader,
    Grid: _Grid.Grid,
    Hearts: _Hearts.Hearts,
    MutatingDot: _MutatingDot.MutatingDot,
    Oval: _Oval.Oval,
    Plane: _Plane.Plane,
    Puff: _Puff.Puff,
    RevolvingDot: _RevolvingDot.RevolvingDot,
    Rings: _Rings.Rings,
    TailSpin: _TailSpin.TailSpin,
    ThreeDots: _ThreeDots.ThreeDots,
    Triangle: _Triangle.Triangle,
    watch: _chokidar.watch
  };
});