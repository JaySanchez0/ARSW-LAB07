package edu.eci.arsw.collabpaint.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import edu.eci.arsw.collabpaint.model.Point;
import edu.eci.arsw.collabpaint.model.Polygon;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;;

@Controller
public class STOMPMessagesHandler {
	@Autowired
	private SimpMessagingTemplate msgt;
	
	private ConcurrentHashMap<String,CopyOnWriteArrayList<Point>> points = new ConcurrentHashMap<>();
	
	@MessageMapping("/newpoint.{numdibujo}")    
	public void handlePointEvent(Point pt,@DestinationVariable String numdibujo) throws Exception {
		System.out.println("Nuevo punto recibido en el servidor!:"+pt);
		if(points.get(numdibujo)==null) points.put(numdibujo, new CopyOnWriteArrayList<Point>());
		points.get(numdibujo).add(pt);
		if(points.get(numdibujo).size()>=4) {
			msgt.convertAndSend("/topic/newpolygon."+numdibujo, new Polygon(points.get(numdibujo)));
			points.get(numdibujo).clear();
		}
		msgt.convertAndSend("/topic/newpoint."+numdibujo, pt);
	}
	@MessageMapping("/newpolygon.{numdibujo}")    
	public void handlePolygonEvent(Polygon pl,@DestinationVariable String numdibujo) throws Exception {
		msgt.convertAndSend("/topic/newpolygon."+numdibujo, pl);
	}
	
}
