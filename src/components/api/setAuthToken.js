export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    };

    fetch('https://bandaid-dental-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            localStorage.setItem('bandaid-token', data.token);
        });
};