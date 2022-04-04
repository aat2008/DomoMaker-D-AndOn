const sendPost = async (url, data, handler) => {
    const response = await fetch(url, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON. stringify(data),
    });

    const result = await response.json();
    document.getElementById('domoMessage').classList.add('hidden');

    if(result.error) {
        handleError(result.error)
    }

    if(result.redirect) {
        window.location = result.redirect;
    }

    if(handler) {
        handler(result);
    }
};

const hideError = () => {
    document.getElementById('domoMessage').classList.add('hidden');
};

module.exports = {
    handleError,
    sendPost,
    hideError,
}