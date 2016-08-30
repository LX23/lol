/**
 * Created by hxsd on 2016/8/4.
 */
/**
 * Created by hxsd on 2016/8/3.
 */
    //创建模板
    var myapp=angular.module("myapp",["ionic"]);
    
    myapp.directive('hideTabs', function($rootScope) {
		    return {
		        restrict: 'A',
		        link: function(scope, element, attributes) {
		            scope.$on('$ionicView.beforeEnter', function() {
		                scope.$watch(attributes.hideTabs, function(value){
		                    $rootScope.hideTabs = value;
		                });
		            });
		
		            scope.$on('$ionicView.beforeLeave', function() {
		                $rootScope.hideTabs = false;
		            });
		        }
		    };
		})
   
    //配置路由
    myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

    //-----------ionic tab导航在android 真机测试中 导航在顶部解决方法----------------------------------
            $ionicConfigProvider.platform.ios.tabs.style('standard');
            $ionicConfigProvider.platform.ios.tabs.position('bottom');
            $ionicConfigProvider.platform.android.tabs.style('standard');
            $ionicConfigProvider.platform.android.tabs.position('bottom');

            $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.navBar.alignTitle('center');

            $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
            $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

            $ionicConfigProvider.platform.ios.views.transition('ios');
            $ionicConfigProvider.platform.android.views.transition('android');


            //$urlRouterProvider.otherwise('/tab/dash');
//---------------------------------真机测试-导航在顶部解决方法-结束--------------------------------------------------------------------------

        //去掉后退按钮中的文字
        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");

        //指定各种状态及该状态下对应的url和html模板
        //引导页
        $stateProvider.state("tour",{
            url:"/tour",
            templateUrl:"views/tour/tour.html",
            controller:"tourCtrl"
        });
        $stateProvider.state("tabs",{
            url:"/tabs",
            abstract:true,  //抽象的
            templateUrl:"views/tabs/tabs.html"
        });
        //---------------资讯页面----------------------
        $stateProvider.state("tabs.zixun",{
            url:"/zixun",
            views:{"tab-zixun":{templateUrl:"views/zixun/zixun.html"}}
        });
        //--------------资讯半价页面------------------------
        $stateProvider.state("tabs.zx_banjia",{
            url:"/zx_banjia",
            views:{"tab-zixun":{templateUrl:"views/zx_banjia/zx_banjia.html"}}
        });
        //--------------资讯详情页面------------------------
        $stateProvider.state("tabs.zx_xiangqing",{
            url:"/zx_xiangqing",
            views:{"tab-zixun":{templateUrl:"views/zx_xiangqing/zx_xiangqing.html"}}
        });
        //--------------资讯攻略页面------------------------
        $stateProvider.state("tabs.gonglue",{
            url:"/gonglue",
            views:{"tab-zixun":{templateUrl:"views/gonglue/gonglue.html"}}
        });
        //--------------资讯活动页面------------------------
        $stateProvider.state("tabs.zx_huodong",{
            url:"/zx_huodong",
            views:{"tab-zixun":{templateUrl:"views/zx_huodong/zx_huodong.html"}}
        });
        //--------------好友页面----------------------
        $stateProvider.state("tabs.haoyou",{
            url:"/haoyou",
            views:{"tab-haoyou":{templateUrl:"views/haoyou/haoyou.html"}}
        });
        //---------------发现页面----------------------
        $stateProvider.state("tabs.faxian",{
            url:"/faxian",
            views:{"tab-faxian":{templateUrl:"views/faxian/faxian.html"}}
        });
        //---------------我的页面----------------------
        $stateProvider.state("tabs.me",{
            url:"/me",
            views:{"tab-me":{templateUrl:"views/me/me.html"}}
        });
        //--------------我的资产------------------------
        $stateProvider.state("tabs.me_zichan",{
            url:"/me_zichan",
            views:{"tab-me":{templateUrl:"views/me_zichan/me_zichan.html"}}
        });
        //--------------我的战绩------------------------
        $stateProvider.state("tabs.me_zhanji",{
            url:"/me_zhanji",
            views:{"tab-me":{templateUrl:"views/me_zhanji/me_zhanji.html"}}
        });
        //--------------我的能力------------------------
        $stateProvider.state("tabs.me_nengli",{
            url:"/me_nengli",
            views:{"tab-me":{templateUrl:"views/me_nengli/me_nengli.html"}}
        });
        //-----------------------------------默认路由------------------
        $urlRouterProvider.otherwise("/tour");
    });

    angular.module('myapp').controller('myCtrl', function($scope,$http) {
        //资讯的数据内容 c
        $scope.products=[
            {title:"英雄联盟2016LSPL夏季赛专题",explain:"19时直播：WYD VS ZTR",imgsrc:"images/0_10.jpg",times:"36分钟前"},
            {title:"2日凌晨6点30分版本更新公告",explain:"源计划炫酷来袭！龙女薇恩鳄鱼增强，人吗吸血鬼削弱",imgsrc:"images/0_13.jpg",times:"1个小时前"},
            {title:"每日一笑 连体蛤蟆",explain:"你见过传说中的连体蛤蟆吗？",imgsrc:"images/00_03.jpg",times:"3个小时前"},
            {title:"玩家吐槽需要加个隐身功能",explain:"能不能增加一个隐身功能？为只想一个人安安静静的打游戏",imgsrc:"images/00_06.jpg",times:"5个小时前"},
            {title:"真爱粉 Uzi家人LPL现场助威",explain:"作为小狗的家人，昨天也是到现场为uzi助阵，真是甜蜜",imgsrc:"images/00_08.jpg",times:"5个小时前"}
        ];
    //            好友的数据信息
        $scope.friends=[
            {title:"掌盟好友",
                icons:"ion-android-arrow-dropright",
                imgsrc:"images/1_17.jpg",
                people:{qqName:"名字",
                    qq:"images/1_06.jpg"
                }
            },
            {title:"游戏好友",icons:"ion-android-arrow-dropdown",imgsrc:"images/1_23.jpg",
                people:{qqName:"名字",qq:"images/1_06.jpg"}
            }
        ];
        //          战绩页面
        $scope.Records=[
        	{title:"经典匹配",explain:"失败",pic:"images/3_37.jpg",times:"两天前"},
        	{title:"经典匹配",explain:"胜利",pic:"images/33_03.jpg",times:"两天前"},
        	{title:"经典匹配",explain:"胜利",pic:"images/33_06.jpg",times:"两天前"},
        	{title:"经典匹配",explain:"胜利",pic:"images/33_08.jpg",times:"两天前"},
        	{title:"经典匹配",explain:"胜利",pic:"images/44_03.jpg",times:"两天前"},
        	{title:"经典匹配",explain:"胜利",pic:"images/4_12.jpg",times:"两天前"}
        ];

        //好友列表显示/隐藏时对应的icon切换----------------------------
        $scope.icons=function(){
            if($scope.data.showDelete==false||$scope.data.showNav==true){
                $scope.data.a="ion-android-arrow-dropright";
            }else if($scope.data.showDelete==true||$scope.data.showNav==false){
                $scope.data.a="ion-android-arrow-dropdown";
            }
        };
        //     掌盟好友 显示隐藏
        $scope.data={
            showDelete:false,
            showNav:true,
            a:$scope.icons
        };
        $scope.data.a="ion-android-arrow-dropright";


        //列表显示/隐藏时对应的icon切换
        $scope.icons1=function(){
            if($scope.data1.showDelete==false||$scope.data1.showNav==true){
                $scope.data1.a="ion-android-arrow-dropright";
            }else if($scope.data1.showDelete==true||$scope.data1.showNav==false){
                $scope.data1.a="ion-android-arrow-dropdown";
            }
        };
        //      游戏好友显示隐藏
        $scope.data1={
            showDelete:true,
            showNav:false,
            a:$scope.icons
        };
        $scope.data1.a="ion-android-arrow-dropdown";

        //发现页面的隐藏和显示-----------------------------------------
        //社区显示/隐藏时对应的icon切换----------------------------
        $scope.icons2=function(){
            if($scope.data2.showDelete==false||$scope.data2.showNav==true){
                $scope.data2.a="ion-ios-arrow-down";
            }else if($scope.data2.showDelete==true||$scope.data2.showNav==false){
                $scope.data2.a="ion-ios-arrow-up";
            }
        };
        $scope.data2={
            showDelete:false,
            showNav:true,
            a:$scope.icons
        };
        $scope.data2.a="ion-ios-arrow-down";

        //游戏资料显示/隐藏时对应的icon切换----------------------------
        $scope.icons3=function(){
            if($scope.data3.showDelete==false||$scope.data3.showNav==true){
                $scope.data3.a="ion-ios-arrow-down";
            }else if($scope.data3.showDelete==true||$scope.data3.showNav==false){
                $scope.data3.a="ion-ios-arrow-up";
            }
        };
        $scope.data3={
            showDelete:true,
            showNav:false,
            a:$scope.icons
        };
        $scope.data3.a="ion-ios-arrow-up";




        //     上拉刷新
        $scope.infinite=function(){
            $http.get("data.json").success(function(data){
                Array.prototype.push.apply($scope.products,data);
            }).finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
        };
        
        //     上拉刷新
        $scope.zhanji=function(){
            $http.get("zhanji.json").success(function(data){
                Array.prototype.push.apply($scope.Records,data);
            }).finally(function(){
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
        };
        
        
        //    下拉刷新
        $scope.refresh=function(){
            $http.get("data.json").success(function(data){
                $scope.products=data
            }).finally(function(){
                $scope.$broadcast("scroll.refreshComplete")
            });
        };
    });