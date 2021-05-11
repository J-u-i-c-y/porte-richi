window.onload = function() {

    function snippetProducts() {

        let parents = document.querySelectorAll('.product');

        for (var i = 0, parent; parent = parents[i]; i++) {
            parent.onclick = function(e) {

                let colorArr = e.target.parentElement.children;

                if(this.firstElementChild.classList.contains("variant")) {
                    let images1 = this.lastElementChild.querySelectorAll('.doors-img');
                    let numberSlice1 = images1[0].currentSrc.lastIndexOf('/');

                    for(let i = 0; i < colorArr.length; i++ ) {
                        colorArr[i].classList.remove("variant-color-type-active");
                    }
                    if (e.target.className == 'variant-color-type') {   
                        e.target.classList.add("variant-color-type-active");
    
                        let newUrl11 = images1[0].currentSrc.replace(images1[0].currentSrc.substr(numberSlice1), images1[1].currentSrc.substr(numberSlice1));
                        let newUrl12 = images1[1].currentSrc.replace(images1[1].currentSrc.substr(numberSlice1), images1[0].currentSrc.substr(numberSlice1));
    
                        images1[0].setAttribute("src", newUrl11);
                        images1[1].setAttribute("src", newUrl12);
                    }
                } else {
                    let images2 = this.firstElementChild.querySelectorAll('.doors-img');
                    let numberSlice2 = images2[0].currentSrc.lastIndexOf('/');

                    for(let i = 0; i < colorArr.length; i++ ) {
                        colorArr[i].classList.remove("variant-color-type-active");
                    }
                    if (e.target.className == 'variant-color-type') {   
                        e.target.classList.add("variant-color-type-active");

                        let newUrl21 = images2[0].currentSrc.replace(images2[0].currentSrc.substr(numberSlice2), images2[1].currentSrc.substr(numberSlice2));
                        let newUrl22 = images2[1].currentSrc.replace(images2[1].currentSrc.substr(numberSlice2), images2[0].currentSrc.substr(numberSlice2));

                        images2[0].setAttribute("src", newUrl21);
                        images2[1].setAttribute("src", newUrl22);
                    }
                };
            }
        }
    
    }
    snippetProducts();
    document.querySelector('.type-filter-mobile .type-sort').onclick = () => {
        document.querySelector('.type-filter-mobile-dropdown').classList.toggle('show');
    }
    document.querySelector('.burger').onclick = () => {
        document.querySelector('.header-mobile').classList.toggle('show');
    }

    let checkBox = document.querySelectorAll('.modal-filter-sort .modal-filter-item .item-dropdown-label .item-dropdown-checkbox');
    
    checkBox.forEach(e => {
        e.onclick = function() {
            for(let i = 0; i < checkBox.length; i++) {
                checkBox[i].checked = false;
            }
            e.checked = true;
        }
    });
    document.querySelector(".modal-filter-item.sort").onclick = function() {
        document.querySelector(".modal-filter-sort.modal-filter").classList.toggle("show");
    }
    document.querySelector(".modal-filter-header-back img").onclick = function() {
        document.querySelector(".modal-filter-sort.modal-filter").classList.toggle("show");
    }
    document.querySelector(".modal-filter .modal-filter-header-close img").onclick = function() {
        document.querySelector(".modal-filter").classList.toggle("show");
    } 
    document.querySelector(".filters.type-sort").onclick = function() {
        document.querySelector(".modal-filter").classList.toggle("show");
    }
    
    
}