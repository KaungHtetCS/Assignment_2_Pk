const Result = document.getElementById('result');
const Last = document.getElementById("lastcal");


function add(value){

    if (Result.value.length >= 25){
        alert("Can't calculate more then 25 characters");
        return;
    }

    if (value == "+" || value == "-"
    || value == "/" || value == "*"
    ){
        if (value == "/" || value == "*"){
            if (Result.value == ""){
                return;
            }
        }

        if (Result.value[Result.value.length-1] == "+" || 
        Result.value[Result.value.length-1] == "-" || 
        Result.value[Result.value.length-1] == "/" || 
        Result.value[Result.value.length-1] == "*"
        ){
            let rs = Result.value.substring(0, Result.value.length - 1) + value;
            Result.value = rs;
        }
        else{
            Result.value += value;
        }

    }
    else{
        Result.value += value;
    }
}

function Solve(){
    let data = Result.value;
    let res = solve(data);
    Last.innerHTML = data + "=";
    Result.value = res;
}

function Clear(){
    Result.value = "";
    Last.innerHTML = "";
}

function isValidKey(key) {
    const allowedKeys = /[0-9+\-*/=]|Backspace/;
    return allowedKeys.test(key);
}

Result.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isValidKey(key)) {
      e.preventDefault();
      return;
    }

    if (key == "="){

        if (Result.value.includes('=')){
            e.preventDefault();
            return;
        }

        if (Result.value.length-1>0){
            Solve();
            e.preventDefault();
        }
        else{
            e.preventDefault();
            return;
        }
    }
})