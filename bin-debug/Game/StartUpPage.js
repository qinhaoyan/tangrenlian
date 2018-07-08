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
var StartUpPage = (function (_super) {
    __extends(StartUpPage, _super);
    function StartUpPage(balance) {
        var _this = _super.call(this) || this;
        _this.flag = false;
        _this.tools = new Tools();
        var self = _this;
        _this.skinName = "resource/skins/PlayPage.exml";
        _this.balance = balance;
        _this.init();
        //点击事件
        _this.choose.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onChoose, _this);
        _this.francklast.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.sceneLast, _this);
        _this.francknext.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.sceneNext, _this);
        _this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.goHome, _this);
        _this.parse.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.parseFun, _this);
        return _this;
    }
    StartUpPage.prototype.init = function () {
        var _this = this;
        //todo
        this.tools.ajax({
            url: "/findExploring",
            type: "get",
            success: function (re) {
                if (re['isSuccess'] == 0) {
                    _this.tools.ajax({
                        url: "/selectMap",
                        type: "get",
                        success: function (response) {
                            var dataobj = response['msg'];
                            var data = [];
                            for (var i in dataobj) {
                                data.push(dataobj[i]);
                            }
                            _this.franckgroup.scaleX = 1;
                            for (var i = 0; i < data.length; i++) {
                                var scene = new Scene(data[i]);
                                scene.x = i * 620;
                                _this.scenegroup.addChild(scene);
                            }
                            _this.scenegroup.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chooseScene, _this);
                        }
                    });
                }
                else {
                    _this.exploreid = re['msg']['0']['exploreID'];
                    _this.id = re['msg']['0']['mapID'];
                    _this.scene = new Scenes(re['msg']['0']['mapID'], _this);
                    _this.main.removeChildren();
                    _this.main.addChild(_this.scene);
                }
            }
        });
        /**/
    };
    StartUpPage.prototype.parseFun = function () {
        var _this = this;
        console.log(this.exploreid, this.id);
        this.tools.ajax({
            url: "/endExplore",
            type: "post",
            data: {
                exploreID: this.exploreid,
                mapID: this.id
            },
            success: function (re) {
                if (re['isSuccess'] == 1) {
                    alert(re['msg']);
                    _this.scene.endExplore();
                }
            }
        });
    };
    StartUpPage.prototype.onChoose = function () {
        var _this = this;
        this.tools.ajax({
            url: "/selectMap",
            type: "get",
            success: function (response) {
                var dataobj = response['msg'];
                var data = [];
                for (var i in dataobj) {
                    data.push(dataobj[i]);
                }
                var tw = egret.Tween.get(_this.franckgroup);
                if (!_this.flag) {
                    _this.flag = true;
                    _this.choose.source = "choose_1_png";
                    tw.to({ scaleX: 1 }, 100);
                    for (var i = 0; i < data.length; i++) {
                        var scene = new Scene(data[i]);
                        scene.x = i * 620;
                        _this.scenegroup.addChild(scene);
                    }
                    _this.scenegroup.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.chooseScene, _this);
                }
                else {
                    _this.flag = false;
                    _this.choose.source = "choose_0_png";
                    tw.to({ scaleX: 0 }, 100);
                }
            }
        });
    };
    StartUpPage.prototype.sceneNext = function () {
        var H = this.scoller.viewport.scrollH + 620;
        if (H < this.scoller.viewport.width) {
            var self_1 = this;
            var v_1 = 20;
            var tw_1 = setInterval(function () {
                v_1 -= 0.1;
                if (v_1 <= 2) {
                    v_1 = 2;
                }
                self_1.scoller.viewport.scrollH += v_1;
                if (self_1.scoller.viewport.scrollH >= H) {
                    clearInterval(tw_1);
                }
            }, 5);
        }
    };
    StartUpPage.prototype.sceneLast = function () {
        var H = this.scoller.viewport.scrollH - 620;
        if (H > 0) {
            var self_2 = this;
            var v_2 = 20;
            var tw_2 = setInterval(function () {
                v_2 -= 0.1;
                if (v_2 <= 2) {
                    v_2 = 2;
                }
                self_2.scoller.viewport.scrollH -= v_2;
                if (self_2.scoller.viewport.scrollH <= H) {
                    clearInterval(tw_2);
                }
            }, 5);
        }
    };
    StartUpPage.prototype.goHome = function () {
        this.parent.addChild(new HomePage(this.balance));
        this.parent.removeChild(this);
    };
    StartUpPage.prototype.chooseScene = function (e) {
        switch (e.target.parent.id) {
            case 1: {
                if (this.id != 1) {
                    this.scene = new Scenes(1, this);
                    this.id = 1;
                    this.main.removeChildren();
                    this.main.addChild(this.scene);
                }
                break;
            }
            case 2: {
                if (this.id != 2) {
                    this.scene = new Scenes(2, this);
                    this.id = 2;
                    this.main.removeChildren();
                    this.main.addChild(this.scene);
                }
                break;
            }
            case 3: {
                if (this.id != 3) {
                    //this.scene = new Scenes(3, this);
                    this.id = 3;
                    this.main.removeChildren();
                    this.main.addChild(this.scene);
                }
                break;
            }
        }
        if (e.target.parent.id) {
            this.franckgroup.scaleX = 0;
            this.flag = false;
            this.choose.source = "choose_0_png";
        }
    };
    return StartUpPage;
}(eui.Component));
__reflect(StartUpPage.prototype, "StartUpPage");
//# sourceMappingURL=StartUpPage.js.map