const keys = document.querySelectorAll("a");

keys.forEach(keysItem => {
  keysItem.addEventListener("click", () => {
    const id = keysItem.id;
    function soundClick () {
      const audio = new Audio();
      audio.src = "audio/" + id + ".mp3";
      audio.autoplay = true;
    }
    soundClick();
  });
});
