document.addEventListener('DOMConentLoaded', () => {
    csinaldASzart2();
});

// 2. Feladat
const fetchGet = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error("Hiba történt: " + response.statusText + " | " + response.status)
        }
        return await response.json();
    }
    catch (error)
    {
        throw new Error("Get hiba: " + error.message);
    }
}

const csinaldASzart2 = async () => {
    try {
        const response = await fetchGet('/api/beolvasas');
        const tasks = response.content;

        const numDisplay = document.getElementById("numDisplay");
        numDisplay.textContent = "" + tasks;
    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}