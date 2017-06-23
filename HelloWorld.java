package com.crunchify.controller;

 
//import java.awt.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
 

 
@Controller
public class CrunchifyHelloWorld {
	
	
	@RequestMapping("/sample")
	public ModelAndView helloWorld() {
 
		String message = "<br><div style='text-align:center;'>"
				+ "Output from the tables";
		return new ModelAndView("sample", "message", message);
	}
	@RequestMapping("/sample1")
	public ModelAndView helloWorld1() {
 
		String message = "<br><div style='text-align:center;'>"
				+ "Sample Page 2";
		return new ModelAndView("sample1", "message", message);
	}
	@RequestMapping("/welcome")
	public ModelAndView helloWorld2() {
 
		String message = "<br><div style='text-align:center;'>"
				+ "";
		return new ModelAndView("welcome", "message", message);
	}
}
