import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOptions);

  console.log(singleJob);

  const firstFourJobs = JobData.slice(0, 4);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-12 w-[80%] mx-auto">
        <h1 className="text-[20px] font-semibold">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit
          sunt error commodi accusamus. Hic veritatis atque quas quod quasi
          repellat quos animi! Atque voluptas eum vel dolorem adipisci mollitia
          consequuntur, cumque accusamus incidunt quam libero eaque cum animi
          tempora eius eveniet at eos rem labore nam impedit enim! Sapiente.
        </p>
        <h1 className="text-[20px] font-semibold mt-8">Key Responsibilities</h1>
        <p className="mt-4 text-black text-opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit
          sunt error commodi accusamus. Hic veritatis atque quas quod quasi
          repellat quos animi! Atque voluptas eum vel dolorem adipisci mollitia
          consequuntur, cumque accusamus incidunt quam libero eaque cum animi
          tempora eius eveniet at eos rem labore nam impedit enim! Sapiente.
        </p>
        <h1 className="text-[20px] font-semibold mt-8">Skills</h1>
        <ul className="mt-4">
          <li className="mt-4 text-black text-opacity-70">React JS</li>
          <li className="mt-4 text-black text-opacity-70">Next JS</li>
          <li className="mt-4 text-black text-opacity-70">Tailwind CSS</li>
          <li className="mt-4 text-black text-opacity-70">TypeScript</li>
          <li className="mt-4 text-black text-opacity-70">Next Auth</li>
        </ul>
        <h1 className="text-[20px] font-semibold mt-8">Related Jobs</h1>
        <div className="mt-4">
          {firstFourJobs.map((job) => {
            return (
              <Link
                className="space-y-6"
                href={`/job/jobdetails/${job.id}`}
                key={job.id}
              >
                <JobCard job={job} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
