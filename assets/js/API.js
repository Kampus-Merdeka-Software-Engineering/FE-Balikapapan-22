// Bagian BE 
const baseURL = "be-balikpapan-22-production.up.railway.app"

async function fetchShipmentById() {
    try {
        const status = await fetch(`${baseURL}/shipment`);
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

// fetchShipments();

