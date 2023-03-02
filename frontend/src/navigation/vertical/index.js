// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CalculatorIcon from 'mdi-material-ui/Calculator'
import FunctionsIcon from 'mdi-material-ui/Function'
import HospitalIcon from 'mdi-material-ui/Hospital'
import CurrencyInrIcon from 'mdi-material-ui/CurrencyInr'
import MoreIcon from 'mdi-material-ui/MathCompass'

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'File Converters'
    },
    {
      title: 'File Converters',
      icon: CalculatorIcon,
      path: '/converters'
    },
    {
      title: 'Archive',
      icon: CalculatorIcon,
      path: '/archive'
    },
    {
      title: 'Audio',
      icon: CalculatorIcon,
      path: '/audio'
    },
    {
      title: 'CAD',
      icon: CalculatorIcon,
      path: '/cad'
    },
    {
      title: 'Document',
      icon: CalculatorIcon,
      path: '/document'
    },
    {
      title: 'EBook',
      icon: CalculatorIcon,
      path: '/ebook'
    },
    {
      title: 'Image',
      icon: CalculatorIcon,
      path: '/image'
    },
    {
      title: 'Misc',
      icon: CalculatorIcon,
      path: '/misc'
    },
    {
      title: 'Presentations',
      icon: CalculatorIcon,
      path: '/presentations'
    },
    {
      title: 'Spreadsheet',
      icon: CalculatorIcon,
      path: '/spreadsheet'
    },
    {
      title: 'Vector',
      icon: CalculatorIcon,
      path: '/vector'
    },
    {
      title: 'Video',
      icon: CalculatorIcon,
      path: '/video'
    },
  ]
}

export default navigation
