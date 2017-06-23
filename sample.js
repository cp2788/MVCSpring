/** Methods to call Sample javaScripts
 * 
 */


var json="";
var strJson="";
	
//// WHEN DOCUMENT HAS FINISH LOADING RUN THIS CODE	 
	 $(document).ready(function() {
		 getRowOnStartup();
 
//// EVENTS

   	$("#addRow").click(function() {
   	
   			        firstName           = $("#user_id").val();
   		            lastName            = $("#user_id1").val();
   		            age    		        = $("#age_id").val();
   		      
   		 json={"firstName":firstName,"lastName" :lastName,"age":age};
   		
               strJson=JSON.stringify(json);
               console.log("strJson: "+strJson);

   		 $.ajax({
   	            type        : "POST", 
   	            url         :  "addRow.html", 
   	            data        : strJson,
   	            contentType: "application/json",
   	            dataType    : "json",
   	            success: function (data) {
   	            	addJSONObjecttoDataTable(json);
	            },
   	            error: function (){
   	                alert('Error occurred');
   	            }
  	         }).done(function() {
  	        	 
  	         }).fail(function(){
  	        	 console.log("fail")
  	       	 })
   	});
	
	
 });
 
	
	/////// FUNCTIONS
	
	//Take Json Array Add to Data Table
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
	function addJSONObjecttoDataTable(json)
	{
		var	t = $('#tbl_id').DataTable();
		
		 t.row.add( [
	        		(json.firstName) ,
	        		(json.lastName),
	        		(json.age)	           
	        	  ] ).draw( false );
	}
	
	function getRowOnStartup() 
	{
		console.log("Method to give a call to the server and fetch values from the server");
        $.ajax({type :"GET",
        	contentType: "text/plain",
        	url : "getRow.html",
        	dataType:"text",
        	data: 'test',
        	success : function(data) 
        	{   
        		console.log("get row on success " + data);
        		addJSONArraytoTable(data);
        	}
       
        });
            
    }
	
	function saveFunction()
	{
		confirm("Are you sure you wish to save the Employee information?")	
	}
