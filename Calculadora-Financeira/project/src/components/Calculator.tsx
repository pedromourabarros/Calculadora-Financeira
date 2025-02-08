import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator as CalcIcon, TrendingUp, DollarSign } from 'lucide-react';

const Calculator = () => {
  const [investment, setInvestment] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [rate, setRate] = useState<number>(5);
  const [years, setYears] = useState<number>(1);
  const [result, setResult] = useState<any>(null);

  const calculateReturn = () => {
    let totalInvestment = investment;
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    
    let futureValue = investment;
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + monthlyContribution) * (1 + monthlyRate);
      totalInvestment += monthlyContribution;
    }

    setResult({
      futureValue,
      totalInvestment,
      totalInterest: futureValue - totalInvestment,
      percentageGain: ((futureValue - totalInvestment) / totalInvestment) * 100
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0118] text-white pt-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#1A0B2E] to-[#0A0118]" />
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: i % 2 ? '#4F46E5' : '#9333EA',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Home
        </Link>
        
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <CalcIcon className="h-8 w-8 mr-3 text-blue-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Calculadora de Investimentos
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Investimento Inicial (R$)
              </label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full p-3 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Aporte Mensal (R$)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full p-3 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
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
                className="w-full p-3 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
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
                className="w-full p-3 bg-white/10 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                min="1"
              />
            </div>
          </div>

          <button
            onClick={calculateReturn}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 font-semibold text-lg"
          >
            Calcular Investimento
          </button>

          {result && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-5 w-5 text-blue-400 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-400">Valor Final</h3>
                  </div>
                  <p className="text-2xl font-bold">R$ {result.futureValue.toFixed(2)}</p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-5 w-5 text-purple-400 mr-2" />
                    <h3 className="text-lg font-semibold text-purple-400">Total Investido</h3>
                  </div>
                  <p className="text-2xl font-bold">R$ {result.totalInvestment.toFixed(2)}</p>
                </div>

                <div className="bg-white/5 p-6 rounded-lg border border-gray-600">
                  <div className="flex items-center mb-4">
                    <CalcIcon className="h-5 w-5 text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold text-green-400">Juros Ganhos</h3>
                  </div>
                  <p className="text-2xl font-bold">R$ {result.totalInterest.toFixed(2)}</p>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-gray-600">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Resumo do Investimento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Investimento Inicial:</span>
                    <span className="font-semibold">R$ {investment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Aporte Mensal:</span>
                    <span className="font-semibold">R$ {monthlyContribution.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Taxa de Juros Anual:</span>
                    <span className="font-semibold">{rate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Período:</span>
                    <span className="font-semibold">{years} anos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Rendimento Percentual:</span>
                    <span className="font-semibold text-green-400">
                      {result.percentageGain.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;