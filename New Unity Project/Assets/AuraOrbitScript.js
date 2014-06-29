#pragma strict

function Start () {
	GetComponent(Select).scale = 5.0;
}


function Update () {
	var scale = GetComponent(Select).scale;
	var divider = scale*scale/12; // was 1.5?
	transform.localPosition = new Vector3(0, scale*Mathf.Cos(Time.time/divider), scale*Mathf.Sin(Time.time/divider));


	transform.rotation = Quaternion.FromToRotation(new Vector3(0, 4*Mathf.Sin(Time.time/divider + Mathf.PI/2), 4*Mathf.Cos(Time.time/divider + Mathf.PI/2)), Vector3.forward);

}