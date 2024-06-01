import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuCupSoda } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function ColdEspresso() {

  const { coldEspressoRef } = useRefs()

  return (
    <>
    <Title ref={coldEspressoRef} text="نوشیدنی های سرد بر پایه قهوه"> <LuCupSoda className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 2).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}