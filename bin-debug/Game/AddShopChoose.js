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
var AddShopChoose = (function (_super) {
    __extends(AddShopChoose, _super);
    function AddShopChoose(mateirals, robots, p) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/ShopChoose.exml";
        _this.mateirals = mateirals;
        _this.robots = robots;
        _this.p = p;
        _this.init();
        _this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closeFun, _this);
        _this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.sureFun, _this);
        return _this;
    }
    AddShopChoose.prototype.init = function () {
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.bounceInOut);
        var i = 0;
        for (i; i < this.mateirals.length; i++) {
            var mateiral = new ShopSaleChoose(this.mateirals[i]);
            mateiral.y = i * 170;
            this.content.addChild(mateiral);
        }
        for (var j = 0; j < this.robots.length; i++, j++) {
            console.log(j);
            var robot = new ShopSaleChoose(this.robots[j]);
            robot.y = i * 170;
            this.content.addChild(robot);
        }
    };
    AddShopChoose.prototype.closeFun = function () {
        var _this = this;
        var tw = egret.Tween.get(this.main);
        console.log(this.parent);
        tw.to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.bounceInOut).call(function () { return _this.parent.removeChild(_this); });
    };
    AddShopChoose.prototype.sureFun = function () {
        var _this = this;
        var tools = new Tools();
        var i = 0, j = 0;
        if (this.mateirals.length > 0) {
            for (var _i = 0, _a = this.mateirals; _i < _a.length; _i++) {
                var mateiral = _a[_i];
                i++;
                tools.ajax({
                    url: "/outDeal",
                    type: "post",
                    data: {
                        dealType: 0,
                        sellID: parseInt(mateiral['id']),
                        goodsType: 1,
                        price: parseFloat(mateiral['con']),
                        rarity: null
                    },
                    success: function (re) {
                        j++;
                        if (i == j) {
                            if (_this.robots.length > 0) {
                                for (var _i = 0, _a = _this.robots; _i < _a.length; _i++) {
                                    var robot = _a[_i];
                                    i++;
                                    tools.ajax({
                                        url: "/outDeal",
                                        type: "post",
                                        data: {
                                            dealType: 0,
                                            sellID: parseInt(robot['id']),
                                            goodsType: 0,
                                            price: parseFloat(robot['con']),
                                            rarity: null
                                        },
                                        success: function (re) {
                                            j++;
                                            if (i == j) {
                                                if (re['isSuccess'] == 1) {
                                                    alert("挂售成功");
                                                    _this.parent.removeChild(_this);
                                                    _this.p.parent.removeChild(_this.p);
                                                }
                                                else {
                                                    alert(re['msg']);
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                            else {
                                if (re['isSuccess'] == 1) {
                                    alert("挂售成功");
                                    _this.parent.removeChild(_this);
                                    _this.p.parent.removeChild(_this.p);
                                }
                                else {
                                    alert(re['msg']);
                                }
                            }
                        }
                    }
                });
            }
        }
        else {
            for (var _b = 0, _c = this.robots; _b < _c.length; _b++) {
                var robot = _c[_b];
                i++;
                tools.ajax({
                    url: "/outDeal",
                    type: "post",
                    data: {
                        dealType: 0,
                        sellID: parseInt(robot['id']),
                        goodsType: 0,
                        price: parseFloat(robot['con']),
                        rarity: null
                    },
                    success: function (re) {
                        j++;
                        if (i == j) {
                            if (re['isSuccess'] == 1) {
                                alert("挂售成功");
                                _this.parent.removeChild(_this);
                                _this.p.parent.removeChild(_this.p);
                            }
                            else {
                                alert(re['msg']);
                            }
                        }
                    }
                });
            }
        }
    };
    return AddShopChoose;
}(eui.Component));
__reflect(AddShopChoose.prototype, "AddShopChoose");
//# sourceMappingURL=AddShopChoose.js.map