#pragma strict


function Start () {

}



function Update () {


	transform.rotation =  Quaternion.FromToRotation(Vector3(Mathf.Cos(-Time.time/3), 0, Mathf.Sin(-Time.time/3)), Vector3.forward);
}