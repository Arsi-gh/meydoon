import Card from "@/components/menu/card";
import Categories from "@/components/menu/categories";
import Title from "@/components/menu/title";

export default function Home() {
  return (
    <>
      <Categories />
      <Title />
      <section className="mb-12 2xl:max-w-screen-2xl max-w-screen-xl mx-auto sm:flex sm:gap-6 sm:justify-center sm:flex-wrap grid grid-cols-2">
        <Card name="صبحانه انگلیسی" price={60} />
        <Card name="صبحانه فرانسوی" price={50} />
        <Card name="نان پنیر سبزی" price={30} />
        <Card name="صبحانه ایرلندی" price={30} />
        <Card name="صبحانه ایرلندی" price={30} />
        <Card name="صبحانه ایرلندی" price={30} />
        <Card name="صبحانه ایرانی" price={30} />
        <Card name="صبحانه ایرانی" price={30} />
      </section>
    </>
  );
}
