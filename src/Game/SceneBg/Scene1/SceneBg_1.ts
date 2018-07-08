class SceneBg_1 extends eui.Component{
	public metoer:eui.Group;
	public scene4:eui.Group;
	public scene3:eui.Image;
	public scene2group:eui.Group;
	public scene1:eui.Image;
	public fish1:eui.Image;
	public fish2:eui.Image;
	public fish3:eui.Image;
	public scene40:eui.Group;
	public scene30:eui.Image;
	public scene2group0:eui.Group;
	public scene10:eui.Image;
	public fish10:eui.Image;
	public fish20:eui.Image;
	public fish30:eui.Image;
	public fire1:eui.Group;
	public fire2:eui.Group;
	public fire3:eui.Group;
	public fire4:eui.Group;
	public fire5:eui.Group;
	public fire6:eui.Group;
	public robot:eui.Group;

	public scollscene4:SceneTotal;
	public scollscene3:SceneTotal;
	public scollscene2:SceneTotal;
	public scollscene1:SceneTotal;
	public scollfish1:SceneTotal;
	public scollfish2:SceneTotal;
	public scollfish3:SceneTotal;
	public playrobot:PlayRobot;

	public metoersystem:any[] = [];

	public constructor() {
		super();
		this.skinName = "resource/scenebackground/Scene_1.exml";
		this.scollscene4 = new SceneTotal(this.scene4, this.scene40);
		this.scollscene3 = new SceneTotal(this.scene3, this.scene30);
		this.scollscene2 = new SceneTotal(this.scene2group, this.scene2group0);
		this.scollscene1 = new SceneTotal(this.scene1, this.scene10);
		this.scollfish1 = new SceneTotal(this.fish1, this.fish10);
		this.scollfish2 = new SceneTotal(this.fish2, this.fish20);
		this.scollfish3 = new SceneTotal(this.fish3, this.fish30);

		let firestart0 = RES.getRes('scene1_firestar_png');
		let config = RES.getRes('scene1_firestar_json');
		let system1 = new particle.GravityParticleSystem(firestart0,config);
		system1.start();
		this.fire1.addChild(system1);
		let system2 = new particle.GravityParticleSystem(firestart0,config);
		system2.start();
		this.fire2.addChild(system2);
		let system3 = new particle.GravityParticleSystem(firestart0,config);
		system3.start();
		this.fire3.addChild(system3);
		let system4 = new particle.GravityParticleSystem(firestart0,config);
		system4.start();
		this.fire4.addChild(system4);

		let config2 = RES.getRes('scene1_firestar2_json');
		let system5 = new particle.GravityParticleSystem(firestart0,config2);
		system5.start();
		this.fire5.addChild(system5);
		let system6 = new particle.GravityParticleSystem(firestart0,config2);
		system6.start();
		this.fire6.addChild(system6);

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
		this.scollscene4.scollScreen(2.4); 
		this.scollscene3.scollScreen(3);
		this.scollscene2.scollScreen(3);
		this.scollscene1.scollScreen(3);
		this.scollfish1.scollScreen(3.4);  
		this.scollfish2.scollScreen(3.2);  
		this.scollfish3.scollScreen(2.8);  
		this.playrobot.animate();
		if(Math.random() > 0.97){
			this.metoersystem.push(this.createMetoer());
		}
		for(let i = 0; i < this.metoersystem.length; i++){
			this.metoersystem[i].x -= 6;
			this.metoersystem[i].y += 8;
			if(this.metoersystem[i].y > 600){
				this.metoer.removeChild(this.metoersystem.shift());
			}
		}
		return false;
	}
	public createMetoer(){
		let metoer = RES.getRes('scene1_meteor_png');
		let metoerconfig = RES.getRes('scene1_meteor_json');
		let metoersystem = new particle.GravityParticleSystem(metoer,metoerconfig);
		metoersystem.x = Math.random() * 1700 + 200;
		metoersystem.y = Math.random() * 100;
		metoersystem.start();
		this.metoer.addChild(metoersystem);
		return metoersystem;
	}
}