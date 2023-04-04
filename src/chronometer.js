class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if(printTimeCallback){
          printTimeCallback()
        }  
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    if (this.currentTime % 60 === 0){
      return 0
    } else {
      return this.currentTime - this.getMinutes()*60
    }
  }

  computeTwoDigitNumber(value) {
    let numberToString = value.toString()
    if (numberToString.length < 2){
      numberToString = "0" + numberToString
    }
    return numberToString
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutesString = this.computeTwoDigitNumber(this.getMinutes());
    let secondsString = this.computeTwoDigitNumber(this.getSeconds());
    return minutesString+":"+secondsString
  }
}
