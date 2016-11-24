var remder=angular.module('remder',[]);
remder.controller('mainCtil',
['$scope','$timeout',function($scope,$timeout){
    var arr=['blue','org','pink','tuhuang','red','green','yellow'];
    var c=arr.length-1;
	$scope.lists=[
	{   id:1,
		threm:'red',
		listname:'买车',
		todos:[
		{id:1,name:'宝马',isDone:true},
		{id:2,name:'奔驰',isDone:true}
		]
	},
	{   id:2,
		threm:'yellow',
		listname:'买房',
		todos:[
		{id:1,name:'首付',isDone:true},
		{id:2,name:'月付',isDone:true}
		]
	},
	]
	var a=0;
	$scope.add=function(){
		a++;
        c--;
        if(c<0){
    	c=6;
    }
		$scope.lists.push({id:a,threm:arr[c],listname:'新列表'+a+'',todos:[{id:1,name:'',isDone:true}]})
	}
	$scope.plus=function(){
		var qq=$scope.currentlist.todos;
		qq.push({id:1,name:'新事项',isDone:true})
	}
	$scope.currentlist=$scope.lists[0];
	$scope.setcurrent=function(i){
		$scope.currentlist=$scope.lists[i];
	}
	$scope.cen=function(e){
		e.stopPropagation();
	}
	$scope.del=function(id){
		var arr=[];
		for(var i=0;i<$scope.lists.length;i++){
			if($scope.lists[i].id !==id ){
				arr.push($scope.lists[i]);
			}
		}
		$scope.lists=arr;
		$scope.currentlist=$scope.lists[0];
	}
}])
 