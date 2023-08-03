const sentence = "hello there from lighthouse labs"


for(let i = 0; i < sentence.length; i++) {
  for(let j = 50; j < sentence.length * 50;  j = j + 50){
    setTimeout(() => {
      process.stdout.write(sentence[i])
    },j)
  }
  process.stdout.write("\n")
}
console.log(sentence[0])
