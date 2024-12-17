package com.springserver.springboot_server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


/// this is our JAVA class The Maps to our Database Table Which has following Declared Fields
@Entity//annotate this class for mapping
@Table(name = "tutorials")// create table tutorial if not present in Database 
public class Tutorial {
	@Id//Annotation for database table for for assign Primark key for Table
	@GeneratedValue(strategy = GenerationType.IDENTITY)//Each table Assign New Unique value to Fieds in database
	//like java=> id primary Key autoincremented
	private long id;

	@Column(name = "title")//definds fields of database /column
	private String title;

	@Column(name = "description")//same here another column definition
	private String description;

	@Column(name = "published")
	private boolean published;

	// no Arguments Constructor
	public Tutorial() {

	}
	//Parameterized /Constructor
	public Tutorial(String title, String description, boolean published) {
		this.title = title;
		this.description = description;
		this.published = published;
	}
		//getter And Setter
	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean isPublished) {
		this.published = isPublished;
	}

	@Override
	public String toString() {
		return "Tutorial [Tutorial id=" + id + ", Title of Tutorial=" + title + ", description of Tutorial=" + description + ", published=" + published + "]";
	}

}
