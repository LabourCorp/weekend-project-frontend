import JobCard from '@/components/JobCard'
import React from 'react'

const architect = () => {
    const job = [
        {
            title: "Construction Worker",
            description: "We need experienced construction workers for a large commercial project.",
            location: "viman nagar, pune",
            payRate: "205",
            jobId: "123",
            badge: ['Full-Time', 'Urgent', 'Construction'],
        },
        {
            title: "Construction Worker 2",
            description: "We need experienced construction workers for a large commercial project.",
            location: "viman nagar, pune",
            payRate: "205",
            jobId: "1234",
            badge: ['Full-Time', 'Urgent'],
        },
        {
            title: "Construction Worker 3",
            description: "We need experienced construction workers for a large commercial project.",
            location: "viman nagar, pune",
            payRate: "205",
            jobId: "12345",
            badge: ['Full-Time']
        },
    ];
    return (
        <div>
            {
                job.map((j, jobid) => {
                    return (
                        <div className="bg-gray-50 py-8 mx-2" key={jobid}>
                            <JobCard
                                title={j.title}
                                description={j.description}
                                location={j.location}
                                payRate={j.payRate}
                                jobId={j.jobId}
                                badges={j.badge}
                            />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default architect