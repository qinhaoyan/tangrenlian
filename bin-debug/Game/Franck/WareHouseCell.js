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
var WareHouseCell = (function (_super) {
    __extends(WareHouseCell, _super);
    function WareHouseCell(obj, type) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/franck/WareHouseFranck.exml";
        console.log(obj);
        if (type == 0) {
            _this.content.source = "robot" + obj['robotID'] + "_png";
        }
        else {
            _this.content.source = obj['name'] + "_png";
        }
        //this.count.text = obj['contentcount'].toString();
        switch (obj['status']) {
            case 0: {
                _this.state.text = "空闲";
                break;
            }
            case 1: {
                _this.state.text = "挂售中";
                break;
            }
            case 2: {
                _this.state.text = "繁忙中";
                break;
            }
        }
        return _this;
    }
    return WareHouseCell;
}(eui.Component));
__reflect(WareHouseCell.prototype, "WareHouseCell");
//# sourceMappingURL=WareHouseCell.js.map