angular.module('contactsMgr',[])
.controller('AppCtl',function ($scope,jsonFilter) {

})
.filter('tronca',function () {
    return function (input,limit) {
        return(input.length>limit)?
            input.substr(0,limit)+'...'
            :input;

    };
})
.filter('addDots',function () {
    return function(input){
        return input+'.......';
    }

});