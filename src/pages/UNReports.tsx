import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface Report {
  title: string;
  description: string;
  link: string;
  date: string;
  image: string;
}

const reports: Report[] = [
  {
    title: "World Energy Transitions Outlook 2023",
    description: "This report from IRENA provides an outlook for the energy transition to 2050, focusing on the actions needed to achieve climate goals.",
    link: "https://www.irena.org/publications/2023/Mar/World-Energy-Transitions-Outlook-2023",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Global Sustainable Development Report 2023",
    description: "This report provides guidance on the state of global sustainable development from a scientific perspective, addressing transformations needed to achieve the SDGs.",
    link: "https://sdgs.un.org/gsdr",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1535090467336-9501f96eef89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "World Water Development Report 2023",
    description: "UNESCO's report focuses on the challenges and opportunities for accelerating change towards sustainable and resilient water management.",
    link: "https://www.unesco.org/reports/wwdr/2023/en",
    date: "March 2023",
    image: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Global Environment Outlook 6",
    description: "UNEP's comprehensive assessment of the state of the global environment, providing analysis and solutions for decision makers.",
    link: "https://www.unep.org/resources/global-environment-outlook-6",
    date: "2019 (Latest comprehensive report)",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Renewable Energy Statistics 2023",
    description: "IRENA's comprehensive statistics on renewable energy capacity and use worldwide, essential for tracking progress towards sustainable energy goals.",
    link: "https://www.irena.org/Publications/2023/Jul/Renewable-Energy-Statistics-2023",
    date: "July 2023",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Global Biodiversity Outlook 5",
    description: "An assessment of progress towards the Aichi Biodiversity Targets and implications for the post-2020 global biodiversity framework.",
    link: "https://www.cbd.int/gbo5",
    date: "September 2020",
    image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const UNReports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="United Nations Reports"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center">United Nations Reports on Energy and Environment</h2>
        </div>
      </div>
      <p className="text-lg mb-6">
        Stay informed with the latest United Nations reports on energy conservation, climate change, and environmental sustainability.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={report.image} alt={report.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FileText className="mr-2 text-green-600" size={24} />
                {report.title}
              </h3>
              <p className="text-gray-600 mb-2">{report.date}</p>
              <p className="mb-4">{report.description}</p>
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                Read Report <ExternalLink size={18} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UNReports;