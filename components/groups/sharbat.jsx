import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { BsCupStraw } from 'react-icons/bs'
import { useRefs } from '@/context/refProvider'

export default function Sharbat() {

  const { sharbatRef } = useRefs()

  return (
    <>
    <Title ref={sharbatRef} text="نوشیدنی و شربت های دست ساز"> <BsCupStraw className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 7).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}