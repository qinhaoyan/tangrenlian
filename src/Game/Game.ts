class Game extends eui.Component{
	public firstpage_start:eui.Button;
	public warehouse:eui.Button;
	public illustrated:eui.Button;
	public success:eui.Button;
	public shop:eui.Button;
	public smelter:eui.Button;
	public rank:eui.Button;

	public constructor() {
		super();
		this.skinName = "resource/skins/FirstPage.exml";
		//egret.startTick(this.upDate,this);
		this.firstpage_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playGame,this);
		this.warehouse.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showHouse(0)}, this);
		this.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showHouse(1)}, this);
		this.success.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showHouse(2)}, this);

		this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showShop(0)}, this);
		this.smelter.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showSmelter(0)}, this);
		this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showRank(0)}, this);
	}
/*	private upDate(timestamp:number):any{
		
		return false;
	}
*/
	private playGame(){
		//this.parent.addChild(new StartUpPage());
		this.parent.removeChild(this);
	}
	private showHouse(type:number){
		this.parent.addChild(new AddWareHouse(type));
	}
	private showShop(type:number){
		//this.parent.addChild(new AddShop(type));
	}
	private showSmelter(type:number){
		this.parent.addChild(new AddSmelter(type));
	}
	private showRank(type:number){
		this.parent.addChild(new AddRank(type));
	}
}