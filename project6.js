// Question -1

let marks = [85,97,44,37,76,60]
console.log(marks);

let sum = 0;
for (let i of marks){
    sum=sum+i;
}
console.log(sum);
let average = sum/marks.length;
console.log(`Average marks = ${average}`);

// Question - 2

let items = [250,645,300,900,50];
let index = 0; 
for(let i of items){
    console.log(`value at index ${index} = ${i}`);
    let Offer = i/10;
    items[index]= items[index] - Offer;
    console.log(`Price after offer ${items[index]}`);
    index++;
}
console.log(items); 



for (i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;
    console.log(`Priece after offer = ${items[i]}`);
}
console.log(items);