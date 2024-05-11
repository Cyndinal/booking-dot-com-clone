import Image from "next/image";
// import SearchForm from "@/components/SearchForm";
import React from "react";
import ProfileForm from "@/components/SearchForm";

export default function Home() {
  return (

    <main className={"bg-blue-800"}>
      <section  className=" max-w-7xl p-6 items-center mx-auto ">
        <h1 className={'text-2xl font-bold text-white lg:text-5xl'}>Find your Next <span className={"italic font-extra bold font-sans text-red-400"}>STAY</span></h1>
          <h2 className={"text-white mt-4"}>Search low prices on hotels , homes and more ....</h2>
      </section>

        <section>
            {/*<SearchForm />*/}
            <ProfileForm/>
        </section>

        <section className={'px-2 bg-white '}>
            <div className={"mt-12"}>
                <h2 className={"font-semibold pt-10"}>Trending Destinations</h2>
                <h6>Most popular choice from travellers from around the world</h6>
            </div>

            <div className={"items-center justify-center mx-auto sm:block md:flex"}>
                <div>
                    <Image className={"rounded-lg shadow-black object-cover" } src={'/images/img1.jpg'} alt={'image1'} width={400}
                           height={40}/>
                    <p className={"font-semibold"}>Dubai</p>
                    <p>United Arab Emirates</p>
                    <p>15 Deals</p>
                </div>

                <div>
                    <Image className={"rounded-lg shadow-black object-cover"} src={'/images/img2.jpg'} alt={'image1'} width={400}
                           height={40}/>
                    <p className={"font-semibold"}>Dollax Fort</p>
                    <p>Calgary. Alberta</p>
                    <p>30 Deals</p>

                </div>

                <div>
                    <Image className={"rounded-lg shadow-black object-cover"} src={'/images/img3.jpg'} alt={'image1'} width={400}
                           height={40}/>
                    <p className={"font-semibold"}>St. Maxins</p>
                    <p>Ontario</p>
                    <p>18 Deals</p>

                </div>
                <div>
                    <Image className={"rounded-lg shadow-black object-cover"} src={'/images/img4.jpg'} alt={'image1'} width={400}
                           height={40}/>
                    <p className={"font-semibold"}>Monico Jevel</p>
                    <p>United States of America</p>
                    <p>30 Deals</p>

                </div>
                <div>
                    <Image className={"rounded-lg shadow-black object-cover"} src={'/images/img5.jpg'} alt={'image1'} width={400}
                           height={40}/>
                    <p className={"font-semibold"}>St. Monique Hotel</p>
                    <p>France</p>
                    <p>14 Deals</p>
                </div>
            </div>
        </section>
    </main>

  );
}
