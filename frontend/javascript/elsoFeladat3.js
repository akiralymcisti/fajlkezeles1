document.addEventListener('DOMContentLoaded', () => {
    getAllStatus();
    document.querySelector('select').addEventListener('change', getSpecificStatus());
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
        const select = document.querySelector('select');
        select.textContent = '';
        
        const response = await getFetch('/api/getallstat');
        const eredmeny = response;
        console.log(eredmeny.result.telepules);
        for (const i of eredmeny.result.telepules)
        {   
            const option = document.createElement('option');
            option.textContent = i.megnevezes;
            option.value = i.telepaz;
            select.appendChild(option);
        }
    }
    catch (error)
    {
        console.error("Hiba: ", error);
    }
}

const getSpecificStatus = async () => {
    try {
        const select = document.querySelector('select');
        const telepulesAzonosito = select.value;
        const telepulesNev = select.textContent;

        const response = await getFetch('/api/getallstat')
        for (const i of response.result.telepules)
        {
            if (response.result.telepules == telepulesAzonosito)
            {
                const array = [telepaz, megnevezes, rang, kisterseg, terulet, nepesseg, lakas];
                const table = document.querySelector('table');
                
                for (const j in array)
                {
                    tr = document.createElement("tr");
                    tr.textContent = j;
                    table.appendChild(tr);

                    
                }
            }
        }

    }
    catch (error)
    {
        console.error("Hiba ", error);
    }
}