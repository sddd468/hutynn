export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/a2ecfeaa-32e5-4b3a-87a3-b943e91393a3-tr')) {
        url.hostname="sftew46t.herokuapp.com";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  };