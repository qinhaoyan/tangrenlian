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
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene(obj) {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/franck/SceneFrank.exml";
        /*if(obj['type']){
            this.isscene.visible = true;
        }
        else{
            
            this.scene.alpha = 0.5;
            this.attribute.alpha = 0.5;
            /*let colorMatrix = [
                  0.5, 0.5, 0.5, 0, 0,
                  0.5, 0.5, 0.5, 0, 0,
                  0.5, 0.5, 0.5, 0, 0,
                  0,   0,   0, 1, 0
            ];
            let colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.scene.filters = [colorFlilter];
        }*/
        _this.id = obj['mapID'];
        _this.isscene.visible = false;
        _this.scene.source = "scene" + obj['mapID'] + "_png";
        _this.scenematerial.text = obj['source'];
        _this.scenerobotnumber.text = obj['needRobot'];
        _this.scenemine.text = obj['mine'];
        for (var i = 0; i < obj['level']; i++) {
            var star = new egret.Bitmap();
            star.texture = RES.getRes('star_png');
            star.x = i * 40;
            _this.scenestar.addChild(star);
        }
        return _this;
    }
    return Scene;
}(eui.Component));
__reflect(Scene.prototype, "Scene");
//# sourceMappingURL=Scene.js.map