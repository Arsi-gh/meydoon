import Appetizer from "@/components/groups/appetizer";
import Breakfast from "@/components/groups/breakfast";
import Burger from "@/components/groups/burger";
import ColdDrink from "@/components/groups/coldDrink";
import ColdEspresso from "@/components/groups/coldEspresso";
import Desert from "@/components/groups/desert";
import Grill from "@/components/groups/grill";
import HotDrink from "@/components/groups/hotDrink";
import HotEspresoo from "@/components/groups/hotEspresso";
import Juice from "@/components/groups/juice";
import Pasta from "@/components/groups/pasta";
import Salad from "@/components/groups/salad";
import Shake from "@/components/groups/shake";
import Sharbat from "@/components/groups/sharbat";
import Tea from "@/components/groups/tea";
import Categories from "@/components/menu/categories";

export default function Home() {
  return (
    <>
      <Categories />
      <p className="sm:text-xl text-primary-500 mt-4 w-fit mx-auto max-sm:px-2 text-center">به کلیه مبالغ فوق ۹ درصد مالیات بر ارزش افزوده اضافه میگردد</p>
      <HotEspresoo/>
      <HotDrink/>
      <ColdEspresso/>
      <Tea/>
      <ColdDrink/>
      <Shake/>
      <Juice/>
      <Sharbat/>
      <Breakfast/>
      <Appetizer/>
      <Salad/>
      <Grill/>
      <Pasta/>
      <Burger/>
      <Desert/>
    </>
  );
}
