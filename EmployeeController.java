package com.crunchify.controller;

//import java.util.ArrayList;
//import java.util.List;
import com.google.gson.Gson;
import java.util.concurrent.CopyOnWriteArrayList;
import org.springframework.stereotype.Controller;
/*import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ValidationUtils;
import org.springframework.web.bind.annotation.ModelAttribute;*/
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.servlet.ModelAndView;

import com.crunchify.model.Employee;
/*import com.crunchify.model.JsonResponse;*/

@Controller
public class EmployeeController {
	private static CopyOnWriteArrayList<Employee> arr = new CopyOnWriteArrayList<Employee>();

	@RequestMapping(value = "/getRow", method = RequestMethod.GET)
	@ResponseBody
	public String getRow() {

		System.out.println("this is printing from the GET method from the server to client");

		Gson gson = new Gson();
		String output = gson.toJson(arr);
		System.out.println(output);
		// String result = "This function is getting values from the server";
		return output;

	}

	@RequestMapping(value = "/addRow", method = RequestMethod.POST)
	@ResponseBody
	public String addRows(@RequestBody String requestBody) {
		
		System.out.println("this is printing from the POST method from the server to client");
		Gson gson = new Gson();
		Employee emp = new Employee();
		emp = gson.fromJson(requestBody, Employee.class);
		arr.add(emp);
		System.out.println(emp);
		System.out.println(arr);
		System.out.println(arr.size());

		System.out.println("Handled application requests " + requestBody);
		return "{}";

	}
}
