class Tools {
	public url:string = "http://118.24.113.39:5001";
	public constructor() {
	}
	public ajax(url:Object){
		let xhr = new XMLHttpRequest();
		let data;
		if(url['data']){
			let str =  JSON.stringify(url['data']);
			str = str.replace(/^\{(.*)\}$/,"$1");
			data=str.replace(/(:)(?=[^\}]*(\{|$))/g,'=').replace(/(,")(?=[^\}]*(\{|$))/g,'&').replace(/(")(?=[^\}]*(\{|$))/g,'');
		}
		else{
			data = null;
		}
		if(url['type'] == "post"){
			xhr.open(url['type'], this.url+url['url'], true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.withCredentials = true;
			xhr.send(data);
		}
		else{
			if(data){
				xhr.open(url['type'], this.url + url['url'] + "?" + data, true);
			}
			else{
				xhr.open(url['type'], this.url + url['url'], true);
			}
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.withCredentials = true;
			xhr.send();
		}
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
				let dataobj = JSON.parse(xhr.responseText)
				url['success'].call(this, dataobj);
      		}
		}
	}
	public sort(arr:any[], str:string, type:boolean){
		arr.sort(function(a,b){
			let re;
			if(type){
				re = a[str] - b[str];
			}
			else{
				re = b[str] - a[str];
			}
			return re;
		})
	}
}