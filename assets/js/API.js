// Bagian BE dan proses menyambungkan ke FE
const baseURL = "https://angry-gray-outerwear.cyclic.app/api"

// Bagian untuk menjalankan fungsi mengecek resi 
async function fetchShipmentById() {
    const shipmentId = document.getElementById('shipmentId').value;
    try {
        const response = await fetch(`${baseURL}/shipment/${shipmentId}`);
        const shipment = await response.json();
        const shipmentStatus = document.getElementById('resultContainer');
        shipmentStatus.innerHTML = `<p id="status">status: ${shipment.data.status}</p>`;
    } catch (error) {
        console.error('error fetching shipment:', error);
    }
}

// Bagian untuk menjalankan fungsi memberikan saran
async function submitSuggestion() {
    const review = document.getElementById('suggestion').value;

    try {
        const response = await fetch(`${baseURL}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        });

        if (!response.ok) {
            throw new Error(`Gagal mengirim saran. Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            // Tangani respons yang tidak sesuai dengan JSON
            throw new Error('Respons bukan JSON yang valid');
        }

        const data = await response.json();

        // Lakukan sesuatu dengan data jika diperlukan
        console.log('Saran terkirim dengan sukses:', data);

    } catch (error) {
        console.error("Error mengirim saran:", error);
    }
}

// Bagian untuk menjalankan fungsi mengecek ongkir
async function fetchOngkir() {
    const origin = document.getElementById('origin-input').value;
    const destination = document.getElementById('destination-input').value;
    try {
        const response = await fetch(`${baseURL}/price?origin=${origin}&destination=${destination}`);
        const ongkir = await response.json();
        const price = document.getElementById('resultPrice');
        price.innerHTML = `<p id="price">price: ${ongkir.price}</p>`
        //   console.log(data);

    } catch (error) {
        console.error(error)
    }
}

