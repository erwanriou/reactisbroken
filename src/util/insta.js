const redirectURI = "http://localhost:3000/"
const client_id = "b7236dfe4cc34c148c64fe214a2d57a8";


let accessToken;

const Insta = {
  getAccessToken() {
    //check if token exist
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    //token ref
    return fetch(`https://api.instagram.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirectURI}&response_type=token`, {
      method: 'POST'
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },
  async display() {
    if (!accessToken) {
      this.getAccessToken();
    }
    try {
      let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      if (response.ok) {
        let jsonResponse = await response.json();
        let medias = jsonResponse.medias.data.map(media => ({
          id: media.data.id,
          image: media.data.images.standard_resolution.url
        }));
        return medias;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
}

export default Insta;
