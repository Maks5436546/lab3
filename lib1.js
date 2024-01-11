(function () {
    var speakWord = "Hello";
    var helloSpeaker = {
      speak: function (name) {
        console.log(speakWord + " " + name);
      },
    };
  
    if (typeof module !== "undefined" && module.exports) {
      module.exports = helloSpeaker;
    } else {
      window.helloSpeaker = helloSpeaker;
    }
  })();