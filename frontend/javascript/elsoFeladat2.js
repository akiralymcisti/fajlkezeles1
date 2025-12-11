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

const osszeg = async () => {
    try {
        const response = await fetchGet('api/osszeg');
        const eredmeny = response.result;

        const osszegDisplay = document.getElementById("osszegDisplay");
        osszegDisplay.textContent = "" + eredmeny;
    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}

const atlag = async () => {
    try {
        const response = await fetchGet('api/atlag');
        const eredmeny = response.result;
        const atlagDisplay = document.getElementById("atlagDisplay");
        atlagDisplay.textContent = "" + eredmeny;
    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}

const min = async () => {
    try {
        const response = await fetchGet('api/min');
        const eredmeny = response.result;
        const minDisplay = document.getElementById("minDisplay");
        minDisplay.textContent = "" + eredmeny;
    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}

const max = async () => {
    try {
        const response = await fetchGet('api/max');
        const eredmeny = response.result;
        const maxDisplay = document.getElementById("maxDisplay");
        maxDisplay.textContent = "" + eredmeny;
    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}