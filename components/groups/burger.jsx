import React from 'react'
import CardWrapper from '../menu/cardWrapper'
import Title from '../menu/title'
import { cafeItems } from '@/data/datas'
import Card from '../menu/card'
import { LiaHamburgerSolid } from 'react-icons/lia'
import { useRefs } from '@/context/refProvider'

export default function Burger() {

  const { burgerRef } = useRefs()

  return (
    <>
    <Title ref={burgerRef} text="ساندویچ و برگر"> <LiaHamburgerSolid className="title-icon"/></Title>
    <CardWrapper>
      {cafeItems.filter(item => item.category === 12).map(item => <Card key={item.id} item={item}/>)}
    </CardWrapper>
    </>
  )
}