import { useState, useEffect } from 'react';
import { fetchProjects, Project } from '../lib/api';
import { Loader, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const projectData = await fetchProjects();
        setProjects(projectData);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-2 text-orange-400">My Work</h1>
      <p className="text-center text-gray-400 mb-12">A selection of projects that showcase my skills and passion for development.</p>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader className="animate-spin text-orange-500" size={48} />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 text-lg">{error}</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-400/20 transition-shadow duration-300 transform hover:-translate-y-1">
              <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-400 hover:text-orange-500 font-semibold transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
