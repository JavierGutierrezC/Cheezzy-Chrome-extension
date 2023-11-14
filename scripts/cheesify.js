
function cheesify() {
  // TODO: Add the image replacement script here
  document.querySelectorAll("img").forEach(element => {
    element.src = `https://source.unsplash.com/collection/8884129/${element.width}x${element.height}/?${Math.random(1000)}`; 
    element.srcset = element.src})
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
      if(request.action === "cheesify") cheesify();
    }
  );