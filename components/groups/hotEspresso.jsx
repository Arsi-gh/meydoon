import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { BiCoffeeTogo } from 'react-icons/bi'
import { useRefs } from '@/context/refProvider'

export default function HotEspresoo() {

  const { hotEspressoRef } = useRefs()

  return (
    <>
    <Title ref={hotEspressoRef} text="نوشیدنی های گرم بر پایه قهوه"> <BiCoffeeTogo className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 0).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}