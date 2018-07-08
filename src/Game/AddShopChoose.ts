class AddShopChoose extends eui.Component{
	public main:eui.Group;
	public close:eui.Image;
	public sure:eui.Image;
	public content:eui.Group;

	public mateirals:Object[];
	public robots:Object[];
	public p:AddShop;

	public constructor(mateirals:Object[], robots:Object[], p:AddShop) {
		super();
		this.skinName = "resource/skins/ShopChoose.exml";
		this.mateirals = mateirals;
		this.robots = robots;
		this.p = p;
		this.init();
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
		this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureFun, this);
	}
	private init(){
		let tw = egret.Tween.get(this.main);
		tw.to({scaleX:1,scaleY:1},300,egret.Ease.bounceInOut);
		let i = 0;
		for(i;i<this.mateirals.length;i++){
			let mateiral = new ShopSaleChoose(this.mateirals[i]);
			mateiral.y = i * 170;
			this.content.addChild(mateiral);
		}
		for(let j = 0;j<this.robots.length;i++,j++){
			console.log(j);
			let robot = new ShopSaleChoose(this.robots[j]);
			robot.y = i * 170;
			this.content.addChild(robot);
		}
	}
	private closeFun(){
		let tw = egret.Tween.get(this.main);
		console.log(this.parent);
		tw.to({scaleX:0,scaleY:0},300,egret.Ease.bounceInOut).call(()=>this.parent.removeChild(this));
	}
	private sureFun(){
		let tools = new Tools();
		let i = 0, j = 0;
		if(this.mateirals.length > 0){
			for(let mateiral of this.mateirals){
				i++;
				tools.ajax({
					url:"/outDeal",
					type:"post",
					data:{
						dealType:0,
						sellID:parseInt(mateiral['id']),
						goodsType:1,
						price:parseFloat(mateiral['con']),
						rarity:null
					},
					success:re=>{
						j++;
						if(i == j){
							if(this.robots.length > 0){
								for(let robot of this.robots){
									i++;
									tools.ajax({
										url:"/outDeal",
										type:"post",
										data:{
											dealType:0,
											sellID:parseInt(robot['id']),
											goodsType:0,
											price:parseFloat(robot['con']),
											rarity:null
										},
										success:re=>{
											j++;
											if(i == j){
												if(re['isSuccess'] == 1){
													alert("挂售成功");
													this.parent.removeChild(this);
													this.p.parent.removeChild(this.p);
												}
												else{
													alert(re['msg']);
												}
											}
											
										}
									});
								}
							}
							else{
								if(re['isSuccess'] == 1){
									alert("挂售成功");
									this.parent.removeChild(this);
									this.p.parent.removeChild(this.p);
								}
								else{
									alert(re['msg']);
								}
							}
							
						}
					}
				});
			}
		}
		else{
			for(let robot of this.robots){
				i++;
				tools.ajax({
					url:"/outDeal",
					type:"post",
					data:{
						dealType:0,
						sellID:parseInt(robot['id']),
						goodsType:0,
						price:parseFloat(robot['con']),
						rarity:null
					},
					success:re=>{
						j++;
						if(i == j){
							if(re['isSuccess'] == 1){
								alert("挂售成功");
								this.parent.removeChild(this);
								this.p.parent.removeChild(this.p);
							}
							else{
								alert(re['msg']);
							}
						}
										
					}
				});
			}
		}
		
		
	}
}