// Good Luck 💪🏾
function mostExpensiveItemName(sampleCart) {
    let expensive = 0;
    let name;
    for (let i = 0; i < sampleCart.length; i++) {
      if (sampleCart[i].price > expensive) {
        expensive = sampleCart[i].price;
        name = sampleCart[i].itemName;
      }
    }
    return `The most expensive one is the ${name}`;
  }
  const sampleCart = [
    { itemName: "Diamond Earrings",price: 980 },
    { itemName: "Gold watch", price: 250 },
    { itemName: "Pearl Necklace", price: 4650 },
  ];
  
  console.log(mostExpensiveItemName(sampleCart)); // The most expensive one is the Pearl Necklace
  