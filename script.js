const form = document.getElementById('auction-form');
const priceInput = document.getElementById('price');
const buyNowPriceInput = document.getElementById('buy-now-price');
const photosInput = document.getElementById('photos');
const imagePreview = document.getElementById('image-preview');
const descriptionTextarea = document.getElementById('description');
const snippetsSelect = document.getElementById('text-snippets');
const insertSnippetButton = document.getElementById('insert-snippet');

const textSnippets = [
    { title: 'Zustand', text: 'Der Artikel ist in einem guten, gebrauchten Zustand mit leichten Gebrauchsspuren.' },
    { title: 'Lieferumfang', text: 'Geliefert wird nur das, was auf den Fotos zu sehen ist.' },
    { title: 'Versand', text: 'Der Versand erfolgt versichert per DHL. Die Sendungsnummer wird nach dem Versand mitgeteilt.' },
    { title: 'Privatverkauf', text: 'Dies ist ein Privatverkauf. Keine Garantie, Gewährleistung oder Rücknahme.' }
];

textSnippets.forEach(snippet => {
    const option = document.createElement('option');
    option.value = snippet.text;
    option.textContent = snippet.title;
    snippetsSelect.appendChild(option);
});

insertSnippetButton.addEventListener('click', () => {
    const selectedSnippet = snippetsSelect.value;
    const currentDescription = descriptionTextarea.value;
    const selectionStart = descriptionTextarea.selectionStart;
    const selectionEnd = descriptionTextarea.selectionEnd;

    const newDescription = 
        currentDescription.substring(0, selectionStart) + 
        selectedSnippet + 
        currentDescription.substring(selectionEnd);

    descriptionTextarea.value = newDescription;
    descriptionTextarea.focus();
});

priceInput.addEventListener('input', () => {
    const price = parseFloat(priceInput.value);
    if (!isNaN(price)) {
        const buyNowPrice = (price * 1.4).toFixed(2);
        buyNowPriceInput.value = buyNowPrice;
    } else {
        buyNowPriceInput.value = '';
    }
});

photosInput.addEventListener('change', () => {
    imagePreview.innerHTML = ''; // Clear previous previews
    const files = photosInput.files;
    for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const buyNowPrice = document.getElementById('buy-now-price').value;
    const duration = document.getElementById('duration').value;
    const photos = photosInput.files;

    // Hier würde die Logik zur Auktionserstellung auf eBay folgen.
    // Für diesen POC geben wir die Daten nur in der Konsole aus.
    console.log('Auktion generiert:');
    console.log('Titel:', title);
    console.log('Beschreibung:', description);
    console.log('Startpreis:', price);
    console.log('Sofort-Kaufen Preis:', buyNowPrice);
    console.log('Dauer:', duration);
    console.log('Fotos:', photos);

    alert('Auktion wurde generiert! (Siehe Konsole für Details)');
    form.reset();
    imagePreview.innerHTML = '';
});