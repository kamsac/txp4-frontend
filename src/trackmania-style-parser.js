import MPStyle from 'zocka-maniaplanet-formatter';

const allUrlTags = ['l', 'h', 'p'];

function trackmaniaStyleParser(input) {
  if (!input) {
    return '';
  }
  return MPStyle(
    input,
    {
      useClasses: false,
      stripTags: [...allUrlTags],
    },
  );
}

export default trackmaniaStyleParser;
