"use client";
import { useState } from "react";
import { InfoModal } from "./components/Modals"; // Asegúrate de que este archivo existe
import VerifyModal from "./components/Modals"; // Asegúrate de que este archivo existe

const LandingPage = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const [ticketCount, setTicketCount] = useState(5);
  const ticketPrice = 10;
  const totalPrice = ticketCount * ticketPrice;

  const totalTickets = 9999;
  const soldTickets = 400;
  const progress = (soldTickets / totalTickets) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Título alineado a la izquierda */}
      <h1 className="text-4xl font-bold w-full text-left mb-4">🎉 ¡Gran Sorteo!</h1>

      {/* Subtítulo y descripción */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">¡Gana un increíble premio!</h2>
        <p className="text-gray-600 mt-2">Compra tus boletos y participa en este sorteo exclusivo.</p>
      </div>

      {/* Imagen del premio */}
      <img src="/premio.jpg" alt="Premio del sorteo" className="w-96 mt-6 rounded-lg shadow-lg" />

      {/* Botón de información */}
      <button
        onClick={() => setShowInfoModal(true)}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        ℹ️ Información del sorteo
      </button>

      {/* Barra de progreso */}
      <div className="w-full max-w-md bg-gray-300 rounded-full h-6 mt-4 overflow-hidden">
        <div className="bg-green-500 h-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-gray-700 mt-2">{soldTickets} de {totalTickets} boletos vendidos</p>

      {/* Botón para verificar boletos */}
      <button
        onClick={() => setShowVerifyModal(true)}
        className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
      >
        🔍 Verificar mis boletos
      </button>

      {/* Opciones de boletos */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[5, 20, 30].map((num) => (
          <div key={num} className="text-center border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">X{num}</h3>
            <p className="text-gray-700">${num * ticketPrice}</p>
          </div>
        ))}
      </div>
      
      <InfoModal show={showInfoModal} onClose={() => setShowInfoModal(false)} />
      <VerifyModal isOpen={showVerifyModal} onClose={() => setShowVerifyModal(false)} />

      {/* Botones para sumar y restar */}
      <div className="flex items-center mt-4">
        <button
          onClick={() => setTicketCount((prev) => Math.max(5, prev - 5))}
          className="px-4 py-2 bg-red-500 text-white rounded-l-lg"
        >
          ➖
        </button>
        <p className="px-6 py-2 bg-white border">{ticketCount} boletos</p>
        <button
          onClick={() => setTicketCount((prev) => Math.min(500, prev + 5))}
          className="px-4 py-2 bg-green-500 text-white rounded-r-lg"
        >
          ➕
        </button>
      </div>

      {/* Precio total y botón de compra */}
      <p className="text-xl font-semibold mt-4">Total: ${totalPrice}</p>
      <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
        🛒 Comprar Ahora
      </button>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>📧 contacto@tusorteo.com | 📞 +123 456 789</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="text-blue-500">📘 Facebook</a>
          <a href="#" className="text-pink-500">📷 Instagram</a>
        </div>
      </footer>

      {/* Modal de información */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold">Información del Sorteo</h2>
            <p className="mt-2">Fecha del sorteo: 25 de diciembre</p>
            <p className="mt-2">Premio: Un auto 0km</p>
            <button
              onClick={() => setShowInfoModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              ❌ Cerrar
            </button>
          </div>
        </div>
      )} 
      
      
      {/* Modal de verificación de boletos */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold">Verificar mis boletos</h2>
            <input
              type="text"
              placeholder="Correo o número de teléfono"
              className="mt-2 p-2 border rounded w-full"
            />
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
              🔍 Verificar
            </button>
            <button
              onClick={() => setShowVerifyModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              ❌ Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
