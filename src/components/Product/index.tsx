import { Card, Descricao, Destaque, Informacoes, Rank, Title } from './style'

import Tag from '../Tag'
import Button from '../Button'
import estrela from '../../assets/images/star_favorite.svg'

export type Props = {
  title: string
  rank: number
  description: string
  image: string
  bgColor: 'ver' | 'cre'
  tag: string[]
}

const Product = ({ title, rank, description, image, bgColor, tag }: Props) => (
  <Card backgroundColor={bgColor}>
    <img className="bgImage" src={image} alt={title} />
    <Destaque>
      {tag.map((destacado) => (
        <Tag key={destacado}>{destacado}</Tag>
      ))}
    </Destaque>
    <Informacoes>
      <div className="cabecalho">
        <Title>{title}</Title>
        <Rank>
          {rank}{' '}
          <span>
            <img src={estrela} alt="Nota" />
          </span>
        </Rank>
      </div>
      <div className="texto">
        <Descricao>{description}</Descricao>
        <Button type="link" to="#" title="Saiba mais">
          Saiba mais
        </Button>
      </div>
    </Informacoes>
  </Card>
)

export default Product
