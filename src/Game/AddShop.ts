class AddShop extends eui.Component{
	public main:eui.Group;
	public shop:eui.Image;
	public mine:eui.Image;
	public buy:eui.Image;
	public sale:eui.Image;
	public minemateiral:eui.Group;
	public shopmateiral:eui.Group;
	public minerobot:eui.Group;
	public shoprobot:eui.Group;
	public mateiralnext:eui.Button;
	public robotnext:eui.Button;
	public total:eui.Label;
	public totalword:eui.Label;
	public close:eui.Image;
	public child:eui.Group;

	public flag:boolean = false;
	public minemateiralwidth:number;
	public minerobotwidth:number;
	public shopmateiralwidth:number;
	public shoprobotwidth:number;

	public minemateiralchoose:Object[] = [];
	public minerobotchoose:Object[] = [];
	public minetotal:Object = {number:'0'};

	public shopmateiralchoose:Object[] = [];
	public shoprobotchoose:Object[] = [];
	public shoptotal:Object = {number:'0'};

	public minefirstget = true;
	public shopfirstget = true;

	private tools:Tools = new Tools();
	
	public con:any;

	public constructor(type:number, con:any) {
		super();
		this.skinName = "resource/skins/Shop.exml";
		this.init(type);
		this.con = con;
		this.mine.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(0)}, this);
		this.shop.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(1)}, this);
		this.mateiralnext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mnext, this);
		this.robotnext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bnext, this);
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
		this.sale.addEventListener(egret.TouchEvent.TOUCH_TAP, this.saleSure, this);
		this.buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buySure, this);
	}
	private init(type:number){
		let tw = egret.Tween.get(this.main);
		tw.to({scaleX:1,scaleY:1},300,egret.Ease.bounceInOut);
		this.chooseType(type);
	}
	private closeFun(){
		let tw = egret.Tween.get(this.main);
		tw.to({scaleX:0,scaleY:0},300,egret.Ease.bounceInOut).call(()=>this.parent.removeChild(this));
	}
	private chooseType(type:number){
		switch(type){
			case 0:{
				this.mine.source = "shopmineicon_1_png";
				this.shop.source = "shopicon_0_png";
				this.sale.visible = true;
				this.buy.visible = false;
				this.minemateiral.visible = true;
				this.minerobot.visible = true;
				this.shopmateiral.visible = false;
				this.shoprobot.visible = false;
				if(this.minefirstget){
					this.getmine();
					this.minefirstget = false;
				}
				this.total.visible = false;
				this.totalword.visible = false;
				this.flag = false;
				break;
			}
			case 1:{
				this.mine.source = "shopmineicon_0_png";
				this.shop.source = "shopicon_1_png";
				this.sale.visible = false;
				this.buy.visible = true;
				this.minemateiral.visible = false;
				this.minerobot.visible = false;
				this.shopmateiral.visible = true;
				this.shoprobot.visible = true;
				if(this.shopfirstget){
					this.getshop();
					this.shopfirstget = false;
				}
				this.total.visible = true;
				this.totalword.visible = true;
				this.total.text = this.shoptotal['number'];
				this.flag = true;
				break;
			}
		}
	}
	private getmine(){
		let self = this;
		this.tools.ajax({
			url:"/selectComponents",
			type:"get",
			success:function(data){
				let msg = data['msg'];
				let data1 = [];
				for(let i in msg){
					if(msg[i]['status'] == 0){
						data1.push(msg[i]);
					}
				}
				for(let i = 0; i < data1.length; i++){
					let content:MineAndShop = new MineAndShop(data1[i], self.minemateiralchoose, null, null, 0, 1);
					content.x = 350 * i;
					self.minemateiral.addChild(content);
				}
				self.minemateiralwidth = data1.length * 340;
			}
		})
		
		this.tools.ajax({
			url:"/selectRobots",
			type:"get",
			success:function(data){
				let msg = data['msg'];
				let data2 = [];
				for(let i in msg){
					if(msg[i]['status'] == 0){
						data2.push(msg[i]);
					}
				}
				for(let i = 0; i < data2.length; i++){
					let content:MineAndShop = new MineAndShop(data2[i], self.minerobotchoose, null, null, 0, 0);
					content.x = 350 * i;
					self.minerobot.addChild(content);
				}
				self.minerobotwidth = data2.length * 340;
			}
		})
		
	}
	private getshop(){
		this.tools.ajax({
			url:"/selectStore",
			type:"get",
			success:re=>{
				if(re['isSuccess'] == 1){
					let data1 = [];
					let data2 = [];
					for(let i in re['msg']){
						if(re['msg'][i]['cmtID']){
							data1.push(re['msg'][i])
						}
						else{
							data2.push(re['msg'][i])
						}
					}
					for(let i = 0; i < data1.length; i++){
						let content:MineAndShop = new MineAndShop(data1[i], this.shopmateiralchoose, this.total, this.shoptotal, 1, 1);
						content.x = 350 * i;
						this.shopmateiral.addChild(content);
					}
					for(let i = 0; i < data2.length; i++){
						let content:MineAndShop = new MineAndShop(data2[i], this.shoprobotchoose, this.total, this.shoptotal, 1, 0);
						content.x = 350 * i;
						this.shoprobot.addChild(content);
					}
					this.shopmateiralwidth = data1.length * 340;
					this.shoprobotwidth = data2.length * 340;
				}
			}
		})
		
	}
	private mnext(){
		if(!this.flag){
			let H = this.minemateiral.scrollH + 340;
			if( H < this.minemateiralwidth){
				let self = this;
				let v = 20;
				let tw = setInterval(function(){
					v -= 0.1;
					if(v<=2){
						v = 2;
					}
					self.minemateiral.scrollH += v;
					if(self.minemateiral.scrollH >= H){
						clearInterval(tw);
					}
				},5)
			}
		}
		else{
			let H = this.shopmateiral.scrollH + 340;
			if( H < this.shopmateiralwidth){
				let self = this;
				let v = 20;
				let tw = setInterval(function(){
					v -= 0.1;
					if(v<=2){
						v = 2;
					}
					self.shopmateiral.scrollH += v;
					if(self.shopmateiral.scrollH >= H){
						clearInterval(tw);
					}
				},5)
			}
		}
	}
	private bnext(){
		if(!this.flag){
			let H = this.minerobot.scrollH + 340;
			if( H < this.minerobotwidth){
				let self = this;
				let v = 20;
				let tw = setInterval(function(){
					v -= 0.1;
					if(v<=2){
						v = 2;
					}
					self.minerobot.scrollH += v;
					if(self.minerobot.scrollH >= H){
						clearInterval(tw);
					}
				},5)
			}
		}
		else{
			let H = this.shoprobot.scrollH + 340;
			if( H < this.shoprobotwidth){
				let self = this;
				let v = 20;
				let tw = setInterval(function(){
					v -= 0.1;
					if(v<=2){
						v = 2;
					}
					self.shoprobot.scrollH += v;
					if(self.shoprobot.scrollH >= H){
						clearInterval(tw);
					}
				},5)
			}
		}
	}
	private saleSure(){
		let addshopchoose = new AddShopChoose(this.minemateiralchoose ,this.minerobotchoose, this);
		this.child.addChild(addshopchoose);
	}
	private buySure(){
		console.log(this.shopmateiralchoose,this.shoprobotchoose);
		let datas = [];
		for(let m of this.shopmateiralchoose){
			m['goodsType'] = 1;
			m['cmtID'] = m['id'];
			datas.push(m);
		}
		for(let b of this.shoprobotchoose){
			b['goodsType'] = 0;
			b['robotID'] = b['id'];
			datas.push(b);
		}
		let i = 0, j = 0;
		console.log(datas);
		for(let data of datas){
			i++;
			this.tools.ajax({
				url:"/deal",
				type:"post",
				data:{
					dealID: data['dealID'],
					goodsType: data['goodsType'],
					dealType: 0,
					robotID: data['robotID'] || null,
					cmtID: data['cmtID'] || null,
				},
				success:re=>{
					j++;
					if(re['isSuccess'] == 1){
						
						if(i == j){
							alert("交易成功");
							this.parent.removeChild(this);
							this.tools.ajax({
								url:"balance",
								type:"get",
								success:re=>{
									if(re['isSuccess'] == 1){
										this.con.text = re['balance']
									}
								}
							})
							
						}
					}
					else{
						alert("交易失败");
						this.parent.removeChild(this);
					}
				}

			})
		}
	}
}