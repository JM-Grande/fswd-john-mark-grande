//  Categories Page Container 3
const container3 = document.querySelector(".container3");

let htmlString = "";

for (let i = 1; i <= 12; i++) {
  htmlString += `<div class="item">
            <div class="item-img">
                <img src="./images/phone.jpg">
            </div>
            <div class="item-content">
                <h3>Smart Phone</h3>
                <p>$894</p>
            </div>
        </div>`;
}

container3.innerHTML = htmlString;
//  End of Categories Page Container 3
