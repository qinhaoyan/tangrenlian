class Success extends eui.Component{
    public con:eui.Label;
    public content:eui.Image;
    public loading:eui.Image;
    public own:eui.Label;
    public successname:eui.Label;
    public loadingmask:eui.Image;

    constructor(obj:Object){
        super();
        this.skinName = "resource/franck/SuccessFranck.exml";
        this.con.text = obj['con'];
        this.content.source = "robot" + obj['content'] + "_png";
        this.loading.width = obj['own'] / obj['all'] * 194;
        this.own.text = obj['own'] + "/" + obj['all'];
        this.successname.text = obj['name'];
        this.loadingmask.mask =  this.loading;
    }
}