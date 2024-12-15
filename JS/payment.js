function chengEvent() {
  var USDdollor = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  var payment = prompt("Please input your payment:");
  if (payment != null) {
    document.getElementById("salary").value = USDdollor.format(payment);
  } else {
    alert("Pleasee input your payment again.");
    payment = prompt("Please input your payment again:");
    document.getElementById("salary").value = USDdollor.format(payment);
  }
}
