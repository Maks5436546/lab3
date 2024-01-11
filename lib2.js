(function () {
    var speakWord = "Goodbye";
    var byeSpeaker = {
      speak: function (name) {
        console.log(speakWord + " " + name);
      },
    };
  
    if (typeof module !== "undefined" && module.exports) {
      module.exports = byeSpeaker;
    } else {
      window.byeSpeaker = byeSpeaker;
    }
  })();