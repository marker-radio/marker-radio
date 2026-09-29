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
