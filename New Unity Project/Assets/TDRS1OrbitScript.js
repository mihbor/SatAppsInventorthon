#pragma strict

function Start () {
	GetComponent(Select).scale = 6.0;
}

function Update () {
	var scale = GetComponent(Select).scale;
	var divider = scale*scale/12; // 3
	transform.localPosition = new Vector3(scale*Mathf.Cos(Time.time/divider + Mathf.PI/2), 0, scale*Mathf.Sin(Time.time/divider + Mathf.PI/2));


	transform.rotation = Quaternion.FromToRotation(new Vector3(6*Mathf.Sin(Time.time/divider + Mathf.PI), 0, 6*Mathf.Cos(Time.time/divider + Mathf.PI)), Vector3.forward);
}