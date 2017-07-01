/**
 * Created by a369785853 on 2017/6/29.
 */
(function(){
    function createXHR () {
        var flag = false,
            xhr = null,
            arr = [
                function () {
                    return new XMLHttpRequest;
                },
                function () {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                },
                function () {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                },
                function () {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }
            ];
        for (var i = 0; i < arr.length; i++) {
            var cur = arr[i];
            try {
                xhr = cur();
                createXHR = cur;
                flag = true;
                break;
            } catch (e) {

            }
        }
        if (!flag) {
            throw new Error ("your browser does not support Ajax,please change and try again")
        }
        return xhr;
    }
    function ajax (options) {
        var _default = {
            url : '',
            data : '',
            dataType : "json",
            type : "get",
            async : true,
            success : null,
            getHead : null
        };
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                _default[key] = options[key];
            }
        }
        if (_default.type === "get") {
            if (_default.url.indexOf("?") > -1) {
                _default.url += "&_=" + Math.random();
            }else {
                _default.url += "?_=" + Math.random();
            }
        }
        var xhr = createXHR();
        xhr.open(_default.type,_default.url,_default.async);
        xhr.onreadystatechange = function () {
            if (/^2\d{2}$/.test(xhr.status)) {
                if (xhr.readyState === 2) {
                    if (typeof _default.getHead === "function") {
                        _default.getHead.call(xhr);
                    }
                }
                if (xhr.readyState === 4) {
                    var data = xhr.responseText
                    if (_default.dataType === "json") {
                        data = JSON in window ? JSON.parse(data) : eval("("+ data+")")
                    }
                    if (typeof _default.success === "function") {
                        _default.success.call(xhr,data)
                    }
                }
            }
        }
        xhr.send(_default.data);
    }
    window.ajax = ajax;
})()

