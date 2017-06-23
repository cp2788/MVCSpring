package com.crunchify.model;

public class Employee {

 
	private String firstName = null;
	private String lastName = null;
	private int age = 0;

	public Employee(){
		
	}
	
	public Employee(String fname, String lName, int age){
		this.firstName=fname;
		this.lastName=lName;
		this.age=age;
		
	}
	
	  public String toString() {
	        return "First Name of the Employee.:" + this.firstName + ",, "
	                + "Last Name of the Employee.:" + this.lastName + ",, " + "Age:"
	                + this.age ;
	    }
	public String getfirstName(){
		return this.firstName;
		}
	public void  setfirstName(String firstName){
		 this.firstName= firstName;
		}
	public String getlastName(){
		return this.lastName;
		}
	public void  setlastName(String lastName){
		 this.lastName= lastName;
		}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	

}
