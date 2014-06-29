#pragma strict

var angle = 0.0;
var scale = 0.0;

function Start () {
}

function OnMouseDown () {
	print ("Clicked " + gameObject.name);
	var orbit = GameObject.Find(gameObject.name + "-orbit");
	if(orbit != null) {
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var inverseOrigin = new Vector3(-ray.origin.x, -ray.origin.y, -ray.origin.z);
		angle = Vector3.Angle(ray.direction, inverseOrigin);
		orbit.renderer.enabled = true;
	} else {
		print (gameObject.name + "-orbit not found");
	}
}

function OnMouseUp () {
	print ("Released " + gameObject.name);
	var orbit = GameObject.Find(gameObject.name + "-orbit");
	if(orbit != null) {
		orbit.renderer.enabled = false;
	} else {
		print (gameObject.name + "-orbit not found");
	}
}

function OnMouseDrag () {
	//print ("Dragging " + gameObject.name);
	var orbit = GameObject.Find(gameObject.name + "-orbit");
	if(orbit != null) {		
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var inverseOrigin = new Vector3(-ray.origin.x, -ray.origin.y, -ray.origin.z);
		var newAngle = Vector3.Angle(ray.direction, inverseOrigin);
		var multiplier = newAngle/angle;
		angle = newAngle;
		orbit.transform.localScale *= multiplier;
		scale *= multiplier;
	} else {
		print (gameObject.name + "-orbit not found");
	}
}