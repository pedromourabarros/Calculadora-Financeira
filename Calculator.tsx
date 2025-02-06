import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Calculator = () => {
  const [investment, setInvestment] = useState<number>(1000);
  const [rate, setRate] = useState<number>(5);
  const [years, setYears] = useState<number>(1);
  const [result, setResult] = useState<number | null>(null);
  const { t } = useLanguage();

  const calculateReturn = () => {
    const finalAmount = investment * Math.pow(1 + rate / 100, years);
    setResult(finalAmount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Home
        </Link>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Calculadora de Juros Compostos
          </h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Investimento Inicial (R$)
              </label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full p-2 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Taxa de Juros Anual (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-2 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Período (anos)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full p-2 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                min="1"
              />
            </div>

            <button
              onClick={calculateReturn}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Calcular
            </button>

            {result !== null && (
              <div className="mt-6 p-6 bg-white/5 rounded-lg border border-gray-600">
                <h2 className="text-xl font-semibold mb-4 text-blue-400">Resultado:</h2>
                <div className="space-y-3">
                  <p className="text-lg flex justify-between">
                    <span className="text-gray-300">Valor Final:</span>
                    <span className="font-semibold text-blue-400">R$ {result.toFixed(2)}</span>
                  </p>
                  <p className="text-lg flex justify-between">
                    <span className="text-gray-300">Investimento Inicial:</span>
                    <span className="font-semibold text-blue-400">R$ {investment.toFixed(2)}</span>
                  </p>
                  <p className="text-lg flex justify-between">
                    <span className="text-gray-300">Rendimento:</span>
                    <span className="font-semibold text-blue-400">R$ {(result - investment).toFixed(2)}</span>
                  </p>
                  <p className="text-lg flex justify-between">
                    <span className="text-gray-300">Rendimento Percentual:</span>
                    <span className="font-semibold text-blue-400">
                      {(((result - investment) / investment) * 100).toFixed(2)}%
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
