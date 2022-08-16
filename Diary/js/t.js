let dfAnime = "s-l--a", c_ps;
let m_d = _e(".m-or-e"), m_d_s = 0;
let aCtivE = (t, a="add", collection)=> {
    console.log(collection);
    if(typeof collection !== undefined) collection.forEach(c=>_e(c).classList.remove("a-ctiv-e"));
    a==="add"?t.classList.add("a-ctiv-e"):t.classList.remove("a-ctiv-e");
}
document.querySelector(".mode").addEventListener("click", e=>{
    let mode = e.target;
    thr(mode, [["moon"], ["sun"]]);
    thr(document.querySelector("body"), [["light"], ["dark"]])
});
const thr = (el, [a,b]) => {
    el.classList.contains(...a) ? (el.classList.add(...b), el.classList.remove(...a)) : (el.classList.add(...a), el.classList.remove(...b));
}

//controllers
let crs = document.getElementsByClassName("moz-c-r");
[...crs].forEach(c=>{
    c.addEventListener("click", e=>{
        let t = e.target;
        hc(t);
    })
})  

let core = (t, i) =>{
    m_d_s++;
    if(m_d.classList.contains("a-ctiv-e") && m_d_s >= 1) {
        console.log(t.target);
    if(t.target.matches("#d") || t.target.matches("#d *")) (hd(i), currI = i) //if delete icon or text is also clicked
        m_d.classList.remove("a-ctiv-e");
    window.removeEventListener("click", c_ps)
    m_d_s = 0;
    }
}

let more = (t, i)=> {
    m_d_s = 0;
    let po = t.getBoundingClientRect()
    m_d.classList.add("a-ctiv-e")
    m_d.style.top = (po.top + 20)+"px";
    m_d.style.left = po.left+"px";
    c_ps = e => {
        console.log(e);
        core(e, i)
    }
    window.addEventListener("click", c_ps)
}

let hc = (e)=>{
    let t = e;
    if(t.classList.contains("moz-c-r")==false) t = e.closest("[_d-t-c-app--la]");
    const cP = t.closest(".c--main");
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
}

_e(".re-s-tor-e").addEventListener("click", e=>{
    if(currI !== undefined && currI !== null)  {
    let l = dl.findIndex(a=> a._id === currI)
    if(l > -1) {
    try {
        dl[l].status = "active";
        ap(dl[l], "diary", prevEl, true)
        currI = null
        localStorage.setItem(dl[l].type, JSON.stringify(dl))
    }
    catch(e) {
        console.log(e);
    }
}}
})
