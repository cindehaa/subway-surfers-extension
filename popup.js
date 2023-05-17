document.addEventListener('DOMContentLoaded', function() {
  // Wondering why I have all this in a JS file instead of just putting it in the HTML?
  // Well... I was trying to create an extension that would be dynamically resizeable and moveable, 
  //    with an option to "pin" the extension window so that if you clicked outside of it, it would 
  //    stay on top...
  // Unfortunately, Chrome Web Extensions don't allow for that. So I'm stuck with a static popup and
  //    a useless JS file
  
  const videoContainer = document.getElementById('videoContainer');

  const backgroundVideo = document.createElement('video');
  backgroundVideo.id = 'backgroundVideo';
  backgroundVideo.src = 'subway.mp4';
  backgroundVideo.loop = true;
  backgroundVideo.autoplay = true;
  backgroundVideo.muted = true;

  videoContainer.appendChild(backgroundVideo);
});
