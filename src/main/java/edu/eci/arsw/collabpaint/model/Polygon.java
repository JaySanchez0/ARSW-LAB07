package edu.eci.arsw.collabpaint.model;

import java.util.List;

public class Polygon {
	
	private List<Point> points;
	
	public Polygon() {
		
	}
	
	public Polygon(List<Point> pt) {
		this.points = pt;
	}

	public List<Point> getPoints() {
		return points;
	}

	public void setPoints(List<Point> points) {
		this.points = points;
	}
	
	
	
}
