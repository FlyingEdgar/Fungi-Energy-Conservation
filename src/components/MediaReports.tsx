import React from 'react';
import { Newspaper } from 'lucide-react';

interface MediaReport {
  title: string;
  source: string;
  date: string;
  summary: string;
  link: string;
}

const reports: MediaReport[] = [
  {
    title: "Global renewable energy growth set to accelerate in 2024",
    source: "Reuters",
    date: "March 15, 2024",
    summary: "The International Energy Agency (IEA) forecasts a significant increase in renewable energy capacity worldwide, driven by solar and wind power investments.",
    link: "https://www.reuters.com/business/energy/global-renewable-energy-growth-set-accelerate-2024-iea-2024-03-15/"
  },
  {
    title: "New study reveals potential of seaweed farming for carbon sequestration",
    source: "National Geographic",
    date: "March 12, 2024",
    summary: "Researchers have found that large-scale seaweed farming could significantly contribute to carbon dioxide removal from the atmosphere.",
    link: "https://www.nationalgeographic.com/environment/article/seaweed-farming-carbon-sequestration"
  },
  {
    title: "Major cities commit to zero-emission public transportation by 2030",
    source: "The Guardian",
    date: "March 10, 2024",
    summary: "A coalition of global cities has pledged to transition all public buses and taxis to zero-emission vehicles within the next six years.",
    link: "https://www.theguardian.com/environment/2024/mar/10/major-cities-zero-emission-public-transport-2030"
  }
];

const MediaReports: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Newspaper className="mr-2 text-blue-600" /> Latest Media Reports
      </h3>
      <div className="space-y-4">
        {reports.map((report, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
            <h4 className="font-semibold text-lg mb-1">{report.title}</h4>
            <p className="text-sm text-gray-600 mb-2">
              {report.source} - {report.date}
            </p>
            <p className="text-sm mb-2">{report.summary}</p>
            <a
              href={report.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Read full article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaReports;