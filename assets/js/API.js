// Bagian BE 
const baseURL = "https://angry-gray-outerwear.cyclic.app"

// cek resi
async function fetchShipmentById() {
    try {
        const status = await fetch(`${baseURL}/shipment/${shipmentId}`);
        const data = await shipment.json();
        const shipmentId = document.getElementById('shipmentId');
        shipmentId.innerHTML = '';

        data.forEach((shipmentId) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${status}`;
            shipmentID.appendChild(listItem);
          });

    } catch(error) {
        console.error(error);
    }
}

fetchShipmentById()

// cek ongkir

async function fetchOngkir() {
    try {
        const origin = document.getElementById('servicesss').value;
        const destination = document.getElementById('servicesss').value;
        const price = await fetch(`${baseURL}/price?origin=${servicesss}&destination=${servicesss}`);
        const data = await price.json();
        const servicesss = document.getElementById('servicess');
        servicesssId.innerHTML = '';

        data.forEach((servicesss) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${price}`;
            servicesss.appendChild(listItem);
          });

    } catch (error) {
        console.error(error)
    }
}

fetchOngkir()

// kirim review

async function submitSuggestion() {
    try {
        const message = document.getElementById('suggestion').value;
        
        const response = await fetch(`${baseURL}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({review})
        });
        const data = await response.json();


    } catch (error) {
        console.error(error)
    }
}

submitSuggestion()