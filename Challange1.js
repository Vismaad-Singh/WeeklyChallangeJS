//WEEKLY CHALLANGE_______________________________________________________
//(You have to declare three variables. Give three of them a birthday date. Then you have
//to check the current age of every variable. Then using condition find who
//is older and who is younger.)

let vismaad = "26 may,2000";
let sahil = "19 november,1999";
let vaneet = "25 december,2000";

let v = new Date(vismaad);
let v1 = new Date(vismaad);
let v2 = new Date(vismaad);
let dob1 = console.log(
  "DOB of Vismaad is : " +
    v.getDate() +
    "/" +
    (v.getMonth() + 1) +
    "/" +
    v2.getFullYear()
);

let s = new Date(sahil);
let s1 = new Date(sahil);
let s2 = new Date(sahil);
let dob2 = console.log(
  "DOB of Sahil is : " +
    s.getDate() +
    "/" +
    (s1.getMonth() + 1) +
    "/" +
    s2.getFullYear()
);

let vk = new Date(vaneet);
let vk1 = new Date(vaneet);
let vk2 = new Date(vaneet);
let dob3 = console.log(
  "DOB of Vaneet is : " +
    vk.getDate() +
    "/" +
    (vk1.getMonth() + 1) +
    "/" +
    vk2.getFullYear()
);

let DOB = new Date(vismaad);
let month_diff = Date.now() - DOB.getTime();
let age_dt = new Date(month_diff);
let year = age_dt.getUTCFullYear();
let age = Math.abs(year - 1970);
console.log("Age of the date entered(VISMAAD) : " + age + " years");

let DOB1 = new Date(sahil);
let month_diff1 = Date.now() - DOB1.getTime();
let age_dt1 = new Date(month_diff1);
let year1 = age_dt1.getUTCFullYear();
let age1 = Math.abs(year1 - 1970);
console.log("Age of the date entered(SAHIL) : " + age1 + " years");

let DOB2 = new Date(vaneet);
let month_diff2 = Date.now() - DOB2.getTime();
let age_dt2 = new Date(month_diff2);
let year2 = age_dt2.getUTCFullYear();
let age2 = Math.abs(year2 - 1970);
console.log("Age of the date entered(VANEET) : " + age2 + " years");

if (age >= age1 && age >= age2) {
  console.log("Vismaad is the elder one");
} else if (age1 >= age && age1 >= age2) {
  console.log("Sahil is the elder one");
} else {
  console.log("Vaneet is the elder one");
}
