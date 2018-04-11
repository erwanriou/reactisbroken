const redirectURI = "http://react-isbroken.surge.sh/"
const client_id = "b7236dfe4cc34c148c64fe214a2d57a8";


let accessToken;

const Insta = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    if (accessTokenMatch) {
      accessToken = accessTokenMatch[1];
      return accessToken;
    } else {
      const Url = `https://api.instagram.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirectURI}&response_type=token`
      window.location = Url;
    }
  },
  async display() {
    if (!accessToken) {
      this.getAccessToken();
    }
    try {
      let response = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`, {
        method: 'GET'
      });
      if (response.ok) {
        console.log(response);
        let jsonResponse = await response.json();
        let medias = jsonResponse.data.map(media => ({
          id: media.id,
          image: media.images.standard_resolution.url,
          likes: media.likes.count,
          tags: media.tags
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
