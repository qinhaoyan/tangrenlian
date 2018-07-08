class Scenes extends eui.Component{
	public p;
	public scene;
	public constructor(type:number, p:any) {
		super();
		this.p = p;  
		this.init(type);
	}
	private init(type:number){
		switch (type){
			case 1:{
				this.scene = new SceneBg_1();
				this.addChild(this.scene);
				break;
			}
			case 2:{
				this.scene = new SceneBg_2();
				this.addChild(this.scene);
				break;
			}
			case 3:{
				//this.scene = new SceneBg_3();
				this.addChild(this.scene);
				break;
			}
		}
		let tools = new Tools();
		tools.ajax({
			url:"/findExploring",
			type:"get",
			success:re=>{
				if(JSON.stringify(re['msg']).indexOf('"mapID":' + type) < 0){
					this.p.addChild(new AddExplore(this.scene, type));
				}
				else{
					this.scene.start();
				}
			}
		})
	}
	public endExplore(){
		this.scene.end();
	}
}