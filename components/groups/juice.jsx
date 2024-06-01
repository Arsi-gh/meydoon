import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LuGlassWater } from 'react-icons/lu'
import { useRefs } from '@/context/refProvider'

export default function Juice() {
  
  const { juiceRef } = useRefs()

  return (
    <>
    <Title ref={juiceRef} text="نوشیدنی های طبیعی"> <LuGlassWater className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 6).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}