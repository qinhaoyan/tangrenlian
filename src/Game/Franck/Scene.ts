class Scene extends eui.Component{
	public isscene:eui.Image;
	public scene:eui.Image;
	public scenematerial:eui.Label;
	public scenerobotnumber:eui.Label;
	public scenemine:eui.Label;
	public scenestar:eui.Group;
	public attribute:eui.Group;

	public id:number;

	public constructor(obj:Object) {
		super();
		this.skinName = "resource/franck/SceneFrank.exml";
		/*if(obj['type']){
			this.isscene.visible = true;
		}
		else{
			
			this.scene.alpha = 0.5;
			this.attribute.alpha = 0.5;
			/*let colorMatrix = [
  				  0.5, 0.5, 0.5, 0, 0,
  				  0.5, 0.5, 0.5, 0, 0,
 			      0.5, 0.5, 0.5, 0, 0,
                  0,   0,   0, 1, 0
			];
			let colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
			this.scene.filters = [colorFlilter];
		}*/
		this.id = obj['mapID'];
		this.isscene.visible = false;
		this.scene.source = "scene" + obj['mapID'] + "_png"; 
		this.scenematerial.text = obj['source'];
		this.scenerobotnumber.text = obj['needRobot'];
		this.scenemine.text = obj['mine'];
		for(let i = 0; i < obj['level']; i++){
			let star = new egret.Bitmap();
			star.texture = RES.getRes('star_png');
			star.x = i * 40;
			this.scenestar.addChild(star);
		}
	}
}