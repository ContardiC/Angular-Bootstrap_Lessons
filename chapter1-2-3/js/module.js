angular.module('contactsMgr',[])
    .controller('contactsCtrl',function($scope){
    $scope.contacts=[
        {
            name:'Jonh Doe',
            phone:'0123456789',
            email:'john@example.com'
        },
        {
            name: 'Carlo Contardi',
            phone:'9876543210',
            email: 'carlo@example.com'
        }
    ];
    })
    .filter('truncate',function(){
        return function(input,limit){
            return(input.length>limit)?input.substr(0,limit)+'...':input;
        } ;
    });