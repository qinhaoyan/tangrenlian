class SceneBg_2 extends eui.Component{
	public scene1:eui.Image;
	public scene10:eui.Image;
	public robot:eui.Group;
	
	public scollscene1:SceneTotal;
	public playrobot:PlayRobot;

	public constructor() {
		super();
		this.skinName = "resource/scenebackground/Scene_2.exml";
		this.scollscene1 = new SceneTotal(this.scene1, this.scene10);

		this.playrobot = new PlayRobot(-0.5,-0.005);
		this.robot.addChild(this.playrobot);
	}
	public start(){
		egret.startTick(this.upDate,this);
	}
	public end(){
		egret.stopTick(this.upDate,this);
	}
	public upDate(timestamp:number):any{
		this.scollscene1.scollScreen(3);
		this.playrobot.animate();
	}
}