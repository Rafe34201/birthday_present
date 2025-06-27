function ershake(el){
    el.classList.remove("shake"); 
    void el.offsetWidth;          
    el.classList.add("shake");   
}

function erattack(el){
    el.classList.remove("attack"); 
    void el.offsetWidth;          
    el.classList.add("attack");       
}


function confname(){
    let ruan = document.getElementById("name").value
    let el = document.getElementById("name");
    let hint = document.getElementById("name_hint")

    if(!ruan){
        hint.innerText = "為什麼要已讀不回我"
        ershake(el)
    }else if(ruan == "Rafe" || ruan == "rafe" || ruan == "洪睿甫"){
        hint.innerText = "還敢冒充我啊"
        ershake(el)
    }else if(ruan == "阮" || ruan == "阮楚"){
        hint.innerText = "妳倒是打完啊！"
        ershake(el)
    }else if(ruan == "ningningruan" || ruan == "阮甯甯" || ruan == "阮楚甯"){
        // 正確
        hint.innerText = "老大好！"
        document.getElementById("first_page").classList.add("hidden")
        document.getElementById("second_page").classList.remove("hidden")


    }else{
        hint.innerText = "胡說八道！\nअगर आप इसे गूगल ट्रांसलेट पर डालते हैं, तो इसका मतलब है कि आप बहुत ऊब चुके हैं"
        ershake(el)
    }
}

function wrong(){
    let cad = document.getElementById("card_two")
    if (document.getElementById('right').src.includes ("images/loppy.png") ){

        document.getElementById("compare_images").classList.add("hidden")
        document.getElementById("win").classList.remove("hidden")
        document.getElementById("same").innerText = "什麼妳說妳點的是下面的？\n反正我分不出兩者差別"

    }else{
        ershake(cad)        
    }
    
}

imgurl = [ "images/flower.png", "images/club.png", "images/loppy.png"]
let i = 0
function next(){
    let me = document.getElementById('card_one')
    let ap = document.getElementById('card_two')    
    if (document.getElementById('right').src.includes("images/loppy.png")){

        document.getElementById("compare_images").classList.add("hidden")
        document.getElementById("win").classList.remove("hidden")

    }else{
    erattack(me)
    ap.classList.remove("shake")
    setTimeout(() => {
        ap.classList.add("hidden");
    }, 300);

    // 等 300ms 換圖片
    setTimeout(() => {
        document.getElementById('right').src = imgurl[i];
    }, 300);

    // 等 500ms 才更新 i，確保圖片用的是舊的 i
    setTimeout(() => {
        i += 1;
    }, 500);

    // 再過一段時間（如 1200ms）讓卡片再出現
    setTimeout(() => {
        ap.classList.remove("hidden");
    }, 1200);        
    }
 
}

function claim(){
    document.getElementById("second_page").classList.add("hidden")
    document.getElementById("thrid_page").classList.remove("hidden")
}


const start = new Date(2024, 3, 14, 11, 27, 0);

function countdown(){
    const now = new Date

    let diff = now - start
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("Time").innerHTML = `
        <span class="numberr">${days}</span> 天 
        <span class="numberr">${hours}</span> 小時 
        <span class="numberr">${minutes}</span> 分 
        <span class="numberr">${seconds}</span> 秒
    `;
}

const timer = setInterval(countdown, 1000);
countdown();

// const bthd = new Date(2025, 5, 28, 23, 59, 59);才對！！
const now = new Date
const bthd = new Date(2025, 5, 28, 23, 59, 59);
if (now - bthd > 1){
    // 晚了
    document.getElementById("ontime").classList.add("hidden")
    document.getElementById("late").classList.remove("hidden")    
}else{
    console.log("早了")
    document.getElementById("ontime").classList.remove("hidden")
    document.getElementById("late").classList.add("hidden")  
}

let prevX = 40; // 起始 left 百分比
let deltime = null
document.getElementById("noButton").addEventListener("mouseenter", moveButton);

function moveButton() {
  let btu = document.getElementById('noButton');
  let newX, newY;

  do {
    newX = Math.random() * 82; // 避免超出畫面
    newY = Math.random() * 90;
  } while (
    Math.abs(newX - prevX) < 20 || newY > 60
  ); // 確保至少跳 20%

  btu.style.left = `${newX}%`;
  btu.style.top = `${newY}%`;
  deltime += 1
  console.log(deltime)
  prevX = newX;

  if(deltime > 10){
    document.getElementById("thrid_page").classList.add("hidden")
    document.getElementById("forth_page").classList.remove("hidden")
  }
}

function goto_3(){
    document.getElementById("forth_page").classList.add("hidden")
    document.getElementById("thrid_page").classList.remove("hidden")
    document.getElementById("noButton").classList.add("hidden")
    document.getElementById("dltpic").classList.add("hidden")
    document.getElementById("pluhhh").classList.add("hidden")
}