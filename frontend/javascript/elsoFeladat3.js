document.addEventListener('DOMContentLoaded', () => {

});

const getFetch = async (url) => {
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

const getAllStatus = async () => {
    try {

    }
    catch (error)
    {
        console.error("Hiba: ", error)
    }
}