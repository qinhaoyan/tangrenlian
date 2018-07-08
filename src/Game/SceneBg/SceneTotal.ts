class SceneTotal {
	public obj1:any;
	public obj2:any;
	public constructor(obj1:any,obj2:any) {
		this.obj1 = obj1;
		this.obj2 = obj2;
	}
	//滚屏函数
	public scollScreen(v:number){
		let width = 5400;
		this.obj1.x -= v;
		this.obj2.x -= v;
		if(this.obj1.x <= -width){
			this.obj1.x = width - ( v - ( width % v ));
		}
		if(this.obj2.x <= -width ){
			this.obj2.x = width - ( v - ( width % v ));
		}
	}
}