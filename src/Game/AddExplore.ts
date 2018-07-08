class AddExplore extends eui.Component{
	public sure:eui.Image;
	public content:eui.Group;
	public choose:Object[] = [];
	public close:eui.Image;

	public scene:any;
	public tools:Tools = new Tools;
	public type:number;

	public constructor(scene:any, type:number) {
		super();
		this.skinName = "resource/skins/Explore.exml";
		this.init();
		this.scene = scene;
		this.type = type;
		this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureFun, this);
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeFun, this);
	}
	private init(){
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
				for(let i = 0; i < data.length; i++){
					let content = new AddSmelterFranck(data[i], this.choose);
					content.x = i % 2 * 362;
					content.y = Math.floor(i / 2) * 240;
					this.content.addChild(content);
				}
			}
		})
	}
	private sureFun(){
		let robotsID = "";
		for(let i in this.choose){
			robotsID += this.choose[i]['id'] + ",";
		}
		robotsID = robotsID.substring(0, robotsID.length - 1);
		this.tools.ajax({
			url:"/explore",
			type:"post",
			data:{
				robotsID,
				mapID: this.type,
			},
			success:re=>{
				if(re["isSuccess"] == 1){
					this.parent.removeChild(this);
					this.scene.start();
				}
				else{
					alert(re['msg']);
				}
			}
		})
	}
	private closeFun(){
		this.parent.removeChild(this);
	}
}