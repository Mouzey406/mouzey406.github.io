'use strict';

let bikesP = document.getElementById("bs");
let dispE = document.getElementById("dy")
let viewE = document.getElementById("vw-1"), viewSwitchers = document.getElementsByClassName("vw-st");
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


// main view switchers 
Array.from(viewSwitchers).forEach(s => {
    s.addEventListener("click", ()=>{
        document.querySelector(".vw-st.ive").classList.remove("ive");
        switchMainView(s.dataset.view);
        s.classList.add("ive")
    })
});


// switch main views 
const switchMainView = (v) => {
    // with ing is hidden 
    Array.from(document.querySelectorAll(".view-mz:not(.ing)")).forEach(a=>a.classList.add("ing"));
    document.getElementById(v).classList.remove("ing");
}


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
        smE.classList.add("hid");
    }, 400);
       return;
    }
    dispE.classList.add("d-tfm");
    smE.classList.add("d-l-y");
    setTimeout(() => {
        smE.classList.remove("d-l-y", "hid");
    }, 400);
}


// options pick 
smE.addEventListener("click", (t)=>{
    if(t.target.nodeName === "SPAN" || t.target.parentElement.nodeName === "SPAN") {
        let tPe = t.target.closest(".ppE");
        let all = tPe.querySelectorAll("span");
        all.forEach(a=>a.classList.remove("ing"));
        if(t.target.nodeName === "SPAN") {
            t.target.classList.add("ing")
        }
        else if(t.target.parentElement.nodeName === "SPAN") t.target.parentElement.classList.add("ing");
    }
})

// hide larger display 
bVwE.addEventListener("click", closeDisplay);

//on rent btn click
rentE.addEventListener("click", switchView);


//additional information button && more
Array.from(document.querySelectorAll(".dp-b-t")).forEach(w=>{
    w.addEventListener("click", ()=>{
        w.nextElementSibling.classList.toggle("a-c")
    })
})