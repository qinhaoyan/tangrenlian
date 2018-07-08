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
var AddSmelterFranck = (function (_super) {
    __extends(AddSmelterFranck, _super);
    function AddSmelterFranck(content, chooseobj) {
        var _this = _super.call(this) || this;
        _this.flag = false;
        _this.name = '';
        _this.skinName = "resource/franck/SmelterFranck.exml";
        if (content["name"]) {
            _this.content.source = content['name'] + "_png";
            _this.id = content['cmtID'];
            _this.name = content['name'];
        }
        else {
            _this.content.source = 'robot' + content['robotID'] + "_png";
            _this.id = content['robotID'];
        }
        _this.chooseobj = chooseobj;
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chooseFun, _this);
        return _this;
    }
    AddSmelterFranck.prototype.chooseFun = function () {
        if (!this.flag) {
            this.choose.source = "choosed_png";
            this.chooseobj.push({
                id: this.id,
                name: this.name
            });
            this.flag = true;
        }
        else {
            this.choose.source = "nochoose_png";
            var id = this.chooseobj.indexOf({
                id: this.id,
                name: this.name
            });
            this.chooseobj.splice(id, 1);
            this.flag = false;
        }
    };
    return AddSmelterFranck;
}(eui.Component));
__reflect(AddSmelterFranck.prototype, "AddSmelterFranck");
//# sourceMappingURL=AddSmelterFranck.js.map