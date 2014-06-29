#pragma strict

function Start () {
	GetComponent(Select).scale = 3.0;
}


function Update () {
	var scale = GetComponent(Select).scale;
	var divider = scale*scale/12; // was 1
	transform.localPosition = new Vector3(scale*Mathf.Cos(Time.time/divider)*Mathf.Sin(51.65/90), scale*Mathf.Cos(Time.time/divider)*Mathf.Cos(51.65/90), scale*Mathf.Sin(Time.time/divider));


	transform.rotation = Quaternion.FromToRotation(new Vector3(2*Mathf.Sin(Time.time/divider + Mathf.PI/2)*Mathf.Cos(51.65/90), 2*Mathf.Sin(Time.time/divider + Mathf.PI/2)*Mathf.Sin(51.65/90), 2*Mathf.Cos(Time.time/divider + Mathf.PI/2)), Vector3.forward);


}