"use client";
import React from "react";
import { usePath } from "@/hooks/use-nav";
import { LogoSmall } from "@/svgs/logo-small";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthSate from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "./upgrade";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();
  return (
    <div className="w-[250px] border border-[#545454] fixed left-0 lg:inline-block bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-blur-3xl">
        {/* Logo Container */}
        <div className="flex justify-center p-5">
          <LogoSmall />
        </div>
        {/* Menu Items Container */}
        <div className="flex-1 flex flex-col px-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator 
            orientation="horizontal"
            className="bg-[#333336]"
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthSate />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <div >
          <SubscriptionPlan type="Free">
            <div className="flex-1 flex flex-col justify-end">
              <UpgradeCard />
            </div>
          </SubscriptionPlan>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;