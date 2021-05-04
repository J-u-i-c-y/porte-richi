window.onload = function() {

    function snippetProducts() {

        let parents = document.querySelectorAll('.product');

        for (var i = 0, parent; parent = parents[i]; i++) {
            parent.onclick = function(e) {

                let colorArr = e.target.parentElement.children;
                let images = this.firstElementChild.querySelectorAll('.doors-img');
                let numberSlice = images[0].currentSrc.lastIndexOf('/');

                for(let i = 0; i < colorArr.length; i++ ) {
                    colorArr[i].classList.remove("variant-color-type-active");
                }
                if (e.target.className == 'variant-color-type') {   
                    e.target.classList.add("variant-color-type-active");

                    let currentImgUrl1 = images[0].currentSrc;
                    let currentImgUrl2 = images[1].currentSrc;
                    let newUrl1 = images[0].currentSrc.replace(images[0].currentSrc.substr(numberSlice), images[1].currentSrc.substr(numberSlice));
                    let newUrl2 = images[1].currentSrc.replace(images[1].currentSrc.substr(numberSlice), images[0].currentSrc.substr(numberSlice));
                    
                    images[0].setAttribute("src", newUrl1);
                    images[1].setAttribute("src", newUrl2);
                }
            };
        }
    
    }
    snippetProducts();
}