/**
 * Created by zhengqiguang on 2017/2/6.
 */

var merge = require("webpack-merge");
var configCommon = require("./configCommon");
var buildBaseConf = require("./base");

var entryList = buildBaseConf.build.entryList;

var devEntryList = {
    index: {
        HtmlPluginConf: {
            filename: "./index.html",
            template: "./index.ejs"
        }
    },
    ant: {
        HtmlPluginConf: {
            filename: "./ant.html",
            template: "./ant.ejs"
        }
    },
    video: {
        HtmlPluginConf: {
            filename: "./video-demo1.html",
            template: "./video-demo1.ejs"
        }
    }
}


module.exports = merge(buildBaseConf, {
    static: {
        url: {
            ds: "http://ccc.yy.com"
        }
    },
    build: {
        entryList: configCommon.mergeTwoObjList(entryList, devEntryList)
    }
});

