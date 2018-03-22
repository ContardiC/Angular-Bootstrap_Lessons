function filterCtrl($scope,$filter){
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
    //visualizzo a console i dati in formato json
    console.log($filter('json')($scope.contacts));
}