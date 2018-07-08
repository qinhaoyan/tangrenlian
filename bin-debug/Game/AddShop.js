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
var AddShop = (function (_super) {
    __extends(AddShop, _super);
    function AddShop(type, con) {
        var _this = _super.call(this) || this;
        _this.flag = false;
        _this.minemateiralchoose = [];
        _this.minerobotchoose = [];
        _this.minetotal = { number: '0' };
        _this.shopmateiralchoose = [];
        _this.shoprobotchoose = [];
        _this.shoptotal = { number: '0' };
        _this.minefirstget = true;
        _this.shopfirstget = true;
        _this.tools = new Tools();
        _this.skinName = "resource/skins/Shop.exml";
        _this.init(type);
        _this.con = con;
        _this.mine.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(0); }, _this);
        _this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(1); }, _this);
        _this.mateiralnext.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.mnext, _this);
        _this.robotnext.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.bnext, _this);
        _this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closeFun, _this);
        _this.sale.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.saleSure, _this);
        _this.buy.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.buySure, _this);
        return _this;
    }
    AddShop.prototype.init = function (type) {
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.bounceInOut);
        this.chooseType(type);
    };
    AddShop.prototype.closeFun = function () {
        var _this = this;
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.bounceInOut).call(function () { return _this.parent.removeChild(_this); });
    };
    AddShop.prototype.chooseType = function (type) {
        switch (type) {
            case 0: {
                this.mine.source = "shopmineicon_1_png";
                this.shop.source = "shopicon_0_png";
                this.sale.visible = true;
                this.buy.visible = false;
                this.minemateiral.visible = true;
                this.minerobot.visible = true;
                this.shopmateiral.visible = false;
                this.shoprobot.visible = false;
                if (this.minefirstget) {
                    this.getmine();
                    this.minefirstget = false;
                }
                this.total.visible = false;
                this.totalword.visible = false;
                this.flag = false;
                break;
            }
            case 1: {
                this.mine.source = "shopmineicon_0_png";
                this.shop.source = "shopicon_1_png";
                this.sale.visible = false;
                this.buy.visible = true;
                this.minemateiral.visible = false;
                this.minerobot.visible = false;
                this.shopmateiral.visible = true;
                this.shoprobot.visible = true;
                if (this.shopfirstget) {
                    this.getshop();
                    this.shopfirstget = false;
                }
                this.total.visible = true;
                this.totalword.visible = true;
                this.total.text = this.shoptotal['number'];
                this.flag = true;
                break;
            }
        }
    };
    AddShop.prototype.getmine = function () {
        var self = this;
        this.tools.ajax({
            url: "/selectComponents",
            type: "get",
            success: function (data) {
                var msg = data['msg'];
                var data1 = [];
                for (var i in msg) {
                    if (msg[i]['status'] == 0) {
                        data1.push(msg[i]);
                    }
                }
                for (var i = 0; i < data1.length; i++) {
                    var content = new MineAndShop(data1[i], self.minemateiralchoose, null, null, 0, 1);
                    content.x = 350 * i;
                    self.minemateiral.addChild(content);
                }
                self.minemateiralwidth = data1.length * 340;
            }
        });
        this.tools.ajax({
            url: "/selectRobots",
            type: "get",
            success: function (data) {
                var msg = data['msg'];
                var data2 = [];
                for (var i in msg) {
                    if (msg[i]['status'] == 0) {
                        data2.push(msg[i]);
                    }
                }
                for (var i = 0; i < data2.length; i++) {
                    var content = new MineAndShop(data2[i], self.minerobotchoose, null, null, 0, 0);
                    content.x = 350 * i;
                    self.minerobot.addChild(content);
                }
                self.minerobotwidth = data2.length * 340;
            }
        });
    };
    AddShop.prototype.getshop = function () {
        var _this = this;
        this.tools.ajax({
            url: "/selectStore",
            type: "get",
            success: function (re) {
                if (re['isSuccess'] == 1) {
                    var data1 = [];
                    var data2 = [];
                    for (var i in re['msg']) {
                        if (re['msg'][i]['cmtID']) {
                            data1.push(re['msg'][i]);
                        }
                        else {
                            data2.push(re['msg'][i]);
                        }
                    }
                    for (var i = 0; i < data1.length; i++) {
                        var content = new MineAndShop(data1[i], _this.shopmateiralchoose, _this.total, _this.shoptotal, 1, 1);
                        content.x = 350 * i;
                        _this.shopmateiral.addChild(content);
                    }
                    for (var i = 0; i < data2.length; i++) {
                        var content = new MineAndShop(data2[i], _this.shoprobotchoose, _this.total, _this.shoptotal, 1, 0);
                        content.x = 350 * i;
                        _this.shoprobot.addChild(content);
                    }
                    _this.shopmateiralwidth = data1.length * 340;
                    _this.shoprobotwidth = data2.length * 340;
                }
            }
        });
    };
    AddShop.prototype.mnext = function () {
        if (!this.flag) {
            var H_1 = this.minemateiral.scrollH + 340;
            if (H_1 < this.minemateiralwidth) {
                var self_1 = this;
                var v_1 = 20;
                var tw_1 = setInterval(function () {
                    v_1 -= 0.1;
                    if (v_1 <= 2) {
                        v_1 = 2;
                    }
                    self_1.minemateiral.scrollH += v_1;
                    if (self_1.minemateiral.scrollH >= H_1) {
                        clearInterval(tw_1);
                    }
                }, 5);
            }
        }
        else {
            var H_2 = this.shopmateiral.scrollH + 340;
            if (H_2 < this.shopmateiralwidth) {
                var self_2 = this;
                var v_2 = 20;
                var tw_2 = setInterval(function () {
                    v_2 -= 0.1;
                    if (v_2 <= 2) {
                        v_2 = 2;
                    }
                    self_2.shopmateiral.scrollH += v_2;
                    if (self_2.shopmateiral.scrollH >= H_2) {
                        clearInterval(tw_2);
                    }
                }, 5);
            }
        }
    };
    AddShop.prototype.bnext = function () {
        if (!this.flag) {
            var H_3 = this.minerobot.scrollH + 340;
            if (H_3 < this.minerobotwidth) {
                var self_3 = this;
                var v_3 = 20;
                var tw_3 = setInterval(function () {
                    v_3 -= 0.1;
                    if (v_3 <= 2) {
                        v_3 = 2;
                    }
                    self_3.minerobot.scrollH += v_3;
                    if (self_3.minerobot.scrollH >= H_3) {
                        clearInterval(tw_3);
                    }
                }, 5);
            }
        }
        else {
            var H_4 = this.shoprobot.scrollH + 340;
            if (H_4 < this.shoprobotwidth) {
                var self_4 = this;
                var v_4 = 20;
                var tw_4 = setInterval(function () {
                    v_4 -= 0.1;
                    if (v_4 <= 2) {
                        v_4 = 2;
                    }
                    self_4.shoprobot.scrollH += v_4;
                    if (self_4.shoprobot.scrollH >= H_4) {
                        clearInterval(tw_4);
                    }
                }, 5);
            }
        }
    };
    AddShop.prototype.saleSure = function () {
        var addshopchoose = new AddShopChoose(this.minemateiralchoose, this.minerobotchoose, this);
        this.child.addChild(addshopchoose);
    };
    AddShop.prototype.buySure = function () {
        var _this = this;
        console.log(this.shopmateiralchoose, this.shoprobotchoose);
        var datas = [];
        for (var _i = 0, _a = this.shopmateiralchoose; _i < _a.length; _i++) {
            var m = _a[_i];
            m['goodsType'] = 1;
            m['cmtID'] = m['id'];
            datas.push(m);
        }
        for (var _b = 0, _c = this.shoprobotchoose; _b < _c.length; _b++) {
            var b = _c[_b];
            b['goodsType'] = 0;
            b['robotID'] = b['id'];
            datas.push(b);
        }
        var i = 0, j = 0;
        console.log(datas);
        for (var _d = 0, datas_1 = datas; _d < datas_1.length; _d++) {
            var data = datas_1[_d];
            i++;
            this.tools.ajax({
                url: "/deal",
                type: "post",
                data: {
                    dealID: data['dealID'],
                    goodsType: data['goodsType'],
                    dealType: 0,
                    robotID: data['robotID'] || null,
                    cmtID: data['cmtID'] || null,
                },
                success: function (re) {
                    j++;
                    if (re['isSuccess'] == 1) {
                        if (i == j) {
                            alert("交易成功");
                            _this.parent.removeChild(_this);
                            _this.tools.ajax({
                                url: "balance",
                                type: "get",
                                success: function (re) {
                                    if (re['isSuccess'] == 1) {
                                        _this.con.text = re['balance'];
                                    }
                                }
                            });
                        }
                    }
                    else {
                        alert("交易失败");
                        _this.parent.removeChild(_this);
                    }
                }
            });
        }
    };
    return AddShop;
}(eui.Component));
__reflect(AddShop.prototype, "AddShop");
//# sourceMappingURL=AddShop.js.map