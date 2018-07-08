class RankRow extends eui.Component{
	public ranknumber:eui.Label;
	public ranknumbericon:eui.Image;
	public username:eui.Label;
	public scole:eui.Label;
	public awardnumber:eui.Label;
	public awardtype:eui.Image;
	
	public constructor(row:Object) {
		super();
		this.skinName = "resource/franck/RankFranck.exml";
		this.username.text = row['username'];
		this.scole.text = row['scole'];
		this.awardnumber.text = '+'+ row['awardnumber'];
		if(row['awardtype'] == 0){
			this.awardtype.source = "rankrobot_png";
			this.awardtype.y = 39;
		}
		else{
			this.awardtype.source = "rankcon_png";
			this.awardtype.y = 35;
		}
		if(row['rank']<=3){
			this.ranknumber.visible = false;
			this.ranknumbericon.source = "cup" + row['rank'] + "_png";
		}
		else{
			this.ranknumbericon.visible = false;
			this.ranknumber.text = row['rank'];
		}
	}
}