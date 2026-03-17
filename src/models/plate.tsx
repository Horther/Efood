class Plate {
  id: number
  description: string
  image: string
  rank: number
  title: string
  tag: string[]

  constructor(
    id: number,
    description: string,
    image: string,
    rank: number,
    title: string,
    tag: string[]
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.rank = rank
    this.title = title
    this.tag = tag
  }
}

export default Plate
