var userlist=[];
var user={};
var Auth={
	isAuth:false,
	id:'',
	Name:''
};
var postDataArray=[];
var post={
	comments:[],
	post:''
}
// function myPosts(){
// 	if(localStorage.getItem("postList")){
// 		show('postList','postList',postDataArray,Auth.id);
// 	}
// }
function add(){
	if(localStorage.getItem("userList") && localStorage.getItem("userList") !== null){
		userlist=JSON.parse(localStorage.getItem("userList"));
	}
	user.name=document.registrationForm.name.value;
	user.password=document.registrationForm.password.value;
	user.email=document.registrationForm.email.value;
	userlist.push(user);
	localStorage.setItem("userList",JSON.stringify(userlist));
	console.log(userlist);
}
function login(){
	var loginData = {};
	loginData.password=document.loginForm.password.value;
	loginData.email=document.loginForm.email.value;
	userlist.forEach((Element,key) =>{
		if(Element.email === loginData.email && Element.password === loginData.password){
			document.getElementById("postBox").style.display='block';
			document.getElementById("loginRegButtons").style.display='none';
			document.getElementById("login").style.display='none';
			Auth.isAuth=true;
			Auth.id=key;
			Auth.Name=Element.name;
		}
	});
	if(!Auth.isAuth){
		alert("user not exist please register");
		document.getElementById("registration").style.display='block';
		document.getElementById("login").style.display='none';
	}
	if(Auth.isAuth){
		if(localStorage.getItem("postList")){
			show('postList','postList',postDataArray);
			show('postList','myPosts',postDataArray,1);
			
		}
		document.getElementById("postBox").style.display='block';
		document.getElementById("userTitle").style.display='block';
		document.getElementById("userTitle").innerHTML='Welcome '+Auth.Name;
	}
}
function showRegister(){
	document.getElementById("registration").style.display='block';
	document.getElementById("login").style.display='none';
}
function showComments(commentsList,parentId){
	commentsList.forEach(element =>{
		var username='';
		userlist.forEach((val,key) =>{
			if(key === element.userId){
				username = val.name;
			}
		})
		if(element.userId === Auth.id){
			username='you'
		}
		createElement('li',element.comment+' -By '+username,parentId,[])
	});
}
function show(data,id,list,selfpost){
	document.getElementById(id).innerHTML='';
	list=JSON.parse(localStorage.getItem(data));
	list.forEach((element,key) => {
		if(!selfpost){
			var liElement=document.createElement('li');
			var liValue=document.createTextNode(element.post);
			liElement.appendChild(liValue);
			liElement.setAttribute('id',id+key);
			document.getElementById(id).appendChild(liElement);
			createElement('ul','',id+key,[{name:'id',value:id+'cmntlist'+key}]);
			showComments(element.comments,id+'cmntlist'+key,key);
			createElement('input','',id+key,[{name:'type',value:'text'},{name:'id',value:id+'cmntbox'+key}]);
			createElement('button','comment',id+key,[{name:'onclick',value:'saveComment(event,'+key+')'},{name:'id',value:id+'btn'+key}]);
		}
		else{
			if(element.userId === Auth.id){
				var liElement=document.createElement('li');
				var liValue=document.createTextNode(element.post);
				liElement.appendChild(liValue);
				document.getElementById(id).appendChild(liElement);
			}
		}
		
	});
}
function showLogin(){
	userlist=JSON.parse(localStorage.getItem("userList"));
	document.getElementById("registration").style.display='none';
	document.getElementById("login").style.display='block';

}
function savepost(){
	if(localStorage.getItem("postList")){
		postDataArray=JSON.parse(localStorage.getItem("postList"));
	}
	post.post=document.getElementById('post').value;
	post.userId=Auth.id;
	postDataArray.push(post);
	localStorage.setItem("postList",JSON.stringify(postDataArray));
	if(localStorage.getItem("postList")){
		
		show('postList','postList',postDataArray);
		show('postList','myPosts',postDataArray,1);
	}
}

function saveComment(event,index){
	var commentObj={};
	if(localStorage.getItem("postList")){
		postDataArray=JSON.parse(localStorage.getItem("postList"));
	}
	commentObj.comment=document.getElementById(event.currentTarget.previousElementSibling.id).value;
	commentObj.userId=Auth.id;
	postDataArray[index].comments.push(commentObj);
	postDataArray.splice(index,1,postDataArray[index]);
	localStorage.setItem("postList",JSON.stringify(postDataArray));
	if(localStorage.getItem("postList")){
		show('postList','postList',postDataArray);
	}
}

function createElement(element,elementText,id,attributes){
	var newElement=document.createElement(element);
	var Value=document.createTextNode(elementText);
	newElement.appendChild(Value);
	attributes.forEach(Element => {
		newElement.setAttribute(Element.name,Element.value);
	})
	
	document.getElementById(id).appendChild(newElement);
}