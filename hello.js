 

angular.module('demo', []).controller('Hello', function($scope, $http) {
 var typ = "noun"; 
 var typ2 = "verb";
 
 var htmlstring =  "https://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=" + typ + " &minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=55&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

   var htmlstring2 =  "https://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=" + typ2 + " &minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=55&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
  
  
 $http.get(htmlstring).
        then(function(response) {
            $scope.myData = response.data;
        });

		
 $http.get(htmlstring2).
        then(function(response) {
            $scope.myData2 = response.data;
        });		 
 
     $scope.myNumber = "20";
   
    $scope.getNumber = function(num) {
        return new Array(num);   
    }
		
});