 function DOMLoaded() {
	 
	 document.addEventListener("deviceready", phonegapLoaded, false);
	 
 }
 
 
 function phonegapLoaded() {
	
	$(function () {
		$("body").append("<h1>Device is Ready </h1>");
		
	}); 
	 
 }
 
 
 function alert() {
	 
	 navigator.notification.alert(
	 	'Conteu3do Vazio', 
		dismissed,
		'A Grande Sacada',
		'Done'  
	 );
	 
 }
 
 function dismissed() {

	$(function() {
		$("body").append("<h1>DISMISSED</h1>");
		
		 });	 
	 
 }