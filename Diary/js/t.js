let dfAnime = "s-l--a", c_ps;
let m_d = _e(".m-or-e"), m_d_s = 0;
let mode = _e(".mode");
let aCtivE = (t, a="add", collection)=> {
    console.log(collection);
    if(typeof collection !== undefined) collection.forEach(c=>{if(_e(c) !== null) _e(c).classList.remove("a-ctiv-e")});
    a==="add"?t.classList.add("a-ctiv-e"):t.classList.remove("a-ctiv-e");
}
mode.addEventListener("click", e=>{
    thr(mode, [["moon"], ["sun"]]);
    thr(document.querySelector("body"), [["light"], ["dark"]])
});
const thr = (el, [a,b]) => {
    el.classList.contains(...a) ? (el.classList.add(...b), el.classList.remove(...a)) : (el.classList.add(...a), el.classList.remove(...b));
    document.body.dataset.cA = el.getAttribute("id")
}

//controllers
let crs = document.getElementsByClassName("moz-c-r");
[...crs].forEach(c=>{
    c.addEventListener("click", e=>{
        let t = e.target;
        console.log(t, _e(".crls--mz.a-ctiv-e"))
        if(c.classList.contains("a-ctiv-e") && c.classList.contains("crls--mz")) return;
        if(_e(".crls--mz.a-ctiv-e") && c.matches(".crls--mz"))_e(".crls--mz.a-ctiv-e").classList.remove("a-ctiv-e");
        c.classList.add("a-ctiv-e");
        if(c.classList.contains("pp")) {
            thr(_e("#dt-s"), [["a-ctiv-e"], ["out-ro"]]);
            if(_e("#dt-s").classList.contains("a-ctiv-e")) setTimeout(() => {
                _e("#dt-s input").focus() 
            }, 320);;
        }
        else hc(t);
    })
})  

let core = (t) =>{
    m_d_s++;
    if(m_d.classList.contains("a-ctiv-e") && m_d_s >= 1) {
    if(t.target.matches("#d") || t.target.matches("#d *")) (hd(currI)) //if delete icon or text is also clicked
        m_d.classList.remove("a-ctiv-e");
    window.removeEventListener("click", c_ps)
    m_d_s = 0;
    }
}

let more = (t)=> {
    m_d_s = 0;
    let po = t.getBoundingClientRect()
    m_d.classList.add("a-ctiv-e")
    m_d.style.top = (po.top + 20)+"px";
    m_d.style.left = po.left+"px";
    c_ps = e => {
        core(e)
    }
    window.addEventListener("click", c_ps)
}

let hc = (e)=>{
    let t = e;
    if(t.classList.contains("moz-c-r")==false) t = e.closest("[_d-t-c-app--la]");
    const cP = _e(".c--main.a-ctiv-e");
    console.log(t);
    thr(cP, [["n-orma-l", "d-e-y"], [cP.dataset.hasAnime, "a-ctiv-e"]]);
    thr(document.querySelector("#"+t.dataset.ref), [[t.dataset.anime, "a-ctiv-e"], ["n-orma-l", "d-e-y"]])
    if(t.hasAttribute("data-f-c")) refresh("form#d-iar-y", t.dataset.fC, "diary");
}

document.querySelectorAll(".i-m-g-d-p").forEach(i=>{
    i.addEventListener("click", ()=>{
        aCtivE(i, "add", [".i-m-g-d-p.a-ctiv-e"]);
        let iP = i.closest(".c--main");
        if(i.classList.contains("i-n-n")) {iP.style.backgroundImage = "none";_e("#i-p-h").value=img;return}
        let img = i.querySelector("img").getAttribute("src");
        _e("#i-p-h").value=img;
        iP.style.backgroundImage=`url(${img})`;
    })
    })

const refresh = (t, u) => {
    let ta  = _e(t), v = "", w = "";
    ta.dataset.act = u;
    if(u === "norm") (Array.from(ta.querySelectorAll(".i--t")).forEach(i=>{i.value=""; i.classList.remove("has-e")}), _e(t).dataset.curr="", aCtivE(_e(".i-n-n"), "add", [".i-m-g-d-p.a-ctiv-e"]), _e(".i-n-n").closest(".c--main").style.backgroundImage = "none")
    if(u === "view") (Array.from(ta.querySelectorAll(".i--t")).forEach(i=>i.setAttribute("readonly", true)))
    else{Array.from(ta.querySelectorAll(".i--t")).forEach(i=>{if(i.hasAttribute("readonly"))i.removeAttribute("readonly")})}
    if(u === "edit" || u === "norm") (w = "Cancel", v = "Lay down your thoughts");
    _e("textarea").setAttribute("placeholder", v)
    _e(".b-c-t-p span").innerText = w
    _e(".v-w-tt").innerHTML = "";
    rMc(_e(".b-l-r--d"), "t-ouc-h")
    // rMc(_e(".z"))
    if(_e(".d-r--d.o-p-e-n") !== null) _e(".d-r--d.o-p-e-n").classList.remove("o-p-e-n")
    if(fdTmt) clearTimeout(fdTmt)
}

Array.from(_a(".re-s-tor-e")).forEach(r => r.addEventListener("click", e => {
    if(currI !== undefined && currI !== null)  {
    let l = dl.findIndex(a=> a._id === currI)
    if(l > -1) {
    try {
        dl[l].status = "active";
        console.log(dl[l]);
        reDom(currEl)
        ap(dl[l], "diary", prevEl, true, "view");
        currI = null
        localStorage.setItem(dl[l].type, JSON.stringify(dl))
    }
    catch(e) {
        console.log(e);
    }
    _e(".a-l-t").classList.remove("a-ctiv-e");
}}
}))

    function rMc(t, c, z) { //z for return only
        if(t.classList.contains(c)) {
            if(z) return true
            t.classList.remove(c)
        }
    }
    function aDc(t, c, z) {
        if(!t.classList.contains(c)) {
            if(z) return true
            t.classList.add(c)
        }
    }

    _e(".b-g-tt").onclick = ()=>rMc(_e(".t-sQ"), "a-ctiv-e");

    if(iPh()) {
        _e("#d-f-M").addEventListener("click", e=>{
            if(!e.target.closest(".z-tt")) {
                let q = _e("form").dataset.act;
                if(q !== "view") {
                    rMc(_e(".z-tt"), "fd-Dwn")
                    return false;
                }
                if(rMc(_e(".z-tt"), "fd-Dwn", true)) rMc(_e(".z-tt"), "fd-Dwn")
                else aDc(_e("form[data-act='view'] .z-tt"), "fd-Dwn")
            }
        })
       if(iPh()) {
        let pressTimer;
        let pAr = _e(".b-l-r--d")
        _e(".b-l-r--d").addEventListener("touchend", e=>{
        clearTimeout(pressTimer);
        return false;
    })
    _e(".b-l-r--d").addEventListener("touchstart", e=>{
  pressTimer = setTimeout(function() {
    if(e.target.classList.contains("d-r--d") || e.target.closest(".d-r--d")) {
        if(_e(".d-r--d.o-p-e-n") !== null) _e(".d-r--d.o-p-e-n").classList.remove("o-p-e-n")
        let t = e.target.closest(".d-r--d");
        if(e.target.classList.contains("d-r--d")) t = e.target;
        pAr.classList.add("t-ouc-h")
        t.classList.add("o-p-e-n");
        }
        console.log("chichi");
    },500);
    return true;
}, {bubble: true})
}
_e(".b-g-d").addEventListener("click", ()=>{
    rMc(_e(".b-l-r--d"), "t-ouc-h")
    rMc(_e(".d-r--d.o-p-e-n"), "o-p-e-n")
});
    }