function createImages(){ 
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/art", true);
    //You're getting an html document of the file system 
    xhr.responseType = 'document';
    xhr.onload = () => {
        if (xhr.status === 200) {
            //The images are stored in "a" tags in the xhr reponse document
            let elements = xhr.response.getElementsByTagName("a");
            for (x of elements) {
                if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
                    let div = document.createElement("div"); 
                    div.className = "imgWrap"; 

                    let img = document.createElement("img");
                    img.src = x.href;

                    div.appendChild(img); 
                    //div.style.flexBasis = img.width * 1; 
                    let splitHref = x.href.split("/"); 
                    let fileName = splitHref[splitHref.length - 1]; 
                    //Append to traditional div 
                    if (fileName.charAt(0) == "t"){ 
                        document.querySelector(".tradArt").appendChild(div); 
                    }
                    //Append to digital div 
                    else { 
                        document.querySelector(".digArt").appendChild(div);
                    }
                } 
            };
            console.log("done"); 
        } 
        else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send()
}

function resizeImages(){ 
    createImages(); 
    console.log(document.body); 
    let img1 = document.querySelector(".digArt"); 
    console.log(img1.childNodes.length); 
    console.log("in other function"); 

}