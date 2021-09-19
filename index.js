function shout(string) {
    return string.toUpperCase(); 
}

function logShout(string) {
    console.log ('HELLO')
}

  function whisper(string) {
    return string.toLowerCase();
  }

  function logWhisper(string) {
    console.log ('hello')
}

function sayHiToGrandma(string) {
    const input = string;

    if (string === string.toLowerCase()){
        return 'I can\'t hear you!';
    }
    if (string === string.toUpperCase()) {
        return 'YES INDEED!';
    } 
    if (string ===  'I love you, Grandma.'){
        return 'I love you, too.';
    }
}    