var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o["throw"](e))}catch(t){s(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,a)}c((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,s&&(i=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(o){n=[6,o],s=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},Game=function(e){function t(){var t=e.call(this)||this;return t.skinName="resource/skins/FirstPage.exml",t.firstpage_start.addEventListener(egret.TouchEvent.TOUCH_TAP,t.playGame,t),t.warehouse.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showHouse(0)},t),t.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showHouse(1)},t),t.success.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showHouse(2)},t),t.shop.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showShop(0)},t),t.smelter.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showSmelter(0)},t),t.rank.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showRank(0)},t),t}return __extends(t,e),t.prototype.playGame=function(){this.parent.addChild(new StartUpPage),this.parent.removeChild(this)},t.prototype.showHouse=function(e){this.parent.addChild(new AddWareHouse(e))},t.prototype.showShop=function(e){this.parent.addChild(new AddShop(e))},t.prototype.showSmelter=function(e){this.parent.addChild(new AddSmelter(e))},t.prototype.showRank=function(e){this.parent.addChild(new AddRank(e))},t}(eui.Component);__reflect(Game.prototype,"Game");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function o(o){t.call(n,o,e)}if(RES.hasRes(e)){var r=RES.getRes(e);r?o(r):RES.getResAsync(e,o,this)}else RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return t=n.sent(),console.log(t),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,o=this;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),e=new LoadingUI,this.stage.addChild(e),t=new egret.Bitmap,[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("loading",1).then(function(){t.texture=RES.getRes("bg_jpg"),o.addChild(t)})];case 3:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 4:return r.sent(),this.stage.removeChild(e),this.removeChild(t),[3,6];case 5:return n=r.sent(),console.error(n),[3,6];case 6:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var o=new eui.Theme("resource/default.thm.json",e.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){this.addChild(new HomePage)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,o){function r(e){t.call(o,e)}function s(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),n.call(o))}var i=this;"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(o,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),r(e),egret.callLater(function(){t.call(o,generateEUI2)},i)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Tools=function(){function e(){}return e.prototype.ajax=function(e){var t,n=new XMLHttpRequest;t=e.data?JSON.stringify(e.data).replace(/:/g,"=").replace(/,/g,"&").replace(/"/g,"").replace("{","").replace("}",""):null,n.open(e.type,e.url,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(t),n.onreadystatechange=function(){4!=n.readyState||200!=n.status&&304!=n.status||e.success.call(this,n.responseText)}},e}();__reflect(Tools.prototype,"Tools");var AddRank=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/skins/Rank.exml",n.init(t),n.rankfortune.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(0)},n),n.rankconsume.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(1)},n),n.ranksearch.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(2)},n),n.close.addEventListener(egret.TouchEvent.TOUCH_TAP,n.closeFun,n),n}return __extends(t,e),t.prototype.init=function(e){var t=egret.Tween.get(this.main);t.to({scaleX:1,scaleY:1},300,egret.Ease.bounceInOut),this.chooseType(e)},t.prototype.closeFun=function(){var e=this,t=egret.Tween.get(this.main);t.to({scaleX:0,scaleY:0},300,egret.Ease.bounceInOut).call(function(){return e.parent.removeChild(e)})},t.prototype.chooseType=function(e){switch(e){case 0:this.rankfortune.source="rankfortune_1_png",this.rankfortune.x=0,this.rankfortune.y=11,this.rankconsume.source="rankconsume_0_png",this.rankconsume.x=23,this.rankconsume.y=243,this.ranksearch.source="ranksearch_0_png",this.ranksearch.x=23,this.ranksearch.y=447,this.ranktype.text="拥有积分数量",this.fortune();break;case 1:this.rankfortune.source="rankfortune_0_png",this.rankfortune.x=23,this.rankfortune.y=31,this.rankconsume.source="rankconsume_1_png",this.rankconsume.x=0,this.rankconsume.y=225,this.ranksearch.source="ranksearch_0_png",this.ranksearch.x=23,this.ranksearch.y=447,this.ranktype.text="消费积分数量",this.consume();break;case 2:this.rankfortune.source="rankfortune_0_png",this.rankfortune.x=23,this.rankfortune.y=31,this.rankconsume.source="rankconsume_0_png",this.rankconsume.x=23,this.rankconsume.y=243,this.ranksearch.source="ranksearch_1_png",this.ranksearch.x=0,this.ranksearch.y=427,this.ranktype.text="探索有效时长",this.search()}},t.prototype.fortune=function(){var e=[{rank:1,username:"安迪安迪安迪",scole:1e3,awardnumber:1,awardtype:0},{rank:2,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:3,username:"hhhhhh",scole:9999,awardnumber:1e3,awardtype:1},{rank:4,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:5,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:6,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:7,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:8,username:"hhhhhh",scole:9999,awardnumber:1e4,awardtype:1},{rank:9,username:"hhhhhh",scole:9999,awardnumber:1e4,awardtype:1}];this.rankrowscroller.removeChildren(),this.rankrowscroller.scrollV=0;for(var t=0;t<e.length;t++){var n=new RankRow(e[t]);n.y=128*t,this.rankrowscroller.addChild(n)}},t.prototype.consume=function(){var e=[{rank:1,username:"sfsaf",scole:1e3,awardnumber:1,awardtype:0},{rank:2,username:"fasf",scole:9999,awardnumber:1,awardtype:0},{rank:3,username:"fsafhh",scole:9999,awardnumber:1e3,awardtype:1},{rank:4,username:"hdfhfh",scole:9999,awardnumber:1,awardtype:0},{rank:5,username:"hhhhhddgsh",scole:9999,awardnumber:1,awardtype:0},{rank:6,username:"fdsfsh",scole:9999,awardnumber:1,awardtype:0},{rank:7,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:8,username:"hhhhhh",scole:9999,awardnumber:1e4,awardtype:1},{rank:9,username:"hhhhhh",scole:9999,awardnumber:1e4,awardtype:1}];this.rankrowscroller.removeChildren(),this.rankrowscroller.scrollV=0;for(var t=0;t<e.length;t++){var n=new RankRow(e[t]);n.y=128*t,this.rankrowscroller.addChild(n)}},t.prototype.search=function(){var e=[{rank:1,username:"sfsaf",scole:1e3,awardnumber:1,awardtype:0},{rank:2,username:"fasf",scole:9999,awardnumber:1,awardtype:0},{rank:3,username:"fsafhh",scole:9999,awardnumber:1e3,awardtype:1},{rank:4,username:"hdfhfh",scole:9999,awardnumber:1,awardtype:0},{rank:5,username:"hhhhhddgsh",scole:9999,awardnumber:1,awardtype:0},{rank:6,username:"fdsfsh",scole:9999,awardnumber:1,awardtype:0},{rank:7,username:"hhhhhh",scole:9999,awardnumber:1,awardtype:0},{rank:8,username:"hhhhhh",scole:9999,awardnumber:1e4,awardtype:1},{rank:9,username:"hhhhhh",scole:9999,awardnumber:1e4,awardtype:1}];this.rankrowscroller.removeChildren(),this.rankrowscroller.scrollV=0;for(var t=0;t<e.length;t++){var n=new RankRow(e[t]);n.y=128*t,this.rankrowscroller.addChild(n)}},t}(eui.Component);__reflect(AddRank.prototype,"AddRank");var AddShop=function(e){function t(t){var n=e.call(this)||this;return n.flag=!1,n.minemateiralchoose=[],n.minerobotchoose=[],n.minetotal={number:"0"},n.shopmateiralchoose=[],n.shoprobotchoose=[],n.shoptotal={number:"0"},n.minefirstget=!0,n.shopfirstget=!0,n.skinName="resource/skins/Shop.exml",n.init(t),n.mine.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(0)},n),n.shop.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(1)},n),n.mateiralnext.addEventListener(egret.TouchEvent.TOUCH_TAP,n.mnext,n),n.robotnext.addEventListener(egret.TouchEvent.TOUCH_TAP,n.bnext,n),n.close.addEventListener(egret.TouchEvent.TOUCH_TAP,n.closeFun,n),n.sale.addEventListener(egret.TouchEvent.TOUCH_TAP,n.saleSure,n),n.buy.addEventListener(egret.TouchEvent.TOUCH_TAP,n.buySure,n),n}return __extends(t,e),t.prototype.init=function(e){var t=egret.Tween.get(this.main);t.to({scaleX:1,scaleY:1},300,egret.Ease.bounceInOut),this.chooseType(e)},t.prototype.closeFun=function(){var e=this,t=egret.Tween.get(this.main);t.to({scaleX:0,scaleY:0},300,egret.Ease.bounceInOut).call(function(){return e.parent.removeChild(e)})},t.prototype.chooseType=function(e){switch(e){case 0:this.mine.source="shopmineicon_1_png",this.shop.source="shopicon_0_png",this.sale.visible=!0,this.buy.visible=!1,this.minemateiral.visible=!0,this.minerobot.visible=!0,this.shopmateiral.visible=!1,this.shoprobot.visible=!1,this.minefirstget&&(this.getmine(),this.minefirstget=!1),this.total.visible=!1,this.totalword.visible=!1,this.flag=!1;break;case 1:this.mine.source="shopmineicon_0_png",this.shop.source="shopicon_1_png",this.sale.visible=!1,this.buy.visible=!0,this.minemateiral.visible=!1,this.minerobot.visible=!1,this.shopmateiral.visible=!0,this.shoprobot.visible=!0,this.shopfirstget&&(this.getshop(),this.shopfirstget=!1),this.total.visible=!0,this.totalword.visible=!0,this.total.text=this.shoptotal.number,this.flag=!0}},t.prototype.getmine=function(){for(var e=[{con:1e3,contentId:1},{con:1e3,contentId:2},{con:1e3,contentId:3},{con:1e3,contentId:4},{con:1e3,contentId:5},{con:1e3,contentId:6},{con:1e3,contentId:7},{con:1e3,contentId:8},{con:1e3,contentId:9}],t=0;t<e.length;t++){var n=new MineAndShop(e[t],this.minemateiralchoose,null,null,0);n.x=350*t,this.minemateiral.addChild(n)}for(var o=[{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1}],t=0;t<o.length;t++){var n=new MineAndShop(o[t],this.minerobotchoose,null,null,0);n.x=350*t,this.minerobot.addChild(n)}this.minemateiralwidth=340*e.length,this.minerobotwidth=340*o.length},t.prototype.getshop=function(){for(var e=[{con:1e3,contentId:1},{con:1e3,contentId:2},{con:1e3,contentId:3},{con:1e3,contentId:4},{con:1e3,contentId:5},{con:1e3,contentId:6},{con:1e3,contentId:7},{con:1e3,contentId:8},{con:1e3,contentId:9}],t=0;t<e.length;t++){var n=new MineAndShop(e[t],this.shopmateiralchoose,this.total,this.shoptotal,1);n.x=350*t,this.shopmateiral.addChild(n)}for(var o=[{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1},{con:1e3,contentId:1}],t=0;t<o.length;t++){var n=new MineAndShop(o[t],this.shoprobotchoose,this.total,this.shoptotal,1);n.x=350*t,this.shoprobot.addChild(n)}this.shopmateiralwidth=340*e.length,this.shoprobotwidth=340*o.length},t.prototype.mnext=function(){if(this.flag){var e=this.shopmateiral.scrollH+340;if(e<this.shopmateiralwidth)var t=this,n=20,o=setInterval(function(){n-=.1,2>=n&&(n=2),t.shopmateiral.scrollH+=n,t.shopmateiral.scrollH>=e&&clearInterval(o)},5)}else{var r=this.minemateiral.scrollH+340;if(r<this.minemateiralwidth)var s=this,i=20,a=setInterval(function(){i-=.1,2>=i&&(i=2),s.minemateiral.scrollH+=i,s.minemateiral.scrollH>=r&&clearInterval(a)},5)}},t.prototype.bnext=function(){if(this.flag){var e=this.shoprobot.scrollH+340;if(e<this.shoprobotwidth)var t=this,n=20,o=setInterval(function(){n-=.1,2>=n&&(n=2),t.shoprobot.scrollH+=n,t.shoprobot.scrollH>=e&&clearInterval(o)},5)}else{var r=this.minerobot.scrollH+340;if(r<this.minerobotwidth)var s=this,i=20,a=setInterval(function(){i-=.1,2>=i&&(i=2),s.minerobot.scrollH+=i,s.minerobot.scrollH>=r&&clearInterval(a)},5)}},t.prototype.saleSure=function(){this.parent.addChild(new AddShopChoose(this.minemateiralchoose,this.minerobotchoose))},t.prototype.buySure=function(){console.log(this.shopmateiralchoose,this.shoprobotchoose)},t}(eui.Component);__reflect(AddShop.prototype,"AddShop");var AddShopChoose=function(e){function t(t,n){var o=e.call(this)||this;o.skinName="resource/skins/ShopChoose.exml",o.init(),o.close.addEventListener(egret.TouchEvent.TOUCH_TAP,o.closeFun,o);for(var r=0,s=0,i=t;s<i.length;s++){var a=i[s],c=new ShopSaleChoose(a);c.y=170*r,o.content.addChild(c),r++}for(var h=0,l=n;h<l.length;h++){var u=l[h],c=new ShopSaleChoose(u);c.y=170*r,o.content.addChild(c),r++}return o}return __extends(t,e),t.prototype.init=function(){var e=egret.Tween.get(this.main);e.to({scaleX:1,scaleY:1},300,egret.Ease.bounceInOut)},t.prototype.closeFun=function(){var e=this,t=egret.Tween.get(this.main);t.to({scaleX:0,scaleY:0},300,egret.Ease.bounceInOut).call(function(){return e.parent.removeChild(e)})},t}(eui.Component);__reflect(AddShopChoose.prototype,"AddShopChoose");var AddSmelter=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/skins/Smelter.exml",n.init(t),n.compoundicon.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(0)},n),n.dismentleicon.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(1)},n),n.close.addEventListener(egret.TouchEvent.TOUCH_TAP,n.closeFun,n),n}return __extends(t,e),t.prototype.init=function(e){console.log(this.main);var t=egret.Tween.get(this.main);t.to({scaleX:1,scaleY:1},300,egret.Ease.bounceInOut),this.chooseType(e)},t.prototype.closeFun=function(){var e=this,t=egret.Tween.get(this.main);t.to({scaleX:0,scaleY:0},300,egret.Ease.bounceInOut).call(function(){return e.parent.removeChild(e)})},t.prototype.chooseType=function(e){switch(e){case 0:this.compound.visible=!0,this.dismentle.visible=!1,this.compoundicon.source="compoundicon_1_png",this.dismentleicon.source="dismentlecion_0_png";break;case 1:this.compound.visible=!1,this.dismentle.visible=!0,this.compoundicon.source="compoundicon_0_png",this.dismentleicon.source="dismentlecion_1_png"}},t}(eui.Component);__reflect(AddSmelter.prototype,"AddSmelter");var AddWareHouse=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/skins/WareHouse.exml",n.init(t),n.mine.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(0)},n),n.success.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.chooseType(2)},n),n.rect.addEventListener(egret.TouchEvent.TOUCH_TAP,n.removeThis,n),n}return __extends(t,e),t.prototype.init=function(e){var t=egret.Tween.get(this.main);t.to({y:504},400,egret.Ease.cubicIn),this.chooseType(e)},t.prototype.chooseType=function(e){switch(e){case 0:this.mine.source="mineicon_1_png",this.illustrated.source="illustratedicon_0_png",this.success.source="successicon_0_png",this.bg.source="warehousebg_png",this.row0.visible=!0,this.row1.visible=!1,this.row2.visible=!1,this.getMine();break;case 1:this.mine.source="mineicon_0_png",this.illustrated.source="illustratedicon_1_png",this.success.source="successicon_0_png",this.bg.source="warehousebg1_png",this.row0.visible=!1,this.row1.visible=!0,this.row2.visible=!1;break;case 2:this.mine.source="mineicon_0_png",this.illustrated.source="illustratedicon_0_png",this.success.source="successicon_1_png",this.bg.source="warehousebg1_png",this.row0.visible=!1,this.row1.visible=!1,this.row2.visible=!0,this.getSuccess()}},t.prototype.getMine=function(){for(var e=[{contentid:1,contentcount:10,state:"空闲"},{contentid:1,contentcount:2,state:"空闲"},{contentid:1,contentcount:6,state:"空闲"},{contentid:1,contentcount:7,state:"空闲"},{contentid:1,contentcount:7,state:"空闲"},{contentid:1,contentcount:7,state:"空闲"},{contentid:1,contentcount:7,state:"空闲"},{contentid:1,contentcount:7,state:"空闲"},{contentid:1,contentcount:7,state:"空闲"}],t=0;t<e.length;t++){var n=new WareHouseCell(e[t]);n.x=306*t,this.row0.addChild(n)}},t.prototype.getSuccess=function(){for(var e=[{con:1010,content:1,all:1e3,own:300,name:"小有成就"},{con:1040,content:1,all:500,own:400,name:"小有成就"},{con:2020,content:1,all:700,own:300,name:"小有成就"},{con:10,content:1,all:3e3,own:800,name:"小有成就"},{con:30,content:1,all:2e3,own:300,name:"小有成就"},{con:12200,content:1,all:3e3,own:400,name:"小有成就"},{con:30,content:1,all:2e3,own:300,name:"小有成就"},{con:12200,content:1,all:3e3,own:400,name:"小有成就"}],t=0;t<e.length;t++){var n=new Success(e[t]);n.x=306*t,this.row2.addChild(n)}},t.prototype.removeThis=function(){var e=this,t=egret.Tween.get(this.main);t.to({y:1080},400,egret.Ease.cubicIn),t.call(function(){e.parent.removeChild(e)})},t}(eui.Component);__reflect(AddWareHouse.prototype,"AddWareHouse");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.loadingbg=new egret.Shape,this.loadingbg.graphics.beginFill(4403233,.8),this.loadingbg.graphics.drawRect(200,860,1520,8),this.loadingbg.graphics.endFill(),this.loading=new egret.Shape,this.addChild(this.loadingbg),this.addChild(this.loading),this.addChild(this.textField),this.textField.y=900,this.textField.width=1920,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="资源加载中 "+e+"/"+t,this.loading.graphics.beginFill(9063174,.8),this.loading.graphics.drawRect(200,860,1520*(e/t),8),this.loading.graphics.endFill()},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var HomePage=function(e){function t(){var t=e.call(this)||this;t.skinName="resource/skins/Home.exml",t.search.addEventListener(egret.TouchEvent.TOUCH_TAP,t.playGame,t),t.warehouse.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showHouse(0)},t),t.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showHouse(1)},t),t.success.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showHouse(2)},t),t.shop.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showShop(0)},t),t.smelter.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showSmelter(0)},t),t.rank.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.showRank(0)},t);var n=egret.Tween.get(t.search,{loop:!0});n.to({scaleX:1.3,scaleY:1.3},1e3).wait(100).to({scaleX:1,scaleY:1},1e3).wait(100);var o=new Tools;return o.ajax({url:"http://118.24.113.39:5001/login_in",data:{account:"123",password:"123"},type:"post",success:function(e){console.log(e)}}),t}return __extends(t,e),t.prototype.playGame=function(){this.parent.addChild(new StartUpPage),this.parent.removeChild(this)},t.prototype.showHouse=function(e){this.parent.addChild(new AddWareHouse(e))},t.prototype.showShop=function(e){this.parent.addChild(new AddShop(e))},t.prototype.showSmelter=function(e){this.parent.addChild(new AddSmelter(e))},t.prototype.showRank=function(e){this.parent.addChild(new AddRank(e))},t}(eui.Component);__reflect(HomePage.prototype,"HomePage");var PlayRobot=function(e){function t(t,n){var o=e.call(this)||this;return o.v=t,o.s=n,o.skinName="resource/skins/Robot.exml",o}return __extends(t,e),t.prototype.animate=function(){this.robot.y+=this.v,this.shadow.scaleX+=this.s,this.robot.y<60&&(this.v=.5,this.s=.005),this.robot.y>125&&(this.v=-.5,this.s=-.005)},t}(eui.Component);__reflect(PlayRobot.prototype,"PlayRobot");var StartUpPage=function(e){function t(){var t=e.call(this)||this;t.flag=!1,t.tools=new Tools;return t.skinName="resource/skins/PlayPage.exml",t.main.addChild(new SceneBg_1),t.choose.addEventListener(egret.TouchEvent.TOUCH_TAP,t.onChoose,t),t.francklast.addEventListener(egret.TouchEvent.TOUCH_TAP,t.sceneLast,t),t.francknext.addEventListener(egret.TouchEvent.TOUCH_TAP,t.sceneNext,t),t.back.addEventListener(egret.TouchEvent.TOUCH_TAP,t.goHome,t),t}return __extends(t,e),t.prototype.onChoose=function(){this.tools.ajax({url:"http://118.24.113.39:5001/selectMap",type:"get",success:function(e){var t=egret.Tween.get(this.franckgroup);if(this.flag)this.flag=!1,this.choose.source="choose_0_png",t.to({scaleX:0},100);else{this.flag=!0,this.choose.source="choose_1_png",t.to({scaleX:1},100);for(var n=0;n<e.length;n++){var o=new Scene(e[n]);o.x=620*n,this.scenegroup.addChild(o)}}}})},t.prototype.sceneNext=function(){var e=this.scoller.viewport.scrollH+620;if(e<this.scoller.viewport.width)var t=this,n=20,o=setInterval(function(){n-=.1,2>=n&&(n=2),t.scoller.viewport.scrollH+=n,t.scoller.viewport.scrollH>=e&&clearInterval(o)},5)},t.prototype.sceneLast=function(){var e=this.scoller.viewport.scrollH-620;if(e>0)var t=this,n=20,o=setInterval(function(){n-=.1,2>=n&&(n=2),t.scoller.viewport.scrollH-=n,t.scoller.viewport.scrollH<=e&&clearInterval(o)},5)},t.prototype.goHome=function(){this.parent.addChild(new HomePage),this.parent.removeChild(this)},t}(eui.Component);__reflect(StartUpPage.prototype,"StartUpPage");var MineAndShop=function(e){function t(t,n,o,r,s){var i=e.call(this)||this;return i.flag=!1,i.skinName="resource/franck/ShopFranck.exml",i.ischoose.source="nochoose_png",i.content.source="robot"+t.contentId+"_png",i.choose=n,i.id=t.contentId,1==s?(i.con.text=t.con,i.money=t.con,i.totalcon=o,i.totalnumber=r,i.addEventListener(egret.TouchEvent.TOUCH_TAP,i.shopChooseFun,i)):(i.type.visible=!1,i.addEventListener(egret.TouchEvent.TOUCH_TAP,i.mineChooseFun,i)),i}return __extends(t,e),t.prototype.shopChooseFun=function(){if(this.flag){this.totalnumber.number=this.totalcon.text=parseInt(this.totalcon.text)-this.money,this.flag=!1,this.ischoose.source="nochoose_png";var e=this.choose.indexOf(this.chooseobj);this.choose.splice(e,1)}else this.totalnumber.number=this.totalcon.text=parseInt(this.totalcon.text)+this.money,this.flag=!0,this.ischoose.source="choosed_png",this.chooseobj={id:this.id,money:this.money},this.choose.push(this.chooseobj)},t.prototype.mineChooseFun=function(){if(this.flag){this.flag=!1,this.ischoose.source="nochoose_png";var e=this.choose.indexOf(this.chooseobj);this.choose.splice(e,1)}else this.flag=!0,this.ischoose.source="choosed_png",this.chooseobj={id:this.id},this.choose.push(this.chooseobj)},t}(eui.Component);__reflect(MineAndShop.prototype,"MineAndShop");var RankRow=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/franck/RankFranck.exml",n.username.text=t.username,n.scole.text=t.scole,n.awardnumber.text="+"+t.awardnumber,0==t.awardtype?(n.awardtype.source="rankrobot_png",n.awardtype.y=39):(n.awardtype.source="rankcon_png",n.awardtype.y=35),t.rank<=3?(n.ranknumber.visible=!1,n.ranknumbericon.source="cup"+t.rank+"_png"):(n.ranknumbericon.visible=!1,n.ranknumber.text=t.rank),n}return __extends(t,e),t}(eui.Component);__reflect(RankRow.prototype,"RankRow");var Scene=function(e){function t(t){var n=e.call(this)||this;n.skinName="resource/franck/SceneFrank.exml",t.type?n.isscene.visible=!0:(n.isscene.visible=!1,n.scene.alpha=.5,n.attribute.alpha=.5),n.scene.source="scene"+t.index+"_png",n.scenematerial.text=t.material,n.scenerobotnumber.text=t.robotnumber,n.scenemine.text=t.mine;for(var o=0;o<t.star;o++){var r=new egret.Bitmap;r.texture=RES.getRes("star_png"),r.x=40*o,n.scenestar.addChild(r)}return n}return __extends(t,e),t}(eui.Component);__reflect(Scene.prototype,"Scene");var ShopSaleChoose=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/franck/ShopChooseFranck.exml",n.content.source="robot"+t.id+"_png",n.con.prompt=t.con||"0",n.numb.text=t.number||"0",n.obj=t,n.add.addEventListener(egret.TouchEvent.TOUCH_TAP,n.addNumb,n),n.add.addEventListener(egret.TouchEvent.TOUCH_TAP,n.subNumb,n),console.log(n.con),n}return __extends(t,e),t.prototype.addNumb=function(){this.numb.text=(parseInt(this.numb.text)+1).toString(),this.obj.number=this.numb.text,console.log(this.numb.text,this.obj,this)},t.prototype.subNumb=function(){this.numb.text=(parseInt(this.numb.text)-1).toString(),this.obj.number=this.numb.text},t.prototype.onChang=function(e){this.obj.con=e.target.text},t}(eui.Component);__reflect(ShopSaleChoose.prototype,"ShopSaleChoose");var Success=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/franck/SuccessFranck.exml",n.con.text=t.con,n.content.source="robot"+t.content+"_png",n.loading.width=t.own/t.all*194,n.own.text=t.own+"/"+t.all,n.successname.text=t.name,n.loadingmask.mask=n.loading,n}return __extends(t,e),t}(eui.Component);__reflect(Success.prototype,"Success");var WareHouseCell=function(e){function t(t){var n=e.call(this)||this;return n.skinName="resource/franck/WareHouseFranck.exml",n.content.source="robot"+t.contentid+"_png",n.count.text=t.contentcount.toString(),n.state.text=t.state,n}return __extends(t,e),t}(eui.Component);__reflect(WareHouseCell.prototype,"WareHouseCell");var SceneTotal=function(){function e(e,t){this.obj1=e,this.obj2=t}return e.prototype.scollScreen=function(e){var t=5400;this.obj1.x-=e,this.obj2.x-=e,this.obj1.x<=-t&&(this.obj1.x=t-(e-t%e)),this.obj2.x<=-t&&(this.obj2.x=t-(e-t%e))},e}();__reflect(SceneTotal.prototype,"SceneTotal");var SceneBg_1=function(e){function t(){var t=e.call(this)||this;t.metoersystem=[],t.skinName="resource/scenebackground/Scene_1.exml",t.scollscene4=new SceneTotal(t.scene4,t.scene40),t.scollscene3=new SceneTotal(t.scene3,t.scene30),t.scollscene2=new SceneTotal(t.scene2group,t.scene2group0),t.scollscene1=new SceneTotal(t.scene1,t.scene10),t.scollfish1=new SceneTotal(t.fish1,t.fish10),t.scollfish2=new SceneTotal(t.fish2,t.fish20),t.scollfish3=new SceneTotal(t.fish3,t.fish30);var n=RES.getRes("scene1_firestar_png"),o=RES.getRes("scene1_firestar_json"),r=new particle.GravityParticleSystem(n,o);r.start(),t.fire1.addChild(r);var s=new particle.GravityParticleSystem(n,o);s.start(),t.fire2.addChild(s);var i=new particle.GravityParticleSystem(n,o);i.start(),t.fire3.addChild(i);var a=new particle.GravityParticleSystem(n,o);a.start(),t.fire4.addChild(a);var c=RES.getRes("scene1_firestar2_json"),h=new particle.GravityParticleSystem(n,c);h.start(),t.fire5.addChild(h);var l=new particle.GravityParticleSystem(n,c);return l.start(),t.fire6.addChild(l),t.playrobot=new PlayRobot(-.5,-.005),t.robot.addChild(t.playrobot),egret.startTick(t.upDate,t),t}return __extends(t,e),t.prototype.upDate=function(e){this.scollscene4.scollScreen(2.4),this.scollscene3.scollScreen(3),this.scollscene2.scollScreen(3),this.scollscene1.scollScreen(3),this.scollfish1.scollScreen(3.4),this.scollfish2.scollScreen(3.2),this.scollfish3.scollScreen(2.8),this.playrobot.animate(),Math.random()>.97&&this.metoersystem.push(this.createMetoer());for(var t=0;t<this.metoersystem.length;t++)this.metoersystem[t].x-=6,this.metoersystem[t].y+=8,this.metoersystem[t].y>600&&this.metoer.removeChild(this.metoersystem.shift());return!1},t.prototype.createMetoer=function(){var e=RES.getRes("scene1_meteor_png"),t=RES.getRes("scene1_meteor_json"),n=new particle.GravityParticleSystem(e,t);return n.x=1700*Math.random()+200,n.y=100*Math.random(),n.start(),this.metoer.addChild(n),n},t}(eui.Component);__reflect(SceneBg_1.prototype,"SceneBg_1");