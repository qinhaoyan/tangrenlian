class AddWareHouse extends eui.Component{
	public main:eui.Group;
	public bg:eui.Image;
	public success:eui.Image;
	public mine:eui.Image;
	public illustrated:eui.Image;
	public rect:eui.Rect;
	public row0:eui.Group;
	public row1:eui.Group;
	public row2:eui.Group;
			
	public constructor(type:number) {
		super();
		this.skinName = "resource/skins/WareHouse.exml";
		this.init(type);
		this.mine.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(0)}, this);
		//this.illustrated.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(1)}, this);
		this.success.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(2)}, this);
		this.rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeThis, this);
	}
	public init(type:number){
		let tw = egret.Tween.get(this.main);
		tw.to({y:504},400,egret.Ease.cubicIn);
		this.chooseType(type);
	}
	public chooseType(type:number){
		switch(type){
			case 0 :{
				this.mine.source = "mineicon_1_png";
				this.illustrated.source = "illustratedicon_0_png";
				this.success.source = "successicon_0_png";
				this.bg.source = "warehousebg_png";
				this.row0.visible = true;
				this.row1.visible = false;
				this.row2.visible = false;
				this.getMine();
				break;
			}
			case 1:{
				this.mine.source = "mineicon_0_png";
				this.illustrated.source = "illustratedicon_1_png";
				this.success.source = "successicon_0_png";
				this.bg.source = "warehousebg1_png";
				this.row0.visible = false;
				this.row1.visible = true;
				this.row2.visible = false;
				break;
			}
			case 2:{
				this.mine.source = "mineicon_0_png";
				this.illustrated.source = "illustratedicon_0_png";
				this.success.source = "successicon_1_png";
				this.bg.source = "warehousebg1_png";
				this.row0.visible = false;
				this.row1.visible = false;
				this.row2.visible = true;
				this.getSuccess()
				break;
			}
		}	
	}
	
	private getMine(){
		let self = this;
		let tools = new Tools();
		tools.ajax({
			url:"/selectRobots",
			type:"get",
			success:function(robot){
				let i = 0;
				let robotdata = [];
				for(let m in robot['msg']){
					robotdata.push(robot['msg'][m]);
				}
				for(; i < robotdata.length; i++){
					let content = new WareHouseCell(robotdata[i], 0);
					content.x = i * 306;
					self.row0.addChild(content);
				}
				tools.ajax({
					url:"/selectComponents",
					type:"get",
					success:function(mateiral){
						let mateiraldata = [];
						for(let m in mateiral['msg']){
							mateiraldata.push(mateiral['msg'][m]);
						}
						console.log(mateiraldata);
						for(let j = 0; j < mateiraldata.length; i++,j++){
							let content = new WareHouseCell(mateiraldata[j], 1);
							content.x = i * 306;
							self.row0.addChild(content);
						}
					}
				})
			}
		})
		
	}

	private getSuccess(){
		let data:Object[] = [
			{
				con:100,
				content:1,
				all:1000,
				own:300,
				name:"小有权势"
			},
			{
				con:200,
				content:1,
				all:500,
				own:400,
				name:"雄霸一方"
			},
			{
				con:300,
				content:1,
				all:700,
				own:300,
				name:"攻城略地"
			},
			{
				con:500,
				content:1,
				all:3000,
				own:800,
				name:"占山为王"
			},
			{
				con:1000,
				content:1,
				all:2000,
				own:300,
				name:"权倾天下"
			},
			{
				con:5000,
				content:1,
				all:3000,
				own:400,
				name:"富甲一方"
			},
			{
				con:10000,
				content:1,
				all:2000,
				own:300,
				name:"家财万贯"
			},
			{
				con:50000,
				content:1,
				all:3000,
				own:400,
				name:"金玉满堂"
			},
			{
				con:100000,
				content:1,
				all:3000,
				own:400,
				name:"富可敌国"
			}
		]
		let tools = new Tools();
		tools.ajax({
			url:"/getAchievement",
			type:"get",
			success:re=>{
				console.log(re);
			}
		})
		for(let i = 0; i < data.length; i++){
			let content = new Success(data[i]);
			content.x = i * 306;
			this.row2.addChild(content);

		}
	}
	private removeThis(){
		let tw = egret.Tween.get(this.main);
		tw.to({y:1080},400,egret.Ease.cubicIn);
		tw.call(()=>{this.parent.removeChild(this)})
		
	}
}