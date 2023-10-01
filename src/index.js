module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    
    let arr = number.toString().split('');
    let handredsArr = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let onesArr = ['',' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    let fromZeroToNinety = ['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen','sixteen','seventeen', 'eighteen','nineteen'];
    
   
    if (arr.length === 3 && ( number % 100 >= 20)) {
      return handredsArr[arr[0]] + ' hundred ' + tensArr[arr[1]] + onesArr[arr[2]];
    }
    if (arr.length === 3 && (number % 100 < 10 )) {
        return handredsArr[arr[0]] + ' hundred' + tensArr[arr[1]] + onesArr[arr[2]];
      }
    if (arr.length === 2 && number >= 20 ) {
        return tensArr[arr[0]] + onesArr[arr[1]];
    }
    if (arr.length === 1) {
        return handredsArr[arr[0]];
    }
    if (arr.length === 2 && number < 20 ) {
        return fromZeroToNinety[arr[1]];
    }
    if (arr.length === 3 && (number % 100 > 10 || number % 100 < 20)) {
        return handredsArr[arr[0]] +' hundred '+ fromZeroToNinety[arr[2]];
    }
   
}
 
