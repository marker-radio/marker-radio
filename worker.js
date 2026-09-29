export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/.netlify/functions/speak") {
      return speak(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

async function speak(request, env) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let text = "";
  try {
    text = (await request.json()).text || "";
  } catch (e) {
    return new Response("Bad request", { status: 400 });
  }

  if (!text) {
    return new Response("No text", { status: 400 });
  }

  const key = env.GOOGLE_TTS_KEY;
  if (!key) {
    return new Response("Missing key", { status: 500 });
  }

  const url =
    "https://texttospeech.googleapis.com/v1/text:synthesize?key=" + key;

  const body = {
    input: { text },
    voice: {
      languageCode: "en-US",
      name: "en-US-Chirp3-HD-Aoede",
    },
    audioConfig: { audioEncoding: "MP3" },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    return new Response(err, { status: res.status });
  }

  const data = await res.json();
  const bytes = Uint8Array.from(atob(data.audioContent), (c) => c.charCodeAt(0));
  return new Response(bytes, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "no-store",
    },
  });
}


