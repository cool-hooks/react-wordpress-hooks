const colors = {
  primary: '#0073aa',
  header: {
    button: {
      bg: '#0073aa',
    },
  },
  sidebar: {
    navLinkActive: '#0073aa',
  },
};

export default {
  title: 'React WordPress Hooks',
  themeConfig: {
    colors: {
      ...colors,
      modes: {
        dark: colors,
      },
    },
  },
  files: 'docs/*.md',
};
