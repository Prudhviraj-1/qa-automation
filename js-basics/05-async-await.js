function getData(){
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove("Data received");
        }, 2000);
    });
}
async function fetchData() {
    let result = await getData();
    console.log(result);
}
fetchData();