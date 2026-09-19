exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let text = "";
  try {
    text = JSON.parse(event.body).text || "";
  } catch (e) {
    return { statusCode: 400, body: "Bad request" };
  }

  if (!text) {
    return { statusCode: 400, body: "No text" };
  }

  const key = process.env.GOOGLE_TTS_KEY;
  if (!key) {
    return { statusCode: 500, body: "Missing key" };
  }

  const url =
    "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + key;

  const body = {
    input: { text },
    voice: {
      languageCode: "en-US",
      name: "en-US-Chirp3-HD-Aoede"
    },
    audioConfig: { audioEncoding: "MP3" }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.text();
    return { statusCode: res.status, body: err };
  }

  const data = await res.json();
  return {
    statusCode: 200,
    headers: { "Content-Type": "audio/mpeg" },
    body: data.audioContent,
    isBase64Encoded: true
  };
};
