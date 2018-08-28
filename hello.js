 

angular.module('demo', []).controller('Hello', function($scope, $http) {
 var typ = "noun"; 
 var typ2 = "verb";
 
 var htmlstring =  "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=5&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c"

  var htmlstring2 =  "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=5&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c"

  
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

//1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c
//http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=5&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c
//http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=5&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c
