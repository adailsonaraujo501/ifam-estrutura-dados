let vetor=new Array()
vetor [0]="oi"
vetor[90]="tudo"
vetor[99]="bem?"
vetor.shift();
vetor.forEach(function (item, indice, array) {
  alert(item, indice);
});