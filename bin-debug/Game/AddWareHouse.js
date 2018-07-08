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
var AddWareHouse = (function (_super) {
    __extends(AddWareHouse, _super);
    function AddWareHouse(type) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/WareHouse.exml";
        _this.init(type);
        _this.mine.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(0); }, _this);
        //this.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(1)}, this);
        _this.success.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(2); }, _this);
        _this.rect.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.removeThis, _this);
        return _this;
    }
    AddWareHouse.prototype.init = function (type) {
        var tw = egret.Tween.get(this.main);
        tw.to({ y: 504 }, 400, egret.Ease.cubicIn);
        this.chooseType(type);
    };
    AddWareHouse.prototype.chooseType = function (type) {
        switch (type) {
            case 0: {
                this.mine.source = "mineicon_1_png";
                this.illustrated.source = "illustratedicon_0_png";
                this.success.source = "successicon_0_png";
                this.bg.source = "warehousebg_png";
                this.row0.visible = true;
                this.row1.visible = false;
                this.row2.visible = false;
                this.getMine();
                break;
            }
            case 1: {
                this.mine.source = "mineicon_0_png";
                this.illustrated.source = "illustratedicon_1_png";
                this.success.source = "successicon_0_png";
                this.bg.source = "warehousebg1_png";
                this.row0.visible = false;
                this.row1.visible = true;
                this.row2.visible = false;
                break;
            }
            case 2: {
                this.mine.source = "mineicon_0_png";
                this.illustrated.source = "illustratedicon_0_png";
                this.success.source = "successicon_1_png";
                this.bg.source = "warehousebg1_png";
                this.row0.visible = false;
                this.row1.visible = false;
                this.row2.visible = true;
                this.getSuccess();
                break;
            }
        }
    };
    AddWareHouse.prototype.getMine = function () {
        var self = this;
        var tools = new Tools();
        tools.ajax({
            url: "/selectRobots",
            type: "get",
            success: function (robot) {
                var i = 0;
                var robotdata = [];
                for (var m in robot['msg']) {
                    robotdata.push(robot['msg'][m]);
                }
                for (; i < robotdata.length; i++) {
                    var content = new WareHouseCell(robotdata[i], 0);
                    content.x = i * 306;
                    self.row0.addChild(content);
                }
                tools.ajax({
                    url: "/selectComponents",
                    type: "get",
                    success: function (mateiral) {
                        var mateiraldata = [];
                        for (var m in mateiral['msg']) {
                            mateiraldata.push(mateiral['msg'][m]);
                        }
                        console.log(mateiraldata);
                        for (var j = 0; j < mateiraldata.length; i++, j++) {
                            var content = new WareHouseCell(mateiraldata[j], 1);
                            content.x = i * 306;
                            self.row0.addChild(content);
                        }
                    }
                });
            }
        });
    };
    AddWareHouse.prototype.getSuccess = function () {
        var data = [
            {
                con: 100,
                content: 1,
                all: 1000,
                own: 300,
                name: "小有权势"
            },
            {
                con: 200,
                content: 1,
                all: 500,
                own: 400,
                name: "雄霸一方"
            },
            {
                con: 300,
                content: 1,
                all: 700,
                own: 300,
                name: "攻城略地"
            },
            {
                con: 500,
                content: 1,
                all: 3000,
                own: 800,
                name: "占山为王"
            },
            {
                con: 1000,
                content: 1,
                all: 2000,
                own: 300,
                name: "权倾天下"
            },
            {
                con: 5000,
                content: 1,
                all: 3000,
                own: 400,
                name: "富甲一方"
            },
            {
                con: 10000,
                content: 1,
                all: 2000,
                own: 300,
                name: "家财万贯"
            },
            {
                con: 50000,
                content: 1,
                all: 3000,
                own: 400,
                name: "金玉满堂"
            },
            {
                con: 100000,
                content: 1,
                all: 3000,
                own: 400,
                name: "富可敌国"
            }
        ];
        var tools = new Tools();
        tools.ajax({
            url: "/getAchievement",
            type: "get",
            success: function (re) {
                console.log(re);
            }
        });
        for (var i = 0; i < data.length; i++) {
            var content = new Success(data[i]);
            content.x = i * 306;
            this.row2.addChild(content);
        }
    };
    AddWareHouse.prototype.removeThis = function () {
        var _this = this;
        var tw = egret.Tween.get(this.main);
        tw.to({ y: 1080 }, 400, egret.Ease.cubicIn);
        tw.call(function () { _this.parent.removeChild(_this); });
    };
    return AddWareHouse;
}(eui.Component));
__reflect(AddWareHouse.prototype, "AddWareHouse");
//# sourceMappingURL=AddWareHouse.js.map