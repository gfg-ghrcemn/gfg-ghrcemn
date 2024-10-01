import React from "react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, position, image, linkedin }) => {   

    return (
        <div className="min-w-[300px] max-w-xs  p-2 overflow-hidden shadow-lg bg-transparent border-green-500 border-2 rounded-lg shadow-green-400 mx-2">
        <img className="w-full h-[50%] object-cover rounded-lg border-2 border-green-400" src={image} alt={name} />
        <div className="px-6 py-4 h-[200px]">
          <div className="font-bold text-xl mb-2 text-green-400">{name}</div>
          <p className="text-white text-sm mb-4">{position}</p>
        </div>
        <div className="px-6 py-1 flex flex-row justify-center">
          <a href={linkedin} >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
          </a>
        </div>
        </div>

    );
    }
const TeamSection: React.FC = () => {
  // Team members data
  const teamMembers: TeamMember[] = [
  {
    "name": "Tanaya Pillewan",
    "position": "Chapter Lead",
    "image": "src/assets/team/tanaya.jpg",
    "linkedin": "https://www.linkedin.com/in/tanaya-pillewan-38370a256"
  },
  {
    "name": "Saloni Zade",
    "position": "Chair-person",
    "image": "src/assets/team/saloni.jpg",
    "linkedin": "https://www.linkedin.com/in/saloni-zade-7aa816257"
  },
  {
    "name": "Siddhanth Sakhare",
    "position": "PRO Coordinator",
    "image": "src/assets/team/siddhanth.jpg",
    "linkedin": "https://www.linkedin.com/in/siddhanth-kishor-sakhare-159653257/"
  },
  {
    "name": "Gagan Thakre",
    "position": "Social Media Head",
    "image": "src/assets/team/gagan.jpg",
    "linkedin": "https://www.linkedin.com/in/gagan-thakre-93a209258"
  },
  {
    "name": "Karan Yede",
    "position": "Designing/Branding Head",
    "image": "src/assets/team/karan.jpg",
    "linkedin": "https://www.linkedin.com/in/karanyede"
  },
  {
    "name": "Sanskruti Uge",
    "position": "Marketing Head Coordinator",
    "image": "src/assets/team/sanskruti.jpg",
    "linkedin": "https://www.linkedin.com/in/sanskruti-uge-3883ba290/"
  },
  {
    "name": "Vaishnavi Agrawal",
    "position": "Vice-Chair Person",
    "image": "src/assets/team/vaishnavi.jpg",
    "linkedin": "https://www.linkedin.com/in/vaishnavi-agrawal-2a419a25a"
  },
  {
    "name": "Kartikey Bisen",
    "position": "Marketing Head",
    "image": "src/assets/team/kartikey.jpg",
    "linkedin": "https://www.linkedin.com/in/kartikey-bisen-97b306305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Jilani Sheikh",
    "position": "Event Head Coordinator",
    "image": "src/assets/team/jilani.jpg",
    "linkedin": "https://www.linkedin.com/in/jilani-sheikh-79b094305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Karan Baghele",
    "position": "Designing/Branding Head",
    "image": "src/assets/team/karanbaghele.jpg",
    "linkedin": "https://www.linkedin.com/in/thekaranbaghele"
  },
  {
    "name": "Riddhi Sharma",
    "position": "Event Head",
    "image": "src/assets/team/riddhi.jpg",
    "linkedin": "https://www.linkedin.com/in/riddhi-sharma-25b7b9279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Vaibhav Talkhande",
    "position": "Technical Head",
    "image": "src/assets/team/vaibhav.jpg",
    "linkedin": "https://www.linkedin.com/in/vaibhavtalkhande/"
  },
  {
    "name": "Karan Soni",
    "position": "Social Media Head",
    "image": "src/assets/team/karansoni.jpg",
    "linkedin": "https://www.linkedin.com/in/karan-soni-197423318"
  },
  {
    "name": "Avinash Madnani",
    "position": "Technical Head Coordinator",
    "image": "src/assets/team/avinash.jpg",
    "linkedin": "https://www.linkedin.com/in/avinash-madnani-37a01b20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Kanishq Birole",
    "position": "Mentor",
    "image": "src/assets/team/kanishq.jpg",
    "linkedin": "https://www.linkedin.com/in/kanishqbirole?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
]


  return (
    <div className="bg-inherit text-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400">Meet Our Team</h1>
          <p className="text-gray-300 mt-4">Our diverse and passionate team is here to build the future.</p>
        </div>

        {/* Carousel Section */}
        <div className="overflow-x-auto flex space-x-6 px-4 no-scrollbar">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
