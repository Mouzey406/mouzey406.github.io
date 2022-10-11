let bikesP = document.getElementById("bs");
let dispE = document.getElementById("dy")
let viewE = document.getElementById("vw-1");
let bVwE = document.getElementById("b-vw-1");
let rentE = document.getElementById("re-nt"), smE = document.querySelector(".sm-view");

// bike cards events 
bikesP.addEventListener("click", (a)=> {
    if(a.target.classList.contains("bk") || a.target.matches(".bk *")) {
        let aP = a.target.classList.contains("bk") ? a.target : a.target.closest(".bk") ? a.target.closest(".bk") : null;
        if(aP === null) return;
        let bId = aP.dataset.bid;
        openDisplay(bId);
    }
})



// larger display start 
const openDisplay = (a) => {
    dispE.classList.add("ing");
    viewE.classList.add("ing");
}
//larger display end
const closeDisplay = () => {
    if(dispE.classList.contains("d-tfm")) {
        switchView();
        return;
    }
    dispE.classList.remove("ing");
    viewE.classList.remove("ing");
}


//rent bike view
const switchView = (q) => {
   if(dispE.classList.contains("d-tfm")) {
       dispE.classList.remove("d-tfm");
    setTimeout(() => {
        smE.classList.remove("hid");
    }, 400);
       return;
    }
    dispE.classList.add("d-tfm");
    smE.classList.add("d-l-y");
    setTimeout(() => {
        smE.classList.remove("d-l-y", "hid");
    }, 400);
}



// hide larger display 
bVwE.addEventListener("click", closeDisplay);

//on rent btn click
rentE.addEventListener("click", switchView);