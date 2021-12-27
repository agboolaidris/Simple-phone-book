function Mth() {
  this.value = 700;
  this.pop = () => {
    return this.value;
  };
}

const pop = new Mth();

console.log(pop.pop());
