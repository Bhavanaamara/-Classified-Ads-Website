// Dummy data for ads with categories
const ads = [
    { title: 'Laptop', description: 'A powerful laptop for sale', category: 'electronics' },
    { title: 'Jacket', description: 'Warm winter jacket', category: 'clothing' },
    { title: 'Car', description: 'Used car in good condition', category: 'vehicles' },
    // Add more ads with categories as needed
  ];
  
  // Function to display ads
  function displayAds(filteredAds) {
    const adsSection = document.getElementById('ads');
    adsSection.innerHTML = '';
    filteredAds.forEach(ad => {
      const adElement = document.createElement('div');
      adElement.classList.add('ad');
      adElement.innerHTML = `
        <h2>${ad.title}</h2>
        <p>${ad.description}</p>
      `;
      adsSection.appendChild(adElement);
    });
  }
  
  // Initial display of ads
  displayAds(ads);
  
  // Function to filter ads by category
  function filterAdsByCategory(category) {
    const filteredAds = category === 'all' ? ads : ads.filter(ad => ad.category === category);
    displayAds(filteredAds);
  }
  // Function to change the images
function changeImages() {
    const image1 = document.getElementById('Laptop');
    const image2 = document.getElementById('Car');
    const image3 = document.getElementById('Jacket');
  
    // Change image sources to your desired images
    image1.src = 'https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg';
    image2.src = 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg';
    image3.src = 'https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80.jpg';
  }
  
  