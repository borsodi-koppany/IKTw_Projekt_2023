let index = 1;

function kepValtas(n) {
  let i;
  let kepek = document.querySelector(".kepvaltas-kep");
  if (n > kepek.lenght) index = 1;
  if (n < 1) index = kepek.lenght;
  for (i; i < kepek.lenght; i++) {
    kepek[i].style.display = "none";
  }
}
