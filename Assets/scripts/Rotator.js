#pragma strict

class Rotator extends MonoBehaviour {
	var rotation = new Vector3(15, 30, 45);
	
	function Update() {
		transform.Rotate(rotation * Time.deltaTime);
	}
}