const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let countries = ["Afghanistan","Austria","Netherland", "Pakistan", "India", "Palestine", "Russia", "Iraq", "America", "Germany", "France", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi"]

const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * countries.length);
    // console.log(ranNum);
    let newTempCountries = countries[ranNum];
    // console.log(newTempCountries.split(""));
    return newTempCountries;
}

const scrambleWords = (arr) => {
    for (let i = arr.length -1 ; i>0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i+1));
        // console.log(i);
        // console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess"
        guess.classList.toggle('hidden')
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word: ${randWords}`;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            // console.log("Correct");
            play = false
            msg.innerHTML = `Congratulations It's Correct, It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle("hidden");
            guess.value = "";
        }
        else{
            console.log("Incorrect");
            msg.innerHTML = `Sorry It's Not Correct. Please Try Again ${randWords}`;
        }
    }
})