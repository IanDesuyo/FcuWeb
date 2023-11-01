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

const prices = document.querySelector(".prices");

for (const [key, value] of Object.entries(name_mapping)) {
  const el = document.createElement("div");
  el.id = key;
  el.classList.add("price");

  const img = document.createElement("img");
  img.src = `assets/${key}.png`;
  el.appendChild(img);

  const price = document.createElement("p");
  price.classList.add("bold");
  price.textContent = value;
  el.appendChild(price);

  const nums = document.createElement("div");
  nums.classList.add("nums");
  for (const num of winner[key]) {
    const e = document.createElement("p");
    e.textContent = num;
    nums.appendChild(e);
  }

  el.appendChild(nums);

  prices.appendChild(el);
}
