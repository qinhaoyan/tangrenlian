var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneTotal = (function () {
    function SceneTotal(obj1, obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
    }
    //滚屏函数
    SceneTotal.prototype.scollScreen = function (v) {
        var width = 5400;
        this.obj1.x -= v;
        this.obj2.x -= v;
        if (this.obj1.x <= -width) {
            this.obj1.x = width - (v - (width % v));
        }
        if (this.obj2.x <= -width) {
            this.obj2.x = width - (v - (width % v));
        }
    };
    return SceneTotal;
}());
__reflect(SceneTotal.prototype, "SceneTotal");
//# sourceMappingURL=SceneTotal.js.map