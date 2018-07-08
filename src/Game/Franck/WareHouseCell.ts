class WareHouseCell extends eui.Component{
	public content:eui.Image;
	public count:eui.Label;
	public state:eui.Label;

	public constructor(obj:Object, type:number) {
		super();
		this.skinName = "resource/franck/WareHouseFranck.exml";
		console.log(obj);
		if(type == 0){
			this.content.source = "robot" + obj['robotID'] + "_png";
		}
		else{
			this.content.source = obj['name'] + "_png";
		}
		//this.count.text = obj['contentcount'].toString();
		switch (obj['status']){
			case 0:{
				this.state.text = "空闲";
				break;
			}
			case 1:{
				this.state.text = "挂售中";
				break;
			}
			case 2:{
				this.state.text = "繁忙中";
				break;
			}
		}
	}
}