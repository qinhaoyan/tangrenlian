class PlayRobot extends eui.Component{
	public robot:eui.Image;
	public shadow:eui.Image;
	public v:number;
	public s:number;
	public constructor(v:number,s:number) {
		super();
		this.v = v;
		this.s = s;
		this.skinName = "resource/skins/Robot.exml";
	}
	public animate(){
		this.robot.y += this.v;
		this.shadow.scaleX += this.s;
		if(this.robot.y < 60 ){
			this.v = 0.5;
			this.s = 0.005;
		}
		if( this.robot.y > 125){
			this.v = -0.5;
			this.s = -0.005;
		}
	}
}