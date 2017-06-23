<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="resources/css/bootstrapTheme.css"/>
<link rel="stylesheet" type="text/css" href="resources/css/dataTables.css"/>
<link rel="stylesheet" type="text/css" href="resources/css/sample.css"/>
<script src="resources/js/jquery-3.2.1.js" ></script>
<script src="resources/js/dataTables.min.js"></script>
<script src="resources/js/bootstrap.min.js" ></script>
<script src="resources/css/dataTables.js" type="text/javascript" charset="utf8" ></script>
<script src="resources/js/sample.js" type ="text/javascript" ></script>
</head>

<body>



	<br>
	<div class="jumbotron" style="text-align:center" >
		<h2>
		   Employee Form  <br> <br>
		</h2>	
	</div >
	<div class="bg-grey">
		<ol class="breadcrumb">
               <li><a href="welcome.html">Welcome</a></li>
               <li class="active">Add Employee</li>
               <li><a href="sample1.html">View Employees</a></li>
               <li><a href="ajax.html">View Date & Time</a></li>
        </ol>
   </div>
</body>	
	<p id="demo"></p>
 <body>
	<form class="form-inline" align="center" method="GET" action="ajax.html">
  		<div class="form-group">
    			<label for="exampleInputName2">First Name</label>
    			<input type="text" class="form-control" id="user_id" placeholder="Jane">
  		</div>
    	<div class="form-group">
    			<label for="exampleInputName2">Last Name</label>
    			<input type="text" class="form-control" id="user_id1" placeholder="Doe">
  		</div>
    	<div class="form-group">
    			<label for="Age">Age</label>
    			<input type="number" class="form-control" id="age_id" placeholder="18" min="15" max="150" required>
  		</div>
    			<button type="button" class="btn btn-default" value= "Save" onClick="saveFunction()"" >Save</button>
  				<button type="button" id="addRow" class="btn btn-danger" value= "addRow" >Confirm</button>
    </form>

		<div class="container-fluid">
		<div class="row">
		<div class="class="col-lg-8 col-md-8">
  			<table class="table table-striped"  id="tbl_id" "width="50%">
    		<thead>
  		<tr>
    		<th>Firstname</th>
    		<th>Lastname</th> 
    		<th>Age</th>
  		</tr>
    		</thead>
  			</table></div></div></div></div>
	</body>
</html>

