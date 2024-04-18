let exAdd = document.getElementById("exToAdd")
let rep = document.getElementById('rep')
let add = document.getElementById("add")

add.addEventListener('click',async() => {
    let newEX = `${rep.value} ${exAdd.value}`
    try {
        const res = await fetch(`http://localhost:3000/exercise`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ex: newEX , done:false}) 
            })
            const data = await res.json(); 
            console.log(data); 
            console.log(newEX);
        
    }
    catch(e) {
        console.log('error: ',e);
    }
})

