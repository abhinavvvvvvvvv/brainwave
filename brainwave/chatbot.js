async function createChatSession(JgsPqqHrhAJIa0vCYxmO0a9teWZpGADK, externalUserId) {
    try {
        const response = await fetch('https://api.on-demand.io/chat/v1/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': JgsPqqHrhAJIa0vCYxmO0a9teWZpGADK
            },
            body: JSON.stringify({
                pluginIds: [],  // Add any required plugins if needed
                externalUserId: externalUserId
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to create session: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data.id; // Extract session ID

    } catch (error) {
        console.error('Error creating chat session:', error);
        throw error;
    }
}

// Function to submit a query using the session ID
async function submitQuery(apiKey, sessionId, query) {
    try {
        const response = await fetch(`https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body: JSON.stringify({
                endpointId: 'predefined-openai-gpt4o',  // Replace with your specific endpoint if needed
                query: query,
                pluginIds: ['plugin-1712327325', 'plugin-1713962163'],
                responseMode: 'sync'  // Set to 'async' if you want to handle responses asynchronously
            })
        });

        if (!response.ok) {
            throw new Error(`Failed to submit query: ${response.statusText}`);
        }

        const data = await response.json();
        return data;  // Return the entire response object

    } catch (error) {
        console.error('Error submitting query:', error);
        throw error;
    }
}

// Example usage in an async function
(async () => {
    const apiKey = '<replace_api_key>';             // Replace with your actual API key
    const externalUserId = '<replace_external_user_id>'; // Replace with your user ID or unique identifier
    const query = 'Your query here';

    try {
        console.log('Creating session...');
        const sessionId = await createChatSession(apiKey, externalUserId);
        console.log('Session created with ID:', sessionId);

        console.log('Submitting query...');
        const response = await submitQuery(apiKey, sessionId, query);
        console.log('Query response:', response);

    } catch (error) {
        console.error('Error during session creation or query submission:', error);
    }
})();