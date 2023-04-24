
let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
      function onYouTubeIframeAPIReady() { 
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'Xd-W8T8R_58',
          playerVars: { 
            autoplay: true,   
            loop: true, 
            playlist: 'Xd-W8T8R_58',
          },
          events: {
            onReady: function(event) {
              event.target.mute();
            }
          }
        });
      }