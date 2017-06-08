formApp
.factory('InfoFactory', function($http){
    var InfoFactory = this;
    var url = "js/data/data.json";
    var successCallback = function (response){
      InfoFactory.infoObject = response.data
      console.log("Inside successCallback");
      console.log("Response: ", response);
      console.log("Response.Data: ", response.data);
      console.log("InfoFactory.infoObject: ", InfoFactory.infoObject);
    }
    $http.get(url).then(successCallback);
  
    console.log("After $http.get: ")
    console.log("InfoFactory.infoObject: ", InfoFactory.infoObject)
  return InfoFactory;
})