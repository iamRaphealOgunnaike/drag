let myText = document.getElementById('my-text');
myText.addEventListener("input", ()=>{
    let count = (myText.value).length;
    switch(true){
        case count <= 100:
            document.getElementById('count-result').textContent = `Total characters: ${count}`;
            break;
        case count >= 101:
            count = count.filter(()=>true).length;
            document.getElementById('count-result').textContent = `Total characters: ${count}`;

    }
    
});