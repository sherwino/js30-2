function setDate(){
    const now = new Date();
    const seconds = now.getSeconds()
    const secHandDegrees = ((seconds / 60) * 360);
    console.log(seconds)
}

setInterval(setDate, 1000);

// Need to add a bit more but I was falling asleep.