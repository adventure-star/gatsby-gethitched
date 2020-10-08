// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      width: {
        '108' : '108px',
        '124' : '124px',
        '306' : '306px'
      },
      textColor: {
        'grey': '#B4B4B4',
        'grey-1': '#707070',
        'red': '#D84664',
        'red-1': '#DA4764',
        'yellow-1' : '#727272',
        'yellow-2': '#CBC69B',
        'grey-2': '#919191',
        'blue-1': '#9AB8B9',
        'grey-3': '#a7a7a7'
      },
      backgroundColor: {
        'grey': '#E0E0E0',
        'grey-1': '#F2F2F2',
        'green': '#53B48B',
        'whitegray': '#f8f8f8',
        'yellow-1':'#f7f4d9',
        'yellow-2':'#cbc69b',
        'yellow-3': '#bfb882',
        'blue-1':'#9AB8B9',
        'yellow-4': "#EFEFE5"
      },
      borderColor: {
        'whiteyellow' : '#727272',
        'yellow-1': '#e5e5e2',
        'yellow-2':'#BFB882',
        'yellow-3': '#ebebeb'
      },
      borderWidth: {
        '7': '7px'
      },
      padding : {
        34 : '34px',
        39 : '39px',
        44 : '44px',
        53 : '53px',
        59 : '59px',
        60 : '60px',
        68 : '68px',
        100 : '100px',
        108 : '108px',
        118 : '118px',
        135 : '135px',
        149 : '149px',
        222: '222px',
      },
      maxWidth: {
        '262' : '262px',
        '478' : '478px',
        '614' : '614px',
        '720' : '720px'
      },
      minWidth: {
        '153' : '153px',
        '174' : '174px'
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
