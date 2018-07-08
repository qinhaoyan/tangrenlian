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
var PlayRobot = (function (_super) {
    __extends(PlayRobot, _super);
    function PlayRobot(v, s) {
        var _this = _super.call(this) || this;
        _this.v = v;
        _this.s = s;
        _this.skinName = "resource/skins/Robot.exml";
        return _this;
    }
    PlayRobot.prototype.animate = function () {
        this.robot.y += this.v;
        this.shadow.scaleX += this.s;
        if (this.robot.y < 60) {
            this.v = 0.5;
            this.s = 0.005;
        }
        if (this.robot.y > 125) {
            this.v = -0.5;
            this.s = -0.005;
        }
    };
    return PlayRobot;
}(eui.Component));
__reflect(PlayRobot.prototype, "PlayRobot");
//# sourceMappingURL=PlayRobot.js.map