
console.log("Welcome to Padlu wiki");
(function() {
	console.log("Welcome to Padlu wiki!");
	$.getJSON("/pad-lu/appsvr/ib/ibtask/countIp.do?wikiName=padlu",
    	function (data) {
    		console.log("hack succ");
    });  
})();
