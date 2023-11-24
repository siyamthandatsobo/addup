let btnAdd = document.querySelector('[data-addup]')
let display = document.getElementById('output')

let array = [1,6,5,6]



btnAdd.addEventListener('click',function(){
    sumofnum(array)
})
function sumofnum(arr) {
   let sum = 0
   let hasNumbers = false;
   
   for(let i = 0;i<arr.length;i++){
    if(typeof arr[i] === 'number'){
        sum += arr[i]
        hasNumbers= true;
    }
   }

   if(hasNumbers){
    display.innerText = `sum is equal to: ${sum}`
   } else {
    display.innerText = 'Not a number'
   }
}