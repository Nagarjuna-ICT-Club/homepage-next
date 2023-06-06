import React from "react";
import Hero from "src/components/Hero";
// import Hero from "@/components/Hero";
import MeetTeam from "@/components/MeetOurTeam";
import FeaturedEvents from "@/components/FeaturedEvent";
import Testimonials from "@/components/Testimonials";

const Main = () => {
  const featuredEvent = [
    {
      card_img:
        "https://ik.imagekit.io/hjapyoj8o/gitandgithub.jpg?updatedAt=1685432118947",
      card_title: "Workshop on Git and Github",
      date: "2 June 2023",
      description:
        "We look forward to your active participation in the Information Technology Quiz Competition. This is your chance to showcase your knowledge and compete with fellow students. For further updates and announcements, please stay connected ",
      navigationPath: "workshop-git-and-github",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfVIocBCdueHv8hm-weSlWsixriL6lln_ic4_y6hRQZ2-uKPQ/viewform",
    },
  ];
  return (
    <div>
      <Hero />
      {/* <MeetTeam /> */}
      <FeaturedEvents featuredEvent={featuredEvent} />
      <Testimonials />
    </div>
  );
};

export default Main;
