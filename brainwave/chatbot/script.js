const apiKey = 'JgsPqqHrhAJIa0vCYxmO0a9teWZpGADK';
let mediaRecorder;
let audioChunks = [];
let isRecording = false;
const externalUserId = generateUUID();

document.getElementById('submitQuery').addEventListener('click', handleSubmit);
document.getElementById('newQuery').addEventListener('click', resetQuery);
document.getElementById('recordButton').addEventListener('click', toggleRecording);
document.getElementById('queryInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') handleSubmit();
});

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

async function createChatSession(apiKey, externalUserId) {
    try {
        const response = await fetch('https://api.on-demand.io/chat/v1/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body: JSON.stringify({
                pluginIds: [],
                externalUserId: externalUserId
            })
        });
        const data = await response.json();
        return data.data.id;
    } catch (error) {
        console.error('Error creating chat session:', error);
    }
}

async function submitQuery(apiKey, sessionId, query) {
    try {
        const response = await fetch(`https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body: JSON.stringify({
                endpointId: 'predefined-openai-gpt4o',
                query: query,
                pluginIds: ['plugin-1712327325', 'plugin-1713962163'],
                responseMode: 'sync'
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting query:', error);
    }
}

async function handleSubmit() {
    const query = document.getElementById('queryInput').value;
    if (!query) return alert("Please enter a query.");

    document.getElementById('responseDisplay').innerText = "Creating session...";
    const sessionId = await createChatSession(apiKey, externalUserId);
    document.getElementById('responseDisplay').innerText = "Session created. Submitting query...";
    
    const response = await submitQuery(apiKey, sessionId, query);
    const answerText = response.data.answer;
    document.getElementById('responseDisplay').innerHTML = `<strong>Answer:</strong> ${answerText}`;
    
    document.getElementById('submitQuery').style.display = 'none';
    document.getElementById('newQuery').style.display = 'block';
}

function resetQuery() {
    document.getElementById('queryInput').value = '';
    document.getElementById('responseDisplay').innerHTML = '';
    document.getElementById('submitQuery').style.display = 'block';
    document.getElementById('newQuery').style.display = 'none';
}

async function toggleRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Your browser doesn't support audio recording.");
        return;
    }

    if (!isRecording) {
        isRecording = true;
        document.getElementById('recordButton').innerText = "Stop Recording";
        
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        
        mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const convertedText = await sendAudioForTranscription(audioUrl);
            document.getElementById('queryInput').value = convertedText || "";
        };
        
        mediaRecorder.start();
    } else {
        isRecording = false;
        document.getElementById('recordButton').innerText = "Start Recording";
        mediaRecorder.stop();
    }
}

async function sendAudioForTranscription(audioUrl) {
    try {
        const response = await fetch('https://api.on-demand.io/services/v1/public/service/execute/speech_to_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body: JSON.stringify({ audioUrl: audioUrl })
        });
        
        const data = await response.json();
        if (data.message === "Service executed successfully") {
            return data.data.text;
        } else {
            alert("Failed to transcribe audio. Please try again.");
            return "";
        }
    } catch (error) {
        console.error('Error transcribing audio:', error);
        alert("An error occurred while processing the audio.");
        return "";
    }
}
