// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let entryPointTab = document.querySelector(".topics");


axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((results) => {
    console.log(results);  
    results.data.topics.forEach(item => {
      // create a new tab
      let tabCard = createTabs(item);
      entryPointTab.appendChild(tabCard);
      // add it to our entry div
    })
  })
  .catch((err) => {
    console.log(err);
})


function createTabs(dataInfo) {
    // create elements
    let tab = document.createElement('div');
    // set content
    tab.textContent = dataInfo
    // apply styles
    tab.classList.add('tab');

    return tab;
}