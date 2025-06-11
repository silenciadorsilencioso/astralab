export async function post({ request }) {
    const { email } = await request.json();
    try {
        const response = await fetch('https://api.beehiiv.com/v1/subscription', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer YOUR_API_KEY`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });
    if (!response.ok) {
        return new Response('Error al suscribir', { status: 500 });
    }
        return new Response('Suscripción exitosa', { status: 200 });
    } catch (error) {
        return new Response('Error en el servidor', { status: 500 });
    }
}