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
var MineAndShop = (function (_super) {
    __extends(MineAndShop, _super);
    function MineAndShop(obj, choose, totalcon, totalnumber, type, rorm) {
        var _this = _super.call(this) || this;
        _this.flag = false;
        _this.dealid = 0;
        _this.skinName = "resource/franck/ShopFranck.exml";
        _this.ischoose.source = "nochoose_png";
        if (rorm == 0) {
            _this.content.source = "robot" + obj['robotID'] + "_png";
            _this.id = obj['robotID'];
        }
        else {
            _this.content.source = obj['name'] + "_png";
            _this.id = obj['cmtID'];
            _this.name = obj['name'];
        }
        _this.choose = choose;
        if (type == 1) {
            _this.dealid = obj['dealID'];
            _this.con.text = obj['price'];
            _this.money = obj['price'];
            _this.totalcon = totalcon;
            _this.totalnumber = totalnumber;
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.shopChooseFun, _this);
        }
        else {
            _this.type.visible = false;
            _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.mineChooseFun, _this);
        }
        return _this;
    }
    MineAndShop.prototype.shopChooseFun = function () {
        if (!this.flag) {
            this.totalnumber['number'] = this.totalcon.text = parseInt(this.totalcon.text) + this.money;
            this.flag = true;
            this.ischoose.source = "choosed_png";
            this.chooseobj = {
                id: this.id,
                money: this.money,
                dealID: this.dealid
            };
            this.choose.push(this.chooseobj);
        }
        else {
            this.totalnumber['number'] = this.totalcon.text = parseInt(this.totalcon.text) - this.money;
            this.flag = false;
            this.ischoose.source = "nochoose_png";
            var index = this.choose.indexOf(this.chooseobj);
            this.choose.splice(index, 1);
        }
    };
    MineAndShop.prototype.mineChooseFun = function () {
        if (!this.flag) {
            this.flag = true;
            this.ischoose.source = "choosed_png";
            this.chooseobj = {
                id: this.id,
                name: this.name,
                dealID: this.dealid
            };
            this.choose.push(this.chooseobj);
        }
        else {
            this.flag = false;
            this.ischoose.source = "nochoose_png";
            var index = this.choose.indexOf(this.chooseobj);
            this.choose.splice(index, 1);
        }
    };
    return MineAndShop;
}(eui.Component));
__reflect(MineAndShop.prototype, "MineAndShop");
//# sourceMappingURL=MineAndShop.js.map