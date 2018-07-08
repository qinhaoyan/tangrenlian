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
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(balance) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/Home.exml";
        _this.balance = balance;
        console.log(balance);
        _this.con.text = balance.toString();
        _this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backFun, _this);
        _this.search.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.playGame, _this);
        _this.warehouse.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showHouse(0); }, _this);
        _this.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showHouse(1); }, _this);
        _this.success.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showHouse(2); }, _this);
        _this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showShop(0); }, _this);
        _this.smelter.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showSmelter(0); }, _this);
        _this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showRank(0); }, _this);
        var tw = egret.Tween.get(_this.search, { loop: true });
        tw.to({ scaleX: 1.3, scaleY: 1.3 }, 1000).wait(100)
            .to({ scaleX: 1, scaleY: 1 }, 1000).wait(100);
        return _this;
    }
    HomePage.prototype.playGame = function () {
        this.parent.addChild(new StartUpPage(this.balance));
        this.parent.removeChild(this);
    };
    HomePage.prototype.showHouse = function (type) {
        this.parent.addChild(new AddWareHouse(type));
    };
    HomePage.prototype.showShop = function (type) {
        this.parent.addChild(new AddShop(type, this.con));
    };
    HomePage.prototype.showSmelter = function (type) {
        this.parent.addChild(new AddSmelter(type));
    };
    HomePage.prototype.showRank = function (type) {
        this.parent.addChild(new AddRank(type));
    };
    HomePage.prototype.backFun = function () {
        window.location.href = "https://allenyunt.github.io/digSystem/dist";
    };
    return HomePage;
}(eui.Component));
__reflect(HomePage.prototype, "HomePage");
//# sourceMappingURL=HomePage.js.map