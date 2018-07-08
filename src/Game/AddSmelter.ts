class AddSmelter extends eui.Component{
	public main:eui.Group;
	public compoundicon:eui.Image;
	public dismentleicon:eui.Image;
	public compound:eui.Group;
	public dismentle:eui.Group;
	public compoundsure:eui.Image;
	public compoundgroup:eui.Group;
	public compoundlast:eui.Button;
	public compoundnext:eui.Button;
	public dismentlesure:eui.Image;
	public dismentlegroup:eui.Group;
	public dismentlelast:eui.Button;
	public dismentlenext:eui.Button;
	public close:eui.Image;

	public compoundchoose:Object[] = [];
	public dismentlechoose:Object[] = [];

	public compoundwidth:number;
	public dismentlewidth:number;

	public tools:Tools = new Tools();

	public constructor(type:number) {
		super();
		this.skinName = "resource/skins/Smelter.exml";
		this.init(type);
		this.compoundicon.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(0)}, this);
		this.dismentleicon.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{this.chooseType(1)}, this);
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);

		this.compoundnext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.compoundNext, this);
		this.compoundlast.addEventListener(egret.TouchEvent.TOUCH_TAP, this.compoundLast, this);
		this.dismentlenext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dismentleNext, this);
		this.dismentlelast.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dismentleLast, this);

		this.compoundsure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.compoundSure, this);
		this.dismentlesure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dismentleSure, this);
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
				this.compound.visible = true;
				this.dismentle.visible = false;
				this.compoundicon.source = "compoundicon_1_png";
				this.dismentleicon.source =  "dismentlecion_0_png";
				this.compoundchoose = [];
				this.addCompound();
				break;
			}
			case 1:{
				this.compound.visible = false;
				this.dismentle.visible = true;
				this.compoundicon.source = "compoundicon_0_png";
				this.dismentleicon.source =  "dismentlecion_1_png";
				this.dismentlechoose = [];
				this.adddismentle();
				break;
			}
		}
	}
	private addCompound(){
		this.tools.ajax({
			url:"/selectComponents",
			type:"get",
			success:re=>{
				let datas = re['msg'];
				let data = [];
				for(let i in datas){
					if(datas[i]['status'] == 0){
						data.push(datas[i]);
					}
				}
				for(let i = 0; i < data.length; i++){
					let robot = new AddSmelterFranck(data[i], this.compoundchoose);
					robot.x = Math.floor(i / 2) * 387;
					robot.y = Math.floor(i % 2) * 240;
					this.compoundgroup.addChild(robot);
				}
				this.compoundwidth = 387 * data.length /2;
			}
		})
		
	}
	private adddismentle(){
		this.tools.ajax({
			url:"/selectRobots",
			type:"get",
			success:re=>{
				let datas = re['msg'];
				let data = [];
				for(let i in datas){
					if(datas[i]['status'] == 0){
						data.push(datas[i]);
					}
				}
				let j = 0;
				for(let i = 0; i < data.length; i++){
					if(data[i]['status'] == 0){
						let robot = new AddSmelterFranck(data[i], this.dismentlechoose);
						robot.x = j * 387;
						this.dismentlegroup.addChild(robot);
						j++;
					}
					
				}
				this.dismentlewidth = 387 * j;
			}
		})
		
	}
	private compoundNext(){
		let H = this.compoundgroup.scrollH + 387;
		if( H < this.compoundwidth){
			let self = this;
			let v = 20;
			let tw = setInterval(function(){
				v -= 0.1;
				if(v<=2){
					v = 2;
				}
				self.compoundgroup.scrollH += v;
				if(self.compoundgroup.scrollH >= H){
					clearInterval(tw);
				}
			},5)
		}
	}
	private compoundLast(){
		let H = this.compoundgroup.scrollH - 387;
		if( H > 0){
			let self = this;
			let v = 20;
			let tw = setInterval(function(){
				v -= 0.1;
				if(v<=2){
					v = 2;
				}
				self.compoundgroup.scrollH -= v;
				if(self.compoundgroup.scrollH <= H){
					clearInterval(tw);
				}
			},5)
		}
	}
	private compoundSure(){
		let components = {
			'钢木':0,
			'玄铁':0,
			'金刚砂':0,
			'元磁铁':0,
			'庚金':0,
			'冰魄玉':0
		}
		let cmtID:string = "";
		let i;
		console.log(this.compoundchoose);
		for(i in this.compoundchoose){
			switch(this.compoundchoose[i]['name']){
				case '钢木':{
					components['钢木'] ++;
					this.compoundchoose[i]['sort'] = 0;
					break;
				}
				case '玄铁':{
					components['玄铁'] ++;
					this.compoundchoose[i]['sort'] = 1;
					break;
				}
				case '金刚砂':{
					components['金刚砂'] ++;
					this.compoundchoose[i]['sort'] = 2;
					break;
				}
				case '元磁铁':{
					components['元磁铁'] ++;
					this.compoundchoose[i]['sort'] = 3;
					break;
				}
				case '庚金':{
					components['庚金'] ++;
					this.compoundchoose[i]['sort'] = 4;
					break;
				}
				case '冰魄玉':{
					components['冰魄玉'] ++;
					this.compoundchoose[i]['sort'] = 5;
					break;
				}
				default:{
					console.log("error");
				}
			}
		}
		this.tools.sort(this.compoundchoose, 'sort', true);
		for(let id of this.compoundchoose){
			cmtID += id['id'] + ",";
		}
		cmtID = cmtID.substring(0, cmtID.length - 1);
		if(i >= 5){
			this.tools.ajax({
				url:"/compose",
				type:"post",
				data:{
					components,
					cmtID
				},
				success:re=>{
					if(re['isSuccess'] == 1){
						alert(re['msg']);
						this.parent.removeChild(this);
					}
					else{
						alert(re['msg']);
					}
				}
			})
		}
		else{
			alert("至少选择6个零件");
		}
		
	}
	private dismentleNext(){
		let H = this.dismentlegroup.scrollH + 387;
		if( H < this.dismentlewidth){
			let self = this;
			let v = 20;
			let tw = setInterval(function(){
				v -= 0.1;
				if(v<=2){
					v = 2;
				}
				self.dismentlegroup.scrollH += v;
				if(self.dismentlegroup.scrollH >= H){
					clearInterval(tw);
				}
			},5)
		}
	}
	private dismentleLast(){
		let H = this.dismentlegroup.scrollH - 387;
		if( H > 0){
			let self = this;
			let v = 20;
			let tw = setInterval(function(){
				v -= 0.1;
				if(v<=2){
					v = 2;
				}
				self.dismentlegroup.scrollH -= v;
				if(self.dismentlegroup.scrollH <= H){
					clearInterval(tw);
				}
			},5)
		}
	}
	private dismentleSure(){
		let robotsID = "";
		for(let i in this.dismentlechoose){
			robotsID += this.dismentlechoose[i]['id'] + ",";
		}
		robotsID = robotsID.substring(0, robotsID.length - 1);
		this.tools.ajax({
			url:"/resolve",
			type:"post",
			data:{
				robotsID
			},
			success:re=>{
				if(re['isSuccess'] == 1){
					alert("拆卸成功");
					this.parent.removeChild(this);
				}
				else{
					alert("请求失败");
				}
			}
		})
	}
}