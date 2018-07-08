class MineAndShop extends eui.Component{
	public ischoose:eui.Image;
	public con:eui.Label;
	public content:eui.Image;
	public type:eui.Group;

	public id:number;
	public money:number;
	public flag:boolean = false;
	public name:string;
	public dealid:number = 0;

	public choose:Object[];
	public totalcon:any;
	public chooseobj:Object;
	public totalnumber:Object;

	public constructor(obj:Object, choose:Object[], totalcon:any, totalnumber:Object, type:number, rorm:number) {
		super();
		this.skinName = "resource/franck/ShopFranck.exml";
		this.ischoose.source = "nochoose_png";
		if(rorm == 0){
			this.content.source = "robot" + obj['robotID'] + "_png";
			this.id = obj['robotID'];
		}
		else{
			this.content.source = obj['name'] + "_png";
			this.id = obj['cmtID'];
			this.name = obj['name']
		}
		
		this.choose = choose;
		
		if(type == 1){
			this.dealid = obj['dealID'];
			this.con.text = obj['price'];
			this.money = obj['price'];
			this.totalcon = totalcon;
			this.totalnumber = totalnumber;
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopChooseFun, this);
		}
		else{
			this.type.visible = false;
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mineChooseFun, this);
		}
		

	}	

	public shopChooseFun(){
		if(!this.flag){
			this.totalnumber['number'] = this.totalcon.text = parseInt(this.totalcon.text) + this.money;
			this.flag = true;
			this.ischoose.source = "choosed_png";
			this.chooseobj = {
				id:this.id,
				money:this.money,
				dealID:this.dealid
			}
			this.choose.push(this.chooseobj);
		}
		else{
			this.totalnumber['number'] = this.totalcon.text = parseInt(this.totalcon.text) - this.money;
			this.flag = false;
			this.ischoose.source = "nochoose_png";
			let index = this.choose.indexOf(this.chooseobj);
			this.choose.splice(index, 1);
		}
		
	}
	public mineChooseFun(){
		if(!this.flag){
			this.flag = true;
			this.ischoose.source = "choosed_png";
			this.chooseobj = {
				id:this.id,
				name:this.name,
				dealID:this.dealid
			}
			this.choose.push(this.chooseobj);
		}
		else{
			this.flag = false;
			this.ischoose.source = "nochoose_png";
			let index = this.choose.indexOf(this.chooseobj);
			this.choose.splice(index, 1);
		}
		
	}
}