#pragma strict

class PlayerController extends MonoBehaviour {
	var speed = 500.0;

	function FixedUpdate() {
		var moveX = Input.GetAxis("Horizontal");
		var moveZ = Input.GetAxis("Vertical");
		
		var movement = new Vector3(moveX, 0, moveZ);
		rigidbody.AddForce(movement * speed * Time.deltaTime);
	}
	
	function OnTriggerEnter(other : Collider) {
		if (other.gameObject.tag == "PickUp")
			other.gameObject.SetActive(false);
	}
}