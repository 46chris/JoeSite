var numColor = 4; 
var numNoColor = 5; 

function insertImg(){
    //Insert images into page 
    let color = "art/color/c";
    let noColor = "art/noColor/nc"; 
    //Number of digital images 
    for (let i = 1; i <= numColor; i++){ 
        let image = document.createElement("img"); 
        let div = document.createElement("div"); 

        div.className = "imgWrap"; 
        div.appendChild(image); 

        image.src = color + `${i}.jpg`;
        image.className = "art"; 

        document.querySelector(".digArt").appendChild(div); 
    }

    //Number of traditional images 
    for (let i = 1; i <= numNoColor; i++){ 
        let image = document.createElement("img"); 
        let div = document.createElement("div"); 

        div.className = "imgWrap"; 
        div.appendChild(image); 

        image.src = noColor + `${i}.jpg`;
        image.className = "art"; 

        document.querySelector(".tradArt").appendChild(div); 
    }
}

function resizeImg(numPhotos, type){
    //Resize them motherfuckers 
    for (let i = 1; i <= numPhotos; i += 2){ 
        let firstImg = document.querySelector(`#${type} div:nth-child(${i}) img`); 
        let firstDiv = document.querySelector(`#${type} div:nth-child(${i})`); 

        //If the number of photos exceeds the max
        if (i+1 > numPhotos){ 
            firstDiv.style.flexBasis = "45%"; 
            continue; 
        }

        let secondImg = document.querySelector(`#${type} div:nth-child(${i + 1}) img`); 
        let secDiv = document.querySelector(`#${type} div:nth-child(${i + 1})`); 

        //Make every third one full width 
        // if ( i % 3 == 0){ 
        //     firstDiv.style.flexBasis = "100%";    
        //     if (i+1 <= numPhotos){ 
        //         i -= 1; 
        //         continue; 
        //     }
        // }
        let totalWidth = firstImg.naturalWidth + secondImg.naturalWidth; 
        console.log ((firstImg.naturalWidth / totalWidth) * 100 + (secondImg.naturalWidth / totalWidth) * 100); 
        firstDiv.style.flexBasis = `${(firstImg.naturalWidth / totalWidth) * 100}%`
        secDiv.style.flexBasis = `${(secondImg.naturalWidth / totalWidth) * 100}%`
    }
}

//Ensure resize happens after insert image occures 
insertImg(); 
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    resizeImg(numColor, "Dig");
    resizeImg(numNoColor, "Trad");
});
