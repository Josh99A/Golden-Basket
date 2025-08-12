// app/about/page.jsx
import Image from "next/image";

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
                src="/images/vision1.jpg"
                alt="Vision"
                width={250}
                height={250}
                className="absolute top-0 left-0 w-48 h-48 object-cover rounded-xl shadow-lg z-20"
              />
              <Image
                src="/images/vision2.jpg"
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
                src="/images/mission1.jpg"
                alt="Mission"
                width={250}
                height={250}
                className="absolute top-0 left-0 w-48 h-48 object-cover rounded-xl shadow-lg z-20"
              />
              <Image
                src="/images/mission2.jpg"
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
