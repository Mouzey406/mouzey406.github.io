
// const bh = ()=> {
// }
let dl = [], eDg = _e(".e-di-t-btn"), cc = 0, currEl;
function ap(dt, t, cl, am){
    cc++;
    if(t==="diary") {
        let iMg = "", noImgClass = "has-i-m-g";
        dt.image.length > 0 ? iMg = 'background-image: url(./images/'+dt.image.split("/")[2]+')' : (iMg = 'background-color:var(--bg3)', noImgClass = "no-i-m-g")
        let d = document.createElement("div");
        d.innerHTML = `
          <div class="i-c-bg p-sm p-r" data-cc="${cc}" style="${iMg}"><p>${dt.title}</p><div class="c-d-ls p-sm"><div class="flex j-c-b"><div><span class="i-c-o-n-2 e-d-i-t"><img src="./images/edit.svg" class="e-d-i-t"></span></div><div class="p-r"><button type="button" class="i-c-o-n-2 s-o-n ac-t-i-o-ns"><img class="ac-t-i-o-ns" src="./images/menu.svg"></button></div></div></div>
        `;
        d.classList.add("d-r--d", "d-i-b", noImgClass);
        typeof am !== undefined && am === true ? d.classList.add("a-n-i-m-e") : null
        if(cl != undefined && typeof cl == "object" && _a(".d-r--d").length > 2) {let m = cl.previousSibling; if(m) m.after(d); else _e("[data-c]").prepend(d)}
        else _e("[data-c]").prepend(d);
        d.addEventListener("click", e=>{
            let el = e.target;
            currEl = el.closest(".d-r--d")
           if(el.classList.contains("e-d-i-t")) (et(dt._id, "diary", el, "edit"));
           else if(el.classList.contains("ac-t-i-o-ns")) more(el, dt._id)
           else et(dt._id, "diary", el, "view");
           _e("#d-iar-y").dataset.curr=dt._id;
        })
    }
}
(function() {
dl = JSON.parse(localStorage.getItem("diary"));
if(dl===null || !dl) (dl = [], localStorage.setItem("diary", JSON.stringify([])));
else dl.forEach(a=>ap(a,"diary"));
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
    if(v<3) {console.log("wow"); return false;}
    if(fo.target.dataset.act === "edit" && fo.target.dataset.curr !== "") r = fo.target.dataset.curr //then update to local db
    nr(fObj, "diary", r);
})

const hd = e => {
    let t_e = dl.findIndex(a=>a._id === e);
    dl[t_e].status === "deleted";
}

const reDom = (el, clEl, dt) => { //div, closest sibling, object data 
    // if(clEl ===  undefined) clEl = el.previousSibling;
    console.log(currEl);
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
}
const et = (id, type, elt, act)=>{
    let rdl = JSON.parse(localStorage.getItem("diary"));
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