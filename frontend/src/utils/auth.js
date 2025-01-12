export async function login({ email, password }) {
    const response = await fetch(`http://localhost:5000/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    console.log(email,password)

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
}