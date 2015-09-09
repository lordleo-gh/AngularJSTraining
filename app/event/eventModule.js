

(function(){

angular.module('eventModule', [])
.factory('MainTitle', [function () {
	

	return {
		title:"Nougal"
	};
}])
.filter('searchPerson', function() {
  return function(items,search) {
    var filtered = [];
    if(!search){return items;}
    angular.forEach(items, function(item) {

    	if(angular.lowercase(item.firstName).indexOf(angular.lowercase(search))!=-1)
    	{
    		filtered.push(item);
    	}
      
    });
   return filtered;
  };
})

.config([function () {
	console.log("Event Module:: config");
}])
.run([function () {
	console.log("Event Module::running");
}])
.controller('EventCtrl', ['$scope', '$modal', 'MainTitle',function ($scope,$modal,mainTitle) {
	this.title = mainTitle.title;
	
	this.menu=[
		{
			name:"Whereabouts",
			href:"index.html"
		},
		{
			name:"Contact",
			href:"contact.html"
		}
	]	

	this.index = 0;
	this.eventIndex = 0;

	this.setIndex=function(val)
	{
		this.index = val;
		console.log("called")
	}

	this.getIndex=function(){
		return(this.index);
	}

	this.setEventIndex = function(val)
	{
		this.eventIndex = val;
	}

	this.getEventIndex = function(){
		return(this.eventIndex);
	}
/*
	this.people=[
	{
		firstName : "Mark",
		lastName : "Humphreys",
		userName: "MARKH",
		whereAbouts: "Birmingham"
	},
	{
		firstName : "John",
		lastName : "Cullen",
		userName: "JOHNC",
		whereAbouts: "Newcastle"
	},
	{
		firstName : "Alex",
		lastName : "Francis",
		userName: "ALEXF",
		whereAbouts: "London"
	},
	]

*/ 

	this.addPerson = function(userId) {
    
		console.log("clicked add");
/*
		var elem = {
		firstName : "Christoph",
		lastName : "Kieselmann",
		userName: "CKIESELMAN",
		whereAbouts: "Tamworth"
		}

    	this.people.push(elem);
*/

        var modalInstance = $modal.open({
            templateUrl: 'add_user_modal',
            controller: $scope.model,
            resolve: {
                id: function() {
                    return userId;
                }
            }
        });

	    // close modal
        $modalInstance.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

        // Add new user
        $modalInstance.add = function() {
   //         Users.$add($scope.user)
            $modalInstance.dismiss('cancel');
        };

        // Save edited user.
        $modalInstance.save = function() {
     //       $scope.user.$save();
            $modalInstance.dismiss('cancel');
        };
  	}

	
}])
.controller('EventItemCtrl', ['$scope','MainTitle',  function ($scope,mainTitle) {
	
}])
.controller('EventTabCtrl', ['$scope', function ($scope) {
	this.tab = 0;
	this.setTab=function(val)
	{
		this.tab = val;
	}
	this.getTab=function(val)
	{
		return(this.tab);
	}
	
}])

// directives
 .directive('eventItem', function () {
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment   
        /*      
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },
            */
        templateUrl: 'app/event/eventItem.html',
       
        controller: function($scope){
            console.log("do stuff")

        }, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});


})();