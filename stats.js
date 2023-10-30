document.addEventListener('DOMContentLoaded', () => {
    // Albums
    const albumData = [
      {
        name: '12 Bar Bruise',
        image: 'images/12BarBruise.jpeg',
        recommends: 0,
      },
      {
        name: 'Eyes Like the Sky',
        image: 'images/album2.jpg',
        recommends: 0,
      },
      {
        name: 'Float Along - Fill Your Lungs',
        image: 'images/album2.jpg',
        recommends: 0,
      },
      {
        name: 'Oddments',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: "I'm in Your Mind Fuzz",
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Quarters!',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Paper Mâché Dream Balloon',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Nonagon Infinity',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Flying Microtonal Banana',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Murder of the Universe',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Sketches of Brunswick East',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Polygondwanaland',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Gumboot Soup',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Fishing for Fishies',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: "Infest the Rats' Nest",
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'K.G.',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'L.W.',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Butterfly 3000',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Made in Timeland',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Omnium Gatherum',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Ice, Death, Planets, Lungs, Mushrooms and Lava',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Laminated Denim',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'Changes',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'PetroDragonic Apocalypse; or, Dawn of Eternal Night: An Annihilation of Planet Earth and the Beginning of Merciless Damnation',
        image: 'images/album2.jpg',
        recommends: 0,
      },{
        name: 'The Silver Cord',
        image: 'images/album2.jpg',
        recommends: 0,
      },
    ];
  
    const tableBody = document.querySelector('table tbody');
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
      tableBody.innerHTML = '';
      sortedData.forEach((album, index) => {
        const rowElement = document.createElement('tr');
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
  