export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "it-immo.p-patrick.workers.dev") {
      url.hostname = "it-immo.com";
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
