const baseurl = "https://t.mahs.me/api/";

interface ShortenResponse {
    code: string;
}

export async function urlShortner(url: string, key?: string): Promise<string> {
    const data = {
        url,
        key
    }
    const response = await fetch(baseurl + "shorten", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    if (!response.ok) {
        // throw new Error(`HTTP error! status: ${response.status}`);
        // no errors only console error and exit
        console.error("Error shortening URL:", response.status, await response.text());
        return "Error shortening URL";
    }
    let responseData = await response.json() as ShortenResponse;
    return "https://t.mahs.me/u/" + responseData.code;
}

export async function storeText(text: string, key: string): Promise<string> {
    const data = {
        text,
        key
    }
    const response = await fetch(baseurl + "text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    if (!response.ok) {
        //no errors only console error and exit
        console.error("Error storing text:", response.status, await response.text());

        // throw new Error(`HTTP error! status: ${response.status}`)
        return "Error storing text";
    }
    return "Stored successfully";
}

export async function getText(key: string): Promise<string> {
    console.log("Fetching text for key:", encodeURIComponent(key));
    const response = await fetch(baseurl + "text?key=" + encodeURIComponent(key), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    })
    if (!response.ok) {
        console.error("Response not ok:", response.status, await response.text());
        return "No text found for the provided key.";
    }
    let responseData = await response.json() as { text: string };
    return responseData.text;
}

// async function customFetch(url:string,body:string)