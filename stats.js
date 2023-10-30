document.addEventListener("DOMContentLoaded", () => {
  // Albums
  const albumData = [
    {
      name: "12 Bar Bruise",
      image: "images/12BarBruise.jpeg",
      recommends: 0,
    },
    {
      name: "Eyes Like the Sky",
      image: "images/EyesLikeTheSky.jpeg",
      recommends: 0,
    },
    {
      name: "Float Along - Fill Your Lungs",
      image: "images/FloatAlong.jpeg",
      recommends: 0,
    },
    {
      name: "Oddments",
      image: "images/Oddments.jpeg",
      recommends: 0,
    },
    {
      name: "I'm in Your Mind Fuzz",
      image: "images/MindFuzz.jpeg",
      recommends: 0,
    },
    {
      name: "Quarters!",
      image: "images/Quarters.jpeg",
      recommends: 0,
    },
    {
      name: "Paper Mâché Dream Balloon",
      image: "images/PaperMache.jpeg",
      recommends: 0,
    },
    {
      name: "Nonagon Infinity",
      image: "images/Nonagon.jpeg",
      recommends: 0,
    },
    {
      name: "Flying Microtonal Banana",
      image: "images/FlyingMicrotonalBanana.jpeg",
      recommends: 0,
    },
    {
      name: "Murder of the Universe",
      image: "images/MOTU.jpeg",
      recommends: 0,
    },
    {
      name: "Sketches of Brunswick East",
      image: "images/Sketches.jpeg",
      recommends: 0,
    },
    {
      name: "Polygondwanaland",
      image: "images/Polygondwanaland.jpeg",
      recommends: 0,
    },
    {
      name: "Gumboot Soup",
      image: "images/GumbootSoup.jpeg",
      recommends: 0,
    },
    {
      name: "Fishing for Fishies",
      image: "images/FishingForFishies.jpeg",
      recommends: 0,
    },
    {
      name: "Infest the Rats' Nest",
      image: "images/ITRN.jpeg",
      recommends: 0,
    },
    {
      name: "K.G.",
      image: "images/KG.jpeg",
      recommends: 0,
    },
    {
      name: "L.W.",
      image: "images/LW.jpeg",
      recommends: 0,
    },
    {
      name: "Butterfly 3000",
      image: "images/Butterfly3000.jpeg",
      recommends: 0,
    },
    {
      name: "Made in Timeland",
      image: "images/Timeland.jpeg",
      recommends: 0,
    },
    {
      name: "Omnium Gatherum",
      image: "images/OmniumGatherum.jpeg",
      recommends: 0,
    },
    {
      name: "Ice, Death, Planets, Lungs, Mushrooms and Lava",
      image: "images/IceDeath.jpeg",
      recommends: 0,
    },
    {
      name: "Laminated Denim",
      image: "images/LaminatedDenim.jpeg",
      recommends: 0,
    },
    {
      name: "Changes",
      image: "images/Changes.jpeg",
      recommends: 0,
    },
    {
      name: "PetroDragonic Apocalypse; or, Dawn of Eternal Night: An Annihilation of Planet Earth and the Beginning of Merciless Damnation",
      image: "images/Petrodraconic.jpg",
      recommends: 0,
    },
    {
      name: "The Silver Cord",
      image: "images/silverCord.jpeg",
      recommends: 0,
    },
  ];

  const tableBody = document.querySelector("table tbody");
  updateTable(albumData);

  // Simulate real-time updates (change recommends for a random row every 5 seconds)
  setInterval(() => {
    const rowIndexToUpdate = Math.floor(Math.random() * albumData.length);
    albumData[rowIndexToUpdate].recommends += 1;
    updateTable(albumData);
  }, 5000);

  // Function to update the table with new data
  function updateTable(data) {
    // Sort rows based on recommends in descending order
    const sortedData = [...data].sort((a, b) => b.recommends - a.recommends);
    tableBody.innerHTML = "";
    sortedData.forEach((album, index) => {
      const rowElement = document.createElement("tr");
      rowElement.innerHTML = `
          <th scope="row">${index + 1}</th>
          <td><img src="${album.image}" class="img-fluid" /></td>
          <td>${album.name}</td>
          <td>${album.recommends}</td>
        `;
      tableBody.appendChild(rowElement);
    });
  }
});
