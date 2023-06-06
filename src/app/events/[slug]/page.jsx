"use client";
import React from "react";
import { useRouter , useSearchParams } from "next/navigation";

const Event = ({ params }) => {
  const router = useSearchParams();

  const event = router?.query;
  // console.log(router);
  console.log(router.values());

  return <div>Event</div>;
};

export default Event;
