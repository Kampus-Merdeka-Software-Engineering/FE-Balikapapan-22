// Bagian BE 
const baseURL = "https://angry-gray-outerwear.cyclic.app"

// cek resi
async function fetchShipmentById() {
    const shipmentId = document.getElementById('shipmentId').value;
    try {
        const response = await fetch(`${baseURL}/shipmentId`);
        const shipment = await response.json();
        const shipmentStatus = console.log("otw"); //document.getElementById('id tempat status muncul');
        shipmentStatus.innerHTML = `Status : ${shipment.status}`;
    } catch(error) {
        console.error('error fetching shipment:', error);
    }
}

fetchShipmentById()


// kirim saran

async function submitSuggestion() {
    const suggestion = document.getElementById('suggestion').value;
    try {        
        const response = await fetch(`${baseURL}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ suggestion })
        });
        const data = await response.json();


    } catch (error) {
        console.error("Error adding review:", error);
    }
}

submitSuggestion()

// cek ongkir 

async function fetchOngkir() {
    const origin = document.getElementById('servicesss').value;
    const destination = document.getElementById('servicesss').value;
    try {
        const response = await fetch(`${baseURL}/price?origin=${servicesss}&destination=${servicesss}`);
        const data = await price.json();
        const ongkirList = document.getElementById('id tempat keluar harga');
        ongkirList.innerHTML = '';

        data.forEach(ongkirList => {
            const listItem = document.createElement('li');
            listItem.textContent = `${price}`;
            ongkirList.appendChild(listItem);
          });

    } catch (error) {
        console.error(error)
    }
}

fetchOngkir()