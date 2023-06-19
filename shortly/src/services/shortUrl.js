// shortenApi.js

export const shortUrl = async (originalURL) => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${originalURL}`);
      const data = await response.json();
    //   console.log(data.result.short_link)
      if(data && data.result && data.result.short_link){
        const url = data.result.short_link;
        return(url);  
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  