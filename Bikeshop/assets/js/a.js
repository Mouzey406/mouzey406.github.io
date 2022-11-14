'use strict';

let bikesP = document.getElementById("bs");
let dispE = document.getElementById("dy")
let viewE = document.getElementById("vw-1"), viewSwitchers = document.getElementsByClassName("vw-st");
let bVwE = document.getElementById("b-vw-1");
let rentE = document.getElementById("re-nt"), smE = document.querySelector(".sm-view");
let done = document.getElementById("done"), form = document.querySelector("form");
let tDrop = document.querySelector(".s-drop"), sDType = document.querySelector(".s-d-type"), ss = _s("ss");
// // bike cards events 
// bikesP.addEventListener("click", (a)=> {
//     if(a.target.classList.contains("bk") || a.target.matches(".bk *")) {
//         let aP = a.target.classList.contains("bk") ? a.target : a.target.closest(".bk") ? a.target.closest(".bk") : null;
//         if(aP === null) return;
//         let bId = aP.dataset.bid;
//         openDisplay(bId);
//     }
// })


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
    if(t.target.classList.contains("c-pick")) {
        let all = document.querySelectorAll(".c-pick");
        all.forEach(a=>a.classList.remove("ing"));
            t.target.classList.add("ing")
            _s("color").value = t.target.title;
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

document.querySelector(".s-type").addEventListener("click", (e)=> {
if(e.target.matches(".s-d-type ")) {
    tDrop.classList.toggle("ing");
}
else if(e.target.nodeName === "BUTTON") {
    sDType.textContent = e.target.textContent;
    tDrop.classList.toggle("ing");
    if(document.querySelector(".s-drop .ing")) document.querySelector(".s-drop .ing").classList.toggle("ing");
    e.target.classList.toggle("ing");
    filterS(e.target.textContent)
}
// else if(e.target.classList.contains(""))
})

function filterS(c) {
    if(ss.value.length > 0) ss.value = "";
    if(c.toLowerCase() === "favorited") {
        Array.from(document.querySelectorAll("#vw-1 .bk")).forEach(j=> j.style.display = "block")
        let d = document.querySelectorAll("i.bi-heart");
        d.forEach(e=> {
            let f = e.closest(".bk");
            f.style.display = "none";
        })
    }
    else if(c.toLowerCase() === "available") {
        Array.from(document.querySelectorAll("#vw-1 .bk")).forEach(j=> j.style.display = "block")
        Array.from(document.querySelectorAll("#vw-1 .bk.tkn")).forEach(j=> j.style.display = "none")
    }
    else {
        Array.from(document.querySelectorAll("#vw-1 .bk")).forEach(j=> j.style.display = "block")
    }
} 

let tT;
ss.addEventListener("input", ()=>{
    clearTimeout(tT)
    if(ss.value.length > 0 && ss.value.length < 12) {
        sDType.textContent = "matching: " + ss.value;
        if(document.querySelector(".s-drop .ing") !== null) document.querySelector(".s-drop .ing").classList.remove("ing");
        tT = setTimeout(() => {
        Array.from(document.querySelectorAll("#vw-1 .bk")).forEach(j=> j.style.display = "none")
        let v = ss.value.toLowerCase();
        bikes.filter(y => {
           return y.title.toLowerCase().indexOf(v) > -1 || y.type.toLowerCase().indexOf(v) > -1
        }).forEach(z => {
            console.log(z);
            try {
                document.querySelector(`#vw-1 .bk[data-id="${z._id}"]`).style.display = "block";
            }
            catch(e) {
                console.log(e);
            }
        })
        _s("s-ler").classList.remove("spin");
    }, 500);
    }
    else {
        sDType.textContent = "All";
        _s("al-s").classList.add("ing");
        Array.from(document.querySelectorAll("#vw-1 .bk")).forEach(j=> j.style.display = "block")
    }
})