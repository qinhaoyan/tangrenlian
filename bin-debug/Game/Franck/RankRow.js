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
var RankRow = (function (_super) {
    __extends(RankRow, _super);
    function RankRow(row) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/franck/RankFranck.exml";
        _this.username.text = row['username'];
        _this.scole.text = row['scole'];
        _this.awardnumber.text = '+' + row['awardnumber'];
        if (row['awardtype'] == 0) {
            _this.awardtype.source = "rankrobot_png";
            _this.awardtype.y = 39;
        }
        else {
            _this.awardtype.source = "rankcon_png";
            _this.awardtype.y = 35;
        }
        if (row['rank'] <= 3) {
            _this.ranknumber.visible = false;
            _this.ranknumbericon.source = "cup" + row['rank'] + "_png";
        }
        else {
            _this.ranknumbericon.visible = false;
            _this.ranknumber.text = row['rank'];
        }
        return _this;
    }
    return RankRow;
}(eui.Component));
__reflect(RankRow.prototype, "RankRow");
//# sourceMappingURL=RankRow.js.map