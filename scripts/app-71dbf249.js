/**
 * angular-morris-chart provides morris.js directives for angular 1.x
 * 
 * Software licensed under MIT, maintained by github.com/stewones. Feel free to open an issue or make a PR.
 * Check out documentation and full list of contributors in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";!function(){angular.module("angular.morris-chart",[]).factory("morrisChartService",["$injector",function(t){var a={keyToAttr:function(t,a){return t+a.substring(0,1).toUpperCase()+a.substring(1)},populateScopeDefinition:function(t,e,r,s){return angular.forEach(r,function(r){t[a.keyToAttr(e,r)]=r===s?"@":"="}),t},populateOptions:function(t,e,r,s){return angular.forEach(e,function(e){var o=a.keyToAttr(r,e);s.hasOwnProperty(o)&&"undefined"!=typeof s[o]&&(t[e]=s[o])}),t},processFilterOptions:function(a,e){angular.forEach(a,function(a){if("string"==typeof e[a]&&t.has(e[a]+"Filter")){var r=t.get(e[a]+"Filter");e[a]=function(t){return r.call(this,t)}}})}};return a}])}(),function(){angular.module("angular.morris-chart").directive("lineChart",["morrisChartService",function(t){var a=["data","xkey","ykeys","labels","lineColors","lineWidth","pointSize","pointFillColors","pointStrokeColors","ymax","ymin","smooth","hideHover","hoverCallback","parseTime","units","postUnits","preUnits","dateFormat","xLabels","xLabelFormat","xLabelAngle","yLabelFormat","goals","goalStrokeWidth","goalLineColors","events","eventStrokeWidth","eventLineColors","continuousLine","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","fillOpacity","resize"];return{restrict:"A",scope:t.populateScopeDefinition({lineColors:"=",parseTime:"="},"line",a,"xkey"),link:function(e,r){e.$watch("lineData",function(){if(e.lineData)if("string"==typeof e.lineData&&(e.lineData=JSON.parse(e.lineData)),"string"==typeof e.lineYkeys&&(e.lineYkeys=JSON.parse(e.lineYkeys)),"string"==typeof e.lineYkeys&&(e.lineYkeys=JSON.parse(e.lineYkeys)),"string"==typeof e.lineLabels&&(e.lineLabels=JSON.parse(e.lineLabels)),"string"==typeof e.lineColors&&(e.lineColors=JSON.parse(e.lineColors)),"boolean"==typeof e.parseTime&&(e.parseTime=JSON.parse(e.parseTime)),e.lineInstance)e.lineInstance.options.xkey=e.lineXkey,e.lineInstance.options.ykeys=e.lineYkeys,e.lineInstance.options.labels=e.lineLabels,e.lineInstance.options.parseTime=e.parseTime,e.lineInstance.options.lineColors=e.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],e.lineInstance.setData(e.lineData);else{var s=t.populateOptions({element:r,lineColors:e.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],parseTime:e.parseTime},a,"line",e);t.processFilterOptions(["dateFormat","xLabelFormat","yLabelFormat"],s),e.lineInstance=new Morris.Line(s)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("donutChart",["morrisChartService",function(t){var a=["data","colors","formatter","resize"];return{restrict:"A",scope:t.populateScopeDefinition({},"donut",a),link:function(e,r){e.$watch("donutData",function(){if(e.donutData)if("string"==typeof e.donutData&&(e.donutData=JSON.parse(e.donutData)),"string"==typeof e.donutColors&&(e.donutColors=JSON.parse(e.donutColors)),e.donutInstance)e.donutInstance.setData(e.donutData);else{var s=t.populateOptions({element:r,colors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]},a,"donut",e);t.processFilterOptions(["formatter"],s),e.donutInstance=new Morris.Donut(s)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("barChart",["morrisChartService",function(t){var a=["data","xkey","ykeys","labels","barColors","stacked","hideHover","hoverCallback","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","resize"];return{restrict:"A",scope:t.populateScopeDefinition({barColors:"=",barX:"@",barY:"="},"bar",a),link:function(e,r){e.$watch("barData",function(){if(e.barData)if("string"==typeof e.barY&&(e.barY=JSON.parse(e.barY)),"string"==typeof e.barLabels&&(e.barLabels=JSON.parse(e.barLabels)),"string"==typeof e.barData&&(e.barData=JSON.parse(e.barData)),"string"==typeof e.barColors&&(e.barColors=JSON.parse(e.barColors)),"string"==typeof e.barStacked&&(e.barStacked=JSON.parse(e.barStacked)),"string"==typeof e.barResize&&(e.barResize=JSON.parse(e.barResize)),e.barInstance)e.barInstance.setData(e.barData);else{var s=t.populateOptions({element:r,barColors:e.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],stacked:!1,resize:!1,xkey:e.barX,ykeys:e.barY,xLabelMargin:2},a,"bar",e);e.barInstance=new Morris.Bar(s)}})}}}])}(),function(){angular.module("angular.morris-chart").directive("areaChart",["morrisChartService",function(t){var a=["data","xkey","ykeys","labels","lineColors","lineWidth","pointSize","pointFillColors","pointStrokeColors","ymax","ymin","smooth","hideHover","hoverCallback","parseTime","units","postUnits","preUnits","dateFormat","xLabels","xLabelFormat","xLabelAngle","yLabelFormat","goals","goalStrokeWidth","goalLineColors","events","eventStrokeWidth","eventLineColors","continuousLine","axes","grid","gridTextColor","gridTextSize","gridTextFamily","gridTextWeight","fillOpacity","resize","behaveLikeLine"];return{restrict:"A",scope:t.populateScopeDefinition({lineColors:"="},"area",a,"xkey"),link:function(e,r){e.$watch("areaData",function(){if(e.areaData)if("string"==typeof e.areaData&&(e.areaData=JSON.parse(e.areaData)),"string"==typeof e.areaYkeys&&(e.areaYkeys=JSON.parse(e.areaYkeys)),"string"==typeof e.areaLabels&&(e.areaLabels=JSON.parse(e.areaLabels)),"string"==typeof e.lineColors&&(e.lineColors=JSON.parse(e.lineColors)),e.areaInstance)e.areaInstance.setData(e.areaData);else{var s=t.populateOptions({element:r,lineColors:e.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]},a,"area",e);t.processFilterOptions(["dateFormat","xLabelFormat","yLabelFormat"],s),e.areaInstance=new Morris.Area(s)}})}}}])}(),/**
 * angular morris chart provides morris.js wrappers directives for angular
 * based in ngmorris from Connor James Leech
 * 
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function(){function t(t){t(function(){window.hljs&&$("pre code").each(function(t,a){window.hljs.highlightBlock(a)})},1e3)}angular.module("angular-morris-chart",["angular.morris-chart"]).controller("MorrisCtrl",["$timeout",t])}(),angular.module("angular-morris-chart").run(["$templateCache",function(t){t.put("doc/index.html",'<!doctype html><html class="no-js" ng-app="angular-morris-chart" ng-controller="MorrisCtrl as vm"><head><base href="/"><meta charset="utf-8"><title>angular morris chart - wrapper directives of morris.js for angular</title><meta name="description" content="angular morris chart provides a wrapper directives of morris.js for angular 1.x"><meta name="viewport" content="width=device-width"><meta name="author" content="stpa.co"><meta name="robots" content="index, follow"><meta content="article" property="og:type"><meta content="angular morris chart - wrapper directives of morris.js for angular" property="og:title"><meta content="angular morris chart provides wrapper directives of morris.js for angular" property="og:description"><meta content="https://angular-morris-chart.stpa.co" property="og:url"><meta content="https://stpa.co/about/" property="article:author"><meta content="https://stpa.co/assets/images/stpa-symbol.png" property="og:image"><meta content="angularjs" property="article:section"><meta content="modal" property="article:tag"><meta content="angular.js" property="article:tag"><meta content="morris.js" property="article:tag"><meta content="chart" property="article:tag"><link rel="shortcut icon" href="https://stpa.co/assets/images/favicon.png"></head><body><a href="https://github.com/stewones/angular-morris-chart"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a><div class="container"><div class="row"><div class="col-md-12"><div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs"><ul class="nav tabs-vertical col-sm-3" role="tablist"><li class="text-center"><a href="http://stpa.co" class="logo"><img src="https://stpa.co/assets/images/stpa-symbol.png"></a><h1>angular morris chart</h1><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-star" data-count-href="/stewones/angular-morris-chart/stargazers" data-count-api="/repos/stewones/angular-morris-chart#stargazers_count">Star</a><p>@@include(\'./partials/intro.html\')</p></li><li><hr></li><li role="presentation"><a href="#install" id="install-tab" role="tab" data-toggle="tab" aria-controls="install" aria-expanded="true">Install</a></li><li role="presentation" class="active"><a href="#sample" role="tab" id="sample-tab" data-toggle="tab" aria-controls="sample" aria-expanded="false">Examples</a></li><li role="presentation"><a href="https://github.com/stewones/angular-morris-chart/releases" target="_blank" aria-controls="changelog" aria-expanded="false">Changelog</a></li><li><hr></li><li class="text-center copyright"><p>Open an <a href="https://github.com/stewones/angular-morris-chart/issues">issue</a> and make your <a href="https://github.com/stewones/angular-morris-chart/pulls">pull-request</a>.<br>Code licensed under MIT.</p></li><li class="gh"><a class="github-button" href="https://github.com/stewones" data-count-href="/stewones/followers" data-count-api="/users/stewones#followers">Follow me @GitHub</a></li><li><br><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4883862110656795" data-ad-slot="8531994718" data-ad-format="auto"></ins><script>\r\n                                (adsbygoogle = window.adsbygoogle || []).push({});\r\n\r\n                            </script></li></ul><div id="" class="tab-content col-sm-9"><div role="tabpanel" class="tab-pane fade" id="install" aria-labelledby="install-tab">@@include(\'./partials/readme.html\')</div><div role="tabpanel" class="tab-pane fade active in" id="sample" aria-labelledby="sample-tab">@@include(\'./partials/sample.html\')</div><h2 id="contributors">Contributors</h2><table><thead><tr><th style="text-align:center"><a href="https://github.com/stewones"><img alt="stewones" src="https://avatars.githubusercontent.com/u/719763?v=3&s=117" width="117"></a></th><th style="text-align:center"><a href="https://github.com/venkatramachandran"><img alt="venkatramachandran" src="https://avatars.githubusercontent.com/u/4744258?v=3&s=117" width="117"></a></th><th style="text-align:center"><a href="https://github.com/rolaveric"><img alt="rolaveric" src="https://avatars.githubusercontent.com/u/960670?v=3&s=117" width="117"></a></th></tr></thead><tbody><tr><td style="text-align:center"><a href="https://github.com/stewones">stewones</a></td><td style="text-align:center"><a href="https://github.com/venkatramachandran">venkatramachandran</a></td><td style="text-align:center"><a href="https://github.com/tarlepp">rolaveric</a></td><td></td></tr></tbody></table><hr><h4 id="license">License</h4><p><code>angular-morris-chart</code> is open-sourced software licensed under <a href="http://opensource.org/licenses/MIT">MIT</a>, maintained by <a href="https://github.com/stewones">stewones</a>. Feel free to open an issue or make a PR.</p><br><ul class="social"><li style="width: 140px; text-align: left; height: 25px;"><iframe src="//www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fangular-morris-chart.stpa.co&amp;layout=button_count" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe></li><li style="width: 154px; margin-right: 12px;"><div class="g-plus" data-action="share" data-annotation="bubble" data-href="https://angular-morris-chart.stpa.co"></div></li><li style="margin-right: 12px;"><a href="https://twitter.com/share" class="twitter-share-button" data-hashtags="angularjs">Tweet</a></li><li style="margin-right: 12px;"><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-eye" data-count-href="/stewones/angular-morris-chart/watchers" data-count-api="/repos/stewones/angular-morris-chart#subscribers_count">Watch</a></li><li style="margin-right: 12px;"><a class="github-button" href="https://github.com/stewones/angular-morris-chart/issues" data-icon="octicon-issue-opened" data-count-api="/repos/stewones/angular-morris-chart#open_issues_count">Issue</a></li><li><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-git-branch" data-count-href="/stewones/angular-morris-chart/network" data-count-api="/repos/stewones/angular-morris-chart#forks_count">Fork</a></li></ul></div></div></div></div></div><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><script src="https://buttons.github.io/buttons.js" async="" defer="" id="github-bjs"></script><script>\r\n        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');\r\n    </script></body></html>'),t.put("doc/index.html",'<!doctype html><html class="no-js" ng-app="angular-morris-chart" ng-controller="MorrisCtrl as vm"><head><base href="/"><meta charset="utf-8"><title>angular morris chart - wrapper directives of morris.js for angular</title><meta name="description" content="angular morris chart provides a wrapper directives of morris.js for angular 1.x"><meta name="viewport" content="width=device-width"><meta name="author" content="stpa.co"><meta name="robots" content="index, follow"><meta content="article" property="og:type"><meta content="angular morris chart - wrapper directives of morris.js for angular" property="og:title"><meta content="angular morris chart provides wrapper directives of morris.js for angular" property="og:description"><meta content="https://angular-morris-chart.stpa.co" property="og:url"><meta content="https://stpa.co/about/" property="article:author"><meta content="https://stpa.co/assets/images/stpa-symbol.png" property="og:image"><meta content="angularjs" property="article:section"><meta content="modal" property="article:tag"><meta content="angular.js" property="article:tag"><meta content="morris.js" property="article:tag"><meta content="chart" property="article:tag"><link rel="shortcut icon" href="https://stpa.co/assets/images/favicon.png"><link rel="stylesheet" href="../../bower_components/morris.js/morris.css"><link rel="stylesheet" href="../../bower_components/highlightjs/styles/default.css"><link rel="stylesheet" href="index.css"><link rel="stylesheet" href="vendor.css"><link rel="stylesheet" href="doc/icons/font-awesome-4.3.0/css/font-awesome.css"><link rel="stylesheet" href="doc/icons/font-awesome-4.3.0/css/font-awesome.min.css"></head><body><a href="https://github.com/stewones/angular-morris-chart"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a><div class="container"><div class="row"><div class="col-md-12"><div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs"><ul class="nav tabs-vertical col-sm-3" role="tablist"><li class="text-center"><a href="http://stpa.co" class="logo"><img src="https://stpa.co/assets/images/stpa-symbol.png"></a><h1>angular morris chart</h1><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-star" data-count-href="/stewones/angular-morris-chart/stargazers" data-count-api="/repos/stewones/angular-morris-chart#stargazers_count">Star</a><p>@@include(\'./partials/intro.html\')</p></li><li><hr></li><li role="presentation"><a href="#install" id="install-tab" role="tab" data-toggle="tab" aria-controls="install" aria-expanded="true">Install</a></li><li role="presentation" class="active"><a href="#sample" role="tab" id="sample-tab" data-toggle="tab" aria-controls="sample" aria-expanded="false">Examples</a></li><li role="presentation"><a href="https://github.com/stewones/angular-morris-chart/releases" target="_blank" aria-controls="changelog" aria-expanded="false">Changelog</a></li><li><hr></li><li class="text-center copyright"><p>Open an <a href="https://github.com/stewones/angular-morris-chart/issues">issue</a> and make your <a href="https://github.com/stewones/angular-morris-chart/pulls">pull-request</a>.<br>Code licensed under MIT.</p></li><li class="gh"><a class="github-button" href="https://github.com/stewones" data-count-href="/stewones/followers" data-count-api="/users/stewones#followers">Follow me @GitHub</a></li><li><br><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4883862110656795" data-ad-slot="8531994718" data-ad-format="auto"></ins><script>\r\n                                (adsbygoogle = window.adsbygoogle || []).push({});\r\n\r\n                            </script></li></ul><div id="" class="tab-content col-sm-9"><div role="tabpanel" class="tab-pane fade" id="install" aria-labelledby="install-tab">@@include(\'./partials/readme.html\')</div><div role="tabpanel" class="tab-pane fade active in" id="sample" aria-labelledby="sample-tab">@@include(\'./partials/sample.html\')</div><h2 id="contributors">Contributors</h2><table><thead><tr><th style="text-align:center"><a href="https://github.com/stewones"><img alt="stewones" src="https://avatars.githubusercontent.com/u/719763?v=3&s=117" width="117"></a></th><th style="text-align:center"><a href="https://github.com/venkatramachandran"><img alt="venkatramachandran" src="https://avatars.githubusercontent.com/u/4744258?v=3&s=117" width="117"></a></th><th style="text-align:center"><a href="https://github.com/rolaveric"><img alt="rolaveric" src="https://avatars.githubusercontent.com/u/960670?v=3&s=117" width="117"></a></th></tr></thead><tbody><tr><td style="text-align:center"><a href="https://github.com/stewones">stewones</a></td><td style="text-align:center"><a href="https://github.com/venkatramachandran">venkatramachandran</a></td><td style="text-align:center"><a href="https://github.com/tarlepp">rolaveric</a></td><td></td></tr></tbody></table><hr><h4 id="license">License</h4><p><code>angular-morris-chart</code> is open-sourced software licensed under <a href="http://opensource.org/licenses/MIT">MIT</a>, maintained by <a href="https://github.com/stewones">stewones</a>. Feel free to open an issue or make a PR.</p><br><ul class="social"><li style="width: 140px; text-align: left; height: 25px;"><iframe src="//www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fangular-morris-chart.stpa.co&amp;layout=button_count" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe></li><li style="width: 154px; margin-right: 12px;"><div class="g-plus" data-action="share" data-annotation="bubble" data-href="https://angular-morris-chart.stpa.co"></div></li><li style="margin-right: 12px;"><a href="https://twitter.com/share" class="twitter-share-button" data-hashtags="angularjs">Tweet</a></li><li style="margin-right: 12px;"><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-eye" data-count-href="/stewones/angular-morris-chart/watchers" data-count-api="/repos/stewones/angular-morris-chart#subscribers_count">Watch</a></li><li style="margin-right: 12px;"><a class="github-button" href="https://github.com/stewones/angular-morris-chart/issues" data-icon="octicon-issue-opened" data-count-api="/repos/stewones/angular-morris-chart#open_issues_count">Issue</a></li><li><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-git-branch" data-count-href="/stewones/angular-morris-chart/network" data-count-api="/repos/stewones/angular-morris-chart#forks_count">Fork</a></li></ul></div></div></div></div></div><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><script src="https://buttons.github.io/buttons.js" async="" defer="" id="github-bjs"></script><script>\r\n        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');\r\n    </script><script src="../../bower_components/jquery/dist/jquery.js"></script><script src="../../bower_components/angular/angular.js"></script><script src="../../bower_components/raphael/raphael.js"></script><script src="../../bower_components/mocha/mocha.js"></script><script src="../../bower_components/morris.js/morris.js"></script><script src="../../bower_components/moment/moment.js"></script><script src="../../bower_components/bootstrap/dist/js/bootstrap.js"></script><script src="../../bower_components/highlightjs/highlight.pack.js"></script><script src="lib/morrisChart.module.js"></script><script src="lib/directives/lineChart.directive.js"></script><script src="lib/directives/donutChart.directive.js"></script><script src="lib/directives/barChart.directive.js"></script><script src="lib/directives/areaChart.directive.js"></script><script src="doc/index.js"></script></body></html>'),t.put("doc/partials/intro.html","<p>wrapper directives of <code>morris.js</code> for angular 1.x</p>"),t.put("doc/partials/readme.html",'<h2 id="angular-morris-chart-build-status-https-travis-ci-org-stewones-angular-morris-chart-svg-https-travis-ci-org-stewones-angular-morris-chart-">angular-morris-chart <a href="https://travis-ci.org/stewones/angular-morris-chart"><img src="https://travis-ci.org/stewones/angular-morris-chart.svg" alt="Build Status"></a></h2><h3 id="installation">Installation</h3><p>install <code>angular-morris-chart</code> by bower or npm running the following command</p><pre><code class="lang-shell">$ bower install angular-morris-chart --save\nor\n$ npm install angular-morris-chart --save\n</code></pre><p>or download <a href="https://raw.githubusercontent.com/stewones/angular-morris-chart/master/src/angular-morris-chart.min.js">here</a></p><p>then append <code>angular-morris-chart.min.js</code> in to end of body, before your project, after the <code>angular</code> and the other libs.</p><pre><code class="lang-html">&lt;!--using bower--&gt;\n...\n...\n&lt;script src=&quot;../bower_components/angular-morris-chart/src/angular-morris-chart.min.js&quot;&gt;&lt;/script&gt;\n...\n...\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre><pre><code class="lang-html">&lt;!--using npm--&gt;\n...\n...\n&lt;script src=&quot;../node_modules/angular-morris-chart/src/angular-morris-chart.min.js&quot;&gt;&lt;/script&gt;\n...\n...\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre><p>add <code>angular.morris-chart</code> as a module dependency for your app</p><pre><code class="lang-js">angular.module(&#39;my.app&#39;, [\n    &#39;angular.morris-chart&#39;\n])\n</code></pre><h3 id="usage">Usage</h3><p>There are four directives based on <code>morris.js</code></p><ul><li><code>bar-chart</code></li><li><code>line-chart</code></li><li><code>donut-chart</code></li><li><code>area-chart</code></li></ul><p>Check out <a href="https://angular-morris-chart.stpa.co">documentation</a> for live examples</p><h3 id="development">Development</h3><ul><li>install node and bower on your environment</li></ul><p>cd to your desired folder and clone <code>angular-morris-chart</code> repository</p><pre><code class="lang-sh">$ git clone https://github.com/stewones/angular-morris-chart\n$ cd angular-morris-chart\n</code></pre><p>install all project dependencies</p><pre><code class="lang-sh">$ npm install\n$ bower install\n</code></pre><p>serve lib/docs with live reload</p><pre><code class="lang-sh">#this serves docs on `http://localhost:3000` with live reload\n$ gulp serve\n</code></pre><p>serve lib/docs on distribution mode</p><pre><code class="lang-sh">#same above but with minified sources for distribution\n$ gulp serve:dist\n</code></pre><p>build all to distribution</p><pre><code class="lang-sh">#this generates minified src at `src/angular-morris-chart.min.js`, and docs on `dist/doc` folder.\n$ gulp build\n</code></pre><p>serve tests</p><pre><code class="lang-sh">#run unit test with karma\n$ gulp test\n</code></pre><p>serve automated tests</p><pre><code class="lang-sh">#unit test with live reload\n$ gulp test:auto\n</code></pre><hr><p><strong>Notes:</strong></p><ul><li><p>To contribute with this awesome project, just open an issue, then fork the project and make a new branch to do your work.</p></li><li><p>Run <code>gulp build</code> before make your PR.</p></li><li><p>To update docs site, just make another PR on <code>gh-pages</code> branch with only content generated in <code>dist/doc</code>. Please make sure that all tests are passing by <code>gulp test</code>. Verify all the tasks located on gulp folder for more details.</p></li><li><p><a href="https://github.com/stewones/angular-morris-chart/releases">Changelog</a></p></li></ul>'),t.put("doc/partials/sample.html",'<h2 id="usage-build-status-https-travis-ci-org-stewones-angular-morris-chart-svg-https-travis-ci-org-stewones-angular-morris-chart-">Usage <a href="https://travis-ci.org/stewones/angular-morris-chart"><img src="https://travis-ci.org/stewones/angular-morris-chart.svg" alt="Build Status"></a></h2><p>Just add <code>angular.morris-chart</code> as a module dependency for your app and then use the directives</p><pre><code class="lang-js">angular.module(&#39;my.app&#39;, [\n    &#39;angular.morris-chart&#39;\n])\n</code></pre><h2 id="bar-chart">Bar Chart</h2><pre><code class="lang-html">&lt;div\nbar-chart \nbar-data=&#39;[\n    { y: &quot;2006&quot;, a: 100, b: 90 },\n    { y: &quot;2007&quot;, a: 75,  b: 65 },\n    { y: &quot;2008&quot;, a: 50,  b: 40 },\n    { y: &quot;2009&quot;, a: 75,  b: 65 },\n    { y: &quot;2010&quot;, a: 50,  b: 40 },\n    { y: &quot;2011&quot;, a: 75,  b: 65 },\n    { y: &quot;2012&quot;, a: 100, b: 90 }\n]&#39;\nbar-x=&#39;y&#39;\nbar-y=&#39;[&quot;a&quot;, &quot;b&quot;]&#39;\nbar-labels=&#39;[&quot;Series A&quot;, &quot;Series B&quot;]&#39;\nbar-colors=&#39;[&quot;#31C0BE&quot;, &quot;#c7254e&quot;]&#39;&gt;\n&lt;/div&gt;\n</code></pre><div bar-chart="" bar-data=\'[ { y: "2006", a: 100, b: 90 }, { y: "2007", a: 75, b: 65 }, { y: "2008", a: 50, b: 40 }, { y: "2009", a: 75, b: 65 }, { y: "2010", a: 50, b: 40 }, { y: "2011", a: 75, b: 65 }, { y: "2012", a: 100, b: 90 } ]\' bar-x="y" bar-y=\'["a", "b"]\' bar-labels=\'["Series A", "Series B"]\' bar-colors=\'["#31C0BE", "#c7254e"]\'></div><h2 id="donut-chart">Donut Chart</h2><pre><code class="lang-html">&lt;div\ndonut-chart\ndonut-data=&#39;[\n    {label: &quot;Download Sales&quot;, value: 12},\n    {label: &quot;In-Store Sales&quot;,value: 30},\n    {label: &quot;Mail-Order Sales&quot;, value: 20}\n]&#39;\ndonut-colors=&#39;[&quot;#31C0BE&quot;,&quot;#c7254e&quot;,&quot;#98a0d3&quot;]&#39;\ndonut-formatter=&#39;&quot;currency&quot;&#39;&gt;\n&lt;/div&gt;\n</code></pre><div donut-chart="" donut-data=\'[ {label: "Download Sales", value: 12}, {label: "In-Store Sales",value: 30}, {label: "Mail-Order Sales", value: 20} ]\' donut-colors=\'["#31C0BE","#c7254e","#98a0d3"]\' donut-formatter=\'"currency"\'></div><p class="text-center"><code>donut-formatter</code> can either be a string for a filter name (eg. &#39;currency&#39;) or a reference to a scope function. <a href="http://plnkr.co/edit/AsxnDG?p=preview">example in plunker</a></p><h2 id="line-chart">Line Chart</h2><pre><code class="lang-html">&lt;div\nline-chart\nline-data=&#39;[\n    { y: &quot;2006&quot;, a: 100, b: 90 },\n    { y: &quot;2007&quot;, a: 75,  b: 65 },\n    { y: &quot;2008&quot;, a: 50,  b: 40 },\n    { y: &quot;2009&quot;, a: 75,  b: 65 },\n    { y: &quot;2010&quot;, a: 50,  b: 40 },\n    { y: &quot;2011&quot;, a: 75,  b: 65 },\n    { y: &quot;2012&quot;, a: 100, b: 90 }\n]&#39;\nline-xkey=&#39;y&#39;\nline-ykeys=&#39;[&quot;a&quot;, &quot;b&quot;]&#39;\nline-labels=&#39;[&quot;Serie A&quot;, &quot;Serie B&quot;]&#39;\nline-colors=&#39;[&quot;#31C0BE&quot;, &quot;#c7254e&quot;]&#39;&gt;\n&lt;/div&gt;\n</code></pre><div line-chart="" line-data=\'[ { y: "2006", a: 100, b: 90 }, { y: "2007", a: 75, b: 65 }, { y: "2008", a: 50, b: 40 }, { y: "2009", a: 75, b: 65 }, { y: "2010", a: 50, b: 40 }, { y: "2011", a: 75, b: 65 }, { y: "2012", a: 100, b: 90 } ]\' line-xkey="y" line-ykeys=\'["a", "b"]\' line-labels=\'["Serie A", "Serie B"]\' line-colors=\'["#31C0BE", "#c7254e"]\'></div><h2 id="area-chart">Area Chart</h2><pre><code class="lang-html">&lt;div\narea-chart\narea-data=&#39;[\n    { y: &quot;2006&quot;, a: 100, b: 90 },\n    { y: &quot;2007&quot;, a: 75,  b: 65 },\n    { y: &quot;2008&quot;, a: 50,  b: 40 },\n    { y: &quot;2009&quot;, a: 75,  b: 65 },\n    { y: &quot;2010&quot;, a: 50,  b: 40 },\n    { y: &quot;2011&quot;, a: 75,  b: 65 },\n    { y: &quot;2012&quot;, a: 100, b: 90 }\n  ]&#39;\narea-xkey=&#39;y&#39;\narea-ykeys=&#39;[&quot;a&quot;, &quot;b&quot;]&#39;\narea-labels=&#39;[&quot;Serie A&quot;, &quot;Serie B&quot;]&#39;\nline-colors=&#39;[&quot;#31C0BE&quot;, &quot;#c7254e&quot;]&#39;&gt;\n&lt;/div&gt;\n</code></pre><div area-chart="" area-data=\'[ { y: "2006", a: 100, b: 90 }, { y: "2007", a: 75, b: 65 }, { y: "2008", a: 50, b: 40 }, { y: "2009", a: 75, b: 65 }, { y: "2010", a: 50, b: 40 }, { y: "2011", a: 75, b: 65 }, { y: "2012", a: 100, b: 90 } ]\' area-xkey="y" area-ykeys=\'["a", "b"]\' area-labels=\'["Serie A", "Serie B"]\' line-colors=\'["#31C0BE", "#c7254e"]\'></div>')}]);