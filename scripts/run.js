const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Doge", "Kusama", "Shib"],       // Names
      ["https://cdn.pixabay.com/photo/2021/05/31/08/28/dogecoin-6298191_960_720.png", // Images
      "https://cdn.pixabay.com/photo/2019/10/08/09/43/blue-love-bird-4534559_960_720.jpg", 
      "https://cdn.pixabay.com/photo/2019/03/21/22/39/dog-4072161_960_720.jpg"],
      [50, 300, 20],                    // HP values
      [70, 150, 25]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();