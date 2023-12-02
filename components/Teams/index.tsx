"use client";

import SectionHeader from "../Common/SectionHeader";
import { TeamData } from "./teamData";
import SingleTeam from "./singleTeam";

const Teams = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-primary">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `TEAM MEMBER`,
                subtitle: `Meet Our Instructor`,
                classname:"text-white"
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-center gap-7.5 xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            {TeamData.map((item,index) => (
              <SingleTeam data={item} key={index} />
            ))}
            

          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Teams;
