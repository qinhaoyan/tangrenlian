class ShopSaleChoose extends eui.Component{
	public content:eui.Image;
	public con:eui.TextInput;
	public numb:eui.Label;
	public add:eui.Group;
	public sub:eui.Group;

	public obj:Object;

	public constructor(obj:Object) {
		super();
		this.skinName = "resource/franck/ShopChooseFranck.exml";
		if(obj['name']){
			this.content.source = obj['name'] + "_png";
			
		}
		else{
			this.content.source = "robot" + obj['id'] + "_png";
		}
		this.con.text = obj['con'] || '0';
		this.numb.text = obj['number'] || '0';
		this.obj = obj;
		this.add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addNumb, this);
		this.sub.addEventListener(egret.TouchEvent.TOUCH_TAP, this.subNumb, this);
		this.con.addEventListener(egret.Event.FOCUS_OUT,this.onBlur,this);
		this.con.addEventListener(egret.Event.FOCUS_IN,this.onFocus,this);
	}
	private addNumb(){
		
		this.numb.text = (parseInt(this.numb.text) + 1).toString();
		this.obj['number'] = this.numb.text;
	}
	private subNumb(){
		if(this.numb.text != '0'){
			this.numb.text = (parseInt(this.numb.text) - 1).toString();
			this.obj['number'] = this.numb.text;
		}
		
	}
	private onBlur(e:egret.Event){
		if(e.target.text){
			this.obj['con'] = e.target.text;
			
		}
		else{
			e.target.text = this.obj['con'];
		}
	}
	private onFocus(e:egret.Event){
		e.target.text = '';
	}
}