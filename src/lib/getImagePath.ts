const getImagePath = (imagePath?: string, fullSize: boolean = false): string => {
    if (!imagePath) {
      return 'https://links.papareact.com/o8z';
    }
  
    const size = fullSize ? 'original' : 'w500';
    return `https://image.tmdb.org/t/p/${size}/${imagePath}`;
  };
  
  export default getImagePath;