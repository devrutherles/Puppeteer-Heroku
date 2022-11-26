const puppeteer = require('puppeteer')
  const dir = __dirname + "/brendo"
   const path = require('path')

      const downloadPath = path.resolve('./download')
      
      app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  
        
    const page = await this.browser.newPage();
    await page.goto(
      "https://elements.envato.com/pt-br/notepaper-hanging-on-clothesline-PHGVKY9"
    );


    const client = await page.target().createCDPSession();
    await client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath,
    });



await page.evaluate((btnSelector) => {
 
  document.querySelector(btnSelector).click();
}, 'button[data-test-selector="download-button"]');





   setTimeout( async () => {
   await  page.evaluate((btnSelector) => {
      document.querySelector(btnSelector).click();
      
    }, 'button[data-test-selector="download-without-license"]');



   
   }, 5000);
        
        

  await browser.close();
});

app.listen(process.env.PORT || 3000, () => {
  console.log("starting....");
});

 



 






    




    






    

  
