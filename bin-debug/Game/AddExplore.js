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
var AddExplore = (function (_super) {
    __extends(AddExplore, _super);
    function AddExplore(scene, type) {
        var _this = _super.call(this) || this;
        _this.choose = [];
        _this.tools = new Tools;
        _this.skinName = "resource/skins/Explore.exml";
        _this.init();
        _this.scene = scene;
        _this.type = type;
        _this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.sureFun, _this);
        _this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closeFun, _this);
        return _this;
    }
    AddExplore.prototype.init = function () {
        var _this = this;
        this.tools.ajax({
            url: "/selectRobots",
            type: "get",
            success: function (re) {
                var datas = re['msg'];
                var data = [];
                for (var i in datas) {
                    if (datas[i]['status'] == 0) {
                        data.push(datas[i]);
                    }
                }
                for (var i = 0; i < data.length; i++) {
                    var content = new AddSmelterFranck(data[i], _this.choose);
                    content.x = i % 2 * 362;
                    content.y = Math.floor(i / 2) * 240;
                    _this.content.addChild(content);
                }
            }
        });
    };
    AddExplore.prototype.sureFun = function () {
        var _this = this;
        var robotsID = "";
        for (var i in this.choose) {
            robotsID += this.choose[i]['id'] + ",";
        }
        robotsID = robotsID.substring(0, robotsID.length - 1);
        this.tools.ajax({
            url: "/explore",
            type: "post",
            data: {
                robotsID: robotsID,
                mapID: this.type,
            },
            success: function (re) {
                if (re["isSuccess"] == 1) {
                    _this.parent.removeChild(_this);
                    _this.scene.start();
                }
                else {
                    alert(re['msg']);
                }
            }
        });
    };
    AddExplore.prototype.closeFun = function () {
        this.parent.removeChild(this);
    };
    return AddExplore;
}(eui.Component));
__reflect(AddExplore.prototype, "AddExplore");
//# sourceMappingURL=AddExplore.js.map