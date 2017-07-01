/**
 * Created by a369785853 on 2017/6/29.
 */
var http = require("http"),
    fs = require("fs"),
    url = require("url");
var server = http.createServer(function(requst,response){
    var urlObj = url.parse(requst.url,true),
        pathName = urlObj.pathname,
        query = urlObj.query,
        reg = /\.(HTML|JS|CSS|ICO)/i;
        if (reg.test(pathName)) {
            var mime = reg.exec(pathName)[1].toUpperCase(),
                demime = "text/html";
            switch (mime) {
                case "CSS":
                    demime = "text/css";
                    break;
                case "JS":
                    demime = "text/javascript";
                    break;
            }
            try {
                var read = fs.readFileSync("." + pathName,"UTF-8");
                response.writeHead(200,{"content-type": demime + ";charset: UTF-8;"});
                response.end(read);
            } catch (e) {
                response.writeHead(404,{"content-type":"text/plain;charset: UTF-8"});
                response.end("file is not found");
            }
            return
        }
    var guest = "./json/tsconfig.json",
        result = null,
        info = fs.readFileSync(guest,"UTF-8");
    info.length === 0 ? info = "[]" : null;
    info = JSON.parse(info);
    if (pathName === '/getList') {
        result = {
            'code' : 1,
            'msg' : '没有任何客户信息',
            'data' : null
        };
        if (info.length > 0) {
            result = {
                'code' : 0,
                'msg' : "成功",
                'data' : info
            }
        }
        response.writeHead(200, {'content-type':'application/json;charset:UTF-8;'});
        response.end(JSON.stringify(result))
        return;
    }
    if (pathName === '/find') {
        console.log(urlObj)
        var target = query["id"];
        result = {
            'code' : 1,
            'msg' : '没有找到用户信息',
            'data' : null
        }
        for (var i = 0; i < info.length; i++) {
            if (info[i].id == target ) {
                result = {
                    'code' : 0,
                    'msg': '成功',
                    'data' : info[i]
                }
                break;
            }
        }
        response.writeHead(200,{"content-type":"application/json;charset:UTF-8;"});
        response.end(JSON.stringify(result));
        return;

    }
    if (pathName === '/remove') {
        var target = query["id"],
            flag = false;
        for (var i = 0; i < info.length; i++) {
            if (info[i].id == target){
                info.splice(i,1);
                flag = true;
                break;
            }
        }
        result = {
            code : 1,
            msg : '删除失败'
        };
        if (flag) {
            fs.writeFileSync(guest,JSON.stringify(info),'utf-8')
            result = {
                code : 0,
                msg : "删除成功"
            }
        }
        response.writeHead(200,{"content-type" : 'application;charset:utf-8'});
        response.end(JSON.stringify(result))
        return;
    }
    if (pathName === "/add") {
        var str = '';
        response.on("data",function(chunk){
            str += chunk
        });
        response.on("end",function(){
            var data = JSON.parse(str);
            if (data.length === 0) {
                response.writeHead(200,{"content-type":"application/json;charset:utf-8"});
                response.end(JSON.stringify({
                    'code' : 1,
                    'msg' : '没有数据',
                }));
                return;
            }

            data["id"] = info.length === 0 ? 1 : info[info.length-1]["id"]+1;
            fs.writeFileSync(guest,data,'utf-8');
            response.writeHead(200,{"content-type":"application/json;charset:utf-8"});
            response.end({
                'code' : 0,
                'msg' : "增加成功"
            });
            return;
        })
    }

    if (pathName === 'change') {
        var str = ''
        response.on("data",function(chunk){
            str += chunk;
        })
        response.on("end",function(){
            var data = JSON.stringify(info);
            if (data.length === 0) {
                response.writeHead(200,{"content-type":"application/json;charset= utf-8"})
                response.end({
                    code: 1,
                    msg: "修改失败"
                });
                return;
            }
            var flag = false;
            for (var i = 0; i < info.length; i++) {
                if(info[i].id == data.id) {
                    info[i] = data;
                    flag = true;
                    break;
                }
            }
            if (flag) {
                fs.writeFileSync(guest,JSON.stringify(info),'uft-8');
                response.writeHead(200,{"content-type" : "application/json;charset:utf-8"});
                response.end({
                    code : 0,
                    msg : "修改成功"
                })
            }
            return;
        })
    }
    response.writeHead(404,{"content-type":"text/plain;charset : utf-8"});
    response.end("请求的数据接口不存在")

})
server.listen(80,function(){
    console.log("success")
})