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
var Scenes = (function (_super) {
    __extends(Scenes, _super);
    function Scenes(type, p) {
        var _this = _super.call(this) || this;
        _this.p = p;
        _this.init(type);
        return _this;
    }
    Scenes.prototype.init = function (type) {
        var _this = this;
        switch (type) {
            case 1: {
                this.scene = new SceneBg_1();
                this.addChild(this.scene);
                break;
            }
            case 2: {
                this.scene = new SceneBg_2();
                this.addChild(this.scene);
                break;
            }
            case 3: {
                //this.scene = new SceneBg_3();
                this.addChild(this.scene);
                break;
            }
        }
        var tools = new Tools();
        tools.ajax({
            url: "/findExploring",
            type: "get",
            success: function (re) {
                if (JSON.stringify(re['msg']).indexOf('"mapID":' + type) < 0) {
                    _this.p.addChild(new AddExplore(_this.scene, type));
                }
                else {
                    _this.scene.start();
                }
            }
        });
    };
    Scenes.prototype.endExplore = function () {
        this.scene.end();
    };
    return Scenes;
}(eui.Component));
__reflect(Scenes.prototype, "Scenes");
//# sourceMappingURL=Scenes.js.map