import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Card from '../../components/Cardapio'
import CItem from '../../models/cItem'
import pizza from '../../assets/images/pizza.svg'

const cardapio: CItem[] = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: pizza,
    title: 'Pizza de Marguerita'
  },
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: pizza,
    title: 'Pizza de Marguerita'
  },
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: pizza,
    title: 'Pizza de Marguerita'
  },
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: pizza,
    title: 'Pizza de Marguerita'
  },
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: pizza,
    title: 'Pizza de Marguerita'
  },
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam modi eum tenetur odit quos nemo repudiandae illum nesciunt ea optio aperiam praesentium, quaerat soluta necessitatibus distinctio vitae deserunt quasi?',
    image: pizza,
    title: 'Pizza de Marguerita'
  }
]

const Cardapio = () => (
  <>
    <Banner />
    <Card cItem={cardapio} />
    <Footer />
  </>
)

export default Cardapio
