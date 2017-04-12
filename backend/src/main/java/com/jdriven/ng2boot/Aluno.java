package com.jdriven.ng2boot;

public class Aluno {

    private int id;
    private String name;
    private String gender;

    public Aluno(int id, String name, String gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }

	
	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

 
    
}
