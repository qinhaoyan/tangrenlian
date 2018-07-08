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
var ShopSaleChoose = (function (_super) {
    __extends(ShopSaleChoose, _super);
    function ShopSaleChoose(obj) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/franck/ShopChooseFranck.exml";
        if (obj['name']) {
            _this.content.source = obj['name'] + "_png";
        }
        else {
            _this.content.source = "robot" + obj['id'] + "_png";
        }
        _this.con.text = obj['con'] || '0';
        _this.numb.text = obj['number'] || '0';
        _this.obj = obj;
        _this.add.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.addNumb, _this);
        _this.sub.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.subNumb, _this);
        _this.con.addEventListener(egret.Event.FOCUS_OUT, _this.onBlur, _this);
        _this.con.addEventListener(egret.Event.FOCUS_IN, _this.onFocus, _this);
        return _this;
    }
    ShopSaleChoose.prototype.addNumb = function () {
        this.numb.text = (parseInt(this.numb.text) + 1).toString();
        this.obj['number'] = this.numb.text;
    };
    ShopSaleChoose.prototype.subNumb = function () {
        if (this.numb.text != '0') {
            this.numb.text = (parseInt(this.numb.text) - 1).toString();
            this.obj['number'] = this.numb.text;
        }
    };
    ShopSaleChoose.prototype.onBlur = function (e) {
        if (e.target.text) {
            this.obj['con'] = e.target.text;
        }
        else {
            e.target.text = this.obj['con'];
        }
    };
    ShopSaleChoose.prototype.onFocus = function (e) {
        e.target.text = '';
    };
    return ShopSaleChoose;
}(eui.Component));
__reflect(ShopSaleChoose.prototype, "ShopSaleChoose");
//# sourceMappingURL=ShopSaleChoose.js.map