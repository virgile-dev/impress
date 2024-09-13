const dsfrColors = {
  'primary-100': '#f5f5fe',
  'primary-150': '#F4F4FD',
  'primary-200': '#ececfe',
  'primary-300': '#e3e3fd',
  'primary-400': '#cacafb',
  'primary-500': '#6a6af4',
  'primary-600': '#000091',
  'primary-700': '#272747',
  'primary-800': '#21213f',
  'primary-900': '#1c1a36',
  'secondary-100': '#fee9ea',
  'secondary-200': '#fedfdf',
  'secondary-300': '#fdbfbf',
  'secondary-400': '#e1020f',
  'secondary-500': '#c91a1f',
  'secondary-600': '#5e2b2b',
  'secondary-700': '#3b2424',
  'secondary-800': '#341f1f',
  'secondary-900': '#2b1919',
  'greyscale-000': '#ffffff',
  'greyscale-100': '#eeeeee',
  'greyscale-200': '#e5e5e5',
  'greyscale-300': '#e1e1e1',
  'greyscale-400': '#dddddd',
  'greyscale-500': '#cecece',
  'greyscale-600': '#7b7b7b',
  'greyscale-700': '#666666',
  'greyscale-800': '#2a2a2a',
  'greyscale-900': '#1e1e1e',
  'success-text': '#1f8d49',
  'success-100': '#dffee6',
  'success-200': '#b8fec9',
  'success-300': '#88fdaa',
  'success-400': '#3bea7e',
  'success-500': '#1f8d49',
  'success-600': '#18753c',
  'success-700': '#204129',
  'success-800': '#1e2e22',
  'success-900': '#19281d',
  'info-text': '#0078f3',
  'info-100': '#f4f6ff',
  'info-200': '#e8edff',
  'info-300': '#dde5ff',
  'info-400': '#bdcdff',
  'info-500': '#0078f3',
  'info-600': '#0063cb',
  'info-700': '#f4f6ff',
  'info-800': '#222a3f',
  'info-900': '#1d2437',
  'warning-text': '#d64d00',
  'warning-100': '#fff4f3',
  'warning-200': '#ffe9e6',
  'warning-300': '#ffded9',
  'warning-400': '#ffbeb4',
  'warning-500': '#d64d00',
  'warning-600': '#b34000',
  'warning-700': '#5e2c21',
  'warning-800': '#3e241e',
  'warning-900': '#361e19',
  'danger-text': '#e1000f',
  'danger-100': '#fef4f4',
  'danger-200': '#fee9e9',
  'danger-300': '#fddede',
  'danger-400': '#fcbfbf',
  'danger-500': '#e1000f',
  'danger-600': '#c9191e',
  'danger-700': '#642727',
  'danger-800': '#412121',
  'danger-900': '#3a1c1c',
};
const dsfr = {
  theme: {
    colors: dsfrColors,
    font: {
      families: {
        accent: 'Marianne',
        base: 'Marianne',
      },
    },
    logo: {
      src: '/assets/logo-gouv.svg',
      widthHeader: '110px',
      widthFooter: '220px',
      alt: 'Gouvernement Logo',
    },
  },
  components: {
    alert: {
      'border-radius': '0',
      'background-color': 'var(--c--theme--colors--greyscale-000)',
    },
    button: {
      'medium-height': '48px',
      'border-radius': '0',
      primary: {
        background: {
          color: 'var(--c--theme--colors--primary-600)',
          'color-hover': '#1212ff',
          'color-active': '#2323ff',
        },
        color: '#ffffff',
        'color-hover': '#ffffff',
        'color-active': '#ffffff',
      },
      'primary-text': {
        background: {
          'color-hover': 'var(--c--theme--colors--primary-100)',
          'color-active': 'var(--c--theme--colors--primary-100)',
        },
        'color-hover': 'var(--c--theme--colors--primary-text)',
      },
      secondary: {
        background: {
          'color-hover': '#F6F6F6',
          'color-active': '#EDEDED',
        },
        border: {
          color: 'var(--c--theme--colors--primary-600)',
          'color-hover': 'var(--c--theme--colors--primary-600)',
        },
        color: 'var(--c--theme--colors--primary-600)',
      },
      'tertiary-text': {
        background: {
          'color-hover': 'var(--c--theme--colors--primary-100)',
        },
        'color-hover': 'var(--c--theme--colors--primary-text)',
      },
    },
    card: {
      'box-shadow': '2px 2px 5px var(--c--theme--colors--greyscale-300)',
      'title-color': 'var(--c--theme--colors--primary-600)',
    },
    datagrid: {
      header: {
        color: 'var(--c--theme--colors--primary-600)',
        size: 'var(--c--theme--font--sizes--s)',
      },
      body: {
        'background-color': 'transparent',
        'background-color-hover': '#F4F4FD',
      },
      pagination: {
        'background-color': 'transparent',
        'background-color-active': 'var(--c--theme--colors--primary-300)',
      },
    },
    'forms-datepicker': {
      'border-radius': '0',
    },
    'forms-fileuploader': {
      'border-radius': '0',
    },
    'forms-input': {
      'background-color': 'var(--c--theme--colors--greyscale-100)',
      'border-radius': '0',
      'border-color': 'var(--c--theme--colors--greyscale-900)',
      'border-width': '0 0 2px 0',
      'border-color--focus': '#0974F6',
      'border-color--hover': 'var(--c--theme--colors--greyscale-900)',
      'label-color--focus':
        'var(--c--components--forms-labelledbox--label-color--small)',
    },
    'forms-textarea': {
      'background-color': 'var(--c--theme--colors--greyscale-100)',
      'border-radius': '0',
      'border-color': 'var(--c--theme--colors--greyscale-900)',
      'border-width': '0 0 2px 0',
      'border-color--focus': '#0974F6',
      'border-color--hover': 'var(--c--theme--colors--greyscale-900)',
      'label-color--focus':
        'var(--c--components--forms-labelledbox--label-color--small)',
    },
    'forms-select': {
      'background-color': 'var(--c--theme--colors--greyscale-100)',
      'border-radius': '0',
      'border-color': 'var(--c--theme--colors--greyscale-900)',
      'border-width': '0 0 2px 0',
      'border-color--focus': '#0974F6',
      'border-color--hover': 'var(--c--theme--colors--greyscale-900)',
      'label-color--focus':
        'var(--c--components--forms-labelledbox--label-color--big)',
    },
    'forms-switch': {
      'accent-color': '#2323ff',
    },
    'forms-checkbox': {
      'accent-color': '#2323ff',
    },
  },
};

const dsfrColorsDark = {
  'primary-100': '#1a1a2e',
  'primary-150': '#21213f',
  'primary-200': '#272747',
  'primary-300': '#3b3b61',
  'primary-400': '#535380',
  'primary-500': '#6a6af4', // même teinte pour conserver une touche de couleur vive
  'primary-600': '#8b8bf9', // légèrement plus claire pour le mode sombre
  'primary-700': '#a1a1f5',
  'primary-800': '#c1c1ff',
  'primary-900': '#ececfe',

  'secondary-100': '#2b1919',
  'secondary-200': '#341f1f',
  'secondary-300': '#3b2424',
  'secondary-400': '#5e2b2b',
  'secondary-500': '#c91a1f', // teinte conservée pour son intensité
  'secondary-600': '#e6454a', // teinte plus vive en mode sombre
  'secondary-700': '#f06062',
  'secondary-800': '#fca7a9',
  'secondary-900': '#fee9ea',

  'greyscale-000': '#161616',
  'greyscale-100': '#1e1e1e',
  'greyscale-200': '#242424',
  'greyscale-300': '#2a2a2a',
  'greyscale-400': '#2f2f2f',
  'greyscale-500': '#353535',
  'greyscale-600': '#3a3a3a',
  'greyscale-700': '#929292',
  'greyscale-800': '#7b7b7b',
  'greyscale-900': '#eeeeee',

  'success-text': '#88fdaa', // rendre plus lumineux en mode sombre
  'success-100': '#1e2e22',
  'success-200': '#204129',
  'success-300': '#18753c',
  'success-400': '#1f8d49', // un peu plus vive
  'success-500': '#3bea7e',
  'success-600': '#66f2a1',
  'success-700': '#88fdaa',
  'success-800': '#b8fec9',
  'success-900': '#dffee6',

  'info-text': '#0078f3',
  'info-100': '#1d2437',
  'info-200': '#222a3f',
  'info-300': '#293145',
  'info-400': '#3b4c6b',
  'info-500': '#0078f3', // teinte inchangée
  'info-600': '#3391ff', // teinte plus claire pour le mode sombre
  'info-700': '#66aaff',
  'info-800': '#99ccff',
  'info-900': '#cce5ff',

  'warning-text': '#ffbeb4', // couleur plus douce pour être lisible
  'warning-100': '#361e19',
  'warning-200': '#3e241e',
  'warning-300': '#5e2c21',
  'warning-400': '#b34000', // toujours intense
  'warning-500': '#d64d00',
  'warning-600': '#ff6a34',
  'warning-700': '#ff8b66',
  'warning-800': '#ffb299',
  'warning-900': '#ffe9e6',

  'danger-text': '#fddede',
  'danger-100': '#3a1c1c',
  'danger-200': '#412121',
  'danger-300': '#642727',
  'danger-400': '#c9191e', // un peu plus lumineux
  'danger-500': '#e1000f',
  'danger-600': '#f5434a',
  'danger-700': '#f76f71',
  'danger-800': '#fdbfbf',
  'danger-900': '#fee9e9',
};

const config = {
  themes: {
    default: {
      theme: {
        font: {
          sizes: {
            ml: '0.938rem',
            xl: '1.50rem',
            t: '0.6875rem',
            s: '0.75rem',
            h1: '2.2rem',
            h2: '1.7rem',
            h3: '1.37rem',
            h4: '1.15rem',
            h5: '1rem',
            h6: '0.87rem',
          },
        },
        spacings: {
          '0': '0',
          none: '0',
        },
      },
      components: {
        card: {
          'box-shadow': 'none',
          'title-color': 'var(--c--theme--colors--primary-600)',
        },
        pill: {
          background: 'var(--c--theme--colors--primary-600)',
          color: 'var(--c--theme--colors--greyscale-000)',
          weight: 'bold',
          radius: '3px',
          'padding-x': '4px',
          'padding-y': '0',
        },
        strip: {
          color: 'var(--c--theme--colors--danger-500)',
        },
        grid: {
          color: 'var(--c--theme--colors--danger-900)',
        },
        header: {
          background: 'var(--c--theme--colors--greyscale-000)',
          'title-color': 'var(--c--theme--colors--primary-800)',
        },
        footer: {
          background: 'var(--c--theme--colors--greyscale-000)',
        },
        main: {
          background: 'var(--c--theme--colors--greyscale-100)',
        },
        languagePicker: {
          image: '/assets/icon-language.svg',
        },
      },
    },
    dsfr: dsfr,
    dsfrDark: {
      ...dsfr,
      theme: {
        ...dsfr.theme,
        colors: {
          ...dsfr.theme.colors,
          ...dsfrColorsDark,
        },
        logo: {
          ...dsfr.theme.logo,
          src: '/assets/logo-gouv-dark.svg',
        },
      },
      components: {
        ...dsfr.components,
        button: {
          ...dsfr.components.button,
          primary: {
            background: {
              color: 'var(--c--theme--colors--primary-600)',
              'color-hover': '#1212ff',
              'color-active': '#2323ff',
            },
            color: 'var(--c--theme--colors--greyscale-000)',
            'color-hover': '#ffffff',
            'color-active': '#ffffff',
          },
        },
        card: {
          ...dsfr.components.card,
          'title-color': 'var(--c--theme--colors--primary-900)',
        },
        header: {
          background: 'var(--c--theme--colors--greyscale-100)',
          'title-color': 'var(--c--theme--colors--greyscale-900)',
        },
        footer: {
          background: 'var(--c--theme--colors--greyscale-100)',
        },
        main: {
          background: 'var(--c--theme--colors--greyscale-000)',
        },
        languagePicker: {
          image: '/assets/icon-language-dark.svg',
        },
      },
    },
    openDesk: {
      theme: {
        colors: {
          'primary-100': '#F7F5FF',
          'primary-200': '#ECE7FE',
          'primary-300': '#DCD2FE',
          'primary-400': '#C8B9FD',
          'primary-500': '#8E75FA',
          'primary-600': '#7051FA',
          'primary-700': '#571EFA',
          'primary-800': '#4519C2',
          'primary-900': '#341291',
          'secondary-100': '#EDFDFB',
          'secondary-200': '#BFF9F2',
          'secondary-300': '#71EFE1',
          'secondary-400': '#00E6CC',
          'secondary-500': '#00A896',
          'secondary-600': '#008A7B',
          'secondary-700': '#006C60',
          'secondary-800': '#00564D',
          'secondary-900': '#004039',
          'greyscale-000': '#ffffff',
          'greyscale-100': '#EEEFF2',
          'greyscale-200': '#D3D7DE',
          'greyscale-300': '#B6BCC8',
          'greyscale-400': '#7C879C',
          'greyscale-500': '#637089',
          'greyscale-600': '#4D5B79',
          'greyscale-700': '#364768',
          'greyscale-800': '#203257',
          'greyscale-900': '#1e1e1e',
        },
        font: {
          families: {
            accent: 'Open Sans',
            base: 'Open Sans',
          },
        },
        logo: {
          src: '/assets/logo-opendesk.svg',
          widthHeader: '110px',
          widthFooter: '220px',
          alt: 'Gouvernement Logo',
        },
      },
      components: {
        alert: {
          'border-radius': '0',
          'background-color': 'var(--c--theme--colors--greyscale-000)',
        },
        button: {
          'medium-height': '48px',
          'border-radius': '8px',
          'border-radius--active': '8px',
          'font-weight': '600',
          primary: {
            background: {
              color: 'var(--c--theme--colors--primary-700)',
              'color-hover': 'var(--c--theme--colors--primary-900)',
              'color-active': 'var(--c--theme--colors--primary-900)',
            },
            color: '#ffffff',
            'color-hover': '#ffffff',
            'color-active': '#ffffff',
          },
          'primary-text': {
            background: {
              'color-hover': 'var(--c--theme--colors--primary-100)',
              'color-active': 'var(--c--theme--colors--primary-100)',
            },
            'color-hover': 'var(--c--theme--colors--primary-text)',
          },
          secondary: {
            background: {
              'color-hover': '#F6F6F6',
              'color-active': '#EDEDED',
            },
            border: {
              color: 'var(--c--theme--colors--primary-600)',
              'color-hover': 'var(--c--theme--colors--primary-600)',
            },
            color: 'var(--c--theme--colors--primary-600)',
          },
          'tertiary-text': {
            background: {
              'color-hover': 'var(--c--theme--colors--primary-100)',
            },
            'color-hover': 'var(--c--theme--colors--primary-text)',
          },
        },
        card: {
          'title-color': 'var(--c--theme--colors--greyscale-900)',
        },
        datagrid: {
          header: {
            color: 'var(--c--theme--colors--greyscale-900)',
            size: 'var(--c--theme--font--sizes--s)',
          },
          body: {
            'background-color': 'transparent',
            'background-color-hover': '#F4F4FD',
          },
        },
        pill: {
          background: 'var(--c--theme--colors--primary-300)',
          color: 'var(--c--theme--colors--greyscale-900)',
          weight: '500',
          radius: '8px',
          'padding-x': '16px',
          'padding-y': '2px',
        },
        strip: {
          color: 'var(--c--theme--colors--primary-300)',
        },
        grid: {
          color: 'var(--c--theme--colors--greyscale-500)',
        },
      },
    },
  },
};

export default config;
