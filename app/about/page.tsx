// app/about/page.jsx
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutPage() {
  const timelineData = [
    { year: "2018", title:"The humble begining", text: "Subsistence crop farming begins in Bweyale, Kiryandongo District, Uganda - planting the seeds of a bigger vision.", left:true},
    { year: "2019", title:"Golden Basket Ltd is Born", text: "Officially registered as a company, we expanded into poultry farming in Gayaza, Wakiso district, raising layers and broilers." , left:false},
    { year: "2020", title:"Challenge & Resilience", text: "Faced with COVID-19 disruptions and rising feed costs, we paused poultry farming and began researching more sustainable alternatives.", left:true },
    { year: "2021", title:"Innovation through Fish Farming", text: "We launched our flagship catfish production project in Wakiso District, focusing on quality, consistency, and market needs." , left:false},
    { year: "2022", title:"Growth & Vision", text: "Steadily growing our operations, team, and impact — with plans for value addition, crop farming, and export readiness in the near future." , left:true},
    { year: "2023", title:"Won a seed funding from NSSF", text: "Won a seed funding from NSSF Hi Innovators Program and successfully constructed 6 concrete tanks equiped with a solar water pump system, maximizing fish production capacity", left:false }
  ];

  return (
    <main className="bg-[#F5F1E8]">
      {/* Hero Section */}
      <section className="bg-dark-green text-white px-6 lg:px-16 py-16 relative overflow-hidden">
        {/* Pattern background covering the whole hero section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/Images/patterns/about_hero_pattern.png"
            alt="Catfish"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content on top of the pattern */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 relative z-10">
          <div className="flex-1">
            <h1 className="text-[#F6B81A] text-4xl lg:text-5xl font-bold mb-4">About Golden Basket Ltd</h1>
            <p className="text-white text-xl font-medium">
              Transforming livelihoods through sustainable agribusiness.
            </p>
          </div>
          {/* Overlapping Images */}
          <div className="relative flex-1 h-72 md:h-96">
            <Image
              src="/Images/DFCU_pic.jpg"
              alt="Hero 1"
              width={300}
              height={300}
              className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-lg transform rotate-[-3deg] z-20"
            />
            <Image
              src="/Images/Ame.jpg"
              alt="Hero 2"
              width={300}
              height={300}
              className="absolute top-12 left-24 w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-lg transform rotate-[3deg] z-10"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div>
            <div className="relative h-64 mb-6">
              <Image
                src="/Images/vision_1.png"
                alt="Vision"
                width={250}
                height={250}
                className="absolute top-0 left-0 w-48 h-48 object-cover rounded-xl shadow-lg z-20"
              />
              <Image
                src="/Images/vision_2.png"
                alt="Vision 2"
                width={250}
                height={250}
                className="absolute top-10 left-20 w-48 h-48 object-cover rounded-xl shadow-lg z-10"
              />
            </div>
            <h2 className="text-[#204E36] text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-[#333333]">
              To be the prime choice provider of superior high-quality goods and services in the
              agribusiness value chain, fostering livelihoods, and contributing to economic growth
              in Africa while remaining a key driver of sustainable success.
            </p>
          </div>

          {/* Mission */}
          <div>
            <div className="relative h-64 mb-6">
              <Image
                src="/Images/mission_2.png"
                alt="Mission"
                width={250}
                height={250}
                className="absolute top-0 left-0 w-48 h-48 object-cover rounded-xl shadow-lg z-20"
              />
              <Image
                src="/Images/mission_1.png"
                alt="Mission 2"
                width={250}
                height={250}
                className="absolute top-10 left-20 w-48 h-48 object-cover rounded-xl shadow-lg z-10"
              />
            </div>
            <h2 className="text-[#204E36] text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-[#333333]">
              To provide customers with a choice of diverse, high-quality goods and services
              delivered through sustainable, responsible, and innovative practices in the
              agribusiness industry.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light-gold-tint px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* CEO Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-xl shadow-lg border-4 border-[#F6B81A]">
            <Image
              src="/Images/Likia.jpeg" // replace with actual CEO image path
              alt="CEO of Golden Basket"
              width={500}
              height={500}
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* CEO Speech */}
        <div>
          <h2 className="text-dark-green text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
          <div className="relative bg-white border-l-4 border-gold p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-gold text-4xl absolute -top-4 -left-4" />
            <p className="text-[#333333] text-lg leading-relaxed">
              Golden Basket Ltd, founded in 2019 in Bweyale, Uganda, is committed to transforming lives through sustainable agriculture. Starting with subsistence farming, we expanded into poultry, and later, in response to COVID-19 challenges, launched a flagship catfish farming project in 2021 to provide affordable, high-quality protein.
Today, we focus on fresh catfish production while preparing for future ventures in value addition, crop farming, and agribusiness export. Our vision is the Smart Farm Agri-Empowerment Centre — a hub for production, agro-processing, trading, e-commerce, and community training.
With a passionate team and a clear purpose, Golden Basket is becoming a trusted name in Uganda’s agricultural sector, empowering households, creating jobs, and building a more resilient future.
            </p>
            <p className="text-[#204E36] font-semibold mt-6">
              — Frances Philippa Eluzai, CEO & Founder
            </p>
          </div>
        </div>

      </div>
    </section>

      {/* Timeline */}
      <section className="py-16 px-6 lg:px-16 bg-[#204E36] text-white">
        <div className="max-w-4xl mx-auto relative timeline">
         {timelineData.map((timeline)=>(
          <div key={timeline.title}  className={`container ${timeline.left? 'left': 'right'}`}>
          <div className="content">
            <h2 className="text-gold text-center font-bold">{timeline.year}</h2>
            <h4 className="text-light-gold-tint text-center font-medium">{timeline.title}</h4>
            <p className="text-center">{timeline.text}</p>
          </div>
        </div>

         ))}

        </div>
      </section>
    </main>
  );
}
