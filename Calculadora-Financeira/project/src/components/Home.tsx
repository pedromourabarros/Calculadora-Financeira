import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Github } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0118] via-[#1A0B2E] to-[#0A0118] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Calculadora Financeira
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Calcule juros compostos, investimentos e planeje seu futuro financeiro
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <Calculator className="w-6 h-6 mr-2" />
              Começar a Calcular
            </Link>
            
            <a
              href="https://github.com/yourusername/financial-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-lg rounded-lg text-lg font-semibold hover:bg-white/20 transition duration-300 border border-white/20"
            >
              <Github className="w-6 h-6 mr-2" />
              Ver no GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Juros Compostos</h3>
            <p className="text-gray-300">
              Calcule o crescimento exponencial dos seus investimentos ao longo do tempo
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Investimentos</h3>
            <p className="text-gray-300">
              Planeje seus aportes mensais e veja o potencial de crescimento
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Análise Detalhada</h3>
            <p className="text-gray-300">
              Visualize resultados detalhados e tome decisões informadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;