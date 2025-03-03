let input = document.querySelector("input");

let data = [
  { name: "Momin", src: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Ali", src: "https://randomuser.me/api/portraits/men/81.jpg" },
  { name: "Wahab", src: "https://randomuser.me/api/portraits/men/37.jpg" },
  { name: "Moeen", src: "https://randomuser.me/api/portraits/men/51.jpg" },
  { name: "Abdullah", src: "https://randomuser.me/api/portraits/men/6.jpg" },
];

let pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
            <div class="img">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h4>${elem.name}</h4>
          </div>`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  let matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  let newusers = "";
  matching.forEach(function (elem) {
    newusers += `<div class="person">
              <div class="img">
                <img
                  src="${elem.src}"
                  alt=""
                />
              </div>
              <h4>${elem.name}</h4>
            </div>`;
  });

  document.querySelector(".people").innerHTML = newusers;
});
