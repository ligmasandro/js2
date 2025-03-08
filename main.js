const user1 = "sandro";
const age1 = 15;

const user2 = "sabag";
const lastname2 = "igachad";
const fullname2 = user2 + lastname2

const str1 = "anbangandon"
const str2 = "invinzentan"
const str3 = str1 + str2

const str4 = "wanda"
const str5 = str3 + str4


const myName = "sandro maximov"
myName.length 





const num1 =23*3;
const num2 = 70-1;
const num3 = 690/10;
const num4 = 70+(-1);



const color1 = "scarlet"
const color2 = "red"
const color3 = "black" 

const elem1 = document.querySelector(".halo")
const elem2 = document.querySelector(".btn-1")
const elem3 = document.querySelector(".img-1")

console.log(elem1);
elem1.style.color = "red"
elem1.style.backgroundColor = "black"
elem1.style.border = "5px solid red"
elem1.style.borderRadius = "19px"
elem1.style.padding = "20px"
elem1.style.display = "flex"
elem1.style.justifyContent ="center"
elem1.style.boxShadow = "2px 4px 1px"

console.log(elem2);
elem2.style.color = "black"
elem2.style.backgroundColor = "red"
elem2.style.border = "7px solid black"
elem2.style.borderRadius = "19px"
elem2.style.padding = "60px"
elem2.style.display = "flex"
elem2.style.justifyContent ="center"
elem2.style.boxShadow = "4px 4px 9px"
elem2.style.fontSize = "23px"

elem1.textContent = "ELIZABETH "
elem2.textContent = "SCARTLET WITCH"
elem1.addEventListener("click", () =>{
    elem1.remove()
    console.log("wanda sleeps at interdemencional");
    
})
elem2.addEventListener("click",() =>{
    console.log("https://s1.zerochan.net/Wanda.Maximoff.600.3325508.jpg");
    

} )

const div  = document.querySelector(".div-1")


 div.addEventListener("click", () => {
    div.style.backgroundColor ="red"
    div.style.color ="black"
    div.style.borderRadius ="5px"
    div.style.width = "800px"
});








console.log(color1);
console.log(color2);
console.log(color3);
console.log(str5);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(str3);
console.log(fullname2);
console.log(user1);
console.log(age1)
console.log(myName);
console.log(elem1);

console.log(myName.length);
console.log(elem2);
console.log(elem3);








