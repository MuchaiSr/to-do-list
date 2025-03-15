(() => {
    const apiUrl = "https://randomuser.me/api/";

    async function fetchData() {
        try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = `${user.email}`;
        const location = `${user.location.country}`

        console.log(name);
        console.log(email);
        console.log(location);
        } catch (error) {
            console.log("Something went wrong!");
        }
    }
    fetchData();
    })();