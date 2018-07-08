var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneBg_2 = (function (_super) {
    __extends(SceneBg_2, _super);
    function SceneBg_2() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/scenebackground/Scene_2.exml";
        _this.scollscene1 = new SceneTotal(_this.scene1, _this.scene10);
        _this.playrobot = new PlayRobot(-0.5, -0.005);
        _this.robot.addChild(_this.playrobot);
        return _this;
    }
    SceneBg_2.prototype.start = function () {
        egret.startTick(this.upDate, this);
    };
    SceneBg_2.prototype.end = function () {
        egret.stopTick(this.upDate, this);
    };
    SceneBg_2.prototype.upDate = function (timestamp) {
        this.scollscene1.scollScreen(3);
        this.playrobot.animate();
    };
    return SceneBg_2;
}(eui.Component));
__reflect(SceneBg_2.prototype, "SceneBg_2");
//# sourceMappingURL=SceneBg_2.js.map