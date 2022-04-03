function MusicalNote() {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/musical-note_1f3b5.png';
  }
  function Brain() {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/brain_1f9e0.png';
  }
  
  console.log('%c * Favicon Switcher loaded * ', 'background: #000; color: #fff');
  
  function SwitchFavicon() {
    let delayInMilliseconds = 200; //0.6 seconds
    MusicalNote();

    setTimeout(function() {
      Brain()
    }, delayInMilliseconds)
  }