#pragma strict

class PlayerController extends MonoBehaviour {
	var speed = 500.0;
	var countText : UI.Text;
	var winText : UI.Text;
	
	private var count : int;	
	
	function Start() {
		count = 0;
		setCountText();
		winText.text = "";
	};

	function FixedUpdate() {
		var moveX = Input.GetAxis("Horizontal");
		var moveZ = Input.GetAxis("Vertical");
		
		var movement = new Vector3(moveX, 0, moveZ);
		rigidbody.AddForce(movement * speed * Time.deltaTime);
	}
	
	function OnTriggerEnter(other : Collider) {
		if (other.gameObject.tag == "PickUp") {
			other.gameObject.SetActive(false);
			++count;
			setCountText();
		}
	}
	
	function setCountText() {
		countText.text = "Count: " + count;
		
		if (count >= 12)
			winText.text = "You win!";
	}
}