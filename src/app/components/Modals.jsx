export const InfoModal = ({ show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold">Información del Sorteo</h2>
          <p className="mt-2">Fecha del sorteo: 25 de diciembre</p>
          <p className="mt-2">Premio: Un auto 0km</p>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
            ❌ Cerrar
          </button>
        </div>
      </div>
    );
  };
  
   
import { useState } from "react";

const VerifyModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: ingresar datos, 2: ingresar código
  const [inputValue, setInputValue] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>

        {/* Paso 1: Ingresar correo o número */}
        {step === 1 && (
          <>
            <h2 className="text-lg font-bold mb-4">Verifica tu identidad</h2>
            <input
              type="text"
              placeholder="Correo o número de teléfono"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Enviar código
            </button>
          </>
        )}

        {/* Paso 2: Ingresar código de verificación */}
        {step === 2 && (
          <>
            <h2 className="text-lg font-bold mb-4">Ingresa el código</h2>
            <input
              type="text"
              placeholder="Código de verificación"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <button
              onClick={() => alert("Código confirmado")}
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              Confirmar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyModal;
