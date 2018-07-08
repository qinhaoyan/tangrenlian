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
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/FirstPage.exml";
        //egret.startTick(this.upDate,this);
        _this.firstpage_start.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.playGame, _this);
        _this.warehouse.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showHouse(0); }, _this);
        _this.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showHouse(1); }, _this);
        _this.success.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showHouse(2); }, _this);
        _this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showShop(0); }, _this);
        _this.smelter.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showSmelter(0); }, _this);
        _this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.showRank(0); }, _this);
        return _this;
    }
    /*	private upDate(timestamp:number):any{
            
            return false;
        }
    */
    Game.prototype.playGame = function () {
        //this.parent.addChild(new StartUpPage());
        this.parent.removeChild(this);
    };
    Game.prototype.showHouse = function (type) {
        this.parent.addChild(new AddWareHouse(type));
    };
    Game.prototype.showShop = function (type) {
        //this.parent.addChild(new AddShop(type));
    };
    Game.prototype.showSmelter = function (type) {
        this.parent.addChild(new AddSmelter(type));
    };
    Game.prototype.showRank = function (type) {
        this.parent.addChild(new AddRank(type));
    };
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map