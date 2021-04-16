function insert(num) {
  let currentNum =  document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML=currentNum+num;
}

function cleanCalc() {
    document.getElementById('result').innerHTML=" ";

}

function calc() {
    let finalResult=  document.getElementById('result').innerHTML;
        if (finalResult) {
            document.getElementById('result').innerHTML = eval(finalResult);
        }
        else {
            document.getElementById('result').innerHTML = "NaN"
        }

};