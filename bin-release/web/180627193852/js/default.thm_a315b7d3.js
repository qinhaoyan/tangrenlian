window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 8;
		this.minWidth = 20;
	}
	var _proto = HScrollBarSkin.prototype;

	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 8;
		this.minWidth = 20;
	}
	var _proto = HSliderSkin.prototype;

	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ItemRendererSkin.prototype;

	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 230;
		this.minWidth = 450;
	}
	var _proto = PanelSkin.prototype;

	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 18;
		this.minWidth = 30;
	}
	var _proto = ProgressBarSkin.prototype;

	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 20;
		this.minWidth = 20;
	}
	var _proto = ScrollerSkin.prototype;

	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.percentHeight = 100;
		t.left = "10";
		t.right = "10";
		t.size = 36;
		t.textAlign = "center";
		t.textColor = 0xff8e35;
		t.verticalCenter = "0";
		t.width = 200;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.left = 10;
		t.right = 10;
		t.size = 36;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xff8e35;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 20;
		this.minWidth = 8;
	}
	var _proto = VScrollBarSkin.prototype;

	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 30;
		this.minWidth = 25;
	}
	var _proto = VSliderSkin.prototype;

	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/franck/RankFranck.exml'] = window.RankFranck = (function (_super) {
	__extends(RankFranck, _super);
	function RankFranck() {
		_super.call(this);
		this.skinParts = ["ranknumbericon","ranknumber","username","scole","awardnumber","awardtype"];
		
		this.height = 128;
		this.width = 1535;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = RankFranck.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.ranknumbericon_i(),this.ranknumber_i(),this.username_i(),this.scole_i(),this.awardnumber_i(),this.awardtype_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rowbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ranknumbericon_i = function () {
		var t = new eui.Image();
		this.ranknumbericon = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cup1_png";
		t.x = 53.24000000000001;
		t.y = 33;
		return t;
	};
	_proto.ranknumber_i = function () {
		var t = new eui.Label();
		this.ranknumber = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1111";
		t.textAlign = "center";
		t.textColor = 0x7c3800;
		t.width = 125.55;
		t.x = 24.220000000000002;
		t.y = 46.00000000000001;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "安迪安迪安迪";
		t.textAlign = "center";
		t.textColor = 0x7c3800;
		t.width = 344.79;
		t.x = 255.94;
		t.y = 46.00000000000001;
		return t;
	};
	_proto.scole_i = function () {
		var t = new eui.Label();
		this.scole = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1000";
		t.textAlign = "center";
		t.textColor = 0x7c3800;
		t.width = 182.51;
		t.x = 827.6100000000001;
		t.y = 46.00000000000001;
		return t;
	};
	_proto.awardnumber_i = function () {
		var t = new eui.Label();
		this.awardnumber = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "+1";
		t.textAlign = "right";
		t.textColor = 0x7c3800;
		t.width = 131.39;
		t.x = 1200.42;
		t.y = 46.00000000000001;
		return t;
	};
	_proto.awardtype_i = function () {
		var t = new eui.Image();
		this.awardtype = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rankrobot_png";
		t.x = 1345.9;
		t.y = 39;
		return t;
	};
	return RankFranck;
})(eui.Skin);generateEUI.paths['resource/franck/SceneFrank.exml'] = window.SceneFrank = (function (_super) {
	__extends(SceneFrank, _super);
	function SceneFrank() {
		_super.call(this);
		this.skinParts = ["isscene","scene","scenematerial","scenerobotnumber","scenemine","scenestar","attribute"];
		
		this.height = 520;
		this.width = 613;
		this.elementsContent = [this._Group2_i(),this.attribute_i(),this._Group3_i()];
	}
	var _proto = SceneFrank.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 400;
		t.left = 0;
		t.right = 1;
		t.top = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 369;
		t.width = 613;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this.isscene_i(),this.scene_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 312;
		t.width = 555;
		t.x = 29;
		t.y = 29;
		return t;
	};
	_proto.isscene_i = function () {
		var t = new eui.Image();
		this.isscene = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "scened_png";
		t.top = 0;
		return t;
	};
	_proto.scene_i = function () {
		var t = new eui.Image();
		this.scene = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.attribute_i = function () {
		var t = new eui.Group();
		this.attribute = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 153;
		t.left = 0;
		t.right = 0;
		t.y = 366;
		t.elementsContent = [this.scenematerial_i(),this._Label1_i(),this.scenerobotnumber_i(),this._Label2_i(),this.scenemine_i(),this._Label3_i(),this.scenestar_i()];
		return t;
	};
	_proto.scenematerial_i = function () {
		var t = new eui.Label();
		this.scenematerial = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "";
		t.width = 524;
		t.x = 41;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "机器人数量：";
		t.width = 524;
		t.x = 41;
		t.y = 39.670000000000016;
		return t;
	};
	_proto.scenerobotnumber_i = function () {
		var t = new eui.Label();
		this.scenerobotnumber = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "";
		t.width = 385.5;
		t.x = 179.5;
		t.y = 39.670000000000016;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "矿产储量：";
		t.width = 524;
		t.x = 41;
		t.y = 80.32999999999998;
		return t;
	};
	_proto.scenemine_i = function () {
		var t = new eui.Label();
		this.scenemine = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "";
		t.width = 412;
		t.x = 156;
		t.y = 80.32999999999998;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "难度系数：";
		t.width = 124;
		t.x = 41;
		t.y = 120;
		return t;
	};
	_proto.scenestar_i = function () {
		var t = new eui.Group();
		this.scenestar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 400.5;
		t.x = 155.5;
		t.y = 116.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return SceneFrank;
})(eui.Skin);generateEUI.paths['resource/franck/ShopChooseFranck.exml'] = window.ShopChooseFranck = (function (_super) {
	__extends(ShopChooseFranck, _super);
	function ShopChooseFranck() {
		_super.call(this);
		this.skinParts = ["content","con","numb","sub","add"];
		
		this.height = 153;
		this.width = 686;
		this.elementsContent = [this._Rect1_i(),this.content_i(),this._Rect2_i(),this._Image1_i(),this._Label1_i(),this.con_i(),this._Rect3_i(),this.numb_i(),this.sub_i(),this.add_i()];
	}
	var _proto = ShopChooseFranck.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 26;
		t.ellipseWidth = 26;
		t.fillColor = 0xffca7e;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0xffca7e;
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 100;
		t.x = 35;
		t.y = 27;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0xffffff;
		t.height = 55;
		t.strokeColor = 0xff8e35;
		t.strokeWeight = 2;
		t.width = 291;
		t.x = 355;
		t.y = 49;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.source = "rankcon_png";
		t.width = 36;
		t.x = 373;
		t.y = 58;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = ":";
		t.textColor = 0xff8e35;
		t.x = 419;
		t.y = 59;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.EditableText();
		this.con = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.size = 36;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xff8e35;
		t.width = 178;
		t.x = 460;
		t.y = 59;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 55;
		t.strokeColor = 0xff8e35;
		t.strokeWeight = 2;
		t.visible = false;
		t.width = 109;
		t.x = 494;
		t.y = 49;
		return t;
	};
	_proto.numb_i = function () {
		var t = new eui.Label();
		this.numb = t;
		t.anchorOffsetX = 0;
		t.size = 36;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0xff8e35;
		t.visible = false;
		t.width = 90.5;
		t.x = 505;
		t.y = 59;
		return t;
	};
	_proto.sub_i = function () {
		var t = new eui.Group();
		this.sub = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.visible = false;
		t.width = 59;
		t.x = 437;
		t.y = 50;
		t.elementsContent = [this._Rect4_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xff8e35;
		t.strokeWeight = 2;
		t.width = 61;
		t.x = -1;
		t.y = -1;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "-";
		t.textColor = 0xff8e35;
		t.y = 6;
		return t;
	};
	_proto.add_i = function () {
		var t = new eui.Group();
		this.add = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.visible = false;
		t.width = 59;
		t.x = 601.5;
		t.y = 50;
		t.elementsContent = [this._Rect5_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.height = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFF8E35;
		t.strokeWeight = 2;
		t.width = 61;
		t.x = -1;
		t.y = -1;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "+";
		t.textColor = 0xFF8E35;
		t.y = 6;
		return t;
	};
	return ShopChooseFranck;
})(eui.Skin);generateEUI.paths['resource/franck/ShopFranck.exml'] = window.ShopFranck = (function (_super) {
	__extends(ShopFranck, _super);
	function ShopFranck() {
		_super.call(this);
		this.skinParts = ["ischoose","content","con","type"];
		
		this.height = 219.8;
		this.width = 283;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ShopFranck.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 219.8;
		t.left = 0;
		t.top = 0;
		t.width = 283;
		t.elementsContent = [this._Image1_i(),this.ischoose_i(),this.content_i(),this.type_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopbgk_png";
		t.x = 0;
		t.y = 18.8;
		return t;
	};
	_proto.ischoose_i = function () {
		var t = new eui.Image();
		this.ischoose = t;
		t.right = 0;
		t.source = "nochoose_png";
		t.top = 7;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.source = "robot1_png";
		t.width = 220;
		t.x = 23;
		t.y = 74.8;
		return t;
	};
	_proto.type_i = function () {
		var t = new eui.Group();
		this.type = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 39;
		t.width = 112;
		t.x = 18;
		t.y = 30;
		t.elementsContent = [this._Image2_i(),this.con_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopcon_png";
		t.x = -9;
		t.y = -0.5300000000000011;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Label();
		this.con = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18.16;
		t.text = "1000";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 59.67;
		t.x = 32.66;
		t.y = 11.119999999999997;
		return t;
	};
	return ShopFranck;
})(eui.Skin);generateEUI.paths['resource/franck/SmelterFranck.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = ["choose","content"];
		
		this.height = 225;
		this.width = 288;
		this.elementsContent = [this._Image1_i(),this.choose_i(),this.content_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopbgk_png";
		t.x = 0;
		t.y = 24;
		return t;
	};
	_proto.choose_i = function () {
		var t = new eui.Image();
		this.choose = t;
		t.right = 0;
		t.source = "nochoose_png";
		t.top = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 148;
		t.source = "robot1_png";
		t.width = 180;
		t.x = 43;
		t.y = 51;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/franck/SuccessFranck.exml'] = window.SuccessFranck = (function (_super) {
	__extends(SuccessFranck, _super);
	function SuccessFranck() {
		_super.call(this);
		this.skinParts = ["con","content","loading","loadingmask","successname","own"];
		
		this.height = 293;
		this.width = 246;
		this.elementsContent = [this._Group1_i(),this._Rect1_i(),this._Image4_i()];
	}
	var _proto = SuccessFranck.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.con_i(),this.content_i(),this._Image3_i(),this.loading_i(),this.loadingmask_i(),this.successname_i(),this.own_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "warehousebgk1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "successcon_png";
		t.x = 11;
		t.y = 11;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Label();
		this.con = t;
		t.anchorOffsetX = 0;
		t.size = 19;
		t.text = "200000";
		t.textAlign = "center";
		t.textColor = 0x1f1f1f;
		t.width = 64.25;
		t.x = 56.83;
		t.y = 27.5;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.height = 118;
		t.horizontalCenter = 0;
		t.source = "robot1_png";
		t.width = 99;
		t.y = 73;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "successloadingbg_png";
		t.visible = false;
		t.x = 26;
		t.y = 199;
		return t;
	};
	_proto.loading_i = function () {
		var t = new eui.Image();
		this.loading = t;
		t.source = "successloading_png";
		t.visible = false;
		t.x = 26;
		t.y = 199;
		return t;
	};
	_proto.loadingmask_i = function () {
		var t = new eui.Image();
		this.loadingmask = t;
		t.scale9Grid = new egret.Rectangle(15,3,166,19);
		t.source = "successloadingalll_png";
		t.visible = false;
		t.x = 26;
		t.y = 199;
		return t;
	};
	_proto.successname_i = function () {
		var t = new eui.Label();
		this.successname = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "小有权势";
		t.y = 246.5;
		return t;
	};
	_proto.own_i = function () {
		var t = new eui.Label();
		this.own = t;
		t.anchorOffsetX = 0;
		t.size = 18;
		t.text = "199/1000";
		t.textAlign = "center";
		t.visible = false;
		t.width = 128.67;
		t.x = 58.67;
		t.y = 202.5;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = 0;
		t.source = "sockt_png";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	return SuccessFranck;
})(eui.Skin);generateEUI.paths['resource/franck/WareHouseFranck.exml'] = window.WareHouseFranck = (function (_super) {
	__extends(WareHouseFranck, _super);
	function WareHouseFranck() {
		_super.call(this);
		this.skinParts = ["content","count","state"];
		
		this.height = 293;
		this.width = 246;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = WareHouseFranck.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.content_i(),this.count_i(),this._Rect1_i(),this.state_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "warehousebgk_png";
		t.top = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 158.38;
		t.horizontalCenter = 0.5;
		t.source = "robot1_png";
		t.verticalCenter = -14.5;
		t.width = 131;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.anchorOffsetX = 0;
		t.size = 32;
		t.text = "";
		t.textAlign = "center";
		t.width = 63;
		t.x = 171.5;
		t.y = 15.5;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 54;
		t.ellipseWidth = 54;
		t.fillColor = 0xfff2a8;
		t.height = 54;
		t.width = 209;
		t.x = 19;
		t.y = 229;
		return t;
	};
	_proto.state_i = function () {
		var t = new eui.Label();
		this.state = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x7a2e00;
		t.width = 131;
		t.x = 58;
		t.y = 239;
		return t;
	};
	return WareHouseFranck;
})(eui.Skin);generateEUI.paths['resource/scenebackground/Scene_1.exml'] = window.Scene_1 = (function (_super) {
	__extends(Scene_1, _super);
	function Scene_1() {
		_super.call(this);
		this.skinParts = ["blue","scene4","scene40","metoer","fish3","fish30","scene3","scene30","scene2","blue1","blue2","blue3","light1","light2","fire1","fire2","fire5","scene2group","scene6","blue0","blue4","blue5","light0","light3","fire4","fire3","fire6","scene2group0","fish1","fish10","fish2","fish20","robot","scene1","scene10"];
		
		this.height = 1080;
		this.width = 1920;
		this.blue_i();
		this.elementsContent = [this.scene4_i(),this.scene40_i(),this.metoer_i(),this.fish3_i(),this.fish30_i(),this.scene3_i(),this.scene30_i(),this.scene2group_i(),this.scene2group0_i(),this.fish1_i(),this.fish10_i(),this.fish2_i(),this.fish20_i(),this.robot_i(),this.scene1_i(),this.scene10_i()];
	}
	var _proto = Scene_1.prototype;

	_proto.blue_i = function () {
		var t = new egret.tween.TweenGroup();
		this.blue = t;
		return t;
	};
	_proto.scene4_i = function () {
		var t = new eui.Group();
		this.scene4 = t;
		t.height = 700;
		t.width = 5400;
		t.x = 0;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scene40_i = function () {
		var t = new eui.Group();
		this.scene40 = t;
		t.height = 700;
		t.width = 5400;
		t.x = 5400;
		t.y = 0;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.metoer_i = function () {
		var t = new eui.Group();
		this.metoer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.fish3_i = function () {
		var t = new eui.Image();
		this.fish3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fish3_png";
		t.x = 1754.79;
		t.y = 109.45000000000002;
		return t;
	};
	_proto.fish30_i = function () {
		var t = new eui.Image();
		this.fish30 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fish3_png";
		t.x = 7153.79;
		t.y = 109.45000000000002;
		return t;
	};
	_proto.scene3_i = function () {
		var t = new eui.Image();
		this.scene3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_3_png";
		t.x = 16;
		t.y = 128;
		return t;
	};
	_proto.scene30_i = function () {
		var t = new eui.Image();
		this.scene30 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_3_png";
		t.x = 5416;
		t.y = 128;
		return t;
	};
	_proto.scene2group_i = function () {
		var t = new eui.Group();
		this.scene2group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.scene2_i(),this.blue1_i(),this.blue2_i(),this.blue3_i(),this.light1_i(),this.light2_i(),this._Image3_i(),this._Image4_i(),this.fire1_i(),this.fire2_i(),this.fire5_i()];
		return t;
	};
	_proto.scene2_i = function () {
		var t = new eui.Image();
		this.scene2 = t;
		t.bottom = 2;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_2_png";
		t.x = 0;
		t.y = 549;
		return t;
	};
	_proto.blue1_i = function () {
		var t = new eui.Image();
		this.blue1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_bluefire1_png";
		t.x = 2144.5;
		t.y = 774;
		return t;
	};
	_proto.blue2_i = function () {
		var t = new eui.Image();
		this.blue2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_bluefire2_png";
		t.x = 3244;
		t.y = 796;
		return t;
	};
	_proto.blue3_i = function () {
		var t = new eui.Image();
		this.blue3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_bluefire3_png";
		t.x = 5072;
		t.y = 720;
		return t;
	};
	_proto.light1_i = function () {
		var t = new eui.Image();
		this.light1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_firelight1_png";
		t.x = 454.3;
		t.y = 582.06;
		return t;
	};
	_proto.light2_i = function () {
		var t = new eui.Image();
		this.light2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_firelight2_png";
		t.x = 4085.04;
		t.y = 584.7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fire2_png";
		t.x = 4330.12;
		t.y = 827.27;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fire1_png";
		t.x = 718.45;
		t.y = 848.58;
		return t;
	};
	_proto.fire1_i = function () {
		var t = new eui.Group();
		this.fire1 = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 13;
		t.height = 31.21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 27;
		t.x = 780.64;
		t.y = 839.43;
		return t;
	};
	_proto.fire2_i = function () {
		var t = new eui.Group();
		this.fire2 = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 14;
		t.height = 38.21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 36;
		t.x = 4396;
		t.y = 800.43;
		return t;
	};
	_proto.fire5_i = function () {
		var t = new eui.Group();
		this.fire5 = t;
		t.height = 112;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 132;
		t.x = 0;
		t.y = 858;
		return t;
	};
	_proto.scene2group0_i = function () {
		var t = new eui.Group();
		this.scene2group0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 5400;
		t.y = 0;
		t.elementsContent = [this.scene6_i(),this.blue0_i(),this.blue4_i(),this.blue5_i(),this.light0_i(),this.light3_i(),this._Image5_i(),this._Image6_i(),this.fire4_i(),this.fire3_i(),this.fire6_i()];
		return t;
	};
	_proto.scene6_i = function () {
		var t = new eui.Image();
		this.scene6 = t;
		t.bottom = 0;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_2_png";
		t.x = 0;
		t.y = 549;
		return t;
	};
	_proto.blue0_i = function () {
		var t = new eui.Image();
		this.blue0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_bluefire1_png";
		t.x = 2144.5;
		t.y = 774;
		return t;
	};
	_proto.blue4_i = function () {
		var t = new eui.Image();
		this.blue4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_bluefire2_png";
		t.x = 3244;
		t.y = 796;
		return t;
	};
	_proto.blue5_i = function () {
		var t = new eui.Image();
		this.blue5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_bluefire3_png";
		t.x = 5072;
		t.y = 720;
		return t;
	};
	_proto.light0_i = function () {
		var t = new eui.Image();
		this.light0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_firelight1_png";
		t.x = 454.3;
		t.y = 582.06;
		return t;
	};
	_proto.light3_i = function () {
		var t = new eui.Image();
		this.light3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_firelight2_png";
		t.x = 4085.04;
		t.y = 584.7;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fire2_png";
		t.x = 4330.12;
		t.y = 827.27;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fire1_png";
		t.x = 718.45;
		t.y = 848.58;
		return t;
	};
	_proto.fire4_i = function () {
		var t = new eui.Group();
		this.fire4 = t;
		t.height = 10;
		t.width = 10;
		t.x = 4381.12;
		t.y = 827.27;
		return t;
	};
	_proto.fire3_i = function () {
		var t = new eui.Group();
		this.fire3 = t;
		t.height = 10;
		t.width = 10;
		t.x = 752;
		t.y = 840;
		return t;
	};
	_proto.fire6_i = function () {
		var t = new eui.Group();
		this.fire6 = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 0;
		t.y = 850;
		return t;
	};
	_proto.fish1_i = function () {
		var t = new eui.Image();
		this.fish1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fish1_png";
		t.x = 228.37;
		t.y = 170;
		return t;
	};
	_proto.fish10_i = function () {
		var t = new eui.Image();
		this.fish10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fish1_png";
		t.x = 5628.37;
		t.y = 170;
		return t;
	};
	_proto.fish2_i = function () {
		var t = new eui.Image();
		this.fish2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fish2_png";
		t.x = 662.33;
		t.y = 136.71;
		return t;
	};
	_proto.fish20_i = function () {
		var t = new eui.Image();
		this.fish20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_fish2_png";
		t.x = 6263.33;
		t.y = 136.71;
		return t;
	};
	_proto.robot_i = function () {
		var t = new eui.Group();
		this.robot = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 3;
		t.height = 200;
		t.width = 200;
		t.x = 551;
		t.y = 630;
		return t;
	};
	_proto.scene1_i = function () {
		var t = new eui.Image();
		this.scene1 = t;
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_1_png";
		t.x = 228;
		t.y = 881;
		return t;
	};
	_proto.scene10_i = function () {
		var t = new eui.Image();
		this.scene10 = t;
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "scene1_1_png";
		t.x = 5628;
		t.y = 881;
		return t;
	};
	return Scene_1;
})(eui.Skin);generateEUI.paths['resource/scenebackground/Scene_2.exml'] = window.Scene_2 = (function (_super) {
	__extends(Scene_2, _super);
	function Scene_2() {
		_super.call(this);
		this.skinParts = ["scene1","scene10","robot"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.scene1_i(),this.scene10_i(),this.robot_i()];
	}
	var _proto = Scene_2.prototype;

	_proto.scene1_i = function () {
		var t = new eui.Image();
		this.scene1 = t;
		t.source = "scene22_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scene10_i = function () {
		var t = new eui.Image();
		this.scene10 = t;
		t.source = "scene22_png";
		t.x = 5400;
		t.y = 0;
		return t;
	};
	_proto.robot_i = function () {
		var t = new eui.Group();
		this.robot = t;
		t.height = 200;
		t.width = 200;
		t.x = 518;
		t.y = 566.18;
		return t;
	};
	return Scene_2;
})(eui.Skin);generateEUI.paths['resource/skins/Explore.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = ["sure","content","close","main"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.main_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetX = 960;
		t.anchorOffsetY = 540;
		t.height = 1080;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 960;
		t.y = 540;
		t.elementsContent = [this._Image1_i(),this.sure_i(),this._Scroller1_i(),this.close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shopchoosebg_png";
		t.y = 80;
		return t;
	};
	_proto.sure_i = function () {
		var t = new eui.Image();
		this.sure = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "firstpage_start_png";
		t.y = 816.64;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 660;
		t.horizontalCenter = 0;
		t.width = 650;
		t.y = 128;
		t.viewport = this.content_i();
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 994;
		t.width = 650;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "close_png";
		t.x = 1276;
		t.y = 40;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/FirstPage.exml'] = window.FirstPage = (function (_super) {
	__extends(FirstPage, _super);
	var FirstPage$Skin1 = 	(function (_super) {
		__extends(FirstPage$Skin1, _super);
		function FirstPage$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "firstpage_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin1;
	})(eui.Skin);

	var FirstPage$Skin2 = 	(function (_super) {
		__extends(FirstPage$Skin2, _super);
		function FirstPage$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "illustrated_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin2;
	})(eui.Skin);

	var FirstPage$Skin3 = 	(function (_super) {
		__extends(FirstPage$Skin3, _super);
		function FirstPage$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rank_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin3;
	})(eui.Skin);

	var FirstPage$Skin4 = 	(function (_super) {
		__extends(FirstPage$Skin4, _super);
		function FirstPage$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin4;
	})(eui.Skin);

	var FirstPage$Skin5 = 	(function (_super) {
		__extends(FirstPage$Skin5, _super);
		function FirstPage$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "smelter_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin5;
	})(eui.Skin);

	var FirstPage$Skin6 = 	(function (_super) {
		__extends(FirstPage$Skin6, _super);
		function FirstPage$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "success_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin6;
	})(eui.Skin);

	var FirstPage$Skin7 = 	(function (_super) {
		__extends(FirstPage$Skin7, _super);
		function FirstPage$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FirstPage$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "warehouse_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FirstPage$Skin7;
	})(eui.Skin);

	function FirstPage() {
		_super.call(this);
		this.skinParts = ["firstpage_start","illustrated","rank","shop","smelter","success","warehouse"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.firstpage_start_i(),this.illustrated_i(),this.rank_i(),this.shop_i(),this.smelter_i(),this.success_i(),this.warehouse_i()];
	}
	var _proto = FirstPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "bg_jpg";
		t.top = 0;
		return t;
	};
	_proto.firstpage_start_i = function () {
		var t = new eui.Button();
		this.firstpage_start = t;
		t.label = "";
		t.x = 1140;
		t.y = 856;
		t.skinName = FirstPage$Skin1;
		return t;
	};
	_proto.illustrated_i = function () {
		var t = new eui.Button();
		this.illustrated = t;
		t.label = "";
		t.visible = false;
		t.x = 1357.08;
		t.y = 44;
		t.skinName = FirstPage$Skin2;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Button();
		this.rank = t;
		t.label = "";
		t.x = 1717.97;
		t.y = 409.61;
		t.skinName = FirstPage$Skin3;
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Button();
		this.shop = t;
		t.label = "";
		t.x = 1717.97;
		t.y = 191.61;
		t.skinName = FirstPage$Skin4;
		return t;
	};
	_proto.smelter_i = function () {
		var t = new eui.Button();
		this.smelter = t;
		t.label = "";
		t.x = 1717.97;
		t.y = 624.11;
		t.skinName = FirstPage$Skin5;
		return t;
	};
	_proto.success_i = function () {
		var t = new eui.Button();
		this.success = t;
		t.label = "";
		t.x = 1561.85;
		t.y = 44;
		t.skinName = FirstPage$Skin6;
		return t;
	};
	_proto.warehouse_i = function () {
		var t = new eui.Button();
		this.warehouse = t;
		t.label = "";
		t.x = 1358.19;
		t.y = 44;
		t.skinName = FirstPage$Skin7;
		return t;
	};
	return FirstPage;
})(eui.Skin);generateEUI.paths['resource/skins/Home.exml'] = window.Home = (function (_super) {
	__extends(Home, _super);
	var Home$Skin8 = 	(function (_super) {
		__extends(Home$Skin8, _super);
		function Home$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "search_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin8;
	})(eui.Skin);

	var Home$Skin9 = 	(function (_super) {
		__extends(Home$Skin9, _super);
		function Home$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "smelter_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin9;
	})(eui.Skin);

	var Home$Skin10 = 	(function (_super) {
		__extends(Home$Skin10, _super);
		function Home$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rank_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin10;
	})(eui.Skin);

	var Home$Skin11 = 	(function (_super) {
		__extends(Home$Skin11, _super);
		function Home$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin11;
	})(eui.Skin);

	var Home$Skin12 = 	(function (_super) {
		__extends(Home$Skin12, _super);
		function Home$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "success_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin12;
	})(eui.Skin);

	var Home$Skin13 = 	(function (_super) {
		__extends(Home$Skin13, _super);
		function Home$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "illustrated_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin13;
	})(eui.Skin);

	var Home$Skin14 = 	(function (_super) {
		__extends(Home$Skin14, _super);
		function Home$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Home$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "warehouse_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Home$Skin14;
	})(eui.Skin);

	function Home() {
		_super.call(this);
		this.skinParts = ["search","smelter","rank","shop","success","illustrated","warehouse","con"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.search_i(),this.smelter_i(),this.rank_i(),this.shop_i(),this.success_i(),this.illustrated_i(),this.warehouse_i(),this.con_i()];
	}
	var _proto = Home.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "homebg_jpg";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "goldcon_png";
		t.x = 1590.87;
		t.y = 40;
		return t;
	};
	_proto.search_i = function () {
		var t = new eui.Button();
		this.search = t;
		t.anchorOffsetX = 98;
		t.anchorOffsetY = 78;
		t.label = "";
		t.x = 1768;
		t.y = 869;
		t.skinName = Home$Skin8;
		return t;
	};
	_proto.smelter_i = function () {
		var t = new eui.Button();
		this.smelter = t;
		t.label = "";
		t.x = 1703;
		t.y = 571;
		t.skinName = Home$Skin9;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Button();
		this.rank = t;
		t.label = "";
		t.x = 1703;
		t.y = 361;
		t.skinName = Home$Skin10;
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Button();
		this.shop = t;
		t.anchorOffsetX = 66.67;
		t.anchorOffsetY = 69.7;
		t.label = "";
		t.x = 1769.67;
		t.y = 211.7;
		t.skinName = Home$Skin11;
		return t;
	};
	_proto.success_i = function () {
		var t = new eui.Button();
		this.success = t;
		t.label = "";
		t.x = 63;
		t.y = 769;
		t.skinName = Home$Skin12;
		return t;
	};
	_proto.illustrated_i = function () {
		var t = new eui.Button();
		this.illustrated = t;
		t.label = "";
		t.visible = false;
		t.x = 66.03;
		t.y = 570;
		t.skinName = Home$Skin13;
		return t;
	};
	_proto.warehouse_i = function () {
		var t = new eui.Button();
		this.warehouse = t;
		t.label = "";
		t.x = 63;
		t.y = 570;
		t.skinName = Home$Skin14;
		return t;
	};
	_proto.con_i = function () {
		var t = new eui.Label();
		this.con = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "2310";
		t.textAlign = "center";
		t.textColor = 0x1b2056;
		t.width = 118;
		t.x = 1672.87;
		t.y = 57;
		return t;
	};
	return Home;
})(eui.Skin);generateEUI.paths['resource/skins/PlayPage.exml'] = window.PlayPage = (function (_super) {
	__extends(PlayPage, _super);
	var PlayPage$Skin15 = 	(function (_super) {
		__extends(PlayPage$Skin15, _super);
		function PlayPage$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayPage$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "last_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayPage$Skin15;
	})(eui.Skin);

	var PlayPage$Skin16 = 	(function (_super) {
		__extends(PlayPage$Skin16, _super);
		function PlayPage$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayPage$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "next_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayPage$Skin16;
	})(eui.Skin);

	var PlayPage$Skin17 = 	(function (_super) {
		__extends(PlayPage$Skin17, _super);
		function PlayPage$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayPage$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayPage$Skin17;
	})(eui.Skin);

	var PlayPage$Skin18 = 	(function (_super) {
		__extends(PlayPage$Skin18, _super);
		function PlayPage$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayPage$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mute_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayPage$Skin18;
	})(eui.Skin);

	var PlayPage$Skin19 = 	(function (_super) {
		__extends(PlayPage$Skin19, _super);
		function PlayPage$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayPage$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "setting_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayPage$Skin19;
	})(eui.Skin);

	var PlayPage$Skin20 = 	(function (_super) {
		__extends(PlayPage$Skin20, _super);
		function PlayPage$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayPage$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "parse_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayPage$Skin20;
	})(eui.Skin);

	function PlayPage() {
		_super.call(this);
		this.skinParts = ["main","franck_bg","francklast","francknext","scenegroup","scoller","franckgroup","choose","back","mute","setting","parse"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.main_i(),this.franckgroup_i(),this.choose_i(),this.back_i(),this.mute_i(),this.setting_i(),this.parse_i()];
	}
	var _proto = PlayPage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.source = "bg_jpg";
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.franckgroup_i = function () {
		var t = new eui.Group();
		this.franckgroup = t;
		t.anchorOffsetX = 1726.99;
		t.anchorOffsetY = 355.13;
		t.height = 708.31;
		t.scaleX = 0;
		t.width = 1719.63;
		t.x = 1816.91;
		t.y = 478.42;
		t.elementsContent = [this.franck_bg_i(),this.francklast_i(),this.francknext_i(),this.scoller_i()];
		return t;
	};
	_proto.franck_bg_i = function () {
		var t = new eui.Image();
		this.franck_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 706.13;
		t.scale9Grid = new egret.Rectangle(100,87,1488,550);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "franckbg_png";
		t.width = 1713.66;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.francklast_i = function () {
		var t = new eui.Button();
		this.francklast = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 85.82;
		t.y = 336;
		t.skinName = PlayPage$Skin15;
		return t;
	};
	_proto.francknext_i = function () {
		var t = new eui.Button();
		this.francknext = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1573.46;
		t.y = 336;
		t.skinName = PlayPage$Skin16;
		return t;
	};
	_proto.scoller_i = function () {
		var t = new eui.Scroller();
		this.scoller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 520;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1344.48;
		t.x = 179;
		t.y = 97;
		t.viewport = this.scenegroup_i();
		return t;
	};
	_proto.scenegroup_i = function () {
		var t = new eui.Group();
		this.scenegroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164.9;
		t.width = 1446.48;
		t.x = -22;
		t.y = 0;
		return t;
	};
	_proto.choose_i = function () {
		var t = new eui.Image();
		this.choose = t;
		t.source = "choose_0_png";
		t.x = 1736;
		t.y = 47;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Button();
		this.back = t;
		t.label = "";
		t.x = 75.52;
		t.y = 47;
		t.skinName = PlayPage$Skin17;
		return t;
	};
	_proto.mute_i = function () {
		var t = new eui.Button();
		this.mute = t;
		t.label = "";
		t.x = 1406.42;
		t.y = 924;
		t.skinName = PlayPage$Skin18;
		return t;
	};
	_proto.setting_i = function () {
		var t = new eui.Button();
		this.setting = t;
		t.label = "";
		t.x = 1736;
		t.y = 924;
		t.skinName = PlayPage$Skin19;
		return t;
	};
	_proto.parse_i = function () {
		var t = new eui.Button();
		this.parse = t;
		t.label = "";
		t.x = 1571.21;
		t.y = 924;
		t.skinName = PlayPage$Skin20;
		return t;
	};
	return PlayPage;
})(eui.Skin);generateEUI.paths['resource/skins/Rank.exml'] = window.Rank = (function (_super) {
	__extends(Rank, _super);
	function Rank() {
		_super.call(this);
		this.skinParts = ["rankfortune","rankconsume","ranksearch","ranktype","rankrowscroller","close","main"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.main_i()];
	}
	var _proto = Rank.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetX = 960;
		t.anchorOffsetY = 540;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 960;
		t.y = 540;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Scroller1_i(),this.close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rankbg_png";
		t.x = 0;
		t.y = 36.36;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 649.36;
		t.width = 233.33;
		t.x = 54;
		t.y = 256;
		t.elementsContent = [this.rankfortune_i(),this.rankconsume_i(),this.ranksearch_i()];
		return t;
	};
	_proto.rankfortune_i = function () {
		var t = new eui.Image();
		this.rankfortune = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rankfortune_0_png";
		t.x = 23;
		t.y = 28;
		return t;
	};
	_proto.rankconsume_i = function () {
		var t = new eui.Image();
		this.rankconsume = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rankconsume_0_png";
		t.x = 23;
		t.y = 240;
		return t;
	};
	_proto.ranksearch_i = function () {
		var t = new eui.Image();
		this.ranksearch = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ranksearch_0_png";
		t.x = 23;
		t.y = 444;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 1539.39;
		t.x = 327;
		t.y = 258;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this.ranktype_i(),this._Label3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "名次";
		t.textColor = 0x843e00;
		t.x = 41.67;
		t.y = 25;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "玩家名";
		t.textColor = 0x843e00;
		t.x = 359.82;
		t.y = 25;
		return t;
	};
	_proto.ranktype_i = function () {
		var t = new eui.Label();
		this.ranktype = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "拥有积分数量";
		t.textColor = 0x843E00;
		t.x = 771.21;
		t.y = 25;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "奖励";
		t.textColor = 0x843E00;
		t.x = 1290.6;
		t.y = 25;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 548.48;
		t.width = 1536.36;
		t.x = 330.03;
		t.y = 358;
		t.viewport = this.rankrowscroller_i();
		return t;
	};
	_proto.rankrowscroller_i = function () {
		var t = new eui.Group();
		this.rankrowscroller = t;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "close_png";
		t.x = 1822;
		t.y = 128;
		return t;
	};
	return Rank;
})(eui.Skin);generateEUI.paths['resource/skins/Robot.exml'] = window.Robot = (function (_super) {
	__extends(Robot, _super);
	function Robot() {
		_super.call(this);
		this.skinParts = ["robot","shadow"];
		
		this.height = 400;
		this.width = 106;
		this.elementsContent = [this.robot_i(),this.shadow_i()];
	}
	var _proto = Robot.prototype;

	_proto.robot_i = function () {
		var t = new eui.Image();
		this.robot = t;
		t.horizontalCenter = 0;
		t.source = "robot_png";
		t.y = 125;
		return t;
	};
	_proto.shadow_i = function () {
		var t = new eui.Image();
		this.shadow = t;
		t.horizontalCenter = 0;
		t.source = "shadow_png";
		t.y = 336;
		return t;
	};
	return Robot;
})(eui.Skin);generateEUI.paths['resource/skins/Shop.exml'] = window.Shop = (function (_super) {
	__extends(Shop, _super);
	var Shop$Skin21 = 	(function (_super) {
		__extends(Shop$Skin21, _super);
		function Shop$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Shop$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shopnext_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Shop$Skin21;
	})(eui.Skin);

	var Shop$Skin22 = 	(function (_super) {
		__extends(Shop$Skin22, _super);
		function Shop$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Shop$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "shopnext_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Shop$Skin22;
	})(eui.Skin);

	function Shop() {
		_super.call(this);
		this.skinParts = ["bg","shop","mine","robotnext","mateiralnext","sale","buy","minemateiral","minemateiralp","shopmateiral","minerobot","shoprobot","totalword","total","close","main","child"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.main_i(),this.child_i()];
	}
	var _proto = Shop.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetX = 826.06;
		t.anchorOffsetY = 477.39;
		t.height = 960;
		t.scaleX = 0;
		t.scaleY = 0;
		t.width = 1652;
		t.x = 958.06;
		t.y = 533.39;
		t.elementsContent = [this.bg_i(),this.shop_i(),this.mine_i(),this.robotnext_i(),this.mateiralnext_i(),this.sale_i(),this.buy_i(),this.minemateiralp_i(),this._Scroller1_i(),this._Scroller2_i(),this._Scroller3_i(),this.totalword_i(),this.total_i(),this.close_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopbg_png";
		t.x = 11;
		t.y = 6;
		return t;
	};
	_proto.shop_i = function () {
		var t = new eui.Image();
		this.shop = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopicon_0_png";
		t.x = 882;
		t.y = 172;
		return t;
	};
	_proto.mine_i = function () {
		var t = new eui.Image();
		this.mine = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopmineicon_0_png";
		t.x = 452;
		t.y = 172;
		return t;
	};
	_proto.robotnext_i = function () {
		var t = new eui.Button();
		this.robotnext = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1344;
		t.y = 633;
		t.skinName = Shop$Skin21;
		return t;
	};
	_proto.mateiralnext_i = function () {
		var t = new eui.Button();
		this.mateiralnext = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1344;
		t.y = 397;
		t.skinName = Shop$Skin22;
		return t;
	};
	_proto.sale_i = function () {
		var t = new eui.Image();
		this.sale = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sale_png";
		t.x = 706;
		t.y = 797;
		return t;
	};
	_proto.buy_i = function () {
		var t = new eui.Image();
		this.buy = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "buy_png";
		t.x = 706;
		t.y = 797;
		return t;
	};
	_proto.minemateiralp_i = function () {
		var t = new eui.Scroller();
		this.minemateiralp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 219.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 993.76;
		t.x = 343.44;
		t.y = 322.74;
		t.viewport = this.minemateiral_i();
		return t;
	};
	_proto.minemateiral_i = function () {
		var t = new eui.Group();
		this.minemateiral = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 441.8;
		t.width = 0;
		t.x = 0;
		t.y = -222;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 219.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 993.76;
		t.x = 343.44;
		t.y = 322.74;
		t.viewport = this.shopmateiral_i();
		return t;
	};
	_proto.shopmateiral_i = function () {
		var t = new eui.Group();
		this.shopmateiral = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 411.8;
		t.width = 1175.76;
		t.x = 0;
		t.y = -192;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 219.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 993.76;
		t.x = 343.44;
		t.y = 555.47;
		t.viewport = this.minerobot_i();
		return t;
	};
	_proto.minerobot_i = function () {
		var t = new eui.Group();
		this.minerobot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 312.99;
		t.width = 1039.76;
		t.x = 0;
		t.y = -89.39;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 219.8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 993.76;
		t.x = 343.44;
		t.y = 555.47;
		t.viewport = this.shoprobot_i();
		return t;
	};
	_proto.shoprobot_i = function () {
		var t = new eui.Group();
		this.shoprobot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 312.99;
		t.width = 1135.76;
		t.x = 0;
		t.y = -89.39;
		return t;
	};
	_proto.totalword_i = function () {
		var t = new eui.Label();
		this.totalword = t;
		t.fontFamily = "SimHei";
		t.size = 41.5;
		t.text = "共计：";
		t.x = 1031.74;
		t.y = 818.84;
		return t;
	};
	_proto.total_i = function () {
		var t = new eui.Label();
		this.total = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 41.5;
		t.text = "0";
		t.width = 150.97;
		t.x = 1149.32;
		t.y = 818.84;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "close_png";
		t.x = 1468;
		t.y = -38;
		return t;
	};
	_proto.child_i = function () {
		var t = new eui.Group();
		this.child = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92.12;
		t.width = 132.12;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Shop;
})(eui.Skin);generateEUI.paths['resource/skins/ShopChoose.exml'] = window.ShopChoose = (function (_super) {
	__extends(ShopChoose, _super);
	function ShopChoose() {
		_super.call(this);
		this.skinParts = ["close","sure","content","main"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.main_i()];
	}
	var _proto = ShopChoose.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetX = 960;
		t.anchorOffsetY = 540;
		t.height = 1080;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 960;
		t.y = 540;
		t.elementsContent = [this._Image1_i(),this.close_i(),this.sure_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopchoosebg_png";
		t.verticalCenter = 0;
		t.x = 587;
		t.y = 106.00000000000001;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "close_png";
		t.width = 74;
		t.x = 1289.33;
		t.y = 78.66;
		return t;
	};
	_proto.sure_i = function () {
		var t = new eui.Image();
		this.sure = t;
		t.horizontalCenter = 0;
		t.source = "smeltersure_1_png";
		t.y = 842.25;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 657.58;
		t.horizontalCenter = 0;
		t.width = 686;
		t.y = 158;
		t.viewport = this.content_i();
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 590.91;
		t.width = 1057.57;
		t.x = 3.03;
		t.y = 12.12;
		return t;
	};
	return ShopChoose;
})(eui.Skin);generateEUI.paths['resource/skins/Smelter.exml'] = window.Smelter = (function (_super) {
	__extends(Smelter, _super);
	var Smelter$Skin23 = 	(function (_super) {
		__extends(Smelter$Skin23, _super);
		function Smelter$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Smelter$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "smelterlast_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Smelter$Skin23;
	})(eui.Skin);

	var Smelter$Skin24 = 	(function (_super) {
		__extends(Smelter$Skin24, _super);
		function Smelter$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Smelter$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "smelternext_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Smelter$Skin24;
	})(eui.Skin);

	var Smelter$Skin25 = 	(function (_super) {
		__extends(Smelter$Skin25, _super);
		function Smelter$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Smelter$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "smelterlast_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Smelter$Skin25;
	})(eui.Skin);

	var Smelter$Skin26 = 	(function (_super) {
		__extends(Smelter$Skin26, _super);
		function Smelter$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Smelter$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "smelternext_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Smelter$Skin26;
	})(eui.Skin);

	function Smelter() {
		_super.call(this);
		this.skinParts = ["compoundicon","dismentleicon","compoundsure","compoundlast","compoundnext","compoundgroup","compound","dismentlesure","dismentlelast","dismentlenext","dismentlegroup","dismentle","close","main"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.main_i()];
	}
	var _proto = Smelter.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 0;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetX = 960;
		t.anchorOffsetY = 540;
		t.height = 1080;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1920;
		t.x = 960;
		t.y = 540;
		t.elementsContent = [this._Image1_i(),this.compoundicon_i(),this.dismentleicon_i(),this.compound_i(),this.dismentle_i(),this.close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "smelterbg_png";
		t.x = 22.5;
		t.y = 29.5;
		return t;
	};
	_proto.compoundicon_i = function () {
		var t = new eui.Image();
		this.compoundicon = t;
		t.source = "compoundicon_0_png";
		t.x = 608.79;
		t.y = 839.06;
		return t;
	};
	_proto.dismentleicon_i = function () {
		var t = new eui.Image();
		this.dismentleicon = t;
		t.source = "dismentlecion_0_png";
		t.x = 1024.21;
		t.y = 839.06;
		return t;
	};
	_proto.compound_i = function () {
		var t = new eui.Group();
		this.compound = t;
		t.alpha = 1;
		t.anchorOffsetX = 601.51;
		t.anchorOffsetY = 296.24;
		t.height = 572.72;
		t.width = 1203.04;
		t.x = 961.5;
		t.y = 471.69;
		t.elementsContent = [this._Image2_i(),this.compoundsure_i(),this.compoundlast_i(),this.compoundnext_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 620;
		t.source = "compoundbg_png";
		t.x = 0;
		t.y = -48;
		return t;
	};
	_proto.compoundsure_i = function () {
		var t = new eui.Image();
		this.compoundsure = t;
		t.source = "smeltersure_0_png";
		t.x = 485;
		t.y = 516.24;
		return t;
	};
	_proto.compoundlast_i = function () {
		var t = new eui.Button();
		this.compoundlast = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -33;
		t.y = 220;
		t.skinName = Smelter$Skin23;
		return t;
	};
	_proto.compoundnext_i = function () {
		var t = new eui.Button();
		this.compoundnext = t;
		t.label = "";
		t.x = 1170.04;
		t.y = 220;
		t.skinName = Smelter$Skin24;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 476;
		t.width = 1062;
		t.x = 74;
		t.y = 20;
		t.viewport = this.compoundgroup_i();
		return t;
	};
	_proto.compoundgroup_i = function () {
		var t = new eui.Group();
		this.compoundgroup = t;
		t.anchorOffsetY = 0;
		t.height = 466.45;
		t.x = 0.07;
		t.y = 20.01;
		return t;
	};
	_proto.dismentle_i = function () {
		var t = new eui.Group();
		this.dismentle = t;
		t.anchorOffsetX = 601.51;
		t.anchorOffsetY = 250.78;
		t.height = 484.84;
		t.width = 1203.04;
		t.x = 959.99;
		t.y = 491.15;
		t.elementsContent = [this._Image3_i(),this.dismentlesure_i(),this.dismentlelast_i(),this.dismentlenext_i(),this._Scroller2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "dismentlebg_png";
		t.x = 0;
		t.y = 31.28;
		return t;
	};
	_proto.dismentlesure_i = function () {
		var t = new eui.Image();
		this.dismentlesure = t;
		t.source = "smeltersure_0_png";
		t.x = 485;
		t.y = 419.52;
		return t;
	};
	_proto.dismentlelast_i = function () {
		var t = new eui.Button();
		this.dismentlelast = t;
		t.label = "";
		t.x = -33;
		t.y = 209.28;
		t.skinName = Smelter$Skin25;
		return t;
	};
	_proto.dismentlenext_i = function () {
		var t = new eui.Button();
		this.dismentlenext = t;
		t.label = "";
		t.x = 1170.04;
		t.y = 209.28;
		t.skinName = Smelter$Skin26;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 288;
		t.width = 1072;
		t.x = 62;
		t.y = 124;
		t.viewport = this.dismentlegroup_i();
		return t;
	};
	_proto.dismentlegroup_i = function () {
		var t = new eui.Group();
		this.dismentlegroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 508;
		t.width = 1182;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "close_png";
		t.x = 1780;
		t.y = 8;
		return t;
	};
	return Smelter;
})(eui.Skin);generateEUI.paths['resource/skins/WareHouse.exml'] = window.WareHouse = (function (_super) {
	__extends(WareHouse, _super);
	function WareHouse() {
		_super.call(this);
		this.skinParts = ["rect","bg","success","illustrated","mine","row0","row1","row2","main"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.rect_i(),this._Rect1_i(),this.main_i()];
	}
	var _proto = WareHouse.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.anchorOffsetY = 0;
		t.bottom = 540;
		t.fillAlpha = 0.5;
		t.height = 504;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.height = 504;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.top = 540;
		return t;
	};
	_proto.main_i = function () {
		var t = new eui.Group();
		this.main = t;
		t.anchorOffsetY = 0;
		t.height = 576;
		t.width = 1920;
		t.x = 0;
		t.y = 1080;
		t.elementsContent = [this.bg_i(),this.success_i(),this.illustrated_i(),this.mine_i(),this._Scroller1_i(),this._Scroller2_i(),this._Scroller3_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "warehousebg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.success_i = function () {
		var t = new eui.Image();
		this.success = t;
		t.source = "successicon_0_png";
		t.x = 355.87;
		t.y = 51;
		return t;
	};
	_proto.illustrated_i = function () {
		var t = new eui.Image();
		this.illustrated = t;
		t.source = "illustratedicon_0_png";
		t.visible = false;
		t.x = 352.64;
		t.y = 51;
		return t;
	};
	_proto.mine_i = function () {
		var t = new eui.Image();
		this.mine = t;
		t.source = "mineicon_0_png";
		t.x = 47.45;
		t.y = 51;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 293;
		t.width = 1776;
		t.x = 70;
		t.y = 215.94;
		t.viewport = this.row0_i();
		return t;
	};
	_proto.row0_i = function () {
		var t = new eui.Group();
		this.row0 = t;
		t.anchorOffsetX = 0;
		t.width = 1951.52;
		t.y = 9.09;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 293;
		t.width = 1776;
		t.x = 70;
		t.y = 215.94;
		t.viewport = this.row1_i();
		return t;
	};
	_proto.row1_i = function () {
		var t = new eui.Group();
		this.row1 = t;
		t.anchorOffsetX = 0;
		t.width = 1951.52;
		t.y = 9.09;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.height = 293;
		t.width = 1776;
		t.x = 70;
		t.y = 215.94;
		t.viewport = this.row2_i();
		return t;
	};
	_proto.row2_i = function () {
		var t = new eui.Group();
		this.row2 = t;
		t.anchorOffsetX = 0;
		t.width = 1951.52;
		t.y = 9.09;
		return t;
	};
	return WareHouse;
})(eui.Skin);