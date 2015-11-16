function notifyServer(){
	var fb = new Firebase("https://andrewliu.firebaseio.com/");
	fb.authAnonymously(sendNotification);

	root = fb.root();
	var d = new Date();
	var n = d.getMonth();
	var y = d.getFullYear();
	x = root.child("Hits").child(y.toString()+"-"+n.toString());
	x.transaction(updateData);
}

function sendNotification(){

}

function updateData(prevData){
	prevData=prevData+1;
	return prevData;
}

$( document ).ready(function() {
	x = localStorage.getItem("HasAccessed")
	if(x){

	}
    else {
    	notifyServer();
    }
  });