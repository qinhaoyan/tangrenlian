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
var Success = (function (_super) {
    __extends(Success, _super);
    function Success(obj) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/franck/SuccessFranck.exml";
        _this.con.text = obj['con'];
        _this.content.source = "robot" + obj['content'] + "_png";
        _this.loading.width = obj['own'] / obj['all'] * 194;
        _this.own.text = obj['own'] + "/" + obj['all'];
        _this.successname.text = obj['name'];
        _this.loadingmask.mask = _this.loading;
        return _this;
    }
    return Success;
}(eui.Component));
__reflect(Success.prototype, "Success");
//# sourceMappingURL=Success.js.map