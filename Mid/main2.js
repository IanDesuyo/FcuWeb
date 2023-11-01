const name_mapping = {
  domesticTravel: "國旅劵",
  iYuan: "i 原劵",
  agriculture: "農遊劵",
  artFunE: "藝Fun劵 數位",
  artFunP: "旅遊劵 紙本",
  sports: "動滋劵",
  hakka: "客庄劵",
  rgionalRevitalization: "地方創生劵",
};

const winner = {
  domesticTravel: ["21", "32", "98", "67", "97", "410"],
  iYuan: ["64", "85"],
  agriculture: ["89", "32", "54", "597", "453", "152"],
  artFunE: ["96", "15", "07", "30", "73", "98", "19", "11"],
  artFunP: ["39", "37", "23", "36", "79", "08", "14", "75"],
  sports: ["97", "13", "19", "55", "71", "93", "381", "734", "644", "453", "985"],
  hakka: ["81", "900"],
  rgionalRevitalization: [
    "081",
    "105",
    "594",
    "188",
    "089",
    "396",
    "521",
    "467",
    "912",
    "798",
    "358",
    "441",
    "367",
    "941",
    "335",
  ],
};

document.querySelector("button").addEventListener("click", e => {
  const ul = document.querySelector("ul");

  for (const [key, value] of Object.entries(name_mapping)) {
    const li = document.createElement("li");
    li.id = key;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = value;
    li.appendChild(price);
    li.append(": ");

    const nums = document.createElement("span");
    nums.classList.add("nums");
    nums.textContent = winner[key].join(", ");
    li.appendChild(nums);

    ul.appendChild(li);
  }

  document.querySelector("button").disabled = true;
});
