"use strict";
const bikes = [
  {
    _id: 1,
    subTitle: "Le Grand Elille",
    title: "Elille",
    type: "Mountain Bike",
    img: "a (3).png",
    rate: "40",
    location: "Texas, Kentucky",
    colors: ["red", "green"],
    frameSizes: ["M", "S"],
    bg: "rgb(60, 66, 78)",
  },
  {
    _id: 2,
    subTitle: "Le Grand Elille 4",
    title: "Elille",
    type: "Mountain Bike",
    img: "a (1).png",
    rate: "40",
    location: "Texas, Kentucky",
    colors: ["red", "green"],
    frameSizes: ["M", "S"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 3,
    subTitle: "TrailX",
    title: "Ibis Exie X01",
    type: "Mountain Bike",
    img: "a (2).png",
    rate: "45",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X", "XL"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 4,
    subTitle: "Blur 4C",
    title: "Santa Cruz",
    type: "Mountain Bike",
    img: "a (4).png",
    rate: "45",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 5,
    subTitle: "Eagle",
    title: "Orbea Alma M50",
    type: "Mountain Bike",
    img: "a (5).png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 6,
    subTitle: "3-Star",
    title: "Niner Air RDO",
    type: "Mountain Bike",
    img: "a (6).png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 7,
    subTitle: "STR",
    title: "Juliana Wilder",
    type: "Mountain Bike",
    img: "13.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 8,
    subTitle: "Logo",
    title: "Norco Revolver FS",
    type: "Mountain Bike",
    img: "8.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 9,
    subTitle: "Carbon 2",
    title: "Marin Alpine Trail",
    type: "Mountain Bike",
    img: "9.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 10,
    subTitle: "XT Bike",
    title: "Knolly Chilcotin 151",
    type: "Mountain Bike",
    img: "10.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 11,
    subTitle: "H60-D",
    title: "Orbea Avant H-60",
    type: "Mountain Bike",
    img: "11.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 12,
    subTitle: "Soma",
    title: "Soma Smoothie",
    type: "Mountain Bike",
    img: "12.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 13,
    subTitle: "Orbea",
    title: "Orca M21eTeam",
    type: "Mountain Bike",
    img: "13.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 14,
    subTitle: "Surly",
    title: "Surly Midnight",
    type: "Mountain Bike",
    img: "14.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 15,
    subTitle: "Gloss",
    title: "Avant H30-D",
    type: "Mountain Bike",
    img: "15.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 16,
    subTitle: "Ritchey",
    title: "Pescadero Road",
    type: "Mountain Bike",
    img: "16.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 17,
    subTitle: "Sweeper",
    title: "Streep Miner BMX",
    type: "BMX",
    img: "17.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 18,
    subTitle: "co2023",
    title: "Se Racing",
    type: "Mountain Bike",
    img: "18.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 19,
    subTitle: "GT 2022",
    title: "Perfomer 29",
    type: "Mountain Bike",
    img: "19.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 20,
    subTitle: "Model C",
    title: "Sunday 2023 Ac24",
    type: "Mountain Bike",
    img: "20.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  },
  {
    _id: 21,
    subTitle: "SoundW",
    title: "Rust BMX",
    type: "BMX",
    img: "21.png",
    rate: "60",
    location: "12th Street, China",
    colors: ["coral", "blue"],
    frameSizes: ["X"],
    bg: "rgb(78, 74, 60)",
  }
];
const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"] 


class App {
  currentlyViewing;
  constructor(bikes) {
    this.user = false;
    this.bikes = bikes;
    this.liked = [];
    this.borrowed = [];
    this.returned = [];
    // this._getBikesData();
    done.addEventListener("click", this.newRent.bind(this));
  }

   _getBikesData() {
    let ls = JSON.parse(localStorage.getItem("bikes"));
    if (!ls) {
      this._setBikes();
      return;
    }
    this.borrowed = ls[0].myBikes[0].borrowed;
    this.liked = ls[0].liked;
    this.renderBikes();
  }

 _setBikes() {
  let sData = [
    {
      liked: this.liked,
      myBikes: [{ borrowed: this.borrowed, returned: this.returned }],
    },
  ]
    localStorage.setItem("bikes", JSON.stringify(sData));
  }

  renderBikes() {
    for (let b = 0; b < this.bikes.length; b++) {
      const bike = this.bikes[b];
      const bikeDiv = document.createElement("div");
      bikeDiv.innerHTML = `
                                                <button type="button" class="b-save flex a-i-c j-c-c">
                                                    <i class="bi ${this._ifLiked(bike._id) ? " bi-heart-fill" : " bi-heart"}"></i>
                                                </button>
                                                <div class="b-ig">
                                                    <img class="sp-n" src="./assets/images/bk/${bike.img}" alt="">
                                                </div>
                                                <div class="b-ct p-md">
                                                    <div>
                                                        <span class="flex a-i-c j-c-b">
                                                              <h3>${bike.title}</h3>
                                                            <span class="pri">$${bike.rate} / hour</span>
                                                        </span>
                                                        <div class="flex a-i-c py-sm">
                                                            <span class="flex a-i-c loc">
                                                            <i class="bi bi-geo-alt"></i>
                                                            <span>${bike.location}</span>
                                                        </span>
                                                        <bdi>&nbsp;&nbsp;|&nbsp;&nbsp;</bdi>
                                                        <span class="flex a-i-c j-c-b">
                                                            <i class="bi bi-bicycle"></i>
                                                            <span class="type">${bike.type}</span>
                                                        </span>
                                                        </div>
                                                    </div>
                                                    <div class="b-t-c-r mains">
                                                        <button type="button" class="flex a-i-c rent-now"><span>Rent Today</span><i class="spc-r bi bi-arrow-right"></i></button>
                                                    </div>
                                                </div>
            `;
      bikeDiv.classList.add("bk");
      bikeDiv.dataset.id = bike._id;
      if(this._ifborrowed(this.bikes[b]._id) !== undefined) {
        (bikeDiv.querySelector(".rent-now").textContent = "Available in a few days", bikeDiv.classList.add("tkn"))
        bikesP.append(bikeDiv);
      }
      else bikesP.prepend(bikeDiv);
    }
  }

  _bikesClick(c, a) {
    if(a.target.classList.contains("b-save") || a.target.nodeName === "I") {
         let img = a.target.classList.contains("b-save") ? a.target.querySelector("img") : a.target;
         let imgParId = img.closest(".bk").dataset.id;
         if(c._ifLiked(imgParId)) c.liked.splice(c.liked.indexOf(imgParId), 1);
         else c.liked.push(imgParId)
          img.classList.toggle("bi-heart");
         img.classList.toggle("bi-heart-fill");
         c._setBikes();
       }
    else if (a.target.classList.contains("bk") || a.target.matches(".bk *")) {
      let aP = a.target.classList.contains("bk")
        ? a.target
        : a.target.closest(".bk")
        ? a.target.closest(".bk")
        : null;
      if (aP === null) return;
      let bId = aP.dataset.id;
      c.displayBikeInfo(bId);
    }
  }
  getBikeInfo(i) {
    return this.bikes.find(a=>a._id === Number(i));
  }
  displayBikeInfo(i) {
    this.currentlyViewing = i;
    let bData = this.bikes.find((b) => b._id === Number(i));
    if (bData === null || bData === undefined) return;
    openDisplay();
    _s("dy").style.setProperty("--bg-3", bData.bg)
    _s("tti").textContent = bData.title;
    _s("tt").textContent = bData.subTitle;
    _s("rate").textContent = bData.rate + " $";
    _s("bk-i").src = `./assets/images/bk/${bData.img}`;
    _s("clr").innerHTML = this.calcColors(bData.colors, "span");
    _s("ppE").innerHTML = this.calcColors(bData.colors, "button");
    console.log(_s("color"));
    _s("color").value = bData.colors[0];
    this._ifborrowed(Number(bData._id)) === undefined ?this.allDone(false):this.allDone(true);
    
  }

  calcColors(c, tag) {
    if (!Array.isArray(c)) return;
    let colors = "";
    for (let i = 0; i < c.length; i++) {
      colors += `<${tag} ${
        tag === "button" ? `type="button" class="c-pick${i === 0 ? " ing" : ""}"` : ""
      } style="background: ${c[i]}" title="${c[i]}"></${tag}>`;
    }
    return colors;
  }
  // this._getBikesData();
  allDone(a) {
    done.textContent = a ? "Rented" : "All Done";
    a ? (_s("re-nt").style.display = "none", _s("n-A").style.display = "block", done.classList.add("rented")): (_s("re-nt").style.display = "inline-flex", _s("n-A").style.display = "none", done.classList.remove("rented"));

  }
  newRent() {
    if(done.classList.contains("rented")) return;
    let ifInBorrowed = this.borrowed.find(a=>a._id === this.currentlyViewing)
    if(!ifInBorrowed){
        this.borrowed.push(
          {_id: this.currentlyViewing, date: new Date(), equipments: {'gloves': _s("gloves").checked, 'helmet': _s("helmet").checked, 'k-pads': _s("k-pads").checked}, size: document.querySelector("[name='size']:checked").value, daysRent: _s("d-rent").value, typeRent: _s("t-rent").value, color: _s("color").value}
            );
    };
    this.allDone(true)
    switchView()
    setTimeout(()=>{closeDisplay(); _s("s-tt-v").click()}, 800);
    this._setBikes();
    let BikeRent = new Rent(this.currentlyViewing);
    this._newPopup(this.bikes.find(a=>Number(a._id) === Number(this.currentlyViewing)).img)
    let v = document.querySelector(`[data-id="${this.currentlyViewing}"`)
    v.querySelector(".rent-now").textContent = "Rented"; v.classList.add("tkn");
  }

  getBorrowed() {
    return this.borrowed;
  }
  _ifborrowed(i) {
    return this.borrowed.find(q=>Number(q._id) === i)
  }
  _ifLiked(i) {
    return this.liked.includes(String(i));
  }
  _newPopup(a, b = "Yay, you just rented a bike, let's goo ⚡"){
    _s("pp-img").src = `./assets/images/bk/${a}`;
    _s("pp-h2").textContent = b;
    _s("pp").classList.toggle("ing");
    setTimeout(()=>{
      _s("pp").classList.remove("ing");
    }, 5000);
  }
}




class Rent extends App {
    constructor(bikeId) {
        super(bikes)
        this.bikeId = bikeId;
        this.getContent();
    }
    getTh(a) {
      if(a > 3 && a < 21) return "th";
      let b = Number(a) % 10;
      return b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
    }
    getReturnDate(d, n) {
      let e = new Date(d);
      e.setDate(e.getDate() + n);
      return e;
    }
    getContent() {
      let b = this.getBikeInfo(this.bikeId);
      let rented = BikePlace.getBorrowed().find(a=>a._id === this.bikeId);
      let rD = new Date(rented.date);
      let rrDD = this.getReturnDate(rD, Number(rented.daysRent));
      console.log(rD.toLocaleString('default', { month: 'long' }))
      let c = `
      <div class="bk">
                      <div class="b-ig-gr" style="background-color: ${b.bg}">
                      <div class="b-ig">
                                    <img class="sp-n" src="./assets/images/bk/${b.img}" alt="">
                                    </div>
                                    <div class="bk-rtd">
                                    <h6>To be returned:</h6>
                                    <p>- 1 ${rented.color.charAt(0).toUpperCase() + rented.color.slice(1, rented.color.length)} ${b.title} Bycicle</p>
                                    ${rented.equipments.helmet ? "<p>- 1 Helmet</p>" : ""}
                                    ${rented.equipments["k-pads"] ? "<p>- 1 Pair of Knee Pads</p>" : ""}
                                    ${rented.equipments.gloves ? "<p>- 1 Pair of Gloves</p>" : ""}
                                    </div>
                                </div>
                                <div class="b-r-ion">
                                    <div class="p-md flex j-c-b">
                                        <div>
                                            <h5>Return Location</h5>
                                            <span>${b.location}</span>
                                        </div>
                                        <div>
                                            <h5>Duration</h5>
                                            <span>${rented.daysRent} ${rented.typeRent}</span>
                                        </div>
                                        <div>
                                            <h5>Payment</h5>
                                            <span>$${b.rate} - paid</span>
                                        </div>
                                        <div>
                                            <h5>Rental ID</h5>
                                            <span>#5012${b._id}</span>
                                        </div>
                                    </div>
                                </div>
                                <hr class="b-t-a-a">
                                <div class="b-s-ion">
                                    <div class="p-md">
                                        <div class="time-line">
                                            <div class="l_o-n on">
                                                <h6>Rented on - ${days[rD.getDay() - 1]} ${rD.toLocaleString('default', { month: 'long' })} ${rD.getDate()}${this.getTh(String(rD.getDate()))}</h6>
                                            </div>
                                            <div class="l_o-n">
                                                <h6>Expected return date - ${rented.typeRent === "hours" ? days[rD.getDay() - 1] : days[rrDD.getDay() - 1]} ${rrDD.toLocaleString('default', { month: 'long' })} ${rented.typeRent === "hours" ? rD.getDate() : rrDD.getDate()}${this.getTh(String(rrDD.getDate()))}</h6>
                                            </div>
                                            <div class="l_o-n a-f_l">
                                                <h6>Returned on --</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- dropdown  -->
                                    <button type="button" class="dp-b-t">Additional Information</button>
                                    <div class="b-q-ion">
                                        <h5>
                                            Bycicle 
                                        </h5>
                                    </div>
                                  </div>
      `;
      _s("vw-2-bk").insertAdjacentHTML("beforeEnd", c)
    }
  }

class Return {}

const BikePlace = new App(bikes);
BikePlace._getBikesData();
BikePlace.getBorrowed().forEach(a=> {let b =new Rent(a._id)});
bikesP.addEventListener("click", BikePlace._bikesClick.bind(this, BikePlace), false);
