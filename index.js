const messag = [];
function writeCards(messag, event) {
  for (let i = 0; i < messag.length; i++) {
      console.log(`Thank you, ${messag[i]}, for the wonderful ${event} gift!`)
  }
  return messag;
  
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
function countDown(intNum) {
    while (intNum >= 0) {
      console.log(intNum);
      intNum--;
    }
    return intNum;
  }
  countDown(10);