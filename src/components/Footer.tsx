import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-600 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Fungi Project. All rights reserved.</p>
        <a
          href="https://github.com/your-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-green-200 transition-colors"
        >
          <Github className="mr-2" /> View on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;