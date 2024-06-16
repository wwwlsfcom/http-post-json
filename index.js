export async function postJson(url,data){
    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
    });
    return await fetch(url, {
        method: "POST",
        body: blob,
    }).then(res => res.json());
}