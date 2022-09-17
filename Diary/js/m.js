
// const bh = ()=> {
// }
let dl = [], eDg = _e(".e-di-t-btn"), cc = 0, currEl, prevEl, to_t, currI, currLocation, lDr = _e(".l-d-r"), fdTmt;
let tCont = _e("[data-t]")
const iPh = ()=>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    return true;
    }
    return false;
}
function ap(dt, t, cl, am, location){
    cc++;
    if(t==="diary") {
        let iMg = "", noImgClass = "has-i-m-g";
        dt.image.length > 0 ? iMg = 'background-image: url(./images/'+dt.image.split("/")[2]+')' : (iMg = 'background-color:var(--bg3)', noImgClass = "no-i-m-g")
        let d = document.createElement("div");
        d.innerHTML = `
          <div class="i-c-bg p-sm p-r" data-cc="${cc}" style="${iMg}"><h4>${dt.title}</h4><p>${dt.text}</p><div class="c-d-ls p-sm"><div class="flex j-c-b"><div>${dt.status === "active" ? `<span class="i-c-o-n-2 e-d-i-t"><img src="./images/edit.svg" class="e-d-i-t"><bdi>Edit</bdi></span>` : ''}</div><div class="p-r s-lg"><button type="button" class="i-c-o-n-2 s-o-n ac-t-i-o-ns"><img src="./images/menu.svg"></button></div><div class="s-sm d-i-c-cc">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="d-i-c-cc" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              <bdi class="d-i-c-cc">Delete</bdi>
          </div></div></div>
        `;
        d.classList.add("d-r--d", "d-i-b", noImgClass);
        typeof am !== undefined && am === true ? d.classList.add("a-n-i-m-e") : null
        currEl = d;
        d.addEventListener("click", e=>{
            currI = dt._id; 
            let el = e.target;
            currEl = el.closest(".d-r--d")
            prevEl = currEl.nextSibling;
            if(m_d.classList.contains("a-ctiv-e")) (m_d.classList.remove("a-ctiv-e"), m_d_s = 0);
            if(el.classList.contains("e-d-i-t")) (et(dt._id, "diary", el, "edit"));
            else if(el.classList.contains("d-i-c-cc")) hd(currI)
            else if(el.classList.contains("ac-t-i-o-ns") || el.matches(".ac-t-i-o-ns img")) more(el)
            else if(dt.status === "active") et(dt._id, "diary", el, "view");
            _e("#d-iar-y").dataset.curr=dt._id;
            e.stopPropagation()
            currLocation = dt.status === "active" ? "view" : "trash";
        })
        if(dt.status === "deleted") {tCont.prepend(d);  return}
        else if(location !== "undefined" && location === "view") {_e("[data-c]").prepend(d); return}
        if(cl != undefined && typeof cl == "object" && _a(".d-r--d").length > 2) {let m = cl.previousSibling; if(m) m.after(d); else _e("[data-c]").prepend(d)}
        else _e("[data-c]").prepend(d);
    }
}
(function() {
    function rSz() {
        const doc = document.documentElement
        doc.style.setProperty('--h', `${window.innerHeight}px`);
        let dd = _e("#d-d");
        dd.style.height = `calc(var(--h) - ${Math.floor(dd.getBoundingClientRect().top + 110)}px`;
    }
    window.addEventListener("resize", rSz);
    rSz();
    dl = JSON.parse(localStorage.getItem("diary"));
if(dl===null || !dl) (dl = [], localStorage.setItem("diary", JSON.stringify([])));
else dl.forEach(a=> ap(a, a.type));
})();
_e("#d-iar-y").addEventListener("submit", fo=>{
    let r = false; //flag: update?
    fo.preventDefault();
    let fObj = {}, v = 0; // v flag to measure validation
    let n = Array.from(document.querySelectorAll(".i--t"));
    n.forEach(u=>{
    if(vi(u)) v++;
    fObj[u.title.toLowerCase()] = u.value;
    });
    if(v<2) {console.log("wow"); return false;}
    if(fo.target.dataset.act === "edit" && fo.target.dataset.curr !== "") r = fo.target.dataset.curr //then update to local db
    nr(fObj, "diary", r);
})

const hd = e => {
    let g = _e(".a-l-t");
    const c_to_t = ()=> clearTimeout(to_t);
    const r_to_t = () =>(c_to_t(), to_t = setTimeout(()=>{g.classList.remove("a-ctiv-e"); g.removeEventListener("mouseover", c_to_t)},3500));
    r_to_t();
    let t_e = dl.findIndex(a=>a._id === e);
    dl[t_e].status = "deleted";
    reDom(currEl)
    ap(dl[t_e], "diary");
    if(currLocation === "view") {
        g.classList.add("a-ctiv-e");
        g.addEventListener("mouseover", c_to_t);
        g.addEventListener("mouseleave", r_to_t);
    }
    try {
        localStorage.setItem(dl[t_e].type, JSON.stringify(dl));
    } catch (error) {
        console.log(error);
    }
}

const reDom = (el, clEl, dt) => { //div, closest sibling, object data 
    // if(clEl ===  undefined) clEl = el.previousSibling;
    el.classList.add("i-nvi");
    setTimeout(()=>{el.remove()}, 100)
}

const re = (o, i) => {
    let m = dl.find(n=>n._id===i);
    let p = dl.findIndex(q=>q._id===i);
    if(m!==undefined) {o._id = m._id; dl.splice(p, 1); 
    reDom(currEl, undefined, o);
    return o}
    hr("find", i, false) //handle errors
}

const nr = (obj, type, up) => { //can be reused to edit & update diary records and more
    let am = false; //ainimate ap() div
    if(type === "diary") {
        obj.type = type;
        obj.status="active";
        obj.date = new Date();
        if(typeof up === undefined || !up )(obj._id = rm()(20), dl.push(obj), am = true);
        else dl.push(re(obj, up));
        console.log(dl);
        try {
            localStorage.setItem(type, JSON.stringify(dl));
        } catch (error) {
            console.log(error);
        }
        ap(obj, type, currEl, am);
        cf(hc); //clear form
    }
}
const rm = (w="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")=>{
    return (num)=>{
        r = "";
        let c = 0;
        while(c<num) {c++; r += w.charAt(Math.floor(Math.random() * num))};
        return r;
    }   
}


const cf = (cbck)=> {
Array.from(document.querySelectorAll(".i--t")).forEach(ip=>ip.value = "");
cbck(_e(".b-c-t-p"));
}

function spt(t, a, b) {
    return t.substring(a,b)
}
function hdp(to, a) {
    let n = Array.from(document.querySelectorAll(".i--t"));
    n.forEach(m=>m.value = to[m.title.toLowerCase()])
    let q;
    if(to.image.length < 1) {_e(".c--main.a-ctiv-e").style.backgroundImage=`none`; q = _e(".i-n-n")} 
   else { _e(".c--main.a-ctiv-e").style.backgroundImage=`url(${to.image})`; q =  _e(`[data-rep='${spt(to.image, 9, 12)}']`).closest(".i-m-g-d-p"); }
    aCtivE(q, "add", [".i-m-g-d-p.a-ctiv-e"]);
    refresh("form#d-iar-y", a, "diary");
    if(iPh()) fdTmt = setTimeout(()=>{_e(".z-tt").classList.add("fd-Dwn")},3000);
    _e(".v-w-tt").innerHTML = to.title
}
const et = (id, type, elt, act)=>{
    const to = dl.find(el=>el._id === id);
    if(elt!==undefined && to) hc(elt);
    hdp(to, act);
}
eDg.addEventListener("click", ()=>refresh("form#d-iar-y", "edit", "diary"));
const hr = (a,b)=>{
    console.log(a, b);
}
const vi = (i) => { //validate inputs
    if(i.value !== "") return true;
    let j = i.dataset.e;
    i.setAttribute("placeholder", "Please enter "+j); i.focus(); i.classList.add("has-e");
    return false
}


let sO;
_e("#d-sch").addEventListener("input", function(){
    if(lDr.classList.contains("l-d-g") == false) lDr.classList.add("l-d-g");
    clearTimeout(sO)
   let dS = this.value;
   let tOps = dl.filter(s => s.title.indexOf(dS) > -1);
   sO = setTimeout(()=> {
    if(lDr.classList.contains("l-d-g")) lDr.classList.remove("l-d-g")
    sh(tOps);   
   },1300);
});

let s_r = _e("#s_r");
const sh = dt => {
    s_r.innerHTML = "";
    for(let i = 0; i < dt.length; i++) {
        let s = document.createElement("a");
        s.setAttribute("href", "javascript:void(0)");
        s.innerHTML = `
        <h3>${dt[i].title}</h3>
        <p>${dt[i].text}</p>
        <div class="flex j-c-b a-i-c"><span>${dt[i].date}</span><span></span></span>
        `;
        s_r.append(s);
        s.addEventListener("click", (e)=>{
            currI = dt[i]._id
            et(dt[i]._id, "diary", e.target, "view");
            currLocation = "view";
            // _e(".d-x.pp.moz-c-r").click();
            _e("#d-iar-y").dataset.curr=dt[i]._id;

        });
    }
}