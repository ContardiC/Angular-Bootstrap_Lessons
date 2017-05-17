/**
 * Created by carlocontardi on 17/05/17.
 */
function AppCtl($scope) {
   $scope.clickHandler=function () {
       alert("Clicked");

       $scope.isHidden=!$scope.isHidden;
   }
}
function contactCtrl($scope){
    $scope.contacts=[
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name:'Karan Bromwich',
            phone:'09876543210',
            email:'karan@email.com'
        }
    ];
    $scope.styleDemo=function(){
        if(!$scope.styler){
            // se non è selezionato
            return;
        }
        //altrimenti
        return{
            background:'red',
            fontWeight:'bold'
        };
    }
}
