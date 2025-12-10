document.addEventListener('DOMContentLoaded', () => {
    csinaldASzart();
});

const fetchGet = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error("Get hiba: " + response.statustext + " státusz: " + response.status)
        }
        return await response.json();
    }
    catch (error)
    {
        throw new Error("Get hiba: " + error.message)
    }
};

// 1. Feladat
const csinaldASzart = async () => {
    try {
        const response = await fetchGet('/api/readfile');
        const tasks = response.content;

        const eredmeny = document.getElementById("eredmeny");
        eredmeny.textContent = "Eredmény: " + tasks;
    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}

