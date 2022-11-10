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
  },
  {
    _id: 2,
    subTitle: "Le Grand Elille",
    title: "Elille",
    type: "Mountain Bike",
    img: "a (1).png",
    rate: "40",
    location: "Texas, Kentucky",
    colors: ["red", "green"],
    frameSizes: ["M", "S"],
  },
];



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
      this._setBikes([
        {
          liked: this.liked,
          myBikes: [{ borrowed: this.borrowed, returned: this.returned }],
        },
      ]);
      return;
    }
    this.borrowed = ls[0].myBikes[0].borrowed;
    console.log(this.borrowed);
    this.renderBikes();
  }

 _setBikes(bikes) {
    localStorage.setItem("bikes", JSON.stringify(bikes));
  }

  renderBikes() {
    for (let b = 0; b < this.bikes.length; b++) {
      const bike = this.bikes[b];
      const bikeDiv = document.createElement("div");
      bikeDiv.innerHTML = `
                                                <button type="button" class="b-save flex a-i-c j-c-c">
                                                    <i class="bi bi-heart"></i>
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
      // console.log(this._ifborrowed(this.bikes[b]._id));
      if(this._ifborrowed(this.bikes[b]._id) !== undefined) {
        (bikeDiv.querySelector(".rent-now").textContent = "Available in a few days", bikeDiv.classList.add("tkn"))
        bikesP.append(bikeDiv);
      }
      else bikesP.prepend(bikeDiv);
    }
  }

  _bikesClick(c, a) {

    if (a.target.classList.contains("bk") || a.target.matches(".bk *")) {
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
    console.log(bData);
    openDisplay();
    _s("tti").textContent = bData.title;
    _s("tt").textContent = bData.subTitle;
    _s("rate").textContent = bData.rate + " $";
    _s("bk-i").src = `./assets/images/bk/${bData.img}`;
    _s("clr").innerHTML = this.calcColors(bData.colors, "span");
    _s("ppE").innerHTML = this.calcColors(bData.colors, "button");
    this._ifborrowed(Number(bData._id)) === undefined ?this.allDone(false):this.allDone(true);
    
  }

  calcColors(c, tag) {
    if (!Array.isArray(c)) return;
    let colors = "";
    for (let i = 0; i < c.length; i++) {
      colors += `<${tag} ${
        tag === "button" ? `type="button" class="c-pick"` : ""
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
          {_id: this.currentlyViewing, equipments: {'gloves': _s("gloves").checked, 'helmet': _s("helmet").checked, 'k-pads': _s("k-pads").checked}, size: document.querySelector("[name='size']:checked").value, daysRent: _s("d-rent").value, typeRent: _s("t-rent").value}
            );
    };
    console.log(this.borrowed);
    this.allDone(true)
    switchView()
    setTimeout(()=>{closeDisplay(); _s("s-tt-v").click()}, 800);
    this._setBikes([
      {
        liked: this.liked,
        myBikes: [{ borrowed: this.borrowed, returned: this.returned }],
      },
    ]);
    let BikeRent = new Rent(this.currentlyViewing);
    let v = document.querySelector(`[data-id="${this.currentlyViewing}"`)
    v.querySelector(".rent-now").textContent = "Rented"; v.classList.add("tkn");
    // console.log(BikeRent);
  }

  getBorrowed() {
    return this.borrowed;
  }
  _ifborrowed(i) {
    return this.borrowed.find(q=>Number(q._id) === i)
  }
}




class Rent extends App {
    constructor(bikeId) {
        super(bikes)
        this.bikeId = bikeId;
        this.getContent();
    }
    
    getContent() {
      let b = this.getBikeInfo(this.bikeId);
      let rented = BikePlace.getBorrowed().find(a=>a._id === this.bikeId);
      console.log(b);
      let c = `
      <div class="bk">
                      <div class="b-ig">
                                    <img class="sp-n" src="./assets/images/bk/${b.img}" alt="">
                                </div>
                                <div class="b-r-ion">
                                    <div class="p-md flex j-c-b">
                                        <div>
                                            <h5>Location</h5>
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
                                                <h6>Rented on Thursday 28th</h6>
                                            </div>
                                            <div class="l_o-n">
                                                <h6>Expected to be returned on Thursday 31th</h6>
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

    newPopup(a, b, c){
      
    }
  }

class Return {}

const BikePlace = new App(bikes);
BikePlace._getBikesData();
console.log(BikePlace.getBorrowed());
BikePlace.getBorrowed().forEach(a=> {let b =new Rent(a._id)});
bikesP.addEventListener("click", BikePlace._bikesClick.bind(this, BikePlace), false);
