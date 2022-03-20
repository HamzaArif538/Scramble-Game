const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let countries = ["Afghanistan","Pakistan","India","Palestine","Russia","Iraq","America","Germany","France","Albania","Algeria","Andorra","Angola","Anguilla","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi"]

const createNewWords = () => {
    let ranNum = (Math.random() * countries.length);
    console.log(ranNum);
}

btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess"
        guess.classList.toggle('hidden')
        createNewWords()
    }
})