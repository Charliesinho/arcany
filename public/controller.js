window.addEventListener("gamepadconnected", function (e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);

  // window.requestAnimationFrame(checkGamepadState);
});
var mouseX = 0;
var mouseY = 0;
function simulateMouseClick(x, y) {
  console.log("Clicking");
  var event = new MouseEvent('click', {
    clientX: x,
    clientY: y
  });
  document.dispatchEvent(event);
}
function simulateMouseMove(x, y) {
  var event = new MouseEvent('mousemove', {
    clientX: x,
    clientY: y
  });
  document.dispatchEvent(event);
}
window.addEventListener("gamepadconnected", function (e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);

  // Start checking gamepad state
  window.requestAnimationFrame(checkGamepadState);
});
function checkGamepadState() {
  var gamepadState = getGamepadState();

  // Handle gamepad input for movement
  var stickX = gamepadState.axes[2]; // Right stick X-axis
  var stickY = gamepadState.axes[3]; // Right stick Y-axis


  // Adjust mouse position based on right stick movement
  var sensitivity = 5; // You can adjust sensitivity to your preference
  mouseX += stickX * sensitivity;
  mouseY += stickY * sensitivity;

  // Clamp mouse position to stay within the bounds of the window
  mouseX = Math.max(0, Math.min(window.innerWidth, mouseX));
  mouseY = Math.max(0, Math.min(window.innerHeight, mouseY));

  // Move the system mouse cursor
  simulateMouseMove(mouseX, mouseY);

  // Handle gamepad input for clicking
  if (gamepadState.buttons[0].pressed) { // "A" button
    // Simulate a mouse click at the current mouse position
    simulateMouseClick(mouseX, mouseY);
  }

  // Handle gamepad input
  if (gamepadState.buttons[12].pressed || gamepadState.axes[1] < -0.5) {
    footsteps.play();
    footsteps.loop = true;
    movingUp = true;
  } else {
    movingUp = false;
  }

  if (gamepadState.buttons[13].pressed || gamepadState.axes[1] > 0.5) {
    footsteps.play();
    footsteps.loop = true;
    movingDown = true;
  } else {
    movingDown = false;
  }

  if (gamepadState.buttons[15].pressed || gamepadState.axes[0] > 0.5) {
    footsteps.play();
    footsteps.loop = true;
    animPlayer = "runRight";
    lastLookPlayer = "right";
    movingRight = true;
  } else {
    movingRight = false;
  }

  if (gamepadState.buttons[14].pressed || gamepadState.axes[0] < -0.5) {
    footsteps.play();
    footsteps.loop = true;
    animPlayer = "runLeft";
    lastLookPlayer = "left";
    movingLeft = true;
  } else {
    movingLeft = false;
  }

  // Check if no movement keys are pressed
  if (!movingUp && !movingDown && !movingRight && !movingLeft) {
    animPlayer = "idleRight";
    footsteps.pause();
    footsteps.loop = false;
  }

  socket.emit("inputs", inputs);
  socket.emit("animPlayer", animPlayer);

  // Request next frame
  window.requestAnimationFrame(checkGamepadState);
}
function getGamepadState() {
  var gamepads = navigator.getGamepads();
  if (gamepads.length > 0) {
    return gamepads[0];
  }
  return null;
}
