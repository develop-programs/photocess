import React from "react";
import Payout from "../(component)/Payout";

export default async function page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const type = (await params).slug;
  return <Payout data={type} />;
}
