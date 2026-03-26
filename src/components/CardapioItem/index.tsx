import { Card, Descricao, Informacoes, Title } from './style'

import Button from '../Button'

export type Props = {
  title: string
  description: string
  image: string
}

const CardapioItem = ({ title, description, image }: Props) => (
  <Card>
    <img className="bgImage" src={image} alt={title} />
    <Informacoes>
      <div className="cabecalho">
        <Title>{title}</Title>
      </div>
      <div className="texto">
        <Descricao>{description}</Descricao>
      </div>
    </Informacoes>
    <Button type="button" title="Adicinar ao carrinho">
      Adicinar ao carrinho
    </Button>
  </Card>
)

export default CardapioItem
