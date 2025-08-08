
import Image from 'next/image';
import { team } from '../constants'


export default function Team() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {team.map((member, idx) => (
        <div key={idx} className="text-center">
          <Image src={member.image} alt={member.name} width={300} height={300} className="mx-auto rounded-lg" />
          <h4 className="mt-4 text-xl font-bold">{member.name}</h4>
          <p className="text-sm italic">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
