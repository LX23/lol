angular.module("myapp").controller("tourCtrl",function($scope,$ionicSlideBoxDelegate){
    $scope.isShow=true;
    $scope.onSlideChanged=function(){
        //if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
        //    $scope.isShow=true;
        //}else {
        //    $scope.isShow=false;
        //}
        var timer=null;
        timer=setInterval(function(){
            $scope.isShow=true;
        },1000);
        clearInterval(timer);
    }
});