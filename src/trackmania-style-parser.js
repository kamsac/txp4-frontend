import MPStyle from 'zocka-maniaplanet-formatter';

const allUrlTags = ['l', 'h', 'p'];

function trackmaniaStyleParser(input) {
  return MPStyle(
    input,
    {
      useClasses: false,
      stripTags: [...allUrlTags],
    },
  );
}

export default trackmaniaStyleParser;
