let exToday = document.getElementById("exToday");
let exScript;
let doneBut = document.getElementById('done')

let ex_id = 0

async function fetchData() {
    try {
        const response = await fetch(`http://localhost:3000/exercise/`);
        const data = await response.json();
        exScript = data;
        displayExercises(exScript,ex_id); 
        return exScript;
    } catch (error) {
        console.log('Error:', error);
    }
}
function displayExercises(exercises, index) {
    const exerciseItem = document.createElement('li');
    exToday.innerHTML = '';
    let exerciseIndex = exercises[index];
    if (exerciseIndex) {
        exerciseItem.textContent = exerciseIndex.ex;
        exToday.appendChild(exerciseItem);
    }
    doneBut.addEventListener('click', async(req,res) => {
        index++
        console.log(index);
        exerciseIndex = exercises[index]
        console.log(exerciseIndex);
        try {
            const res = await fetch(`http://localhost:3000/exercise/${index}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ex: exerciseIndex.ex , done:true}) 
            });
            const data = await res.json(); 
            exScript = data;
            exerciseItem
            exerciseItem.textContent = exerciseIndex.ex;
            if (exerciseIndex.ex_id == index) {
                console.log('ex');
            }
            else {
                console.log('no more ex');
            }

        }
        catch(e) {
            console.log('error done: ', e);
        }
        finally {
            const res = await fetch('http://127.0.0.1:3000/sentence');
            const data = await res.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomSentence = data[randomIndex];
            console.log(randomSentence.sentence);
            let sentence = document.getElementById("sentence")
            sentence.innerHTML = ''
            sentence.innerHTML = randomSentence.sentence
        }
    }
 
    )

}


fetchData()

