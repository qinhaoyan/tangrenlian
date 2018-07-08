class AddSmelterFranck extends eui.Component{
	public content:eui.Image;
	public choose:eui.Image;

	public flag:boolean = false;
	public chooseobj:Object[];
	public id:number;
	public name:string = '';

	public constructor(content:Object, chooseobj:Object[]) {
		super();
		this.skinName = "resource/franck/SmelterFranck.exml";
		if(content["name"]){
			this.content.source = content['name'] + "_png";
			this.id = content['cmtID'];
			this.name = content['name'];
		}
		else{
			this.content.source = 'robot' + content['robotID'] + "_png";
			this.id = content['robotID'];
		}
		
		this.chooseobj = chooseobj;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.chooseFun, this);
	}
	private chooseFun(){
		if(!this.flag){
			this.choose.source = "choosed_png";
			this.chooseobj.push({
				id:this.id,
				name:this.name
			});
			this.flag = true;
		}
		else{
			this.choose.source = "nochoose_png";
			let id = this.chooseobj.indexOf({
				id:this.id,
				name:this.name
			});
			this.chooseobj.splice(id, 1);
			this.flag = false;
		}
	}
}