import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageURL } = useCatImage({ fact: 'cat' })
  return (<>{imageURL && <img src={`${imageURL}`} />}</>)
}
