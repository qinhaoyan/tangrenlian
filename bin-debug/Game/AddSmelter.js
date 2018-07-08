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
var AddSmelter = (function (_super) {
    __extends(AddSmelter, _super);
    function AddSmelter(type) {
        var _this = _super.call(this) || this;
        _this.compoundchoose = [];
        _this.dismentlechoose = [];
        _this.tools = new Tools();
        _this.skinName = "resource/skins/Smelter.exml";
        _this.init(type);
        _this.compoundicon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(0); }, _this);
        _this.dismentleicon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(1); }, _this);
        _this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closeFun, _this);
        _this.compoundnext.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.compoundNext, _this);
        _this.compoundlast.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.compoundLast, _this);
        _this.dismentlenext.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dismentleNext, _this);
        _this.dismentlelast.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dismentleLast, _this);
        _this.compoundsure.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.compoundSure, _this);
        _this.dismentlesure.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.dismentleSure, _this);
        return _this;
    }
    AddSmelter.prototype.init = function (type) {
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.bounceInOut);
        this.chooseType(type);
    };
    AddSmelter.prototype.closeFun = function () {
        var _this = this;
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.bounceInOut).call(function () { return _this.parent.removeChild(_this); });
    };
    AddSmelter.prototype.chooseType = function (type) {
        switch (type) {
            case 0: {
                this.compound.visible = true;
                this.dismentle.visible = false;
                this.compoundicon.source = "compoundicon_1_png";
                this.dismentleicon.source = "dismentlecion_0_png";
                this.compoundchoose = [];
                this.addCompound();
                break;
            }
            case 1: {
                this.compound.visible = false;
                this.dismentle.visible = true;
                this.compoundicon.source = "compoundicon_0_png";
                this.dismentleicon.source = "dismentlecion_1_png";
                this.dismentlechoose = [];
                this.adddismentle();
                break;
            }
        }
    };
    AddSmelter.prototype.addCompound = function () {
        var _this = this;
        this.tools.ajax({
            url: "/selectComponents",
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
                    var robot = new AddSmelterFranck(data[i], _this.compoundchoose);
                    robot.x = Math.floor(i / 2) * 387;
                    robot.y = Math.floor(i % 2) * 240;
                    _this.compoundgroup.addChild(robot);
                }
                _this.compoundwidth = 387 * data.length / 2;
            }
        });
    };
    AddSmelter.prototype.adddismentle = function () {
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
                var j = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['status'] == 0) {
                        var robot = new AddSmelterFranck(data[i], _this.dismentlechoose);
                        robot.x = j * 387;
                        _this.dismentlegroup.addChild(robot);
                        j++;
                    }
                }
                _this.dismentlewidth = 387 * j;
            }
        });
    };
    AddSmelter.prototype.compoundNext = function () {
        var H = this.compoundgroup.scrollH + 387;
        if (H < this.compoundwidth) {
            var self_1 = this;
            var v_1 = 20;
            var tw_1 = setInterval(function () {
                v_1 -= 0.1;
                if (v_1 <= 2) {
                    v_1 = 2;
                }
                self_1.compoundgroup.scrollH += v_1;
                if (self_1.compoundgroup.scrollH >= H) {
                    clearInterval(tw_1);
                }
            }, 5);
        }
    };
    AddSmelter.prototype.compoundLast = function () {
        var H = this.compoundgroup.scrollH - 387;
        if (H > 0) {
            var self_2 = this;
            var v_2 = 20;
            var tw_2 = setInterval(function () {
                v_2 -= 0.1;
                if (v_2 <= 2) {
                    v_2 = 2;
                }
                self_2.compoundgroup.scrollH -= v_2;
                if (self_2.compoundgroup.scrollH <= H) {
                    clearInterval(tw_2);
                }
            }, 5);
        }
    };
    AddSmelter.prototype.compoundSure = function () {
        var _this = this;
        var components = {
            '钢木': 0,
            '玄铁': 0,
            '金刚砂': 0,
            '元磁铁': 0,
            '庚金': 0,
            '冰魄玉': 0
        };
        var cmtID = "";
        var i;
        console.log(this.compoundchoose);
        for (i in this.compoundchoose) {
            switch (this.compoundchoose[i]['name']) {
                case '钢木': {
                    components['钢木']++;
                    this.compoundchoose[i]['sort'] = 0;
                    break;
                }
                case '玄铁': {
                    components['玄铁']++;
                    this.compoundchoose[i]['sort'] = 1;
                    break;
                }
                case '金刚砂': {
                    components['金刚砂']++;
                    this.compoundchoose[i]['sort'] = 2;
                    break;
                }
                case '元磁铁': {
                    components['元磁铁']++;
                    this.compoundchoose[i]['sort'] = 3;
                    break;
                }
                case '庚金': {
                    components['庚金']++;
                    this.compoundchoose[i]['sort'] = 4;
                    break;
                }
                case '冰魄玉': {
                    components['冰魄玉']++;
                    this.compoundchoose[i]['sort'] = 5;
                    break;
                }
                default: {
                    console.log("error");
                }
            }
        }
        this.tools.sort(this.compoundchoose, 'sort', true);
        for (var _i = 0, _a = this.compoundchoose; _i < _a.length; _i++) {
            var id = _a[_i];
            cmtID += id['id'] + ",";
        }
        cmtID = cmtID.substring(0, cmtID.length - 1);
        if (i >= 5) {
            this.tools.ajax({
                url: "/compose",
                type: "post",
                data: {
                    components: components,
                    cmtID: cmtID
                },
                success: function (re) {
                    if (re['isSuccess'] == 1) {
                        alert(re['msg']);
                        _this.parent.removeChild(_this);
                    }
                    else {
                        alert(re['msg']);
                    }
                }
            });
        }
        else {
            alert("至少选择6个零件");
        }
    };
    AddSmelter.prototype.dismentleNext = function () {
        var H = this.dismentlegroup.scrollH + 387;
        if (H < this.dismentlewidth) {
            var self_3 = this;
            var v_3 = 20;
            var tw_3 = setInterval(function () {
                v_3 -= 0.1;
                if (v_3 <= 2) {
                    v_3 = 2;
                }
                self_3.dismentlegroup.scrollH += v_3;
                if (self_3.dismentlegroup.scrollH >= H) {
                    clearInterval(tw_3);
                }
            }, 5);
        }
    };
    AddSmelter.prototype.dismentleLast = function () {
        var H = this.dismentlegroup.scrollH - 387;
        if (H > 0) {
            var self_4 = this;
            var v_4 = 20;
            var tw_4 = setInterval(function () {
                v_4 -= 0.1;
                if (v_4 <= 2) {
                    v_4 = 2;
                }
                self_4.dismentlegroup.scrollH -= v_4;
                if (self_4.dismentlegroup.scrollH <= H) {
                    clearInterval(tw_4);
                }
            }, 5);
        }
    };
    AddSmelter.prototype.dismentleSure = function () {
        var _this = this;
        var robotsID = "";
        for (var i in this.dismentlechoose) {
            robotsID += this.dismentlechoose[i]['id'] + ",";
        }
        robotsID = robotsID.substring(0, robotsID.length - 1);
        this.tools.ajax({
            url: "/resolve",
            type: "post",
            data: {
                robotsID: robotsID
            },
            success: function (re) {
                if (re['isSuccess'] == 1) {
                    alert("拆卸成功");
                    _this.parent.removeChild(_this);
                }
                else {
                    alert("请求失败");
                }
            }
        });
    };
    return AddSmelter;
}(eui.Component));
__reflect(AddSmelter.prototype, "AddSmelter");
//# sourceMappingURL=AddSmelter.js.map