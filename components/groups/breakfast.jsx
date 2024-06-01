import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { LuEggFried } from 'react-icons/lu'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { useRefs } from '@/context/refProvider'

export default function Breakfast() {

  const { breakfastRef } = useRefs()

  return (
    <>
    <Title ref={breakfastRef} text="صبـحـانـه"> <LuEggFried className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 8).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}
