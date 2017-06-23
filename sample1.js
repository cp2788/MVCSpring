/**Methods to call sample1 JSP file
 * 
 * 
 * 
 */ 	 


var json="";
var strJson="";
	
////WHEN DOCUMENT HAS FINISH LOADING RUN THIS CODE	 
	 $(document).ready(function() {
		 getRowOnStartup();

	/////// FUNCTIONS
	
	//Take json Array Add to Data Table
	function addJSONArraytoTable(jsonArray1){
		var jsonArray = JSON.parse(jsonArray1);
		var jsonLen= jsonArray.length; var i;
		 
		 for(i = 0; i < jsonLen; i++)
		 {
			 console.log("Adding Json Object " + jsonArray[i]);
			 addJSONObjecttoDataTable(jsonArray[i]); 
		 }				
	}
	      
	//Take Json Object Add to Data Table
	function addJSONObjecttoDataTable(json){
		var	t = $('#tbl_id').DataTable();
		 t.row.add( [
	        	(json.firstName) ,
	        	(json.lastName),
	        	(json.age)	           
	        ] ).draw( false );
	}
	
	function getRowOnStartup() {
		
       console.log("Method to give a call to the server and fetch values from the server");
       $.ajax({type :"GET",
     	  contentType: "text/plain",
     	  url : "getRow.html",
     	  dataType:"text",
     	 // data :request,
           success : function(data) {   
         	 
         	  console.log("get row on success " + data);
         	addJSONArraytoTable(data);
       }
      
           });
	}
	
	 });
