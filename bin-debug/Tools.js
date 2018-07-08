var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Tools = (function () {
    function Tools() {
        this.url = "http://118.24.113.39:5001";
    }
    Tools.prototype.ajax = function (url) {
        var xhr = new XMLHttpRequest();
        var data;
        if (url['data']) {
            var str = JSON.stringify(url['data']);
            str = str.replace(/^\{(.*)\}$/, "$1");
            data = str.replace(/(:)(?=[^\}]*(\{|$))/g, '=').replace(/(,")(?=[^\}]*(\{|$))/g, '&').replace(/(")(?=[^\}]*(\{|$))/g, '');
        }
        else {
            data = null;
        }
        if (url['type'] == "post") {
            xhr.open(url['type'], this.url + url['url'], true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.withCredentials = true;
            xhr.send(data);
        }
        else {
            if (data) {
                xhr.open(url['type'], this.url + url['url'] + "?" + data, true);
            }
            else {
                xhr.open(url['type'], this.url + url['url'], true);
            }
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.withCredentials = true;
            xhr.send();
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                var dataobj = JSON.parse(xhr.responseText);
                url['success'].call(this, dataobj);
            }
        };
    };
    Tools.prototype.sort = function (arr, str, type) {
        arr.sort(function (a, b) {
            var re;
            if (type) {
                re = a[str] - b[str];
            }
            else {
                re = b[str] - a[str];
            }
            return re;
        });
    };
    return Tools;
}());
__reflect(Tools.prototype, "Tools");
//# sourceMappingURL=Tools.js.map