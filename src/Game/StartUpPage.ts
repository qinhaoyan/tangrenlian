class StartUpPage extends eui.Component{
	public main:eui.Group;
	public back:eui.Button;
	public choose:eui.Image;
	public mute:eui.Button;
	public setting:eui.Button;
	public parse:eui.Button;

	public franckgroup:eui.Group;
	public francknext:eui.Button;
	public francklast:eui.Button;
	public scoller:eui.Scroller;
	public scenegroup:eui.Group;

	private flag:boolean = false;

	public tools:Tools = new Tools();

	public scene;
	public id;
	public exploreid;

	public balance:number;

	public constructor(balance:number) {
		super();
		let self = this;
		this.skinName = "resource/skins/PlayPage.exml";

		this.balance = balance;

		this.init();
		//点击事件
		this.choose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChoose, this);
		this.francklast.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sceneLast, this);
		this.francknext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sceneNext, this);
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goHome, this);

		this.parse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.parseFun, this);

	}

	private init(){
		//todo
		this.tools.ajax({
			url:"/findExploring",
			type:"get",
			success:re=>{
				if(re['isSuccess'] == 0){
					this.tools.ajax({
						url:"/selectMap",
						type:"get",
						success:response=>{
							let dataobj = response['msg'];
							let data = [];
							for(let i in dataobj){
								data.push(dataobj[i]);
							}
							this.franckgroup.scaleX = 1;
							for(let i = 0; i < data.length; i++){
								let scene = new Scene(data[i]);
								scene.x = i * 620;
								this.scenegroup.addChild(scene);
							}
							this.scenegroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseScene, this);
						}
					})
				}
				else{
					this.exploreid = re['msg']['0']['exploreID'];
					this.id = re['msg']['0']['mapID'];
					this.scene = new Scenes(re['msg']['0']['mapID'], this);
					this.main.removeChildren();
					this.main.addChild(this.scene);
				}
			}
		})
		/**/

	}

	private parseFun(){
		console.log(this.exploreid, this.id)
		this.tools.ajax({
			url:"/endExplore",
			type:"post",
			data:{
				exploreID:this.exploreid,
				mapID:this.id
			},
			success:re=>{
				if(re['isSuccess'] == 1){
					alert(re['msg']);
					this.scene.endExplore();
				}
			}
		})
	}

	private onChoose(){
		this.tools.ajax({
			url:"/selectMap",
			type:"get",
			success:response=>{
				let dataobj = response['msg'];
				let data = [];
				for(let i in dataobj){
					data.push(dataobj[i]);
				}
				let tw = egret.Tween.get(this.franckgroup);
				if(!this.flag){
					this.flag = true;
					this.choose.source = "choose_1_png";
					tw.to({scaleX:1},100);
					for(let i = 0; i < data.length; i++){
						let scene = new Scene(data[i]);
						scene.x = i * 620;
						this.scenegroup.addChild(scene);
					}
					this.scenegroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseScene, this);
				}
				else{
					this.flag = false;
					this.choose.source = "choose_0_png";
					tw.to({scaleX:0},100);
				}
			}
		})

	}

	private sceneNext(){
		let H = this.scoller.viewport.scrollH + 620;
		if( H < this.scoller.viewport.width){
			let self = this;
			let v = 20;
			let tw = setInterval(function(){
				v -= 0.1;
				if(v<=2){
					v = 2;
				}
				self.scoller.viewport.scrollH += v;
				if(self.scoller.viewport.scrollH >= H){
					clearInterval(tw);
				}
			},5)
		}
		
	}
	private sceneLast(){
		let H = this.scoller.viewport.scrollH - 620;
		if( H > 0 ){
			let self = this;
			let v = 20;
			let tw = setInterval(function(){
				v -= 0.1;
				if(v<=2){
					v = 2;
				}
				self.scoller.viewport.scrollH -= v;
				if(self.scoller.viewport.scrollH <= H){
					clearInterval(tw);
				}
			},5)
		}
		
	}
	private goHome(){
		this.parent.addChild(new HomePage(this.balance));
		this.parent.removeChild(this);
	}
	private chooseScene(e:egret.TouchEvent){
		switch (e.target.parent.id){
			case 1:{
				if(this.id != 1){
					this.scene = new Scenes(1, this);
					this.id = 1;
					this.main.removeChildren();
					this.main.addChild(this.scene);
				}
				break;
			}
			case 2:{
				if(this.id != 2){
					this.scene = new Scenes(2, this);
					this.id = 2;
					this.main.removeChildren();
					this.main.addChild(this.scene);
				}
				break;
			}
			case 3:{
				if(this.id != 3){
					//this.scene = new Scenes(3, this);
					this.id = 3;
					this.main.removeChildren();
					this.main.addChild(this.scene);
				}
				break;
			}
		}
		if (e.target.parent.id){
			this.franckgroup.scaleX = 0;
			this.flag = false;
			this.choose.source = "choose_0_png";
		}
	}
}