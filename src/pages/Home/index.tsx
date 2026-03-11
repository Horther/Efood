import Plate from '../../models'

import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import macarrao from '../../assets/images/macarrão.svg'
// import pizza from '../../assets/images/pizza.svg'
import sushi from '../../assets/images/sushi.svg'

const cardapio: Plate[] = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: sushi,
    rank: 4.3,
    title: 'Sushi',
    tag: ['Destaque da semana', 'Sushi']
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: macarrao,
    rank: 4.3,
    title: 'Macarronada',
    tag: ['Italiana']
  },
  {
    id: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: macarrao,
    rank: 4.3,
    title: 'Macarronada',
    tag: ['Italiana']
  },
  {
    id: 4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: macarrao,
    rank: 4.3,
    title: 'Macarronada',
    tag: ['Italiana']
  },
  {
    id: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: macarrao,
    rank: 4.3,
    title: 'Macarronada',
    tag: ['Italiana']
  },
  {
    id: 6,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: macarrao,
    rank: 4.3,
    title: 'Macarronada',
    tag: ['Italiana']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList plate={cardapio} />
  </>
)

export default Home
