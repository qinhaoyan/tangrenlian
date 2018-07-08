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
var SceneBg_1 = (function (_super) {
    __extends(SceneBg_1, _super);
    function SceneBg_1() {
        var _this = _super.call(this) || this;
        _this.metoersystem = [];
        _this.skinName = "resource/scenebackground/Scene_1.exml";
        _this.scollscene4 = new SceneTotal(_this.scene4, _this.scene40);
        _this.scollscene3 = new SceneTotal(_this.scene3, _this.scene30);
        _this.scollscene2 = new SceneTotal(_this.scene2group, _this.scene2group0);
        _this.scollscene1 = new SceneTotal(_this.scene1, _this.scene10);
        _this.scollfish1 = new SceneTotal(_this.fish1, _this.fish10);
        _this.scollfish2 = new SceneTotal(_this.fish2, _this.fish20);
        _this.scollfish3 = new SceneTotal(_this.fish3, _this.fish30);
        var firestart0 = RES.getRes('scene1_firestar_png');
        var config = RES.getRes('scene1_firestar_json');
        var system1 = new particle.GravityParticleSystem(firestart0, config);
        system1.start();
        _this.fire1.addChild(system1);
        var system2 = new particle.GravityParticleSystem(firestart0, config);
        system2.start();
        _this.fire2.addChild(system2);
        var system3 = new particle.GravityParticleSystem(firestart0, config);
        system3.start();
        _this.fire3.addChild(system3);
        var system4 = new particle.GravityParticleSystem(firestart0, config);
        system4.start();
        _this.fire4.addChild(system4);
        var config2 = RES.getRes('scene1_firestar2_json');
        var system5 = new particle.GravityParticleSystem(firestart0, config2);
        system5.start();
        _this.fire5.addChild(system5);
        var system6 = new particle.GravityParticleSystem(firestart0, config2);
        system6.start();
        _this.fire6.addChild(system6);
        _this.playrobot = new PlayRobot(-0.5, -0.005);
        _this.robot.addChild(_this.playrobot);
        return _this;
    }
    SceneBg_1.prototype.start = function () {
        egret.startTick(this.upDate, this);
    };
    SceneBg_1.prototype.end = function () {
        egret.stopTick(this.upDate, this);
    };
    SceneBg_1.prototype.upDate = function (timestamp) {
        this.scollscene4.scollScreen(2.4);
        this.scollscene3.scollScreen(3);
        this.scollscene2.scollScreen(3);
        this.scollscene1.scollScreen(3);
        this.scollfish1.scollScreen(3.4);
        this.scollfish2.scollScreen(3.2);
        this.scollfish3.scollScreen(2.8);
        this.playrobot.animate();
        if (Math.random() > 0.97) {
            this.metoersystem.push(this.createMetoer());
        }
        for (var i = 0; i < this.metoersystem.length; i++) {
            this.metoersystem[i].x -= 6;
            this.metoersystem[i].y += 8;
            if (this.metoersystem[i].y > 600) {
                this.metoer.removeChild(this.metoersystem.shift());
            }
        }
        return false;
    };
    SceneBg_1.prototype.createMetoer = function () {
        var metoer = RES.getRes('scene1_meteor_png');
        var metoerconfig = RES.getRes('scene1_meteor_json');
        var metoersystem = new particle.GravityParticleSystem(metoer, metoerconfig);
        metoersystem.x = Math.random() * 1700 + 200;
        metoersystem.y = Math.random() * 100;
        metoersystem.start();
        this.metoer.addChild(metoersystem);
        return metoersystem;
    };
    return SceneBg_1;
}(eui.Component));
__reflect(SceneBg_1.prototype, "SceneBg_1");
//# sourceMappingURL=SceneBg_1.js.map