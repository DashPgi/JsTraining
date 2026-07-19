function calculateTip() {
  var Bill = Number(document.getElementById("bill-amount").value);
  var Tip = Number(document.getElementById("tip-percentage").value);
  var Resault = document.getElementById("tip-amount");

  if (Bill < 1) {
    let Tipamount = "SooratHesab Kamtar az 1000 ast";
    Resault.textContent = "total :" +Tipamount;
  }
  if (Tip < 1) {
    let Tipamount = "Darsade Moshakhas shode Eshtebah Ast!";
    Resault.textContent = "total :" +Tipamount;
  } else if (Tip < 1 || Bill < 1) {
    let Tipamount = "Voroodi Sahih Nist!";
    Resault.textContent = "total :" + Tipamount;
  } else {
let Tipamount = Bill + (Bill * Tip / 100);
    Resault.textContent = "total : " + Tipamount;
  }
}
