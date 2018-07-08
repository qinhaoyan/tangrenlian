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
var AddRank = (function (_super) {
    __extends(AddRank, _super);
    function AddRank(type) {
        var _this = _super.call(this) || this;
        _this.tools = new Tools();
        _this.skinName = "resource/skins/Rank.exml";
        _this.init(type);
        _this.rankfortune.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(0); }, _this);
        _this.rankconsume.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(1); }, _this);
        _this.ranksearch.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { _this.chooseType(2); }, _this);
        _this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closeFun, _this);
        return _this;
    }
    AddRank.prototype.init = function (type) {
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.bounceInOut);
        this.chooseType(type);
    };
    AddRank.prototype.closeFun = function () {
        var _this = this;
        var tw = egret.Tween.get(this.main);
        tw.to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.bounceInOut).call(function () { return _this.parent.removeChild(_this); });
    };
    AddRank.prototype.chooseType = function (type) {
        switch (type) {
            case 0: {
                this.rankfortune.source = "rankfortune_1_png";
                this.rankfortune.x = 0;
                this.rankfortune.y = 11;
                this.rankconsume.source = "rankconsume_0_png";
                this.rankconsume.x = 23;
                this.rankconsume.y = 243;
                this.ranksearch.source = "ranksearch_0_png";
                this.ranksearch.x = 23;
                this.ranksearch.y = 447;
                this.ranktype.text = "拥有积分数量";
                this.fortune();
                break;
            }
            case 1: {
                this.rankfortune.source = "rankfortune_0_png";
                this.rankfortune.x = 23;
                this.rankfortune.y = 31;
                this.rankconsume.source = "rankconsume_1_png";
                this.rankconsume.x = 0;
                this.rankconsume.y = 225;
                this.ranksearch.source = "ranksearch_0_png";
                this.ranksearch.x = 23;
                this.ranksearch.y = 447;
                this.ranktype.text = "消费积分数量";
                this.consume();
                break;
            }
            case 2: {
                this.rankfortune.source = "rankfortune_0_png";
                this.rankfortune.x = 23;
                this.rankfortune.y = 31;
                this.rankconsume.source = "rankconsume_0_png";
                this.rankconsume.x = 23;
                this.rankconsume.y = 243;
                this.ranksearch.source = "ranksearch_1_png";
                this.ranksearch.x = 0;
                this.ranksearch.y = 427;
                this.ranktype.text = "探索有效时长";
                this.search();
                break;
            }
        }
    };
    AddRank.prototype.fortune = function () {
        var _this = this;
        var data = [
            {
                rank: 1,
                username: "安迪安迪安迪",
                scole: 1000,
                awardnumber: 4,
                awardtype: 0
            }, {
                rank: 2,
                username: "分符侯甸内",
                scole: 545,
                awardnumber: 3,
                awardtype: 0
            }, {
                rank: 3,
                username: "江汉江汉思归客",
                scole: 532,
                awardnumber: 2,
                awardtype: 0
            }, {
                rank: 4,
                username: "kif",
                scole: 432,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 5,
                username: "hjhk",
                scole: 322,
                awardnumber: 100,
                awardtype: 1
            }, {
                rank: 6,
                username: "hou",
                scole: 311,
                awardnumber: 90,
                awardtype: 1
            }, {
                rank: 7,
                username: "米吗",
                scole: 310,
                awardnumber: 80,
                awardtype: 1
            }, {
                rank: 8,
                username: "会米",
                scole: 290,
                awardnumber: 70,
                awardtype: 1
            }, {
                rank: 9,
                username: "iu",
                scole: 280,
                awardnumber: 50,
                awardtype: 1
            }
        ];
        this.rankrowscroller.removeChildren();
        this.rankrowscroller.scrollV = 0;
        this.tools.ajax({
            url: "/Tang_rank",
            type: "get",
            data: {
                page: 1,
                limit: 20,
            },
            success: function (re) {
                console.log(re);
                //let data = re['msg'];
                //todo
                for (var i = 0; i < data.length; i++) {
                    data[i]['rank'] = i + 1;
                    var rankrow = new RankRow(data[i]);
                    rankrow.y = i * 128;
                    _this.rankrowscroller.addChild(rankrow);
                }
            }
        });
    };
    AddRank.prototype.consume = function () {
        var data = [
            {
                rank: 1,
                username: "sfsaf",
                scole: 1000,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 2,
                username: "fasf",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 3,
                username: "fsafhh",
                scole: 9999,
                awardnumber: 1000,
                awardtype: 1
            }, {
                rank: 4,
                username: "hdfhfh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 5,
                username: "hhhhhddgsh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 6,
                username: "fdsfsh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 7,
                username: "hhhhhh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 8,
                username: "hhhhhh",
                scole: 9999,
                awardnumber: 10000,
                awardtype: 1
            }, {
                rank: 9,
                username: "hhhhhh",
                scole: 9999,
                awardnumber: 10000,
                awardtype: 1
            }
        ];
        this.rankrowscroller.removeChildren();
        this.rankrowscroller.scrollV = 0;
        for (var i = 0; i < data.length; i++) {
            var rankrow = new RankRow(data[i]);
            rankrow.y = i * 128;
            this.rankrowscroller.addChild(rankrow);
        }
    };
    AddRank.prototype.search = function () {
        var data = [
            {
                rank: 1,
                username: "sfsaf",
                scole: 1000,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 2,
                username: "fasf",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 3,
                username: "fsafhh",
                scole: 9999,
                awardnumber: 1000,
                awardtype: 1
            }, {
                rank: 4,
                username: "hdfhfh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 5,
                username: "hhhhhddgsh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 6,
                username: "fdsfsh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 7,
                username: "hhhhhh",
                scole: 9999,
                awardnumber: 1,
                awardtype: 0
            }, {
                rank: 8,
                username: "hhhhhh",
                scole: 9999,
                awardnumber: 10000,
                awardtype: 1
            }, {
                rank: 9,
                username: "hhhhhh",
                scole: 9999,
                awardnumber: 10000,
                awardtype: 1
            }
        ];
        this.rankrowscroller.removeChildren();
        this.rankrowscroller.scrollV = 0;
        for (var i = 0; i < data.length; i++) {
            var rankrow = new RankRow(data[i]);
            rankrow.y = i * 128;
            this.rankrowscroller.addChild(rankrow);
        }
    };
    return AddRank;
}(eui.Component));
__reflect(AddRank.prototype, "AddRank");
//# sourceMappingURL=AddRank.js.map