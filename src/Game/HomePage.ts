class HomePage extends eui.Component{
	public search:eui.Button;
	public warehouse:eui.Button;
	public illustrated:eui.Button;
	public success:eui.Button;
	public shop:eui.Button;
	public smelter:eui.Button;
	public rank:eui.Button;
	public con:eui.Label;
	public back:eui.Image;

	public balance:number;

	public constructor(balance:number) {
		super();
		this.skinName = "resource/skins/Home.exml";
		this.balance = balance;
		console.log(balance);
		this.con.text = balance.toString();

		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backFun, this);

		this.search.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playGame, this);
		this.warehouse.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showHouse(0)}, this);
		this.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showHouse(1)}, this);
		this.success.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showHouse(2)}, this);

		this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showShop(0)}, this);
		this.smelter.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showSmelter(0)}, this);
		this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.showRank(0)}, this);
		let tw = egret.Tween.get(this.search, {loop:true});
		tw.to({scaleX:1.3,scaleY:1.3}, 1000).wait(100)
		  .to({scaleX:1,scaleY:1}, 1000).wait(100);
	}

	private playGame(){
		this.parent.addChild(new StartUpPage(this.balance));
		this.parent.removeChild(this);
	}
	private showHouse(type:number){
		this.parent.addChild(new AddWareHouse(type));
	}

	private showShop(type:number){
		this.parent.addChild(new AddShop(type,this.con));
	}
	private showSmelter(type:number){
		this.parent.addChild(new AddSmelter(type));
	}
	private showRank(type:number){
		this.parent.addChild(new AddRank(type));
	}
	private backFun(){
		window.location.href = "https://allenyunt.github.io/digSystem/dist";
	}
}