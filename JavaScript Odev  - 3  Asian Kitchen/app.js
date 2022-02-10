const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const sectionDOM = document.querySelector(`#section-center`)
const allDOM = document.querySelector(`#all`)
const JapanDOM = document.querySelector(`#japan`)
const KoreanDOM = document.querySelector(`#china`)
const ChineseDOM = document.querySelector(`#korea`)


      // !!! İlk deneyişimde .map, .reduce, .filter kullanmadan yapmayi denedim Yapamadım O kodları da açıklama satırında bırakıyorum
        
// // Japan Yemekleri

// let JapanFood1 = menu[1] 
// let JapanFood2 = menu[5]
// let JapanFood3 = menu[8]

// let AllJapanFood = JapanFood1 + JapanFood2 + JapanFood3

// // Korea yemekleri

// let KoreanFood1 = menu[0]
// let KoreanFood2 = menu[2]
// let KoreanFood3 = menu[6]

// let AllKoreanFood = KoreanFood1 + KoreanFood2 + KoreanFood3

// // China yemekleri

// let ChineseFood1 = menu[3]
// let ChineseFood2 = menu[4]
// let ChineseFood3 = menu[7]

// let AllChineseFood = ChineseFood1 + ChineseFood2 + ChineseFood3

// // Tüm Yemekler
// let AllFood = AllJapanFood + AllKoreanFood + AllChineseFood
// console.log(AllFood)


allDOM.addEventListener (`click`,allFoods)

JapanDOM.addEventListener(`click`,JapanFoods)

KoreanDOM.addEventListener(`click`, KoreanFoods)

ChineseDOM.addEventListener(`click`, ChineseFoods)

function allFoods (){
  let allMenu = ""
  menu.map(menu => {
    allMenu += createFood(menu)
    sectionDOM.innerHTML =  allMenu 
  }) 
}

function JapanFoods(){
  let allMenu =""
  menu.map(menu => {
    if(menu.category === "Japan")
    allMenu += createFood(menu)
  })
  sectionDOM.innerHTML =  allMenu
}

function KoreanFoods(){
  let allMenu = ""
  menu.map(menu =>{
    if(menu.category === "Korea")
    allMenu += createFood(menu) 
    sectionDOM.innerHTML =  allMenu
  })
   
}

function ChineseFoods(){
  let allMenu = ""
  menu.map(menu => {
    if(menu.category === "China")
    allMenu += createFood(menu)
  })
  sectionDOM.innerHTML =  allMenu
}

function createFood (food) {
  let item = `
  <div class="menu-items col-lg-6 col-sm-12">
  <img src="${food.img}" alt="${food.title}" class="photo">
  <div class="menu-info">
              <div class="menu-title">
                <h4>${food.title}</h4>
                <h4 class="price">${food.price}</h4>
              </div>
              <div class="menu-text">
              ${food.desc}
              </div>
            </div>
          </div>
        `
        return item
        allFoods()  
}
