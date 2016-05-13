/**
 * Created by NATALYA on 5/5/2016.
 */

var myApp = angular.module("myModule", []);

myApp.controller('MainCtrl', ['$scope', function($scope){
    $scope.visible = true;
    $scope.visibleEurope = false;
    $scope.countryName = 'NorthAmerica';
 
    $scope.innerNav =['North America', 'Europe'];

$scope.InnerNavigation = function(Name)
    {
        if(Name==2)
        {
            $scope.visible = false;
            $scope.visibleEurope = true;
        }
        else
        {
            $scope.visibleEurope = false;
            $scope.visible = true;
        }
    }
}]);

myApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http){

    var map;
    var mapContainer = document.getElementById('map');
    mapContainer.style.width = '100%';
    mapContainer.style.height = '500px';

    $scope.initialize = function() {
        var mapOptions = {
            center: new google.maps.LatLng(parseFloat(50.448145), parseFloat(30.460394)),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(mapContainer, mapOptions);


        var marker = new google.maps.Marker(
            {
                position: {lat: parseFloat(50.448145), lng: parseFloat(30.460394)},
                title: "National Technical University of Ukraine",
                animation: google.maps.Animation.DROP
            }
        );

        marker.addListener('click', toggleBounce);

        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            }
            else{
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }

            }

        map.setTilt(45);
        marker.setMap(map);

        $scope.map = map;
        }


        //new google.maps.Marker({position: {lat: parseFloat(50.448145), lng: parseFloat(30.460394)}, map: $scope.map});

}]);